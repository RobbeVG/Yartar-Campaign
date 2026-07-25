---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Voalsh"
---
# [Voalsh](Mechanics/CLI/bestiary/npc/voalsh-pabtso.md)
*Source: Phandelver and Below: The Shattered Obelisk p. 194*  

```statblock
"name": "Voalsh (PaBTSO)"
"size": "Medium"
"type": "aberration"
"alignment": "typically  Lawful Evil"
"ac": !!int "15"
"ac_class": "[breastplate](Mechanics/CLI/items/breastplate-xphb.md)"
"hp": !!int "156"
"hit_dice": "24d8 + 48"
"modifier": !!int "1"
"stats":
  - !!int "11"
  - !!int "12"
  - !!int "15"
  - !!int "21"
  - !!int "17"
  - !!int "18"
"speed": "0 ft., fly 30 ft. (hover)"
"saves":
  - "intelligence": !!int "9"
  - "wisdom": !!int "7"
  - "charisma": !!int "8"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+9"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+7"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_resistances": "psychic"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., [truesight](Mechanics/CLI/rules/senses.md#Truesight)\
  \ 15 ft., passive Perception 17"
"languages": "Deep Speech, telepathy 120 ft., Undercommon"
"cr": "11"
"traits":
  - "desc": "If Voalsh fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Voalsh has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Voalsh makes two Tentacle attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one creature. *Hit:*\
      \ 21 (3d10 + 5) psychic damage. If the target is Medium or smaller, it has\
      \ the [grappled](Mechanics/CLI/rules/conditions.md#Grappled) condition (escape\
      \ DC 17) and must succeed on a DC 17 Intelligence saving throw or have the [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ condition until the grapple ends."
    "name": "Tentacle"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ Humanoid [grappled](Mechanics/CLI/rules/conditions.md#Grappled) by Voalsh.\
      \ *Hit:* 55 (10d10) piercing damage. If this damage reduces the target to\
      \ 0 hit points, Voalsh kills it by extracting and devouring its brain."
    "name": "Extract Brain"
  - "desc": "Voalsh opens a rift into the Far Realm, centered on a point Voalsh can\
      \ see within 60 feet of itself, and a tentacle lashes across creatures near\
      \ the rift. Each creature other than mind flayers within 30 feet of the rift\
      \ must make a DC 17 Intelligence saving throw, after which the tentacle disappears\
      \ and the rift closes. On a failed save, a creature takes 18 (4d8) cold damage\
      \ from the rift plus 18 (4d8) psychic damage from the tentacle and has the\
      \ [stunned](Mechanics/CLI/rules/conditions.md#Stunned) condition for 1 minute.\
      \ On a successful save, a creature takes half as much damage only. A [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ creature can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Unleash Void (Recharge 5-6)"
  - "desc": "Voalsh casts one of the following spells, requiring no spell components\
      \ and using Intelligence as the spellcasting ability (spell save DC 17):\n\n\
      **At will:** [detect magic](Mechanics/CLI/spells/detect-magic-xphb.md), [detect\
      \ thoughts](Mechanics/CLI/spells/detect-thoughts-xphb.md), [mage hand](Mechanics/CLI/spells/mage-hand-xphb.md)\
      \ (the hand is invisible)\n\n**3/day each:** [clairvoyance](Mechanics/CLI/spells/clairvoyance-xphb.md)\
      \ (as an action), [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md)\n\
      \n**1/day:** [plane shift](Mechanics/CLI/spells/plane-shift-xphb.md) (self only)"
    "name": "Spellcasting (Psionics)"
"reactions":
  - "desc": "When hit by an attack roll, Voalsh gains a +4 bonus to its AC against\
      \ that attack roll, potentially causing it to miss. Then Voalsh, along with\
      \ any equipment it is wearing or carrying, magically teleports up to 60 feet\
      \ to an unoccupied space it can see."
    "name": "Warp Reality"
"source":
  - "PaBTSO"
"image": "Mechanics/CLI/bestiary/npc/token/voalsh-pabtso.webp"
```
^statblock