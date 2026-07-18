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
