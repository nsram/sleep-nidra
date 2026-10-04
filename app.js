// ------------------------------------------------------------------
// Config: point feedback at your repo. Issues will be filed here.
// The site lives in its own repo, "nsram/sleep-nidra", served via
// GitHub Pages at nsram.github.io/sleep-nidra/.
// ------------------------------------------------------------------
const GITHUB_REPO = "nsram/sleep-nidra";

function feedbackBody(version, file) {
  const lines = [
    "## Version",
    version + (file ? "  (" + file + ")" : ""),
    "",
    "## Listening context",
    "<!-- e.g. earbuds in bed, phone speaker, car... -->",
    "",
    "## Voice",
    "<!-- natural and soothing? anything off? -->",
    "",
    "## Pacing and pauses",
    "<!-- too fast / too slow? pauses too long or too short? -->",
    "",
  ];
  if (version !== "general" && !version.startsWith("English")) {
    lines.push(
      "## Translation",
      "<!-- anything unnatural, awkward, or just wrong? -->",
      ""
    );
  }
  lines.push("## Overall", "<!-- did you fall asleep? (highest praise available) -->");
  return lines.join("\n");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".feedback-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const version = btn.dataset.version || "general";
      const file = btn.dataset.file || "";
      const title = "[feedback] " + version;
      const url =
        "https://github.com/" +
        GITHUB_REPO +
        "/issues/new?title=" +
        encodeURIComponent(title) +
        "&body=" +
        encodeURIComponent(feedbackBody(version, file));
      window.open(url, "_blank", "noopener");
    });
  });
});
