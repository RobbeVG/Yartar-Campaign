---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead/mind-flayer
- ttrpg-cli/monster/type/undead/wizard
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Oshundo the Alhoon"
---
# [Oshundo the Alhoon](Mechanics/CLI/bestiary/npc/oshundo-the-alhoon-pabtso.md)
*Source: Phandelver and Below: The Shattered Obelisk p. 153*  

Oshundo lived in Illithinoch at the height of the mind flayer empire many centuries ago, but Oshundo was driven out for practicing arcane magic. It's obvious that this rejection still stings Oshundo, who refers to Illithinoch's long-dead leaders as "ignorant fools" who are "closed to the flexibility and power of arcane magic."

```statblock
"name": "Oshundo the Alhoon (PaBTSO)"
"size": "Medium"
"type": "undead"
"subtype": "mind flayer, wizard"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"modifier": !!int "1"
"stats":
  - !!int "11"
  - !!int "12"
  - !!int "16"
  - !!int "19"
  - !!int "17"
  - !!int "17"
"speed": "30 ft., fly 15 ft. (hover)"
"saves":
  - "constitution": !!int "7"
  - "intelligence": !!int "8"
  - "wisdom": !!int "7"
  - "charisma": !!int "7"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+8"
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+8"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+7"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_resistances": "cold, lightning, necrotic"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive Perception\
  \ 17"
"languages": "Common, Deep Speech, telepathy 120 ft., Undercommon"
"cr": "10"
"traits":
  - "desc": "Oshundo has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Oshundo makes two Chilling Grasp or Arcane Bolt attacks."
    "name": "Multiattack"
  - "desc": "*Melee Spell Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 14\
      \ (4d6) cold damage, and Oshundo regains 14 hit points if the target is a\
      \ creature."
    "name": "Chilling Grasp"
  - "desc": "*Ranged Spell Attack:* +8 to hit, range 120 ft., one target. *Hit:*\
      \ 28 (8d6) force damage."
    "name": "Arcane Bolt"
  - "desc": "Oshundo emits a wave of domineering energy in a 60-foot cone. Each creature\
      \ in that area must succeed on a DC 16 Intelligence saving throw or take 22\
      \ (4d8 + 4) thunder damage and have the [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ condition for 1 minute. A [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ creature can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Thundering Blast (Recharge 5-6)"
  - "desc": "Oshundo casts one of the following spells, requiring no material components\
      \ and using Intelligence as the spellcasting ability (spell save DC 16):\n\n\
      **At will:** [dancing lights](Mechanics/CLI/spells/dancing-lights-xphb.md),\
      \ [detect magic](Mechanics/CLI/spells/detect-magic-xphb.md), [detect thoughts](Mechanics/CLI/spells/detect-thoughts-xphb.md),\
      \ [disguise self](Mechanics/CLI/spells/disguise-self-xphb.md), [mage hand](Mechanics/CLI/spells/mage-hand-xphb.md),\
      \ [prestidigitation](Mechanics/CLI/spells/prestidigitation-xphb.md)\n\n**1/day\
      \ each:** [dominate monster](Mechanics/CLI/spells/dominate-monster-xphb.md),\
      \ [globe of invulnerability](Mechanics/CLI/spells/globe-of-invulnerability-xphb.md),\
      \ [invisibility](Mechanics/CLI/spells/invisibility-xphb.md), [modify memory](Mechanics/CLI/spells/modify-memory-xphb.md),\
      \ [plane shift](Mechanics/CLI/spells/plane-shift-xphb.md) (self only), [wall\
      \ of force](Mechanics/CLI/spells/wall-of-force-xphb.md)"
    "name": "Spellcasting"
"reactions":
  - "desc": "Oshundo targets one creature it can perceive within 60 feet of itself\
      \ that is casting a spell. If the spell is 3rd level or lower, the spell fails,\
      \ but any spell slots or charges aren't wasted."
    "name": "Negate Spell (3/Day)"
"source":
  - "PaBTSO"
"image": "Mechanics/CLI/bestiary/npc/token/oshundo-the-alhoon-pabtso.webp"
```
^statblock