# Agent instructions

Read `memory.md` at the start of every session and update it after substantive work.

## Project

Personal GitHub Pages site for Bob Yan: `https://bobby-24.github.io`. Static HTML, CSS, and one theme script. No build step. GitHub Pages serves this directory from the `main` branch of `BobbY-24/BobbY-24.github.io`.

## Commands

- Preview: `python3 -m http.server 8765` from this directory, then open `http://127.0.0.1:8765`.
- Publish: commit and push `main`. Pages builds from the repository root.

## Constraints

- Do not add credentials, tokens, or the contents of private notes. The source Google Doc contained live secrets; they stay out of this repository.
- Keep claims inside the public repositories and the facts Bob supplied. Do not invent metrics, quotes, or results.
- Paper theme is the default: background `#FFF9E0`, wash `#f7ed92`, accent `#FAE17A`. Night keeps the Kanagawa ground; body text is gold `#F2D08A`.
- `.nojekyll` is required so Markdown in this repo is not published as a page.
- Scratch files go under `work/<task>/`, which is gitignored.
