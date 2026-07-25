---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Hjoldak Hollowhelm"
---
# [Hjoldak Hollowhelm](Mechanics/CLI/bestiary/npc/hjoldak-hollowhelm-pabtso.md)
*Source: Phandelver and Below: The Shattered Obelisk p. 93*  

```statblock
"name": "Hjoldak Hollowhelm (PaBTSO)"
"size": "Medium"
"type": "undead"
"alignment": "typically  Neutral"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "1"
"stats":
  - !!int "19"
  - !!int "13"
  - !!int "15"
  - !!int "17"
  - !!int "14"
  - !!int "6"
"speed": "25 ft."
"saves":
  - "strength": !!int "7"
  - "constitution": !!int "5"
  - "intelligence": !!int "6"
  - "wisdom": !!int "5"
"damage_resistances": "necrotic, poison, psychic"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned), [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "passive Perception 12"
"languages": "telepathy 120 ft., understands the languages it knew in life but can't\
  \ speak"
"cr": "7"
"actions":
  - "desc": "Hjoldak makes two Necrotic Shard attacks. It also uses Psionic Crown\
      \ if available."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +7 to hit, reach 5 ft. or range 60\
      \ ft., one target. *Hit:* 7 (1d6 + 4) piercing damage plus 9 (2d8) necrotic\
      \ damage. If the target is a creature, it has disadvantage on the next attack\
      \ roll it makes before the end of its next turn."
    "name": "Necrotic Shard"
  - "desc": "Hjoldak wreathes the head of a creature it can see within 60 feet of\
      \ itself with a crown of jagged, spectral crystals. The target must succeed\
      \ on a DC 14 Wisdom saving throw or have the [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ condition for 1 minute. While [charmed](Mechanics/CLI/rules/conditions.md#Charmed)\
      \ in this way, the target's thoughts are sluggish; it can't take reactions,\
      \ its speed is halved, and it takes 9 (2d8) psychic damage at the start of\
      \ each of its turns. The target can repeat the saving throw at the end of each\
      \ of its turns, ending the effect on itself on a success."
    "name": "Psionic Crown (Recharge 5-6)"
  - "desc": "Hjoldak casts one of the following spells, requiring no spellcasting\
      \ components and using Intelligence as the spellcasting ability (spell save\
      \ DC 14):\n\n**At will:** [mage hand](Mechanics/CLI/spells/mage-hand-xphb.md)\
      \ (the hand is invisible)\n\n**1/day:** [calm emotions](Mechanics/CLI/spells/calm-emotions-xphb.md)"
    "name": "Spellcasting (Psionics)"
"source":
  - "PaBTSO"
"image": "Mechanics/CLI/bestiary/npc/token/hjoldak-hollowhelm-pabtso.webp"
```
^statblock