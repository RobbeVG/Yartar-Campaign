---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Mind Flayer Prophet"
---
# [Mind Flayer Prophet](Mechanics/CLI/bestiary/aberration/mind-flayer-prophet-pabtso.md)
*Source: Phandelver and Below: The Shattered Obelisk p. 210*  

Some mind flayers dedicate their lives to channeling abstruse truths from beyond reality. This insight gives them preternatural senses and allows them to focus their innate psionic power.

## Mind Flayers

Mind flayers, also known as illithids, feast on the brains of Humanoids across the multiverse. They are distinguished by their purple-toned skin and octopus-like heads, from which extend writhing tentacles.

```statblock
"name": "Mind Flayer Prophet (PaBTSO)"
"size": "Medium"
"type": "aberration"
"alignment": "typically  Lawful Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "97"
"hit_dice": "15d8 + 30"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "14"
  - !!int "20"
  - !!int "17"
  - !!int "17"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "8"
  - "wisdom": !!int "6"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+8"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+6"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 16"
"languages": "Deep Speech, telepathy 120 ft., Undercommon"
"cr": "8"
"traits":
  - "desc": "The mind flayer has advantage on initiative rolls and can't be surprised\
      \ as long as it doesn't have the [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Awareness"
  - "desc": "The mind flayer has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one creature. *Hit:*\
      \ 16 (2d10 + 5) psychic damage. If the target is Medium or smaller, it has\
      \ the [grappled](Mechanics/CLI/rules/conditions.md#Grappled) condition (escape\
      \ DC 16) and must succeed on a DC 16 Intelligence saving throw or have the [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ condition until the grapple ends."
    "name": "Tentacles"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one Humanoid [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by the mind flayer. *Hit:* 55 (10d10) piercing damage. If this damage reduces\
      \ the target to 0 hit points, the mind flayer kills it by extracting and devouring\
      \ its brain."
    "name": "Extract Brain"
  - "desc": "The mind flayer lashes out with psychic energy, targeting up to two creatures\
      \ it can see within 60 feet of itself. Each target must succeed on a DC 16 Intelligence\
      \ saving throw or take 23 (4d8 + 5) psychic damage and have the [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ condition for 1 minute. A [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ target can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Mind Whip (Recharge 5-6)"
  - "desc": "The mind flayer casts one of the following spells, requiring no spell\
      \ components and using Intelligence as the spellcasting ability (spell save\
      \ DC 16):\n\n**At will:** [detect magic](Mechanics/CLI/spells/detect-magic-xphb.md),\
      \ [detect thoughts](Mechanics/CLI/spells/detect-thoughts-xphb.md), [levitate](Mechanics/CLI/spells/levitate-xphb.md)\n\
      \n**1/day each:** [dominate monster](Mechanics/CLI/spells/dominate-monster-xphb.md),\
      \ [plane shift](Mechanics/CLI/spells/plane-shift-xphb.md) (self only), [true\
      \ seeing](Mechanics/CLI/spells/true-seeing-xphb.md)"
    "name": "Spellcasting (Psionics)"
"source":
  - "PaBTSO"
"image": "Mechanics/CLI/bestiary/aberration/token/mind-flayer-prophet-pabtso.webp"
```
^statblock