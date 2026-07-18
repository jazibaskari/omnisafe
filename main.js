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

async function applyOverlay(imageName) {
  await app.evalScript(`importAndApplyOverlay("${imageName}")`);
}

document
  .getElementById("tiktokBtn")
  .addEventListener("click", () => applyOverlay("tiktok.png"));
document
  .getElementById("ytBtn")
  .addEventListener("click", () => applyOverlay("youtube.png"));
document
  .getElementById("instaBtn")
  .addEventListener("click", () => applyOverlay("instagram.png"));
