function drawSafeZone(platform, captionHeight, deviceRatio) {
  var offset = parseInt(captionHeight);
  var ratio = parseFloat(deviceRatio);
  var baseBottomMargin = 300;
  var finalBottomMargin = baseBottomMargin + offset;

  alert(
    "Platform: " +
      platform +
      "\nCaption Offset: " +
      offset +
      "px" +
      "\nDevice Ratio: " +
      ratio +
      "\nCalculated Bottom Margin: " +
      finalBottomMargin +
      "px"
  );

  return "Success";
}

function generateReviewWorkspaces() {
  var masterSeq = app.project.activeSequence;

  if (!masterSeq) {
    alert("Please select a sequence first.");
    return;
  }

  var platforms = ["TikTok", "Pinterest", "Snapchat"];

  for (var i = 0; i < platforms.length; i++) {
    var newSeq = app.project.addSequence(platforms[i]);
    newSeq.videoTracks[0].insertSequence(masterSeq, 0);
  }

  alert("Workspaces generated for: " + platforms.join(", "));
}

function checkSafetyCompliance(platform) {
  var seq = app.project.activeSequence;
  var track = seq.videoTracks[0];
  var clips = track.clips;

  var dangerZoneY = 1920 - 300;
  var violations = [];

  for (var i = 0; i < clips.numItems; i++) {
    var clip = clips[i];
    var motion = clip.components[0].properties["Position"];
    var posY = motion.getValue()[1];

    if (posY > dangerZoneY) {
      violations.push(
        clip.name + " (at " + clip.start.seconds.toFixed(2) + "s)"
      );
    }
  }

  if (violations.length > 0) {
    alert(
      "⚠️ WARNING: " +
        violations.length +
        " clip(s) are in the Danger Zone:\n\n" +
        violations.join("\n")
    );
  } else {
    alert("✅ All clips are within the safe zone!");
  }
}

function importAndApplyOverlay(imageName) {
  var pluginPath = $.fileName;
  var baseFolder = pluginPath.substring(0, pluginPath.lastIndexOf("/"));
  var fullImagePath = baseFolder + "/assets/" + imageName;

  app.project.importFiles([fullImagePath]);

  var projectItems = app.project.rootItem.children;
  var overlayClip = projectItems[projectItems.numItems - 1];

  var seq = app.project.activeSequence;
  var track = seq.videoTracks[0];
  track.insertClip(overlayClip, seq.end);

  alert("Overlay applied successfully!");
}
