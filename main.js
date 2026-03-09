const STORES = {
  blink: "https://chromewebstore.google.com/TODO", // Chrome Web Store
  edge: "https://microsoftedge.microsoft.com/TODO", // Microsoft Edge Add-ons
  gecko: "https://addons.mozilla.org/TODO", // Firefox Add-ons
};

const GITHUB_URL = "https://github.com/cmd-find/webkit";

function detectEngine() {
  const ua = navigator.userAgent;
  if (typeof InstallTrigger !== "undefined" || ua.includes("Firefox"))
    return "gecko";
  if (window.chrome) return "blink";
  if (ua.includes("AppleWebKit")) return "webkit";
  return "blink";
}

const engine = detectEngine();

if (engine === "webkit") {
  const card = document.querySelector(".card");
  card.innerHTML = `
        <h1>cmd-find</h1>
        <p class="subtitle">semantic search on any webpage</p>
        <p>cmd-find is not available on Safari yet — check the GitHub page for updates!</p>
        <a class="install-link" href="${GITHUB_URL}" target="_blank" rel="noopener">
            github <span class="arrow">→</span>
        </a>
    `;
} else {
  document.getElementById("install-link").href = STORES[engine];
}
