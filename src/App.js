/* eslint-disable */

import React, { Component, createElement } from 'react';
import './App.css';
import About from './components/About';
import champList from './components/champList';
import ChampDropDownLeft from './components/ChampDropDownLeft';
import ChampDropDownRight from './components/ChampDropDownRight';
import logo from './images/logoTest.png';  
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
import critDamageIcon from './staticons/critDamage.png';
import manaIcon from './staticons/mana.png';
import APIcon from './staticons/abilityPower.png';
import cdrIcon from './staticons/cdr.png';
import healthRegenIcon from './staticons/healthRegen.png';
import manaRegenIcon from './staticons/manaRegen.png';
import healShieldIcon from './staticons/healShieldPower.png';
import moveSpeedIcon from './staticons/movementspeed.png';
import healIcon from './staticons/healEffect2.png';
import ccIcon from './staticons/crowdControl2.png';
import shieldIcon from './staticons/shield.png';
import tenacityIcon from './staticons/tenacity.png';
import tenacitySlowResIcon from './staticons/tenacitySlowRes.png';
import goldIcon from './staticons/gold.png';
import trueDmgIcon from './staticons/trueDmg.png';
import attackIcon from './staticons/attack.png';
import ieIcon from './itemicons/Infinity Edge.png';
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
        hp: 65,
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
        hp: 65,
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
        hp: 65,
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
        hp: 65,
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
        typeIcon: forceIcon,
        type: 'Adaptive Damage'
      },
      ksPart2Left: {
        text: <span>8% (excluding true damage) for 6 seconds.</span>,
        typeIcon: '',
        type: 'Damage Amplification',
        bonusADRatio: 0,
        APRatio: 0,
        HPRatio: 0,
        array: ''
      },
      ksPart2DisplayLeft: 'block',
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
        typeIcon: forceIcon,
        type: 'Adaptive Damage'
      },
      ksPart2Right: {
        text: <span>8% (excluding true damage) for 6 seconds.</span>,
        typeIcon: '',
        type: 'Damage Amplification',
        bonusADRatio: 0,
        APRatio: 0,
        HPRatio: 0,
        array: ''
      },
      ksPart2DisplayRight: 'block',
      aphelLeft: {
        ad: '[4.5, 9, 13.5, 18, 22.5, 27]',
        as: '[0.09, 0.18, 0.27, 0.36, 0.45, 0.54]',
        lethal: '[5.5, 11, 16.5, 22, 27.5, 33]'
      },
      aphelRight: {
        ad: '[4.5, 9, 13.5, 18, 22.5, 27]',
        as: '[0.09, 0.18, 0.27, 0.36, 0.45, 0.54]',
        lethal: '[5.5, 11, 16.5, 22, 27.5, 33]'
      },
      itemDisplayLeft: [],
      itemDisplayRight: [],
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
    currentShards: {
      Left: [0, 0, 0],
      Right: [0, 0, 0]
    },
    0: {
      0: ['force', 9],
      1: ['as', 0.1],
      2: ['cdr', 8]
    },
    1: {
      0: ['force', 9],
      1: ['force', 0],
      2: ['hpByLvl', 1]
    },
    2: {
      0: ['hp', 65],
      1: ['force', 0],
      2: ['hpByLvl', 1]
    }
  }

  onSearchChange = (event, side) => {
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
  ksPathIcons = {};
  ksPathIndexLeft = 0;
  ksPathIndexRight = 0;
  ksPathColors = ['rgb(255, 225, 82)', 'rgb(245, 12, 63)',
     'rgb(177, 41, 238)', 'rgb(90, 227, 30)', 'rgb(63, 204, 234)'];
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

  totalStatsLeft = {};
  totalStatsRight = {};
  bonusStatsLeft = {
    ad: 10.8,
    as: 0,
    arm: 0, 
    mr: 0,
    hp: 65,
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
  };
  bonusStatsRight = {
    ad: 10.8,
    as: 0,
    arm: 0, 
    mr: 0,
    hp: 65,
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
  };
  tfTotalStatsLeft = {};
  tfTotalStatsRight = {};
  itemStatsLeft = {};
  itemStatsRight = {};

  manaLeft = 1;
  manaRight = 1;
  dcapMultiplierLeft = 1;
  dcapCountLeft = 0;
  dcapMultiplierRight = 1;
  dcapCountRight = 0;
  sterakMultiplierLeft = 1;
  sterakCountLeft = 0;
  sterakCountRight = 0;
  sterakMultiplierRight = 1;
  winterMultiplierLeft = 0;
  winterCountLeft = 0;
  winterMultiplierRight = 0;
  winterCountRight = 0;
  muraLeft = 0;
  muraCountLeft = 0;
  muraRight = 0;
  muraCountRight = 0;
  archangelLeft = 0;
  archangelCountLeft = 0;
  seraphCountLeft = 0;
  archangelRight = 0;
  archangelCountRight = 0;
  seraphCountRight = 0;
  ieCountLeft = 0;
  ieCountRight = 0;

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
  appliedpassiveLeft = {
    statTypes: [],
    minMax: '',
    isItOn: false
  };
  appliedQLeft = {
    statTypes: [],
    minMax: '',
    isItOn: false
  };
  appliedWLeft = {
    statTypes: [],
    minMax: '',
    isItOn: false
  };
  appliedELeft = {
    statTypes: [],
    minMax: '',
    isItOn: false
  };
  appliedRLeft = {
    statTypes: [],
    minMax: '',
    isItOn: false
  };
  appliedpassiveRight = {
    statTypes: [],
    minMax: '',
    isItOn: false
  };
  appliedQRight = {
    statTypes: [],
    minMax: '',
    isItOn: false
  };
  appliedWRight = {
    statTypes: [],
    minMax: '',
    isItOn: false
  };
  appliedERight = {
    statTypes: [],
    minMax: '',
    isItOn: false
  };
  appliedRRight = {
    statTypes: [],
    minMax: '',
    isItOn: false
  };
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
    force: 18,
    ad: 10.8,
    ap: 0,
    as: 0,
    hp: 65,
    cdr: 0,
    tenacity: 0,
    hpByLvl: 0
  };
  runesRight = {
    force: 18,
    ad: 10.8,
    ap: 0,
    as: 0,
    hp: 65,
    cdr: 0,
    tenacity: 0,
    hpByLvl: 0
  };
  forceTypeLeft = 'ad';
  forceTypeRight = 'ad';
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

  setGlobalStats = (side) => {
    var statsPath = this[`champFile${side}`][`stats`];
    var champLvlRatio = (this[`level${side}`] - 1) * (0.7025 + 0.0175 * (this[`level${side}`] - 1));
    var itemStats = this[`itemStats${side}`];
    var runeStats = this[`runes${side}`];
    var appliedStats = Object.assign({}, this[`appliedStats${side}`]);

    runeStats.hp += [10, 20, 30, 40, 50, 60, 70, 80, 90,
    100, 110, 120, 130, 140, 150, 160, 170, 180][(this[`level${side}`] - 1)]*runeStats.hpByLvl;
    if (((itemStats.ap + appliedStats.ap )*this[`dcapMultiplier${side}`]) + 
    (itemStats.mana + statsPath.mana["base"] + statsPath.mana["manaPerLvl"] * champLvlRatio)
    *this[`mana${side}`]*this[`archangel${side}`] > itemStats.ad + appliedStats.ad + (itemStats.mana 
    + statsPath.mana["base"] + statsPath.mana["manaPerLvl"] * champLvlRatio)*this[`mana${side}`]*this[`mura${side}`]
    + (statsPath["baseDamage"] + statsPath["damagePerLvl"] * champLvlRatio)*(this[`sterakMultiplier${side}`]-1)) {
      runeStats.ap = runeStats.force;
      runeStats.ad = 0
    } else {
      runeStats.ad = runeStats.force*0.6
      runeStats.ap = 0
    };

    this.abilities.map(x => {
      if (this[`applied${x}${side}`].isItOn) {
        this[`applied${x}${side}`].statTypes.map(y => {
          if (this[`applied${x}${side}`][y].ratioPer) {
            this[`applied${x}${side}`][y].ratioPer.perStatTypes.map((z, i) => {
              if (z === 'hp') {
                appliedStats[y] += this[`applied${x}${side}`][y].ratioPer.perQuantityValues[i] * (itemStats.hp
                  + runeStats.hp + appliedStats.hp + (itemStats.mana + statsPath.mana["base"] + appliedStats.mana
                + statsPath.mana["manaPerLvl"] * champLvlRatio)*this[`winterMultiplier${side}`]*this[`mana${side}`])
                if (this[`applied${x}${side}`][y].ratioPer.perQuantityTypes[i] !== 'bonus') {
                  appliedStats[y] += this[`applied${x}${side}`][y].ratioPer.perQuantityValues[i] * 
                  (statsPath["baseHP"] + (statsPath["hpPerLvl"] * champLvlRatio))
                }
              };
              if (z === 'ap') {
                appliedStats[y] += this[`applied${x}${side}`][y].ratioPer.perQuantityValues[i] * 
                (((itemStats.ap + appliedStats.ap + runeStats.ap)*this[`dcapMultiplier${side}`]) + 
                (itemStats.mana + statsPath.mana["base"] + statsPath.mana["manaPerLvl"] * champLvlRatio)
                *this[`mana${side}`]*this[`archangel${side}`])
              };
              if (z === 'ad') {
                appliedStats[y] += this[`applied${x}${side}`][y].ratioPer.perQuantityValues[i] * 
                (itemStats.ad + runeStats.ad + appliedStats.ad + (itemStats.mana + statsPath.mana["base"] 
                + statsPath.mana["manaPerLvl"] * champLvlRatio)*this[`mana${side}`]*this[`mura${side}`]
                + (statsPath["baseDamage"] + statsPath["damagePerLvl"] * champLvlRatio)*(this[`sterakMultiplier${side}`]-1))
                if (this[`applied${x}${side}`][y].ratioPer.perQuantityTypes[i] !== 'bonus') {
                  appliedStats[y] += this[`applied${x}${side}`][y].ratioPer.perQuantityValues[i] * 
                  (statsPath["baseDamage"] + statsPath["damagePerLvl"]*champLvlRatio)
                }
              }
            })
          }
        })
      }
    });

    this[`bonusStats${side}`] = {
      ...this[`bonusStats${side}`],
      hp: itemStats.hp + runeStats.hp + appliedStats.hp + (itemStats.mana + statsPath.mana["base"] + appliedStats.mana
        + statsPath.mana["manaPerLvl"] * champLvlRatio)*this[`winterMultiplier${side}`]*this[`mana${side}`],
      as: itemStats.as + runeStats.as + appliedStats.as,
      arm: itemStats.arm + appliedStats.arm,
      ad: itemStats.ad + runeStats.ad + appliedStats.ad + (itemStats.mana + statsPath.mana["base"] 
      + statsPath.mana["manaPerLvl"] * champLvlRatio)*this[`mana${side}`]*this[`mura${side}`]
        + (statsPath["baseDamage"] + statsPath["damagePerLvl"] * champLvlRatio)*(this[`sterakMultiplier${side}`]-1),
      mr: itemStats.mr + appliedStats.mr,
      mana: itemStats.mana*this[`mana${side}`],
      manaRegen: (itemStats.manaRegen + appliedStats.manaRegen)*this[`mana${side}`],
      hpRegen: itemStats.hpRegen + appliedStats.hpRegen
    }; 

    this[`totalStats${side}`] = {
      ...this[`totalStats${side}`],
      hp: statsPath["baseHP"] + (statsPath["hpPerLvl"] * champLvlRatio) + this[`bonusStats${side}`].hp,
      as: statsPath["attackSpeed"] + ((statsPath["asPerLvl"] * champLvlRatio) 
        + this[`bonusStats${side}`].as) * statsPath["asRatio"],
      arm: this[`bonusStats${side}`].arm + statsPath["baseArmor"] + statsPath["armorPerLvl"]*champLvlRatio,
      ad: this[`bonusStats${side}`].ad + statsPath["baseDamage"] + statsPath["damagePerLvl"]*champLvlRatio,
      mr: this[`bonusStats${side}`].mr + statsPath["baseMR"] + statsPath["mrPerLvl"] * champLvlRatio,
      mana: (itemStats.mana + statsPath.mana["base"] 
        + statsPath.mana["manaPerLvl"] * champLvlRatio)*this[`mana${side}`],
      manaRegen: ((itemStats.manaRegen + appliedStats.manaRegen) * statsPath.mana["manaBaseRegen"]/100 
        + statsPath.mana["manaBaseRegen"] + statsPath.mana["manaRegenPerLvl"] * champLvlRatio)*this[`mana${side}`],
      hpRegen: (itemStats.hpRegen + appliedStats.hpRegen) * statsPath["baseHPRegen"]/100
        + statsPath["baseHPRegen"] + statsPath["hpRegenPerLvl"] * champLvlRatio,
      ap: ((itemStats.ap + appliedStats.ap + runeStats.ap)*this[`dcapMultiplier${side}`]) + 
      (itemStats.mana + statsPath.mana["base"] + statsPath.mana["manaPerLvl"] * champLvlRatio)
      *this[`mana${side}`]*this[`archangel${side}`],
      arPenRatio: itemStats.arPenRatio + appliedStats.arPenRatio,
      lethality: itemStats.lethality + appliedStats.lethality, 
      lifeSteal: itemStats.lifeSteal + appliedStats.lifeSteal,
      omni: itemStats.omni + appliedStats.omni, 
      magicPenFlat: itemStats.magicPenFlat + appliedStats.magicPenFlat,
      magicPenRatio: itemStats.magicPenRatio + appliedStats.magicPenRatio,
      cdr: itemStats.cdr + appliedStats.cdr + runeStats.cdr,
      critChance: itemStats.critChance + appliedStats.critChance
    };

    this.abilities.map(x => {
      if (this[`applied${x}${side}`].isItOn) {
        this[`applied${x}${side}`].statTypes.map(y => {
          if (this[`applied${x}${side}`][y].ratio) {
            if (typeof this[`applied${x}${side}`][y].ratio === 'number') {
              this[`bonusStats${side}`][y] *= (this[`applied${x}${side}`][y].ratio + 1);
              this[`totalStats${side}`][y] *= (this[`applied${x}${side}`][y].ratio + 1);
            } else if (this[`applied${x}${side}`][y].ratio.length < 10) {
              this[`bonusStats${side}`][y] *= (this[`applied${x}${side}`][y].ratio
                [document.getElementById(`${x}Rank${side}`).value - 1] + 1);
              this[`totalStats${side}`][y] *= (this[`applied${x}${side}`][y].ratio
                [document.getElementById(`${x}Rank${side}`).value - 1] + 1);
            } else {
              this[`bonusStats${side}`][y] *= (this[`applied${x}${side}`][y].ratio
              [(this[`level${side}`] - 1)] + 1);
              this[`totalStats${side}`][y] *= (this[`applied${x}${side}`][y].ratio
              [(this[`level${side}`] - 1)] + 1);
            }
          };
        })
      }
    });

    if (this[`champName${side}`] === 'Yasuo' || this[`champName${side}`] === 'Yone') {
      this[`totalStats${side}`].critChance *= 2.5;
      if (this[`totalStats${side}`].critChance > 100) {
        this[`bonusStats${side}`].ad += (this[`totalStats${side}`].critChance - 100)*0.4;
        this[`totalStats${side}`].ad += (this[`totalStats${side}`].critChance - 100)*0.4;
      }
    };

    if (this[`totalStats${side}`].critChance > 100) {
      this[`totalStats${side}`].critChance = 100
    };

    this.setState(prevState => ({
      [`totalStats${side}`]: {
        ...prevState[`totalStats${side}`],
        hp: this[`totalStats${side}`].hp,
        as: this[`totalStats${side}`].as,
        arm: this[`totalStats${side}`].arm,
        ad: this[`totalStats${side}`].ad,
        mr: this[`totalStats${side}`].mr,
        mana: this[`totalStats${side}`].mana,
        manaRegen: this[`totalStats${side}`].manaRegen,
        hpRegen: this[`totalStats${side}`].hpRegen,
        ap: this[`totalStats${side}`].ap,
        arPenRatio: this[`totalStats${side}`].arPenRatio,
        lethality: this[`totalStats${side}`].lethality, 
        lifeSteal: this[`totalStats${side}`].lifeSteal,
        omni: this[`totalStats${side}`].omni, 
        magicPenFlat: this[`totalStats${side}`].magicPenFlat,
        magicPenRatio: this[`totalStats${side}`].magicPenRatio,
        cdr: this[`totalStats${side}`].cdr,
        critChance: this[`totalStats${side}`].critChance
      }
    }));

    if (this[`champName${side}`] === 'Gnar' || this[`champName${side}`] === 'Kled' ) {
      var tfPath = this[`champFile${side}`]['statsTransform'];
      this.setState(prevState => ({
        [`tfTotalStats${side}`]: {
          ...prevState[`tfTotalStats${side}`],
          manaRegen: ((itemStats.manaRegen + appliedStats.manaRegen) * tfPath.mana["manaBaseRegen"]/100
            + tfPath.mana["manaBaseRegen"] + tfPath.mana["manaRegenPerLvl"] * champLvlRatio)*this[`mana${side}`],
          hpRegen: (itemStats.hpRegen + appliedStats.hpRegen) * tfPath["baseHPRegen"]/100 
            + appliedStats.hpRegen + tfPath["baseHPRegen"] + tfPath["hpRegenPerLvl"]*champLvlRatio,
          as: tfPath["attackSpeed"] + (this[`bonusStats${side}`].as 
            + tfPath["asPerLvl"]*champLvlRatio) * tfPath["asRatio"],
          arm: this[`bonusStats${side}`].arm + tfPath["baseArmor"] + tfPath["armorPerLvl"]*champLvlRatio,
          ad: itemStats.ad + runeStats.ad + appliedStats.ad + (tfPath["baseDamage"] 
            + tfPath["damagePerLvl"]*champLvlRatio)*this[`sterakMultiplier${side}`]
            + (itemStats.mana + tfPath.mana["base"] + tfPath.mana["manaPerLvl"]*champLvlRatio)
            *this[`mura${side}`]*this[`mana${side}`],
          mr: this[`bonusStats${side}`].mr + tfPath["baseMR"] + tfPath["mrPerLvl"]*champLvlRatio,
          mana: (itemStats.mana + tfPath.mana["base"] 
            + tfPath.mana["manaPerLvl"]*champLvlRatio)*this[`mana${side}`],
          ap: ((itemStats.ap + appliedStats.ap + runeStats.ap)*this[`dcapMultiplier${side}`]) + 
          (itemStats.mana + tfPath.mana["base"] + tfPath.mana["manaPerLvl"]*champLvlRatio)
          *this[`mana${side}`]*this[`archangel${side}`],
          arPenRatio: this[`totalStats${side}`].arPenRatio,
          lethality: this[`totalStats${side}`].lethality, 
          lifeSteal: this[`totalStats${side}`].lifeSteal,
          omni: this[`totalStats${side}`].omni, 
          magicPenFlat: this[`totalStats${side}`].magicPenFlat,
          magicPenRatio: this[`totalStats${side}`].magicPenRatio,
          cdr: this[`totalStats${side}`].cdr,
          critChance: this[`totalStats${side}`].critChance
        }
      }));
      if (this[`champName${side}`] === 'Kled') {
        this.setState(prevState => ({
          [`tfTotalStats${side}`]: {
            ...prevState[`tfTotalStats${side}`],
            hp: tfPath["baseHP"] + tfPath["hpPerLvl"]*champLvlRatio
          }
        }))
      } else {
        this.setState(prevState => ({
          [`tfTotalStats${side}`]: {
            ...prevState[`tfTotalStats${side}`], 
            hp: itemStats.hp + runeStats.hp + tfPath["baseHP"] + (tfPath["hpPerLvl"] * champLvlRatio) + 
            appliedStats.hp + (itemStats.mana + tfPath.mana["base"] + appliedStats.mana
            + tfPath.mana["manaPerLvl"] * champLvlRatio)*this[`winterMultiplier${side}`]*this[`mana${side}`]
          }
        }))
      }
    };
  };

  calculateAbility(side) {
    if (this[`champName${side}`] === 'Aphelios' || this[`champName${side}`] === '') {
      return
    };
    var abilitiesLength = document.getElementsByClassName(`abilityBox${side}`).length;
    for (var i = 0; i < abilitiesLength; i++) {
      var divToEmpty = document.getElementsByClassName(`abilityBox${side}`)[i];
      /*while (divToEmpty.firstChild) {
        divToEmpty.removeChild(divToEmpty.firstChild);
      };*/
      while (divToEmpty.childNodes[1]) {
        divToEmpty.removeChild(divToEmpty.childNodes[1])
      };
      document.getElementById(`${this.abilities[i]}${side}Applied`).style.display = 'none';
      document.getElementById(`${this.abilities[i]}${side}Applied`).childNodes[0].style.visibility = 'hidden';
      document.getElementById(`${this.abilities[i]}${side}Applied`).childNodes[1].style.visibility = 'hidden';
      document.getElementById(`${this.abilities[i]}${side}Applied`).childNodes[2].style.visibility = 'hidden';
    };

    var otherSide = 'Left';
    if (side === 'Left') {
      otherSide = 'Right'
    };
    var champFile = this[`champFile${side}`];
    var statsPath = champFile[`stats`];
    var champName = this[`champName${side}`];

    var champLevel = this[`level${side}`] - 1;
    var champLvlRatio = champLevel * (0.7025 + 0.0175 * champLevel);
    var enemyLvlRatio = (this[`level${otherSide}`] - 1) * (0.7025 + 0.0175 * (this[`level${otherSide}`] - 1));
    var itemStats = this[`itemStats${side}`];
    var runeStats = this[`runes${side}`];
    var appliedStats = this[`appliedStats${side}`];

    var totalAD = this[`totalStats${side}`].ad;
    var bonusAD = this[`bonusStats${side}`].ad;
    var totalAP = this[`totalStats${side}`].ap;
    var totalAS = this[`totalStats${side}`].as;
    var bonusAS = this[`bonusStats${side}`].as * statsPath.asRatio;
    var bonusASRatio = this[`bonusStats${side}`].as;
    var totalArmor = this[`totalStats${side}`].arm;
    var bonusArmor = this[`bonusStats${side}`].arm;
    var totalMR = this[`totalStats${side}`].mr;
    var bonusMR = this[`bonusStats${side}`].ad;
    var totalHP = this[`totalStats${side}`].hp;
    if (champName === 'Kled') {
      totalHP += champFile['statsTransform']['baseHP'] + champFile['statsTransform']['hpPerLvl'] * champLvlRatio
    };
    var bonusHP = this[`bonusStats${side}`].hp;
    var totalCritChance = this[`totalStats${side}`].critChance/100;
    if (champName === 'Tryndamere' || champName === 'Yone') {
      totalCritChance *= 2
    }; 
    var totalLethality = this[`totalStats${side}`].lethality;
    var totalLifeSteal = this[`totalStats${side}`].lifeSteal;
    var totalMana = this[`totalStats${side}`].mana;
    var bonusMana = this[`bonusStats${side}`].mana;
    var nonBaseAS = runeStats.as + (itemStats.as + appliedStats.as 
      + champLvlRatio * statsPath["asPerLvl"]) * statsPath["asRatio"];
    var hasteRatio = 100/(100 + itemStats.cdr + appliedStats.cdr);

    var enemyStats = this[`champFile${otherSide}`].stats;
    var enemyArmor = this[`totalStats${otherSide}`].arm;
    var enemyMR = this[`totalStats${otherSide}`].mr;
    var enemyTotalHP = this[`totalStats${otherSide}`].hp;
    if (this.state[`champName${otherSide}`] === 'Kled') {
      enemyTotalHP += this[`champFile${otherSide}`]['statsTransform']['baseHP'] 
      + this[`champFile${otherSide}`]['statsTransform']['hpPerLvl'] * enemyLvlRatio;
    };
    var enemyBonusHP = this[`bonusStats${otherSide}`].hp;

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
      };
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
      function createBracketDiv() {
        var bracketDiv = document.createElement('div');
        bracketDiv.style.borderImage = "linear-gradient(to right, white 2%, rgba(177, 41, 238, 0)3%) 1";
        bracketDiv.style.borderStyle = "solid";
        bracketDiv.style.borderWidth = "2px";
        bracketDiv.style.borderRight = "none";
        bracketDiv.style.padding = '5px 0 0 8px';
        abilityDiv.appendChild(bracketDiv);
        abilityDiv = bracketDiv
      };
      function underLine(string) {
        /*var underL = document.createElement('u');
        underL.innerText = string + ':';
        var underL = document.createTextNode(string + ':');
        underL.style.color = '#f9b54a'
        abilityDiv.appendChild(underL);*/
        var c = document.createElement('span');
        var d = document.createTextNode(string + ': ');
        c.appendChild(d);
        c.style.color = '#f9b54a';
        abilityDiv.appendChild(c);
      };
      function addPink(x) {
        var b = document.createElement('b');
        b.innerText = x;
        b.style.color = 'lightpink';
        abilityDiv.appendChild(b);
      };
      function colorPart(x) {
        var b = document.createElement('b');
        var u = document.createElement('u');
        u.innerText = x;
        u.style.color = 'cornflowerblue';
        b.appendChild(u);
        abilityDiv.appendChild(b);
        addText(' ');
      };
      function colorMin(x) {
        var c = document.createElement('span');
        var d = document.createTextNode(x);
        c.appendChild(d);
        c.style.color = 'crimson';
        abilityDiv.appendChild(c);
      };
      function colorOrchid(x) {
        var c = document.createElement('span');
        var d = document.createTextNode(x + ': ');
        c.appendChild(d);
        c.style.color = 'mediumorchid';
        abilityDiv.appendChild(c);
      }
      function addBold(text) {
        var b = document.createElement('b');
        b.innerText = text;
        abilityDiv.appendChild(b);
      };
      function addText(text) {
        var a = document.createTextNode(text);
        abilityDiv.appendChild(a);
      };
      function addIE() {
        var e = document.createElement('img');
        e.src = ieIcon;
        e.style.width = '16px';
        e.style.height = '16px';
        abilityDiv.appendChild(e);
      }
      function prependIcon(iconSrc) {
        var e = document.createElement('img');
        e.src = iconSrc;
        if (iconSrc === vampIcon) {
          e.style.width = '15px';
          e.style.height = '15px';
          e.style.paddingRight = '4px';
        }
        e.style.paddingBottom = '3px';
        abilityDiv.appendChild(e);
      };
      function prependType(dmgType) {
        switch (dmgType) {
          case 'Magic':
            prependIcon(APIcon);
            break;
          case 'Physical':
            prependIcon(ADIcon);
            break;
          case 'True':
            prependIcon(trueDmgIcon);
            break;
          case 'Mixed':
            prependIcon(forceIcon);
            break;
        }
      }
      function colorText(text, colorRgb, colorSrc){
        var c = document.createElement('span');
        var d = document.createTextNode(text);
        c.appendChild(d);
        c.style.color = colorRgb;
        abilityDiv.appendChild(c);
        if (colorSrc) {
          var e = document.createElement('img');
          e.src = colorSrc;
          abilityDiv.appendChild(e);
        }
      };
      function colorAD(text){
        colorText(text, 'rgb(189, 125, 76)', ADIcon)
      };
      function adColor(text){
        prependIcon(ADIcon);
        colorText(text, 'rgb(189, 125, 76)')
      };
      function colorAP(text){
        colorText(text, 'rgb(156, 255, 247)', APIcon)
      };
      function apColor(text){
        prependIcon(APIcon);
        colorText(text, 'rgb(156, 255, 247)')
      };
      function colorHP(text){
        colorText(text, 'rgb(32, 152, 93)', healthIcon)
      };
      function hpColor(text){
        prependIcon(healthIcon);
        colorText(text, 'rgb(32, 152, 93)')
      };
      function colorArmor(text){
        colorText(text, 'rgb(247, 113, 90)', armorIcon)
      };
      function armorColor(text){
        prependIcon(armorIcon);
        colorText(text, 'rgb(247, 113, 90)')
      }
      function colorMR(text){
        colorText(text, 'rgb(206, 142, 214)', magicResIcon)
      };
      function mrColor(text){
        prependIcon(magicResIcon);
        colorText(text, 'rgb(206, 142, 214)')
      };
      function colorAS(text){
        colorText(text, 'rgb(255, 203, 90)', attackSpeedIcon)
      };
      function asColor(text){
        prependIcon(attackSpeedIcon);
        colorText(text, 'rgb(255, 203, 90)')
      }
      function colorForce(text){
        colorText(text, 'rgb(132, 69, 255)', forceIcon)
      };
      function colorCrit(text){
        colorText(text, 'rgb(213, 58, 66)', critChanceIcon)
      };
      function critColor(text){
        prependIcon(critChanceIcon);
        colorText(text, 'rgb(213, 58, 66)')
      };
      function colorArPen(text){
        colorText(text, 'rgb(247, 113, 90)', arPenIcon)
      }
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

      const applyAbility = (statType, quantityType, quantityValue, buttonType) => {
        document.getElementById(`${this.abilities[i]}${side}Applied`).style.display = 'block';
        if (ability === 'passive' || document.getElementById(`${ability}Rank${side}`).value != 0) {
          if (buttonType) {
            document.getElementById(`${this.abilities[i]}${side}Applied`).childNodes[0]
            .style.visibility = 'visible';
            document.getElementById(`${this.abilities[i]}${side}Applied`).childNodes[2]
            .style.visibility = 'visible';
          } else {
            document.getElementById(`${this.abilities[i]}${side}Applied`).childNodes[1]
            .style.visibility = 'visible';
          };
          if (!this[`applied${ability}${side}`].statTypes.includes(statType)) {
            this[`applied${ability}${side}`].statTypes.push(statType);
            this[`applied${ability}${side}`][statType] = {}
          };
          if (!this[`applied${ability}${side}`][statType][quantityType]) {
            this[`applied${ability}${side}`][statType][quantityType] = quantityValue
          }
       }
      };

      const applyRatioPer = (statType, perStatType, perQuantityType,
         perQuantityValue, buttonType) => { 
        if (ability === 'passive' || document.getElementById(`${ability}Rank${side}`).value != 0) {
          if (buttonType) {
            document.getElementById(`${this.abilities[i]}${side}Applied`).childNodes[0]
            .style.visibility = 'visible';
            document.getElementById(`${this.abilities[i]}${side}Applied`).childNodes[2]
            .style.visibility = 'visible';
          } else {
            document.getElementById(`${this.abilities[i]}${side}Applied`).childNodes[1]
            .style.visibility = 'visible';
          };
          if (!this[`applied${ability}${side}`].statTypes.includes(statType)) {
            this[`applied${ability}${side}`].statTypes.push(statType);
            this[`applied${ability}${side}`][statType] = {}
          };
          if (!this[`applied${ability}${side}`][statType].ratioPer) {
            this[`applied${ability}${side}`][statType].ratioPer = {
              perStatTypes: [perStatType],
              perQuantityTypes: [perQuantityType],
              perQuantityValues: [perQuantityValue]
            }
          };
          if (!this[`applied${ability}${side}`][statType].ratioPer.perStatTypes.includes(perStatType)) {
            this[`applied${ability}${side}`][statType].ratioPer.perStatTypes.push(perStatType);
            this[`applied${ability}${side}`][statType].ratioPer.perQuantityTypes.push(perQuantityType);
            this[`applied${ability}${side}`][statType].ratioPer.perQuantityValues.push(perQuantityValue);
          }
       }
      };

      function mapValuesToAAFunctions (statType, path, toCalc, statText) {
        if (path['ratio']) {
          underLine(statText + ' Multiplier')
        } else {
          underLine(statText)
        };
        var statCounter = 0;
        if (path['flat']) {
          if (toCalc) {
            applyAbility(statType, 'flat', path['flat'])
            statCounter += arrayCheck(path['flat'])
          } else {
            addText(removeParen(path['flat']))
          }
        };
        if (path["flatMin"]) {
          if (toCalc) {
            applyAbility(statType, 'flat', path['flatMin'], 'minMax')
            statCounter += arrayCheck(path['flatMin'])
          } else {
            addText(removeParen(path['flatMin']))
          }
        };
        if (path['ratio']) {
          if (toCalc) {
            applyAbility(statType, 'ratio', path['ratio'])
            statCounter += arrayCheck(path['ratio'])
          } else {
            addText(removeParen(path['ratio']))
          }
        };
        if (path['byLvl']) {
          if (toCalc) {
            applyAbility(statType, 'byLvl', path['byLvl'])
            statCounter += arrayCheck(path['byLvl'][champLevel])
          } else {
            addText(path['byLvl'][0] + ' to ' + path['byLvl'][17] + ', based on lvl. ');
            underLine('Currently');
            addText(path['byLvl'][champLevel])
          }
        };
        if (path["APRatio"]) {
          if (toCalc) {
            applyRatioPer(statType, 'ap', 'total', path["APRatio"]);
            statCounter += arrayCheck(path["APRatio"]) * totalAP;
          } else {
            addText(' (+' + removeParen(path["APRatio"]));
            colorAP(' AP');
            addText("ratio)");
          }
        };
        if (path["ADRatio"]) {
          if (toCalc) {
            applyRatioPer(statType, 'ad', 'total', path["ADRatio"]);
            statCounter += arrayCheck(path["ADRatio"]) * totalAD;
          } else {
            addText(' (+' + removeParen(path["ADRatio"]));
            colorAD(' AD');
            addText("ratio)");
          }
        };
        if (path["bonusADRatio"]) {
          if (toCalc) {
            applyRatioPer(statType, 'ad', 'bonus', path["bonusADRatio"])
            statCounter += arrayCheck(path["bonusADRatio"]) * bonusAD;
          } else {
            addText(' (+' + removeParen(path["bonusADRatio"]));
            colorAD(' Bonus AD');
            addText("ratio)");
          }
        };
        if (toCalc) {
          if (statCounter > 3) {
            addText(Math.round(statCounter))
          } else {
          addText(statCounter);
          }
        };
        singleBreak()
      };

      if (champFile[ability]) {
        if (ability === 'passive' || document.getElementById(`${ability}Rank${side}`).value == 0) {

          if (champFile[ability]["permanentStats"]) {

          };

          if (champFile[ability]["toggleStats"]) {
            createBracketDiv();
            var path = champFile[ability]["toggleStats"];
            addBold('Bonus Stats');
            if (path["health"]) {
              prependIcon(healthIcon);
              mapValuesToAAFunctions('hp', path["health"], false, "Health")
            };
            if (path["attackSpeed"]) {
              prependIcon(attackSpeedIcon);
              mapValuesToAAFunctions('as', path["attackSpeed"], false, "Attack Speed")
            };
            if (path["attackDamage"]) {
              prependIcon(ADIcon);
              mapValuesToAAFunctions('ad', path["attackDamage"], false, "Attack Damage")
            };
            if (path["omniVamp"]) {
              prependIcon(vampIcon);
              mapValuesToAAFunctions('omni', path["omniVamp"], false, "Omnivamp")
            }
            if (path["healingRatio"]) {
              prependIcon(healIcon);
              underLine('Increased Healing Ratio');
              addText(removeParen(path["healingRatio"]));
              singleBreak();
            };
            if (path["duration"]) {
              underLine('Duration');
              addText(removeParen(path["duration"]));
              if (path["durationExtend"]) {
                addText(" (extends by " + path["durationExtend"] + ' seconds)')
              }
            };

            abilityDiv = document.getElementsByClassName(`abilityBox${side}`)[i];
            singleBreak();
          };

          if (champFile[ability]["text"]) {
            addText(champFile[ability]["text"]);
            doubleBreak();
          };

          if (champFile[ability]["auto"]) {
            var path = champFile[ability]["auto"];
            prependIcon(attackIcon);
            addBold('Modified Basic Attack');
            var baseAutoDmg = totalAD;
            var newAutoDmg = baseAutoDmg;
            if (path["dmgRatio"]) {
              underLine('Damage Ratio');
              addText(path["dmgRatio"])
              newAutoDmg = path["dmgRatio"] * baseAutoDmg;
            };
            if (path["dmgRatioPerCritChance"]) {
              singleBreak();
              prependIcon(critChanceIcon);
              underLine('Damage Ratio per Crit Chance');
              addText(path["dmgRatioPerCritChance"]);
              newAutoDmg += baseAutoDmg * path["dmgRatioPerCritChance"] * totalCritChance;
            };
            if (path["dmgRatioPerCritChanceWithIE"]) {
              addText(' (' + path["dmgRatioPerCritChanceWithIE"] + ' with ');
              addIE();
              addText(' IE)');
            };
            if (path["system"] === 'minMax') {
              colorMin('Min: ');
              if (path["minADRatioByLvl"]) {
                addText('(' + path["minADRatioByLvl"][0] + " to " + path["minADRatioByLvl"][17]);
                colorAD(' AD');
                addText("ratio, based on lvl. ");
                underLine('Currently');
                addText(path["minADRatioByLvl"][champLevel] + ') ');
              };
              singleBreak();
              colorMin('Max: ');
              if (path["maxADRatioByLvl"]) {
                addText('(' + path["maxADRatioByLvl"][0] + " to " + path["maxADRatioByLvl"][17]);
                colorAD(' AD'); 
                addText("ratio, based on lvl. ");
                underLine('Currently');
                addText(path["maxADRatioByLvl"][champLevel] + ') ')
              };
            };
            if (path["critDmg"]) {
              singleBreak();
              prependIcon(critChanceIcon);
              underLine('Crit Damage Ratio');
              addText(path["critDmg"]);
              if (path["critDmgWithIE"]) {
                addText(' (' + path["critDmgWithIE"] + ' with ');
                addIE();
                addText(' IE)');
              };
              if (!path['system']) {
                singleBreak();
                prependIcon(critChanceIcon);
                colorOrchid('Total Crit Damage');
                addText(factorRes('Physical', newAutoDmg * path["critDmg"]));
                if (path["critDmgWithIE"]) {
                  addText(' (' + factorRes('Physical', newAutoDmg * path["critDmgWithIE"]) + ' with ');
                  addIE();
                  addText(' IE)');
                }
              }
            };
            if (path["dmgRatio"]) {
              doubleBreak();
              prependIcon(attackIcon);
              addBold('Basic Attack Damage');
              addText(factorRes('Physical', newAutoDmg));
              if (path["dmgRatioPerCritChanceWithIE"]) {
                addText(' (' + factorRes('Physical', (path["dmgRatio"] * baseAutoDmg) 
                + (baseAutoDmg * path["dmgRatioPerCritChanceWithIE"] * totalCritChance) ) + ' with ');
                addIE();
                addText(' IE)');
              };
            };
            if (path["system"] === 'minMax') {
              doubleBreak();
              prependIcon(attackIcon);
              addBold('Basic Attack Damage');
              colorMin('Min: ');
              addText(factorRes('Physical', path["minADRatioByLvl"][champLevel]*(baseAutoDmg))+ ' (Crit: ' 
              + factorRes('Physical', path["minADRatioByLvl"][champLevel]*(baseAutoDmg)*(path['critDmg'])) 
              + ', with ')
              addIE();
              addText(' IE: ' + factorRes('Physical', 
              path["minADRatioByLvl"][champLevel]*(baseAutoDmg)*(path['critDmgWithIE'])) + ')');
              singleBreak();
              colorMin('Max: ');
              addText(factorRes('Physical', path["maxADRatioByLvl"][champLevel]*(baseAutoDmg))+ ' (Crit: ' + 
              factorRes('Physical', path["maxADRatioByLvl"][champLevel]*(baseAutoDmg)*(path['critDmg']))
              + ', with ')
              addIE();
              addText(' IE: ' + factorRes('Physical', 
              path["maxADRatioByLvl"][champLevel]*(baseAutoDmg)*(path['critDmgWithIE'])) + ')' );
            };
            doubleBreak();
          };

          if (champFile[ability]["autoEmpower"]) {
            var damage = champFile[ability]["autoEmpower"]["damage"];
            if (damage["system"] === "2Part" || damage["system"] === "3Part") {
              createBracketDiv()
            };
            prependIcon(attackIcon);
            if (!damage["durationAutos"] && !damage['autoCoolDown']) {
              addBold('Empowered Basic Attack')
            } else if (damage['autoCoolDown']) {
              addBold('Empower 1 in every ' +  damage["autoCoolDown"] + ' Basic Attacks')
            } else {
              addBold('Empower ' +  damage["durationAutos"] + ' Basic Attacks')
            };
            prependType(damage['type']);
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
              + damage["bonusMoveSpeedRatioByLvl"][17] + " Bonus Move Speed");
              prependIcon(moveSpeedIcon);
              addText("ratio, based on lvl. ");
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
              addText(damage["enemyCurrentHPRatioByLvl"][champLevel] + ") ");
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
              addText(damage["enemyMissingHPRatioByLvl"][champLevel] + ")");
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
                addText('. With ')
                addIE();
                addText(' IE: ' + damage["ADRatioPerCritChanceWithIE"]);
                colorAD(" AD");
                addText('ratio');
              }; 
              addText(')');
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
                  addText(' (' + Math.round(IECounter + dmgCounter) + ' with ');
                  addIE();
                  addText(' IE)');
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
              prependIcon(attackSpeedIcon);
              underLine('Bonus Attack Speed Penalty Ratio');
              addText(damage["attackSpeedPenalty"]);
            };
            if (damage["system"] === "min" ) {
              singleBreak();
              colorMin('Min Damage: ');
              if (damage["minDmg"]) {
                removeSpace(damage["minDmg"]);
              }
            };
            if (damage["system"] === "minMax" ) {
              colorMin('Min: ');
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
                addText(' (' + damage["minDmgPerStack"] + ' per stack)');
              };

              singleBreak();
              colorMin('Max: ');

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
              prependIcon(critChanceIcon);
              underLine('Crit Damage Ratio');
              addText(damage["critDmg"]);
              if (damage["critDmgWithIE"]) {
                addText(' (' + damage["critDmgWithIE"] + ' with ')
                addIE();
                addText(' IE)');
              }
            };
            if (damage['critADRatio']) {
              singleBreak();
              prependIcon(critChanceIcon);
              underLine('Crit Damage');
              addText(damage["critADRatio"]);
              colorAD(" AD");
              addText('ratio')
            };
            if (damage["critADRatioWithIE"]) {
              if (damage["critADRatio"]) {
                addText(' (' + damage["critADRatioWithIE"] + ' with ')
                addIE();
                addText(' IE)');
              } else {
                singleBreak();
                prependIcon(critChanceIcon);
                addIE();
                underLine(' Crit Bonus Dmg with Infinity Edge');
                addText(damage["critADRatioWithIE"]);
                colorAD(" AD");
                addText("ratio");
              }
            };
            if (damage["duration"]) {
              singleBreak();
              underLine('Duration');
              addText(damage["duration"])
            };
            if (damage["minDuration"]) {
              singleBreak();
              underLine('Duration');
              colorMin('Min: ');
              addText(damage["minDuration"]);
              singleBreak();
              colorMin('Max: ')
              addText(damage["maxDuration"])
            };
            
            if (damage["system"] === "2Part" || damage["system"] === "3Part") {
              (function() {
              for (var i = 1; i < 4; i++) {
                if (!damage[`part${i}`]) {
                  return;
                };
                singleBreak();
                var part = damage[`part${i}`];
                colorPart('Part ' + i);  

                if (part["type"]) {
                  prependType(part["type"]);
                  underLine(part["type"] + " Damage");
                };
                if (part["ADRatio"]) {
                  addText(" (" + removeParen(part["ADRatio"]));
                  colorAD(" AD");
                  addText("ratio)");
                };
                if (part["trueDmgRatioByLvl"]) {
                  singleBreak();
                  prependIcon(trueDmgIcon);
                  underLine('True Damage Ratio')
                  addText('(' + part["trueDmgRatioByLvl"][0] + " to " + part["trueDmgRatioByLvl"][17]
                  + ", based on lvl. Currently: " + part["trueDmgRatioByLvl"][champLevel] + ')');
                };
                if (damage[`part${i+1}`]) {
                  singleBreak();
                }
              }
              })();
              abilityDiv = document.getElementsByClassName(`abilityBox${side}`)[i];
            };
            if (damage["system"] === 'infiniteStack') {
              addText(' (stacks infinitely)')
            };
            if (damage["staticCoolDownByLvl"]) {
              singleBreak();
              prependIcon(cdrIcon);
              addPink("Static Cooldown");
              addText('[' + damage["staticCoolDownByLvl"][0] + " to " 
              + damage["staticCoolDownByLvl"][17] + "], based on lvl. ");
              underLine("Currently");
              addText(damage["staticCoolDownByLvl"][champLevel])
            }
            doubleBreak();
          };

          if (champFile[ability]["damage"]) {
            var damage = champFile[ability]["damage"];
            if (damage["system"] === "2Part" || damage["system"] === "3Part") {
              createBracketDiv();
            };
            if (!damage["type"]) {
              addBold("Damage");
            };
            if (damage["type"]) {
              prependType(damage["type"]);
              addBold(damage['type'] + " Damage")
            };
            if (damage["dmg"]) {
              removeSpace(damage["dmg"]);
            };
            if (damage["dmgByLvl"]) {
              if (damage["dmg"]) {
                addText(' [+')
              } else {
                addText('[')
              }
              addText(damage["dmgByLvl"][0] + " to " + damage["dmgByLvl"][17] + ", based on lvl. ");
              underLine("Currently");
              addText(damage["dmgByLvl"][champLevel] + '] ');
            };
            if (damage["totalDmgRatio"]) {
              colorOrchid('Total Damage Ratio');
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
            if (damage["enemyMaxHPRatioPerStack"]) {
              addText(" (+" + removeParen(damage["enemyMaxHPRatioPerStack"]));
              colorHP(' Enemy Max HP');
              addText("ratio per stack)");
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
              + damage["bonusMoveSpeedRatioByLvl"][17] + " Bonus Move Speed")
              prependIcon(moveSpeedIcon);
              addText("ratio, based on lvl. ");
              underLine('Currently');
              addText(damage["bonusMoveSpeedRatioByLvl"][champLevel] + ") ");
            };
            if (damage["dmgPerLethality"]) {
              addText(" (+" + damage["dmgPerLethality"])
              colorArPen(" Lethality");
              addText("ratio)");
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
              prependIcon(critChanceIcon);
              underLine('Crit Damage Ratio');
              addText(damage["critDmg"]);
              if (damage["critDmgWithIE"]) {
                addText(' (' + damage["critDmgWithIE"] + ' with ');
                addIE();
                addText(' IE)');
              }
            };
            if (damage["critADRatio"]) {
              singleBreak();
              underLine('Crit AD Ratio');
              addText(damage["critADRatio"]);
              if (damage["critADRatioWithIE"]) {
                addText(' (' + damage["critADRatioWithIE"] + ' with ');
                addIE();
                addText(' IE)');
              }
            };
            if (damage["asPerBonusAS"]) {
              singleBreak();
              prependIcon(attackSpeedIcon);
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
              colorMin('Min Damage: ')
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
              colorMin('Min: ');
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
                colorMin('Med: ');
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

              colorMin('Max: ');

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
              colorMin('Evolved Max: ');
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
              addText(damage["4thShotDmgRatio"] + ' (' + damage["4thShotDmgRatioWithIE"] + ' with ');
              addIE();
              addText(' IE)');
            };

            if (damage["multiHitDmgRatio"]) {
              singleBreak();
              addText('Additional hits deal ' + damage["multiHitDmgRatio"] + ' damage ratio.');
            };

            if (damage["minMinDmg"]) {
              singleBreak();
              colorMin('Minimum Damage: ');
              removeSpace(damage["minMinDmg"]);
            };

            if (damage["minCritADRatio"]) {
              singleBreak();
              prependIcon(critChanceIcon);
              underLine('Crit Bonus Damage');
              colorMin('Min: ');
              addText(damage["minCritADRatio"]);
              colorAD(" AD");
              addText("ratio");
              if (damage["minCritADRatioWithIE"]) {
                addText(' (' + damage["minCritADRatioWithIE"]);
                colorAD(" AD");
                addText("ratio with ");
                addIE();
                addText(" IE)");
              };
              singleBreak();
              colorMin('Max: ');
              addText(damage["maxCritADRatio"]);
              colorAD(" AD");
              addText("ratio");
              if (damage["maxCritADRatioWithIE"]) {
                addText(' (' + damage["maxCritADRatioWithIE"]);
                colorAD(" AD");
                addText("ratio with ");
                addIE();
                addText(" IE)");
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
                colorMin('Min: ');
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
                colorMin('Max: ');

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
                  colorPart('Part ' + i);  

                if (part["type"]) {
                  prependType(part["type"]);
                  if (!part['postMitigation']) {
                    underLine(part["type"] + " Damage");
                  };
                  if (part["postMitigation"] === 'Magic') {
                    underLine(part["type"] + ' Damage (part 1 damage, post-mitigation)');
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
                  colorMin('Min: ');
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
                  colorMin('Max: ');

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
            abilityDiv = document.getElementsByClassName(`abilityBox${side}`)[i];
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
              prependIcon(cdrIcon);
              underLine('Cooldown');
              addText(damage["coolDown"]);
            };
            if (damage["staticCoolDown"]) {
              singleBreak();
              prependIcon(cdrIcon);
              underLine('Static Cooldown');
              addText(damage["staticCoolDown"]);
            };
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
              prependType(path["type"]);
              addBold(path['type'] + " Damage Over Time")
            } else {
              addBold("Damage Over Time")
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
              addText(" (+" + removeParen(path["APRatio"]));
              colorAP(" AP");
              addText("ratio)");
            };
            if (path["maxManaRatio"]) {
              addText(" (+" + removeParen(path["maxManaRatio"]));
              colorMana(" Max Mana");
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
            if (path["bonusADRatioPerBonusAttackSpeedRatio"]) {
              addText(" (+" + removeParen(path["bonusADRatioPerBonusAttackSpeedRatio"]));
              colorAD(" Bonus AD");
              addText("ratio per");
              colorAS(" Bonus Attack Speed");
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
              colorMin('Min: ');
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
              colorMin('Max: ');

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
              prependIcon(critChanceIcon);
              underLine('Crit Damage Ratio')
              addText(path["critDmg"]);
              if (path["critDmgWithIE"]) {
                addText(' (' + path["critDmgWithIE"] + ' with ');
                addIE();
                addText(' IE)');
              }
            };
            if (path["system"] === 'min') {
              singleBreak();
              colorMin('Min: ');
              removeSpace(path["minDmg"]);
              if (path["interval"] && path["ticks"]) {
                addText(' per ' + path["interval"] + ' sec, for ' + multiplyTicks2(path["interval"]) + ' seconds.')
              };
            };
            if (path["ticks"]) {
              singleBreak();
              colorOrchid('Total');
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
                colorMin('Min: ')
                addText(mapSpace(multiplyTicks(path["minDmg"])))
              };
              if (path["system"] === "minMax" ) {
                colorMin('Min: ');
                if (path["minDmg"]) {
                  var array = mapSpace(multiplyTicks(path["minDmg"]));
                  if (path["minDmgByLvl"]) {
                    array = mapSpace(path['minDmg'].map(x => {
                      return Math.round(path["ticks"] * (x + path["minDmgByLvl"][champLevel]))
                    }))
                  };
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
                colorMin('Max: ');

                if (path["maxDmg"]) {
                  var array = mapSpace(multiplyTicks(path["maxDmg"]));
                  if (path["maxDmgByLvl"]) {
                    array = mapSpace(path['maxDmg'].map(x => {
                      return Math.round(path["ticks"] * (x + path["maxDmgByLvl"][champLevel]))
                    }))
                  };
                  addText(array)
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
              }
            };
            if (path["interval"] && !path["ticks"]) {
              addText(' per ' + path["interval"] + ' sec.')
            };
            if (path["bonusDmgRatioPerCritChance"]) {
              singleBreak();
              underLine('Bonus Damage Ratio');
              addText(path["bonusDmgRatioPerCritChance"] + ' per');
              colorCrit(" Crit Chance");
              if (path["bonusDmgRatioPerCritChanceWithIE"]) {
                addText('(' + path["bonusDmgRatioPerCritChanceWithIE"] + ' with ');
                addIE();
                addText(' IE)');
              }
            };
            if (path["part1"]) {
              colorPart('Part 1');
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
              colorOrchid('Total');
              
              if (path["dmg"]) {
                addText(mapSpace(multiplyTicks(path["dmg"])) );
              };
              if (path["APRatio"]) {
                addText(' (+' +  mapParen(multiplyTicks2(path["APRatio"])));
                colorAP(" AP");
                addText("ratio)");
              };

              doubleBreak();
              colorPart('Part 2');
              path = champFile[ability]["tickDamage"]['part2'];
              
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
              colorOrchid('Total');
              
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
            };
            doubleBreak();
          };

          if (champFile[ability]["specialDelivery"]) {

            var path = champFile[ability]["specialDelivery"]["tickDamage"];
            colorPart("Special Delivery");
            prependType(path['type']);
            addBold(path['type'] + ' Damage');

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
            colorOrchid('Total Damage');

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
            addBold('Passive');
            
            if (path["bonusAttackDamage"]) {
              prependIcon(ADIcon);
              underLine('Bonus Attack Damage');
              if (path["bonusAttackDamage"]["ADRatioByLvl"]) {
                applyAbility('ad', 'ratio', path["bonusAttackDamage"]["ADRatioByLvl"]);
                addText('[' + path["bonusAttackDamage"]["ADRatioByLvl"][0] 
                + " to " + path["bonusAttackDamage"]["ADRatioByLvl"][17]);
                colorAD(" AD");
                addText("ratio, based on lvl. ");
                underLine("Currently");
                addText(path["bonusAttackDamage"]["ADRatioByLvl"][champLevel] + '] ');
              };
              if (path["bonusAttackDamage"]["bonusADRatio"]) {
                applyAbility('ad', 'ratio', path["bonusAttackDamage"]["bonusADRatio"]);
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
                colorMin('Min: ');
                removeSpace(path["bonusAttackDamage"]["minBonusAD"]);
                singleBreak();
                colorMin('Max: ');
                removeSpace(path["bonusAttackDamage"]["maxBonusAD"]);
              };
              if (path["bonusAttackDamage"]["ADPerOverCrit"]) {
                addText(path["bonusAttackDamage"]["ADPerOverCrit"] + ' per');
                colorCrit(" Crit Chance over 100%");
              };
              if (path["bonusAttackDamage"]["ADPerBonusHPRatio"]) {
                addText(path["bonusAttackDamage"]["ADPerBonusHPRatio"] + ' per');
                colorHP(' Bonus HP');
                addText('ratio');
              }
              if (!path["bonusAttackDamage"]["ADPerStack"] && ability === 'passive') {
                singleBreak();
                colorOrchid('Total');
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
                colorMin('Min: ');
                addText(arrayCheck(path["bonusAttackDamage"]["minBonusAD"]));
                singleBreak();
                colorMin('Max: ');
                addText(arrayCheck(path["bonusAttackDamage"]["maxBonusAD"]));
              }
              if (path["bonusAttackDamage"]["ADPerStack"]) {
                addText(path["bonusAttackDamage"]["ADPerStack"] + ' per stack');
              };
              if (path["bonusAttackDamage"]["ADPerOverCrit"]) {
                if (this[`itemStats${side}`].critChance*2.5 > 100) {
                  addText(Math.round((this[`itemStats${side}`].critChance*2.5 - 100)
                   * path["bonusAttackDamage"]["ADPerOverCrit"]));
                } else {
                  addText('0')
                }
              };
            };
            if (path["bonusAPPerBonusHP"]) {
              prependIcon(APIcon);
              underLine('Bonus Ability Power');
              addText(path["bonusAPPerBonusHP"] + ' per');
              colorHP(" Bonus Health");
              singleBreak();
              colorOrchid('Total');
              addText(Math.round(path["bonusAPPerBonusHP"] * bonusHP));
            };
            if (path["bonusHPPerAP"]) {
              singleBreak();
              prependIcon(healthIcon);
              underLine('Bonus Health');
              addText(path["bonusHPPerAP"] + ' per');
              colorAP(" AP");
              singleBreak();
              colorOrchid('Total');
              addText(Math.round(path["bonusHPPerAP"] * totalAP));
            };
            if (path["bonusArmorPerStack"]) {
              prependIcon(armorIcon);
              underLine('Bonus Armor');
              addText(path["bonusArmorPerStack"] + ' per stack');
              singleBreak();
            };
            if (path["bonusAPPerStack"]) {
              prependIcon(APIcon);
              underLine('Bonus Ability Power');
              addText(path["bonusAPPerStack"] + ' per stack');
            };
            if (path["bonusCritChancePerFury"]) {
              prependIcon(critChanceIcon);
              underLine('Bonus Crit Chance');
              addText(path["bonusCritChancePerFury"] + '% per Fury')
            };
            if (path["critChancePer20Stacks"]) {
              singleBreak();
              prependIcon(critChanceIcon);
              underLine('Bonus Crit Chance Ratio');
              addText(path["critChancePer20Stacks"] + ' per 20 stacks');
            };
            if (path["lifestealPerOverCrit"]) {
              singleBreak();
              prependIcon(lifestealIcon);
              underLine('Life Steal per Overcrit');
              addText(path["lifestealPerOverCrit"]);
            };
            if (path["itemCritChanceMultiplier"]) {
              doubleBreak();
              prependIcon(critChanceIcon);
              underLine('Item Crit Chance Multiplier');
              addText(path["itemCritChanceMultiplier"]);
            };
            if (path["bonusResist"]) {
              prependIcon(armorIcon);
              prependIcon(magicResIcon);
              underLine('Bonus Armor and Magic Resist');
              removeSpace(path["bonusResist"]);
            };
            if (path["bonusResistRatio"]) {
              prependIcon(armorIcon);
              prependIcon(magicResIcon);
              underLine('Bonus Armor and Magic Resist');
              addText('(' + path["bonusResistRatio"] + ' Bonus Ratio)');
              singleBreak();
              prependIcon(armorIcon);
              colorOrchid('Total Bonus Armor');
              addText(Math.round(path["bonusResistRatio"] * bonusArmor));
              singleBreak();
              prependIcon(magicResIcon);
              colorOrchid('Total Bonus Magic Resist');
              addText(Math.round(path["bonusResistRatio"] * bonusMR))
            };
            if (path["bonusBonusResistHPRatio"]) {
              prependIcon(armorIcon);
              prependIcon(magicResIcon);
              prependIcon(healthIcon);
              underLine('Bonus Armor, MR, and HP');
              addText('(' + path["bonusBonusResistHPRatio"] + ' Bonus ratio)');
              if (path["bonusBonusPerStack"]) {
                addText(' (+' + path["bonusBonusPerStack"] + ' per stack)');
              };
              singleBreak();
              prependIcon(armorIcon);
              colorOrchid('Total Bonus Armor');
              addText(Math.round(path["bonusBonusResistHPRatio"] * bonusArmor));
              singleBreak();
              prependIcon(magicResIcon);
              colorOrchid('Total Bonus Magic Resist');
              addText(Math.round(path["bonusBonusResistHPRatio"] * bonusMR));
              singleBreak();
              prependIcon(healthIcon);
              colorOrchid('Total Bonus HP');
              addText(Math.round(path["bonusBonusResistHPRatio"] * bonusHP));
            };
            if (path["bonusResistPerStack"]) {
              addText(' (+' + path["bonusResistPerStack"] + ' per stack)');
            };
            if (path["minResistRatio"]) {
              prependIcon(armorIcon);
              prependIcon(magicResIcon);
              underLine('Bonus Armor and Magic Resist');
              colorMin('Min: ');
              addText(path["minResistRatio"] + ' total ratio, ')
              colorMin('Max: ');
              addText(path["maxResistRatio"] + ' total ratio');
              singleBreak();
              prependIcon(armorIcon);
              colorOrchid('Total Bonus Armor');
              colorMin('Min: ');
              addText(Math.round(path["minResistRatio"] * totalArmor) + ', ');
              colorMin('Max: ');
              addText(Math.round(path["maxResistRatio"] * totalArmor));
              singleBreak();
              prependIcon(magicResIcon);
              colorOrchid('Total Bonus Magic Resist');
              colorMin('Min: ');
              addText(Math.round(path["minResistRatio"] * totalMR) + ', ')
              colorMin('Max: ');
              addText(Math.round(path["maxResistRatio"] * totalMR))
            };
            if (path["bonusArmor"]) {
              prependIcon(armorIcon);
              underLine('Bonus Armor');
              if (path["bonusArmor"]["minArmorRatio"]) {
                colorMin('Min: ');
                addText('(' + removeParen(path["bonusArmor"]["minArmorRatio"]));
                colorArmor(' Armor');
                addText('ratio)');
                singleBreak();
                colorMin('Max: ');
                addText('(' + removeParen(path["bonusArmor"]["maxArmorRatio"]));
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
              prependIcon(magicResIcon);
              underLine('Bonus Magic Resist');
              removeSpace(path["bonusMagicResist"]);
              if (path["bonusMagicResistRatio"]) {
                addText(' (+' + removeParen(path["bonusMagicResistRatio"]));
                colorMR(' Bonus Magic Resist');
                addText('ratio)');
              }
            };
            if (path["bonusHealth"]) {
              prependIcon(healthIcon);
              underLine('Bonus Health')
              if (path["bonusHealth"]["healthPerStack"]) {
                addText('(' + path["bonusHealth"]["healthPerStack"] + ' per stack)');
              };
              if (path["bonusHealth"]["healthPerTakedown"]) {
                addText(' (+' + path["bonusHealth"]["healthPerTakedown"] + ' per Takedown)');
              }
            };
            if (path["bonusMoveSpeedRatio"]) {
              prependIcon(moveSpeedIcon);
              underLine('Bonus Move Speed Ratio');
              removeSpace(path["bonusMoveSpeedRatio"])
            };
            if (path["bonusMoveSpeedRatioPer100AP"]) {
              addText(' (+' + path["bonusMoveSpeedRatioPer100AP"] + ' per');
              colorAP(' 100 AP');
              addText(')');
            };
            if (path["lifeStealByLvl"]) {
              prependIcon(lifestealIcon);
              underLine('Life Steal Ratio');
              addText('[' + path["lifeStealByLvl"][0] + " to " + path["lifeStealByLvl"][17] + ", based on lvl. ");
              underLine("Currently");
              addText(path["lifeStealByLvl"][champLevel] + '] ')
            };
            if (path["spellVamp"]) {
              prependIcon(vampIcon);
              underLine('Spell Vamp Ratio')
              addText('(' + removeParen(path["spellVamp"]) + ')')
            };
            if (path["omniVamp"]) {
              prependIcon(vampIcon);
              underLine('Omni Vamp Ratio')
              addText('(' + removeParen(path["omniVamp"]) + ')')
            };
            if (path["minOmniVamp"]) {
              prependIcon(vampIcon);
              underLine('Omni Vamp Ratio')
              colorMin('Min: ');
              addText('(' + removeParen(path["minOmniVamp"]) + ')');
              singleBreak();
              colorMin('Max: ');
              addText('(' + removeParen(path["maxOmniVamp"]) + ')');
            };
            if (path["armorPenRatio"]) {
              prependIcon(arPenIcon);
              underLine('Armor Pen Ratio')
              addText('(' + removeParen(path["armorPenRatio"]) + ')');
            };
            if (path["magicPenRatio"]) {
              prependIcon(mPenIcon);
              underLine('Magic Pen Ratio')
              addText('(' + removeParen(path["magicPenRatio"]) + ')')
            };
            if (path["bonusAttackSpeed"]) {
              prependIcon(attackSpeedIcon);
              underLine('Bonus Attack Speed Ratio')
              removeSpace(path["bonusAttackSpeed"])
            };
            if (path["attackSpeedPerMissingHPRatio"]) {
              prependIcon(attackSpeedIcon);
              underLine('Bonus Attack Speed');
              addText('(' + path["attackSpeedPerMissingHPRatio"] + ' per');
              colorHP(' Missing HP');
              addText('ratio)');
            };
            if (path["minBonusAttackSpeed"]) {
              prependIcon(attackSpeedIcon);
              underLine('Bonus Attack Speed');
              addText('Min: ' + path["minBonusAttackSpeed"]);
              singleBreak();
              addText('Max: ' + path["maxBonusAttackSpeed"]);
            };
            if (path["minBonusAttackSpeedByLvl"]) {
              prependIcon(attackSpeedIcon);
              underLine('Bonus Attack Speed');
              colorMin('Min: ');
              addText('[' + path["minBonusAttackSpeedByLvl"][0] + " to " 
              + path["minBonusAttackSpeedByLvl"][17] + ", based on lvl. ");
              underLine("Currently");
              addText(path["minBonusAttackSpeedByLvl"][champLevel] + '] ')

              singleBreak();
              colorMin('Max: ');
              addText('[' + path["maxBonusAttackSpeedByLvl"][0] + " to " 
              + path["maxBonusAttackSpeedByLvl"][17] + ", based on lvl. ");
              underLine("Currently");
              addText(path["maxBonusAttackSpeedByLvl"][champLevel] + '] ')
            };
            if (path["maxHPRegen"]) {
              prependIcon(healthRegenIcon);
              underLine('Max HP Regen Ratio');
              addText(path["maxHPRegen"] + ' per 5');
              singleBreak();
              colorOrchid('Total');
              addText(Math.round(path["maxHPRegen"] * totalHP) + ' per 5');
            };
            if (path["minMaxHPRegen"]) {
              prependIcon(healthRegenIcon);
              underLine('Max HP Regen Ratio');
              colorMin('Min: ');
              addText(path["minMaxHPRegen"] + ', ')
              colorMin('Max: ');
              addText(path["maxMaxHPRegen"]);
              singleBreak();
              colorOrchid('Total');
              colorHP(' HP');
              addText('per 5: ')
              colorMin('Min: ');
              addText(Math.round(path["minMaxHPRegen"] * totalHP) + ', ');
              colorMin('Max: '); 
              addText(Math.round(path["maxMaxHPRegen"] * totalHP))
            };
            if (path["tenacity"]) {
              prependIcon(tenacityIcon);
              underLine('Tenacity Ratio');
              addText(path["tenacity"])
            };
            if (path["maxHPRegenByLvl"]) {
              prependIcon(healthRegenIcon);
              underLine('Max Health Regen Ratio');
              addText('[' + path["maxHPRegenByLvl"][0] + " to " + path["maxHPRegenByLvl"][17] + ", based on lvl. ");
              underLine("Currently");
              addText(path["maxHPRegenByLvl"][champLevel] + '] ')
            };
            if (path["HPRegenPer5MissHPByLvl"]) {
              prependIcon(healthRegenIcon);
              underLine('Health Regen');
              addText('[' + path["HPRegenPer5MissHPByLvl"][0] + " to " + path["HPRegenPer5MissHPByLvl"][17] 
              + " per second, ");
              colorHP('per 5% Missing HP');
              addText(', based on lvl. ');
              underLine("Currently");
              addText(path["HPRegenPer5MissHPByLvl"][champLevel] + '] ')
            };
            if (path["bonusMSToBonusADRatioByLvl"]) {
              prependIcon(ADIcon);
              underLine('Bonus AD per Bonus Movespeed');
              addText('[' + path["bonusMSToBonusADRatioByLvl"][0] + " to " 
              + path["bonusMSToBonusADRatioByLvl"][17] + ", based on lvl. ");
              underLine("Currently");
              addText(path["bonusMSToBonusADRatioByLvl"][champLevel] + '] ')
            };
            if (path["bonusManaPer100AP"]) {
              prependIcon(manaIcon);
              underLine('Bonus Mana Ratio');
              addText(path["bonusManaPer100AP"] + ' per ');
              colorAP('100 AP');
              singleBreak();
              colorOrchid('Total Bonus Mana'); 
              addText(Math.round(totalMana * path["bonusManaPer100AP"] * totalAP / 100));
            };
            if (path["maxHealingRatio"]) {
              prependIcon(healIcon);
              underLine('Increased Healing Ratio');
              colorMin('Max: ');
              addText(removeParen(path["maxHealingRatio"]));
              if (path["maxHealingRatioPerBonusHealth"]) {
                addText(' (+' + removeParen(path["maxHealingRatioPerBonusHealth"]) + ' per');
                colorHP(' Bonus HP');
                addText('ratio)');
                singleBreak();
                colorOrchid('Total');
                colorMin('Max: ');
                if ( (path["maxHealingRatio"] + path["maxHealingRatioPerBonusHealth"]*bonusHP)
                .toString().length > 5 ){
                  addText((path["maxHealingRatio"] 
                  + path["maxHealingRatioPerBonusHealth"]*bonusHP).toFixed(3))
                } else {
                  addText((path["maxHealingRatio"] + path["maxHealingRatioPerBonusHealth"]*bonusHP))
                }
              }
            };
            doubleBreak();
          };

          if (champFile[ability]["selfHeal"]) {
            var path = champFile[ability]["selfHeal"];
            prependIcon(healIcon);
            addBold('Self Heal')
            if (path["healByLvl"]) {
              addText('[' + path["healByLvl"][0] + " to " + path["healByLvl"][17] + ", based on lvl. ");
              underLine("Currently");
              addText(path["healByLvl"][champLevel] + '] ')
            };
            if (path["maxHPRatio"]) {
              addText(" (+" + removeParen(path["maxHPRatio"]));
              colorHP(' Max HP');
              addText('ratio)');
              singleBreak();
              colorOrchid("Total");
              addText(Math.round(path["maxHPRatio"] * totalHP));
            };
            doubleBreak();
          };

          if (champFile[ability]["allyHeal"]) {
            var path = champFile[ability]["allyHeal"];
            prependIcon(healIcon);
            addBold('Ally Heal')
            if (path["healByLvl"]) {
              addText('[' + path["healByLvl"][0] + " to " + path["healByLvl"][17] + ", based on lvl. ");
              underLine("Currently");
              addText(path["healByLvl"][champLevel] + '] ')
            };
            if (path["maxHPRatio"]) {
              addText(" (+" + removeParen(path["maxHPRatio"]));
              colorHP(' Max HP');
              addText('ratio)');
              singleBreak();
              colorOrchid("Total");
              addText(Math.round(path["maxHPRatio"] * totalHP));
            };
            doubleBreak();
          };
          
          if (champFile[ability]["heal"]) {
            var path = champFile[ability]["heal"];
            prependIcon(healIcon);
            addBold('Heal');
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
              addText(path["lifeStealRatio"] + ' of Life Stolen');
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
              addText('Increase by ratio of ' +  path["increasePer1%HPLostLast4Sec"] + ' per 1%');
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
              if (path["preMitigation"] === 'true') {
                addText(', pre-mitigation.')
              } else {
                addText(', post-mitigation.')
              }
            };
            if (path["system"] === "max") {
              colorMin('Max: ');
              if (path["maxHealByLvl"]) {
                addText('[' + path["maxHealByLvl"][0] + " to " + path["maxHealByLvl"][17] + ", based on lvl. ");
                underLine("Currently");
                addText(path["maxHealByLvl"][champLevel] + '] ')
              }
            };
            if (path["system"] === '2Part') {
              colorPart('Part 1');
              if (path["part1"]["heal"]) {
                removeSpace(path["part1"]["heal"])
              };
              if (path["part1"]["APRatio"]) {
                addText(" (+" + removeParen(path["part1"]["APRatio"]));
                colorAP(' AP');
                addText('ratio)');
              };
              singleBreak();
              colorPart('Part 2');
              if (path["part2"]["part1RatioFormula"]) {
                addText('Formula: ' + path["part2"]["part1RatioFormula"]);
              }
            };
            if (path["system"] === "minMax" ) {
              colorMin('Min: ')
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
              colorMin('Max: ');

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
              colorOrchid('Total');
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
                  colorMin('Min: ');
                  addText(mapSpace(multiplyTicks(path["minHeal"])));
                };
                if (path["minAPRatio"]) {
                  addText(' (+' + mapParen(multiplyTicks2(path['minAPRatio'])));
                  colorAP(' AP');
                  addText('ratio)');
                };
                singleBreak();
                if (path["maxHeal"]) {
                  colorMin('Max: ');
                  addText(mapSpace(multiplyTicks(path["maxHeal"])));
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
              var empPath = path["empower"];
              singleBreak();
              prependIcon(healIcon);
              addBold('Empowered Heal');
              if (empPath["system"] === 'minMax') {
                colorMin('Min: ');
                if (empPath["minHeal"]) {
                  removeSpace(empPath["minHeal"]);
                }
                if (empPath["minBonusADRatio"]) {
                  addText(' (+' + removeParen(empPath["minBonusADRatio"]));
                  colorAD(' Bonus AD');
                  addText('ratio)');
                }
                singleBreak();
                colorMin('Max: ');
                if (empPath["maxHeal"]) {
                  removeSpace(empPath["maxHeal"]);
                }
              }
            };
            if (path["empowerBonus"]) {
              var empPath = path["empowerBonus"];
              singleBreak();
              prependIcon(healIcon);
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
            prependIcon(shieldIcon);
            if (path["type"] !== 'all') {
              addBold(path["type"] + ' Shield');
            } else {
              addBold(' Shield');
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
              colorMin('Max: ')
              addText('(' + removeParen(path["maxMaxHPRatio"]));
              colorHP(' Max HP');
              addText('ratio)');
            };
            if (path["system"] === "minMax" ) {
              colorMin('Min: ')
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
              colorMin('Max: ');
              
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
              prependIcon(cdrIcon);
              addPink('Combat Cooldown');
              addText(path["combatCoolDown"])
            };
            if (path["combatCoolDownByLvl"]) {
              singleBreak();
              prependIcon(cdrIcon);
              addPink('Combat Cooldown');
              addText('[' + path["combatCoolDownByLvl"][0] + " to " 
              + path["combatCoolDownByLvl"][17] + "], based on lvl. ");
              addText('Currently: ' + path["combatCoolDownByLvl"][champLevel])
            }
            doubleBreak();
          };

          if (champFile[ability]["revive"]) {
            var path = champFile[ability]["revive"]
            addBold('Revive')
            if (path["reviveTransform"]) {
              underLine('Transform Stats');
              hpColor('HP Ratio: ');
              addText(path["reviveTransform"]["HPRatio"] + ' (');
              colorOrchid('Total');
              addText(Math.round(path["reviveTransform"]["HPRatio"] * totalHP) + ')');
              if (path["reviveTransform"]["bonusArmorByLvl"]) {
                singleBreak();
                armorColor('Bonus Armor: ');
                addText(path["reviveTransform"]["bonusArmorByLvl"][0] 
                + " to " + path["reviveTransform"]["bonusArmorByLvl"][17] + ", based on lvl. ")
                underLine('Currently');
                addText(path["reviveTransform"]["bonusArmorByLvl"][champLevel])
              };
              if (path["reviveTransform"]["bonusMagicResistByLvl"]) {
                singleBreak();
                mrColor('Bonus Magic Resist: ');
                addText(path["reviveTransform"]
                ["bonusMagicResistByLvl"][0] + " to " + path["reviveTransform"]["bonusMagicResistByLvl"][17]
                + ', based on lvl. ');
                underLine('Currently');
                addText(path["reviveTransform"]["bonusMagicResistByLvl"][champLevel])
              };
              if (path["reviveTransform"]["armorRatio"]) {
                singleBreak();
                armorColor('Armor Ratio: ');
                addText(path["reviveTransform"]["armorRatio"] + ' (');
                colorOrchid('Total');
                addText(Math.round(path["reviveTransform"]["armorRatio"] * totalArmor) + ')');
              };
              if (path["reviveTransform"]["magicResistRatio"]) {
                singleBreak();
                mrColor('Magic Resist Ratio: ');
                addText(path["reviveTransform"]["magicResistRatio"] + ' (');
                colorOrchid('Total');
                addText(Math.round(path["reviveTransform"]["magicResistRatio"] * totalMR) + ')')
              };
              if (path["reviveTransform"]["aoeResist"]) {
                singleBreak();
                underLine('AOE Resist Ratio');
                addText(path["reviveTransform"]["aoeResist"])
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
              prependIcon(healthIcon);
              underLine('Health Restored');
              removeSpace(path["health"])
            };
            if (path["healthPerAP"]) {
              addText(' (+' + path["healthPerAP"] + ' per ');
              colorAP('AP');
              addText(')');
            };
            if (path["minHPRestoreRatio"]) {
              doubleBreak();
              prependIcon(healthIcon);
              underLine('Health Restored');
              colorMin('Min: ');
              addText(path["minHPRestoreRatio"]);
              colorHP(' Max HP');
              addText('ratio (');
              colorOrchid('Total');
              addText(Math.round(path["minHPRestoreRatio"] * totalHP) + ')');
              singleBreak();
              colorMin('Max: ');
              addText(path["maxHPRestoreRatio"]);
              colorHP(' Max HP');
              addText('ratio (');
              colorOrchid('Total');
              addText(Math.round(path["maxHPRestoreRatio"] * totalHP) +')')
            }
            doubleBreak();
          };

          if (champFile[ability]["damageRedux"]) {
            var path = champFile[ability]["damageRedux"]
            if (path["type"] !== 'all') {
              prependType(path["type"]);
              addBold('Reduced ' + path["type"] + ' Damage Taken')
            } else {
              addBold('Reduced Damage Taken')
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
              prependIcon(attackIcon);
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
              colorMin('Min: ');
              addText(path["minDuration"]);
              singleBreak();
              colorMin('Max: ');
              addText(path["maxDuration"]);
            };
            if (path["calculateFrom"]) {
              singleBreak();
              addText('Applies ' + path["calculateFrom"] + '.')
            };
            doubleBreak();
          };

          if (champFile[ability]["magicDamageRedux"]) {
            var path = champFile[ability]["magicDamageRedux"];
            prependIcon(APIcon);
            addBold('Reduced Magic Damage Taken');
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
            var path = champFile[ability]["physDamageRedux"];
            prependIcon(ADIcon);
            addBold('Reduced Physical Damage Taken');
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
            addBold('Passive Damage Increase Ratio');
            addText('(' + removeParen(champFile[ability]["passiveDmgIncrease"]) + ')');
            doubleBreak();
          };

          if (champFile[ability]["dmgImmune"]) {
            addBold('Damage Immune Duration')
            removeSpace(champFile[ability]["dmgImmune"]);
            doubleBreak();
          };

          if (champFile[ability]["ccImmune"]) {
            prependIcon(ccIcon);
            addBold('Crowd Control Immune Duration')
            removeSpace(champFile[ability]["ccImmune"]);
            doubleBreak();
          };

          if (champFile[ability]["minDmgImmune"]) {
            prependIcon(ccIcon);
            addBold('Crowd Control Immune Duration')
            colorMin('Min: ')
            addText(champFile[ability]["minDmgImmune"])
            singleBreak();
            colorMin('Max: ')
            addText(champFile[ability]["maxDmgImmune"])
            doubleBreak();
          };

          if (champFile[ability]["silence"]) {
            addBold('Silence Duration')
            removeSpace(champFile[ability]["silence"]);
            doubleBreak();
          };

          if (champFile[ability]["blind"]) {
            addBold('Blind Duration')
            removeSpace(champFile[ability]["blind"]);
            doubleBreak();
          };

          if(champFile[ability]["interruptCC"] || champFile[ability]["interruptCCByLvl"] 
          || champFile[ability]["minInterruptCC"]) {
            prependIcon(ccIcon);
            addBold('Crowd Control Duration')
          };

          if (champFile[ability]["interruptCC"]) {
            removeSpace(champFile[ability]["interruptCC"]);
            if (champFile[ability]["interruptCCPer10Lethality"]) {
              addText(' (+' + champFile[ability]["interruptCCPer10Lethality"] + ' per');
              colorArPen(' 10 Lethality');
              addText(')');
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
            colorMin('Min: ')
            removeSpace(champFile[ability]["minInterruptCC"]);
            singleBreak();
            colorMin('Max: ')
            removeSpace(champFile[ability]["maxInterruptCC"]);
            doubleBreak();
          };
          
          if (champFile[ability]["damageAmp"]) {
            var ampPath = champFile[ability]["damageAmp"]
            addBold('Damage Amp Ratio');
            addText(ampPath["amp"]);
            singleBreak();
            underLine('Duration');
            addText(ampPath["duration"]);
            doubleBreak();
          };

          if (champFile[ability]["ADRedux"]) {
            var path = champFile[ability]["ADRedux"];
            prependIcon(ADIcon);
            addBold('Attack Damage Reduction');
            if (path["redux"]) {
              removeSpace(path["redux"]);
            };
            doubleBreak();
          };

          if (champFile[ability]["resistRedux"]) {
            var path = champFile[ability]["resistRedux"]
            if (path["type"] === 'both') {
              prependIcon(armorIcon);
              prependIcon(magicResIcon);
              addBold('Armor and Magic Resist Reduction');
            };
            if (path["type"] === 'magicResist') {
              prependIcon(magicResIcon);
              addBold('Magic Resist Reduction');
            };
            if (path["type"] === 'armor') {
              prependIcon(armorIcon);
              addBold('Armor Reduction');
            };
            if (path["resist"]) {
              removeSpace(path["resist"]);
            };
            if (path["reduxRatio"]) {
              underLine('Ratio');
              removeSpace(path["reduxRatio"])
            };
            if (path["system"] === 'minMax') {
              colorMin('Min: ');
              if (path["minResistRedux"]) {
                removeSpace(path["minResistRedux"])
              };
              singleBreak();
              colorMin('Max: ');
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
              colorMin('Max Duration: ')
              removeSpace(path["maxDuration"])
            };
            doubleBreak();
          };

          if (champFile[ability]["bonusStats"]) {
            var path = champFile[ability]["bonusStats"];
            addBold('Bonus Stats');
            if (path["attackDamageByLvl"]) {
              prependIcon(ADIcon);
              underLine('Attack Damage');
              addText('[' + path["attackDamageByLvl"][0] + " to " + path["attackDamageByLvl"][17] 
              + "], based on lvl. Currently: " + path["attackDamageByLvl"][champLevel]);
              singleBreak();
            };
            if (path["attackSpeed"]) {
              prependIcon(attackSpeedIcon);
              underLine('Attack Speed Ratio');
              addText('(' + removeParen(path["attackSpeed"]) + ')')
              singleBreak();
            };
            if (path["ADRatio"]) {
              prependIcon(ADIcon);
              underLine('Attack Damage Ratio');
              addText('(' + removeParen(path["ADRatio"]) + ')')
              singleBreak();
            };
            if (path["lifeSteal"]) {
              prependIcon(lifestealIcon);
              underLine('Life Steal Ratio');
              addText('(' + removeParen(path["lifeSteal"]) + ')')
              singleBreak();
            };
            if (path["lifeStealMultiplier"]) {
              prependIcon(lifestealIcon);
              underLine('Life Steal Multiplier');
              addText('(' + removeParen(path["lifeStealMultiplier"]) + ')')
              singleBreak();
            };
            if (path["healingRatio"]) {
              prependIcon(healIcon);
              underLine('Increased Healing Ratio');
              addText(removeParen(path["healingRatio"]))
              singleBreak();
            };
            if (path["healingPerMissingHPRatio"]) {
              prependIcon(healIcon);
              underLine('Increased Healing');
              addText('(' + path["healingPerMissingHPRatio"] + ' per');
              colorHP(' Missing HP');
              addText('ratio)');
              singleBreak();
            };
            if (path["resist"]) {
              prependIcon(armorIcon);
              prependIcon(magicResIcon);
              underLine('Armor and Magic Resist');
              removeSpace(path["resist"]);
              singleBreak();
            };
            if (path["abilityPower"]) {
              prependIcon(APIcon);
              underLine('Ability Power');
              removeSpace(path["abilityPower"]);
              singleBreak();
            }
            if (path["healthRegen"]) {
              prependIcon(healthRegenIcon);
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
            var path = champFile[ability]["bonusHealth"];
            prependIcon(healthIcon);
            addBold('Bonus Health');
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
            if (path["bonusADRatio"]) {
              addText(' (+'); 
              removeSpace(path["bonusADRatio"]);
              colorAD(' Bonus AD');
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
            prependIcon(healthRegenIcon);
            addBold('Max HP Ratio Regenerated');
            removeSpace(champFile[ability]["maxHPRegen"]);
            doubleBreak();
          };

          if (champFile[ability]["healthRegen"]) {
            var path = champFile[ability]["healthRegen"];
            singleBreak();
            prependIcon(healthRegenIcon);
            addBold('Health Regen');
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
              colorMin('Max: ');
              addText(path["maxHPRatio"]);
              colorHP(' Max HP');
              addText('ratio');
            };
            doubleBreak();
          };

          if (champFile[ability]["bonusAttackDamage"]) {
            var path = champFile[ability]["bonusAttackDamage"];
            prependIcon(ADIcon);
            addBold('Bonus Attack Damage');
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
              colorMin('Min: ');
              removeSpace(path['minAttackDamage'])
            };
            if (path['maxAttackDamage']) {
              singleBreak();
              colorMin('Max: ');
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
            prependIcon(healthRegenIcon);
            addBold('Bonus Health Regen');
            if (path["HPRegenPerSecondByLvl"]) {
              addText('[' + path["HPRegenPerSecondByLvl"][0] + " to " + path["HPRegenPerSecondByLvl"][17] 
              + "] per second, based on lvl. Currently: " + path["HPRegenPerSecondByLvl"][champLevel]);
            };
            doubleBreak();
          };

          if (champFile[ability]["bonusAdaptiveForce"]) {
            var path = champFile[ability]["bonusAdaptiveForce"];
            prependIcon(forceIcon);
            addBold('Self Bonus Adaptive Force');
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
            var path = champFile[ability]["allyBonusAdaptiveForce"];
            prependIcon(forceIcon);
            addBold('Ally Bonus Adaptive Force')
            if (path["adaptiveAD"]) {
              adColor('AD: ');
              addText(removeParen(path["adaptiveAD"]));
            };
            if (path["allyAdaptiveBonusADRatio"]) {
              addText(' (+' + removeParen(path["allyAdaptiveBonusADRatio"]));
              colorAD(' Ally Bonus AD');
              addText('ratio)');
            };
            if (path["adaptiveAP"]) {
              singleBreak();
              apColor('AP: ');
              addText(removeParen(path["adaptiveAP"]));
            };
            if (path["allyAdaptiveAPRatio"]) {
              addText(' (+' + removeParen(path["allyAdaptiveAPRatio"]));
              colorAP(' Ally AP');
              addText('ratio)');
            };
            doubleBreak();
          };

          if (champFile[ability]["bonusResist"]) {
            var path = champFile[ability]["bonusResist"];
            prependIcon(armorIcon);
            prependIcon(magicResIcon);
            addBold('Bonus Armor & Magic Resist');
            if (path["resist"]) {
              removeSpace(path["resist"]);
            }
            if (path["bonusResistByLvl"]) {
              addText('[' + path["bonusResistByLvl"][0] + " to " + path["bonusResistByLvl"][17] 
              + "], based on lvl. Currently: " + path["bonusResistByLvl"][champLevel]);
            };
            if (path["minResistByLvl"]) {
              colorMin('Min: ');
              addText('[' + path["minResistByLvl"][0] + " to " + path["minResistByLvl"][17] 
              + ", based on lvl. Currently: " + path["minResistByLvl"][champLevel] + ']');
              singleBreak();
              colorMin('Max: ');
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
              colorMin('Min: ');
              removeSpace(path["minResist"]);
              singleBreak();
              colorMin('Max: ');
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
            var penPath = champFile[ability]["bonusArmorPenOnCrit"];
            prependIcon(arPenIcon);
            prependIcon(critChanceIcon);
            addBold('Bonus-Armor Pen Ratio on Crits')
            addText(penPath["penRatio"]);
            singleBreak();
            underLine('Duration');
            addText(penPath["duration"]);
            doubleBreak();
          };

          if (champFile[ability]["bonusArmor"]) {
            var path = champFile[ability]["bonusArmor"];
            prependIcon(armorIcon);
            addBold('Bonus Armor')
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
              colorMin('Min: ');
              if (path["minArmor"]) {
                removeSpace(path["minArmor"]);
              };
              singleBreak();
              colorMin('Max: ');
              if (path["maxArmor"]) {
                removeSpace(path["maxArmor"]);
              };
            }
            doubleBreak();
          };

          if (champFile[ability]["allyBonusArmor"]) {
            var path = champFile[ability]["allyBonusArmor"];
            prependIcon(armorIcon);
            addBold('Ally Bonus Armor');
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
            var path = champFile[ability]["bonusMagicResist"];
            prependIcon(magicResIcon);
            addBold('Bonus Magic Resist');
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
            var path = champFile[ability]["allyBonusMagicResist"];
            prependIcon(magicResIcon);
            addBold('Ally Bonus Magic Resist');
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
            prependIcon(attackSpeedIcon);
            addBold('Bonus Attack Speed Ratio');
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
            if (ASPath["attackSpeedByLvlPerStack"]) {
              addText(' [+' + ASPath["attackSpeedByLvlPerStack"][0] + " to " 
              + ASPath["attackSpeedByLvlPerStack"][17] + " per stack, based on lvl. ");
              underLine('Currently');
              addText(ASPath["attackSpeedByLvlPerStack"][champLevel] + ']');
            };
            if (ASPath["attackSpeedByRRank"]) {
              removeSpace(ASPath['attackSpeedByRRank']);
              addText(' (based on R rank)')
            };
            if (ASPath["attackSpeedPerStack"]) {
              addText(' (+' + ASPath["attackSpeedPerStack"] + ' per stack)');
            }
            if (ASPath['minAttackSpeed']) {
              colorMin('Min: ');
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
              colorMin('Max: ');
              
              removeSpace(ASPath['maxAttackSpeed']);
              if (ASPath["maxBonusAttackSpeedRatio"]) {
                addText(' (+' + ASPath["maxBonusAttackSpeedRatio"]);
                colorAS(' Bonus Attack Speed');
                addText('ratio)');
              };
              if (ASPath["maxAttackSpeedPer100AP"]) {
                addText(' (+' + ASPath["maxAttackSpeedPer100AP"] + ' per');
                colorAP(' 100 AP');
                addText(')');
              }
            };
            if (ASPath["minAttackSpeedByLvl"]) {
              colorMin('Min: ');
              addText('[' + ASPath["minAttackSpeedByLvl"][0] + " to " + ASPath["minAttackSpeedByLvl"][17] 
              + "], based on lvl. Currently: " + ASPath["minAttackSpeedByLvl"][champLevel]);
              singleBreak();
              colorMin('Max: ');
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
              underLine('Duration');
              colorMin('Min: ');
              addText(ASPath["minDuration"])
              if (ASPath['maxDuration']) {
                singleBreak();
                colorMin('Max: ');
                addText(ASPath["maxDuration"])
              }
            };
            if (ASPath["durationAutos"]) {
              addText(' for ' + ASPath["durationAutos"] + ' attacks.');
            }
            doubleBreak();
          };

          if (champFile[ability]["bonusOmniVamp"]) {
            var path = champFile[ability]["bonusOmniVamp"];
            prependIcon(vampIcon);
            addBold('Bonus Omni Vamp Ratio');
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
            var msPath = champFile[ability]["bonusMoveSpeed"];
            prependIcon(moveSpeedIcon);
            addBold('Bonus Movement Speed');
            if (msPath["minBonusMSRatio"]) {
              colorMin('Min Ratio: ');
              addText(msPath["minBonusMSRatio"]);
            };
            if (msPath["maxBonusMSRatio"]) {
              singleBreak();
              colorMin('Max Ratio: ');
              addText(msPath["maxBonusMSRatio"]);
            };
            if (msPath["duration"]) {
              singleBreak();
              underLine("Duration");
              addText(msPath["duration"])
            }
            doubleBreak();
          };

          if (champFile[ability]["cripple"]) {
            var path = champFile[ability]["cripple"];
            prependIcon(attackSpeedIcon);
            addBold('Attack Speed Cripple');
            if (path["attackSpeed"]) {
              removeSpace(path["attackSpeed"]);
            };
            if (path["minAttackSpeed"]) {
              colorMin('Min: ');
              removeSpace(path["minAttackSpeed"]);
              singleBreak();
              colorMin('Max: ');
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
            addBold('Pet Stats');
            if (path["auto"]) {
              prependIcon(attackIcon);
              underLine('Basic Attack');
              prependType(path["auto"]["type"]);
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
                colorMin('Min: ');
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
                colorMin('Max: ');
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
              prependIcon(attackSpeedIcon);
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
              colorMin('Min: ');
              addText(path["minAttackSpeed"] + ', ');
              colorMin('Max: ');
              addText(path["maxAttackSpeed"]);
            };
            if (path["attackSpeedRatio"]) {
              singleBreak();
              prependIcon(attackSpeedIcon);
              underLine('Attack Speed Ratio');
              addText(path["attackSpeedRatio"]);
            };
            if (path["bonusAttackSpeed"]) {
              addText(' (+' + removeParen(path["bonusAttackSpeed"]) + ')');
            };
            if (path["healthRatio"]) {
              singleBreak();
              prependIcon(healthIcon);
              underLine('Health Ratio');
              addText(path["healthRatio"]);
            };
            if (path["armorRatio"]) {
              singleBreak();
              prependIcon(armorIcon);
              underLine('Armor Ratio');
              addText(path["armorRatio"]);
            };
            if (path["magicResistRatio"]) {
              singleBreak();
              prependIcon(magicResIcon);
              underLine('Magic Resist Ratio');
              addText(path["magicResistRatio"]);
            };
            if (path['health'] || path['healthByLvl']) {
              singleBreak();
              prependIcon(healthIcon);
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
              prependIcon(armorIcon);
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
              prependIcon(magicResIcon);
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
              prependIcon(ccIcon);
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
                addBold('Pet Stats');
                if (path["auto"]) {
                  prependIcon(attackIcon);
                  underLine('Basic Attack');
                  prependType(path["auto"]["type"]);
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
                  prependIcon(attackSpeedIcon);
                  underLine('Attack Speed');
                  addText(path["attackSpeed"]);
                };
                if (path["healthByLvl"]) {
                  singleBreak();
                  prependIcon(healthIcon);
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
                  prependIcon(armorIcon);
                  underLine('Armor');
                  addText('[' + path["armorByLvl"][0] + " to " + path["armorByLvl"][17] + ", based on lvl. ");
                  underLine("Currently");
                  addText(path["armorByLvl"][champLevel] + ']')
                };
                if (path["magicResistByLvl"]) {
                  singleBreak();
                  prependIcon(magicResIcon);
                  underLine('Magic Resist');
                  addText('[' + path["magicResistByLvl"][0] + " to " + path["magicResistByLvl"][17] 
                  + ", based on lvl. ");
                  underLine("Currently");
                  addText(path["magicResistByLvl"][champLevel] + ']')
                }
              };
              if (ePath['Q']['damage']) {
                singleBreak();
                var damage = ePath['Q']["damage"]
                if (damage["type"]) {
                  prependType(damage["type"]);
                  addBold(damage["type"] + " Damage")
                };
                if (damage["dmg"]) {
                  removeSpace(damage["dmg"]);
                };
                if (damage["APRatio"]) {
                  addText(' (+' + removeParen(damage["APRatio"]));
                  colorAP(' AP');
                  addText('ratio)');
                };
                if (damage["system"] === 'minMax') {
                  colorMin('Min: ');
                  if (damage["minDmg"]) {
                    removeSpace(damage["minDmg"]);
                  }
                  if (damage["minAPRatio"]) {
                    addText(' (+' + removeParen(damage["minAPRatio"]));
                    colorAP(' AP');
                    addText('ratio)');
                  }
                  singleBreak();
                  colorMin('Max: ');
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
                  prependType(damage["type"]);
                  addBold('Bonus ' + damage["type"] + " Damage")
                };
                if (damage["system"] === 'minMax') {
                  colorMin('Min: ');
                  if (damage["minDmg"]) {
                    removeSpace(damage["minDmg"]);
                  };
                  if (damage["minAPRatio"]) {
                    addText(' (+' + removeParen(damage["minAPRatio"]));
                    colorAP(' AP');
                    addText('ratio)');
                  };
                  singleBreak();
                  colorMin('Max: ');
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
                  prependType(damage["type"]);
                  addBold(damage["type"] + " Damage")
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
                  colorMin('Min: ');
                  if (damage["minDmg"]) {
                    removeSpace(damage["minDmg"]);
                  }
                  if (damage["minAPRatio"]) {
                    addText(' (+' + removeParen(damage["minAPRatio"]));
                    colorAP(' AP');
                    addText('ratio)');
                  }
                  singleBreak();
                  colorMin('Max: ');
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
                prependIcon(healIcon);
                addBold('Heal')
                if (path['system'] === 'minMax') {
                  colorMin('Min: ');
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
                  colorMin('Max: ');
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
                  prependType(damage["type"]);
                  addBold(damage["type"] + " Damage")
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
                  colorPart('Part 1');
                  if (damage["part1"]["dmg"]) {
                    removeSpace(damage["part1"]["dmg"]);
                  };
                  if (damage["part1"]["APRatio"]) {
                    addText(' (+' + removeParen(damage["part1"]["APRatio"]));
                    colorAP(' AP');
                    addText('ratio)');
                  }
                  singleBreak();
                  colorPart('Part 2');
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
                prependIcon(shieldIcon);
                addBold('Bonus Shield');
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
                  underLine('Non-Target ratio');
                  addText(shield["nonTargetRatio"]);
                }
              }
              doubleBreak();
            }
          };

          if (champFile[ability]['statSteal']) {
            var path = champFile[ability]['statSteal'];
            addBold('Stat Steal');
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
              colorMin('Min: ');
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
            addBold("Duration");
            removeSpace(champFile[ability]["duration"]);
            doubleBreak();
          };

          if (champFile[ability]["minDuration"]) {
            addBold("Duration")
            colorMin('Min: ');
            removeSpace(champFile[ability]["minDuration"]);
            singleBreak(); 
            colorMin('Max: ');
            removeSpace(champFile[ability]["maxDuration"]);
            doubleBreak();
          };

          if (champFile[ability]["maxDuration"] && !champFile[ability]["minDuration"]) {
            addBold("Duration")
            colorMin('Max: ');
            removeSpace(champFile[ability]["maxDuration"]);
            doubleBreak();
          };

          if (champFile[ability]["coolDown"]) {
            prependIcon(cdrIcon);
            addPink("Cooldown");
            removeSpace(champFile[ability]["coolDown"]);
          };
          if (champFile[ability]["minCoolDown"]) {
            prependIcon(cdrIcon);
            addPink("Cooldown");
            colorMin('Min: ');
            addText(champFile[ability]["minCoolDown"] + ', ')
            colorMin('Max: ');
            addText(champFile[ability]["maxCoolDown"]);
          };
          if (champFile[ability]["maxCoolDown"] && !champFile[ability]["minCoolDown"]) {
            prependIcon(cdrIcon);
            addPink("Max Cooldown");
            addText(champFile[ability]["maxCoolDown"]);
          };
          if (champFile[ability]["coolDownByLvl"]) {
            prependIcon(cdrIcon);
            addPink("Cooldown");
            addText('[' + champFile[ability]["coolDownByLvl"][0] + " to " 
            + champFile[ability]["coolDownByLvl"][17] + "], based on lvl. ");
            underLine("Currently");
            addText(champFile[ability]["coolDownByLvl"][champLevel])
          };
          if (champFile[ability]["combatCoolDown"]) {
            prependIcon(cdrIcon);
            addPink("Combat Cooldown");
            removeSpace(champFile[ability]["combatCoolDown"])
          };
          if (champFile[ability]["staticCoolDown"]) {
            if (champFile[ability]["coolDown"]) {
              singleBreak();
            };
            prependIcon(cdrIcon);
            addPink("Static Cooldown");
            removeSpace(champFile[ability]["staticCoolDown"])
          };
          if (champFile[ability]["staticCoolDownByLvl"]) {
            prependIcon(cdrIcon);
            addPink("Static Cooldown");
            addText('[' + champFile[ability]["staticCoolDownByLvl"][0] + " to " 
            + champFile[ability]["staticCoolDownByLvl"][17] + "], based on lvl. ");
            underLine("Currently");
            addText(champFile[ability]["staticCoolDownByLvl"][champLevel])
          };
          if (champFile[ability]["autoCoolDown"]) {
            prependIcon(cdrIcon);
            prependIcon(attackIcon);
            addPink("Cooldown Number of Basic Attacks");
            addText(champFile[ability]["autoCoolDown"]);
          };
          if (champFile[ability]["coolDownRefund"]) {
            if (champFile[ability]["coolDownByLvl"] || champFile[ability]["coolDown"] 
            || champFile[ability]["staticCoolDownByLvl"] || champFile[ability]["staticCoolDown"]) {
              singleBreak();
            };
            underLine('Refund');
            addText(champFile[ability]["coolDownRefund"]);
          };
          if (champFile[ability]["allCDRefund"]) {
            if (champFile[ability]["coolDown"]) {
              singleBreak();
            };
            prependIcon(cdrIcon);
            underLine('All Abilities Cooldown Refund');
            addText(champFile[ability]["allCDRefund"]);
          };
          if (champFile[ability]["basicCDMaxRefundRatioPerStack"]) {
            singleBreak();
            prependIcon(cdrIcon);
            underLine('Basic Abilities Max Cooldown Refund Ratio');
            addText(champFile[ability]["basicCDMaxRefundRatioPerStack"]+ ' per stack');
          };
          if (champFile[ability]["coolDownRefundByLvl"]) {
            singleBreak();
            underLine('Refund');
            addText('[' + champFile[ability]["coolDownRefundByLvl"][0] + " to " 
            + champFile[ability]["coolDownRefundByLvl"][17] + "], based on lvl. ");
            underLine("Currently");
            addText(champFile[ability]["coolDownRefundByLvl"][champLevel])
          };
          if (champFile[ability]["minCoolDownRefund"]) {
            singleBreak();
            underLine('Refund');
            colorMin('Min: ');
            addText(champFile[ability]["minCoolDownRefund"] + ', ');
            colorMin('Max: ');
            addText(champFile[ability]["maxCoolDownRefund"]);
          };
          if (champFile[ability]["coolDownRefundRatio"]) {
            singleBreak();
            underLine('Refund Ratio')
            removeSpace(champFile[ability]["coolDownRefundRatio"]);
          };
          if (champFile[ability]["coolDownRefundRatioByLvl"]) {
            singleBreak();
            underLine('Refund Ratio')
            addText('[' + champFile[ability]["coolDownRefundRatioByLvl"][0]
              + " to " + champFile[ability]["coolDownRefundRatioByLvl"][17] + ", based on lvl. ");
            underLine("Currently");
            addText(champFile[ability]["coolDownRefundRatioByLvl"][champLevel] + ']')
          };
          if (champFile[ability]["maxCoolDownRefundRatio"]) {
            singleBreak();
            underLine('Refund Ratio');
            colorMin('Max: ');
            addText(champFile[ability]["maxCoolDownRefundRatio"]);
          };
          if (champFile[ability]["recharge"]) {
            if (champFile[ability]["coolDown"] || champFile[ability]["staticCoolDown"]) {
              singleBreak();
            };
            prependIcon(cdrIcon);
            addPink("Recharge");
            removeSpace(champFile[ability]["recharge"]);
          };
          if (champFile[ability]["staticCoolDownFormula"]) {
            singleBreak();
            underLine('Formula');
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
              prependIcon(vampIcon);
              addBold('Spell Vamp Ratio');
              if (path["spellVamp"]["vampByLvl"]) {
                addText('[' + path["spellVamp"]["vampByLvl"][0]
                + " to " + path["spellVamp"]["vampByLvl"][17] + ", based on lvl. ");
                underLine("Currently");
                addText(path["spellVamp"]["vampByLvl"][champLevel] + ']')
              }
            };
            if (path["damage"]) {
              prependType(path["damage"]["type"]);
              addBold(path["damage"]["type"] + ' Damage');
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
                colorMin('Min: ');
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
                colorMin('Max: ');
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
              doubleBreak();
              prependIcon(healIcon);
              addBold('Heal');
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
              prependIcon(ccIcon);
              addBold('Crowd Control Duration');
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
              prependType(path["damage"]["type"]);
              addBold(path["damage"]["type"] + ' Damage');
              if (path["damage"]["dmgRatioByLvl"]) {
                addText('(' + path["damage"]["dmgRatioByLvl"][0]+ " to " + path["damage"]["dmgRatioByLvl"][17]
                + " ratio of damage dealt over 3 seconds, based on lvl. ");
                underLine("Currently");
                addText(path["damage"]["dmgRatioByLvl"][champLevel] + ')')
              }
            };
            if (path["coolDown"]) {
              prependIcon(cdrIcon);
              addPink('Cooldown');
              addText(path["coolDown"]);
            }
          };

        };

        if (ability !== 'passive' && document.getElementById(`${ability}Rank${side}`).value > 0 ) {
          /* BEGIN RANK 1-5 SECTION */
          if (champFile[ability]["toggleStats"]) {
            createBracketDiv();

            var path = champFile[ability]["toggleStats"];
            addBold('Bonus Stats');
            if (path["health"]) {
              prependIcon(healthIcon);
              mapValuesToAAFunctions('hp', path["health"], true, "Health")
            };
            if (path["attackSpeed"]) {
              prependIcon(attackSpeedIcon);
              mapValuesToAAFunctions('as', path["attackSpeed"], true, 'Attack Speed');
            };
            if (path["attackDamage"]) {
              prependIcon(ADIcon);
              mapValuesToAAFunctions('ad', path["attackDamage"], true, 'Attack Damage');
            };
            if (path["omniVamp"]) {
              prependIcon(vampIcon);
              mapValuesToAAFunctions('omni', path["omniVamp"], true, "Omnivamp")
            }
            if (path["healingRatio"]) {
              prependIcon(healIcon);
              underLine('Increased Healing Ratio');
              addText(arrayCheck(path["healingRatio"]));
              singleBreak();
            };
            if (path["duration"]) {
              underLine('Duration')
              addText(arrayCheck(path["duration"]))
              if (path["durationExtend"]) {
                addText(" (extends by " + path["durationExtend"] + ' seconds)')
              }
            };
            abilityDiv = document.getElementsByClassName(`abilityBox${side}`)[i];
            singleBreak();
          };

          if (champFile[ability]["text"]) {
            addText(champFile[ability]["text"])
            doubleBreak();
          };

          if (champFile[ability]["autoEmpower"]) {
            var damage = champFile[ability]["autoEmpower"]["damage"];
            if (damage["system"] === "2Part" || damage["system"] === "3Part") {
              createBracketDiv()
            };
            prependIcon(attackIcon);
            if (!damage["durationAutos"] && !damage['autoCoolDown']) {
              addBold('Empowered Basic Attack')
            } else if (damage['autoCoolDown']) {
              addBold('Empower 1 in every ' +  damage["autoCoolDown"] + ' Basic Attacks')
            } else {
              addBold('Empower ' +  damage["durationAutos"] + ' Basic Attacks')
            };
            prependType(damage['type']);
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
              totalDmgCount += damage['enemyResistRatio'] * (enemyArmor + enemyMR);
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
                addText(' (' + factorRes(damage['type'], totalDmgCount + IEDmgCount) + 'with ')
                addIE();
                addText(' IE)');
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
              prependIcon(attackSpeedIcon);
              underLine('Bonus Attack Speed Penalty Ratio');
              addText(damage["attackSpeedPenalty"]);
            };
            if (damage["system"] === "min" ) {
              singleBreak();
              colorMin('Min Damage: ')
              if (damage["minDmg"]) {
                addText(arrayCheck(damage["minDmg"]));
              }
            };
            
            if (damage["system"] === "minMax" ) {
              colorMin('Min: ')
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
              colorMin('Max: ');

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
              prependIcon(critChanceIcon);
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
                colorMin('Min: ');
                addText(factorRes(damage['type'], damage["critDmg"] * minDmgCount) + ', ');
                colorMin('Max: ');
                addText(factorRes(damage['type'], damage["critDmg"] * maxDmgCount));
              };
              if (damage["critDmgWithIE"]) {
                if (totalDmgCount === 0 && minDmgCount === 0 && maxDmgCount === 0) {
                  addText(' (' + damage["critDmgWithIE"] + ' with ')
                };
                if (totalDmgCount !== 0) {
                  addText(' (' + factorRes(damage['type'], damage["critDmgWithIE"] * totalDmgCount) + ' with ');
                };
                if (minDmgCount !== 0) {
                  addText(' (');
                  colorMin('Min: ')
                  addText(factorRes(damage['type'], damage["critDmgWithIE"] * minDmgCount) + ', ')
                  colorMin('Max: ');
                  addText(factorRes(damage['type'], damage["critDmgWithIE"] * maxDmgCount) + ' with ');
                };
                addIE();
                addText(' IE)');
              }
            };
            if (damage["critADRatioWithIE"]) {
              singleBreak();
              prependIcon(critChanceIcon);
              addIE();
              underLine(' Crit Bonus Dmg with Infinity Edge');
              addText(factorRes(damage['type'], damage["critADRatioWithIE"]) * totalAD);
            };
            if (damage["duration"]) {
              singleBreak();
              underLine('Duration')
              addText(arrayCheck(damage["duration"]))
            };
            if (damage["minDuration"]) {
              singleBreak();
              underLine('Duration');
              colorMin('Min: ');
              addText(damage["minDuration"]);
              singleBreak();
              colorMin('Max: ');
              addText(damage["maxDuration"])
            };
            
            if (damage["system"] === "2Part" || damage["system"] === "3Part") {
              (function() {
                for (var i = 1; i < 4; i++) {
                  if (!damage[`part${i}`]) {
                    return;
                  };
                  singleBreak();
                  var part = damage[`part${i}`];  
                  colorPart('Part ' + i); 
                  var dmgCount = 0;

                  if (part["type"]) {
                    prependType(part['type']);
                    underLine(part['type'] + " Damage");
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
                    singleBreak();
                  }
                }
              })();
              abilityDiv = document.getElementsByClassName(`abilityBox${side}`)[i];
            };
            if (damage["system"] === 'infiniteStack') {
              addText(' (stacks infinitely)')
            };
            if (damage["staticCoolDownByLvl"]) {
              singleBreak();
              prependIcon(cdrIcon);
              addPink("Static Cooldown");
              addText(damage["staticCoolDownByLvl"][champLevel])
            };
            doubleBreak();
          };

          if (champFile[ability]["damage"]) {
            var damage = champFile[ability]["damage"];
            if (damage['system'] === '2Part' || damage['system'] === '3Part') {
              createBracketDiv()
            };
            var totalDmgCount = 0;
            var IEDmgCount = 0;
            var minDmgCount = 0;
            var maxDmgCount = 0;
            if (!damage["type"]) {
              addBold("Damage");
            }
            if (damage["type"]) {
              prependType(damage['type']);
              addBold(damage['type'] + " Damage")
            };                                  
            if (damage["dmg"]) {
              totalDmgCount += arrayCheck(damage["dmg"]);
            };
            if (damage["dmgByLvl"]) {
              totalDmgCount += damage["dmgByLvl"][champLevel];
            };
            if (damage["totalDmgRatio"]) {
              colorOrchid('Total Damage Ratio');
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
                addText(' (' + factorRes(damage['type'], totalDmgCount + IEDmgCount) + 'with ')
                addIE();
                addText(' IE)');
              };
              if (damage["executeDmgRatio"]) {
                singleBreak();
                prependIcon(healthIcon);
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
              addText(' (+' + damage["bonusMoveSpeedRatioByLvl"][champLevel] + " Bonus Move Speed")
              prependIcon(moveSpeedIcon);
              addText("ratio) ");
            };
            if (damage["asPerBonusAS"]) {
              singleBreak();
              prependIcon(attackSpeedIcon);
              underLine('Wolf Attack Speed');
              addText(damage["asPerBonusAS"] * bonusAS);
            };

            if (damage["system"] === "min" ) {
              singleBreak();
              colorMin('Min Damage: ');
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
              colorMin('Min: ');
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
                colorMin('Med: ');
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

              colorMin('Max: ');

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
              colorMin('Evolved Max: ');
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
              colorMin('Min: ');
              addText(factorRes(damage['type'], damage["4thShotDmgRatio"] * minDmgCount) 
              + ' (' + factorRes(damage['type'], damage["4thShotDmgRatioWithIE"] * minDmgCount) + ' with ')
              addIE();
              addText(' IE)');
              singleBreak();
              colorMin('Max: ');
              addText(factorRes(damage['type'], damage["4thShotDmgRatio"] * maxDmgCount) 
              + ' (' + factorRes(damage['type'], damage["4thShotDmgRatioWithIE"] * maxDmgCount) + ' with ');
              addIE();
              addText(' IE)');
            };

            if (damage["multiHitDmgRatio"]) {
              singleBreak();
              addText('Additional hits deal ' + arrayCheck(damage["multiHitDmgRatio"]) + ' damage ratio.');
            };

            if (damage["minMinDmg"]) {
              singleBreak();
              colorMin('Minimum Damage: ');
              addText(factorRes(damage['type'], damage["minMinDmg"]));
            };

            if (damage["canCrit"]) {
              addText(', can crit.');
            };
            
            if (damage["critDmg"]) {
              singleBreak();
              prependIcon(critChanceIcon);
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
                colorMin('Min: ');
                addText(factorRes(damage['type'], damage["critDmg"] * minDmgCount)
                + ', ')
                colorMin('Max: ');
                addText(factorRes(damage['type'], damage["critDmg"] * maxDmgCount));
              };
              if (damage["critDmgWithIE"]) {
                if (totalDmgCount === 0 && minDmgCount === 0 && maxDmgCount === 0) {
                  addText(' (' + damage["critDmgWithIE"] + ' with ');
                  addIE();
                  addText(' IE)');
                };
                if (totalDmgCount !== 0) {
                  addText(' (' + factorRes(damage['type'], damage["critDmgWithIE"] * totalDmgCount) + ' with ');
                  addIE();
                  addText(' IE)');
                };
                if (minDmgCount !== 0) {
                  addText(' (');
                  colorMin('Min: ');
                  addText(factorRes(damage['type'], damage["critDmgWithIE"] * minDmgCount) + ', ');
                  colorMin('Max: '); 
                  addText(factorRes(damage['type'], damage["critDmgWithIE"] * maxDmgCount) + ' with ');
                  addIE();
                  addText(' IE)');
                };
              }
            };
            if (damage["critADRatio"]) {
              singleBreak();
              prependIcon(critChanceIcon);
              underLine('Crit Bonus Damage');
              addText(factorRes(damage['type'], damage["critADRatio"] * totalAD));
              if (damage["critADRatioWithIE"]) {
                addText(' (' + factorRes(damage['type'], damage["critADRatioWithIE"] * totalAD) + ' with ');
                addIE();
                addText(' IE)');
              }
            };

            if (damage["minCritADRatio"]) {
              singleBreak();
              prependIcon(critChanceIcon);
              underLine('Crit Bonus Damage');
              colorMin('Min: ');
              addText(factorRes(damage['type'], damage["minCritADRatio"] * totalAD));
              if (damage["minCritADRatioWithIE"]) {
                addText(' (' + factorRes(damage['type'], damage["minCritADRatioWithIE"] * totalAD) + ' with ');
                addIE();
                addText(' IE)');
              };
              singleBreak();
              colorMin('Max: ');
              addText(factorRes(damage['type'], damage["maxCritADRatio"] * totalAD));
              if (damage["maxCritADRatioWithIE"]) {
                addText(' (' + factorRes(damage['type'], damage["maxCritADRatioWithIE"] * totalAD) + ' with ');
                addIE();
                addText(' IE)');
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
                colorMin('Min: ');
                addText(factorRes(damage['type'], minEmpDmgCounter));
                singleBreak();
                if (empPath["maxDmgByLvl"]) {
                  maxEmpDmgCounter += empPath["maxDmgByLvl"][champLevel];
                };
                if (empPath["maxAPRatio"]) {
                  maxEmpDmgCounter += arrayCheck(empPath["maxAPRatio"]) * totalAP;
                };
                colorMin('Max: ');
                addText(factorRes(damage['type'], maxEmpDmgCounter));
              }
            };

            if (damage["system"] === "2Part" || damage["system"] === "3Part") {
              (function() {
                for (var i = 1; i < 4; i++) {
                  if (!damage[`part${i}`]) {
                    return;
                  }
                  var part = damage[`part${i}`];  
                  colorPart('Part ' + i); 

                if (part["type"]) {
                  prependType(part["type"]);
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
                  colorMin('Min: ');
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
                  colorMin('Max: ');
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
              abilityDiv = document.getElementsByClassName(`abilityBox${side}`)[i];
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
              prependIcon(cdrIcon);
              underLine('Cooldown');
              addText(hasteRatio === 1 ? damage["coolDown"]
              : (damage["coolDown"]*hasteRatio).toFixed(1));
            };
            if (damage["staticCoolDown"]) {
              singleBreak();
              prependIcon(cdrIcon);
              underLine('Static Cooldown');
              addText(damage["staticCoolDown"]);
            };
            doubleBreak();
          };

          if (champFile[ability]["tickDamage"]) {
            var path = champFile[ability]["tickDamage"];
            if (path["type"]) {
              prependType(path['type']);
              addBold(path['type'] + " Damage Over Time");
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
            if (path["maxManaRatio"]) {
              tickDmgCount += arrayCheck(path["maxManaRatio"]) * totalMana
            };
            if (path["ADRatio"]) {
              tickDmgCount += arrayCheck(path["ADRatio"]) * totalAD;
            };
            if (path["bonusADRatio"]) {
              tickDmgCount += arrayCheck(path["bonusADRatio"]) * bonusAD;
            };
            if (path["bonusADRatioPerBonusAttackSpeedRatio"]) {
              tickDmgCount += arrayCheck(path["bonusADRatioPerBonusAttackSpeedRatio"]) 
              * bonusAD * ((statsPath["asPerLvl"] * champLvlRatio) + bonusASRatio);
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
              prependIcon(critChanceIcon);
              underLine('Crit Damage');
              addText(factorRes(path['type'], path["critDmg"] * tickDmgCount));
              if (path["critDmgWithIE"]) {
                addText(' (' + factorRes(path['type'], path["critDmgWithIE"] * tickDmgCount) + ' with ');
                addIE();
                addText(' IE)');
              };
              if (path["ticks"] && path["duration"]) {
                addText(' per tick, ' + ticks + ' times over ' + path["duration"] + ' seconds.');
              }
            };
        
            if (path["system"] === "minMax" ) {
              colorMin('Min: ');
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
              if (path["bonusDmgRatioPerCritChance"]) {
                if (path["bonusDmgRatioPerCritChanceWithIE"] && this[`ieCount${side}`]) {
                  minTickDmgCount *= (1 + path["bonusDmgRatioPerCritChanceWithIE"] * totalCritChance);
                } else {
                  minTickDmgCount *= (1 + path["bonusDmgRatioPerCritChance"] * totalCritChance);
                }
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
              colorMin('Max: ');
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
              if (path["bonusDmgRatioPerCritChance"]) {
                if (path["bonusDmgRatioPerCritChanceWithIE"] && this[`ieCount${side}`]) {
                  maxTickDmgCount *= (1 + path["bonusDmgRatioPerCritChanceWithIE"] * totalCritChance);
                } else {
                  maxTickDmgCount *= (1 + path["bonusDmgRatioPerCritChance"] * totalCritChance);
                }
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
              colorMin('Min: ');
              addText(arrayCheck(path["minDmg"]))
              if (path["interval"] && path["ticks"]) {
                addText(' per ' + path["interval"] + ' sec, for ' + multiplyTicks2(path["interval"]) + ' seconds.');
              }
            };
            if (path["ticks"]) {
              singleBreak();
              colorOrchid('Total');
        
              if (tickDmgCount !== 0) {
                addText(factorRes(path['type'], tickDmgCount * ticks));
                if (path['critDmg']) {
                  singleBreak();
                  prependIcon(critChanceIcon);
                  colorOrchid('Crit Total');
                  if (path['critDmgWithIE']) {
                    addText(factorRes(path['type'], tickDmgCount * ticks * path['critDmg']) + ' (' 
                    + factorRes(path['type'], tickDmgCount * ticks * path['critDmgWithIE']) + ' with ');
                    addIE();
                    addText(' IE)');
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
                colorMin('Min: ');
                addText(factorRes(path['type'], multiplyTicks(arrayCheck(path["minDmg"]))));
              };

              if (path["system"] === "minMax" ) {
                colorMin('Min: ');
                if (minTickDmgCount !== 0) {
                  addText(factorRes(path['type'], minTickDmgCount * ticks));
                };
                singleBreak();
                colorMin('Max: ');
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
              colorPart('Part 1');
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
              colorOrchid('Total');
              addText(factorRes(path['type'], part1DmgCount * path["part1"]["ticks"]));
              
              doubleBreak();
              colorPart('Part 2');
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
              colorOrchid('Total');
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
            colorPart('Special Delivery')
            prependType(path['type']);
            addBold(path['type'] + ' Damage');

            var deliveryCount = 0;
            deliveryCount += path["dmgByLvl"][champLevel];
            deliveryCount += path["bonusADRatio"] * bonusAD;
            deliveryCount += path["APRatio"] * totalAP;

            addText(factorRes(path['type'], deliveryCount) + ' per ' + path["interval"] + ' sec, for ' + 
            multiplyTicks2(path["interval"])   + ' seconds.');
            singleBreak();
            colorOrchid('Total Damage');
            addText(factorRes(path['type'], multiplyTicks(deliveryCount)));
            doubleBreak();
          };

          if (champFile[ability]["passivePermanent"]) {
            var path = champFile[ability]["passivePermanent"];
            addBold('Passive');
            if (path["bonusResist"]) {
              prependIcon(armorIcon);
              prependIcon(magicResIcon);
              underLine('Bonus Armor and Magic Resist');
              addText(arrayCheck(path["bonusResist"]));
            };
            if (path["bonusHealth"]) {
              prependIcon(healthIcon);
              underLine('Bonus Health');
              if (path["bonusHealth"]["healthPerStack"]) {
                addText('(' + arrayCheck(path["bonusHealth"]["healthPerStack"]) + ' per stack)');
              };
              if (path["bonusHealth"]["healthPerTakedown"]) {
                addText(' (+' + arrayCheck(path["bonusHealth"]["healthPerTakedown"]) + ' per takedown)');
              };
            };
            if (path["bonusArmor"]) {
              prependIcon(armorIcon);
              underLine('Bonus Armor');
              if (path["bonusArmor"]["minArmorRatio"]) {
                colorMin('Min: ');
                addText(Math.round(arrayCheck(path["bonusArmor"]["minArmorRatio"]) * totalArmor) + ', ');
                colorMin('Max: '); 
                addText(Math.round(arrayCheck(path["bonusArmor"]["maxArmorRatio"]) * totalArmor));
              }
            };
            if (path["armorPenRatio"]) {
              prependIcon(arPenIcon);
              underLine('Armor Pen Ratio');
              addText(arrayCheck(path["armorPenRatio"]));
            };
            if (path["omniVamp"]) {
              prependIcon(vampIcon);
              underLine('Omni Vamp Ratio');
              addText(arrayCheck(path["omniVamp"]))
            };
            if (path["minOmniVamp"]) {
              prependIcon(vampIcon);
              underLine('Omni Vamp Ratio')
              colorMin('Min: ');
              addText(arrayCheck(path["minOmniVamp"]));
              singleBreak();
              colorMin('Max: ');
              addText(arrayCheck(path["maxOmniVamp"]));
            };
          doubleBreak();
          };

          if (champFile[ability]["selfHeal"]) {
            var path = champFile[ability]["selfHeal"];
            prependIcon(healIcon);
            addBold('Self Heal');
            var healCounter = 0;
            if (path["healByLvl"]) {
              healCounter += path["healByLvl"][champLevel]; 
            };
            if (path["maxHPRatio"]) {
              healCounter += path["maxHPRatio"] * totalHP;
            };
            if (healCounter !== 0) {
              addText(Math.round(healCounter));
            }
          };

          if (champFile[ability]["allyHeal"]) {
            var path = champFile[ability]["allyHeal"];
            prependIcon(healIcon);
            addBold('Ally Heal');
            var healCounter = 0;
            if (path["healByLvl"]) {
              healCounter += path["healByLvl"][champLevel];
            };
            if (path["maxHPRatio"]) {
              healCounter += path["maxHPRatio"] * totalHP;
            };
            if (healCounter !== 0) {
              addText(Math.round(healCounter));
            }
          };
          
          if (champFile[ability]["heal"]) {
            var path = champFile[ability]["heal"];
            prependIcon(healIcon);
            addBold('Heal');
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
              colorMin('Min: ');
              addText(path["minDmgRatio"] + ', ');
              colorMin('Max: ');
              addText(path["maxDmgRatio"]);
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
              colorMin('Max: ');
              if (path["maxHealByLvl"]) {
                addText(path["maxHealByLvl"][champLevel]);
              }
            };
            if (path["preMitigation"]) {
              if (path["preMitigation"] === 'true') {
                addText(', pre-mitigation.')
              } else {
                addText(', post-mitigation.')
              }
            };
            if (path["system"] === '2Part') {
              colorPart('Part 1');
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
              colorPart('Part 2');
              if (path["part2"]["part1RatioFormula"]) {
                addText(Math.round(p1HealCount * ((1 + ((0.00075 * (totalAP) - 0.15))**2))));
              }
            };
            if (path["system"] === "minMax" ) {
              colorMin('Min: ');
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
              colorMin('Max: ');

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
              colorOrchid('Total');
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
                colorMin('Min: ');
                addText(Math.round(totalMinHeal * path["ticks"]) + ', ');
                colorMin('Max: ');
                addText(Math.round(totalMaxHeal * path["ticks"]));
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
              prependIcon(healIcon);
              addBold('Empowered Heal');
              if (empPath["system"] === 'minMax') {
                colorMin('Min: ');
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
                colorMin('Max: ');
                if (empPath["maxHeal"]) {
                  empMaxHeal += arrayCheck(empPath["maxHeal"]);
                };
                addText(Math.round(empMaxHeal));
              }
            };
            if (path["empowerBonus"]) {
              var empPath = path["empowerBonus"];
              singleBreak();
              prependIcon(healIcon);
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
            prependIcon(shieldIcon);
            if (path["type"] !== 'all') {
              addBold(path["type"] + ' Shield')
            } else {
              addBold(' Shield')
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
              colorMin('Max: ')
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
              colorMin('Min: ');
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
              colorMin('Max: ');
              
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
            if (path["combatCoolDown"] || path["combatCoolDownByLvl"]) {
              singleBreak();
              prependIcon(cdrIcon);
              underLine('Combat Cooldown');
            }
            if (path["combatCoolDown"]) {
              addText(path["combatCoolDown"]);
            };
            if (path["combatCoolDownByLvl"]) {
              addText(path["combatCoolDownByLvl"][champLevel]);
            };
            doubleBreak();
          };

          if (champFile[ability]["revive"]) {
            var path = champFile[ability]["revive"];
            addBold('Revive');
            var hpCounter = 0;
            if (path["health"]) {
              prependIcon(healthIcon);
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
              prependType(path["type"]);
              addBold('Reduced ' + path["type"] + ' Damage Taken')
            } else {
              addBold('Reduced Damage Taken')
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
              prependIcon(attackIcon);
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
              colorMin('Min: ');
              addText(path["minDuration"]);
              singleBreak();
              colorMin('Max: ');
              addText(path["maxDuration"]);
            };
            if (path["calculateFrom"]) {
              singleBreak();
              addText('Applies ' + path["calculateFrom"] + '.');
            };
            doubleBreak();
          };

          if (champFile[ability]["magicDamageRedux"]) {
            var path = champFile[ability]["magicDamageRedux"];
            prependIcon(APIcon);
            addBold('Reduced Magic Damage Taken');
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
            prependIcon(ADIcon);
            addBold('Reduced Physical Damage Taken');
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
            addBold('Passive Damage Increase Ratio');
            addText(arrayCheck(champFile[ability]["passiveDmgIncrease"]));
            doubleBreak();
          };

          if(champFile[ability]["dmgImmune"]) {
            addBold('Damage Immune Duration');
            addText(arrayCheck(champFile[ability]["dmgImmune"]));
            doubleBreak();
          };

          if(champFile[ability]["ccImmune"]) {
            prependIcon(ccIcon);
            addBold('Crowd Control Immune Duration');
            addText(arrayCheck(champFile[ability]["ccImmune"]));
            doubleBreak();
          };

          if (champFile[ability]["minDmgImmune"]) {
            prependIcon(ccIcon);
            addBold('Crowd Control Immune Duration');
            colorMin('Min: ');
            addText(arrayCheck(champFile[ability]["minDmgImmune"]));
            singleBreak();
            colorMin('Max: ');
            addText(arrayCheck(champFile[ability]["maxDmgImmune"]));
            doubleBreak();
          };

          if (champFile[ability]["silence"]) {
            addBold('Silence Duration');
            addText(arrayCheck(champFile[ability]["silence"]));
            doubleBreak();
          };

          if (champFile[ability]["blind"]) {
            addBold('Blind Duration');
            addText(arrayCheck(champFile[ability]["blind"]));
            doubleBreak();
          };

          if(champFile[ability]["interruptCC"] || champFile[ability]["interruptCCByLvl"] 
          || champFile[ability]["minInterruptCC"]) {
            prependIcon(ccIcon);
            addBold('Crowd Control Duration');
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
            colorMin('Min: ');
            addText(arrayCheck(champFile[ability]["minInterruptCC"]));
            singleBreak();
            colorMin('Max: ');
            addText(arrayCheck(champFile[ability]["maxInterruptCC"]));
            doubleBreak();
          };
          
          if (champFile[ability]["damageAmp"]) {
            var ampPath = champFile[ability]["damageAmp"];
            addBold('Damage Amp Ratio');
            addText(arrayCheck(ampPath["amp"]));
            singleBreak();
            underLine('Duration');
            addText(ampPath["duration"]);
            doubleBreak();
          };

          if (champFile[ability]["ADRedux"]) {
            var path = champFile[ability]["ADRedux"];
            prependIcon(ADIcon);
            addBold('Attack Damage Reduction');
            if (path["redux"]) {
              addText(arrayCheck(path["redux"]));
            };
            doubleBreak();
          };

          if (champFile[ability]["resistRedux"]) {
            var path = champFile[ability]["resistRedux"];
            if (path["type"] === 'both') {
              prependIcon(armorIcon);
              prependIcon(magicResIcon);
              addBold('Armor and Magic Resist Reduction');
            };
            if (path["type"] === 'magicResist') {
              prependIcon(magicResIcon);
              addBold('Magic Resist Reduction');
            };
            if (path["type"] === 'armor') {
              prependIcon(armorIcon);
              addBold('Armor Reduction');
            };
            if (path["resist"]) {
              addText(arrayCheck(path["resist"]));
            };
            if (path["reduxRatio"]) {
              underLine('Ratio');
              addText(arrayCheck(path["reduxRatio"]));
            };
            if (path["system"] === 'minMax') {
              colorMin('Min: ');
              if (path["minResistRedux"]) {
                addText(arrayCheck(path["minResistRedux"]));
              };
              singleBreak();
              colorMin('Max: ');
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
              underLine('Duration');
              colorMin('Max: ');
              addText(arrayCheck(path["maxDuration"]));
            };
            doubleBreak();
          };

          if (champFile[ability]["bonusStats"]) {
            var path = champFile[ability]["bonusStats"];
            addBold('Bonus Stats');
            if (path["attackDamageByLvl"]) {
              prependIcon(ADIcon);
              underLine('Attack Damage');
              addText(path["attackDamageByLvl"][champLevel]);
              applyAbility('ad', 'byLvl', path["attackDamageByLvl"]);
              singleBreak();
            };
            if (path["attackSpeed"]) {
              prependIcon(attackSpeedIcon);
              underLine('Attacks per Second');
              addText((arrayCheck(path["attackSpeed"]) * statsPath["asRatio"]).toFixed(3))
              singleBreak();
            };
            if (path["ADRatio"]) {
              prependIcon(ADIcon);
              underLine('Attack Damage Ratio');
              addText(arrayCheck(path["ADRatio"]));
              applyAbility('ad', 'ratio', path["ADRatio"]);
              singleBreak();
            };
            if (path["lifeSteal"]) {
              prependIcon(lifestealIcon);
              underLine('Life Steal Ratio');
              addText(arrayCheck(path["lifeSteal"]));
              applyAbility('lifeSteal', 'flat', path["lifeSteal"]);
              singleBreak();
            };
            if (path["lifeStealMultiplier"]) {
              prependIcon(lifestealIcon);
              underLine('Life Steal Multiplier');
              addText(arrayCheck(path["lifeStealMultiplier"]));
              applyAbility('lifeSteal', 'ratio', path["lifeStealMultiplier"]);
              singleBreak();
              /*this will need revisiting for Belveth E*/
            };
            if (path["healingRatio"]) {
              prependIcon(healIcon);
              underLine('Increased Healing Ratio');
              addText(arrayCheck(path["healingRatio"]));
              singleBreak();
            };
            if (path["healingPerMissingHPRatio"]) {
              prependIcon(healIcon);
              underLine('Increased Healing');
              addText('(' + arrayCheck(path["healingPerMissingHPRatio"]) + ' per');
              colorHP(' Missing HP');
              addText('ratio)');
              singleBreak();
            };
            if (path["resist"]) {
              prependIcon(armorIcon);
              prependIcon(magicResIcon);
              underLine('Armor and Magic Resist');
              addText(arrayCheck(path["resist"]));
              applyAbility('arm', 'flat', path["resist"]);
              applyAbility('mr', 'flat', path["resist"]);
              singleBreak();
            };
            if (path["abilityPower"]) {
              prependIcon(APIcon);
              underLine('Ability Power');
              addText(arrayCheck(path["abilityPower"]));
              applyAbility('ap', 'flat', path["abilityPower"]);
              singleBreak();
            };
            if (path["healthRegen"]) {
              prependIcon(healthRegenIcon);
              underLine('Health Regen');
              addText(arrayCheck(path["healthRegen"]));
              applyAbility('hpRegen', 'flat', path["healthRegen"]);
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
            prependIcon(healthIcon);
            addBold('Bonus Health')
            var healthCounter = 0;
            if (path["health"]) {
              healthCounter += arrayCheck(path["health"]);
            };
            if (path["APRatio"]) {
              healthCounter += arrayCheck(path["APRatio"]) * totalAP;
            };
            if (path["bonusADRatio"]) {
              healthCounter += arrayCheck(path["bonusADRatio"]) * bonusAD;
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
            prependIcon(healthRegenIcon);
            addBold('Max HP Ratio Regenerated');
            addText(arrayCheck(champFile[ability]["maxHPRegen"]));
            doubleBreak();
          };

          if (champFile[ability]["healthRegen"]) {
            var path = champFile[ability]["healthRegen"];
            singleBreak();
            prependIcon(healthRegenIcon);
            addBold('Health Regen');
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
              colorMin('Max: ');
              addText(arrayCheck(path["maxHPRatio"]));
              colorHP(' Max HP');
              addText('ratio');
            };
            doubleBreak();
          };

          if (champFile[ability]["bonusAttackDamage"]) {
            var path = champFile[ability]["bonusAttackDamage"];
            prependIcon(ADIcon);
            addBold('Bonus Attack Damage');
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
              colorMin('Min: ');
              addText(arrayCheck(path['minAttackDamage']));
            };
            if (path['maxAttackDamage']) {
              singleBreak();
              colorMin('Max: ');
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
            prependIcon(forceIcon);
            addBold('Self Bonus Adaptive Force');
            if (path["adaptiveForce"]) {
              addText(arrayCheck(path["adaptiveForce"]));
            };
            if (path["allyBonusADRatio"]) {
              addText(' (+' + arrayCheck(path["allyBonusADRatio"]));
              colorAD(' Ally Bonus AD');
              addText('ratio');
            };
            if (path["allyAPRatio"]) {
              addText(' OR +' + arrayCheck(path["allyAPRatio"]));
              colorAP(' Ally AP');
              addText('ratio)');
            };
            doubleBreak();
          };

          if (champFile[ability]["allyBonusAdaptiveForce"]) {
            var path = champFile[ability]["allyBonusAdaptiveForce"];
            prependIcon(forceIcon);
            addBold('Ally Bonus Adaptive Force');
            if (path["adaptiveAD"]) {
              adColor('AD: ');
              addText(arrayCheck(path["adaptiveAD"]));
            };
            if (path["allyAdaptiveBonusADRatio"]) {
              addText(' (+' + arrayCheck(path["allyAdaptiveBonusADRatio"]));
              colorAD(' Ally Bonus AD');
              addText('ratio)');
            };
            if (path["adaptiveAP"]) {
              singleBreak();
              apColor('AP: ');
              addText(arrayCheck(path["adaptiveAP"]));
            };
            if (path["allyAdaptiveAPRatio"]) {
              addText(' (+' + arrayCheck(path["allyAdaptiveAPRatio"]));
              colorAP(' Ally AP');
              addText('ratio)');
            };
            doubleBreak();
          };

          if (champFile[ability]["bonusResist"]) {
            var path = champFile[ability]["bonusResist"];
            if (!path['bonusResistRatio']) {
              prependIcon(armorIcon);
              prependIcon(magicResIcon);
              addBold('Bonus Armor & Magic Resist');
            } else {
              prependIcon(armorIcon);
              addBold('Bonus Armor');
            };
            var resCount = 0;
            if (path["resist"]) {
              resCount += arrayCheck(path["resist"]);
            };
            if (path["bonusResistByLvl"]) {
              resCount += path["bonusResistByLvl"][champLevel];
            };
            if (path["minResistByLvl"]) {
              colorMin('Min: ');
              addText(path["minResistByLvl"][champLevel]);
              singleBreak();
              colorMin('Max: ');
              addText(path["maxResistByLvl"][champLevel]);
            };
            if (path["bonusResistRatio"]) {
              addText(Math.round(resCount + path["bonusResistRatio"] * bonusArmor));
              singleBreak();
              prependIcon(magicResIcon);
              addBold('Bonus Magic Resist');
              addText(Math.round(resCount + path["bonusResistRatio"] * bonusMR));
            };
            if (resCount !== 0 && !path["bonusResistRatio"]) {
              addText(Math.round(resCount));
            };
            if (path["minResist"]) {
              colorMin('Min: ');
              addText(arrayCheck(path["minResist"]));
              singleBreak();
              colorMin('Max: ');
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
            prependIcon(arPenIcon);
            prependIcon(critChanceIcon);
            addBold('Bonus-Armor Pen Ratio on Crits');
            addText(arrayCheck(penPath["penRatio"]));
            singleBreak();
            underLine('Duration');
            addText(arrayCheck(penPath["duration"]));
            doubleBreak();
          };

          if (champFile[ability]["bonusArmor"]) {
            var path = champFile[ability]["bonusArmor"];
            prependIcon(armorIcon);
            addBold('Bonus Armor');
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
              colorMin('Min: ');
              if (path["minArmor"]) {
                addText(arrayCheck(path["minArmor"]));
              };
              singleBreak();
              colorMin('Max: ');
              if (path["maxArmor"]) {
                addText(arrayCheck(path["maxArmor"]));
              };
            };
            doubleBreak();
          };

          if (champFile[ability]["allyBonusArmor"]) {
            var path = champFile[ability]["allyBonusArmor"];
            prependIcon(armorIcon);
            addBold('Ally Bonus Armor');
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
            prependIcon(magicResIcon);
            addBold('Bonus Magic Resist');
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
            prependIcon(magicResIcon);
            addBold('Ally Bonus Magic Resist');
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
            prependIcon(attackSpeedIcon);
            addBold('Bonus Attacks per Second');
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
              addText((totalAS * totalASRatioCounter * statsPath["asRatio"]).toFixed(3));
            };
            if (ASPath["attackSpeedPerStack"]) {
              addText(' (+' + (ASPath["attackSpeedPerStack"] * statsPath["asRatio"]).toFixed(3) + ' per stack)');
            };
            var minCounter = 0;
            var maxCounter = 0;
            if (ASPath['minAttackSpeed']) {
              colorMin('Min: ')
              minCounter += arrayCheck(ASPath['minAttackSpeed']);
              if (ASPath["minBonusAttackSpeedRatio"]) {
                minCounter += (arrayCheck(ASPath["minBonusAttackSpeedRatio"]) * bonusAS).toFixed(3);
              };
              if (ASPath["minAttackSpeedPer100AP"]) {
                minCounter += arrayCheck(ASPath["minAttackSpeedPer100AP"]) * totalAP/100;
              };
              addText((minCounter * statsPath["asRatio"]).toFixed(3));
              singleBreak();
              colorMin('Max: ');
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
              colorMin('Min: ');
              addText((ASPath["minAttackSpeedByLvl"][champLevel] * statsPath["asRatio"]).toFixed(3));
              singleBreak();
              colorMin('Max: ')
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
              underLine('Duration');
              colorMin('Min: ');
              addText(arrayCheck(ASPath["minDuration"]));
              if (ASPath['maxDuration']) {
                singleBreak();
                colorMin('Max: ');
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
            prependIcon(vampIcon);
            addBold('Bonus Omni Vamp Ratio');
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
            prependIcon(moveSpeedIcon);
            addBold('Bonus Movement Speed');
            if (msPath["minBonusMSRatio"]) {
              colorMin('Min Ratio: ');
              addText(arrayCheck(msPath["minBonusMSRatio"]));
            };
            if (msPath["maxBonusMSRatio"]) {
              singleBreak();
              colorMin('Max Ratio: ');
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
            prependIcon(attackSpeedIcon);
            addBold('Attack Speed Cripple');
            if (path["attackSpeed"]) {
              addText(arrayCheck(path["attackSpeed"]));
            };
            if (path["minAttackSpeed"]) {
              colorMin('Min: ');
              addText(arrayCheck(path["minAttackSpeed"]));
              singleBreak();
              colorMin('Max: ');
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
            addBold('Pet Stats');
            if (path["auto"]) {
              prependIcon(attackIcon);
              underLine('Basic Attack');
              prependType(path["auto"]["type"]);
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
                addText(' (+' + arrayCheck(path["auto"]["enemyMaxHPRatio"]));
                colorHP(' Enemy Max HP');
                addText('ratio)');
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
                colorMin('Min: ');
                addText(factorRes(path["auto"]["type"], minCounter));
                singleBreak();
                if (path["auto"]["maxDmgByLvl"]) {
                  maxCounter += path["auto"]["maxDmgByLvl"][champLevel]
                };
                if (path["auto"]["maxAPRatio"]) {
                  maxCounter += arrayCheck(path["auto"]["maxAPRatio"]) * totalAP;
                };
                colorMin('Max: ');
                addText(factorRes(path["auto"]["type"], maxCounter));
              }; 
              if (path["auto"]["multiHitDmgRatio"]) {
                singleBreak();
                underLine('Multi-Hit Damage Ratio');
                addText(arrayCheck(path["auto"]["multiHitDmgRatio"]));
              }
            };
            if (path["attackSpeed"] || path["attackSpeedByLvl"] || path["minAttackSpeed"]) {
              singleBreak();
              prependIcon(attackSpeedIcon);
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
              colorMin('Min: ');
              addText(arrayCheck(path["minAttackSpeed"]) + ', ')
              colorMin('Max: ');
              addText(arrayCheck(path["maxAttackSpeed"]));
            };
            var hpCounter = 0;
            if (path["health"] || path["healthByLvl"] || path["maxHPRatio"] || path["healthRatio"]) {
              singleBreak();
              prependIcon(healthIcon);
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
              prependIcon(armorIcon);
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
              prependIcon(magicResIcon);
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
              prependIcon(ccIcon);
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
                addBold('Pet Stats');
                if (path["auto"]) {
                  prependIcon(attackIcon);
                  underLine('Basic Attack');
                  prependType(path["auto"]["type"]);
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
                  prependIcon(attackSpeedIcon);
                  underLine('Attack Speed');
                  addText(arrayCheck(path["attackSpeed"]));
                };
                if (path["healthByLvl"]) {
                  singleBreak();
                  prependIcon(healthIcon);
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
                  prependIcon(armorIcon);
                  underLine('Armor');
                  addText(path["armorByLvl"][champLevel]);
                };
                if (path["magicResistByLvl"]) {
                  singleBreak();
                  prependIcon(magicResIcon);
                  underLine('Magic Resist');
                  addText(path["magicResistByLvl"][champLevel])
                };
              };
              if (ePath['Q']['damage']) {
                singleBreak();
                var damage = ePath['Q']["damage"];
                if (damage["type"]) {
                  prependType(damage["type"]);
                  addBold(damage["type"] + " Damage")
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
                  colorMin('Min: ');
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
                  colorMin('Max: ');
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
                  prependType(damage["type"]);
                  addBold('Bonus ' + damage["type"] + " Damage");
                };
                if (damage["system"] === 'minMax') {
                  colorMin('Min: ');
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
                  colorMin('Max: ');
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
                  prependType(damage["type"]);
                  addBold(damage["type"] + " Damage");
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
                  colorMin('Min: ');
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
                  colorMin('Max: ');
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
                prependIcon(healIcon);
                addBold('Heal');
                if (path['system'] === 'minMax') {
                  colorMin('Min: ');
                  var minMissCounter = 0;
                  var maxMissCounter = 0;
                  if (path["minMissingHPRatio"]) {
                    minMissCounter += arrayCheck(path["minMissingHPRatio"]);
                  };
                  if (path["minMissingHPRatioPer100AP"]) {
                    minMissCounter += arrayCheck(path["minMissingHPRatioPer100AP"]) * totalAP/100;
                  };
                  addText(lengthCheck(minMissCounter));
                  colorHP(' Missing HP');
                  addText('ratio)');
                  singleBreak();
                  colorMin('Max: ');
                  if (path["maxMissingHPRatio"]) {
                    maxMissCounter += arrayCheck(path["maxMissingHPRatio"]);
                  };
                  if (path["maxMissingHPRatioPer100AP"]) {
                    maxMissCounter += arrayCheck(path["maxMissingHPRatioPer100AP"]) * totalAP/100;
                  };
                  addText(lengthCheck(maxMissCounter));
                  colorHP(' Missing HP');
                  addText('ratio)');
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
                  prependType(damage["type"]);
                  addBold(damage["type"] + " Damage")
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
                  colorPart('Part 1');
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
                  colorPart('Part 2');
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
                prependIcon(shieldIcon);
                addBold('Bonus Shield');
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
                  underLine('Non-Target Bonus Shield');
                  addText(Math.round(shield["nonTargetRatio"] * shieldCounter));
                }
              };
              doubleBreak();
            }
          };

          if (champFile[ability]['statSteal']) {
            var path = champFile[ability]['statSteal'];
            addBold('Stat Steal');
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
              colorMin('Min: ');
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
            addBold("Duration");
            addText(arrayCheck(champFile[ability]["duration"]));
            doubleBreak();
          };

          if (champFile[ability]["minDuration"]) {
            addBold("Duration");
            colorMin('Min: ');
            addText(arrayCheck(champFile[ability]["minDuration"]));
            singleBreak();
            colorMin('Max: '); 
            addText(arrayCheck(champFile[ability]["maxDuration"]));
            doubleBreak();
          };

          if (champFile[ability]["maxDuration"] && !champFile[ability]["minDuration"]) {
            addBold("Duration");
            colorMin('Max: ');
            addText(arrayCheck(champFile[ability]["maxDuration"]));
            doubleBreak();
          };

          if (champFile[ability]["coolDown"] || champFile[ability]["minCoolDown"] 
          || champFile[ability]["maxCoolDown"] || champFile[ability]["coolDownByLvl"]) {
            prependIcon(cdrIcon);
            addPink("Cooldown");
          };
          if (champFile[ability]["coolDown"]) {
            addText(hasteRatio === 1 ? arrayCheck(champFile[ability]["coolDown"])
              : (arrayCheck(champFile[ability]["coolDown"])*hasteRatio).toFixed(1));
          };
          if (champFile[ability]["coolDownByLvl"]) {
            addText(hasteRatio === 1 ? champFile[ability]["coolDownByLvl"][champLevel] 
            : (champFile[ability]["coolDownByLvl"][champLevel]*hasteRatio).toFixed(1))
          };
          if (champFile[ability]["combatCoolDown"]) {
            prependIcon(cdrIcon);
            addPink("Combat Cooldown");
            addText(arrayCheck(champFile[ability]["combatCoolDown"]));
          };
          if (champFile[ability]["staticCoolDown"]) {
            if (champFile[ability]["coolDown"]) {
              singleBreak();
            };
            prependIcon(cdrIcon);
            addPink("Static Cooldown");
            addText(arrayCheck(champFile[ability]["staticCoolDown"]));
          };
          if (champFile[ability]["staticCoolDownByLvl"]) {
            prependIcon(cdrIcon);
            addBold("Static Cooldown");
            addText(champFile[ability]["staticCoolDownByLvl"][champLevel]);
          };
          if (champFile[ability]["autoCoolDown"]) {
            prependIcon(cdrIcon);
            prependIcon(attackIcon);
            addPink("Cooldown Number of Basic Attacks");
            addText(champFile[ability]["autoCoolDown"]);
          };
          if (champFile[ability]["coolDownRefund"]) {
            if (champFile[ability]["coolDownByLvl"] || champFile[ability]["coolDown"] 
            || champFile[ability]["staticCoolDownByLvl"] || champFile[ability]["staticCoolDown"]) {
              singleBreak();
            };
            underLine('Refund');
            addText(arrayCheck(champFile[ability]["coolDownRefund"]));
          };
          if (champFile[ability]["allCDRefund"]) {
            if (champFile[ability]["coolDown"]) {
              singleBreak();
            };
            prependIcon(cdrIcon);
            underLine('All Abilities Cooldown Refund');
            addText(arrayCheck(champFile[ability]["allCDRefund"]));
          };
          if (champFile[ability]["basicCDMaxRefundRatioPerStack"]) {
            singleBreak();
            prependIcon(cdrIcon);
            underLine('Basic Abilities Max Cooldown Refund Ratio');
            addText(champFile[ability]["basicCDMaxRefundRatioPerStack"] + ' per stack');
          };
          if (champFile[ability]["coolDownRefundByLvl"]) {
            singleBreak();
            underLine('Refund');
            addText(champFile[ability]["coolDownRefundByLvl"][champLevel]);
          };
          if (champFile[ability]["minCoolDownRefund"]) {
            singleBreak();
            underLine('Refund');
            colorMin('Min: ');
            addText(champFile[ability]["minCoolDownRefund"]);
            singleBreak();
            colorMin('Max: ');
            addText(champFile[ability]["maxCoolDownRefund"]);
          };
          if (champFile[ability]["coolDownRefundRatio"]) {
            singleBreak();
            underLine('Refund Ratio');
            addText(arrayCheck(champFile[ability]["coolDownRefundRatio"]));
          };
          if (champFile[ability]["coolDownRefundRatioByLvl"]) {
            singleBreak();
            underLine('Refund Ratio');
            addText(champFile[ability]["coolDownRefundRatioByLvl"][champLevel])
          };
          if (champFile[ability]["maxCoolDownRefundRatio"]) {
            singleBreak();
            underLine('Refund Ratio');
            colorMin('Max: ');
            addText(champFile[ability]["maxCoolDownRefundRatio"]);
          };
          if (champFile[ability]["recharge"]) {
            if (champFile[ability]["coolDown"] || champFile[ability]["staticCoolDown"]) {
              singleBreak();
            };
            prependIcon(cdrIcon);
            addPink("Recharge");
            addText(hasteRatio === 1 ? arrayCheck(champFile[ability]["recharge"]) 
            : (arrayCheck(champFile[ability]["recharge"])*hasteRatio).toFixed(1));
          };
          if (champFile[ability]["staticCoolDownFormula"]) {
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
              prependType(path["damage"]["type"]);
              addBold(path["damage"]["type"] + ' Damage');
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
                addText(lengthCheck(enemyMaxHPCounter));
                colorHP(' Enemy Max HP');
                addText('ratio');
              };
              if (path["damage"]["system"] === 'minMax') {
                colorMin('Min: ');
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
                  addText(' (+' + lengthCheck(minHPCounter));
                  colorHP(' Enemy Max HP');
                  addText('ratio)');
                };
                singleBreak();
                colorMin('Max: ');
                if (minCounter !== 0) {
                  addText(factorRes(path["damage"]["type"], minCounter * 2));
                };
                if (minHPCounter !== 0) {
                  addText(' (+' + lengthCheck(minHPCounter * 2));
                  colorHP(' Enemy Max HP');
                  addText('ratio)');
                }
              } 
            };
            if (path["heal"]) {
              doubleBreak();
              prependIcon(healIcon);
              addBold('Heal');
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
                addText(lengthCheck(maxHPCounter));
                colorHP(' Enemy Max HP');
                addText('ratio');
              } 
            };
            if (path["interruptCC"]) {
              prependIcon(ccIcon);
              addBold('Crowd Control Duration');
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
              prependIcon(cdrIcon);
              addPink('Cooldown');
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
        if (ability !== 'passive') {
          var bDiv = document.createElement('div');
          var b = document.createElement('b');
          b.innerText = this.tfChampPair[champName] + ability;
          bDiv.style.textAlign = 'center';
          bDiv.appendChild(b);
          abilityDiv.appendChild(bDiv);
        } else {
          var bDiv = document.createElement('div');
          var b = document.createElement('b');
          b.innerText = this.tfChampPair[champName] + 'Passive';
          bDiv.style.textAlign = 'center';
          bDiv.appendChild(b);
          abilityDiv.appendChild(bDiv);
        };
        var hr2 = document.createElement('hr');
        abilityDiv.appendChild(hr2);

        if (ability === 'passive' || document.getElementById(`${ability}Rank${side}`).value == 0) {

          if (champFile[tfAbility]["remountHPRatioByLvl"]) {
            var path = champFile[tfAbility]["remountHPRatioByLvl"];
            prependIcon(healthIcon);
            addBold('Remount HP Ratio');
            addText('(' + path[0] + ' to ' + path[17] + ', based on level. Currently: ' + path[champLevel] + ')');
          };

          if (champFile[tfAbility]['autoEmpower']) {
            var path = champFile[tfAbility]['autoEmpower']['damage'];
            prependIcon(attackIcon);
            addBold('Empowered Basic Attack');
            prependType(path['type']);
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
              colorMin('Min: ');
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
              colorMin('Max: ');
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
              colorOrchid('Total');
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
              prependIcon(healIcon);
              addBold('Heal');
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
              colorOrchid('Total');
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
            prependType(path['type']);
            addBold(path['type'] + ' Damage');
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
              colorMin('Min: ');
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
              colorMin('Max: ');
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
            prependType(path['type']);
            addBold(path['type'] + ' Damage Over Time');
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
              colorOrchid('Total');
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
            prependIcon(attackSpeedIcon);
            addBold('Bonus Attack Speed');
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
              prependIcon(armorIcon);
              prependIcon(magicResIcon);
              addBold('Armor and Magic Resist Reduction');
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
            prependIcon(attackIcon);
            addBold(`Passive's Basic Attack Empower Increase Ratio`);
            removeSpace(path['bonus']);
            singleBreak();
            underLine('Duration');
            addText(path['duration']);
            doubleBreak();
          };

          if (champFile[tfAbility]['interruptCC']) {
            prependIcon(ccIcon);
            addBold('Crowd Control Duration');
            removeSpace(champFile[tfAbility]['interruptCC']);
            doubleBreak();
          };

          if (champFile[tfAbility]['duration']) {
            addBold('Duration');
            addText(champFile[tfAbility]['duration']);
          };

          if (champFile[tfAbility]['coolDown']) {
            prependIcon(cdrIcon);
            addPink('Cooldown');
            removeSpace(champFile[tfAbility]['coolDown']);
          };

          if (champFile[tfAbility]["coolDownRefundRatio"]) {
            singleBreak();
            underLine('Refund Ratio');
            removeSpace(champFile[tfAbility]["coolDownRefundRatio"]);
          };

          if (champFile[tfAbility]["reducedCoolDownByRRank"]) {
            singleBreak();
            colorMin('Min: ');
            removeSpace(champFile[tfAbility]["reducedCoolDownByRRank"]);
          };

          if (champFile[tfAbility]['rechargeByLvl']) {
            var path = champFile[tfAbility]['rechargeByLvl']
            singleBreak();
            prependIcon(cdrIcon);
            addPink('Recharge');
            addText('[' + path[0] + ' to ' + path[17] + ', based on level. ');
            underLine('Currently');
            addText(path[champLevel] + ']')
          }
        };

        if (ability !== 'passive' && document.getElementById(`${ability}Rank${side}`).value > 0 ) {

          if (champFile[tfAbility]["remountHPRatioByLvl"]) {
            var path = champFile[tfAbility]["remountHPRatioByLvl"];
            prependIcon(healthIcon);
            addBold('Remount HP');
            addText(Math.round(path[champLevel] * totalHP));
          };

          if (champFile[tfAbility]['autoEmpower']) {
            var path = champFile[tfAbility]['autoEmpower']['damage'];
            prependIcon(attackIcon);
            addBold('Empowered Basic Attack');
            prependType(path['type']);
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
            };
            if (path['system'] === 'minMax') {
              colorMin('Min: ');
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
              colorMin('Max: ');
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
              prependIcon(healIcon);
              addBold('Heal');
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
            prependType(path['type']);
            addBold(path['type'] + ' Damage');
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
              colorMin('Min: ');
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
              colorMin('Max: ');
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
            prependType(path['type']);
            addBold(path['type'] + ' Damage Over Time');
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
              colorOrchid('Total');
              addText(factorRes(path['type'], mapSpace(multiplyTicks(dmgCount))));
            };
            doubleBreak();
          };

          if (champFile[tfAbility]['bonusAttackSpeed']) {
            var path = champFile[tfAbility]['bonusAttackSpeed'];
            prependIcon(attackSpeedIcon);
            addBold('Bonus Attack Speed');
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
              prependIcon(armorIcon);
              prependIcon(magicResIcon);
              addBold('Armor and Magic Resist Reduction');
            };
            if (path["reduxRatioByLvl"]) {
              underLine('Ratio');
              addText(path["reduxRatioByLvl"][champLevel]);
              if (enemyStats.baseHP) {
                singleBreak();
                prependIcon(armorIcon);
                underLine('Armor Reduced');
                addText(path["reduxRatioByLvl"][champLevel] * enemyArmor);
                singleBreak();
                prependIcon(magicResIcon);
                underLine('Magic Resist Reduced');
                addText(path["reduxRatioByLvl"][champLevel] * enemyMR);
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
            prependIcon(attackIcon);
            addBold(`Passive's Basic Attack Empower Increase Ratio`);
            addText(arrayCheck(path['bonus']));
            singleBreak();
            underLine('Duration');
            addText(path['duration']);
            doubleBreak();
          };

          if (champFile[tfAbility]['interruptCC']) {
            prependIcon(ccIcon);
            addBold('Crowd Control Duration');
            addText(arrayCheck(champFile[tfAbility]['interruptCC']));
            doubleBreak();
          };

          if (champFile[tfAbility]['duration']) {
            addBold('Duration');
            addText(arrayCheck(champFile[tfAbility]['duration']));
          };

          if (champFile[tfAbility]['coolDown']) {
            prependIcon(cdrIcon);
            addPink('Cooldown');
            addText(hasteRatio === 1 ? arrayCheck(champFile[tfAbility]['coolDown']) 
            : (arrayCheck(champFile[tfAbility]['coolDown'])*hasteRatio).toFixed(1));
          };

          if (champFile[tfAbility]["coolDownRefundRatio"]) {
            singleBreak();
            underLine('Refund Ratio');
            addText(arrayCheck(champFile[tfAbility]["coolDownRefundRatio"]));
          };

          if (champFile[tfAbility]["reducedCoolDownByRRank"]) {
            singleBreak();
            colorMin('Min: ');
            addText(hasteRatio === 1 ? champFile[tfAbility]["reducedCoolDownByRRank"][RRank]
            : (champFile[tfAbility]["reducedCoolDownByRRank"][RRank]*hasteRatio).toFixed(1));
          }

          if (champFile[tfAbility]['rechargeByLvl']) {
            singleBreak();
            prependIcon(cdrIcon);
            addPink('Recharge');
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
  };

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

    this[`appliedStats${side}`] = {
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

        this.setGlobalStats(side);
        this.calculateAbility('Left');
        this.calculateAbility('Right');
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
    var targetRank = document.getElementById(event.target.id).value;
    var prevBonus = this.state[`aphel${side}`][hash];
    if (hash === 'as' && !prevBonus.length) {
      prevBonus *= this[`champFile${side}`].stats.asRatio
    };
    var newBonus = this[`${hash}Aphel`][targetRank];
    if (hash === 'as' && !newBonus.length) {
      newBonus *= this[`champFile${side}`].stats.asRatio
    };
    if (!newBonus.length && prevBonus.length) {
      this[`totalStats${side}`][hash] += +newBonus;
      this.setState(prevState => ({
        [`totalStats${side}`]: {
          ...prevState[`totalStats${side}`],
          [hash]: this.state[`totalStats${side}`][hash] + +newBonus
        }
      }));
    };
    if (!prevBonus.length && newBonus.length) {
      this[`totalStats${side}`][hash] -= +prevBonus;
      this.setState(prevState => ({
        [`totalStats${side}`]: {
          ...prevState[`totalStats${side}`],
          [hash]: this.state[`totalStats${side}`][hash] - +prevBonus
        }
      }))
    };
    if (!newBonus.length && !prevBonus.length) {
      this[`totalStats${side}`][hash] += (newBonus - prevBonus);
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

  appliedStatsToggle = (event, side, ability) => {
    if (event.target.textContent.includes('Min')) {
      if (this[`applied${ability}${side}`].minMax === 'Max') {
        this.appliedStatsUpdate(side, ability, 'remove');
        document.getElementById(`${ability}${side}Applied`).childNodes[2].textContent = 
        'Apply Maximum Stats'
      };
      this[`applied${ability}${side}`].minMax = 'Min'
    };
    if (event.target.textContent.includes('Max')) {
      if (this[`applied${ability}${side}`].minMax === 'Min') {
        this.appliedStatsUpdate(side, ability, 'remove');
        document.getElementById(`${ability}${side}Applied`).childNodes[0].textContent = 
        'Apply Minimum Stats'
      };
      this[`applied${ability}${side}`].minMax = 'Max'
    };
    if (event.target.textContent.includes('Remove')){
      this.appliedStatsUpdate(side, ability, 'remove');
      event.target.textContent = event.target.textContent.replace('Remove', 'Apply')
    } else {
      this.appliedStatsUpdate(side, ability, 'apply');
      event.target.textContent = event.target.textContent.replace('Apply', 'Remove')
    }
  };

  appliedStatsUpdate = (side, ability, applyRemoveUpdate) => {
    var champLevel = this[`level${side}`] - 1;
    var abilityRank;
    if (ability !== 'passive'){
      abilityRank = document.getElementById(`${ability}Rank${side}`).value - 1
    };
    var minMax = this[`applied${ability}${side}`].minMax;
    switch(applyRemoveUpdate) {
      case 'apply':
        this[`applied${ability}${side}`].statTypes.map(x => {
          if (this[`applied${ability}${side}`][x]['flat' + `${minMax}`]){
            if (typeof this[`applied${ability}${side}`][x]['flat' + `${minMax}`] !== 'number') {
              this[`appliedStats${side}`][x] += this[`applied${ability}${side}`][x]['flat' + `${minMax}`][abilityRank]
            } else {
              this[`appliedStats${side}`][x] += this[`applied${ability}${side}`][x]['flat' + `${minMax}`];
            }
          };
          if (this[`applied${ability}${side}`][x]['byLvl' + `${minMax}`]){
            this[`appliedStats${side}`][x] += this[`applied${ability}${side}`][x]['byLvl' + `${minMax}`][champLevel]
          };
          if (this[`applied${ability}${side}`][x]['ratio' + `${minMax}`]){
            if (typeof this[`applied${ability}${side}`][x]['ratio' + `${minMax}`] === 'number') {
              /*this[`appliedStats${side}`][x] += this[`applied${ability}${side}`][x].ratio 
              * (this[`totalStats${side}`][x] - this[`appliedStats${side}`][x]);*/

            } else if (this[`applied${ability}${side}`][x]['ratio' + `${minMax}`].length < 10) {
              /*this[`appliedStats${side}`][x] += this[`applied${ability}${side}`][x].ratio[abilityRank] 
              * (this[`totalStats${side}`][x] - this[`appliedStats${side}`][x]);*/
            } else {
              /*this[`appliedStats${side}`][x] += this[`applied${ability}${side}`][x].ratio[champLevel] 
              * (this[`totalStats${side}`][x] - this[`appliedStats${side}`][x]);*/
            }
          };
        });
        this[`applied${ability}${side}`].isItOn = true;
        break;
      case 'remove':
        this[`applied${ability}${side}`].minMax = '';
        this[`applied${ability}${side}`].statTypes.map(x => {
          this[`appliedStats${side}`][x] = 0
        });
        this[`applied${ability}${side}`].isItOn = false;
        break;
      case 'update':
        this[`applied${ability}${side}`].statTypes.map(x => {
          var newStatValue = 0;
          if (this[`applied${ability}${side}`][x]['flat' + `${minMax}`]){
            if (typeof this[`applied${ability}${side}`][x]['flat' + `${minMax}`] !== 'number') {
              newStatValue += this[`applied${ability}${side}`][x]['flat' + `${minMax}`][abilityRank]
            } else {
              newStatValue += this[`applied${ability}${side}`][x]['flat' + `${minMax}`];
            }
          };
          if (this[`applied${ability}${side}`][x]['byLvl' + `${minMax}`]){
            newStatValue += this[`applied${ability}${side}`][x]['byLvl' + `${minMax}`][champLevel]
          };
          /*if (this[`applied${ability}${side}`][x].ratio){
            if (typeof this[`applied${ability}${side}`][x].ratio === 'number') {
              newStatValue += this[`applied${ability}${side}`][x].ratio 
              * (this[`totalStats${side}`][x] - this[`appliedStats${side}`][x]);
            } else if (this[`applied${ability}${side}`][x].ratio.length < 10) {
              newStatValue += this[`applied${ability}${side}`][x].ratio[abilityRank] 
              * (this[`totalStats${side}`][x] - this[`appliedStats${side}`][x]);
            } else {
              newStatValue += this[`applied${ability}${side}`][x].ratio[champLevel] 
              * (this[`totalStats${side}`][x] - this[`appliedStats${side}`][x]);
            }
          };*/
          /*if (this[`applied${ability}${side}`][x].bonusRatio){
            if (typeof this[`applied${ability}${side}`][x].bonusRatio === 'number') {
              newStatValue += this[`applied${ability}${side}`][x].bonusRatio 
              * (this[`runes${side}`][x] + this[`itemStats${side}`][x]);
            } else if (this[`applied${ability}${side}`][x].ratio.length < 10) {
              newStatValue += this[`applied${ability}${side}`][x].ratio[abilityRank] 
              * (this[`totalStats${side}`][x] - this[`appliedStats${side}`][x]);
            } else {
              newStatValue += this[`applied${ability}${side}`][x].ratio[champLevel] 
              * (this[`totalStats${side}`][x] - this[`appliedStats${side}`][x]);
            }
          };*/
          if (this[`applied${ability}${side}`][x].ratioPer){
            
          };
          this[`appliedStats${side}`][x] = newStatValue;
        });
        break;
    };

    this.setGlobalStats(side);
    this.calculateAbility('Left');
    this.calculateAbility('Right');
  };

  onLevelChange = (event) => {
    var side = 'Left';
    if (event.target.id !== 'levelBoxLeft') {
      side = 'Right';
    };
    document.getElementById(`levelBox${side}`).setAttribute('value', event.target.value);
    this[`level${side}`] = event.target.value;

    var checkAppliedUpdate = () => {
      this.abilities.map(ability => {
        if (this[`applied${ability}${side}`].statTypes.length) {
          if (document.getElementById(`${ability}${side}Applied`).childNodes[0].textContent.includes('Remove')
          || document.getElementById(`${ability}${side}Applied`).childNodes[1].textContent.includes('Remove')
          || document.getElementById(`${ability}${side}Applied`).childNodes[2].textContent.includes('Remove')) {
            this.appliedStatsUpdate(side, ability, 'update')
          }
        }
      })
    };

    this.setGlobalStats(side);
    checkAppliedUpdate();
    this.calculateAbility('Left');
    this.calculateAbility('Right');
  };

  onRankChange = (event) => {
    var side = 'Left';
    if (event.target.id.includes('Right')) {
      side = 'Right';
    };
    var firstChar = event.currentTarget.id.charAt(0);
    this.setState({ [`${firstChar}Rank${side}`]: event.target.value });
    if (event.target.value === "0" && this[`applied${firstChar}${side}`].statTypes.length) {
      for (let i = 0; i < 2; i++) {
        if (document.getElementById(`${firstChar}${side}Applied`).childNodes[i].textContent.includes('Remove')) {
          this.appliedStatsUpdate(side, firstChar, 'remove')
          document.getElementById(`${firstChar}${side}Applied`).childNodes[i].textContent = 
          document.getElementById(`${firstChar}${side}Applied`).childNodes[i].textContent.replace('Remove', 'Apply')
        }
      }
    };
    if (event.target.value !== "0" && this[`applied${firstChar}${side}`].statTypes.length) {
      for (let i = 0; i < 2; i++) {
        if (document.getElementById(`${firstChar}${side}Applied`).childNodes[i].textContent.includes('Remove')) {
          this.appliedStatsUpdate(side, firstChar, 'update')
        }
      }
    };

    this.calculateAbility('Left');
    this.calculateAbility('Right');
  };

  onRuneChange = (rowIndex, shardIndex, side) => {
    var shardArray = this.runeHash.currentShards[`${side}`];
    if (shardArray[`${rowIndex}`] === shardIndex ) {
      return
    };
    var rowDiv = document.getElementById(`shardRow${rowIndex}${side}`);
    rowDiv.children[shardArray[`${rowIndex}`]].style.border = 'none';
    rowDiv.children[shardArray[`${rowIndex}`]].style.margin = '3px';
    rowDiv.children[shardIndex].style.border = '2px solid #ffcb5a';
    rowDiv.children[shardIndex].style.margin = '1px';
    shardArray[`${rowIndex}`] = shardIndex;
    
    this[`runes${side}`] = {
      force: 0,
      ad: 0,
      ap: 0,
      as: 0,
      hp: 0,
      cdr: 0,
      tenacity: 0,
      hpByLvl: 0
    };
    this[`runes${side}`][this.runeHash[0][shardArray[0]][0]] = this.runeHash[0][shardArray[0]][1];
    this[`runes${side}`][this.runeHash[1][shardArray[1]][0]] += this.runeHash[1][shardArray[1]][1];
    this[`runes${side}`][this.runeHash[2][shardArray[2]][0]] += this.runeHash[2][shardArray[2]][1];

    this.setGlobalStats(side);
    this.calculateAbility('Left');
    this.calculateAbility('Right');
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
    index: 0
  }

  ksHighlight = (side, runeTree, ksIndex, borderString) => {
    document.getElementById(`ksContainer${side}`).getElementsByClassName(this[`currentKS${side}`].tree)[this[`currentKS${side}`].index].style.boxShadow = '';
    document.getElementById(`ksContainer${side}`).getElementsByClassName(runeTree)[ksIndex].style.boxShadow = `0px 0px 5px ${borderString} inset`;
    this[`currentKS${side}`] = {
      tree: runeTree,
      index: ksIndex
    }
  };

  ksPathChange = (side, index) => {
    if (this[`ksPathIndex${side}`] === index) {
      return
    };
    var prevIndex = this[`ksPathIndex${side}`];
    document.getElementById(`ksPath${side}`).getElementsByTagName('img')[prevIndex].style.border = 'none';
    document.getElementById(`ksPath${side}`).getElementsByTagName('img')[prevIndex].style.padding = '3px';
    document.getElementById(`ksPath${side}`).getElementsByTagName('img')[index].style.border = '1px solid ' + this.ksPathColors[index];
    document.getElementById(`ksPath${side}`).getElementsByTagName('img')[index].style.padding = '2px';
    document.getElementById(`ksContainer${side}`).getElementsByTagName('div')[prevIndex].style.display = 'none';
    document.getElementById(`ksContainer${side}`).getElementsByTagName('div')[index].style.display = '';
    this[`ksPathIndex${side}`] = index;
  };

  pressTheAttack = (side) => {
    if (this.state[`keystoneID${side}`].index === 0) {
      return
    };
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
        typeIcon: forceIcon,
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
      [`ksPart2${side}`]: {
        text: <span>8% (excluding true damage) for 6 seconds.</span>,
        typeIcon: '',
        type: 'Damage Amplification',
        bonusADRatio: 0,
        APRatio: 0,
        HPRatio: 0,
        array: ''
      },
      [`ksPart2Display${side}`]: 'block'
    })
  };

  lethalTempo = (side) => {
    if (this.state[`keystoneID${side}`].index === 1) {
      return
    };
    this.ksHighlight(side, 'precision', 1, 'rgb(255, 225, 82)');
    var asByLvl = [
      0.30,0.3388,0.3776,0.4165,0.4553,0.4941,0.5329,0.5718,0.6106,
      0.6494,0.6882,0.7271,0.7659,0.8047,0.8435,0.8824,0.9212,0.96
    ];
    this.setState({
      [`keystone${side}`]: 
        '0.3 to 0.96, based on level, for 6 seconds.',
      [`keystoneID${side}`]: {
        index: 1,
        title: 'Lethal Tempo',
        typeIcon: attackSpeedIcon,
        type: 'Attack Speed Ratio (full stacks)'
      },
      [`ksPart2${side}`]: {
        text: '0.216 to 0.48, based on level, for 6 seconds.',
        typeIcon: attackSpeedIcon,
        type: 'Attack Speed Ratio (full stacks) (ranged)',
        bonusADRatio: 0,
        APRatio: 0,
        HPRatio: 0,
        array: [
          0.216,0.2315,0.2471,0.2626,0.2781,0.2936,0.3092,0.3247,0.3402,
          0.3558,0.3713,0.3868,0.4024,0.4179,0.4334,0.4489,0.4645,0.48
        ]
      },
      [`ksArray${side}`]: asByLvl,
      [`ksBonusADRatio${side}`]: 0,
      [`ksAPRatio${side}`]: 0,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0,
      [`ksCD${side}`]: '',
      [`ksCDText${side}`]: '',
      [`ksPart2Display${side}`]: 'block'
    })
  };

  fleetFootwork = (side) => {
    if (this.state[`keystoneID${side}`].index === 2) {
      return
    }
    this.ksHighlight(side, 'precision', 2, 'rgb(255, 225, 82)');
    var healByLvl = [
      10,17.06,24.12,31.18,38.24,45.29,52.35,59.41,66.47,
      73.53,80.59,87.65,94.71,101.76,108.82,115.88,122.94,130
    ];
    this.setState({
      [`keystone${side}`]: 
        <span>10 to 130, based on level (+0.1 <span className='textAD'>Bonus AD</span><img src={ADIcon}>
        </img>ratio) (+0.05 <span className='textAP'>AP</span><img src={APIcon}></img>ratio).</span>,
      [`keystoneID${side}`]: {
        index: 2,
        title: 'Fleet Footwork',
        typeIcon: healIcon,
        type: 'Heal'
      },
      [`ksArray${side}`]: healByLvl,
      [`ksBonusADRatio${side}`]: 0.1,
      [`ksAPRatio${side}`]: 0.05,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0,
      [`ksCD${side}`]: '',
      [`ksCDText${side}`]: '',
      [`ksPart2Display${side}`]: 'none'
    })
  };

  conqueror = (side) => {
    if (this.state[`keystoneID${side}`].index === 3) {
      return
    }
    this.ksHighlight(side, 'precision', 3, 'rgb(255, 225, 82)');
    var forceByLvl = [
      1.8,1.93,2.06,2.19,2.32,2.45,2.58,2.71,2.84,
      2.96,3.09,3.22,3.35,3.48,3.61,3.74,3.87,4
    ];
    this.setState({
      [`keystone${side}`]: 
        '1.8 to 4 per stack, based on level. Stacks up to 12 times for 21.6-48 max.',
      [`keystoneID${side}`]: {
        index: 3,
        title: 'Conqueror',
        typeIcon: forceIcon,
        type: 'Adaptive Force'
      },
      [`ksArray${side}`]: forceByLvl,
      [`ksBonusADRatio${side}`]: 0,
      [`ksAPRatio${side}`]: 0,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0,
      [`ksCD${side}`]: '',
      [`ksCDText${side}`]: '',
      [`ksPart2Display${side}`]: 'none'
    })
  };

  electrocute = (side) => {
    if (this.state[`keystoneID${side}`].index === 4) {
      return
    }
    this.ksHighlight(side, 'domination', 0, 'rgb(245, 12, 63)');
    var dmgByLvl = [
      30,41.18,52.35,63.53,74.71,85.88,97.06,108.24,119.41,
      130.59,141.76,152.94,164.12,175.29,186.47,197.65,208.82,220
    ];
    this.setState({
      [`keystone${side}`]: 
        <span>30 to 220, based on level (+0.1 <span className='textAD'>Bonus AD</span><img src={ADIcon}>
        </img>ratio) (+0.05 <span className='textAP'>AP</span><img src={APIcon}></img>ratio).</span>,
      [`keystoneID${side}`]: {
        index: 4,
        title: 'Electrocute',
        typeIcon: forceIcon,
        type: 'Adaptive Damage'
      },
      [`ksArray${side}`]: dmgByLvl,
      [`ksBonusADRatio${side}`]: 0.1,
      [`ksAPRatio${side}`]: 0.05,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0,
      [`ksCD${side}`]: [25,24.71,24.41,24.12,23.82,23.53,23.24,22.94,22.65,
      22.35,22.06,21.76,21.47,21.18,20.88,20.59,20.29,20],
      [`ksCDText${side}`]: '',
      [`ksPart2Display${side}`]: 'none'
    })
  };

  predator = (side) => {
    if (this.state[`keystoneID${side}`].index === 5) {
      return
    }
    this.ksHighlight(side, 'domination', 1, 'rgb(245, 12, 63)');
    var dmgByLvl = [
      20,29.41,38.82,48.24,57.65,67.06,76.47,85.88,95.29,
      104.71,114.12,123.53,132.94,142.35,151.76,161.18,170.59,180
    ];
    this.setState({
      [`keystone${side}`]: 
        <span>20 to 180, based on level (+0.25 <span className='textAD'>Bonus AD</span><img src={ADIcon}>
        </img>ratio) (+0.15 <span className='textAP'>AP</span><img src={APIcon}></img>ratio).</span>,
      [`keystoneID${side}`]: {
        index: 5,
        title: 'Predator',
        typeIcon: forceIcon,
        type: 'Adaptive Damage'
      },
      [`ksArray${side}`]: dmgByLvl,
      [`ksBonusADRatio${side}`]: 0.25,
      [`ksAPRatio${side}`]: 0.15,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0,
      [`ksCD${side}`]: [120,116.47,112.94,109.41,105.88,102.35,98.82,95.29,91.76,
        88.24,84.71,81.18,77.65,74.12,70.59,67.06,63.53,60],
      [`ksCDText${side}`]: '',
      [`ksPart2Display${side}`]: 'none'
    })
  };

  darkHarvest = (side) => {
    if (this.state[`keystoneID${side}`].index === 6) {
      return
    }
    this.ksHighlight(side, 'domination', 2, 'rgb(245, 12, 63)');
    var dmgByLvl = [
      20,23.53,27.06,30.59,34.12,37.65,41.18,44.71,48.24,
      51.76,55.29,58.82,62.35,65.88,69.41,72.94,76.47,80
    ];
    this.setState({
      [`keystone${side}`]: 
        <span>20 to 80, based on level (+5 per soul) (+0.1 <span className='textAD'>Bonus AD</span><img src={ADIcon}>
        </img>ratio) (+0.05 <span className='textAP'>AP</span><img src={APIcon}></img>ratio).</span>,
      [`keystoneID${side}`]: {
        index: 6,
        title: 'Dark Harvest',
        typeIcon: forceIcon,
        type: 'Adaptive Damage'
      },
      [`ksArray${side}`]: dmgByLvl,
      [`ksBonusADRatio${side}`]: 0.1,
      [`ksAPRatio${side}`]: 0.05,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0,
      [`ksCD${side}`]: [45,45,45,45,45,45,45,45,45,
        45,45,45,45,45,45,45,45,45],
      [`ksCDText${side}`]: ' (reduced to 1.5 on takedown)',
      [`ksPart2Display${side}`]: 'none'
    })
  };

  hailOfBlades = (side) => {
    if (this.state[`keystoneID${side}`].index === 7) {
      return
    }
    this.ksHighlight(side, 'domination', 3, 'rgb(245, 12, 63)');
    this.setState({
      [`keystone${side}`]: 
        '1.1 for 3 attacks.',
      [`keystoneID${side}`]: {
        index: 7,
        title: 'Hail of Blades',
        typeIcon: attackSpeedIcon,
        type: 'Attack Speed Ratio'
      },
      [`ksArray${side}`]: '',
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
    if (this.state[`keystoneID${side}`].index === 8) {
      return
    }
    this.ksHighlight(side, 'sorcery', 0, 'rgb(177, 41, 238)');
    var dmgByLvl = [
      10,12.35,14.71,17.06,19.41,21.76,24.12,26.47,28.82,
      31.18,33.53,35.88,38.24,40.59,42.94,45.29,47.65,50
    ];
    this.setState({
      [`keystone${side}`]: 
        <span>10 to 50, based on level (+0.1 <span className='textAD'>Bonus AD</span><img src={ADIcon}>
        </img>ratio) (+0.05 <span className='textAP'>AP</span><img src={APIcon}></img>ratio).</span>,
      [`keystoneID${side}`]: {
        index: 8,
        title: 'Summon Aery',
        typeIcon: forceIcon,
        type: 'Adaptive Damage'
      },
      [`ksPart2${side}`]: {
        text: <span>30 to 100, based on level (+0.1 <span className='textAD'>Bonus AD</span><img src={ADIcon}>
          </img>ratio) (+0.05 <span className='textAP'>AP</span><img src={APIcon}></img>ratio) for 2 seconds.</span>,
        typeIcon: shieldIcon,
        type: 'Shield',
        bonusADRatio: 0.1,
        APRatio: 0.05,
        HPRatio: 0,
        array: [
          30,34.12,38.24,42.35,46.47,50.59,54.71,58.82,62.94,
          67.06,71.18,75.29,79.41,83.53,87.65,91.76,95.88,100
        ]
      },
      [`ksPart2Display${side}`]: 'block',
      [`ksArray${side}`]: dmgByLvl,
      [`ksBonusADRatio${side}`]: 0.1,
      [`ksAPRatio${side}`]: 0.05,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0,
      [`ksCD${side}`]: '',
      [`ksCDText${side}`]: ''
    })
  };

  arcaneComet = (side) => {
    if (this.state[`keystoneID${side}`].index === 9) {
      return
    }
    this.ksHighlight(side, 'sorcery', 1, 'rgb(177, 41, 238)');
    var dmgByLvl = [
      30,35.88,41.76,47.65,53.53,59.41,65.29,71.18,77.06,
      82.94,88.82,94.71,100.59,106.47,112.35,118.24,124.12,130
    ];
    this.setState({
      [`keystone${side}`]: 
        <span>30 to 130, based on level (+0.1 <span className='textAD'>Bonus AD</span><img src={ADIcon}>
        </img>ratio) (+0.05 <span className='textAP'>AP</span><img src={APIcon}></img>ratio).</span>,
      [`keystoneID${side}`]: {
        index: 9,
        title: 'Arcane Comet',
        typeIcon: forceIcon,
        type: 'Adaptive Damage'
      },
      [`ksArray${side}`]: dmgByLvl,
      [`ksBonusADRatio${side}`]: 0.1,
      [`ksAPRatio${side}`]: 0.05,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0,
      [`ksCD${side}`]: [20,19.29,18.59,17.88,17.18,16.47,15.76,15.06,14.35,
        13.65,12.94,12.24,11.53,10.82,10.12,9.41,8.71,8],
      [`ksCDText${side}`]: ' (reduced by dmg: spells 20%, AoE 10% per enemy, DoT 5%)',
      [`ksPart2Display${side}`]: 'none'
    })
  };

  grasp = (side) => {
    if (this.state[`keystoneID${side}`].index === 11) {
      return
    }
    this.ksHighlight(side, 'resolve', 0, 'rgb(90, 227, 30)');
    this.setState({
      [`keystone${side}`]: 
        <span>0.035 <span className='textHP'>Max HP</span><img src={healthIcon}></img>ratio</span>,
      [`keystoneID${side}`]: {
        index: 11,
        title: 'Grasp of the Undying (60% effective on ranged champions)',
        typeIcon: APIcon,
        type: 'Magic Damage'
      },
      [`ksPart2${side}`]: {
        text: <span>3 + 0.012 <span className='textHP'>Max HP</span><img src={healthIcon}></img>
        ratio (permanent +7 <span className='textHP'>HP</span><img src={healthIcon}></img>per stack)</span>,
        typeIcon: healIcon,
        type: 'Heal',
        bonusADRatio: 0,
        APRatio: 0,
        HPRatio: 0.012,
        array: [
          3,3,3,3,3,3,3,3,3,3,3,3,3,3,3
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
    if (this.state[`keystoneID${side}`].index === 12) {
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
        typeIcon: APIcon,
        type: 'Magic Damage'
      },
      [`ksPart2${side}`]: {
        text: '35 +(0.8 bonus ratio) for 2.5 seconds. Capped at 80 to 150, based on level.',
        typeIcon: armorIcon,
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
    if (this.state[`keystoneID${side}`].index === 13) {
      return
    }
    this.ksHighlight(side, 'resolve', 2, 'rgb(90, 227, 30)');
    var shieldByLvl = [
      45,49.41,53.82,58.24,62.65,67.06,71.47,75.88,80.29,
      84.71,89.12,93.53,97.94,102.35,106.76,111.18,115.59,120
    ];
    this.setState({
      [`keystone${side}`]: 
        <span>45 to 120, based on level (+0.08 <span className='textHP'>Bonus HP</span><img src={healthIcon}>
        </img>ratio) (+0.125 <span className='textAP'>AP</span><img src={APIcon}></img>ratio) for 2 seconds.</span>,
      [`keystoneID${side}`]: {
        index: 13,
        title: 'Guardian',
        typeIcon: shieldIcon,
        type: 'Shield'
      },
      [`ksArray${side}`]: shieldByLvl,
      [`ksBonusADRatio${side}`]: 0,
      [`ksAPRatio${side}`]: 0.125,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0.08,
      [`ksCD${side}`]: [
        90,87.06,84.12,81.18,78.24,75.29,72.35,69.41,66.47,
        63.53,60.59,57.65,54.71,51.76,48.82,45.88,42.94,40
      ],
      [`ksCDText${side}`]: '',
      [`ksPart2Display${side}`]: 'none'
    })
  };

  glacialAugment = (side) => {
    if (this.state[`keystoneID${side}`].index === 14) {
      return
    };
    this.ksHighlight(side, 'inspiration', 0, 'rgb(63, 204, 234)');
    this.setState({
      [`keystone${side}`]: '15% (self excluded)',
      [`keystoneID${side}`]: {
        index: 14,
        title: 'Glacial Augment',
        typeIcon: '',
        type: 'Damage Reduction to Allies'
      },
      [`ksArray${side}`]: '',
      [`ksBonusADRatio${side}`]: 0,
      [`ksAPRatio${side}`]: 0,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0,
      [`ksCD${side}`]: [
        25,25,25,25,25,25,25,25,25,
        25,25,25,25,25,25,25,25,25
      ],
      [`ksCDText${side}`]: '',
      [`ksPart2Display${side}`]: 'none'
    })
  };

  firstStrike = (side) => {
    if (this.state[`keystoneID${side}`].index === 16) {
      return
    };
    this.ksHighlight(side, 'inspiration', 1, 'rgb(63, 204, 234)');
    this.setState({
      [`keystone${side}`]: <span>7% of post-mitigation dealt over 3 seconds. Grants 5 <img src={goldIcon} 
      style={{width: '20px', height: '15px', marginTop: '2px'}}>
        </img> gold + (100% Melee / 70% Ranged) of bonus damage.</span>,
      [`keystoneID${side}`]: {
        index: 16,
        title: 'First Strike',
        typeIcon: trueDmgIcon,
        type: 'True Damage'
      },
      [`ksArray${side}`]: '',
      [`ksBonusADRatio${side}`]: 0,
      [`ksAPRatio${side}`]: 0,
      [`ksHPRatio${side}`]: 0,
      [`ksBonusHPRatio${side}`]: 0,
      [`ksCD${side}`]: [
        25,24.41,23.82,23.24,22.65,22.06,21.47,20.88,20.29,
        19.71,19.12,18.53,17.94,17.35,16.76,16.18,15.59,15
      ],
      [`ksCDText${side}`]: '',
      [`ksPart2Display${side}`]: 'none'
    })
  };

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
        300 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        60 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Unmake: </i>
      <span>
      Reduce enemy champion  magic resistance by 5 (+ 1.2% bonus health) (min: 8.6, max: 25).
      Gain 9 bonus magic resistance per cursed enemy.
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
      <i className='yellow'>Unique Passive - Awe: </i>
      <span>
      Grants ability haste equal to 1% bonus mana.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Mana Charge: </i>
      <span>
      Grants a charge every 8 seconds, up to 5 charges. Affecting an enemy or ally with an ability consumes
        a charge and grants 5 bonus mana, increased to 10 if it's a champion, up to a maximum of 360 bonus mana.
      </span>
    </div>,
    3:
    <div>
      <b className='yellow'>Ardent Censer</b>
      <hr></hr>
      <span>
        50 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        125% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <br></br>
      <span>
        8% <img src={healShieldIcon}></img> Heal and Shield Power
      </span>
      <br></br>
      <span>
        8% <img src={moveSpeedIcon}></img> Movement Speed
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Sanctify: </i>
      <span>
      Healing or shielding allied champions (excluding yourself) gives you and your ally 25% 
      bonus attack speed and 20 bonus magic damage on-hit on basic attacks for 6 seconds.
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
        18 <img src={arPenIcon}></img> Lethality
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Flux: </i>
      <span>
      Enemy champion takedowns within 3 seconds of damaging them refunds 
      10% (+ 0.3% per 1 lethality) of your ultimate's total cooldown.
      </span>
    </div>,
    5:
    <div>
      <b className='yellow'>Banshee's Veil</b>
      <hr></hr>
      <span>
        120 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        50 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Annul: </i>
      <span>
      Grants a spell shield that blocks the next hostile ability.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        30 (restarts upon taking damage from champions)
      </span>
    </div>,
    6:
    <div>
      <b className='yellow'>Black Cleaver</b>
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
        400 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Carve: </i>
      <span>
      Dealing physical damage to an enemy champion applies a stack of Carve for 6 seconds, stacking up to 5 times.
        Each stack reduces the target's armor by 5%, up to 25%.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Fervor: </i>
      <span>
      Dealing physical damage grants 20 bonus movement speed for 2 seconds.
      </span>
    </div>,
    7:
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
        8% <img src={lifestealIcon}></img> Life Steal
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Mist's Edge: </i>
      <span>
      Basic attacks deal (Melee 12% / Ranged 9%) of the target's current health bonus 
      physical damage on-hit, with a minimum of 15 against all units.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Clawing Shadows: </i>
      <span>
      Next basic attack on-hit against an enemy champion slows by (Melee 30% / Ranged 15%) for 1 second.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        15
      </span>
    </div>,
    8:
    <div>
      <b className='yellow'>Bloodsong</b>
      <hr></hr>
      <span>
        200 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        75% <img src={healthRegenIcon}></img> Base Health Regen.
      </span>
      <br></br>
      <span>
        75% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <br></br>
      <span>
        5 <img src={goldIcon} style={{width: '20px', height: '15px'}}></img> Gold per 10 seconds
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Ward: </i>
      <span>
      Place a Stealth Ward at the target location (4 charges; 600 range).
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Spellblade: </i>
      <span>
      After using an ability, your next basic attack within 10 seconds deals 100% base AD bonus
       physical damage on-hit. If the target is a champion, inflict them with Expose Weakness for
        6 seconds, causing them to take (Melee 10% / Ranged 5%) increased damage from all sources.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        1.5
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
        18% <img src={lifestealIcon}></img> Life Steal
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Engorge: </i>
      <span>
      While above 70% maximum health, gain 10−40 (based on level) bonus attack damage.
      </span>
    </div>,
    10:
    <div>
      <b className='yellow'>Bounty of Worlds</b>
      <hr></hr>
      <span>
        200 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        75% <img src={healthRegenIcon}></img> Base Health Regen.
      </span>
      <br></br>
      <span>
        75% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <br></br>
      <span>
        5 <img src={goldIcon} style={{width: '20px', height: '15px'}}></img> Gold per 10 seconds
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Ward: </i>
      <span>
      Place a Stealth Ward at the target location (4 charges; 600 range).
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Upgrade: </i>
      <span>
      Upgrade into Bloodsong, Celestial Opposition, Dream Maker, Solstice Sleigh, or Zaz'Zak's Realmspike.
      </span>
    </div>,
    11:
    <div>
      <b className='yellow'>Celestial Opposition</b>
      <hr></hr>
      <span>
        200 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        75% <img src={healthRegenIcon}></img> Base Health Regen.
      </span>
      <br></br>
      <span>
        75% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <br></br>
      <span>
        5 <img src={goldIcon} style={{width: '20px', height: '15px'}}></img> Gold per 10 seconds
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Ward: </i>
      <span>
      Place a Stealth Ward at the target location (4 charges; 600 range).
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Blessing of the Mountain: </i>
      <span>
      Reduce incoming champion damage by (Melee 35% / Ranged 25%) for 2 seconds after taking damage from
       a champion. Then unleash a shockwave around you that slows nearby enemies by 60% for 2 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        18
      </span>
    </div>,
    12:
    <div>
      <b className='yellow'>Chempunk Chainsword</b>
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
        250 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Hackshorn: </i>
      <span>
      Dealing physical damage to enemy champions inflicts them with Grievous Wounds for 3 seconds.
      </span>
    </div>,
    13:
    <div>
      <b className='yellow'>Cosmic Drive</b>
      <hr></hr>
      <span>
        80 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        25 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        250 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        5% <img src={moveSpeedIcon}></img> Movement Speed
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Spelldance: </i>
      <span>
      Dealing ability damage to an enemy champion grants you 25−60 (based on level) bonus
       movement speed for 2 seconds.
      </span>
    </div>,
    14:
    <div>
      <b className='yellow'>Cryptbloom</b>
      <hr></hr>
      <span>
        70 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        30% <img src={mPenIcon}></img> Magic Penetration
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Life From Death: </i>
      <span>
      While alive, damaging an enemy champion within 3 seconds of takedown summons a nova that radiates
       from the location of their death over 1.75 seconds, healing you and allied champions hit for 50 (+50% AP).
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        60
      </span>
    </div>,
    15:
    <div>
      <b className='yellow'>Dawncore</b>
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
        150% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - First Light: </i>
      <span>
      Gain 3% heal and shield power and 5 ability power for every additional 100% base mana regeneration.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Radiance: </i>
      <span>
      Gain 18 summoner spell haste.
      </span>
    </div>,
    16:
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
      While moving, generate 7 stacks of Momentum per 0.25 seconds, granting up to 40 bonus movement
       speed at 100 stacks. Basic attack consumes all stacks to deal 0-40 (based on Momentum)
        (+ 0%-100% (based on Momentum) base AD) bonus physical damage on-hit.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Unsinkable: </i>
      <span>
      Gain 25% slow resist.
      </span>
    </div>,
    17:
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
        40 <img src={armorIcon}></img> Armor
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Ignore Pain: </i>
      <span>
      Stores (Melee 30% / Ranged 10%) of all post-mitigation non-true damage received, including on
       shields, which is taken as true damage over 3 seconds instead (one third stored damage per second).
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Defy: </i>
      <span>
      If an enemy champion dies within 3 seconds of you damaging them, remove Ignore Pain's remaining
       stored damage and heal for 50% bonus AD over 2 seconds.
      </span>
    </div>,
    18:
    <div>
      <b className='yellow'>Dream Maker</b>
      <hr></hr>
      <span>
        200 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        75% <img src={healthRegenIcon}></img> Base Health Regen.
      </span>
      <br></br>
      <span>
        75% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <br></br>
      <span>
        5 <img src={goldIcon} style={{width: '20px', height: '15px'}}></img> Gold per 10 seconds
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Ward: </i>
      <span>
      Place a Stealth Ward at the target location (4 charges; 600 range).
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Dream Maker: </i>
      <span>
      Gain a Blue Dream Bubble and a Purple Dream Bubble. Granting a heal or shield to an allied
       champion (excluding self) blows both Dream Bubbles to them, empowering them for 3 seconds.
        The Blue Bubble reduces the next instance of non-minion damage they take by 75-255 (based on
         user's level) and the Purple Bubble grants them 50-170 (based on user's level) bonus magic
          damage on-hit on their next basic attack.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        8
      </span>
    </div>,
    19:
    <div>
      <b className='yellow'>Echoes of Helia</b>
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
        125% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Soul Siphon: </i>
      <span>
      Damaging an enemy champion with a basic attack or ability damage grants a Soul Shard, up to 3.
       Healing or shielding an allied champion (excluding self) consumes all Soul Shards to heal them
        for 40 per shard and deal 45 magic damage per shard to the nearest enemy champion within 1100 units of the ally.
      </span>
    </div>,
    20:
    <div>
      <b className='yellow'>Eclipse</b>
      <hr></hr>
      <span>
        70 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        15 <img src={cdrIcon}></img> Abilty Haste
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Ever Rising Moon: </i>
      <span>
      Hitting an enemy champion with 2 separate attacks or abilities within 2 seconds deals bonus physical
       damage equal to (Melee 8% / Ranged 4%) of target's maximum health and grants you a shield for
        (Melee 160 / Ranged 80) (+ (Melee 40% / Ranged 20%) bonus AD) for 2 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        6
      </span>
    </div>,
    21:
    <div>
      <b className='yellow'>Edge of Night</b>
      <hr></hr>
      <span>
        50 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        250 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        15 <img src={arPenIcon}></img> Lethality
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
    22:
    <div>
      <b className='yellow'>Essence Reaver</b>
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
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Spellblade: </i>
      <span>
      After using an ability, your next basic attack within 10 seconds deals 140% base AD (+ 20% bonus AD)
        bonus physical damage on-hit and restores mana equal to 40% of that amount.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        1.5
      </span>
    </div>,
    23:
    <div>
      <b className='yellow'>Experimental Hexplate</b>
      <hr></hr>
      <span>
        55 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        300 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        25% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Hexcharged: </i>
      <span>
      Gain 30 ultimate haste.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Overdrive: </i>
      <span>
      Upon casting your ultimate ability, gain 30% bonus attack speed
       and 15% bonus movement speed for 8 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        30
      </span>
    </div>,
    24:
    <div>
      <b className='yellow'>Fimbulwinter</b>
      <hr></hr>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        400 <img src={healthIcon}></img> Health
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
      Immobilizing, or slowing (melee only), an enemy champion grants a 100−180 
      (based on level) (+ 4.5% current mana) shield for 3 seconds. Shield increases by 80% if
       within 1200 units of 2+ enemy champions.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        8
      </span>
    </div>,
    25:
    <div>
      <b className='yellow'>Force of Nature</b>
      <hr></hr>
      <span>
        400 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        55 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <br></br>
      <span>
        5% <img src={moveSpeedIcon}></img> Movement Speed
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Steadfast: </i>
      <span>
      Taking magic damage from champions grants a stack of Steadfast for 7 seconds, stacking up to 8 times 
      (duration refreshes on subsequent magic damage and whenever dealing damage to them). Becoming
       immobilized by an enemy champion grants 2 stacks and refreshes the duration. Damaging basic attacks
        and spells per cast instance can only grant 1 stack of Steadfast every 1 second. At maximum stacks,
         gain 70 bonus magic resistance and 10% bonus movement speed.
      </span>
    </div>,
    26:
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
        65 <img src={armorIcon}></img> Armor
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Rock Solid: </i>
      <span>
      Every first incoming instance of post-mitigation basic damage per cast instance is reduced
       by 5 (+ 3.5 per 1000 maximum health), maximum 20% reduction each.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Winter's Caress: </i>
      <span>
      Cripples the attack speed of nearby enemies by 20% (700 (center-to-edge) radius).
      </span>
    </div>,
    27:
    <div>
      <b className='yellow'>Guardian Angel</b>
      <hr></hr>
      <span>
        55 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        45 <img src={armorIcon}></img> Armor
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Rebirth: </i>
      <span>
      Upon taking lethal damage, enter resurrection for 4 seconds, during which you are invulnerable, untargetable,
        and unable to act, and afterwards heal for 50% of base health and restore 100% of maximum mana.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        300
      </span>
    </div>,
    28:
    <div>
      <b className='yellow'>Guinsoo's Rageblade</b>
      <hr></hr>
      <span>
        35 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        35 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        25% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Wrath: </i>
      <span>
      Basic attacks deal 30 bonus magic damage on-hit.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Seething Strike: </i>
      <span>
      Basic attacks grant 8% bonus attack speed for 3 seconds, stacking up to 4 times for 32% bonus
       attack speed. At maximum stacks, basic attacks also grant a Phantom stack for 6 seconds, up to 2
        stacks. At 2 Phantom stacks, the next basic attack consumes those stacks to trigger a Phantom Hit 
        that applies on-hit effects to the target at 100% effectiveness after a 0.15 second delay.
      </span>
    </div>,
    29:
    <div>
      <b className='yellow'>Heartsteel</b>
      <hr></hr>
      <span>
        900 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        200% <img src={healthRegenIcon}></img> Base Health Regen.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Goliath: </i>
      <span>
      Gain 0%−30% (based on maximum health) increased size.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Colossal Consumption: </i>
      <span>
      After 3 seconds within 700 units of an enemy champion, your next basic attack against them
       is empowered to deal 80 (+ 12% bonus health from items) bonus physical damage on-hit and
        grant you permanent bonus health equal to 12% of that amount.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        30 (per target)
      </span>
    </div>,
    30:
    <div>
      <b className='yellow'>Hextech Rocketbelt</b>
      <hr></hr>
      <span>
        70 <img src={APIcon}></img> Ability Power
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
      <i className='yellow'>Unique Active - Supersonic: </i>
      <span>
      Dash 125 to 275 units in the target direction, unleashing an arc of 7 rockets in the same direction
       that deal 100 (+10% AP) magic damage to enemies hit. Resets basic attack timer.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        40
      </span>
    </div>,
    31:
    <div>
      <b className='yellow'>Hollow Radiance</b>
      <hr></hr>
      <span>
        600 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        40 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <br></br>
      <span>
        100% <img src={healthRegenIcon}></img> Base Health Regen.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Immolate: </i>
      <span>
      Taking or dealing damage activates this passive for 3 seconds. Deal 10 (+ 1.75% bonus health)
       magic damage every second to enemies within 325 (+ 100% bonus size) units.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Desolate: </i>
      <span>
      Killing an enemy unit deals 20 (+ 3.5% bonus health) magic damage to enemies near them.
      </span>
    </div>,
    32:
    <div>
      <b className='yellow'>Horizon Focus</b>
      <hr></hr>
      <span>
        90 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Hypershot: </i>
      <span>
      Dealing ability damage to a champion 600 or more units away from the cast position reveals
       them and increases your damage dealt to them by 10% for 6 seconds.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Focus: </i>
      <span>
      Upon triggering Hypershot, grant sight of the area 1400 units around the target and apply
       Hypershot's effects to enemy champions within the area for 3 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        30
      </span>
    </div>,
    33:
    <div>
      <b className='yellow'>Hubris</b>
      <hr></hr>
      <span>
        60 <img src={ADIcon}></img> Attack Damage
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
      <i className='yellow'>Unique Passive - Eminence: </i>
      <span>
      Damaging an enemy champion within 3 seconds of takedown generates a permanent stack and grants
       you 15 (+2 per stack) bonus attack damage for 90 seconds.
      </span>
    </div>,
    34:
    <div>
      <b className='yellow'>Hullbreaker</b>
      <hr></hr>
      <span>
        65 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        350 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        5% <img src={moveSpeedIcon}></img> Movement Speed
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Skipper: </i>
      <span>
      Basic attacks on-hit against any enemy grant a stack for 10 seconds, stacking up to 5 times. At
       maximum stacks, or 4 stacks, your next basic attack against a champion, epic monster, or structure
        consumes all stacks to deal (Melee 140% base AD / Ranged 70% base AD) (+ 3.5% maximum health)
         bonus physical damage, increased to (Melee 400% base AD / Ranged 200% base AD)
          (+ 7% maximum health) for structures.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Boarding Party: </i>
      <span>
      Allied siege minions and super minions within 1050 units gain (Melee 20−135 / Ranged 10−68.5)
       (based on level) bonus armor and magic resistance, as well as 10% increased size.
      </span>
    </div>,
    35:
    <div>
      <b className='yellow'>Iceborn Gauntlet</b>
      <hr></hr>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        300 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        50 <img src={armorIcon}></img> Armor
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Spellblade: </i>
      <span>
      After using an ability, your next basic attack within 10 seconds deals 100% base AD bonus 
      physical damage on-hit and creates a 300 radius frost field for 2 seconds. Enemies within the field 
      are slowed by (Melee 15% / Ranged 7.5%) (+ (Melee 0.4% / Ranged 0.2%) per 100 maximum health).
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
      1.5
      </span>
    </div>,
    36:
    <div>
      <b className='yellow'>Immortal Shieldbow</b>
      <hr></hr>
      <span>
        50 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <br></br>
      <span>
        12% <img src={lifestealIcon}></img> Life Steal
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Lifeline: </i>
      <span>
      If you would take damage that would reduce you below 30% of your maximum health, you first gain 
      a shield that absorbs 320−530 (based on level) damage for 3 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        90
      </span>
    </div>,
    37:
    <div>
      <b className='yellow'>Imperial Mandate</b>
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
        125% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Coordinated Fire: </i>
      <span>
      Abilities that slow or immobilize enemy champions mark them for 5 seconds. Allied champions that 
      damage marked enemies consume the mark to deal 10% of the target's current health bonus magic 
      damage and grant you and the triggering ally 25% bonus movement speed for 2 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        9 (per target, starts upon mark application) 
      </span>
    </div>,
    38:
    <div>
      <b className='yellow'>Infinity Edge</b>
      <hr></hr>
      <span>
        65 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <br></br>
      <span>
        50% <img src={critDamageIcon}></img> Critical Strike Damage
      </span>
    </div>,
    39:
    <div>
      <b className='yellow'>Jak'Sho, the Protean</b>
      <hr></hr>
      <span>
        300 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        50 <img src={armorIcon}></img> Armor
      </span>
      <br></br>
      <span>
        50 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Voidborn Resilience: </i>
      <span>
      Gain a stack for each second in combat with enemy champions, stacking up to 5 times. At maximum 
      stacks, increase your bonus armor and bonus magic resistance by 30% until the end of combat.
      </span>
    </div>,
    40:
    <div>
      <b className='yellow'>Kaenic Rookern</b>
      <hr></hr>
      <span>
        400 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        80 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <br></br>
      <span>
        150% <img src={healthRegenIcon}></img> Base Health Regen.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Magebane: </i>
      <span>
      After not taking magic damage for 15 seconds, gain a shield that absorbs magic damage equal 
      to 18% of maximum health until broken.
      </span>
    </div>,
    41:
    <div>
      <b className='yellow'>Knight's Vow</b>
      <hr></hr>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        300 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        45 <img src={armorIcon}></img> Armor
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Pledge: </i>
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
        pre-mitigation physical and magic damage they take to you as true damage and heal for 10% of the damage
        dealt by your Worthy ally to champions. If they are below 30% maximum health, the damage redirection
          is increased to 20%.
      </span>
    </div>,
    42:
    <div>
      <b className='yellow'>Kraken Slayer</b>
      <hr></hr>
      <span>
        40 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        35% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <br></br>
      <span>
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Bring it Down: </i>
      <span>
      Every third basic attack deals 140−310 (based on level) bonus physical damage on-hit. Stacks 
      last 3 seconds. Consuming stacks on the same target within 6 seconds increases the damage 
      by 50%, up to 100% for a maximum of 280−620 (based on level) bonus physical damage.
      </span>
    </div>,
    43:
    <div>
      <b className='yellow'>Liandry's Torment</b>
      <hr></hr>
      <span>
        90 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        300 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Torment: </i>
      <span>
      Dealing ability damage burns enemies, dealing 1% target's maximum health total magic 
      damage every 0.5 seconds over 3 seconds.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Suffering: </i>
      <span>
      For each second in combat with enemy champions, deal 2% increased damage, 
      stacking up to 3 times for a total of 6%.
      </span>
    </div>,
    44:
    <div>
      <b className='yellow'>Lich Bane</b>
      <hr></hr>
      <span>
        100 <img src={APIcon}></img> Ability Power
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
      After using an ability, your next basic attack within 10 seconds gains 50% bonus attack speed 
      and deals 75% base AD (+ 45% AP) bonus magic damage on-hit. 
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        1.5
      </span>
    </div>,
    45:
    <div>
      <b className='yellow'>Locket of the Iron Solari</b>
      <hr></hr>
      <span>
        10 <img src={cdrIcon}></img> Ability Haste
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
      Grant allied champions a shield for 200-360 (based on target's level), 
      decaying over 2.5 seconds (850 range).
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
      90
      </span>
    </div>,
    46:
    <div>
      <b className='yellow'>Lord Dominik's Regards</b>
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
        35% <img src={arPenIcon}></img> Armor Penetration
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Giant Slayer: </i>
      <span>
      Deal 0%-15% (based on maximum health difference) bonus physical damage against 
      enemy champions with greater maximum health than you.
      </span>
    </div>,
    47:
    <div>
      <b className='yellow'>Luden's Companion</b>
      <hr></hr>
      <span>
        95 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        25 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        600 <img src={manaIcon}></img> Mana
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Load: </i>
      <span>
      Gain a Shot Charge stack every 3 seconds, up to a maximum of 6.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Fire: </i>
      <span>
      Dealing ability damage to an enemy consumes all Shot Charges to deal 45 (+4% AP) bonus magic 
      damage to them and, for each charge consumed beyond the first, an additional enemy within 
      600 units of them, firing an orb at each secondary target that impacts after 0.528 seconds. 
      If the number of additional targets fired at is less than the number of charges consumed, 
      deal an additional 15.75-78.75 (based on remaining Shot Charges) (+1.4%-7% AP) magic damage 
      to the primary target, for a total of 60.75-123.75 (+5.4%-11% AP).
      </span>
    </div>,
    48:
    <div>
      <b className='yellow'>Malignance</b>
      <hr></hr>
      <span>
        80 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        25 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        600 <img src={manaIcon}></img> Mana
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Scorn: </i>
      <span>
      Gain 20 ultimate haste.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Hatefog: </i>
      <span>
      Dealing ability damage to enemy champions with your ultimate ability creates a 251-550 
      (based on ultimate's damage instance) radius scorched zone beneath them for 3 seconds, 
      applying a Curse to enemies within that deals 15 (+1.25% AP) magic damage every 0.25 seconds 
      and reduces their magic resistance by 10.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
      3 (per target)
      </span>
    </div>,
    49:
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
      <i className='yellow'>Unique Passive - Manaflow: </i>
      <span>
      Grants a charge every 8 seconds, up to 4 charges. Consumes a charge on-hit and whenever 
      affecting an enemy or ally with an ability to grant 3 bonus mana, 6 for champion targets, 
      up to a maximum of 360 bonus mana.
      </span>
    </div>,
    50:
    <div>
      <b className='yellow'>Maw of Malmortius</b>
      <hr></hr>
      <span>
        65 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        50 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Lifeline: </i>
      <span>
      If you would take magic damage that would reduce you below 30% of your maximum health, you first 
      gain a shield that absorbs (Melee 200 / Ranged 150) (+ Melee 225% / Ranged 168.75% bonus AD) 
      magic damage for 2.5 seconds. Grants 12% life steal while in-combat.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
      90
      </span>
    </div>,
    51:
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
      Gain 4 stacks for each champion kill and 2 stacks for each assist, up to a maximum of 25 stacks. 
      For every stack, gain 5 ability power. If you have at least 10 stacks, also gain 10% bonus 
      movement speed. Lose 10 stacks on death.
      </span>
    </div>,
    52:
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
        50 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Quicksilver: </i>
      <span>
      Removes all crowd control debuffs (except airborne) from your champion and grants 50% bonus 
      total movement speed and ghosting for 1.5 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
      90
      </span>
    </div>,
    53:
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
        250 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        12% <img src={healShieldIcon}></img> Heal and Shield Power
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Purify: </i>
      <span>
      Remove all crowd control debuffs (except airborne, blind, disarm, nearsight, and suppression) 
      from yourself or an allied champion and heal the target for 100-250 (based on target's level).
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        120
      </span>
    </div>,
    54:
    <div>
      <b className='yellow'>Moonstone Renewer</b>
      <hr></hr>
      <span>
        30 <img src={APIcon}></img> Ability Power
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
        125% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Starlit Grace: </i>
      <span>
      Healing or shielding an allied champion chains the effect to the other nearest allied champion 
      within 800 units of them (excluding yourself), granting them 40% of the heal or 45% of the 
      shield's initial strength. If no other allied champions are in range, grant the same target 
      an additional 30% of the heal or 35% of the shield.
      </span>
    </div>,
    55:
    <div>
      <b className='yellow'>Morellonomicon</b>
      <hr></hr>
      <span>
        90 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Grievous Wounds: </i>
      <span>
      Dealing magic damage to enemy champions inflicts them with Grievous Wounds for 3 seconds.
      </span>
    </div>,
    56:
    <div>
      <b className='yellow'>Mortal Reminder</b>
      <hr></hr>
      <span>
        40 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        35% <img src={arPenIcon}></img> Armor Penetration
      </span>
      <br></br>
      <span>
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Grievous Wounds: </i>
      <span>
      Dealing physical damage to enemy champions inflicts them with Grievous Wounds for 3 seconds.
      </span>
    </div>,
    57:
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
      Basic attacks on-hit against champions deal 1.5% maximum mana bonus physical damage. Dealing ability 
      damage to champions deals (Melee 3.5% / Ranged 2.7%) maximum mana (+6% AD) bonus physical damage. 
      Can only be triggered on the same target once every 6.5 seconds from the same attack or cast.
      </span>
    </div>,
    58:
    <div>
      <b className='yellow'>Nashor's Tooth</b>
      <hr></hr>
      <span>
        90 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        50% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <br></br>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Icathian Bite: </i>
      <span>
      Basic attacks deal 15 (+20% AP) bonus magic damage on-hit.
      </span>
    </div>,
    59:
    <div>
      <b className='yellow'>Navori Quickblades</b>
      <hr></hr>
      <span>
        65 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Transcendence: </i>
      <span>
      Basic attacks on-attack reduce the remaining cooldowns of your basic abilities by 12%.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Impermanence: </i>
      <span>
      Your ability damage and proc damage dealt by abilities is increased by 0%-20% 
      (based on critical strike chance).
      </span>
    </div>,
    60:
    <div>
      <b className='yellow'>Opportunity</b>
      <hr></hr>
      <span>
        55 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        18 <img src={arPenIcon}></img> Lethality
      </span>
      <br></br>
      <span>
        5% <img src={moveSpeedIcon}></img> Movement Speed
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Preparation: </i>
      <span>
      After being out-of-combat with enemy champions for 8 seconds, gain 5-10 (based on level) lethality. 
      This bonus remains for 3 seconds after dealing damage to an enemy champion.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Extraction: </i>
      <span>
      Damaging an enemy champion within 3 seconds of takedown grants you 150 bonus 
      movement speed that decays over 1.5 seconds.
      </span>
    </div>,
    61:
    <div>
      <b className='yellow'>Phantom Dancer</b>
      <hr></hr>
      <span>
        20 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        30% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <br></br>
      <span>
        20% <img src={critChanceIcon}></img> Critical Strike Chance
      </span>
      <br></br>
      <span>
        10% <img src={moveSpeedIcon}></img> Movement Speed
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Spectral Waltz: </i>
      <span>
      Basic attacks on-attack grant ghosting and 7% bonus attack speed, up to 5 stacks.
      </span>
    </div>,
    62:
    <div>
      <b className='yellow'>Profane Hydra</b>
      <hr></hr>
      <span>
        60 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        18 <img src={arPenIcon}></img> Lethality
      </span>
      <br></br>
      <span>
        20 <img src={cdrIcon}></img> Ability Haste
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Cleave: </i>
      <span>
      Damaging basic attacks deal (Melee 50% AD / Ranged 25% AD) physical damage to other enemies 
      in a 450 radius centered around the target.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Heretical Cleave: </i>
      <span>
      Deal 100% AD physical damage to enemies in a 450 radius, increased to 130% AD against 
      those below 50% maximum health.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        10
      </span>
    </div>,
    63:
    <div>
      <b className='yellow'>Rabadon's Deathcap</b>
      <hr></hr>
      <span>
        140 <img src={APIcon}></img> Ability Power
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Magical Opus: </i>
      <span>
      Increase your ability power by 35%.
      </span>
    </div>,
    64:
    <div>
      <b className='yellow'>Randuin's Omen</b>
      <hr></hr>
      <span>
        400 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        55 <img src={armorIcon}></img> Armor
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Humility: </i>
      <span>
      Unleash a 500 range shockwave around you that slows nearby enemies by 55% for 2 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        60
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Rock Solid: </i>
      <span>
      Every first incoming instance of post-mitigation basic damage per cast instance is 
      reduced by 5 (+3.5 per 1000 maximum health), maximum 20% reduction each.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Critical Resilience: </i>
      <span>
      Reduces incoming damage from critical strikes by 30%.
      </span>
    </div>,
    65:
    <div>
      <b className='yellow'>Rapid Firecannon</b>
      <hr></hr>
      <span>
        20% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <br></br>
      <span>
        30 <img src={ADIcon}></img> Attack Damage
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
      <i className='yellow'>Unique Passive - Sharpshooter: </i>
      <span>
      When fully Energized, your next basic attack deals 60 bonus magic damage on-hit. Energized 
      attacks gain 35% bonus range, capped at 150.
      </span>
    </div>,
    66:
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
        12% <img src={lifestealIcon} className='smallIcon'></img> Life Steal
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Cleave: </i>
      <span>
      Basic attacks on-hit deal (Melee 40% AD / Ranged 20% AD) physical damage to other enemies 
      in a 350 radius centered around the target.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Ravenous Crescent: </i>
      <span>
      Deal 100% AD physical damage to enemies in a 450 radius in front of you.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        10
      </span>
    </div>,
    67:
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
        15% <img src={healShieldIcon}></img> Heal and Shield Power
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Intervention: </i>
      <span>
      Grant sight of the target area for 2.5 seconds. After, allies within the area are healed 
      for 200-400 (based on target's level), while enemy champions within take 10% of target's 
      maximum health as true damage (5500 range).
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        90
      </span>
    </div>,
    68:
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
        350 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Void Corruption: </i>
      <span>
      For each second in combat with champions, deal 2% increased damage, stacking up to 5 times. 
      At maximum stacks, gain (Melee 10% / Ranged 6%) omnivamp.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Void Infusion: </i>
      <span>
      Gain ability power equal to 2% bonus health.
      </span>
    </div>,
    69:
    <div>
      <b className='yellow'>Rod of Ages</b>
      <hr></hr>
      <span>
        50 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        400 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        400 <img src={manaIcon}></img> Mana
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Timeless: </i>
      <span>
      This item gains 20 bonus health, 20 bonus mana, and 4 ability power every minute, up to 10 times, 
      for a maximum of 200 bonus health, 200 bonus mana, and 40 ability power. Upon reaching maximum 
      stacks, gain a level that preserves your current experience (cap remains at level 18).
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Eternity: </i>
      <span>
      Restore mana equal to 7% of pre-mitigation damage taken from champions, and heal for 25% of 
      mana spent, up to 20 per cast. Toggled abilities can only heal for up to 20 per second.
      </span>
    </div>,
    70:
    <div>
      <b className='yellow'>Runaan's Hurricane</b>
      <hr></hr>
      <span>
        40% <img src={attackSpeedIcon}></img> Attack Speed
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
      <i className='yellow'>Unique Passive - Peck: </i>
      <span>
      Basic attacks deal 30 bonus magic damage on-hit.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Wind's Fury: </i>
      <span>
      Basic attacks fire additional bolts at up to 2 enemies in front of you, each dealing 40% AD physical 
      damage. Bolts apply on-hit effects at 100% effectiveness and are affected by critical strike modifiers. 
      Bolts target the closest enemies to you that are not the main target.
      </span>
    </div>,
    71:
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
    72:
    <div>
      <b className='yellow'>Seraph's Embrace</b>
      <hr></hr>
      <span>
        80 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        25 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        1000 <img src={manaIcon}></img> Mana
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Awe: </i>
      <span>
      Grants ability power equal to 2% bonus mana.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Lifeline: </i>
      <span>
      If you would take damage that would reduce you below 30% of your maximum health, you first 
      gain a shield that absorbs 250 (+20% current mana) damage for 3 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        90
      </span>
    </div>,
    73:
    <div>
      <b className='yellow'>Serpent's Fang</b>
      <hr></hr>
      <span>
        55 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        15 <img src={arPenIcon}></img> Lethality
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Shield Reaver: </i>
      <span>
      Dealing damage to an enemy champion reduces any shields they gain within 3 seconds by (Melee 50% / Ranged 35%), 
      and if the target was not already afflicted, reduces all of their active shields by the same amount.
      </span>
    </div>,
    74:
    <div>
      <b className='yellow'>Serylda's Grudge</b>
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
        15 <img src={arPenIcon}></img> Lethality
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Rancor: </i>
      <span>
      Gain 20% (+0.11% per 1 Lethality) armor penetration.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Bitter Cold: </i>
      <span>
      Dealing ability damage to an enemy that is at or below 50% maximum health slows by 30% for 1 second.
      </span>
    </div>,
    75:
    <div>
      <b className='yellow'>Shadowflame</b>
      <hr></hr>
      <span>
        120 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        12 <img src={mPenIcon}></img> Magic Penetration
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Cinderbloom: </i>
      <span>
      Magic damage and true damage critically strike enemies below 35% maximum health for 120% 
      damage, increased to 130% for damage over time effects and damage dealt by pets.
      </span>
    </div>,
    76:
    <div>
      <b className='yellow'>Shurelya's Battlesong</b>
      <hr></hr>
      <span>
        55 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        125% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <br></br>
      <span>
        8% <img src={moveSpeedIcon}></img> Movement Speed
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Inspiring Speech: </i>
      <span>
      Grants you and all allies within 1000 units 30% bonus movement speed for 4 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        75 
      </span>
    </div>,
    77:
    <div>
      <b className='yellow'>Solstice Sleigh</b>
      <hr></hr>
      <span>
        200 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        75% <img src={healthRegenIcon}></img> Base Health Regen.
      </span>
      <br></br>
      <span>
        75% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <br></br>
      <span>
        5 <img src={goldIcon} style={{width: '20px', height: '15px'}}></img> Gold per 10 seconds
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Ward: </i>
      <span>
      Place a Stealth Ward at the target location (4 charges; 600 range).
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Going Sledding: </i>
      <span>
      Slowing or immobilizing an enemy champion causes you and the nearest and most wounded allied 
      champion to gain 20% bonus movement speed decaying over 2.5 seconds, and 50-230 (based on your level) 
      bonus health for 2.5 seconds. This bonus may exceed maximum health.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        30
      </span>
    </div>,
    78:
    <div>
      <b className='yellow'>Spear of Shojin</b>
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
      <hr></hr>
      <i className='yellow'>Unique Passive - Dragonforce: </i>
      <span>
      Gain 15 basic ability haste.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Focused Will: </i>
      <span>
      Dealing ability damage to an enemy champion grants a stack for 6 seconds, stacking up to 4 times 
      and up to 1 per cast instance and every second for damage over time abilities. For each stack, your 
      ability damage and proc damage dealt by abilities gain 3% increased damage.
      </span>
    </div>,
    79:
    <div>
      <b className='yellow'>Spirit Visage</b>
      <hr></hr>
      <span>
        10 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        60 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <br></br>
      <span>
        450 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        100% <img src={healthRegenIcon}></img> Base Health Regen.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Boundless Vitality: </i>
      <span>
      Increases all healing and shielding received and health regeneration by 25%.
      </span>
    </div>,
    80:
    <div>
      <b className='yellow'>Staff of Flowing Water</b>
      <hr></hr>
      <span>
        40 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        125% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <br></br>
      <span>
        8% <img src={healShieldIcon}></img> Heal and Shield Power
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Rapids: </i>
      <span>
      Healing or shielding allied champions (excluding yourself) grants you and 
      them 30 ability power and 10% bonus movement speed for 4 seconds.
      </span>
    </div>,
    81:
    <div>
      <b className='yellow'>Statikk Shiv</b>
      <hr></hr>
      <span>
        30% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <br></br>
      <span>
        50 <img src={ADIcon}></img> Attack Damage
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
      <i className='yellow'>Unique Passive - Electroshock: </i>
      <span>
      When fully Energized, your next basic attack deals 90 bonus magic damage, increased to 150 
      against minions, and bounces to the closest target within 500 units, up to 6 targets.
      </span>
    </div>,
    82:
    <div>
      <b className='yellow'>Sterak's Gage</b>
      <hr></hr>
      <span>
        400 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        20% <img src={tenacityIcon}></img> Tenacity
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - The Claws that Catch: </i>
      <span>
      Gain 50% base AD as bonus attack damage.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Lifeline: </i>
      <span>
      If you would take damage that would reduce you below 30% of your maximum health, gain a shield equal 
      to 80% of bonus health that decays over 4.5 seconds, as well as 10% increased size for 8 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        60
      </span>
    </div>,
    83:
    <div>
      <b className='yellow'>Stormrazor</b>
      <hr></hr>
      <span>
        60 <img src={ADIcon}></img> Attack Damage
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
      <i className='yellow'>Unique Passive - Bolt: </i>
      <span>
      When fully Energized, your next basic attack deals 100 bonus magic damage 
      on-hit and grants you 45% bonus movement speed for 1.5 seconds.
      </span>
    </div>,
    84:
    <div>
      <b className='yellow'>Stormsurge</b>
      <hr></hr>
      <span>
        95 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        10 <img src={mPenIcon}></img> Magic Penetration
      </span>
      <br></br>
      <span>
        8% <img src={moveSpeedIcon}></img> Movement Speed
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Stormraider: </i>
      <span>
      Dealing damage to an enemy champion equal to 35% of their maximum health within 2.5 seconds 
      inflicts them with Squall and grants you 25% bonus movement speed for 2 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        30 
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Squall: </i>
      <span>
      After 2 seconds of having applied Squall, strike the target with lightning, dealing 
      (Melee 140 / Ranged 105) (+ Melee 20% / Ranged 15% AP) magic damage to them. If the target 
      dies before being struck, they emit an electric field instantly that shocks all enemy champions 
      near them, dealing them the same damage and granting you 30 gold.
      </span>
    </div>,
    85:
    <div>
      <b className='yellow'>Stridebreaker</b>
      <hr></hr>
      <span>
        50 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        30% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <br></br>
      <span>
        450 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Breaking Shockwave: </i>
      <span>
      Deal 80% AD physical damage to enemies in a 450 radius centered around you and slow them by 35% 
      for 3 seconds. For each champion hit, gain 35% bonus movement speed decaying over 3 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
      15
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Cleave: </i>
      <span>
      Basic attacks on-hit deal (Melee 40% AD / Ranged 20% AD) physical damage to 
      other enemies in a 350 radius centered around the target.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Temper: </i>
      <span>
      Dealing physical damage grants you 20 bonus movement speed for 2 seconds.
      </span>
    </div>,
    86:
    <div>
      <b className='yellow'>Sundered Sky</b>
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
        450 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Lightshield Strike: </i>
      <span>
      Your next basic attack against a champion is empowered to critically strike for 175% damage 
      and heal you for 140% base AD (+6% of your missing health). Excess healing beyond maximum 
      health is converted to bonus health for 6 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
      6 (per target)
      </span>
    </div>,
    87:
    <div>
      <b className='yellow'>Sunfire Aegis</b>
      <hr></hr>
      <span>
        500 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        50 <img src={armorIcon}></img> Armor
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Immolate: </i>
      <span>
      Taking or dealing damage activates this passive for 3 seconds. Deal 15 (+1.75% bonus health) magic 
      damage every second to enemies within 325 (+100% bonus size) units. Damage increases by 25% against 
      minions and executes minions that would be killed by one more tick of damage. Damaging enemy champions 
      or epic monsters with this effect grants a stack for 5 seconds that increases subsequent Immolate 
      damage by 10%, stacking up to 6 times.
      </span>
    </div>,
    88:
    <div>
      <b className='yellow'>Terminus</b>
      <hr></hr>
      <span>
        40 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        30% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Shadow: </i>
      <span>
      Basic attacks deal 30 bonus magic damage on-hit.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Juxtaposition: </i>
      <span>
      Basic attacks on-hit against champions alternate between Light and Dark hits, each one granting a 
      bonus for 5 seconds that stacks up to 3 times. Light hits grant 6 / 7 / 8 (based on level) bonus 
      armor and bonus magic resistance while Dark hits grant 10% armor penetration and magic penetration.
      </span>
    </div>,
    89:
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
        16 <img src={arPenIcon}></img> Lethality
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Death: </i>
      <span>
      If you deal post-mitigation damage that would leave a champion 
      below 5% of their maximum health, execute them.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Taxes: </i>
      <span>
      Killing a champion grants you an additional 25 Gold.
      </span>
    </div>,
    90:
    <div>
      <b className='yellow'>Thornmail</b>
      <hr></hr>
      <span>
        350 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        70 <img src={armorIcon}></img> Armor
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Thorns: </i>
      <span>
      When struck by a basic attack on-hit, deal 10 (+25% bonus armor) magic damage to the attacker and, 
      if they are a champion, inflict them with Grievous Wounds for 3 seconds.
      </span>
    </div>,
    91:
    <div>
      <b className='yellow'>Titanic Hydra</b>
      <hr></hr>
      <span>
        50 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        550 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Titanic Crescent: </i>
      <span>
      Empowers next basic attack within 10 seconds to deal (Melee 4% / Ranged 2%) maximum health 
      bonus physical damage to the primary target and (Melee 9% / Ranged 4.5%) maximum health 
      physical damage to secondary targets. Resets basic attack timer.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        10
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Cleave: </i>
      <span>
      Basic attacks on-hit deal (Melee 1.5% / Ranged 0.75%) maximum health bonus physical damage 
      to the target and (Melee 3% / Ranged 1.5%) maximum health physical damage to other enemies 
      in a cone in the direction of the primary target.
      </span>
    </div>,
    92:
    <div>
      <b className='yellow'>Trailblazer</b>
      <hr></hr>
      <span>
        200 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        40 <img src={armorIcon}></img> Armor
      </span>
      <br></br>
      <span>
        5% <img src={moveSpeedIcon}></img> Movement Speed
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Lead the Way: </i>
      <span>
      While moving, generate 7 stacks of Momentum every 0.25 seconds, granting up to 20 bonus movement 
      speed at 100 stacks. At maximum stacks, you leave behind a path that grants 15% of your bonus 
      movement speed to allied champions within. Basic attacks consume all stacks. If you are melee 
      and at maximum stacks, your next basic attack slows by 50% for 1 second.
      </span>
    </div>,
    93:
    <div>
      <b className='yellow'>Trinity Force</b>
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
        33% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <br></br>
      <span>
        300 <img src={healthIcon}></img> Health
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Spellblade: </i>
      <span>
      After using an ability, your next basic attack within 10 seconds 
      deals 200% base AD bonus physical damage on-hit.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        1.5
      </span>
      <i className='yellow'>Unique Passive - Quicken: </i>
      <span>
      Basic attacks on-hit grant 20 bonus movement speed for 2 seconds.
      </span>
    </div>,
    94:
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
        15 <img src={arPenIcon}></img> Lethality
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Blackout: </i>
      <span>
      When near an enemy stealthed ward or trap (400 radius), for 8 seconds disable surrounding 
      stealthed wards, as well as expose and reveal nearby stealthed wards and traps.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        50
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive: </i>
      <span>
      Your basic attacks deal (Melee 2 / Ranged 1) bonus true damage to wards.
      </span>
    </div>,
    95:
    <div>
      <b className='yellow'>Unending Despair</b>
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
        55 <img src={armorIcon}></img> Armor
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Anguish: </i>
      <span>
      Every 7 seconds in combat with champions, deal 30-50 (based on level) (+3% bonus health) magic 
      damage to enemy champions (650 range) and heal yourself for 250% of the post-mitigation damage dealt.
      </span>
    </div>,
    96:
    <div>
      <b className='yellow'>Vigilant Wardstone</b>
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
        25 <img src={armorIcon}></img> Armor
      </span>
      <br></br>
      <span>
        30 <img src={magicResIcon}></img> Magic Resistance
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
    </div>,
    97:
    <div>
      <b className='yellow'>Void Staff</b>
      <hr></hr>
      <span>
        80 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        40% <img src={mPenIcon}></img> Magic Penetration
      </span>
    </div>,
    98:
    <div>
      <b className='yellow'>Voltaic Cyclosword</b>
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
      <i className='yellow'>Unique Passive - Energized: </i>
      <span>
      Moving and basic attacking generates Energize stacks, up to 100.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Galvanize: </i>
      <span>
      Energized stack generation is increased by 75% for distance from dashes, blinks, and stealth.
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Firmament: </i>
      <span>
      When fully Energized, next basic attack deals 100 bonus physical damage 
      on-hit and slows by (Melee 99% / Ranged 20%) for 0.75 seconds.
      </span>
    </div>,
    99:
    <div>
      <b className='yellow'>Warmog's Armor</b>
      <hr></hr>
      <span>
        750 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        200% <img src={healthRegenIcon}></img> Base Health Regen.
      </span>
      <br></br>
      <span>
        5% <img src={moveSpeedIcon}></img> Movement Speed
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Warmog's Heart: </i>
      <span>
      If you have at least 1300 bonus health and have not taken damage in the last 6 seconds 
      (3 seconds for damage from non-champions), regenerate 2.5% maximum health every 0.5 seconds.
      </span>
    </div>,
    100:
    <div>
      <b className='yellow'>Winter's Approach</b>
      <hr></hr>
      <span>
        15 <img src={cdrIcon}></img> Ability Haste
      </span>
      <br></br>
      <span>
        400 <img src={healthIcon}></img> Health
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
      <i className='yellow'>Unique Passive - Manaflow: </i>
      <span>
      Grants a charge every 8 seconds, up to 4 charges. Consumes a charge on-hit and whenever 
      affecting an enemy or ally with an ability to grant 3 bonus mana, increased to 6 for 
      champion targets, up to a maximum of 360 bonus mana.
      </span>
    </div>,
    101:
    <div>
      <b className='yellow'>Wit's End</b>
      <hr></hr>
      <span>
        55% <img src={attackSpeedIcon}></img> Attack Speed
      </span>
      <br></br>
      <span>
        50 <img src={magicResIcon}></img> Magic Resistance
      </span>
      <br></br>
      <span>
        20% <img src={tenacityIcon}></img> Tenacity
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Fray: </i>
      <span>
      Basic attacks deal 15-80 (based on level) bonus magic damage on-hit.
      </span>
    </div>,
    102:
    <div>
      <b className='yellow'>Youmuu's Ghostblade</b>
      <hr></hr>
      <span>
        60 <img src={ADIcon}></img> Attack Damage
      </span>
      <br></br>
      <span>
        18 <img src={arPenIcon}></img> Lethality
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Wraith Step: </i>
      <span>
      Gain (Melee 20% / Ranged 15%) bonus movement speed and ghosting for 6 seconds.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        45
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Haunt: </i>
      <span>
      Gain (Melee 40 / Ranged 20) bonus movement speed while out-of-combat.
      </span>
    </div>,
    103:
    <div>
      <b className='yellow'>Zaz'Zak's Realmspike</b>
      <hr></hr>
      <span>
        200 <img src={healthIcon}></img> Health
      </span>
      <br></br>
      <span>
        75% <img src={healthRegenIcon}></img> Base Health Regen.
      </span>
      <br></br>
      <span>
        75% <img src={manaRegenIcon}></img> Base Mana Regen.
      </span>
      <br></br>
      <span>
        5 <img src={goldIcon} style={{width: '20px', height: '15px'}}></img> Gold per 10 seconds
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Ward: </i>
      <span>
      Place a Stealth Ward at the target location (4 charges; 600 range).
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Void Explosion: </i>
      <span>
      Dealing ability damage to an enemy champion creates an explosion at their location after a 
      0.5-second delay, dealing 10 (+20% AP) (+3% of each target's maximum health) magic damage 
      to enemies within the area, capped at 300 against monsters.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
      10
      </span>
    </div>,
    104:
    <div>
      <b className='yellow'>Zeke's Convergence</b>
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
        250 <img src={manaIcon}></img> Mana
      </span>
      <br></br>
      <span>
        30 <img src={armorIcon}></img> Armor
      </span>
      <hr></hr>
      <i className='yellow'>Unique Passive - Frostfire Tempest: </i>
      <span>
      Upon casting your ultimate ability, summon a storm around you for 5 seconds, dealing 12.5 magic 
      damage every 0.25 seconds to nearby enemies and slowing them by 30%.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        45
      </span>
    </div>,
    105:
    <div>
      <b className='yellow'>Zhonya's Hourglass</b>
      <hr></hr>
      <span>
        120 <img src={APIcon}></img> Ability Power
      </span>
      <br></br>
      <span>
        50 <img src={armorIcon}></img> Armor
      </span>
      <hr></hr>
      <i className='yellow'>Unique Active - Time Stop: </i>
      <span>
      Enter stasis for 2.5 seconds, rendering you untargetable and invulnerable for the duration but 
      also unable to move, basic attack, cast abilities, use summoner spells, or activate items.
      </span>
      <br></br>
      <i className='yellow'>Cooldown: </i>
      <span>
        120
      </span>
    </div>
  }

  onLegendClick = (event, side, legendIndex) => {
    if (this[`itemCounter${side}`] === 6) {
      return
    };
    for (i = 0; i < 6; i++) {
      if (document.querySelectorAll(`#inven${side} > img`)[i].src === blackbg) {
        var invenSlot = document.querySelectorAll(`#inven${side} > img`)[i];
        invenSlot.setAttribute('src', event.target.src);
        invenSlot.style.cursor = 'pointer';
        this[`inven${side}TT${i+1}`] = this.legendItems[legendIndex];
        break
      }
    };
    this[`itemCounter${side}`]++;

    var itemStats = this[`itemStats${side}`];
    var champStats = this[`champFile${side}`].stats;
    var itemTitle = Array.from(event.target.nextSibling.getElementsByTagName('b'))[0].textContent
    if (itemTitle.includes('Infinity Edge')) {
      this[`ieCount${side}`]++
    };
    if (itemTitle.includes('Deathcap')) {
      this[`dcapMultiplier${side}`] = 1.35
      this[`dcapCount${side}`]++;
    };
    var champLevel = this[`level${side}`] - 1;
    var champLvlRatio = champLevel * (0.7025 + 0.0175 * champLevel);
    if (itemTitle.includes('Sterak')) {
      if (this[`sterakCount${side}`] === 0) {
        this[`sterakMultiplier${side}`] = 1.5;
      };
      this[`sterakCount${side}`]++;
    };
    if (itemTitle.includes('Fimbulwinter') || itemTitle.includes(`Winter's Approach`)) {
      if (this[`winterCount${side}`] === 0) {
        this[`winterMultiplier${side}`] = 0.08;
      };
      this[`winterCount${side}`]++;
    };
    if (itemTitle.includes('Manamune') || itemTitle.includes('Muramana')) {
      if (this[`muraCount${side}`] === 0) {
        this[`mura${side}`] = 0.025;
      };
      this[`muraCount${side}`]++;
    };
    if (itemTitle.includes(`Archangel's Staff`)) {
      if (this[`archangelCount${side}`] === 0 && this[`seraphCount${side}`] === 0) {
        this[`archangel${side}`] = 0.01;
      };
      this[`archangelCount${side}`]++;
    };
    if (itemTitle.includes(`Seraph's Embrace`)) {
      if (this[`seraphCount${side}`] === 0) {
        this[`archangel${side}`] = 0.02;
      };
      this[`seraphCount${side}`]++;
    };

    var spanArray = Array.from(event.target.nextSibling.getElementsByTagName('span'));
    for (var i = 0; i < spanArray.length; i++) {
      if (i !== 0 && spanArray[i].previousSibling.tagName !== 'BR') {
        break
      };
      var spanText = spanArray[i].textContent;
      var statQuantity = +spanArray[i].textContent.replace( /[^\d].*/, '' );
      if (spanText.includes('Attack Damage')) {
        itemStats.ad += statQuantity;
        continue;
      };
      if (spanText.includes('Attack Speed')) {
        itemStats.as += statQuantity/100;
        continue;
      };
      if (spanText.includes('Critical Strike Chance')) {
        itemStats.critChance += statQuantity;
        continue;
      };
      if (spanText.includes('Ability Power')) {
        itemStats.ap += statQuantity;
        continue;
      };
      if (spanText.includes('Ability Haste')) {
        itemStats.cdr += statQuantity;
        continue;
      };
      if (spanText.includes('Health')) {
        if (!spanText.includes('Regen')) {
          itemStats.hp += statQuantity;
        } else {
          itemStats.hpRegen += statQuantity;
        }
        continue;
      };
      if (spanText.includes('Mana')) {
        if (!spanText.includes('Regen')) {
          itemStats.mana += statQuantity;
        } else {
          itemStats.manaRegen += statQuantity;
        }
        continue;
      };
      if (spanText.includes('Lethality')) {
        itemStats.lethality += statQuantity;
        continue;
      };
      if (spanText.includes('Armor')) {
        itemStats.arm += statQuantity;
        continue;
      };
      if (spanText.includes('Magic Resist')) {
        itemStats.mr += statQuantity;
        continue;
      };
      if (spanText.includes('Magic Pen')) {
        if (!spanText.includes('%')) {
          itemStats.magicPenFlat += statQuantity;
        } else {
          itemStats.magicPenRatio += statQuantity;
        }
        continue;
      };
      if (spanText.includes('Omnivamp')) {
        itemStats.omni += statQuantity/100;
        continue;
      };
      if (spanText.includes('Life')) {
        itemStats.lifeSteal += statQuantity/100;
        continue;
      };
    };

    var adaptAD = itemStats.ad + (champStats["baseDamage"]
      + champStats["damagePerLvl"] * champLvlRatio)*(this[`sterakMultiplier${side}`]-1);
    if (this[`forceType${side}`] === 'ad' && itemStats.ap*this[`dcapMultiplier${side}`] > adaptAD) {
      var adFromRunes = this[`runes${side}`].ad;
      this[`runes${side}`].ap = adFromRunes/0.6;
      this[`runes${side}`].ad = 0;
      this[`forceType${side}`] = 'ap';
    };
    if (this[`forceType${side}`] === 'ap' && adaptAD > itemStats.ap*this[`dcapMultiplier${side}`]) {
      var apFromRunes = this[`runes${side}`].ap;
      this[`runes${side}`].ad = apFromRunes*0.6;
      this[`runes${side}`].ap = 0;
      this[`forceType${side}`] = 'ad'
    };

    this.setGlobalStats(side);
    this.calculateAbility('Left');
    this.calculateAbility('Right');
  };

  onInvenClick = (event, side, i) => {
    if (event.target.src === blackbg) {
      return
    };
    this[`inven${side}TT${i}`] = <div></div>;
    this[`itemCounter${side}`]--;
    event.target.setAttribute('src', blackbg);
    event.target.style.cursor = '';

    var itemStats = this[`itemStats${side}`];
    var champStats = this[`champFile${side}`].stats;
    var champLevel = this[`level${side}`] - 1;
    var champLvlRatio = champLevel * (0.7025 + 0.0175 * champLevel);
    var itemTitle = Array.from(event.target.nextSibling.getElementsByTagName('b'))[0].textContent;
    if (itemTitle.includes('Infinity Edge')) {
      this[`ieCount${side}`]--;
    };
    if (itemTitle.includes('Deathcap')) {
      if (this[`dcapCount${side}`] === 1) {
        this[`dcapMultiplier${side}`] = 1;
      };
      this[`dcapCount${side}`]--;
    };
    if (itemTitle.includes('Sterak')) {
      if (this[`sterakCount${side}`] === 1) {
        this[`sterakMultiplier${side}`] = 1;
      };
      this[`sterakCount${side}`]--;
    };
    if (itemTitle.includes('Fimbulwinter') || itemTitle.includes(`Winter's Approach`)) {
      if (this[`winterCount${side}`] === 1) {
        this[`winterMultiplier${side}`] = 0;
      };
      this[`winterCount${side}`]--;
    };
    if (itemTitle.includes('Manamune') || itemTitle.includes('Muramana')) {
      if (this[`muraCount${side}`] === 1) {
        this[`mura${side}`] = 0;
      };
      this[`muraCount${side}`]--;
    };
    if (itemTitle.includes(`Archangel's Staff`)) {
      if (this[`archangelCount${side}`] === 1 && this[`seraphCount${side}`] === 0) {
        this[`archangel${side}`] = 0;
      };
      this[`archangelCount${side}`]--;
    };
    if (itemTitle.includes(`Seraph's Embrace`)) {
      if (this[`seraphCount${side}`] === 1) {
        if (this[`archangel${side}`] !== 0) {
          this[`archangel${side}`] = 0.01
        } else {
          this[`archangel${side}`] = 0
        }
      };
      this[`seraphCount${side}`]--;
    };

    var spanArray = Array.from(event.target.nextSibling.getElementsByTagName('span'));
    for (var i = 0; i < spanArray.length; i++) {
      if (i !== 0 && spanArray[i].previousSibling.tagName !== 'BR') {
        break
      };
      var spanText = spanArray[i].textContent;
      var statQuantity = +spanArray[i].textContent.replace( /[^\d].*/, '' );
      if (spanText.includes('Attack Damage')) {
        itemStats.ad -= statQuantity;
        continue;
      };
      if (spanText.includes('Attack Speed')) {
        itemStats.as -= statQuantity/100;
        continue;
      };
      if (spanText.includes('Critical Strike Chance')) {
        itemStats.critChance -= statQuantity;
        continue;
      };
      if (spanText.includes('Ability Power')) {
        itemStats.ap -= statQuantity;
        continue;
      };
      if (spanText.includes('Ability Haste')) {
        itemStats.cdr -= statQuantity;
        continue;
      };
      if (spanText.includes('Health')) {
        if (!spanText.includes('Regen')) {
          itemStats.hp -= statQuantity;
        } else {
          itemStats.hpRegen -= statQuantity;
        }
        continue;
      };
      if (spanText.includes('Mana')) {
        if (!spanText.includes('Regen')) {
          itemStats.mana -= statQuantity;
        } else {
          itemStats.manaRegen -= statQuantity;
        }
        continue;
      };
      if (spanText.includes('Lethality')) {
        itemStats.lethality -= statQuantity;
        continue;
      };
      if (spanText.includes('Armor')) {
        itemStats.arm -= statQuantity;
        continue;
      };
      if (spanText.includes('Magic Resist')) {
        itemStats.mr -= statQuantity;
        continue;
      };
      if (spanText.includes('Magic Pen')) {
        if (!spanText.includes('%')) {
          itemStats.magicPenFlat -= statQuantity;
        } else {
          itemStats.magicPenRatio -= statQuantity;
        }
        continue;
      };
      if (spanText.includes('Omnivamp')) {
        itemStats.omni -= statQuantity/100;
        continue;
      };
      if (spanText.includes('Life')) {
        itemStats.lifeSteal -= statQuantity/100;
        continue;
      };
    };

    var adaptAD = itemStats.ad + (champStats["baseDamage"] 
      + champStats["damagePerLvl"] * champLvlRatio)*(this[`sterakMultiplier${side}`]-1);
    if (this[`forceType${side}`] === 'ad' && itemStats.ap*this[`dcapMultiplier${side}`] > adaptAD) {
      var adFromRunes = this[`runes${side}`].ad;
      this[`runes${side}`].ap = adFromRunes/0.6;
      this[`runes${side}`].ad = 0;
      this[`forceType${side}`] = 'ap'
    };
    if (this[`forceType${side}`] === 'ap' && adaptAD > itemStats.ap*this[`dcapMultiplier${side}`]) {
      var apFromRunes = this[`runes${side}`].ap;
      this[`runes${side}`].ad = apFromRunes*0.6;
      this[`runes${side}`].ap = 0;
      this[`forceType${side}`] = 'ad'
    };

    this.setGlobalStats(side);
    this.calculateAbility('Left');
    this.calculateAbility('Right');
  };

  onItemSearch = (event, side) => {
    this.setState({[`itemDisplay${side}`]: Object.entries(this.legendItems).map((item, i) => {
      if (item[1].props.children[0].props.children.toLowerCase().includes(event.target.value.toLowerCase())){
        return (
          <span key={i} style={{display: 'inline-block'}}>
            <img className='itemIcon hoverScale' style={{border: '1px solid white'}} src={Array.from(this.itemIcons)[i]}
            onClick={(event) => this.onLegendClick(event, side, i)}></img>
            <div className='itemTooltip' style={{left: 'calc(22.5vw - 200px)', top: '195px'}}>
              {this.legendItems[i]}
            </div>
          </span>
        )
      }
    })});
  };


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

  componentDidMount() {
    function importAll(r) {
      return r.keys().map(r);
    }
    this.portraits = importAll(require.context('./portraits/', false, /\.(png|jpe?g|svg)$/));
    this.images = importAll(require.context('./spellicons/', false, /\.(png|jpe?g|svg)$/));
    this.ksIcons = importAll(require.context('./ksicons/', false, /\.(png|jpe?g|svg)$/));
    this.ksPathIcons = importAll(require.context('./kspathicons/', false, /\.(png|jpe?g|svg)$/));
    var itemObjects = ['itemStatsLeft', 'itemStatsRight'];
    var statObjects = ['totalStatsLeft', 'totalStatsRight', 'bonusStatsLeft', 'bonusStatsRight',
      'tfTotalStatsLeft', 'tfTotalStatsRight'];
    itemObjects.map(x => 
      this[x] = {
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
      }
    );
    statObjects.map(x => 
      this[x] = {
        ad: 10.8,
        as: 0,
        arm: 0, 
        mr: 0,
        hp: 65,
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
      }
    );
    this.itemIcons = importAll(require.context('./itemicons/', false, /\.(png|jpe?g|svg)$/));
    this.setState({itemDisplayLeft: Array.from(this.itemIcons).map((iconSrc, i) => {
      return (
        <span key={i} className='itt'>
          <img className='itemIcon hoverScale' style={{border: '1px solid white'}} src={iconSrc}
          onClick={(event) => this.onLegendClick(event, 'Left', i)}></img>
          <span className='itemTooltip' style={{left: 'calc(22.5vw - 200px)', top: '195px'}}>
            {this.legendItems[i]}
          </span>
        </span>
      )
    })});
    this.setState({itemDisplayRight:  Array.from(this.itemIcons).map((iconSrc, i) => {
      return (
        <span key={i} style={{display: 'inline-block'}} className='itt'>
          <img className='itemIcon hoverScale' style={{border: '1px solid white', position: 'relative'}} src={iconSrc}
          onClick={(event) => this.onLegendClick(event, 'Right', i)}></img>
          <div className='itemTooltip' style={{left: 'calc(22.5vw - 200px)', top: '195px'}}>
            {this.legendItems[i]}
          </div>
        </span>
      )
    })})
  };

  render() {
    return (
      <div style={{minHeight: '100vh', padding: '0 1vw'}}>

        <header className="navHeader">
          <h2 id='homeAbout' style={{color: 'black'}} onClick={this.homeToggle}>About</h2>
          <div className='logoDiv'>
            <img src={logo} height='80px' alt='Logo'/>
          </div>
          <h2><a href="https://na.leagueoflegends.com/en-us/news/tags/patch-notes" 
          target='_blank' tabIndex='-1'>Patch v14.6</a></h2>
        </header>

        {this.state.about ? <About /> : ''}

        <div id='homePage'>

          <div className="flexDisplay" style={{marginTop: '32px'}}>
            <div></div>

            <div style={{width: 120, display: 'inline-block', marginTop: '50px'}}>
              <input type="search" placeholder='Search Champion' onChange={(event) => this.onSearchChange(event, 'Left')}
              style={{width: 120, display: 'inline-block'}} onBlur={(event) => this.onSearchBlur(event, 'Left')}
              tabIndex='0' onKeyDown={(event) => this.downArrow(event, 'Left')} />
              <ChampDropDownLeft filteredChamps={ `${this.state.filteredChampsLeft}` } onChampClick={this.onChampClick}
              onLiKeyDown={(event) => this.liKeyPress(event, 'Left')} onLiBlur={(event) => this.onLiBlur(event, 'Left')}/>
            </div>
            <div>
              <b style={{fontSize: '20px', display: 'block', textAlign: 'center'}}>{this.state.champNameLeft}</b>
              <img id='champIconLeft' src={ defaultChampIcon } height="120px" width="120px"
              alt='Champion Icon' style={{position: 'relative', border: '1px solid #ffffb9'}} />
            </div>

            <div></div><div></div>

            <img src={versus} alt='Versus Icon' height="64px" width="64px" style={{alignSelf: 'center'}} />

            <div></div><div></div>

            <div>
              <b style={{fontSize: '20px', display: 'block', textAlign: 'center'}}>{this.state.champNameRight}</b>
              <img id='champIconRight' src={ defaultChampIcon } height="120px" width="120px"
              alt='Champion Icon' style={{position: 'relative', border: '1px solid #ffffb9'}}/>
            </div>
            <div style={{width: 120, display: 'inline-block', marginTop: '50px'}}>
              <input type="search" placeholder='Search Champion' onChange={(event) => this.onSearchChange(event, 'Right')} tabIndex='0'
              style={{width: 120, display: 'inline-block'}} onBlur={(event) => this.onSearchBlur(event, 'Right')}
              onKeyDown={(event) => this.downArrow(event, 'Right')} />
              <ChampDropDownRight filteredChamps2={ `${this.state.filteredChampsRight}` } onChampClick={this.onChampClick}
              onLiKeyDown={(event) => this.liKeyPress(event, 'Right')} onLiBlur={(event) => this.onLiBlur(event, 'Right')}/>
            </div>
            
            <div></div>
          </div>

          <div style={{marginTop: '64px'}}></div>

          <div className='flexDisplay' id='runeContainer'>
            <div style={{width: '45vw'}} className='flexDisplay'>
              <div id='ksPathLeft'>
                <img className='precision' src={this.ksPathIcons[0]}
                style={{border: '1px solid rgb(255, 225, 82)', padding: '2px'}}
                onClick={() => this.ksPathChange('Left', 0)}></img>
                <img className='domination' src={this.ksPathIcons[1]}
                onClick={() => this.ksPathChange('Left', 1)}></img>
                <img className='sorcery' src={this.ksPathIcons[2]}
                onClick={() => this.ksPathChange('Left', 2)}></img>
                <img className='resolve' src={this.ksPathIcons[3]}
                onClick={() => this.ksPathChange('Left', 3)}></img>
                <img className='inspiration' src={this.ksPathIcons[4]}
                onClick={() => this.ksPathChange('Left', 4)}></img>
              </div>

              <div id='ksContainerLeft'>
                <div>
                  <img className='precision' src={`${this.ksIcons[0]}`} onClick={() => this.pressTheAttack('Left')}
                  style={{boxShadow: '0px 0px 5px rgb(255, 225, 82) inset'}} />
                  <img className='precision' src={`${this.ksIcons[1]}`} onClick={() => this.lethalTempo('Left')} />
                  <img className='precision' src={`${this.ksIcons[2]}`} onClick={() => this.fleetFootwork('Left')} />
                  <img className='precision' src={`${this.ksIcons[3]}`} onClick={() => this.conqueror('Left')} />
                </div>

                <div style={{display: 'none'}}>
                  <img className='domination' src={`${this.ksIcons[4]}`} onClick={() => this.electrocute('Left')} />
                  <img className='domination' src={`${this.ksIcons[5]}`} onClick={() => this.predator('Left')} />
                  <img className='domination' src={`${this.ksIcons[6]}`} onClick={() => this.darkHarvest('Left')} />
                  <img className='domination' src={`${this.ksIcons[7]}`} onClick={() => this.hailOfBlades('Left')} />
                </div>

                <div style={{display: 'none'}}>
                  <img className='sorcery' src={`${this.ksIcons[8]}`} onClick={() => this.summonAery('Left')} />
                  <img className='sorcery' src={`${this.ksIcons[9]}`} onClick={() => this.arcaneComet('Left')} />
                </div>

                <div style={{display: 'none'}}>
                  <img className='resolve' src={`${this.ksIcons[11]}`} onClick={() => this.grasp('Left')} />
                  <img className='resolve' src={`${this.ksIcons[12]}`} onClick={() => this.aftershock('Left')} />
                  <img className='resolve' src={`${this.ksIcons[13]}`} onClick={() => this.guardian('Left')} />
                </div>

                <div style={{display: 'none'}}>
                  <img className='inspiration' src={`${this.ksIcons[14]}`} 
                  onClick={() => this.glacialAugment('Left')}></img>
                  <img className='inspiration' src={`${this.ksIcons[16]}`}
                  onClick={() => this.firstStrike('Left')}></img>
                </div>
              </div>

              <div></div>
              <div></div>
            </div>

            <div style={{width: '45vw'}} className='flexDisplay'>
              <div id='ksPathRight'>
                <img className='precision' src={this.ksPathIcons[0]} 
                style={{border: '1px solid rgb(255, 225, 82)', padding: '2px'}}
                onClick={() => this.ksPathChange('Right', 0)}></img>
                <img className='domination' src={this.ksPathIcons[1]}
                onClick={() => this.ksPathChange('Right', 1)}></img>
                <img className='sorcery' src={this.ksPathIcons[2]}
                onClick={() => this.ksPathChange('Right', 2)}></img>
                <img className='resolve' src={this.ksPathIcons[3]}
                onClick={() => this.ksPathChange('Right', 3)}></img>
                <img className='inspiration' src={this.ksPathIcons[4]}
                onClick={() => this.ksPathChange('Right', 4)}></img>
              </div>

              <div id='ksContainerRight'>
                <div>
                  <img className='precision' src={`${this.ksIcons[0]}`} onClick={() => this.pressTheAttack('Right')}
                  style={{boxShadow: '0px 0px 5px rgb(255, 225, 82) inset'}} />
                  <img className='precision' src={`${this.ksIcons[1]}`} onClick={() => this.lethalTempo('Right')} />
                  <img className='precision' src={`${this.ksIcons[2]}`} onClick={() => this.fleetFootwork('Right')} />
                  <img className='precision' src={`${this.ksIcons[3]}`} onClick={() => this.conqueror('Right')} />
                </div>
              
                <div style={{display: 'none'}}>
                  <img className='domination' src={`${this.ksIcons[4]}`} onClick={() => this.electrocute('Right')} />
                  <img className='domination' src={`${this.ksIcons[5]}`} onClick={() => this.predator('Right')} />
                  <img className='domination' src={`${this.ksIcons[6]}`} onClick={() => this.darkHarvest('Right')} />
                  <img className='domination' src={`${this.ksIcons[7]}`} onClick={() => this.hailOfBlades('Right')} />
                </div>
              
                <div style={{display: 'none'}}>
                  <img className='sorcery' src={`${this.ksIcons[8]}`} onClick={() => this.summonAery('Right')} />
                  <img className='sorcery' src={`${this.ksIcons[9]}`} onClick={() => this.arcaneComet('Right')} />
                </div>
              
                <div style={{display: 'none'}}>
                  <img className='resolve' src={`${this.ksIcons[11]}`} onClick={() => this.grasp('Right')} />
                  <img className='resolve' src={`${this.ksIcons[12]}`} onClick={() => this.aftershock('Right')} />
                  <img className='resolve' src={`${this.ksIcons[13]}`} onClick={() => this.guardian('Right')} />
                </div>

                <div style={{display: 'none'}}>
                  <img className='inspiration' src={`${this.ksIcons[14]}`}
                  onClick={() => this.glacialAugment('Right')}></img>
                  <img className='inspiration' src={`${this.ksIcons[16]}`}
                  onClick={() => this.firstStrike('Right')}></img>
                </div>
              </div>

              <div></div>
              <div></div>
            </div>
          </div>

          <div id='runesContainer' className='flexDisplay'>      
            <div className='ksStats' id='ksStatsLeft'>
              <div className='shardBox' style={{float: 'right'}}>
                <div id='shardRow0Left'>
                  <img src={forceIcon} alt='Adaptive Force Icon' onClick={() => this.onRuneChange(0, 0, 'Left')}
                    style={{border: '2px solid #ffcb5a', margin: '1px'}} />
                  <img src={attackSpeedIcon} alt='Attack Speed Icon' onClick={() => this.onRuneChange(0, 1, 'Left')}/>
                  <img src={cdrIcon} alt='Ability Haste Icon' onClick={() => this.onRuneChange(0, 2, 'Left')}/>
                </div>
                
                <div id='shardRow1Left'>
                  <img src={forceIcon} alt='Adaptive Force Icon' onClick={() => this.onRuneChange(1, 0, 'Left')}
                    style={{border: '2px solid #ffcb5a', margin: '1px'}} />
                  <img src={moveSpeedIcon} alt='Movement Speed Icon' onClick={() => this.onRuneChange(1, 1, 'Left')} />
                  <img src={healthIcon} alt='Scaling Health Icon' onClick={() => this.onRuneChange(1, 2, 'Left')} />
                </div>
                
                <div id='shardRow2Left'>
                  <img src={healthIcon} alt='Health Icon' onClick={() => this.onRuneChange(2, 0, 'Left')}
                    style={{border: '2px solid #ffcb5a', margin: '1px'}} />
                  <img src={tenacitySlowResIcon} alt='Tenacity Slow Res Icon' onClick={() => this.onRuneChange(2, 1, 'Left')}/>
                  <img src={healthIcon} alt='Scaling Health Icon' onClick={() => this.onRuneChange(2, 2, 'Left')} />
                </div>
              </div>
              <div style={{textAlign: 'center', marginBottom: '16px'}}>
                <img src={this.ksIcons[this.state.keystoneIDLeft.index]}
                style={{marginRight: '5px'}}></img>
                <b id='ksTitleLeft' style={{fontSize: '18px', verticalAlign: 'top'}}>
                  {this.state.keystoneIDLeft.title}</b>
              </div>
              {this.state.keystoneIDLeft.typeIcon === '' ? '' : 
              <img src={this.state.keystoneIDLeft.typeIcon}></img>}
              <span style={{color: '#ffffb9'}}> 
              {this.state.keystoneIDLeft.type}: </span>{this.state.keystoneLeft}
              <br></br>
              {this.state.ksArrayLeft === '' ? '' :
              this.state.keystoneIDLeft.index !== 7 ? <span style={{color: '#f9b54a'}}>Current Value: </span> : ''}
              {
                this.state.ksArrayLeft === '' ? '' : 
                (!this.state.ksAPRatioLeft && !this.state.ksBonusADRatioLeft 
                  && !this.state.ksHPRatioLeft && !this.state.ksBonusHPRatioLeft)
                ? this.state.ksArrayLeft[this.levelLeft - 1]
                : Math.round(this.state.ksArrayLeft[this.levelLeft - 1] + (this.state.ksAPRatioLeft
                  * this.totalStatsLeft.ap + this.state.ksBonusADRatioLeft * this.bonusStatsLeft.ad
                  + this.state.ksHPRatioLeft * this.totalStatsLeft.hp
                  + this.state.ksBonusHPRatioLeft * this.bonusStatsLeft.hp))
              }
              <div style={{display: this.state.ksPart2DisplayLeft}}>
                <br></br>
                {this.state.ksPart2Left.typeIcon === '' ? '' : <img src={this.state.ksPart2Left.typeIcon}></img>}
                {this.state.ksPart2Left.type !== 'Bonus Armor and Magic Resistance'
                ? '': <img src={magicResIcon}></img>}
                <span style={{color: '#ffffb9'}}>
                  {this.state.ksPart2Left.type}: </span>{this.state.ksPart2Left.text}
                <br></br>
                {this.state.ksPart2Left.array === '' ? '' :
                this.state.keystoneIDLeft.index !== 12 ? <span style={{color: '#f9b54a'}}>Current Value: </span>
                : <span style={{color: '#f9b54a'}}>Current Cap: </span>}
                {this.state.ksPart2Left.array === '' ? '' : (this.state.ksPart2Left.APRatio 
                || this.state.ksPart2Left.bonusADRatio || this.state.ksPart2Left.HPRatio)
                ? Math.round(this.state.ksPart2Left.array[this.levelLeft - 1]
                + (this.state.ksPart2Left.APRatio * this.totalStatsLeft.ap
                + this.state.ksPart2Left.bonusADRatio * this.bonusStatsLeft.ad
                + this.totalStatsLeft.hp * this.state.ksPart2Left.HPRatio))
                : this.state.ksPart2Left.array[this.levelLeft - 1] }
              </div>
              {this.state.ksCDLeft === '' ? '' :
                <div>
                <br></br>
                <img src={cdrIcon}></img><span style={{color: 'lightpink'}}>
                  Cooldown: </span>{this.state.ksCDLeft[this.levelLeft - 1]}{this.state.ksCDTextLeft}
              </div>}
            </div>

            <div className='ksStats' id='ksStatsRight'>
              <div className='shardBox' style={{float: 'right'}}>
                <div id='shardRow0Right'>
                  <img src={forceIcon} alt='Adaptive Force Icon' onClick={() => this.onRuneChange(0, 0, 'Right')}
                    style={{border: '2px solid #ffcb5a', margin: '1px'}} />
                  <img src={attackSpeedIcon} alt='Attack Speed Icon' onClick={() => this.onRuneChange(0, 1, 'Right')}/>
                  <img src={cdrIcon} alt='Ability Haste Icon' onClick={() => this.onRuneChange(0, 2, 'Right')}/>
                </div>
                
                <div id='shardRow1Right'>
                  <img src={forceIcon} alt='Adaptive Force Icon' onClick={() => this.onRuneChange(1, 0, 'Right')}
                    style={{border: '2px solid #ffcb5a', margin: '1px'}} />
                  <img src={moveSpeedIcon} alt='Movement Speed Icon' onClick={() => this.onRuneChange(1, 1, 'Right')} />
                  <img src={healthIcon} alt='Scaling Health Icon' onClick={() => this.onRuneChange(1, 2, 'Right')} />
                </div>
                
                <div id='shardRow2Right'>
                  <img src={healthIcon} alt='Health Icon' onClick={() => this.onRuneChange(2, 0, 'Right')}
                    style={{border: '2px solid #ffcb5a', margin: '1px'}} />
                  <img src={tenacitySlowResIcon} alt='Tenacity Slow Res Icon' onClick={() => this.onRuneChange(2, 1, 'Right')}/>
                  <img src={healthIcon} alt='Scaling Health Icon' onClick={() => this.onRuneChange(2, 2, 'Right')} />
                </div>
              </div>
              <div style={{textAlign: 'center', marginBottom: '16px'}}>
                <img src={this.ksIcons[this.state.keystoneIDRight.index]}
                style={{marginRight: '5px'}}></img>
                <b id='ksTitleRight' style={{fontSize: '18px', verticalAlign: 'top'}}>
                  {this.state.keystoneIDRight.title}</b>
              </div>
              {this.state.keystoneIDRight.typeIcon === '' ? '' :
              <img src={this.state.keystoneIDRight.typeIcon}></img>}
              <span style={{color: '#ffffb9'}}>
                {this.state.keystoneIDRight.type}: </span>{this.state.keystoneRight}
              <br></br>
              {this.state.ksArrayRight === '' ? '' :
              this.state.keystoneIDRight.index !== 7 ? <span style={{color: '#f9b54a'}}>Current Value: </span> : ''}
              {
                this.state.ksArrayRight === '' ? '' :
                (!this.state.ksAPRatioRight && !this.state.ksBonusADRatioRight 
                  && !this.state.ksHPRatioRight && !this.state.ksBonusHPRatioRight)
                 ? this.state.ksArrayRight[this.levelRight - 1]
                : Math.round(this.state.ksArrayRight[this.levelRight - 1] + (this.state.ksAPRatioRight
                * this.totalStatsRight.ap + this.state.ksBonusADRatioRight * this.bonusStatsRight.ad
                + this.state.ksHPRatioRight * this.totalStatsRight.hp
                + this.state.ksBonusHPRatioRight * this.bonusStatsRight.hp))
              }
              <div style={{display: this.state.ksPart2DisplayRight}}>
                <br></br>
                {this.state.ksPart2Right.typeIcon === '' ? '' : <img src={this.state.ksPart2Right.typeIcon}></img>}
                {this.state.ksPart2Right.type !== 'Bonus Armor and Magic Resistance'
                ? '': <img src={magicResIcon}></img>}
                <span style={{color: '#ffffb9'}}>
                  {this.state.ksPart2Right.type}: </span>{this.state.ksPart2Right.text}
                <br></br>
                {this.state.ksPart2Right.array === '' ? '' : 
                this.state.keystoneIDRight.index !== 12 ? <span style={{color: '#f9b54a'}}>Current Value: </span>
                : <span style={{color: '#f9b54a'}}>Current Cap: </span>}
                {this.state.ksPart2Right.array === '' ? '' : 
                (this.state.ksPart2Right.APRatio || this.state.ksPart2Right.bonusADRatio 
                  || this.state.ksPart2Right.HPRatio)
                ? Math.round(this.state.ksPart2Right.array[this.levelRight - 1]
                + (this.state.ksPart2Right.APRatio * this.totalStatsRight.ap
                + this.state.ksPart2Right.bonusADRatio * this.bonusStatsRight.ad
                + this.totalStatsRight.hp * this.state.ksPart2Right.HPRatio))
                : this.state.ksPart2Right.array[this.levelRight - 1] }
              </div>
              {this.state.ksCDRight === '' ? '' :
                <div>
                <br></br>
                <img src={cdrIcon}></img><span style={{color: 'lightpink'}}>
                  Cooldown: </span>{this.state.ksCDRight[this.levelRight - 1]}{this.state.ksCDTextRight}
              </div>}
            </div>

          </div>

          <div style={{marginTop: '64px'}}></div>

          <div className='flexDisplay'>
            <div style={{width: '45vw', display: 'flex', justifyContent: 'center'}}>
              <div>
                <input type="search"  placeholder='Search Item' onChange={(event) => this.onItemSearch(event, 'Left')}
                  onBlur={this.onItemBlur} id='itemSearchLeft' style={{margin: '40px 20px 0 0', width: '120px'}}/>
              </div>
              <div className='inventory' id='invenLeft'>
                <img src={blackbg}  onClick={(event) => this.onInvenClick(event, 'Left', 1)}></img>
                <div className='itemTooltip' style={{left: '-120px'}}>
                  {this.invenLeftTT1}
                </div>
                <img src={blackbg} onClick={(event) => this.onInvenClick(event, 'Left', 2)}></img>
                <div className='itemTooltip' style={{left: '-120px'}}>
                  {this.invenLeftTT2}
                </div>
                <img src={blackbg} onClick={(event) => this.onInvenClick(event, 'Left', 3)}></img>
                <div className='itemTooltip' style={{left: '-120px'}}>
                  {this.invenLeftTT3}
                </div>
                <br></br>
                <img src={blackbg} onClick={(event) => this.onInvenClick(event, 'Left', 4)}></img>
                <div className='itemTooltip' style={{left: '-120px'}}>
                  {this.invenLeftTT4}
                </div>
                <img src={blackbg} onClick={(event) => this.onInvenClick(event, 'Left', 5)}></img>
                <div className='itemTooltip' style={{left: '-120px'}}>
                  {this.invenLeftTT5}
                </div>
                <img src={blackbg} onClick={(event) => this.onInvenClick(event, 'Left', 6)}></img>
                <div className='itemTooltip' style={{left: '-120px'}}>
                  {this.invenLeftTT6}
                </div>
              </div>
            </div>
                
            <div style={{width: '45vw', display: 'flex', justifyContent: 'center'}}>
              <div className='inventory' id='invenRight'>
                <img src={blackbg} onClick={(event) => this.onInvenClick(event, 'Right', 1)}></img>
                <div className='itemTooltip' style={{left: '-200px'}}>
                  {this.invenRightTT1}
                </div>
                <img src={blackbg} onClick={(event) => this.onInvenClick(event, 'Right', 2)}></img>
                <div className='itemTooltip' style={{left: '-200px'}}>
                  {this.invenRightTT2}
                </div>
                <img src={blackbg} onClick={(event) => this.onInvenClick(event, 'Right', 3)}></img>
                <div className='itemTooltip' style={{left: '-200px'}}>
                  {this.invenRightTT3}
                </div>
                <br></br>
                <img src={blackbg} onClick={(event) => this.onInvenClick(event, 'Right', 4)}></img>
                <div className='itemTooltip' style={{left: '-200px'}}>
                  {this.invenRightTT4}
                </div>
                <img src={blackbg} onClick={(event) => this.onInvenClick(event, 'Right', 5)}></img>
                <div className='itemTooltip' style={{left: '-200px'}}>
                  {this.invenRightTT5}
                </div>
                <img src={blackbg} onClick={(event) => this.onInvenClick(event, 'Right', 6)}></img>
                <div className='itemTooltip' style={{left: '-200px'}}>
                  {this.invenRightTT6}
                </div>
              </div>
              <div>
                <input type="search" placeholder='Search Item' onChange={(event) => this.onItemSearch(event, 'Right')}
                onBlur={this.onItemBlur} id='itemSearchRight' style={{margin: '40px 0 0 20px', width: '120px'}} />
              </div>
            </div>

          </div>

          <div style={{marginTop: '8px'}}></div>

          <div id='itemContainer' className="flexDisplay">
            <div id='itemsLeft' style={{position: 'relative'}}>
              <div className='itemDisplay'>
                <div style={{display: 'inline',textWrap: 'balance'}}>
                  {this.state.itemDisplayLeft}
                </div>
              </div>
            </div> 

            <div id='itemsRight' style={{position: 'relative'}}>
              <div className='itemDisplay'>
                <div style={{display: 'inline',textWrap: 'balance'}}>
                  {this.state.itemDisplayRight}
                </div>
              </div>
            </div>
          </div>

          <div className='flexDisplay' style={{marginTop: '64px', marginBottom: '8px'}}>
            <div className="hiddenLeft" style={{width: '45vw', textAlign: 'center'}}>
              <span>Level: </span>
              <input id="levelBoxLeft" type="number" min="1" max="18" style={{width: "50px", marginRight: '12px'}}
              onKeyDown={this.preventKeyPress} onChange={this.onLevelChange}/>
              <span><b>{this.state.champNameLeft} Stats</b></span>
            </div>

            <div className="hiddenRight" style={{width: '45vw', textAlign: 'center'}}>
              <span>Level: </span>
              <input id="levelBoxRight" type="number" min="1" max="18" style={{width: "50px", marginRight: '12px'}}
              onKeyDown={this.preventKeyPress} onChange={this.onLevelChange}/>
              <span><b>{this.state.champNameRight} Stats</b></span>
            </div>
          </div>

          <div className="flexDisplay">
            <div className="statsBox">
              <div>
                <img src={healthIcon}  alt='Health Icon'/>
                <span>Health: </span>{Math.round(this.state.totalStatsLeft.hp)}<br />
                <img src={healthRegenIcon} alt='Health Regen Icon'/>
                <span>Health per 5: </span>{this.state.champNameLeft ? this.state.totalStatsLeft.hpRegen.toFixed(1)
                : this.bonusStatsLeft.hpRegen + '%'}<br />
                <img src={armorIcon} alt='Armor Icon'/>
                <span>Armor: </span>{Math.round(this.state.totalStatsLeft.arm)}<br />
                <img src={magicResIcon} alt='Magic Resist Icon'/>
                <span>Magic Resist: </span>{Math.round(this.state.totalStatsLeft.mr)}<br />
              </div>
              <div>
                <img src={ADIcon} alt='Attack Damage Icon'/>
                <span>Attack Damage: </span>{Math.round(this.state.totalStatsLeft.ad)}<br />
                <img src={attackSpeedIcon} alt='Attack Speed Icon'/>
                <span>Attack Speed: </span>{this.state.champNameLeft ? this.state.totalStatsLeft.as.toFixed(3)
                : this.bonusStatsLeft.as.toFixed(3)}<br />
                <img src={critChanceIcon} alt='Crit Chance Icon'/>
                <span>Crit Chance: </span>{Math.round(this.state.totalStatsLeft.critChance)}%<br />
              </div>
              <div>
                <img src={APIcon} alt='Ability Power Icon'/>
                <span>Ability Power: </span>{Math.round(this.state.totalStatsLeft.ap)}<br />
                <img src={cdrIcon} alt='Cooldown Reduction Icon'/>
                <span>Ability Haste: </span>{Math.round(this.state.totalStatsLeft.cdr)} / {
                Math.round(100*(this.state.totalStatsLeft.cdr/(100 + this.state.totalStatsLeft.cdr)))}%<br />
                <img src={manaIcon} alt='Mana Icon'/>
                <span>Mana: </span>{Math.round(this.state.totalStatsLeft.mana)}<br />
                <img src={manaRegenIcon} alt='Mana Regen Icon'/>
                <span>Mana per 5: </span>{this.state.champNameLeft ? this.state.totalStatsLeft.manaRegen.toFixed(1)
                : this.bonusStatsLeft.manaRegen + '%'}
              </div>
            </div>
            <div className="statsBox">
              <div>
                <img src={healthIcon} alt='Health Icon'/>
                <span>Health: </span>{Math.round(this.state.totalStatsRight.hp)}<br />
                <img src={healthRegenIcon} alt='Health Regen Icon'/>
                <span>Health per 5: </span>{this.state.champNameRight ? this.state.totalStatsRight.hpRegen.toFixed(1)
                : this.bonusStatsRight.hpRegen + '%'}<br />
                <img src={armorIcon} alt='Armor Icon'/>
                <span>Armor: </span>{Math.round(this.state.totalStatsRight.arm)}<br />
                <img src={magicResIcon} alt='Magic Resist Icon'/>
                <span>Magic Resist: </span>{Math.round(this.state.totalStatsRight.mr)}<br />
              </div>
              <div>
                <img src={ADIcon} alt='Attack Damage Icon'/>
                <span>Attack Damage: </span>{Math.round(this.state.totalStatsRight.ad)}<br />
                <img src={attackSpeedIcon} alt='Attack Speed Icon'/>
                <span>Attack Speed: </span>{this.state.champNameRight ? this.state.totalStatsRight.as.toFixed(3)
                : this.bonusStatsRight.as.toFixed(3)}<br />
                <img src={critChanceIcon} alt='Crit Chance Icon'/>
                <span>Crit Chance: </span>{Math.round(this.state.totalStatsRight.critChance)}%<br />
              </div>
              <div>
                <img src={APIcon} alt='Ability Power Icon'/>
                <span>Ability Power: </span>{Math.round(this.state.totalStatsRight.ap)}<br />
                <img src={cdrIcon} alt='Cooldown Reduction Icon'/>
                <span>Ability Haste: </span>{Math.round(this.state.totalStatsRight.cdr)} / {Math.round
                (100*(this.state.totalStatsRight.cdr/(100 + this.state.totalStatsRight.cdr)))}%<br />
                <img src={manaIcon} alt='Mana Icon'/>
                <span>Mana: </span>{Math.round(this.state.totalStatsRight.mana)}<br />
                <img src={manaRegenIcon} alt='Mana Regen Icon'/>
                <span>Mana per 5: </span>{this.state.champNameRight ? this.state.totalStatsRight.manaRegen.toFixed(1)
                : this.bonusStatsRight.manaRegen + '%'}
              </div>
            </div>
          </div>
          <div id='transform'>
            <div className="flexDisplay" style={{marginBottom: '4px'}}>
              <span className="transformLeft" style={{width: '45vw', textAlign: 'center'}}>
                <b>{this.tfChampPair[this.state.champNameLeft]} Stats</b>
              </span>
              <span className="transformRight" style={{width: '45vw', textAlign: 'center'}}>
                <b>{this.tfChampPair[this.state.champNameRight]} Stats</b>
              </span>
            </div>

            <div className="flexDisplay">
              <div className="statsBox transformLeft">
                <div>
                  <img src={healthIcon} alt='Health Icon'/>
                  <span>Health: </span>{Math.round(this.state.tfTotalStatsLeft.hp)}<br />
                  <img src={healthRegenIcon} alt='Health Regen Icon'/>
                  <span>Health per 5: </span>{this.state.tfTotalStatsLeft.hpRegen.toFixed(1)}<br />
                  <img src={armorIcon} alt='Armor Icon'/>
                  <span>Armor: </span>{Math.round(this.state.tfTotalStatsLeft.arm)}<br />
                  <img src={magicResIcon} alt='Magic Resist Icon'/>
                  <span>Magic Resist: </span>{Math.round(this.state.tfTotalStatsLeft.mr)}<br />
                </div>
                <div>
                  <img src={ADIcon} alt='Attack Damage Icon'/>
                  <span>Attack Damage: </span>{Math.round(this.state.tfTotalStatsLeft.ad)}<br />
                  <img src={attackSpeedIcon} alt='Attack Speed Icon'/>
                  <span>Attack Speed: </span>{this.state.tfTotalStatsLeft.as.toFixed(3)}<br />
                  <img src={critChanceIcon} alt='Crit Chance Icon'/>
                  <span>Crit Chance: </span>{Math.round(this.state.tfTotalStatsLeft.critChance)}%<br />
                </div>
                <div>
                  <img src={APIcon} alt='Ability Power Icon'/>
                  <span>Ability Power: </span>{Math.round(this.state.tfTotalStatsLeft.ap)}<br />
                  <img src={cdrIcon} alt='Cooldown Reduction Icon'/>
                  <span>Ability Haste: </span>{Math.round(this.state.tfTotalStatsLeft.cdr)} / {
                  Math.round(100*(this.state.tfTotalStatsLeft.cdr/(100 + this.state.tfTotalStatsLeft.cdr)))}%<br />
                  <img src={manaIcon} alt='Mana Icon'/>
                  <span>Mana: </span>{Math.round(this.state.tfTotalStatsLeft.mana)}<br />
                  <img src={manaRegenIcon} alt='Mana Regen Icon'/>
                  <span>Mana per 5: </span>{this.state.tfTotalStatsLeft.manaRegen.toFixed(1)}<br />
                </div> 
              </div>

              <div className="statsBox transformRight">
                <div>
                  <img src={healthIcon} alt='Health Icon'/>
                  <span>Health: </span>{Math.round(this.state.tfTotalStatsRight.hp)}<br />
                  <img src={healthRegenIcon} alt='Health Regen Icon'/>
                  <span>Health per 5: </span>{this.state.tfTotalStatsRight.hpRegen.toFixed(1)}<br />
                  <img src={armorIcon} alt='Armor Icon'/>
                  <span>Armor: </span>{Math.round(this.state.tfTotalStatsRight.arm)}<br />
                  <img src={magicResIcon} alt='Magic Resist Icon'/>
                  <span>Magic Resist: </span>{Math.round(this.state.tfTotalStatsRight.mr)}<br />
                </div>
                <div>
                  <img src={ADIcon} alt='Attack Damage Icon'/>
                  <span>Attack Damage: </span>{Math.round(this.state.tfTotalStatsRight.ad)}<br />
                  <img src={attackSpeedIcon} alt='Attack Speed Icon'/>
                  <span>Attack Speed: </span>{this.state.tfTotalStatsRight.as.toFixed(3)}<br />
                  <img src={critChanceIcon} alt='Crit Chance Icon'/>
                  <span>Crit Chance: </span>{Math.round(this.state.tfTotalStatsRight.critChance)}%<br />
                </div>
                <div>
                  <img src={APIcon} alt='Ability Power Icon'/>
                  <span>Ability Power: </span>{Math.round(this.state.tfTotalStatsRight.ap)}<br />
                  <img src={cdrIcon} alt='Cooldown Reduction Icon'/>
                  <span>Ability Haste: </span>{Math.round(this.state.tfTotalStatsRight.cdr)} / {
                  Math.round(100*(this.state.tfTotalStatsRight.cdr/(100 + this.state.tfTotalStatsRight.cdr)))}%<br />
                  <img src={manaIcon} alt='Mana Icon'/>
                  <span>Mana: </span>{Math.round(this.state.tfTotalStatsRight.mana)}<br />
                  <img src={manaRegenIcon} alt='Mana Regen Icon'/>
                  <span>Mana per 5: </span>{this.state.tfTotalStatsRight.manaRegen.toFixed(1)}<br />
                </div>
              </div>

            </div>
          </div>

          <div className="flexDisplay" style={{marginTop: '32px'}}>
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
                
              </div>
              <div className="hiddenLeft abilityBoxLeft">
                <div style={{textAlign: 'center', marginTop: '-5px'}} id='passiveLeftApplied'>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Left', 'passive')}>
                    Apply Minimum Stats</button>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Left', 'passive')}>
                    Apply Stats </button>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Left', 'passive')}>
                    Apply Maximum Stats</button>
                </div>
              </div>

              <div className="hiddenLeft abilityTitleBox" style={{paddingTop: '5px'}}>
                <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                  <p style={{margin: 0}}><b><u>Q</u></b> - rank: </p>
                  <input id="QRankLeft" type="number" placeholder="0" min="0" max="5"
                  style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
                </div>
                <div className="spriteContainer">
                  <img className='qMargin' src={ this.images[`${this.state.champIndexLeft}`] } alt='Ability icon'/>
                </div>
              </div>
              <div className="hiddenLeft abilityBoxLeft">
                <div style={{textAlign: 'center', marginTop: '-5px'}} id='QLeftApplied'>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Left', 'Q')}>
                    Apply Minimum Stats</button>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Left', 'Q')}>
                    Apply Stats </button>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Left', 'Q')}>
                    Apply Maximum Stats</button>
                </div>
              </div>

              <div className="hiddenLeft abilityTitleBox" style={{paddingTop: '5px'}}>
                <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                  <p style={{margin: 0}}><b><u>W</u></b> - rank: </p>
                  <input id="WRankLeft" type="number" placeholder="0" min="0" max="5"
                  style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
                </div>
                <div className="spriteContainer">
                  <img className='wMargin' src={ this.images[`${this.state.champIndexLeft}`] } alt='Ability icon'/>
                </div>
              </div>
              <div className="hiddenLeft abilityBoxLeft">
                <div style={{textAlign: 'center', marginTop: '-5px'}} id='WLeftApplied'>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Left', 'W')}>
                    Apply Minimum Stats</button>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Left', 'W')}>
                    Apply Stats </button>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Left', 'W')}>
                    Apply Maximum Stats</button>
                </div>
              </div>

              <div className="hiddenLeft abilityTitleBox" style={{paddingTop: '5px'}}>
                <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                  <p style={{margin: 0}}><b><u>E</u></b> - rank: </p>
                  <input id="ERankLeft" type="number" placeholder="0" min="0" max="5"
                  style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
                </div>
                <div className="spriteContainer">
                  <img className='eMargin' src={ this.images[`${this.state.champIndexLeft}`] } alt='Ability icon'/>
                </div>
              </div>
              <div className="hiddenLeft abilityBoxLeft">
                <div style={{textAlign: 'center', marginTop: '-5px'}} id='ELeftApplied'>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Left', 'E')}>
                    Apply Minimum Stats</button>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Left', 'E')}>
                    Apply Stats </button>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Left', 'E')}>
                    Apply Maximum Stats</button>
                </div>
              </div>

              <div className="hiddenLeft abilityTitleBox" style={{paddingTop: '5px'}}>
                <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                  <p style={{margin: 0}}><b><u>R</u></b> - rank: </p>
                  <input id="RRankLeft" type="number" placeholder="0" min="0" max="3"
                  style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
                </div>
                <div className="spriteContainer">
                  <img className='rMargin' src={ this.images[`${this.state.champIndexLeft}`] } alt='Ability icon'/>
                </div>
              </div>
              <div className="hiddenLeft abilityBoxLeft" style={{marginBottom: '50px'}}>
                <div style={{textAlign: 'center', marginTop: '-5px'}} id='RLeftApplied'>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Left', 'R')}>
                    Apply Minimum Stats</button>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Left', 'R')}>
                    Apply Stats </button>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Left', 'R')}>
                    Apply Maximum Stats</button>
                </div>
              </div>
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
              </div>
              <div className="hiddenRight abilityBoxRight">
                <div style={{textAlign: 'center', marginTop: '-5px'}} id='passiveRightApplied'>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Right', 'passive')}>
                    Apply Minimum Stats</button>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Right', 'passive')}>
                    Apply Stats </button>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Right', 'passive')}>
                    Apply Maximum Stats</button>
                </div>
              </div>

              <div className="hiddenRight abilityTitleBox" style={{paddingTop: '5px'}}>
                <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                  <p style={{margin: 0}}><b><u>Q</u></b> - rank: </p>
                  <input id="QRankRight" type="number" placeholder="0" min="0" max="5"
                  style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
                </div>
                <div className="spriteContainer">
                  <img className='qMargin' src={ this.images[`${this.state.champIndexRight}`] } alt='Ability icon'/>
                </div>
              </div>
              <div className="hiddenRight abilityBoxRight">
                <div style={{textAlign: 'center', marginTop: '-5px'}} id='QRightApplied'>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Right', 'Q')}>
                    Apply Minimum Stats</button>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Right', 'Q')}>
                    Apply Stats </button>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Right', 'Q')}>
                    Apply Maximum Stats</button>
                </div>
              </div>

              <div className="hiddenRight abilityTitleBox" style={{paddingTop: '5px'}}>
                <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                  <p style={{margin: 0}}><b><u>W</u></b> - rank: </p>
                  <input id="WRankRight" type="number" placeholder="0" min="0" max="5"
                  style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
                </div>
                <div className="spriteContainer">
                  <img className='wMargin' src={ this.images[`${this.state.champIndexRight}`] } alt='Ability icon'/>
                </div>
              </div>
              <div className="hiddenRight abilityBoxRight">
                <div style={{textAlign: 'center', marginTop: '-5px'}} id='WRightApplied'>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Right', 'W')}>
                    Apply Minimum Stats</button>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Right', 'W')}>
                    Apply Stats </button>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Right', 'W')}>
                    Apply Maximum Stats</button>
                </div>
              </div>

              <div className="hiddenRight abilityTitleBox" style={{paddingTop: '5px'}}>
                <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                  <p style={{margin: 0}}><b><u>E</u></b> - rank: </p>
                  <input id="ERankRight" type="number" placeholder="0" min="0" max="5"
                  style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
                </div>
                <div className="spriteContainer">
                  <img className='eMargin' src={ this.images[`${this.state.champIndexRight}`] } alt='Ability icon'/>
                </div>
              </div>
              <div className="hiddenRight abilityBoxRight">
                <div style={{textAlign: 'center', marginTop: '-5px'}} id='ERightApplied'>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Right', 'E')}>
                    Apply Minimum Stats</button>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Right', 'E')}>
                    Apply Stats </button>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Right', 'E')}>
                    Apply Maximum Stats</button>
                </div>
              </div>

              <div className="hiddenRight abilityTitleBox" style={{paddingTop: '5px'}}>
                <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                  <p style={{margin: 0}}><b><u>R</u></b> - rank: </p>
                  <input id="RRankRight" type="number" placeholder="0" min="0" max="3"
                  style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
                </div>
                <div className="spriteContainer">
                  <img className='rMargin' src={ this.images[`${this.state.champIndexRight}`] } alt='Ability icon'/>
                </div>
              </div>
              <div className="hiddenRight abilityBoxRight" style={{marginBottom: '50px'}}>
                <div style={{textAlign: 'center', marginTop: '-5px'}} id='RRightApplied'>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Right', 'R')}>
                    Apply Minimum Stats</button>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Right', 'R')}>
                    Apply Stats </button>
                  <button type='button' onClick={(event) => this.appliedStatsToggle(event, 'Right', 'R')}>
                    Apply Maximum Stats</button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <footer style={{textAlign: 'center'}}>
          LoL Matchup was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games.
           Riot Games does not endorse or sponsor this project.
        </footer>

      </div>
    );
  }
}

export default App;