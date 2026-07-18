document.getElementById("drawBtn").addEventListener("click", async () => {
  const captionHeight = document.getElementById("captionSlider").value;
  const deviceRatio = document.getElementById("deviceSelect").value;
  const platform = "tiktok";

  const script = `drawSafeZone("${platform}", ${captionHeight}, ${deviceRatio})`;

  await app.evalScript(script);
});
