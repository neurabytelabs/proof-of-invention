# Growing the atlas (Proof of Invention)

You are writing entries for the atlas of a **prompt machine with no language model inside**.
The machine turns a number into an "impossible but real" build prompt: a dare that pushes a frontier
model to build something that looks impossible, runs for real, and proves it on screen.
Every word of every prompt comes from either a fixed template or a field you write. So your fields
must read naturally in **every** template below, at **every** courage level.

The atlas, the grammar and the engine all live inside `index.html` (the `<script id="poi-data">` block holds
`versions`, `grammar` and `atlas`). There is no build step: you grow the machine by editing that block.

**Append only.** Every published number must keep its prompt forever, and the self-test enforces it with a
digest of version 1. So:

- never edit, reorder or delete anything that exists: not a domain, a field, a rung, a template, not even a typo;
- to grow, add a new version number to `versions` (e.g. `[1, 2]`) and append things that carry `"since": 2`:
  a whole new domain object at the end of `atlas`, a new template at the end of a slot's `templates`,
  or a new variant at the end of an existing domain's `prims`, `bans` or `zooms` (objects with `"since": 2`)
  or `witness` (written `{ "text": "...", "since": 2 }`);
- ladders, subjects, truths, payoffs, stages and proof nouns of an existing domain never change or grow;
- the new version's numbers start right after the last old number, and each new choice gets exactly one number.

Then run `node tools/selftest.cjs` (every rule over every number) and `node tools/samples.cjs <domain-id>`
(read the domain's prompts at every level and every distinct sentence it can produce).

## The golden sample (the genre, and the voice)

> build a working computer from scratch, entirely in code, starting from individual logic gates. design the CPU, the memory, an assembler, a tiny operating system, and a game that runs on it. everything has to be real, the game has to run on your gates, not in javascript pretending. visualize the whole thing in 3D so i can play the game, then zoom all the way down through the chips into the gates and watch the signals flow while it runs. treat it like you're proving you could have invented computing yourself. go all out.

The engine reproduces this exactly from the `computer` entry (number #1551). Study that entry and the
`machine` entry (#0000): they are the reference entries.

Eight genes. Every prompt carries all of them:
1. **primitive**: the smallest honest building block ("individual logic gates")
2. **ladder**: named rungs from primitive to payoff, in climbing order
3. **anti-fake**: a truth the result must obey + the exact shortcut a model would take, banned by name, + (in some templates) a live witness beside it
4. **payoff**: something a person plays or uses at the top (appears as the last rung, and as what "i" get to do)
5. **zoom**: one continuous, live dive from the payoff down to the primitive
6. **proof frame**: "treat it like you're proving you could have invented <proof> yourself"
7. **all out**: "go all out"
8. **feasibility**: the ladder follows a canonical path frontier models know deeply, so the prompt looks impossible yet is buildable in ONE long session by a frontier model writing browser code (HTML/JS, canvas/WebGL/Web Audio as raw output devices).

Genes 3 and 5 lock together: the zoom lands on the primitive while it runs, which is how a viewer
SEES the ban was obeyed. Your zoom must end on the primitive.

## The templates (fixed; your fields fill the `{holes}`)

```
open.0   build {subject} from scratch, starting from individual {prim}.
open.1   build {subject} from scratch, entirely in code, starting from individual {prim}.
open.2   build {subject} from scratch, entirely in code, out of nothing but {prim}.
open.3   start from individual {prim} and build {subject} from scratch, entirely in code.

ladder.0 design {climb}.
ladder.1 design every layer yourself: {climb}.
ladder.2 design each layer on top of the last: {climb}.
         {climb} = the first k rungs of your ladder + the level's payoff.top, joined "a and b" / "a, b, and c"

real.0   everything has to be real: {no}, {truth}.
real.1   everything has to be real, {truth}, {not}.
real.2   everything has to be real and you have to prove it: {truth}, {not}.

dive.0   let me {use}, then zoom from {from} down through {through} into {into}. beside it, keep {witness}.
dive.1   visualize the whole thing {stage} so i can {use}, then zoom all the way down through {through} into {into} and watch {flow} while it runs.
dive.2   put it {stage} so i can {use}, then dive from {from} through {through} down to {into} in one unbroken shot, and watch {flow} while it runs.
dive.3   show it {stage} and let me {use}, then zoom from {from} down through {through} into {into} while it runs. beside it, keep {witness}.

proof.0  treat it like you're proving you could have invented {proof} yourself.
allout.0 go all out.
```

Courage levels cut the ladder. With n rungs: **spark** uses the first round(n/3) rungs (min 1),
**build** the first ceil(n/2), **all out** all n. Then the level's `payoff.top` is appended.

| n rungs | spark | build | all out |
|---|---|---|---|
| 5 | 2 | 3 | 5 |
| 6 | 2 | 3 | 6 |
| 7 | 2 | 4 | 7 |
| 8 | 3 | 4 | 8 |
| 9 | 3 | 5 | 9 |

## Fields (one JSON object per domain in the `atlas` array)

| field | what | reads in | rules |
|---|---|---|---|
| `id` | kebab-case key | - | unique, stable |
| `title` | picker label | "the internet", "a synthesizer" | lowercase noun phrase |
| `kind` | `"invention"` or `"natural system"` | - | |
| `subject` | the thing built | "build **{subject}** from scratch" | noun phrase with article: "the internet", "a living cell" |
| `proof` | proof-frame noun | "invented **{proof}** yourself" | "the internet", "computing", "the synthesizer" |
| `source` | the canonical path the ladder follows | shown in the zoom | real, famous, named precisely (book/course/model/paper + author) |
| `sourceNote` | one sentence: why frontier models know this path deeply | shown in the zoom | plain sentence, may end with a period |
| `prims` | 1-3 `{name, short}` | "starting from individual **{name}**", "out of nothing but **{name}**"; `short` in "your **{short}**", "the **{short}**" | name = plural noun phrase, 1-4 words; short = 1-2 words. If you give several prims, they must all be honest starting points for the SAME ladder, and every text that uses `{short}` must read right for each of them |
| `ladder` | 5-9 rungs, bottom to top | "design **the ALU**, **the registers**, ..." | noun phrases that read after "design", 1-6 words each (2-4 ideal), each a real buildable component, in the canonical order of `source`. No rung may be the payoff itself |
| `payoff.spark/.build/.allout` | `{top, use, noun}` per level | top: last item of the ladder list; use: "so i can **{use}**", "let me **{use}**", "let me **{use}** {stage}"; noun: "the **{noun}**" | top = noun phrase with article, 4-12 words, buildable with ONLY the rungs of that level, a wow on its own; use = bare verb phrase, 2-5 words; noun = 1-3 words, no article |
| `truth` | the reality test | "everything has to be real: no X pretending, **{truth}**." and "everything has to be real, **{truth}**, not X pretending." | independent clause, 6-14 words, must contain `{noun}` or `{short}` (usually both): "the {noun} has to run on your {short}" |
| `bans` | 1-3 `{no, not}` | real.0 uses `no`, real.1/real.2 use `not` | name the EXACT shortcut a model would take (an API, library, or trick). `no` starts "no " and ends "pretending"; `not` starts "not " or "never " and ends "pretending". 3-9 words. Never ban what the build genuinely needs as an output device (you may ban the high-level shortcut on top of it) |
| `zooms` | 1-3 `{from, through, into, flow}` | see dive.0-dive.3 | `from`: where the dive starts, usually "the {noun}"; `through`: the middle layers, 2-7 words; `into`: the primitive, use "the {short}" (must land on the primitive); `flow`: what you watch move, "subject + bare verb": "the signals flow", "every bit flip", 2-5 words |
| `witness` | 1-2 noun phrases | "beside it, keep **{witness}**." | a live, honest instrument that would expose faking: counters, traces, logs, meters. 5-13 words |
| `stage` | where it is shown | "visualize the whole thing **{stage}**", "put it **{stage}**", "show it **{stage}** and let me play the game" | prepositional phrase starting "in " or "on ": "in 3D", "on a live map", "in a 3D cutaway" |

Nested holes: `truth`, `zooms.*`, `witness` may contain `{noun}` (the level's payoff noun) and
`{short}` (the chosen primitive's short form). Nothing else may contain holes. Do not use `lead` or
`tail` (they exist only for the machine's own entry).

## Voice

english, lowercase (keep acronyms and API names as written: CPU, DNA, TCP, fetch(), WebGL, the Web
Audio API), plain ASCII only (straight apostrophes, no em dashes, no curly quotes), no trailing
punctuation in fields, concrete nouns, no marketing words (no "stunning", "amazing", "powerful",
"seamless"). Imperative prompt, "i" is the person who will use the result.

Length: prompts must land roughly **60-100 words at spark** and **up to ~160 at all out**. The
self-test enforces spark 55-115, build 60-135, all out 65-165. Keep fields tight.

## Honesty rules (a domain that can't meet these stays out)

- The canonical source must be real and famous, and the ladder must actually follow it.
- Every payoff must be buildable by a frontier model in one long session, as browser code, using ONLY
  the rungs of its level. Spark is small and still a wow. All out is the whole thing.
- The ban must name the shortcut a lazy model would REALLY take for THIS domain (e.g. "not an
  OscillatorNode pretending", "no fetch() pretending", "no WebGL pretending"). It must not ban the
  thing the build needs as a raw output (a synth still writes raw samples to the Web Audio API; a
  renderer still puts pixels on a canvas).
- The truth, zoom and witness must describe what really happens in that build. The zoom must be
  continuous from payoff to primitive and show something actually flowing.
- Genes combine only within a domain: no borrowing from other domains.
- No nonsense in any template at any level. Read every sentence `tools/samples.cjs` prints.

## Check your work

```
node tools/selftest.cjs                  # every structural rule over every number, including the frozen digest
node tools/samples.cjs <domain-id> 3     # 3 prompts per level and every distinct sentence the domain can produce
node tools/samples.cjs '#1551'           # one number, with the gene and source of every fragment
```

Read every sentence the tool prints as a skeptic: fix any that is ungrammatical, vague, repetitive, or untrue in
any template or level, before you publish the new version.

## Rules the skeptics added

These came from rounds of skeptics reading real pulls of version 1. They bind every entry.

- **The zoom's middle layer must exist at every level.** Zoom paths are drawn independently of the courage level, so `zooms[i].through` must name something built by the first round(n/3) rungs (the spark cut), or something that exists in any honest build of the payoff. Never name a later rung in a zoom.
- **No pronouns that point back.** dive.1 drops `{from}`, so `through`, `into` and `flow` must not say "it", "its", "inside it" or anything else that needs `from` to make sense.
- **Every ban must fit every level.** Bans are drawn independently of the level, so each ban must name the shortcut a lazy model would REALLY take at spark, build and all out alike. Prefer the concrete API or trick (canvas.toBlob, quadraticCurveTo plus fill, matter.js, a DC power-flow approximation, a Greenshields formula) over generic words like "scripted" or "tweened". Do not reuse a ban that is famous from another domain (OscillatorNode, crypto.subtle, three.js) unless it is THE shortcut here.
- **The witness must expose the likely fake.** Ask: would this meter read the same if the model took the banned shortcut? If yes, change the witness.
- **The primitive sits below rung 1.** "starting from individual bitboards ... design the board representation" says the same thing twice. Rung 1 must be built out of the primitive, not be it.
- **Each level has its own gesture.** The three payoffs need different `use` verbs and different `noun`s where honest; spark must already be a wow (not "watch it count"), and all out must be clearly bigger than build.
- **The stage should mean something.** It reads in "visualize the whole thing {stage}", "put it {stage}", and "show it {stage} and let me {use}". Prefer a view that belongs to the domain ("on a live commit graph", "in a cutaway of the core", "on a split screen") over a bare "in 3D" that adds nothing. Spell shared ideas the same way ("on a split screen").
- **Title and subject agree** (title "a ray tracer" means subject "a ray tracer").
- **Source house format:** `<work> (<authors>, <year>)`, several joined with ", then ", at most about 20 words, real names not handles. Justifications and chapter lists go in `sourceNote`.
