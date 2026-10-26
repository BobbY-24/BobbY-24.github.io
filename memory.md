# Memory

## Purpose

Public research site for Bob G. Yan (GitHub `BobbY-24`), Georgia Tech ISyE, CS minor on the Intelligence thread, research assistant in the College of Computing.

## Decisions

- Pages: work and timeline (`index.html`), research (`research.html`), quotebook (`quotes.html`), pictured shelf (`books.html`), about (`about.html`).
- Default theme is the yellow paper palette. Night is Kanagawa, toggled in the header and stored in `localStorage` under `theme`.
- Project copy is taken from the public READMEs of Quarry, neologism-embedding-learning, qwen-lora-finetuning, David, and llm-eval-ablation-multimodal, checked 2026-10-25. Coursework repos are listed separately.
- Twelfth-grade shelf entry “1948” is shown as 1984, because eleventh grade says he started 1984 and the digits match a swap. The about page says so.
- Twelfth grade also includes The Awakening (Kate Chopin, 1899) and The Great Gatsby (F. Scott Fitzgerald, 1925). “The awakenings” was read as Chopin’s novel, the twelfth-grade book, not Oliver Sacks’s Awakenings.
- Public pages do not explain editorial choices. Folder names, missing-author notes, source caveats, and the Milesplit name mismatch stay out of the HTML.
- LinkedIn link used: `https://www.linkedin.com/in/guanjun-yan-71350a36a/`. GitHub profile blog field also lists `bob-yan-71350a36a`; that alternate was not used.
- Cross-country page is Milesplit under the name Bob Yuan.
- `quotes.html` is a theme quotebook, modeled on the section-and-bracket layout of karthiksworld’s quotebook, not a copy of its lines. Themes: language, will, self, seeing. Authors are the four named on About. Wording is from named public-domain translations, plus one Anscombe sentence from Philosophical Investigations §43. The rose line keeps the 1599 quarto’s “word.” The compressed Schopenhauer line “cannot will what he wills” was left out because it is not his sentence.
- `books.html` lists every shelf title as a cover card, grouped by when it was read (elementary through college). The layout follows the ivy-he cover cards, not the A–D tiers. The year is the book’s first publication year. Covers are local JPEGs saved from Open Library (`images/covers/`); hotlinking a full page of covers was dropped after parallel requests left later images blank. Three original cards stay blank: 美丽的凶器 and 祈祷落幕时 had no usable cover (one candidate was an interior page, another an audiobook), and A Boy’s Life has no author in the notes. 1984 appears once, under twelfth grade. 加贺恭一郎 is the series name for 毕业, 麒麟之翼, and 祈祷落幕时.
- College also lists the books in `~/Desktop/Digilib`, grouped by that folder’s subjects. Digilib copies of books already on the school shelf stay in those years. Left out of the shelf: The Long Dark maps, research papers, Warhammer notes, the Trench Crusade rulebook, and short files that are not books (a ValueWalk Munger compilation, Rawski’s article, an anonymous habits guide, and a Peak Performance newsletter). The Warfighter playbook has no author in the file. Blood & Iron is the 2025 Trench Crusade story by Graham McNeill. Practical Programming is the Rippetoe and Baker edition, 2013. Rich Dad Poor Dad is 1997, with Sharon Lechter. Homo Deus is 2015. The Prince is 1532. Understanding Deep Learning is 2023. Suicidal Empathy is 2026. Several cards have no cover because Open Library had none, or the only image was an interior page, an audiobook, or the wrong book.

## State

- Repository `BobbY-24/BobbY-24.github.io` is the site. Pages serves `main` from `/`. Live URL verified 2026-10-25: `https://bobby-24.github.io`, including `https://bobby-24.github.io/books.html`.
- The source notes included credential-like strings. They were not copied into this repository and must not be added later.

## Unresolved

- Confirm the 1984 reading of “1948”.
- Confirm which LinkedIn URL should be canonical if both still resolve.
