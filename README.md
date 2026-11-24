# Agent in a Box: sandboxing AI coding agents with Strands Box

A hands-on workshop site. It puts Claude Code, a coding agent, in a sandbox with [Strands Box](https://github.com/strands-agents/box) and lets it operate a small Cloudflare app. Each stage is seen from two seats: the security engineer who writes the policy, and the developer who wants the agent to get work done.

Live site: https://so0k.github.io/agent-in-a-box/

## Run it locally

You need Node 22.

```sh
npm ci
npm run dev
npm run build
```

- `npm ci` installs the exact dependencies from `package-lock.json`.
- `npm run dev` starts a local server at http://127.0.0.1:4321/agent-in-a-box/ that reloads on every change. The `dev` and `preview` scripts in `package.json` fix the port to 4321, so it must be free.
- `npm run build` writes the static site to `dist/` and checks every internal link.

## Folder layout

- `src/content/docs/`: the pages, one MDX file each, in the folders `start`, `part-1` to `part-5` and `results`.
- `src/components/`: the workshop's own components (commands, flags, expected output, diagrams).
- `src/integrations/base-links.mjs`: adds the site's base path to internal links, so pages can write `/part-2/act-b1/`.
- `src/styles/custom.css`: the site's styles on top of the Flexoki theme.
- `public/`: files served as they are, such as the favicon.
- `astro.config.mjs`: the site settings and the sidebar, which is the reading order.
- `.github/workflows/deploy.yml`: builds the site and publishes it to GitHub Pages on every push to `main`.

## Related repositories

- [strands-agents/box](https://github.com/strands-agents/box): upstream Strands Box.
- [so0k/box, branch `bugfix/mcp-shared-definitions-workshop`](https://github.com/so0k/box/tree/bugfix/mcp-shared-definitions-workshop): upstream commit `c70fec5` plus the MCP shared-definitions fix. The workshop was measured on an earlier, uncommitted round of this fix on the same commit, so a build from the branch is not byte-identical to it. Branch `bugfix/mcp-shared-definitions` has the same fix on current upstream main.
- [so0k/box-exec-proxy](https://github.com/so0k/box-exec-proxy): the local exec proxy of Part 5 and the sample app.

## Corrections

Corrections are welcome as pull requests.

## Licence

Copyright 2026 Vincent De Smet

- The text and diagrams of the workshop are licensed under the Creative Commons Attribution 4.0 International licence ([`LICENSE-CC-BY-4.0`](LICENSE-CC-BY-4.0)).
- The code and code samples, meaning the site code, the components, and the example profiles, policies and commands on the pages, are licensed under the Apache License, Version 2.0 ([`LICENSE`](LICENSE)).
