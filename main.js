const { app } = require("uxp").host;

document.getElementById("drawBtn").addEventListener("click", async () => {
  await app.evalScript("drawSafeZone('tiktok')");
});
