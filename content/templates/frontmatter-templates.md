# Frontmatter Templates

Paste the relevant block at the top of a new note. `publish: false` is the
safe default for everything — flip it to `true` when the players have
actually discovered/met/found the thing in-fiction.

Links between entries use normal Obsidian wikilinks, e.g. `[[Silvermoon
Keep]]` or `[[Thorne Blackwood]]` — these become clickable links on the
published site automatically (Quartz resolves wikilinks natively). External
URLs work as plain markdown links: `[source](https://...)`.

---

## PC (Player Character)

```yaml
---
publish: true
type: pc
player:
class:
race:
level:
tags: [pc]
---
```

## NPC

```yaml
---
publish: false
type: npc
role:              # e.g. "quest giver", "villain", "shopkeeper"
location: []       # [[wikilink]] to where they're usually found
faction: []        # [[wikilink]] to affiliated faction(s)
tags: [npc]
---
```

## Location

```yaml
---
publish: false
type: location
region:            # [[wikilink]] to parent region/map
marker:            # populated automatically by the Leaflet bases plugin
  - coordinates: 0, 0
    mapName:
tags: [location]
---
```

## Item

```yaml
---
publish: false
type: item
rarity:
owner: []          # [[wikilink]] to current holder, if any
tags: [item]
---
```

## Faction

```yaml
---
publish: false
type: faction
leader: []         # [[wikilink]]
allies: []
enemies: []
tags: [faction]
---
```

## Quest

```yaml
---
publish: false
type: quest
status: active     # active | completed | failed
giver: []          # [[wikilink]] to the NPC who gave it
tags: [quest]
---
```

## Session recap

```yaml
---
publish: true
type: session
session_number:
date:
tags: [session]
---
```

## Lore / world entry

```yaml
---
publish: false
type: lore
tags: [lore]
---
```

---

### A note on `type:` vs Quartz tag pages

The `type:` field is just a plain frontmatter property — useful for your own
filtering/Bases queries inside Obsidian. The `tags:` field additionally
plugs into Quartz's built-in tag index pages, so e.g. all `npc`-tagged notes
that are `publish: true` automatically get listed together on the live site
under a `/tags/npc` page, no extra setup needed.
