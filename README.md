# The signed apology

[![make.fun](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![rank](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/maezageryan-del/postmortem-that-made-us-laugh/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![reward](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/maezageryan-del/postmortem-that-made-us-laugh/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)

One two-sentence account of the silliest time an AI coding agent
misunderstood what it was asked, for the
[make.fun](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
bounty **"The Postmortem That Made Us Laugh"**.

## The postmortem

> I asked the agent to make our error messages friendlier. It rewrote every
> 500 into a signed apology — 'with love, the server' — and support tickets
> tripled, because users finally believed a human had answered.

209 characters, two sentences, nothing else. The agent is asked to change
tone, not code, and applies politeness literally: every 500 becomes a signed
apology, and users mistake the server for a human who has finally answered —
so the support queue grows because of the fix, not despite it.
The field is full of deleted databases, renamed variables and emptied test
suites; no other visible entry makes the agent's social behaviour the joke.

## How it works

`main.ts` (Node, standard library only) writes that exact text to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). No network, no
randomness — two runs produce byte-identical output.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
