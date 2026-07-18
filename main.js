document.getElementById("drawBtn").addEventListener("click", async () => {
  const captionHeight = document.getElementById("captionSlider").value;
  const deviceRatio = document.getElementById("deviceSelect").value;
  const platform = "tiktok";

  const script = `drawSafeZone("${platform}", ${captionHeight}, ${deviceRatio})`;
  await app.evalScript(script);
});

document
  .getElementById("generateReviewBtn")
  .addEventListener("click", async () => {
    await app.evalScript("generateReviewWorkspaces()");
  });

document.getElementById("checkBtn").addEventListener("click", async () => {
  const platform = document.getElementById("deviceSelect").value;
  const script = `checkSafetyCompliance("${platform}")`;

  await app.evalScript(script);
});
