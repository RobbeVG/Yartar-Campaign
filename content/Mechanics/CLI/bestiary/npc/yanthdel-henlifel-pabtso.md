---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/drow-elf
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Yanthdel Henlifel"
---
# [Yanthdel Henlifel](Mechanics/CLI/bestiary/npc/yanthdel-henlifel-pabtso.md)
*Source: Phandelver and Below: The Shattered Obelisk p. 114*  

```statblock
"name": "Yanthdel Henlifel (PaBTSO)"
"size": "Medium"
"type": "humanoid"
"subtype": "Drow elf"
"alignment": "Neutral"
"ac": !!int "18"
"ac_class": "[studded leather](Mechanics/CLI/items/studded-leather-armor-xphb.md),\
  \ [shield](Mechanics/CLI/items/shield-xphb.md)"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"modifier": !!int "4"
"stats":
  - !!int "13"
  - !!int "18"
  - !!int "14"
  - !!int "11"
  - !!int "13"
  - !!int "12"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "7"
  - "constitution": !!int "5"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+10"
"gear":
  - "[hand crossbow](Mechanics/CLI/items/hand-crossbow-xphb.md)"
  - "[shortsword](Mechanics/CLI/items/shortsword-xphb.md)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 14"
"languages": "Elvish, Undercommon"
"cr": "5"
"traits":
  - "desc": "Yanthdel's spellcasting ability is Charisma (spell save DC 12). It can\
      \ innately cast the following spells, requiring no material components:\n\n\
      **At will:** [dancing lights](Mechanics/CLI/spells/dancing-lights-xphb.md)\n\
      \n**1/day each:** [darkness](Mechanics/CLI/spells/darkness-xphb.md), [faerie\
      \ fire](Mechanics/CLI/spells/faerie-fire-xphb.md), [levitate](Mechanics/CLI/spells/levitate-xphb.md)\
      \ (self only)"
    "name": "Innate Spellcasting"
  - "desc": "Yanthdel has advantage on saving throws against being [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
      \ and magic can't put Yanthdel to sleep."
    "name": "Fey Ancestry"
  - "desc": "While in sunlight, Yanthdel has disadvantage on attack rolls, as well\
      \ as on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception)) checks\
      \ that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "Yanthdel makes two shortsword attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d6 + 4) piercing damage plus 10 (3d6) poison damage."
    "name": "Shortsword"
  - "desc": "*Ranged Weapon Attack:* +7 to hit, range 30/120 ft., one target. *Hit:*\
      \ 7 (1d6 + 4) piercing damage, and the target must succeed on a DC 13 Constitution\
      \ saving throw or be [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ for 1 hour. If the saving throw fails by 5 or more, the target is also [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)\
      \ while [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned) in this way.\
      \ The target wakes up if it takes damage or if another creature takes an action\
      \ to shake it awake."
    "name": "Hand Crossbow"
"reactions":
  - "desc": "Yanthdel adds 3 to its AC against one melee attack that would hit it.\
      \ To do so, Yanthdel must see the attacker and be wielding a melee weapon."
    "name": "Parry"
"source":
  - "PaBTSO"
"image": "Mechanics/CLI/bestiary/npc/token/yanthdel-henlifel-pabtso.webp"
```
^statblock