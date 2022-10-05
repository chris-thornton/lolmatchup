/* eslint-disable */

import React, { Component, createElement } from 'react';
import './App.css';
import About from './components/About';
import champList from './components/champList';
import ChampDropDownLeft from './components/ChampDropDownLeft';
import ChampDropDownRight from './components/ChampDropDownRight';
import logo from './images/logoTest.png';
import lolIcon from './images/lol-icon.png';  
import versus from './images/versus.png';
import defaultChampIcon from './defaultChampIcon.png';
import blackbg from './blackbg.png';
import forceIcon from './staticons/force.png';
import healthIcon from './staticons/health.png';
import armorIcon from './staticons/armor.png';
import arPenIcon from './staticons/arPen2.png';
import mPenIcon from './staticons/mPen.png';
import vampIcon from './staticons/omnivamp.png';
import lifestealIcon from './staticons/lifesteal.png';
import magicResIcon from './staticons/magicRes.png';
import ADIcon from './staticons/attackDamage.png';
import attackSpeedIcon from './staticons/attackSpeed.png';
import critChanceIcon from './staticons/critChance.png';
import manaIcon from './staticons/mana.png';
import APIcon from './staticons/abilityPower.png';
import cdrIcon from './staticons/cdr.png';
import forceRing from './staticons/forceRing.png';
import healthRing from './staticons/healthRing.png';
import armorRing from './staticons/armorRing.png';
import magicResRing from './staticons/magicResRing.png';
import cdrRing from './staticons/cdrRing.png';
import attackSpeedRing from './staticons/attackSpeedRing.png';
import healthRegenIcon from './staticons/healthRegen.png';
import manaRegenIcon from './staticons/manaRegen.png';
import healShieldIcon from './staticons/healShieldPower.png';
import moveSpeedIcon from './staticons/movementspeed.png';
import goldIcon from './staticons/gold.png';
import ApheliosLeft from './components/ApheliosLeft';
import ApheliosRight from './components/ApheliosRight';

class App extends Component {
  constructor() {
    super()
    this.state = {
      about: false,
      searchFieldLeft: '',
      searchFieldRight: '',
      filteredChampsLeft: [],
      filteredChampsRight: [],
      filteredChampPairsLeft: [],
      filteredChampPairsRight: [],
      champIndexLeft: 148,
      champIndexRight: 148,
      champNameLeft: '',
      champNameRight: '',
      champIconUrlLeft: defaultChampIcon,
      champIconUrlRight: defaultChampIcon,
      totalStatsLeft: {
        ad: 10.8,
        as: 0,
        arm: 0, 
        mr: 0,
        hp: 15,
        hpRegen: 0,
        ap: 0,
        cdr: 0,
        critChance: 0,
        mana: 0,
        manaRegen: 0,
        lethality: 0,
        arPenRatio: 0,
        magicPenFlat: 0,
        magicPenRatio: 0,
        omni: 0,
        lifeSteal: 0
      },
      totalStatsRight: {
        ad: 10.8,
        as: 0,
        arm: 0, 
        mr: 0,
        hp: 15,
        hpRegen: 0,
        ap: 0,
        cdr: 0,
        critChance: 0,
        mana: 0,
        manaRegen: 0,
        lethality: 0,
        arPenRatio: 0,
        magicPenFlat: 0,
        magicPenRatio: 0,
        omni: 0,
        lifeSteal: 0
      },
      tfTotalStatsLeft: {
        ad: 10.8,
        as: 0,
        arm: 0, 
        mr: 0,
        hp: 15,
        hpRegen: 0,
        ap: 0,
        cdr: 0,
        critChance: 0,
        mana: 0,
        manaRegen: 0,
        lethality: 0,
        arPenRatio: 0,
        magicPenFlat: 0,
        magicPenRatio: 0,
        omni: 0,
        lifeSteal: 0
      },
      tfTotalStatsRight: {
        ad: 10.8,
        as: 0,
        arm: 0, 
        mr: 0,
        hp: 15,
        hpRegen: 0,
        ap: 0,
        cdr: 0,
        critChance: 0,
        mana: 0,
        manaRegen: 0,
        lethality: 0,
        arPenRatio: 0,
        magicPenFlat: 0,
        magicPenRatio: 0,
        omni: 0,
        lifeSteal: 0
      },
      keystoneLeft: '40 to 180, based on level.',
      ksArrayLeft: [40,48,56,65,73,81,89,98,106,
        114,122,131,139,147,155,164,172,180],
      ksBonusADRatioLeft: 0,
      ksAPRatioLeft: 0,
      ksHPRatioLeft: 0,
      ksBonusHPRatioLeft: 0,
      ksCDLeft: [6,6,6,6,6,6,6,6,6,
      6,6,6,6,6,6,6,6,6],
      ksCDTextLeft: '',
      keystoneIDLeft: {
        title: 'Press the Attack',
        index: 0,
        text: '',
        type: 'Adaptive Damage'
      },
      ksPart2Left: {
        text: '',
        type: '',
        bonusADRatio: 0,
        APRatio: 0,
        HPRatio: 0,
        array: []
      },
      ksPart2DisplayLeft: 'none',
      keystoneRight: '40 to 180, based on level.',
      ksArrayRight: [40,48,56,65,73,81,89,98,106,
        114,122,131,139,147,155,164,172,180],
      ksBonusADRatioRight: 0,
      ksAPRatioRight: 0,
      ksHPRatioRight: 0,
      ksBonusHPRatioRight: 0,
      ksCDRight: [6,6,6,6,6,6,6,6,6,
      6,6,6,6,6,6,6,6,6],
      ksCDTextRight: '',
      keystoneIDRight: {
        title: 'Press the Attack',
        index: 0,
        text: '',
        type: 'Adaptive Damage'
      },
      ksPart2Right: {
        text: '',
        type: '',
        bonusADRatio: 0,
        APRatio: 0,
        HPRatio: 0,
        array: []
      },
      ksPart2DisplayRight: 'none',
      aphelLeft: {
        ad: '[4, 8, 12, 16, 20, 24]',
        as: '[0.06, 0.12, 0.18, 0.24, 0.3, 0.36]',
        lethal: '[3.5, 7, 10.5, 14, 17.5, 21]',
      },
      aphelRight: {
        ad: '[4, 8, 12, 16, 20, 24]',
        as: '[0.06, 0.12, 0.18, 0.24, 0.3, 0.36]',
        lethal: '[3.5, 7, 10.5, 14, 17.5, 21]',
      },
      itemDisplayLeft: [],
      itemDisplayRight: [],
      mythicLeft: '',
      mythicStatsLeft: {
        ad: 0,
        as: 0,
        arm: 0, 
        mr: 0,
        hp: 0,
        hpRegen: 0,
        ap: 0,
        cdr: 0,
        critChance: 0,
        mana: 0,
        manaRegen: 0,
        lethality: 0
      },
      mythicRight: '',
      mythicStatsRight: {
        ad: 0,
        as: 0,
        arm: 0, 
        mr: 0,
        hp: 0,
        hpRegen: 0,
        ap: 0,
        cdr: 0,
        critChance: 0,
        mana: 0,
        manaRegen: 0,
        lethality: 0
      },
      QRankLeft: 0,
      QRankRight: 0,
      WRankLeft: 0,
      WRankRight: 0,
      ERankLeft: 0,
      ERankRight: 0,
      RRankLeft: 0,
      RRankRight: 0
    }
  };

  runeHash = {
    rune0: {
      baseSrc: forceIcon,
      ringSrc: forceRing,
      stat: ['force', 9]
    },
    rune1: {
      baseSrc: attackSpeedIcon,
      ringSrc: attackSpeedRing,
      stat: ['as', 0.1]
    },
    rune2: {
      baseSrc: cdrIcon,
      ringSrc: cdrRing,
      stat: ['cdr', 8]
    },
    rune3: {
      baseSrc: forceIcon,
      ringSrc: forceRing,
      stat: ['force', 9] 
    },
    rune4: {
      baseSrc: armorIcon,
      ringSrc: armorRing,
      stat: ['arm', 6]
    },
    rune5: {
      baseSrc: magicResIcon,
      ringSrc: magicResRing,
      stat: ['mr', 8] 
    },
    rune6: {
      baseSrc: healthIcon,
      ringSrc: healthRing,
      stat: 
        ['hp', 
          15,19.41,23.82,28.24,32.65,37.06,41.47,45.88,50.29,
          54.71,59.12,63.53,67.94,72.35,76.76,81.18,85.59,90
        ]
    },
    rune7: {
      baseSrc: armorIcon,
      ringSrc: armorRing,
      stat: ['arm', 6]
    },
    rune8: {
      baseSrc: magicResIcon,
      ringSrc: magicResRing,
      stat: ['mr', 8]
    },
    rune9: {
      baseSrc: forceIcon,
      ringSrc: forceRing,
      stat: ['force', 9]
    },
    rune10: {
      baseSrc: attackSpeedIcon,
      ringSrc: attackSpeedRing,
      stat: ['as', 0.1]
    },
    rune11: {
      baseSrc: cdrIcon,
      ringSrc: cdrRing,
      stat: ['cdr', 8]
    },
    rune12: {
      baseSrc: forceIcon,
      ringSrc: forceRing,
      stat: ['force', 9]
    },
    rune13: {
      baseSrc: armorIcon,
      ringSrc: armorRing,
      stat: ['arm', 6]
    },
    rune14: {
      baseSrc: magicResIcon,
      ringSrc: magicResRing,
      stat: ['mr', 8]
    },
    rune15: {
      baseSrc: healthIcon,
      ringSrc: healthRing,
      stat: 
        ['hp', 
          15,19.41,23.82,28.24,32.65,37.06,41.47,45.88,50.29,
          54.71,59.12,63.53,67.94,72.35,76.76,81.18,85.59,90
        ]
    },
    rune16: {
      baseSrc: armorIcon,
      ringSrc: armorRing,
      stat: ['arm', 6]
    },
    rune17: {
      baseSrc: magicResIcon,
      ringSrc: magicResRing,
      stat: ['mr', 8]
    }
  }

  onSearchChange = (event) => {
    var side = '';
    if (event.target.nextSibling) {
      side = 'Left';
    } else {
      side = 'Right';
    };
    this.setState({ [`searchField${side}`]: event.target.value });
    this.setState({ [`filteredChamps${side}`]: champList.filter(champ => {
      return champ.name.toLowerCase().startsWith(event.target.value.toLowerCase()) }).map(champ => {
        return champ.name
      })
    });
    this.setState({ [`filteredChampPairs${side}`]: champList.filter(champ => {
      return champ.name.toLowerCase().startsWith(event.target.value.toLowerCase()) })
    })
    if (event.keyCode === 40) {
      alert('arrow down!')
    }
  };

  abilities = ["passive", "Q", "W", "E", "R"];
  rankedAbilities = ["Q", "W", "E", "R"];
  transformAbilities = ["passiveTransform", "QTransform", "WTransform", "ETransform", "RTransform"];
  images = {};
  portraits = {};
  ksIcons = {};
  mythicIcons = {};
  itemIcons = {};
  champNameLeft = '';
  champNameRight = '';
  champFileLeft = {
    stats: {
      baseHP: 0,
      hpPerLvl: 0,
      baseHPRegen: 0,
      hpRegenPerLvl: 0,
      mana: {
          base: 0,
          manaPerLvl: 0,
          manaBaseRegen: 0,
          manaRegenPerLvl: 0
      },
      baseDamage: 0,
      damagePerLvl: 0,
      baseArmor: 0,
      armorPerLvl: 0,
      baseMR: 0,
      mrPerLvl: 0,
      attackSpeed: 0,
      asRatio: 0,
      asPerLvl: 0
    }
  };
  champFileRight = {
    stats: {
      baseHP: 0,
      hpPerLvl: 0,
      baseHPRegen: 0,
      hpRegenPerLvl: 0,
      mana: {
          base: 0,
          manaPerLvl: 0,
          manaBaseRegen: 0,
          manaRegenPerLvl: 0
      },
      baseDamage: 0,
      damagePerLvl: 0,
      baseArmor: 0,
      armorPerLvl: 0,
      baseMR: 0,
      mrPerLvl: 0,
      attackSpeed: 0,
      asRatio: 0,
      asPerLvl: 0
    }
  };
  levelLeft = 1;
  levelRight = 1;
  itemStatsLeft = {
    ad: 0,
    as: 0,
    arm: 0,
    arPenRatio: 0,
    lethality: 0,
    lifeSteal: 0,
    omni: 0, 
    mr: 0,
    magicPenFlat: 0,
    magicPenRatio: 0,
    hp: 0,
    hpRegen: 0,
    ap: 0,
    cdr: 0,
    critChance: 0,
    IECrit: false,
    mana: 0,
    manaRegen: 0
  };
  manaLeft = 1;
  manaRight = 1;
  dcapLeft = 1;
  dcapCountLeft = 0;
  dcapRight = 1;
  dcapCountRight = 0;
  sterakLeft = 1;
  sterakCountLeft = 0;
  sterakRight = 1;
  winterLeft = 0;
  winterCountLeft = 0;
  winterRight = 0;
  winterCountRight = 0;
  sterakCountRight = 0;
  itemStatsRight = {
    ad: 0,
    as: 0,
    arm: 0,
    arPenRatio: 0,
    lethality: 0, 
    lifeSteal: 0,
    omni: 0, 
    mr: 0,
    magicPenFlat: 0,
    magicPenRatio: 0,
    hp: 0,
    hpRegen: 0,
    ap: 0,
    cdr: 0,
    critChance: 0,
    IECrit: false,
    mana: 0,
    manaRegen: 0
  };
  appliedStatsLeft = {
    ad: 0,
    as: 0,
    arm: 0,
    arPenRatio: 0,
    lethality: 0,
    lifeSteal: 0,
    omni: 0,  
    mr: 0,
    magicPenFlat: 0,
    magicPenRatio: 0,
    hp: 0,
    hpRegen: 0,
    ap: 0,
    cdr: 0,
    critChance: 0,
    mana: 0,
    manaRegen: 0
  };
  appliedPassiveLeft = {};
  appliedQLeft = {};
  appliedWLeft = {};
  appliedELeft = {};
  appliedRLeft = {};
  appliedPassiveRight = {};
  appliedQRight = {};
  appliedWRight = {};
  appliedERight = {};
  appliedRRight = {};
  appliedStatsRight = {
    ad: 0,
    as: 0,
    arm: 0,
    arPenRatio: 0,
    lethality: 0,
    lifeSteal: 0,
    omni: 0,  
    mr: 0,
    magicPenFlat: 0,
    magicPenRatio: 0,
    hp: 0,
    hpRegen: 0,
    ap: 0,
    cdr: 0,
    critChance: 0,
    mana: 0,
    manaRegen: 0
  };
  runesLeft = {
    ad: 10.8,
    as: 0,
    arm: 0,
    mr: 0,
    hp: 15,
    ap: 0,
    cdr: 0
  };
  runesRight = {
    ad: 10.8,
    as: 0,
    arm: 0,
    mr: 0,
    hp: 15,
    ap: 0,
    cdr: 0
  };
  forceTypeLeft = 'ad';
  forceTypeRight = 'ad';
  haveMythicLeft = false;
  haveMythicRight = false;
  mythicBonusLeft = [];
  mythicBonusRight = [];
  itemCounterLeft = 0;
  itemCounterRight = 0;
  invenLeftTT1 = '';
  invenLeftTT2 = '';
  invenLeftTT3 = '';
  invenLeftTT4 = '';
  invenLeftTT5 = '';
  invenLeftTT6 = '';
  invenRightTT1 = '';
  invenRightTT2 = '';
  invenRightTT3 = '';
  invenRightTT4 = '';
  invenRightTT5 = '';
  invenRightTT6 = '';
  tfChampPair = {
    Elise: 'Spider Form ',
    Gnar: 'Mega Gnar ',
    Jayce: 'Hammer Stance ',
    Kled: 'Unmounted ',
    Nidalee: 'Cougar Form ',
    RekSai: 'Burrowed ',
    Shyvana: 'Dragon Form '
  };

  calculateAbility(side) {
      var abilitiesLength = document.getElementsByClassName(`abilityBox${side}`).length;
      for (var i = 0; i < abilitiesLength; i++) {
        var divToEmpty = document.getElementsByClassName(`abilityBox${side}`)[i];
        while (divToEmpty.firstChild) {
          divToEmpty.removeChild(divToEmpty.firstChild);
        };
        document.getElementById(`${this.abilities[i]}${side}Applied`).childNodes[0].style.visibility = 'hidden';
        document.getElementById(`${this.abilities[i]}${side}Applied`).childNodes[1].style.visibility = 'hidden';
        document.getElementById(`${this.abilities[i]}${side}Applied`).childNodes[2].style.visibility = 'hidden';
      };

      var otherSide = '';
      if (side === 'Left') {
        otherSide = 'Right'
      } else {
        otherSide = 'Left'
      };
      var champFile = this[`champFile${side}`];
      var statsPath = champFile[`stats`];
      var champName = this[`champName${side}`];

      var enemyStats = this[`champFile${otherSide}`].stats;
      var enemyArmor = this.state[`totalStats${otherSide}`].arm;
      var enemyMR = this.state[`totalStats${otherSide}`].mr;
      var enemyHP = this.state[`totalStats${otherSide}`].hp;
      var itemStats = this[`itemStats${side}`];
      var enemyItemStats = this[`itemStats${otherSide}`];
      var champLevel = this[`level${side}`] - 1;
      var champLvlRatio = champLevel * (0.7025 + 0.0175 * champLevel);
      var enemyLvlRatio = (this[`level${otherSide}`] - 1) * (0.7025 + 0.0175 * (this[`level${otherSide}`] - 1));
      var runeStats = this[`runes${side}`];
      var enemyRuneStats = this[`runes${otherSide}`];
      var appliedStats = this[`appliedStats${side}`];
      var enemyAppliedStats = this[`appliedStats${otherSide}`];

      var totalAD = itemStats.ad + runeStats.ad + 
      (statsPath["baseDamage"] + champLvlRatio * statsPath["damagePerLvl"])*this[`sterak${side}`];
      var bonusAD = itemStats.ad + runeStats.ad;
      var totalAP = (itemStats.ap + appliedStats.ap + runeStats.ap)*this[`dcap${side}`];
      var totalAS = statsPath["attackSpeed"] + runeStats.as
      + (itemStats.as + champLvlRatio * statsPath["asPerLvl"]) * statsPath["asRatio"];
      var bonusAS = statsPath["asRatio"] * itemStats.as + runeStats.as;
      var bonusASRatio = itemStats.as + runeStats.as;
      var totalArmor = itemStats.arm + runeStats.arm + statsPath["baseArmor"] + champLvlRatio * statsPath["armorPerLvl"];
      var bonusArmor = itemStats.arm + runeStats.arm;
      var totalMR = itemStats.mr + runeStats.mr + statsPath["baseMR"] + champLvlRatio * statsPath["mrPerLvl"];
      var bonusMR = itemStats.mr + runeStats.mr;
      var totalHP = itemStats.hp + runeStats.hp + statsPath["baseHP"] + champLvlRatio * statsPath["hpPerLvl"];
      if (champName === 'Kled') {
        totalHP += champFile['statsTransform']['baseHP'] + champFile['statsTransform']['hpPerLvl'] * champLvlRatio
      }
      var bonusHP = itemStats.hp + runeStats.hp;
      var enemyTotalHP = enemyStats["baseHP"] + (enemyLvlRatio * enemyStats["hpPerLvl"]) + enemyItemStats.hp + enemyRuneStats.hp;
      if (this.state[`champName${otherSide}`] === 'Kled') {
        enemyTotalHP += this[`champFile${otherSide}`]['statsTransform']['baseHP'] 
        + this[`champFile${otherSide}`]['statsTransform']['hpPerLvl'] * champLvlRatio
      };
      var enemyBonusHP = enemyItemStats.hp + enemyRuneStats.hp;
      var enemyTotalArmor = enemyStats.arm + enemyItemStats.arm + enemyRuneStats.arm;
      var enemyTotalMR = enemyStats.mr + enemyItemStats.mr + enemyRuneStats.mr;
      var totalCritChance = itemStats.critChance;
      if (champName === 'Tryndamere' || champName === 'Yone') {
        totalCritChance *= 2
      }; 
      var totalLethality = itemStats.lethality;
      var totalLifeSteal = itemStats.lifeSteal;
      var totalMana = (itemStats.mana + statsPath["mana"]["base"] + statsPath["mana"]["manaPerLvl"] * champLvlRatio)
      *this[`mana${side}`];
      var bonusMana = itemStats.mana * this[`mana${side}`];
      var nonBaseAS = runeStats.as + (itemStats.as + champLvlRatio * statsPath["asPerLvl"]) * statsPath["asRatio"];
      var hasteRatio = 100/(100 + itemStats.cdr);

      var QRank;
      if (document.getElementById(`QRank${side}`).value == 0) {
        QRank = 0;
      } else {
        QRank = document.getElementById(`QRank${side}`).value - 1
      }
      var WRank;
      if (document.getElementById(`WRank${side}`).value == 0) {
        WRank = 0;
      } else {
        WRank = document.getElementById(`WRank${side}`).value - 1
      }
      var ERank;
      if (document.getElementById(`ERank${side}`).value == 0) {
        ERank = 0;
      } else {
        ERank = document.getElementById(`ERank${side}`).value - 1
      }
      var RRank = document.getElementById(`RRank${side}`).value;

      for (var i = 0; i < this.abilities.length; i++) {
        var ability = this.abilities[i];
        var abilityDiv = document.getElementsByClassName(`abilityBox${side}`)[i];
        if (i !== 0) {
          var rankIndex = document.getElementById(`${ability}Rank${side}`).value - 1
        };
        function arrayCheck(value) {
          if (typeof value !== 'number') {
            return value[rankIndex]
          } else {
            return value
          }
        };
        function lengthCheck(value) {
          if (value.toString().length > 5) {
            return value.toFixed(3)
          } else {
            return value
          }
        };
        function removeSpace2(x) {
          if (typeof x !== 'number') {
            return JSON.stringify(x).replace(/,/g, ', ')
          } else {
            return x
          }
        };
        function removeSpace(x) {
          if (typeof x !== 'number') {
            for (var i = 0; i < x.length; i++) {
              var arrayNum = document.createTextNode(x[i]);
              abilityDiv.appendChild(arrayNum);
              if (x[i+1]) {
                var addSlash = document.createElement('span');
                addSlash.innerText = ' / ';
                addSlash.style.color = '#ffffb9'
                abilityDiv.appendChild(addSlash);
              }
            };
            //return JSON.stringify(x).replace(/,/g, ' / ')
          } else {
            var a = document.createTextNode(x);
            abilityDiv.appendChild(a);
          }
        };
        /*function removeParen2(x) {
          if (typeof x !== 'number') {
            return JSON.stringify(x).replace(/,/g, ', ').replace(/^\[|]$/g, '')
          } else {
            return x
          }
        };*/
        function removeParen(x) {
          if (typeof x !== 'number') {
            return JSON.stringify(x).replace(/,/g, ' / ').replace(/^\[|]$/g, '')
          } else {
            return x
          }
        }
        function mapParen(x) {
          return JSON.stringify(x).replace(/,/g, ', ').replace(/"/g,"").replace(/^\[|]$/g, '')
        };
        function mapSpace(x) {
          return JSON.stringify(x).replace(/,/g, ', ').replace(/"/g,"")
        }
        function countDecimals(value) {
          if(Math.floor(value) === value){ 
            return 0
          } else {
          return value.toString().split(".")[1].length || 0; 
          }
        };
        function singleBreak() {
          var br = document.createElement('br');
          abilityDiv.appendChild(br);
        };
        function doubleBreak() {
          var br = document.createElement('br');
          abilityDiv.appendChild(br)
          var br2 = document.createElement('br');
          abilityDiv.appendChild(br2)
        };
        function colon() {
          var a = document.createTextNode(': ');
          abilityDiv.appendChild(a);
        };
        function underLine(string) {
          var underL = document.createElement('u');
          underL.innerText = string;
          abilityDiv.appendChild(underL);
          colon();
        };
        function addGrey(x) {
          var b = document.createElement('b');
          b.innerText = x;
          b.style.color = 'lightGrey';
          abilityDiv.appendChild(b);
        };
        function addBold(text) {
          var b = document.createElement('b');
          b.innerText = text;
          abilityDiv.appendChild(b);
        };
        function addText(text) {
          var a = document.createTextNode(text);
          abilityDiv.appendChild(a);
        };
        function colorText(text, colorRgb, colorSrc){
          var c = document.createElement('span');
          var d = document.createTextNode(text);
          c.appendChild(d);
          c.style.color = colorRgb;
          abilityDiv.appendChild(c);
          var e = document.createElement('img');
          e.src = colorSrc;
          abilityDiv.appendChild(e);
        };
        function colorAD(text){
          colorText(text, 'rgb(189, 125, 76)', ADIcon)
        };
        function colorAP(text){
          colorText(text, 'rgb(156, 255, 247)', APIcon)
        };
        function colorHP(text){
          colorText(text, 'rgb(32, 152, 93)', healthIcon)
        };
        function colorArmor(text){
          colorText(text, 'rgb(247, 113, 90)', armorIcon)
        };
        function colorMR(text){
          colorText(text, 'rgb(206, 142, 214)', magicResIcon)
        };
        function colorAS(text){
          colorText(text, 'rgb(255, 203, 90)', attackSpeedIcon)
        };
        function colorForce(text){
          colorText(text, 'rgb(132, 69, 255)', forceIcon)
        };
        function colorCrit(text){
          colorText(text, 'rgb(213, 58, 66)', critChanceIcon)
        };
        function colorMana(text){
          colorText(text, 'rgb(29, 169, 255)', manaIcon)
        };
        function multiplyTicks(x) {
          if (typeof x !== 'number') {
            return x.map((z, i) => {
              if (typeof path["ticks"] === 'number') {
                return (z * path["ticks"]).toFixed()
              } else {
                return (z * path['ticks'][i]).toFixed()
              }
            })
          } else {
            if (typeof path['ticks'] === 'number') {
              return (x * path["ticks"]).toFixed()
            } else {
              return path['ticks'].map(z => {
                return (x * z).toFixed()
              })
            }
          }
        };
        function multiplyTicks2(x) {
          if (typeof(x) !== 'number' && typeof(path["ticks"]) === 'number') {
            return x.map(z => {
              if (path["ticks"] % 4 === 0 && (z.toString().slice(-3) === ".25" || z.toString().slice(-3) === ".75")
              || (z.toString().slice(-2) === ".5" && path["ticks"] % 2 === 0) || (path["ticks"] % 8 === 0 && z.toString().slice(-4) === ".125")) {
                return Math.round(path["ticks"] * z)
              } else if (path["ticks"] % 2 === 0 && path["ticks"] % 4 !== 0 && (z.toString().slice(-3) === ".25" 
                || z.toString().slice(-3) === ".75")) {
                  return (z * path["ticks"]).toFixed(1)
              } else if (2 < countDecimals(z) ) {
                  return (z * path["ticks"]).toFixed(2)
              } else {
                  return (z * path["ticks"]).toFixed(countDecimals(z))
              }
            })   
          }
          if (typeof(path["ticks"]) !== 'number' && typeof(x) === 'number') {
            return path["ticks"].map(z => {
              if (z % 4 === 0 && (x.toString().slice(-3) === ".25" || x.toString().slice(-3) === ".75")
              || (x.toString().slice(-2) === ".5" && z % 2 === 0) || (z % 8 === 0 && x.toString().slice(-4) === ".125")) {
                return Math.round(z * x)
              } else if (z % 2 === 0 && z % 4 !== 0 && (x.toString().slice(-3) === ".25" 
                || x.toString().slice(-3) === ".75")) {
                  return (x * z).toFixed(1)
              } else if (2 < countDecimals(x) ) {
                  return (x * z).toFixed(2)
              } else {
                  return (x * z).toFixed(countDecimals(x))
              }
            })
          }
          if ((x.toString().slice(-3) === (".25" || ".75") && path["ticks"]%4 === 0)
          || (x.toString().slice(-2) === ".5" && path["ticks"]%2 === 0)
          || (x.toString().slice(-4) === ".125" && path["ticks"]%8 === 0)) {
            return Math.round(x * path["ticks"])
          } else if (x.toString().slice(-3) === (".25" || ".75") && path["ticks"]%4 !== 0 
            && path["ticks"]%2 === 0) {
              return (x * path["ticks"].toFixed(1))
          } else if ( 2 < countDecimals(x) ) {
              return (x * path["ticks"]).toFixed(2)
          } else {
              return (x * path["ticks"]).toFixed(countDecimals(x))
          }
        }

        function factorRes (type, totalDmg) {
          if (!enemyStats.baseHP || type === 'True') {
            return Math.round(totalDmg);
          } else if (type === 'Physical') {
            return Math.round(totalDmg * 100/(100+enemyArmor));
          } else if (type === 'Magic') {
            return Math.round(totalDmg * 100/(100+enemyMR));
          }
        };

        if (champFile[ability]) {
          if (ability === 'passive' || document.getElementById(`${ability}Rank${side}`).value == 0) {

            if (champFile[ability]["text"]) {
              addText(champFile[ability]["text"]);
              doubleBreak();
            };

            if (champFile[ability]["auto"]) {
              var path = champFile[ability]["auto"];
              addBold('Modified Basic Attack: ');
              var baseAutoDmg = totalAD;
              var newAutoDmg = baseAutoDmg;
              if (path["dmgRatio"]) {
                underLine('Damage Ratio');
                addText(path["dmgRatio"])
                newAutoDmg = path["dmgRatio"] * baseAutoDmg;
              };
              if (path["dmgRatioPerCritChance"]) {
                singleBreak();
                underLine('Damage Ratio per Crit Chance');
                addText(path["dmgRatioPerCritChance"]);
                newAutoDmg *= path["dmgRatioPerCritChance"] * totalCritChance;
              };
              if (path["system"] === 'minMax') {
                underLine('Min');
                if (path["minADRatioByLvl"]) {
                  addText('(' + path["minADRatioByLvl"][0] + " to " + path["minADRatioByLvl"][17]);
                  colorAD(' AD');
                  addText("ratio, based on lvl. ");
                  underLine('Currently');
                  addText(path["minADRatioByLvl"][champLevel] + ') ');
                };
                singleBreak();
                addText('Max Damage');
                if (path["maxADRatioByLvl"]) {
                  addText(': (' + path["maxADRatioByLvl"][0] + " to " + path["maxADRatioByLvl"][17]);
                  colorAD(' AD'); 
                  addText("ratio, based on lvl. ");
                  underLine('Currently');
                  addText(path["maxADRatioByLvl"][champLevel] + ') ')
                };
              };
              if (path["critDmg"]) {
                singleBreak();
                underLine('Crit Damage Ratio');
                addText(path["critDmg"]);
                if (path["critDmgWithIE"]) {
                  addText(' (' + path["critDmgWithIE"] + ' with Infinity Edge)');
                };
                doubleBreak();
                addBold('Crit Damage: ');
                addText(factorRes('Physical', newAutoDmg * path["critDmg"]));
                if (path["critDmgWithIE"]) {
                  addText(' (' + factorRes('Physical', newAutoDmg * path["critDmgWithIE"]) + ' with Infinity Edge)');
                }
              };
              if (path["dmgRatio"]) {
                doubleBreak();
                addBold('Basic Attack Damage: ');
                addText(factorRes('Physical', newAutoDmg));
              };
              if (path["system"] === 'minMax') {
                doubleBreak();
                addBold('Basic Attack Damage: ');
                underLine('Min');
                addText(factorRes('Physical', path["minADRatioByLvl"][champLevel]*(baseAutoDmg))+ ' (Crit: ' 
                + factorRes('Physical', path["minADRatioByLvl"][champLevel]*(baseAutoDmg)*(path['critDmg'])) 
                + ', Crit with IE: ' + factorRes('Physical', 
                path["minADRatioByLvl"][champLevel]*(baseAutoDmg)*(path['critDmgWithIE'])) + ')');
                singleBreak();
                underLine('Max');
                addText(factorRes('Physical', path["maxADRatioByLvl"][champLevel]*(baseAutoDmg))+ ' (Crit: ' + 
                factorRes('Physical', path["maxADRatioByLvl"][champLevel]*(baseAutoDmg)*(path['critDmg']))
                + ', Crit with IE: ' + factorRes('Physical', 
                path["maxADRatioByLvl"][champLevel]*(baseAutoDmg)*(path['critDmgWithIE'])) + ')' );
              };
              doubleBreak();
            };

            if (champFile[ability]["autoEmpower"]) {
              var damage = champFile[ability]["autoEmpower"]["damage"];
              if (!damage["durationAutos"] && !damage['autoCoolDown']) {
                addBold('Empowered Basic Attack: ')
              } else if (damage['autoCoolDown']) {
                addBold('Empower 1 in every ' +  damage["autoCoolDown"] + ' Basic Attacks: ')
              } else {
                addBold('Empower ' +  damage["durationAutos"] + ' Basic Attacks: ')
              };
              underLine(damage['type'] + " Damage");
              if (damage["dmg"]) {
                removeSpace(damage["dmg"]);
              };
              if (damage["dmgByLvl"]) {
                addText(' [' + damage["dmgByLvl"][0] + " to " + damage["dmgByLvl"][17] + ", based on lvl. ");
                underLine('Currently');
                addText(damage["dmgByLvl"][champLevel] + ']')
              };
              if (damage["dmgByERank"]) {
                var path = damage["dmgByERank"];
                addText('[' + path[0] + " to " + path[4] + ", based on E rank. ");
                underLine("Currently");
                addText(path[ERank] + '] ');
              };
              if (damage["dmgPer5Chimes"]) {
                addText(" (+" + damage["dmgPer5Chimes"] + ' per 5 chimes)');
              };
              if (damage["dmgPerStack"]) {
                addText(" (+" + damage["dmgPerStack"] + ' per stack)');
              };
              if (damage["APRatio"]) {
                addText(" (+" + damage["APRatio"]);
                colorAP(' AP');
                addText("ratio)");
              };
              if (damage["ADRatio"]) {
                if (champName !== 'Jayce') {
                  addText(' (+' + removeParen(damage["ADRatio"]));
                  colorAD(' AD');
                  addText("ratio)");
                } else {
                  addText('(' + removeParen(damage["ADRatio"]));
                  colorAD(' AD');
                  addText("ratio)");
                }
              };
              if (damage["ADRatioByLvl"]) {
                addText('(+' + damage["ADRatioByLvl"][0] + " to " + damage["ADRatioByLvl"][17]);
                colorAD(' AD'); 
                addText("ratio, based on lvl. ");
                underLine('Currently');
                addText(damage["ADRatioByLvl"][champLevel] + ")");
              };
              if (damage["bonusADRatio"]) {
                addText(" (+" + removeParen(damage["bonusADRatio"]));
                colorAD(' Bonus AD');
                addText("ratio)");
              };
              if (damage["enemyMaxHPRatio"]) {
                addText(" (+" + removeParen(damage["enemyMaxHPRatio"]));
                colorHP(' Enemy Max HP');
                addText("ratio)");
              };
              if (damage["enemyMaxHPRatioPer100AD"]) {
                addText(" (+" + removeParen(damage["enemyMaxHPRatioPer100AD"]));
                colorHP(' Enemy Max HP'); 
                addText("ratio per ");
                colorAD('100 AD');
                addText(')');
              };
              if (damage["enemyMaxHPRatioPer100BonusAD"]) {
                addText(" (+" + removeParen(damage["enemyMaxHPRatioPer100BonusAD"]));
                colorHP(' Enemy Max HP'); 
                addText("ratio per ")
                colorAD('100 Bonus AD');
                addText(')');
              };
              if (damage["enemyMaxHPRatioPer100AP"]) {
                addText(" (+" + removeParen(damage["enemyMaxHPRatioPer100AP"]));
                colorHP(' Enemy Max HP');
                addText("ratio per ");
                colorAP('100 AP');
                addText(')');
              };
              if (damage["enemyMaxHPRatioByLvl"]) {
                addText('(+' + damage["enemyMaxHPRatioByLvl"][0] 
                + " to " + damage["enemyMaxHPRatioByLvl"][17]);
                colorHP(' Enemy Max HP');
                addText("ratio, based on lvl. ");
                underLine('Currently');
                addText(damage["enemyMaxHPRatioByLvl"][champLevel] + ") ");
              };
              if (damage["bonusMoveSpeedRatioByLvl"]) {
                addText('(' + damage["bonusMoveSpeedRatioByLvl"][0] + " to " 
                + damage["bonusMoveSpeedRatioByLvl"][17] + " Bonus Move Speed ratio, based on lvl. ");
                underLine('Currently');
                addText(damage["bonusMoveSpeedRatioByLvl"][champLevel] + ") ")
              };
              if (damage["enemyMaxHPRatioPerStack"]) {
                addText(" (+" + removeParen(damage["enemyMaxHPRatioPerStack"]));
                colorHP(' Enemy Max HP');
                addText("ratio per stack)");
              };
              if (damage["maxHPRatio"]) {
                addText(" (+" + removeParen(damage["maxHPRatio"]));
                colorHP(' Max HP');
                addText("ratio)");
              };
              if (damage["enemyCurrentHPRatio"]) {
                addText(" (+" + removeParen(damage["enemyCurrentHPRatio"]));
                colorHP(' Enemy Current HP'); 
                addText("ratio)");
              };
              if (damage["enemyCurrentHPRatioByLvl"]) {
                addText('(' + damage["enemyCurrentHPRatioByLvl"][0] + " to " + damage["enemyCurrentHPRatioByLvl"][17]);
                colorHP(" Enemy Current HP"); 
                addText("ratio, based on lvl. ");
                underLine('Currently');
                addText(': ' + damage["enemyCurrentHPRatioByLvl"][champLevel] + ") ");
              };
              if (damage["enemyMissingHPRatio"]) {
                addText(" (+" + removeParen(damage["enemyMissingHPRatio"]));
                colorHP(" Enemy Missing HP");
                addText("ratio)");
              };
              if (damage["enemyMissingHPRatioPer100AP"]) {
                addText(" (+" + removeParen(damage["enemyMissingHPRatioPer100AP"]));
                colorHP(" Enemy Missing HP");
                addText("ratio per ");
                colorAP('100 AP');
                addText(')');
              };
              if (damage["enemyMissingHPRatioByLvl"]) {
                addText('(' + damage["enemyMissingHPRatioByLvl"][0] + " to " + damage["enemyMissingHPRatioByLvl"][17]);
                colorHP(' Enemy Missing HP');
                addText("ratio, based on lvl. ");
                underLine('Currently');
                addText(': ' + damage["enemyMissingHPRatioByLvl"][champLevel] + ")");
              };
              if (damage["armorRatio"]) {
                addText(" (+" + removeParen(damage["armorRatio"]));
                colorArmor(" Armor");
                addText("ratio)");
              };
              if (damage["bonusArmorRatio"]) {
                addText(" (+" + removeParen(damage["bonusArmorRatio"]));
                colorArmor(" Bonus Armor");
                addText("ratio)");
              };
              if (damage['enemyResistRatio']) {
                addText(' (+' + damage['enemyResistRatio']);
                colorArmor(' Enemy Armor');
                addText('and');
                colorMR(' Magic Resist');
                addText('ratio)');
              };
              if (damage["ADRatioPerCritChance"]) {
                addText(" (+" + damage["ADRatioPerCritChance"]);
                colorAD(" AD");
                addText('ratio per');
                colorCrit(" Crit Chance");
                if (damage["ADRatioPerCritChanceWithIE"]) {
                  addText('. With Infinity Edge: ' + damage["ADRatioPerCritChanceWithIE"] + ')')
                } else {
                  addText(')');
                };
                if (ability === 'passive') {
                  var dmgCounter = 0;
                  var IECounter = 0;
                  dmgCounter += damage["ADRatioPerCritChance"] * totalCritChance * totalAD;
                  if (damage["ADRatioByLvl"]) {
                    dmgCounter += damage["ADRatioByLvl"][champLevel] * totalAD;
                  };
                  doubleBreak();
                  underLine('Current Damage');
                  addText(Math.round(dmgCounter));
                  if (damage["ADRatioPerCritChanceWithIE"]) {
                    IECounter += damage["ADRatioPerCritChanceWithIE"] * totalCritChance * totalAD;
                    addText(' (' + Math.round(IECounter + dmgCounter) + ' with IE)');
                  };
                }
              };
              if (damage["armorIgnore"]) {
                singleBreak();
                addText('Ignores ' + damage["armorIgnore"] + ' ratio of');
                colorArmor(' enemy armor');
              };
              if (damage["alwaysCrit"]) {
                addText('. Always critically strikes.');
              };
              if (damage["attackSpeedPenalty"]) {
                singleBreak();
                underLine('Bonus Attack Speed Penalty Ratio');
                addText(damage["attackSpeedPenalty"]);
              };
              if (damage["system"] === "min" ) {
                singleBreak();
                underLine('Min Damage');
                if (damage["minDmg"]) {
                  removeSpace(damage["minDmg"]);
                }
              };
              if (damage["system"] === "minMax" ) {
                underLine('Min');
                if (damage["minDmg"]) {
                  removeSpace(damage["minDmg"]);
                };
                if (damage["minDmgByLvl"]) {
                  addText('[' + damage["minDmgByLvl"][0] + " to " + damage["minDmgByLvl"][17] + ", based on lvl. ");
                  underLine('Currently');
                  addText(damage["minDmgByLvl"][champLevel] + '] ')
                };
                if (damage["minADRatio"]) {
                  addText(" (+" + removeParen(damage["minADRatio"]));
                  colorAD(" AD");
                  addText("ratio)");
                };
                if (damage["minADRatioByLvl"]) {
                  addText(" (+" + damage["minADRatioByLvl"][champLevel])
                  colorAD(" AD");
                  addText("ratio) ");
                };
                if (damage["minBonusADRatio"]) {
                  addText(" (+" + removeParen(damage["minBonusADRatio"]));
                  colorAD(" Bonus AD");
                  addText("ratio)");
                };
                if (damage["minAPRatio"]) {
                  addText(" (+" + removeParen(damage["minAPRatio"]));
                  colorAP(" AP");
                  addText("ratio)");
                };
                if (damage["minArmorRatio"]) {
                  addText(" (+" + removeParen(damage["minArmorRatio"]));
                  colorArmor(" Armor");
                  addText("ratio)");
                };
                if (damage["minEnemyMaxHPRatio"]) {
                  addText(" (+" + removeParen(damage["minEnemyMaxHPRatio"]));
                  colorHP(" Enemy Max HP");
                  addText("ratio)");
                };
                if (damage["minEnemyMaxHPRatioPer100AP"]) {
                  addText(" (+" + damage["minEnemyMaxHPRatioPer100AP"]);
                  colorHP(" Enemy Max HP");
                  addText("ratio per");
                  colorAP(' 100 AP');
                  addText(')');
                };
                if (damage["minDmgPerStack"]) {
                  addText(': (' + damage["minDmgPerStack"] + ' per stack)');
                };

                singleBreak();
                underLine('Max');

                if (damage["maxDmg"]) {
                  removeSpace(damage["maxDmg"]);
                };
                if (damage["maxDmgByLvl"]) {
                  addText('[' + damage["maxDmgByLvl"][0] + " to " + damage["maxDmgByLvl"][17] + ", based on lvl. ");
                  underLine('Currently');
                  addText(damage["maxDmgByLvl"][champLevel] + '] ')
                };
                if (damage["maxDmgPerStack"]) {
                  addText('(' + damage["maxDmgPerStack"] + ' per stack)');
                };
                if (damage["maxADRatio"]) {
                  addText(" (+" + removeParen(damage["maxADRatio"]));
                  colorAD(" AD");
                  addText("ratio)");
                };
                if (damage["maxADRatioByLvl"]) {
                  addText(" (+" + damage["maxADRatioByLvl"][champLevel]);
                  colorAD(" AD");
                  addText("ratio)");
                };
                if (damage["maxBonusADRatio"]) {
                  addText(" (+" + removeParen(damage["maxBonusADRatio"]));
                  colorAD(" Bonus AD");
                  addText("ratio)");
                };
                if (damage["maxAPRatio"]) {
                  addText(" (+" + removeParen(damage["maxAPRatio"]));
                  colorAP(" AP");
                  addText("ratio)");
                };
                if (damage["maxArmorRatio"]) {
                  addText(" (+" + removeParen(damage["maxArmorRatio"]));
                  colorArmor(" Armor");
                  addText("ratio)");
                };
                if (damage["maxEnemyMaxHPRatio"]) {
                  addText(" (+" + removeParen(damage["maxEnemyMaxHPRatio"]));
                  colorHP(" Enemy Max HP");
                  addText("ratio)");
                };
                if (damage["maxEnemyMaxHPRatioPer100AP"]) {
                  addText(" (+" + damage["maxEnemyMaxHPRatioPer100AP"]);
                  colorHP(" Enemy Max HP");
                  addText("ratio per");
                  colorAP(' 100 AP');
                  addText(')');
                };
              };
              if (damage["lvlRequired"]) {
                singleBreak();
                underLine('Level Required');
                addText(damage["lvlRequired"]);
              };
              if (damage["canCrit"]) {
                addText(', can crit.');
              };
              if (damage["critDmg"]) {
                singleBreak();
                underLine('Crit Damage Ratio');
                addText(damage["critDmg"]);
                if (damage["critDmgWithIE"]) {
                  addText(' (' + damage["critDmgWithIE"] + ' with Infinity Edge)');
                }
              };
              if (damage["critADRatioWithIE"]) {
                singleBreak();
                underLine('Crit Bonus Dmg with Infinity Edge');
                addText(damage["critADRatioWithIE"]);
                colorAD(" AD");
                addText("ratio");
              };
              if (damage["duration"]) {
                singleBreak();
                underLine('Duration')
                addText(damage["duration"])
              };
              if (damage["minDuration"]) {
                singleBreak();
                underLine('Min Duration');
                addText(damage["minDuration"] + ', ')
                underLine('Max Duration')
                addText(damage["maxDuration"])
              };
              
              if (damage["system"] === "2Part" || damage["system"] === "3Part") {
                (function() {
                for (var i = 1; i < 4; i++) {
                  if (!damage[`part${i}`]) {
                    return;
                  }
                  var part = damage[`part${i}`];
                  underLine('Part '  + i);  
                  
                /*function partDamageMap(partNumber, i, array) {
                  if (!damage[partNumber]) {
                      return;
                  }
                  var part = damage[partNumber];
                  var partU = document.createElement('u');
                  partU.innerText = partNumber[0].toUpperCase() + partNumber.slice(1, 4) + ' '  + partNumber[4];  
                  abilityDiv.appendChild(partU);
                  var text = document.createTextNode(': ');
                  abilityDiv.appendChild(text);*/

                  if (part["type"]) {
                    addText(part["type"] + " Damage: ");
                  };
                  if (part["ADRatio"]) {
                    addText(" (" + removeParen(part["ADRatio"]));
                    colorAD(" AD");
                    addText("ratio)");
                  };
                  if (part["trueDmgRatioByLvl"]) {
                    singleBreak();
                    addText('True Damage Ratio: (' + part["trueDmgRatioByLvl"][0] + " to " + part["trueDmgRatioByLvl"][17]
                    + ", based on lvl. Currently: " + part["trueDmgRatioByLvl"][champLevel] + ')');
                  };
                  if (damage[`part${i+1}`]) {
                    doubleBreak();
                  }
                }
                })();
                /*this.partNumberArray.map(partDamageMap);*/
              };
              if (damage["staticCoolDownByLvl"]) {
                singleBreak();
                underLine("Static Cooldown");
                addText('[' + damage["staticCoolDownByLvl"][0] + " to " 
                + damage["staticCoolDownByLvl"][17] + "], based on lvl. ");
                underLine("Currently");
                addText(damage["staticCoolDownByLvl"][champLevel])
              }
              doubleBreak();
            };

            if (champFile[ability]["damage"]) {
              var damage = champFile[ability]["damage"];
              if (!damage["type"]) {
                addBold("Damage: ");
              };
              if (damage["type"]) {
                addBold(damage['type'] + " Damage: ")
              };
              if (damage["dmg"]) {
                removeSpace(damage["dmg"]);
              };
              if (damage["dmgByLvl"]) {
                addText('[' + damage["dmgByLvl"][0] + " to " + damage["dmgByLvl"][17] + ", based on lvl. ");
                underLine("Currently");
                addText(damage["dmgByLvl"][champLevel] + '] ');
              };
              if (damage["totalDmgRatio"]) {
                underLine('Total Damage Ratio');
                removeSpace(damage["totalDmgRatio"]);
              };
              if (damage["dmgByWRank"]) {
                var path = damage["dmgByWRank"];
                addText('[+' + path[0] + " to " + path[4] + " Damage, based on W rank. ");
                underLine("Currently");
                addText(path[WRank] + '] ');
              };
              if (damage["APRatio"]) {
                addText(" (+" + removeParen(damage["APRatio"]));
                colorAP(" AP");
                addText("ratio)");
              };
              if (damage["APRatioByLvl"]) {
                addText(' (+' + damage["APRatioByLvl"][0] + " to " + damage["APRatioByLvl"][17]);
                colorAP(" AP");
                addText("ratio, based on lvl. ");
                underLine("Currently");
                addText(damage["APRatioByLvl"][champLevel] + ') ')
              };
              if (damage["ADRatio"]) {
                addText(" (+" + removeParen(damage["ADRatio"]));
                colorAD(" AD");
                addText("ratio)");
              };
              if (damage["bonusADRatio"]) {
                addText(" (+" + removeParen(damage["bonusADRatio"]));
                colorAD(" Bonus AD");
                addText("ratio)");
              };
              if (damage["bonusManaRatio"]) {
                addText(" (+" + damage["bonusManaRatio"]);
                colorMana(" Bonus Mana");
                addText("ratio)");
              };
              if (damage["enemyMaxHPRatio"]) {
                addText(" (+" + removeParen(damage["enemyMaxHPRatio"]));
                colorHP(" Enemy Max HP");
                addText("ratio)");
              };
              if (damage["enemyMaxHPRatioByLvl"]) {
                addText('(' + damage["enemyMaxHPRatioByLvl"][0] + " to " 
                + damage["enemyMaxHPRatioByLvl"][17]);
                colorHP(" Enemy Max HP");
                addText("ratio, based on lvl. ");
                underLine("Currently");
                addText(damage["enemyMaxHPRatioByLvl"][champLevel] + ') ');
              };
              if (damage["enemyMaxHPRatioPer100AP"]) {
                addText(' (+' + damage["enemyMaxHPRatioPer100AP"]);
                colorHP(" Enemy Max HP");
                addText("ratio per");
                colorAP(' 100 AP');
                addText(')');
              };
              if (damage["enemyMaxHPRatioPer100BonusAD"]) {
                addText(' (+' + damage["enemyMaxHPRatioPer100BonusAD"]);
                colorHP(" Enemy Max HP");
                addText("ratio per");
                colorAD(' 100 Bonus AD');
                addText(')');
              };
              if (damage["bonusHPRatio"]) {
                addText(" (+" + removeParen(damage["bonusHPRatio"]));
                colorHP(" Bonus HP");
                addText("ratio)");
              };
              if (damage["maxHPRatio"]) {
                addText(" (+" + removeParen(damage["maxHPRatio"]));
                colorHP(" Max HP");
                addText("ratio)");
              };
              if (damage["enemyCurrentHPRatio"]) {
                addText(" (+" + removeParen(damage["enemyCurrentHPRatio"]));
                colorHP(" Enemy Current HP");
                addText("ratio)");
              };
              if (damage["enemyCurrentHPRatioPerStack"]) {
                addText(' (+' + damage["enemyCurrentHPRatioPerStack"]);
                colorHP(" Enemy Current HP");
                addText("ratio per stack)");
              };
              if (damage["enemyCurrentHPRatioPer100AP"]) {
                addText(" (+" + removeParen(damage["enemyCurrentHPRatioPer100AP"]));
                colorHP(" Enemy Current HP");
                addText("ratio per");
                colorAP(' 100 AP');
                addText(')');
              };
              if (damage["enemyCurrentHPRatioPer100AD"]) {
                addText(" (+" + removeParen(damage["enemyCurrentHPRatioPer100AD"]));
                colorHP(" Enemy Current HP");
                addText("ratio per");
                colorAD(' 100 AD');
                addText(')');
              };
              if (damage["enemyMissingHPRatio"]) {
                addText(" (+" + removeParen(damage["enemyMissingHPRatio"]));
                colorHP(" Enemy Missing HP");
                addText("ratio)");
              };
              if (damage["enemyMissingHPRatioPer100AP"]) {
                addText(" (+" + removeParen(damage["enemyMissingHPRatioPer100AP"]));
                colorHP(" Enemy Missing HP");
                addText("ratio per");
                colorAP(' 100 AP');
                addText(')');
              };
              if (damage["enemyMissingHPRatioPerStack"]) {
                addText(' (+' + damage["enemyMissingHPRatioPerStack"]);
                colorHP(" Enemy Missing HP");
                addText("ratio per stack)");
              };
              if (damage["armorRatio"]) {
                addText(" (+" + removeParen(damage["armorRatio"]));
                colorArmor(" Armor");
                addText("ratio)");
              };
              if (damage["bonusArmorRatio"]) {
                addText(" (+" + removeParen(damage["bonusArmorRatio"]));
                colorArmor(" Bonus Armor");
                addText("ratio)");
              };
              if (damage["bonusMRRatio"]) {
                addText(" (+" + removeParen(damage["bonusMRRatio"]));
                colorMR(" Bonus Magic Resist");
                addText("ratio)");
              };
              if (damage["bonusMoveSpeedRatioByLvl"]) {
                addText(' (+' + damage["bonusMoveSpeedRatioByLvl"][0] + " to " 
                + damage["bonusMoveSpeedRatioByLvl"][17] + " Bonus Move Speed ratio, based on lvl. ");
                underLine('Currently');
                addText(damage["bonusMoveSpeedRatioByLvl"][champLevel] + ") ");
              };
              if (damage["dmgPerLethality"]) {
                addText(" (+" + damage["dmgPerLethality"] + " Lethality ratio)");
              };
              if (damage["bonusDmgRatioPerCritChance"]) {
                singleBreak();
                underLine('Bonus Damage Ratio');
                addText(damage["bonusDmgRatioPerCritChance"] + ' per');
                colorCrit(" Crit Chance");
                if (damage["dmgRatioPerStack"]) {
                  addText(' (' + damage["dmgRatioPerStack"] + ' per stack)');
                }
              };

              if (damage["canCrit"]) {
                addText(', can crit.');
              };
              if (damage["executeDmgRatio"]) {
                singleBreak();
                underLine('Execute Damage Ratio');
                addText(damage["executeDmgRatio"]);
              };
              if (damage["critDmg"]) {
                singleBreak();
                underLine('Crit Damage Ratio');
                addText(damage["critDmg"]);
                if (damage["critDmgWithIE"]) {
                  addText(' (' + damage["critDmgWithIE"] + ' with Infinity Edge)');
                }
              };
              if (damage["critADRatio"]) {
                singleBreak();
                underLine('Crit AD Ratio');
                addText(damage["critADRatio"]);
                if (damage["critADRatioWithIE"]) {
                  addText(' (' + damage["critADRatioWithIE"] + ' with Infinity Edge)');
                }
              };
              if (damage["asPerBonusAS"]) {
                singleBreak();
                underLine('Wolf Bonus Attack Speed per Kindred Bonus Attack Speed');
                addText(damage["asPerBonusAS"]);
              };
              if (damage["dmgRatioByRRank"]) {
                singleBreak();
                underLine('Damage Ratio by R Rank');
                removeSpace(damage["dmgRatioByRRank"]);
              };

              if (damage["system"] === "min" ) {
                singleBreak();
                underLine('Min Damage')
                if (damage["minDmg"]) {
                  removeSpace(damage["minDmg"]);

                };
                if (damage["minDmgAPRatio"]) {
                  addText(' (+' + damage["minDmgAPRatio"]);
                  colorAP(" AP");
                  addText("ratio)");
                }
              };

              if (damage["system"] === "minMax" ) {
                underLine('Min');
                if (damage["minDmg"]) {
                  //addText(removeSpace(damage["minDmg"]));
                  removeSpace(damage["minDmg"]);
                };
                if (damage["minDmgByLvl"]) {
                  addText(' [+' + damage["minDmgByLvl"][0] + " to " + damage["minDmgByLvl"][17] + ", based on lvl. ");
                  underLine("Currently");
                  addText(damage["minDmgByLvl"][champLevel] + '] ');
                };
                if (damage["minAPRatio"]) {
                  addText(" (+" + removeParen(damage["minAPRatio"]));
                  colorAP(" AP");
                  addText("ratio)");
                };
                if (damage["minADRatio"]) {
                  addText(" (+" + removeParen(damage["minADRatio"]));
                  colorAD(" AD");
                  addText("ratio)");
                };
                if (damage["minBonusADRatio"]) {
                  addText(" (+" + removeParen(damage["minBonusADRatio"]));
                  colorAD(" Bonus AD");
                  addText("ratio)");
                };
                if (damage["minMaxManaRatio"]) {
                  addText(" (+" + removeParen(damage["minMaxManaRatio"]));
                  colorMana(" Max Mana");
                  addText("ratio)");
                };
                if (damage["minBonusHPRatio"]) {
                  addText(" (+" + damage["minBonusHPRatio"]);
                  colorHP(" Bonus HP");
                  addText("ratio)");
                };
                if (damage["minMaxHPRatio"]) {
                  addText(" (+" + damage["minMaxHPRatio"]);
                  colorHP(" Max HP");
                  addText("ratio)");
                };
                if (damage["minEnemyMaxHPRatio"]) {
                  addText(" (+" + removeParen(damage["minEnemyMaxHPRatio"]));
                  colorHP(" Enemy Max HP");
                  addText("ratio)");
                };
                if (damage["minEnemyMaxHPRatioPer100BonusAD"]) {
                  addText(" (+" + removeParen(damage["minEnemyMaxHPRatioPer100BonusAD"]));
                  colorHP(" Enemy Max HP");
                  addText("ratio per");
                  colorAD(' 100 Bonus AD');
                  addText(')');
                };
                if (damage["minEnemyMaxHPRatioPer100AP"]) {
                  addText(" (+" + removeParen(damage["minEnemyMaxHPRatioPer100AP"]));
                  colorHP(" Enemy Max HP");
                  addText("ratio per");
                  colorAP(' 100 AP');
                  addText(')');
                };
                if (damage["minEnemyBonusHPRatio"]) {
                  addText(" (+" + removeParen(damage["minEnemyBonusHPRatio"]));
                  colorHP(" Enemy Bonus HP");
                  addText("ratio)");
                };
                if (damage["minEnemyCurrentHPRatio"]) {
                  addText(" (+" + removeParen(damage["minEnemyCurrentHPRatio"]));
                  colorHP(" Enemy Current HP");
                  addText("ratio)");
                };
                if (damage["minEnemyCurrentHPRatioPer100AP"]) {
                  addText(" (+" + removeParen(damage["minEnemyCurrentHPRatioPer100AP"]));
                  colorHP(" Enemy Current HP");
                  addText("ratio per");
                  colorAP(' 100 AP');
                  addText(')');
                };
                if (damage["minEnemyMissingHPRatio"]) {
                  addText(" (+" + removeParen(damage["minEnemyMissingHPRatio"]));
                  colorHP(" Enemy Missing HP");
                  addText("ratio)");
                };

                singleBreak();

                if (damage["medDmg"]) {
                  underLine('Med');
                  removeSpace(damage["medDmg"]);
                  if (damage["medAPRatio"]) {
                    addText(" (+" + removeParen(damage["medAPRatio"]));
                    colorAP(" AP");
                    addText("ratio)");
                  };
                  if (damage["medBonusADRatio"]) {
                    addText(" (+" + removeParen(damage["medBonusADRatio"]) + " Bonus AD Ratio)");
                    colorAD(" Bonus AD");
                    addText("ratio)");
                  };
                  singleBreak();
                };

                underLine('Max');

                if (damage["maxDmg"]) {
                 removeSpace(damage["maxDmg"]);
                };
                if (damage["maxDmgByLvl"]) {
                  addText(' [+' + damage["maxDmgByLvl"][0] + " to " + damage["maxDmgByLvl"][17] + ", based on lvl. ");
                  underLine("Currently");
                  addText(damage["maxDmgByLvl"][champLevel] + '] ');
                };
                if (damage["maxAPRatio"]) {
                  addText(" (+" + removeParen(damage["maxAPRatio"]));
                  colorAP(" AP");
                  addText("ratio)");
                };
                if (damage["maxADRatio"]) {
                  addText(" (+" + removeParen(damage["maxADRatio"]));
                  colorAD(" AD");
                  addText("ratio)");
                };
                if (damage["maxBonusADRatio"]) {
                  addText(" (+" + removeParen(damage["maxBonusADRatio"]));
                  colorAD(" Bonus AD");
                  addText("ratio)");
                };
                if (damage["maxMaxManaRatio"]) {
                  addText(" (+" + removeParen(damage["maxMaxManaRatio"]));
                  colorMana(" Max Mana");
                  addText("ratio)");
                };
                if (damage["maxBonusHPRatio"]) {
                  addText(" (+" + damage["maxBonusHPRatio"]);
                  colorHP(" Bonus HP");
                  addText("ratio)");
                };
                if (damage["maxMaxHPRatio"]) {
                  addText(" (+" + removeParen(damage["maxMaxHPRatio"]));
                  colorHP(" Max HP");
                  addText("ratio)");
                };
                if (damage["maxMaxHPRatioPer100BonusAD"]) {
                  addText(" (+" + removeParen(damage["maxMaxHPRatioPer100BonusAD"]));
                  colorHP(" Max HP");
                  addText("ratio per");
                  colorAD(' 100 Bonus AD');
                  addText(')');
                };
                if (damage["maxEnemyMaxHPRatio"]) {
                  addText(" (+" + removeParen(damage["maxEnemyMaxHPRatio"]));
                  colorHP(" Enemy Max HP");
                  addText("ratio)");
                };
                if (damage["maxEnemyMaxHPRatioPer100BonusAD"]) {
                  addText(" (+" + removeParen(damage["maxEnemyMaxHPRatioPer100BonusAD"]));
                  colorHP(" Enemy Max HP");
                  addText("ratio per");
                  colorAD(' 100 Bonus AD');
                  addText(')');
                };
                if (damage["maxEnemyMaxHPRatioPer100AP"]) {
                  addText(" (+" + removeParen(damage["maxEnemyMaxHPRatioPer100AP"]));
                  colorHP(" Enemy Max HP");
                  addText("ratio per");
                  colorAP(' 100 AP');
                  addText(')');
                };
                if (damage["maxEnemyCurrentHPRatio"]) {
                  addText(" (+" + removeParen(damage["maxEnemyCurrentHPRatio"]));
                  colorHP(" Enemy Current HP");
                  addText("ratio)");
                };
                if (damage["maxEnemyCurrentHPRatioPer100AP"]) {
                  addText(" (+" + removeParen(damage["maxEnemyCurrentHPRatioPer100AP"]));
                  colorHP(" Enemy Current HP");
                  addText("ratio per");
                  colorAP(' 100 AP');
                  addText(')');
                };
                if (damage["maxEnemyMissingHPRatio"]) {
                  addText(" (+" + removeParen(damage["maxEnemyMissingHPRatio"]));
                  colorHP(" Enemy Missing HP");
                  addText("ratio)");
                };  
                if (damage["maxEnemyBonusHPRatio"]) {
                  addText(" (+" + removeParen(damage["maxEnemyBonusHPRatio"]));
                  colorHP(" Enemy Bonus HP");
                  addText("ratio)");
                }
              };

              if (damage["evolveMaxDmg"]) {
                singleBreak();
                underLine('Evolve Max Damage');
                removeSpace(damage["evolveMaxDmg"]);
              };
              if (damage["evolveMaxBonusADRatio"]) {
                addText(" (+" + removeParen(damage["evolveMaxBonusADRatio"]));
                colorAD(" Bonus AD");
                addText("ratio)");
                
              };
              if (damage["evolveMaxAPRatio"]) {
                addText(" (+" + removeParen(damage["evolveMaxAPRatio"]));
                colorAP(" AP");
                addText("ratio)");
              };

              if (damage["system"] === 'stacking') {
                singleBreak();
                underLine('Damage per Stack');
                if (damage["dmgPerStack"]) {
                  removeSpace(damage["dmgPerStack"]);
                };
                if (damage["ADRatioPerStack"]) {
                  addText(" (+" + removeParen(damage["ADRatioPerStack"]));
                  colorAD(" AD");
                  addText("ratio)");
                }
              };

              if (damage["4thShotDmgRatio"]) {
                singleBreak();
                underLine('4th Shot Damage Ratio');
                addText(damage["4thShotDmgRatio"] + ' (' + damage["4thShotDmgRatioWithIE"] + ' with Infinity Edge)');
              };

              if (damage["multiHitDmgRatio"]) {
                singleBreak();
                addText('Additional hits deal ' + damage["multiHitDmgRatio"] + ' damage ratio.');
              };

              if (damage["minMinDmg"]) {
                singleBreak();
                underLine('Minimum Damage');
                removeSpace(damage["minMinDmg"]);
              };

              if (damage["minCritADRatio"]) {
                singleBreak();
                underLine('Crit Bonus Damage');
                addText('Min: ' + damage["minCritADRatio"]);
                colorAD(" AD");
                addText("ratio");
                if (damage["minCritADRatioWithIE"]) {
                  addText(' (' + damage["minCritADRatioWithIE"]);
                  colorAD(" AD");
                  addText("ratio with Infinity Edge)");
                };
                singleBreak();
                addText('Max: ' + damage["maxCritADRatio"]);
                colorAD(" AD");
                addText("ratio");
                if (damage["maxCritADRatioWithIE"]) {
                  addText(' (' + damage["maxCritADRatioWithIE"]);
                  colorAD(" AD");
                  addText("ratio with Infinity Edge)");
                }
              };

              if (damage["empowerBonus"]) {
                var empPath = damage["empowerBonus"];
                singleBreak();
                underLine('Empower Bonus Damage');
                if (empPath["dmgByLvl"]) {
                  addText('[' + empPath["dmgByLvl"][0] + " to " + empPath["dmgByLvl"][17] + ", based on lvl. ");
                  underLine("Currently");
                  addText(empPath["dmgByLvl"][champLevel] + '] ');
                };
                if (empPath["bonusADRatio"]) {
                  addText(" (+" + removeParen(empPath["bonusADRatio"]));
                  colorAD(" Bonus AD");
                  addText("ratio)");
                };
                if (empPath["system"] === 'minMax') {
                  addText('Min: ');
                  if (empPath["minDmgByLvl"]) {
                    addText(' [' + empPath["minDmgByLvl"][0] + " to " + empPath["minDmgByLvl"][17] + ", based on lvl. ");
                    underLine("Currently");
                    addText(empPath["minDmgByLvl"][champLevel] + '] ');     
                  };
                  if (empPath["minAPRatio"]) {
                    addText(' (+' + empPath["minAPRatio"]);
                    colorAP(" AP");
                    addText("ratio)");
                  };

                  singleBreak();
                  addText('Max: ');

                  if (empPath["maxDmgByLvl"]) {
                    addText(' [' + empPath["maxDmgByLvl"][0] + " to " 
                    + empPath["maxDmgByLvl"][17] + ", based on lvl. ");
                    underLine("Currently");
                    addText(empPath["maxDmgByLvl"][champLevel] + '] ')   
                  };
                  if (empPath["maxAPRatio"]) {
                    addText(' (+' + empPath["maxAPRatio"]);
                    colorAP(" AP");
                    addText("ratio)");
                  }
                }
              };

              if (damage["system"] === "2Part" || damage["system"] === "3Part") {
                (function() {
                  for (var i = 1; i < 4; i++) {
                    if (!damage[`part${i}`]) {
                      return;
                    }
                    var part = damage[`part${i}`];
                    underLine('Part '  + i);  

                  if (part["type"]) {
                    if (!part['postMitigation']) {
                      addText(part["type"] + " Damage: ");
                    };
                    if (part["postMitigation"] === 'Magic') {
                      addText(part["type"] + ' Damage (part 1 damage, post-mitigation): ');
                    }
                  };
                  if (part["dmg"]) {
                    removeSpace(part["dmg"]);
                  };
                  if (part["dmgByLvl"]) {
                    addText('[' + part["dmgByLvl"][0] + " to " + part["dmgByLvl"][17] + ", based on lvl. ");
                    underLine("Currently");
                    addText(part["dmgByLvl"][champLevel] + '] ');
                  };
                  if (part["APRatio"]) {
                    addText(" (+" + part["APRatio"]);
                    colorAP(" AP");
                    addText("ratio)");
                  };
                  if (part["ADRatio"]) {
                    addText(" (+" + removeParen(part["ADRatio"]));
                    colorAD(" AD");
                    addText("ratio)");
                  };
                  if (part["bonusADRatio"]) {
                    addText(" (+" + removeParen(part["bonusADRatio"]));
                    colorAD(" Bonus AD");
                    addText("ratio)");
                  };
                  if (part["enemyMaxHPRatio"]) {
                    addText(" (+" + removeParen(part["enemyMaxHPRatio"]));
                    colorHP(" Enemy Max HP");
                    addText("ratio)");
                  };
                  if (part["maxHPRatio"]) {
                    addText(" (+" + removeParen(part["maxHPRatio"]));
                    colorHP(" Max HP");
                    addText("ratio)");
                  };
                  if (part["enemyCurrentHPRatio"]) {
                    addText(" (+" + removeParen(part["enemyCurrentHPRatio"]));
                    colorHP(" Enemy Current HP");
                    addText("ratio)");
                  };
                  if (part["part1RatioFormula"]) {
                    addText('Formula: ' + part["part1RatioFormula"]);
                  };

                  if (part["system"] === "minMax" ) {
                    addText('Min: ');
                    if (part["minDmg"]) {
                      //addText(removeSpace(part["minDmg"]))
                      removeSpace(part["minDmg"]);
                    };
                    if (part["minAPRatio"]) {
                      addText(" (+" + removeParen(part["minAPRatio"]));
                      colorAP(" AP");
                      addText("ratio)");
                    };
                    if (part["minADRatio"]) {
                      addText(" (+" + removeParen(part["minADRatio"]));
                      colorAD(" AD");
                      addText("ratio)");
                    };
                    if (part["minBonusADRatio"]) {
                      addText(" (+" + removeParen(part["minBonusADRatio"]));
                      colorAD(" Bonus AD");
                      addText("ratio)");
                    };
                    if (part["minBonusADPerAttackSpeedRatio"]) {
                      addText(' (+' + part["minBonusADPerAttackSpeedRatio"]);
                      colorAD(" Bonus AD");
                      addText("ratio per");
                      colorAS(' Attack Speed');
                      addText(')');
                    };
                    if (part["minEnemyMaxHPRatio"]) {
                      addText(' (' + removeParen(part["minEnemyMaxHPRatio"]));
                      colorHP(" Enemy Max HP");
                      addText("ratio)");
                    };
                    if (part["minEnemyMaxHPRatioPer100AP"]) {
                      addText(' (+' + part["minEnemyMaxHPRatioPer100AP"]);
                      colorHP(" Enemy Max HP");
                      addText("ratio per");
                      colorAP(' 100 AP');
                      addText(')');
                    };
                    if (part["minEnemyMissingHPRatioByLvl"]) {
                      addText('(' + part["minEnemyMissingHPRatioByLvl"][0] + " to " 
                      + part["minEnemyMissingHPRatioByLvl"][17]);
                      colorHP(" Enemy Missing HP");
                      addText("ratio, based on lvl. ");
                      underLine("Currently");
                      addText(part["minEnemyMissingHPRatioByLvl"][champLevel] + ')')
                    };

                    singleBreak();
                    addText('Max: ');

                    if (part["maxDmg"]) {
                      removeSpace(part["maxDmg"])
                    };
                    if (part["maxAPRatio"]) {
                      addText(" (+" + removeParen(part["maxAPRatio"]));
                      colorAP(" AP");
                      addText("ratio)");
                    };
                    if (part["maxADRatio"]) {
                      addText(" (+" + removeParen(part["maxADRatio"]));
                      colorAD(" AD");
                      addText("ratio)");
                    };
                    if (part["maxBonusADRatio"]) {
                      addText(" (+" + removeParen(part["maxBonusADRatio"]));
                      colorAD(" Bonus AD");
                      addText("ratio)");
                    };
                    if (part["maxBonusADPerAttackSpeedRatio"]) {
                      addText(' (+' + part["maxBonusADPerAttackSpeedRatio"]);
                      colorAD(" Bonus AD");
                      addText("ratio per");
                      colorAS(' Attack Speed');
                      addText(')');
                    };
                    if (part["maxEnemyMaxHPRatio"]) {
                      addText(' (' + removeParen(part["maxEnemyMaxHPRatio"]));
                      colorHP(" Enemy Max HP");
                      addText("ratio)");
                    };
                    if (part["maxEnemyMaxHPRatioPer100AP"]) {
                      addText(' (+' + part["maxEnemyMaxHPRatioPer100AP"]);
                      colorHP(" Enemy Max HP");
                      addText("ratio per");
                      colorAP(' 100 AP');
                      addText(')');
                    };
                    if (part["maxEnemyMissingHPRatioByLvl"]) {
                      addText('(' + part["maxEnemyMissingHPRatioByLvl"][0] + " to " 
                      + part["maxEnemyMissingHPRatioByLvl"][17]);
                      colorHP(" Enemy Missing HP");
                      addText("ratio, based on lvl. ");
                      underLine("Currently");
                      addText(part["maxEnemyMissingHPRatioByLvl"][champLevel] + ')');
                    };
                  };
                  if (part["bonusDmgRatioPerCritChance"]) {
                    singleBreak();
                    underLine('Bonus Damage Ratio');
                    addText('(' + part["bonusDmgRatioPerCritChance"] + ' per');
                    colorCrit(' Crit Chance');
                    addText(')');
                  };
                  if (damage[`part${i + 1}`]) {
                    doubleBreak();
                  };
                }
              })();
              };
              if (damage["storedDmg"]) {
                singleBreak();
                underLine('Stored Damage Ratio');
                removeSpace(damage["storedDmg"]["dmgRatio"]);  
                addText(' of pre-mitigated damage dealt over the past ' 
                + damage["storedDmg"]["duration"] + ' seconds.');
              }
              if (damage["duration"]) {
                addText(' over ' + damage["duration"] + ' seconds.');
              };
              if (damage["coolDown"]) {
                singleBreak();
                underLine('Cooldown');
                addText(damage["coolDown"]);
              }
              doubleBreak();
            };

            /*if (champFile[ability]["autoSplash"]) {
              var splashPath = champFile[ability]["autoSplash"];
              var splashB = document.createElement('b');
              splashB.innerText = 'Auto Attack Splash: ';
              abilityDiv.appendChild(splashB);
              if (splashPath["ADRatio"]) {
                var ADRatioText = document.createTextNode('(' + splashPath["ADRatio"] + ' AD Ratio)');
                abilityDiv.appendChild(ADRatioText);
              };
              if (splashPath["duration"]) {
                singleBreak();
                var durationU = document.createElement('u');
                durationU.innerText = 'Duration';
                abilityDiv.appendChild(durationU);
                var durText = document.createTextNode(': ' + splashPath["duration"]);
                abilityDiv.appendChild(durText);
              }
            }*/

            if (champFile[ability]["tickDamage"]) {
              var path = champFile[ability]["tickDamage"]
              if (path["type"]) {
                addBold(path['type'] + " Damage Over Time: ")
              } else {
                addBold("Damage Over Time: ")
              }
              if (path["dmg"]) {
                removeSpace(path["dmg"]);
              };
              if (path["dmgByLvl"]) {
                addText('[' + path["dmgByLvl"][0] + " to " + path["dmgByLvl"][17] + ", based on lvl. ");
                underLine("Currently");
                addText(path["dmgByLvl"][champLevel] + '] ')
              };
              if (path["APRatio"]) {
                addText(" (+" + path["APRatio"]);
                colorAP(" AP");
                addText("ratio)");
              };
              if (path["ADRatio"]) {
                addText(" (+" + removeParen(path["ADRatio"]));
                colorAD(" AD");
                addText("ratio)");
              };
              if (path["bonusADRatio"]) {
                addText(" (+" + removeParen(path["bonusADRatio"]));
                colorAD(" Bonus AD");
                addText("ratio)");
              };
              if (path["enemyMaxHPRatio"]) {
                addText(" (+" + removeParen(path["enemyMaxHPRatio"]));
                colorHP(" Enemy Max HP");
                addText("ratio)");
              };
              if (path["enemyMaxHPRatioByLvl"]) {
                addText(' [+' + path["enemyMaxHPRatioByLvl"][0] + " to " + path["enemyMaxHPRatioByLvl"][17]);
                colorHP(" Enemy Max HP");
                addText("ratio, based on lvl. ");
                underLine("Currently");
                addText(path["enemyMaxHPRatioByLvl"][champLevel] + '] ');
              };
              if (path["enemyMaxHPRatioPer100AP"]) {
                addText(" (+" + removeParen(path["enemyMaxHPRatioPer100AP"]));
                colorHP(" Enemy Max HP");
                addText("ratio per");
                colorAP(" 100 AP");
                addText(")");
              };
              if (path["maxHPRatio"]) {
                addText(" (+" + removeParen(path["maxHPRatio"]));
                colorHP(" Max HP");
                addText("ratio)");
              };
              if (path["bonusHPRatio"]) {
                addText(" (+" + path["bonusHPRatio"]);
                colorHP(" Bonus HP");
                addText("ratio)");
              };
              if (path["enemyCurrentHPRatio"]) {
                addText(" (+" + removeParen(path["enemyCurrentHPRatio"]));
                colorHP(" Enemy Current HP");
                addText("ratio)");
              };
          
              if (path["system"] === "minMax" ) {
                underLine('Min')
                if (path["minDmg"]) {
                  removeSpace(path["minDmg"])
                };
                if (path["minDmgByLvl"]) {
                  addText(' [' + path["minDmgByLvl"][0] + " to " + path["minDmgByLvl"][17] + ", based on lvl. ");
                  underLine("Currently");
                  addText(path["minDmgByLvl"][champLevel] + '] ')
                };
                if (path["minAPRatio"]) {
                  addText(" (+" + removeParen(path["minAPRatio"]));
                  colorAP(" AP");
                  addText("ratio)");
                };
                if (path["minADRatio"]) {
                  addText(" (+" + removeParen(path["minADRatio"]));
                  colorAD(" AD");
                  addText("ratio)");
                };
                if (path["minBonusADRatio"]) {
                  addText(" (+" + removeParen(path["minBonusADRatio"]));
                  colorAD(" Bonus AD");
                  addText("ratio)");
                };
                if (path["interval"] && path["ticks"]) {
                  addText(' per ' + path["interval"] + ' sec, for ' + multiplyTicks2(path["interval"]) + ' seconds.');
                };
                if (path["ticks"] && path["duration"]) {
                  addText(' per tick, ');
                  removeSpace(path["ticks"]);
                  addText(' times over ' + path["duration"] + ' seconds.');
                };

                singleBreak();
                underLine('Max');

                if (path["maxDmg"]) {
                  removeSpace(path["maxDmg"]);
                };
                if (path["maxDmgByLvl"]) {
                  addText(' [' + path["maxDmgByLvl"][0] + " to " + path["maxDmgByLvl"][17] + ", based on lvl. ");
                  underLine("Currently");
                  addText(path["maxDmgByLvl"][champLevel] + '] ')
                };
                if (path["maxAPRatio"]) {
                  addText(" (+" + removeParen(path["maxAPRatio"]));
                  colorAP(" AP");
                  addText("ratio)");
                };
                if (path["maxADRatio"]) {
                  addText(" (+" + removeParen(path["maxADRatio"]));
                  colorAD(" AD");
                  addText("ratio)");
                };
                if (path["maxBonusADRatio"]) {
                  addText(" (+" + removeParen(path["maxBonusADRatio"]));
                  colorAD(" Bonus AD");
                  addText("ratio)");
                };
                if (path["ASForBonusTick"]) {
                  addText(' per tick, over ' + path["duration"] + ' seconds.');
                  singleBreak();
                  underLine('Ticks')
                  addText(path["ticks"]);
                  addText(' (+1 tick per ' + path["ASForBonusTick"]);
                  colorAS(" Bonus Attack Speed");
                  addText("ratio)");
                }
              };
              if (path["ticks"] && path["duration"] && path["system"] !== "minMax") {
                addText(' per tick, ');
                removeSpace(path["ticks"]);
                addText(' times over ' + path["duration"] + ' seconds.');
              };
              if (path["interval"] && path["ticks"]) {
                addText(' per ' + path["interval"] + ' sec, for ' + multiplyTicks2(path["interval"]) + ' seconds.')
              };
              if (path["critDmg"]) {
                singleBreak();
                underLine('Crit Damage Ratio')
                addText(path["critDmg"]);
                if (path["critDmgWithIE"]) {
                  addText(' (' + path["critDmgWithIE"] + ' with Infinity Edge)');
                }
              };
              if (path["system"] === 'min') {
                singleBreak();
                underLine('Min');
                removeSpace(path["minDmg"]);
                if (path["interval"] && path["ticks"]) {
                  addText(' per ' + path["interval"] + ' sec, for ' + multiplyTicks2(path["interval"]) + ' seconds.')
                };
              }
              if (path["ticks"]) {
                singleBreak();
                addBold('Total: ')
          
                if (path["dmg"]) {
                  addText(mapSpace(multiplyTicks(path["dmg"])));
                };
                if (path["dmgByLvl"]) {
                  addText('[' + multiplyTicks(path["dmgByLvl"][0]) + " to " 
                  + multiplyTicks(path["dmgByLvl"][17]) + ", based on lvl. ");
                  underLine("Currently");
                  addText(multiplyTicks(path["dmgByLvl"][champLevel]) + '] ')
                };
                if (path["APRatio"]) {
                  addText(" (+" + mapParen(multiplyTicks2(path["APRatio"])));
                  colorAP(" AP");
                  addText("ratio)");
                };
                if (path["ADRatio"]) {
                  addText(" (+" + mapParen(multiplyTicks2(path["ADRatio"])));
                  colorAD(" AD");
                  addText("ratio)");
                };
                if (path["bonusADRatio"]) {
                  addText(" (+" + multiplyTicks2(path["bonusADRatio"]));
                  colorAD(" Bonus AD");
                  addText("ratio)");
                };
                if (path["enemyMaxHPRatio"]) {
                  addText(" (+" + mapParen(multiplyTicks2(path["enemyMaxHPRatio"])));
                  colorHP(" Enemy Max HP");
                  addText("ratio)");
                };
                if (path["maxHPRatio"]) {
                  addText(" (+" + multiplyTicks2(path["maxHPRatio"]));
                  colorHP(" Max HP");
                  addText("ratio)");
                };
                if (path["bonusHPRatio"]) {
                  addText(" (+" + multiplyTicks2(path["bonusHPRatio"]));
                  colorHP(" Bonus HP");
                  addText("ratio)");
                };
                if (path["enemyCurrentHPRatio"]) {
                  addText(" (+" + multiplyTicks2(path["enemyCurrentHPRatio"]));
                  colorHP(" Enemy Current HP");
                  addText("ratio)");
                };
                if (path["enemyMaxHPRatioPer100AP"]) {
                  addText(" (+" + multiplyTicks2(path["enemyMaxHPRatioPer100AP"]));
                  colorHP(" Enemy Max HP");
                  addText("ratio per");
                  colorAP(" 100 AP");
                  addText(")");
                };
                if (path["system"] === 'min') {
                  singleBreak();
                  underLine('Min')
                  addText(mapSpace(multiplyTicks(path["minDmg"])))
                };
                if (path["system"] === "minMax" ) {
                  underLine('Min')
                  if (path["minDmg"]) {
                    var array = mapSpace(multiplyTicks(path["minDmg"]))
                    if (path["minDmgByLvl"]) {
                      array = mapSpace(path['minDmg'].map(x => {
                        return Math.round(path["ticks"] * (x + path["minDmgByLvl"][champLevel]))
                      }))
                    }
                    addText(array)
                  };
                  if (path["minAPRatio"]) {
                    addText(" (+" + mapParen(multiplyTicks2(path["minAPRatio"])));
                    colorAP(" AP");
                    addText("ratio)");
                  };
                  if (path["minADRatio"]) {
                    addText(" (+" + mapParen(multiplyTicks2(path["minADRatio"])));
                    colorAD(" AD");
                    addText("ratio)");
                  };
                  if (path["minBonusADRatio"]) {
                    addText(" (+" + mapParen(multiplyTicks2(path["minBonusADRatio"])));
                    colorAD(" Bonus AD");
                    addText("ratio)");
                  };

                  singleBreak();
                  underLine('Max');

                  if (path["maxDmg"]) {
                    var array = mapSpace(multiplyTicks(path["maxDmg"]))
                    if (path["maxDmgByLvl"]) {
                      array = mapSpace(path['maxDmg'].map(x => {
                        return Math.round(path["ticks"] * (x + path["maxDmgByLvl"][champLevel]))
                      }))
                    }
                    addText(": " + array)
                  };
                  if (path["maxAPRatio"]) {
                    addText(" (+" + mapParen(multiplyTicks2(path["maxAPRatio"])));
                    colorAP(" AP");
                    addText("ratio)");
                  }
                  if (path["maxADRatio"]) {
                    addText(" (+" + mapParen(multiplyTicks2(path["maxADRatio"])));
                    colorAD(" AD");
                    addText("ratio)");
                  }
                  if (path["maxBonusADRatio"]) {
                    addText(" (+" + mapParen(multiplyTicks2(path["maxBonusADRatio"])));
                    colorAD(" Bonus AD");
                    addText("ratio)");
                  }
                };
              }
              if (path["interval"] && !path["ticks"]) {
                addText(' per ' + path["interval"] + ' sec.')
              };
              if (path["part1"]) {
                underLine('Part 1');
                var path = champFile[ability]["tickDamage"]["part1"];
                if (path["dmg"]) {
                  removeSpace(path["dmg"]);
                };
                if (path["APRatio"]) {
                  addText(" (+" + removeParen(path["APRatio"]));
                  colorAP(" AP");
                  addText("ratio)");
                };
                if (path["interval"] && path["ticks"]) {
                  addText(' per ' + path["interval"] + ' sec, for ' + multiplyTicks2(path["interval"]) + ' seconds.')
                };

                singleBreak();
                underLine('Total');
                
                if (path["dmg"]) {
                  addText(mapSpace(multiplyTicks(path["dmg"])) );
                };
                if (path["APRatio"]) {
                  addText(' (+' +  mapParen(multiplyTicks2(path["APRatio"])));
                  colorAP(" AP");
                  addText("ratio)");
                };

                doubleBreak();
                underLine('Part 2');
                path = champFile[ability]["tickDamage"]['part2']
                
                if (path["enemyMaxHPRatio"]) {
                  addText(removeParen(path["enemyMaxHPRatio"]));
                  colorHP(" Enemy Max HP");
                  addText("ratio)");
                };
                if (path["enemyMaxHPRatioPer100AP"]) {
                  addText(' (+' +  path["enemyMaxHPRatioPer100AP"]);
                  colorHP(" Enemy Max HP");
                  addText("ratio per");
                  colorAP(" 100 AP");
                  addText(")");
                };
                if (path["interval"] && path["ticks"]) {
                  addText(' per ' + path["interval"] + ' sec, for ' + multiplyTicks2(path["interval"]) + ' seconds.')
                };

                singleBreak();
                underLine('Total');
                
                if (path["enemyMaxHPRatio"]) {
                  addText('(' +  mapParen(multiplyTicks2(path["enemyMaxHPRatio"])));
                  colorHP(" Enemy Max HP");
                  addText("ratio)");
                };
                if (path["enemyMaxHPRatioPer100AP"]) {
                  addText(' (+' +  multiplyTicks2(path["enemyMaxHPRatioPer100AP"]));
                  colorHP(" Enemy Max HP");
                  addText("ratio per");
                  colorAP(" 100 AP");
                  addText(")");
                };
              }
              doubleBreak();
            };

            if (champFile[ability]["specialDelivery"]) {

              var path = champFile[ability]["specialDelivery"]["tickDamage"];
              addBold("Special Delivery: ");

              addText('[' + path["dmgByLvl"][0] + " to " + path["dmgByLvl"][17] + ", based on lvl. ");
              underLine("Currently");
              addText(path["dmgByLvl"][champLevel] + '] ');
              addText(" (+" + path["bonusADRatio"]);
              colorAD(" Bonus AD");
              addText("ratio)");
              addText(" (+" + path["APRatio"]);
              colorAP(" AP");
              addText("ratio)");
              addText(' per ' + path["interval"] + ' sec, for ' + multiplyTicks2(path["interval"])   + ' seconds.')

              singleBreak();
              underLine('Total Damage');

              addText('[' + multiplyTicks(path["dmgByLvl"][0]) + " to " 
              + multiplyTicks(path["dmgByLvl"][17]) + ", based on lvl. ");
              underLine("Currently");
              addText(multiplyTicks(path["dmgByLvl"][champLevel]) + '] ');
              addText(" (+" + multiplyTicks2(path["bonusADRatio"]));
              colorAD(" Bonus AD");
              addText("ratio)");
              addText(" (+" + multiplyTicks2(path["APRatio"]));
              colorAP(" AP");
              addText("ratio)");
            
              doubleBreak();
            };

            if (champFile[ability]["passivePermanent"]) {
              var path = champFile[ability]["passivePermanent"];
              addBold('Passive: ');
              
              if (path["bonusAttackDamage"]) {
                underLine('Bonus Attack Damage');
                if (path["bonusAttackDamage"]["ADRatioByLvl"]) {
                  addText('[' + path["bonusAttackDamage"]["ADRatioByLvl"][0] 
                  + " to " + path["bonusAttackDamage"]["ADRatioByLvl"][17]);
                  colorAD(" AD");
                  addText("ratio, based on lvl. ");
                  underLine("Currently");
                  addText(path["bonusAttackDamage"]["ADRatioByLvl"][champLevel] + '] ');
                  this[`appliedStats${side}`].ad += path["bonusAttackDamage"]["ADRatioByLvl"][champLevel]
                };
                if (path["bonusAttackDamage"]["bonusADRatio"]) {
                  addText(' (+' + removeParen(path["bonusAttackDamage"]["bonusADRatio"]));
                  colorAD(" Bonus AD");
                  addText("ratio)");
                };
                if (path["bonusAttackDamage"]["critChanceRatio"]) {
                  addText(' (+' + path["bonusAttackDamage"]["critChanceRatio"]);
                  colorCrit(" Crit Chance");
                  addText(")");
                };
                if (path["bonusAttackDamage"]["bonusAttackSpeedRatio"]) {
                  addText(' (+' + path["bonusAttackDamage"]["bonusAttackSpeedRatio"]);
                  colorAS(" Bonus Attack Speed");
                  addText("ratio)");
                };
                if (path["bonusAttackDamage"]["minBonusAD"]) {
                  addText('Min: ');
                  removeSpace(path["bonusAttackDamage"]["minBonusAD"]);
                  singleBreak();
                  addText('Max: ');
                  removeSpace(path["bonusAttackDamage"]["maxBonusAD"]);
                };
                if (path["bonusAttackDamage"]["ADPerOverCrit"]) {
                  addText(path["bonusAttackDamage"]["ADPerOverCrit"] + ' per');
                  colorCrit(" Crit Chance over 100%");
                };
                if (!path["bonusAttackDamage"]["ADPerStack"] && ability === 'passive') {
                  singleBreak();
                  underLine('Total');
                };
                var bonusADCount = 0;
                if (path["bonusAttackDamage"]["ADRatioByLvl"]) {
                  bonusADCount += path["bonusAttackDamage"]["ADRatioByLvl"][champLevel] * totalAD;
                };
                if (path["bonusAttackDamage"]["bonusADRatio"]) {
                  bonusADCount += path["bonusAttackDamage"]["bonusADRatio"] * bonusAD;
                };
                if (path["bonusAttackDamage"]["critChanceRatio"]) {
                  bonusADCount += path["bonusAttackDamage"]["critChanceRatio"] * totalCritChance;
                };
                if (path["bonusAttackDamage"]["bonusAttackSpeedRatio"]) {
                  bonusADCount += path["bonusAttackDamage"]["bonusAttackSpeedRatio"] * bonusAS;
                };
                if (path["bonusAttackDamage"]["ADPerBonusHPRatio"]) {
                  bonusADCount += path["bonusAttackDamage"]["ADPerBonusHPRatio"] * bonusHP;
                }
                if (bonusADCount !== 0 && ability === 'passive') {
                  addText(Math.round(bonusADCount));
                };
                if (path["bonusAttackDamage"]["minBonusAD"] && ability === 'passive') {
                  addText('Min: ' + arrayCheck(path["bonusAttackDamage"]["minBonusAD"]));
                  singleBreak();
                  addText('Max: ' + arrayCheck(path["bonusAttackDamage"]["maxBonusAD"]));
                }
                if (path["bonusAttackDamage"]["ADPerStack"]) {
                  addText(path["bonusAttackDamage"]["ADPerStack"] + ' per stack');
                };
                if (path["bonusAttackDamage"]["ADPerOverCrit"]) {
                  var overCrit = 0;
                  if (totalCritChance > 0.5) {
                    overCrit = (totalCritChance * 2) - 1
                  }
                  addText(Math.round(overCrit * 100 * path["bonusAttackDamage"]["ADPerOverCrit"]));
                }
              }
              if (path["bonusAPPerBonusHP"]) {
                underLine('Bonus Ability Power');
                addText(path["bonusAPPerBonusHP"] + ' per');
                colorHP(" Bonus Health");
                singleBreak();
                underLine('Total');
                addText(Math.round(path["bonusAPPerBonusHP"] * bonusHP));
              };
              if (path["bonusHPPerAP"]) {
                singleBreak();
                underLine('Bonus Health');
                addText(path["bonusHPPerAP"] + ' per');
                colorAP(" AP");
                singleBreak();
                underLine('Total');
                addText(Math.round(path["bonusHPPerAP"] * totalAP));
              };
              if (path["bonusArmorPerStack"]) {
                underLine('Bonus Armor');
                addText(path["bonusArmorPerStack"] + ' per stack');
                singleBreak();
              };
              if (path["bonusAPPerStack"]) {
                underLine('Bonus Ability Power');
                addText(path["bonusAPPerStack"] + ' per stack');
              };
              if (path["bonusCritChancePerFury"]) {
                underLine('Bonus Crit Chance');
                addText(path["bonusCritChancePerFury"] + '% per Fury')
              };
              if (path["critChancePer20Stacks"]) {
                singleBreak();
                underLine('Bonus Crit Chance Ratio');
                addText(path["critChancePer20Stacks"] + ' per 20 stacks');
              };
              if (path["lifestealPerOverCrit"]) {
                singleBreak();
                underLine('Life Steal per Overcrit');
                addText(path["lifestealPerOverCrit"]);
              };
              if (path["itemCritChanceMultiplier"]) {
                doubleBreak();
                underLine('Item Crit Chance Multiplier');
                addText(path["itemCritChanceMultiplier"]);
              };
              if (path["bonusResist"]) {
                underLine('Bonus Armor and Magic Resist');
                removeSpace(path["bonusResist"]);
              };
              if (path["bonusResistRatio"]) {
                underLine('Bonus Armor and Magic Resist');
                addText('(' + path["bonusResistRatio"] + ' Bonus Ratio)');
                singleBreak();
                addText('Current Bonus ');
                colorArmor('Armor');
                addText('- ' + Math.round(path["bonusResistRatio"] * bonusArmor) + ', Current Bonus ');
                colorMR('Magic Resist');
                addText('- ' + Math.round(path["bonusResistRatio"] * bonusMR))
              };
              if (path["bonusBonusResistHPRatio"]) {
                underLine('Bonus Armor, MR, and HP');
                addText('(' + path["bonusBonusResistHPRatio"] + ' Bonus Ratio)');
                if (path["bonusBonusPerStack"]) {
                  addText(' (+' + path["bonusBonusPerStack"] + ' per stack)');
                };
                singleBreak();
                addText('Current Bonus ');
                colorArmor('Armor');
                addText('- ' + Math.round(path["bonusBonusResistHPRatio"] * bonusArmor) + ', Current Bonus ');
                colorMR('Magic Resist');
                addText('- ' + Math.round(path["bonusBonusResistHPRatio"] * bonusMR) + ', Current Bonus ');
                colorHP('HP');
                addText('- ' + Math.round(path["bonusBonusResistHPRatio"] * bonusHP));
              };
              if (path["bonusResistPerStack"]) {
                addText(' (+' + path["bonusResistPerStack"] + ' per stack)');
              };
              if (path["minResistRatio"]) {
                underLine('Bonus Armor and Magic Resist');
                addText('Min: ' + path["minResistRatio"] + ' total ratio, Max: ' + path["maxResistRatio"] + ' total ratio');
                singleBreak();
                addText('Current Min: ');
                colorArmor('Armor');
                addText('- ' + Math.round(path["minResistRatio"] * totalArmor) + ', ');
                colorMR('Magic Resist');
                addText('- ' + Math.round(path["minResistRatio"] * totalMR))
                singleBreak();
                addText('Current Max: ');
                colorArmor('Armor');
                addText('- ' + Math.round(path["maxResistRatio"] * totalArmor) + ', ');
                colorMR('Magic Resist');
                addText('- ' + Math.round(path["maxResistRatio"] * totalMR))
              };
              if (path["bonusArmor"]) {
                underLine('Bonus Armor');
                if (path["bonusArmor"]["minArmorRatio"]) {
                  addText('Min: (' + removeParen(path["bonusArmor"]["minArmorRatio"]));
                  colorArmor(' Armor');
                  addText('ratio)');
                  singleBreak();
                  addText('Max: (' + removeParen(path["bonusArmor"]["maxArmorRatio"]));
                  colorArmor(' Armor');
                  addText('ratio)');
                  /*singleBreak();
                  addText('Current Min: ' + Math.round(path["bonusArmor"]["minArmorRatio"] * totalArmor) 
                  + ', Max: ' + + Math.round(path["bonusArmor"]["maxArmorRatio"] * totalArmor));*/
                }
                if (path["bonusArmorRatio"]) {
                  addText(' (+' + removeParen(path["bonusArmorRatio"]));
                  colorArmor(' Bonus Armor');
                  addText('ratio)');
                }
              };
              if (path["bonusMagicResist"]) {
                singleBreak();
                underLine('Bonus Magic Resist');
                removeSpace(path["bonusMagicResist"]);
                if (path["bonusMagicResistRatio"]) {
                  addText(' (+' + removeParen(path["bonusMagicResistRatio"]));
                  colorMR(' Bonus Magic Resist');
                  addText('ratio)');
                }
              };
              if (path["bonusHealth"]) {
                underLine('Bonus Health')
                if (path["bonusHealth"]["healthPerStack"]) {
                  addText('(' + path["bonusHealth"]["healthPerStack"] + ' per stack)');
                };
                if (path["bonusHealth"]["healthPerTakedown"]) {
                  addText(' (+' + path["bonusHealth"]["healthPerTakedown"] + ' per Takedown)');
                }
              };
              if (path["bonusMoveSpeedRatio"]) {
                underLine('Bonus Move Speed Ratio');
                removeSpace(path["bonusMoveSpeedRatio"])
              };
              if (path["bonusMoveSpeedRatioPer100AP"]) {
                addText(' (+' + path["bonusMoveSpeedRatioPer100AP"] + ' per');
                colorAP(' 100 AP');
                addText(')');
              };
              if (path["lifeStealByLvl"]) {
                underLine('Life Steal Ratio');
                addText('[' + path["lifeStealByLvl"][0] + " to " + path["lifeStealByLvl"][17] + ", based on lvl. ");
                underLine("Currently");
                addText(path["lifeStealByLvl"][champLevel] + '] ')
              };
              if (path["spellVamp"]) {
                underLine('Spell Vamp Ratio')
                addText('(' + removeParen(path["spellVamp"]) + ')')
              };
              if (path["omniVamp"]) {
                underLine('Omni Vamp Ratio')
                addText('(' + removeParen(path["omniVamp"]) + ')')
              };
              if (path["armorPenRatio"]) {
                underLine('Armor Pen Ratio')
                addText('(' + removeParen(path["armorPenRatio"]) + ')');
              };
              if (path["magicPenRatio"]) {
                underLine('Magic Pen Ratio')
                addText('(' + removeParen(path["magicPenRatio"]) + ')')
              };
              if (path["bonusAttackSpeed"]) {
                underLine('Bonus Attack Speed Ratio')
                removeSpace(path["bonusAttackSpeed"])
              };
              if (path["attackSpeedPerMissingHPRatio"]) {
                underLine('Bonus Attack Speed');
                addText('(' + path["attackSpeedPerMissingHPRatio"] + ' per');
                colorHP(' Missing HP');
                addText('ratio)');
              };
              if (path["minBonusAttackSpeed"]) {
                underLine('Bonus Attack Speed');
                addText('Min: ' + path["minBonusAttackSpeed"]);
                singleBreak();
                addText('Max: ' + path["maxBonusAttackSpeed"]);
              };
              if (path["minBonusAttackSpeedByLvl"]) {
                underLine('Min Bonus Attack Speed');
                addText('[' + path["minBonusAttackSpeedByLvl"][0] + " to " 
                + path["minBonusAttackSpeedByLvl"][17] + ", based on lvl. ");
                underLine("Currently");
                addText(path["minBonusAttackSpeedByLvl"][champLevel] + '] ')
              };
              if (path["maxBonusAttackSpeedByLvl"]) {
                singleBreak();
                underLine('Max Bonus Attack Speed');
                addText('[' + path["maxBonusAttackSpeedByLvl"][0] + " to " 
                + path["maxBonusAttackSpeedByLvl"][17] + ", based on lvl. ");
                underLine("Currently");
                addText(path["maxBonusAttackSpeedByLvl"][champLevel] + '] ')
              };
              if (path["maxHPRegen"]) {
                underLine('Max HP Regen Ratio');
                addText(path["maxHPRegen"] + ' per 5 secs.')
                singleBreak();
                addText('Current Value: ' + Math.round(path["maxHPRegen"] * totalHP));
                colorHP(' HP');
                addText('per 5 secs.');
              };
              if (path["minMaxHPRegen"]) {
                underLine('Max HP Regen Ratio');
                addText('Min: ' + path["minMaxHPRegen"] + ', Max: ' + path["maxMaxHPRegen"]);
                singleBreak();
                addText('Current');
                colorHP(' HP');
                addText('per 5: Min: ' + Math.round(path["minMaxHPRegen"] * totalHP) 
                + ', Max: ' + Math.round(path["maxMaxHPRegen"] * totalHP))
              };
              if (path["tenacity"]) {
                underLine('Tenacity Ratio');
                addText(path["tenacity"])
              };
              if (path["maxHPRegenByLvl"]) {
                underLine('Max Health Regen Ratio');
                addText('[' + path["maxHPRegenByLvl"][0] + " to " + path["maxHPRegenByLvl"][17] + ", based on lvl. ");
                underLine("Currently");
                addText(path["maxHPRegenByLvl"][champLevel] + '] ')
              };
              if (path["HPRegenPer5MissHPByLvl"]) {
                underLine('Health Regen');
                addText('[' + path["HPRegenPer5MissHPByLvl"][0] + " to " + path["HPRegenPer5MissHPByLvl"][17] 
                + " per second, ");
                colorHP('per 5% Missing HP');
                addText(', based on lvl. ');
                underLine("Currently");
                addText(path["HPRegenPer5MissHPByLvl"][champLevel] + '] ')
              };
              if (path["bonusMSToBonusADRatioByLvl"]) {
                underLine('Bonus AD per Bonus Movespeed');
                addText('[' + path["bonusMSToBonusADRatioByLvl"][0] + " to " 
                + path["bonusMSToBonusADRatioByLvl"][17] + ", based on lvl. ");
                underLine("Currently");
                addText(path["bonusMSToBonusADRatioByLvl"][champLevel] + '] ')
              };
              if (path["bonusManaPer100AP"]) {
                underLine('Bonus Mana Ratio');
                addText(path["bonusManaPer100AP"] + ' per ');
                colorAP('100 AP');
                singleBreak();
                addText('Current Bonus Mana: ' + Math.round(path["bonusManaPer100AP"] * totalAP / 100));
              };
              doubleBreak();
            };

            if (champFile[ability]["selfHeal"]) {
              var path = champFile[ability]["selfHeal"]
              addBold('Self Heal: ')
              if (path["healByLvl"]) {
                addText('[' + path["healByLvl"][0] + " to " + path["healByLvl"][17] + ", based on lvl. ");
                underLine("Currently");
                addText(path["healByLvl"][champLevel] + '] ')
                doubleBreak();
              }
            };

            if (champFile[ability]["allyHeal"]) {
              var path = champFile[ability]["allyHeal"]
              addBold('Ally Heal: ')
              if (path["healByLvl"]) {
                addText('[' + path["healByLvl"][0] + " to " + path["healByLvl"][17] + ", based on lvl. ");
                underLine("Currently");
                addText(path["healByLvl"][champLevel] + '] ')
                doubleBreak();
              }
            };
            
            if (champFile[ability]["heal"]) {
              var path = champFile[ability]["heal"];
              addBold('Heal: ');
              if (path["heal"]) {
                removeSpace(path["heal"])
              };
              if (path["healByLvl"]) {
                addText('[' + path["healByLvl"][0] + " to " + path["healByLvl"][17] + ", based on lvl. ");
                underLine("Currently");
                addText(path["healByLvl"][champLevel] + '] ')
              };
              if (path["maxHPRatioByLvl"]) {
                addText(' (+' + path["maxHPRatioByLvl"][0] + " to " + path["maxHPRatioByLvl"][17]);
                colorHP(' Max HP');
                addText('ratio, based on lvl. ');
                underLine("Currently");
                addText(path["maxHPRatioByLvl"][champLevel] + ')')
              };
              if (path["lifeStealRatio"]) {
                underLine('Damage Ratio');
                addText(path["lifeStealRatio"] + ' of Life Steal ratio');
              };
              if (path["dmgRatio"]) {
                underLine('Damage Ratio');
                removeSpace(path["dmgRatio"]);
              };
              if (path["minDmgRatio"]) {
                underLine('Damage Ratio');
                addText('Min: ' + path["minDmgRatio"] + ', Max: ' + path["maxDmgRatio"]);
              };
              if (path["dmgTakenRatio"]) {
                underLine('Damage Taken Ratio');
                removeSpace(path["dmgTakenRatio"]);
              };
              if (path["APRatio"]) {
                addText(" (+" + removeParen(path["APRatio"]));
                colorAP(' AP');
                addText('ratio)');
              };
              if (path["ADRatio"]) {
                addText(" (+" + removeParen(path["ADRatio"]));
                colorAD(' AD');
                addText('ratio)');
              };
              if (path["bonusADRatio"]) {
                addText(" (+" + removeParen(path["bonusADRatio"]));
                colorAD(' Bonus AD');
                addText('ratio)');
              };
              if (path["bonusHPRatio"]) {
                addText(" (+" + removeParen(path["bonusHPRatio"]));
                colorHP(' Bonus HP');
                addText('ratio)');
              };
              if (path["maxHPRatio"]) {
                addText(" (+" + removeParen(path["maxHPRatio"]));
                colorHP(' Max HP');
                addText('ratio)');
              };
              if (path["enemyMaxHPRatio"]) {
                addText(" (+" + removeParen(path["enemyMaxHPRatio"]));
                colorHP(' Enemy Max HP');
                addText('ratio)');
              };
              if (path["enemyMaxHPRatioByLvl"]) {
                addText(' (+' + path["enemyMaxHPRatioByLvl"][0] + " to " + path["enemyMaxHPRatioByLvl"][17]);
                colorHP(' Enemy Max HP');
                addText('ratio, based on lvl. ');
                underLine("Currently");
                addText(path["enemyMaxHPRatioByLvl"][champLevel] + ')')
              };
              if (path["enemyMaxHPRatioPer100AP"]) {
                addText(" (+" + path["enemyMaxHPRatioPer100AP"]);
                colorHP(' Enemy Max HP');
                addText('ratio per');
                colorAP(' 100 AP');
                addText(')');
              };
              if (path["enemyMaxHPRatioPer100BonusAD"]) {
                addText(" (+" + path["enemyMaxHPRatioPer100BonusAD"]);
                colorHP(' Enemy Max HP');
                addText('ratio per');
                colorAD(' 100 Bonus AD');
                addText(')');
              };
              if (path['enemyMaxHPRatioPerBonusAS']) {
                addText(" (+" + path["enemyMaxHPRatioPerBonusAS"]);
                colorHP(' Enemy Max HP');
                addText('ratio per');
                colorAS(' Bonus Attack Speed');
                addText('ratio)');
              };
              if (path["maxHPRatioByUltRank"]) {
                addText('[' + path["maxHPRatioByUltRank"][0] + " to " + path["maxHPRatioByUltRank"][3]);
                colorHP(' Max HP');
                addText('ratio, based on ult rank. ');
                underLine("Currently");
                addText(path["maxHPRatioByUltRank"][RRank] + '] ')
                singleBreak();
                underLine('Current Value');
                addText(Math.round(path["maxHPRatioByUltRank"][RRank] * totalHP));
              };
              if (path["increasePer1%HPLostLast4Sec"]) {
                singleBreak();
                addText('Increase by Ratio of ' +  path["increasePer1%HPLostLast4Sec"] + ' per 1%');
                colorHP(' HP');
                addText('lost in the last 4 seconds.');
              };
              if (path["missingHPRatio"]) {
                addText(" (+" + removeParen(path["missingHPRatio"]));
                colorHP(' Missing HP');
                addText('ratio)');
              };
              if (path['missingHPRatioPer100AP']) {
                addText(" (+" + removeParen(path["missingHPRatioPer100AP"]));
                colorHP(' Missing HP');
                addText('ratio per');
                colorAP(' 100 AP');
                addText(')');
              };
              if (path["preMitigation"]) {
                addText(', pre-mitigation.');
              };
              if (path["system"] === "max") {
                underLine('Max');
                if (path["maxHealByLvl"]) {
                  addText('[' + path["maxHealByLvl"][0] + " to " + path["maxHealByLvl"][17] + ", based on lvl. ");
                  underLine("Currently");
                  addText(path["maxHealByLvl"][champLevel] + '] ')
                }
              };
              if (path["system"] === '2Part') {
                underLine('Part 1');
                if (path["part1"]["heal"]) {
                  removeSpace(path["part1"]["heal"])
                };
                if (path["part1"]["APRatio"]) {
                  addText(" (+" + removeParen(path["part1"]["APRatio"]));
                  colorAP(' AP');
                  addText('ratio)');
                };
                singleBreak();
                underLine('Part 2');
                if (path["part2"]["part1RatioFormula"]) {
                  addText('Formula: ' + path["part2"]["part1RatioFormula"]);
                }
              };
              if (path["system"] === "minMax" ) {
                underLine('Min')
                if (path["minHeal"]) {
                  removeSpace(path["minHeal"])
                };
                if (path["minHealByLvl"]) {
                  addText('[' + path["minHealByLvl"][0] + " to " + path["minHealByLvl"][17] + ", based on lvl. ");
                  underLine("Currently");
                  addText(path["minHealByLvl"][champLevel] + '] ')
                };
                if (path["minAPRatio"]) {
                  addText(" (+" + removeParen(path["minAPRatio"]));
                  colorAP(' AP');
                  addText('ratio)');
                };
                if (path["minADRatio"]) {
                  addText(" (+" + removeParen(path["minADRatio"]));
                  colorAD(' AD');
                  addText('ratio)');
                };
                if (path["minBonusADRatio"]) {
                  addText(" (+" + removeParen(path["minBonusADRatio"]));
                  colorAD(' Bonus AD');
                  addText('ratio)');
                };
                if (path["minBonusHPRatio"]) {
                  addText(" (+" + removeParen(path["minBonusHPRatio"]));
                  colorHP(' Bonus HP');
                  addText('ratio)');
                };
                if (path["minMaxHPRatio"]) {
                  addText(" (+" + removeParen(path["minMaxHPRatio"]));
                  colorHP(' Max HP');
                  addText('ratio)');
                };
                if (path["minMissingHPRatio"]) {
                  addText(" (+" + removeParen(path["minMissingHPRatio"]));
                  colorHP(' Missing HP');
                  addText('ratio)');
                };
                if (path["minMissingHPRatioPer100AP"]) {
                  addText(" (+" + removeParen(path["minMissingHPRatioPer100AP"]));
                  colorHP(' Missing HP');
                  addText('ratio per');
                  colorAP(' 100 AP');
                  addText(')');
                };

                singleBreak();
                underLine('Max');

                if (path["maxHeal"]) {
                  removeSpace(path["maxHeal"])
                };
                if (path["maxHealByLvl"]) {
                  addText('[' + path["maxHealByLvl"][0] + " to " + path["maxHealByLvl"][17] + ", based on lvl. ");
                  underLine("Currently");
                  addText(path["maxHealByLvl"][champLevel] + '] ')
                };
                if (path["maxAPRatio"]) {
                  addText(" (+" + removeParen(path["maxAPRatio"]));
                  colorAP(' AP');
                  addText('ratio)');
                };
                if (path["maxADRatio"]) {
                  addText(" (+" + removeParen(path["maxADRatio"]));
                  colorAD(' AD');
                  addText('ratio)');
                };
                if (path["maxBonusADRatio"]) {
                  addText(" (+" + removeParen(path["maxBonusADRatio"]));
                  colorAD(' Bonus AD');
                  addText('ratio)');
                };
                if (path["maxBonusHPRatio"]) {
                  addText(" (+" + removeParen(path["maxBonusHPRatio"]));
                  colorHP(' Bonus HP');
                  addText('ratio)');
                };
                if (path["maxMaxHPRatio"]) {
                  addText(" (+" + removeParen(path["maxMaxHPRatio"]));
                  colorHP(' Max HP');
                  addText('ratio)');
                };
                if (path["maxMissingHPRatio"]) {
                  addText(" (+" + removeParen(path["maxMissingHPRatio"]));
                  colorHP(' Missing HP');
                  addText('ratio)');
                };
                if (path["maxMissingHPRatioPer100AP"]) {
                  addText(" (+" + removeParen(path["maxMissingHPRatioPer100AP"]));
                  colorHP(' Missing HP');
                  addText('ratio per');
                  colorAP(' 100 AP');
                  addText(')');
                }
              };
              if (path["interval"]) {
                addText(' per ' + path["interval"] + ' sec')
                if (path["duration"]) {
                  addText(', for ' + path["duration"] + ' seconds.');
                };
                singleBreak();
                if (path["system"] === 'minMax') {
                  singleBreak();
                };
                underLine('Total');
                if (path["heal"]) {
                  addText(mapSpace(multiplyTicks(path["heal"])));
                };
                if (path["APRatio"]) {
                  addText(' (+' + mapParen(multiplyTicks2(path['APRatio'])));
                  colorAP(' AP');
                  addText('ratio)');
                };
                if (path["system"] === 'minMax') {
                  if (path["minHeal"]) {
                    addText('Min: ' + mapSpace(multiplyTicks(path["minHeal"])));
                  };
                  if (path["minAPRatio"]) {
                    addText(' (+' + mapParen(multiplyTicks2(path['minAPRatio'])));
                    colorAP(' AP');
                    addText('ratio)');
                  };
                  singleBreak();
                  if (path["maxHeal"]) {
                    addText('Max: ' + mapSpace(multiplyTicks(path["maxHeal"])));
                  };
                  if (path["maxAPRatio"]) {
                    addText(' (+' + mapParen(multiplyTicks2(path['maxAPRatio'])));
                    colorAP(' AP');
                    addText('ratio)');
                  }
                }
              };
              if (path["system"] === 'perTarget') {
                addText(' per champion');
              }
              if (path["duration"] && !path["interval"]) {
                addText(' over ' + path["duration"] + ' seconds.')
              };
              if (path["empower"]) {
                var empPath = path["empower"]
                singleBreak();
                addBold('Empowered Heal: ');
                if (empPath["system"] === 'minMax') {
                  underLine('Min');
                  if (empPath["minHeal"]) {
                    removeSpace(empPath["minHeal"]);
                  }
                  if (empPath["minBonusADRatio"]) {
                    addText(' (+' + removeParen(empPath["minBonusADRatio"]));
                    colorAD(' Bonus AD');
                    addText('ratio)');
                  }
                  singleBreak();
                  underLine('Max');
                  if (empPath["maxHeal"]) {
                    removeSpace(empPath["maxHeal"]);
                  }
                }
              };
              if (path["empowerBonus"]) {
                var empPath = path["empowerBonus"];
                singleBreak();
                underLine('Empower Bonus Heal');
                if (empPath["healByLvl"]) {
                  addText('[' + empPath["healByLvl"][0] + " to " + empPath["healByLvl"][17] + ", based on lvl. ");
                  underLine("Currently");
                  addText(empPath["healByLvl"][champLevel] + '] ')
                };
                if (empPath["missingHPRatio"]) {
                  addText(" (+" + empPath["missingHPRatio"]);
                  colorHP(' Missing HP');
                  addText('ratio)');
                };
                if (empPath["missingHPRatioPer100AP"]) {
                  addText(" (+" + empPath["missingHPRatioPer100AP"]);
                  colorHP(' Missing HP');
                  addText('ratio per');
                  colorAP(' 100 AP');
                  addText(')');
                }
              };
              doubleBreak();
            };

            if (champFile[ability]["shield"]) {
              var path = champFile[ability]["shield"];
              if (path["type"] !== 'all') {
                addBold(path["type"] + ' Shield: ');
              } else {
                addBold(' Shield: ');
              };
              if (path["shield"]) {
                removeSpace(path["shield"])
              };
              if (path["shieldByLvl"]) {
                addText('[' + path["shieldByLvl"][0] + " to " + path["shieldByLvl"][17] + ", based on lvl. ");
                underLine("Currently");
                addText(path["shieldByLvl"][champLevel] + '] ')
              };
              if (path["shieldPerStack"]) {
                addText(" (+" + path["shieldPerStack"] + " per stack)")
              };
              if (path["dmgTakenRatio"]) {
                underLine('Damage Taken Ratio');
                removeSpace(path["dmgTakenRatio"]);
              };
              if (path["APRatio"]) {
                addText(" (+" + removeParen(path["APRatio"]));
                colorAP(' AP');
                addText('ratio)');
              };
              if (path["ADRatio"]) {
                addText(" (+" + removeParen(path["ADRatio"]));
                colorAD(' AD');
                addText('ratio)');
              };
              if (path["bonusADRatio"]) {
                addText(" (+" + removeParen(path["bonusADRatio"]));
                colorAD(' Bonus AD');
                addText('ratio)');
              };
              if (path["bonusHPRatio"]) {
                addText(" (+" + removeParen(path["bonusHPRatio"]));
                colorHP(' Bonus HP');
                addText('ratio)');
              };
              if (path["maxHPRatio"]) {
                addText(" (+" + removeParen(path["maxHPRatio"]));
                colorHP(' Max HP');
                addText('ratio)');
              };
              if (path["maxHPRatioByLvl"]) {
                addText('[' + path["maxHPRatioByLvl"][0] + " to " + path["maxHPRatioByLvl"][17]);
                colorHP(' Max HP');
                addText('ratio, based on lvl. ');
                underLine("Currently");
                addText(path["maxHPRatioByLvl"][champLevel] + '] ')
              };
              if (path["maxHPRatioPerStack"]) {
                addText(" (+" + removeParen(path["maxHPRatioPerStack"]));
                colorHP(' Max HP');
                addText('ratio per stack)');
              };
              if (path["maxManaRatio"]) {
                addText(" (+" + removeParen(path["maxManaRatio"]));
                colorMana(' Max Mana');
                addText('ratio)');
              };
              if (path["maxMaxHPRatio"]) {
                underLine('Max')
                addText('(' + removeParen(path["maxMaxHPRatio"]));
                colorHP(' Max HP');
                addText('ratio)');
              };
              if (path["system"] === "minMax" ) {
                underLine('Min')
                if (path["minShield"]) {
                  removeSpace(path["minShield"])
                };
                if (path["minShieldByLvl"]) {
                  addText(' [' + path["minShieldByLvl"][0] + " to " + path["minShieldByLvl"][17] + ", based on lvl. ");
                  underLine("Currently");
                  addText(path["minShieldByLvl"][champLevel] + '] ')
                };
                if (path["minAPRatio"]) {
                  addText(" (+" + removeParen(path["minAPRatio"]));
                  colorAP(' AP');
                  addText('ratio)');
                };
                if (path["minADRatio"]) {
                  addText(" (+" + removeParen(path["minADRatio"]));
                  colorAD(' AD');
                  addText('ratio)');
                };
                if (path["minBonusADRatio"]) {
                  addText(" (+" + removeParen(path["minBonusADRatio"]));
                  colorAD(' Bonus AD');
                  addText('ratio)');
                };
                singleBreak();
                underLine('Max');
                
                if (path["maxShield"]) {
                  removeSpace(path["maxShield"])
                };
                if (path["maxShieldByLvl"]) {
                  addText(' [' + path["maxShieldByLvl"][0] + " to " + path["maxShieldByLvl"][17] + ", based on lvl. ");
                  underLine("Currently");
                  addText(path["maxShieldByLvl"][champLevel] + '] ')
                };
                if (path["maxAPRatio"]) {
                  addText(" (+" + removeParen(path["maxAPRatio"]));
                  colorAP(' AP');
                  addText('ratio)');
                };
                if (path["maxADRatio"]) {
                  addText(" (+" + removeParen(path["maxADRatio"]));
                  colorAD(' AD');
                  addText('ratio)');
                };
                if (path["maxBonusADRatio"]) {
                  addText(" (+" + removeParen(path["maxBonusADRatio"]));
                  colorAD(' Bonus AD');
                  addText('ratio)');
                }
              };
              if (path["type"] !== 'Spell' && path["duration"]) {
                singleBreak();
              }
              if (path["duration"]) {
                underLine('Duration')
                addText(path["duration"])
              }
              if (path["combatCoolDown"]) {
                singleBreak();
                underLine('Combat Cooldown');
                addText(path["combatCoolDown"])
              }
              if (path["combatCoolDownByLvl"]) {
                singleBreak();
                underLine('Combat Cooldown');
                addText('[' + path["combatCoolDownByLvl"][0] + " to " 
                + path["combatCoolDownByLvl"][17] + "], based on lvl. ");
                addText('Currently: ' + path["combatCoolDownByLvl"][champLevel])
              }
              doubleBreak();
            };

            if (champFile[ability]["revive"]) {
              var path = champFile[ability]["revive"]
              addBold('Revive: ')
              if (path["reviveTransform"]) {
                underLine('Transform Stats');
                colorHP('HP Ratio');
                addText('- ' + path["reviveTransform"]["HPRatio"] 
                + ' (current value: ' + Math.round(path["reviveTransform"]["HPRatio"] * totalHP) + ')')
                if (path["reviveTransform"]["bonusArmorByLvl"]) {
                  singleBreak();
                  colorArmor('Bonus Armor');
                  addText('- ' + path["reviveTransform"]["bonusArmorByLvl"][0] 
                  + " to " + path["reviveTransform"]["bonusArmorByLvl"][17] + ", based on lvl. ")
                  addText('Currently: ' + path["reviveTransform"]["bonusArmorByLvl"][champLevel])
                };
                if (path["reviveTransform"]["bonusMagicResistByLvl"]) {
                  singleBreak();
                  colorMR('Bonus Magic Resist');
                  addText('- ' + path["reviveTransform"]
                  ["bonusMagicResistByLvl"][0] + " to " + path["reviveTransform"]["bonusMagicResistByLvl"][17]
                  + ', based on lvl. Currently: ' + path["reviveTransform"]["bonusMagicResistByLvl"][champLevel])
                };
                if (path["reviveTransform"]["armorRatio"]) {
                  singleBreak();
                  colorArmor('Armor Ratio');
                  addText('- ' + path["reviveTransform"]["armorRatio"]
                  + ' (current value: ' + Math.round(path["reviveTransform"]["armorRatio"] * totalArmor) + ')');
                };
                if (path["reviveTransform"]["magicResistRatio"]) {
                  singleBreak();
                  colorMR('Magic Resist Ratio');
                  addText('- ' + path["reviveTransform"]["magicResistRatio"]
                  + ' (current value: ' + Math.round(path["reviveTransform"]["magicResistRatio"] * totalMR) + ')')
                };
                if (path["reviveTransform"]["aoeResist"]) {
                  singleBreak();
                  addText('AOE Resist Ratio - ' + path["reviveTransform"]["aoeResist"])
                };
                singleBreak();
                underLine("Duration");
                if (path["reviveTransform"]["duration"]) {
                  addText(path["reviveTransform"]["duration"])
                };
                if (path["reviveTransform"]["durationByLvl"]) {
                  addText('[' + path["reviveTransform"]["durationByLvl"][0] 
                  + " to " + path["reviveTransform"]["durationByLvl"][17] + "], based on lvl. ")
                  addText('Currently: ' + path["reviveTransform"]["durationByLvl"][champLevel])
                }
              };
              if (path["health"]) {
                underLine('Health Restored');
                removeSpace(path["health"])
              }
              if (path["healthPerAP"]) {
                addText(' (+' + path["healthPerAP"] + ' per ');
                colorAP('AP');
                addText(')');
              };
              if (path["minHPRestoreRatio"]) {
                singleBreak();
                underLine('Health Restored');
                addText('Min: ' + path["minHPRestoreRatio"]);
                colorHP(' Max HP');
                addText('ratio (current value: ' + Math.round(path["minHPRestoreRatio"] * totalHP) + ')');
                singleBreak();
                addText('Max: ' + path["maxHPRestoreRatio"]);
                colorHP(' Max HP');
                addText('ratio (current value: ' + Math.round(path["maxHPRestoreRatio"] * totalHP) +')')
              }
              doubleBreak();
            };

            if (champFile[ability]["damageRedux"]) {
              var path = champFile[ability]["damageRedux"]
              if (path["type"] !== 'all') {
                addBold('Reduced ' + path["type"] + ' Damage Taken: ')
              } else {
                addBold('Reduced Damage Taken: ')
              };
              if (path["reduxRatio"]) {
                addText('Reduced by ratio of ');
                removeSpace(path["reduxRatio"])
              };
              if (path["dmg"]) {
                addText('Reduced by ');
                removeSpace(path["dmg"]);
              };
              if (path["APRatio"]) {
                addText(' (+' + removeParen(path["APRatio"]));
                colorAP(' AP');
                addText('ratio)');
              };
              if (path["bonusArmorRatio"]) {
                addText(' (+' + removeParen(path["bonusArmorRatio"]));
                colorArmor(' Bonus Armor');
                addText('ratio)');
              };
              if (path["bonusMagicResistRatio"]) {
                addText(' (+' + removeParen(path["bonusMagicResistRatio"]));
                colorMR(' Bonus Magic Resist');
                addText('ratio)');
              };
              if (path['maxReduxRatio']) {
                addText(', up to a maximum reduction ratio of ');
                removeSpace(path["maxReduxRatio"]);
              };
              if (path["reduxRatioPer100AP"]) {
                addText(' (+' + removeParen(path["reduxRatioPer100AP"]) + ' per');
                colorAP(' 100 AP');
                addText(')');
              };
              if (path["aoeDmgReduxRatio"]) {
                addText('AOE Damage reduced by ratio of ');
                removeSpace(path["aoeDmgReduxRatio"])
              };
              if (path["autoBlock"]) {
                singleBreak();
                addText('Blocks basic attacks.');
              };
              if (path["duration"] || path["minDuration"]) {
                singleBreak();
                underLine('Duration')
              };
              if (path["duration"]) {
                removeSpace(path["duration"])
              };
              if (path["minDuration"]) {
                addText('Min: ' + path["minDuration"] + ', Max: ' + path["maxDuration"]);
              };
              if (path["calculateFrom"]) {
                singleBreak();
                addText('Applies ' + path["calculateFrom"] + '.')
              };
              doubleBreak();
            };

            if (champFile[ability]["magicDamageRedux"]) {
              var path = champFile[ability]["magicDamageRedux"];
              addBold('Reduced Magic Damage Taken: ');
              if (path["reduxRatio"]) {
                addText('Reduced by ratio of ');
                removeSpace(path["reduxRatio"])
              };
              if (path["reduxRatioPer100AP"]) {
                addText(' (+' + removeParen(path["reduxRatioPer100AP"]) + ' per');
                colorAP(' 100 AP');
                addText(')');
              };
              if (path["reduxRatioPer100BonusMR"]) {
                addText(' (+' + removeParen(path["reduxRatioPer100BonusMR"]) + ' per');
                colorMR(' 100 Bonus Magic Resist');
                addText(')');
              };
              if (path["duration"]) {
                addText(' for ' + path["duration"] + ' seconds.')
              };
              singleBreak();
            };

            if (champFile[ability]["physDamageRedux"]) {
              var path = champFile[ability]["physDamageRedux"]
              addBold('Reduced Physical Damage Taken: ')
              if (path["reduxRatio"]) {
                addText('Reduced by ratio of ');
                removeSpace(path["reduxRatio"])
              };
              if (path["reduxRatioPer100AP"]) {
                addText(' (+' + removeParen(path["reduxRatioPer100AP"]) + ' per');
                colorAP(' 100 AP');
                addText(')');
              };
              if (path["reduxRatioPer100BonusMR"]) {
                addText(' (+' + removeParen(path["reduxRatioPer100BonusMR"]) + ' per');
                colorMR(' 100 Bonus Magic Resist');
                addText(')');
              };
              if (path["duration"]) {
                addText(' for ' + path["duration"] + ' seconds.')
              };
              doubleBreak();
            };

            if (champFile[ability]["passiveDmgIncrease"]) {
              addBold('Passive Damage Increase Ratio: ');
              addText('(' + removeParen(champFile[ability]["passiveDmgIncrease"]) + ')');
              doubleBreak();
            };

            if (champFile[ability]["dmgImmune"]) {
              addBold('Damage Immune Duration: ')
              removeSpace(champFile[ability]["dmgImmune"]);
              doubleBreak();
            };

            if (champFile[ability]["ccImmune"]) {
              addBold('Crowd Control Immune Duration: ')
              removeSpace(champFile[ability]["ccImmune"]);
              doubleBreak();
            };

            if (champFile[ability]["minDmgImmune"]) {
              addBold('Crowd Control Immune Duration: ')
              underLine('Min')
              addText(champFile[ability]["minDmgImmune"])
              singleBreak();
              underLine('Max')
              addText(champFile[ability]["maxDmgImmune"])
              doubleBreak();
            };

            if (champFile[ability]["silence"]) {
              addBold('Silence Duration: ')
              removeSpace(champFile[ability]["silence"]);
              doubleBreak();
            };

            if (champFile[ability]["blind"]) {
              addBold('Blind Duration: ')
              removeSpace(champFile[ability]["blind"]);
              doubleBreak();
            };

            if(champFile[ability]["interruptCC"] || champFile[ability]["interruptCCByLvl"] 
            || champFile[ability]["minInterruptCC"]) {
              addBold('Crowd Control Duration: ')
            };

            if (champFile[ability]["interruptCC"]) {
              removeSpace(champFile[ability]["interruptCC"]);
              if (champFile[ability]["interruptCCPer10Lethality"]) {
                addText(' (+' + champFile[ability]["interruptCCPer10Lethality"] + ' per 10 Lethality)');
              }
              doubleBreak();
            };

            if (champFile[ability]["interruptCCByLvl"]) {
              var ccPath = champFile[ability]["interruptCCByLvl"]
              addText('[' + ccPath[0] + " to " + ccPath[17] + "], based on lvl. ")
              addText('Currently: ' + ccPath[champLevel])
              doubleBreak();
            };

            if (champFile[ability]["minInterruptCC"]) {
              underLine('Min')
              removeSpace(champFile[ability]["minInterruptCC"]);
              singleBreak();
              underLine('Max')
              removeSpace(champFile[ability]["maxInterruptCC"]);
              doubleBreak();
            };
            
            if (champFile[ability]["damageAmp"]) {
              var ampPath = champFile[ability]["damageAmp"]
              addBold('Damage Amp Ratio: ');
              addText(ampPath["amp"]);
              singleBreak();
              underLine('Duration)');
              addText(ampPath["duration"]);
              doubleBreak();
            };

            if (champFile[ability]["ADRedux"]) {
              var path = champFile[ability]["ADRedux"]
              addBold('Attack Damage Reduction: ');
              if (path["redux"]) {
                removeSpace(path["redux"]);
              };
              doubleBreak();
            };

            if (champFile[ability]["resistRedux"]) {
              var path = champFile[ability]["resistRedux"]
              if (path["type"] === 'both') {
                addBold('Armor and Magic Resist Reduction: ');
              };
              if (path["type"] === 'magicResist') {
                addBold('Magic Resist Reduction: ');
              };
              if (path["type"] === 'armor') {
                addBold('Armor Reduction: ');
              };
              if (path["resist"]) {
                removeSpace(path["resist"]);
              };
              if (path["reduxRatio"]) {
                underLine('Ratio');
                removeSpace(path["reduxRatio"])
              };
              if (path["system"] === 'minMax') {
                underLine('Min')
                if (path["minResistRedux"]) {
                  removeSpace(path["minResistRedux"])
                };
                singleBreak();
                underLine('Max')
                if (path["maxResistRedux"]) {
                  removeSpace(path["maxResistRedux"])
                };
              }
              if (path["duration"]) {
                singleBreak();
                underLine('Duration')
                removeSpace(path["duration"])
              };
              if (path["maxDuration"]) {
                singleBreak();
                underLine('Max Duration')
                removeSpace(path["maxDuration"])
              };
              doubleBreak();
            };

            if (champFile[ability]["bonusStats"]) {
              document.getElementById(`${this.abilities[i]}${side}Applied`).childNodes[1].style.visibility = 'hidden'
              var path = champFile[ability]["bonusStats"];
              addBold('Bonus Stats: ');
              if (path["attackDamageByLvl"]) {
                underLine('Attack Damage');
                addText('[' + path["attackDamageByLvl"][0] + " to " + path["attackDamageByLvl"][17] 
                + "], based on lvl. Currently: " + path["attackDamageByLvl"][champLevel]);
                singleBreak();
              };
              if (path["attackSpeed"]) {
                underLine('Attack Speed Ratio');
                addText('(' + removeParen(path["attackSpeed"]) + ')')
                singleBreak();
              };
              if (path["ADRatio"]) {
                underLine('Attack Damage Ratio');
                addText('(' + removeParen(path["ADRatio"]) + ')')
                singleBreak();
              };
              if (path["lifeSteal"]) {
                underLine('Life Steal Ratio');
                addText('(' + removeParen(path["lifeSteal"]) + ')')
                singleBreak();
              };
              if (path["healingRatio"]) {
                underLine('Increased Healing Ratio');
                addText('(' + removeParen(path["healingRatio"]) + ')')
                singleBreak();
              };
              if (path["healingPerMissingHPRatio"]) {
                underLine('Increased Healing');
                addText('(' + path["healingPerMissingHPRatio"] + ' per');
                colorHP(' Missing HP');
                addText('ratio)');
                singleBreak();
              };
              if (path["resist"]) {
                underLine('Armor and Magic Resist');
                removeSpace(path["resist"]);
                singleBreak();
              };
              if (path["abilityPower"]) {
                underLine('Ability Power');
                removeSpace(path["abilityPower"]);
                singleBreak();
              }
              if (path["healthRegen"]) {
                underLine('Health Regen');
                removeSpace(path["healthRegen"]);
                addText(' per second');
                singleBreak();
              };
              if (path["duration"]) {
                underLine('Duration');
                addText(removeParen(path["duration"]))
                if (path["durationExtend"]) {
                  addText(', extends by ' + path["durationExtend"] + ' seconds.')
                }
                singleBreak();
              }
              singleBreak();
            };

            if (champFile[ability]["bonusHealth"]) {
              var path = champFile[ability]["bonusHealth"]
              addBold('Bonus Health: ')
              if (path["health"]) {
               removeSpace(path["health"])
              };
              if (path["healthPerStack"]) {
                removeSpace(path["healthPerStack"]);
                addText(' per stack');
                doubleBreak();
              };
              if (path["APRatio"]) {
                addText(' (+'); 
                removeSpace(path["APRatio"]);
                colorAP(' AP');
                addText('ratio)');
              };
              if (path["duration"]) {
                singleBreak();
                underLine('Duration');
                addText(removeParen(path["duration"]))
              };
              doubleBreak();
            };

            if (champFile[ability]["maxHPRegen"]) {
              addBold('Max HP Ratio Regenerated: ');
              removeSpace(champFile[ability]["maxHPRegen"]);
              doubleBreak();
            };

            if (champFile[ability]["healthRegen"]) {
              var path = champFile[ability]["healthRegen"];
              singleBreak();
              addBold('Health Regen: ');
              if (path["dmgTakenRatio"]) {
                underLine('Damage Taken Ratio');
                removeSpace(path["dmgTakenRatio"]);
              };
              if (path["dmgTakenRatioByLvl"]) {
                addText('[' + path["dmgTakenRatioByLvl"][0] 
                + " to " + path["dmgTakenRatioByLvl"][17] + " Damage Taken ratio, based on lvl. ");
                underLine("Currently");
                addText(path["dmgTakenRatioByLvl"][champLevel] + '] ')
              };
              if (path["greyHealthRatioByLvl"]) {
                singleBreak();
                underLine('Grey Health Ratio');
                addText('[' + path["greyHealthRatioByLvl"][0] + " to " + path["greyHealthRatioByLvl"][17] 
                + ", based on lvl. ");
                underLine("Currently");
                addText(path["greyHealthRatioByLvl"][champLevel] + '] ')
              };
              if (path["maxHPRatio"]) {
                singleBreak();
                underLine('Max');
                addText(path["maxHPRatio"]);
                colorHP(' Max HP');
                addText('ratio');
              };
              doubleBreak();
            };

            if (champFile[ability]["bonusAttackDamage"]) {
              var path = champFile[ability]["bonusAttackDamage"]
              addBold('Bonus Attack Damage: ')
              if (path['attackDamage']) {
                removeSpace(path['attackDamage']);
              };
              if (path["ADRatio"]) {
                addText(' (+' + removeParen(path["ADRatio"]));
                colorAD(' AD');
                addText('ratio)');
              };
              if (path["attackDamagePerAPRatio"]) {
                addText(' (+' + path["attackDamagePerAPRatio"] + ' per');
                colorAP(' AP');
                addText(')');
              };
              if (path['minAttackDamage']) {
                underLine('Min');
                removeSpace(path['minAttackDamage'])
              };
              if (path['maxAttackDamage']) {
                singleBreak();
                underLine('Max');
                removeSpace(path['maxAttackDamage'])
              };
              if (path["duration"]) {
                singleBreak();
                underLine('Duration');
                addText(path['duration'])
              };
              doubleBreak();
            };

            if (champFile[ability]["bonusHPRegen"]) {
              var path = champFile[ability]["bonusHPRegen"];
              addBold('Bonus Health Regen: ');
              if (path["HPRegenPerSecondByLvl"]) {
                addText('[' + path["HPRegenPerSecondByLvl"][0] + " to " + path["HPRegenPerSecondByLvl"][17] 
                + "] per second, based on lvl. Currently: " + path["HPRegenPerSecondByLvl"][champLevel]);
              };
              doubleBreak();
            };

            if (champFile[ability]["bonusAdaptiveForce"]) {
              var path = champFile[ability]["bonusAdaptiveForce"]
              addBold('Self Bonus Adaptive Force: ');
              if (path["adaptiveForce"]) {
                removeSpace(path["adaptiveForce"]);
              }
              if (path["allyBonusADRatio"]) {
                addText(' (+' + removeParen(path["allyBonusADRatio"]));
                colorAD(' Ally Bonus AD');
                addText('ratio');
              }
              if (path["allyAPRatio"]) {
                addText(' OR +' + removeParen(path["allyAPRatio"]));
                colorAP(' Ally AP');
                addText('ratio)');
              };
              doubleBreak();
            };

            if (champFile[ability]["allyBonusAdaptiveForce"]) {
              var path = champFile[ability]["allyBonusAdaptiveForce"]
              addBold('Ally Bonus Adaptive Force: ')
              if (path["adaptiveAD"]) {
                colorAD('AD');
                addText('- [' + removeParen(path["adaptiveAD"]) + ']');
              };
              if (path["allyAdaptiveBonusADRatio"]) {
                addText(' (+' + removeParen(path["allyAdaptiveBonusADRatio"]));
                colorAD(' Ally Bonus AD');
                addText('ratio)');
              };
              if (path["adaptiveAP"]) {
                singleBreak();
                colorAP('AP');
                addText('- [' + removeParen(path["adaptiveAP"]) + ']');
              };
              if (path["allyAdaptiveAPRatio"]) {
                addText(' (+' + removeParen(path["allyAdaptiveAPRatio"]));
                colorAP(' Ally AP');
                addText('ratio)');
              };
              doubleBreak();
            };

            if (champFile[ability]["bonusResist"]) {
              var path = champFile[ability]["bonusResist"]
              addBold('Bonus Armor & Magic Resist: ');
              if (path["resist"]) {
                removeSpace(path["resist"]);
              }
              if (path["bonusResistByLvl"]) {
                addText('[' + path["bonusResistByLvl"][0] + " to " + path["bonusResistByLvl"][17] 
                + "], based on lvl. Currently: " + path["bonusResistByLvl"][champLevel]);
              };
              if (path["minResistByLvl"]) {
                underLine('Min');
                addText('[' + path["minResistByLvl"][0] + " to " + path["minResistByLvl"][17] 
                + ", based on lvl. Currently: " + path["minResistByLvl"][champLevel] + ']');
                singleBreak();
                underLine('Max');
                addText('[' + path["maxResistByLvl"][0] + " to " + path["maxResistByLvl"][17] 
                + ", based on lvl. Currently: " + path["maxResistByLvl"][champLevel] + ']');
              }
              if (path["bonusResistRatio"]) {
                addText(' (+' + path["bonusResistRatio"] + ' Bonus ');
                colorArmor('Armor');
                addText(' and ');
                colorMR('Magic Resist');
                addText(' ratio)');
              };
              if (path["minResist"]) {
                underLine('Min');
                removeSpace(path["minResist"]);
                singleBreak();
                underLine('Max');
                removeSpace(path["maxResist"]);
              }
              if (path["duration"]) {
                singleBreak();
                underLine('Duration')
                addText(path["duration"])
              }
              doubleBreak();
            };

            if (champFile[ability]["bonusArmorPenOnCrit"]) {
              var penPath = champFile[ability]["bonusArmorPenOnCrit"]
              addBold('Bonus-Armor Pen Ratio on Crits: ')
              addText(penPath["penRatio"]);
              singleBreak();
              underLine('Duration');
              addText(penPath["duration"]);
              doubleBreak();
            }

            if (champFile[ability]["bonusArmor"]) {
              var path = champFile[ability]["bonusArmor"]
              addBold('Bonus Armor: ')
              if (path["armor"]) {
                removeSpace(path["armor"])
              };
              if (path["armorRatio"]) {
                addText(' (+' + removeParen(path["armorRatio"]));
                colorArmor(' Armor');
                addText('ratio)');
              };
              if (path["bonusArmorRatio"]) {
                addText(' (+' + removeParen(path["bonusArmorRatio"]));
                colorArmor(' Bonus Armor');
                addText('ratio)');
              };
              if (path["bonusADRatio"]) {
                addText(' (+' + removeParen(path["bonusADRatio"]));
                colorAD(' Bonus AD');
                addText('ratio)');
              }
              if (path["system"] === 'minMax') {
                underLine('Min');
                if (path["minArmor"]) {
                  removeSpace(path["minArmor"]);
                };
                singleBreak();
                underLine('Max');
                if (path["maxArmor"]) {
                  removeSpace(path["maxArmor"]);
                };
              }
              doubleBreak();
            };

            if (champFile[ability]["allyBonusArmor"]) {
              var path = champFile[ability]["allyBonusArmor"]
              addBold('Ally Bonus Armor: ')
              if (path["armor"]) {
                removeSpace(path["armor"])
              };
              if (path["armorRatio"]) {
                addText(' (+' + removeParen(path["armorRatio"]));
                colorArmor(' Armor');
                addText('ratio)');
              };
              if (path["bonusArmorRatio"]) {
                addText(' (+' + removeParen(path["bonusArmorRatio"]));
                colorArmor(' Bonus Armor');
                addText('ratio)');
              };
              doubleBreak();
            };

            if (champFile[ability]["bonusMagicResist"]) {
              var path = champFile[ability]["bonusMagicResist"]
              addBold('Bonus Magic Resist: ')
              if (path["magicResist"]) {
                removeSpace(path["magicResist"])
              };
              if (path["magicResistRatio"]) {
                addText(' (+' + removeParen(path["magicResistRatio"]));
                colorMR(' Magic Resist');
                addText('ratio)');
              };
              if (path["bonusMagicResistRatio"]) {
                addText(' (+' + removeParen(path["bonusMagicResistRatio"]));
                colorMR(' Bonus Magic Resist');
                addText('ratio)');
              };
              if (path["APRatio"]) {
                addText(' (+' + removeParen(path["APRatio"]));
                colorAP(' AP');
                addText('ratio)');
              };
              doubleBreak();
            };

            if (champFile[ability]["allyBonusMagicResist"]) {
              var path = champFile[ability]["allyBonusMagicResist"]
              addBold('Ally Bonus Magic Resist: ')
              if (path["magicResist"]) {
                removeSpace(path["magicResist"])
              };
              if (path["magicResistRatio"]) {
                addText(' (+' + removeParen(path["magicResistRatio"]));
                colorMR(' Magic Resist');
                addText('ratio)');
              };
              if (path["bonusMagicResistRatio"]) {
                addText(' (+' + removeParen(path["bonusMagicResistRatio"]));
                colorMR(' Bonus Magic Resist');
                addText('ratio)');
              };
              doubleBreak();
            };

            if (champFile[ability]["bonusAttackSpeed"]) {
              var ASPath = champFile[ability]["bonusAttackSpeed"];
              addBold('Bonus Attack Speed Ratio: ')
              if (ASPath['attackSpeed']) {
                removeSpace(ASPath['attackSpeed'])
              };
              if (ASPath["totalAttackSpeed"]) {
                removeSpace(ASPath['totalAttackSpeed']);
                addText(' of ');
                colorAS('Total Attack Speed')
              };
              if (ASPath["attackSpeedByLvl"]) {
                addText('[' + ASPath["attackSpeedByLvl"][0] + " to " + ASPath["attackSpeedByLvl"][17] + ", based on lvl. ");
                underLine('Currently');
                addText(ASPath["attackSpeedByLvl"][champLevel] + ']');
              };
              if (ASPath["attackSpeedByRRank"]) {
                removeSpace(ASPath['attackSpeedByRRank']);
                addText(' (based on R rank)')
              };
              if (ASPath["attackSpeedPerStack"]) {
                addText(' (+' + ASPath["attackSpeedPerStack"] + ' per stack)');
              }
              if (ASPath['minAttackSpeed']) {
                underLine('Min')
                removeSpace(ASPath['minAttackSpeed']);
                if (ASPath["minBonusAttackSpeedRatio"]) {
                  addText(' (+' + ASPath["minBonusAttackSpeedRatio"]);
                  colorAS(' Bonus Attack Speed');
                  addText('ratio)');
                };
                if (ASPath["minAttackSpeedPer100AP"]) {
                  addText(' (+' + ASPath["minAttackSpeedPer100AP"] + ' per');
                  colorAP(' 100 AP');
                  addText(')');
                };

                singleBreak();
                underLine('Max');
                
                removeSpace(ASPath['maxAttackSpeed']);
                if (ASPath["maxBonusAttackSpeedRatio"]) {
                  addText(' (+' + ASPath["maxBonusAttackSpeedRatio"]);
                  colorAS(' Bonus Attack Speed');
                  addText('ratio)');
                }
                if (ASPath["maxAttackSpeedPer100AP"]) {
                  addText(' (+' + ASPath["maxAttackSpeedPer100AP"] + ' per');
                  colorAP(' 100 AP');
                  addText(')');
                }
              };
              if (ASPath["minAttackSpeedByLvl"]) {
                underLine('Min')
                addText('[' + ASPath["minAttackSpeedByLvl"][0] + " to " + ASPath["minAttackSpeedByLvl"][17] 
                + "], based on lvl. Currently: " + ASPath["minAttackSpeedByLvl"][champLevel]);
                singleBreak();
                underLine('Max')
                if (ASPath["maxAttackSpeedByLvl"]) {
                  addText('[' + ASPath["maxAttackSpeedByLvl"][0] + " to " + ASPath["maxAttackSpeedByLvl"][17] 
                  + "], based on lvl. Currently: " + ASPath["maxAttackSpeedByLvl"][champLevel]);
                }
              };
              if (ASPath["duration"]) {
                singleBreak();
                underLine('Duration')
                removeSpace(ASPath["duration"])
              };
              if (ASPath["minDuration"]) {
                singleBreak();
                underLine('Min Duration')
                addText(ASPath["minDuration"])
                if (ASPath['maxDuration']) {
                  underLine(', Max Duration')
                  addText(ASPath["maxDuration"])
                }
              }
              if (ASPath["durationAutos"]) {
                addText(' for ' + ASPath["durationAutos"] + ' attacks.');
              }
              doubleBreak();
            };

            if (champFile[ability]["bonusOmniVamp"]) {
              var path = champFile[ability]["bonusOmniVamp"];
              addBold('Bonus Omni Vamp Ratio: ')
              if (path['vamp']) {
                removeSpace(path['vamp'])
              };
              if (path["duration"]) {
                singleBreak();
                underLine('Duration')
                addText(path["duration"])
              };
              doubleBreak();
            };

            if (champFile[ability]["bonusMoveSpeed"]) {
              var msPath = champFile[ability]["bonusMoveSpeed"]
              addBold('Bonus Movement Speed: ');
              if (msPath["minBonusMSRatio"]) {
                underLine('Min Ratio');
                addText(msPath["minBonusMSRatio"]);
              };
              if (msPath["maxBonusMSRatio"]) {
                singleBreak();
                underLine('Max Ratio');
                addText(msPath["maxBonusMSRatio"]);
              };
              if (msPath["duration"]) {
                singleBreak();
                underLine("Duration")
                addText(msPath["duration"])
              }
              doubleBreak();
            };

            if (champFile[ability]["cripple"]) {
              var path = champFile[ability]["cripple"];
              addBold('Attack Speed Cripple: ');
              if (path["attackSpeed"]) {
                removeSpace(path["attackSpeed"]);
              };
              if (path["minAttackSpeed"]) {
                underLine('Min');
                removeSpace(path["minAttackSpeed"]);
                singleBreak();
                underLine('Max');
                removeSpace(path["maxAttackSpeed"]);
              };
              if (path["duration"]) {
                singleBreak();
                underLine('Duration');
                addText(path["duration"]);
              };
              doubleBreak();
            };

            if (champFile[ability]["petStats"]) {
              var path = champFile[ability]["petStats"];
              addBold('Pet Stats: ');
              if (path["auto"]) {
                underLine('Basic Attack');
                addText(path["auto"]["type"] + ' Damage: ');
                if (path["auto"]["dmg"]) {
                  removeSpace(path["auto"]["dmg"]);
                };
                if (path['auto']['dmgByLvl']) {
                  addText(' [' + path["auto"]["dmgByLvl"][0] + " to " + path["auto"]["dmgByLvl"][17] + ", based on lvl. ");
                  underLine("Currently");
                  addText(path["auto"]["dmgByLvl"][champLevel] + ']')
                };
                if (path["auto"]["APRatio"]) {
                  addText(' (+' + removeParen(path["auto"]["APRatio"]));
                  colorAP(' AP');
                  addText('ratio)');
                };
                if (path["auto"]["ADRatio"]) {
                  addText(' (' + removeParen(path["auto"]["ADRatio"]));
                  colorAD(' AD');
                  addText('ratio)');
                };
                if (path["auto"]["bonusADRatio"]) {
                  addText(' (+' + removeParen(path["auto"]["bonusADRatio"]));
                  colorAD(' Bonus AD');
                  addText('ratio)');
                };
                if (path["auto"]["enemyMaxHPRatio"]) {
                  addText(' (+' + path["auto"]["enemyMaxHPRatio"]);
                  colorHP(' Enemy Max HP');
                  addText('ratio)');
                };
                if (path["auto"]["system"] === 'minMax') {
                  addText('Min: ');
                  if (path["auto"]["minDmgByLvl"]) {
                    addText('[' + path["auto"]["minDmgByLvl"][0] + " to " 
                    + path["auto"]["minDmgByLvl"][17] + ", based on lvl. ");
                    underLine("Currently");
                    addText(path["auto"]["minDmgByLvl"][champLevel] + ']')
                  };
                  if (path["auto"]["minAPRatio"]) {
                    addText(' (+' + path["auto"]["minAPRatio"]);
                    colorAP(' AP');
                    addText('ratio)');
                  };
                  singleBreak();
                  addText('Max: ');
                  if (path["auto"]["maxDmgByLvl"]) {
                    addText('[' + path["auto"]["maxDmgByLvl"][0] + " to " 
                    + path["auto"]["maxDmgByLvl"][17] + ", based on lvl. ");
                    underLine("Currently");
                    addText(path["auto"]["maxDmgByLvl"][champLevel] + ']')
                  };
                  if (path["auto"]["maxAPRatio"]) {
                    addText(' (+' + path["auto"]["maxAPRatio"]);
                    colorAP(' AP ');
                    addText('ratio)');
                  }
                };
                if (path["auto"]["multiHitDmgRatio"]) {
                  singleBreak();
                  underLine('Multi-Hit Damage Ratio');
                  addText(path["auto"]["multiHitDmgRatio"]);
                }
              };
              if (path["attackSpeed"] || path["attackSpeedByLvl"] || path["minAttackSpeed"]) {
                singleBreak();
                underLine('Attack Speed');
              };
              if (path["attackSpeed"]) {
                removeSpace(path["attackSpeed"]);
              };
              if (path["attackSpeedByLvl"]) {
                addText('[' + path["attackSpeedByLvl"][0] + " to " + path["attackSpeedByLvl"][17] + ", based on lvl. ");
                underLine("Currently");
                addText(path["attackSpeedByLvl"][champLevel] + ']')
              };
              if (path["minAttackSpeed"]) {
                addText('Min: ' + path["minAttackSpeed"] + ', Max: ' + path["maxAttackSpeed"]);
              };
              if (path["attackSpeedRatio"]) {
                singleBreak();
                underLine('Attack Speed Ratio');
                addText(path["attackSpeedRatio"]);
              };
              if (path["bonusAttackSpeed"]) {
                addText(' (+' + removeParen(path["bonusAttackSpeed"]) + ')');
              };
              if (path["healthRatio"]) {
                singleBreak();
                underLine('Health Ratio');
                addText(path["healthRatio"]);
              };
              if (path["armorRatio"]) {
                singleBreak();
                underLine('Armor Ratio');
                addText(path["armorRatio"]);
              };
              if (path["magicResistRatio"]) {
                singleBreak();
                underLine('Magic Resist Ratio');
                addText(path["magicResistRatio"]);
              };
              if (path['health'] || path['healthByLvl']) {
                singleBreak();
                underLine('Health');
              };
              if (path["health"]) {
                removeSpace(path["health"]);
              };
              if (path["healthByLvl"]) {
                addText('[' + path["healthByLvl"][0] + " to " + path["healthByLvl"][17] + ", based on lvl. ");
                underLine("Currently");
                addText(path["healthByLvl"][champLevel] + ']')
              };
              if (path["healthPerAPRatioByLvl"]) {
                addText(' (+' + path["healthPerAPRatioByLvl"][0] + " to " 
                + path["healthPerAPRatioByLvl"][17] + " per");
                colorAP(' AP');
                addText(', based on lvl. ');
                underLine("Currently");
                addText(path["healthPerAPRatioByLvl"][champLevel] + ')')
              };
              if (path["maxHPRatio"]) {
                addText(' (+' + path["maxHPRatio"]);
                colorHP(' Max HP');
                addText('ratio)');
              };
              if (path["healthPerAPRatio"]) {
                addText(' (+' + path["healthPerAPRatio"] + ' per');
                colorAP(' AP');
                addText(')');
              };
              if (path["armor"] || path["armorByLvl"]) {
                singleBreak();
                underLine('Armor');
              }
              if (path["armor"]) {
                removeSpace(path["armor"]);
              };
              if (path["armorByLvl"]) {
                addText('[' + path["armorByLvl"][0] + " to " + path["armorByLvl"][17] + ", based on lvl. ");
                underLine("Currently");
                addText(path["armorByLvl"][champLevel] + ']')
              };
              if (path["armorPerAPRatio"]) {
                addText(' (+' + path["armorPerAPRatio"] + ' per');
                colorAP(' AP');
                addText(')');
              };
              if (path["magicResist"] || path["magicResistByLvl"]) {
                singleBreak();
                underLine('Magic Resist');
              };
              if (path["magicResist"]) {
                removeSpace(path["magicResist"]);
              };
              if (path["magicResistByLvl"]) {
                addText('[' + path["magicResistByLvl"][0] + " to " + path["magicResistByLvl"][17] + ", based on lvl. ");
                underLine("Currently");
                addText(path["magicResistByLvl"][champLevel] + ']')
              };
              if (path["magicResistPerAPRatio"]) {
                addText(' (+' + path["magicResistPerAPRatio"] + ' per');
                colorAP(' AP');
                addText(')');
              };
              if (path["interruptCC"]) {
                singleBreak();
                underLine('Crowd Control Duration');
                addText(path["interruptCC"]);
              };
              doubleBreak();
            };

            if (champFile[ability]["empower"]) {
              var ePath = champFile[ability]["empower"];
              addBold('Empower');
              doubleBreak();
              if (ePath['Q']) {
                var qB = document.createElement('b');
                var qU = document.createElement('u');
                qB.appendChild(qU);
                qU.innerText = 'Q: ';
                abilityDiv.appendChild(qB);
                if (ePath['Q']["petStats"]) {
                  singleBreak();
                  var path = champFile[ability]["empower"]["Q"]["petStats"];
                  addBold('Pet Stats: ');
                  if (path["auto"]) {
                    underLine('Basic Attack');
                    addText(path["auto"]["type"] + ' Damage: ');
                    if (path["auto"]["dmg"]) {
                      removeSpace(path["auto"]["dmg"]);
                    }
                    if (path["auto"]["APRatio"]) {
                      addText(' (+' + removeParen(path["auto"]["APRatio"]));
                      colorAP(' AP');
                      addText('ratio)');
                    }
                  };
                  if (path["attackSpeed"]) {
                    singleBreak();
                    underLine('Attack Speed');
                    addText(path["attackSpeed"]);
                  };
                  if (path["healthByLvl"]) {
                    singleBreak();
                    underLine('Health');
                    addText('[' + path["healthByLvl"][0] + " to " + path["healthByLvl"][17] + ", based on lvl. ");
                    underLine("Currently");
                    addText(path["healthByLvl"][champLevel] + ']')
                  };
                  if (path["healthPerAPRatioByLvl"]) {
                    addText(' (+' + path["healthPerAPRatioByLvl"][0] + " to " 
                    + path["healthPerAPRatioByLvl"][17] + " per");
                    colorAP(' AP');
                    addText(', based on lvl. ');
                    underLine("Currently");
                    addText(path["healthPerAPRatioByLvl"][champLevel] + ')')
                  }
                  if (path["armorByLvl"]) {
                    singleBreak();
                    underLine('Armor');
                    addText('[' + path["armorByLvl"][0] + " to " + path["armorByLvl"][17] + ", based on lvl. ");
                    underLine("Currently");
                    addText(path["armorByLvl"][champLevel] + ']')
                  };
                  if (path["magicResistByLvl"]) {
                    singleBreak();
                    underLine('Magic Resist');
                    addText('[' + path["magicResistByLvl"][0] + " to " + path["magicResistByLvl"][17] + ", based on lvl. ");
                    underLine("Currently");
                    addText(path["magicResistByLvl"][champLevel] + ']')
                  }
                };
                if (ePath['Q']['damage']) {
                  singleBreak();
                  var damage = ePath['Q']["damage"]
                  if (damage["type"]) {
                    addBold(damage["type"] + " Damage: ")
                  };
                  if (damage["dmg"]) {
                    removeSpace(damage["dmg"]);
                  };
                  if (damage["APRatio"]) {
                    addText(' (+' + removeParen(damage["APRatio"]));
                    colorAP(' AP');
                    addText('ratio)');
                  }
                  if (damage["system"] === 'minMax') {
                    underLine('Min');
                    if (damage["minDmg"]) {
                      removeSpace(damage["minDmg"]);
                    }
                    if (damage["minAPRatio"]) {
                      addText(' (+' + removeParen(damage["minAPRatio"]));
                      colorAP(' AP');
                      addText('ratio)');
                    }
                    singleBreak();
                    underLine('Max');
                    if (damage["maxDmg"]) {
                      removeSpace(damage["maxDmg"]);
                    }
                    if (damage["maxAPRatio"]) {
                      addText(' (+' + removeParen(damage["maxAPRatio"]));
                      colorAP(' AP');
                      addText('ratio)');
                    }
                  };
                };
                if (ePath['Q']['bonusDamage']) {
                  singleBreak();
                  var damage = ePath['Q']["bonusDamage"]
                  if (damage["type"]) {
                    addBold('Bonus ' + damage["type"] + " Damage: ")
                  };
                  if (damage["system"] === 'minMax') {
                    underLine('Min');
                    if (damage["minDmg"]) {
                      removeSpace(damage["minDmg"]);
                    };
                    if (damage["minAPRatio"]) {
                      addText(' (+' + removeParen(damage["minAPRatio"]));
                      colorAP(' AP');
                      addText('ratio)');
                    };
                    singleBreak();
                    underLine('Max');
                    if (damage["maxDmg"]) {
                      removeSpace(damage["maxDmg"]);
                    };
                    if (damage["maxAPRatio"]) {
                      addText(' (+' + removeParen(damage["maxAPRatio"]));
                      colorAP(' AP');
                      addText('ratio)');
                    }
                  }
                };
                doubleBreak();
              };
              if (ePath['W']) {
                var wB = document.createElement('b');
                var wU = document.createElement('u');
                wB.appendChild(wU);
                wU.innerText = 'W: ';
                abilityDiv.appendChild(wB);
                if (ePath['W']['damage']) {
                  singleBreak();
                  var damage = ePath['W']["damage"]
                  if (damage["type"]) {
                    addBold(damage["type"] + " Damage: ")
                  };
                  if (damage["dmg"]) {
                    removeSpace(damage["dmg"]);
                  };
                  if (damage["APRatio"]) {
                    addText(' (+' + removeParen(damage["APRatio"]));
                    colorAP(' AP');
                    addText('ratio)');
                  }
                  if (damage["system"] === 'minMax') {
                    underLine('Min');
                    if (damage["minDmg"]) {
                      removeSpace(damage["minDmg"]);
                    }
                    if (damage["minAPRatio"]) {
                      addText(' (+' + removeParen(damage["minAPRatio"]));
                      colorAP(' AP');
                      addText('ratio)');
                    }
                    singleBreak();
                    underLine('Max');
                    if (damage["maxDmg"]) {
                      removeSpace(damage["maxDmg"]);
                    }
                    if (damage["maxAPRatio"]) {
                      addText(' (+' + removeParen(damage["maxAPRatio"]));
                      colorAP(' AP');
                      addText('ratio)');
                    }
                  }
                };
                if (ePath['W']['heal']) {
                  singleBreak();
                  var path = ePath['W']['heal']
                  addBold('Heal: ')
                  if (path['system'] === 'minMax') {
                    underLine('Min');
                    if (path["minMissingHPRatio"]) {
                      addText('(' + removeParen(path["minMissingHPRatio"]));
                      colorHP(' Missing HP');
                      addText('ratio)');
                    };
                    if (path["minMissingHPRatioPer100AP"]) {
                      addText(' (+' + removeParen(path["minMissingHPRatioPer100AP"]));
                      colorHP(' Missing HP');
                      addText('ratio per');
                      colorAP(' 100 AP');
                      addText(')');
                    };
                    singleBreak();
                    underLine('Max');
                    if (path["maxMissingHPRatio"]) {
                      addText('(' + removeParen(path["maxMissingHPRatio"]) + ' Missing HP Ratio)');
                      colorHP(' Missing HP');
                      addText('ratio)');
                    }
                    if (path["maxMissingHPRatioPer100AP"]) {
                      addText(' (+' + removeParen(path["maxMissingHPRatioPer100AP"]));
                      colorHP(' Missing HP');
                      addText('ratio per');
                      colorAP(' 100 AP');
                      addText(')');
                    }
                  }
                }
                doubleBreak();
              };
              if (ePath['E']) {
                var eB = document.createElement('b');
                var eU = document.createElement('u');
                eB.appendChild(eU);
                eU.innerText = 'E: ';
                abilityDiv.appendChild(eB);
                if (ePath['E']['damage']) {
                  singleBreak();
                  var damage = ePath['E']["damage"]
                  if (damage["type"]) {
                    addBold(damage["type"] + " Damage: ")
                  };
                  if (damage["dmg"]) {
                    removeSpace(damage["dmg"]);
                  };
                  if (damage["APRatio"]) {
                    addText(' (+' + removeParen(damage["APRatio"]));
                    colorAP(' AP');
                    addText('ratio)');
                  };
                  if (damage["system"] === '2Part') {
                    underLine('Part 1');
                    if (damage["part1"]["dmg"]) {
                     removeSpace(damage["part1"]["dmg"]);
                    };
                    if (damage["part1"]["APRatio"]) {
                      addText(' (+' + removeParen(damage["part1"]["APRatio"]));
                      colorAP(' AP');
                      addText('ratio)');
                    }
                    singleBreak();
                    underLine('Part 2');
                    if (damage["part2"]["dmg"]) {
                      removeSpace(damage["part2"]["dmg"]);
                    };
                    if (damage["part2"]["APRatio"]) {
                      addText(' (+' + removeParen(damage["part2"]["APRatio"]));
                      colorAP(' AP');
                      addText('ratio)');
                    }
                  }
                };
                if (ePath['E']['bonusShield']) {
                  singleBreak();
                  var shield = ePath['E']["bonusShield"]
                  addBold('Bonus Shield: ');
                  if (shield["shield"]) {
                   removeSpace(shield["shield"]);
                  };
                  if (shield["APRatio"]) {
                    addText(' (+' + removeParen(shield["APRatio"]));
                    colorAP(' AP');
                    addText('ratio)');
                  };
                  if (shield["nonTargetRatio"]) {
                    singleBreak();
                    underLine('Non-Target Shield Ratio: ');
                    addText(shield["nonTargetRatio"]);
                  }
                }
                doubleBreak();
              }
            };

            if (champFile[ability]['statSteal']) {
              var path = champFile[ability]['statSteal'];
              addBold('Stat Steal: ');
              /*var text = document.createTextNode('');
              if (path['ratio']) {
                text.nodeValue = path['ratio'] + ' of Enemy ' + path['statType'] + ' for ' 
                + path['duration'] + ' seconds.'
              };
              if (path['gained']) {
                text.nodeValue = 'Gains ' + removeSpace(path['gained']) + ' and removes '+ removeSpace(path['removed']) 
                +  ' Enemy ' + path['statType'] + ' for ' + path['duration'] + ' seconds.'
              };
              abilityDiv.appendChild(text);
              if (path['minByLvl']) {
                singleBreak();
                var minU = document.createElement('u');
                minU.innerText = 'Min';
                abilityDiv.appendChild(minU);
                var text = document.createTextNode(': [' + path['minByLvl'][0] + ' to ' + path['minByLvl'][17]
                + ', based on lvl. Currently: ' + path['minByLvl'][champLevel] + ']');
                abilityDiv.appendChild(text);
              }*/
              addText(path['statType']);
              if (path['ratio']) {
                singleBreak();
                underLine('Ratio');
                addText(path['ratio']);
              };
              if (path['gained']) {
                singleBreak();
                underLine('Gain');
                removeSpace(path['gained']);
                singleBreak();
                underLine('Remove');
                removeSpace(path['removed']);
              };
              if (path['minByLvl']) {
                singleBreak();
                underLine('Min');
                addText('[' + path['minByLvl'][0] + ' to ' + path['minByLvl'][17]
                + ', based on lvl. Currently: ' + path['minByLvl'][champLevel] + ']');
              };
              if (path['duration']) {
                singleBreak();
                underLine('Duration');
                removeSpace(path['duration']);
              };
              doubleBreak();
            };

            if (champFile[ability]["duration"]) {
              addBold("Duration: ");
              removeSpace(champFile[ability]["duration"]);
              doubleBreak();
            };

            if (champFile[ability]["minDuration"]) {
              addBold("Duration: ")
              addText('Min: ');
              removeSpace(champFile[ability]["minDuration"]) 
              addText(', Max: ');
              removeSpace(champFile[ability]["maxDuration"]);
              doubleBreak();
            };

            if (champFile[ability]["maxDuration"] && !champFile[ability]["minDuration"]) {
              addBold("Max Duration: ");
              removeSpace(champFile[ability]["maxDuration"]);
              doubleBreak();
            };

            if (champFile[ability]["coolDown"]) {
              addGrey("Cooldown: ");
              removeSpace(champFile[ability]["coolDown"]);
            };
            if (champFile[ability]["minCoolDown"]) {
              addGrey("Cooldown: ");
              addText('Max: ' + champFile[ability]["maxCoolDown"] + ', Min: ' + champFile[ability]["minCoolDown"]);
            };
            if (champFile[ability]["maxCoolDown"] && !champFile[ability]["minCoolDown"]) {
              addGrey("Max Cooldown: ");
              addText(champFile[ability]["maxCoolDown"]);
            };
            if (champFile[ability]["coolDownByLvl"]) {
              addGrey("Cooldown: ");
              addText('[' + champFile[ability]["coolDownByLvl"][0] + " to " 
              + champFile[ability]["coolDownByLvl"][17] + "], based on lvl. ");
              underLine("Currently");
              addText(champFile[ability]["coolDownByLvl"][champLevel])
            };
            if (champFile[ability]["combatCoolDown"]) {
              addGrey("Combat Cooldown: ");
              removeSpace(champFile[ability]["combatCoolDown"])
            };
            if (champFile[ability]["staticCoolDown"]) {
              if (champFile[ability]["coolDown"]) {
                singleBreak();
              };
              addGrey("Static Cooldown: ");
              removeSpace(champFile[ability]["staticCoolDown"])
            };
            if (champFile[ability]["staticCoolDownByLvl"]) {
              addGrey("Static Cooldown: ");
              addText('[' + champFile[ability]["staticCoolDownByLvl"][0] + " to " 
              + champFile[ability]["staticCoolDownByLvl"][17] + "], based on lvl. ");
              underLine("Currently");
              addText(champFile[ability]["staticCoolDownByLvl"][champLevel])
            };
            if (champFile[ability]["autoCoolDown"]) {
              addGrey("Cooldown Number of Basic Attacks: ");
              addText(champFile[ability]["autoCoolDown"]);
            };
            if (champFile[ability]["coolDownRefund"]) {
              if (champFile[ability]["coolDownByLvl"] || champFile[ability]["coolDown"] 
              || champFile[ability]["staticCoolDownByLvl"] || champFile[ability]["staticCoolDown"]) {
                singleBreak();
              }
              underLine('Cooldown Refund')
              addText(champFile[ability]["coolDownRefund"]);
            };
            if (champFile[ability]["allCDRefund"]) {
              if (champFile[ability]["coolDown"]) {
                singleBreak();
              };
              underLine('All Abilities Cooldown Refund')
              addText(champFile[ability]["allCDRefund"]);
            };
            if (champFile[ability]["basicCDMaxRefundRatioPerStack"]) {
              singleBreak();
              underLine('Basic Abilities Max Cooldown Refund Ratio');
              addText(champFile[ability]["basicCDMaxRefundRatioPerStack"]+ ' per stack');
            };
            if (champFile[ability]["coolDownRefundByLvl"]) {
              singleBreak();
              underLine('Cooldown Refund')
              addText('[' + champFile[ability]["coolDownRefundByLvl"][0] + " to " 
              + champFile[ability]["coolDownRefundByLvl"][17] + "], based on lvl. ");
              underLine("Currently");
              addText(champFile[ability]["coolDownRefundByLvl"][champLevel])
            };
            if (champFile[ability]["minCoolDownRefund"]) {
              singleBreak();
              underLine('Cooldown Refund');
              addText('Min: ' + champFile[ability]["minCoolDownRefund"]
              + ', Max: ' + champFile[ability]["maxCoolDownRefund"]);
            };
            if (champFile[ability]["minCoolDownRefundByLvl"]) {
              singleBreak();
              underLine('Min Cooldown Refund')
              addText('[' + champFile[ability]["minCoolDownRefundByLvl"][0]
                + " to " + champFile[ability]["minCoolDownRefundByLvl"][17] + ", based on lvl. ");
              underLine("Currently");
              addText(champFile[ability]["minCoolDownRefundByLvl"][champLevel] + ']')
            };
            if (champFile[ability]["maxCoolDownRefundByLvl"]) {
              singleBreak();
              underLine('Max Cooldown Refund')
              addText('[' + champFile[ability]["maxCoolDownRefundByLvl"][0]
                + " to " + champFile[ability]["maxCoolDownRefundByLvl"][17] + ", based on lvl. ");
              underLine("Currently");
              addText(champFile[ability]["maxCoolDownRefundByLvl"][champLevel] + ']')
            };
            if (champFile[ability]["coolDownRefundRatio"]) {
              singleBreak();
              underLine('Cooldown Refund Ratio')
              removeSpace(champFile[ability]["coolDownRefundRatio"]);
            };
            if (champFile[ability]["coolDownRefundRatioByLvl"]) {
              singleBreak();
              underLine('Cooldown Refund Ratio')
              addText('[' + champFile[ability]["coolDownRefundRatioByLvl"][0]
                + " to " + champFile[ability]["coolDownRefundRatioByLvl"][17] + ", based on lvl. ");
              underLine("Currently");
              addText(champFile[ability]["coolDownRefundRatioByLvl"][champLevel] + ']')
            };
            if (champFile[ability]["maxCoolDownRefundRatio"]) {
              singleBreak();
              underLine('Max Cooldown Refund Ratio')
              addText(champFile[ability]["maxCoolDownRefundRatio"]);
            };
            if (champFile[ability]["recharge"]) {
              if (champFile[ability]["coolDown"] || champFile[ability]["staticCoolDown"]) {
                singleBreak();
              }
              addGrey("Recharge: ");
              removeSpace(champFile[ability]["recharge"]);
            };
            if (champFile[ability]["staticCoolDownFormula"]) {
              singleBreak();
              underLine('Cooldown Formula');
              addText(champFile[ability]["staticCoolDownFormula"]);
            };

            if (champFile[ability]["Rhaast"]) {
              var path = champFile[ability]["Rhaast"];
              var hr = document.createElement('hr');
              abilityDiv.appendChild(hr);
              var p = document.createElement('p');
              p.innerText = 'Rhaast';
              abilityDiv.appendChild(p);
              var hr2 = document.createElement('hr');
              abilityDiv.appendChild(hr2);
              if (path["spellVamp"]) {
                underLine('Spell Vamp Ratio');
                if (path["spellVamp"]["vampByLvl"]) {
                  addText('[' + path["spellVamp"]["vampByLvl"][0]
                  + " to " + path["spellVamp"]["vampByLvl"][17] + ", based on lvl. ");
                  underLine("Currently");
                  addText(path["spellVamp"]["vampByLvl"][champLevel] + ']')
                }
              };
              if (path["damage"]) {
                underLine(path["damage"]["type"] + ' Damage')
                if (path["damage"]["enemyMaxHPRatio"]){
                  addText('(' + path["damage"]["enemyMaxHPRatio"]);
                  colorHP(' Enemy Max HP');
                  addText('ratio)');
                };
                if (path["damage"]["enemyMaxHPRatioPer100BonusAD"]) {
                  addText(' (+' + path["damage"]["enemyMaxHPRatioPer100BonusAD"]);
                  colorHP(' Enemy Max HP');
                  addText('ratio per');
                  colorAD(' 100 Bonus AD')
                  addText(')');
                };
                if (path["damage"]["system"] === 'minMax') {
                  addText('Min: ');
                  if (path["damage"]["minADRatio"]) {
                    addText('(' + path["damage"]["minADRatio"]);
                    colorAD(' AD');
                    addText('ratio)');
                  };
                  if (path["damage"]["minEnemyMaxHPRatio"]) {
                    addText(' (+' + path["damage"]["minEnemyMaxHPRatio"]);
                    colorHP(' Enemy Max HP');
                    addText('ratio)');
                  };
                  if (path["damage"]["minEnemyMaxHPRatioPer100BonusAD"]) {
                    addText(' (+' + path["damage"]["minEnemyMaxHPRatioPer100BonusAD"]);
                    colorHP(' Enemy Max HP');
                    addText('ratio per');
                    colorAD(' 100 Bonus AD');
                    addText(')');
                  };
                  singleBreak();
                  addText('Max: ');
                  if (path["damage"]["maxADRatio"]) {
                    addText('(' + path["damage"]["maxADRatio"]);
                    colorAD(' AD');
                    addText('ratio)');
                  };
                  if (path["damage"]["maxEnemyMaxHPRatio"]) {
                    addText(' (+' + path["damage"]["maxEnemyMaxHPRatio"]);
                    colorHP(' Enemy Max HP');
                    addText('ratio)');
                  };
                  if (path["damage"]["maxEnemyMaxHPRatioPer100BonusAD"]) {
                    addText(' (+' + path["damage"]["maxEnemyMaxHPRatioPer100BonusAD"]);
                    colorHP(' Enemy Max HP');
                    addText('ratio per');
                    colorAD(' 100 Bonus AD');
                    addText(')');
                  };
                } 
              };
              if (path["heal"]) {
                singleBreak();
                underLine('Heal')
                if (path["heal"]["enemyMaxHPRatio"]){
                  addText('(' + path["heal"]["enemyMaxHPRatio"]);
                  colorHP(' Enemy Max HP');
                  addText('ratio)');
                };
                if (path["heal"]["enemyMaxHPRatioPer100BonusAD"]){
                  addText(' (+' + path["heal"]["enemyMaxHPRatioPer100BonusAD"]
                  + ' Enemy Max HP Ratio per 100 Bonus AD)');
                  colorHP(' Enemy Max HP');
                  addText('ratio per');
                  colorAD(' 100 Bonus AD');
                  addText(')');
                } 
              };
              if (path["interruptCC"]) {
                underLine('Crowd Control Duration')
                addText(path["interruptCC"]);
              }
            };

            if (champFile[ability]["Shadow"]) {
              var path = champFile[ability]["Shadow"];
              var hr = document.createElement('hr');
              abilityDiv.appendChild(hr);
              var p = document.createElement('p');
              p.innerText = 'Shadow';
              abilityDiv.appendChild(p);
              var hr2 = document.createElement('hr');
              abilityDiv.appendChild(hr2);
              if (path["damage"]) {
                underLine(path["damage"]["type"] + ' Damage');
                if (path["damage"]["dmgRatioByLvl"]) {
                  addText('(' + path["damage"]["dmgRatioByLvl"][0]+ " to " + path["damage"]["dmgRatioByLvl"][17]
                  + " ratio of damage dealt over 3 seconds, based on lvl. ");
                  underLine("Currently");
                  addText(path["damage"]["dmgRatioByLvl"][champLevel] + ')')
                }
              };
              if (path["coolDown"]) {
                addGrey('Cooldown: ');
                addText(path["coolDown"]);
              }
            };

          };

          if (ability !== 'passive' && document.getElementById(`${ability}Rank${side}`).value > 0 ) {
            /* BEGIN RANK 1-5 SECTION */
            if (champFile[ability]["text"]) {
              addText(champFile[ability]["text"])
              doubleBreak();
            };

            if (champFile[ability]["autoEmpower"]) {
              var damage = champFile[ability]["autoEmpower"]["damage"]
              if (!damage["durationAutos"] && !damage['autoCoolDown']) {
                addBold('Empowered Basic Attack: ')
              } else if (damage['autoCoolDown']) {
                addBold('Empower 1 in every ' +  damage["autoCoolDown"] + ' Basic Attacks: ')
              } else {
                addBold('Empower ' +  damage["durationAutos"] + ' Basic Attacks: ')
              };
              underLine(damage['type'] + " Damage");
              var totalDmgCount = 0;
              var IEDmgCount = 0;
              var minDmgCount = 0;
              var maxDmgCount = 0;
              if (damage["dmg"]) {
                totalDmgCount = damage["dmg"][rankIndex]
              };
              if (damage["dmgByLvl"]) {
                totalDmgCount += damage["dmgByLvl"][champLevel]
              };
              if (damage["dmgByERank"]) {
                totalDmgCount += damage["dmgByERank"][ERank]
              }
              if (damage["APRatio"]) {
                totalDmgCount += arrayCheck(damage["APRatio"]) * totalAP;
              };
              if (damage["ADRatio"]) {
                totalDmgCount += arrayCheck(damage["ADRatio"]) * totalAD;
              };
              if (damage["ADRatioByLvl"]) {
                totalDmgCount += damage["ADRatioByLvl"][champLevel] * totalAD;
              };
              if (damage["bonusADRatio"]) {
                totalDmgCount += arrayCheck(damage["bonusADRatio"]) * bonusAD;
              };
              if (damage["enemyMaxHPRatio"] && enemyStats.baseHP) {
                totalDmgCount += arrayCheck(damage["enemyMaxHPRatio"]) * enemyTotalHP;
              };
              if (damage["enemyMaxHPRatioPer100AD"] && enemyStats.baseHP) {
                totalDmgCount += arrayCheck(damage["enemyMaxHPRatioPer100AD"]) * enemyTotalHP * totalAD/100;
              };
              if (damage["enemyMaxHPRatioPer100BonusAD"] && enemyStats.baseHP) {
                totalDmgCount += arrayCheck(damage["enemyMaxHPRatioPer100BonusAD"]) * enemyTotalHP * bonusAD/100;
              };
              if (damage["enemyMaxHPRatioPer100AP"] && enemyStats.baseHP) {
                totalDmgCount += arrayCheck(damage["enemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
              };
              if (damage["enemyMaxHPRatioByLvl"] && enemyStats.baseHP) {
                totalDmgCount += damage["enemyMaxHPRatioByLvl"][champLevel] * enemyTotalHP;
              };
              if (damage["maxHPRatio"]) {
                totalDmgCount += arrayCheck(damage["maxHPRatio"]) * totalHP;
              };
              if ((damage["enemyCurrentHPRatio"] || damage["enemyCurrentHPByLvl"]) && enemyStats.baseHP) {
                addText(' when enemy is full HP: ');
              };
              if (damage["enemyCurrentHPRatio"] && enemyStats.baseHP) {
                totalDmgCount += arrayCheck(damage["enemyCurrentHPRatio"]) * enemyTotalHP;
              };
              if (damage["enemyCurrentHPRatioByLvl"] && enemyStats.baseHP) {
                totalDmgCount += damage["enemyCurrentHPRatioByLvl"][champLevel] * enemyTotalHP;
              };
              if (damage["armorRatio"]) {
                totalDmgCount += arrayCheck(damage["armorRatio"]) * totalArmor;
              };
              if (damage["bonusArmorRatio"]) {
                totalDmgCount += arrayCheck(damage["bonusArmorRatio"]) * bonusArmor;
              };
              if (damage['enemyResistRatio'] && enemyStats.baseHP) {
                totalDmgCount += damage['enemyResistRatio'] * (enemyTotalArmor + enemyTotalMR);
              }
              if (damage["ADRatioPerCritChance"]) {
                totalDmgCount += damage["ADRatioPerCritChance"] * totalCritChance * totalAD;
                if (damage["ADRatioPerCritChanceWithIE"]) {
                  IEDmgCount += damage["ADRatioPerCritChanceWithIE"] * totalCritChance * totalAD;
                }; 
              };
              
              if (totalDmgCount !== 0) {
                //addText(Math.round(totalDmgCount));
                addText(factorRes(damage['type'], totalDmgCount))
                if (IEDmgCount !== 0) {
                  //addText(' (' + Math.round(totalDmgCount + IEDmgCount) + 'with IE)');
                  addText(' (' + factorRes(damage['type'], totalDmgCount + IEDmgCount) + 'with IE)');
                }
              };

              var maxHPRatioCounter = 0;
              if (damage["enemyMaxHPRatio"] && !enemyStats.baseHP) {
                maxHPRatioCounter += arrayCheck(damage["enemyMaxHPRatio"]);
              };
              if (damage["enemyMaxHPRatioPer100AD"] && !enemyStats.baseHP) {
                maxHPRatioCounter += arrayCheck(damage["enemyMaxHPRatioPer100AD"]) * totalAD/100; 
              };
              if (damage["enemyMaxHPRatioPer100BonusAD"] && !enemyStats.baseHP) {
                maxHPRatioCounter += arrayCheck(damage["enemyMaxHPRatioPer100BonusAD"]) * bonusAD/100;
              };
              if (damage["enemyMaxHPRatioPer100AP"] && !enemyStats.baseHP) {
                maxHPRatioCounter += arrayCheck(damage["enemyMaxHPRatioPer100AP"]) * totalAP/100
              };
              if (damage["enemyMaxHPRatioByLvl"] && !enemyStats.baseHP) {
                maxHPRatioCounter += damage["enemyMaxHPRatioByLvl"][champLevel];
              };
              if (maxHPRatioCounter !== 0) {
                addText(' (+' + lengthCheck(maxHPRatioCounter));
                colorHP(' Enemy Max HP');
                addText('ratio)');
              };
              if (damage["enemyMaxHPRatioPerStack"] && !enemyStats.baseHP) {
                addText(" (+" + arrayCheck(damage["enemyMaxHPRatioPerStack"]));
                colorHP(' Enemy Max HP');
                addText('ratio per stack)');
              };
              if (damage["enemyMaxHPRatioPerStack"] && enemyStats.baseHP) {
                addText(" (+" + factorRes(damage['type'], arrayCheck(damage["enemyMaxHPRatioPerStack"]) * enemyTotalHP) 
                + " per stack)");
              };
              var currentHPCounter = 0;
              if (damage["enemyCurrentHPRatio"] && !enemyStats.baseHP) {
                currentHPCounter += arrayCheck(damage["enemyCurrentHPRatio"]);
                addText(" (+" + arrayCheck(damage["enemyCurrentHPRatio"]));
                colorHP(' Enemy Current HP');
                addText('ratio)');
              };
              if (damage["enemyCurrentHPRatioByLvl"] && !enemyStats.baseHP) {
                currentHPCounter += damage["enemyCurrentHPRatioByLvl"][champLevel];
              };
              if (currentHPCounter !== 0) {
                addText(" (+" + lengthCheck(currentHPCounter));
                colorHP(' Enemy Current HP');
                addText('ratio)');
              };
              var missHPCounter = 0;
              if (damage["enemyMissingHPRatio"]) {
                missHPCounter += arrayCheck(damage["enemyMissingHPRatio"]);
              };
              if (damage["enemyMissingHPRatioByLvl"]) {
                missHPCounter += damage["enemyMissingHPRatioByLvl"][champLevel];
              };
              if (damage["enemyMissingHPRatioPer100AP"]) {
                missHPCounter += arrayCheck(damage["enemyMissingHPRatioPer100AP"]) * totalAP/100;
              };
              if (missHPCounter !== 0) {
                addText(" (+" + lengthCheck(missHPCounter));
                colorHP(' Enemy Missing HP');
                addText('ratio)');
              };
              if (damage["dmgPer5Chimes"]) {
                addText(" (+" + damage["dmgPer5Chimes"] + ' per 5 chimes)');
              };
              if (damage["dmgPerStack"]) {
                addText(" (+" + damage["dmgPerStack"] + ' per stack)');
              };
              if (damage["armorIgnore"]) {
                singleBreak();
                addText('Ignores ' + damage["armorIgnore"]);
                colorArmor(' Enemy Armor');
                addText('ratio.');
              };
              if (damage["alwaysCrit"]) {
                addText('. Always critically strikes.');
              };
              if (damage["attackSpeedPenalty"]) {
                singleBreak();
                underLine('Bonus Attack Speed Penalty Ratio');
                addText(damage["attackSpeedPenalty"] );
              };
              if (damage["system"] === "min" ) {
                singleBreak();
                underLine('Min Damage')
                if (damage["minDmg"]) {
                  addText(arrayCheck(damage["minDmg"]));
                }
              };
              
              if (damage["system"] === "minMax" ) {
                underLine('Min')
                if (damage["minDmg"]) {
                  minDmgCount += arrayCheck(damage["minDmg"])
                };
                if (damage["minDmgByLvl"]) {
                  minDmgCount += damage["minDmgByLvl"][champLevel]
                };
                if (damage["minADRatio"]) {
                  minDmgCount += arrayCheck(damage["minADRatio"]) * totalAD;
                };
                if (damage["minBonusADRatio"]) {
                  minDmgCount += arrayCheck(damage["minBonusADRatio"]) * bonusAD;
                };
                if (damage["minAPRatio"]) {
                  minDmgCount += arrayCheck(damage["minAPRatio"]) * totalAP;
                };
                if (damage["minArmorRatio"]) {
                  minDmgCount += arrayCheck(damage["minArmorRatio"]) * totalArmor;
                };
                if (damage["minEnemyMaxHPRatio"] && enemyStats.baseHP) {
                  minDmgCount += arrayCheck(damage["minEnemyMaxHPRatio"]) * enemyTotalHP;
                };
                if (damage["minEnemyMaxHPRatioPer100AP"] && enemyStats.baseHP) {
                  minDmgCount += arrayCheck(damage["minEnemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                };
                if (minDmgCount !== 0) {
                  addText(factorRes(damage['type'], minDmgCount));
                };
                var minMaxHPRatioCounter = 0;
                if (damage["minEnemyMaxHPRatio"] && !enemyStats.baseHP) {
                  minMaxHPRatioCounter += arrayCheck(damage["minEnemyMaxHPRatio"]);
                };
                if (damage["minEnemyMaxHPRatioPer100AP"] && !enemyStats.baseHP) {
                  minMaxHPRatioCounter += arrayCheck(damage["minEnemyMaxHPRatioPer100AP"]) * totalAP/100;
                };
                if (minMaxHPRatioCounter !== 0) {
                  addText(' (+' + lengthCheck(minMaxHPRatioCounter));
                  colorHP(' Enemy Max HP');
                  addText('ratio)');
                }
                if (damage["minDmgPerStack"]) {
                  addText(' (+' + damage["minDmgPerStack"] + ' per stack)');
                };

                singleBreak();
                underLine('Max');

                if (damage["maxDmg"]) {
                  maxDmgCount += arrayCheck(damage["maxDmg"])
                };
                if (damage["maxDmgByLvl"]) {
                  maxDmgCount += damage["maxDmgByLvl"][champLevel]
                };
                if (damage["maxADRatio"]) {
                  maxDmgCount += arrayCheck(damage["maxADRatio"]) * totalAD;
                };
                if (damage["maxBonusADRatio"]) {
                  maxDmgCount += arrayCheck(damage["maxBonusADRatio"]) * bonusAD;
                };
                if (damage["maxAPRatio"]) {
                  maxDmgCount += arrayCheck(damage["maxAPRatio"]) * totalAP;
                };
                if (damage["maxArmorRatio"]) {
                  maxDmgCount += arrayCheck(damage["maxArmorRatio"]) * totalArmor;
                };
                if (damage["maxEnemyMaxHPRatio"] && enemyStats.baseHP) {
                  maxDmgCount += arrayCheck(damage["maxEnemyMaxHPRatio"]) * enemyTotalHP;
                };
                if (damage["maxEnemyMaxHPRatioPer100AP"] && enemyStats.baseHP) {
                  maxDmgCount += arrayCheck(damage["maxEnemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                };
                if (maxDmgCount !== 0) {
                  addText(factorRes(damage['type'], maxDmgCount));
                };
                var maxMaxHPRatioCounter = 0;
                if (damage["maxEnemyMaxHPRatio"] && !enemyStats.baseHP) {
                  maxMaxHPRatioCounter += arrayCheck(damage["maxEnemyMaxHPRatio"]);
                };
                if (damage["maxEnemyMaxHPRatioPer100AP"] && !enemyStats.baseHP) {
                  maxMaxHPRatioCounter += arrayCheck(damage["maxEnemyMaxHPRatioPer100AP"]) * totalAP/100;
                };
                if (maxMaxHPRatioCounter !== 0) {
                  addText(' (+' + lengthCheck(maxMaxHPRatioCounter));
                  colorHP(' Enemy Max HP');
                  addText('ratio)');
                }
                if (damage["maxDmgPerStack"]) {
                  addText(' (+' + damage["maxDmgPerStack"] + ' per stack)');
                };
              };
              if (damage["lvlRequired"]) {
                singleBreak();
                underLine('Level Required');
                addText(damage["lvlRequired"]);
              };
              if (damage["canCrit"]) {
                addText(', can crit.');
              };
              if (damage["critDmg"]) {
                singleBreak();
                if (totalDmgCount === 0 && minDmgCount === 0 && maxDmgCount === 0) {
                  underLine('Crit Damage Ratio');
                } else {
                  underLine('Crit Damage');
                };
                if (totalDmgCount === 0 && minDmgCount === 0 && maxDmgCount === 0) {
                  addText(damage["critDmg"]);
                };
                if (totalDmgCount !== 0) {
                  addText(factorRes(damage['type'], damage["critDmg"] * totalDmgCount));
                };
                if (minDmgCount !== 0) {
                  addText('Min: ' + factorRes(damage['type'], damage["critDmg"] * minDmgCount)
                  + ', Max: ' + factorRes(damage['type'], damage["critDmg"] * maxDmgCount));
                };
                if (damage["critDmgWithIE"]) {
                  if (totalDmgCount === 0 && minDmgCount === 0 && maxDmgCount === 0) {
                    addText(' (' + damage["critDmgWithIE"] + ' with Infinity Edge)');
                  };
                  if (totalDmgCount !== 0) {
                    addText(' (' + factorRes(damage['type'], damage["critDmgWithIE"] * totalDmgCount) 
                    + ' with Infinity Edge)');
                  };
                  if (minDmgCount !== 0) {
                    addText(' (Min: ' + factorRes(damage['type'], damage["critDmgWithIE"] * minDmgCount)
                    + ', Max: ' + factorRes(damage['type'], damage["critDmgWithIE"] * maxDmgCount) 
                    + ' with Infinity Edge)');
                  }
                }
              };
              if (damage["critADRatioWithIE"]) {
                singleBreak();
                underLine('Crit Bonus Dmg with Infinity Edge');
                addText(factorRes(damage['type'], damage["critADRatioWithIE"]) * totalAD);
              };
              if (damage["duration"]) {
                singleBreak();
                underLine('Duration')
                addText(arrayCheck(damage["duration"]))
              };
              if (damage["minDuration"]) {
                singleBreak();
                underLine('Min Duration')
                addText(damage["minDuration"] + ', ')
                underLine('Max Duration')
                addText(damage["maxDuration"])
              };
              
              if (damage["system"] === "2Part" || damage["system"] === "3Part") {
                (function() {
                  for (var i = 1; i < 4; i++) {
                    if (!damage[`part${i}`]) {
                      return;
                    }
                    var part = damage[`part${i}`];
                    underLine('Part '  + i);  
                    var dmgCount = 0;

                    if (part["type"]) {
                      addText(part['type'] + " Damage: ");
                    };
                    if (part["ADRatio"]) {
                      dmgCount += arrayCheck(part["ADRatio"]) * totalAD;
                    };
                    if (part["trueDmgRatioByLvl"]) {
                      addText(Math.round(factorRes('Physical', (1 - part["trueDmgRatioByLvl"][champLevel]) 
                      * dmgCount) + part["trueDmgRatioByLvl"][champLevel] * dmgCount))
                    } else {
                      addText(factorRes(part['type'] ? part['type'] : damage['type'], dmgCount));
                    }
                    if (part["trueDmgRatioByLvl"]) {
                      singleBreak();
                      addText('Physical: ' + factorRes('Physical', (1 - part["trueDmgRatioByLvl"][champLevel]) 
                      * dmgCount) + ', True: ' + Math.round(part["trueDmgRatioByLvl"][champLevel] * dmgCount));
                    };
                    if (damage[`part${i + 1}`]) {
                      doubleBreak();
                    }
                  }
                })();
              };
              if (damage["staticCoolDownByLvl"]) {
                singleBreak();
                addGrey("Static Cooldown: ");
                addText(damage["staticCoolDownByLvl"][champLevel])
              };
              doubleBreak();
            };

            if (champFile[ability]["damage"]) {
              var damage = champFile[ability]["damage"]
              var totalDmgCount = 0;
              var IEDmgCount = 0;
              var minDmgCount = 0;
              var maxDmgCount = 0;
              if (!damage["type"]) {
                addBold("Damage: ");
              }
              if (damage["type"]) {
                addBold(damage['type'] + " Damage: ")
              };                                  
              if (damage["dmg"]) {
                totalDmgCount += arrayCheck(damage["dmg"]);
              };
              if (damage["dmgByLvl"]) {
                totalDmgCount += damage["dmgByLvl"][champLevel];
              };
              if (damage["totalDmgRatio"]) {
                underLine('Total Damage Ratio');
                addText(arrayCheck(damage["totalDmgRatio"]));
              };
              if (damage["dmgByWRank"]) {
                totalDmgCount += damage["dmgByWRank"][WRank];
              };
              if (damage["APRatio"]) {
                totalDmgCount += arrayCheck(damage["APRatio"]) * totalAP;
              };
              if (damage["APRatioByLvl"]) {
                totalDmgCount += damage["APRatioByLvl"][champLevel] * totalAP;
              };
              if (damage["ADRatio"]) {
                totalDmgCount += arrayCheck(damage["ADRatio"]) * totalAD;
              };
              if (damage["bonusADRatio"]) {
                totalDmgCount += arrayCheck(damage["bonusADRatio"]) * bonusAD;
              };
              if (damage["bonusManaRatio"]) {
                totalDmgCount += arrayCheck(damage["bonusManaRatio"]) * bonusMana;
              };
              if (damage["enemyMaxHPRatio"] && enemyStats.baseHP) {
                totalDmgCount += arrayCheck(damage["enemyMaxHPRatio"]) * enemyTotalHP;
              };
              if (damage["enemyMaxHPRatioPer100AD"] && enemyStats.baseHP) {
                totalDmgCount += arrayCheck(damage["enemyMaxHPRatioPer100AD"]) * enemyTotalHP * totalAD/100;
              };
              if (damage["enemyMaxHPRatioPer100BonusAD"] && enemyStats.baseHP) {
                totalDmgCount += arrayCheck(damage["enemyMaxHPRatioPer100BonusAD"]) * enemyTotalHP * bonusAD/100;
              };
              if (damage["enemyMaxHPRatioPer100AP"] && enemyStats.baseHP) {
                totalDmgCount += arrayCheck(damage["enemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
              };
              if (damage["enemyMaxHPRatioByLvl"] && enemyStats.baseHP) {
                totalDmgCount += damage["enemyMaxHPRatioByLvl"][champLevel] * enemyTotalHP;
              };
              if (damage["maxHPRatio"]) {
                totalDmgCount += arrayCheck(damage["maxHPRatio"]) * totalHP;
              };
              if (damage["bonusHPRatio"]) {
                totalDmgCount += arrayCheck(damage["bonusHPRatio"]) * bonusHP;
              };
              if ((damage["enemyCurrentHPRatio"] || damage["enemyCurrentHPRatioPer100AD"] 
              || damage["enemyCurrentHPRatioPer100AP"]) && enemyStats.baseHP) {
                addText(' when enemy is full HP: ');
              };
              if (damage["enemyCurrentHPRatio"] && enemyStats.baseHP) {
                totalDmgCount += arrayCheck(damage["enemyCurrentHPRatio"]) * enemyTotalHP;
              };
              if (damage["enemyCurrentHPRatioPer100AD"] && enemyStats.baseHP) {
                totalDmgCount += arrayCheck(damage["enemyCurrentHPRatioPer100AD"]) * enemyTotalHP * totalAD/100;
              };
              if (damage["enemyCurrentHPRatioPer100AP"] && enemyStats.baseHP) {
                totalDmgCount += arrayCheck(damage["enemyCurrentHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
              }; 
              if (damage["armorRatio"]) {
                totalDmgCount += arrayCheck(damage["armorRatio"]) * totalArmor;
              };
              if (damage["bonusArmorRatio"]) {
                totalDmgCount += arrayCheck(damage["bonusArmorRatio"]) * bonusArmor;
              };
              if (damage["bonusMRRatio"]) {
                totalDmgCount += arrayCheck(damage["bonusMRRatio"]) * bonusMR;
              };
              if (damage["dmgPerLethality"]) {
                totalDmgCount += arrayCheck(damage["dmgPerLethality"]) * totalLethality;
              };
              
              if (totalDmgCount !== 0) {
                if (damage["bonusDmgRatioPerCritChance"]) {
                  totalDmgCount *= (1 + damage["bonusDmgRatioPerCritChance"] * totalCritChance);
                };
                if (damage["dmgRatioByRRank"]) {
                    totalDmgCount *= damage["dmgRatioByRRank"][RRank];
                };
                addText(factorRes(damage['type'], totalDmgCount));
                if (IEDmgCount !== 0) {
                  addText(' (' + factorRes(damage['type'], totalDmgCount + IEDmgCount) + 'with IE)');
                };
                if (damage["executeDmgRatio"]) {
                  singleBreak();
                  underLine('Execute HP Threshold');
                  addText(Math.round(damage["executeDmgRatio"] * Math.round(totalDmgCount)));
                }
              };
              var maxHPRatioCounter = 0;
              if (damage["enemyMaxHPRatio"] && !enemyStats.baseHP) {
                maxHPRatioCounter += arrayCheck(damage["enemyMaxHPRatio"]);
              };
              if (damage["enemyMaxHPRatioPer100AD"] && !enemyStats.baseHP) {
                maxHPRatioCounter += arrayCheck(damage["enemyMaxHPRatioPer100AD"]) * totalAD/100; 
              };
              if (damage["enemyMaxHPRatioPer100BonusAD"] && !enemyStats.baseHP) {
                maxHPRatioCounter += arrayCheck(damage["enemyMaxHPRatioPer100BonusAD"]) * bonusAD/100;
              };
              if (damage["enemyMaxHPRatioPer100AP"] && !enemyStats.baseHP) {
                maxHPRatioCounter += arrayCheck(damage["enemyMaxHPRatioPer100AP"]) * totalAP/100;
              };
              if (damage["enemyMaxHPRatioByLvl"] && !enemyStats.baseHP) {
                maxHPRatioCounter += damage["enemyMaxHPRatioByLvl"][champLevel];
              };
              if (maxHPRatioCounter !== 0) {
                addText(' (+' + lengthCheck(maxHPRatioCounter));
                colorHP(' Enemy Max HP');
                addText('ratio)');
              }
              var missingHPRatioCounter = 0;
              if (damage["enemyMissingHPRatio"]) {
                missingHPRatioCounter += arrayCheck(damage["enemyMissingHPRatio"]);
              };
              if (damage["enemyMissingHPRatioPer100AP"]) {
                missingHPRatioCounter += arrayCheck(damage["enemyMissingHPRatioPer100AP"]) * totalAP/100;
              };
              if (missingHPRatioCounter !== 0) {
                addText(" (+" + lengthCheck(missingHPRatioCounter));
                colorHP(' Enemy Missing HP');
                addText('ratio)');
              };
              if (damage["enemyMissingHPRatioPerStack"]) {
                addText(' (+' + arrayCheck(damage["enemyMissingHPRatioPerStack"]));
                colorHP(' Enemy Missing HP');
                addText('ratio per stack)');
              };
              var currentHPCounter = 0;
              if (damage["enemyCurrentHPRatio"] && !enemyStats.baseHP) {
                currentHPCounter += arrayCheck(damage["enemyCurrentHPRatio"]);
              };
              if (damage["enemyCurrentHPRatioPer100AD"] && !enemyStats.baseHP) {
                currentHPCounter += arrayCheck(damage["enemyCurrentHPRatioPer100AD"]) * totalAD/100;
              };
              if (damage["enemyCurrentHPRatioPer100AP"] && !enemyStats.baseHP) {
                currentHPCounter += arrayCheck(damage["enemyCurrentHPRatioPer100AP"]) * totalAP/100;
              };
              if (currentHPCounter !== 0) {
                addText(" (+" + lengthCheck(currentHPCounter));
                colorHP(' Enemy Current HP');
                addText('ratio)');
              }; 
              if (damage["enemyCurrentHPRatioPerStack"]) {
                addText(' (+' + arrayCheck(damage["enemyCurrentHPRatioPerStack"]));
                colorHP(' Enemy Current HP');
                addText('ratio per stack)');
              };
              if (damage["bonusMoveSpeedRatioByLvl"]) {
                addText(' (+' + damage["bonusMoveSpeedRatioByLvl"][champLevel] + " Bonus Move Speed Ratio) ");
              };
              if (damage["asPerBonusAS"]) {
                singleBreak();
                underLine('Wolf Attack Speed');
                addText(damage["asPerBonusAS"] * bonusAS);
              };

              if (damage["system"] === "min" ) {
                singleBreak();
                underLine('Min Damage')
                var minCount = 0
                if (damage["minDmg"]) {
                  minCount += arrayCheck(damage["minDmg"]);
                };
                if (damage["minDmgAPRatio"]) {
                  minCount += arrayCheck(damage["minDmgAPRatio"]) * totalAP;
                };
                addText(factorRes(damage['type'], minCount));
              };

              if (damage["system"] === "minMax" ) {
                underLine('Min')
                if (damage["minDmg"]) {
                  minDmgCount += arrayCheck(damage["minDmg"]);
                };
                if (damage["minDmgByLvl"]) {
                  minDmgCount += damage["minDmgByLvl"][champLevel];
                };
                if (damage["minADRatio"]) {
                  minDmgCount += arrayCheck(damage["minADRatio"]) * totalAD;
                };
                if (damage["minBonusADRatio"]) {
                  minDmgCount += arrayCheck(damage["minBonusADRatio"]) * bonusAD;
                };
                if (damage["minAPRatio"]) {
                  minDmgCount += arrayCheck(damage["minAPRatio"]) * totalAP;
                };
                if (damage["minMaxManaRatio"]) {
                  minDmgCount += arrayCheck(damage["minMaxManaRatio"]) * totalMana;
                };
                if (damage["minBonusHPRatio"]) {
                  minDmgCount += arrayCheck(damage["minBonusHPRatio"]) * bonusHP;
                }
                if (damage["minMaxHPRatio"]) {
                  minDmgCount += arrayCheck(damage["minMaxHPRatio"]) * totalHP;
                };
                if (damage["minEnemyMaxHPRatio"] && enemyStats.baseHP) {
                  minDmgCount += arrayCheck(damage["minEnemyMaxHPRatio"]) * enemyTotalHP;
                };
                if (damage["minEnemyMaxHPRatioPer100AP"] && enemyStats.baseHP) {
                  minDmgCount += arrayCheck(damage["minEnemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                };
                if (damage["minEnemyMaxHPRatioPer100AD"] && enemyStats.baseHP) {
                  minDmgCount += arrayCheck(damage["minEnemyMaxHPRatioPer100AD"]) * enemyTotalHP * totalAD/100;
                };
                if (damage["minEnemyMaxHPRatioPer100BonusAD"] && enemyStats.baseHP) {
                  minDmgCount += arrayCheck(damage["minEnemyMaxHPRatioPer100BonusAD"]) * enemyTotalHP * bonusAD/100
                };
                if (damage["minEnemyBonusHPRatio"] && enemyStats.baseHP) {
                  minDmgCount += arrayCheck(damage["minEnemyBonusHPRatio"]) * enemyTotalHP;
                };
                if ((damage["minEnemyCurrentHPRatio"] || damage["minEnemyCurrentHPRatioPer100AP"]) && enemyStats.baseHP) {
                  addText(' when enemy is full HP: ');
                }
                if (damage["minEnemyCurrentHPRatio"] && enemyStats.baseHP) {
                  minDmgCount += arrayCheck(damage["minEnemyCurrentHPRatio"]) * enemyTotalHP;
                };
                if (damage["minEnemyCurrentHPRatioPer100AP"] && enemyStats.baseHP) {
                  minDmgCount += arrayCheck(damage["minEnemyCurrentHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                };
                if (minDmgCount !== 0) {
                  addText(factorRes(damage['type'], minDmgCount));
                };
                var minMaxHPRatioCounter = 0;
                if (damage["minEnemyMaxHPRatio"] && !enemyStats.baseHP) {
                  minMaxHPRatioCounter += arrayCheck(damage["minEnemyMaxHPRatio"]);
                };
                if (damage["minEnemyMaxHPRatioPer100AD"] && !enemyStats.baseHP) {
                  minMaxHPRatioCounter += arrayCheck(damage["minEnemyMaxHPRatioPer100AD"]) * totalAD/100;
                };
                if (damage["minEnemyMaxHPRatioPer100BonusAD"] && !enemyStats.baseHP) {
                  minMaxHPRatioCounter += arrayCheck(damage["minEnemyMaxHPRatioPer100BonusAD"]) * bonusAD/100;
                }
                if (damage["minEnemyMaxHPRatioPer100AP"] && !enemyStats.baseHP) {
                  minMaxHPRatioCounter += arrayCheck(damage["minEnemyMaxHPRatioPer100AP"]) * totalAP/100;
                }
                if (damage["minEnemyMaxHPRatioByLvl"] && !enemyStats.baseHP) {
                  minMaxHPRatioCounter += damage["minEnemyMaxHPRatioByLvl"][champLevel];
                };
                if (minMaxHPRatioCounter !== 0) {
                  addText(' (+' + lengthCheck(minMaxHPRatioCounter));
                  colorHP(' Enemy Max HP');
                  addText('ratio)');
                };
                if (damage["minEnemyBonusHPRatio"] && !enemyStats.baseHP) {
                  addText(' (+'+ arrayCheck(damage["minEnemyBonusHPRatio"]));
                  colorHP(' Enemy Bonus HP');
                  addText('ratio)');
                };
                var minCurrentHPCounter = 0;
                if (damage["minEnemyCurrentHPRatio"] && !enemyStats.baseHP) {
                  minCurrentHPCounter += arrayCheck(damage["minEnemyCurrentHPRatio"]);
                };
                if (damage["minEnemyCurrentHPRatioPer100AP"] && !enemyStats.baseHP) {
                  minCurrentHPCounter += arrayCheck(damage["minEnemyCurrentHPRatioPer100AP"]) * totalAP/100;
                };
                if (minCurrentHPCounter !== 0) {
                  addText(' (+' + lengthCheck(minCurrentHPCounter));
                  colorHP(' Enemy Current HP');
                  addText('ratio)');
                };
                if (damage["minEnemyMissingHPRatio"]) {
                  addText(" (+" + arrayCheck(damage["minEnemyMissingHPRatio"]));
                  colorHP(' Enemy Missing HP');
                  addText('ratio)');
                };  
                singleBreak();

                if (damage["medDmg"]) {
                  var medDmgCounter = 0;
                  underLine('Med')
                  medDmgCounter += arrayCheck(damage["medDmg"]);
                  if (damage["medAPRatio"]) {
                    medDmgCounter += arrayCheck(damage["medAPRatio"]) * totalAP;
                  };
                  if (damage["medBonusADRatio"]) {
                    medDmgCounter += arrayCheck(damage["medBonusADRatio"]) * bonusAD;
                  };
                  addText(factorRes(damage['type'], medDmgCounter));
                  singleBreak();
                };

                underLine('Max');

                if (damage["maxDmg"]) {
                  maxDmgCount += arrayCheck(damage["maxDmg"]);
                };
                if (damage["maxDmgByLvl"]) {
                  maxDmgCount += damage["maxDmgByLvl"][champLevel];
                };
                if (damage["maxAPRatio"]) {
                  maxDmgCount += arrayCheck(damage["maxAPRatio"]) * totalAP;
                };
                if (damage["maxADRatio"]) {
                  maxDmgCount += arrayCheck(damage["maxADRatio"]) * totalAD;
                };
                if (damage["maxBonusADRatio"]) {
                  maxDmgCount += arrayCheck(damage["maxBonusADRatio"]) * bonusAD;
                };
                if (damage["maxMaxManaRatio"]) {
                  maxDmgCount += arrayCheck(damage["maxMaxManaRatio"]) * totalMana;
                };
                if (damage["maxBonusHPRatio"]) {
                  maxDmgCount += arrayCheck(damage["maxBonusHPRatio"]) * bonusHP;
                };
                if (damage["maxMaxHPRatio"]) {
                  maxDmgCount += arrayCheck(damage["maxMaxHPRatio"]) * totalHP;
                };
                if (damage["maxMaxHPRatioPer100BonusAD"]) {
                  maxDmgCount += arrayCheck(damage["maxMaxHPRatioPer100BonusAD"]) * bonusAD/100;
                };
                if (damage["maxEnemyMaxHPRatio"] && enemyStats.baseHP) {
                  maxDmgCount += arrayCheck(damage["maxEnemyMaxHPRatio"]) * enemyTotalHP;
                };
                if (damage["maxEnemyMaxHPRatioPer100AP"] && enemyStats.baseHP) {
                  maxDmgCount += arrayCheck(damage["maxEnemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                };
                if (damage["maxEnemyMaxHPRatioPer100AD"] && enemyStats.baseHP) {
                  maxDmgCount += arrayCheck(damage["maxEnemyMaxHPRatioPer100AD"]) * enemyTotalHP * totalAD/100;
                };
                if (damage["maxEnemyMaxHPRatioPer100BonusAD"] && enemyStats.baseHP) {
                  maxDmgCount += arrayCheck(damage["maxEnemyMaxHPRatioPer100BonusAD"]) * enemyTotalHP * bonusAD / 100;
                };
                if (damage["maxEnemyBonusHPRatio"] && enemyStats.baseHP) {
                  maxDmgCount += arrayCheck(damage["maxEnemyBonusHPRatio"]) * enemyBonusHP;
                };
                if ((damage["maxEnemyCurrentHPRatio"] || damage["maxEnemyCurrentHPRatioPer100AP"]) && enemyStats.baseHP) {
                  addText(' when enemy is full HP: ');
                }
                if (damage["maxEnemyCurrentHPRatio"] && enemyStats.baseHP) {
                  maxDmgCount += arrayCheck(damage["maxEnemyCurrentHPRatio"]) * enemyTotalHP;
                };
                if (damage["maxEnemyCurrentHPRatioPer100AP"] && enemyStats.baseHP) {
                  maxDmgCount += arrayCheck(damage["maxEnemyCurrentHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                };
                if (maxDmgCount !== 0) {
                  addText(factorRes(damage['type'], maxDmgCount));
                };
                var maxMaxHPRatioCounter = 0;
                if (damage["maxEnemyMaxHPRatio"] && !enemyStats.baseHP) {
                  maxMaxHPRatioCounter += arrayCheck(damage["maxEnemyMaxHPRatio"]);
                };
                if (damage["maxEnemyMaxHPRatioPer100AD"] && !enemyStats.baseHP) {
                  maxMaxHPRatioCounter += arrayCheck(damage["maxEnemyMaxHPRatioPer100AD"]) * totalAD/100; 
                }
                if (damage["maxEnemyMaxHPRatioPer100BonusAD"] && !enemyStats.baseHP) {
                  maxMaxHPRatioCounter += arrayCheck(damage["maxEnemyMaxHPRatioPer100BonusAD"]) * bonusAD/100;
                };
                if (damage["maxEnemyMaxHPRatioPer100AP"] && !enemyStats.baseHP) {
                  maxMaxHPRatioCounter += arrayCheck(damage["maxEnemyMaxHPRatioPer100AP"]) * totalAP/100;
                };
                if (damage["maxEnemyMaxHPRatioByLvl"] && !enemyStats.baseHP) {
                  maxMaxHPRatioCounter += damage["maxEnemyMaxHPRatioByLvl"][champLevel];
                }
                if (maxMaxHPRatioCounter !== 0) {
                  addText(' (+' + lengthCheck(maxMaxHPRatioCounter));
                  colorHP(' Enemy Max HP');
                  addText('ratio)');
                }
                if (damage["maxEnemyBonusHPRatio"] && !enemyStats.baseHP) {
                  addText(' (+' + arrayCheck(damage["maxEnemyBonusHPRatio"]));
                  colorHP(' Enemy Bonus HP');
                  addText('ratio)');
                };
                var maxCurrentHPCounter = 0;
                if (damage["maxEnemyCurrentHPRatio"] && !enemyStats.baseHP) {
                  maxCurrentHPCounter += arrayCheck(damage["maxEnemyCurrentHPRatio"]);
                };
                if (damage["maxEnemyCurrentHPRatioPer100AP"] && !enemyStats.baseHP) {
                  maxCurrentHPCounter += arrayCheck(damage["maxEnemyCurrentHPRatioPer100AP"]) * totalAP/100;
                };
                if (maxCurrentHPCounter !== 0) {
                  addText(' (+' + lengthCheck(maxCurrentHPCounter));
                  colorHP(' Enemy Current HP');
                  addText('ratio)');
                };
                if (damage["maxEnemyMissingHPRatio"]) {
                  addText(" (+" + arrayCheck(damage["maxEnemyMissingHPRatio"]));
                  colorHP(' Enemy Missing HP');
                  addText('ratio)');
                };
              };

              var evolveDmgCounter = 0;
              if (damage["evolveMaxDmg"]) {
                singleBreak();
                underLine('Evolve Max Damage');
                evolveDmgCounter += arrayCheck(damage["evolveMaxDmg"]);
              }
              if (damage["evolveMaxBonusADRatio"]) {
                evolveDmgCounter += arrayCheck(damage["evolveMaxBonusADRatio"]) * bonusAD;
              };
              if (damage["evolveMaxAPRatio"]) {
                evolveDmgCounter += arrayCheck(damage["evolveMaxAPRatio"]) * totalAP;
              };
              if (evolveDmgCounter !== 0) {
                addText(factorRes(damage['type'], evolveDmgCounter));
              };

              if (damage["system"] === 'stacking') {
                var stackDmgCounter = 0;
                singleBreak();
                underLine('Damage per Stack');
                if (damage["dmgPerStack"]) {
                  stackDmgCounter += arrayCheck(damage["dmgPerStack"]);
                };
                if (damage["ADRatioPerStack"]) {
                  stackDmgCounter += arrayCheck(damage["ADRatioPerStack"]) * totalAD;
                };
                addText(factorRes(damage['type'], stackDmgCounter));
              };

              if (damage["4thShotDmgRatio"]) {
                singleBreak();
                underLine('4th Shot Damage');
                addText('Min: ' + factorRes(damage['type'], damage["4thShotDmgRatio"] * minDmgCount) 
                + ' (' + factorRes(damage['type'], damage["4thShotDmgRatioWithIE"] * minDmgCount) 
                + ' with Infinity Edge)');
                singleBreak();
                addText('Max: ' + factorRes(damage['type'], damage["4thShotDmgRatio"] * maxDmgCount) 
                + ' (' + factorRes(damage['type'], damage["4thShotDmgRatioWithIE"] * maxDmgCount) 
                + ' with Infinity Edge)');
              };

              if (damage["multiHitDmgRatio"]) {
                singleBreak();
                addText('Additional hits deal ' + arrayCheck(damage["multiHitDmgRatio"]) + ' damage ratio.');
              };

              if (damage["minMinDmg"]) {
                singleBreak();
                underLine('Minimum Damage');
                addText(factorRes(damage['type'], damage["minMinDmg"]));
              };

              if (damage["canCrit"]) {
                addText(', can crit.');
              };
              
              if (damage["critDmg"]) {
                singleBreak();
                if (totalDmgCount === 0 && minDmgCount === 0 && maxDmgCount === 0) {
                  underLine('Crit Damage Ratio');
                } else {
                  underLine('Crit Damage');
                };
                if (totalDmgCount === 0 && minDmgCount === 0 && maxDmgCount === 0) {
                  addText(arrayCheck(damage["critDmg"]));
                };
                if (totalDmgCount !== 0) {
                  addText(factorRes(damage['type'], damage["critDmg"] * totalDmgCount));
                };
                if (minDmgCount !== 0) {
                  addText('Min: ' + factorRes(damage['type'], damage["critDmg"] * minDmgCount)
                  + ', Max: ' + factorRes(damage['type'], damage["critDmg"] * maxDmgCount));
                };
                if (damage["critDmgWithIE"]) {
                  if (totalDmgCount === 0 && minDmgCount === 0 && maxDmgCount === 0) {
                    addText(' (' + damage["critDmgWithIE"] + ' with Infinity Edge)');
                  };
                  if (totalDmgCount !== 0) {
                    addText(' (' + factorRes(damage['type'], damage["critDmgWithIE"] * totalDmgCount) 
                    + ' with Infinity Edge)');
                  };
                  if (minDmgCount !== 0) {
                    addText(' (Min: ' + factorRes(damage['type'], damage["critDmgWithIE"] * minDmgCount) + ', Max: ' 
                    + factorRes(damage['type'], damage["critDmgWithIE"] * maxDmgCount) + ' with Infinity Edge)');
                  };
                }
              };
              if (damage["critADRatio"]) {
                singleBreak();
                underLine('Crit Bonus Damage');
                addText(factorRes(damage['type'], damage["critADRatio"] * totalAD));
                if (damage["critADRatioWithIE"]) {
                  addText(' (' + factorRes(damage['type'], damage["critADRatioWithIE"] * totalAD) 
                  + ' with Infinity Edge)');
                }
              };

              if (damage["minCritADRatio"]) {
                singleBreak();
                underLine('Crit Bonus Damage');
                addText('Min: ' + factorRes(damage['type'], damage["minCritADRatio"] * totalAD));
                if (damage["minCritADRatioWithIE"]) {
                  addText(' (' + factorRes(damage['type'], damage["minCritADRatioWithIE"] * totalAD) 
                  + ' with Infinity Edge)');
                };
                singleBreak();
                addText('Max: ' + factorRes(damage['type'], damage["maxCritADRatio"] * totalAD));
                if (damage["maxCritADRatioWithIE"]) {
                  addText(' (' + factorRes(damage['type'], damage["maxCritADRatioWithIE"] * totalAD) 
                  + ' with Infinity Edge)');
                };
              };

              if (damage["empowerBonus"]) {
                var empDmgCounter = 0;
                var minEmpDmgCounter = 0;
                var maxEmpDmgCounter = 0;
                var empPath = damage["empowerBonus"];
                singleBreak();
                underLine('Empower Bonus Damage');
                if (empPath["dmgByLvl"]) {
                  empDmgCounter += empPath["dmgByLvl"][champLevel];
                };
                if (empPath["bonusADRatio"]) {
                  empDmgCounter += arrayCheck(empPath["bonusADRatio"]) * bonusAD;
                };
                if (empDmgCounter !== 0) {
                  addText(factorRes(damage['type'], empDmgCounter));
                };
                if (empPath["system"] === 'minMax') {
                  if (empPath["minDmgByLvl"]) {
                    minEmpDmgCounter += empPath["minDmgByLvl"][champLevel];
                  };
                  if (empPath["minAPRatio"]) {
                    minEmpDmgCounter += arrayCheck(empPath["minAPRatio"]) * totalAP;
                  };
                  addText('Min: ' + factorRes(damage['type'], minEmpDmgCounter));
                  singleBreak();
                  if (empPath["maxDmgByLvl"]) {
                    maxEmpDmgCounter += empPath["maxDmgByLvl"][champLevel];
                  };
                  if (empPath["maxAPRatio"]) {
                    maxEmpDmgCounter += arrayCheck(empPath["maxAPRatio"]) * totalAP;
                  };
                  addText('Max: ' + factorRes(damage['type'], maxEmpDmgCounter));
                }
              };

              if (damage["system"] === "2Part" || damage["system"] === "3Part") {
                (function() {
                  for (var i = 1; i < 4; i++) {
                    if (!damage[`part${i}`]) {
                      return;
                    }
                    var part = damage[`part${i}`];
                    underLine('Part '  + i);  

                  if (part["type"]) {
                    if (part["postMitigation"] === 'Magic') {
                      addText(part["type"] + ' Damage (part 1 damage, post-mitigation): ');
                    } else {
                      addText(part['type'] + " Damage: ")
                    };
                  };
                  var partDmgCount = 0;
                  var minPartDmgCount = 0;
                  var maxPartDmgCount = 0;
                  if (part["dmg"]) {
                    partDmgCount += arrayCheck(part["dmg"]);
                  };
                  if (part["dmgByLvl"]) {
                    partDmgCount += arrayCheck(part["dmgByLvl"]);
                  };
                  if (part["APRatio"]) {
                    partDmgCount += arrayCheck(part["APRatio"]) * totalAP;
                  };
                  if (part["ADRatio"]) {
                    partDmgCount += arrayCheck(part["ADRatio"]) * totalAD;
                  };
                  if (part["bonusADRatio"]) {
                    partDmgCount += arrayCheck(part["bonusADRatio"]) * bonusAD;
                  };
                  if (part["enemyMaxHPRatio"] && enemyStats.baseHP) {
                    partDmgCount += arrayCheck(part["enemyMaxHPRatio"]) * enemyTotalHP;
                  };
                  if (part["enemyCurrentHPRatio"] && enemyStats.baseHP) {
                    addText(' when enemy is full HP: ');
                    partDmgCount += arrayCheck(part["enemyCurrentHPRatio"]) * enemyTotalHP;
                  };
                  if (part["maxHPRatio"]) {
                    partDmgCount += arrayCheck(part["maxHPRatio"]) * totalHP;
                  };
                  if (partDmgCount !== 0) {
                    addText(factorRes(part['type'] ? part['type'] : damage['type'], partDmgCount));
                  };
                  if (part["enemyMaxHPRatio"] && !enemyStats.baseHP) {
                    addText(" (+" + arrayCheck(part["enemyMaxHPRatio"]));
                    colorHP(' Enemy Max HP');
                    addText('ratio)');
                  };
                  if (part["enemyCurrentHPRatio"] && !enemyStats.baseHP) {
                    addText(" (+" + arrayCheck(part["enemyCurrentHPRatio"]));
                    colorHP(' Enemy Current HP');
                    addText('ratio)');
                  };
                  if (part["part1RatioFormula"]) {
                    var part1Dmg = damage["part1"]["dmg"][rankIndex] + damage["part1"]["APRatio"] * totalAP;
                    addText(factorRes(damage['type'], part1Dmg * (1 + ((0.00075 * totalAP) - 0.15))**2));
                  };

                  if (part["system"] === "minMax" ) {
                    addText('Min: ');
                    if (part["minDmg"]) {
                      minPartDmgCount += arrayCheck(part["minDmg"]);
                    };
                    if (part["minAPRatio"]) {
                      minPartDmgCount += arrayCheck(part["minAPRatio"]) * totalAP;
                    };
                    if (part["minADRatio"]) {
                      minPartDmgCount += arrayCheck(part["minADRatio"]) * totalAD;
                    };
                    if (part["minBonusADRatio"]) {
                      minPartDmgCount += arrayCheck(part["minBonusADRatio"]) * bonusAD;
                    };
                    if (part["minBonusADPerAttackSpeedRatio"]) {
                      minPartDmgCount += part["minBonusADPerAttackSpeedRatio"] * totalAS * bonusAD;
                    };
                    if (part["minEnemyMaxHPRatio"] && enemyStats.baseHP) {
                      minPartDmgCount += arrayCheck(part["minEnemyMaxHPRatio"]) * enemyTotalHP;
                    };
                    if (part["minEnemyMaxHPRatioPer100AP"]) {
                      minPartDmgCount += arrayCheck(part["minEnemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                    };
                    if (part["bonusDmgRatioPerCritChance"]) {
                      minPartDmgCount *= (1 + part["bonusDmgRatioPerCritChance"] * totalCritChance);
                    };
                    addText(factorRes(part['type'] ? part['type'] : damage['type'], minPartDmgCount));
                    if (part["minEnemyMissingHPRatioByLvl"]) {
                      addText(' (+' + part["minEnemyMissingHPRatioByLvl"][champLevel]);
                      colorHP(' Enemy Missing HP');
                      addText('ratio)');
                    };
                    singleBreak();
                    addText('Max: ');
                    if (part["maxDmg"]) {
                      maxPartDmgCount += arrayCheck(part["maxDmg"]);
                    };
                    if (part["maxAPRatio"]) {
                      maxPartDmgCount += arrayCheck(part["maxAPRatio"]) * totalAP;
                    };
                    if (part["maxADRatio"]) {
                      maxPartDmgCount += arrayCheck(part["maxADRatio"]) * totalAD;
                    };
                    if (part["maxBonusADRatio"]) {
                      maxPartDmgCount += arrayCheck(part["maxBonusADRatio"]) * bonusAD;
                    };
                    if (part["maxBonusADPerAttackSpeedRatio"]) {
                      maxPartDmgCount += part["maxBonusADPerAttackSpeedRatio"] * totalAS * bonusAD;
                    };
                    if (part["maxEnemyMaxHPRatio"] && enemyStats.baseHP) {
                      maxPartDmgCount += arrayCheck(part["maxEnemyMaxHPRatio"]) * enemyTotalHP;
                    };
                    if (part["maxEnemyMaxHPRatioPer100AP"]) {
                      maxPartDmgCount += arrayCheck(part["maxEnemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                    };
                    if (part["bonusDmgRatioPerCritChance"]) {
                      maxPartDmgCount *= (1 + part["bonusDmgRatioPerCritChance"] * totalCritChance);
                    };
                    addText(factorRes(part['type'] ? part['type'] : damage['type'], maxPartDmgCount));
                    if (part["maxEnemyMissingHPRatioByLvl"]) {
                      addText(' (+' + part["maxEnemyMissingHPRatioByLvl"][champLevel]);
                      colorHP(' Enemy Missing HP');
                      addText('ratio)');
                    }
                  };
                  if (damage[`part${i + 1}`]) {
                    doubleBreak();
                  }
                }
                })();
              };
              if (damage["storedDmg"]) {
                singleBreak();
                underLine('Stored Damage Ratio');
                addText(arrayCheck(damage["storedDmg"]["dmgRatio"])  
                + ' of pre-mitigated damage dealt over the past ' + damage["storedDmg"]["duration"] + ' seconds.');
              };
              if (damage["duration"]) {
                addText(' over ' + damage["duration"] + ' seconds.');
              };
              if (damage["coolDown"]) {
                singleBreak();
                underLine('Cooldown');
                addText(hasteRatio === 1 ? damage["coolDown"]
                : (damage["coolDown"]*hasteRatio).toFixed(1));
              }
              doubleBreak();
            };

            if (champFile[ability]["tickDamage"]) {
              var path = champFile[ability]["tickDamage"];
              if (path["type"]) {
                addBold(path['type'] + " Damage Over Time: ");
              };
              var tickDmgCount = 0;
              var minTickDmgCount = 0;
              var maxTickDmgCount = 0;
              var bonusTicks = 0;
              var ticks = 0;
              if (path["ticks"]) {
                ticks = path["ticks"];
                if (typeof ticks !== 'number') {
                  ticks = path["ticks"][rankIndex]
                }
              };
              if (path["dmg"]) {
                tickDmgCount += arrayCheck(path["dmg"]);
              };
              if (path["dmgByLvl"]) {
                tickDmgCount += path["dmgByLvl"][champLevel];
              };
              if (path["APRatio"]) {
                tickDmgCount += arrayCheck(path["APRatio"]) * totalAP;
              };
              if (path["ADRatio"]) {
                tickDmgCount += arrayCheck(path["ADRatio"]) * totalAD;
              };
              if (path["bonusADRatio"]) {
                tickDmgCount += arrayCheck(path["bonusADRatio"]) * bonusAD;
              };
              if (path["enemyMaxHPRatio"] && enemyStats.baseHP) {
                tickDmgCount += arrayCheck(path["enemyMaxHPRatio"]) * enemyTotalHP;
              };
              if (path["enemyMaxHPRatioByLvl"] && enemyStats.baseHP) {
                tickDmgCount += path["enemyMaxHPRatioByLvl"][champLevel] * enemyTotalHP;
              };
              if (path["enemyMaxHPRatioPer100AP"] && enemyStats.baseHP) {
                tickDmgCount += arrayCheck(path["enemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
              };
              if (path["maxHPRatio"]) {
                tickDmgCount += arrayCheck(path["maxHPRatio"]) * totalHP;
              };
              if (path["bonusHPRatio"]) {
                tickDmgCount += arrayCheck(path["bonusHPRatio"]) * bonusHP;
              };
              if (path["enemyCurrentHPRatio"] && enemyStats.baseHP) {
                addText(' when enemy is full HP: ');
                tickDmgCount += path["enemyCurrentHPRatio"] * enemyTotalHP;
              };
              if (tickDmgCount !== 0) {
                addText(factorRes(path['type'], tickDmgCount));
              };
              var tickMaxHPCounter = 0;
              if (path["enemyMaxHPRatio"] && !enemyStats.baseHP) {
                tickMaxHPCounter += arrayCheck(path["enemyMaxHPRatio"]);
              };
              if (path["enemyMaxHPRatioByLvl"] && !enemyStats.baseHP) {
                tickMaxHPCounter += path["enemyMaxHPRatioByLvl"][champLevel];
              }
              if (path["enemyMaxHPRatioPer100AP"] && !enemyStats.baseHP) {
                tickMaxHPCounter += arrayCheck(path["enemyMaxHPRatioPer100AP"]) * totalAP/100;
              };
              if (tickMaxHPCounter !== 0) {
                addText(' (+' + lengthCheck(tickMaxHPCounter));
                colorHP(' Enemy Max HP');
                addText('ratio)');
              };
              if (path["enemyCurrentHPRatio"] && !enemyStats.baseHP) {
                addText(' (+' + arrayCheck(path["enemyCurrentHPRatio"]));
                colorHP(' Enemy Current HP');
                addText('ratio)');
              };
              if (path["interval"] && path["ticks"] && path["system"] !== "minMax") {
                addText(' per ' + path["interval"] + ' sec, for ' + multiplyTicks2(path["interval"]) + ' seconds.');
              };
              if (path["ticks"] && path["duration"] && path["system"] !== "minMax") {
                addText(' per tick, ' + ticks + ' times over ' + path["duration"] + ' seconds.');
              };
              if (path["critDmg"]) {
                singleBreak();
                underLine('Crit Damage');
                addText(factorRes(path['type'], path["critDmg"] * tickDmgCount));
                if (path["critDmgWithIE"]) {
                  addText(' (' + factorRes(path['type'], path["critDmgWithIE"] * tickDmgCount) 
                  + ' with Infinity Edge)');
                };
                if (path["ticks"] && path["duration"]) {
                  addText(' per tick, ' + ticks + ' times over ' + path["duration"] + ' seconds.');
                }
              };
          
              if (path["system"] === "minMax" ) {
                underLine('Min')
                if (path["minDmg"]) {
                  minTickDmgCount += arrayCheck(path["minDmg"]);
                };
                if (path["minDmgByLvl"]) {
                  minTickDmgCount += path["minDmgByLvl"][rankIndex];
                };
                if (path["minAPRatio"]) {
                  minTickDmgCount += arrayCheck(path["minAPRatio"]) * totalAP;
                };
                if (path["minADRatio"]) {
                  minTickDmgCount += arrayCheck(path["minADRatio"]) * totalAD;
                };
                if (path["minBonusADRatio"]) {
                  minTickDmgCount += arrayCheck(path["minBonusADRatio"]) * bonusAD;
                };
                if (minTickDmgCount !== 0) {
                  addText(factorRes(path['type'], minTickDmgCount));
                };
                if (path["interval"] && path["ticks"]) {
                  addText(' per ' + path["interval"] + ' sec, for ' + multiplyTicks2(path["interval"]) + ' seconds.');
                };
                if (path["ticks"] && path["duration"] && !path["ASForBonusTick"]) {
                  addText(' per tick, ' + ticks + ' times over ' + path["duration"] + ' seconds.');
                };
                if (path["ASForBonusTick"]) {
                  bonusTicks += Math.floor(nonBaseAS / path["ASForBonusTick"]);
                  addText(' per tick, ' + (ticks + bonusTicks) + ' times over ' + path["duration"] + ' seconds.');
                };
                singleBreak();
                underLine('Max')
                if (path["maxDmg"]) {
                  maxTickDmgCount += arrayCheck(path["maxDmg"]);
                };
                if (path["maxDmgByLvl"]) {
                  maxTickDmgCount += path["maxDmgByLvl"][rankIndex];
                };
                if (path["maxAPRatio"]) {
                  maxTickDmgCount += arrayCheck(path["maxAPRatio"]) * totalAP;
                };
                if (path["maxADRatio"]) {
                  maxTickDmgCount += arrayCheck(path["maxADRatio"]) * totalAD;
                };
                if (path["maxBonusADRatio"]) {
                  maxTickDmgCount += arrayCheck(path["maxBonusADRatio"]) * bonusAD;
                };
                if (maxTickDmgCount !== 0) {
                  addText(factorRes(path['type'], maxTickDmgCount));
                };
                if (path["interval"] && path["ticks"]) {
                  addText(' per ' + path["interval"] + ' sec, for ' + multiplyTicks2(path["interval"]) + ' seconds.');
                };
                if (path["ticks"] && path["duration"] && !path["ASForBonusTick"]) {
                  addText(' per tick, ' + ticks + ' times over ' + path["duration"] + ' seconds.');
                };
                if (path["ASForBonusTick"]) {
                  addText(' per tick, ' + (ticks + bonusTicks) + ' times over ' + path["duration"] + ' seconds.');
                }
              };

              if (path["system"] === 'min') {
                singleBreak();
                underLine('Min')
                addText(arrayCheck(path["minDmg"]))
                if (path["interval"] && path["ticks"]) {
                  addText(' per ' + path["interval"] + ' sec, for ' + multiplyTicks2(path["interval"]) + ' seconds.');
                }
              };
              if (path["ticks"]) {
                singleBreak();
                addBold('Total: ');
          
                if (tickDmgCount !== 0) {
                  addText(factorRes(path['type'], tickDmgCount * ticks));
                  if (path['critDmg']) {
                    singleBreak();
                    underLine('Crit Total');
                    if (path['critDmgWithIE']) {
                      addText(factorRes(path['type'], tickDmgCount * ticks * path['critDmg']) + ' (' 
                      + factorRes(path['type'], tickDmgCount * ticks * path['critDmgWithIE']) 
                      + ' with Infinity Edge)');
                    } else {
                      addText(factorRes(path['type'], tickDmgCount * ticks * path['critDmg']));
                    }
                  }
                };
                var maxHPRatioTotal = 0;
                if (path["enemyMaxHPRatio"] && !enemyStats.baseHP) {
                  maxHPRatioTotal += arrayCheck(path["enemyMaxHPRatio"]);
                };
                if (path["enemyMaxHPRatioPer100AP"] && !enemyStats.baseHP) {
                  maxHPRatioTotal += arrayCheck(path["enemyMaxHPRatioPer100AP"]) * totalAP/100;
                };
                if (maxHPRatioTotal !== 0) {
                  addText(' (+' + lengthCheck(maxHPRatioTotal * ticks));
                  colorHP(' Enemy Max HP');
                  addText('ratio)');
                };
                if (path["enemyCurrentHPRatio"] && !enemyStats.baseHP) {
                  addText(' (+' + lengthCheck(ticks * arrayCheck(path["enemyCurrentHPRatio"])));
                  colorHP(' Enemy Current HP');
                  addText('ratio)');
                };

                if (path["system"] === 'min') {
                  singleBreak();
                  underLine('Min');
                  addText(factorRes(path['type'], multiplyTicks(arrayCheck(path["minDmg"]))));
                };

                if (path["system"] === "minMax" ) {
                  underLine('Min')
                  if (minTickDmgCount !== 0) {
                    addText(factorRes(path['type'], minTickDmgCount * ticks));
                  };
                  singleBreak();
                  underLine('Max')
                  if (maxTickDmgCount !== 0) {
                    addText(factorRes(path['type'], maxTickDmgCount * ticks));
                  }
                }
              };
              if (path["interval"] && !path["ticks"]) {
                addText(' per ' + path["interval"] + ' sec.');
              };
              
              if (path["part1"]) {
                var part1DmgCount = 0;
                var part2DmgCount = 0;
                underLine('Part 1');
                if (path["part1"]["dmg"]) {
                  part1DmgCount += arrayCheck(path["part1"]["dmg"]);
                };
                if (path["part1"]["APRatio"]) {
                  part1DmgCount += arrayCheck(path["part1"]["APRatio"]) * totalAP;
                };
                addText(Math.round(part1DmgCount));
                if (path["part1"]["interval"] && path["part1"]["ticks"]) {
                  addText(' per ' + path["part1"]["interval"] + ' sec, for ' + 
                    path["part1"]["interval"] * path["part1"]["ticks"] + ' seconds.');
                };

                singleBreak();
                underLine('Total');
                addText(factorRes(path['type'], part1DmgCount * path["part1"]["ticks"]));
                
                doubleBreak();
                underLine('Part 2');
                if (path["part2"]["enemyMaxHPRatio"] && enemyStats.baseHP) {
                  part2DmgCount += arrayCheck(path["part2"]["enemyMaxHPRatio"]) * enemyTotalHP;
                };
                if (path["part2"]["enemyMaxHPRatioPer100AP"] && enemyStats.baseHP) {
                  part2DmgCount += arrayCheck(path["part2"]["enemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                };
                if (part2DmgCount !== 0) {
                  addText(factorRes(path['type'], part2DmgCount));
                };
                var part2MaxHPCount = 0;
                if (path["part2"]["enemyMaxHPRatio"] && !enemyStats.baseHP) {
                  part2MaxHPCount += arrayCheck(path["part2"]["enemyMaxHPRatio"]);
                };
                if (path["part2"]["enemyMaxHPRatioPer100AP"] && !enemyStats.baseHP) {
                  part2MaxHPCount += arrayCheck(path["part2"]["enemyMaxHPRatioPer100AP"]) * totalAP/100;
                };
                if (part2MaxHPCount !== 0) {
                  addText('(' + lengthCheck(part2MaxHPCount));
                  colorHP(' Enemy Max HP');
                  addText('ratio)');
                };
                if (path["part2"]["interval"] && path["part2"]["ticks"]) {
                  addText(' per ' + path["part2"]["interval"] + ' sec, for ' + 
                    path["part2"]["interval"] * path["part2"]["ticks"] + ' seconds.');
                };

                singleBreak();
                underLine('Total');
                if (part2DmgCount !== 0) {
                  addText(factorRes(path['type'], part2DmgCount * path["part2"]["ticks"]));
                };
                if (part2MaxHPCount !== 0) {
                  addText('(' + lengthCheck(part2MaxHPCount * path["part2"]["ticks"]));
                  colorHP(' Enemy Max HP');
                  addText('ratio)');
                }
              };
              doubleBreak();
            };

            if (champFile[ability]["specialDelivery"]) {

              var path = champFile[ability]["specialDelivery"]["tickDamage"];
              addBold("Special Delivery - " + path['type'] + ' Damage Over Time: ');

              var deliveryCount = 0;
              deliveryCount += path["dmgByLvl"][champLevel];
              deliveryCount += path["bonusADRatio"] * bonusAD;
              deliveryCount += path["APRatio"] * totalAP;

              addText(factorRes(path['type'], deliveryCount) + ' per ' + path["interval"] + ' sec, for ' + 
              multiplyTicks2(path["interval"])   + ' seconds.');
              singleBreak();
              underLine('Total Damage');
              addText(factorRes(path['type'], multiplyTicks(deliveryCount)));
              doubleBreak();
            };

            if (champFile[ability]["passivePermanent"]) {
              var path = champFile[ability]["passivePermanent"];
              addBold('Passive: ');
              if (path["bonusResist"]) {
                underLine('Bonus Armor and Magic Resist');
                addText(arrayCheck(path["bonusResist"]));
              };
              if (path["bonusHealth"]) {
                underLine('Bonus Health');
                if (path["bonusHealth"]["healthPerStack"]) {
                  addText('(' + arrayCheck(path["bonusHealth"]["healthPerStack"]) + ' per stack)');
                };
                if (path["bonusHealth"]["healthPerTakedown"]) {
                  addText(' (+' + arrayCheck(path["bonusHealth"]["healthPerTakedown"]) + ' per takedown)');
                };
              };
              if (path["bonusArmor"]) {
                underLine('Bonus Armor');
                if (path["bonusArmor"]["minArmorRatio"]) {
                  addText('Min: ' + Math.round(arrayCheck(path["bonusArmor"]["minArmorRatio"]) * totalArmor) 
                  + ', Max: ' + + Math.round(arrayCheck(path["bonusArmor"]["maxArmorRatio"]) * totalArmor));
                }
              };
              if (path["armorPenRatio"]) {
                underLine('Armor Pen Ratio');
                addText(arrayCheck(path["armorPenRatio"]));
              };
              if (path["omniVamp"]) {
                underLine('Omni Vamp Ratio')
                addText(arrayCheck(path["omniVamp"]))
              };
            doubleBreak();
            };

            if (champFile[ability]["selfHeal"]) {
              var path = champFile[ability]["selfHeal"];
              addBold('Self Heal: ');
              var healCounter = 0;
              if (path["healByLvl"]) {
                healCounter += path["healByLvl"][champLevel]; 
              };
              if (healCounter !== 0) {
                addText(Math.round(healCounter));
              }
            };

            if (champFile[ability]["allyHeal"]) {
              var path = champFile[ability]["allyHeal"];
              addBold('Ally Heal: ');
              var healCounter = 0;
              if (path["healByLvl"]) {
                healCounter += path["healByLvl"][champLevel];
              };
              if (healCounter !== 0) {
                addText(Math.round(healCounter));
              }
            };
            
            if (champFile[ability]["heal"]) {
              var path = champFile[ability]["heal"];
              addBold('Heal: ');
              var healCounter = 0;
              if (path["heal"]) {
                healCounter += arrayCheck(path["heal"]);
              };
              if (path["healByLvl"]) {
                healCounter += path["healByLvl"][champLevel];
              };
              if (path["maxHPRatioByLvl"]) {
                healCounter += path["maxHPRatioByLvl"][champLevel] * totalHP;
              };
              if (path["APRatio"]) {
                healCounter += arrayCheck(path["APRatio"]) * totalAP;
              };
              if (path["ADRatio"]) {
                healCounter += arrayCheck(path["ADRatio"]) * totalAD;
              };
              if (path["bonusADRatio"]) {
                healCounter += arrayCheck(path["bonusADRatio"]) * bonusAD;
              };
              if (path["bonusHPRatio"]) {
                healCounter += arrayCheck(path["bonusHPRatio"]) * bonusHP;
              };
              if (path["maxHPRatio"]) {
                healCounter += arrayCheck(path["maxHPRatio"]) * totalHP;
              };
              if (path["enemyMaxHPRatio"] && enemyStats.baseHP) {
                healCounter += arrayCheck(path["enemyMaxHPRatio"]) * enemyTotalHP;
              };
              if (path["enemyMaxHPRatioPer100AP"] && enemyStats.baseHP) {
                healCounter += arrayCheck(path["enemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
              };
              if (path["enemyMaxHPRatioPer100BonusAD"] && enemyStats.baseHP) {
                healCounter += arrayCheck(path["enemyMaxHPRatioPer100BonusAD"]) * enemyTotalHP * bonusAD/100;
              };
              if (path['enemyMaxHPRatioPerBonusAS'] && enemyStats.baseHP) {
                healCounter += arrayCheck(path['enemyMaxHPRatioPerBonusAS']) * enemyTotalHP * bonusASRatio;
              };
              if (healCounter !== 0) {
                addText(Math.round(healCounter));
              };
              var maxHPRatioCounter = 0;
              if (path["enemyMaxHPRatio"] && !enemyStats.baseHP) {
                maxHPRatioCounter += arrayCheck(path["enemyMaxHPRatio"]); 
              };
              if (path["enemyMaxHPRatioPer100AP"] && !enemyStats.baseHP) {
                maxHPRatioCounter += arrayCheck(path["enemyMaxHPRatioPer100AP"]) * totalAP/100;
              };
              if (path["enemyMaxHPRatioPer100BonusAD"] && !enemyStats.baseHP) {
                maxHPRatioCounter += arrayCheck(path["enemyMaxHPRatioPer100BonusAD"]) * bonusAD/100;
              };
              if (path['enemyMaxHPRatioPerBonusAS'] && !enemyStats.baseHP) {
                maxHPRatioCounter += arrayCheck(path['enemyMaxHPRatioPerBonusAS']) * bonusASRatio;
              };
              if (maxHPRatioCounter !== 0) {
                addText(' (+' + lengthCheck(maxHPRatioCounter));
                colorHP(' Enemy Max HP');
                addText('ratio)');
              };
              var missCounter = 0;
              if (path["missingHPRatio"]) {
                missCounter += arrayCheck(path["missingHPRatio"]);
              };
              if (path['missingHPRatioPer100AP']) {
                missCounter += arrayCheck(path['missingHPRatioPer100AP']) * totalAP/100
              };
              if (missCounter !== 0) {
                addText(" (+" + lengthCheck(missCounter));
                colorHP(' Missing HP');
                addText('ratio)');
              }
              if (path["preMitigation"]) {
                addText(', pre-mitigation.');
              };
              if (path["lifeStealRatio"]) {
                underLine('Damage Ratio');
                addText(path["lifeStealRatio"] * totalLifeSteal);
              };
              if (path["dmgRatio"]) {
                underLine('Damage Ratio');
                addText(arrayCheck(path["dmgRatio"]));
              };
              if (path["minDmgRatio"]) {
                underLine('Damage Ratio');
                addText('Min: ' + path["minDmgRatio"] + ', Max: ' + path["maxDmgRatio"]);
              };
              if (path["dmgTakenRatio"]) {
                underLine('Damage Taken Ratio');
                addText(arrayCheck(path["dmgTakenRatio"]));
              };
              if (path["increasePer1%HPLostLast4Sec"]) {
                singleBreak();
                addText('Increase by Ratio of ' +  path["increasePer1%HPLostLast4Sec"] + ' per');
                colorHP(' 1% HP');
                addText('lost in last 4 seconds.');
              };
              if (path["system"] === "max") {
                underLine('Max');
                if (path["maxHealByLvl"]) {
                  addText(path["maxHealByLvl"][champLevel]);
                }
              };
              if (path["system"] === '2Part') {
                underLine('Part 1');
                var p1HealCount = 0;
                if (path["part1"]["heal"]) {
                  p1HealCount += arrayCheck(path["part1"]["heal"]);
                };
                if (path["part1"]["APRatio"]) {
                  p1HealCount += arrayCheck(path["part1"]["APRatio"]) * totalAP;
                };
                if (p1HealCount !== 0) {
                  addText(Math.round(p1HealCount));
                };
                singleBreak();
                underLine('Part 2');
                if (path["part2"]["part1RatioFormula"]) {
                  addText(Math.round(p1HealCount * ((1 + ((0.00075 * (totalAP) - 0.15))**2))));
                }
              };
              if (path["system"] === "minMax" ) {
                underLine('Min')
                var minHealCounter = 0;
                var maxHealCounter = 0;
                if (path["minHeal"]) {
                  minHealCounter += arrayCheck(path["minHeal"]);
                };
                if (path["minHealByLvl"]) {
                  minHealCounter += path["minHealByLvl"][champLevel];
                };
                if (path["minAPRatio"]) {
                  minHealCounter += arrayCheck(path["minAPRatio"]) * totalAP;
                };
                if (path["minADRatio"]) {
                  minHealCounter += arrayCheck(path["minADRatio"]) * totalAD;
                };
                if (path["minBonusADRatio"]) {
                  minHealCounter += arrayCheck(path["minBonusADRatio"]) * bonusAD;
                };
                if (path["minBonusHPRatio"]) {
                  minHealCounter += arrayCheck(path["minBonusHPRatio"]) * bonusHP;
                };
                if (path["minMaxHPRatio"]) {
                  minHealCounter += arrayCheck(path["minMaxHPRatio"]) * totalHP;
                };
                if (minHealCounter !== 0) {
                  addText(Math.round(minHealCounter));
                };
                var missCount = 0;
                if (path["minMissingHPRatio"]) {
                  missCount += arrayCheck(path["minMissingHPRatio"])
                };
                if (path['minMissingHPRatioPer100AP']) {
                  missCount += arrayCheck(path['minMissingHPRatioPer100AP']) * totalAP/100;
                };
                if (missCount !== 0) {
                  addText(" (+" + lengthCheck(missCount));
                  colorHP(' Missing HP');
                  addText('ratio)');
                };

                singleBreak();
                underLine('Max');

                if (path["maxHeal"]) {
                  maxHealCounter += arrayCheck(path["maxHeal"]);
                };
                if (path["maxHealByLvl"]) {
                  maxHealCounter += path["maxHealByLvl"][champLevel];
                };
                if (path["maxAPRatio"]) {
                  maxHealCounter += arrayCheck(path["maxAPRatio"]) * totalAP;
                };
                if (path["maxADRatio"]) {
                  maxHealCounter += arrayCheck(path["maxADRatio"]) * totalAD;
                };
                if (path["maxBonusADRatio"]) {
                  maxHealCounter += arrayCheck(path["maxBonusADRatio"]) * bonusAD;
                };
                if (path["maxBonusHPRatio"]) {
                  maxHealCounter += arrayCheck(path["maxBonusHPRatio"]) * bonusHP;
                };
                if (path["maxMaxHPRatio"]) {
                  maxHealCounter += arrayCheck(path["maxMaxHPRatio"]) * totalHP;
                };
                if (maxHealCounter !== 0) {
                  addText(Math.round(maxHealCounter));
                };
                var missCount2 = 0;
                if (path["maxMissingHPRatio"]) {
                  missCount2 += arrayCheck(path["maxMissingHPRatio"])
                };
                if (path['maxMissingHPRatioPer100AP']) {
                  missCount2 += arrayCheck(path['maxMissingHPRatioPer100AP']) * totalAP/100;
                }
                if (missCount2 !== 0) {
                  addText(" (+" + lengthCheck(missCount2));
                  colorHP(' Missing HP');
                  addText('ratio)');
                }
              };
              if (path["interval"]) {
                addText(' per ' + path["interval"] + ' sec')
                if (path["duration"]) {
                  addText(', for ' + path["duration"] + ' seconds.');
                };
                singleBreak();
                if (path["system"] === 'minMax') {
                  singleBreak();
                };
                underLine('Total');
                var totalHealCounter = 0;
                if (path["heal"]) {
                  totalHealCounter += arrayCheck(path["heal"]);
                };
                if (path["APRatio"]) {
                  totalHealCounter += arrayCheck(path["APRatio"]) * totalAP;
                };
                if (totalHealCounter !== 0) {
                  addText(Math.round(totalHealCounter * path["ticks"]));
                };
                if (path["system"] === 'minMax') {
                  var totalMinHeal = 0;
                  var totalMaxHeal = 0;
                  if (path["minHeal"]) {
                    totalMinHeal += arrayCheck(path["minHeal"])
                  };
                  if (path["minAPRatio"]) {
                    totalMinHeal += arrayCheck(path["minAPRatio"]) * totalAP;
                  };
                  singleBreak();
                  if (path["maxHeal"]) {
                    totalMaxHeal += arrayCheck(path["maxHeal"])
                  };
                  if (path["maxAPRatio"]) {
                    totalMaxHeal += arrayCheck(path["maxAPRatio"]) * totalAP;
                  };
                  addText('Min: ' + Math.round(totalMinHeal * path["ticks"])
                  + ', Max: ' + Math.round(totalMaxHeal * path["ticks"]));
                }
              };
              if (path["system"] === 'perTarget') {
                addText(' per champion');
              };
              if (path["duration"] && !path["interval"]) {
                addText(' over ' + path["duration"] + ' seconds.');
              };
              if (path["empower"]) {
                var empPath = path["empower"]
                singleBreak();
                addBold('Empowered Heal: ');
                if (empPath["system"] === 'minMax') {
                  underLine('Min');
                  var empMinHeal = 0;
                  var empMaxHeal = 0;
                  if (empPath["minHeal"]) {
                    empMinHeal += arrayCheck(empPath["minHeal"]);
                  };
                  if (empPath["minBonusADRatio"]) {
                    empMinHeal += arrayCheck(empPath["minBonusADRatio"]) * bonusAD;
                  };
                  addText(Math.round(empMinHeal));
                  singleBreak();
                  underLine('Max');
                  if (empPath["maxHeal"]) {
                    empMaxHeal += arrayCheck(empPath["maxHeal"]);
                  };
                  addText(Math.round(empMaxHeal));
                }
              };
              if (path["empowerBonus"]) {
                var empPath = path["empowerBonus"];
                singleBreak();
                underLine('Empower Bonus Heal');
                var empHealCounter = 0;
                var empMissHPCounter = 0;
                if (empPath["healByLvl"]) {
                  empHealCounter += empPath["healByLvl"][champLevel];
                };
                if (empHealCounter !== 0) {
                  addText(Math.round(empHealCounter));
                };
                if (empPath["missingHPRatio"]) {
                  empMissHPCounter += empPath["missingHPRatio"];
                };
                if (empPath["missingHPRatioPer100AP"]) {
                  empMissHPCounter += empPath["missingHPRatioPer100AP"] * totalAP/100;
                };
                if (empMissHPCounter !== 0) {
                  addText(' (+' + lengthCheck(empMissHPCounter));
                  colorHP(' Enemy Missing HP');
                  addText('ratio)');
                };
              }
              doubleBreak();
            };

            if (champFile[ability]["shield"]) {
              var path = champFile[ability]["shield"];
              if (path["type"] !== 'all') {
                addBold(path["type"] + ' Shield: ')
              } else {
                addBold(' Shield: ')
              };
              var shieldCounter = 0;
              if (path["shield"]) {
                shieldCounter += arrayCheck(path["shield"]);
              };
              if (path["shieldByLvl"]) {
                shieldCounter += path["shieldByLvl"][champLevel];
              };
              if (path["APRatio"]) {
                shieldCounter += arrayCheck(path["APRatio"]) * totalAP;
              };
              if (path["ADRatio"]) {
                shieldCounter += arrayCheck(path["ADRatio"]) * totalAD;
              };
              if (path["bonusADRatio"]) {
                shieldCounter += arrayCheck(path["bonusADRatio"]) * bonusAD;
              };
              if (path["bonusHPRatio"]) {
                shieldCounter += arrayCheck(path["bonusHPRatio"]) * bonusHP;
              };
              if (path["maxHPRatio"]) {
                shieldCounter += arrayCheck(path["maxHPRatio"]) * totalHP;
              };
              if (path["maxHPRatioByLvl"]) {
                shieldCounter += path["maxHPRatioByLvl"][champLevel] * totalHP;
              };
              if (path["maxManaRatio"]) {
                shieldCounter += arrayCheck(path["maxManaRatio"]) * totalMana;
              };
              if (shieldCounter !== 0) {
                addText(Math.round(shieldCounter));
              };
              if (path["maxMaxHPRatio"]) {
                underLine('Max')
                addText(Math.round(path["maxMaxHPRatio"] * totalHP));
              };
              if (path["shieldPerStack"]) {
                addText(" (+" + path["shieldPerStack"] + " per stack)");
              };
              if (path["maxHPRatioPerStack"]) {
                addText(" (+" + Math.round(path["maxHPRatioPerStack"] * totalHP) + " per stack)");
              };
              if (path["dmgTakenRatio"]) {
                underLine('Damage Taken Ratio');
                addText(arrayCheck(path["dmgTakenRatio"]));
              };
              if (path["system"] === "minMax" ) {
                underLine('Min');
                var minShieldCounter = 0;
                var maxShieldCounter = 0;
                if (path["minShield"]) {
                  minShieldCounter += arrayCheck(path["minShield"])
                };
                if (path["minShieldByLvl"]) {
                  minShieldCounter += path["minShieldByLvl"][champLevel];
                };
                if (path["minAPRatio"]) {
                  minShieldCounter += arrayCheck(path["minAPRatio"]) * totalAP;
                };
                if (path["minADRatio"]) {
                  minShieldCounter += arrayCheck(path["minADRatio"]) * totalAD;
                };
                if (path["minBonusADRatio"]) {
                  minShieldCounter += arrayCheck(path["minBonusADRatio"]) * bonusAD;
                };
                if (minShieldCounter !== 0) {
                  addText(Math.round(minShieldCounter));
                };
                singleBreak();
                underLine('Max');
                
                if (path["maxShield"]) {
                  maxShieldCounter += arrayCheck(path["maxShield"])
                };
                if (path["maxShieldByLvl"]) {
                  maxShieldCounter += path["maxShieldByLvl"][champLevel];
                };
                if (path["maxAPRatio"]) {
                  maxShieldCounter += arrayCheck(path["maxAPRatio"]) * totalAP;
                };
                if (path["maxADRatio"]) {
                  maxShieldCounter += arrayCheck(path["maxADRatio"]) * totalAD;
                };
                if (path["maxBonusADRatio"]) {
                  maxShieldCounter += arrayCheck(path["maxBonusADRatio"]) * bonusAD;
                };
                if (maxShieldCounter !== 0) {
                  addText(Math.round(maxShieldCounter));
                }
              };
              if (path["type"] !== 'Spell' && path["duration"]) {
                singleBreak();
              };
              if (path["duration"]) {
                underLine('Duration');
                addText(arrayCheck(path["duration"]));
              };
              if (path["combatCoolDown"]) {
                singleBreak();
                underLine('Combat Cooldown');
                addText(path["combatCoolDown"]);
              };
              if (path["combatCoolDownByLvl"]) {
                singleBreak();
                underLine('Combat Cooldown');
                addText(path["combatCoolDownByLvl"][champLevel]);
              };
              doubleBreak();
            };

            if (champFile[ability]["revive"]) {
              var path = champFile[ability]["revive"]
              addBold('Revive: ')
              var hpCounter = 0;
              if (path["health"]) {
                underLine('Health Restored');
                hpCounter += arrayCheck(path["health"]);
              };
              if (path["healthPerAP"]) {
                hpCounter += arrayCheck(path["healthPerAP"]) * totalAP;
              };
              if (hpCounter !== 0) {
                addText(Math.round(hpCounter));
              };
              doubleBreak();
            };

            if (champFile[ability]["damageRedux"]) {
              var path = champFile[ability]["damageRedux"];
              if (path["type"] !== 'all') {
                addBold('Reduced ' + path["type"] + ' Damage Taken: ')
              } else {
                addBold('Reduced Damage Taken: ')
              };
              var reduxCounter = 0;
              var ratioCounter = 0;
              if (path["reduxRatio"]) {
                ratioCounter += arrayCheck(path["reduxRatio"]);
              };
              if (path["dmg"]) {
                reduxCounter += arrayCheck(path["dmg"]);
              };
              if (path["APRatio"]) {
                reduxCounter += arrayCheck(path["APRatio"]) * totalAP;
              };
              if (path["bonusArmorRatio"]) {
                reduxCounter += arrayCheck(path["bonusArmorRatio"]) * bonusArmor;
              };
              if (path["bonusMagicResistRatio"]) {
                reduxCounter += arrayCheck(path["bonusMagicResistRatio"]) * bonusMR;
              };
              if (reduxCounter !== 0) {
                addText('Reduced by ' + Math.round(reduxCounter));
              };
              if (path['maxReduxRatio']) {
                addText(', up to a maximum reduction ratio of ' + path["maxReduxRatio"]);
              };
              if (path["reduxRatioPer100AP"]) {
                ratioCounter += arrayCheck(path["reduxRatioPer100AP"]) * totalAP/100;
              };
              if (ratioCounter !== 0) {
                addText('Reduced by ratio of ' + lengthCheck(ratioCounter));
              };
              if (path["aoeDmgReduxRatio"]) {
                addText('AOE Damage reduced by ratio of ' + arrayCheck(path["aoeDmgReduxRatio"]));
              };
              if (path["autoBlock"]) {
                singleBreak();
                addText('Blocks basic attacks.');
              };
              if (path["duration"] || path["minDuration"]) {
                singleBreak();
                underLine('Duration');
              };
              if (path["duration"]) {
                addText(arrayCheck(path["duration"]));
              };
              if (path["minDuration"]) {
                addText('Min: ' + path["minDuration"] + ', Max: ' + path["maxDuration"]);
              };
              if (path["calculateFrom"]) {
                singleBreak();
                addText('Applies ' + path["calculateFrom"] + '.');
              };
              doubleBreak();
            };

            if (champFile[ability]["magicDamageRedux"]) {
              var path = champFile[ability]["magicDamageRedux"]
              addBold('Reduced Magic Damage Taken: ');
              var ratioCount = 0;
              if (path["reduxRatio"]) {
                ratioCount += arrayCheck(path["reduxRatio"]);
              };
              if (path["reduxRatioPer100AP"]) {
                ratioCount += arrayCheck(path["reduxRatioPer100AP"]) * totalAP/100;
              };
              if (path["reduxRatioPer100BonusMR"]) {
                ratioCount += arrayCheck(path["reduxRatioPer100BonusMR"]) * bonusMR/100;
              };
              addText('Reduced by ratio of ' + lengthCheck(ratioCount))
              if (path["duration"]) {
                addText(' for ' + path["duration"] + ' seconds.');
              };
              singleBreak();
            };

            if (champFile[ability]["physDamageRedux"]) {
              var path = champFile[ability]["physDamageRedux"];
              addBold('Reduced Physical Damage Taken: ');
              var ratioCount = 0;
              if (path["reduxRatio"]) {
                ratioCount += arrayCheck(path["reduxRatio"]);
              };
              if (path["reduxRatioPer100AP"]) {
                ratioCount += arrayCheck(path["reduxRatioPer100AP"]) * totalAP/100;
              };
              if (path["reduxRatioPer100BonusMR"]) {
                ratioCount += arrayCheck(path["reduxRatioPer100BonusMR"]) * bonusMR/100;
              };
              addText('Reduced by ratio of ' + lengthCheck(ratioCount));
              if (path["duration"]) {
                addText(' for ' + path["duration"] + ' seconds.');
              };
              doubleBreak();
            };

            if (champFile[ability]["passiveDmgIncrease"]) {
              addBold('Passive Damage Increase Ratio: ');
              addText(arrayCheck(champFile[ability]["passiveDmgIncrease"]));
              doubleBreak();
            };

            if(champFile[ability]["dmgImmune"]) {
              addBold('Damage Immune Duration: ');
              addText(arrayCheck(champFile[ability]["dmgImmune"]));
              doubleBreak();
            };

            if(champFile[ability]["ccImmune"]) {
              addBold('Crowd Control Immune Duration: ');
              addText(arrayCheck(champFile[ability]["ccImmune"]));
              doubleBreak();
            };

            if (champFile[ability]["minDmgImmune"]) {
              addBold('Crowd Control Immune Duration: ');
              underLine('Min');
              addText(arrayCheck(champFile[ability]["minDmgImmune"]));
              singleBreak();
              underLine('Max');
              addText(arrayCheck(champFile[ability]["maxDmgImmune"]));
              doubleBreak();
            };

            if (champFile[ability]["silence"]) {
              addBold('Silence Duration: ');
              addText(arrayCheck(champFile[ability]["silence"]));
              doubleBreak();
            };

            if (champFile[ability]["blind"]) {
              addBold('Blind Duration: ');
              addText(arrayCheck(champFile[ability]["blind"]));
              doubleBreak();
            };

            if(champFile[ability]["interruptCC"] || champFile[ability]["interruptCCByLvl"] 
            || champFile[ability]["minInterruptCC"]) {
              addBold('Crowd Control Duration: ');
            };

            if (champFile[ability]["interruptCC"]) {
              var intCounter = 0;
              intCounter += arrayCheck(champFile[ability]["interruptCC"]);
              if (champFile[ability]["interruptCCPer10Lethality"]) {
                intCounter += arrayCheck(champFile[ability]["interruptCCPer10Lethality"]) * totalLethality/10;
              };
              if (intCounter.toString().length > 4) {
                intCounter = intCounter.toFixed(2);
              };
              addText(intCounter);
              doubleBreak();
            };

            if (champFile[ability]["interruptCCByLvl"]) {
              addText(champFile[ability]["interruptCCByLvl"][champLevel]);
              doubleBreak();
            };

            if (champFile[ability]["minInterruptCC"]) {
              underLine('Min');
              addText(arrayCheck(champFile[ability]["minInterruptCC"]));
              singleBreak();
              underLine('Max');
              addText(arrayCheck(champFile[ability]["maxInterruptCC"]));
              doubleBreak();
            };
            
            if (champFile[ability]["damageAmp"]) {
              var ampPath = champFile[ability]["damageAmp"];
              addBold('Damage Amp Ratio: ');
              addText(arrayCheck(ampPath["amp"]));
              singleBreak();
              underLine('Duration');
              addText(ampPath["duration"]);
              doubleBreak();
            };

            if (champFile[ability]["ADRedux"]) {
              var path = champFile[ability]["ADRedux"];
              addBold('Attack Damage Reduction: ');
              if (path["redux"]) {
                addText(arrayCheck(path["redux"]));
              };
              doubleBreak();
            };

            if (champFile[ability]["resistRedux"]) {
              var path = champFile[ability]["resistRedux"];
              if (path["type"] === 'both') {
                addBold('Armor and Magic Resist Reduction: ');
              };
              if (path["type"] === 'magicResist') {
                addBold('Magic Resist Reduction: ');
              };
              if (path["type"] === 'armor') {
                addBold('Armor Reduction: ');
              };
              if (path["resist"]) {
                addText(arrayCheck(path["resist"]));
              };
              if (path["reduxRatio"]) {
                underLine('Ratio');
                addText(arrayCheck(path["reduxRatio"]));
              };
              if (path["system"] === 'minMax') {
                underLine('Min')
                if (path["minResistRedux"]) {
                  addText(arrayCheck(path["minResistRedux"]));
                };
                singleBreak();
                underLine('Max');
                if (path["maxResistRedux"]) {
                  addText(arrayCheck(path["maxResistRedux"]));
                }
              };
              if (path["duration"]) {
                singleBreak();
                underLine('Duration')
                addText(arrayCheck(path["duration"]));
              };
              if (path["maxDuration"]) {
                singleBreak();
                underLine('Max Duration');
                addText(arrayCheck(path["maxDuration"]));
              };
              doubleBreak();
            };

            if (champFile[ability]["bonusStats"]) {
              document.getElementById(`${this.abilities[i]}${side}Applied`).childNodes[1].style.visibility = 'visible'
              var path = champFile[ability]["bonusStats"];
              addBold('Bonus Stats: ');
              if (path["attackDamageByLvl"]) {
                underLine('Attack Damage');
                addText(path["attackDamageByLvl"][champLevel]);
                singleBreak();
              };
              if (path["attackSpeed"]) {
                underLine('Attacks per Second');
                addText((arrayCheck(path["attackSpeed"]) * statsPath["asRatio"]).toFixed(3))
                singleBreak();
              };
              if (path["ADRatio"]) {
                underLine('Attack Damage Ratio');
                addText(arrayCheck(path["ADRatio"]));
                singleBreak();
              };
              if (path["lifeSteal"]) {
                underLine('Life Steal Ratio');
                addText(arrayCheck(path["lifeSteal"]));
                singleBreak();
              };
              if (path["healingRatio"]) {
                underLine('Increased Healing Ratio');
                addText(arrayCheck(path["healingRatio"]));
                singleBreak();
              };
              if (path["healingPerMissingHPRatio"]) {
                underLine('Increased Healing');
                addText('(' + arrayCheck(path["healingPerMissingHPRatio"]) + ' per');
                colorHP(' Missing HP');
                addText('ratio)');
                singleBreak();
              };
              if (path["resist"]) {
                underLine('Armor and Magic Resist');
                addText(arrayCheck(path["resist"]));
                singleBreak();
              };
              if (path["abilityPower"]) {
                underLine('Ability Power');
                addText(arrayCheck(path["abilityPower"]));
                singleBreak();
              };
              if (path["healthRegen"]) {
                underLine('Health Regen');
                addText(arrayCheck(path["healthRegen"]));
                singleBreak();
              };
              if (path["duration"]) {
                underLine('Duration');
                addText(arrayCheck(path["duration"]));
                if (path["durationExtend"]) {
                  addText(', extends by ' + path["durationExtend"] + ' seconds.')
                };
                singleBreak();
              };
              singleBreak();
            };

            if (champFile[ability]["bonusHealth"]) {
              var path = champFile[ability]["bonusHealth"];
              addBold('Bonus Health: ')
              var healthCounter = 0;
              if (path["health"]) {
                healthCounter += arrayCheck(path["health"]);
              };
              if (path["APRatio"]) {
                healthCounter += arrayCheck(path["APRatio"]) * totalAP;
              };
              if (healthCounter !== 0) {
                addText(Math.round(healthCounter));
              };
              if (path["healthPerStack"]) {
                addText(arrayCheck(path["healthPerStack"]) + ' per stack');
                doubleBreak();
              };
              if (path["duration"]) {
                singleBreak();
                underLine('Duration');
                addText(arrayCheck(path["duration"]));
              };
              doubleBreak();
            };

            if (champFile[ability]["maxHPRegen"]) {
              addBold('Max HP Ratio Regenerated: ');
              addText(arrayCheck(champFile[ability]["maxHPRegen"]));
              doubleBreak();
            };

            if (champFile[ability]["healthRegen"]) {
              var path = champFile[ability]["healthRegen"];
              singleBreak();
              addBold('Health Regen: ');
              if (path["dmgTakenRatio"]) {
                underLine('Damage Taken Ratio');
                addText(arrayCheck(path["dmgTakenRatio"]));
              };
              if (path["dmgTakenRatioByLvl"]) {
                underLine("Damage Taken Ratio");
                addText(path["dmgTakenRatioByLvl"][champLevel])
              };
              if (path["greyHealthRatioByLvl"]) {
                singleBreak();
                underLine('Grey Health Ratio');
                addText(path["greyHealthRatioByLvl"][champLevel])
              };
              if (path["maxHPRatio"]) {
                singleBreak();
                underLine('Max');
                addText(arrayCheck(path["maxHPRatio"]) + ' Max HP Ratio');
              };
              doubleBreak();
            };

            if (champFile[ability]["bonusAttackDamage"]) {
              var path = champFile[ability]["bonusAttackDamage"];
              addBold('Bonus Attack Damage: ')
              var adCounter = 0;
              if (path['attackDamage']) {
                adCounter += arrayCheck(path['attackDamage']);
              };
              if (path["ADRatio"]) {
                adCounter += arrayCheck(path["ADRatio"]) * totalAD;
              };
              if (path["attackDamagePerAPRatio"]) {
                adCounter += arrayCheck(path["attackDamagePerAPRatio"]) * totalAP;
              };
              if (adCounter !== 0) {
                addText(Math.round(adCounter));
              };
              if (path['minAttackDamage']) {
                underLine('Min');
                addText(arrayCheck(path['minAttackDamage']));
              };
              if (path['maxAttackDamage']) {
                singleBreak();
                underLine('Max');
                addText(arrayCheck(path['maxAttackDamage']));
              };
              if (path["duration"]) {
                singleBreak();
                underLine('Duration');
                addText(arrayCheck(path["duration"]));
              };
              doubleBreak();
            };

            if (champFile[ability]["bonusAdaptiveForce"]) {
              var path = champFile[ability]["bonusAdaptiveForce"];
              addBold('Self Bonus Adaptive Force: ');
              if (path["adaptiveForce"]) {
                addText(arrayCheck(path["adaptiveForce"]));
              };
              if (path["allyBonusADRatio"]) {
                addText(' (+' + arrayCheck(path["allyBonusADRatio"]) + ' Ally Bonus AD Ratio');
              };
              if (path["allyAPRatio"]) {
                addText(' OR +' + arrayCheck(path["allyAPRatio"]) + ' Ally AP Ratio)');
              };
              doubleBreak();
            };

            if (champFile[ability]["allyBonusAdaptiveForce"]) {
              var path = champFile[ability]["allyBonusAdaptiveForce"];
              addBold('Ally Bonus Adaptive Force: ');
              if (path["adaptiveAD"]) {
                addText('[' + arrayCheck(path["adaptiveAD"]) + ' Attack Damage]');
              };
              if (path["allyAdaptiveBonusADRatio"]) {
                addText(' (+' + arrayCheck(path["allyAdaptiveBonusADRatio"]) + ' Ally Bonus AD Ratio)');
              };
              if (path["adaptiveAP"]) {
                addText(' OR [' + arrayCheck(path["adaptiveAP"]) + ' Ability Power]');
              };
              if (path["allyAdaptiveAPRatio"]) {
                addText(' (+' + arrayCheck(path["allyAdaptiveAPRatio"]) + ' Ally AP Ratio)');
              };
              doubleBreak();
            };

            if (champFile[ability]["bonusResist"]) {
              var path = champFile[ability]["bonusResist"];
              if (!path['bonusResistRatio']) {
                addBold('Bonus Armor & Magic Resist: ');
              } else {
                addBold('Bonus Armor: ');
              };
              var resCount = 0;
              if (path["resist"]) {
                resCount += arrayCheck(path["resist"]);
              };
              if (path["bonusResistByLvl"]) {
                resCount += path["bonusResistByLvl"][champLevel];
              };
              if (path["minResistByLvl"]) {
                underLine('Min');
                addText(path["minResistByLvl"][champLevel]);
                singleBreak();
                underLine('Max');
                addText(path["maxResistByLvl"][champLevel]);
              };
              if (path["bonusResistRatio"]) {
                addText(Math.round(resCount + path["bonusResistRatio"] * bonusArmor));
                singleBreak();
                addBold('Bonus Magic Resist: ');
                addText(Math.round(resCount + path["bonusResistRatio"] * bonusMR));
              };
              if (resCount !== 0 && !path["bonusResistRatio"]) {
                addText(Math.round(resCount));
              };
              if (path["minResist"]) {
                underLine('Min');
                addText(arrayCheck(path["minResist"]));
                singleBreak();
                underLine('Max');
                addText(arrayCheck(path["maxResist"]));
              };
              if (path["duration"]) {
                singleBreak();
                underLine('Duration');
                addText(arrayCheck(path["duration"]));
              };
              doubleBreak();
            };

            if (champFile[ability]["bonusArmorPenOnCrit"]) {
              var penPath = champFile[ability]["bonusArmorPenOnCrit"];
              addBold('Bonus-Armor Pen Ratio on Crits: ');
              addText(arrayCheck(penPath["penRatio"]));
              singleBreak();
              underLine('Duration');
              addText(arrayCheck(penPath["duration"]));
              doubleBreak();
            };

            if (champFile[ability]["bonusArmor"]) {
              var path = champFile[ability]["bonusArmor"];
              addBold('Bonus Armor: ');
              var armorCounter = 0;
              if (path["armor"]) {
                armorCounter += arrayCheck(path["armor"]);
              };
              if (path["armorRatio"]) {
                armorCounter += arrayCheck(path["armorRatio"]) * totalArmor;
              };
              if (path["bonusArmorRatio"]) {
                armorCounter += arrayCheck(path["bonusArmorRatio"]) * bonusArmor;
              };
              if (path["bonusADRatio"]) {
                armorCounter += arrayCheck(path["bonusADRatio"]) * bonusAD;
              };
              if (armorCounter !== 0) {
                addText(Math.round(armorCounter));
              };
              if (path["system"] === 'minMax') {
                underLine('Min');
                if (path["minArmor"]) {
                  addText(arrayCheck(path["minArmor"]));
                };
                singleBreak();
                underLine('Max');
                if (path["maxArmor"]) {
                  addText(arrayCheck(path["maxArmor"]));
                };
              };
              doubleBreak();
            };

            if (champFile[ability]["allyBonusArmor"]) {
              var path = champFile[ability]["allyBonusArmor"];
              addBold('Ally Bonus Armor: ');
              var armorCounter = 0;
              if (path["armor"]) {
                armorCounter += arrayCheck(path["armor"]);
              };
              if (path["armorRatio"]) {
                armorCounter += arrayCheck(path["armorRatio"]) * totalArmor;
              };
              if (path["bonusArmorRatio"]) {
                armorCounter += arrayCheck(path["bonusArmorRatio"]) * bonusArmor;
              };
              if (armorCounter !== 0) {
                addText(Math.round(armorCounter));
              };
              doubleBreak();
            };

            if (champFile[ability]["bonusMagicResist"]) {
              var path = champFile[ability]["bonusMagicResist"];
              addBold('Bonus Magic Resist: ');
              var mrCounter = 0;
              if (path["magicResist"]) {
                mrCounter += arrayCheck(path["magicResist"]);
              };
              if (path["magicResistRatio"]) {
                mrCounter += arrayCheck(path["magicResistRatio"]) * totalMR;
              };
              if (path["bonusMagicResistRatio"]) {
                mrCounter += arrayCheck(path["bonusMagicResistRatio"]) * bonusMR;
              };
              if (path["APRatio"]) {
                mrCounter += arrayCheck(path["APRatio"]) * totalAP;
              };
              addText(Math.round(mrCounter));
              doubleBreak();
            };

            if (champFile[ability]["allyBonusMagicResist"]) {
              var path = champFile[ability]["allyBonusMagicResist"];
              addBold('Ally Bonus Magic Resist: ');
              var mrCounter = 0;
              if (path["magicResist"]) {
                mrCounter += arrayCheck(path["magicResist"]);
              };
              if (path["magicResistRatio"]) {
                mrCounter += arrayCheck(path["magicResistRatio"]) * totalMR;
              };
              if (path["bonusMagicResistRatio"]) {
                mrCounter += arrayCheck(path["bonusMagicResistRatio"]) * bonusMR;
              };
              addText(Math.round(mrCounter));
              doubleBreak();
            };

            if (champFile[ability]["bonusAttackSpeed"]) {
              var ASPath = champFile[ability]["bonusAttackSpeed"];
              addBold('Bonus Attacks per Second: ');
              var asRatioCounter = 0;
              var totalASRatioCounter = 0;
              if (ASPath['attackSpeed']) {
                asRatioCounter += arrayCheck(ASPath['attackSpeed']);
              };
              if (ASPath["totalAttackSpeed"]) {
                totalASRatioCounter += arrayCheck(ASPath["totalAttackSpeed"]);
              };
              if (ASPath["attackSpeedByLvl"]) {
                asRatioCounter += ASPath["attackSpeedByLvl"][champLevel];
              };
              if (ASPath["attackSpeedByRRank"]) {
                asRatioCounter += ASPath['attackSpeedByRRank'][RRank];
              };
              if (asRatioCounter !== 0) {
                addText((asRatioCounter * statsPath["asRatio"]).toFixed(3));
              };
              if (totalASRatioCounter !== 0) {
                addText(totalAS * totalASRatioCounter * statsPath["asRatio"]).toFixed(3);
              };
              if (ASPath["attackSpeedPerStack"]) {
                addText(' (+' + (ASPath["attackSpeedPerStack"] * statsPath["asRatio"]).toFixed(3) + ' per stack)');
              };
              var minCounter = 0;
              var maxCounter = 0;
              if (ASPath['minAttackSpeed']) {
                underLine('Min')
                minCounter += arrayCheck(ASPath['minAttackSpeed']);
                if (ASPath["minBonusAttackSpeedRatio"]) {
                  minCounter += (arrayCheck(ASPath["minBonusAttackSpeedRatio"]) * bonusAS).toFixed(3);
                };
                if (ASPath["minAttackSpeedPer100AP"]) {
                  minCounter += arrayCheck(ASPath["minAttackSpeedPer100AP"]) * totalAP/100;
                };
                addText((minCounter * statsPath["asRatio"]).toFixed(3));
                singleBreak();
                underLine('Max');
                maxCounter += arrayCheck(ASPath['maxAttackSpeed']);
                if (ASPath["maxBonusAttackSpeedRatio"]) {
                  maxCounter += arrayCheck(ASPath["maxBonusAttackSpeedRatio"]) * bonusAS;
                };
                if (ASPath["maxAttackSpeedPer100AP"]) {
                  maxCounter += arrayCheck(ASPath["maxAttackSpeedPer100AP"]) * totalAP/100;
                };
                addText((maxCounter * statsPath["asRatio"]).toFixed(3));
              };
              if (ASPath["minAttackSpeedByLvl"]) {
                underLine('Min');
                addText((ASPath["minAttackSpeedByLvl"][champLevel] * statsPath["asRatio"]).toFixed(3));
                singleBreak();
                underLine('Max')
                if (ASPath["maxAttackSpeedByLvl"]) {
                  addText((ASPath["maxAttackSpeedByLvl"][champLevel] * statsPath["asRatio"]).toFixed(3));
                }
              };
              if (ASPath["duration"]) {
                singleBreak();
                underLine('Duration');
                addText(arrayCheck(ASPath["duration"]));
              };
              if (ASPath["minDuration"]) {
                singleBreak();
                underLine('Min Duration');
                addText(arrayCheck(ASPath["minDuration"]));
                if (ASPath['maxDuration']) {
                  underLine(', Max Duration');
                  addText(arrayCheck(ASPath["maxDuration"]));
                }
              };
              if (ASPath["durationAutos"]) {
                addText(' for ' + ASPath["durationAutos"] + ' attacks.');
              };
              doubleBreak();
            };

            if (champFile[ability]["bonusOmniVamp"]) {
              var path = champFile[ability]["bonusOmniVamp"];
              addBold('Bonus Omnivamp Ratio: ');
              if (path['vamp']) {
                addText(arrayCheck(path['vamp']));
              };
              if (path["duration"]) {
                singleBreak();
                underLine('Duration');
                addText(arrayCheck(path["duration"]));
              };
              doubleBreak();
            };

            if (champFile[ability]["bonusMoveSpeed"]) {
              var msPath = champFile[ability]["bonusMoveSpeed"];
              addBold('Bonus Movement Speed: ');
              if (msPath["minBonusMSRatio"]) {
                underLine('Min Ratio');
                addText(arrayCheck(msPath["minBonusMSRatio"]));
              };
              if (msPath["maxBonusMSRatio"]) {
                singleBreak();
                underLine('Max Ratio');
                addText(arrayCheck(msPath["maxBonusMSRatio"]));
              };
              if (msPath["duration"]) {
                singleBreak();
                underLine("Duration");
                addText(arrayCheck(msPath["duration"]));
              };
              doubleBreak();
            };

            if (champFile[ability]["cripple"]) {
              var path = champFile[ability]["cripple"];
              addBold('Attack Speed Cripple: ');
              if (path["attackSpeed"]) {
                addText(arrayCheck(path["attackSpeed"]));
              };
              if (path["minAttackSpeed"]) {
                underLine('Min');
                addText(arrayCheck(path["minAttackSpeed"]));
                singleBreak();
                underLine('Max');
                addText(arrayCheck(path["maxAttackSpeed"]));
              };
              if (path["duration"]) {
                singleBreak();
                underLine('Duration');
                addText(arrayCheck(path["duration"]));
              };
              doubleBreak();
            };

            if (champFile[ability]["petStats"]) {
              var path = champFile[ability]["petStats"];
              addBold('Pet Stats: ');
              if (path["auto"]) {
                underLine('Basic Attack');
                addText(path["auto"]["type"] + ' Damage: ');
                var autoCounter = 0;
                if (path["auto"]["dmg"]) {
                  autoCounter += arrayCheck(path["auto"]["dmg"]);
                };
                if (path['auto']['dmgByLvl']) {
                  autoCounter += path["auto"]["dmgByLvl"][champLevel];
                };
                if (path["auto"]["APRatio"]) {
                  autoCounter += arrayCheck(path["auto"]["APRatio"]) * totalAP;
                };
                if (path["auto"]["ADRatio"]) {
                  autoCounter += arrayCheck(path["auto"]["ADRatio"]) * totalAD;
                };
                if (path["auto"]["bonusADRatio"]) {
                  autoCounter += arrayCheck(path["auto"]["bonusADRatio"]) * bonusAD;
                };
                if (path["auto"]["enemyMaxHPRatio"] && enemyStats.baseHP) {
                  autoCounter += arrayCheck(path["auto"]["enemyMaxHPRatio"]) * enemyTotalHP;
                };
                if (autoCounter !== 0) {
                  addText(factorRes(path["auto"]["type"], autoCounter));
                };
                if (path["auto"]["enemyMaxHPRatio"] && !enemyStats.baseHP) {
                  addText(' (+' + arrayCheck(path["auto"]["enemyMaxHPRatio"]) + ' Enemy Max HP Ratio)');
                };
                if (path["auto"]["system"] === 'minMax') {
                  var minCounter = 0;
                  var maxCounter = 0;
                  if (path["auto"]["minDmgByLvl"]) {
                    minCounter += path["auto"]["minDmgByLvl"][champLevel];
                  };
                  if (path["auto"]["minAPRatio"]) {
                    minCounter += arrayCheck(path["auto"]["minAPRatio"]) * totalAP;
                  };
                  addText('Min: ' + factorRes(path["auto"]["type"], minCounter));
                  singleBreak();
                  if (path["auto"]["maxDmgByLvl"]) {
                    maxCounter += path["auto"]["maxDmgByLvl"][champLevel]
                  };
                  if (path["auto"]["maxAPRatio"]) {
                    maxCounter += arrayCheck(path["auto"]["maxAPRatio"]) * totalAP;
                  };
                  addText('Max: ' + factorRes(path["auto"]["type"], maxCounter));
                }; 
                if (path["auto"]["multiHitDmgRatio"]) {
                  singleBreak();
                  underLine('Multi-Hit Damage Ratio');
                  addText(arrayCheck(path["auto"]["multiHitDmgRatio"]));
                }
              };
              if (path["attackSpeed"] || path["attackSpeedByLvl"] || path["minAttackSpeed"]) {
                singleBreak();
                underLine('Attack Speed');
              };
              var asCounter = 0;
              if (path["attackSpeed"]) {
                asCounter += arrayCheck(path["attackSpeed"]);
              };
              if (path["bonusAttackSpeed"]) {
                asCounter += arrayCheck(path["bonusAttackSpeed"]) * arrayCheck(path["attackSpeed"]);
              };
              if (path["attackSpeedByLvl"]) {
                asCounter += path["attackSpeedByLvl"][champLevel];
              };
              if (path["attackSpeedRatio"]) {
                asCounter += path["attackSpeedRatio"] * totalAS;
              };
              if (asCounter !== 0) {
                addText(asCounter.toFixed(3));
              };
              if (path["minAttackSpeed"]) {
                addText('Min: ' + arrayCheck(path["minAttackSpeed"]) + ', Max: ' + arrayCheck(path["maxAttackSpeed"]));
              };
              var hpCounter = 0;
              if (path["health"] || path["healthByLvl"] || path["maxHPRatio"] || path["healthRatio"]) {
                singleBreak();
                underLine('Health');
              };
              if (path["healthRatio"]) {
                hpCounter += arrayCheck(path["healthRatio"]) * totalHP;
              };
              if (path["health"]) {
                hpCounter += arrayCheck(path["health"]);
              };
              if (path["healthByLvl"]) {
                hpCounter += path["healthByLvl"][champLevel];
              };
              if (path["healthPerAPRatioByLvl"]) {
                hpCounter += path["healthPerAPRatioByLvl"][champLevel] * totalAP;
              };
              if (path["maxHPRatio"]) {
                hpCounter += arrayCheck(path["maxHPRatio"]) * totalHP; 
              };
              if (path["healthPerAPRatio"]) {
                hpCounter += arrayCheck(path["healthPerAPRatio"]) * totalAP;
              };
              if (hpCounter !== 0) {
                addText(Math.round(hpCounter));
              };
              if (path["armor"] || path["armorByLvl"] || path["armorRatio"]) {
                singleBreak();
                underLine('Armor');
              };
              var armorCounter = 0;
              if (path["armor"]) {
                armorCounter += arrayCheck(path["armor"]);
              };
              if (path["armorRatio"]) {
                armorCounter += arrayCheck(path["armorRatio"]) * totalArmor;
              };
              if (path["armorByLvl"]) {
                armorCounter += path["armorByLvl"][champLevel];
              };
              if (path["armorPerAPRatio"]) {
                armorCounter += arrayCheck(path["armorPerAPRatio"]) * totalAP;
              };
              if (armorCounter !== 0) {
                addText(Math.round(armorCounter));
              };
              if (path["magicResist"] || path["magicResistByLvl"] || path["magicResistRatio"]) {
                singleBreak();
                underLine('Magic Resist');
              };
              var mrCounter = 0;
              if (path["magicResist"]) {
                mrCounter += arrayCheck(path["magicResist"]);
              };
              if (path["magicResistRatio"]) {
                mrCounter += arrayCheck(path["magicResistRatio"]) * totalMR;
              };
              if (path["magicResistByLvl"]) {
                mrCounter += path["magicResistByLvl"][champLevel];
              };
              if (path["magicResistPerAPRatio"]) {
                mrCounter += arrayCheck(path["magicResistPerAPRatio"]) * totalAP;
              };
              if (mrCounter !== 0) {
                addText(Math.round(mrCounter));
              };
              if (path["interruptCC"]) {
                singleBreak();
                underLine('Crowd Control Duration');
                addText(arrayCheck(path["interruptCC"]));
              };
              doubleBreak();
            };

            if (champFile[ability]["empower"]) {
              var ePath = champFile[ability]["empower"];
              addBold('Empower');
              doubleBreak();
              if (ePath['Q']) {
                var qB = document.createElement('b');
                var qU = document.createElement('u');
                qB.appendChild(qU);
                qU.innerText = 'Q: ';
                abilityDiv.appendChild(qB);
                if (ePath['Q']["petStats"]) {
                  singleBreak();
                  var path = champFile[ability]["empower"]["Q"]["petStats"];
                  addBold('Pet Stats: ');
                  if (path["auto"]) {
                    underLine('Basic Attack');
                    addText(path["auto"]["type"] + ' Damage: ');
                    var autoCounter = 0;
                    if (path["auto"]["dmg"]) {
                      autoCounter += arrayCheck(path["auto"]["dmg"]);
                    };
                    if (path["auto"]["APRatio"]) {
                      autoCounter += arrayCheck(path["auto"]["APRatio"]) * totalAP;
                    };
                    addText(factorRes(path["auto"]["type"], autoCounter));
                  };
                  if (path["attackSpeed"]) {
                    singleBreak();
                    underLine('Attack Speed');
                    addText(arrayCheck(path["attackSpeed"]));
                  };
                  if (path["healthByLvl"]) {
                    singleBreak();
                    underLine('Health');
                    var hpCounter = 0;
                    hpCounter += path["healthByLvl"][champLevel];
                    if (path["healthPerAPRatioByLvl"]) {
                      hpCounter += path["healthPerAPRatioByLvl"][champLevel] * totalAP;
                    };
                    addText(Math.round(hpCounter));
                  };
                  if (path["armorByLvl"]) {
                    singleBreak();
                    underLine('Armor');
                    addText(path["armorByLvl"][champLevel]);
                  };
                  if (path["magicResistByLvl"]) {
                    singleBreak();
                    underLine('Magic Resist');
                    addText(path["magicResistByLvl"][champLevel])
                  };
                };
                if (ePath['Q']['damage']) {
                  singleBreak();
                  var damage = ePath['Q']["damage"];
                  if (damage["type"]) {
                    addBold(damage["type"] + " Damage: ")
                  };
                  var dmgCounter = 0;
                  if (damage["dmg"]) {
                    dmgCounter += arrayCheck(damage["dmg"]);
                  };
                  if (damage["APRatio"]) {
                    dmgCounter += arrayCheck(damage["APRatio"]) * totalAP;
                  };
                  if (dmgCounter !== 0) {
                    addText(factorRes(damage["type"], dmgCounter));
                  };
                  if (damage["system"] === 'minMax') {
                    underLine('Min');
                    var minCounter = 0;
                    var maxCounter = 0;
                    if (damage["minDmg"]) {
                      minCounter += arrayCheck(damage["minDmg"]);
                    };
                    if (damage["minAPRatio"]) {
                      minCounter += arrayCheck(damage["minAPRatio"]) * totalAP;
                    };
                    addText(factorRes(damage["type"], minCounter));
                    singleBreak();
                    underLine('Max');
                    if (damage["maxDmg"]) {
                      maxCounter += arrayCheck(damage["maxDmg"]);
                    };
                    if (damage["maxAPRatio"]) {
                      maxCounter += arrayCheck(damage["maxAPRatio"]) * totalAP;
                    };
                    addText(factorRes(damage["type"], maxCounter));
                  }
                };
                if (ePath['Q']['bonusDamage']) {
                  singleBreak();
                  var damage = ePath['Q']["bonusDamage"];
                  if (damage["type"]) {
                    addBold('Bonus ' + damage["type"] + " Damage: ");
                  };
                  if (damage["system"] === 'minMax') {
                    underLine('Min');
                    var minCounter = 0;
                    var maxCounter = 0;
                    if (damage["minDmg"]) {
                      minCounter += arrayCheck(damage["minDmg"]);
                    };
                    if (damage["minAPRatio"]) {
                      minCounter += arrayCheck(damage["minAPRatio"]) * totalAP;
                    };
                    addText(factorRes(damage["type"], minCounter));
                    singleBreak();
                    underLine('Max');
                    if (damage["maxDmg"]) {
                      maxCounter += arrayCheck(damage["maxDmg"]);
                    };
                    if (damage["maxAPRatio"]) {
                      maxCounter += arrayCheck(damage["maxAPRatio"]) * totalAP;
                    };
                    addText(factorRes(damage["type"], maxCounter));
                  }
                };
                doubleBreak();
              };
              if (ePath['W']) {
                var wB = document.createElement('b');
                var wU = document.createElement('u');
                wB.appendChild(wU);
                wU.innerText = 'W: ';
                abilityDiv.appendChild(wB);
                if (ePath['W']['damage']) {
                  singleBreak();
                  var damage = ePath['W']["damage"]
                  if (damage["type"]) {
                    addBold(damage["type"] + " Damage: ");
                  };
                  var dmgCounter = 0;
                  if (damage["dmg"]) {
                    dmgCounter += arrayCheck(damage["dmg"]);
                  };
                  if (damage["APRatio"]) {
                    dmgCounter += arrayCheck(damage["APRatio"]) * totalAP;
                  };
                  if (dmgCounter !== 0) {
                    addText(factorRes(damage["type"], dmgCounter));
                  };
                  if (damage["system"] === 'minMax') {
                    underLine('Min');
                    var minCounter = 0;
                    var maxCounter = 0;
                    if (damage["minDmg"]) {
                      minCounter += arrayCheck(damage["minDmg"]);
                    };
                    if (damage["minAPRatio"]) {
                      minCounter += arrayCheck(damage["minAPRatio"]) * totalAP;
                    };
                    addText(factorRes(damage["type"], minCounter));
                    singleBreak();
                    underLine('Max');
                    if (damage["maxDmg"]) {
                      maxCounter += arrayCheck(damage["maxDmg"]);
                    };
                    if (damage["maxAPRatio"]) {
                      maxCounter += arrayCheck(damage["maxAPRatio"]) * totalAP;
                    }
                    addText(factorRes(damage["type"], maxCounter));
                  }
                };
                if (ePath['W']['heal']) {
                  singleBreak();
                  var path = ePath['W']['heal'];
                  addBold('Heal: ');
                  if (path['system'] === 'minMax') {
                    underLine('Min');
                    var minMissCounter = 0;
                    var maxMissCounter = 0;
                    if (path["minMissingHPRatio"]) {
                      minMissCounter += arrayCheck(path["minMissingHPRatio"]);
                    };
                    if (path["minMissingHPRatioPer100AP"]) {
                      minMissCounter += arrayCheck(path["minMissingHPRatioPer100AP"]) * totalAP/100;
                    };
                    addText(lengthCheck(minMissCounter) + ' Missing HP Ratio');
                    singleBreak();
                    underLine('Max');
                    if (path["maxMissingHPRatio"]) {
                      maxMissCounter += arrayCheck(path["maxMissingHPRatio"]);
                    };
                    if (path["maxMissingHPRatioPer100AP"]) {
                      maxMissCounter += arrayCheck(path["maxMissingHPRatioPer100AP"]) * totalAP/100;
                    };
                    addText(lengthCheck(maxMissCounter) + ' Missing HP Ratio');
                  }
                };
                doubleBreak();
              };
              if (ePath['E']) {
                var eB = document.createElement('b');
                var eU = document.createElement('u');
                eB.appendChild(eU);
                eU.innerText = 'E: ';
                abilityDiv.appendChild(eB);
                if (ePath['E']['damage']) {
                  singleBreak();
                  var damage = ePath['E']["damage"];
                  if (damage["type"]) {
                    addBold(damage["type"] + " Damage: ")
                  };
                  var dmgCounter = 0;
                  if (damage["dmg"]) {
                    dmgCounter += arrayCheck(damage["dmg"]);
                  };
                  if (damage["APRatio"]) {
                    dmgCounter += arrayCheck(damage["APRatio"]) * totalAP;
                  };
                  if (dmgCounter !== 0) {
                    addText(factorRes(damage["type"], dmgCounter));
                  };
                  if (damage["system"] === '2Part') {
                    underLine('Part 1');
                    var p1Counter = 0;
                    var p2Counter = 0;
                    if (damage["part1"]["dmg"]) {
                      p1Counter += arrayCheck(damage["part1"]["dmg"]);
                    };
                    if (damage["part1"]["APRatio"]) {
                      p1Counter += arrayCheck(damage["part1"]["APRatio"]) * totalAP;
                    };
                    addText(factorRes(damage["type"], p1Counter));
                    singleBreak();
                    underLine('Part 2');
                    if (damage["part2"]["dmg"]) {
                      p2Counter += arrayCheck(damage["part2"]["dmg"]);
                    };
                    if (damage["part2"]["APRatio"]) {
                      p2Counter += arrayCheck(damage["part2"]["APRatio"]) * totalAP;
                    };
                    addText(factorRes(damage["type"], p2Counter));
                  }
                };
                if (ePath['E']['bonusShield']) {
                  singleBreak();
                  var shield = ePath['E']["bonusShield"];
                  addBold('Bonus Shield: ');
                  var shieldCounter = 0;
                  if (shield["shield"]) {
                    shieldCounter += arrayCheck(shield["shield"]);
                  };
                  if (shield["APRatio"]) {
                    shieldCounter += arrayCheck(shield["APRatio"]) * totalAP;
                  };
                  addText(Math.round(shieldCounter));
                  if (shield["nonTargetRatio"]) {
                    singleBreak();
                    underLine('Non-Target Shield: ');
                    addText(Math.round(shield["nonTargetRatio"] * shieldCounter));
                  }
                };
                doubleBreak();
              }
            };

            if (champFile[ability]['statSteal']) {
              var path = champFile[ability]['statSteal'];
              addBold('Stat Steal: ');
              addText(path['statType']);
              if (path['ratio']) {
                singleBreak();
                underLine('Ratio');
                addText(arrayCheck(path['ratio']));
              };
              if (path['gained']) {
                singleBreak();
                underLine('Gain');
                addText(arrayCheck(path['gained']));
                singleBreak();
                underLine('Remove');
                addText(arrayCheck(path['removed']));
              };
              if (path['minByLvl']) {
                singleBreak();
                underLine('Min');
                addText(path['minByLvl'][champLevel]);
              };
              if (path['duration']) {
                singleBreak();
                underLine('Duration');
                addText(arrayCheck(path['duration']));
              };
              doubleBreak();
            };

            if (champFile[ability]["duration"]) {
              addBold("Duration: ");
              addText(arrayCheck(champFile[ability]["duration"]));
              doubleBreak();
            };

            if (champFile[ability]["minDuration"]) {
              addBold("Duration: ");
              addText('Min: ' + arrayCheck(champFile[ability]["minDuration"]) 
              + ', Max: ' + arrayCheck(champFile[ability]["maxDuration"]));
              doubleBreak();
            };

            if (champFile[ability]["maxDuration"] && !champFile[ability]["minDuration"]) {
              addBold("Max Duration: ");
              addText(arrayCheck(champFile[ability]["maxDuration"]));
              doubleBreak();
            };

            if (champFile[ability]["coolDown"]) {
              addGrey("Cooldown: ");
              addText(hasteRatio === 1 ? arrayCheck(champFile[ability]["coolDown"])
               : (arrayCheck(champFile[ability]["coolDown"])*hasteRatio).toFixed(1));
            };
            if (champFile[ability]["minCoolDown"] && !champFile[ability]["staticCoolDownFormula"]) {
              addGrey("Cooldown: ");
              addText('Max: ' + hasteRatio === 1 ? arrayCheck(champFile[ability]["maxCoolDown"])
              : (arrayCheck(champFile[ability]["maxCoolDown"])*hasteRatio).toFixed(1)
              + ', Min: ' + hasteRatio === 1 ? arrayCheck(champFile[ability]["minCoolDown"])
              : (arrayCheck(champFile[ability]["minCoolDown"])*hasteRatio).toFixed(1));
            };
            if (champFile[ability]["maxCoolDown"] && !champFile[ability]["minCoolDown"]) {
              addBold("Max Cooldown: ");
              addText(hasteRatio === 1 ? arrayCheck(champFile[ability]["maxCoolDown"])
              : (arrayCheck(champFile[ability]["maxCoolDown"])*hasteRatio).toFixed(1));
            };
            if (champFile[ability]["coolDownByLvl"]) {
              addGrey("Cooldown: ");
              addText(hasteRatio === 1 ? champFile[ability]["coolDownByLvl"][champLevel] 
              : (champFile[ability]["coolDownByLvl"][champLevel]*hasteRatio).toFixed(1))
            };
            if (champFile[ability]["combatCoolDown"]) {
              addBold("Combat Cooldown: ");
              addText(arrayCheck(champFile[ability]["combatCoolDown"]));
            };
            if (champFile[ability]["staticCoolDown"]) {
              if (champFile[ability]["coolDown"]) {
                singleBreak();
              };
              addBold("Static Cooldown: ");
              addText(arrayCheck(champFile[ability]["staticCoolDown"]));
            };
            if (champFile[ability]["staticCoolDownByLvl"]) {
              addBold("Static Cooldown: ");
              addText(champFile[ability]["staticCoolDownByLvl"][champLevel]);
            };
            if (champFile[ability]["autoCoolDown"]) {
              addGrey("Cooldown Number of Basic Attacks: ");
              addText(champFile[ability]["autoCoolDown"]);
            };
            if (champFile[ability]["coolDownRefund"]) {
              if (champFile[ability]["coolDownByLvl"] || champFile[ability]["coolDown"] 
              || champFile[ability]["staticCoolDownByLvl"] || champFile[ability]["staticCoolDown"]) {
                singleBreak();
              };
              underLine('Cooldown Refund');
              addText(arrayCheck(champFile[ability]["coolDownRefund"]));
            };
            if (champFile[ability]["allCDRefund"]) {
              if (champFile[ability]["coolDown"]) {
                singleBreak();
              };
              underLine('All Abilities Cooldown Refund');
              addText(arrayCheck(champFile[ability]["allCDRefund"]));
            };
            if (champFile[ability]["basicCDMaxRefundRatioPerStack"]) {
              singleBreak();
              underLine('Basic Abilities Max Cooldown Refund Ratio');
              addText(champFile[ability]["basicCDMaxRefundRatioPerStack"] + ' per stack');
            };
            if (champFile[ability]["coolDownRefundByLvl"]) {
              singleBreak();
              underLine('Cooldown Refund');
              addText(champFile[ability]["coolDownRefundByLvl"][champLevel]);
            };
            if (champFile[ability]["minCoolDownRefund"]) {
              singleBreak();
              underLine('Cooldown Refund');
              addText('Min: ' + champFile[ability]["minCoolDownRefund"]
              + ', Max: ' + champFile[ability]["maxCoolDownRefund"]);
            };
            if (champFile[ability]["minCoolDownRefundByLvl"]) {
              singleBreak();
              underLine('Min Cooldown Refund');
              addText(champFile[ability]["minCoolDownRefundByLvl"][champLevel]);
            };
            if (champFile[ability]["maxCoolDownRefundByLvl"]) {
              singleBreak();
              underLine('Max Cooldown Refund')
              addText(champFile[ability]["maxCoolDownRefundByLvl"][champLevel])
            };
            if (champFile[ability]["coolDownRefundRatio"]) {
              singleBreak();
              underLine('Cooldown Refund Ratio');
              addText(arrayCheck(champFile[ability]["coolDownRefundRatio"]));
            };
            if (champFile[ability]["coolDownRefundRatioByLvl"]) {
              singleBreak();
              underLine('Cooldown Refund Ratio');
              addText(champFile[ability]["coolDownRefundRatioByLvl"][champLevel])
            };
            if (champFile[ability]["maxCoolDownRefundRatio"]) {
              singleBreak();
              underLine('Max Cooldown Refund Ratio');
              addText(champFile[ability]["maxCoolDownRefundRatio"]);
            };
            if (champFile[ability]["recharge"]) {
              if (champFile[ability]["coolDown"] || champFile[ability]["staticCoolDown"]) {
                singleBreak();
              };
              addBold("Recharge: ");
              addText(hasteRatio === 1 ? arrayCheck(champFile[ability]["recharge"]) 
              : (arrayCheck(champFile[ability]["recharge"])*hasteRatio).toFixed(1));
            };
            if (champFile[ability]["staticCoolDownFormula"]) {
              addGrey("Cooldown: ");
              var value = 4 * (1 - (0.6 * (itemStats.as + statsPath["asPerLvl"] * champLevel 
              * (0.7025 + 0.0175 * champLevel))));
              if (value.toString().length > 4) {
                value = value.toFixed(2);
              };
              addText(value);
            };

            if (champFile[ability]["Rhaast"]) {
              var path = champFile[ability]["Rhaast"];
              var hr = document.createElement('hr');
              abilityDiv.appendChild(hr);
              var p = document.createElement('p');
              p.innerText = 'Rhaast';
              abilityDiv.appendChild(p);
              var hr2 = document.createElement('hr');
              abilityDiv.appendChild(hr2);
              if (path["damage"]) {
                underLine(path["damage"]["type"] + ' Damage');
                var dmgCounter = 0;
                var enemyMaxHPCounter = 0;
                if (path["damage"]["enemyMaxHPRatio"] && enemyStats.baseHP){
                  dmgCounter += arrayCheck(path["damage"]["enemyMaxHPRatio"]) * enemyTotalHP;
                };
                if (path["damage"]["enemyMaxHPRatioPer100BonusAD"] && enemyStats.baseHP) {
                  dmgCounter += path["damage"]["enemyMaxHPRatioPer100BonusAD"] * enemyTotalHP * bonusAD/100;
                };
                if (dmgCounter !== 0) {
                  addText(factorRes(path["damage"]["type"], dmgCounter));
                };
                if (path["damage"]["enemyMaxHPRatio"] && !enemyStats.baseHP){
                  enemyMaxHPCounter += arrayCheck(path["damage"]["enemyMaxHPRatio"]);
                };
                if (path["damage"]["enemyMaxHPRatioPer100BonusAD"] && !enemyStats.baseHP) {
                  enemyMaxHPCounter += arrayCheck(path["damage"]["enemyMaxHPRatioPer100BonusAD"]) * bonusAD/100;
                };
                if (enemyMaxHPCounter !== 0) {
                  addText(lengthCheck(enemyMaxHPCounter) + ' Enemy Max HP Ratio');
                };
                if (path["damage"]["system"] === 'minMax') {
                  addText('Min: ');
                  var minCounter = 0;
                  var minHPCounter = 0;
                  if (path["damage"]["minADRatio"]) {
                    minCounter += arrayCheck(path["damage"]["minADRatio"]) * totalAD;
                  };
                  if (path["damage"]["minEnemyMaxHPRatio"] && enemyStats.baseHP) {
                    minCounter += arrayCheck(path["damage"]["minEnemyMaxHPRatio"]) * enemyTotalHP;
                  };
                  if (path["damage"]["minEnemyMaxHPRatioPer100BonusAD"] && enemyStats.baseHP) {
                    minCounter += arrayCheck(path["damage"]["minEnemyMaxHPRatioPer100BonusAD"]) 
                    * enemyTotalHP * bonusAD/100;
                  };
                  if (minCounter !== 0) {
                    addText(factorRes(path["damage"]["type"], minCounter));
                  };
                  if (path["damage"]["minEnemyMaxHPRatio"] && !enemyStats.baseHP) {
                    minHPCounter += arrayCheck(path["damage"]["minEnemyMaxHPRatio"]);
                  };
                  if (path["damage"]["minEnemyMaxHPRatioPer100BonusAD"] && !enemyStats.baseHP) {
                    minHPCounter += arrayCheck(path["damage"]["minEnemyMaxHPRatioPer100BonusAD"]) * bonusAD/100;
                  };
                  if (minHPCounter !== 0) {
                    addText(' (+' + lengthCheck(minHPCounter) + ' Enemy Max HP Ratio)');
                  };
                  singleBreak();
                  addText('Max: ');
                  if (minCounter !== 0) {
                    addText(factorRes(path["damage"]["type"], minCounter * 2));
                  };
                  if (minHPCounter !== 0) {
                    addText(' (+' + lengthCheck(minHPCounter * 2) + ' Enemy Max HP Ratio)');
                  }
                } 
              };
              if (path["heal"]) {
                singleBreak();
                underLine('Heal');
                var healCounter = 0;
                var maxHPCounter = 0;
                if (path["heal"]["enemyMaxHPRatio"] && enemyStats.baseHP){
                  healCounter += arrayCheck(path["heal"]["enemyMaxHPRatio"]) * enemyTotalHP;
                };
                if (path["heal"]["enemyMaxHPRatioPer100BonusAD"] && enemyStats.baseHP){
                  healCounter += arrayCheck(path["heal"]["enemyMaxHPRatio"]) * enemyTotalHP * bonusAD/100;
                };
                if (healCounter !== 0) {
                  addText(Math.round(healCounter));
                };
                if (path["heal"]["enemyMaxHPRatio"] && !enemyStats.baseHP){
                  maxHPCounter += arrayCheck(path["heal"]["enemyMaxHPRatio"]);
                };
                if (path["heal"]["enemyMaxHPRatioPer100BonusAD"] && !enemyStats.baseHP){
                  maxHPCounter += arrayCheck(path["heal"]["enemyMaxHPRatio"]) * bonusAD/100;
                };
                if (maxHPCounter !== 0) {
                  addText(lengthCheck(maxHPCounter) + ' Enemy Max HP Ratio');
                } 
              };
              if (path["interruptCC"]) {
                underLine('Crowd Control Duration');
                addText(arrayCheck(path["interruptCC"]));
              }
            };

            if (champFile[ability]["Shadow"]) {
              var path = champFile[ability]["Shadow"];
              var hr = document.createElement('hr');
              abilityDiv.appendChild(hr);
              var p = document.createElement('p');
              p.innerText = 'Shadow';
              abilityDiv.appendChild(p);
              var hr2 = document.createElement('hr');
              abilityDiv.appendChild(hr2);
              if (path["coolDown"]) {
                addGrey('Cooldown: ');
                addText(hasteRatio === 1 ? arrayCheck(path["coolDown"]) 
                : (arrayCheck(path["coolDown"])*hasteRatio).toFixed(1));
              }
            }
          };

        } else {

          addText("No combat stats for this ability.");

        } if (champFile[this.transformAbilities[i]]) {
          var tfAbility = this.transformAbilities[i];
          var hr = document.createElement('hr');
          abilityDiv.appendChild(hr);
          console.log(champName)
          if (ability !== 'passive') {
            var p = document.createElement('p');
            p.innerText = this.tfChampPair[champName] + ability;
            abilityDiv.appendChild(p);
          } else {
            var p = document.createElement('p');
            p.innerText = this.tfChampPair[champName] + 'Passive';
            abilityDiv.appendChild(p);
          };
          var hr2 = document.createElement('hr');
          abilityDiv.appendChild(hr2);

          if (ability === 'passive' || document.getElementById(`${ability}Rank${side}`).value == 0) {

            if (champFile[tfAbility]["remountHPRatioByLvl"]) {
              var path = champFile[tfAbility]["remountHPRatioByLvl"];
              addBold('Remount HP Ratio: ');
              addText('(' + path[0] + ' to ' + path[17] + ', based on level. Currently: ' + path[champLevel] + ')');
            };

            if (champFile[tfAbility]['autoEmpower']) {
              var path = champFile[tfAbility]['autoEmpower']['damage'];
              addBold('Empowered Basic Attack: ');
              underLine(path['type'] + ' Damage');
              if (path['dmgByRRank']) {
                removeSpace(path["dmgByRRank"]);
                addText(' (based on R rank)');
              };
              if (path['APRatio']) {
                addText(" (+" + path["APRatio"]);
                colorAP(' AP');
                addText("ratio)");
              };
              if (path['system'] === 'minMax') {
                addText('Min: ');
                if (path['minDmgByRRank']) {
                  removeSpace(path['minDmgByRRank']);
                };
                if (path['minADRatio']) {
                  addText(" (+" + removeParen(path['minADRatio']));
                  colorAD(' AD');
                  addText("ratio)");
                };
                if (path['minAPRatio']) {
                  addText(" (+" + removeParen(path['minAPRatio']));
                  colorAP(' AP');
                  addText("ratio)");
                };
                singleBreak();
                addText('Max: ');
                if (path['maxDmgByRRank']) {
                  removeSpace(path['maxDmgByRRank']);
                };
                if (path['maxADRatioByRRank']) {
                  addText(" (+" + removeParen(path['maxADRatioByRRank']));
                  colorAD(' AD');
                  addText("ratio)");
                };
                if (path['maxAPRatioByRRank']) {
                  addText(" (+" + removeParen(path['maxAPRatioByRRank']));
                  colorAP(' AP');
                  addText("ratio)");
                };
              };
              if (path['dmgRatioPerMissingHPByRRank']) {
                singleBreak();
                underLine('Bonus Damage Ratio');
                addText('(' + removeParen(path['dmgRatioPerMissingHPByRRank']) + ' per');
                colorHP(' Enemy Missing HP');
                addText("ratio)");
              };
              if (ability === 'passive') {
                singleBreak();
                underLine('Current Value');
                var dmgCounter = 0;
                if (path['dmgByRRank']) {
                  dmgCounter += path["dmgByRRank"][RRank];
                };
                if (path['APRatio']) {
                  dmgCounter += arrayCheck(path['APRatio']) * totalAP;
                };
                if (champFile['ETransform']["passiveTransformBonus"] && document.getElementById(`ERank${side}`).value > 0) {
                  dmgCounter *= (1 + champFile['ETransform']["passiveTransformBonus"]['bonus'][ERank]);
                };
                addText(Math.round(dmgCounter));
              };
              if (champFile[tfAbility]['autoEmpower']['heal']) {
                var path = champFile[tfAbility]['autoEmpower']['heal'];
                doubleBreak();
                underLine('Heal');
                if (path['healByRRank']) {
                  removeSpace(path["healByRRank"]);
                  addText(' (based on R rank)');
                };
                if (path['APRatio']) {
                  addText(' (+' + path['APRatio']);
                  colorAP(' AP');
                  addText("ratio)");
                };
                singleBreak();
                underLine('Current Value');
                var healCounter = 0;
                if (path['healByRRank']) {
                  healCounter += path["healByRRank"][RRank];
                };
                if (path['APRatio']) {
                  healCounter += arrayCheck(path['APRatio']) * totalAP;
                };
                if (champFile['ETransform']["passiveTransformBonus"] && document.getElementById(`ERank${side}`).value > 0) {
                  healCounter *= (1 + champFile['ETransform']["passiveTransformBonus"]['bonus'][ERank]);
                };
                addText(Math.round(healCounter));
              }
              doubleBreak();
            };

            if (champFile[tfAbility]['damage']) {
              var path = champFile[tfAbility]['damage'];
              addBold(path['type'] + ' Damage: ');
              if (path['dmg']) {
                removeSpace(path['dmg']);
              };
              if (path['dmgByRRank']) {
                removeSpace(path["dmgByRRank"]);
              };
              if (path['ADRatio']) {
                addText(' (+' + path['ADRatio']);
                colorAD(' AD');
                addText("ratio)");
              };
              if (path['bonusADRatio']) {
                addText(' (+' + path['bonusADRatio']);
                colorAD(' Bonus AD');
                addText("ratio)");
              };
              if (path['APRatio']) {
                addText(' (+' + removeParen(path['APRatio']));
                colorAP(' AP');
                addText("ratio)");
              };
              if (path['maxHPRatio']) {
                addText(' (+' + path['maxHPRatio']);
                colorHP(' Max HP');
                addText("ratio)");
              };
              if (path['enemyMaxHPRatio']) {
                addText(' (+' + removeParen(path['enemyMaxHPRatio']));
                colorHP(' Enemy Max HP');
                addText("ratio)");
              };
              if (path['enemyMissingHPRatio']) {
                addText(' (+' + path['enemyMissingHPRatio']);
                colorHP(' Enemy Missing HP');
                addText("ratio)");
              };
              if (path['enemyMissingHPRatioPer100AP']) {
                addText(' (+' + path['enemyMissingHPRatioPer100AP']);
                colorHP(' Enemy Missing HP');
                addText("ratio per");
                colorAP(' 100 AP');
                addText(')');
              };

              if (path['system'] === 'minMax') {
                underLine('Min');
                if (path['minDmg']) {
                  removeSpace(path['minDmg']);
                };
                if (path['minBonusADRatio']) {
                  addText(' (+' + path['minBonusADRatio']);
                  colorAD(' Bonus AD');
                  addText("ratio)");
                };
                if (path['minAPRatio']) {
                  addText(' (+' + path['minAPRatio']);
                  colorAP(' AP');
                  addText("ratio)");
                };
                singleBreak();
                underLine('Max');
                if (path['maxDmg']) {
                 removeSpace(path['maxDmg']);
                };
                if (path['maxBonusADRatio']) {
                  addText(' (+' + path['maxBonusADRatio']);
                  colorAD(' Bonus AD');
                  addText("ratio)");
                };
                if (path['maxAPRatio']) {
                  addText(' (+' + path['maxAPRatio']);
                  colorAP(' AP');
                  addText("ratio)");
                };
              };
              doubleBreak();
            };

            if (champFile[tfAbility]["tickDamage"]) {
              var path = champFile[tfAbility]["tickDamage"];
              addBold(path['type'] + ' Damage Over Time: ');
              if (path['dmg']) {
                removeSpace(path['dmg']);
              };
              if (path['dmgByLvl']) {
                addText(path['dmgByLvl'][0] + ' to ' + path['dmgByLvl'][17] + ', based on lvl. Currently: '
                + path['dmgByLvl'][champLevel]);
              };
              if (path['APRatio']) {
                addText(' (+' + path['APRatio']);
                colorAP(' AP');
                addText("ratio)");
              };
              if (path['interval']) {
                addText(' per ' + path['interval'] + ' sec, for ' + multiplyTicks2(path['interval']) + ' seconds.');
                singleBreak();
                underLine('Total');
                if (path['dmg']) {
                  addText(mapSpace(multiplyTicks(path["dmg"])));
                };
                if (path['dmgByLvl']) {
                  addText(multiplyTicks(path['dmgByLvl'][champLevel]))
                };
                if (path['APRatio']) {
                  addText(' (+' + multiplyTicks2(path['APRatio']));
                  colorAP(' AP');
                  addText("ratio)");
                }
              };
              doubleBreak();
            };

            if (champFile[tfAbility]['bonusAttackSpeed']) {
              var path = champFile[tfAbility]['bonusAttackSpeed'];
              addBold('Bonus Attack Speed: ');
              if (path['attackSpeed']) {
                removeSpace(path['attackSpeed']);
              };
              if (path['duration']) {
                singleBreak();
                underLine('Duration');
                addText(path['duration']);
              };
              doubleBreak();
            };

            if (champFile[tfAbility]['resistRedux']) {
              var path = champFile[tfAbility]['resistRedux'];
              if (path['type'] === 'both') {
                addBold('Armor and Magic Resist Reduction: ');
              };
              if (path["reduxRatioByLvl"]) {
                underLine('Ratio');
                addText('[' + path["reduxRatioByLvl"][0] + ' to ' + path["reduxRatioByLvl"][17] 
                + '], based on lvl. Currently: ' + path["reduxRatioByLvl"][champLevel]);
              };
              if (path['duration']) {
                singleBreak();
                underLine('Duration');
                addText(path['duration']);
              };
              doubleBreak();
            };

            if (champFile[tfAbility]["passiveTransformBonus"]) {
              var path = champFile[tfAbility]["passiveTransformBonus"];
              addBold(`Passive's Auto Empower Increase Ratio: `);
              removeSpace(path['bonus']);
              singleBreak();
              underLine('Duration');
              addText(path['duration']);
              doubleBreak();
            };

            if (champFile[tfAbility]['interruptCC']) {
              addBold('Crowd Control Duration: ');
              removeSpace(champFile[tfAbility]['interruptCC']);
              doubleBreak();
            };

            if (champFile[tfAbility]['duration']) {
              addBold('Duration: ');
              addText(champFile[tfAbility]['duration']);
            };

            if (champFile[tfAbility]['coolDown']) {
              addGrey('Cooldown: ');
              removeSpace(champFile[tfAbility]['coolDown']);
            };

            if (champFile[tfAbility]["coolDownRefundRatio"]) {
              singleBreak();
              underLine('Cooldown Refund Ratio');
              removeSpace(champFile[tfAbility]["coolDownRefundRatio"]);
            };

            if (champFile[tfAbility]["reducedCoolDownByRRank"]) {
              singleBreak();
              underLine('Reduced Cooldown');
              removeSpace(champFile[tfAbility]["reducedCoolDownByRRank"]);
            };

            if (champFile[tfAbility]['rechargeByLvl']) {
              var path = champFile[tfAbility]['rechargeByLvl']
              singleBreak();
              underLine('Recharge');
              addText('[' + path[0] + ' to ' + path[17] + ', based on level. Currently: ' + path[champLevel] + ']');
            }
          };

          if (ability !== 'passive' && document.getElementById(`${ability}Rank${side}`).value > 0 ) {

            if (champFile[tfAbility]["remountHPRatioByLvl"]) {
              var path = champFile[tfAbility]["remountHPRatioByLvl"];
              addBold('Remount HP: ');
              addText(Math.round(path[champLevel] * totalHP));
            };

            if (champFile[tfAbility]['autoEmpower']) {
              var path = champFile[tfAbility]['autoEmpower']['damage'];
              addBold('Empowered Basic Attack: ');
              underLine(path['type'] + ' Damage');
              var empCounter = 0;
              if (path['dmgByRRank']) {
                empCounter += path["dmgByRRank"][RRank];
              };
              if (path['APRatio']) {
                empCounter += arrayCheck(path['APRatio']) * totalAP;
              };
              if (empCounter !== 0) {
                addText(factorRes(path['type'], empCounter));
              }
              if (path['system'] === 'minMax') {
                addText('Min: ');
                var minCount = 0;
                var maxCount = 0;
                if (path['minDmgByRRank']) {
                  minCount += path['minDmgByRRank'][RRank];
                };
                if (path['minADRatio']) {
                  minCount += arrayCheck(path['minADRatio']) * totalAD;
                };
                if (path['minAPRatio']) {
                  minCount += arrayCheck(path['minAPRatio']) * totalAP;
                };
                addText(factorRes(path['type'], minCount));
                singleBreak();
                addText('Max: ');
                if (path['maxDmgByRRank']) {
                  maxCount += path['maxDmgByRRank'][RRank];
                };
                if (path['maxADRatioByRRank']) {
                  maxCount += path['maxADRatioByRRank'][RRank] * totalAD;
                };
                if (path['maxAPRatioByRRank']) {
                  maxCount += path['maxAPRatioByRRank'][RRank] * totalAP;
                };
                addText(factorRes(path['type'], maxCount));
              };
              if (path['dmgRatioPerMissingHPByRRank']) {
                singleBreak();
                underLine('Bonus Damage Ratio');
                addText('(' + path['dmgRatioPerMissingHPByRRank'][RRank] + ' per');
                colorHP(' Enemy Missing HP');
                addText("ratio)");
              };
              if (champFile[tfAbility]['autoEmpower']['heal']) {
                var path = champFile[tfAbility]['autoEmpower']['heal'];
                doubleBreak();
                underLine('Heal');
                var healCount = 0;
                if (path['healByRRank']) {
                  healCount += path["healByRRank"][RRank];
                };
                if (path['APRatio']) {
                  healCount += arrayCheck(path['APRatio']) * totalAP;
                };
                addText(Math.round(healCount));
              }
              doubleBreak();
            };

            if (champFile[tfAbility]['damage']) {
              var path = champFile[tfAbility]['damage'];
              addBold(path['type'] + ' Damage: ');
              var dmgCount = 0;
              if (path['dmg']) {
                dmgCount += arrayCheck(path['dmg']);
              };
              if (path['dmgByRRank']) {
                dmgCount += path["dmgByRRank"][RRank];
              };
              if (path['ADRatio']) {
                dmgCount += arrayCheck(path['ADRatio']) * totalAD;
              };
              if (path['bonusADRatio']) {
                dmgCount += arrayCheck(path['bonusADRatio']) * bonusAD;
              };
              if (path['APRatio']) {
                dmgCount += arrayCheck(path['APRatio']) * totalAP;
              };
              if (path['maxHPRatio']) {
                dmgCount += arrayCheck(path['maxHPRatio']) * totalHP;
              };
              if (path['enemyMaxHPRatio'] && enemyStats.baseHP) {
                dmgCount += arrayCheck(path['enemyMaxHPRatio']) * enemyTotalHP;
              };
              if (dmgCount !== 0) {
                addText(factorRes(path['type'], dmgCount));
              };
              if (path['enemyMaxHPRatio'] && !enemyStats.baseHP) {
                addText(' (+' + arrayCheck(path['enemyMaxHPRatio']));
                colorHP(' Enemy Max HP');
                addText("ratio)");
              };
              var missCount = 0;
              if (path['enemyMissingHPRatio']) {
                missCount += arrayCheck(path['enemyMissingHPRatio']);
              };
              if (path['enemyMissingHPRatioPer100AP']) {
                missCount += arrayCheck(path['enemyMissingHPRatioPer100AP']);
              };
              if (missCount !== 0) {
                addText(' (+' + lengthCheck(missCount));
                colorHP(' Enemy Missing HP');
                addText("ratio)");
              };

              if (path['system'] === 'minMax') {
                underLine('Min');
                var minCount = 0;
                var maxCount = 0;
                if (path['minDmg']) {
                  minCount += arrayCheck(path['minDmg']);
                };
                if (path['minBonusADRatio']) {
                  minCount += arrayCheck(path['minBonusADRatio']) * bonusAD;
                };
                if (path['minAPRatio']) {
                  minCount += path['minAPRatio'] * totalAP;
                };
                addText(factorRes(path['type'], minCount));
                singleBreak();
                underLine('Max');
                if (path['maxDmg']) {
                  maxCount += arrayCheck(path['maxDmg']);
                };
                if (path['maxBonusADRatio']) {
                  maxCount += arrayCheck(path['maxBonusADRatio']) * bonusAD;
                };
                if (path['maxAPRatio']) {
                  maxCount += arrayCheck(path['maxAPRatio']) * totalAP;
                };
                addText(factorRes(path['type'], maxCount));
              };
              doubleBreak();
            };

            if (champFile[tfAbility]["tickDamage"]) {
              var path = champFile[tfAbility]["tickDamage"];
              addBold(path['type'] + ' Damage Over Time: ');
              var dmgCount = 0;
              if (path['dmg']) {
                dmgCount += arrayCheck(path['dmg']);
              };
              if (path['dmgByLvl']) {
                dmgCount += path['dmgByLvl'][champLevel];
              };
              if (path['APRatio']) {
                dmgCount += arrayCheck(path['APRatio']) * totalAP;
              };
              if (dmgCount !== 0) {
                addText(factorRes(path['type'], dmgCount));
              };
              if (path['interval']) {
                addText(' per ' + path['interval'] + ' sec, for ' + multiplyTicks2(path['interval']) + ' seconds.');
                singleBreak();
                underLine('Total');
                addText(factorRes(path['type'], mapSpace(multiplyTicks(dmgCount))));
              };
              doubleBreak();
            };

            if (champFile[tfAbility]['bonusAttackSpeed']) {
              var path = champFile[tfAbility]['bonusAttackSpeed'];
              addBold('Bonus Attack Speed: ');
              if (path['attackSpeed']) {
                addText(arrayCheck(path['attackSpeed']));
              };
              if (path['duration']) {
                singleBreak();
                underLine('Duration');
                addText(arrayCheck(path['duration']));
              };
              doubleBreak();
            };

            if (champFile[tfAbility]['resistRedux']) {
              var path = champFile[tfAbility]['resistRedux'];
              if (path['type'] === 'both') {
                addBold('Armor and Magic Resist Reduction: ');
              };
              if (path["reduxRatioByLvl"]) {
                underLine('Ratio');
                addText(path["reduxRatioByLvl"][champLevel]);
                if (enemyStats.baseHP) {
                  singleBreak();
                  underLine('Armor Reduced');
                  addText(path["reduxRatioByLvl"][champLevel] * enemyTotalArmor);
                  singleBreak();
                  underLine('Magic Resist Reduced');
                  addText(path["reduxRatioByLvl"][champLevel] * enemyTotalMR);
                }
              };
              if (path['duration']) {
                singleBreak();
                underLine('Duration');
                addText(arrayCheck(path['duration']));
              };
              doubleBreak();
            };

            if (champFile[tfAbility]["passiveTransformBonus"]) {
              var path = champFile[tfAbility]["passiveTransformBonus"];
              addBold(`Passive's Auto Empower Increase Ratio: `);
              addText(arrayCheck(path['bonus']));
              singleBreak();
              underLine('Duration');
              addText(path['duration']);
              doubleBreak();
            };

            if (champFile[tfAbility]['interruptCC']) {
              addBold('Crowd Control Duration: ');
              addText(arrayCheck(champFile[tfAbility]['interruptCC']));
              doubleBreak();
            };

            if (champFile[tfAbility]['duration']) {
              addBold('Duration: ');
              addText(arrayCheck(champFile[tfAbility]['duration']));
            };

            if (champFile[tfAbility]['coolDown']) {
              addGrey('Cooldown: ');
              addText(hasteRatio === 1 ? arrayCheck(champFile[tfAbility]['coolDown']) 
              : (arrayCheck(champFile[tfAbility]['coolDown'])*hasteRatio).toFixed(1));
            };

            if (champFile[tfAbility]["coolDownRefundRatio"]) {
              singleBreak();
              underLine('Cooldown Refund Ratio');
              addText(arrayCheck(champFile[tfAbility]["coolDownRefundRatio"]));
            };

            if (champFile[tfAbility]["reducedCoolDownByRRank"]) {
              singleBreak();
              underLine('Reduced Cooldown');
              addText(hasteRatio === 1 ? champFile[tfAbility]["reducedCoolDownByRRank"][RRank]
              : (champFile[tfAbility]["reducedCoolDownByRRank"][RRank]*hasteRatio).toFixed(1));
            }

            if (champFile[tfAbility]['rechargeByLvl']) {
              singleBreak();
              underLine('Recharge');
              addText(hasteRatio === 1 ? champFile[tfAbility]['rechargeByLvl'][champLevel]
              : (champFile[tfAbility]['rechargeByLvl'][champLevel]*hasteRatio).toFixed(1));
            }
          }
        }
      }
    };

  tfStatDisplay(champName, side, otherSide) {
    if (champName === 'Gnar' || champName === 'Kled' ) {
      var tfSection = document.getElementById('transform');
      tfSection.style.display = 'block';
      var tfSide = document.getElementsByClassName(`transform${side}`);
      tfSide[0].style.visibility = 'visible';
      tfSide[1].style.visibility = 'visible';
    } else {
      var tfSide = document.getElementsByClassName(`transform${side}`);
      tfSide[0].style.visibility = 'hidden';
      tfSide[1].style.visibility = 'hidden';
      if (this.state[`champName${otherSide}`] !== 'Gnar' && this.state[`champName${otherSide}`] !== 'Kled') {
        var tfSection = document.getElementById('transform');
        tfSection.style.display = 'none';
      }
    }
  };

  jayceRankReset(champName, side) {
    if (champName === 'Jayce') {
      document.getElementById(`RRank${side}`).value = 0;
      document.getElementById(`QRank${side}`).max = 6;
      document.getElementById(`WRank${side}`).max = 6;
      document.getElementById(`ERank${side}`).max = 6;
      document.getElementById(`RRank${side}`).max = 0;
    };
    if (this.state[`champName${side}`] === 'Jayce' && champName !== 'Jayce') {
      document.getElementById(`QRank${side}`).value = 0;
      document.getElementById(`WRank${side}`).value = 0;
      document.getElementById(`ERank${side}`).value = 0;
      document.getElementById(`RRank${side}`).value = 0;
      document.getElementById(`QRank${side}`).max = 5;
      document.getElementById(`WRank${side}`).max = 5;
      document.getElementById(`ERank${side}`).max = 5;
      document.getElementById(`RRank${side}`).max = 3;
    };
  }

  onChampClick = (event) => {
    var side = 'Left';
    var otherSide = 'Right';
    if (event.target.className.includes('Right')) {
      side = 'Right';
      otherSide = 'Left';
    };
    var prevName = this[`champName${side}`];
    this.setState({ [`champName${side}`]: event.target.textContent })
    var champName = event.target.textContent.replace("'","").replace(/\s/g, '')

    document.getElementsByTagName("input")[0].value = '';
    document.getElementsByTagName("input")[1].value = '';
    this.setState({ [`filteredChamps${side}`]: [] });

    if (prevName === champName) {
      return
    };

    if (prevName === '' || prevName === 'Aphelios') {
      var hiddenArray = document.getElementsByClassName(`hidden${side}`);
      for (var i = 0; i < hiddenArray.length; i++) {
        hiddenArray[i].style.visibility = 'visible';
      };
      document.getElementById(`levelBox${side}`).value = 1;
      this.rankedAbilities.map(rankedAbility => {
        document.getElementById(`${rankedAbility}Rank${side}`).value = 0;
      });
    };

    if (prevName === '' && this[`champName${otherSide}`] === '') {
      var ksStuff = ['', 'Toggle', 'Title', 'Stats'];
      ksStuff.map(x => {
        document.getElementById(`ks${x}Left`).style.visibility = 'visible';
        document.getElementById(`ks${x}Right`).style.visibility = 'visible';
        document.getElementById(`ks${x}Left`).style.display = '';
        document.getElementById(`ks${x}Right`).style.display = '';
      })
    };

    if (champName === 'Aphelios') {
      var hiddenArray = document.getElementsByClassName(`hidden${side}`);
      for (var i = 1; i < hiddenArray.length; i++) {
        hiddenArray[i].style.visibility = 'hidden';
      };
      /*document.getElementById(`adRank${side}`).value = 1;
      document.getElementById(`asRank${side}`).value = 1;
      document.getElementById(`lethalRank${side}`).value = 1;*/
    };

    this[`champName${side}`] = champName;
    if (this[`champName${otherSide}`] === '') {
      document.title = champName;
    } else {
      document.title = this.champNameLeft + ' vs. ' + this.champNameRight
    };

    var itemStats = this[`itemStats${side}`];
    var champLevel = this[`level${side}`] - 1;
    var champLvlRatio = champLevel * (0.7025 + 0.0175 * champLevel);
    var runeStats = this[`runes${side}`];

    this.tfStatDisplay(champName, side, otherSide);
    this.jayceRankReset(champName, side);

    this.setState({ [`champIndex${side}`]: champList.filter(champ => {
      return champ.name.toLowerCase().startsWith(event.target.textContent.toLowerCase()) })[0].value
    });
    
    document.getElementById(`champIcon${side}`).setAttribute('src', `${this.portraits[`${champList.filter(champ => {
      return champ.name.toLowerCase().startsWith(event.target.textContent.toLowerCase()) })[0].value}`]}`);

    import (`./champions/${champName.toLowerCase()}`)
      .then(({default: champFile}) => {
        var statsPath = champFile[`stats`];

        this[`champFile${side}`] = champFile;
        if (statsPath.mana.base) {
          this[`mana${side}`] = 1
        } else {
          this[`mana${side}`] = 0
        }

        this.setState(prevState => ({
          [`totalStats${side}`]: {
              ...prevState[`totalStats${side}`],   
              hp: itemStats.hp + runeStats.hp + statsPath["baseHP"] + (statsPath["hpPerLvl"] * champLvlRatio)
                + (itemStats.mana + statsPath.mana["base"] + 
                statsPath.mana["manaPerLvl"]*champLvlRatio)*this[`winter${side}`]*this[`mana${side}`],
              manaRegen: ((itemStats.manaRegen * statsPath.mana["manaBaseRegen"]/100) + statsPath.mana["manaBaseRegen"] 
                + statsPath.mana["manaRegenPerLvl"] * champLvlRatio)*this[`mana${side}`],
              hpRegen: (itemStats.hpRegen * statsPath["baseHPRegen"]/100) + statsPath["baseHPRegen"] 
                + statsPath["hpRegenPerLvl"] * champLvlRatio,
              as: runeStats.as + statsPath["attackSpeed"] + (itemStats.as + statsPath["asPerLvl"] * champLvlRatio) 
                * statsPath["asRatio"],
              arm: itemStats.arm + runeStats.arm + statsPath["baseArmor"] + statsPath["armorPerLvl"] * champLvlRatio,
              ad: itemStats.ad + runeStats.ad 
                + (statsPath["baseDamage"] + statsPath["damagePerLvl"] * champLvlRatio)*this[`sterak${side}`],
              mr: itemStats.mr + runeStats.mr + statsPath["baseMR"] + statsPath["mrPerLvl"] * champLvlRatio,
              mana: (itemStats.mana + statsPath.mana["base"] + statsPath.mana["manaPerLvl"] * champLvlRatio)*this[`mana${side}`]
          }
        }));

        if (champName === 'Gnar' || champName === 'Kled' ) {
          var tfPath = champFile['statsTransform'];
          this.setState(prevState => ({
            [`tfTotalStats${side}`]: {
              ...prevState[`tfTotalStats${side}`],
              hp: itemStats.hp + runeStats.hp + tfPath["baseHP"] + tfPath["hpPerLvl"] * champLvlRatio,
              manaRegen: (itemStats.manaRegen * tfPath.mana["manaBaseRegen"]/100) + tfPath.mana["manaBaseRegen"] 
              + tfPath.mana["manaRegenPerLvl"] * champLvlRatio,
              hpRegen: (itemStats.hpRegen * tfPath["baseHPRegen"]/100) + tfPath["baseHPRegen"] 
              + tfPath["hpRegenPerLvl"] * champLvlRatio,
              as: tfPath["attackSpeed"] + (itemStats.as + runeStats.as + tfPath["asPerLvl"] * champLvlRatio) * tfPath["asRatio"],
              arm: itemStats.arm + runeStats.arm + tfPath["baseArmor"] + tfPath["armorPerLvl"] * champLvlRatio,
              ad: itemStats.ad + runeStats.ad 
              + (tfPath["baseDamage"] + tfPath["damagePerLvl"] * champLvlRatio)*this[`sterak${side}`],
              mr: itemStats.mr + runeStats.mr + tfPath["baseMR"] + tfPath["mrPerLvl"] * champLvlRatio,
              mana: (itemStats.mana + tfPath.mana["base"] + tfPath.mana["manaPerLvl"] * champLvlRatio)*this[`mana${side}`]
            }
          }));
          if (champName === 'Kled') {
            this.setState(prevState => ({
              [`tfTotalStats${side}`]: {
                ...prevState[`tfTotalStats${side}`],
                hp: tfPath["baseHP"] + tfPath["hpPerLvl"] * champLvlRatio
              }
            }))
          }
        };

        if (champName === 'Aphelios') {
          return
        };
        this.calculateAbility(side);
      })
  };

  adAphel = {
    0: '[4, 8, 12, 16, 20, 24]', 1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24
  };

  asAphel = {
    0: '[0.06, 0.12, 0.18, 0.24, 0.3, 0.36]', 1: 0.06, 2: 0.12, 3: 0.18, 4: 0.24, 5: 0.3, 6: 0.36
  };

  lethalAphel = {
    0: '[3.5, 7, 10.5, 14, 17.5, 21]', 1: 3.5, 2: 7, 3: 10.5, 4: 14, 5: 17.5, 6: 21
  }

  onApheliosRank = (event) => {
    var side = 'Left';
    if (event.target.id.includes('Right')) {
      side = 'Right'
    };
    var hash = 'ad';
    if (event.target.id.includes('as')) {
      hash = 'as'
    };
    if (event.target.id.includes('lethal')) {
      hash = 'lethal'
    };
    var targetRank = document.getElementById(event.target.id).value
    var prevBonus = this.state[`aphel${side}`][hash];
    if (hash === 'as' && !prevBonus.length) {
      prevBonus *= this[`champFile${side}`].stats.asRatio
    }
    var newBonus = this[`${hash}Aphel`][targetRank];
    if (hash === 'as' && !newBonus.length) {
      newBonus *= this[`champFile${side}`].stats.asRatio
    }
    console.log('prevBonus: ' + prevBonus)
    console.log(prevBonus.length)
    if (!newBonus.length && prevBonus.length) {
      this.setState(prevState => ({
        [`totalStats${side}`]: {
          ...prevState[`totalStats${side}`],
          [hash]: this.state[`totalStats${side}`][hash] + +newBonus
        }
      }));
    }
    if (!prevBonus.length && newBonus.length) {
      this.setState(prevState => ({
        [`totalStats${side}`]: {
          ...prevState[`totalStats${side}`],
          [hash]: this.state[`totalStats${side}`][hash] - +prevBonus
        }
      }))
    };
    console.log('newBonus: ' + newBonus)
    if (!newBonus.length && !prevBonus.length) {
      this.setState(prevState => ({
        [`totalStats${side}`]: {
          ...prevState[`totalStats${side}`],
          [hash]: this.state[`totalStats${side}`][hash] - +prevBonus + +newBonus
        }
      }));
    };
    this.setState(prevState => ({
      [`aphel${side}`]: {
        ...prevState[`aphel${side}`],
        [hash]: this[`${hash}Aphel`][targetRank]
      }
    }));
  };

  appliedStatToggle = (event, side, ability) => {
    
  }

  onLevelChange = (event) => {
    var side = 'Left';
    if (event.target.id !== 'levelBoxLeft') {
      side = 'Right';
    };
    document.getElementById(`levelBox${side}`).setAttribute('value', event.target.value);
    this[`level${side}`] = event.target.value;

    var champLevel = event.target.value - 1;
    var champLvlRatio = champLevel * (0.7025 + 0.0175 * champLevel);
    var itemStats = this[`itemStats${side}`];
    var champName = this[`champName${side}`];
    var runeStats = this[`runes${side}`];
    var statsPath = this[`champFile${side}`][`stats`];

    this.setState(prevState => ({
      [`totalStats${side}`]: {
        ...prevState[`totalStats${side}`],
        hp: itemStats.hp + runeStats.hp + statsPath["baseHP"] + (statsPath["hpPerLvl"] * champLvlRatio) + 
          (itemStats.mana + statsPath.mana["base"] 
          + statsPath.mana["manaPerLvl"] * champLvlRatio)*this[`winter${side}`]*this[`mana${side}`],
        as: statsPath["attackSpeed"] + ((statsPath["asPerLvl"] * champLvlRatio) + itemStats.as + runeStats.as) * statsPath["asRatio"],
        arm: itemStats.arm + runeStats.arm + statsPath["baseArmor"] + statsPath["armorPerLvl"] * champLvlRatio,
        ad: itemStats.ad + runeStats.ad 
          + (statsPath["baseDamage"] + statsPath["damagePerLvl"] * champLvlRatio)*this[`sterak${side}`],
        mr: itemStats.mr + runeStats.mr + statsPath["baseMR"] + statsPath["mrPerLvl"] * champLvlRatio,
        mana: (itemStats.mana + statsPath.mana["base"] + statsPath.mana["manaPerLvl"] * champLvlRatio)*this[`mana${side}`],
        manaRegen: (itemStats.manaRegen + statsPath.mana["manaBaseRegen"] 
          + statsPath.mana["manaRegenPerLvl"] * champLvlRatio)*this[`mana${side}`],
        hpRegen: itemStats.hpRegen + statsPath["baseHPRegen"] + statsPath["hpRegenPerLvl"] * champLvlRatio
      }
    }));

    if (champName === 'Gnar' || champName === 'Kled' ) {
      var tfPath = this[`champFile${side}`]['statsTransform'];
      this.setState(prevState => ({
        [`tfTotalStats${side}`]: {
          ...prevState[`tfTotalStats${side}`],
          hp: itemStats.hp + runeStats.hp + tfPath["baseHP"] + tfPath["hpPerLvl"] * champLvlRatio,
          manaRegen: (itemStats.manaRegen + tfPath.mana["manaBaseRegen"] 
            + tfPath.mana["manaRegenPerLvl"] * champLvlRatio)*this[`mana${side}`],
          hpRegen: itemStats.hpRegen + tfPath["baseHPRegen"] + tfPath["hpRegenPerLvl"] * champLvlRatio,
          as: tfPath["attackSpeed"] + (itemStats.as + runeStats.as + tfPath["asPerLvl"] * champLvlRatio) * tfPath["asRatio"],
          arm: itemStats.arm + runeStats.arm + tfPath["baseArmor"] + tfPath["armorPerLvl"] * champLvlRatio,
          ad: itemStats.ad + runeStats.ad 
          + (tfPath["baseDamage"] + tfPath["damagePerLvl"] * champLvlRatio)*this[`sterak${side}`],
          mr: itemStats.mr + runeStats.mr + tfPath["baseMR"] + tfPath["mrPerLvl"] * champLvlRatio,
          mana: (itemStats.mana + tfPath.mana["base"] + tfPath.mana["manaPerLvl"] * champLvlRatio)*this[`mana${side}`]
        }
      }));
      if (champName === 'Kled') {
        this.setState(prevState => ({
          [`tfTotalStats${side}`]: {
            ...prevState[`tfTotalStats${side}`],
            hp: tfPath["baseHP"] + tfPath["hpPerLvl"] * champLvlRatio
          }
        }))
      }
    };
    if (champName === 'Aphelios') {
      return
    };
    this.calculateAbility(side);
  };

  onRankChange = (event) => {
    var side = 'Left';
    if (event.target.id.includes('Right')) {
      side = 'Right';
    };
    var firstChar = event.currentTarget.id.charAt(0);
    this.setState({ [`${firstChar}Rank${side}`]: event.target.value });

    this.calculateAbility(side);
  };

  onRuneChange = (event) => {
    var runeSrc = event.target.src;
    var runeName = runeSrc.substring(runeSrc.lastIndexOf('/') + 1, runeSrc.indexOf('.'));

    if (runeName.includes('Ring')) {
      return
    };
    var runeId = event.target.id;
    event.target.setAttribute('src', this.runeHash[runeId]['ringSrc']);

    var runeNumber = runeId.substring(4, runeId.length);
    var side = 'Left';
    if (runeNumber > 8) {
      side = 'Right';
    };
    var runeStat = this.runeHash[runeId]['stat'][0];
    var runeValue = this.runeHash[runeId]['stat'][1];
    var sideASRatio = this[`champFile${side}`].stats.asRatio
    if (runeStat === 'force') {
      if (this[`itemStats${side}`].ap > this[`itemStats${side}`].ad) {
        this[`forceType${side}`] = 'ap';
        runeStat = 'ap';
        runeValue = 9;
      } else {
        this[`forceType${side}`] = 'ad';
        runeStat = 'ad';
        runeValue = 5.4;
      };
    };
    var champLevel = this[`level${side}`] - 1;
    if (runeStat === 'hp') {
      runeValue = this.runeHash[runeId]['stat'][champLevel+1];
    };

    if (runeStat === 'as' && this[`champName${side}`] !== '') {
      this[`runes${side}`].as += +runeValue
      this.setState(prevState => ({
        [`totalStats${side}`]: {
          ...prevState[`totalStats${side}`],
          as: +prevState[`totalStats${side}`].as + +runeValue * sideASRatio 
        }
      }))
    } else {
      this[`runes${side}`][runeStat] += +runeValue
      this.setState(prevState => ({
        [`totalStats${side}`]: {
          ...prevState[`totalStats${side}`],
          [runeStat]: +prevState[`totalStats${side}`][runeStat] + +runeValue
        }
      }))
    };

    if (runeNumber % 3 === 0) {
      var nextSib = event.target.nextSibling;
      var nextNextSib = event.target.nextSibling.nextSibling;
      if (nextSib.src.includes('Ring')) {
        nextSib.setAttribute('src', this.runeHash[nextSib.id]['baseSrc']);
        var nextStat = this.runeHash[nextSib.id]['stat'][0];
        var nextValue = this.runeHash[nextSib.id]['stat'][1];

        if (nextStat === 'as' && this[`champName${side}`] !== '') {
          this[`runes${side}`].as -= + nextValue
          this.setState(prevState => ({
            [`totalStats${side}`]: {
              ...prevState[`totalStats${side}`],
              as: +prevState[`totalStats${side}`].as - +nextValue * sideASRatio
            }
          }));
        } else {
          this[`runes${side}`][nextStat] -= + nextValue
          this.setState(prevState => ({
            [`totalStats${side}`]: {
              ...prevState[`totalStats${side}`],
              [nextStat]: +prevState[`totalStats${side}`][nextStat] - +nextValue
            }
          }));
        }
      } else {
        nextNextSib.setAttribute('src', this.runeHash[nextNextSib.id]['baseSrc']);
        var nextNextStat = this.runeHash[nextNextSib.id]['stat'][0];
        var nextNextValue = this.runeHash[nextNextSib.id]['stat'][1];
        
        this[`runes${side}`][nextNextStat] -= +nextNextValue
        this.setState(prevState => ({
          [`totalStats${side}`]: {
            ...prevState[`totalStats${side}`],
            [nextNextStat]: +prevState[`totalStats${side}`][nextNextStat] - +nextNextValue
          }
        }));
      };
    };

    if (runeNumber % 3 === 1) {
      var prevSib = event.target.previousSibling;
      var nextSib = event.target.nextSibling;
      if (prevSib.src.includes('Ring')) {
        prevSib.setAttribute('src', this.runeHash[prevSib.id]['baseSrc']);
        var prevStat = this.runeHash[prevSib.id]['stat'][0];
        var prevValue = this.runeHash[prevSib.id]['stat'][1];
        if (prevStat === 'force') {
          if (this[`itemStats${side}`].ap > this[`itemStats${side}`].ad) {
            this[`forceType${side}`] = 'ap';
            prevStat = 'ap';
            prevValue = 9;
          } else {
            this[`forceType${side}`] = 'ad';
            prevStat = 'ad';
            prevValue = 5.4;
          };
        };
        if (prevStat === 'hp') {
          prevValue = this.runeHash[prevSib.id]['stat'][champLevel+1];
        };

        this[`runes${side}`][prevStat] -= +prevValue
        this.setState(prevState => ({
          [`totalStats${side}`]: {
            ...prevState[`totalStats${side}`],
            [prevStat]: +prevState[`totalStats${side}`][prevStat] - +prevValue
          }
        }))
      } else {
          nextSib.setAttribute('src', this.runeHash[nextSib.id]['baseSrc']);
          var nextStat = this.runeHash[nextSib.id]['stat'][0];
          var nextValue = this.runeHash[nextSib.id]['stat'][1];

          this[`runes${side}`][nextStat] -= +nextValue
          this.setState(prevState => ({
            [`totalStats${side}`]: {
              ...prevState[`totalStats${side}`],
              [nextStat]: +prevState[`totalStats${side}`][nextStat] - +nextValue
            }
          }))
      }
    };

    if (runeNumber % 3 === 2) {
      var prevSib = event.target.previousSibling;
      var prevPrevSib = event.target.previousSibling.previousSibling;
      if (prevSib.src.includes('Ring')) {
        prevSib.setAttribute('src', this.runeHash[prevSib.id]['baseSrc']);
        var prevStat = this.runeHash[prevSib.id]['stat'][0];
        var prevValue = this.runeHash[prevSib.id]['stat'][1];
        
        if (prevStat === 'as' && this[`champName${side}`] !== '') {
          this[`runes${side}`].as -= +prevValue
          this.setState(prevState => ({
            [`totalStats${side}`]: {
              ...prevState[`totalStats${side}`],
              as: +prevState[`totalStats${side}`].as - +prevValue * sideASRatio
            }
          }));
        } else {
          this[`runes${side}`][prevStat] -= +prevValue
          this.setState(prevState => ({
            [`totalStats${side}`]: {
              ...prevState[`totalStats${side}`],
              [prevStat]: +prevState[`totalStats${side}`][prevStat] - +prevValue
            }
          }))
        }
      } else {
          prevPrevSib.setAttribute('src', this.runeHash[prevPrevSib.id]['baseSrc']);
          var prevPrevStat = this.runeHash[prevPrevSib.id]['stat'][0];
          var prevPrevValue = this.runeHash[prevPrevSib.id]['stat'][1];
          if (prevPrevStat === 'force') {
            if (this[`itemStats${side}`].ap > this[`itemStats${side}`].ad) {
              this[`forceType${side}`] = 'ap';
              prevPrevStat = 'ap';
              prevPrevValue = 9;
            } else {
              this[`forceType${side}`] = 'ad';
              prevPrevStat = 'ad';
              prevPrevValue = 5.4;
            };
          };
          if (prevPrevStat === 'hp') {
            prevPrevValue = this.runeHash[prevPrevSib.id]['stat'][champLevel+1];
          };

          this[`runes${side}`][prevPrevStat] -= +prevPrevValue;
          this.setState(prevState => ({
            [`totalStats${side}`]: {
              ...prevState[`totalStats${side}`],
              [prevPrevStat]: +prevState[`totalStats${side}`][prevPrevStat] - +prevPrevValue
            }
          }))
      }
    };
    if (this[`champName${side}`] === 'Aphelios') {
      return
    };
    this.calculateAbility(side)
  };

  preventKeyPress = (event) => {
    event.preventDefault()
  };

  downArrow = (event, side) => {
    if (event.keyCode === 40) {
      if (document.getElementsByClassName(`click${side}`).length) {
        event.preventDefault();
        document.getElementsByClassName(`click${side}`)[0].focus();
        document.getElementsByClassName(`click${side}`)[0].style.backgroundColor = 'lightGray'
      }
    };
    if (event.keyCode === 38) {
      if (document.getElementsByClassName(`click${side}`).length) {
        event.preventDefault();
        var ulLength = document.getElementsByClassName(`click${side}`).length
        document.getElementsByClassName(`click${side}`)[ulLength-1].focus();
        document.getElementsByClassName(`click${side}`)[ulLength-1].style.backgroundColor = 'lightGray'
      }
    }
  }

  liKeyPress = (event, side) => {
    var ulLength = document.getElementsByClassName(`click${side}`).length
    if (event.keyCode === 40) {
      if (ulLength === 1) {
        return
      };
      event.preventDefault();
      event.target.style.backgroundColor = 'white';
      if (event.target.nextSibling) {
        event.target.nextSibling.focus();
        event.target.nextSibling.style.backgroundColor = 'lightGray'
      } else {
        document.getElementsByClassName(`click${side}`)[0].focus();
        document.getElementsByClassName(`click${side}`)[0].style.backgroundColor = 'lightGray'
      }
    };

    if (event.keyCode === 38) {
      if (ulLength === 1) {
        return
      };
      event.preventDefault();
      event.target.style.backgroundColor = 'white';
      if (event.target.previousSibling) {
        event.target.previousSibling.focus();
        event.target.previousSibling.style.backgroundColor = 'lightGray'
      } else {
        document.getElementsByClassName(`click${side}`)[ulLength-1].focus();
        document.getElementsByClassName(`click${side}`)[ulLength-1].style.backgroundColor = 'lightGray'
      }
    }

    if (event.keyCode === 13) {
      this.onChampClick(event)
    }
  }

  onSearchBlur = (event, side) => {
    if (document.getElementById(`ul${side}`)) {
      if (document.getElementById(`ul${side}`).contains(event.relatedTarget)) {
        return
      }
    }
    event.target.value = '';
    this.setState({ [`filteredChamps${side}`]: [] });
  };

  onLiBlur = (event, side) => {
    if (document.getElementById(`ul${side}`).contains(event.relatedTarget)) {
      return
    };
    if (event.relatedTarget ===  document.getElementsByTagName("input")[side.length-4]) {
      event.target.style.backgroundColor = 'white';
      return
    };
    document.getElementsByTagName("input")[side.length-4].value = '';
    this.setState({ [`filteredChamps${side}`]: [] });
  };

  currentKSLeft = {
    tree: 'precision',
    index: 0
  }

  currentKSRight = {
    tree: 'precision',
    index: 4
  }

  ksHighlight = (side, runeTree, ksIndex, borderString) => {
    if (side === 'Right') {
      ksIndex += document.getElementsByClassName(runeTree).length / 2
    };
    document.getElementsByClassName(this[`currentKS${side}`].tree)[this[`currentKS${side}`].index].style.boxShadow = ''
    /*document.getElementsByClassName(runeTree)[ksIndex].style.borderTop = borderString;
    document.getElementsByClassName(runeTree)[ksIndex].style.borderBottom = borderString;*/
    document.getElementsByClassName(runeTree)[ksIndex].style.boxShadow = `0px 0px 5px ${borderString} inset`
    this[`currentKS${side}`] = {
      tree: runeTree,
      index: ksIndex
    }
  }

  pressTheAttack = (side) => {
    if (event.target.style.borderBottom) {
      return
    }
    this.ksHighlight(side, 'precision', 0, 'rgb(255, 225, 82)');
    var dmgByLvl = [
      40,48,56,65,73,81,89,98,106,
      114,122,131,139,147,155,164,172,180
    ];
    this.setState({
      [`keystone${side}`]: 
        '40 to 180, based on level.',
      [`keystoneID${side}`]: {
        index: 0,
        title: 'Press the Attack',
        type: 'Adaptive Damage'
      },
      [`ksArray${side}`]: dmgByLvl,
      [`ksBonusADRatio${side}`]: 0,
      [`ksAPRatio${side}`]: 0,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0,
      [`ksCD${side}`]: [6,6,6,6,6,6,6,6,6,
      6,6,6,6,6,6,6,6,6],
      [`ksCDText${side}`]: '',
      [`ksPart2Display${side}`]: 'none'
    })
  };

  lethalTempo = (side) => {
    if (event.target.style.borderBottom) {
      return
    }
    this.ksHighlight(side, 'precision', 1, 'rgb(255, 225, 82)');
    var asByLvl = [
      0.4,0.4412,0.4824,0.5235,0.5647,0.6059,0.6471,0.6882,0.7294,
      0.7706,0.8118,0.8529,0.8941,0.9353,0.9765,1.0176,1.0588,1.1
    ];
    this.setState({
      [`keystone${side}`]: 
        '0.4 to 1.1, based on level. Lasts 3 seconds, extended to 6 by attacking an enemy champion.',
      [`keystoneID${side}`]: {
        index: 1,
        title: 'Lethal Tempo',
        type: 'Attack Speed Ratio'
      },
      [`ksArray${side}`]: asByLvl,
      [`ksBonusADRatio${side}`]: 0,
      [`ksAPRatio${side}`]: 0,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0,
      [`ksCD${side}`]: [6,6,6,6,6,6,6,6,6,
      6,6,6,6,6,6,6,6,6],
      [`ksCDText${side}`]: '',
      [`ksPart2Display${side}`]: 'none'
    })
  };

  fleetFootwork = (side) => {
    if (event.target.style.borderBottom) {
      return
    }
    this.ksHighlight(side, 'precision', 2, 'rgb(255, 225, 82)');
    var healByLvl = [
      10,15.29,20.59,25.88,31.18,36.47,41.76,47.06,52.35,
      57.65,62.94,68.24,73.53,78.82,84.12,89.41,94.71,100
    ];
    this.setState({
      [`keystone${side}`]: 
        <span>10 to 100, based on level (+0.4 <span className='textAD'>Bonus AD</span><img src={ADIcon}></img>
        ratio) (+0.3 <span className='textAP'>AP</span><img src={APIcon}></img>ratio).</span>,
      [`keystoneID${side}`]: {
        index: 2,
        title: 'Fleet Footwork',
        type: 'Heal'
      },
      [`ksArray${side}`]: healByLvl,
      [`ksBonusADRatio${side}`]: 0.4,
      [`ksAPRatio${side}`]: 0.3,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0,
      [`ksCD${side}`]: ['','','','','','','','','',
      '','','','','','','','',''],
      [`ksCDText${side}`]: 'Energized',
      [`ksPart2Display${side}`]: 'none'
    })
  };

  conqueror = (side) => {
    if (event.target.style.borderBottom) {
      return
    }
    this.ksHighlight(side, 'precision', 3, 'rgb(255, 225, 82)');
    var forceByLvl = [
      2,2.18,2.35,2.53,2.71,2.88,3.06,3.24,3.41,
      3.59,3.76,3.94,4.12,4.29,4.47,4.65,4.82,5
    ];
    this.setState({
      [`keystone${side}`]: 
        '2 to 5 per stack, based on level. Stacks up to 12 times for 24-60 max.',
      [`keystoneID${side}`]: {
        index: 3,
        title: 'Conqueror',
        type: 'Adaptive Force'
      },
      [`ksArray${side}`]: forceByLvl,
      [`ksBonusADRatio${side}`]: 0,
      [`ksAPRatio${side}`]: 0,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0,
      [`ksCD${side}`]: ['','','','','','','','','',
      '','','','','','','','',''],
      [`ksCDText${side}`]: 'None',
      [`ksPart2Display${side}`]: 'none'
    })
  };

  electrocute = (side) => {
    if (event.target.style.borderBottom) {
      return
    }
    this.ksHighlight(side, 'domination', 0, 'rgb(245, 12, 63)');
    var dmgByLvl = [
      30,38.82,47.65,56.47,65.29,74.12,82.94,91.76,100.59,
      109.41,118.24,127.06,135.88,144.71,153.53,162.35,171.18,180
    ];
    this.setState({
      [`keystone${side}`]: 
        <span>30 to 180, based on level (+0.4 <span className='textAD'>Bonus AD</span><img src={ADIcon}></img>
        ratio) (+0.25 <span className='textAP'>AP</span><img src={APIcon}></img>ratio).</span>,
      [`keystoneID${side}`]: {
        index: 4,
        title: 'Electrocute',
        type: 'Adaptive Damage'
      },
      [`ksArray${side}`]: dmgByLvl,
      [`ksBonusADRatio${side}`]: 0.4,
      [`ksAPRatio${side}`]: 0.25,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0,
      [`ksCD${side}`]: [25,24.71,24.41,24.12,23.82,23.53,23.24,22.94,22.65,
      22.35,22.06,21.76,21.47,21.18,20.88,20.59,20.29,20],
      [`ksCDText${side}`]: '',
      [`ksPart2Display${side}`]: 'none'
    })
  };

  predator = (side) => {
    if (event.target.style.borderBottom) {
      return
    }
    this.ksHighlight(side, 'domination', 1, 'rgb(245, 12, 63)');
    var dmgByLvl = [
      40,44.71,49.41,54.12,58.82,63.53,68.24,72.94,77.65,
      82.35,87.06,91.76,96.47,101.18,105.88,110.59,115.29,120
    ];
    this.setState({
      [`keystone${side}`]: 
        <span>40 to 120, based on level (+0.2 <span className='textAD'>Bonus AD</span><img src={ADIcon}></img>
        ratio) (+0.1 <span className='textAP'>AP</span><img src={APIcon}></img>ratio).</span>,
      [`keystoneID${side}`]: {
        index: 5,
        title: 'Predator',
        type: 'Adaptive Damage'
      },
      [`ksArray${side}`]: dmgByLvl,
      [`ksBonusADRatio${side}`]: 0.2,
      [`ksAPRatio${side}`]: 0.1,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0,
      [`ksCD${side}`]: [90,88.24,86.47,84.71,82.94,81.18,79.41,77.65,75.88,
        74.12,72.35,70.59,68.82,67.06,65.29,63.53,61.76,60],
      [`ksCDText${side}`]: '',
      [`ksPart2Display${side}`]: 'none'
    })
  };

  darkHarvest = (side) => {
    if (event.target.style.borderBottom) {
      return
    }
    this.ksHighlight(side, 'domination', 2, 'rgb(245, 12, 63)');
    var dmgByLvl = [
      20,22.35,24.71,27.06,29.41,31.76,34.12,36.47,38.82,
      41.18,43.53,45.88,48.24,50.59,52.94,55.29,57.65,60
    ];
    this.setState({
      [`keystone${side}`]: 
        <span>20 to 60, based on level (+5 per soul) (+0.25 <span className='textAD'>Bonus AD</span><img src={ADIcon}>
          </img>ratio) (+0.15 <span className='textAP'>AP</span><img src={APIcon}></img>ratio).</span>,
      [`keystoneID${side}`]: {
        index: 6,
        title: 'Dark Harvest',
        type: 'Adaptive Damage'
      },
      [`ksArray${side}`]: dmgByLvl,
      [`ksBonusADRatio${side}`]: 0.25,
      [`ksAPRatio${side}`]: 0.15,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0,
      [`ksCD${side}`]: [45,45,45,45,45,45,45,45,45,
        45,45,45,45,45,45,45,45,45],
      [`ksCDText${side}`]: ', reduced to 1.5 on takedown.',
      [`ksPart2Display${side}`]: 'none'
    })
  };

  hailOfBlades = (side) => {
    if (event.target.style.borderBottom) {
      return
    }
    this.ksHighlight(side, 'domination', 3, 'rgb(245, 12, 63)');
    var asByLvl = [
      1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,
      1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,1.1,
    ];
    this.setState({
      [`keystone${side}`]: 
        '1.1 for 3 attacks.',
      [`keystoneID${side}`]: {
        index: 7,
        title: 'Hail of Blades',
        type: 'Attack Speed Ratio'
      },
      [`ksArray${side}`]: asByLvl,
      [`ksBonusADRatio${side}`]: 0,
      [`ksAPRatio${side}`]: 0,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0,
      [`ksCD${side}`]: [12,12,12,12,12,12,12,12,12,
        12,12,12,12,12,12,12,12,12],
      [`ksCDText${side}`]: '',
      [`ksPart2Display${side}`]: 'none'
    })
  };

  summonAery = (side) => {
    if (event.target.style.borderBottom) {
      return
    }
    this.ksHighlight(side, 'sorcery', 0, 'rgb(177, 41, 238)');
    var dmgByLvl = [
      10,11.76,13.53,15.29,17.06,18.82,20.59,22.35,24.12,
      25.88,27.65,29.41,31.18,32.94,34.71,36.47,38.24,40
    ];
    this.setState({
      [`keystone${side}`]: 
        <span>10 to 40, based on level (+0.15 <span className='textAD'>Bonus AD</span><img src={ADIcon}></img>
        ratio) (+0.1 <span className='textAP'>AP</span><img src={APIcon}></img>ratio).</span>,
      [`keystoneID${side}`]: {
        index: 8,
        title: 'Summon Aery',
        type: 'Adaptive Damage'
      },
      [`ksPart2${side}`]: {
        text: <span>35 to 80, based on level (+0.4 <span className='textAD'>Bonus AD</span><img src={ADIcon}>
          </img>ratio) (+0.25 <span className='textAP'>AP</span><img src={APIcon}></img>ratio) for 2 seconds.</span>,
        type: 'Shield',
        bonusADRatio: 0.4,
        APRatio: 0.25,
        HPRatio: 0,
        array: [
          35,37.65,40.29,42.94,45.59,48.24,50.88,53.53,56.18,
          58.82,61.47,64.12,66.76,69.41,72.06,74.71,77.35,80
        ]
      },
      [`ksPart2Display${side}`]: 'block',
      [`ksArray${side}`]: dmgByLvl,
      [`ksBonusADRatio${side}`]: 0.15,
      [`ksAPRatio${side}`]: 0.1,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0,
      [`ksCD${side}`]: ['','','','','','','','','',
      '','','','','','','','',''],
      [`ksCDText${side}`]: 'Return'
    })
  };

  arcaneComet = (side) => {
    if (event.target.style.borderBottom) {
      return
    }
    this.ksHighlight(side, 'sorcery', 1, 'rgb(177, 41, 238)');
    var dmgByLvl = [
      30,34.12,38.24,42.35,46.47,50.59,54.71,58.82,62.94,
      67.06,71.18,75.29,79.41,83.53,87.65,91.76,95.88,100
    ];
    this.setState({
      [`keystone${side}`]: 
        <span>30 to 100, based on level (+0.35 <span className='textAD'>Bonus AD</span><img src={ADIcon}>
          </img>ratio) (+0.2 <span className='textAP'>AP</span><img src={APIcon}></img>ratio).</span>,
      [`keystoneID${side}`]: {
        index: 9,
        title: 'Arcane Comet',
        type: 'Adaptive Damage'
      },
      [`ksArray${side}`]: dmgByLvl,
      [`ksBonusADRatio${side}`]: 0.35,
      [`ksAPRatio${side}`]: 0.2,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0,
      [`ksCD${side}`]: [20,19.29,18.59,17.88,17.18,16.47,15.76,15.06,14.35,
        13.65,12.94,12.24,11.53,10.82,10.12,9.41,8.71,8],
      [`ksCDText${side}`]: ' (reduced by dmg: spells 20%, AoE 10% per enemy, DoT 5%)',
      [`ksPart2Display${side}`]: 'none'
    })
  };

  phaseRush = (side) => {
    if (event.target.style.borderBottom) {
      return
    }
    this.ksHighlight(side, 'sorcery', 2, 'rgb(177, 41, 238)');
    var msByLvl = [
      0.3,0.3176,0.3353,0.3529,0.3706,0.3882,0.4059,0.4235,0.4412,
      0.4588,0.4765,0.4941,0.5118,0.5294,0.5471,0.5647,0.5824,0.6
    ];
    this.setState({
      [`keystone${side}`]: 
        '0.3 to 0.6, based on level, and 75% slow resist for 3 seconds.',
      [`keystoneID${side}`]: {
        index: 10,
        title: 'Phase Rush',
        type: 'Bonus Movement Speed Ratio'
      },
      [`ksPart2${side}`]: {
        text: '0.15 to 0.4, based on level, and 75% slow resist for 3 seconds.',
        type: 'Bonus Movement Speed Ratio (ranged)',
        bonusADRatio: 0,
        APRatio: 0,
        HPRatio: 0,
        array: [
          0.15,0.1647,0.1794,0.1941,0.2088,0.2235,0.2382,0.2529,0.2676,
          0.2824,0.2971,0.3118,0.3265,0.3412,0.3559,0.3706,0.3853,0.4
        ]
      },
      [`ksArray${side}`]: msByLvl,
      [`ksBonusADRatio${side}`]: 0,
      [`ksAPRatio${side}`]: 0,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0,
      [`ksCD${side}`]: [30,28.82,27.65,26.47,25.29,24.12,22.94,21.76,20.59,
        19.41,18.24,17.06,15.88,14.71,13.53,12.35,11.18,10],
      [`ksCDText${side}`]: '',
      [`ksPart2Display${side}`]: 'block'
    })
  }

  grasp = (side) => {
    if (event.target.style.borderBottom) {
      return
    }
    this.ksHighlight(side, 'resolve', 0, 'rgb(90, 227, 30)');
    this.setState({
      [`keystone${side}`]: 
        <span>0.04 <span className='textHP'>Max HP</span><img src={healthIcon}></img>ratio</span>,
      [`keystoneID${side}`]: {
        index: 11,
        title: 'Grasp of the Undying (60% effective on ranged champions)',
        type: 'Magic Damage'
      },
      [`ksPart2${side}`]: {
        text: <span>0.02 <span className='textHP'>Max HP</span><img src={healthIcon}></img>
        ratio (permanent +5 <span className='textHP'>HP</span><img src={healthIcon}></img>per stack)</span>,
        type: 'Heal',
        bonusADRatio: 0,
        APRatio: 0,
        HPRatio: 0.02,
        array: [
          0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        ]
      },
      [`ksPart2Display${side}`]: 'block',
      [`ksArray${side}`]: [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 
      ],
      [`ksBonusADRatio${side}`]: 0,
      [`ksAPRatio${side}`]: 0,
      [`ksHPRatio${side}`]: 0.04,
      [`ksBonusHPRatio${side}`]: 0,
      [`ksCD${side}`]: [4,4,4,4,4,4,4,4,4,
        4,4,4,4,4,4,4,4,4],
      [`ksCDText${side}`]: ' seconds in combat',
    })
  };
  
  aftershock = (side) => {
    if (event.target.style.borderBottom) {
      return
    }
    this.ksHighlight(side, 'resolve', 1, 'rgb(90, 227, 30)');
    var dmgByLvl = [
      25,30.59,36.18,41.76,47.35,52.94,58.53,64.12,69.71,
      75.29,80.88,86.47,92.06,97.65,103.24,108.82,114.41,120
    ];
    this.setState({
      [`keystone${side}`]: 
        <span>25 to 120, based on level +(0.08 <span className='textHP'>Bonus HP</span>
        <img src={healthIcon}></img>ratio).</span>,
      [`keystoneID${side}`]: {
        index: 12,
        title: 'Aftershock',
        type: 'Magic Damage'
      },
      [`ksPart2${side}`]: {
        text: '35 +(0.8 bonus ratio) for 2.5 seconds. Capped at 80 to 150, based on level.',
        type: 'Bonus Armor and Magic Resistance',
        bonusADRatio: 0,
        APRatio: 0,
        HPRatio: 0,
        array: [
          80,84.12,88.24,92.35,96.47,100.59,104.71,108.82,112.94,
          117.06,121.18,125.29,129.41,133.53,137.65,141.76,145.88,150
        ]
      },
      [`ksPart2Display${side}`]: 'block',
      [`ksArray${side}`]: dmgByLvl,
      [`ksBonusADRatio${side}`]: 0,
      [`ksAPRatio${side}`]: 0,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0.08,
      [`ksCD${side}`]: [20,20,20,20,20,20,20,20,20,
        20,20,20,20,20,20,20,20,20],
      [`ksCDText${side}`]: ''
    })
  };

  guardian = (side) => {
    if (event.target.style.borderBottom) {
      return
    }
    this.ksHighlight(side, 'resolve', 2, 'rgb(90, 227, 30)');
    var shieldByLvl = [
      50,54.71,59.41,64.12,68.82,73.53,78.24,82.94,87.65,
      92.35,97.06,101.76,106.47,111.18,115.88,120.59,125.29,130
    ];
    this.setState({
      [`keystone${side}`]: 
        <span>50 to 130, based on level (+0.09 <span className='textHP'>Bonus HP</span><img src={healthIcon}>
        </img>ratio) (+0.15 <span className='textAP'>AP</span><img src={APIcon}></img>ratio) for 2 seconds.</span>,
      [`keystoneID${side}`]: {
        index: 13,
        title: 'Guardian',
        type: 'Shield'
      },
      [`ksArray${side}`]: shieldByLvl,
      [`ksBonusADRatio${side}`]: 0,
      [`ksAPRatio${side}`]: 0.15,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0.09,
      [`ksCD${side}`]: [
        70,68.24,66.47,64.71,62.94,61.18,59.41,57.65,55.88,
        54.12,52.35,50.59,48.82,47.06,45.29,43.53,41.76,40
      ],
      [`ksCDText${side}`]: '',
      [`ksPart2Display${side}`]: 'none'
    })
  };

  mythicBonuses = {
    0: ['ap', 8],
    1: ['arPenRatio', 0.05, 'magicPenRatio', 0.05],
    2: ['cdr', 5],
    3: ['arPenRatio', 0.04],
    4: ['arm', 5, 'mr', 5],
    5: ['ap', 10],
    6: ['hp', 100],
    7: [],
    8: ['cdr', 7],
    9: ['magicPenFlat', 5],
    10: ['ad', 5, 'hp', 70],
    11: ['ap', 15],
    12: ['as', 0.1],
    13: ['cdr', 5],
    14: ['arm', 2, 'mr', 2],
    15: ['magicPenFlat', 5],
    16: [],
    17: ['cdr', 5],
    18: ['lethality', 5],
    19: ['omni', 0.02, 'ap', 8],
    20: ['cdr', 5],
    21: [],
    22: ['hp', 50],
    23: ['ad', 3, 'cdr', 3],
    24: ['hp', 50, 'cdr', 5]
  };

  mythicItems = {
    0: 
    <div>
      <b className='yellow'>Crown of the Shattered Queen</b>
      <hr></hr>
      <span>
        60 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        250 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        600 <img src={manaIcon}></img> Mana
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Safeguard: </i>
      <span>
        Reduce incoming champion damage by 75%
        for 1.5 seconds after taking damage from a champion.
      </span>
      <br></br>
      <i className='yellow'>Combat Cooldown: </i>
      <span>
        40
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Poise: </i>
      <span>
      While Safeguarded, gain 10 - 40 (based on level) ability power,
       lingering for 3 seconds after Safeguard is deactivated.
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      1% bonus movement speed and 8 ability power
      </span>
    </div>,
    1: 
    <div>
      <b className='yellow'>Divine Sunderer</b>
      <hr></hr>
      <span>
        40 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        300 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Spellblade: </i>
      <span>
      After using an ability, your next basic attack within 10 seconds deals (Melee 12% / Ranged 9%)
       of enemy max HP as bonus physical damage, min damage of 150% base AD. Against champs,
        heal for (Melee 7.8% / Ranged 3.6%) of the enemy max HP, min heal of (Melee 97.5% / Ranged 60%) base AD
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        1.5
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      5% armor penetration and 5% magic penetration
      </span>
    </div>,
    2:
    <div>
      <b className='yellow'>Duskblade of Draktharr</b>
      <hr></hr>
      <span>
        60 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        18 <img src={arPenIcon}></img> Lethality
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Nightstalker: </i>
      <span>
      Your next basic attack against an enemy champion deals (Melee 75 / Ranged 55) (+ (Melee 30% / Ranged 25%) bonus AD)
       bonus physical damage on-hit and slows the target by 99% for 0.25 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        15 (resets on takedown)
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      5 ability haste
      </span>
    </div>,
    3:
    <div>
      <b className='yellow'>Eclipse</b>
      <hr></hr>
      <span>
        55 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        8% <img src={vampIcon} className='smallIcon'></img> Omnivamp
      </span>
      <br></br>
      <span>
        18 <img src={arPenIcon}></img> Lethality
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Ever Rising Moon: </i>
      <span>
      Hitting an enemy champion with 2 separate attacks or abilities within 1.5 seconds deals them 6% of Enemy Max HP as
       bonus physical damage and grants you 15% bonus movement speed and a shield for 
       (Melee 180 / Ranged 90) (+ (Melee 40% / Ranged 20%) bonus AD) for 2 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
      (Melee 8 / Ranged 16)
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      4% armor penetration
      </span>
    </div>,
    4:
    <div>
      <b className='yellow'>Evenshroud</b>
      <hr></hr>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        200 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        30 <img src={armorIcon}></img> Armor
      </span>
      <br></br>
      <span>
        30 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Coruscation: </i>
      <span>
      Becoming affected by or applying an immobilizing effect to or from an enemy champion affects them 
      and all enemy champions in 600 radius around you with Repent, increasing the damage they take by 9% for 4 seconds.
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      5 armor and 5 magic resistance
      </span>
    </div>,
    5:
    <div>
      <b className='yellow'>Everfrost</b>
      <hr></hr>
      <span>
        70 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        250 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        600 <img src={manaIcon}></img> Mana
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Glaciate: </i>
      <span>
      Unleash a fan of icy shards in a cone in the target direction, dealing 100 (+ 30% AP) magic damage 
      to all enemies hit and slowing them by 65% for 1.5 seconds (roots enemies in the center of the cone).
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        30
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      10 ability power
      </span>
    </div>,
    6:
    <div>
      <b className='yellow'>Frostfire Gauntlet</b>
      <hr></hr>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        350 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        25 <img src={armorIcon}></img> Armor
      </span>
      <br></br>
      <span>
        25 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Immolate: </i>
      <span>
      Taking or dealing damage activates this passive for 3 seconds. Deal 12 (+ 1% bonus health) magic damage
       per second to enemies within 325 (+ 100% bonus size) units.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Snowbind: </i>
      <span>
      Basic attacks create a 250 radius frost field around the target that lasts for 1.5 seconds and deals 
      (Melee 12 to 85 / Ranged 6 to 42.5) (based on level) magic damage to all enemies inside initially and slows all 
      enemies within by (Melee 25% / Ranged 12.5%) (+ (Melee 4% / Ranged 2%) per 1000 maximum health) for 1.5 seconds 
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        (Melee 4 / Ranged 6)
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      100 bonus health and 6% increased size
      </span>
    </div>,
    7:
    <div>
      <b className='yellow'>Galeforce</b>
      <hr></hr>
      <span>
        60 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        20% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <br></br>
      <span>
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Cloudburst: </i>
      <span>
      Dash to the target location and fire three homing missiles at the most wounded enemy within 750 units.
       Each missile deals 60 to 105 (based on level) (+ 15% bonus AD) magic damage, for a total of 180 to 315 
       (based on level) (+ 45% bonus AD), increased by 0% to 50% (based on target's missing health).
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        90
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      2% bonus movement speed
      </span>
    </div>,
    8:
    <div>
      <b className='yellow'>Goredrinker</b>
      <hr></hr>
      <span>
        55 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        300 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        10% <img src={vampIcon} className='smallIcon'></img> Omnivamp
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Thirsting Slash: </i>
      <span>
      Deal 175% base AD physical damage to enemies in a 450 radius around you. Heal for 25% AD 
      (+ 10% of your missing health) for each enemy champion hit.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
      15 (reduced by ability haste)
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      5 ability haste
      </span>
    </div>,
    9:
    <div>
      <b className='yellow'>Hextech Rocketbelt</b>
      <hr></hr>
      <span>
        90 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        250 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        6 <img src={mPenIcon}></img> Magic Penetration
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Supersonic: </i>
      <span>
      Dash 125 to 275 units, unleashing 7 rockets that deal 125 (+ 15% AP) magic damage. Gain 30% bonus movement
       speed while moving towards nearby enemy champions for 1.5 seconds. Resets basic attack timer.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        40
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      5 magic penetration
      </span>
    </div>,
    10:
    <div>
      <b className='yellow'>Immortal Shieldbow</b>
      <hr></hr>
      <span>
        50 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        20% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <br></br>
      <span>
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <br></br>
      <span>
        10% <img src={lifestealIcon} className='smallIcon'></img> Life Steal
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Lifeline: </i>
      <span>
      If you would take damage that would reduce you below 30% of your Max HP, you first gain a 275 to 650 (based on level) 
      shield for 3 seconds and 15 to 35 (based on level) bonus attack damage for 8 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        90
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      5 bonus attack damage and 50 bonus health
      </span>
    </div>,
    11:
    <div>
      <b className='yellow'>Imperial Mandate</b>
      <hr></hr>
      <span>
        40 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        200 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        100% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Coordinated Fire: </i>
      <span>
      Abilities that slow or immobilize enemy champions deal 45 to 75 (based on level) bonus magic damage and mark 
      them for 4 seconds. Allied champion damage consumes the mark to deal 90 to 150 (based on ally's level) bonus 
      magic damage and grant you and the ally 20% bonus movement speed for 2 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        6 (per champion, starts upon mark application) 
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      15 ability power
      </span>
    </div>,
    12:
    <div>
      <b className='yellow'>Kraken Slayer</b>
      <hr></hr>
      <span>
        65 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        25% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <br></br>
      <span>
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Bring it Down: </i>
      <span>
      Every third basic attack deals 60 (+ 45% bonus AD) bonus true damage on-hit. Stacks last 3 seconds.
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      10% bonus attack speed
      </span>
    </div>,
    13:
    <div>
      <b className='yellow'>Liandry's Anguish</b>
      <hr></hr>
      <span>
        80 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        600 <img src={manaIcon}></img> Mana
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Torment: </i>
      <span>
      Dealing ability damage burns enemies, dealing 60 (+ 6% AP) (+ 4% target's maximum health) total magic 
      damage over 4 seconds.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Agony: </i>
      <span>
      Deal 0% to 12% (based on target's bonus health) bonus magic damage against enemy champions.
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      5 ability haste
      </span>
    </div>,
    14:
    <div>
      <b className='yellow'>Locket of the Iron Solari</b>
      <hr></hr>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        200 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        30 <img src={armorIcon}></img> Armor
      </span>
      <br></br>
      <span>
        30 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Devotion: </i>
      <span>
      Grant allied champions within 850 radius a shield for 230 to 385 (based on target's level), decaying over 2.5 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
      90
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Consecrate: </i>
      <span>
      Grant allied champions within 850 radius 5 bonus armor and 5 bonus magic resistance.
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      increase Consecrate by 2 armor and 2 magic resistance
      </span>
    </div>,
    15:
    <div>
      <b className='yellow'>Luden's Tempest</b>
      <hr></hr>
      <span>
        80 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        600 <img src={manaIcon}></img> Mana
      </span>
      <br></br>
      <span>
        6 <img src={mPenIcon}></img> Magic Penetration
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Echo: </i>
      <span>
      Ability damage deals 100 (+ 10% AP) additional magic damage to the enemy and up to 3 other enemies within 600 units 
      of them, and grants you 15% bonus movement speed for 2 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        10 (reduced by 0.5 seconds per champion you deal ability damage to)
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      5 magic penetration
      </span>
    </div>,
    16:
    <div>
      <b className='yellow'>Moonstone Renewer</b>
      <hr></hr>
      <span>
        40 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        200 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        100% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Starlit Grace: </i>
      <span>
      When affecting champions with attacks or abilities in combat, heal the nearby allied champion (excluding yourself) 
      with the most missing health for 70. Each second spent in combat with champions grants 7% heal and shield 
      power, stacking up to 5 times for maximum of 35%.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        2 
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      increase Starlit Grace heal by 10
      </span>
    </div>,
    17:
    <div>
      <b className='yellow'>Night Harvester</b>
      <hr></hr>
      <span>
        90 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        300 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Soulrend: </i>
      <span>
      Damaging an enemy champion deals 125 (+ 15% AP) bonus magic damage and grants 25% bonus movement speed for 1.5 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        40 (per champion)
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      5 ability haste
      </span>
    </div>,
    18:
    <div>
      <b className='yellow'>Prowler's Claw</b>
      <hr></hr>
      <span>
        60 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        18 <img src={arPenIcon}></img> Lethality
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Sandswipe: </i>
      <span>
      Dash in a line through the target enemy champion's location, and deal 75 (+ 30% bonus AD) physical damage to the 
      target and increase your damage dealt to them by 15% for the next 3 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
      90
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      5 lethality
      </span>
    </div>,
    19:
    <div>
      <b className='yellow'>Riftmaker</b>
      <hr></hr>
      <span>
        80 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        300 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        8% <img src={vampIcon} className='smallIcon'></img> Omnivamp
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Void Corruption: </i>
      <span>
      For each second in combat with champions, deal 3% bonus damage, stacking up to 3 times for a maximum of 9%.
       While this effect is fully stacked, convert 100% of the bonus damage into true damage.
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      2% omnivamp and 8 ability power
      </span>
    </div>,
    20:
    <div>
      <b className='yellow'>Shurelya's Battlesong</b>
      <hr></hr>
      <span>
        40 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        200 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        100% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Inspire: </i>
      <span>
      Grants you and all allies within 1000 units of you 30% bonus movement speed for 4 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        75 
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Motivate: </i>
      <span>
      Healing, shielding, or buffing allied champions (excluding yourself) grants you and them 25% bonus movement
       speed for 1.5 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        4 (per champion) 
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      5 ability haste
      </span>
    </div>,
    21:
    <div>
      <b className='yellow'>Stridebreaker</b>
      <hr></hr>
      <span>
        50 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        20% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <br></br>
      <span>
        300 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Halting Slash: </i>
      <span>
      Deal 175% base AD physical damage to enemies in a 450 radius around you and slow them by 40% for 3 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
      15 (reduced by ability haste)
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Heroic Gait: </i>
      <span>
      Dealing physical damage grants you 20 bonus movement speed for 2 seconds.
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      2% bonus movement speed
      </span>
    </div>,
    22:
    <div>
      <b className='yellow'>Sunfire Aegis</b>
      <hr></hr>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        350 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        35 <img src={armorIcon}></img> Armor
      </span>
      <br></br>
      <span>
        35 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Immolate: </i>
      <span>
      Taking or dealing damage activates this passive for 3 seconds. Deal 12 to 30 (based on level) (+ 1% bonus health) 
      magic damage per second to enemies within 325 (+ 100% bonus size) units. Damaging enemy champions or epic monsters 
      with this effect grants a stack for 5 seconds, increasing subsequent Immolate damage by 12%, stacking up to 6 times 
      for a 72% increase.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Flametouch: </i>
      <span>
      At maximum stacks, your basic attacks explode around you, burning nearby enemies for your current 
      Immolate damage for 3 seconds. 
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      5% tenacity, 50 bonus health and 5% slow resist
      </span>
    </div>,
    23:
    <div>
      <b className='yellow'>Trinity Force</b>
      <hr></hr>
      <span>
        35 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        30% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <br></br>
      <span>
        300 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Threefold Strike: </i>
      <span>
      Basic attacks grant 20 bonus movement speed for 3 seconds and, if the target is a champion or a structure,
       increase base attack damage by 4% for the same duration, stacking up to 5 times for a 20% increase. 
       Stacks decay once every 0.5 seconds after the duration ends.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Spellblade: </i>
      <span>
      After using an ability, your next basic attack within 10 seconds deals 200% base AD bonus physical damage on-hit.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        1.5
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      3 bonus attack damage, 3 ability haste, and 3 bonus movement speed
      </span>
    </div>,
    24:
    <div>
      <b className='yellow'>Turbo Chemtank</b>
      <hr></hr>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        350 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        25 <img src={armorIcon}></img> Armor
      </span>
      <br></br>
      <span>
        25 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Supercharged: </i>
      <span>
      For 4 seconds, grants 40% bonus movement speed and ghosting when moving towards a turret or visible enemy
       champion within 2000 units. After the duration or when an enemy champion is within 225 range,
        you emit a shockwave, slowing enemy champions within 450 range by 50% for 1.5 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        90
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Refuel: </i>
      <span>
      Gain 5 stacks per instance of damage taken from champions and large monsters per cast instance and 1 stack for
       every 25 units travelled, capped at 10 stacks for dashes or blinks. At 100 stacks, your next basic attack
        deals 40 to 120 (based on level) (+ 1% maximum health) (+ 3% movement speed) magic damage to all nearby enemies. 
      </span>
      <hr></hr>
      <i className='yellow'>Mythic Passive: </i>
      <span>
      50 bonus health and 5 ability haste
      </span>
    </div>
  }

  legendItems = {
    0: 
    <div>
      <b className='yellow'>Abyssal Mask</b>
      <hr></hr>
      <span>
        10 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        450 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        30 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Unmake: </i>
      <span>
      Reduce enemy champion  magic resistance by 5 (+ 1.2% bonus health), minimum of 10.4, maximum of 25.
      Gain 7 bonus magic resistance per cursed enemy.
      </span>
    </div>,
    1:
    <div>
      <b className='yellow'>Anathema's Chains</b>
      <hr></hr>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        650 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Vow: </i>
      <span>
      Designate the target enemy champion as your Nemesis and gain 1 stack of Vendetta every 2 seconds over 60 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        90 (Cannot be cast for 15 seconds while in combat with champions and having a Nemesis)
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Vendetta: </i>
      <span>
      Take 1% reduced damage per stack of Vendetta from your Nemesis, up to 30% reduced damage.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Vengeance: </i>
      <span>
      At maximum stacks, your Nemesis has 20% reduced tenacity while they are within 700 units of you.
      </span>
    </div>,
    2:
    <div>
      <b className='yellow'>Archangel's Staff</b>
      <hr></hr>
      <span>
        60 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        200 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        500 <img src={manaIcon}></img> Mana
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Awe: </i>
      <span>
      Grants ability haste equal to 0.5% bonus mana.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Mana Charge: </i>
      <span>
      Grants a charge every 8 seconds, up to 4 charges. Affecting an enemy or ally with an ability consumes
        a charge and grants 3 bonus mana, increased to 6 if it's a champion, up to a maximum of 360 bonus mana.
      </span>
    </div>,
    3:
    <div>
      <b className='yellow'>Ardent Censer</b>
      <hr></hr>
      <span>
        60 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        100% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <br></br>
      <span>
        10% <img src={healShieldIcon}></img> Heal and Shield Power
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Sanctify: </i>
      <span>
      Healing or shielding allied champions (excluding yourself) gives you and your ally 10% − 30% 
      (based on target's level) bonus attack speed and 5 − 20 (based on target's level) bonus magic damage on-hit
      on basic attacks for 6 seconds.
      </span>
    </div>,
    4:
    <div>
      <b className='yellow'>Axiom Arc</b>
      <hr></hr>
      <span>
        55 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        25 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        10 <img src={arPenIcon}></img> Lethality
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Flux: </i>
      <span>
      Enemy champion takedowns within 3 seconds of damaging them refunds 20% of your ultimate's total cooldown.
      </span>
    </div>,
    5:
    <div>
      <b className='yellow'>Banshee's Veil</b>
      <hr></hr>
      <span>
        80 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        10 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        45 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Annul: </i>
      <span>
      Grants a spell shield that blocks the next hostile ability.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        40 (restarts upon taking damage from champions)
      </span>
    </div>,
    6:
    <div>
      <b className='yellow'>Black Cleaver</b>
      <hr></hr>
      <span>
        45 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        30 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        350 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Carve: </i>
      <span>
      Dealing physical damage to an enemy champion applies a stack of Carve for 6 seconds, stacking up to 6 times.
        Each stack reduces the target's armor by 5%, up to 30% at 6 stacks.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Rage: </i>
      <span>
      Dealing physical damage to an enemy champion grants 3 bonus movement speed per stack of Carve on them
        for 2 seconds, up to 18.
      </span>
    </div>,
    7:
    <div>
      <b className='yellow'>Black Mist Scythe</b>
      <hr></hr>
      <span>
        20 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        75 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        100% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <br></br>
      <span>
        3 <img src={goldIcon} style={{width: '20px', height: '15px'}}></img> Gold per 10 seconds
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Warding: </i>
      <span>
      Consumes a charge to place a Stealth Ward at the target location (4 charges; 600 range).
      </span>
    </div>,
    8:
    <div>
      <b className='yellow'>Blade of the Ruined King</b>
      <hr></hr>
      <span>
        40 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        25% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <br></br>
      <span>
        8% <img src={lifestealIcon} className='smallIcon'></img> Life Steal
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Mist's Edge: </i>
      <span>
      Basic attacks deal (Melee 12% / Ranged 8%) of the target's current health bonus physical damage on-hit,
        with a minimum of 15 against all units.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Siphon: </i>
      <span>
      Basic attacks on-hit against enemy champions apply a stack for 6 seconds. The third stack consumes all stacks
        to deal 40 − 150 (based on level) bonus magic damage on-hit and slow the target by 25% for 2 seconds,
        while also granting you 25% bonus movement speed for the same duration.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        20
      </span>
    </div>,
    9:
    <div>
      <b className='yellow'>Bloodthirster</b>
      <hr></hr>
      <span>
        55 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <br></br>
      <span>
        20% <img src={lifestealIcon} className='smallIcon'></img> Life Steal
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Ichorshield: </i>
      <span>
      Convert excess healing from life steal into a shield for up to 50 − 350 (based on level),
        which slowly decays after not dealing or taking damage for 25 seconds.
      </span>
    </div>,
    10:
    <div>
      <b className='yellow'>Bulwark of the Mountain</b>
      <hr></hr>
      <span>
        20 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        250 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        100% <img src={healthRegenIcon}></img> Base Health Regen.
      </span>
      <br></br>
      <span>
        3 <img src={goldIcon} style={{width: '20px', height: '15px'}}></img> Gold per 10 seconds
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Warding: </i>
      <span>
      Consumes a charge to place a Stealth Ward at the target location (4 charges; 600 range).
      </span>
    </div>,
    11:
    <div>
      <b className='yellow'>Chempunk Chainsword</b>
      <hr></hr>
      <span>
        45 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        250 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Hackshorn: </i>
      <span>
      Dealing physical damage to enemy champions inflicts them with 40% Grievous Wounds for 3 seconds,
        increased to 60% if the target is left with less than 50% of their maximum health.
      </span>
    </div>,
    12:
    <div>
      <b className='yellow'>Chemtech Putrifier</b>
      <hr></hr>
      <span>
        55 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        100% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Puffcap Toxin: </i>
      <span>
      Dealing magic damage to enemy champions inflicts them with 40% Grievous Wounds for 3 seconds.
        Healing or shielding allied champions (excluding yourself) empowers your and their next instance of
        damage against enemy champions within 5 seconds to apply 60% Grievous Wounds for 3 seconds.
      </span>
    </div>,
    13:
    <div>
      <b className='yellow'>Cosmic Drive</b>
      <hr></hr>
      <span>
        65 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        30 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        200 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        5% <img src={moveSpeedIcon}></img> Movement Speed
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Spelldance: </i>
      <span>
      After damaging a champion with 3 separate basic attacks or abilities within 3 seconds, gain 15% bonus
        movement speed, decaying to 5% over 2 seconds, and 40 ability power until exiting champion combat (5 seconds).
      </span>
    </div>,
    14:
    <div>
      <b className='yellow'>Dead Man's Plate</b>
      <hr></hr>
      <span>
        300 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        45 <img src={armorIcon}></img> Armor
      </span>
      <br></br>
      <span>
        5% <img src={moveSpeedIcon}></img> Movement Speed
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Shipwrecker: </i>
      <span>
      While moving, generate 7 stacks of Momentum per 0.25 seconds, up to 40 bonus movement speed at
        100 stacks. Momentum decays by 15 every 0.25 seconds while immobilized. Basic attacks consume all stacks 
        to deal 0 − 40 (based on Momentum) (+ 0% − 100% (based on Momentum) base AD) bonus physical damage.
        At maximum stacks, the target is slowed by 50% for 1 second.
      </span>
    </div>,
    15:
    <div>
      <b className='yellow'>Death's Dance</b>
      <hr></hr>
      <span>
        55 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        45 <img src={armorIcon}></img> Armor
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Ignore Pain: </i>
      <span>
      Stores (Melee 30% / Ranged 10%) of all post-mitigation physical and magic damage received, including
        on shields, which is taken as true damage over 3 seconds instead (one third stored damage per second).
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Defy: </i>
      <span>
      If an enemy champion dies within 3 seconds of you damaging them, remove Ignore Pain's remaining stored damage
        and heal for 175% bonus AD over 2 seconds.
      </span>
    </div>,
    16:
    <div>
      <b className='yellow'>Demonic Embrace</b>
      <hr></hr>
      <span>
        60 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        450 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Dark Pact: </i>
      <span>
      Gain ability power equal to 2% bonus health.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Azakana Gaze: </i>
      <span>
      Ability damage deals an additional (Melee 8% / Ranged 4.8%) of the enemy's maximum health as total
        magic damage over 4 seconds.
      </span>
    </div>,
    17:
    <div>
      <b className='yellow'>Edge of Night</b>
      <hr></hr>
      <span>
        50 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        325 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        10 <img src={arPenIcon}></img> Lethality
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Annul: </i>
      <span>
      Grants a spell shield that blocks the next hostile ability.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        40 (restarts upon taking damage from champions)
      </span>
    </div>,
    18:
    <div>
      <b className='yellow'>Essence Reaver</b>
      <hr></hr>
      <span>
        45 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Spellblade: </i>
      <span>
      After using an ability, your next basic attack within 10 seconds deals 100% base AD (+ 40% bonus AD)
        bonus physical damage on-hit and restores mana equal to 40% base AD (+ 16% bonus AD).
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        1.5 (begins after using empowered attack)
      </span>
    </div>,
    19:
    <div>
      <b className='yellow'>Fimbulwinter</b>
      <hr></hr>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        350 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        860 <img src={manaIcon}></img> Mana
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Awe: </i>
      <span>
      Grants bonus health equal to 8% maximum mana.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Everlasting: </i>
      <span>
      Immobilizing, or slowing (melee only), an enemy champion consumes 3% current mana to grant a 100 − 200 
      (based on level) (+ 5% current mana) shield for 3 seconds. The shield increases by 80% if more than one 
      enemy champion nearby. Doesn't activate if below 20% maximum mana.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        8
      </span>
    </div>,
    20:
    <div>
      <b className='yellow'>Force of Nature</b>
      <hr></hr>
      <span>
        350 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        70 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <br></br>
      <span>
        5% <img src={moveSpeedIcon}></img> Movement Speed
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Absorb: </i>
      <span>
      Taking magic damage from champions grants a stack of Steadfast for 7 seconds, stacking up to 6 times (duration
        refreshes on subsequent magic damage and whenever dealing damage to them). Being immobilized by an enemy
        champion grants 2 stacks and refreshes the duration. Damaging basic attacks and spells per cast instance
          can only grant 1 stack of Steadfast every 1 second.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Dissipate</i>
      <span>
      While at 6 stacks of Steadfast, gain 10% bonus movement speed and reduce all incoming magic damage by 25%.
      </span>
    </div>,
    21:
    <div>
      <b className='yellow'>Frozen Heart</b>
      <hr></hr>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        400 <img src={manaIcon}></img> Mana
      </span>
      <br></br>
      <span>
        80 <img src={armorIcon}></img> Armor
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Rock Solid: </i>
      <span>
      Every incoming instance of post-mitigation basic attack damage is reduced by 7 (+ 3.5 per 1000 maximum health),
        maximum 40% reduction each.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Winter's Caress: </i>
      <span>
      Cripples the attack speed of nearby enemies by 20% (700 (center-to-edge) radius).
      </span>
    </div>,
    22:
    <div>
      <b className='yellow'>Gargoyle Stoneplate</b>
      <hr></hr>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        60 <img src={armorIcon}></img> Armor
      </span>
      <br></br>
      <span>
        60 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Monolith: </i>
      <span>
      Gain a shield for 100 (+ 100% bonus health), decaying over 2.5 seconds, and 25% increased size while active.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        90
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Fortify: </i>
      <span>
      Increase your bonus armor and bonus magic resistance by 5% for 6 seconds when a champion deals damage to you,
        stacks up to 5 times for a maximum of 25%. This stacks once per unique champion.
      </span>
    </div>,
    23:
    <div>
      <b className='yellow'>Guardian Angel</b>
      <hr></hr>
      <span>
        40 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        40 <img src={armorIcon}></img> Armor
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Rebirth: </i>
      <span>
      Upon taking lethal damage, enter resurrection for 4 seconds, during which you are invulnerable, untargetable,
        and unable to act, and afterwards heal for 50% of base health and restore 30% of maximum mana.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        300 (starts after resurrecting)
      </span>
    </div>,
    24:
    <div>
      <b className='yellow'>Guinsoo's Rageblade</b>
      <hr></hr>
      <span>
        45% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <br></br>
      <span>
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Wrath: </i>
      <span>
      Convert every 1% critical strike chance into 2 bonus physical damage on-hit, capped at 100% critical strike
        chance, for a maximum of 200 bonus physical damage on-hit. This damage is affected by critical strike modifiers.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Seething Strike: </i>
      <span>
      Basic attacks grant a stack for 6 seconds, up to 2 stacks. At 2 stacks, the next basic attack consumes all
        stacks to apply on-hit effects to the target at 100% effectiveness after a 0.15 second delay.
      </span>
    </div>,
    25:
    <div>
      <b className='yellow'>Horizon Focus</b>
      <hr></hr>
      <span>
        85 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        150 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Hypershot: </i>
      <span>
      Dealing ability damage to a champion with an ability that is neither unit-targeted nor auto-targeted at
        more than 700 units away or slowing, immobilizing or polymorphing one reveals them and increases your
        damage dealt to them by 10% for 6 seconds.
      </span>
    </div>,
    26:
    <div>
      <b className='yellow'>Hullbreaker</b>
      <hr></hr>
      <span>
        50 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        400 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        150% <img src={healthRegenIcon}></img> Base Health Regen.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Boarding Party: </i>
      <span>
      While no allied champions are within 1400 units, gain (Melee 10 − 75 / Ranged 5 − 37.5) (based on level)
        bonus armor and bonus magic resistance and 20% bonus basic damage against structures. Nearby allied siege
        minions siege minions and super minions super minions gain (Melee 30 − 225 / Ranged 15 − 112.5)
          (based on level) bonus armor and bonus magic resistance, 10% bonus size and deal 200% bonus damage
          against structures. Bonus resistances are lost instantly when an allied champion is nearby.
      </span>
    </div>,
    27:
    <div>
      <b className='yellow'>Infinity Edge</b>
      <hr></hr>
      <span>
        70 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Perfection: </i>
      <span>
      Gain 35% bonus critical strike damage if you have at least 60% critical strike chance.
      </span>
    </div>,
    28:
    <div>
      <b className='yellow'>Knight's Vow</b>
      <hr></hr>
      <span>
        10 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        400 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        200% <img src={healthRegenIcon}></img> Base Health Regen.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Pledge: </i>
      <span>
      Designate an allied champion as Worthy, forming a tether between you and them. Champions can only be
        designated as Worthy by one Knight's Vow at a time.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        60
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Sacrifice: </i>
      <span>
      While your Worthy ally is nearby and you are above 30% of your maximum health, redirect 10% of the
        post-mitigation physical and magic damage they take to you as true damage and heal for 8% of the damage
        dealt by your Worthy ally to champions. If they are below 30% maximum health, the damage redirection
          is increased to 20%.
      </span>
    </div>,
    29:
    <div>
      <b className='yellow'>Lich Bane</b>
      <hr></hr>
      <span>
        75 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        8% <img src={moveSpeedIcon}></img> Movement Speed
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Spellblade: </i>
      <span>
      After using an ability, your next basic attack within 10 seconds deals 75% base AD (+ 50% AP) bonus
        magic damage on-hit. 
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        1.5 (begins after using empowered attack)
      </span>
    </div>,
    30:
    <div>
      <b className='yellow'>Lord Dominik's Regards</b>
      <hr></hr>
      <span>
        30 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <br></br>
      <span>
        35% <img src={arPenIcon}></img> Armor Penetration
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Giant Slayer: </i>
      <span>
      Deal 0% − 15% (based on maximum health difference) bonus physical damage against enemy champions
        with greater maximum health than you.
      </span>
    </div>,
    31:
    <div>
      <b className='yellow'>Manamune</b>
      <hr></hr>
      <span>
        35 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        500 <img src={manaIcon}></img> Mana
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Awe: </i>
      <span>
      Grants bonus attack damage equal to 2.5% maximum mana.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Mana Charge: </i>
      <span>
      Grants a charge every 8 seconds, up to 4 charges. Consumes a charge on-hit and whenever affecting an enemy or 
      ally with an ability to grant 3 bonus mana, 6 for champion targets, up to a maximum of 360 bonus mana.
      </span>
    </div>,
    32:
    <div>
      <b className='yellow'>Maw of Malmortius</b>
      <hr></hr>
      <span>
        55 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        50 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Lifeline: </i>
      <span>
      If you would take magic damage that would reduce you below 30% of your maximum health, you first gain a 
      shield that absorbs (Melee 200 / Ranged 150) (+ (Melee 225% / Ranged 168.75%) bonus AD) magic damage for 5 
      seconds. Also grants 12% omnivamp for 5 seconds. After 2 seconds into the duration, taking or dealing damage 
      refreshes this effect to 3 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
      60
      </span>
    </div>,
    33:
    <div>
      <b className='yellow'>Mejai's Soulstealer</b>
      <hr></hr>
      <span>
        20 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        100 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Glory: </i>
      <span>
      Gain 4 stacks per champion kill and 2 per assist, up to a maximum of 25 stacks. Lose 10 stacks on death. 
      Stacks are preserved from Dark Seal.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Dread: </i>
      <span>
      Gain 5 ability power per stack of Glory and 10% bonus movement speed if you have at least 10 stacks.
      </span>
    </div>,
    34:
    <div>
      <b className='yellow'>Mercurial Scimitar</b>
      <hr></hr>
      <span>
        40 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <br></br>
      <span>
        30 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Quicksilver: </i>
      <span>
      Removes all crowd control debuffs (except airborne) from your champion and grants 50% bonus total movement 
      speed and ghosting for 1 second.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
      90
      </span>
    </div>,
    35:
    <div>
      <b className='yellow'>Mikael's Blessing</b>
      <hr></hr>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        100% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <br></br>
      <span>
        50 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <br></br>
      <span>
        20% <img src={healShieldIcon}></img> Heal and Shield Power
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Purify: </i>
      <span>
      Remove all crowd control debuffs (except airborne, blind, disarm, ground, nearsight, and suppression) from 
      yourself or an allied champion and heal the target for 100 − 200 (based on target's level).
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        120
      </span>
    </div>,
    36:
    <div>
      <b className='yellow'>Morellonomicon</b>
      <hr></hr>
      <span>
        80 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        250 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Affliction: </i>
      <span>
      Dealing magic damage to enemy champions inflicts them with 40% Grievous Wounds for 3 seconds, increased 
      to 60% if the target is left with less than 50% of their maximum health.
      </span>
    </div>,
    37:
    <div>
      <b className='yellow'>Mortal Reminder</b>
      <hr></hr>
      <span>
        25 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        25% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <br></br>
      <span>
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <br></br>
      <span>
        7% <img src={moveSpeedIcon}></img> Movement Speed
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Sepsis: </i>
      <span>
      Dealing physical damage to enemy champions inflicts them with 40% Grievous Wounds for 3 seconds. Basic 
      attacking a champion 3 times while they remain affected by Grievous Wounds increases their effect to 60% 
      (refreshes upon dealing physical damage).
      </span>
    </div>,
    38:
    <div>
      <b className='yellow'>Muramana</b>
      <hr></hr>
      <span>
        35 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        860 <img src={manaIcon}></img> Mana
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Awe: </i>
      <span>
      Grants bonus attack damage equal to 2.5% maximum mana.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Shock: </i>
      <span>
      Basic attacks on-hit against champions deal 1.5% maximum mana bonus physical damage. Dealing ability damage 
      to champions with abilities deals (Melee 3.5% / Ranged 2.7%) maximum mana (+ 6% AD) bonus physical damage. 
      Can only be triggered on the same target once every 6.5 seconds from the same attack or cast.
      </span>
    </div>,
    39:
    <div>
      <b className='yellow'>Nashor's Tooth</b>
      <hr></hr>
      <span>
        100 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        50% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Icathian Bite: </i>
      <span>
      Basic attacks deal 15 (+ 20% AP) bonus magic damage on-hit.
      </span>
    </div>,
    40:
    <div>
      <b className='yellow'>Navori Quickblades</b>
      <hr></hr>
      <span>
        60 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        30 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Deft Strikes: </i>
      <span>
      Basic attacks that critically strike reduce your basic abilities' cooldowns by 20% of their remaining cooldowns.
      </span>
    </div>,
    41:
    <div>
      <b className='yellow'>Pauldrons of Whiterock</b>
      <hr></hr>
      <span>
        15 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        250 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        100% <img src={healthRegenIcon}></img> Base Health Regen.
      </span>
      <br></br>
      <span>
        3 <img src={goldIcon} style={{width: '20px', height: '15px'}}></img> Gold per 10 seconds
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Warding: </i>
      <span>
      Consumes a charge to place a Stealth Ward at the target location (4 charges; 600 range).
      </span>
    </div>,
    42:
    <div>
      <b className='yellow'>Phantom Dancer</b>
      <hr></hr>
      <span>
        20 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        25% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <br></br>
      <span>
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <br></br>
      <span>
        7% <img src={moveSpeedIcon}></img> Movement Speed
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Spectral Waltz: </i>
      <span>
      Basic attacks on-attack grant ghosting, 7% bonus movement speed, and a stack of Spectral Waltz for 3 seconds, 
      up to 4 stacks. While at 4 stacks, gain 30% bonus attack speed.
      </span>
    </div>,
    43:
    <div>
      <b className='yellow'>Rabadon's Deathcap</b>
      <hr></hr>
      <span>
        120 <img src={APIcon}></img> Ability Power
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Magical Opus: </i>
      <span>
      Increase your ability power by 35%.
      </span>
    </div>,
    44:
    <div>
      <b className='yellow'>Randuin's Omen</b>
      <hr></hr>
      <span>
        10 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        250 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        80 <img src={armorIcon}></img> Armor
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Humility: </i>
      <span>
      Unleash a shockwave around you that slows nearby enemies by 99% for 0.25 seconds and reduces their attack 
      damage by 10% and critical strike damage by 20% for 4 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        60
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Rock Solid: </i>
      <span>
      Every incoming instance of post-mitigation basic damage is reduced by 5 (+ 3.5 per 1000 maximum health), 
      maximum 40% reduction each.
      </span>
    </div>,
    45:
    <div>
      <b className='yellow'>Rapid Firecannon</b>
      <hr></hr>
      <span>
        35% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <br></br>
      <span>
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <br></br>
      <span>
        7% <img src={moveSpeedIcon}></img> Movement Speed
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Energized: </i>
      <span>
      Moving and basic attacking generates Energize stacks, up to 100.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Sharpshooter </i>
      <span>
      When fully Energized, your next basic attack deals 120 bonus magic damage on-hit. Energized attacks gain 
      35% bonus range, capped at 150.
      </span>
    </div>,
    46:
    <div>
      <b className='yellow'>Ravenous Hydra</b>
      <hr></hr>
      <span>
        70 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        10% <img src={vampIcon} className='smallIcon'></img> Omnivamp
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Cleave: </i>
      <span>
      Damaging basic attacks and ability damage from abilities deal 60% − 12% (based on distance) AD physical damage 
      to other enemies near the target. Can only hit each target once per attack or ability, and may only trigger 
      once every 10 seconds from the same cast.
      </span>
    </div>,
    47:
    <div>
      <b className='yellow'>Redemption</b>
      <hr></hr>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        200 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        100% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <br></br>
      <span>
        20% <img src={healShieldIcon}></img> Heal and Shield Power
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Intervention: </i>
      <span>
      Grant sight of the target area for 2.5 seconds. After, allies within the area are healed 
      for 200 − 400 (based on target's level), while enemy champions within take 10% of target's maximum health 
      as true damage (5500 range). Can be used while dead.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        90
      </span>
    </div>,
    48:
    <div>
      <b className='yellow'>Runaan's Hurricane</b>
      <hr></hr>
      <span>
        45% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <br></br>
      <span>
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <br></br>
      <span>
        7% <img src={moveSpeedIcon}></img> Movement Speed
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Wind's Fury: </i>
      <span>
      Basic attacks fire additional bolts at up to 2 enemies in front of you, each dealing 40% AD physical damage. 
      Bolts apply on-hit effects at 100% effectiveness and are affected by critical strike modifiers. The bolts will 
      target the closest enemies to you that are not the main target.
      </span>
    </div>,
    49:
    <div>
      <b className='yellow'>Rylai's Crystal Scepter</b>
      <hr></hr>
      <span>
        75 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        400 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Rimefrost: </i>
      <span>
      Dealing ability damage slows affected units by 30% for 1 second.
      </span>
    </div>,
    50:
    <div>
      <b className='yellow'>Seraph's Embrace</b>
      <hr></hr>
      <span>
        80 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        250 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        860 <img src={manaIcon}></img> Mana
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Awe: </i>
      <span>
      Grants ability haste equal to 1.3% bonus mana.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Empyrean: </i>
      <span>
      Heal for 35% of mana spent, up to 25 − 50 (based on level) (+ 10% AP) per cast. Toggle abilities can 
      heal up to 25 − 50 (based on level) (+ 10% AP) per second.
      </span>
    </div>,
    51:
    <div>
      <b className='yellow'>Serpent's Fang</b>
      <hr></hr>
      <span>
        55 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        12 <img src={arPenIcon}></img> Lethality
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Shield Reaver: </i>
      <span>
      Dealing damage to an enemy champion reduces any shields they gain within 3 seconds by (Melee 50% / Ranged 35%), 
      and if the target was not already afflicted by this effect, reduces all of their active shields by the same amount.
      </span>
    </div>,
    52:
    <div>
      <b className='yellow'>Serylda's Grudge</b>
      <hr></hr>
      <span>
        45 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        30% <img src={arPenIcon}></img> Armor Penetration
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Bitter Cold: </i>
      <span>
      Dealing ability damage slows affected units by 30% for 1 second.
      </span>
    </div>,
    53:
    <div>
      <b className='yellow'>Shadowflame</b>
      <hr></hr>
      <span>
        100 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        200 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Cinderbloom: </i>
      <span>
      Dealing magic damage to champions ignores 10 − 20 (based on target's current health) of their magic resistance, 
      increased to maximum value if the they were affected by a shield within the last 5 seconds.
      </span>
    </div>,
    54:
    <div>
      <b className='yellow'>Shard of True Ice</b>
      <hr></hr>
      <span>
        40 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        75 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        100% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <br></br>
      <span>
        3 <img src={goldIcon} style={{width: '20px', height: '15px'}}></img> Gold per 10 seconds
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Warding: </i>
      <span>
      Consumes a charge to place a Stealth Ward at the target location (4 charges; 600 range).
      </span>
    </div>,
    55:
    <div>
      <b className='yellow'>Silvermere Dawn</b>
      <hr></hr>
      <span>
        40 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        300 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        35 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Quicksilver: </i>
      <span>
      Removes all crowd control debuffs (except airborne) from your champion and grants 40% tenacity, 40% 
      slow resist, and ghosting for 3 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
      90
      </span>
    </div>,
    56:
    <div>
      <b className='yellow'>Spirit Visage</b>
      <hr></hr>
      <span>
        10 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        450 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        100% <img src={healthRegenIcon}></img> Base Health Regen.
      </span>
      <br></br>
      <span>
        40 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Boundless Vitality: </i>
      <span>
      Increases all healing and shielding received by 25%.
      </span>
    </div>,
    57:
    <div>
      <b className='yellow'>Staff of Flowing Water</b>
      <hr></hr>
      <span>
        50 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        100% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <br></br>
      <span>
        10% <img src={healShieldIcon}></img> Heal and Shield Power
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Rapids: </i>
      <span>
      Healing or shielding allied champions (excluding yourself) grants you and them 25 − 45 
      (based on target's level) ability power and 20 ability haste for 4 seconds.
      </span>
    </div>,
    58:
    <div>
      <b className='yellow'>Sterak's Gage</b>
      <hr></hr>
      <span>
        400 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - The Claws that Catch: </i>
      <span>
      Gain 40% base AD as bonus attack damage.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Lifeline: </i>
      <span>
      If you would take damage that would reduce you below 30% of your maximum health, gain a shield equal 
      to 75% of bonus health that decays over 3.75 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        60
      </span>
    </div>,
    59:
    <div>
      <b className='yellow'>Stormrazor</b>
      <hr></hr>
      <span>
        40 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        15% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <br></br>
      <span>
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Energized: </i>
      <span>
      Moving and basic attacking generates Energize stacks, up to 100.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Paralyze: </i>
      <span>
      When fully Energized, your next basic attack deals 120 bonus magic damage on-hit. Energized effects 
      slow by 75% for 0.5 seconds.
      </span>
    </div>,
    60:
    <div>
      <b className='yellow'>The Collector</b>
      <hr></hr>
      <span>
        55 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <br></br>
      <span>
        12 <img src={arPenIcon}></img> Lethality
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Death and Taxes: </i>
      <span>
      If you deal post-mitigation damage that would leave a champion below 5% of their maximum health, 
      execute them. Champion kills grant you an additional 25 Gold.
      </span>
    </div>,
    61:
    <div>
      <b className='yellow'>Thornmail</b>
      <hr></hr>
      <span>
        350 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        60 <img src={armorIcon}></img> Armor
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Thorns: </i>
      <span>
      When struck by a basic attack on-hit, deal 10 (+ 10% bonus armor) magic damage to the attacker and, if they 
      are a champion, inflict them with 40% Grievous Wounds for 3 seconds. Immobilizing enemy champions also 
      inflicts them with 60% Grievous Wounds for 3 seconds.
      </span>
    </div>,
    62:
    <div>
      <b className='yellow'>Titanic Hydra</b>
      <hr></hr>
      <span>
        30 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        500 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Colossus: </i>
      <span>
      Gain bonus attack damage equal to 2% of bonus health.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Cleave: </i>
      <span>
      Basic attacks deal (Melee 4 / Ranged 3) (+ (Melee 1.5% / Ranged 1.125%) maximum health) bonus physical damage 
      to the target and (Melee 40 / Ranged 30) (+ (Melee 3% / Ranged 2.25%) maximum health) physical damage to other 
      enemies in a cone in the direction of the target.
      </span>
    </div>,
    63:
    <div>
      <b className='yellow'>Umbral Glaive</b>
      <hr></hr>
      <span>
        50 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        10 <img src={arPenIcon}></img> Lethality
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Blackout: </i>
      <span>
      When near an enemy ward or trap, gain Blackout for 8 seconds (400 radius). You disable surrounding stealthed 
      wards, as well as expose and reveal nearby stealthed wards and traps while Blackout is active.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        35
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive: </i>
      <span>
      Your basic attacks instantly kill revealed traps and deal 2 bonus true damage to wards.
      </span>
    </div>,
    64:
    <div>
      <b className='yellow'>Vigilant Wardstone</b>
      <hr></hr>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        150 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Arcane Cache: </i>
      <span>
        Stores up to 3 purchased Control Wards.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Behold: </i>
      <span>
        Increases Stealth Ward, Totem Ward, and Control Ward caps by 1.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Blessing of Ixtal: </i>
      <span>
        Increases bonus attack damage, bonus health, ability power and ability haste by 12%.
      </span>
    </div>,
    65:
    <div>
      <b className='yellow'>Void Staff</b>
      <hr></hr>
      <span>
        65 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        45% <img src={mPenIcon}></img> Magic Penetration
      </span>
    </div>,
    66:
    <div>
      <b className='yellow'>Warmog's Armor</b>
      <hr></hr>
      <span>
        10 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        800 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        200% <img src={healthRegenIcon}></img> Base Health Regen.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Warmog's Heart: </i>
      <span>
      If you have at least 1100 bonus health, regenerate 2.5% maximum health every 0.5 seconds if damage has not 
      been taken in the last 6 seconds (3 seconds for damage from non-champions).
      </span>
    </div>,
    67:
    <div>
      <b className='yellow'>Winter's Approach</b>
      <hr></hr>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        350 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        500 <img src={manaIcon}></img> Mana
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Awe: </i>
      <span>
      Grants bonus health equal to 8% maximum mana.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Mana Charge: </i>
      <span>
      Grants a charge every 8 seconds, up to 4 charges. Consumes a charge on-hit and whenever affecting an enemy or 
      ally with an ability to grant 3 bonus mana, increased to 6 for champion targets, up to a maximum of 360 bonus mana.
      </span>
    </div>,
    68:
    <div>
      <b className='yellow'>Wit's End</b>
      <hr></hr>
      <span>
        40 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        40% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <br></br>
      <span>
        40 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Fray: </i>
      <span>
      Basic attacks deal 15 − 80 (based on level) bonus magic damage and grant 20 bonus movement speed for 2 seconds.
      </span>
    </div>,
    69:
    <div>
      <b className='yellow'>Youmuu's Ghostblade</b>
      <hr></hr>
      <span>
        55 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        18 <img src={arPenIcon}></img> Lethality
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Wraith Step: </i>
      <span>
      Gain 20% bonus movement speed and ghosting for 6 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        45
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Haunt: </i>
      <span>
      Gain 40 bonus movement speed while out-of-combat.
      </span>
    </div>,
    70:
    <div>
      <b className='yellow'>Zeke's Convergence</b>
      <hr></hr>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        250 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        250 <img src={manaIcon}></img> Mana
      </span>
      <br></br>
      <span>
        25 <img src={armorIcon}></img> Armor
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Conduit: </i>
      <span>
        Designate an allied champion as the Accomplice, forming a  tether between you and them. Champions can only 
        be designated as the Accomplice by one Zeke's Convergence at a time.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        60
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Convergence: </i>
      <span>
        Immobilizing enemy champions marks them for 8 seconds. Your Accomplice's basic attacks and ability hits 
        against marked enemies fire a missile at them that deals them 30 − 70 (based on level) (+ 7.5% AP) 
        (+ 1.5% maximum health) bonus magic damage upon arrival.
      </span>
    </div>,
    71:
    <div>
      <b className='yellow'>Zhonya's Hourglass</b>
      <hr></hr>
      <span>
        65 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        10 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        45 <img src={armorIcon}></img> Armor
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Stasis: </i>
      <span>
      Enter stasis for 2.5 seconds, rendering you untargetable and invulnerable for the duration but also 
      unable to move, declare basic attacks, cast abilities, use summoner spells, or activate items.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        120
      </span>
    </div>
  }

  onMythicDisplay = (side) => {
    if (document.getElementById(`mythicButton${side}`).style.background) {
      return
    };
    document.getElementById(`legendButton${side}`).style.background = '';
    document.getElementById(`mythicButton${side}`).style.background 
      = 'linear-gradient(145deg, #ffffb9 8%, #f9b54a 9%, white 11%, white 89%, #f9b54a 90%, #ffffb9 92%)';
    this.setState({[`itemDisplay${side}`]:  Array.from(this.mythicIcons).map((iconSrc, i) => {
      return (
        <span key={i}>
          <img className='itemIcon' style={{border: '3px double #ffcb5a'}} src={iconSrc} 
          onClick={(event) => this.onMythicClick(event, side, i)}></img>
          <div className='itemTooltip' style={{top: '160px', right: '20vw'}}>
            {this.mythicItems[i]}
          </div>
        </span>
      )
    })});
    document.getElementById(`itemSearch${side}`).value = '';
  };

  onMythicClick = (event, side, mythicIndex) => {
    if (this[`haveMythic${side}`]) {
      document.getElementsByClassName('mythicLimit')[side.length-4].style.visibility = 'visible';
      return
    };
    if (this[`itemCounter${side}`] === 6) {
      return
    };
    this[`itemCounter${side}`]++;
    console.log(this[`forceType${side}`]);
    for (var i = 0; i < 12; i += 2) {
      if (document.getElementById(`inven${side}`).children[i].src === blackbg) {
        document.getElementById(`inven${side}`).children[i].setAttribute('src', event.target.src);
        document.getElementById(`inven${side}`).children[i].style.border = '3px double #ffcb5a';
        document.getElementById(`inven${side}`).children[i].style.cursor = 'pointer';
        this[`inven${side}TT${1 + (i/2)}`] = this.mythicItems[mythicIndex];
        this[`haveMythic${side}`] = true;
        break;
      } 
    };
    var itemStats = this[`itemStats${side}`];
    var totalStats = [`totalStats${side}`];
    var champStats = this[`champFile${side}`].stats;
    var spanArray = Array.from(event.target.nextSibling.getElementsByTagName('span'));
    for (var i = 0; i < spanArray.length; i++) {
      if (i !== 0 && spanArray[i].previousSibling.tagName !== 'BR') {
        break
      };
      var spanText = spanArray[i].textContent;
      var statQuantity = +spanArray[i].textContent.replace( /[^\d].*/, '' );
      var addItemStats = (stat, quantity) => {
        this.setState(prevState => ({
          [totalStats]: {
            ...prevState[totalStats],
            [stat]: +prevState[totalStats][stat] + quantity
          }
        }))
      };
      if (spanText.includes('Attack Damage')) {
        itemStats.ad += statQuantity;
        addItemStats('ad', statQuantity);
        continue;
      };
      if (spanText.includes('Attack Speed')) {
        itemStats.as += statQuantity/100;
        if (this.state[`champName${side}`] !== '') {
          addItemStats('as', (statQuantity * champStats.asRatio)/100);
        } else {
          addItemStats('as', statQuantity/100)
        };
        continue;
      };
      if (spanText.includes('Critical Strike')) {
        itemStats.critChance += statQuantity;
        addItemStats('critChance', statQuantity)
        continue;
      };
      if (spanText.includes('Ability Power')) {
        itemStats.ap += statQuantity;
        addItemStats('ap', statQuantity*this[`dcap${side}`]);
        continue;
      };
      if (spanText.includes('Ability Haste')) {
        itemStats.cdr += statQuantity;
        addItemStats('cdr', statQuantity);
        continue;
      };
      if (spanText.includes('Health')) {
        if (!spanText.includes('Regen')) {
          itemStats.hp += statQuantity;
          addItemStats('hp', statQuantity);
        } else {
          itemStats.hpRegen += statQuantity;
          if (this.state[`champName${side}`] !== '') {
            addItemStats('hpRegen', (statQuantity * champStats.baseHPRegen)/100);
          } else {
            addItemStats('hpRegen', statQuantity)
          };
        }
        continue;
      };
      if (spanText.includes('Mana') && champStats.mana.base) {
        if (!spanText.includes('Regen')) {
          itemStats.mana += statQuantity;
          addItemStats('mana', statQuantity);
          addItemStats('hp', statQuantity * this[`winter${side}`])
        } else {
          itemStats.manaRegen += statQuantity;
          if (this.state[`champName${side}`] !== '') {
            addItemStats('manaRegen', (statQuantity * champStats.mana.manaBaseRegen)/100);
          } else {
            addItemStats('manaRegen', statQuantity);
          };
        }
        continue;
      };
      if (spanText.includes('Lethality')) {
        itemStats.lethality += statQuantity;
        addItemStats('lethality', statQuantity);
        continue;
      };
      if (spanText.includes('Armor')) {
        itemStats.arm += statQuantity;
        addItemStats('arm', statQuantity);
        continue;
      };
      if (spanText.includes('Magic Resist')) {
        itemStats.mr += statQuantity;
        addItemStats('mr', statQuantity);
        continue;
      };
      if (spanText.includes('Magic Pen')) {
        if (!spanText.includes('%')) {
          itemStats.magicPenFlat += statQuantity;
          addItemStats('magicPenFlat', statQuantity)
        } else {
          itemStats.magicPenRatio += statQuantity;
          addItemStats('magicPenRatio', statQuantity)
        }
        continue;
      };
      if (spanText.includes('Omnivamp')) {
        itemStats.omni += statQuantity/100;
        addItemStats('omni', statQuantity)
        continue;
      };
      if (spanText.includes('Life')) {
        itemStats.lifeSteal += statQuantity/100;
        addItemStats('lifeSteal', statQuantity)
        continue;
      };
    };
    var bonusArray = this.mythicBonuses[mythicIndex];
    this[`mythicBonus${side}`] = bonusArray;
    if (this[`itemCounter${side}`] > 1 && bonusArray[0]) {
      if (bonusArray[0] === 'as' && this[`champName${side}`]) {
        this[`itemStats${side}`][bonusArray[0]] += bonusArray[1] * (this[`itemCounter${side}`] - 1) * champStats.asRatio;
        addItemStats(bonusArray[0], bonusArray[1] * (this[`itemCounter${side}`] - 1) * champStats.asRatio);
      } else {
        this[`itemStats${side}`][bonusArray[0]] += bonusArray[1] * (this[`itemCounter${side}`] - 1);
        addItemStats(bonusArray[0], bonusArray[1] * (this[`itemCounter${side}`] - 1));
      }
      if (bonusArray[2]) {
        this[`itemStats${side}`][bonusArray[2]] += bonusArray[3] * (this[`itemCounter${side}`] - 1);
        addItemStats(bonusArray[2], bonusArray[3] * (this[`itemCounter${side}`] - 1));
      }
    };
    if (this[`forceType${side}`] === 'ad' && itemStats.ap > itemStats.ad) {
      var adFromRunes = this[`runes${side}`].ad;
      this.setState(prevState => ({
        [`totalStats${side}`]: {
          ...prevState[`totalStats${side}`],
          ap: +prevState[`totalStats${side}`].ap + +(adFromRunes/0.6)*this[`dcap${side}`],
          ad: +prevState[`totalStats${side}`].ad - +adFromRunes
        }
      }))
      this[`runes${side}`].ap = adFromRunes/0.6;
      this[`runes${side}`].ad = 0;
      this[`forceType${side}`] = 'ap';
    } else if (this[`forceType${side}`] === 'ap' && itemStats.ad > itemStats.ap) {
      var apFromRunes = this[`runes${side}`].ap;
      this.setState(prevState => ({
        [`totalStats${side}`]: {
          ...prevState[`totalStats${side}`],
          ad: +prevState[`totalStats${side}`].ad + +apFromRunes*0.6,
          ap: +prevState[`totalStats${side}`].ap - +apFromRunes*this[`dcap${side}`]
        }
      }))
      this[`runes${side}`].ad = apFromRunes*0.6;
      this[`runes${side}`].ap = 0;
      this[`forceType${side}`] = 'ad';
    };
    if (this[`champName${side}`] === 'Aphelios') {
      return
    };
    this.calculateAbility(side)
  };

  onLegendClick = (event, side, legendIndex) => {
    if (this[`itemCounter${side}`] === 6) {
      return
    };
    this[`itemCounter${side}`]++;
    document.getElementsByClassName('mythicLimit')[side.length-4].style.visibility = 'hidden';
    for (var i = 0; i < 12; i += 2) {
      if (document.getElementById(`inven${side}`).children[i].src === blackbg) {
        document.getElementById(`inven${side}`).children[i].setAttribute('src', event.target.src);
        document.getElementById(`inven${side}`).children[i].style.cursor = 'pointer';
        this[`inven${side}TT${1 + (i/2)}`] = this.legendItems[legendIndex];
        break;
      } 
    };
    var itemStats = this[`itemStats${side}`];
    var totalStats = [`totalStats${side}`];
    var champStats = this[`champFile${side}`].stats;
    var itemTitle = Array.from(event.target.nextSibling.getElementsByTagName('b'))[0].textContent
    if (itemTitle.includes('Deathcap')) {
      this[`dcap${side}`] = 1.35
      if (this[`dcapCount${side}`] === 0) {
        this.setState(prevState => ({
          [totalStats]: {
            ...prevState[totalStats],
            ap: +prevState[totalStats].ap*1.35
          }
        }))
      };
      this[`dcapCount${side}`]++;
    };
    var champLevel = this[`level${side}`] - 1;
    var champLvlRatio = champLevel * (0.7025 + 0.0175 * champLevel);
    if (itemTitle.includes('Sterak')) {
      if (this[`sterakCount${side}`] === 0) {
        this[`sterak${side}`] = 1.4;
        this.setState(prevState => ({
          [totalStats]: {
            ...prevState[totalStats],
            ad: +prevState[totalStats].ad + (champStats.baseDamage + champStats.damagePerLvl*champLvlRatio)*0.4
          }
        }))
      };
      this[`sterakCount${side}`]++;
    };
    if (itemTitle.includes('Fimbulwinter') || itemTitle.includes(`Winter's Approach`)) {
      if (this[`winterCount${side}`] === 0) {
        this[`winter${side}`] = 0.08;
        this.setState(prevState => ({
          [totalStats]: {
            ...prevState[totalStats],
            hp: +prevState[totalStats].hp + +prevState[totalStats].mana*0.08
          }
        }))
      };
      this[`winterCount${side}`]++;
    };
    var spanArray = Array.from(event.target.nextSibling.getElementsByTagName('span'));
    for (var i = 0; i < spanArray.length; i++) {
      if (i !== 0 && spanArray[i].previousSibling.tagName !== 'BR') {
        break
      };
      var spanText = spanArray[i].textContent;
      var statQuantity = +spanArray[i].textContent.replace( /[^\d].*/, '' );
      var addItemStats = (stat, quantity) => {
        this.setState(prevState => ({
          [totalStats]: {
            ...prevState[totalStats],
            [stat]: +prevState[totalStats][stat] + quantity
          }
        }))
      };
      if (spanText.includes('Attack Damage')) {
        itemStats.ad += statQuantity;
        addItemStats('ad', statQuantity);
        continue;
      };
      if (spanText.includes('Attack Speed')) {
        itemStats.as += statQuantity/100;
        if (this.state[`champName${side}`] !== '') {
          addItemStats('as', (statQuantity * this[`champFile${side}`].stats.asRatio)/100);
        } else {
          addItemStats('as', statQuantity/100)
        };
        continue;
      };
      if (spanText.includes('Critical Strike')) {
        itemStats.critChance += statQuantity;
        addItemStats('critChance', statQuantity)
        continue;
      };
      if (spanText.includes('Ability Power')) {
        itemStats.ap += statQuantity;
        addItemStats('ap', statQuantity*this[`dcap${side}`]);
        continue;
      };
      if (spanText.includes('Ability Haste')) {
        itemStats.cdr += statQuantity;
        addItemStats('cdr', statQuantity);
        continue;
      };
      if (spanText.includes('Health')) {
        if (!spanText.includes('Regen')) {
          itemStats.hp += statQuantity;
          addItemStats('hp', statQuantity);
        } else {
          itemStats.hpRegen += statQuantity;
          if (this.state[`champName${side}`] !== '') {
            addItemStats('hpRegen', (statQuantity * this[`champFile${side}`].stats.baseHPRegen)/100);
          } else {
            addItemStats('hpRegen', statQuantity)
          };
        }
        continue;
      };
      if (spanText.includes('Mana') && champStats.mana.base) {
        if (!spanText.includes('Regen')) {
          itemStats.mana += statQuantity;
          addItemStats('mana', statQuantity);
          addItemStats('hp', statQuantity*this[`winter${side}`])
        } else {
          itemStats.manaRegen += statQuantity;
          if (this.state[`champName${side}`] !== '') {
            addItemStats('manaRegen', (statQuantity * this[`champFile${side}`].stats.mana.manaBaseRegen)/100);
          } else {
            addItemStats('manaRegen', statQuantity);
          };
        }
        continue;
      };
      if (spanText.includes('Lethality')) {
        itemStats.lethality += statQuantity;
        addItemStats('lethality', statQuantity);
        continue;
      };
      if (spanText.includes('Armor')) {
        itemStats.arm += statQuantity;
        addItemStats('arm', statQuantity);
        continue;
      };
      if (spanText.includes('Magic Resist')) {
        itemStats.mr += statQuantity;
        addItemStats('mr', statQuantity);
        continue;
      };
      if (spanText.includes('Magic Pen')) {
        if (!spanText.includes('%')) {
          itemStats.magicPenFlat += statQuantity;
          addItemStats('magicPenFlat', statQuantity)
        } else {
          itemStats.magicPenRatio += statQuantity;
          addItemStats('magicPenRatio', statQuantity)
        }
        continue;
      };
      if (spanText.includes('Omnivamp')) {
        itemStats.omni += statQuantity/100;
        addItemStats('omni', statQuantity)
        continue;
      };
      if (spanText.includes('Life')) {
        itemStats.lifeSteal += statQuantity/100;
        addItemStats('lifeSteal', statQuantity)
        continue;
      };
    };
    if (this[`haveMythic${side}`]) {
      var bonusArray = this[`mythicBonus${side}`];
      if (bonusArray[0]) {
        if (bonusArray[0] === 'as' && this[`champName${side}`]) {
          this[`itemStats${side}`][bonusArray[0]] += bonusArray[1] * champStats.asRatio;
          addItemStats(bonusArray[0], bonusArray[1] * champStats.asRatio);
        } else {
          this[`itemStats${side}`][bonusArray[0]] += bonusArray[1];
          addItemStats(bonusArray[0], bonusArray[1]);
        };
        if (bonusArray[2]) {
          this[`itemStats${side}`][bonusArray[2]] += bonusArray[3];
          addItemStats(bonusArray[2], bonusArray[3]);
        }
      }
    };
    if (this[`forceType${side}`] === 'ad' && itemStats.ap > itemStats.ad) {
      var adFromRunes = this[`runes${side}`].ad;
      this.setState(prevState => ({
        [`totalStats${side}`]: {
          ...prevState[`totalStats${side}`],
          ap: +prevState[`totalStats${side}`].ap + +(adFromRunes/0.6)*this[`dcap${side}`],
          ad: +prevState[`totalStats${side}`].ad - +adFromRunes
        }
      }))
      this[`runes${side}`].ap = adFromRunes/0.6;
      this[`runes${side}`].ad = 0;
      this[`forceType${side}`] = 'ap';
    } else if (this[`forceType${side}`] === 'ap' && itemStats.ad > itemStats.ap) {
      var apFromRunes = this[`runes${side}`].ap;
      this.setState(prevState => ({
        [`totalStats${side}`]: {
          ...prevState[`totalStats${side}`],
          ad: +prevState[`totalStats${side}`].ad + +apFromRunes*0.6,
          ap: +prevState[`totalStats${side}`].ap - +apFromRunes*this[`dcap${side}`]
        }
      }))
      this[`runes${side}`].ad = apFromRunes*0.6;
      this[`runes${side}`].ap = 0;
      this[`forceType${side}`] = 'ad'
    };
    if (this[`champName${side}`] === 'Aphelios') {
      return
    };
    this.calculateAbility(side)
  };

  onInvenClick = (event, side, i) => {
    if (event.target.src === blackbg) {
      return
    };
    this[`inven${side}TT${i}`] = <div></div>;
    this[`itemCounter${side}`]--;
    event.target.setAttribute('src', blackbg);
    event.target.style.cursor = '';
    var removedMythic = false;
    if (event.target.style.border === '3px double rgb(255, 203, 90)'){
      event.target.style.border = '3px double white';
      this[`haveMythic${side}`] = false;
      document.getElementsByClassName('mythicLimit')[side.length-4].style.visibility = 'hidden';
      removedMythic = true
    };
    var itemStats = this[`itemStats${side}`];
    var totalStats = [`totalStats${side}`];
    var champStats = this[`champFile${side}`].stats;
    var champLevel = this[`level${side}`] - 1;
    var champLvlRatio = champLevel * (0.7025 + 0.0175 * champLevel);
    var itemTitle = Array.from(event.target.nextSibling.getElementsByTagName('b'))[0].textContent
    if (itemTitle.includes('Deathcap')) {
      if (this[`dcapCount${side}`] === 1) {
        this[`dcap${side}`] = 1;
        this.setState(prevState => ({
          [totalStats]: {
            ...prevState[totalStats],
            ap: +prevState[totalStats].ap/1.35
          }
        }))
      };
      this[`dcapCount${side}`]--;
    };
    if (itemTitle.includes('Sterak')) {
      if (this[`sterakCount${side}`] === 1) {
        this[`sterak${side}`] = 1;
        this.setState(prevState => ({
          [totalStats]: {
            ...prevState[totalStats],
            ad: +prevState[totalStats].ad - (champStats.baseDamage + champStats.damagePerLvl*champLvlRatio)*0.4
          }
        }))
      };
      this[`sterakCount${side}`]--;
    };
    if (itemTitle.includes('Fimbulwinter') || itemTitle.includes(`Winter's Approach`)) {
      if (this[`winterCount${side}`] === 1) {
        this[`winter${side}`] = 0;
        this.setState(prevState => ({
          [totalStats]: {
            ...prevState[totalStats],
            hp: +prevState[totalStats].hp - +prevState[totalStats].mana*0.08
          }
        }))
      };
      this[`winterCount${side}`]--;
    };
    var spanArray = Array.from(event.target.nextSibling.getElementsByTagName('span'));
    for (var i = 0; i < spanArray.length; i++) {
      if (i !== 0 && spanArray[i].previousSibling.tagName !== 'BR') {
        break
      };
      var spanText = spanArray[i].textContent;
      var statQuantity = +spanArray[i].textContent.replace( /[^\d].*/, '' );
      var subtractItemStats = (stat, quantity) => {
        this.setState(prevState => ({
          [totalStats]: {
            ...prevState[totalStats],
            [stat]: +prevState[totalStats][stat] - quantity
          }
        }))
      };
      if (spanText.includes('Attack Damage')) {
        itemStats.ad -= statQuantity;
        subtractItemStats('ad', statQuantity);
        continue;
      };
      if (spanText.includes('Attack Speed')) {
        itemStats.as -= statQuantity/100;
        if (this.state[`champName${side}`] !== '') {
          subtractItemStats('as', (statQuantity * champStats.asRatio)/100);
        } else {
          subtractItemStats('as', statQuantity/100)
        };
        continue;
      };
      if (spanText.includes('Critical Strike')) {
        itemStats.critChance -= statQuantity;
        subtractItemStats('critChance', statQuantity)
        continue;
      };
      if (spanText.includes('Ability Power')) {
        itemStats.ap -= statQuantity;
        subtractItemStats('ap', statQuantity*this[`dcap${side}`]);
        continue;
      };
      if (spanText.includes('Ability Haste')) {
        itemStats.cdr -= statQuantity;
        subtractItemStats('cdr', statQuantity);
        continue;
      };
      if (spanText.includes('Health')) {
        if (!spanText.includes('Regen')) {
          itemStats.hp -= statQuantity;
          subtractItemStats('hp', statQuantity);
        } else {
          itemStats.hpRegen -= statQuantity;
          if (this.state[`champName${side}`] !== '') {
            subtractItemStats('hpRegen', (statQuantity * champStats.baseHPRegen)/100);
          } else {
            subtractItemStats('hpRegen', statQuantity);
          };
        }
        continue;
      };
      if (spanText.includes('Mana') && champStats.mana.base) {
        if (!spanText.includes('Regen')) {
          itemStats.mana -= statQuantity;
          subtractItemStats('mana', statQuantity);
          subtractItemStats('hp', statQuantity*this[`winter${side}`]);
        } else {
          itemStats.manaRegen -= statQuantity;
          if (this.state[`champName${side}`] !== '') {
            subtractItemStats('manaRegen', (statQuantity * champStats.mana.manaBaseRegen)/100);
          } else {
            subtractItemStats('manaRegen', statQuantity);
          };
        }
        continue;
      };
      if (spanText.includes('Lethality')) {
        itemStats.lethality -= statQuantity;
        subtractItemStats('lethality', statQuantity);
        continue;
      };
      if (spanText.includes('Armor')) {
        itemStats.arm -= statQuantity;
        subtractItemStats('arm', statQuantity);
        continue;
      };
      if (spanText.includes('Magic Resist')) {
        itemStats.mr -= statQuantity;
        subtractItemStats('mr', statQuantity);
        continue;
      };
      if (spanText.includes('Magic Pen')) {
        if (!spanText.includes('%')) {
          itemStats.magicPenFlat -= statQuantity;
          subtractItemStats('magicPenFlat', statQuantity)
        } else {
          itemStats.magicPenRatio -= statQuantity;
          subtractItemStats('magicPenRatio', statQuantity)
        }
        continue;
      };
      if (spanText.includes('Omnivamp')) {
        itemStats.omni -= statQuantity/100;
        subtractItemStats('omni', statQuantity)
        continue;
      };
      if (spanText.includes('Life')) {
        itemStats.lifeSteal -= statQuantity/100;
        subtractItemStats('lifeSteal', statQuantity)
        continue;
      };
    };
    if (removedMythic) {
      var bonusArray = this[`mythicBonus${side}`];
      if (this[`itemCounter${side}`] && bonusArray[0]) {
        if (bonusArray[0] === 'as' && this[`champName${side}`]) {
          this[`itemStats${side}`][bonusArray[0]] -= bonusArray[1] * this[`itemCounter${side}`] * champStats.asRatio;
          subtractItemStats(bonusArray[0], bonusArray[1] * this[`itemCounter${side}`] * champStats.asRatio);
        } else {
          this[`itemStats${side}`][bonusArray[0]] -= bonusArray[1] * this[`itemCounter${side}`];
          subtractItemStats(bonusArray[0], bonusArray[1] * this[`itemCounter${side}`]);
        };
        if (bonusArray[2]) {
          this[`itemStats${side}`][bonusArray[2]] -= bonusArray[3] * this[`itemCounter${side}`];
          subtractItemStats(bonusArray[2], bonusArray[3] * this[`itemCounter${side}`]);
        }
      };
      this[`mythicBonus${side}`] = [];
    };
    if (this[`haveMythic${side}`]) {
      var bonusArray = this[`mythicBonus${side}`];
      if (bonusArray[0]) {
        if (bonusArray[0] === 'as' && this[`champName${side}`]) {
          this[`itemStats${side}`][bonusArray[0]] -= bonusArray[1] * champStats.asRatio;
          subtractItemStats(bonusArray[0], bonusArray[1] * champStats.asRatio);
        } else {
          this[`itemStats${side}`][bonusArray[0]] -= bonusArray[1];
          subtractItemStats(bonusArray[0], bonusArray[1]);
        };
        if (bonusArray[2]) {
          this[`itemStats${side}`][bonusArray[2]] -= bonusArray[3];
          subtractItemStats(bonusArray[2], bonusArray[3]);
        }
      };
    };
    if (this[`forceType${side}`] === 'ad' && itemStats.ap > itemStats.ad) {
      var adFromRunes = this[`runes${side}`].ad;
      this.setState(prevState => ({
        [`totalStats${side}`]: {
          ...prevState[`totalStats${side}`],
          ap: +prevState[`totalStats${side}`].ap + +(adFromRunes/0.6)*this[`dcap${side}`],
          ad: +prevState[`totalStats${side}`].ad - +adFromRunes
        }
      }))
      this[`runes${side}`].ap = adFromRunes/0.6;
      this[`runes${side}`].ad = 0;
      this[`forceType${side}`] = 'ap'
    } else if (this[`forceType${side}`] === 'ap' && itemStats.ad > itemStats.ap) {
      var apFromRunes = this[`runes${side}`].ap;
      this.setState(prevState => ({
        [`totalStats${side}`]: {
          ...prevState[`totalStats${side}`],
          ad: +prevState[`totalStats${side}`].ad + +apFromRunes*0.6,
          ap: +prevState[`totalStats${side}`].ap - +apFromRunes*this[`dcap${side}`]
        }
      }))
      this[`runes${side}`].ad = apFromRunes*0.6;
      this[`runes${side}`].ap = 0;
      this[`forceType${side}`] = 'ad'
    };
    if (this[`champName${side}`] === 'Aphelios') {
      return
    };
    this.calculateAbility(side)
  };

  onLegendDisplay = (side) => {
    if (document.getElementById(`legendButton${side}`).style.background) {
      return
    };
    document.getElementById(`mythicButton${side}`).style.background = '';
    document.getElementById(`legendButton${side}`).style.background 
    = 'linear-gradient(145deg, #ffffb9 8%, #f9b54a 9%, white 11%, white 89%, #f9b54a 90%, #ffffb9 92%)';
    this.setState({[`itemDisplay${side}`]:  Array.from(this.itemIcons).map((iconSrc, i) => {
      return (
        <span key={i}>
          <img className='itemIcon' style={{border: '3px double white'}} src={iconSrc} 
          onClick={(event) => this.onLegendClick(event, side, i)}></img>
          <div className='itemTooltip' style={{top: '160px', right: '20vw'}}>
            {this.legendItems[i]}
          </div>
        </span>
      )
    })});
    document.getElementById(`itemSearch${side}`).value = '';
  };

  mythicList = [
    'Crown of the Shattered Queen', 'Divine Sunderer', 'Duskblade of Draktharr', 'Eclipse', 'Evenshroud',
    'Everfrost', 'Frostfire Gauntlet', 'Galeforce', 'Goredrinker', 'Hextech Rocketbelt', 'Immortal Shieldbow', 
    'Imperial Mandate', 'Kraken Slayer', "Liandry's Anguish", "Locket of the Iron Solari", "Luden's Tempest",
    "Moonstone Renewer", "Night Harvester", "Prowler's Claw", "Riftmaker", "Shurelya's Battlesong", "Stridebreaker",
    "Sunfire Aegis", "Trinity Force", "Turbo Chemtank"
  ]

  legendList = [
    "Abyssal Mask", "Anathema's Chains", "Archangel's Staff", "Ardent Censer", "Axiom Arc", "Banshee's Veil", 
    "Black Cleaver", "Black Mist Scythe", "Blade of the Ruined King", "Bloodthirster", "Bulwark of the Mountain",
    "Chempunk Chainsword", "Chemtech Putrifier", "Cosmic Drive", "Dead Man's Plate", "Death's Dance", "Demonic Embrace",
    "Edge of Night", "Essence Reaver", "Fimbulwinter", "Force of Nature", "Frozen Heart", "Gargoyle Stoneplate",
    "Guardian Angel", "Guinsoo's Rageblade", "Horizon Focus", "Hullbreaker", "Infinity Edge", "Knight's Vow",
    "Lich Bane", "Lord Dominik's Regards", "Manamune", "Maw of Malmortius", "Mejai's Soulstealer", "Mercurial Scimitar",
    "Mikael's Blessing", "Morellonomicon", "Mortal Reminder", "Muramana", "Nashor's Tooth", "Navori Quickblades",
    "Pauldrons of Whiterock", "Phantom Dancer", "Rabadon's Deathcap", "Randuin's Omen", "Rapid Firecannon",
    "Ravenous Hydra", "Redemption", "Runaan's Hurricane", "Rylai's Crystal Scepter", "Seraph's Embrace", "Serpent's Fang",
    "Serylda's Grudge", "Shadowflame", "Shard of True Ice", "Silvermere Dawn", "Spirit Visage", "Staff of Flowing Water",
    "Sterak's Gage", "Stormrazor", "The Collector", "Thornmail", "Titanic Hydra", "Umbral Glaive", "Vigilant Wardstone",
    "Void Staff", "Warmog's Armor", "Winter's Approach", "Wit's End", "Youmuu's Ghostblade", "Zeke's Convergence",
    "Zhonya's Hourglass"
  ]

  onItemSearch = (event, side) => {
    document.getElementById(`mythicButton${side}`).style.background = '';
    document.getElementById(`legendButton${side}`).style.background = '';
    this.setState({[`itemDisplay${side}`]:  [...this.mythicList, ...this.legendList].map((itemName, i) => {
      if (itemName.toLowerCase().includes(event.target.value.toLowerCase()) ) {
        if (i < 25) {
          return (
            <span key={i}>
              <img className='itemIcon' style={{border: '3px double #ffcb5a'}} src={Array.from(this.mythicIcons)[i]}
              onClick={(event) => this.onMythicClick(event, side, i)}></img>
              <div className='itemTooltip' style={{top: '160px', right: '20vw'}}>
                {this.mythicItems[i]}
              </div>
            </span>
          )
        } else {
          return (
            <span key={i}>
              <img className='itemIcon' style={{border: '3px double white'}} src={Array.from(this.itemIcons)[i-25]}
              onClick={(event) => this.onLegendClick(event, side, i-25)}></img>
              <div className='itemTooltip' style={{top: '160px', right: '20vw'}}>
                {this.legendItems[i-25]}
              </div>
            </span>
          )
        }
      }
    })})
  }


  homeToggle = () => {
    if (this.state.about === false) {
      this.setState({
        about: true
      });
      document.getElementById('homeAbout').textContent = 'Home';
      document.getElementById('homePage').style.display = 'none';
    } else {
      this.setState({
        about: false
      });
      document.getElementById('homeAbout').textContent = 'About';
      document.getElementById('homePage').style.display = 'block';
    }
  };

  onLimitClick = (side) => {
    document.getElementsByClassName('mythicLimit')[side.length-4].style.visibility = 'hidden';
  }

  keystoneToggle = (side) => {
    var otherSide = 'Left';
    if (side === 'Left') {
      otherSide = 'Right'
    };
    if (document.getElementById(`ksToggle${side}`).textContent === 'Hide Keystones') {
      if (document.getElementById(`ksToggle${otherSide}`).textContent === 'Show Keystones') {
        document.getElementById('ksLeft').style.display = 'none';
        document.getElementById('ksTitleLeft').style.display = 'none';
        document.getElementById('ksStatsLeft').style.display = 'none';
        document.getElementById('ksRight').style.display = 'none';
        document.getElementById('ksTitleRight').style.display = 'none';
        document.getElementById('ksStatsRight').style.display = 'none';
        document.getElementById(`ks${side}`).style.visibility = 'hidden';
        document.getElementById(`ksTitle${side}`).style.visibility = 'hidden';
        document.getElementById(`ksStats${side}`).style.visibility = 'hidden';
      } else {
        document.getElementById(`ks${side}`).style.visibility = 'hidden';
        document.getElementById(`ksTitle${side}`).style.visibility = 'hidden';
        document.getElementById(`ksStats${side}`).style.visibility = 'hidden';
      }
      document.getElementById(`ksToggle${side}`).textContent = 'Show Keystones';
    } else {
      if (document.getElementById(`ksToggle${otherSide}`).textContent === 'Show Keystones') {
        document.getElementById(`ks${otherSide}`).style.display = '';
        document.getElementById(`ksTitle${otherSide}`).style.display = '';
        document.getElementById(`ksStats${otherSide}`).style.display = '';
      }
      document.getElementById(`ksToggle${side}`).textContent = 'Hide Keystones';
      document.getElementById(`ks${side}`).style.display = '';
      document.getElementById(`ks${side}`).style.visibility = 'visible';
      document.getElementById(`ksTitle${side}`).style.display = '';
      document.getElementById(`ksTitle${side}`).style.visibility = 'visible';
      document.getElementById(`ksStats${side}`).style.display = '';
      document.getElementById(`ksStats${side}`).style.visibility = 'visible';
    }
    console.log('side: ' + side);
    console.log('otherside: ' + otherSide)
  };

  itemsToggle = (side) => {
    if (document.getElementById(`itemsToggle${side}`).textContent === 'Show Items') {
      document.getElementById(`items${side}`).style.display = 'inherit';
      document.getElementById(`itemsToggle${side}`).textContent = 'Hide Items'
    } else {
      document.getElementById(`items${side}`).style.display = 'none';
      document.getElementById(`itemsToggle${side}`).textContent = 'Show Items'
      document.getElementsByClassName('mythicLimit')[side.length-4].style.visibility = 'hidden';
    }
  };

  componentDidMount() {
    function importAll(r) {
      return r.keys().map(r);
    }
    this.portraits = importAll(require.context('./portraits/', false, /\.(png|jpe?g|svg)$/));
    this.images = importAll(require.context('./spellicons/', false, /\.(png|jpe?g|svg)$/));
    this.ksIcons = importAll(require.context('./ksicons/', false, /\.(png|jpe?g|svg)$/));
    this.mythicIcons = importAll(require.context('./mythicicons/', false, /\.(png|jpe?g|svg)$/));
    var ksStuff = ['', 'Toggle', 'Title', 'Stats'];
    ksStuff.map(x => {
      document.getElementById(`ks${x}Left`).style.display = 'none';
      document.getElementById(`ks${x}Right`).style.display = 'none';
    })
    this.setState({itemDisplayLeft:  Array.from(this.mythicIcons).map((iconSrc, i) => {
      return (
        <span key={i}>
          <img className='itemIcon' style={{border: '3px double #ffcb5a'}} src={iconSrc}
          onClick={(event) => this.onMythicClick(event, 'Left', i)}></img>
          <div className='itemTooltip' style={{top: '160px', right: '20vw'}}>
            {this.mythicItems[i]}
          </div>
        </span>
      )
    })});
    this.setState({itemDisplayRight:  Array.from(this.mythicIcons).map((iconSrc, i) => {
      return (
        <span key={i}>
          <img className='itemIcon' style={{border: '3px double #ffcb5a'}} src={iconSrc}
          onClick={(event) => this.onMythicClick(event, 'Right', i)}></img>
          <div className='itemTooltip' style={{top: '160px', right: '20vw'}}>
            {this.mythicItems[i]}
          </div>
        </span>
      )
    })})
    this.itemIcons = importAll(require.context('./itemicons/', false, /\.(png|jpe?g|svg)$/));
  };

  render() {
    return (
      <div style={{minHeight: '100vh', padding: '0 1vw'}}>

        <header className="navHeader">
          <h2 id='homeAbout' style={{color: 'black'}} onClick={this.homeToggle}>About</h2>
          <div className='logoDiv'>
            <img src={logo} height='80px' alt='Logo'/>
          </div>
          <img src={lolIcon} height='31px' width='30px' alt='League of Legends Icon' />
          <h2><a href="https://na.leagueoflegends.com/en-us/news/tags/patch-notes" 
          target='_blank' tabIndex='-1'>Patch v11.10</a></h2>
        </header>

        {this.state.about ? <About /> : ''}

        <div id='homePage'>
          <div style={{marginTop: 10, display: 'flex'}}>
            <input type="search" placeholder='Champion Name' onChange={this.onSearchChange} 
            style={{width: 120, display: 'inline-block'}} onBlur={(event) => this.onSearchBlur(event, 'Left')} 
            tabIndex='0' onKeyDown={(event) => this.downArrow(event, 'Left')} />
            <input type="search" placeholder='Champion Name' onChange={this.onSearchChange} tabIndex='0'
            style={{width: 120, display: 'inline-block', marginLeft: 'auto'}} onBlur={(event) => this.onSearchBlur(event, 'Right')} 
            onKeyDown={(event) => this.downArrow(event, 'Right')} />
          </div>

          <div style={{display: 'flex'}}>
            <div style={{width: 120, display: 'inline-block'}} >
            <ChampDropDownLeft filteredChamps={ `${this.state.filteredChampsLeft}` } onChampClick={this.onChampClick} 
            onLiKeyDown={(event) => this.liKeyPress(event, 'Left')} onLiBlur={(event) => this.onLiBlur(event, 'Left')}/>
            </div>
          
            <div style={{width: 120, marginLeft: 'auto', display: 'inline-block'}} >
            <ChampDropDownRight filteredChamps2={ `${this.state.filteredChampsRight}` } onChampClick={this.onChampClick}
            onLiKeyDown={(event) => this.liKeyPress(event, 'Right')} onLiBlur={(event) => this.onLiBlur(event, 'Right')}/>
            </div>
          </div>

          <div className='flexDisplay'>
            <b style={{width: '45vw', textAlign: 'center', fontSize: '20px'}}>{this.state.champNameLeft}</b>
            <b style={{width: '45vw', textAlign: 'center', fontSize: '20px'}}>{this.state.champNameRight}</b>
          </div>

          <div className="flexAround" style={{marginTop: '10px'}}>
            <img id='champIconLeft' src={ defaultChampIcon } height="120px" width="120px"
            alt='Champion Icon' style={{position: 'relative'}} />
          
            <div className='runeBox'>
              <img src={forceRing} className='runeImgStyle' alt='Adaptive Force Icon' onClick={this.onRuneChange} id='rune0'/>
              <img src={attackSpeedIcon} className='runeImgStyle' alt='Attack Speed Icon' onClick={this.onRuneChange} id='rune1'/>
              <img src={cdrIcon} className='runeImgStyle' alt='Ability Haste Icon' onClick={this.onRuneChange} id='rune2'/>
              
              <img src={forceRing} className='runeImgStyle' alt='Adaptive Force Icon' onClick={this.onRuneChange} id='rune3'/>
              <img src={armorIcon} className='runeImgStyle' alt='Armor Icon' onClick={this.onRuneChange} id='rune4'/>
              <img src={magicResIcon} className='runeImgStyle' alt='Magic Resist Icon' onClick={this.onRuneChange} id='rune5'/>
              
              <img src={healthRing} className='runeImgStyle' alt='Health Icon' onClick={this.onRuneChange} id='rune6'/>
              <img src={armorIcon} className='runeImgStyle' alt='Armor Icon' onClick={this.onRuneChange} id='rune7'/>
              <img src={magicResIcon} className='runeImgStyle' alt='Magic Resist Icon' onClick={this.onRuneChange} id='rune8'/>
            </div>

            <img src={versus} alt='Versus Icon' height="64px" width="64px" style={{alignSelf: 'center'}} />

            <div className='runeBox'>
              <img src={forceRing} className='runeImgStyle' alt='Adaptive Force Icon' onClick={this.onRuneChange} id='rune9'/>
              <img src={attackSpeedIcon} className='runeImgStyle' alt='Attack Speed Icon' onClick={this.onRuneChange} id='rune10'/>
              <img src={cdrIcon} className='runeImgStyle' alt='Ability Haste Icon' onClick={this.onRuneChange} id='rune11'/>
              
              <img src={forceRing} className='runeImgStyle' alt='Adaptive Force Icon' onClick={this.onRuneChange} id='rune12'/>
              <img src={armorIcon} className='runeImgStyle' alt='Armor Icon' onClick={this.onRuneChange} id='rune13'/>
              <img src={magicResIcon} className='runeImgStyle' alt='Magic Resist Icon' onClick={this.onRuneChange} id='rune14'/>
              
              <img src={healthRing} className='runeImgStyle' alt='Health Icon' onClick={this.onRuneChange} id='rune15'/>
              <img src={armorIcon} className='runeImgStyle' alt='Armor Icon' onClick={this.onRuneChange} id='rune16'/>
              <img src={magicResIcon} className='runeImgStyle' alt='Magic Resist Icon' onClick={this.onRuneChange} id='rune17'/>
            </div>

            <img id='champIconRight' src={ defaultChampIcon } height="120px" width="120px"
            alt='Champion Icon' style={{position: 'relative'}}/>
          </div>

          <div>
              <button type='button' id='ksToggleLeft' onClick={() => this.keystoneToggle('Left')}>Hide Keystones</button>
              <button type='button' id='ksToggleRight' style={{float: 'right'}} onClick={() => this.keystoneToggle('Right')}>Hide Keystones</button>
          </div>

          <div className='flexDisplay'>
            <div id='ksLeft' className='keystone' style={{width: '45vw', textAlign: 'center'}}>
              <img className='precision' src={`${this.ksIcons[0]}`} onClick={() => this.pressTheAttack('Left')} 
              style={{boxShadow: '0px 0px 5px rgb(255, 225, 82) inset'}} />
              <img className='precision' src={`${this.ksIcons[1]}`} onClick={() => this.lethalTempo('Left')} />
              <img className='precision' src={`${this.ksIcons[2]}`} onClick={() => this.fleetFootwork('Left')} />
              <img className='precision' src={`${this.ksIcons[3]}`} onClick={() => this.conqueror('Left')} />
            
              <hr style={{background: 'rgb(255, 225, 82', marginRight: 5}}></hr>
              <hr style={{background: 'rgb(245, 12, 63)', marginLeft: 0}}></hr>
            
              <img className='domination' src={`${this.ksIcons[4]}`} onClick={() => this.electrocute('Left')} />
              <img className='domination' src={`${this.ksIcons[5]}`} onClick={() => this.predator('Left')} />
              <img className='domination' src={`${this.ksIcons[6]}`} onClick={() => this.darkHarvest('Left')} />
              <img className='domination' src={`${this.ksIcons[7]}`} onClick={() => this.hailOfBlades('Left')} />
            
              <hr style={{background: 'rgb(245, 12, 63)', marginRight: 5}}></hr>
              <hr style={{background: 'rgb(177, 41, 238)', marginLeft: 0}}></hr>
            
              <img className='sorcery' src={`${this.ksIcons[8]}`} onClick={() => this.summonAery('Left')} />
              <img className='sorcery' src={`${this.ksIcons[9]}`} onClick={() => this.arcaneComet('Left')} />
              <img className='sorcery' src={`${this.ksIcons[10]}`} onClick={() => this.phaseRush('Left')} />
            
              <hr style={{background: 'rgb(177, 41, 238)', marginRight: 5}}></hr>
              <hr style={{background: 'rgb(90, 227, 30)', marginLeft: 0}}></hr>
            
              <img className='resolve' src={`${this.ksIcons[11]}`} onClick={() => this.grasp('Left')} />
              <img className='resolve' src={`${this.ksIcons[12]}`} onClick={() => this.aftershock('Left')} />
              <img className='resolve' src={`${this.ksIcons[13]}`} onClick={() => this.guardian('Left')} />
            </div>

            <div id='ksRight' className='keystone' style={{width: '45vw', textAlign: 'center'}}>
              <img className='precision' src={`${this.ksIcons[0]}`} onClick={() => this.pressTheAttack('Right')} 
              style={{boxShadow: '0px 0px 5px rgb(255, 225, 82) inset'}} />
              <img className='precision' src={`${this.ksIcons[1]}`} onClick={() => this.lethalTempo('Right')} />
              <img className='precision' src={`${this.ksIcons[2]}`} onClick={() => this.fleetFootwork('Right')} />
              <img className='precision' src={`${this.ksIcons[3]}`} onClick={() => this.conqueror('Right')} />
            
              <hr style={{background: 'rgb(255, 225, 82', marginRight: 5}}></hr>
              <hr style={{background: 'rgb(245, 12, 63)', marginLeft: 0}}></hr>
            
              <img className='domination' src={`${this.ksIcons[4]}`} onClick={() => this.electrocute('Right')} />
              <img className='domination' src={`${this.ksIcons[5]}`} onClick={() => this.predator('Right')} />
              <img className='domination' src={`${this.ksIcons[6]}`} onClick={() => this.darkHarvest('Right')} />
              <img className='domination' src={`${this.ksIcons[7]}`} onClick={() => this.hailOfBlades('Right')} />
            
              <hr style={{background: 'rgb(245, 12, 63)', marginRight: 5}}></hr>
              <hr style={{background: 'rgb(177, 41, 238)', marginLeft: 0}}></hr>
            
              <img className='sorcery' src={`${this.ksIcons[8]}`} onClick={() => this.summonAery('Right')} />
              <img className='sorcery' src={`${this.ksIcons[9]}`} onClick={() => this.arcaneComet('Right')} />
              <img className='sorcery' src={`${this.ksIcons[10]}`} onClick={() => this.phaseRush('Right')} />
            
              <hr style={{background: 'rgb(177, 41, 238)', marginRight: 5}}></hr>
              <hr style={{background: 'rgb(90, 227, 30)', marginLeft: 0}}></hr>
            
              <img className='resolve' src={`${this.ksIcons[11]}`} onClick={() => this.grasp('Right')} />
              <img className='resolve' src={`${this.ksIcons[12]}`} onClick={() => this.aftershock('Right')} />
              <img className='resolve' src={`${this.ksIcons[13]}`} onClick={() => this.guardian('Right')} />
            </div>
          </div>

          <div className='flexDisplay' style={{marginBottom: '5px'}}>
            <b id='ksTitleLeft' style={{width: '45vw', textAlign: 'center'}}>{this.state.keystoneIDLeft.title}</b>
            <b id='ksTitleRight' style={{width: '45vw', textAlign: 'center'}}>{this.state.keystoneIDRight.title}</b>
          </div>

          <div className='flexDisplay'>      
            <div className='ksStats' id='ksStatsLeft'>
              <span style={{color: '#ffffb9'}}>{this.state.keystoneIDLeft.type}: </span>{this.state.keystoneLeft}
              <br></br>
              {this.state.keystoneIDLeft.index !== 7 ? <span style={{color: '#f9b54a'}}>Current Value: </span> : ''} 
              {
                this.state.keystoneIDLeft.index === 7 ? '' 
                : this.state.keystoneIDLeft.index === 1 || this.state.keystoneIDLeft.index === 3 || this.state.keystoneIDLeft.index === 10 ? this.state.ksArrayLeft[this.levelLeft - 1] 
                + Math.round(this.state.ksAPRatioLeft * this.state.totalStatsLeft.ap + this.state.ksBonusADRatioLeft 
                * (this.runesLeft.ad + this.itemStatsLeft.ad) + this.state.ksHPRatioLeft * this.state.totalStatsLeft.hp 
                + this.state.ksBonusHPRatioLeft * (this.runesLeft.hp + this.itemStatsLeft.hp))
                : Math.round(this.state.ksArrayLeft[this.levelLeft - 1] + (this.state.ksAPRatioLeft 
                  * this.state.totalStatsLeft.ap + this.state.ksBonusADRatioLeft * (this.runesLeft.ad + this.itemStatsLeft.ad) 
                  + this.state.ksHPRatioLeft * this.state.totalStatsLeft.hp 
                  + this.state.ksBonusHPRatioLeft * (this.runesLeft.hp + this.itemStatsLeft.hp))) 
              }
              <div style={{display: this.state.ksPart2DisplayLeft}}>
                <br></br>
                <span style={{color: '#ffffb9'}}>{this.state.ksPart2Left.type}: </span>{this.state.ksPart2Left.text}
                <br></br>
                {this.state.keystoneIDLeft.index !== 12 ? <span style={{color: '#f9b54a'}}>Current Value: </span>
                : <span style={{color: '#f9b54a'}}>Current Cap: </span>}
                {this.state.keystoneIDLeft.index !== 10 ? Math.round(this.state.ksPart2Left.array[this.levelLeft - 1] 
                + (this.state.ksPart2Left.APRatio * this.state.totalStatsLeft.ap 
                + this.state.ksPart2Left.bonusADRatio * (this.runesLeft.ad + this.itemStatsLeft.ad)
                + this.state.totalStatsLeft.hp * this.state.ksPart2Left.HPRatio)) 
                : this.state.ksPart2Left.array[this.levelLeft - 1] }
              </div>
              <div>
                <br></br>
                <span style={{color: 'lightgray'}}>Cooldown: </span>{this.state.ksCDLeft[this.levelLeft - 1]}{this.state.ksCDTextLeft}
              </div>
            </div>

            <div className='ksStats' id='ksStatsRight'>
              <span style={{color: '#ffffb9'}}>{this.state.keystoneIDRight.type}: </span>{this.state.keystoneRight}
                <br></br>
              {this.state.keystoneIDRight.index !== 7 ? <span style={{color: '#f9b54a'}}>Current Value: </span> : ''} 
              {
                this.state.keystoneIDRight.index === 7 ? '' 
                : this.state.keystoneIDRight.index === 1 || this.state.keystoneIDRight.index === 3 || 
                this.state.keystoneIDRight.index === 10 ? this.state.ksArrayRight[this.levelRight - 1] 
                + Math.round(this.state.ksAPRatioRight * this.state.totalStatsRight.ap + this.state.ksBonusADRatioRight 
                * (this.runesRight.ad + this.itemStatsRight.ad) + this.state.ksHPRatioRight * this.state.totalStatsRight.hp 
                + this.state.ksBonusHPRatioRight * (this.runesRight.hp + this.itemStatsRight.hp))
                : Math.round(this.state.ksArrayRight[this.levelRight - 1] + (this.state.ksAPRatioRight 
                * this.state.totalStatsRight.ap + this.state.ksBonusADRatioRight * (this.runesRight.ad + this.itemStatsRight.ad) 
                + this.state.ksHPRatioRight * this.state.totalStatsRight.hp 
                + this.state.ksBonusHPRatioRight * (this.runesRight.hp + this.itemStatsRight.hp))) 
              }
              <div style={{display: this.state.ksPart2DisplayRight}}>
                <br></br>
                <span style={{color: '#ffffb9'}}>{this.state.ksPart2Right.type}: </span>{this.state.ksPart2Right.text}
                <br></br>
                {this.state.keystoneIDRight.index !== 12 ? <span style={{color: '#f9b54a'}}>Current Value: </span>
                : <span style={{color: '#f9b54a'}}>Current Cap: </span>}
                {this.state.keystoneIDRight.index !== 10 ? Math.round(this.state.ksPart2Right.array[this.levelRight - 1] 
                + (this.state.ksPart2Right.APRatio * this.state.totalStatsRight.ap 
                + this.state.ksPart2Right.bonusADRatio * (this.runesRight.ad + this.itemStatsRight.ad)
                + this.state.totalStatsRight.hp * this.state.ksPart2Right.HPRatio)) 
                : this.state.ksPart2Right.array[this.levelRight - 1] }
              </div>
              <div>
                <br></br>
                <span style={{color: 'lightgray'}}>Cooldown: </span>{this.state.ksCDRight[this.levelRight - 1]}{this.state.ksCDTextRight}
              </div>
            </div>
          </div>

          <div className='flexDisplay'>
            <b style={{width: '45vw', textAlign: 'center'}}>Item Inventory</b>
            <b style={{width: '45vw', textAlign: 'center'}}>Item Inventory</b>
          </div>

          <div className='flexDisplay'>
            <div className='inventory' id='invenLeft'>
              <img src={blackbg}  onClick={(event) => this.onInvenClick(event, 'Left', 1)}></img>
              <div className='itemTooltip' style={{left: '20px'}}>
                {this.invenLeftTT1}
              </div>
              <img src={blackbg} onClick={(event) => this.onInvenClick(event, 'Left', 2)}></img>
              <div className='itemTooltip' style={{left: '20px'}}>
                {this.invenLeftTT2}
              </div>
              <img src={blackbg} onClick={(event) => this.onInvenClick(event, 'Left', 3)}></img>
              <div className='itemTooltip' style={{left: '20px'}}>
                {this.invenLeftTT3}
              </div>
              <img src={blackbg} onClick={(event) => this.onInvenClick(event, 'Left', 4)}></img>
              <div className='itemTooltip' style={{left: '20px'}}>
                {this.invenLeftTT4}
              </div>
              <img src={blackbg} onClick={(event) => this.onInvenClick(event, 'Left', 5)}></img>
              <div className='itemTooltip' style={{left: '20px'}}>
                {this.invenLeftTT5}
              </div>
              <img src={blackbg} onClick={(event) => this.onInvenClick(event, 'Left', 6)}></img>
              <div className='itemTooltip' style={{left: '20px'}}>
                {this.invenLeftTT6}
              </div>
            </div>
                
            <div className='inventory' id='invenRight'>
              <img src={blackbg} onClick={(event) => this.onInvenClick(event, 'Right', 1)}></img>
              <div className='itemTooltip' style={{left: '20px'}}>
                {this.invenRightTT1}
              </div>
              <img src={blackbg} onClick={(event) => this.onInvenClick(event, 'Right', 2)}></img>
              <div className='itemTooltip' style={{left: '20px'}}>
                {this.invenRightTT2}
              </div>
              <img src={blackbg} onClick={(event) => this.onInvenClick(event, 'Right', 3)}></img>
              <div className='itemTooltip' style={{left: '20px'}}>
                {this.invenRightTT3}
              </div>
              <img src={blackbg} onClick={(event) => this.onInvenClick(event, 'Right', 4)}></img>
              <div className='itemTooltip' style={{left: '20px'}}>
                {this.invenRightTT4}
              </div>
              <img src={blackbg} onClick={(event) => this.onInvenClick(event, 'Right', 5)}></img>
              <div className='itemTooltip' style={{left: '20px'}}>
                {this.invenRightTT5}
              </div>
              <img src={blackbg} onClick={(event) => this.onInvenClick(event, 'Right', 6)}></img>
              <div className='itemTooltip' style={{left: '20px'}}>
                {this.invenRightTT6}
              </div>
            </div> 
          </div>

          <div className='flexDisplay' >
            <div style={{width: '45vw', textAlign: 'center'}}>
              <span className='mythicLimit'>
                Inventory limited to one Mythic item <b onClick={() => this.onLimitClick('Left')}>x</b>
              </span>
            </div>

            <div style={{width: '45vw', textAlign: 'center'}}>
              <span className='mythicLimit'>
              Inventory limited to one Mythic item <b onClick={() => this.onLimitClick('Right')}>x</b>
              </span>
            </div>
          </div>

          <div>
            <button type='button' id='itemsToggleLeft' onClick={() => this.itemsToggle('Left')}>Hide Items</button>
            <button type='button' id='itemsToggleRight' style={{float: 'right'}}
              onClick={() => this.itemsToggle('Right')}>Hide Items</button>
          </div>


          <div className="flexAround" style={{marginTop: '10px'}}>
            <div style={{width:'40vw'}}>
              <div id='itemsLeft' style={{position: 'relative'}}>
                <div className='itemMenu'>
                  <button type='button' id='mythicButtonLeft' onClick={() => this.onMythicDisplay('Left')} style={{
                    background: 'linear-gradient(145deg, #ffffb9 8%, #f9b54a 9%, white 11%, white 89%, #f9b54a 90%, #ffffb9 92%)'
                  }}>
                    <span>M</span>ythic</button>
                  <button type='button' id='legendButtonLeft' onClick={() => this.onLegendDisplay('Left')}>
                    <span>L</span>egendary</button>
                  <input type="search" placeholder='Item Search' onChange={(event) => this.onItemSearch(event, 'Left')}
                  onBlur={this.onItemBlur} id='itemSearchLeft' />
                </div>
                <div className='itemDisplay'>
                  {this.state.itemDisplayLeft}
                </div>
              </div> 
            </div>

            <div style={{width:'40vw'}}>
              <div id='itemsRight' style={{position: 'relative'}}>
                <div className='itemMenu'>
                  <button type='button' id='mythicButtonRight' onClick={() => this.onMythicDisplay('Right')} style={{
                    background: 'linear-gradient(145deg, #ffffb9 8%, #f9b54a 9%, white 11%, white 89%, #f9b54a 90%, #ffffb9 92%)'
                  }}>
                    <span>M</span>ythic</button>
                  <button type='button' id='legendButtonRight' onClick={() => this.onLegendDisplay('Right')}>
                    <span>L</span>egendary</button>
                  <input type="search" placeholder='Item Search' onChange={(event) => this.onItemSearch(event, 'Right')}
                  onBlur={this.onItemBlur} id='itemSearchRight' />
                </div>
                <div className='itemDisplay'>
                  {this.state.itemDisplayRight}
                </div>
              </div>
            </div>
          </div>


          <div className="flexDisplay" style={{marginTop: '5px'}}>
            <div className="hiddenLeft">
              <span>Level: </span>
              <input id="levelBoxLeft" type="number" min="1" max="18" style={{width: "50px"}}
              onKeyDown={this.preventKeyPress} onChange={this.onLevelChange}/>
            </div>
            <div className="hiddenRight">
              <span>Level: </span>
              <input id="levelBoxRight" type="number" min="1" max="18" style={{width: "50px"}}
              onKeyDown={this.preventKeyPress} onChange={this.onLevelChange}/>
            </div>
          </div>
          <div className="flexDisplay">
            <span style={{width: '45vw', textAlign: 'center'}}><b>{this.state.champNameLeft} Stats</b></span>
            <span style={{width: '45vw', textAlign: 'center'}}><b>{this.state.champNameRight} Stats</b></span>
          </div>
          <div className="flexDisplay">
            <div className="statsBox">
              <img src={healthIcon}  alt='Health Icon'/>
              <span>Health: </span>{Math.round(this.state.totalStatsLeft.hp)}<br />
              <img src={armorIcon} alt='Armor Icon'/>
              <span>Armor: </span>{Math.round(this.state.totalStatsLeft.arm)}<br />
              <img src={magicResIcon} alt='Magic Resist Icon'/>
              <span>Magic Resist: </span>{Math.round(this.state.totalStatsLeft.mr)}<br />
              <img src={ADIcon} alt='Attack Damage Icon'/>
              <span>Attack Damage: </span>{Math.round(this.state.totalStatsLeft.ad)}<br />
              <img src={attackSpeedIcon} alt='Attack Speed Icon'/>
              <span>Attack Speed: </span>{this.state.totalStatsLeft.as.toFixed(3)}<br />
              <img src={critChanceIcon} alt='Crit Chance Icon'/>
              <span>Crit Chance: </span>{Math.round(this.state.totalStatsLeft.critChance)}%<br />
              <img src={manaIcon} alt='Mana Icon'/>
              <span>Mana: </span>{Math.round(this.state.totalStatsLeft.mana)}<br />
              <img src={manaRegenIcon} alt='Mana Regen Icon'/>
              <span>Mana per 5: </span>{this.state.champNameLeft ? this.state.totalStatsLeft.manaRegen.toFixed(1) 
              : this.state.totalStatsLeft.manaRegen + '%'}<br />
              <img src={healthRegenIcon} alt='Health Regen Icon'/>
              <span>Health per 5: </span>{this.state.champNameLeft ? this.state.totalStatsLeft.hpRegen.toFixed(1)
              : this.state.totalStatsLeft.hpRegen + '%'}<br />
              <img src={APIcon} alt='Ability Power Icon'/>
              <span>Ability Power: </span>{Math.round(this.state.totalStatsLeft.ap)}<br />
              <img src={cdrIcon} alt='Cooldown Reduction Icon'/>
              <span>Ability Haste: </span>{Math.round(this.state.totalStatsLeft.cdr)} / {
              Math.round(100*(this.state.totalStatsLeft.cdr/(100 + this.state.totalStatsLeft.cdr)))}%
            </div>
            <div className="statsBox">
              <img src={healthIcon} alt='Health Icon'/>
              <span>Health: </span>{Math.round(this.state.totalStatsRight.hp)}<br />
              <img src={armorIcon} alt='Armor Icon'/>
              <span>Armor: </span>{Math.round(this.state.totalStatsRight.arm)}<br />
              <img src={magicResIcon} alt='Magic Resist Icon'/>
              <span>Magic Resist: </span>{Math.round(this.state.totalStatsRight.mr)}<br />
              <img src={ADIcon} alt='Attack Damage Icon'/>
              <span>Attack Damage: </span>{Math.round(this.state.totalStatsRight.ad)}<br />
              <img src={attackSpeedIcon} alt='Attack Speed Icon'/>
              <span>Attack Speed: </span>{this.state.totalStatsRight.as.toFixed(3)}<br />
              <img src={critChanceIcon} alt='Crit Chance Icon'/>
              <span>Crit Chance: </span>{Math.round(this.state.totalStatsRight.critChance)}%<br />
              <img src={manaIcon} alt='Mana Icon'/>
              <span>Mana: </span>{Math.round(this.state.totalStatsRight.mana)}<br />
              <img src={manaRegenIcon} alt='Mana Regen Icon'/>
              <span>Mana per 5: </span>{this.state.champNameRight ? this.state.totalStatsRight.manaRegen.toFixed(1) 
              : this.state.totalStatsRight.manaRegen + '%'}<br />
              <img src={healthRegenIcon} alt='Health Regen Icon'/>
              <span>Health per 5: </span>{this.state.champNameRight ? this.state.totalStatsRight.hpRegen.toFixed(1) 
              : this.state.totalStatsRight.hpRegen + '%'}<br />
              <img src={APIcon} alt='Ability Power Icon'/>
              <span>Ability Power: </span>{Math.round(this.state.totalStatsRight.ap)}<br />
              <img src={cdrIcon} alt='Cooldown Reduction Icon'/>
              <span>Ability Haste: </span>{Math.round(this.state.totalStatsRight.cdr)} / {
              Math.round(100*(this.state.totalStatsRight.cdr/(100 + this.state.totalStatsRight.cdr)))}%
            </div>
          </div>
          <div id='transform'>
            <div className="flexDisplay">
              <span className="transformLeft" style={{width: '45vw', textAlign: 'center'}}>
                <b>{this.tfChampPair[this.state.champNameLeft]} Stats</b>
              </span>
              <span className="transformRight" style={{width: '45vw', textAlign: 'center'}}>
                <b>{this.tfChampPair[this.state.champNameRight]} Stats</b>
              </span>
            </div>
            <div className="flexDisplay">
              <div className="statsBox transformLeft">
                <img src={healthIcon} alt='Health Icon'/>
                <span>Health: </span>{Math.round(this.state.tfTotalStatsLeft.hp)}<br />
                <img src={armorIcon} alt='Armor Icon'/>
                <span>Armor: </span>{Math.round(this.state.tfTotalStatsLeft.arm)}<br />
                <img src={magicResIcon} alt='Magic Resist Icon'/>
                <span>Magic Resist: </span>{Math.round(this.state.tfTotalStatsLeft.mr)}<br />
                <img src={ADIcon} alt='Attack Damage Icon'/>
                <span>Attack Damage: </span>{Math.round(this.state.tfTotalStatsLeft.ad)}<br />
                <img src={attackSpeedIcon} alt='Attack Speed Icon'/>
                <span>Attack Speed: </span>{this.state.tfTotalStatsLeft.as.toFixed(3)}<br />
                <img src={critChanceIcon} alt='Crit Chance Icon'/>
                <span>Crit Chance: </span>{Math.round(this.state.tfTotalStatsLeft.critChance)}%<br />
                <img src={manaIcon} alt='Mana Icon'/>
                <span>Mana: </span>{Math.round(this.state.tfTotalStatsLeft.mana)}<br />
                <img src={manaRegenIcon} alt='Mana Regen Icon'/>
                <span>Mana per 5: </span>{this.state.tfTotalStatsLeft.manaRegen.toFixed(1)}<br />
                <img src={healthRegenIcon} alt='Health Regen Icon'/>
                <span>Health per 5: </span>{this.state.tfTotalStatsLeft.hpRegen.toFixed(1)}<br />
                <img src={APIcon} alt='Ability Power Icon'/>
                <span>Ability Power: </span>{Math.round(this.state.tfTotalStatsLeft.ap)}<br />
                <img src={cdrIcon} alt='Cooldown Reduction Icon'/>
                <span>Ability Haste: </span>{Math.round(this.state.tfTotalStatsLeft.cdr)} / {
                Math.round(100*(this.state.tfTotalStatsLeft.cdr/(100 + this.state.tfTotalStatsLeft.cdr)))}%
              </div>
              <div className="statsBox transformRight">
                <img src={healthIcon} alt='Health Icon'/>
                <span>Health: </span>{Math.round(this.state.tfTotalStatsRight.hp)}<br />
                <img src={armorIcon} alt='Armor Icon'/>
                <span>Armor: </span>{Math.round(this.state.tfTotalStatsRight.arm)}<br />
                <img src={magicResIcon} alt='Magic Resist Icon'/>
                <span>Magic Resist: </span>{Math.round(this.state.tfTotalStatsRight.mr)}<br />
                <img src={ADIcon} alt='Attack Damage Icon'/>
                <span>Attack Damage: </span>{Math.round(this.state.tfTotalStatsRight.ad)}<br />
                <img src={attackSpeedIcon} alt='Attack Speed Icon'/>
                <span>Attack Speed: </span>{this.state.tfTotalStatsRight.as.toFixed(3)}<br />
                <img src={critChanceIcon} alt='Crit Chance Icon'/>
                <span>Crit Chance: </span>{Math.round(this.state.tfTotalStatsRight.critChance)}%<br />
                <img src={manaIcon} alt='Mana Icon'/>
                <span>Mana: </span>{Math.round(this.state.tfTotalStatsRight.mana)}<br />
                <img src={manaRegenIcon} alt='Mana Regen Icon'/>
                <span>Mana per 5: </span>{this.state.tfTotalStatsRight.manaRegen.toFixed(1)}<br />
                <img src={healthRegenIcon} alt='Health Regen Icon'/>
                <span>Health per 5: </span>{this.state.tfTotalStatsRight.hpRegen.toFixed(1)}<br />
                <img src={APIcon} alt='Ability Power Icon'/>
                <span>Ability Power: </span>{Math.round(this.state.tfTotalStatsRight.ap)}<br />
                <img src={cdrIcon} alt='Cooldown Reduction Icon'/>
                <span>Ability Haste: </span>{Math.round(this.state.tfTotalStatsRight.cdr)} / {
                Math.round(100*(this.state.tfTotalStatsRight.cdr/(100 + this.state.tfTotalStatsRight.cdr)))}%
              </div>
            </div>
          </div>
          <div className="flexDisplay">
            <div>
          
              {this.state.champNameLeft === 'Aphelios' ?
                <ApheliosLeft runes={this.runesLeft} items={this.itemStatsLeft} onRankChange={this.onApheliosRank}
                bonuses={this.state.aphelLeft} totalStats={this.state.totalStatsLeft} />
                : ''
              }
              <div className='hiddenLeft abilityTitleBox' style={{paddingTop: '5px'}}>
                <p style={{margin: 0, display: 'inline-block', verticalAlign: 'top'}}><b><u>Passive </u></b></p>
                <div className="spriteContainer">
                  <img className='passiveMargin' src={ this.images[`${this.state.champIndexLeft}`] } alt='Ability icon'/>
                </div>
                <div style={{textAlign: 'left', marginTop: '-5px'}} id='passiveLeftApplied'>
                  <button type='button'>Apply Minimum Stats</button>
                  <button type='button'>Apply Stats </button>
                  <button type='button'>Apply Maximum Stats</button>
                </div>
              </div>
              <div className="hiddenLeft abilityBoxLeft"></div>

              <div className="hiddenLeft abilityTitleBox" style={{paddingTop: '5px'}}>
                <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                  <p style={{margin: 0}}><b><u>Q</u></b> - rank: </p>
                  <input id="QRankLeft" type="number" placeholder="0" min="0" max="5"
                  style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
                </div>
                <div className="spriteContainer">
                  <img className='qMargin' src={ this.images[`${this.state.champIndexLeft}`] } alt='Ability icon'/>
                </div>
                <div style={{textAlign: 'left', marginTop: '-5px'}} id='QLeftApplied'>
                  <button type='button'>Apply Minimum Stats</button>
                  <button type='button'>Apply Stats </button>
                  <button type='button'>Apply Maximum Stats</button>
                </div>
              </div>
              <div className="hiddenLeft abilityBoxLeft"></div>

              <div className="hiddenLeft abilityTitleBox" style={{paddingTop: '5px'}}>
                <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                  <p style={{margin: 0}}><b><u>W</u></b> - rank: </p>
                  <input id="WRankLeft" type="number" placeholder="0" min="0" max="5"
                  style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
                </div>
                <div className="spriteContainer">
                  <img className='wMargin' src={ this.images[`${this.state.champIndexLeft}`] } alt='Ability icon'/>
                </div>
                <div style={{textAlign: 'left', marginTop: '-5px'}} id='WLeftApplied'>
                  <button type='button'>Apply Minimum Stats</button>
                  <button type='button'>Apply Stats </button>
                  <button type='button'>Apply Maximum Stats</button>
                </div>
              </div>
              <div className="hiddenLeft abilityBoxLeft"></div>

              <div className="hiddenLeft abilityTitleBox" style={{paddingTop: '5px'}}>
                <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                  <p style={{margin: 0}}><b><u>E</u></b> - rank: </p>
                  <input id="ERankLeft" type="number" placeholder="0" min="0" max="5"
                  style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
                </div>
                <div className="spriteContainer">
                  <img className='eMargin' src={ this.images[`${this.state.champIndexLeft}`] } alt='Ability icon'/>
                </div>
                <div style={{textAlign: 'left', marginTop: '-5px'}} id='ELeftApplied'>
                  <button type='button'>Apply Minimum Stats</button>
                  <button type='button'>Apply Stats </button>
                  <button type='button'>Apply Maximum Stats</button>
                </div>
              </div>
              <div className="hiddenLeft abilityBoxLeft"></div>

              <div className="hiddenLeft abilityTitleBox" style={{paddingTop: '5px'}}>
                <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                  <p style={{margin: 0}}><b><u>R</u></b> - rank: </p>
                  <input id="RRankLeft" type="number" placeholder="0" min="0" max="3"
                  style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
                </div>
                <div className="spriteContainer">
                  <img className='rMargin' src={ this.images[`${this.state.champIndexLeft}`] } alt='Ability icon'/>
                </div>
                <div style={{textAlign: 'left', marginTop: '-5px'}} id='RLeftApplied'>
                  <button type='button'>Apply Minimum Stats</button>
                  <button type='button'>Apply Stats </button>
                  <button type='button'>Apply Maximum Stats</button>
                </div>
              </div>
              <div className="hiddenLeft abilityBoxLeft" style={{marginBottom: '50px'}}></div>
            </div>
          
            <div>
              {this.state.champNameRight === 'Aphelios' ?
                  <ApheliosRight runes={this.runesRight} items={this.itemStatsRight} onRankChange={this.onApheliosRank}
                  bonuses={this.state.aphelRight} totalStats={this.state.totalStatsRight} />
                  : ''
                }
              <div className='hiddenRight abilityTitleBox' style={{paddingTop: '5px'}}>
                <p style={{margin: 0, display: 'inline-block', verticalAlign: 'top'}}><b><u>Passive </u></b></p>
                <div className="spriteContainer">
                  <img className='passiveMargin' src={ this.images[`${this.state.champIndexRight}`] } alt='Ability icon'/>
                </div>
                <div style={{textAlign: 'left', marginTop: '-5px'}} id='passiveRightApplied'>
                  <button type='button'>Apply Minimum Stats</button>
                  <button type='button'>Apply Stats </button>
                  <button type='button'>Apply Maximum Stats</button>
                </div>
              </div>
              <div className="hiddenRight abilityBoxRight"></div>

              <div className="hiddenRight abilityTitleBox" style={{paddingTop: '5px'}}>
                <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                  <p style={{margin: 0}}><b><u>Q</u></b> - rank: </p>
                  <input id="QRankRight" type="number" placeholder="0" min="0" max="5"
                  style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
                </div>
                <div className="spriteContainer">
                  <img className='qMargin' src={ this.images[`${this.state.champIndexRight}`] } alt='Ability icon'/>
                </div>
                <div style={{textAlign: 'left', marginTop: '-5px'}} id='QRightApplied'>
                  <button type='button'>Apply Minimum Stats</button>
                  <button type='button'>Apply Stats </button>
                  <button type='button'>Apply Maximum Stats</button>
                </div>
              </div>
              <div className="hiddenRight abilityBoxRight"></div>

              <div className="hiddenRight abilityTitleBox" style={{paddingTop: '5px'}}>
                <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                  <p style={{margin: 0}}><b><u>W</u></b> - rank: </p>
                  <input id="WRankRight" type="number" placeholder="0" min="0" max="5"
                  style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
                </div>
                <div className="spriteContainer">
                  <img className='wMargin' src={ this.images[`${this.state.champIndexRight}`] } alt='Ability icon'/>
                </div>
                <div style={{textAlign: 'left', marginTop: '-5px'}} id='WRightApplied'>
                  <button type='button'>Apply Minimum Stats</button>
                  <button type='button'>Apply Stats </button>
                  <button type='button'>Apply Maximum Stats</button>
                </div>
              </div>
              <div className="hiddenRight abilityBoxRight"></div>

              <div className="hiddenRight abilityTitleBox" style={{paddingTop: '5px'}}>
                <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                  <p style={{margin: 0}}><b><u>E</u></b> - rank: </p>
                  <input id="ERankRight" type="number" placeholder="0" min="0" max="5"
                  style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
                </div>
                <div className="spriteContainer">
                  <img className='eMargin' src={ this.images[`${this.state.champIndexRight}`] } alt='Ability icon'/>
                </div>
                <div style={{textAlign: 'left', marginTop: '-5px'}} id='ERightApplied'>
                  <button type='button'>Apply Minimum Stats</button>
                  <button type='button'>Apply Stats </button>
                  <button type='button'>Apply Maximum Stats</button>
                </div>
              </div>
              <div className="hiddenRight abilityBoxRight"></div>

              <div className="hiddenRight abilityTitleBox" style={{paddingTop: '5px'}}>
                <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                  <p style={{margin: 0}}><b><u>R</u></b> - rank: </p>
                  <input id="RRankRight" type="number" placeholder="0" min="0" max="3"
                  style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
                </div>
                <div className="spriteContainer">
                  <img className='rMargin' src={ this.images[`${this.state.champIndexRight}`] } alt='Ability icon'/>
                </div>
                <div style={{textAlign: 'left', marginTop: '-5px'}} id='RRightApplied'>
                  <button type='button'>Apply Minimum Stats</button>
                  <button type='button'>Apply Stats </button>
                  <button type='button'>Apply Maximum Stats</button>
                </div>
              </div>
              <div className="hiddenRight abilityBoxRight" style={{marginBottom: '50px'}}></div>
            </div>
          </div>

        </div>

        {/*<footer style={{bottom: "0px", position: "absolute", width: "100%", textAlign: "right"}}>
        Icon made by <a href="https://www.flaticon.com/authors/vectors-market" 
        title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" 
        title="Flaticon"> www.flaticon.com</a>
        </footer>*/}

      </div>
    );
  }
}

export default App;