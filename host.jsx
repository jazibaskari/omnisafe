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
