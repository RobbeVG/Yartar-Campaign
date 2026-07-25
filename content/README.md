# Campaign Site — Setup Guide

Architecture: **one Obsidian vault → Quartz static site → GitHub Pages**.
You write everything in Obsidian. Anything not explicitly marked `publish: true`
never leaves your machine's build output. Players get a plain URL, no install.

```
You (Obsidian) ──edit──> vault (git repo)
                              │ git push
                              ▼
                    GitHub Actions (on push to main)
                              │ npx quartz build
                              ▼
                    GitHub Pages (public URL)
```

---

## 0. Prerequisites

- [Obsidian](https://obsidian.md) installed (desktop) — Obsidian v1.11.4+ for the Leaflet plugin
- [Node.js](https://nodejs.org) v22+ (Quartz requirement) and npm
- A GitHub account (free)
- Git installed locally
- Optional but recommended: [Obsidian Git](https://github.com/Vinzent03/obsidian-git) community plugin, so you can commit/push from inside Obsidian with one click instead of a terminal

---

## 1. Create the GitHub repo and Quartz project

```bash
git clone https://github.com/jackyzha0/quartz.git campaign-site
cd campaign-site
npm install
npx quartz create
# When prompted, choose "Empty Quartz" (we'll bring our own content)
```

Push it to a new GitHub repo (e.g. `yourname/campaign-site`).

The vault content lives in the `content/` folder inside this repo. **Open
`content/` as your Obsidian vault** (Obsidian → Open folder as vault → select
`campaign-site/content`). Now Obsidian and Quartz are pointed at the same
files — no copying, no syncing step.

---

## 2. Vault folder structure

Inside `content/`, use something like:

```
content/
  index.md              <- homepage (required by Quartz)
  PCs/
  NPCs/
  Locations/
  Factions/
  Items/
  Quests/
  Sessions/             <- session recaps
  Lore/                 <- world history, cosmology, etc.
  Maps/                 <- base notes that hold Leaflet map views
  Assets/               <- images, map source files
  templates/            <- Obsidian templates, never published
```

A ready-made empty version of this is in `vault-template/` alongside this
guide — copy its contents into `content/`.

---

## 3. The secrecy mechanism: `publish: true`

Quartz ships a built-in filter, `ExplicitPublish`, that only publishes notes
whose frontmatter explicitly says `publish: true`. Everything else — which,
by default, is everything — stays out of the built site entirely. This is
the opposite of Notion's model: instead of maintaining two databases, you
maintain one, and a single frontmatter flag decides visibility.

Every note's frontmatter looks like:

```yaml
---
publish: false
tags: [npc, faction/silver-hand]
aliases: []
---
```

Workflow during play: everything starts `publish: false`. The moment the
party actually discovers a location, meets an NPC, or finds an item — flip
it to `true`, commit, push. A minute later it's live for players.

See `frontmatter-templates.md` for ready-to-paste templates per entry type.

### Important caveat — non-markdown files

`ExplicitPublish` only filters `.md` files. Images and other attachments in
`Assets/` are copied to the public build **regardless of frontmatter**, and
are reachable if someone guesses/finds the URL (they won't be linked from
anywhere, but they're not truly access-controlled). For a home campaign with
trusted players this is a low risk, but if you want it airtight:

- Keep truly spoiler images (final boss art, secret map reveals) in a
  separate folder and add it to `ignorePatterns` in `quartz.config.ts`
  (see below) until you're ready to publish, then remove the ignore rule —
  or just rename/move the file into the public assets folder at reveal time.
- Alternatively, Quartz has a newer `EncryptedPages` plugin (password-gated
  pages) if you ever want a middle ground between fully public and fully
  hidden — worth a look later if this becomes a pain point, not needed for v1.

---

## 4. Interactive maps (Leaflet)

Two plugins, one for Obsidian, one for Quartz:

1. **In Obsidian**: install the community plugin **"Leaflet bases"** (by
   requiae). Requires Obsidian 1.11.4+.
   - Create a Base (Obsidian's built-in database view) with a `Leaflet Map`
     view pointing at a map image.
   - Add a `marker` property to any note (a PC, NPC, location, item) to pin
     it on the map — marker data lives on the note itself, not the map, so
     it naturally respects your normal note organization.
2. **In Quartz**: install the companion plugin from
   `github:Requiae/quartz-leaflet-map-plugin` (works with Quartz v4, which is
   what we're using — Quartz v5 also supports it but is still in open beta,
   so we're deliberately staying on v4 for stability).

Example base embedded directly in a note:

```
```base
views:
  - type: leaflet-map
    name: World Map
    mapName: overworld
    image: Assets/world-map.png
    height: 500
    minZoom: -1.5
    maxZoom: 2
    defaultZoom: -1.5
```
```

**One thing to verify once you're set up** (flagging honestly since it's a
newer plugin, ~5 months old, small user base): whether markers from
`publish: false` notes are automatically excluded from the rendered map on
the live site, or whether the map view pulls marker data before the
`ExplicitPublish` filter runs. If markers leak through, the workaround is to
only add `marker` properties once a note is already `publish: true`, or keep
a dedicated "revealed locations" map that only reads from the `Locations/`
folder's public notes. We'll test this once the pipeline is running.

---

## 5. Quartz configuration

Edit `quartz.config.ts` (see `quartz.config.snippet.ts` in this folder for
the exact block) to add the `ExplicitPublish` filter and ignore patterns.

---

## 6. Auto-deploy with GitHub Actions

Copy `.github/workflows/deploy.yml` from this folder into your repo at the
same path. Then in your GitHub repo: **Settings → Pages → Source: GitHub
Actions**.

From then on: every `git push` to `main` rebuilds and redeploys the site
automatically, typically live within a minute or two.

---

## 7. Day-to-day workflow once this is running

1. Open Obsidian, write/edit notes as normal.
2. When something should become visible to players, set `publish: true`
   in that note's frontmatter.
3. Commit + push (via Obsidian Git plugin, or terminal `git add -A && git
   commit -m "session 12 updates" && git push`).
4. Site rebuilds automatically. Send players the URL once, they just
   refresh/bookmark it forever after.

---

## Next steps once you're ready

- I can write out full starter templates for each note type (PC, NPC,
  Location, Item, Faction, Quest, Session recap) with sensible custom
  fields — just say the word.
- I can also draft the homepage (`index.md`) layout and a nav/sidebar
  structure if you want something more curated than Quartz's default
  folder explorer.
