# Sleep Nidra — site package

A static site for `nsram.github.io/sleep-nidra/` presenting the five Sleep Nidra
audio versions (English, Spanish, French, German, Portuguese) with per-version
feedback via GitHub issues.

## Contents

- `index.html`, `styles.css`, `app.js` — the page (no build step, no frameworks)
- `audio/` — 128 kbps web versions of the five tracks (~111 MB total).
  Masters (160 kbps) are kept locally, not in this package.
- `transcripts/` — timestamped cue transcripts for each version
- `sleep-nidra-script.md` — the canonical 85-cue English script with pause
  structure, the source the audio is built from
- `CHANGELOG.md` — the complete version history (v1–v10). Filenames carry no
  version numbers by design; this file is the record.

## Deploy

This package lives in its own repo, `nsram/sleep-nidra`, served via GitHub Pages
at `https://nsram.github.io/sleep-nidra/`.

1. Create the repo `nsram/sleep-nidra` on GitHub.
2. Copy the contents of this package into the repo root (keeping the
   internal structure: `index.html` at top level, `audio/`, `transcripts/`,
   `styles.css`, `app.js` alongside it).
3. Commit and push. In the repo's Settings → Pages, enable GitHub Pages
   from the `main` branch (root folder) if it isn't already.
4. Feedback buttons open pre-filled GitHub issues. They point at the repo
   configured in `app.js` (`GITHUB_REPO`, currently `"nsram/sleep-nidra"`).
   Change that one line if the repo ends up with a different name.

## Notes

- Audio files are the largest thing here (~22–29 MB each). GitHub's per-file
  limit is 100 MB, so they're fine; the whole folder is ~111 MB.
- The download links previously shared for tester feedback expire on
  2026-10-04 — this page replaces them as the durable home.
- Labeling on the page is deliberately careful: this is presented as a
  sleep aid *inspired by* Yoga Nidra, not a classical Yoga Nidra session.
