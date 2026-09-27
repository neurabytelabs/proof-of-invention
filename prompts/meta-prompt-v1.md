build a prompt machine from scratch, starting from individual genes. take apart the prompt below until you know exactly why it works, then design the genes, an atlas of forty things worth rebuilding, a grammar that snaps them together, a courage dial from spark to all out, and a machine anyone can pull to get a dare they can run tonight. everything has to be real: no language model inside pretending, every sentence it writes comes from a gene you can point to, and the same number gives the same prompt forever. let me pull it, then zoom from the prompt down through its sentences into the genes and the atlas entries they came from. beside it, keep an honest wall of every run, the ones that worked and the ones that broke. treat it like you're proving you could have invented the prompt below yourself, and a thousand more like it. go all out.

the prompt below:

> build a working computer from scratch, entirely in code, starting from individual logic gates. design the CPU, the memory, an assembler, a tiny operating system, and a game that runs on it. everything has to be real, the game has to run on your gates, not in javascript pretending. visualize the whole thing in 3D so i can play the game, then zoom all the way down through the chips into the gates and watch the signals flow while it runs. treat it like you're proving you could have invented computing yourself. go all out.

— CONTRACT —

The first paragraph is the spirit. The quoted prompt is the golden sample. Everything below is already decided: requirements, not suggestions.

WHAT IT IS
A public web page named Proof of Invention: a prompt machine with no language model inside. It writes "impossible but real" build prompts, dares that push a frontier model to build something that looks impossible, runs for real, and proves it on screen. The reaction it is built for: "wait, is this real?" in a 20-second screen recording. Beside the machine, an honest wall of real runs.

THE GENOME
Our reading of the golden sample. Every generated prompt carries all eight genes. Sharpen the reading if you find something truer; never drop a gene.
1. primitive: the smallest honest building block ("individual logic gates")
2. ladder: named rungs from primitive to payoff ("the CPU, the memory, an assembler, a tiny operating system")
3. anti-fake: the exact shortcut a model would take, banned by name ("not in javascript pretending")
4. payoff: something a person plays or uses at the top ("so i can play the game")
5. zoom: one continuous, live dive from payoff to primitive ("zoom all the way down through the chips into the gates and watch the signals flow while it runs")
6. proof frame: "treat it like you're proving you could have invented <domain> yourself"
7. all out: "go all out"
8. feasibility: the ladder follows a canonical path frontier models know deeply (the sample rides on nand2tetris), so the prompt looks impossible yet is buildable in one long session.
Genes 3 and 5 lock together: the zoom is how a viewer sees the ban was obeyed. That lock is the genre; a prompt without it isn't ours.

VOICE
Like the golden sample: english, lowercase, one paragraph, no lists, imperative, addressed to the model, "i" for the person who will use the result. Roughly 60–100 words at spark, up to ~160 at all out.

ATLAS
You write it now, at build time; it ships as data inside the page. At least 40 domains, inventions and natural systems worth rebuilding (the internet, a synthesizer, a living cell, an economy, a star...). Each entry has:
- 1–3 primitives
- a canonical ladder of named rungs, with the source it follows (nand2tetris, the OSI model, the central dogma...)
- 1–3 anti-fake clauses naming the exact shortcut ("no fetch() pretending", "not the Web Audio API pretending")
- 1–3 zoom paths: where the dive starts, where it ends, what you watch flow
- a payoff for each courage level, each one a wow on its own
- the proof-frame noun ("the internet")
A domain that can't fill every field honestly stays out. Genes combine only within a domain; no cross-domain splicing. The atlas is append-only and versioned: nothing that exists ever changes or moves.

ENGINE
A pure, deterministic function from number to prompt. The number encodes domain, courage level and every variant and template choice. The same number gives the identical prompt forever, including after the atlas grows; design the encoding so appending never changes an existing number. Keep numbers short enough to say out loud. Phrasing variety comes from several templates per gene, append-only like the atlas. Every sentence carries provenance: gene, atlas entry, variant. No randomness except picking a fresh number on a pull. No network calls.
Courage dial, spark / build / all out: same genes; the ladder length and the payoff change (spark: the first few rungs, build: about half, all out: the whole ladder).

THE PAGE
- Pull: one obvious control, the courage dial, an optional domain picker. Every pull shows a new number and its prompt.
- Permalink: the number lives in the URL; opening it shows that exact prompt.
- Zoom, the signature: from the prompt into any sentence, into its gene, into the atlas entry and the variants that could have been chosen instead. The machine carries its own zoom gene; make this the most beautiful moment on the page.
- Actions: copy, and open in Claude (https://claude.ai/new?q= plus the url-encoded prompt).
- #0000: the atlas includes this machine as a domain. #0000 comes out of the engine through the same path as every other number and reproduces the first paragraph of this message verbatim, shown with the golden sample beneath it, since it refers to "the prompt below". No hardcoded string: each of its sentences zooms to a gene.
- The wall: every run appears, the ones that worked and the ones that broke. A card holds number, domain, level, model, duration, the anti-fake verdict (held / partly / broken), a link to the recording or artifact, and an optional postmortem. The data sits in one clearly marked JSON block that I edit by hand. Never invent a run. The only card you may add is #0000's own: this page is its result, built from #0000 plus this contract, so say that on the card and fill in only what you actually know.
- It should feel like a precision instrument, not a landing page, the kind of thing people screenshot. It must work on a phone, because shared links get opened there first. Give it Open Graph title and description tags.

BUILD
One self-contained HTML file. No backend, no build step, no keys, no required network calls (web fonts may load, with a system fallback). If you can run a browser, run the page and test it yourself; in claude.ai, deliver it as a single artifact. Don't stop to ask me questions: decide, and list your decisions in the report.

ACCEPTANCE: run these and report honestly
1. Read twenty random pulls across all three levels as a skeptic: zero nonsense, zero unbuildable prompts. Ship a self-test (?selftest) that checks every structural rule over thousands of numbers: all eight genes present, length in range, no empty slots, full provenance.
2. Determinism: the same number always gives the identical prompt; decode(encode(x)) equals x across many random choices.
3. Provenance: every sentence of every prompt zooms to a gene; no orphan text.
4. #0000 reproduces the first paragraph verbatim through the engine. The self-test may hold the paragraph as its expected value; the rendering path may not.

OUT OF SCOPE
Accounts, backend, any language model at runtime, running prompts inside the page, visitor uploads, analytics, payments.

WHEN YOU'RE DONE, TELL ME
The domain list with each ladder's canonical source; one sample prompt per level; the self-test results; what you cut and why; and anything in this contract you think is wrong.
