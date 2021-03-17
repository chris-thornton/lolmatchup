/* eslint-disable */

import React, { Component, createElement } from 'react';
import './App.css';
import champList from './components/champList';
import ChampDropDownLeft from './components/ChampDropDownLeft';
import ChampDropDownRight from './components/ChampDropDownRight';
import logo from './logo.jpg';
import versus from './versus.png';
import defaultChampIcon from './defaultChampIcon.png';
import healthIcon from './staticons/healthscaling.png';
import armorIcon from './staticons/armor.png';
import magicResIcon from './staticons/magicres.png';
import attackDamageIcon from './staticons/attackdamage.png';
import attackSpeedIcon from './staticons/attackspeed.png';
import critChanceIcon from './staticons/critchance.png';
import manaIcon from './staticons/mana.png';
import abilityPowerIcon from './staticons/abilitypower.png';
import cdrIcon from './staticons/cdr.png';

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchField1: '',
      searchField2: '',
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
      stats1: {
        ad: 0,
        adPL: 0,
        as: 0,
        asPL: 0, 
        arm: 0, 
        armPL: 0,
        mr: 0,
        mrPL: 0,
        hp: 0,
        hpPL: 0,
        hpRegen: 0,
        hpRegenPL: 0,
        ap: 0,
        cdr: 0,
        critChance: 0,
        mana: 0,
        manaPL: 0,
        manaRegen: 0,
        manaRegenPL: 0
      },
      transformStats1: {
        ad: 0,
        adPL: 0,
        as: 0,
        asPL: 0, 
        arm: 0, 
        armPL: 0,
        mr: 0,
        mrPL: 0,
        hp: 0,
        hpPL: 0,
        hpRegen: 0,
        hpRegenPL: 0,
        ap: 0,
        cdr: 0,
        critChance: 0,
        mana: 0,
        manaPL: 0,
        manaRegen: 0,
        manaRegenPL: 0
      },
      transformStats2: {
        ad: 0,
        adPL: 0,
        as: 0,
        asPL: 0, 
        arm: 0, 
        armPL: 0,
        mr: 0,
        mrPL: 0,
        hp: 0,
        hpPL: 0,
        hpRegen: 0,
        hpRegenPL: 0,
        ap: 0,
        cdr: 0,
        critChance: 0,
        mana: 0,
        manaPL: 0,
        manaRegen: 0,
        manaRegenPL: 0
      },
      stats2: {
        ad: 0,
        adPL: 0,
        as: 0,
        asPL: 0, 
        arm: 0, 
        armPL: 0,
        mr: 0,
        mrPL: 0,
        hp: 0,
        hpPL: 0,
        hpRegen: 0,
        hpRegenPL: 0,
        ap: 0,
        cdr: 0,
        critChance: 0,
        mana: 0,
        manaPL: 0,
        manaRegen: 0,
        manaRegenPL: 0
      },
      itemStatsLeft: {
        ad: 0,
        as: 0,
        arm: 0,
        armorRedux: 0,
        lethality: 0, 
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
      },
      itemStatsRight: {
        ad: 0,
        as: 0,
        arm: 0,
        armorRedux: 0,
        lethality: 0, 
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
      },
      baseChampStatsLeft: {},
      baseChampStatsRight: {},
      abilities1: {
        passive: {},
        Q: {},
        W: {},
        E: {},
        R: {}
      },
      abilities2: {
        passive: {},
        Q: {},
        W: {},
        E: {},
        R: {}
      },
      QRankLeft: 0,
      QRankRight: 0,
      WRankLeft: 0,
      WRankRight: 0,
      ERankLeft: 0,
      ERankRight: 0,
      RRankLeft: 0,
      RRankRight: 0,
      levelLeft: 1,
      levelRight: 1
    }
  };

  onSearchChange = (event) => {
    this.setState({ searchField1: event.target.value });
    this.setState({ filteredChampsLeft: champList.filter(champ => {
      return champ.name.toLowerCase().startsWith(event.target.value.toLowerCase()) }).map(champ => {
        return champ.name
      })
    });
    this.setState({ filteredChampPairsLeft: champList.filter(champ => {
      return champ.name.toLowerCase().startsWith(event.target.value.toLowerCase()) })
    })
  };

  onSearchChange2 = (event) => {
    this.setState({ searchField2: event.target.value });
    this.setState({ filteredChampsRight: champList.filter(champ => {
      return champ.name.toLowerCase().startsWith(event.target.value.toLowerCase()) }).map(champ => {
        return champ.name
      })
    });
    this.setState({ filteredChampPairsRight: champList.filter(champ => {
      return champ.name.toLowerCase().startsWith(event.target.value.toLowerCase()) })
    })
  }

  abilities = ["passive", "Q", "W", "E", "R"]
  rankedAbilities = ["Q", "W", "E", "R"]
  transformAbilities = ["passiveTransform", "QTransform", "WTransform", "ETransform", "RTransform"]
  images = {};
  portraits = {};
  abilities1 = {
    passive: {},
    Q: {},
    W: {},
    E: {},
    R: {}
  };
  abilities2 = {
    passive: {},
    Q: {},
    W: {},
    E: {},
    R: {}
  };

  testing(side, event) {
    if(event.currentTarget.tagName === 'LI'){
      console.log("you just selected a champion")
    } else {
      console.log("you just changed an ability rank")
    }
  };

  calculateAbility(itemStats, enemyItemStats, enemyStats, selectedStats, side, champName, champLevel, champLvlRatio) {

    import (`./champions/${champName.toLowerCase()}`)
          .then(({default: champFile}) => {
            var statsPath = champFile[`stats`];
            var totalAD = itemStats.ad + statsPath["baseDamage"] + champLvlRatio * statsPath["damagePerLevel"];
            var bonusAD = itemStats.ad;
            var totalAP = itemStats.ap + selectedStats.ap;
            var totalAS = statsPath["attackSpeed"]
            + (itemStats.as + champLvlRatio * statsPath["attackSpeedPerLevel"]) * statsPath["attackSpeedRatio"];
            var bonusAS = statsPath["attackSpeedRatio"] * itemStats.as;
            var bonusASRatio = itemStats.as;
            var totalArmor = itemStats.arm + statsPath["baseArmor"] + champLvlRatio * statsPath["armorPerLevel"];
            console.log('totalArmor: ' + totalArmor);
            var bonusArmor = itemStats.arm;
            var totalMR = itemStats.mr + statsPath["baseMagicResist"] + champLvlRatio * statsPath["magicResistPerLevel"];
            var bonusMR = itemStats.mr;
            var totalHP = itemStats.hp + statsPath["baseHP"] + champLvlRatio * statsPath["hpPerLevel"];
            var bonusHP = itemStats.hp;
            var enemyTotalHP = enemyStats.hp + enemyItemStats.hp;
            var enemyBonusHP = enemyItemStats.hp;
            var enemyTotalArmor = enemyStats.arm + enemyItemStats.arm;
            var enemyTotalMR = enemyStats.mr + enemyItemStats.mr;
            var totalCritChance = itemStats.critChance; 
            var totalLethality = itemStats.lethality;
            var totalLifeSteal = itemStats.lifeSteal;
            var totalMana = itemStats.mana + statsPath["mana"]["base"] + statsPath["mana"]["manaPerLevel"] * champLvlRatio;
            var bonusMana = itemStats.mana;
            var nonBaseAS = (itemStats.as + champLvlRatio * statsPath["attackSpeedPerLevel"]) * statsPath["attackSpeedRatio"];

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
    
    
            // eslint-disable-next-line
            var passiveDetails = {};
            // eslint-disable-next-line
            var QDetails = {};
            // eslint-disable-next-line
            var WDetails = {};
            // eslint-disable-next-line
            var EDetails = {};
            // eslint-disable-next-line
            var RDetails = {};
    
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
              function removeSpace(x) {
                if (typeof x !== 'number') {
                  return JSON.stringify(x).replace(/,/g, ', ')
                } else {
                  return x
                }
              };
              function removeParen(x) {
                if (typeof x !== 'number') {
                  return JSON.stringify(x).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                } else {
                  return x
                }
              };
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
              function addBold(text) {
                var b = document.createElement('b');
                b.innerText = text;
                abilityDiv.appendChild(b);
              }
              function addText(text) {
                var a = document.createTextNode(text);
                abilityDiv.appendChild(a);
              }
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
    
              if (champFile[ability]) {
                this[`${ability}Details`] = champFile[ability]
                if (ability === 'passive' || document.getElementById(`${ability}Rank${side}`).value == 0) {
    
                  if (champFile[ability]["text"]) {
                    addText(champFile[ability]["text"]);
                    doubleBreak();
                  };
    
                  if (champFile[ability]["auto"]) {
                    var path = champFile[ability]["auto"];
                    addBold('Modified Auto Attack: ');
                    var baseAutoDmg = totalAD;
                    var newAutoDmg = baseAutoDmg;
                    if (path["dmgRatio"]) {
                      underLine('Damage Ratio');
                      addText(path["dmgRatio"])
                      newAutoDmg = path["dmgRatio"] * baseAutoDmg;
                    };
                    if (path["dmgRatioPerCritChance"]) {
                      singleBreak();
                      underLine('Damage Ratio Per Crit Chance');
                      addText(path["dmgRatioPerCritChance"]);
                      newAutoDmg *= path["dmgRatioPerCritChance"] * totalCritChance;
                    };
                    if (path["system"] === 'minMax') {
                      underLine('Min');
                      if (path["minADRatioByLvl"]) {
                        addText('(' + path["minADRatioByLvl"][0] + " to " 
                        + path["minADRatioByLvl"][17] + " AD Ratio, based on lvl. ");
                        underLine('Currently');
                        addText(path["minADRatioByLvl"][champLevel] + ') ');
                      };
                      singleBreak();
                      addText('Max Damage');
                      if (path["maxADRatioByLvl"]) {
                        addText(': (' + path["maxADRatioByLvl"][0] + " to " 
                        + path["maxADRatioByLvl"][17] + " AD Ratio, based on lvl. ");
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
                      addText(Math.round(newAutoDmg * path["critDmg"]));
                      if (path["critDmgWithIE"]) {
                        addText(' (' + Math.round(newAutoDmg * path["critDmgWithIE"]) + ' with Infinity Edge)');
                      }
                    };
                    if (path["dmgRatio"]) {
                      doubleBreak();
                      addBold('Auto Damage: ');
                      addText(Math.round(newAutoDmg));
                    };
                    if (path["system"] === 'minMax') {
                      doubleBreak();
                      addBold('Auto Damage: ');
                      underLine('Min');
                      addText(Math.round(path["minADRatioByLvl"][champLevel]*(baseAutoDmg))+ ' (Crit: ' 
                      + Math.round(path["minADRatioByLvl"][champLevel]*(baseAutoDmg)*(path['critDmg'])) + ', Crit with IE: ' 
                      + Math.round(path["minADRatioByLvl"][champLevel]*(baseAutoDmg)*(path['critDmgWithIE'])) + ')');
                      singleBreak();
                      underLine('Max');
                      addText(Math.round(path["maxADRatioByLvl"][champLevel]*(baseAutoDmg))+ ' (Crit: ' + 
                      Math.round(path["maxADRatioByLvl"][champLevel]*(baseAutoDmg)*(path['critDmg']))+ ', Crit with IE: ' 
                      + Math.round(path["maxADRatioByLvl"][champLevel]*(baseAutoDmg)*(path['critDmgWithIE'])) + ')' );
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["autoEmpower"]) {
                    var damage = champFile[ability]["autoEmpower"]["damage"];
                    if (!damage["durationAutos"] && !damage['autoCoolDown']) {
                      addBold('Auto Attack Empower: ')
                    } else if (damage['autoCoolDown']) {
                     addBold('Empower 1 in every ' +  damage["autoCoolDown"] + ' Auto Attacks: ')
                    } else {
                      addBold('Empower ' +  damage["durationAutos"] + ' Auto Attacks: ')
                    };
                    underLine(damage['type'] + " Damage");
                    if (damage["dmg"]) {
                      addText(removeSpace(damage["dmg"]));
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
                      addText(" (+" + damage["dmgPerStack"] + ' per Stack)');
                    };
                    if (damage["APRatio"]) {
                      addText(" (+" + damage["APRatio"] + " AP Ratio)");
                    };
                    if (damage["ADRatio"]) {
                      if (champName !== 'Jayce') {
                        addText(' (+' + removeParen(damage["ADRatio"]) + " AD Ratio)");
                      } else {
                        addText('(' + removeParen(damage["ADRatio"]) + " AD Ratio)")
                      }
                    };
                    if (damage["ADRatioByLvl"]) {
                      addText('(+' + damage["ADRatioByLvl"][0] + " to " 
                      + damage["ADRatioByLvl"][17] + " AD Ratio, based on lvl. ");
                      underLine('Currently');
                      addText(damage["ADRatioByLvl"][champLevel] + ")")
                    };
                    if (damage["bonusADRatio"]) {
                      addText(" (+" + removeParen(damage["bonusADRatio"]) + " Bonus AD Ratio)");
                    };
                    if (damage["enemyMaxHPRatio"]) {
                      addText(" (+" + removeParen(damage["enemyMaxHPRatio"]) + " Enemy Max HP Ratio)");
                    };
                    if (damage["enemyMaxHPRatioPer100AD"]) {
                      addText(" (+" + removeParen(damage["enemyMaxHPRatioPer100AD"]) + " Enemy Max HP Ratio per 100 AD)");
                    };
                    if (damage["enemyMaxHPRatioPer100BonusAD"]) {
                      addText(" (+" + removeParen(damage["enemyMaxHPRatioPer100BonusAD"])
                      + " Enemy Max HP Ratio per 100 Bonus AD)");
                    };
                    if (damage["enemyMaxHPRatioPer100AP"]) {
                      addText(" (+" + removeParen(damage["enemyMaxHPRatioPer100AP"])+ " Enemy Max HP Ratio per 100 AP)");
                    };
                    if (damage["enemyMaxHPRatioByLvl"]) {
                      addText('(+' + damage["enemyMaxHPRatioByLvl"][0] 
                      + " to " + damage["enemyMaxHPRatioByLvl"][17] + " Enemy Max HP Ratio, based on lvl. ");
                      underLine('Currently');
                      addText(damage["enemyMaxHPRatioByLvl"][champLevel] + ") ");
                    };
                    if (damage["bonusMoveSpeedRatioByLvl"]) {
                      addText('(' + damage["bonusMoveSpeedRatioByLvl"][0] + " to " 
                      + damage["bonusMoveSpeedRatioByLvl"][17] + " Bonus Move Speed Ratio, based on lvl. ");
                      underLine('Currently');
                      addText(damage["bonusMoveSpeedRatioByLvl"][champLevel] + ") ")
                    };
                    if (damage["enemyMaxHPRatioPerStack"]) {
                      addText(" (+" + removeParen(damage["enemyMaxHPRatioPerStack"]) + " Enemy Max HP Ratio per Stack)");
                    };
                    if (damage["maxHPRatio"]) {
                      addText(" (+" + removeParen(damage["maxHPRatio"]) + " Max HP Ratio)");
                    };
                    if (damage["enemyCurrentHPRatio"]) {
                      addText(" (+" + removeParen(damage["enemyCurrentHPRatio"]) + " Enemy Current HP Ratio)");
                    };
                    if (damage["enemyCurrentHPRatioByLvl"]) {
                      addText('(' + damage["enemyCurrentHPRatioByLvl"][0] 
                      + " to " + damage["enemyCurrentHPRatioByLvl"][17] + " Enemy Current HP Ratio, based on lvl. ");
                      underLine('Currently');
                      addText(': ' + damage["enemyCurrentHPRatioByLvl"][champLevel] + ") ");
                    };
                    if (damage["enemyMissingHPRatio"]) {
                      addText(" (+" + removeParen(damage["enemyMissingHPRatio"]) + " Enemy Missing HP Ratio)");
                    };
                    if (damage["enemyMissingHPRatioPer100AP"]) {
                      addText(" (+" + removeParen(damage["enemyMissingHPRatioPer100AP"])+ " Enemy Missing HP Ratio per 100 AP)");
                    };
                    if (damage["enemyMissingHPRatioByLvl"]) {
                      addText('(' + damage["enemyMissingHPRatioByLvl"][0] + " to " 
                      + damage["enemyMissingHPRatioByLvl"][17] + " Enemy Missing HP Ratio, based on lvl. ");
                      underLine('Currently');
                      addText(': ' + damage["enemyMissingHPRatioByLvl"][champLevel] + ")");
                    };
                    if (damage["armorRatio"]) {
                      addText(" (+" + removeParen(damage["armorRatio"]) + " Armor Ratio)");
                    };
                    if (damage["bonusArmorRatio"]) {
                      addText(" (+" + removeParen(damage["bonusArmorRatio"]) + " Bonus Armor Ratio)");
                    };
                    if (damage['enemyResistRatio']) {
                      addText(' (+' + damage['enemyResistRatio'] + ' Enemy Armor and Magic Resist Ratio)');
                    };
                    if (damage["ADRatioPerCritChance"]) {
                      addText(" (+" + damage["ADRatioPerCritChance"] + " AD Ratio per Crit Chance")
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
                      addText('Ignores ' + damage["armorIgnore"] + ' ratio of enemy armor.');
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
                        addText(removeSpace(damage["minDmg"]));
                      }
                    };
                    if (damage["system"] === "minMax" ) {
                      underLine('Min');
                      if (damage["minDmg"]) {
                        addText(removeSpace(damage["minDmg"]));
                      };
                      if (damage["minDmgByLvl"]) {
                        addText('[' + damage["minDmgByLvl"][0] + " to " + damage["minDmgByLvl"][17] + ", based on lvl. ");
                        underLine('Currently');
                        addText(damage["minDmgByLvl"][champLevel] + '] ')
                      };
                      if (damage["minADRatio"]) {
                        addText(" (+" + removeParen(damage["minADRatio"]) + " AD Ratio)");
                      };
                      if (damage["minBonusADRatio"]) {
                        addText(" (+" + removeParen(damage["minBonusADRatio"]) + " Bonus AD Ratio)");
                      };
                      if (damage["minAPRatio"]) {
                        addText(" (+" + removeParen(damage["minAPRatio"]) + " AP Ratio)");
                      };
                      if (damage["minArmorRatio"]) {
                        addText(" (+" + removeParen(damage["minArmorRatio"]) + " Armor Ratio)");
                      };
                      if (damage["minEnemyMaxHPRatio"]) {
                        addText(" (+" + removeParen(damage["minEnemyMaxHPRatio"]) + " Enemy Max HP Ratio)");
                      };
                      if (damage["minEnemyMaxHPRatioPer100AP"]) {
                        addText(" (+" + damage["minEnemyMaxHPRatioPer100AP"] + " Enemy Max HP Ratio per 100 AP)");
                      };
                      if (damage["minDmgPerStack"]) {
                        addText(': (' + damage["minDmgPerStack"] + ' per Stack)');
                      };

                      singleBreak();
                      underLine('Max');

                      if (damage["maxDmg"]) {
                        addText(removeSpace(damage["maxDmg"]));
                      };
                      if (damage["maxDmgByLvl"]) {
                        addText(': [' + damage["maxDmgByLvl"][0] + " to " + damage["maxDmgByLvl"][17] + ", based on lvl. ");
                        underLine('Currently');
                        addText(damage["maxDmgByLvl"][champLevel] + '] ')
                      };
                      if (damage["maxDmgPerStack"]) {
                        addText('(' + damage["maxDmgPerStack"] + ' per Stack)');
                      };
                      if (damage["maxADRatio"]) {
                        addText(" (+" + removeParen(damage["maxADRatio"]) + " AD Ratio)");
                      };
                      if (damage["maxBonusADRatio"]) {
                        addText(" (+" + removeParen(damage["maxBonusADRatio"]) + " Bonus AD Ratio)");
                      };
                      if (damage["maxAPRatio"]) {
                        addText(" (+" + removeParen(damage["maxAPRatio"]) + " AP Ratio)");
                      };
                      if (damage["maxArmorRatio"]) {
                        addText(" (+" + removeParen(damage["maxArmorRatio"]) + " Armor Ratio)");
                      };
                      if (damage["maxEnemyMaxHPRatio"]) {
                        addText(" (+" + removeParen(damage["maxEnemyMaxHPRatio"]) + " Enemy Max HP Ratio)");
                      };
                      if (damage["maxEnemyMaxHPRatioPer100AP"]) {
                        addText(" (+" + damage["maxEnemyMaxHPRatioPer100AP"] + " Enemy Max HP Ratio per 100 AP)");
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
                      addText(damage["critADRatioWithIE"] + ' AD Ratio');
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
                          addText(" (" + removeParen(part["ADRatio"]) + " AD Ratio)");
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
                      addText('[' + damage["staticCoolDownByLvl"][0] + " to " + damage["staticCoolDownByLvl"][17] + "], based on lvl. ");
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
                      addText(removeSpace(damage["dmg"]));
                    };
                    if (damage["dmgByLvl"]) {
                      addText('[' + damage["dmgByLvl"][0] + " to " + damage["dmgByLvl"][17] + ", based on lvl. ");
                      underLine("Currently");
                      addText(damage["dmgByLvl"][champLevel] + '] ');
                    };
                    if (damage["totalDmgRatio"]) {
                      underLine('Total Damage Ratio');
                      addText(removeSpace(damage["totalDmgRatio"]));
                    };
                    if (damage["dmgByWRank"]) {
                      var path = damage["dmgByWRank"];
                      addText('[+' + path[0] + " to " + path[4] + " Damage, based on W rank. ");
                      underLine("Currently");
                      addText(path[WRank] + '] ');
                    };
                    if (damage["APRatio"]) {
                      addText(" (+" + removeParen(damage["APRatio"]) + " AP Ratio)");
                    };
                    if (damage["APRatioByLvl"]) {
                      addText(' (+' + damage["APRatioByLvl"][0] + " to " + damage["APRatioByLvl"][17] + " AP Ratio, based on lvl. ");
                      underLine("Currently");
                      addText(damage["APRatioByLvl"][champLevel] + ') ')
                    };
                    if (damage["ADRatio"]) {
                      addText(" (+" + removeParen(damage["ADRatio"]) + " AD Ratio)");
                    };
                    if (damage["bonusADRatio"]) {
                      addText(" (+" + removeParen(damage["bonusADRatio"]) + " Bonus AD Ratio)");
                    };
                    if (damage["bonusManaRatio"]) {
                      addText(" (+" + damage["bonusManaRatio"] + " Bonus Mana Ratio)");
                    };
                    if (damage["enemyMaxHPRatio"]) {
                      addText(" (+" + removeParen(damage["enemyMaxHPRatio"]) + " Enemy Max HP Ratio)");
                    };
                    if (damage["enemyMaxHPRatioByLvl"]) {
                      addText('(' + damage["enemyMaxHPRatioByLvl"][0] + " to " 
                      + damage["enemyMaxHPRatioByLvl"][17] + " Enemy Max HP Ratio, based on lvl. ");
                      underLine("Currently");
                      addText(damage["enemyMaxHPRatioByLvl"][champLevel] + ') ');
                    };
                    if (damage["enemyMaxHPRatioPer100AP"]) {
                      addText(' (+' + damage["enemyMaxHPRatioPer100AP"] + ' Enemy Max HP Ratio per 100 AP)');
                    };
                    if (damage["enemyMaxHPRatioPer100BonusAD"]) {
                      addText(' (+' + damage["enemyMaxHPRatioPer100BonusAD"] + ' Enemy Max HP Ratio per 100 Bonus AD)');
                    };
                    if (damage["bonusHPRatio"]) {
                      addText(" (+" + removeParen(damage["bonusHPRatio"]) + " Bonus HP Ratio)");
                    };
                    if (damage["maxHPRatio"]) {
                      addText(" (+" + removeParen(damage["maxHPRatio"]) + " Max HP Ratio)");
                    };
                    if (damage["enemyCurrentHPRatio"]) {
                      addText(" (+" + removeParen(damage["enemyCurrentHPRatio"]) + " Enemy Current HP Ratio)");
                    };
                    if (damage["enemyCurrentHPRatioPerStack"]) {
                      addText(' (+' + damage["enemyCurrentHPRatioPerStack"] + ' Enemy Current HP Ratio per Stack)');
                    };
                    if (damage["enemyCurrentHPRatioPer100AP"]) {
                      addText(" (+" + removeParen(damage["enemyCurrentHPRatioPer100AP"]) + " Enemy Current HP Ratio per 100 AP)");
                    };
                    if (damage["enemyCurrentHPRatioPer100AD"]) {
                      addText(" (+" + removeParen(damage["enemyCurrentHPRatioPer100AD"]) + " Enemy Current HP Ratio per 100 AD)");
                    };
                    if (damage["enemyMissingHPRatio"]) {
                      addText(" (+" + removeParen(damage["enemyMissingHPRatio"]) + " Enemy Missing HP Ratio)");
                    };
                    if (damage["enemyMissingHPRatioPer100AP"]) {
                      addText(" (+" + removeParen(damage["enemyMissingHPRatioPer100AP"]) + " Enemy Missing HP Ratio per 100 AP)");
                    };
                    if (damage["enemyMissingHPRatioPerStack"]) {
                      addText(' (+' + damage["enemyMissingHPRatioPerStack"] + ' Enemy Missing HP Ratio per Stack)');
                    };
                    if (damage["armorRatio"]) {
                      addText(" (+" + removeParen(damage["armorRatio"]) + " Armor Ratio)");
                    };
                    if (damage["bonusArmorRatio"]) {
                      addText(" (+" + removeParen(damage["bonusArmorRatio"]) + " Bonus Armor Ratio)");
                    };
                    if (damage["bonusMRRatio"]) {
                      addText(" (+" + removeParen(damage["bonusMRRatio"]) + " Bonus Magic Resist Ratio)");
                    };
                    if (damage["bonusMoveSpeedRatioByLvl"]) {
                      addText(' (+' + damage["bonusMoveSpeedRatioByLvl"][0] + " to " 
                      + damage["bonusMoveSpeedRatioByLvl"][17] + " Bonus Move Speed Ratio, based on lvl. ");
                      underLine('Currently');
                      addText(damage["bonusMoveSpeedRatioByLvl"][champLevel] + ") ");
                    };
                    if (damage["dmgPerLethality"]) {
                      addText(" (+" + damage["dmgPerLethality"] + " Lethality Ratio)");
                    };
                    if (damage["bonusDmgRatioPerCritChance"]) {
                      singleBreak();
                      underLine('Bonus Damage Ratio');
                      addText(damage["bonusDmgRatioPerCritChance"] + ' per Crit Chance)');
                      if (damage["dmgRatioPerStack"]) {
                        addText(' (' + damage["dmgRatioPerStack"] + ' per Stack)');
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
                      underLine('Damage Ratio By R Rank');
                      addText(removeSpace(damage["dmgRatioByRRank"]));
                    };
    
                    if (damage["system"] === "min" ) {
                      singleBreak();
                      underLine('Min Damage')
                      if (damage["minDmg"]) {
                        addText(removeSpace(damage["minDmg"]));

                      };
                      if (damage["minDmgAPRatio"]) {
                        addText(' (+' + damage["minDmgAPRatio"] + ' AP Ratio)');
                      }
                    };
    
                    if (damage["system"] === "minMax" ) {
                      underLine('Min');
                      if (damage["minDmg"]) {
                        addText(removeSpace(damage["minDmg"]));
                      };
                      if (damage["minDmgByLvl"]) {
                        addText(' [+' + damage["minDmgByLvl"][0] + " to " + damage["minDmgByLvl"][17] + ", based on lvl. ");
                        underLine("Currently");
                        addText(damage["minDmgByLvl"][champLevel] + '] ');
                      };
                      if (damage["minAPRatio"]) {
                        addText(" (+" + removeParen(damage["minAPRatio"]) + " AP Ratio)");
                      };
                      if (damage["minADRatio"]) {
                        addText(" (+" + removeParen(damage["minADRatio"]) + " AD Ratio)");
                      };
                      if (damage["minBonusADRatio"]) {
                        addText(" (+" + removeParen(damage["minBonusADRatio"]) + " Bonus AD Ratio)");
                      };
                      if (damage["minMaxManaRatio"]) {
                        addText(" (+" + removeParen(damage["minMaxManaRatio"]) + " Max Mana Ratio)");
                      };
                      if (damage["minBonusHPRatio"]) {
                        addText(" (+" + damage["minBonusHPRatio"] + " Bonus HP Ratio)");
                      };
                      if (damage["minMaxHPRatio"]) {
                        addText(" (+" + damage["minMaxHPRatio"] + " Max HP Ratio)");
                      };
                      if (damage["minEnemyMaxHPRatio"]) {
                        addText(" (+" + removeParen(damage["minEnemyMaxHPRatio"]) + " Enemy Max HP Ratio)");
                      };
                      if (damage["minEnemyMaxHPRatioPer100BonusAD"]) {
                        addText(" (+" + removeParen(damage["minEnemyMaxHPRatioPer100BonusAD"])
                         + " Enemy Max HP Ratio per 100 Bonus AD)");
                      };
                      if (damage["minEnemyMaxHPRatioPer100AP"]) {
                        addText(" (+" + removeParen(damage["minEnemyMaxHPRatioPer100AP"]) + " Enemy Max HP Ratio per 100 AP)");
                      };
                      if (damage["minEnemyBonusHPRatio"]) {
                        addText(" (+" + removeParen(damage["minEnemyBonusHPRatio"]) + " Enemy Bonus HP Ratio)");
                      };
                      if (damage["minEnemyCurrentHPRatio"]) {
                        addText(" (+" + removeParen(damage["minEnemyCurrentHPRatio"]) + " Enemy Current HP Ratio)");
                      };
                      if (damage["minEnemyCurrentHPRatioPer100AP"]) {
                        addText(" (+" + removeParen(damage["minEnemyCurrentHPRatioPer100AP"])
                        + " Enemy Current HP Ratio per 100 AP)");
                      };
                      if (damage["minEnemyMissingHPRatio"]) {
                        addText(" (+" + removeParen(damage["minEnemyMissingHPRatio"]) + " Enemy Missing HP Ratio)");
                      };

                      singleBreak();
    
                      if (damage["medDmg"]) {
                        underLine('Med');
                        addText(removeSpace(damage["medDmg"]));
                        if (damage["medAPRatio"]) {
                          addText(" (+" + removeParen(damage["medAPRatio"]) + " AP Ratio)");
                        };
                        if (damage["medBonusADRatio"]) {
                          addText(" (+" + removeParen(damage["medBonusADRatio"]) + " Bonus AD Ratio)");
                        };
                        singleBreak();
                      };
    
                      underLine('Max');
    
                      if (damage["maxDmg"]) {
                        addText(removeSpace(damage["maxDmg"]));
                      };
                      if (damage["maxDmgByLvl"]) {
                        addText(' [+' + damage["maxDmgByLvl"][0] + " to " + damage["maxDmgByLvl"][17] + ", based on lvl. ");
                        underLine("Currently");
                        addText(damage["maxDmgByLvl"][champLevel] + '] ');
                      };
                      if (damage["maxAPRatio"]) {
                        addText(" (+" + removeParen(damage["maxAPRatio"]) + " AP Ratio)");
                      };
                      if (damage["maxADRatio"]) {
                        addText(" (+" + removeParen(damage["maxADRatio"]) + " AD Ratio)");
                      };
                      if (damage["maxBonusADRatio"]) {
                        addText(" (+" + removeParen(damage["maxBonusADRatio"]) + " Bonus AD Ratio)");
                      };
                      if (damage["maxMaxManaRatio"]) {
                        addText(" (+" + removeParen(damage["maxMaxManaRatio"]) + " Max Mana Ratio)");
                      };
                      if (damage["maxBonusHPRatio"]) {
                        addText(" (+" + damage["maxBonusHPRatio"] + " Bonus HP Ratio)");
                      };
                      if (damage["maxMaxHPRatio"]) {
                        addText(" (+" + removeParen(damage["maxMaxHPRatio"]) + " Max HP Ratio)");
                      };
                      if (damage["maxMaxHPRatioPer100BonusAD"]) {
                        addText(" (+" + removeParen(damage["maxMaxHPRatioPer100BonusAD"]) + " Max HP Ratio per 100 Bonus AD)");
                      };
                      if (damage["maxEnemyMaxHPRatio"]) {
                        addText(" (+" + removeParen(damage["maxEnemyMaxHPRatio"]) + " Enemy Max HP Ratio)");
                      };
                      if (damage["maxEnemyMaxHPRatioPer100BonusAD"]) {
                        addText(" (+" + removeParen(damage["maxEnemyMaxHPRatioPer100BonusAD"])
                        + " Enemy Max HP Ratio per 100 Bonus AD)");
                      };
                      if (damage["maxEnemyMaxHPRatioPer100AP"]) {
                        addText(" (+" + removeParen(damage["maxEnemyMaxHPRatioPer100AP"]) + " Enemy Max HP Ratio Per 100 AP)");
                      };
                      if (damage["maxEnemyCurrentHPRatio"]) {
                        addText(" (+" + removeParen(damage["maxEnemyCurrentHPRatio"]) + " Enemy Current HP Ratio)");
                      };
                      if (damage["maxEnemyCurrentHPRatioPer100AP"]) {
                        addText(" (+" + removeParen(damage["maxEnemyCurrentHPRatioPer100AP"])
                        + " Enemy Current HP Ratio Per 100 AP)");
                      };
                      if (damage["maxEnemyMissingHPRatio"]) {
                        addText(" (+" + removeParen(damage["maxEnemyMissingHPRatio"]) + " Enemy Missing HP Ratio)");
                      };  
                      if (damage["maxEnemyBonusHPRatio"]) {
                        addText(" (+" + removeParen(damage["maxEnemyBonusHPRatio"]) + " Enemy Bonus HP Ratio)");
                      }
                    };
    
                    if (damage["evolveMaxDmg"]) {
                      singleBreak();
                      underLine('Evolve Max Damage');
                      addText(removeSpace(damage["evolveMaxDmg"]));
                    };
                    if (damage["evolveMaxBonusADRatio"]) {
                      addText(" (+" + removeParen(damage["evolveMaxBonusADRatio"]) + " Bonus AD Ratio)");
                    };
                    if (damage["evolveMaxAPRatio"]) {
                      addText(" (+" + removeParen(damage["evolveMaxAPRatio"])+ " AP Ratio)");
                    };
    
                    if (damage["system"] === 'stacking') {
                      singleBreak();
                      underLine('Damage per Stack');
                      if (damage["dmgPerStack"]) {
                        addText(removeSpace(damage["dmgPerStack"]));
                      };
                      if (damage["ADRatioPerStack"]) {
                        addText(" (+" + removeParen(damage["ADRatioPerStack"]) + " AD Ratio)");
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
                      addText(removeSpace(damage["minMinDmg"]));
                    };
    
                    if (damage["minCritADRatio"]) {
                      singleBreak();
                      underLine('Crit Bonus Damage');
                      addText('Min: ' + damage["minCritADRatio"] + ' AD Ratio');
                      if (damage["minCritADRatioWithIE"]) {
                        addText(' (' + damage["minCritADRatioWithIE"] + ' AD Ratio with Infinity Edge)');
                      };
                      singleBreak();
                      addText('Max: ' + damage["maxCritADRatio"] + ' AD Ratio');
                      if (damage["maxCritADRatioWithIE"]) {
                        addText(' (' + damage["maxCritADRatioWithIE"] + ' AD Ratio with Infinity Edge)');
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
                        addText(" (+" + removeParen(empPath["bonusADRatio"]) + " Bonus AD Ratio)");
                      };
                      if (empPath["system"] === 'minMax') {
                        addText('Min: ');
                        if (empPath["minDmgByLvl"]) {
                          addText(' [' + empPath["minDmgByLvl"][0] + " to " + empPath["minDmgByLvl"][17] + ", based on lvl. ");
                          underLine("Currently");
                          addText(empPath["minDmgByLvl"][champLevel] + '] ');     
                        };
                        if (empPath["minAPRatio"]) {
                          addText(' (+' + empPath["minAPRatio"] + ' AP Ratio)');
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
                          addText(' (+' + empPath["maxAPRatio"] + ' AP Ratio)');
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
                          addText(removeSpace(part["dmg"]));
                        };
                        if (part["dmgByLvl"]) {
                          addText('[' + part["dmgByLvl"][0] + " to " + part["dmgByLvl"][17] + ", based on lvl. ");
                          underLine("Currently");
                          addText(part["dmgByLvl"][champLevel] + '] ');
                        };
                        if (part["APRatio"]) {
                          addText(" (+" + part["APRatio"] + " AP Ratio)");
                        };
                        if (part["ADRatio"]) {
                          addText(" (+" + removeParen(part["ADRatio"]) + " AD Ratio)");
                        };
                        if (part["bonusADRatio"]) {
                          addText(" (+" + removeParen(part["bonusADRatio"]) + " Bonus AD Ratio)");
                        };
                        if (part["enemyMaxHPRatio"]) {
                          addText(" (+" + removeParen(part["enemyMaxHPRatio"]) + " Enemy Max HP Ratio)");
                        };
                        if (part["maxHPRatio"]) {
                          addText(" (+" + removeParen(part["maxHPRatio"]) + " Max HP Ratio)");
                        };
                        if (part["enemyCurrentHPRatio"]) {
                          addText(" (+" + removeParen(part["enemyCurrentHPRatio"]) + " Enemy Current HP Ratio)");
                        };
                        if (part["part1RatioFormula"]) {
                          addText('Formula: ' + part["part1RatioFormula"]);
                        };
    
                        if (part["system"] === "minMax" ) {
                          addText('Min: ');
                          if (part["minDmg"]) {
                            addText(removeSpace(part["minDmg"]))
                          };
                          if (part["minAPRatio"]) {
                            addText(" (+" + removeParen(part["minAPRatio"]) + " AP Ratio)");
                          }
                          if (part["minADRatio"]) {
                            addText(" (+" + removeParen(part["minADRatio"]) + " AD Ratio)")
                          }
                          if (part["minBonusADRatio"]) {
                            addText(" (+" + removeParen(part["minBonusADRatio"])+ " Bonus AD Ratio)")
                          }
                          if (part["minBonusADPerAttackSpeedRatio"]) {
                            addText(' (+' + part["minBonusADPerAttackSpeedRatio"] + ' Bonus AD Ratio per Attack Speed)');
                          }
                          if (part["minEnemyMaxHPRatio"]) {
                            addText(' (' + removeParen(part["minEnemyMaxHPRatio"]) + ' Enemy Max HP Ratio)');
                          }
                          if (part["minEnemyMaxHPRatioPer100AP"]) {
                            addText(' (+' + part["minEnemyMaxHPRatioPer100AP"] + ' Enemy Max HP Ratio per 100 AP)');
                          }
                          if (part["minEnemyMissingHPRatioByLvl"]) {
                            addText('(' + part["minEnemyMissingHPRatioByLvl"][0] + " to " 
                            + part["minEnemyMissingHPRatioByLvl"][17] + " Enemy Missing HP Ratio, based on lvl. ");
                            underLine("Currently");
                            addText(part["minEnemyMissingHPRatioByLvl"][champLevel] + ')')
                          }

                          singleBreak();
                          addText('Max: ');

                          if (part["maxDmg"]) {
                            addText(removeSpace(part["maxDmg"]))
                          }
                          if (part["maxAPRatio"]) {
                            addText(" (+" + removeParen(part["maxAPRatio"]) + " AP Ratio)")
                          }
                          if (part["maxADRatio"]) {
                            addText(" (+" + removeParen(part["maxADRatio"]) + " AD Ratio)")
                          }
                          if (part["maxBonusADRatio"]) {
                            addText(" (+" + removeParen(part["maxBonusADRatio"]) + " Bonus AD Ratio)")
                          }
                          if (part["maxBonusADPerAttackSpeedRatio"]) {
                            addText(' (+' + part["maxBonusADPerAttackSpeedRatio"] + ' Bonus AD Ratio per Attack Speed)');
                          }
                          if (part["maxEnemyMaxHPRatio"]) {
                            addText(' (' + removeParen(part["maxEnemyMaxHPRatio"]) + ' Enemy Max HP Ratio)');
                          }
                          if (part["maxEnemyMaxHPRatioPer100AP"]) {
                            addText(' (+' + part["maxEnemyMaxHPRatioPer100AP"] + ' Enemy Max HP Ratio per 100 AP)');
                          }
                          if (part["maxEnemyMissingHPRatioByLvl"]) {
                            addText('(' + part["maxEnemyMissingHPRatioByLvl"][0] + " to " 
                            + part["maxEnemyMissingHPRatioByLvl"][17] + " Enemy Missing HP Ratio, based on lvl. ");
                            underLine("Currently");
                            addText(part["maxEnemyMissingHPRatioByLvl"][champLevel] + ')')
                          }
                        };
                        if (part["bonusDmgRatioPerCritChance"]) {
                          singleBreak();
                          underLine('Bonus Damage Ratio');
                          addText('(' + part["bonusDmgRatioPerCritChance"] + ' per Crit Chance)');
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
                      addText(removeSpace(damage["storedDmg"]["dmgRatio"])  
                      + ' of pre-mitigated damage dealt over the past ' + damage["storedDmg"]["duration"] + ' seconds.');
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
                      addText(removeSpace(path["dmg"]));
                    };
                    if (path["dmgByLvl"]) {
                      addText('[' + path["dmgByLvl"][0] + " to " + path["dmgByLvl"][17] + ", based on lvl. ");
                      underLine("Currently");
                      addText(path["dmgByLvl"][champLevel] + '] ')
                    };
                    if (path["APRatio"]) {
                      addText(" (+" + path["APRatio"] + " AP Ratio)")
                    };
                    if (path["ADRatio"]) {
                      addText(" (+" + removeParen(path["ADRatio"]) + " AD Ratio)")
                    };
                    if (path["bonusADRatio"]) {
                      addText(" (+" + removeParen(path["bonusADRatio"]) + " Bonus AD Ratio)")
                    };
                    if (path["enemyMaxHPRatio"]) {
                      addText(" (+" + removeParen(path["enemyMaxHPRatio"]) + " Enemy Max HP Ratio)")
                    };
                    if (path["enemyMaxHPRatioByLvl"]) {
                      addText(' [+' + path["enemyMaxHPRatioByLvl"][0] + " to " 
                      + path["enemyMaxHPRatioByLvl"][17] + " Enemy Max HP Ratio, based on lvl. ");
                      underLine("Currently");
                      addText(path["enemyMaxHPRatioByLvl"][champLevel] + '] ');
                    };
                    if (path["enemyMaxHPRatioPer100AP"]) {
                      addText(" (+" + removeParen(path["enemyMaxHPRatioPer100AP"]) + " Enemy Max HP Ratio Per 100 AP)");
                    };
                    if (path["maxHPRatio"]) {
                      addText(" (+" + removeParen(path["maxHPRatio"]) + " Max HP Ratio)");
                    };
                    if (path["bonusHPRatio"]) {
                      addText(" (+" + path["bonusHPRatio"] + " Bonus HP Ratio)");
                    };
                    if (path["enemyCurrentHPRatio"]) {
                      addText(" (+" + removeParen(path["enemyCurrentHPRatio"]) + " Enemy Current HP Ratio)")
                    };
                
                    if (path["system"] === "minMax" ) {
                      underLine('Min')
                      if (path["minDmg"]) {
                        addText(removeSpace(path["minDmg"]))
                      };
                      if (path["minDmgByLvl"]) {
                        addText(' [' + path["minDmgByLvl"][0] + " to " + path["minDmgByLvl"][17] + ", based on lvl. ");
                        underLine("Currently");
                        addText(path["minDmgByLvl"][champLevel] + '] ')
                      };
                      if (path["minAPRatio"]) {
                        addText(" (+" + removeParen(path["minAPRatio"]) + " AP Ratio)")
                      }
                      if (path["minADRatio"]) {
                        addText(" (+" + removeParen(path["minADRatio"]) + " AD Ratio)")
                      }
                      if (path["minBonusADRatio"]) {
                        addText(" (+" + removeParen(path["minBonusADRatio"]) + " Bonus AD Ratio)")
                      }
                      if (path["interval"] && path["ticks"]) {
                        addText(' per ' + path["interval"] + ' sec, for ' + multiplyTicks2(path["interval"]) + ' seconds.')
                      }
                      if (path["ticks"] && path["duration"]) {
                        addText(' per tick, ' + removeSpace(path["ticks"]) + ' times over ' + path["duration"] + ' seconds.');
                      }

                      singleBreak();
                      underLine('Max')

                      if (path["maxDmg"]) {
                        addText(removeSpace(path["maxDmg"]))
                      }
                      if (path["maxDmgByLvl"]) {
                        addText(' [' + path["maxDmgByLvl"][0] + " to " + path["maxDmgByLvl"][17] + ", based on lvl. ");
                        underLine("Currently");
                        addText(path["maxDmgByLvl"][champLevel] + '] ')
                      }
                      if (path["maxAPRatio"]) {
                        addText(" (+" + removeParen(path["maxAPRatio"]) + " AP Ratio)")
                      }
                      if (path["maxADRatio"]) {
                        addText(" (+" + removeParen(path["maxADRatio"]) + " AD Ratio)")
                      }
                      if (path["maxBonusADRatio"]) {
                        addText(" (+" + removeParen(path["maxBonusADRatio"]) + " Bonus AD Ratio)")
                      }
                      if (path["ASForBonusTick"]) {
                        addText(' per tick, over ' + path["duration"] + ' seconds.');
                        singleBreak();
                        underLine('Ticks')
                        addText(path["ticks"]);
                        addText(' (+1 tick per ' + path["ASForBonusTick"] + ' Bonus Attack Speed Ratio)');
                      }
                    };
                    if (path["ticks"] && path["duration"] && path["system"] !== "minMax") {
                      addText(' per tick, ' + removeSpace(path["ticks"]) + ' times over ' + path["duration"] + ' seconds.');
                    }
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
                      underLine('Min')
                      addText(removeSpace(path["minDmg"]))
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
                        addText(" (+" + mapParen(multiplyTicks2(path["APRatio"])) + " AP Ratio)")
                      };
                      if (path["ADRatio"]) {
                        addText(" (+" + mapParen(multiplyTicks2(path["ADRatio"])) + " AD Ratio)")
                      };
                      if (path["bonusADRatio"]) {
                        addText(" (+" + multiplyTicks2(path["bonusADRatio"]) + " Bonus AD Ratio)")
                      };
                      if (path["enemyMaxHPRatio"]) {
                        addText(" (+" + mapParen(multiplyTicks2(path["enemyMaxHPRatio"])) + " Enemy Max HP Ratio)")
                      };
                      if (path["maxHPRatio"]) {
                        addText(" (+" + multiplyTicks2(path["maxHPRatio"]) + " Max HP Ratio)")
                      };
                      if (path["bonusHPRatio"]) {
                        addText(" (+" + multiplyTicks2(path["bonusHPRatio"]) + " Bonus HP Ratio)")
                      };
                      if (path["enemyCurrentHPRatio"]) {
                        addText(" (+" + multiplyTicks2(path["enemyCurrentHPRatio"]) + " Enemy Current HP Ratio)")
                      };
                      if (path["enemyMaxHPRatioPer100AP"]) {
                        addText(" (+" + multiplyTicks2(path["enemyMaxHPRatioPer100AP"]) + " Enemy Max HP Ratio per 100 AP)")
                      }
                      if (path["system"] === 'min') {
                        singleBreak();
                        underLine('Min')
                        addText(mapSpace(multiplyTicks(path["minDmg"])))
                      }
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
                          addText(" (+" + mapParen(multiplyTicks2(path["minAPRatio"])) + " AP Ratio)")
                        };
                        if (path["minADRatio"]) {
                          addText(" (+" + mapParen(multiplyTicks2(path["minADRatio"])) + " AD Ratio)")
                        };
                        if (path["minBonusADRatio"]) {
                          addText(" (+" + mapParen(multiplyTicks2(path["minBonusADRatio"])) + " Bonus AD Ratio)")
                        };

                        singleBreak();
                        underLine('Max')

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
                          addText(" (+" + mapParen(multiplyTicks2(path["maxAPRatio"])) + " AP Ratio)")
                        }
                        if (path["maxADRatio"]) {
                          addText(" (+" + mapParen(multiplyTicks2(path["maxADRatio"])) + " AD Ratio)")
                        }
                        if (path["maxBonusADRatio"]) {
                          addText(" (+" + mapParen(multiplyTicks2(path["maxBonusADRatio"])) + " Bonus AD Ratio)")
                        }
                      };
                    }
                    if (path["interval"] && !path["ticks"]) {
                      addText(' per ' + path["interval"] + ' sec.')
                    }
                    if (path["part1"]) {
                      underLine('Part 1');
                      var path = champFile[ability]["tickDamage"]["part1"];
                      if (path["dmg"]) {
                        addText(removeSpace(path["dmg"]));
                      };
                      if (path["APRatio"]) {
                        addText(" (+" + removeParen(path["APRatio"]) + " AP Ratio)")
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
                        addText(' (+' +  mapParen(multiplyTicks2(path["APRatio"])) + ' AP Ratio)');
                      };

                      doubleBreak();
                      underLine('Part 2');
                      path = champFile[ability]["tickDamage"]['part2']
                      
                      if (path["enemyMaxHPRatio"]) {
                        addText(removeParen(path["enemyMaxHPRatio"]) + ' Enemy Max HP Ratio)');
                      }
                      if (path["enemyMaxHPRatioPer100AP"]) {
                        addText(' (+' +  path["enemyMaxHPRatioPer100AP"] + ' Enemy Max HP Ratio per 100 AP)');
                      }
                      if (path["interval"] && path["ticks"]) {
                        addText(' per ' + path["interval"] + ' sec, for ' + multiplyTicks2(path["interval"]) + ' seconds.')
                      }

                      singleBreak();
                      underLine('Total');
                      
                      if (path["enemyMaxHPRatio"]) {
                        addText('(' +  mapParen(multiplyTicks2(path["enemyMaxHPRatio"])) + ' Enemy Max HP Ratio)');
                      }
                      if (path["enemyMaxHPRatioPer100AP"]) {
                        addText(' (+' +  multiplyTicks2(path["enemyMaxHPRatioPer100AP"]) + ' Enemy Max HP Ratio per 100 AP)');
                      }
                    }
                    doubleBreak();
                  };
    
                  if (champFile[ability]["specialDelivery"]) {
    
                    var path = champFile[ability]["specialDelivery"]["tickDamage"];
                    addBold("Special Delivery: ");
    
                    addText('[' + path["dmgByLvl"][0] + " to " + path["dmgByLvl"][17] + ", based on lvl. ");
                    underLine("Currently");
                    addText(path["dmgByLvl"][champLevel] + '] ')
                    addText(" (+" + path["bonusADRatio"] + " Bonus AD Ratio)")
                    addText(" (+" + path["APRatio"] + " AP Ratio)")
                    addText(' per ' + path["interval"] + ' sec, for ' + multiplyTicks2(path["interval"])   + ' seconds.')

                    singleBreak();
                    underLine('Total Damage')
    
                    addText('[' + multiplyTicks(path["dmgByLvl"][0]) + " to " 
                    + multiplyTicks(path["dmgByLvl"][17]) + ", based on lvl. ");
                    underLine("Currently");
                    addText(multiplyTicks(path["dmgByLvl"][champLevel]) + '] ')
                    addText(" (+" + multiplyTicks2(path["bonusADRatio"]) + " Bonus AD Ratio)")
                    addText(" (+" + multiplyTicks2(path["APRatio"]) + " AP Ratio)")
                  
                    doubleBreak();
                  };
    
                  if (champFile[ability]["passivePermanent"]) {
                    var path = champFile[ability]["passivePermanent"]
                    addBold('Passive: ');
                    
                    if (path["bonusAttackDamage"]) {
                      underLine('Bonus Attack Damage')
                      if (path["bonusAttackDamage"]["ADRatioByLvl"]) {
                        addText('[' + path["bonusAttackDamage"]["ADRatioByLvl"][0] 
                        + " to " + path["bonusAttackDamage"]["ADRatioByLvl"][17] + " AD Ratio, based on lvl. ");
                        underLine("Currently");
                        addText(path["bonusAttackDamage"]["ADRatioByLvl"][champLevel] + '] ')
                      }
                      if (path["bonusAttackDamage"]["bonusADRatio"]) {
                        addText(' (+' + removeParen(path["bonusAttackDamage"]["bonusADRatio"]) + ' Bonus AD Ratio)');
                      }
                      if (path["bonusAttackDamage"]["critChanceRatio"]) {
                        addText(' (+' + path["bonusAttackDamage"]["critChanceRatio"] + ' Crit Chance)');
                      }
                      if (path["bonusAttackDamage"]["bonusAttackSpeedRatio"]) {
                        addText(' (+' + path["bonusAttackDamage"]["bonusAttackSpeedRatio"] + ' Bonus Attack Speed Ratio)');
                      }
                      if (path["bonusAttackDamage"]["minBonusAD"]) {
                        addText('Min: ' + removeSpace(path["bonusAttackDamage"]["minBonusAD"]));
                        singleBreak();
                        addText('Max: ' + removeSpace(path["bonusAttackDamage"]["maxBonusAD"]));
                      }
                      if (path["bonusAttackDamage"]["ADPerOverCrit"]) {
                        addText(path["bonusAttackDamage"]["ADPerOverCrit"] + ' per Crit Chance over 100%');
                      }
                      if (!path["bonusAttackDamage"]["ADPerStack"] && ability === 'passive') {
                        singleBreak();
                        underLine('Total')
                      }
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
                        addText(path["bonusAttackDamage"]["ADPerStack"] + ' per Stack');
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
                      underLine('Bonus Ability Power')
                      addText(path["bonusAPPerBonusHP"] + ' per Bonus Health');
                      singleBreak();
                      underLine('Total')
                      addText(Math.round(path["bonusAPPerBonusHP"] * bonusHP));
                    };
                    if (path["bonusHPPerAP"]) {
                      singleBreak();
                      underLine('Bonus Health')
                      addText(path["bonusHPPerAP"] + ' per Ability Power');
                      singleBreak();
                      underLine('Total')
                      addText(Math.round(path["bonusHPPerAP"] * totalAP));
                    };
                    if (path["bonusArmorPerStack"]) {
                      underLine('Bonus Armor')
                      addText(path["bonusArmorPerStack"] + ' per Stack');
                      singleBreak();
                    };
                    if (path["bonusAPPerStack"]) {
                      underLine('Bonus Ability Power')
                      addText(path["bonusAPPerStack"] + ' per Stack');
                    };
                    if (path["bonusCritChancePerFury"]) {
                      underLine('Bonus Crit Chance');
                      addText(path["bonusCritChancePerFury"] + '% per Fury')
                    };
                    if (path["critChancePer20Stacks"]) {
                      singleBreak();
                      critU = document.createElement('u');
                      critU.innerText = 'Bonus Crit Chance Ratio';
                      abilityDiv.appendChild(critU);
                      var text = document.createTextNode(': ' + path["critChancePer20Stacks"] 
                      + ' per 20 Stacks');
                      abilityDiv.appendChild(text);
                    }
                    if (path["lifestealPerOverCrit"]) {
                      singleBreak();
                      underLine('Life Steal per Overcrit');
                      addText(path["lifestealPerOverCrit"]);
                    }
                    if (path["itemCritChanceMultiplier"]) {
                      doubleBreak();
                      underLine('Item Crit Chance Multiplier');
                      addText(path["itemCritChanceMultiplier"]);
                    }
                    if (path["bonusResist"]) {
                      underLine('Bonus Armor and Magic Resist');
                      addText(removeSpace(path["bonusResist"]));
                    }
                    if (path["bonusResistRatio"]) {
                      underLine('Bonus Armor and Magic Resist');
                      addText('(' + path["bonusResistRatio"] + ' Bonus Ratio)');
                      singleBreak();
                      addText('Current Bonus Armor: ' + Math.round(path["bonusResistRatio"] * bonusArmor) 
                      + ', Current Bonus Magic Resist: ' + Math.round(path["bonusResistRatio"] * bonusMR));
                    };
                    if (path["bonusBonusResistHPRatio"]) {
                      underLine('Bonus Armor, MR, and HP');
                      addText('(' + path["bonusBonusResistHPRatio"] + ' Bonus Ratio)');
                      if (path["bonusBonusPerStack"]) {
                        addText(' (+' + path["bonusBonusPerStack"] + ' per Stack)');
                      };
                      singleBreak();
                      addText('Current Bonus Armor: ' + Math.round(bonusArmor * path["bonusBonusResistHPRatio"]) + 
                      ', Current Bonus Magic Resist: ' + Math.round(path["bonusBonusResistHPRatio"] * bonusMR)
                      + ', Current Bonus HP: ' + Math.round(path["bonusBonusResistHPRatio"] * bonusHP) );
                    };
                    if (path["bonusResistPerStack"]) {
                      addText(' (+' + path["bonusResistPerStack"] + ' per Stack)');
                    }
                    if (path["minResistRatio"]) {
                      underLine('Bonus Armor and Magic Resist');
                      addText('Min: ' + path["minResistRatio"] + ' Total Ratio, Max: ' + path["maxResistRatio"] + ' Total Ratio');
                      singleBreak();
                      addText('Current Min: Armor: ' + Math.round(path["minResistRatio"] * totalArmor) 
                      + ', Magic Resist: ' + Math.round(path["minResistRatio"] * totalMR));
                      singleBreak();
                      addText('Current Max: Armor: ' + Math.round(path["maxResistRatio"] * totalArmor) 
                      + ', Magic Resist: ' + Math.round(path["maxResistRatio"] * totalMR));
                    }
                    if (path["bonusArmor"]) {
                      underLine('Bonus Armor')
                      if (path["bonusArmor"]["minArmorRatio"]) {
                        addText('Min: (' + removeParen(path["bonusArmor"]["minArmorRatio"])
                         + ' Armor Ratio), Max: (' + removeParen(path["bonusArmor"]["maxArmorRatio"]) + ' Armor Ratio)')
                        singleBreak();
                        addText('Current Min: ' + Math.round(path["bonusArmor"]["minArmorRatio"] * totalArmor) 
                        + ' Armor Ratio), Max: ' + + Math.round(path["bonusArmor"]["maxArmorRatio"] * totalArmor))
                      }
                      if (path["bonusArmorRatio"]) {
                        addText(' (+' + removeParen(path["bonusArmorRatio"]) + ' Bonus Armor Ratio)');
                      }
                    };
                    if (path["bonusMagicResist"]) {
                      singleBreak();
                      underLine('Bonus Magic Resist')
                      addText(removeSpace(path["bonusMagicResist"]))
                      if (path["bonusMagicResistRatio"]) {
                        addText(' (+' + removeParen(path["bonusMagicResistRatio"]) + ' Bonus Magic Resist Ratio)');
                      }
                    };
                    if (path["bonusHealth"]) {
                      underLine('Bonus Health')
                      if (path["bonusHealth"]["healthPerStack"]) {
                        addText('(' + path["bonusHealth"]["healthPerStack"] + ' per Stack)');
                      }
                      if (path["bonusHealth"]["healthPerTakedown"]) {
                        addText(' (+' + path["bonusHealth"]["healthPerTakedown"] + ' per Takedown)');
                      }
                    }
                    if (path["bonusMoveSpeedRatio"]) {
                      underLine('Bonus Move Speed Ratio')
                      addText(removeSpace(path["bonusMoveSpeedRatio"]))
                    }
                    if (path["bonusMoveSpeedRatioPer100AP"]) {
                      addText(' (+' + path["bonusMoveSpeedRatioPer100AP"] + ' per 100 Ability Power)');
                    }
                    if (path["lifeStealByLvl"]) {
                      underLine('Life Steal Ratio');
                      addText('[' + path["lifeStealByLvl"][0] + " to " + path["lifeStealByLvl"][17] + ", based on lvl. ");
                      underLine("Currently");
                      addText(path["lifeStealByLvl"][champLevel] + '] ')
                    }
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
                    }
                    if (path["bonusAttackSpeed"]) {
                      underLine('Bonus Attack Speed Ratio')
                      addText(removeSpace(path["bonusAttackSpeed"]))
                    }
                    if (path["attackSpeedPerMissingHPRatio"]) {
                      underLine('Bonus Attack Speed');
                      addText('(' + path["attackSpeedPerMissingHPRatio"] + ' per Missing HP Ratio)');
                    }
                    if (path["minBonusAttackSpeed"]) {
                      underLine('Bonus Attack Speed');
                      addText('Min: ' + path["minBonusAttackSpeed"]);
                      singleBreak();
                      addText('Max: ' + path["maxBonusAttackSpeed"]);
                    }
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
                      addText('Current Value: ' + Math.round(path["maxHPRegen"] * totalHP) + ' HP per 5 secs.');
                    };
                    if (path["minMaxHPRegen"]) {
                      underLine('Max HP Regen Ratio');
                      addText('Min: ' + path["minMaxHPRegen"] + ', Max: ' + path["maxMaxHPRegen"]);
                      singleBreak();
                      addText('Current HP per 5: Min: ' + Math.round(path["minMaxHPRegen"] * totalHP) 
                      + ', Max: ' + Math.round(path["maxMaxHPRegen"] * totalHP));
                    };
                    if (path["tenacity"]) {
                      underLine('Tenacity Ratio');
                      addText(path["tenacity"])
                    }
                    if (path["maxHPRegenByLvl"]) {
                      underLine('Max Health Regen Ratio');
                      addText('[' + path["maxHPRegenByLvl"][0] + " to " + path["maxHPRegenByLvl"][17] + ", based on lvl. ");
                      underLine("Currently");
                      addText(path["maxHPRegenByLvl"][champLevel] + '] ')
                    };
                    if (path["HPRegenPer5MissHPByLvl"]) {
                      underLine('Health Regen');
                      addText('[' + path["HPRegenPer5MissHPByLvl"][0] + " to " + path["HPRegenPer5MissHPByLvl"][17] 
                      + " per second, per 5% Missing HP, based on lvl. ");
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
                      addText(path["bonusManaPer100AP"] + ' per 100 AP');
                      singleBreak();
                      addText('Current Bonus Mana: ' + Math.round(path["bonusManaPer100AP"] * totalAP / 100));
                    }
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
                      addText(removeSpace(path["heal"]))
                    }
                    if (path["healByLvl"]) {
                      addText('[' + path["healByLvl"][0] + " to " + path["healByLvl"][17] + ", based on lvl. ");
                      underLine("Currently");
                      addText(path["healByLvl"][champLevel] + '] ')
                    };
                    if (path["maxHPRatioByLvl"]) {
                      addText(' (+' + path["maxHPRatioByLvl"][0] + " to " 
                      + path["maxHPRatioByLvl"][17] + " Max HP Ratio, based on lvl. ");
                      underLine("Currently");
                      addText(path["maxHPRatioByLvl"][champLevel] + ')')
                    }
                    if (path["lifeStealRatio"]) {
                      underLine('Damage Ratio');
                      addText(path["lifeStealRatio"] + ' of Life Steal Ratio');
                    }
                    if (path["dmgRatio"]) {
                      underLine('Damage Ratio');
                      addText(removeSpace(path["dmgRatio"]));
                    }
                    if (path["minDmgRatio"]) {
                      underLine('Damage Ratio');
                      addText('Min: ' + path["minDmgRatio"] + ', Max: ' + path["maxDmgRatio"]);
                    }
                    if (path["dmgTakenRatio"]) {
                      underLine('Damage Taken Ratio');
                      addText(removeSpace(path["dmgTakenRatio"]));
                    }
                    if (path["APRatio"]) {
                      addText(" (+" + removeParen(path["APRatio"]) + " AP Ratio)");
                    };
                    if (path["ADRatio"]) {
                      addText(" (+" + removeParen(path["ADRatio"]) + " AD Ratio)")
                    };
                    if (path["bonusADRatio"]) {
                      addText(" (+" + removeParen(path["bonusADRatio"]) + " Bonus AD Ratio)")
                    };
                    if (path["bonusHPRatio"]) {
                      addText(" (+" + removeParen(path["bonusHPRatio"]) + " Bonus HP Ratio)")
                    };
                    if (path["maxHPRatio"]) {
                      addText(" (+" + removeParen(path["maxHPRatio"]) + " Max HP Ratio)")
                    };
                    if (path["enemyMaxHPRatio"]) {
                      addText(" (+" + removeParen(path["enemyMaxHPRatio"]) + " Enemy Max HP Ratio)")
                    };
                    if (path["enemyMaxHPRatioByLvl"]) {
                      addText(' (+' + path["enemyMaxHPRatioByLvl"][0] + " to " 
                      + path["enemyMaxHPRatioByLvl"][17] + " Enemy Max HP Ratio, based on lvl. ");
                      underLine("Currently");
                      addText(path["enemyMaxHPRatioByLvl"][champLevel] + ')')
                    };
                    if (path["enemyMaxHPRatioPer100AP"]) {
                      addText(" (+" + path["enemyMaxHPRatioPer100AP"] + " Enemy Max HP Ratio Per 100 AP)")
                    }
                    if (path["enemyMaxHPRatioPer100BonusAD"]) {
                      addText(" (+" + path["enemyMaxHPRatioPer100BonusAD"] + " Enemy Max HP Ratio Per 100 Bonus AD)")
                    }
                    if (path['enemyMaxHPRatioPerBonusAS']) {
                      addText(" (+" + path["enemyMaxHPRatioPerBonusAS"] + " Enemy Max HP Ratio Per Bonus Attack Speed Ratio)")
                    };
                    if (path["maxHPRatioByUltRank"]) {
                      addText('[' + path["maxHPRatioByUltRank"][0] + " to " 
                      + path["maxHPRatioByUltRank"][3] + " Max HP Ratio, based on ult rank. ");
                      underLine("Currently");
                      addText(path["maxHPRatioByUltRank"][RRank] + '] ')
                      singleBreak();
                      underLine('Current Value');
                      addText(Math.round(path["maxHPRatioByUltRank"][RRank] * totalHP));
                    };
                    if (path["increasePer1%HPLostLast4Sec"]) {
                      singleBreak();
                      addText('Increase by Ratio of ' +  path["increasePer1%HPLostLast4Sec"] + ' per 1% HP lost in last 4 seconds.');
                    }
                    if (path["missingHPRatio"]) {
                      addText(" (+" + removeParen(path["missingHPRatio"]) + " Missing HP Ratio)")
                    };
                    if (path['missingHPRatioPer100AP']) {
                      addText(" (+" + removeParen(path["missingHPRatioPer100AP"]) + " Missing HP Ratio per 100 AP)")
                    };
                    if (path["preMitigation"]) {
                      addText(', pre-mitigation.');
                    }
                    if (path["system"] === "max") {
                      underLine('Max');
                      if (path["maxHealByLvl"]) {
                        addText('[' + path["maxHealByLvl"][0] + " to " + path["maxHealByLvl"][17] + ", based on lvl. ");
                        underLine("Currently");
                        addText(path["maxHealByLvl"][champLevel] + '] ')
                      }
                    }
                    if (path["system"] === '2Part') {
                      underLine('Part 1');
                      if (path["part1"]["heal"]) {
                        addText(removeSpace(path["part1"]["heal"]))
                      };
                      if (path["part1"]["APRatio"]) {
                        addText(" (+" + removeParen(path["part1"]["APRatio"]) + " AP Ratio)");
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
                        addText(removeSpace(path["minHeal"]))
                      }
                      if (path["minHealByLvl"]) {
                        addText('[' + path["minHealByLvl"][0] + " to " + path["minHealByLvl"][17] + ", based on lvl. ");
                        underLine("Currently");
                        addText(path["minHealByLvl"][champLevel] + '] ')
                      }
                      if (path["minAPRatio"]) {
                        addText(" (+" + removeParen(path["minAPRatio"]) + " AP Ratio)")
                      }
                      if (path["minADRatio"]) {
                        addText(" (+" + removeParen(path["minADRatio"]) + " AD Ratio)")
                      }
                      if (path["minBonusADRatio"]) {
                        addText(" (+" + removeParen(path["minBonusADRatio"]) + " Bonus AD Ratio)")
                      }
                      if (path["minBonusHPRatio"]) {
                        addText(" (+" + removeParen(path["minBonusHPRatio"]) + " Bonus HP Ratio)")
                      }
                      if (path["minMaxHPRatio"]) {
                        addText(" (+" + removeParen(path["minMaxHPRatio"]) + " Max HP Ratio)")
                      }
                      if (path["minMissingHPRatio"]) {
                        addText(" (+" + removeParen(path["minMissingHPRatio"]) + " Missing HP Ratio)")
                      }
                      if (path["minMissingHPRatioPer100AP"]) {
                        addText(" (+" + removeParen(path["minMissingHPRatioPer100AP"]) + " Missing HP Ratio per 100 AP)");
                      }
    
                      singleBreak();
                      underLine('Max')
    
                      if (path["maxHeal"]) {
                        addText(removeSpace(path["maxHeal"]))
                      }
                      if (path["maxHealByLvl"]) {
                        addText('[' + path["maxHealByLvl"][0] + " to " + path["maxHealByLvl"][17] + ", based on lvl. ");
                        underLine("Currently");
                        addText(path["maxHealByLvl"][champLevel] + '] ')
                      }
                      if (path["maxAPRatio"]) {
                        addText(" (+" + removeParen(path["maxAPRatio"]) + " AP Ratio)")
                      }
                      if (path["maxADRatio"]) {
                        addText(" (+" + removeParen(path["maxADRatio"]) + " AD Ratio)")
                      }
                      if (path["maxBonusADRatio"]) {
                        addText(" (+" + removeParen(path["maxBonusADRatio"]) + " Bonus AD Ratio)")
                      }
                      if (path["maxBonusHPRatio"]) {
                        addText(" (+" + removeParen(path["maxBonusHPRatio"]) + " Bonus HP Ratio)")
                      }
                      if (path["maxMaxHPRatio"]) {
                        addText(" (+" + removeParen(path["maxMaxHPRatio"]) + " Max HP Ratio)")
                      }
                      if (path["maxMissingHPRatio"]) {
                        addText(" (+" + removeParen(path["maxMissingHPRatio"]) + " Missing HP Ratio)")
                      }
                      if (path["maxMissingHPRatioPer100AP"]) {
                        addText(" (+" + removeParen(path["maxMissingHPRatioPer100AP"]) + " Missing HP Ratio per 100 AP)");
                      }
                    };
                    if (path["interval"]) {
                      addText(' per ' + path["interval"] + ' sec')
                      if (path["duration"]) {
                        addText(', for ' + path["duration"] + ' seconds.');
                      }
                      singleBreak();
                      if (path["system"] === 'minMax') {
                        singleBreak();
                      }
                      underLine('Total');
                      if (path["heal"]) {
                        addText(mapSpace(multiplyTicks(path["heal"])));
                      }
                      if (path["APRatio"]) {
                        addText(' (+' + mapParen(multiplyTicks2(path['APRatio'])) + ' AP Ratio)');
                      }
                      if (path["system"] === 'minMax') {
                        if (path["minHeal"]) {
                          addText('Min: ' + mapSpace(multiplyTicks(path["minHeal"])));
                        }
                        if (path["minAPRatio"]) {
                          addText(' (+' + mapParen(multiplyTicks2(path['minAPRatio']))+ ' AP Ratio)');
                        }
                        singleBreak();
                        if (path["maxHeal"]) {
                          addText('Max: ' + mapSpace(multiplyTicks(path["maxHeal"])));
                        }
                        if (path["maxAPRatio"]) {
                          addText(' (+' + mapParen(multiplyTicks2(path['maxAPRatio']))+ ' AP Ratio)');
                        }
                      }
                    }
                    if (path["system"] === 'perTarget') {
                      addText(' per champion');
                    }
                    if (path["duration"] && !path["interval"]) {
                        addText(' over ' + path["duration"] + ' seconds.')
                    }
                    if (path["empower"]) {
                      var empPath = path["empower"]
                      singleBreak();
                      addBold('Empowered Heal: ');
                      if (empPath["system"] === 'minMax') {
                        underLine('Min');
                        if (empPath["minHeal"]) {
                          addText(removeSpace(empPath["minHeal"]));
                        }
                        if (empPath["minBonusADRatio"]) {
                          addText(' (+' + removeParen(empPath["minBonusADRatio"]) + ' Bonus AD Ratio)');
                        }
                        singleBreak();
                        underLine('Max');
                        if (empPath["maxHeal"]) {
                          addText(removeSpace(empPath["maxHeal"]));
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
                      }
                      if (empPath["missingHPRatio"]) {
                        addText(" (+" + empPath["missingHPRatio"] + " Missing HP Ratio)")
                      }
                      if (empPath["missingHPRatioPer100AP"]) {
                        addText(" (+" + empPath["missingHPRatioPer100AP"] + " Missing HP Ratio per 100 AP)")
                      }
                    }
                    doubleBreak();
                  };
    
                  if (champFile[ability]["shield"]) {
                    var path = champFile[ability]["shield"];
                    if (path["type"] !== 'all') {
                      addBold(path["type"] + ' Shield: ');
                    } else {
                      addBold(' Shield: ');
                    };
                    abilityDiv.appendChild(bold)
                    if (path["shield"]) {
                      addText(removeSpace(path["shield"]))
                    }
                    if (path["shieldByLvl"]) {
                      addText('[' + path["shieldByLvl"][0] + " to " + path["shieldByLvl"][17] + ", based on lvl. ");
                      underLine("Currently");
                      addText(path["shieldByLvl"][champLevel] + '] ')
                    };
                    if (path["shieldPerStack"]) {
                      addText(" (+" + path["shieldPerStack"] + " per Stack)")
                    }
                    if (path["dmgTakenRatio"]) {
                      underLine('Damage Taken Ratio');
                      addText(removeSpace(path["dmgTakenRatio"]));
                    }
                    if (path["APRatio"]) {
                      addText(" (+" + removeParen(path["APRatio"]) + " AP Ratio)")
                    };
                    if (path["ADRatio"]) {
                      addText(" (+" + removeParen(path["ADRatio"]) + " AD Ratio)")
                    };
                    if (path["bonusADRatio"]) {
                      addText(" (+" + removeParen(path["bonusADRatio"]) + " Bonus AD Ratio)")
                    };
                    if (path["bonusHPRatio"]) {
                      addText(" (+" + removeParen(path["bonusHPRatio"]) + " Bonus HP Ratio)")
                    };
                    if (path["maxHPRatio"]) {
                      addText(" (+" + removeParen(path["maxHPRatio"]) + " Max HP Ratio)")
                    };
                    if (path["maxHPRatioByLvl"]) {
                      addText('[' + path["maxHPRatioByLvl"][0] + " to " 
                      + path["maxHPRatioByLvl"][17] + " Max HP Ratio, based on lvl. ");
                      underLine("Currently");
                      addText(path["maxHPRatioByLvl"][champLevel] + '] ')
                    }
                    if (path["maxHPRatioPerStack"]) {
                      addText(" (+" + removeParen(path["maxHPRatioPerStack"]) + " Max HP Ratio per stack)")
                    };
                    if (path["maxManaRatio"]) {
                      addText(" (+" + removeParen(path["maxManaRatio"]) + " Max Mana Ratio)")
                    };
                    if (path["maxMaxHPRatio"]) {
                      underLine('Max')
                      addText('(' + removeParen(path["maxMaxHPRatio"]) + ' Max HP Ratio)');
                    };
                    if (path["system"] === "minMax" ) {
                      underLine('Min')
                      if (path["minShield"]) {
                        addText(removeSpace(path["minShield"]))
                      }
                      if (path["minShieldByLvl"]) {
                        addText(' [' + path["minShieldByLvl"][0] + " to " + path["minShieldByLvl"][17] + ", based on lvl. ");
                        underLine("Currently");
                        addText(path["minShieldByLvl"][champLevel] + '] ')
                      }
                      if (path["minAPRatio"]) {
                        addText(" (+" + removeParen(path["minAPRatio"]) + " AP Ratio)")
                      }
                      if (path["minADRatio"]) {
                        addText(" (+" + removeParen(path["minADRatio"]) + " AD Ratio)")
                      }
                      if (path["minBonusADRatio"]) {
                        addText(" (+" + removeParen(path["minBonusADRatio"]) + " Bonus AD Ratio)")
                      }
                      singleBreak();
                      underLine('Max')
                      
                      if (path["maxShield"]) {
                        addText(removeSpace(path["maxShield"]))
                      }
                      if (path["maxShieldByLvl"]) {
                        addText(' [' + path["maxShieldByLvl"][0] + " to " + path["maxShieldByLvl"][17] + ", based on lvl. ");
                        underLine("Currently");
                        addText(path["maxShieldByLvl"][champLevel] + '] ')
                      }
                      if (path["maxAPRatio"]) {
                        addText(" (+" + removeParen(path["maxAPRatio"]) + " AP Ratio)")
                      }
                      if (path["maxADRatio"]) {
                        addText(" (+" + removeParen(path["maxADRatio"]) + " AD Ratio)")
                      }
                      if (path["maxBonusADRatio"]) {
                        addText(" (+" + removeParen(path["maxBonusADRatio"]) + " Bonus AD Ratio)")
                      }
                    }
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
                  }
    
                  if (champFile[ability]["revive"]) {
                    var path = champFile[ability]["revive"]
                    addBold('Revive: ')
                    if (path["reviveTransform"]) {
                      underLine('Transform Stats')
                      addText('HP Ratio: ' + path["reviveTransform"]["HPRatio"] 
                      + ', Value: ' + Math.round(path["reviveTransform"]["HPRatio"] * totalHP))
                      if (path["reviveTransform"]["bonusArmorByLvl"]) {
                        singleBreak();
                        addText('Bonus Armor: ' + path["reviveTransform"]["bonusArmorByLvl"][0] 
                        + " to " + path["reviveTransform"]["bonusArmorByLvl"][17] + ", based on lvl. ")
                        addText('Currently: ' + path["reviveTransform"]["bonusArmorByLvl"][champLevel])
                      };
                      if (path["reviveTransform"]["bonusMagicResistByLvl"]) {
                        singleBreak();
                        addText('Bonus Magic Resist: ' + path["reviveTransform"]
                        ["bonusMagicResistByLvl"][0] + " to " + path["reviveTransform"]["bonusMagicResistByLvl"][17]
                        + ', based on lvl. Currently: ' + path["reviveTransform"]["bonusMagicResistByLvl"][champLevel])
                      };
                      if (path["reviveTransform"]["armorRatio"]) {
                        singleBreak();
                        addText('Armor Ratio: ' + path["reviveTransform"]["armorRatio"]
                        + ', Value: ' + Math.round(path["reviveTransform"]["armorRatio"] * totalArmor));
                      };
                      if (path["reviveTransform"]["magicResistRatio"]) {
                        singleBreak();
                        addText('Magic Resist Ratio: ' + path["reviveTransform"]["magicResistRatio"]
                        + ', Value: ' + Math.round(path["reviveTransform"]["magicResistRatio"] * totalMR))
                      };
                      if (path["reviveTransform"]["aoeResist"]) {
                        singleBreak();
                        addText('AOE Resist Ratio: ' + path["reviveTransform"]["aoeResist"])
                      }
                      singleBreak();
                      underLine("Duration")
                      if (path["reviveTransform"]["duration"]) {
                        addText(path["reviveTransform"]["duration"])
                      }
                      if (path["reviveTransform"]["durationByLvl"]) {
                        addText('[' + path["reviveTransform"]["durationByLvl"][0] 
                        + " to " + path["reviveTransform"]["durationByLvl"][17] + "], based on lvl. ")
                        addText('Currently: ' + path["reviveTransform"]["durationByLvl"][champLevel])
                      }
                    }
                    if (path["health"]) {
                      underLine('Health Restored');
                      addText(removeSpace(path["health"]))
                    }
                    if (path["healthPerAP"]) {
                      addText(' (+' + path["healthPerAP"] + ' per AP)')
                    }
                    if (path["minHPRestoreRatio"]) {
                      singleBreak();
                      underLine('Health Restored');
                      addText('Min: (' + path["minHPRestoreRatio"] + ' Max Health Ratio, Value: ' 
                      + Math.round(path["minHPRestoreRatio"] * totalHP) + '), Max: (' + path["maxHPRestoreRatio"] 
                      + ' Max Health Ratio, Value: ' + Math.round(path["maxHPRestoreRatio"] * totalHP) + ')');
                    }
                    doubleBreak();
                  }
    
                  if (champFile[ability]["damageRedux"]) {
                    var path = champFile[ability]["damageRedux"]
                    if (path["type"] !== 'all') {
                      addBold('Reduced ' + path["type"] + ' Damage Taken: ')
                    } else {
                      addBold('Reduced Damage Taken: ')
                    };
                    if (path["reduxRatio"]) {
                      addText('Reduced by ratio of ' + removeSpace(path["reduxRatio"]))
                    }
                    if (path["dmg"]) {
                      addText('Reduced by ' + removeSpace(path["dmg"]));
                    }
                    if (path["APRatio"]) {
                      addText(' (+' + removeParen(path["APRatio"]) + ' AP Ratio)')
                    }
                    if (path["bonusArmorRatio"]) {
                      addText(' (+' + removeParen(path["bonusArmorRatio"]) + ' Bonus Armor Ratio)')
                    }
                    if (path["bonusMagicResistRatio"]) {
                      addText(' (+' + removeParen(path["bonusMagicResistRatio"]) + ' Bonus Magic Resist Ratio)')
                    }
                    if (path['maxReduxRatio']) {
                      addText(', up to a maximum reduction ratio of ' + removeSpace(path["maxReduxRatio"]));
                    }
                    if (path["reduxRatioPer100AP"]) {
                      addText(' (+' + removeParen(path["reduxRatioPer100AP"]) + ' per 100 Ability Power)');
                    }
                    if (path["aoeDmgReduxRatio"]) {
                      addText('AOE Damage reduced by ratio of ' + removeSpace(path["aoeDmgReduxRatio"]))
                    };
                    if (path["autoBlock"]) {
                      singleBreak();
                      addText('Blocks auto attacks.');
                    }
                    if (path["duration"] || path["minDuration"]) {
                      singleBreak();
                      underLine('Duration')
                    }
                    if (path["duration"]) {
                      addText(removeSpace(path["duration"]))
                    };
                    if (path["minDuration"]) {
                      addText('Min: ' + path["minDuration"] + ', Max: ' + path["maxDuration"]);
                    }
                    if (path["calculateFrom"]) {
                      singleBreak();
                      addText('Applies ' + path["calculateFrom"] + '.')
                    }
                    doubleBreak();
                  };
    
                  if (champFile[ability]["magicDamageRedux"]) {
                    var path = champFile[ability]["magicDamageRedux"]
                    addBold('Reduced Magic Damage Taken: ')
                    if (path["reduxRatio"]) {
                      addText('Reduced by ratio of ' + removeSpace(path["reduxRatio"]))
                    }
                    if (path["reduxRatioPer100AP"]) {
                      addText(' (+' + removeParen(path["reduxRatioPer100AP"]) + ' per 100 Ability Power)')
                    }
                    if (path["reduxRatioPer100BonusMR"]) {
                      addText(' (+' + removeParen(path["reduxRatioPer100BonusMR"]) + ' per 100 Bonus Magic Resist)')
                    }
                    if (path["duration"]) {
                      addText(' for ' + path["duration"] + ' seconds.')
                    }
                    singleBreak();
                  };
    
                  if (champFile[ability]["physDamageRedux"]) {
                    var path = champFile[ability]["physDamageRedux"]
                    addBold('Reduced Physical Damage Taken: ')
                    if (path["reduxRatio"]) {
                      addText('Reduced by ratio of ' + removeSpace(path["reduxRatio"]))
                    }
                    if (path["reduxRatioPer100AP"]) {
                      addText(' (+' + removeParen(path["reduxRatioPer100AP"]) + ' per 100 Ability Power)')
                    }
                    if (path["reduxRatioPer100BonusMR"]) {
                      addText(' (+' + removeParen(path["reduxRatioPer100BonusMR"]) + ' per 100 Bonus Magic Resist)')
                    }
                    if (path["duration"]) {
                      addText(' for ' + path["duration"] + ' seconds.')
                    }
                    doubleBreak();
                  };
    
                  if(champFile[ability]["dmgImmune"]) {
                    addBold('Damage Immune Duration: ')
                    addText(removeSpace(champFile[ability]["dmgImmune"]));
                    doubleBreak();
                  }
    
                  if(champFile[ability]["ccImmune"]) {
                    addBold('Crowd Control Immune Duration: ')
                    addText(removeSpace(champFile[ability]["ccImmune"]));
                    doubleBreak();
                  }
    
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
                    addText(removeSpace(champFile[ability]["silence"]));
                    doubleBreak();
                  };
    
                  if (champFile[ability]["blind"]) {
                    addBold('Blind Duration: ')
                    addText(removeSpace(champFile[ability]["blind"]));
                    doubleBreak();
                  }
    
                  if(champFile[ability]["interruptCC"] || champFile[ability]["interruptCCByLvl"] 
                  || champFile[ability]["minInterruptCC"]) {
                    addBold('Crowd Control Duration: ')
                  }
    
                  if (champFile[ability]["interruptCC"]) {
                    addText(removeSpace(champFile[ability]["interruptCC"]))
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
                  }
    
                  if (champFile[ability]["minInterruptCC"]) {
                    underLine('Min')
                    addText(removeSpace(champFile[ability]["minInterruptCC"]))
                    singleBreak();
                    underLine('Max')
                    addText(removeSpace(champFile[ability]["maxInterruptCC"]))
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
                      addText(removeSpace(path["redux"]));
                    }
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
                      addText(removeSpace(path["resist"]));
                    }
                    if (path["reduxRatio"]) {
                      underLine('Ratio');
                      addText(removeSpace(path["reduxRatio"]))
                    }
                    if (path["system"] === 'minMax') {
                      underLine('Min')
                      if (path["minResistRedux"]) {
                        addText(removeSpace(path["minResistRedux"]))
                      };
                      singleBreak();
                      underLine('Max')
                      if (path["maxResistRedux"]) {
                        addText(removeSpace(path["maxResistRedux"]))
                      };
                    }
                    if (path["duration"]) {
                      singleBreak();
                      underLine('Duration')
                      addText(removeSpace(path["duration"]))
                    };
                    if (path["maxDuration"]) {
                      singleBreak();
                      underLine('Max Duration')
                      addText(removeSpace(path["maxDuration"]))
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["bonusStats"]) {
                    var path = champFile[ability]["bonusStats"];
                    addBold('Bonus Stats: ');
                    if (path["attackDamageByLvl"]) {
                      underLine('Attack Damage');
                      addText('[' + path["attackDamageByLvl"][0] + " to " + path["attackDamageByLvl"][17] 
                      + "], based on lvl. Currently: " + path["attackDamageByLvl"][champLevel]);
                      singleBreak();
                    }
                    if (path["attackSpeed"]) {
                      underLine('Attack Speed Ratio');
                      addText('(' + removeParen(path["attackSpeed"]) + ')')
                      singleBreak();
                    }
                    if (path["ADRatio"]) {
                      underLine('Attack Damage Ratio');
                      addText('(' + removeParen(path["ADRatio"]) + ')')
                      singleBreak();
                    }
                    if (path["lifeSteal"]) {
                      underLine('Life Steal Ratio');
                      addText('(' + removeParen(path["lifeSteal"]) + ')')
                      singleBreak();
                    }
                    if (path["healingRatio"]) {
                      underLine('Increased Healing Ratio');
                      addText('(' + removeParen(path["healingRatio"]) + ')')
                      singleBreak();
                    }
                    if (path["healingPerMissingHPRatio"]) {
                      underLine('Increased Healing');
                      addText('(' + path["healingPerMissingHPRatio"] + ' per Missing HP Ratio)')
                      singleBreak();
                    };
                    if (path["resist"]) {
                      underLine('Armor and Magic Resist');
                      addText(removeSpace(path["resist"]));
                      singleBreak();
                    };
                    if (path["abilityPower"]) {
                      underLine('Ability Power');
                      addText(removeSpace(path["abilityPower"]));
                      singleBreak();
                    }
                    if (path["healthRegen"]) {
                      underLine('Health Regen');
                      addText(removeSpace(path["healthRegen"]) + ' per second');
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
                      addText(removeSpace(path["health"]))
                    };
                    if (path["healthPerStack"]) {
                      addText(removeSpace(path["healthPerStack"]) + ' per Stack')
                      doubleBreak();
                    };
                    if (path["APRatio"]) {
                      addText(' (+' + removeSpace(path["APRatio"]) + ' AP Ratio)');
                    }
                    if (path["duration"]) {
                      singleBreak();
                      underLine('Duration');
                      addText(removeParen(path["duration"]))
                    }
                    doubleBreak();
                  }
    
                  if (champFile[ability]["maxHPRegen"]) {
                    addBold('Max HP Ratio Regenerated: ');
                    addText(removeSpace(champFile[ability]["maxHPRegen"]));
                    doubleBreak();
                  }
    
                  if (champFile[ability]["healthRegen"]) {
                    var path = champFile[ability]["healthRegen"];
                    singleBreak();
                    addBold('Health Regen: ');
                    if (path["dmgTakenRatio"]) {
                      underLine('Damage Taken Ratio');
                      addText(removeSpace(path["dmgTakenRatio"]));
                    }
                    if (path["dmgTakenRatioByLvl"]) {
                      addText('[' + path["dmgTakenRatioByLvl"][0] 
                      + " to " + path["dmgTakenRatioByLvl"][17] + " Damage Taken Ratio, based on lvl. ");
                      underLine("Currently");
                      addText(path["dmgTakenRatioByLvl"][champLevel] + '] ')
                    }
                    if (path["greyHealthRatioByLvl"]) {
                      singleBreak();
                      underLine('Grey Health Ratio');
                      addText('[' + path["greyHealthRatioByLvl"][0] + " to " + path["greyHealthRatioByLvl"][17] + ", based on lvl. ");
                      underLine("Currently");
                      addText(path["greyHealthRatioByLvl"][champLevel] + '] ')
                    }
                    if (path["maxHPRatio"]) {
                      singleBreak();
                      underLine('Max');
                      addText(path["maxHPRatio"] + ' Max HP Ratio');
                    }
                    doubleBreak();
                  }
    
                  if (champFile[ability]["bonusAttackDamage"]) {
                    var path = champFile[ability]["bonusAttackDamage"]
                    addBold('Bonus Attack Damage: ')
                    if (path['attackDamage']) {
                      addText(removeSpace(path['attackDamage']));
                    }
                    if (path["ADRatio"]) {
                      addText(' (+' + removeParen(path["ADRatio"]) + ' AD Ratio)');
                    }
                    if (path["attackDamagePerAPRatio"]) {
                      addText(' (+' + path["attackDamagePerAPRatio"] + ' per Abiliy Power)');
                    }
                    if (path['minAttackDamage']) {
                      underLine('Min')
                      addText(removeSpace(path['minAttackDamage']))
                    };
                    if (path['maxAttackDamage']) {
                      singleBreak();
                      underLine('Max')
                      addText(removeSpace(path['maxAttackDamage']))
                    };
                    if (path["duration"]) {
                      singleBreak();
                      underLine('Duration')
                      addText(path['duration'])
                    }
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
                      addText(removeSpace(path["adaptiveForce"]));
                    }
                    if (path["allyBonusADRatio"]) {
                      addText(' (+' + removeParen(path["allyBonusADRatio"])+ ' Ally Bonus AD Ratio');
                    }
                    if (path["allyAPRatio"]) {
                      addText(' OR +' + removeParen(path["allyAPRatio"]) + ' Ally AP Ratio)');
                    }
                    doubleBreak();
                  };
    
                  if (champFile[ability]["allyBonusAdaptiveForce"]) {
                    var path = champFile[ability]["allyBonusAdaptiveForce"]
                    addBold('Ally Bonus Adaptive Force: ')
                    if (path["adaptiveAD"]) {
                      addText('[' + removeParen(path["adaptiveAD"]) + ' Attack Damage]');
                    }
                    if (path["allyAdaptiveBonusADRatio"]) {
                      addText(' (+' + removeParen(path["allyAdaptiveBonusADRatio"]) + ' Ally Bonus AD Ratio)');
                    }
                    if (path["adaptiveAP"]) {
                      addText(' OR [' + removeParen(path["adaptiveAP"]) + ' Ability Power]');
                    }
                    if (path["allyAdaptiveAPRatio"]) {
                      addText(' (+' + removeParen(path["allyAdaptiveAPRatio"]) + ' Ally AP Ratio)');
                    }
                    doubleBreak();
                  }
    
                  if (champFile[ability]["bonusResist"]) {
                    var path = champFile[ability]["bonusResist"]
                    addBold('Bonus Armor & Magic Resist: ');
                    if (path["resist"]) {
                      addText(removeSpace(path["resist"]));
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
                      addText(' (+' + path["bonusResistRatio"] + ' Bonus Resist Ratio)');
                    }
                    if (path["minResist"]) {
                      underLine('Min');
                      addText(removeSpace(path["minResist"]));
                      singleBreak();
                      underLine('Max');
                      addText(removeSpace(path["maxResist"]));
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
                      addText(removeSpace(path["armor"]))
                    };
                    if (path["armorRatio"]) {
                      addText(' (+' + removeParen(path["armorRatio"]) + ' Armor Ratio)');
                    };
                    if (path["bonusArmorRatio"]) {
                      addText(' (+' + removeParen(path["bonusArmorRatio"]) + ' Bonus Armor Ratio)');
                    };
                    if (path["bonusADRatio"]) {
                      addText(' (+' + removeParen(path["bonusADRatio"]) + ' Bonus AD Ratio)');
                    }
                    if (path["system"] === 'minMax') {
                      underLine('Min');
                      if (path["minArmor"]) {
                        addText(removeSpace(path["minArmor"]));
                      };
                      singleBreak();
                      underLine('Max');
                      if (path["maxArmor"]) {
                        addText(removeSpace(path["maxArmor"]));
                      };
                    }
                    doubleBreak();
                  };
    
                  if (champFile[ability]["allyBonusArmor"]) {
                    var path = champFile[ability]["allyBonusArmor"]
                    addBold('Ally Bonus Armor: ')
                    if (path["armor"]) {
                      addText(removeSpace(path["armor"]))
                    };
                    if (path["armorRatio"]) {
                      addText(' (+' + removeParen(path["armorRatio"]) + ' Armor Ratio)');
                    };
                    if (path["bonusArmorRatio"]) {
                      addText(' (+' + removeParen(path["bonusArmorRatio"]) + ' Armor Ratio)');
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["bonusMagicResist"]) {
                    var path = champFile[ability]["bonusMagicResist"]
                    addBold('Bonus Magic Resist: ')
                    if (path["magicResist"]) {
                      addText(removeSpace(path["magicResist"]))
                    };
                    if (path["magicResistRatio"]) {
                      addText(' (+' + removeParen(path["magicResistRatio"]) + ' Magic Resist Ratio)');
                    };
                    if (path["bonusMagicResistRatio"]) {
                      addText(' (+' + removeParen(path["bonusMagicResistRatio"]) + ' Bonus Magic Resist Ratio)');
                    };
                    if (path["APRatio"]) {
                      addText(' (+' + removeParen(path["APRatio"]) + ' AP Ratio)');
                    }
                    doubleBreak();
                  };
    
                  if (champFile[ability]["allyBonusMagicResist"]) {
                    var path = champFile[ability]["allyBonusMagicResist"]
                    addBold('Ally Bonus Magic Resist: ')
                    if (path["magicResist"]) {
                      addText(removeSpace(path["magicResist"]))
                    };
                    if (path["magicResistRatio"]) {
                      addText(' (+' + removeParen(path["magicResistRatio"]) + ' Magic Resist Ratio)');
                    };
                    if (path["bonusMagicResistRatio"]) {
                      addText(' (+' + removeParen(path["bonusMagicResistRatio"]) + ' Bonus Magic Resist Ratio)');
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["bonusAttackSpeed"]) {
                    var ASPath = champFile[ability]["bonusAttackSpeed"];
                    addBold('Bonus Attack Speed Ratio: ')
                    if (ASPath['attackSpeed']) {
                      addText(removeSpace(ASPath['attackSpeed']))
                    }
                    if (ASPath["totalAttackSpeed"]) {
                      addText(removeSpace(ASPath['totalAttackSpeed']) + ' Total Attack Speed')
                    }
                    if (ASPath["attackSpeedByLvl"]) {
                      addText('[' + ASPath["attackSpeedByLvl"][0] + " to " + ASPath["attackSpeedByLvl"][17] + ", based on lvl. ");
                      underLine('Currently');
                      addText(ASPath["attackSpeedByLvl"][champLevel] + ']');
                    };
                    if (ASPath["attackSpeedByRRank"]) {
                      addText(removeSpace(ASPath['attackSpeedByRRank']) + ' (based on R rank)')
                    }
                    if (ASPath["attackSpeedPerStack"]) {
                      addText(' (+' + ASPath["attackSpeedPerStack"] + ' per stack)');
                    }
                    if (ASPath['minAttackSpeed']) {
                      underLine('Min')
                      addText(removeSpace(ASPath['minAttackSpeed']));
                      if (ASPath["minBonusAttackSpeedRatio"]) {
                        addText(' (+' + ASPath["minBonusAttackSpeedRatio"]+ ' Bonus Attack Speed)');
                      };
                      if (ASPath["minAttackSpeedPer100AP"]) {
                        addText(' (+' + ASPath["minAttackSpeedPer100AP"] + ' per 100 AP)');
                      };

                      singleBreak();
                      underLine('Max');
                      
                      addText(removeSpace(ASPath['maxAttackSpeed']));
                      if (ASPath["maxBonusAttackSpeedRatio"]) {
                        addText(' (+' + ASPath["maxBonusAttackSpeedRatio"] + ' Bonus Attack Speed)');
                      }
                      if (ASPath["maxAttackSpeedPer100AP"]) {
                        addText(' (+' + ASPath["maxAttackSpeedPer100AP"] + ' per 100 AP)');
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
                      addText(removeSpace(ASPath["duration"]))
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
                      addText(removeSpace(path['vamp']))
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
                      addText(removeSpace(path["attackSpeed"]));
                    }
                    if (path["minAttackSpeed"]) {
                      underLine('Min');
                      addText(removeSpace(path["minAttackSpeed"]));
                      singleBreak();
                      underLine('Max');
                      addText(removeSpace(path["maxAttackSpeed"]));
                    }
                    if (path["duration"]) {
                      singleBreak();
                      underLine('Duration');
                      addText(path["duration"]);
                    }
                    doubleBreak();
                  };
    
                  if (champFile[ability]["petStats"]) {
                    var path = champFile[ability]["petStats"];
                    addBold('Pet Stats: ');
                    if (path["auto"]) {
                      underLine('Auto Attack');
                      addText(path["auto"]["type"] + ' Damage: ');
                      if (path["auto"]["dmg"]) {
                        addText(removeSpace(path["auto"]["dmg"]));
                      }
                      if (path['auto']['dmgByLvl']) {
                        addText(' [' + path["auto"]["dmgByLvl"][0] + " to " + path["auto"]["dmgByLvl"][17] + ", based on lvl. ");
                        underLine("Currently");
                        addText(path["auto"]["dmgByLvl"][champLevel] + ']')
                      }
                      if (path["auto"]["APRatio"]) {
                        addText(' (+' + removeParen(path["auto"]["APRatio"]) + ' AP Ratio)');
                      }
                      if (path["auto"]["ADRatio"]) {
                        addText(' (' + removeParen(path["auto"]["ADRatio"]) + ' AD Ratio)');
                      }
                      if (path["auto"]["bonusADRatio"]) {
                        addText(' (+' + removeParen(path["auto"]["bonusADRatio"])+ ' Bonus AD Ratio)');
                      }
                      if (path["auto"]["enemyMaxHPRatio"]) {
                        addText(' (+' + path["auto"]["enemyMaxHPRatio"] + ' Enemy Max HP Ratio)');
                      }
                      if (path["auto"]["system"] === 'minMax') {
                        addText('Min: ');
                        if (path["auto"]["minDmgByLvl"]) {
                          addText('[' + path["auto"]["minDmgByLvl"][0] + " to " 
                          + path["auto"]["minDmgByLvl"][17] + ", based on lvl. ");
                          underLine("Currently");
                          addText(path["auto"]["minDmgByLvl"][champLevel] + ']')
                        }
                        if (path["auto"]["minAPRatio"]) {
                          addText(' (+' + path["auto"]["minAPRatio"] + ' AP Ratio)');
                        }
                        singleBreak();
                        addText('Max: ');
                        if (path["auto"]["maxDmgByLvl"]) {
                          addText('[' + path["auto"]["maxDmgByLvl"][0] + " to " 
                          + path["auto"]["maxDmgByLvl"][17] + ", based on lvl. ");
                          underLine("Currently");
                          addText(path["auto"]["maxDmgByLvl"][champLevel] + ']')
                        }
                        if (path["auto"]["maxAPRatio"]) {
                          addText(' (+' + path["auto"]["maxAPRatio"] + ' AP Ratio)');
                        }
                      }
                      if (path["auto"]["multiHitDmgRatio"]) {
                        singleBreak();
                        underLine('Multi-Hit Damage Ratio');
                        addText(path["auto"]["multiHitDmgRatio"]);
                      }
                    };
                    if (path["attackSpeed"] || path["attackSpeedByLvl"] || path["minAttackSpeed"]) {
                      singleBreak();
                      underLine('Attack Speed');
                    }
                    if (path["attackSpeed"]) {
                      addText(removeSpace(path["attackSpeed"]));
                    };
                    if (path["attackSpeedByLvl"]) {
                      addText('[' + path["attackSpeedByLvl"][0] + " to " + path["attackSpeedByLvl"][17] + ", based on lvl. ");
                      underLine("Currently");
                      addText(path["attackSpeedByLvl"][champLevel] + ']')
                    }
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
                    }
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
                      addText(removeSpace(path["health"]));
                    };
                    if (path["healthByLvl"]) {
                      addText('[' + path["healthByLvl"][0] + " to " + path["healthByLvl"][17] + ", based on lvl. ");
                      underLine("Currently");
                      addText(path["healthByLvl"][champLevel] + ']')
                    };
                    if (path["healthPerAPRatioByLvl"]) {
                      addText(' (+' + path["healthPerAPRatioByLvl"][0] + " to " 
                      + path["healthPerAPRatioByLvl"][17] + " per Ability Power, based on lvl. ");
                      underLine("Currently");
                      addText(path["healthPerAPRatioByLvl"][champLevel] + ')')
                    }
                    if (path["maxHPRatio"]) {
                      addText(' (+' + path["maxHPRatio"] + ' Max HP Ratio)');
                    }
                    if (path["healthPerAPRatio"]) {
                      addText(' (+' + path["healthPerAPRatio"] + ' per AP)');
                    };
                    if (path["armor"] || path["armorByLvl"]) {
                      singleBreak();
                      underLine('Armor');
                    }
                    if (path["armor"]) {
                      addText(removeSpace(path["armor"]));
                    };
                    if (path["armorByLvl"]) {
                      addText('[' + path["armorByLvl"][0] + " to " + path["armorByLvl"][17] + ", based on lvl. ");
                      underLine("Currently");
                      addText(path["armorByLvl"][champLevel] + ']')
                    };
                    if (path["armorPerAPRatio"]) {
                      addText(' (+' + path["armorPerAPRatio"] + ' per AP)');
                    };
                    if (path["magicResist"] || path["magicResistByLvl"]) {
                      singleBreak();
                      underLine('Magic Resist');
                    }
                    if (path["magicResist"]) {
                      addText(removeSpace(path["magicResist"]));
                    };
                    if (path["magicResistByLvl"]) {
                      addText('[' + path["magicResistByLvl"][0] + " to " + path["magicResistByLvl"][17] + ", based on lvl. ");
                      underLine("Currently");
                      addText(path["magicResistByLvl"][champLevel] + ']')
                    };
                    if (path["magicResistPerAPRatio"]) {
                      addText(' (+' + path["magicResistPerAPRatio"] + ' per AP)');
                    }
                    if (path["interruptCC"]) {
                      singleBreak();
                      underLine('Crowd Control Duration');
                      addText(path["interruptCC"]);
                    }
                    doubleBreak();
                  };
    
                  if (champFile[ability]["empower"]) {
                    var ePath = champFile[ability]["empower"];
                    var empB = document.createElement('b');
                    var empU = document.createElement('u');
                    empB.appendChild(empU);
                    empU.innerText = 'Empower';
                    abilityDiv.appendChild(empB);
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
                          underLine('Auto Attack');
                          addText(path["auto"]["type"] + ' Damage: ');
                          if (path["auto"]["dmg"]) {
                            addText(removeSpace(path["auto"]["dmg"]));
                          }
                          if (path["auto"]["APRatio"]) {
                            addText(' (+' + removeParen(path["auto"]["APRatio"]) + ' AP Ratio)');
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
                          + path["healthPerAPRatioByLvl"][17] + " per Ability Power, based on lvl. ");
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
                          addText(removeSpace(damage["dmg"]));
                        };
                        if (damage["APRatio"]) {
                          addText(' (+' + removeParen(damage["APRatio"]) + ' AP Ratio)');
                        }
                        if (damage["system"] === 'minMax') {
                          underLine('Min');
                          if (damage["minDmg"]) {
                            addText(removeSpace(damage["minDmg"]));
                          }
                          if (damage["minAPRatio"]) {
                            addText(' (+' + removeParen(damage["minAPRatio"]) + ' AP Ratio)');
                          }
                          singleBreak();
                          underLine('Max');
                          if (damage["maxDmg"]) {
                            addText(removeSpace(damage["maxDmg"]));
                          }
                          if (damage["maxAPRatio"]) {
                            addText(' (+' + removeParen(damage["maxAPRatio"]) + ' AP Ratio)');
                          }
                        };
                      }
                      if (ePath['Q']['bonusDamage']) {
                        singleBreak();
                        var damage = ePath['Q']["bonusDamage"]
                        if (damage["type"]) {
                          addBold('Bonus ' + damage["type"] + " Damage: ")
                        };
                        if (damage["system"] === 'minMax') {
                          underLine('Min');
                          if (damage["minDmg"]) {
                            addText(removeSpace(damage["minDmg"]));
                          };
                          if (damage["minAPRatio"]) {
                            addText(' (+' + removeParen(damage["minAPRatio"]) + ' AP Ratio)');
                          }
                          singleBreak();
                          underLine('Max');
                          if (damage["maxDmg"]) {
                            addText(removeSpace(damage["maxDmg"]));
                          };
                          if (damage["maxAPRatio"]) {
                            addText(' (+' + removeParen(damage["maxAPRatio"]) + ' AP Ratio)');
                          }
                        }
                      }
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
                          addText(removeSpace(damage["dmg"]));
                        };
                        if (damage["APRatio"]) {
                          addText(' (+' + removeParen(damage["APRatio"]) + ' AP Ratio)');
                        }
                        if (damage["system"] === 'minMax') {
                          underLine('Min');
                          if (damage["minDmg"]) {
                            addText(removeSpace(damage["minDmg"]));
                          }
                          if (damage["minAPRatio"]) {
                            addText(' (+' + removeParen(damage["minAPRatio"]) + ' AP Ratio)');
                          }
                          singleBreak();
                          underLine('Max');
                          if (damage["maxDmg"]) {
                            addText(removeSpace(damage["maxDmg"]));
                          }
                          if (damage["maxAPRatio"]) {
                            addText(' (+' + removeParen(damage["maxAPRatio"]) + ' AP Ratio)');
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
                            addText('(' + removeParen(path["minMissingHPRatio"]) + ' Missing HP Ratio)');
                          }
                          if (path["minMissingHPRatioPer100AP"]) {
                            addText(' (+' + removeParen(path["minMissingHPRatioPer100AP"]) + ' Missing HP Ratio per 100 AP)');
                          }
                          singleBreak();
                          underLine('Max');
                          if (path["maxMissingHPRatio"]) {
                            addText('(' + removeParen(path["maxMissingHPRatio"]) + ' Missing HP Ratio)');
                          }
                          if (path["maxMissingHPRatioPer100AP"]) {
                            addText(' (+' + removeParen(path["maxMissingHPRatioPer100AP"]) + ' Missing HP Ratio per 100 AP)');
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
                          addText(removeSpace(damage["dmg"]));
                        };
                        if (damage["APRatio"]) {
                          addText(' (+' + removeParen(damage["APRatio"]) + ' AP Ratio)');
                        }
                        if (damage["system"] === '2Part') {
                          underLine('Part 1');
                          if (damage["part1"]["dmg"]) {
                            addText(removeSpace(damage["part1"]["dmg"]));
                          };
                          if (damage["part1"]["APRatio"]) {
                            addText(' (+' + removeParen(damage["part1"]["APRatio"]) + ' AP Ratio)');
                          }
                          singleBreak();
                          underLine('Part 2');
                          if (damage["part2"]["dmg"]) {
                            addText(removeSpace(damage["part2"]["dmg"]));
                          };
                          if (damage["part2"]["APRatio"]) {
                            addText(' (+' + removeParen(damage["part2"]["APRatio"]) + ' AP Ratio)');
                          }
                        }
                      }
                      if (ePath['E']['bonusShield']) {
                        singleBreak();
                        var shield = ePath['E']["bonusShield"]
                        addBold('Bonus Shield: ');
                        if (shield["shield"]) {
                          addText(removeSpace(shield["shield"]));
                        }
                        if (shield["APRatio"]) {
                          addText(' (+' + removeParen(shield["APRatio"]) + ' AP Ratio)');
                        }
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
                      addText(removeSpace(path['gained']));
                      singleBreak();
                      underLine('Remove');
                      addText(removeSpace(path['removed']));
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
                      addText(removeSpace(path['duration']));
                    };
                    doubleBreak();
                  }
    
                  if (champFile[ability]["duration"]) {
                    addBold("Duration: ")
                    addText(removeSpace(champFile[ability]["duration"]))
                    doubleBreak();
                  };
    
                  if (champFile[ability]["minDuration"]) {
                    addBold("Duration: ")
                    addText('Min: ' + removeSpace(champFile[ability]["minDuration"]) 
                    + ', Max: ' + removeSpace(champFile[ability]["maxDuration"]));
                    doubleBreak();
                  };
    
                  if (champFile[ability]["maxDuration"] && !champFile[ability]["minDuration"]) {
                    addBold("Max Duration: ")
                    abilityDiv.appendChild(bold)
                    addText(removeSpace(champFile[ability]["maxDuration"]))
                    doubleBreak();
                  };
    
                  if (champFile[ability]["coolDown"]) {
                    addBold("Cooldown: ");
                    addText(removeSpace(champFile[ability]["coolDown"]));
                  };
                  if (champFile[ability]["minCoolDown"]) {
                    addBold("Cooldown: ");
                    addText('Max: ' + champFile[ability]["maxCoolDown"] + ', Min: ' + champFile[ability]["minCoolDown"]);
                  };
                  if (champFile[ability]["maxCoolDown"] && !champFile[ability]["minCoolDown"]) {
                    addBold("Max Cooldown: ");
                    addText(champFile[ability]["maxCoolDown"]);
                  };
                  if (champFile[ability]["coolDownByLvl"]) {
                    addBold("Cooldown: ");
                    addText('[' + champFile[ability]["coolDownByLvl"][0] + " to " 
                    + champFile[ability]["coolDownByLvl"][17] + "], based on lvl. ");
                    underLine("Currently");
                    addText(champFile[ability]["coolDownByLvl"][champLevel])
                  };
                  if (champFile[ability]["combatCoolDown"]) {
                    addBold("Combat Cooldown: ");
                    addText(removeSpace(champFile[ability]["combatCoolDown"]))
                  };
                  if (champFile[ability]["staticCoolDown"]) {
                    if (champFile[ability]["coolDown"]) {
                      singleBreak();
                    }
                    addBold("Static Cooldown: ");
                    addText(removeSpace(champFile[ability]["staticCoolDown"]))
                  }
                  if (champFile[ability]["staticCoolDownByLvl"]) {
                    addBold("Static Cooldown: ");
                    addText('[' + champFile[ability]["staticCoolDownByLvl"][0] + " to " 
                    + champFile[ability]["staticCoolDownByLvl"][17] + "], based on lvl. ");
                    underLine("Currently");
                    addText(champFile[ability]["staticCoolDownByLvl"][champLevel])
                  }
                  if (champFile[ability]["autoCoolDown"]) {
                    addBold("Cooldown Number of Auto Attacks: ");
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
                    addText(champFile[ability]["basicCDMaxRefundRatioPerStack"]+ ' per Stack');
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
                    underLine('Cooldown Refund')
                    addText('Min: ' + champFile[ability]["minCoolDownRefund"]+ ', Max: ' + champFile[ability]["maxCoolDownRefund"]);
                  };
                  if (champFile[ability]["minCoolDownRefundByLvl"]) {
                    singleBreak();
                    underLine('Min Cooldown Refund')
                    addText('[' + champFile[ability]["minCoolDownRefundByLvl"][0]
                     + " to " + champFile[ability]["minCoolDownRefundByLvl"][17] + ", based on lvl. ");
                    underLine("Currently");
                    addText(champFile[ability]["minCoolDownRefundByLvl"][champLevel] + ']')
                  }
                  if (champFile[ability]["maxCoolDownRefundByLvl"]) {
                    singleBreak();
                    underLine('Max Cooldown Refund')
                    addText('[' + champFile[ability]["maxCoolDownRefundByLvl"][0]
                     + " to " + champFile[ability]["maxCoolDownRefundByLvl"][17] + ", based on lvl. ");
                    underLine("Currently");
                    addText(champFile[ability]["maxCoolDownRefundByLvl"][champLevel] + ']')
                  }
                  if (champFile[ability]["coolDownRefundRatio"]) {
                    singleBreak();
                    underLine('Cooldown Refund Ratio')
                    addText(removeSpace(champFile[ability]["coolDownRefundRatio"]));
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
                    addBold("Recharge: ");
                    addText(removeSpace(champFile[ability]["recharge"]));
                  };
                  if (champFile[ability]["staticCoolDownFormula"]) {
                    singleBreak();
                    addText('Cooldown Formula: ' + champFile[ability]["staticCoolDownFormula"]);
                  }
    
                  if (champFile[ability]["Rhaast"]) {
                    var path = champFile[ability]["Rhaast"];
                    if (ability !== 'passive') {
                      doubleBreak()
                    };
                    var rhaastU = document.createElement('u');
                    var rhaastB = document.createElement('b');
                    rhaastB.appendChild(rhaastU);
                    rhaastU.innerText = 'Rhaast'
                    abilityDiv.appendChild(rhaastB);
                    if (path["spellVamp"]) {
                      singleBreak();
                      underLine('Spell Vamp Ratio');
                      if (path["spellVamp"]["vampByLvl"]) {
                        addText('[' + path["spellVamp"]["vampByLvl"][0]
                        + " to " + path["spellVamp"]["vampByLvl"][17] + ", based on lvl. ");
                        underLine("Currently");
                        addText(path["spellVamp"]["vampByLvl"][champLevel] + ']')
                      }
                    };
                    if (path["damage"]) {
                      singleBreak();
                      underLine(path["damage"]["type"] + ' Damage')
                      if (path["damage"]["enemyMaxHPRatio"]){
                        addText('(' + path["damage"]["enemyMaxHPRatio"] + ' Enemy Max HP Ratio)');
                      }
                      if (path["damage"]["enemyMaxHPRatioPer100BonusAD"]) {
                        addText(' (+' + path["damage"]["enemyMaxHPRatioPer100BonusAD"] + ' Enemy Max HP Ratio per 100 Bonus AD)');
                      }
                      if (path["damage"]["system"] === 'minMax') {
                        addText('Min: ');
                        if (path["damage"]["minADRatio"]) {
                          addText('(' + path["damage"]["minADRatio"] + ' AD Ratio)');
                        };
                        if (path["damage"]["minEnemyMaxHPRatio"]) {
                          addText(' (+' + path["damage"]["minEnemyMaxHPRatio"]+ ' Enemy Max HP Ratio)');
                        };
                        if (path["damage"]["minEnemyMaxHPRatioPer100BonusAD"]) {
                          addText(' (+' + path["damage"]["minEnemyMaxHPRatioPer100BonusAD"] 
                          + ' Enemy Max HP Ratio per 100 Bonus AD)');
                        };
                        singleBreak();
                        addText('Max: ');
                        if (path["damage"]["maxADRatio"]) {
                          addText('(' + path["damage"]["maxADRatio"] + ' AD Ratio)');
                        };
                        if (path["damage"]["maxEnemyMaxHPRatio"]) {
                          addText(' (+' + path["damage"]["maxEnemyMaxHPRatio"]+ ' Enemy Max HP Ratio)');
                        };
                        if (path["damage"]["maxEnemyMaxHPRatioPer100BonusAD"]) {
                          addText(' (+' + path["damage"]["maxEnemyMaxHPRatioPer100BonusAD"]
                          + ' Enemy Max HP Ratio per 100 Bonus AD)');
                        };
                      } 
                    };
                    if (path["heal"]) {
                      singleBreak();
                      underLine('Heal')
                      if (path["heal"]["enemyMaxHPRatio"]){
                        addText('(' + path["heal"]["enemyMaxHPRatio"] + ' Enemy Max HP Ratio)');
                      }
                      if (path["heal"]["enemyMaxHPRatioPer100BonusAD"]){
                        addText(' (+' + path["heal"]["enemyMaxHPRatioPer100BonusAD"]
                        + ' Enemy Max HP Ratio per 100 Bonus AD)');
                      } 
                    };
                    if (path["interruptCC"]) {
                      singleBreak();
                      underLine('Crowd Control Duration')
                      addText(path["interruptCC"]);
                    }
                  };
    
                  if (champFile[ability]["Shadow"]) {
                    var path = champFile[ability]["Shadow"];
                    doubleBreak();
                    var shadowU = document.createElement('u');
                    var shadowB = document.createElement('b');
                    shadowB.appendChild(shadowU);
                    shadowU.innerText = 'Shadow'
                    abilityDiv.appendChild(shadowB);
                    if (path["damage"]) {
                      singleBreak();
                      underLine(path["damage"]["type"] + ' Damage')
                      if (path["damage"]["dmgRatioByLvl"]) {
                        addText('(' + path["damage"]["dmgRatioByLvl"][0]+ " to " + path["damage"]["dmgRatioByLvl"][17]
                        + " Ratio of damage dealt over 3 seconds, based on lvl. ");
                        underLine("Currently");
                        addText(path["damage"]["dmgRatioByLvl"][champLevel] + ')')
                      }
                    };
                    if (path["coolDown"]) {
                      singleBreak();
                      underLine('Cooldown');
                      addText(path["coolDown"]);
                    }
                  }
    
                } 
                if (ability !== 'passive' && document.getElementById(`${ability}Rank${side}`).value > 0 ) {
                  /* BEGIN RANK 1-5 SECTION */
                  if (champFile[ability]["text"]) {
                    var text = document.createTextNode(champFile[ability]["text"])
                    abilityDiv.appendChild(text)
                    doubleBreak();
                  };
    
                  if (champFile[ability]["autoEmpower"]) {
                    var damage = champFile[ability]["autoEmpower"]["damage"]
                    var bold = document.createElement('b')
                    if (!damage["durationAutos"] && !damage['autoCoolDown']) {
                      bold.innerText = 'Auto Attack Empower: '
                    } else if (damage['autoCoolDown']) {
                      bold.innerText = 'Empower 1 in every ' +  damage["autoCoolDown"] + ' Auto Attacks: '
                    } else {
                      bold.innerText = 'Empower ' +  damage["durationAutos"] + ' Auto Attacks: '
                    }
                    abilityDiv.appendChild(bold)
                    var dmgTypeU = document.createElement('u')
                    dmgTypeU.innerText = damage['type'] + " Damage";
                    var dash = document.createTextNode(': ')
                    abilityDiv.appendChild(dmgTypeU);
                    abilityDiv.appendChild(dash);
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
                    if (damage["enemyMaxHPRatio"] && enemyStats.hp) {
                      totalDmgCount += arrayCheck(damage["enemyMaxHPRatio"]) * enemyTotalHP;
                    };
                    if (damage["enemyMaxHPRatioPer100AD"] && enemyStats.hp) {
                      totalDmgCount += arrayCheck(damage["enemyMaxHPRatioPer100AD"]) * enemyTotalHP * totalAD/100;
                    };
                    if (damage["enemyMaxHPRatioPer100BonusAD"] && enemyStats.hp) {
                      totalDmgCount += arrayCheck(damage["enemyMaxHPRatioPer100BonusAD"]) * enemyTotalHP * bonusAD/100;
                    };
                    if (damage["enemyMaxHPRatioPer100AP"] && enemyStats.hp) {
                      totalDmgCount += arrayCheck(damage["enemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                    };
                    if (damage["enemyMaxHPRatioByLvl"] && enemyStats.hp) {
                      totalDmgCount += damage["enemyMaxHPRatioByLvl"][champLevel] * enemyTotalHP;
                    };
                    if (damage["maxHPRatio"]) {
                      totalDmgCount += arrayCheck(damage["maxHPRatio"]) * totalHP;
                    };
                    if ((damage["enemyCurrentHPRatio"] || damage["enemyCurrentHPByLvl"]) && enemyStats.hp) {
                      var text = document.createTextNode(' when enemy is full HP: ');
                      abilityDiv.appendChild(text);
                    };
                    if (damage["enemyCurrentHPRatio"] && enemyStats.hp) {
                      totalDmgCount += arrayCheck(damage["enemyCurrentHPRatio"]) * enemyTotalHP;
                    };
                    if (damage["enemyCurrentHPRatioByLvl"] && enemyStats.hp) {
                      totalDmgCount += damage["enemyCurrentHPRatioByLvl"][champLevel] * enemyTotalHP;
                    };
                    if (damage["armorRatio"]) {
                      totalDmgCount += arrayCheck(damage["armorRatio"]) * totalArmor;
                    };
                    if (damage["bonusArmorRatio"]) {
                      totalDmgCount += arrayCheck(damage["bonusArmorRatio"]) * bonusArmor;
                    };
                    if (damage['enemyResistRatio'] && enemyStats.hp) {
                      totalDmgCount += damage['enemyResistRatio'] * (enemyTotalArmor + enemyTotalMR);
                    }
                    if (damage["ADRatioPerCritChance"]) {
                      totalDmgCount += damage["ADRatioPerCritChance"] * totalCritChance * totalAD;
                      if (damage["ADRatioPerCritChanceWithIE"]) {
                        IEDmgCount += damage["ADRatioPerCritChanceWithIE"] * totalCritChance * totalAD;
                      }; 
                    };
                    //begin dmg count for autoempower
                    if (totalDmgCount !== 0) {
                      var text = document.createTextNode(Math.round(totalDmgCount));
                      abilityDiv.appendChild(text);
                      if (IEDmgCount !== 0) {
                        var dmgText = document.createTextNode(' (' + Math.round(totalDmgCount + IEDmgCount) + 'with IE)');
                        abilityDiv.appendChild(dmgText);
                      }
                    };
                    var maxHPRatioCounter = 0;
                    if (damage["enemyMaxHPRatio"] && !enemyStats.hp) {
                      maxHPRatioCounter += arrayCheck(damage["enemyMaxHPRatio"]);
                    };
                    if (damage["enemyMaxHPRatioPer100AD"] && !enemyStats.hp) {
                      maxHPRatioCounter += arrayCheck(damage["enemyMaxHPRatioPer100AD"]) * totalAD/100; 
                    };
                    if (damage["enemyMaxHPRatioPer100BonusAD"] && !enemyStats.hp) {
                      maxHPRatioCounter += arrayCheck(damage["enemyMaxHPRatioPer100BonusAD"]) * bonusAD/100;
                    };
                    if (damage["enemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                      maxHPRatioCounter += arrayCheck(damage["enemyMaxHPRatioPer100AP"]) * totalAP/100
                    };
                    if (damage["enemyMaxHPRatioByLvl"] && !enemyStats.hp) {
                      maxHPRatioCounter += damage["enemyMaxHPRatioByLvl"][champLevel];
                    };
                    if (maxHPRatioCounter !== 0) {
                      var text = document.createTextNode(' (+' + lengthCheck(maxHPRatioCounter) + ' Enemy Max HP Ratio)');
                      abilityDiv.appendChild(text);
                    };
                    if (damage["enemyMaxHPRatioPerStack"] && !enemyStats.hp) {
                      var text = document.createTextNode(" (+" + arrayCheck(damage["enemyMaxHPRatioPerStack"]) 
                      + " Enemy Max HP Ratio per Stack)");
                      abilityDiv.appendChild(text);
                    };
                    if (damage["enemyMaxHPRatioPerStack"] && enemyStats.hp) {
                      var text = document.createTextNode(" (+" + Math.round(arrayCheck(damage["enemyMaxHPRatioPerStack"]) 
                      * enemyTotalHP) + " per Stack)");
                      abilityDiv.appendChild(text);
                    };
                    var currentHPCounter = 0;
                    if (damage["enemyCurrentHPRatio"] && !enemyStats.hp) {
                      currentHPCounter += arrayCheck(damage["enemyCurrentHPRatio"]);
                      var text = document.createTextNode(" (+" + arrayCheck(damage["enemyCurrentHPRatio"]) 
                      + " Enemy Current HP Ratio)");
                      abilityDiv.appendChild(text);
                    };
                    if (damage["enemyCurrentHPRatioByLvl"] && !enemyStats.hp) {
                      currentHPCounter += damage["enemyCurrentHPRatioByLvl"][champLevel];
                    };
                    if (currentHPCounter !== 0) {
                      var text = document.createTextNode(" (+" + lengthCheck(currentHPCounter) + " Enemy Current HP Ratio)");
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
                      var text = document.createTextNode(" (+" + lengthCheck(missHPCounter) + " Enemy Missing HP Ratio)");
                      abilityDiv.appendChild(text);
                    };
                    if (damage["dmgPer5Chimes"]) {
                      var text = document.createTextNode(" (+" + damage["dmgPer5Chimes"] + ' per 5 chimes)');
                      abilityDiv.appendChild(text);
                    };
                    if (damage["dmgPerStack"]) {
                      var text = document.createTextNode(" (+" + damage["dmgPerStack"] + ' per Stack)');
                      abilityDiv.appendChild(text);
                    };
                    if (damage["armorIgnore"]) {
                      singleBreak();
                      var text = document.createTextNode('Ignores ' + damage["armorIgnore"] + ' ratio of enemy armor.');
                      abilityDiv.appendChild(text);
                    };
                    if (damage["alwaysCrit"]) {
                      var text = document.createTextNode('. Always critically strikes.');
                      abilityDiv.appendChild(text);
                    };
                    if (damage["attackSpeedPenalty"]) {
                      singleBreak();
                      var penU = document.createElement('u');
                      penU.innerText = 'Bonus Attack Speed Penalty Ratio';
                      abilityDiv.appendChild(penU);
                      var text = document.createTextNode(': ' + damage["attackSpeedPenalty"] );
                      abilityDiv.appendChild(text);
                    }
                    if (damage["system"] === "min" ) {
                      singleBreak();
                      var minU = document.createElement('u');
                      minU.innerText = 'Min Damage'
                      abilityDiv.appendChild(minU);
                      if (damage["minDmg"]) {
                        var text = document.createTextNode(": " + arrayCheck(damage["minDmg"]));
                        abilityDiv.appendChild(text);
                      }
                    };
                    //begin minMax section
                    if (damage["system"] === "minMax" ) {
                      var minU = document.createElement('u')
                      minU.innerText = 'Min'
                      abilityDiv.appendChild(minU)
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
                      if (damage["minEnemyMaxHPRatio"] && enemyStats.hp) {
                        minDmgCount += arrayCheck(damage["minEnemyMaxHPRatio"]) * enemyTotalHP;
                      };
                      if (damage["minEnemyMaxHPRatioPer100AP"] && enemyStats.hp) {
                        minDmgCount += arrayCheck(damage["minEnemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                      };
                      if (minDmgCount !== 0) {
                        var text = document.createTextNode(Math.round(minDmgCount));
                        abilityDiv.appendChild(text);
                      };
                      var minMaxHPRatioCounter = 0;
                      if (damage["minEnemyMaxHPRatio"] && !enemyStats.hp) {
                        minMaxHPRatioCounter += arrayCheck(damage["minEnemyMaxHPRatio"]);
                      };
                      if (damage["minEnemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                        minMaxHPRatioCounter += arrayCheck(damage["minEnemyMaxHPRatioPer100AP"]) * totalAP/100;
                      };
                      if (minMaxHPRatioCounter !== 0) {
                        var text = document.createTextNode(' (+' + lengthCheck(minMaxHPRatioCounter) + ' Enemy Max HP Ratio)');
                        abilityDiv.appendChild(text);
                      }
                      if (damage["minDmgPerStack"]) {
                        var text = document.createTextNode(' (+' + damage["minDmgPerStack"] + ' per Stack)');
                        abilityDiv.appendChild(text);
                      };
                      singleBreak();
                      var maxU = document.createElement('u')
                      maxU.innerText = 'Max'
                      abilityDiv.appendChild(maxU)
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
                      if (damage["maxEnemyMaxHPRatio"] && enemyStats.hp) {
                        maxDmgCount += arrayCheck(damage["maxEnemyMaxHPRatio"]) * enemyTotalHP;
                      };
                      if (damage["maxEnemyMaxHPRatioPer100AP"] && enemyStats.hp) {
                        maxDmgCount += arrayCheck(damage["maxEnemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                      };
                      if (maxDmgCount !== 0) {
                        var text = document.createTextNode(Math.round(maxDmgCount));
                        abilityDiv.appendChild(text);
                      };
                      var maxMaxHPRatioCounter = 0;
                      if (damage["maxEnemyMaxHPRatio"] && !enemyStats.hp) {
                        maxMaxHPRatioCounter += arrayCheck(damage["maxEnemyMaxHPRatio"]);
                      };
                      if (damage["maxEnemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                        maxMaxHPRatioCounter += arrayCheck(damage["maxEnemyMaxHPRatioPer100AP"]) * totalAP/100;
                      };
                      if (maxMaxHPRatioCounter !== 0) {
                        var text = document.createTextNode(' (+' + lengthCheck(maxMaxHPRatioCounter) + ' Enemy Max HP Ratio)');
                        abilityDiv.appendChild(text);
                      }
                      if (damage["maxDmgPerStack"]) {
                        var text = document.createTextNode(' (+' + damage["maxDmgPerStack"] + ' per Stack)');
                        abilityDiv.appendChild(text);
                      };
                    };
                    if (damage["lvlRequired"]) {
                      singleBreak();
                      var lvlReqU = document.createElement('u');
                      lvlReqU.innerText = 'Level Required';
                      abilityDiv.appendChild(lvlReqU);
                      var lvlText = document.createTextNode(': ' + damage["lvlRequired"]);
                      abilityDiv.appendChild(lvlText);
                    };
                    if (damage["canCrit"]) {
                      var text = document.createTextNode(', can crit.');
                      abilityDiv.appendChild(text);
                    };
                    if (damage["critDmg"]) {
                      singleBreak();
                      var critU = document.createElement('u');
                      if (totalDmgCount === 0 && minDmgCount === 0 && maxDmgCount === 0) {
                        critU.innerText = 'Crit Damage Ratio';
                      } else {
                        critU.innerText = 'Crit Damage';
                      };
                      abilityDiv.appendChild(critU);
                      if (totalDmgCount === 0 && minDmgCount === 0 && maxDmgCount === 0) {
                        var text = document.createTextNode(': ' + damage["critDmg"]);
                        abilityDiv.appendChild(text);
                      };
                      if (totalDmgCount !== 0) {
                        var text = document.createTextNode(': ' + Math.round(damage["critDmg"] * totalDmgCount));
                        abilityDiv.appendChild(text);
                      };
                      if (minDmgCount !== 0) {
                        var text = document.createTextNode(': Min: ' + Math.round(damage["critDmg"] * minDmgCount)
                        + ', Max: ' + Math.round(damage["critDmg"] * maxDmgCount));
                        abilityDiv.appendChild(text);
                      };
                      if (damage["critDmgWithIE"]) {
                        if (totalDmgCount === 0 && minDmgCount === 0 && maxDmgCount === 0) {
                          var IEText = document.createTextNode(' (' + damage["critDmgWithIE"] + ' with Infinity Edge)');
                          abilityDiv.appendChild(IEText);
                        };
                        if (totalDmgCount !== 0) {
                          var IEText = document.createTextNode(' (' + Math.round(damage["critDmgWithIE"] * totalDmgCount) 
                          + ' with Infinity Edge)');
                          abilityDiv.appendChild(IEText);
                        };
                        if (minDmgCount !== 0) {
                          var text = document.createTextNode(' (Min: ' + Math.round(damage["critDmgWithIE"] * minDmgCount)
                          + ', Max: ' + Math.round(damage["critDmgWithIE"] * maxDmgCount) + ' with Infinity Edge)');
                          abilityDiv.appendChild(text);
                        }
                      }
                    };
                    if (damage["critADRatioWithIE"]) {
                      singleBreak();
                      var critU = document.createElement('u');
                      critU.innerText = 'Crit Bonus Dmg with Infinity Edge';
                      abilityDiv.appendChild(critU);
                      var text = document.createTextNode(': ' + Math.round(damage["critADRatioWithIE"]) * totalAD);
                      abilityDiv.appendChild(text);
                    };
                    if (damage["duration"]) {
                      singleBreak();
                      var durU = document.createElement('u');
                      durU.innerText = 'Duration'
                      abilityDiv.appendChild(durU)
                      var text = document.createTextNode(': ' + arrayCheck(damage["duration"]))
                      abilityDiv.appendChild(text)
                    };
                    if (damage["minDuration"]) {
                      singleBreak();
                      var minU = document.createElement('u');
                      minU.innerText = 'Min Duration'
                      abilityDiv.appendChild(minU)
                      var minText = document.createTextNode(': ' + damage["minDuration"] + ', ')
                      abilityDiv.appendChild(minText)
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max Duration'
                      abilityDiv.appendChild(maxU)
                      var maxText = document.createTextNode(': ' + damage["maxDuration"])
                      abilityDiv.appendChild(maxText)
                    };
                   
                    if (damage["system"] === "2Part" || damage["system"] === "3Part") {
                      (function() {
                        for (var i = 1; i < 4; i++) {
                          if (!damage[`part${i}`]) {
                            return;
                          }
                          var part = damage[`part${i}`];
                          var partU = document.createElement('u');
                          partU.innerText = 'Part '  + i;  
                          abilityDiv.appendChild(partU);
                          var colon = document.createTextNode(': ');
                          abilityDiv.appendChild(colon);
                          var dmgCount = 0;
    
                          if (part["type"]) {
                            var text = document.createTextNode(part['type'] + " Damage: ");
                            abilityDiv.appendChild(text);
                          };
                          if (part["ADRatio"]) {
                            dmgCount += arrayCheck(part["ADRatio"]) * totalAD;
                          };
                          var text = document.createTextNode(Math.round(dmgCount));
                          abilityDiv.appendChild(text);
                          if (part["trueDmgRatioByLvl"]) {
                            singleBreak();
                            var t2 = document.createTextNode('Physical: ' + Math.round((1 - part["trueDmgRatioByLvl"][champLevel]) 
                            * dmgCount) + ', True: ' + Math.round(part["trueDmgRatioByLvl"][champLevel] * dmgCount));
                            abilityDiv.appendChild(t2);
                          };
                          if (damage[`part${i + 1}`]) {
                            doubleBreak();
                          }
                        }
                      })();
                    };
                    if (damage["staticCoolDownByLvl"]) {
                      singleBreak();
                      var cdU = document.createElement('u');
                      cdU.innerText = "Static Cooldown";
                      abilityDiv.appendChild(cdU)
                      var text = document.createTextNode(': ' + damage["staticCoolDownByLvl"][champLevel])
                      abilityDiv.appendChild(text);
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
                      var dmgBold = document.createElement('b');
                      dmgBold.innerText = "Damage: ";
                      abilityDiv.appendChild(dmgBold);
                    }
                    if (damage["type"]) {
                      var dmgType = damage["type"];
                      if (dmgType === 'phys') {
                        dmgType = 'Physical'
                      } else {
                        dmgType = dmgType[0].toUpperCase() + dmgType.slice(1)
                      }
                      var bold = document.createElement('b')
                      bold.innerText = dmgType + " Damage: "
                      abilityDiv.appendChild(bold);
                    };                                  
                    if (damage["dmg"]) {
                      totalDmgCount += arrayCheck(damage["dmg"]);
                    };
                    if (damage["dmgByLvl"]) {
                      totalDmgCount += damage["dmgByLvl"][champLevel];
                    };
                    if (damage["totalDmgRatio"]) {
                      var dmgU = document.createElement('u');
                      dmgU.innerText = 'Total Damage Ratio';
                      abilityDiv.appendChild(dmgU);
                      var text = document.createTextNode(': ' + arrayCheck(damage["totalDmgRatio"]));
                      abilityDiv.appendChild(text);
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
                    if (damage["enemyMaxHPRatio"] && enemyStats.hp) {
                      totalDmgCount += arrayCheck(damage["enemyMaxHPRatio"]) * enemyTotalHP;
                    };
                    if (damage["enemyMaxHPRatioPer100AD"] && enemyStats.hp) {
                      totalDmgCount += arrayCheck(damage["enemyMaxHPRatioPer100AD"]) * enemyTotalHP * totalAD/100;
                    };
                    if (damage["enemyMaxHPRatioPer100BonusAD"] && enemyStats.hp) {
                      totalDmgCount += arrayCheck(damage["enemyMaxHPRatioPer100BonusAD"]) * enemyTotalHP * bonusAD/100;
                    };
                    if (damage["enemyMaxHPRatioPer100AP"] && enemyStats.hp) {
                      totalDmgCount += arrayCheck(damage["enemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                    };
                    if (damage["enemyMaxHPRatioByLvl"] && enemyStats.hp) {
                      totalDmgCount += damage["enemyMaxHPRatioByLvl"][champLevel] * enemyTotalHP;
                    };
                    if (damage["maxHPRatio"]) {
                      totalDmgCount += arrayCheck(damage["maxHPRatio"]) * totalHP;
                    };
                    if (damage["bonusHPRatio"]) {
                      totalDmgCount += arrayCheck(damage["bonusHPRatio"]) * bonusHP;
                    };
                    if ((damage["enemyCurrentHPRatio"] || damage["enemyCurrentHPRatioPer100AD"] 
                    || damage["enemyCurrentHPRatioPer100AP"]) && enemyStats.hp) {
                      var text = document.createTextNode(' when enemy is full HP: ');
                      abilityDiv.appendChild(text);
                    };
                    if (damage["enemyCurrentHPRatio"] && enemyStats.hp) {
                      totalDmgCount += arrayCheck(damage["enemyCurrentHPRatio"]) * enemyTotalHP;
                    };
                    if (damage["enemyCurrentHPRatioPer100AD"] && enemyStats.hp) {
                      totalDmgCount += arrayCheck(damage["enemyCurrentHPRatioPer100AD"]) * enemyTotalHP * totalAD/100;
                    };
                    if (damage["enemyCurrentHPRatioPer100AP"] && enemyStats.hp) {
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
                    //begin dmg count and trailing ratios for damage section
                    if (totalDmgCount !== 0) {
                      if (damage["bonusDmgRatioPerCritChance"]) {
                        totalDmgCount *= (1 + damage["bonusDmgRatioPerCritChance"] * totalCritChance);
                      };
                      if (damage["dmgRatioByRRank"]) {
                         totalDmgCount *= damage["dmgRatioByRRank"][RRank];
                      };
                      var text = document.createTextNode(Math.round(totalDmgCount));
                      abilityDiv.appendChild(text);
                      if (IEDmgCount !== 0) {
                        var dmgText = document.createTextNode(' (' + Math.round(totalDmgCount + IEDmgCount) + 'with IE)');
                        abilityDiv.appendChild(dmgText);
                      };
                      if (damage["executeDmgRatio"]) {
                        singleBreak();
                        var execU = document.createElement('u');
                        execU.innerText = 'Execute HP Threshold';
                        abilityDiv.appendChild(execU);
                        var text = document.createTextNode(': ' + Math.round(damage["executeDmgRatio"] * Math.round(totalDmgCount)));
                        abilityDiv.appendChild(text);
                      }
                    };
                    var maxHPRatioCounter = 0;
                    if (damage["enemyMaxHPRatio"] && !enemyStats.hp) {
                      maxHPRatioCounter += arrayCheck(damage["enemyMaxHPRatio"]);
                    };
                    if (damage["enemyMaxHPRatioPer100AD"] && !enemyStats.hp) {
                      maxHPRatioCounter += arrayCheck(damage["enemyMaxHPRatioPer100AD"]) * totalAD/100; 
                    };
                    if (damage["enemyMaxHPRatioPer100BonusAD"] && !enemyStats.hp) {
                      maxHPRatioCounter += arrayCheck(damage["enemyMaxHPRatioPer100BonusAD"]) * bonusAD/100;
                    };
                    if (damage["enemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                      maxHPRatioCounter += arrayCheck(damage["enemyMaxHPRatioPer100AP"]) * totalAP/100;
                    };
                    if (damage["enemyMaxHPRatioByLvl"] && !enemyStats.hp) {
                      maxHPRatioCounter += damage["enemyMaxHPRatioByLvl"][champLevel];
                    };
                    if (maxHPRatioCounter !== 0) {
                      var text = document.createTextNode(' (+' + lengthCheck(maxHPRatioCounter) + ' Enemy Max HP Ratio)');
                      abilityDiv.appendChild(text);
                    }
                    var missingHPRatioCounter = 0;
                    if (damage["enemyMissingHPRatio"]) {
                      missingHPRatioCounter += arrayCheck(damage["enemyMissingHPRatio"]);
                    };
                    if (damage["enemyMissingHPRatioPer100AP"]) {
                      missingHPRatioCounter += arrayCheck(damage["enemyMissingHPRatioPer100AP"]) * totalAP/100;
                    };
                    if (missingHPRatioCounter !== 0) {
                      var text = document.createTextNode(" (+" + lengthCheck(missingHPRatioCounter) + " Enemy Missing HP Ratio)");
                      abilityDiv.appendChild(text);
                    };
                    if (damage["enemyMissingHPRatioPerStack"]) {
                      var text = document.createTextNode(' (+' + arrayCheck(damage["enemyMissingHPRatioPerStack"]) 
                      + ' Enemy Missing HP Ratio per Stack)');
                      abilityDiv.appendChild(text);
                    };
                    var currentHPCounter = 0;
                    if (damage["enemyCurrentHPRatio"] && !enemyStats.hp) {
                      currentHPCounter += arrayCheck(damage["enemyCurrentHPRatio"]);
                    };
                    if (damage["enemyCurrentHPRatioPer100AD"] && !enemyStats.hp) {
                      currentHPCounter += arrayCheck(damage["enemyCurrentHPRatioPer100AD"]) * totalAD/100;
                    };
                    if (damage["enemyCurrentHPRatioPer100AP"] && !enemyStats.hp) {
                      currentHPCounter += arrayCheck(damage["enemyCurrentHPRatioPer100AP"]) * totalAP/100;
                    };
                    if (currentHPCounter !== 0) {
                      var text = document.createTextNode(" (+" + lengthCheck(currentHPCounter) + " Enemy Current HP Ratio)");
                      abilityDiv.appendChild(text);
                    }; 
                    if (damage["enemyCurrentHPRatioPerStack"]) {
                      var text = document.createTextNode(' (+' + arrayCheck(damage["enemyCurrentHPRatioPerStack"]) 
                      + ' Enemy Current HP Ratio per Stack)');
                      abilityDiv.appendChild(text);
                    };
                    if (damage["bonusMoveSpeedRatioByLvl"]) {
                      var text = document.createTextNode(' (+' + damage["bonusMoveSpeedRatioByLvl"][champLevel] 
                      + " Bonus Move Speed Ratio) ");
                      abilityDiv.appendChild(text);
                    };
                    if (damage["asPerBonusAS"]) {
                      singleBreak();
                      var asU = document.createElement('u');
                      asU.innerText = 'Wolf Attack Speed';
                      abilityDiv.appendChild(asU);
                      var asRatio = document.createTextNode(': ' + damage["asPerBonusAS"] * bonusAS);
                      abilityDiv.appendChild(asRatio);
                    };
    
                    if (damage["system"] === "min" ) {
                      singleBreak();
                      var minU = document.createElement('u');
                      minU.innerText = 'Min Damage'
                      abilityDiv.appendChild(minU);
                      var minCount = 0
                      if (damage["minDmg"]) {
                        minCount += arrayCheck(damage["minDmg"]);
                      };
                      if (damage["minDmgAPRatio"]) {
                        minCount += arrayCheck(damage["minDmgAPRatio"]) * totalAP;
                      };
                      var minText = document.createTextNode(': ' + Math.round(minCount));
                      abilityDiv.appendChild(minText);
                    };
    
                    if (damage["system"] === "minMax" ) {
                      var minU = document.createElement('u')
                      minU.innerText = 'Min'
                      abilityDiv.appendChild(minU)
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
                      if (damage["minEnemyMaxHPRatio"] && enemyStats.hp) {
                        minDmgCount += arrayCheck(damage["minEnemyMaxHPRatio"]) * enemyTotalHP;
                      };
                      if (damage["minEnemyMaxHPRatioPer100AP"] && enemyStats.hp) {
                        minDmgCount += arrayCheck(damage["minEnemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                      };
                      if (damage["minEnemyMaxHPRatioPer100AD"] && enemyStats.hp) {
                        minDmgCount += arrayCheck(damage["minEnemyMaxHPRatioPer100AD"]) * enemyTotalHP * totalAD/100;
                      };
                      if (damage["minEnemyMaxHPRatioPer100BonusAD"] && enemyStats.hp) {
                        minDmgCount += arrayCheck(damage["minEnemyMaxHPRatioPer100BonusAD"]) * enemyTotalHP * bonusAD/100
                      };
                      if (damage["minEnemyBonusHPRatio"] && enemyStats.hp) {
                        minDmgCount += arrayCheck(damage["minEnemyBonusHPRatio"]) * enemyTotalHP;
                      };
                      if ((damage["minEnemyCurrentHPRatio"] || damage["minEnemyCurrentHPRatioPer100AP"]) && enemyStats.hp) {
                        var text = document.createTextNode(' when enemy is full HP: ');
                        abilityDiv.appendChild(text);
                      }
                      if (damage["minEnemyCurrentHPRatio"] && enemyStats.hp) {
                        minDmgCount += arrayCheck(damage["minEnemyCurrentHPRatio"]) * enemyTotalHP;
                      };
                      if (damage["minEnemyCurrentHPRatioPer100AP"] && enemyStats.hp) {
                        minDmgCount += arrayCheck(damage["minEnemyCurrentHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                      };
                      if (minDmgCount !== 0) {
                        var text = document.createTextNode(': ' + Math.round(minDmgCount));
                        abilityDiv.appendChild(text);
                      };
                      var minMaxHPRatioCounter = 0;
                      if (damage["minEnemyMaxHPRatio"] && !enemyStats.hp) {
                        minMaxHPRatioCounter += arrayCheck(damage["minEnemyMaxHPRatio"]);
                      };
                      if (damage["minEnemyMaxHPRatioPer100AD"] && !enemyStats.hp) {
                        minMaxHPRatioCounter += arrayCheck(damage["minEnemyMaxHPRatioPer100AD"]) * totalAD/100;
                      };
                      if (damage["minEnemyMaxHPRatioPer100BonusAD"] && !enemyStats.hp) {
                        minMaxHPRatioCounter += arrayCheck(damage["minEnemyMaxHPRatioPer100BonusAD"]) * bonusAD/100;
                      }
                      if (damage["minEnemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                        minMaxHPRatioCounter += arrayCheck(damage["minEnemyMaxHPRatioPer100AP"]) * totalAP/100;
                      }
                      if (damage["minEnemyMaxHPRatioByLvl"] && !enemyStats.hp) {
                        minMaxHPRatioCounter += damage["minEnemyMaxHPRatioByLvl"][champLevel];
                      };
                      if (minMaxHPRatioCounter !== 0) {
                        var text = document.createTextNode(' (+' + lengthCheck(minMaxHPRatioCounter) + ' Enemy Max HP Ratio)');
                        abilityDiv.appendChild(text);
                      };
                      if (damage["minEnemyBonusHPRatio"] && !enemyStats.hp) {
                        var text = document.createTextNode(' (+'+ arrayCheck(damage["minEnemyBonusHPRatio"])+ ' Enemy Bonus HP Ratio');
                        abilityDiv.appendChild(text);
                      }
                      var minCurrentHPCounter = 0;
                      if (damage["minEnemyCurrentHPRatio"] && !enemyStats.hp) {
                        minCurrentHPCounter += arrayCheck(damage["minEnemyCurrentHPRatio"]);
                      };
                      if (damage["minEnemyCurrentHPRatioPer100AP"] && !enemyStats.hp) {
                        minCurrentHPCounter += arrayCheck(damage["minEnemyCurrentHPRatioPer100AP"]) * totalAP/100;
                      };
                      if (minCurrentHPCounter !== 0) {
                        var text = document.createTextNode(' (+' + lengthCheck(minCurrentHPCounter) + ' Enemy Current HP Ratio');
                        abilityDiv.appendChild(text);
                      };
                      if (damage["minEnemyMissingHPRatio"]) {
                        var text = document.createTextNode(" (+" + arrayCheck(damage["minEnemyMissingHPRatio"]) 
                        + " Enemy Missing HP Ratio)");
                        abilityDiv.appendChild(text);
                      };  
                      singleBreak();
    
                      if (damage["medDmg"]) {
                        var medDmgCounter = 0;
                        var medDmgU = document.createElement('u')
                        medDmgU.innerText = 'Med'
                        abilityDiv.appendChild(medDmgU)
                        medDmgCounter += arrayCheck(damage["medDmg"]);
                        if (damage["medAPRatio"]) {
                          medDmgCounter += arrayCheck(damage["medAPRatio"]) * totalAP;
                        };
                        if (damage["medBonusADRatio"]) {
                          medDmgCounter += arrayCheck(damage["medBonusADRatio"]) * bonusAD;
                        };
                        var medText = document.createTextNode(': ' + Math.round(medDmgCounter));
                        abilityDiv.appendChild(medText);
                        singleBreak();
                      };
    
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max';
                      abilityDiv.appendChild(maxU);
    
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
                      if (damage["maxEnemyMaxHPRatio"] && enemyStats.hp) {
                        maxDmgCount += arrayCheck(damage["maxEnemyMaxHPRatio"]) * enemyTotalHP;
                      };
                      if (damage["maxEnemyMaxHPRatioPer100AP"] && enemyStats.hp) {
                        maxDmgCount += arrayCheck(damage["maxEnemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                      };
                      if (damage["maxEnemyMaxHPRatioPer100AD"] && enemyStats.hp) {
                        maxDmgCount += arrayCheck(damage["maxEnemyMaxHPRatioPer100AD"]) * enemyTotalHP * totalAD/100;
                      };
                      if (damage["maxEnemyMaxHPRatioPer100BonusAD"] && enemyStats.hp) {
                        maxDmgCount += arrayCheck(damage["maxEnemyMaxHPRatioPer100BonusAD"]) * enemyTotalHP * bonusAD / 100;
                      };
                      if (damage["maxEnemyBonusHPRatio"] && enemyStats.hp) {
                        maxDmgCount += arrayCheck(damage["maxEnemyBonusHPRatio"]) * enemyBonusHP;
                      };
                      if ((damage["maxEnemyCurrentHPRatio"] || damage["maxEnemyCurrentHPRatioPer100AP"]) && enemyStats.hp) {
                        var text = document.createTextNode(' when enemy is full HP: ');
                        abilityDiv.appendChild(text);
                      }
                      if (damage["maxEnemyCurrentHPRatio"] && enemyStats.hp) {
                        maxDmgCount += arrayCheck(damage["maxEnemyCurrentHPRatio"]) * enemyTotalHP;
                      };
                      if (damage["maxEnemyCurrentHPRatioPer100AP"] && enemyStats.hp) {
                        maxDmgCount += arrayCheck(damage["maxEnemyCurrentHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                      };
                      if (maxDmgCount !== 0) {
                        var text = document.createTextNode(': ' + Math.round(maxDmgCount));
                        abilityDiv.appendChild(text);
                      };
                      var maxMaxHPRatioCounter = 0;
                      if (damage["maxEnemyMaxHPRatio"] && !enemyStats.hp) {
                        maxMaxHPRatioCounter += arrayCheck(damage["maxEnemyMaxHPRatio"]);
                      };
                      if (damage["maxEnemyMaxHPRatioPer100AD"] && !enemyStats.hp) {
                        maxMaxHPRatioCounter += arrayCheck(damage["maxEnemyMaxHPRatioPer100AD"]) * totalAD/100; 
                      }
                      if (damage["maxEnemyMaxHPRatioPer100BonusAD"] && !enemyStats.hp) {
                        maxMaxHPRatioCounter += arrayCheck(damage["maxEnemyMaxHPRatioPer100BonusAD"]) * bonusAD/100;
                      };
                      if (damage["maxEnemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                        maxMaxHPRatioCounter += arrayCheck(damage["maxEnemyMaxHPRatioPer100AP"]) * totalAP/100;
                      };
                      if (damage["maxEnemyMaxHPRatioByLvl"] && !enemyStats.hp) {
                        maxMaxHPRatioCounter += damage["maxEnemyMaxHPRatioByLvl"][champLevel];
                      }
                      if (maxMaxHPRatioCounter !== 0) {
                        var text = document.createTextNode(' (+' + lengthCheck(maxMaxHPRatioCounter) + ' Enemy Max HP Ratio)');
                        abilityDiv.appendChild(text);
                      }
                      if (damage["maxEnemyBonusHPRatio"] && !enemyStats.hp) {
                        var text = document.createTextNode(' (+' + arrayCheck(damage["maxEnemyBonusHPRatio"]) 
                        + ' Enemy Bonus HP Ratio');
                        abilityDiv.appendChild(text);
                      };
                      var maxCurrentHPCounter = 0;
                      if (damage["maxEnemyCurrentHPRatio"] && !enemyStats.hp) {
                        maxCurrentHPCounter += arrayCheck(damage["maxEnemyCurrentHPRatio"]);
                      };
                      if (damage["maxEnemyCurrentHPRatioPer100AP"] && !enemyStats.hp) {
                        maxCurrentHPCounter += arrayCheck(damage["maxEnemyCurrentHPRatioPer100AP"]) * totalAP/100;
                      };
                      if (maxCurrentHPCounter !== 0) {
                        var text = document.createTextNode(' (+' + lengthCheck(maxCurrentHPCounter) + ' Enemy Current HP Ratio');
                        abilityDiv.appendChild(text);
                      };
                      if (damage["maxEnemyMissingHPRatio"]) {
                        var text = document.createTextNode(" (+" + arrayCheck(damage["maxEnemyMissingHPRatio"]) 
                        + " Enemy Missing HP Ratio)");
                        abilityDiv.appendChild(text);
                      };
                    };
    
                    var evolveDmgCounter = 0;
                    if (damage["evolveMaxDmg"]) {
                      singleBreak();
                      var evolveU = document.createElement('u');
                      evolveU.innerText = 'Evolve Max Damage';
                      abilityDiv.appendChild(evolveU);
                      evolveDmgCounter += arrayCheck(damage["evolveMaxDmg"]);
                    }
                    if (damage["evolveMaxBonusADRatio"]) {
                      evolveDmgCounter += arrayCheck(damage["evolveMaxBonusADRatio"]) * bonusAD;
                    };
                    if (damage["evolveMaxAPRatio"]) {
                      evolveDmgCounter += arrayCheck(damage["evolveMaxAPRatio"]) * totalAP;
                    };
                    if (evolveDmgCounter !== 0) {
                      var text = document.createTextNode(': ' + Math.round(evolveDmgCounter));
                      abilityDiv.appendChild(text);
                    };
    
                    if (damage["system"] === 'stacking') {
                      var stackDmgCounter = 0;
                      singleBreak();
                      var stackU = document.createElement('u');
                      stackU.innerText = 'Damage per Stack';
                      abilityDiv.appendChild(stackU);
                      if (damage["dmgPerStack"]) {
                        stackDmgCounter += arrayCheck(damage["dmgPerStack"]);
                      };
                      if (damage["ADRatioPerStack"]) {
                        stackDmgCounter += arrayCheck(damage["ADRatioPerStack"]) * totalAD;
                      };
                      var text = document.createTextNode(': ' + Math.round(stackDmgCounter));
                      abilityDiv.appendChild(text);
                    };
    
                    if (damage["4thShotDmgRatio"]) {
                      singleBreak();
                      var dmgU = document.createElement('u');
                      dmgU.innerText = '4th Shot Damage';
                      abilityDiv.appendChild(dmgU);
                      var minText = document.createTextNode(': Min: ' + Math.round(damage["4thShotDmgRatio"] * minDmgCount) 
                      + ' (' + Math.round(damage["4thShotDmgRatioWithIE"] * minDmgCount) + ' with Infinity Edge)');
                      abilityDiv.appendChild(minText);
                      singleBreak();
                      var maxText = document.createTextNode('Max: ' + Math.round(damage["4thShotDmgRatio"] * maxDmgCount) 
                      + ' (' + Math.round(damage["4thShotDmgRatioWithIE"] * maxDmgCount) + ' with Infinity Edge)');
                      abilityDiv.appendChild(maxText);
                    };
    
                    if (damage["multiHitDmgRatio"]) {
                      singleBreak();
                      var text = document.createTextNode('Additional hits deal ' + arrayCheck(damage["multiHitDmgRatio"]) 
                      + ' damage ratio.');
                      abilityDiv.appendChild(text);
                    };
    
                    if (damage["minMinDmg"]) {
                      singleBreak();
                      var minDmgU = document.createElement('u');
                      minDmgU.innerText = 'Minimum Damage';
                      abilityDiv.appendChild(minDmgU);
                      var text = document.createTextNode(': ' + arrayCheck(damage["minMinDmg"]));
                      abilityDiv.appendChild(text);
                    };
    
                    if (damage["canCrit"]) {
                      var text = document.createTextNode(', can crit.');
                      abilityDiv.appendChild(text);
                    };
                    
                    if (damage["critDmg"]) {
                      singleBreak();
                      var critU = document.createElement('u');
                      if (totalDmgCount === 0 && minDmgCount === 0 && maxDmgCount === 0) {
                        critU.innerText = 'Crit Damage Ratio';
                      } else {
                        critU.innerText = 'Crit Damage';
                      };
                      abilityDiv.appendChild(critU);
                      if (totalDmgCount === 0 && minDmgCount === 0 && maxDmgCount === 0) {
                        var text = document.createTextNode(': ' + arrayCheck(damage["critDmg"]));
                        abilityDiv.appendChild(text);
                      };
                      if (totalDmgCount !== 0) {
                        var text = document.createTextNode(': ' + Math.round(damage["critDmg"] * totalDmgCount));
                        abilityDiv.appendChild(text);
                      };
                      if (minDmgCount !== 0) {
                        var text = document.createTextNode(': Min: ' + Math.round(damage["critDmg"] * minDmgCount)
                        + ', Max: ' + Math.round(damage["critDmg"] * maxDmgCount));
                        abilityDiv.appendChild(text);
                      };
                      if (damage["critDmgWithIE"]) {
                        if (totalDmgCount === 0 && minDmgCount === 0 && maxDmgCount === 0) {
                          var IEText = document.createTextNode(' (' + damage["critDmgWithIE"] + ' with Infinity Edge)');
                          abilityDiv.appendChild(IEText);
                        };
                        if (totalDmgCount !== 0) {
                          var IEText = document.createTextNode(' (' + Math.round(damage["critDmgWithIE"] * totalDmgCount) 
                          + ' with Infinity Edge)');
                          abilityDiv.appendChild(IEText);
                        };
                        if (minDmgCount !== 0) {
                          var text = document.createTextNode(' (Min: ' + Math.round(damage["critDmgWithIE"] * minDmgCount)
                          + ', Max: ' + Math.round(damage["critDmgWithIE"] * maxDmgCount) + ' with Infinity Edge)');
                          abilityDiv.appendChild(text);
                        };
                      }
                    };
                    if (damage["critADRatio"]) {
                      singleBreak();
                      var critU = document.createElement('u');
                      critU.innerText = 'Crit Bonus Damage';
                      abilityDiv.appendChild(critU);
                      var text = document.createTextNode(': ' + Math.round(damage["critADRatio"] * totalAD));
                      abilityDiv.appendChild(text);
                      if (damage["critADRatioWithIE"]) {
                        var IEText = document.createTextNode(' (' + Math.round(damage["critADRatioWithIE"] * totalAD) 
                        + ' with Infinity Edge)');
                        abilityDiv.appendChild(IEText);
                      }
                    };
    
                    if (damage["minCritADRatio"]) {
                      singleBreak();
                      var critU = document.createElement('u');
                      critU.innerText = 'Crit Bonus Damage';
                      abilityDiv.appendChild(critU);
                      var text = document.createTextNode(': Min: ' + Math.round(damage["minCritADRatio"] * totalAD));
                      abilityDiv.appendChild(text);
                      if (damage["minCritADRatioWithIE"]) {
                        var IEText = document.createTextNode(' (' + Math.round(damage["minCritADRatioWithIE"] * totalAD) 
                          + ' with Infinity Edge)');
                        abilityDiv.appendChild(IEText);
                      };
                      singleBreak();
                      var maxCritText = document.createTextNode('Max: ' + Math.round(damage["maxCritADRatio"] * totalAD));
                      abilityDiv.appendChild(maxCritText);
                      if (damage["maxCritADRatioWithIE"]) {
                        var IEText = document.createTextNode(' (' + Math.round(damage["maxCritADRatioWithIE"] * totalAD) 
                          + ' with Infinity Edge)');
                        abilityDiv.appendChild(IEText);
                      };
                    };
    
                    if (damage["empowerBonus"]) {
                      var empDmgCounter = 0;
                      var minEmpDmgCounter = 0;
                      var maxEmpDmgCounter = 0;
                      var empPath = damage["empowerBonus"];
                      singleBreak();
                      var empU = document.createElement('u');
                      empU.innerText = 'Empower Bonus Damage';
                      abilityDiv.appendChild(empU);
                      if (empPath["dmgByLvl"]) {
                        empDmgCounter += empPath["dmgByLvl"][champLevel];
                      };
                      if (empPath["bonusADRatio"]) {
                        empDmgCounter += arrayCheck(empPath["bonusADRatio"]) * bonusAD;
                      };
                      if (empDmgCounter !== 0) {
                        var text = document.createTextNode(': ' + Math.round(empDmgCounter));
                        abilityDiv.appendChild(text);
                      };
                      if (empPath["system"] === 'minMax') {
                        if (empPath["minDmgByLvl"]) {
                          minEmpDmgCounter += empPath["minDmgByLvl"][champLevel];
                        };
                        if (empPath["minAPRatio"]) {
                          minEmpDmgCounter += arrayCheck(empPath["minAPRatio"]) * totalAP;
                        };
                        var minText = document.createTextNode(': Min: ' + Math.round(minEmpDmgCounter));
                        abilityDiv.appendChild(minText);
                        singleBreak();
                        if (empPath["maxDmgByLvl"]) {
                          maxEmpDmgCounter += empPath["maxDmgByLvl"][champLevel];
                        };
                        if (empPath["maxAPRatio"]) {
                          maxEmpDmgCounter += arrayCheck(empPath["maxAPRatio"]) * totalAP;
                        };
                        var maxText = document.createTextNode('Max: ' + Math.round(maxEmpDmgCounter));
                        abilityDiv.appendChild(maxText);
                      };
                    };
    
                    if (damage["system"] === "2Part" || damage["system"] === "3Part") {
                      (function() {
                        for (var i = 1; i < 4; i++) {
                          if (!damage[`part${i}`]) {
                            return;
                          }
                          var part = damage[`part${i}`];
                          var partU = document.createElement('u');
                          partU.innerText = 'Part '  + i;  
                          abilityDiv.appendChild(partU);
                          var text = document.createTextNode(': ');
                          abilityDiv.appendChild(text);
    
                        if (part["type"]) {
                          var text = document.createTextNode(part['type'] + " Damage: ");
                          if (part["postMitigation"] === 'Magic') {
                            text.nodeValue = dmgType + ' Damage (part 1 damage, post-mitigation): ';
                          }
                          abilityDiv.appendChild(text);
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
                        if (part["enemyMaxHPRatio"] && enemyStats.hp) {
                          partDmgCount += arrayCheck(part["enemyMaxHPRatio"]) * enemyTotalHP;
                        };
                        if (part["enemyCurrentHPRatio"] && enemyStats.hp) {
                          var text = document.createTextNode(' when enemy is full HP: ');
                          abilityDiv.appendChild(text);
                          partDmgCount += arrayCheck(part["enemyCurrentHPRatio"]) * enemyTotalHP;
                        };
                        if (part["maxHPRatio"]) {
                          partDmgCount += arrayCheck(part["maxHPRatio"]) * totalHP;
                        };
                        if (partDmgCount !== 0) {
                          var text = document.createTextNode(Math.round(partDmgCount));
                          abilityDiv.appendChild(text);
                        };
                        if (part["enemyMaxHPRatio"] && !enemyStats.hp) {
                          var text = document.createTextNode(" (+" + arrayCheck(part["enemyMaxHPRatio"]) + " Enemy Max HP Ratio)");
                          abilityDiv.appendChild(text);
                        };
                        if (part["enemyCurrentHPRatio"] && !enemyStats.hp) {
                          var text = document.createTextNode(" (+" + arrayCheck(part["enemyCurrentHPRatio"]) 
                          + " Enemy Current HP Ratio)");
                          abilityDiv.appendChild(text);
                        };
                        if (part["part1RatioFormula"]) {
                          var part1Dmg = damage["part1"]["dmg"][rankIndex] + damage["part1"]["APRatio"] * totalAP;
                          var text = document.createTextNode(Math.round(part1Dmg * (1 + ((0.00075 * totalAP) - 0.15))**2));
                          abilityDiv.appendChild(text);
                        };
    
                        if (part["system"] === "minMax" ) {
                          var minU = document.createTextNode('Min: ');
                          abilityDiv.appendChild(minU)
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
                          if (part["minEnemyMaxHPRatio"] && enemyStats.hp) {
                            minPartDmgCount += arrayCheck(part["minEnemyMaxHPRatio"]) * enemyTotalHP;
                          };
                          if (part["minEnemyMaxHPRatioPer100AP"]) {
                            minPartDmgCount += arrayCheck(part["minEnemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                          };
                          if (part["bonusDmgRatioPerCritChance"]) {
                            minPartDmgCount *= (1 + part["bonusDmgRatioPerCritChance"] * totalCritChance);
                          };
                          var minText = document.createTextNode(Math.round(minPartDmgCount));
                          abilityDiv.appendChild(minText);
                          if (part["minEnemyMissingHPRatioByLvl"]) {
                            var text = document.createTextNode(' (+' + part["minEnemyMissingHPRatioByLvl"][champLevel] 
                            + " Enemy Missing HP Ratio)");
                            abilityDiv.appendChild(text);
                          }
                          singleBreak();
                          var maxU = document.createTextNode('Max: ');
                          abilityDiv.appendChild(maxU);
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
                          if (part["maxEnemyMaxHPRatio"] && enemyStats.hp) {
                            maxPartDmgCount += arrayCheck(part["maxEnemyMaxHPRatio"]) * enemyTotalHP;
                          };
                          if (part["maxEnemyMaxHPRatioPer100AP"]) {
                            maxPartDmgCount += arrayCheck(part["maxEnemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                          };
                          if (part["bonusDmgRatioPerCritChance"]) {
                            maxPartDmgCount *= (1 + part["bonusDmgRatioPerCritChance"] * totalCritChance);
                          };
                          var maxText = document.createTextNode(Math.round(maxPartDmgCount));
                          abilityDiv.appendChild(maxText);
                          if (part["maxEnemyMissingHPRatioByLvl"]) {
                            var text = document.createTextNode(' (+' + part["maxEnemyMissingHPRatioByLvl"][champLevel] 
                            + " Enemy Missing HP Ratio)");
                            abilityDiv.appendChild(text);
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
                      var storedU = document.createElement('u');
                      storedU.innerText = 'Stored Damage Ratio';
                      abilityDiv.appendChild(storedU);
                      var text = document.createTextNode(': ' + arrayCheck(damage["storedDmg"]["dmgRatio"])  
                      + ' of pre-mitigated damage dealt over the past ' + damage["storedDmg"]["duration"] + ' seconds.');
                      abilityDiv.appendChild(text);
                    };
                    if (damage["duration"]) {
                      var text = document.createTextNode(' over ' + damage["duration"] + ' seconds.');
                      abilityDiv.appendChild(text);
                    };
                    if (damage["coolDown"]) {
                      singleBreak();
                      var cdU = document.createElement('u');
                      cdU.innerText = 'Cooldown';
                      abilityDiv.appendChild(cdU);
                      var cdText = document.createTextNode(': ' + damage["coolDown"]);
                      abilityDiv.appendChild(cdText);
                    }
                    doubleBreak();
                  };
    
                  if (champFile[ability]["tickDamage"]) {
                    var path = champFile[ability]["tickDamage"];
                    var bold = document.createElement('b');
                    if (path["type"]) {
                      bold.innerText = path['type'] + " Damage Over Time: ";
                      abilityDiv.appendChild(bold);
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
                    console.log('ticks: ' + ticks);
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
                    if (path["enemyMaxHPRatio"] && enemyStats.hp) {
                      tickDmgCount += arrayCheck(path["enemyMaxHPRatio"]) * enemyTotalHP;
                    };
                    if (path["enemyMaxHPRatioByLvl"] && enemyStats.hp) {
                      tickDmgCount += path["enemyMaxHPRatioByLvl"][champLevel] * enemyTotalHP;
                    };
                    if (path["enemyMaxHPRatioPer100AP"] && enemyStats.hp) {
                      tickDmgCount += arrayCheck(path["enemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                    };
                    if (path["maxHPRatio"]) {
                      tickDmgCount += arrayCheck(path["maxHPRatio"]) * totalHP;
                    };
                    if (path["bonusHPRatio"]) {
                      tickDmgCount += arrayCheck(path["bonusHPRatio"]) * bonusHP;
                    };
                    if (path["enemyCurrentHPRatio"] && enemyStats.hp) {
                      var text = document.createTextNode(' when enemy is full HP: ');
                      abilityDiv.appendChild(text);
                      tickDmgCount += path["enemyCurrentHPRatio"] * enemyTotalHP;
                    };
                    if (tickDmgCount !== 0) {
                      var text = document.createTextNode(Math.round(tickDmgCount));
                      abilityDiv.appendChild(text);
                    };
                    var tickMaxHPCounter = 0;
                    if (path["enemyMaxHPRatio"] && !enemyStats.hp) {
                      tickMaxHPCounter += arrayCheck(path["enemyMaxHPRatio"]);
                    };
                    if (path["enemyMaxHPRatioByLvl"] && !enemyStats.hp) {
                      tickMaxHPCounter += path["enemyMaxHPRatioByLvl"][champLevel];
                    }
                    if (path["enemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                      tickMaxHPCounter += arrayCheck(path["enemyMaxHPRatioPer100AP"]) * totalAP/100;
                    };
                    if (tickMaxHPCounter !== 0) {
                      var text = document.createTextNode(' (+' + lengthCheck(tickMaxHPCounter) + ' Enemy Max HP Ratio)');
                      abilityDiv.appendChild(text);
                    };
                    if (path["enemyCurrentHPRatio"] && !enemyStats.hp) {
                      var text = document.createTextNode(' (+' + arrayCheck(path["enemyCurrentHPRatio"]) 
                      + ' Enemy Current HP Ratio)');
                      abilityDiv.appendChild(text);
                    };
                    if (path["interval"] && path["ticks"] && path["system"] !== "minMax") {
                      var text = document.createTextNode(' per ' + path["interval"] + ' sec, for ' + 
                       multiplyTicks2(path["interval"]) + ' seconds.');
                      abilityDiv.appendChild(text);
                    };
                    if (path["ticks"] && path["duration"] && path["system"] !== "minMax") {
                      var text = document.createTextNode(' per tick, ' + ticks + ' times over ' 
                      + path["duration"] + ' seconds.');
                      abilityDiv.appendChild(text);
                    };
                    if (path["critDmg"]) {
                      singleBreak();
                      var critU = document.createElement('u');
                      critU.innerText = 'Crit Damage';
                      abilityDiv.appendChild(critU);
                      var text = document.createTextNode(': ' + Math.round(path["critDmg"] * tickDmgCount));
                      abilityDiv.appendChild(text);
                      if (path["critDmgWithIE"]) {
                        var IEText = document.createTextNode(' (' + Math.round(path["critDmgWithIE"] 
                        * tickDmgCount) + ' with Infinity Edge)');
                        abilityDiv.appendChild(IEText);
                      };
                      if (path["ticks"] && path["duration"]) {
                        var text = document.createTextNode(' per tick, ' + ticks + ' times over ' 
                          + path["duration"] + ' seconds.');
                        abilityDiv.appendChild(text);
                      }
                    };
                
                    if (path["system"] === "minMax" ) {
                      var minU = document.createElement('u')
                      minU.innerText = 'Min'
                      abilityDiv.appendChild(minU)
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
                        var text = document.createTextNode(': ' + Math.round(minTickDmgCount));
                        abilityDiv.appendChild(text);
                      };
                      if (path["interval"] && path["ticks"]) {
                        var text = document.createTextNode(' per ' + path["interval"] + ' sec, for ' + 
                          multiplyTicks2(path["interval"]) + ' seconds.');
                        abilityDiv.appendChild(text);
                      };
                      if (path["ticks"] && path["duration"] && !path["ASForBonusTick"]) {
                        var text = document.createTextNode(' per tick, ' + ticks + ' times over ' 
                          + path["duration"] + ' seconds.');
                        abilityDiv.appendChild(text);
                      };
                      if (path["ASForBonusTick"]) {
                        bonusTicks += Math.floor(nonBaseAS / path["ASForBonusTick"]);
                        var text = document.createTextNode(' per tick, ' + (ticks + 
                        bonusTicks) + ' times over ' + path["duration"] + ' seconds.');
                        abilityDiv.appendChild(text);
                      };
                      singleBreak();
                      var maxU = document.createElement('u')
                      maxU.innerText = 'Max'
                      abilityDiv.appendChild(maxU)
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
                        var text = document.createTextNode(': ' + Math.round(maxTickDmgCount));
                        abilityDiv.appendChild(text);
                      };
                      if (path["interval"] && path["ticks"]) {
                        var text = document.createTextNode(' per ' + path["interval"] + ' sec, for ' + 
                          multiplyTicks2(path["interval"]) + ' seconds.');
                        abilityDiv.appendChild(text);
                      };
                      if (path["ticks"] && path["duration"] && !path["ASForBonusTick"]) {
                        var text = document.createTextNode(' per tick, ' + ticks + ' times over ' 
                          + path["duration"] + ' seconds.');
                        abilityDiv.appendChild(text);
                      };
                      if (path["ASForBonusTick"]) {
                        var text = document.createTextNode(' per tick, ' + (ticks + 
                        bonusTicks) + ' times over ' + path["duration"] + ' seconds.');
                        abilityDiv.appendChild(text);
                      }
                    };
    
                    if (path["system"] === 'min') {
                      singleBreak();
                      var minDmgU = document.createElement('u')
                      minDmgU.innerText = 'Min'
                      abilityDiv.appendChild(minDmgU)
                      var minText = document.createTextNode(": " + arrayCheck(path["minDmg"]))
                      abilityDiv.appendChild(minText)
                      if (path["interval"] && path["ticks"]) {
                        var text = document.createTextNode(' per ' + path["interval"] + ' sec, for ' + 
                         multiplyTicks2(path["interval"]) + ' seconds.');
                        abilityDiv.appendChild(text);
                      }
                    };
                    if (path["ticks"]) {
                      singleBreak();
                      var totalDmgB = document.createElement('b')
                      totalDmgB.innerText = 'Total: '
                      abilityDiv.appendChild(totalDmgB)
                
                      if (tickDmgCount !== 0) {
                        var text = document.createTextNode(Math.round(tickDmgCount * ticks));
                        abilityDiv.appendChild(text);
                        if (path['critDmg']) {
                          singleBreak();
                          var totU = document.createElement('u');
                          totU.innerText = 'Crit Total';
                          abilityDiv.appendChild(totU);
                          if (path['critDmgWithIE']) {
                            var text = document.createTextNode(': ' + Math.round(tickDmgCount * ticks * path['critDmg'])
                            + ' (' + Math.round(tickDmgCount * ticks * path['critDmgWithIE']) + ' with Infinity Edge)');
                            abilityDiv.appendChild(text);
                          } else {
                            var text = document.createTextNode(': ' + Math.round(tickDmgCount * ticks * path['critDmg']));
                            abilityDiv.appendChild(text);
                          }
                        }
                      }
                      var maxHPRatioTotal = 0;
                      if (path["enemyMaxHPRatio"] && !enemyStats.hp) {
                        maxHPRatioTotal += arrayCheck(path["enemyMaxHPRatio"]);
                      };
                      if (path["enemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                        maxHPRatioTotal += arrayCheck(path["enemyMaxHPRatioPer100AP"]) * totalAP/100;
                      };
                      if (maxHPRatioTotal !== 0) {
                        var text = document.createTextNode(' (+' + lengthCheck(maxHPRatioTotal * ticks) + ' Enemy Max HP Ratio)');
                        abilityDiv.appendChild(text);
                      };
                      if (path["enemyCurrentHPRatio"] && !enemyStats.hp) {
                        var text = document.createTextNode(' (+' + lengthCheck(ticks * arrayCheck(path["enemyCurrentHPRatio"])) 
                        + ' Enemy Current HP Ratio)');
                        abilityDiv.appendChild(text);
                      };
    
                      if (path["system"] === 'min') {
                        singleBreak();
                        var minU = document.createElement('u');
                        minU.innerText = 'Min';
                        abilityDiv.appendChild(minU);
                        var text = document.createTextNode(": " + multiplyTicks(arrayCheck(path["minDmg"])));
                        abilityDiv.appendChild(text);
                      }
    
                      if (path["system"] === "minMax" ) {
                        var minU = document.createElement('u')
                        minU.innerText = 'Min'
                        abilityDiv.appendChild(minU)
                        if (minTickDmgCount !== 0) {
                          var text = document.createTextNode(': ' + Math.round(minTickDmgCount * ticks));
                          abilityDiv.appendChild(text);
                        };
                        singleBreak();
                        var maxU = document.createElement('u')
                        maxU.innerText = 'Max'
                        abilityDiv.appendChild(maxU)
                        if (maxTickDmgCount !== 0) {
                          var text = document.createTextNode(': ' + Math.round(maxTickDmgCount * ticks));
                          abilityDiv.appendChild(text);
                        }
                      }
                    };
                    if (path["interval"] && !path["ticks"]) {
                      var text = document.createTextNode(' per ' + path["interval"] + ' sec.');
                      abilityDiv.appendChild(text);
                    };
                    
                    if (path["part1"]) {
                      var part1DmgCount = 0;
                      var part2DmgCount = 0;
                      var part1U = document.createElement('u');
                      part1U.innerText = 'Part 1';
                      abilityDiv.appendChild(part1U);
                      if (path["part1"]["dmg"]) {
                        part1DmgCount += arrayCheck(path["part1"]["dmg"]);
                      };
                      if (path["part1"]["APRatio"]) {
                        part1DmgCount += arrayCheck(path["part1"]["APRatio"]) * totalAP;
                      };
                      var text = document.createTextNode(': ' + Math.round(part1DmgCount));
                      abilityDiv.appendChild(text);
                      if (path["part1"]["interval"] && path["part1"]["ticks"]) {
                        var text = document.createTextNode(' per ' + path["part1"]["interval"] + ' sec, for ' + 
                          path["part1"]["interval"] * path["part1"]["ticks"] + ' seconds.');
                        abilityDiv.appendChild(text);
                      };
                      singleBreak();
                      var totalU = document.createElement('u');
                      totalU.innerText = 'Total';
                      abilityDiv.appendChild(totalU);
                      var totalText = document.createTextNode(': ' + Math.round(part1DmgCount * path["part1"]["ticks"]));
                      abilityDiv.appendChild(totalText);
                      doubleBreak();
                      var part2U = document.createElement('u');
                      part2U.innerText = 'Part 2';
                      abilityDiv.appendChild(part2U);
                      if (path["part2"]["enemyMaxHPRatio"] && enemyStats.hp) {
                        part2DmgCount += arrayCheck(path["part2"]["enemyMaxHPRatio"]) * enemyTotalHP;
                      };
                      if (path["part2"]["enemyMaxHPRatioPer100AP"] && enemyStats.hp) {
                        part2DmgCount += arrayCheck(path["part2"]["enemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                      };
                      if (part2DmgCount !== 0) {
                        var text = document.createTextNode(': ' + Math.round(part2DmgCount));
                        abilityDiv.appendChild(text);
                      };
                      var part2MaxHPCount = 0;
                      if (path["part2"]["enemyMaxHPRatio"] && !enemyStats.hp) {
                        part2MaxHPCount += arrayCheck(path["part2"]["enemyMaxHPRatio"]);
                      };
                      if (path["part2"]["enemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                        part2MaxHPCount += arrayCheck(path["part2"]["enemyMaxHPRatioPer100AP"]) * totalAP/100;
                      };
                      if (part2MaxHPCount !== 0) {
                        var text = document.createTextNode(': (' + lengthCheck(part2MaxHPCount) + ' Enemy Max HP Ratio)');
                        abilityDiv.appendChild(text);
                      };
                      if (path["part2"]["interval"] && path["part2"]["ticks"]) {
                        var text = document.createTextNode(' per ' + path["part2"]["interval"] + ' sec, for ' + 
                          path["part2"]["interval"] * path["part2"]["ticks"] + ' seconds.');
                        abilityDiv.appendChild(text);
                      };
                      singleBreak();
                      var totalU2 = document.createElement('u');
                      totalU2.innerText = 'Total';
                      abilityDiv.appendChild(totalU2);
                      if (part2DmgCount !== 0) {
                        var text = document.createTextNode(': ' + Math.round(part2DmgCount * path["part2"]["ticks"]));
                        abilityDiv.appendChild(text);
                      };
                      if (part2MaxHPCount !== 0) {
                        var text = document.createTextNode(': (' + lengthCheck(part2MaxHPCount * path["part2"]["ticks"]) 
                        + ' Enemy Max HP Ratio)');
                        abilityDiv.appendChild(text);
                      }
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["specialDelivery"]) {
    
                    var path = champFile[ability]["specialDelivery"]["tickDamage"];
                    var bold = document.createElement('b');
                    bold.innerText = "Special Delivery - " + dmgType + ' Damage Over Time: ';
                    abilityDiv.appendChild(bold);
    
                    var deliveryCount = 0;
                    deliveryCount += path["dmgByLvl"][champLevel];
                    deliveryCount += path["bonusADRatio"] * bonusAD;
                    deliveryCount += path["APRatio"] * totalAP;
    
                    var text = document.createTextNode(deliveryCount + ' per ' + path["interval"] + ' sec, for ' + 
                    multiplyTicks2(path["interval"])   + ' seconds.');
                    abilityDiv.appendChild(text);
                    singleBreak();
                    var totalDmgU = document.createElement('u');
                    totalDmgU.innerText = 'Total Damage';
                    abilityDiv.appendChild(totalDmgU);
                    var text2 = document.createTextNode(': ' + multiplyTicks(deliveryCount));
                    abilityDiv.appendChild(text2);
                    doubleBreak();
                  };
    
                  if (champFile[ability]["passivePermanent"]) {
                    var path = champFile[ability]["passivePermanent"];
                    var bold = document.createElement('b');
                    bold.innerText = 'Passive: ';
                    abilityDiv.appendChild(bold);
                    if (path["bonusResist"]) {
                      var resU = document.createElement('u');
                      resU.innerText = 'Bonus Armor and Magic Resist';
                      abilityDiv.appendChild(resU);
                      var text = document.createTextNode(': ' + arrayCheck(path["bonusResist"]));
                      abilityDiv.appendChild(text);
                    };
                    if (path["bonusHealth"]) {
                      var healthU = document.createElement('u');
                      healthU.innerText = 'Bonus Health';
                      abilityDiv.appendChild(healthU);
                      if (path["bonusHealth"]["healthPerStack"]) {
                        var text = document.createTextNode(': (' + arrayCheck(path["bonusHealth"]["healthPerStack"])+ ' per Stack)');
                        abilityDiv.appendChild(text);
                      };
                      if (path["bonusHealth"]["healthPerTakedown"]) {
                        var text = document.createTextNode(' (+' + arrayCheck(path["bonusHealth"]["healthPerTakedown"])
                        + ' per Takedown)');
                        abilityDiv.appendChild(text);
                      };
                    };
                    if (path["armorPenRatio"]) {
                      var armU = document.createElement('u');
                      armU.innerText = 'Armor Pen Ratio';
                      abilityDiv.appendChild(armU);
                      var text = document.createTextNode(': ' + arrayCheck(path["armorPenRatio"]));
                      abilityDiv.appendChild(text);
                    };
                  doubleBreak();
                  };
    
                  if (champFile[ability]["selfHeal"]) {
                    var path = champFile[ability]["selfHeal"];
                    var bold = document.createElement('b');
                    bold.innerText = 'Self Heal: ';
                    abilityDiv.appendChild(bold);
                    var healCounter = 0;
                    if (path["healByLvl"]) {
                      healCounter += path["healByLvl"][champLevel]; 
                    };
                    if (healCounter !== 0) {
                      var text = document.createTextNode(Math.round(healCounter));
                      abilityDiv.appendChild(text);
                    }
                  };
    
                  if (champFile[ability]["allyHeal"]) {
                    var path = champFile[ability]["allyHeal"];
                    var bold = document.createElement('b');
                    bold.innerText = 'Ally Heal: ';
                    abilityDiv.appendChild(bold);
                    var healCounter = 0;
                    if (path["healByLvl"]) {
                      healCounter += path["healByLvl"][champLevel];
                    };
                    if (healCounter !== 0) {
                      var text = document.createTextNode(Math.round(healCounter));
                      abilityDiv.appendChild(text);
                    }
                  };
                  
                  if (champFile[ability]["heal"]) {
                    var path = champFile[ability]["heal"];
                    var bold = document.createElement('b');
                    bold.innerText = 'Heal: ';
                    abilityDiv.appendChild(bold);
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
                    if (path["enemyMaxHPRatio"] && enemyStats.hp) {
                      healCounter += arrayCheck(path["enemyMaxHPRatio"]) * enemyTotalHP;
                    };
                    if (path["enemyMaxHPRatioPer100AP"] && enemyStats.hp) {
                      healCounter += arrayCheck(path["enemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                    };
                    if (path["enemyMaxHPRatioPer100BonusAD"] && enemyStats.hp) {
                      healCounter += arrayCheck(path["enemyMaxHPRatioPer100BonusAD"]) * enemyTotalHP * bonusAD/100;
                    };
                    if (path['enemyMaxHPRatioPerBonusAS'] && enemyStats.hp) {
                      healCounter += arrayCheck(path['enemyMaxHPRatioPerBonusAS']) * enemyTotalHP * bonusASRatio;
                    };
                    if (healCounter !== 0) {
                      var text = document.createTextNode(Math.round(healCounter));
                      abilityDiv.appendChild(text);
                    };
                    var maxHPRatioCounter = 0;
                    if (path["enemyMaxHPRatio"] && !enemyStats.hp) {
                      maxHPRatioCounter += arrayCheck(path["enemyMaxHPRatio"]); 
                    };
                    if (path["enemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                      maxHPRatioCounter += arrayCheck(path["enemyMaxHPRatioPer100AP"]) * totalAP/100;
                    };
                    if (path["enemyMaxHPRatioPer100BonusAD"] && !enemyStats.hp) {
                      maxHPRatioCounter += arrayCheck(path["enemyMaxHPRatioPer100BonusAD"]) * bonusAD/100;
                    };
                    if (path['enemyMaxHPRatioPerBonusAS'] && !enemyStats.hp) {
                      maxHPRatioCounter += arrayCheck(path['enemyMaxHPRatioPerBonusAS']) * bonusASRatio;
                    };
                    if (maxHPRatioCounter !== 0) {
                      var text = document.createTextNode(' (+' + lengthCheck(maxHPRatioCounter) + ' Enemy Max HP Ratio)');
                      abilityDiv.appendChild(text);
                    };
                    var missCounter = 0;
                    if (path["missingHPRatio"]) {
                      missCounter += arrayCheck(path["missingHPRatio"]);
                    };
                    if (path['missingHPRatioPer100AP']) {
                      missCounter += arrayCheck(path['missingHPRatioPer100AP']) * totalAP/100
                    };
                    if (missCounter !== 0) {
                      var text = document.createTextNode(" (+" + lengthCheck(missCounter) + " Missing HP Ratio)");
                      abilityDiv.appendChild(text);
                    }
                    if (path["preMitigation"]) {
                      var preText = document.createTextNode(', pre-mitigation.');
                      abilityDiv.appendChild(preText);
                    };
                    if (path["lifeStealRatio"]) {
                      var dmgU = document.createElement('u');
                      dmgU.innerText = 'Damage Ratio';
                      abilityDiv.appendChild(dmgU);
                      var text = document.createTextNode(': ' + path["lifeStealRatio"] * totalLifeSteal);
                      abilityDiv.appendChild(text);
                    };
                    if (path["dmgRatio"]) {
                      var dmgU = document.createElement('u');
                      dmgU.innerText = 'Damage Ratio';
                      abilityDiv.appendChild(dmgU);
                      var text = document.createTextNode(': ' + arrayCheck(path["dmgRatio"]));
                      abilityDiv.appendChild(text);
                    };
                    if (path["minDmgRatio"]) {
                      var dmgU = document.createElement('u');
                      dmgU.innerText = 'Damage Ratio';
                      abilityDiv.appendChild(dmgU);
                      var minText = document.createTextNode(': Min: ' + path["minDmgRatio"] + ', Max: ' 
                      + path["maxDmgRatio"]);
                      abilityDiv.appendChild(minText);
                    };
                    if (path["dmgTakenRatio"]) {
                      var dmgU = document.createElement('u');
                      dmgU.innerText = 'Damage Taken Ratio';
                      abilityDiv.appendChild(dmgU);
                      var text = document.createTextNode(': ' + arrayCheck(path["dmgTakenRatio"]));
                      abilityDiv.appendChild(text);
                    };
                    if (path["increasePer1%HPLostLast4Sec"]) {
                      singleBreak();
                      var text = document.createTextNode('Increase by Ratio of ' +  path["increasePer1%HPLostLast4Sec"]
                       + ' per 1% HP lost in last 4 seconds.');
                      abilityDiv.appendChild(text);
                    };
                    if (path["system"] === "max") {
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max';
                      abilityDiv.appendChild(maxU);
                      if (path["maxHealByLvl"]) {
                        var text = document.createTextNode(': ' + path["maxHealByLvl"][champLevel]);
                        abilityDiv.appendChild(text);
                      }
                    };
                    if (path["system"] === '2Part') {
                      var part1U = document.createElement('u');
                      part1U.innerText = 'Part 1';
                      abilityDiv.appendChild(part1U);
                      var p1HealCount = 0;
                      if (path["part1"]["heal"]) {
                        p1HealCount += arrayCheck(path["part1"]["heal"]);
                      };
                      if (path["part1"]["APRatio"]) {
                        p1HealCount += arrayCheck(path["part1"]["APRatio"]) * totalAP;
                      };
                      if (p1HealCount !== 0) {
                        var text = document.createTextNode(': ' + Math.round(p1HealCount));
                        abilityDiv.appendChild(text);
                      };
                      singleBreak();
                      var part2U = document.createElement('u');
                      part2U.innerText = 'Part 2';
                      abilityDiv.appendChild(part2U);
                      if (path["part2"]["part1RatioFormula"]) {
                        var text = document.createTextNode(': ' + Math.round(p1HealCount 
                          * ((1 + ((0.00075 * (totalAP) - 0.15))**2))));
                        abilityDiv.appendChild(text);
                      }
                    };
                    if (path["system"] === "minMax" ) {
                      var minU = document.createElement('u');
                      minU.innerText = 'Min'
                      abilityDiv.appendChild(minU)
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
                        var text = document.createTextNode(': ' + Math.round(minHealCounter));
                        abilityDiv.appendChild(text);
                      };
                      var missCount = 0;
                      if (path["minMissingHPRatio"]) {
                        missCount += arrayCheck(path["minMissingHPRatio"])
                      };
                      if (path['minMissingHPRatioPer100AP']) {
                        missCount += arrayCheck(path['minMissingHPRatioPer100AP']) * totalAP/100;
                      }
                      if (missCount !== 0) {
                        var text = document.createTextNode(" (+" + lengthCheck(missCount) + " Missing HP Ratio)");
                        abilityDiv.appendChild(text);
                      }
    
                      singleBreak();
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max';
                      abilityDiv.appendChild(maxU);
    
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
                        var text = document.createTextNode(': ' + Math.round(maxHealCounter));
                        abilityDiv.appendChild(text);
                      };
                      var missCount2 = 0;
                      if (path["maxMissingHPRatio"]) {
                        missCount2 += arrayCheck(path["maxMissingHPRatio"])
                      };
                      if (path['maxMissingHPRatioPer100AP']) {
                        missCount2 += arrayCheck(path['maxMissingHPRatioPer100AP']) * totalAP/100;
                      }
                      if (missCount2 !== 0) {
                        var text = document.createTextNode(" (+" + lengthCheck(missCount2) + " Missing HP Ratio)");
                        abilityDiv.appendChild(text);
                      }
                    };
                    if (path["interval"]) {
                      var intText = document.createTextNode(' per ' + path["interval"] + ' sec')
                      abilityDiv.appendChild(intText);
                      if (path["duration"]) {
                        var text = document.createTextNode(', for ' + path["duration"] + ' seconds.');
                        abilityDiv.appendChild(text);
                      };
                      singleBreak();
                      if (path["system"] === 'minMax') {
                        singleBreak();
                      };
                      var totalU = document.createElement('u');
                      totalU.innerText = 'Total';
                      abilityDiv.appendChild(totalU);
                      var totalHealCounter = 0;
                      if (path["heal"]) {
                        totalHealCounter += arrayCheck(path["heal"]);
                      };
                      if (path["APRatio"]) {
                        totalHealCounter += arrayCheck(path["APRatio"]) * totalAP;
                      };
                      if (totalHealCounter !== 0) {
                        var text = document.createTextNode(': ' + Math.round(totalHealCounter * path["ticks"]));
                        abilityDiv.appendChild(text);
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
                        var text = document.createTextNode(': Min: ' + Math.round(totalMinHeal * path["ticks"])
                        + ', Max: ' + Math.round(totalMaxHeal * path["ticks"]));
                        abilityDiv.appendChild(text);
                      }
                    };
                    if (path["system"] === 'perTarget') {
                      var text = document.createTextNode(' per champion');
                      abilityDiv.appendChild(text);
                    };
                    if (path["duration"] && !path["interval"]) {
                      var text = document.createTextNode(' over ' + path["duration"] + ' seconds.');
                      abilityDiv.appendChild(text);
                    };
                    if (path["empower"]) {
                      var empPath = path["empower"]
                      singleBreak();
                      var empB = document.createElement('b');
                      empB.innerText = 'Empowered Heal: ';
                      abilityDiv.appendChild(empB);
                      if (empPath["system"] === 'minMax') {
                        var minU = document.createElement('u');
                        minU.innerText = 'Min';
                        abilityDiv.appendChild(minU);
                        var empMinHeal = 0;
                        var empMaxHeal = 0;
                        if (empPath["minHeal"]) {
                          empMinHeal += arrayCheck(empPath["minHeal"]);
                        };
                        if (empPath["minBonusADRatio"]) {
                          empMinHeal += arrayCheck(empPath["minBonusADRatio"]) * bonusAD;
                        };
                        var minValue = document.createTextNode(': ' + Math.round(empMinHeal));
                        abilityDiv.appendChild(minValue);
                        singleBreak();
                        var maxU = document.createElement('u');
                        maxU.innerText = 'Max';
                        abilityDiv.appendChild(maxU);
                        if (empPath["maxHeal"]) {
                          empMaxHeal += arrayCheck(empPath["maxHeal"]);
                        };
                        var maxValue = document.createTextNode(': ' + Math.round(empMaxHeal));
                        abilityDiv.appendChild(maxValue);
                      }
                    };
                    if (path["empowerBonus"]) {
                      var empPath = path["empowerBonus"];
                      singleBreak();
                      var empU = document.createElement('u');
                      empU.innerText = 'Empower Bonus Heal';
                      abilityDiv.appendChild(empU);
                      var empHealCounter = 0;
                      var empMissHPCounter = 0;
                      if (empPath["healByLvl"]) {
                        empHealCounter += empPath["healByLvl"][champLevel];
                      };
                      if (empHealCounter !== 0) {
                        var text = document.createTextNode(': ' + Math.round(empHealCounter));
                        abilityDiv.appendChild(text);
                      };
                      if (empPath["missingHPRatio"]) {
                       empMissHPCounter += empPath["missingHPRatio"];
                      };
                      if (empPath["missingHPRatioPer100AP"]) {
                        empMissHPCounter += empPath["missingHPRatioPer100AP"] * totalAP/100;
                      };
                      if (empMissHPCounter !== 0) {
                        var text = document.createTextNode(' (+' + lengthCheck(empMissHPCounter) + ' Enemy Missing HP Ratio)');
                        abilityDiv.appendChild(text);
                      };
                    }
                    doubleBreak();
                  };
    
                  if (champFile[ability]["shield"]) {
                    var path = champFile[ability]["shield"];
                    var bold = document.createElement('b');
                    if (path["type"] !== 'all') {
                      bold.innerText = path["type"] + ' Shield: '
                    } else {
                      bold.innerText = ' Shield: '
                    };
                    abilityDiv.appendChild(bold);
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
                      var text = document.createTextNode(Math.round(shieldCounter));
                      abilityDiv.appendChild(text);
                    };
                    if (path["maxMaxHPRatio"]) {
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max'
                      abilityDiv.appendChild(maxU);
                      var text = document.createTextNode(': ' + Math.round(path["maxMaxHPRatio"] * totalHP));
                      abilityDiv.appendChild(text);
                    };
                    if (path["shieldPerStack"]) {
                      var text = document.createTextNode(" (+" + path["shieldPerStack"] + " per Stack)");
                      abilityDiv.appendChild(text);
                    };
                    if (path["maxHPRatioPerStack"]) {
                      var text = document.createTextNode(" (+" + Math.round(path["maxHPRatioPerStack"] * totalHP) + " per stack)");
                      abilityDiv.appendChild(text);
                    };
                    if (path["dmgTakenRatio"]) {
                      var dmgU = document.createElement('u');
                      dmgU.innerText = 'Damage Taken Ratio';
                      abilityDiv.appendChild(dmgU);
                      var text = document.createTextNode(': ' + arrayCheck(path["dmgTakenRatio"]));
                      abilityDiv.appendChild(text);
                    };
                    if (path["system"] === "minMax" ) {
                      var minU = document.createElement('u');
                      minU.innerText = 'Min';
                      abilityDiv.appendChild(minU);
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
                        var text = document.createTextNode(': ' + Math.round(minShieldCounter));
                        abilityDiv.appendChild(text);
                      };
                      singleBreak();
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max';
                      abilityDiv.appendChild(maxU);
                      
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
                        var text = document.createTextNode(': ' + Math.round(maxShieldCounter));
                        abilityDiv.appendChild(text);
                      }
                    };
                    if (path["type"] !== 'Spell' && path["duration"]) {
                      singleBreak();
                    };
                    if (path["duration"]) {
                      var durU = document.createElement('u');
                      durU.innerText = 'Duration';
                      abilityDiv.appendChild(durU);
                      var text = document.createTextNode(': ' + arrayCheck(path["duration"]));
                      abilityDiv.appendChild(text);
                    };
                    if (path["combatCoolDown"]) {
                      singleBreak();
                      var combatU = document.createElement('u');
                      combatU.innerText = 'Combat Cooldown';
                      abilityDiv.appendChild(combatU);
                      var combatCD = document.createTextNode(': ' + path["combatCoolDown"]);
                      abilityDiv.appendChild(combatCD);
                    };
                    if (path["combatCoolDownByLvl"]) {
                      singleBreak();
                      var combatU = document.createElement('u');
                      combatU.innerText = 'Combat Cooldown';
                      abilityDiv.appendChild(combatU);
                      var text = document.createTextNode(': ' + path["combatCoolDownByLvl"][champLevel]);
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["revive"]) {
                    var path = champFile[ability]["revive"]
                    var bold = document.createElement('b');
                    bold.innerText = 'Revive: '
                    abilityDiv.appendChild(bold);
                    var hpCounter = 0;
                    if (path["health"]) {
                      var healthU = document.createElement('u');
                      healthU.innerText = 'Health Restored';
                      abilityDiv.appendChild(healthU);
                      hpCounter += arrayCheck(path["health"]);
                    };
                    if (path["healthPerAP"]) {
                      hpCounter += arrayCheck(path["healthPerAP"]) * totalAP;
                    };
                    if (hpCounter !== 0) {
                      var text = document.createTextNode(': ' + Math.round(hpCounter));
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["damageRedux"]) {
                    var path = champFile[ability]["damageRedux"];
                    var bold = document.createElement('b');
                    if (path["type"] !== 'all') {
                      bold.innerText = 'Reduced ' + path["type"] + ' Damage Taken: '
                    } else {
                      bold.innerText = 'Reduced Damage Taken: '
                    };
                    abilityDiv.appendChild(bold);
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
                      var text = document.createTextNode('Reduced by ' + Math.round(reduxCounter));
                      abilityDiv.appendChild(text);
                    };
                    if (path['maxReduxRatio']) {
                      var text = document.createTextNode(', up to a maximum reduction ratio of ' + path["maxReduxRatio"]);
                      abilityDiv.appendChild(text);
                    };
                    if (path["reduxRatioPer100AP"]) {
                      ratioCounter += arrayCheck(path["reduxRatioPer100AP"]) * totalAP/100;
                    };
                    if (ratioCounter !== 0) {
                      var text = document.createTextNode('Reduced by ratio of ' + lengthCheck(ratioCounter));
                      abilityDiv.appendChild(text);
                    };
                    if (path["aoeDmgReduxRatio"]) {
                      var text = document.createTextNode('AOE Damage reduced by ratio of ' + arrayCheck(path["aoeDmgReduxRatio"]));
                      abilityDiv.appendChild(text);
                    };
                    if (path["autoBlock"]) {
                      singleBreak();
                      var text = document.createTextNode('Blocks auto attacks.');
                      abilityDiv.appendChild(text);
                    };
                    if (path["duration"] || path["minDuration"]) {
                      singleBreak();
                      var durU = document.createElement('u');
                      durU.innerText = 'Duration';
                      abilityDiv.appendChild(durU);
                    };
                    if (path["duration"]) {
                      var text = document.createTextNode(': ' + arrayCheck(path["duration"]));
                      abilityDiv.appendChild(text);
                    };
                    if (path["minDuration"]) {
                      var text = document.createTextNode(': Min: ' + path["minDuration"] + ', Max: ' + path["maxDuration"]);
                      abilityDiv.appendChild(text);
                    };
                    if (path["calculateFrom"]) {
                      singleBreak();
                      var text = document.createTextNode('Applies ' + path["calculateFrom"] + '.');
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["magicDamageRedux"]) {
                    var path = champFile[ability]["magicDamageRedux"]
                    var bold = document.createElement('b');
                    bold.innerText = 'Reduced Magic Damage Taken: ';
                    abilityDiv.appendChild(bold);
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
                    var text = document.createTextNode('Reduced by ratio of ' + lengthCheck(ratioCount))
                    abilityDiv.appendChild(text)
                    if (path["duration"]) {
                      var text = document.createTextNode(' for ' + path["duration"] + ' seconds.');
                      abilityDiv.appendChild(text);
                    };
                    singleBreak();
                  };
    
                  if (champFile[ability]["physDamageRedux"]) {
                    var path = champFile[ability]["physDamageRedux"];
                    var bold = document.createElement('b');
                    bold.innerText = 'Reduced Physical Damage Taken: ';
                    abilityDiv.appendChild(bold);
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
                    var text = document.createTextNode('Reduced by ratio of ' + lengthCheck(ratioCount));
                    abilityDiv.appendChild(text);
                    if (path["duration"]) {
                      var text = document.createTextNode(' for ' + path["duration"] + ' seconds.');
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };
    
                  if(champFile[ability]["dmgImmune"]) {
                    var immuneB = document.createElement('b');
                    immuneB.innerText = 'Damage Immune Duration: ';
                    abilityDiv.appendChild(immuneB);
                    var text = document.createTextNode(arrayCheck(champFile[ability]["dmgImmune"]));
                    abilityDiv.appendChild(text);
                    doubleBreak();
                  };
    
                  if(champFile[ability]["ccImmune"]) {
                    var bold = document.createElement('b');
                    bold.innerText = 'Crowd Control Immune Duration: ';
                    abilityDiv.appendChild(bold);
                    var text = document.createTextNode(arrayCheck(champFile[ability]["ccImmune"]));
                    abilityDiv.appendChild(text);
                    doubleBreak();
                  };
    
                  if (champFile[ability]["minDmgImmune"]) {
                    var bold = document.createElement('b');
                    bold.innerText = 'Crowd Control Immune Duration: ';
                    abilityDiv.appendChild(bold);
                    var minU = document.createElement('u');
                    minU.innerText = 'Min'
                    abilityDiv.appendChild(minU);
                    var minText = document.createTextNode(': ' + arrayCheck(champFile[ability]["minDmgImmune"]));
                    abilityDiv.appendChild(minText);
                    singleBreak();
                    var maxU = document.createElement('u');
                    maxU.innerText = 'Max';
                    abilityDiv.appendChild(maxU);
                    var maxText = document.createTextNode(': ' + arrayCheck(champFile[ability]["maxDmgImmune"]));
                    abilityDiv.appendChild(maxText);
                    doubleBreak();
                  };
    
                  if (champFile[ability]["silence"]) {
                    var bold = document.createElement('b');
                    bold.innerText = 'Silence Duration: ';
                    abilityDiv.appendChild(bold);
                    var text = document.createTextNode(arrayCheck(champFile[ability]["silence"]));
                    abilityDiv.appendChild(text);
                    doubleBreak();
                  };
    
                  if (champFile[ability]["blind"]) {
                    var blindB = document.createElement('b');
                    blindB.innerText = 'Blind Duration: ';
                    abilityDiv.appendChild(blindB);
                    var text = document.createTextNode(arrayCheck(champFile[ability]["blind"]));
                    abilityDiv.appendChild(text);
                    doubleBreak();
                  };
    
                  if(champFile[ability]["interruptCC"] || champFile[ability]["interruptCCByLvl"] 
                  || champFile[ability]["minInterruptCC"]) {
                    var bold = document.createElement('b');
                    bold.innerText = 'Crowd Control Duration: ';
                    abilityDiv.appendChild(bold);
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
                    var text = document.createTextNode(intCounter);
                    abilityDiv.appendChild(text);
                    doubleBreak();
                  };
    
                  if (champFile[ability]["interruptCCByLvl"]) {
                    var text = document.createTextNode(champFile[ability]["interruptCCByLvl"][champLevel]);
                    abilityDiv.appendChild(text);
                    doubleBreak();
                  };
    
                  if (champFile[ability]["minInterruptCC"]) {
                    var minU = document.createElement('u');
                    minU.innerText = 'Min';
                    abilityDiv.appendChild(minU);
                    var minText = document.createTextNode(': ' + arrayCheck(champFile[ability]["minInterruptCC"]));
                    abilityDiv.appendChild(minText);
                    singleBreak();
                    var maxU = document.createElement('u');
                    maxU.innerText = 'Max';
                    abilityDiv.appendChild(maxU);
                    var maxText = document.createTextNode(': ' + arrayCheck(champFile[ability]["maxInterruptCC"]));
                    abilityDiv.appendChild(maxText);
                    doubleBreak();
                  };
                  
                  if (champFile[ability]["damageAmp"]) {
                    var ampPath = champFile[ability]["damageAmp"];
                    var ampB = document.createElement('b');
                    ampB.innerText = 'Damage Amp Ratio: ';
                    abilityDiv.appendChild(ampB);
                    var ampText = document.createTextNode(arrayCheck(ampPath["amp"]));
                    abilityDiv.appendChild(ampText);
                    singleBreak();
                    var durU = document.createElement('u');
                    durU.innerText = 'Duration';
                    abilityDiv.appendChild(durU);
                    var durText = document.createTextNode(': ' + ampPath["duration"]);
                    abilityDiv.appendChild(durText);
                    doubleBreak();
                  };
    
                  if (champFile[ability]["ADRedux"]) {
                    var path = champFile[ability]["ADRedux"];
                    var bold = document.createElement('b');
                    bold.innerText = 'Attack Damage Reduction: ';
                    abilityDiv.appendChild(bold);
                    if (path["redux"]) {
                      var text = document.createTextNode(arrayCheck(path["redux"]));
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["resistRedux"]) {
                    var path = champFile[ability]["resistRedux"];
                    if (path["type"] === 'both') {
                      var bold = document.createElement('b');
                      bold.innerText = 'Armor and Magic Resist Reduction: ';
                      abilityDiv.appendChild(bold);
                    };
                    if (path["type"] === 'magicResist') {
                      var bold = document.createElement('b');
                      bold.innerText = 'Magic Resist Reduction: ';
                      abilityDiv.appendChild(bold);
                    };
                    if (path["type"] === 'armor') {
                      var bold = document.createElement('b');
                      bold.innerText = 'Armor Reduction: ';
                      abilityDiv.appendChild(bold);
                    };
                    if (path["resist"]) {
                      var text = document.createTextNode(arrayCheck(path["resist"]));
                      abilityDiv.appendChild(text);
                    };
                    if (path["reduxRatio"]) {
                      var ratioU = document.createElement('u');
                      ratioU.innerText = 'Ratio';
                      abilityDiv.appendChild(ratioU);
                      var text = document.createTextNode(': ' + arrayCheck(path["reduxRatio"]));
                      abilityDiv.appendChild(text);
                    };
                    if (path["system"] === 'minMax') {
                      var minU = document.createElement('u')
                      minU.innerText = 'Min'
                      abilityDiv.appendChild(minU);
                      if (path["minResistRedux"]) {
                        var text = document.createTextNode(': ' + arrayCheck(path["minResistRedux"]));
                        abilityDiv.appendChild(text);
                      };
                      singleBreak();
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max';
                      abilityDiv.appendChild(maxU);
                      if (path["maxResistRedux"]) {
                        var text = document.createTextNode(': ' + arrayCheck(path["maxResistRedux"]));
                        abilityDiv.appendChild(text);
                      }
                    };
                    if (path["duration"]) {
                      singleBreak();
                      var durU = document.createElement('u');
                      durU.innerText = 'Duration'
                      abilityDiv.appendChild(durU);
                      var text = document.createTextNode(': ' + arrayCheck(path["duration"]));
                      abilityDiv.appendChild(text);
                    };
                    if (path["maxDuration"]) {
                      singleBreak();
                      var durU = document.createElement('u');
                      durU.innerText = 'Max Duration';
                      abilityDiv.appendChild(durU);
                      var text = document.createTextNode(': ' + arrayCheck(path["maxDuration"]));
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["bonusStats"]) {
                    var path = champFile[ability]["bonusStats"];
                    var bold = document.createElement('b');
                    bold.innerText = 'Bonus Stats: ';
                    abilityDiv.appendChild(bold);
                    if (path["attackDamageByLvl"]) {
                      var ADByLvlU = document.createElement('u');
                      ADByLvlU.innerText = 'Attack Damage';
                      abilityDiv.appendChild(ADByLvlU);
                      var text = document.createTextNode(': ' + path["attackDamageByLvl"][champLevel]);
                      abilityDiv.appendChild(text);
                      singleBreak();
                    };
                    if (path["attackSpeed"]) {
                      var aU = document.createElement('u');
                      asU.innerText = 'Attacks per Second';
                      abilityDiv.appendChild(asU);
                      var text = document.createTextNode(': ' + (arrayCheck(path["attackSpeed"]) 
                      * statsPath["attackSpeedRatio"]).toFixed(3))
                      abilityDiv.appendChild(text);
                      singleBreak();
                    };
                    if (path["ADRatio"]) {
                      var underL = document.createElement('u');
                      underL.innerText = 'Attack Damage Ratio';
                      abilityDiv.appendChild(underL);
                      var text = document.createTextNode(': ' + arrayCheck(path["ADRatio"]));
                      abilityDiv.appendChild(text);
                      singleBreak();
                    };
                    if (path["lifeSteal"]) {
                      var lsU = document.createElement('u');
                      lsU.innerText = 'Life Steal Ratio';
                      abilityDiv.appendChild(lsU);
                      var text = document.createTextNode(': ' + arrayCheck(path["lifeSteal"]));
                      abilityDiv.appendChild(text);
                      singleBreak();
                    };
                    if (path["healingRatio"]) {
                      var underL = document.createElement('u');
                      underL.innerText = 'Increased Healing Ratio';
                      abilityDiv.appendChild(underL);
                      var text = document.createTextNode(': ' + arrayCheck(path["healingRatio"]));
                      abilityDiv.appendChild(text);
                      singleBreak();
                    };
                    if (path["healingPerMissingHPRatio"]) {
                      var underL = document.createElement('u');
                      underL.innerText = 'Increased Healing';
                      abilityDiv.appendChild(underL);
                      var text = document.createTextNode(': (' + arrayCheck(path["healingPerMissingHPRatio"])
                      + ' per Missing HP Ratio)');
                      abilityDiv.appendChild(text);
                      singleBreak();
                    };
                    if (path["resist"]) {
                      var resU = document.createElement('u');
                      resU.innerText = 'Armor and Magic Resist';
                      abilityDiv.appendChild(resU);
                      var text = document.createTextNode(': ' + arrayCheck(path["resist"]));
                      abilityDiv.appendChild(text);
                      singleBreak();
                    };
                    if (path["abilityPower"]) {
                      var apU = document.createElement('u');
                      apU.innerText = 'Ability Power';
                      abilityDiv.appendChild(apU);                 
                      var text = document.createTextNode(': ' + arrayCheck(path["abilityPower"]));
                      abilityDiv.appendChild(text);
                      singleBreak();
                    };
                    if (path["healthRegen"]) {
                      var hpU = document.createElement('u');
                      hpU.innerText = 'Health Regen';
                      abilityDiv.appendChild(hpU);
                      var text = document.createTextNode(': ' + arrayCheck(path["healthRegen"]));
                      abilityDiv.appendChild(text);
                      singleBreak();
                    };
                    if (path["duration"]) {
                      var durU = document.createElement('u');
                      durU.innerText = 'Duration';
                      abilityDiv.appendChild(durU);
                      var text = document.createTextNode(': ' + arrayCheck(path["duration"]));
                      abilityDiv.appendChild(text);
                      if (path["durationExtend"]) {
                        var text2 = document.createTextNode(', extends by ' + path["durationExtend"] + ' seconds.')
                        abilityDiv.appendChild(text2);
                      };
                      singleBreak();
                    };
                    singleBreak();
                  };
    
                  if (champFile[ability]["bonusHealth"]) {
                    var path = champFile[ability]["bonusHealth"];
                    var bold = document.createElement('b');
                    bold.innerText = 'Bonus Health: '
                    abilityDiv.appendChild(bold);
                    var healthCounter = 0;
                    if (path["health"]) {
                      healthCounter += arrayCheck(path["health"]);
                    };
                    if (path["APRatio"]) {
                      healthCounter += arrayCheck(path["APRatio"]) * totalAP;
                    };
                    if (healthCounter !== 0) {
                      var text = document.createTextNode(Math.round(healthCounter));
                      abilityDiv.appendChild(text);
                    };
                    if (path["healthPerStack"]) {
                      var text = document.createTextNode(arrayCheck(path["healthPerStack"]) + ' per Stack');
                      abilityDiv.appendChild(text);
                      doubleBreak();
                    };
                    if (path["duration"]) {
                      singleBreak();
                      var durU = document.createElement('u');
                      durU.innerText = 'Duration';
                      abilityDiv.appendChild(durU);
                      var text = document.createTextNode(': ' + arrayCheck(path["duration"]));
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["maxHPRegen"]) {
                    var bold = document.createElement('b');
                    bold.innerText = 'Max HP Ratio Regenerated: ';
                    abilityDiv.appendChild(bold);
                    var text = document.createTextNode(arrayCheck(champFile[ability]["maxHPRegen"]));
                    abilityDiv.appendChild(text);
                    doubleBreak();
                  };
    
                  if (champFile[ability]["healthRegen"]) {
                    var path = champFile[ability]["healthRegen"];
                    singleBreak();
                    var regenB = document.createElement('b');
                    regenB.innerText = 'Health Regen: ';
                    abilityDiv.appendChild(regenB);
                    if (path["dmgTakenRatio"]) {
                      var dmgU = document.createElement('u');
                      dmgU.innerText = 'Damage Taken Ratio';
                      abilityDiv.appendChild(dmgU);
                      var text = document.createTextNode(': ' + arrayCheck(path["dmgTakenRatio"]));
                      abilityDiv.appendChild(text);
                    };
                    if (path["dmgTakenRatioByLvl"]) {
                      var ratioU = document.createElement('u');
                      ratioU.innerText = "Damage Taken Ratio";
                      abilityDiv.appendChild(ratioU);
                      var text = document.createTextNode(': ' + path["dmgTakenRatioByLvl"][champLevel])
                      abilityDiv.appendChild(text);
                    };
                    if (path["greyHealthRatioByLvl"]) {
                      singleBreak();
                      var dmgU = document.createElement('u');
                      dmgoU.innerText = 'Grey Health Ratio';
                      abilityDiv.appendChild(dmgU);
                      var text = document.createTextNode(': ' + path["greyHealthRatioByLvl"][champLevel])
                      abilityDiv.appendChild(text);
                    };
                    if (path["maxHPRatio"]) {
                      singleBreak();
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max';
                      abilityDiv.appendChild(maxU);
                      var text = document.createTextNode(': ' + arrayCheck(path["maxHPRatio"]) + ' Max HP Ratio');
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["bonusAttackDamage"]) {
                    var path = champFile[ability]["bonusAttackDamage"];
                    var bold = document.createElement('b');
                    bold.innerText = 'Bonus Attack Damage: '
                    abilityDiv.appendChild(bold);
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
                      var text = document.createTextNode(Math.round(adCounter));
                      abilityDiv.appendChild(text);
                    };
                    if (path['minAttackDamage']) {
                      var minU = document.createElement('u');
                      minU.innerText = 'Min';
                      abilityDiv.appendChild(minU);
                      var text = document.createTextNode(': ' + arrayCheck(path['minAttackDamage']));
                      abilityDiv.appendChild(text);
                    };
                    if (path['maxAttackDamage']) {
                      singleBreak();
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max';
                      abilityDiv.appendChild(maxU);
                      var text = document.createTextNode(': ' + arrayCheck(path['maxAttackDamage']));
                      abilityDiv.appendChild(text);
                    };
                    if (path["duration"]) {
                      singleBreak();
                      var durU = document.createElement('u');
                      durU.innerText = 'Duration';
                      abilityDiv.appendChild(durU);
                      var text = document.createTextNode(': ' + arrayCheck(path["duration"]));
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["bonusAdaptiveForce"]) {
                    var path = champFile[ability]["bonusAdaptiveForce"];
                    var forceB = document.createElement('b');
                    forceB.innerText = 'Self Bonus Adaptive Force: ';
                    abilityDiv.appendChild(forceB);
                    if (path["adaptiveForce"]) {
                      var text = document.createTextNode(arrayCheck(path["adaptiveForce"]));
                      abilityDiv.appendChild(text);
                    };
                    if (path["allyBonusADRatio"]) {
                      var text = document.createTextNode(' (+' + arrayCheck(path["allyBonusADRatio"]) + ' Ally Bonus AD Ratio');
                      abilityDiv.appendChild(text);
                    };
                    if (path["allyAPRatio"]) {
                      var text = document.createTextNode(' OR +' + arrayCheck(path["allyAPRatio"]) + ' Ally AP Ratio)');
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["allyBonusAdaptiveForce"]) {
                    var path = champFile[ability]["allyBonusAdaptiveForce"];
                    var forceB = document.createElement('b');
                    forceB.innerText = 'Ally Bonus Adaptive Force: ';
                    abilityDiv.appendChild(forceB);
                    if (path["adaptiveAD"]) {
                      var text = document.createTextNode('[' + arrayCheck(path["adaptiveAD"]) + ' Attack Damage]');
                      abilityDiv.appendChild(text);
                    };
                    if (path["allyAdaptiveBonusADRatio"]) {
                      var text = document.createTextNode(' (+' + arrayCheck(path["allyAdaptiveBonusADRatio"]) 
                      + ' Ally Bonus AD Ratio)');
                      abilityDiv.appendChild(text);
                    };
                    if (path["adaptiveAP"]) {
                      var text = document.createTextNode(' OR [' + arrayCheck(path["adaptiveAP"]) + ' Ability Power]');
                      abilityDiv.appendChild(text);
                    };
                    if (path["allyAdaptiveAPRatio"]) {
                      var text = document.createTextNode(' (+' + arrayCheck(path["allyAdaptiveAPRatio"]) + ' Ally AP Ratio)');
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["bonusResist"]) {
                    var path = champFile[ability]["bonusResist"];
                    var bold = document.createElement('b');
                    bold.innerText = 'Bonus Armor & Magic Resist: ';
                    if (path['bonusResistRatio']) {
                      bold.innerText = 'Bonus Armor: ';
                    }
                    abilityDiv.appendChild(bold);
                    var resCount = 0;
                    if (path["resist"]) {
                      resCount += arrayCheck(path["resist"]);
                    };
                    if (path["bonusResistByLvl"]) {
                      resCount += path["bonusResistByLvl"][champLevel];
                    };
                    if (path["minResistByLvl"]) {
                      var minU = document.createElement('u');
                      minU.innerText = 'Min';
                      abilityDiv.appendChild(minU);
                      var minText = document.createTextNode(': ' + path["minResistByLvl"][champLevel]);
                      abilityDiv.appendChild(minText);
                      singleBreak();
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max';
                      abilityDiv.appendChild(maxU);
                      var maxText = document.createTextNode(': ' + path["maxResistByLvl"][champLevel]);
                      abilityDiv.appendChild(maxText);
                    };
                    if (path["bonusResistRatio"]) {
                      var armText = document.createTextNode(Math.round(resCount + path["bonusResistRatio"] * bonusArmor));
                      abilityDiv.appendChild(armText);
                      singleBreak();
                      var mrB = document.createElement('b');
                      mrB.innerText = 'Bonus Magic Resist: ';
                      abilityDiv.appendChild(mrB);
                      var mrText = document.createTextNode(Math.round(resCount + path["bonusResistRatio"] * bonusMR));
                      abilityDiv.appendChild(mrText);
                    };
                    if (resCount !== 0 && !path["bonusResistRatio"]) {
                      var text = document.createTextNode(Math.round(resCount));
                      abilityDiv.appendChild(text);
                    };
                    if (path["minResist"]) {
                      var minU = document.createElement('u');
                      minU.innerText = 'Min';
                      abilityDiv.appendChild(minU);
                      var minText = document.createTextNode(': ' + arrayCheck(path["minResist"]));
                      abilityDiv.appendChild(minText);
                      singleBreak();
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max';
                      abilityDiv.appendChild(maxU);
                      var maxText = document.createTextNode(': ' + arrayCheck(path["maxResist"]));
                      abilityDiv.appendChild(maxText);
                    };
                    if (path["duration"]) {
                      singleBreak();
                      var durU = document.createElement('u');
                      durU.innerText = 'Duration';
                      abilityDiv.appendChild(durU);
                      var text = document.createTextNode(': ' + arrayCheck(path["duration"]));
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["bonusArmorPenOnCrit"]) {
                    var penPath = champFile[ability]["bonusArmorPenOnCrit"];
                    var bold = document.createElement('b');
                    bold.innerText = 'Bonus-Armor Pen Ratio on Crits: ';
                    abilityDiv.appendChild(bold);
                    var penText = document.createTextNode(arrayCheck(penPath["penRatio"]));
                    abilityDiv.appendChild(penText);
                    singleBreak();
                    var durU = document.createElement('u');
                    durU.innerText = 'Duration';
                    abilityDiv.appendChild(durU);
                    var durText = document.createTextNode(': ' + arrayCheck(penPath["duration"]));
                    abilityDiv.appendChild(durText);
                    doubleBreak();
                  };
    
                  if (champFile[ability]["bonusArmor"]) {
                    var path = champFile[ability]["bonusArmor"];
                    var bold = document.createElement('b');
                    bold.innerText = 'Bonus Armor: ';
                    abilityDiv.appendChild(bold);
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
                      var text = document.createTextNode(Math.round(armorCounter));
                      abilityDiv.appendChild(text);
                    };
                    if (path["system"] === 'minMax') {
                      var minU = document.createElement('u');
                      minU.innerText = 'Min';
                      abilityDiv.appendChild(minU);
                      if (path["minArmor"]) {
                        var text = document.createTextNode(': ' + arrayCheck(path["minArmor"]));
                        abilityDiv.appendChild(text);
                      };
                      singleBreak();
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max';
                      abilityDiv.appendChild(maxU);
                      if (path["maxArmor"]) {
                        var text = document.createTextNode(': ' + arrayCheck(path["maxArmor"]));
                        abilityDiv.appendChild(text);
                      };
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["allyBonusArmor"]) {
                    var path = champFile[ability]["allyBonusArmor"];
                    var bold = document.createElement('b');
                    bold.innerText = 'Ally Bonus Armor: ';
                    abilityDiv.appendChild(bold);
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
                      var text = document.createTextNode(Math.round(armorCounter));
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["bonusMagicResist"]) {
                    var path = champFile[ability]["bonusMagicResist"];
                    var bold = document.createElement('b');
                    bold.innerText = 'Bonus Magic Resist: ';
                    abilityDiv.appendChild(bold);
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
                    var text = document.createTextNode(Math.round(mrCounter));
                    abilityDiv.appendChild(text);
                    doubleBreak();
                  };
    
                  if (champFile[ability]["allyBonusMagicResist"]) {
                    var path = champFile[ability]["allyBonusMagicResist"];
                    var bold = document.createElement('b');
                    bold.innerText = 'Ally Bonus Magic Resist: ';
                    abilityDiv.appendChild(bold);
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
                    var text = document.createTextNode(Math.round(mrCounter));
                    abilityDiv.appendChild(text);
                    doubleBreak();
                  };
    
                  if (champFile[ability]["bonusAttackSpeed"]) {
                    var ASPath = champFile[ability]["bonusAttackSpeed"];
                    var bold = document.createElement('b');
                    bold.innerText = 'Bonus Attacks per Second: ';
                    abilityDiv.appendChild(bold);
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
                      var text = document.createTextNode((asRatioCounter * statsPath["attackSpeedRatio"]).toFixed(3));
                      abilityDiv.appendChild(text);
                    };
                    if (totalASRatioCounter !== 0) {
                      var total = (totalAS * totalASRatioCounter * statsPath["attackSpeedRatio"]).toFixed(3);
                      var text = document.createTextNode(total);
                      abilityDiv.appendChild(text);
                    };
                    if (ASPath["attackSpeedPerStack"]) {
                      var text = document.createTextNode(' (+' + (ASPath["attackSpeedPerStack"] 
                      * statsPath["attackSpeedRatio"]).toFixed(3) + ' per stack)');
                      abilityDiv.appendChild(text);
                    };
                    var minCounter = 0;
                    var maxCounter = 0;
                    if (ASPath['minAttackSpeed']) {
                      var minASU = document.createElement('u');
                      minASU.innerText = 'Min'
                      abilityDiv.appendChild(minASU);
                      minCounter += arrayCheck(ASPath['minAttackSpeed']);
                      if (ASPath["minBonusAttackSpeedRatio"]) {
                        minCounter += (arrayCheck(ASPath["minBonusAttackSpeedRatio"]) * bonusAS).toFixed(3);
                      };
                      if (ASPath["minAttackSpeedPer100AP"]) {
                        minCounter += arrayCheck(ASPath["minAttackSpeedPer100AP"]) * totalAP/100;
                      };
                      var minText = document.createTextNode(': ' + (minCounter * statsPath["attackSpeedRatio"]).toFixed(3));
                      abilityDiv.appendChild(minText);
                      singleBreak();
                      var maxASU = document.createElement('u');
                      maxASU.innerText = 'Max';
                      abilityDiv.appendChild(maxASU);
                      maxCounter += arrayCheck(ASPath['maxAttackSpeed']);
                      if (ASPath["maxBonusAttackSpeedRatio"]) {
                        maxCounter += arrayCheck(ASPath["maxBonusAttackSpeedRatio"]) * bonusAS;
                      };
                      if (ASPath["maxAttackSpeedPer100AP"]) {
                        maxCounter += arrayCheck(ASPath["maxAttackSpeedPer100AP"]) * totalAP/100;
                      };
                      var maxText = document.createTextNode(': ' + (maxCounter * statsPath["attackSpeedRatio"]).toFixed(3));
                      abilityDiv.appendChild(maxText);
                    };
                    if (ASPath["minAttackSpeedByLvl"]) {
                      var minASU = document.createElement('u');
                      minASU.innerText = 'Min';
                      abilityDiv.appendChild(minASU);
                      var minText = document.createTextNode(': ' + (ASPath["minAttackSpeedByLvl"][champLevel]
                      * statsPath["attackSpeedRatio"]).toFixed(3));
                      abilityDiv.appendChild(minText);
                      singleBreak();
                      var maxASU = document.createElement('u');
                      maxASU.innerText = 'Max'
                      abilityDiv.appendChild(maxASU);
                      if (ASPath["maxAttackSpeedByLvl"]) {
                        var text = document.createTextNode(': ' + (ASPath["maxAttackSpeedByLvl"][champLevel]
                        * statsPath["attackSpeedRatio"]).toFixed(3));
                        abilityDiv.appendChild(text);
                      }
                    };
                    if (ASPath["duration"]) {
                      singleBreak();
                      var durU = document.createElement('u');
                      durU.innerText = 'Duration';
                      abilityDiv.appendChild(durU);
                      var text = document.createTextNode(': ' + arrayCheck(ASPath["duration"]));
                      abilityDiv.appendChild(text);
                    };
                    if (ASPath["minDuration"]) {
                      singleBreak();
                      var minU = document.createElement('u');
                      minU.innerText = 'Min Duration';
                      abilityDiv.appendChild(minU);
                      var minText = document.createTextNode(': ' + arrayCheck(ASPath["minDuration"]));
                      abilityDiv.appendChild(minText);
                      if (ASPath['maxDuration']) {
                        var maxU = document.createElement('u');
                        maxU.innerText = ', Max Duration';
                        abilityDiv.appendChild(maxU);
                        var maxText = document.createTextNode(': ' + arrayCheck(ASPath["maxDuration"]));
                        abilityDiv.appendChild(maxText);
                      }
                    };
                    if (ASPath["durationAutos"]) {
                      var text = document.createTextNode(' for ' + ASPath["durationAutos"] + ' attacks.');
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["bonusOmniVamp"]) {
                    var path = champFile[ability]["bonusOmniVamp"];
                    var bold = document.createElement('b');
                    bold.innerText = 'Bonus Omni Vamp Ratio: ';
                    abilityDiv.appendChild(bold);
                    if (path['vamp']) {
                      var text = document.createTextNode(arrayCheck(path['vamp']));
                      abilityDiv.appendChild(text);
                    };
                    if (path["duration"]) {
                      singleBreak();
                      var durU = document.createElement('u');
                      durU.innerText = 'Duration';
                      abilityDiv.appendChild(durU);
                      var text = document.createTextNode(': ' + arrayCheck(path["duration"]));
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["bonusMoveSpeed"]) {
                    var msPath = champFile[ability]["bonusMoveSpeed"];
                    var bold = document.createElement('b');
                    bold.innerText = 'Bonus Movement Speed: ';
                    abilityDiv.appendChild(bold);
                    if (msPath["minBonusMSRatio"]) {
                      var minU = document.createElement('u');
                      minU.innerText = 'Min Ratio';
                      abilityDiv.appendChild(minU);
                      var text = document.createTextNode(': ' + arrayCheck(msPath["minBonusMSRatio"]));
                      abilityDiv.appendChild(text);
                    };
                    if (msPath["maxBonusMSRatio"]) {
                      singleBreak();
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max Ratio';
                      abilityDiv.appendChild(maxU);
                      var text = document.createTextNode(': ' + arrayCheck(msPath["maxBonusMSRatio"]));
                      abilityDiv.appendChild(text);
                    };
                    if (msPath["duration"]) {
                      singleBreak();
                      var durU = document.createElement('u');
                      durU.innerText = "Duration";
                      abilityDiv.appendChild(durU);
                      var text = document.createTextNode(': ' + arrayCheck(msPath["duration"]));
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["cripple"]) {
                    var path = champFile[ability]["cripple"];
                    var crippleB = document.createElement('b');
                    crippleB.innerText = 'Attack Speed Cripple: ';
                    abilityDiv.appendChild(crippleB);
                    if (path["attackSpeed"]) {
                      var text = document.createTextNode(arrayCheck(path["attackSpeed"]));
                      abilityDiv.appendChild(text);
                    };
                    if (path["minAttackSpeed"]) {
                      var minU = document.createElement('u');
                      minU.innerText = 'Min';
                      abilityDiv.appendChild(minU);
                      var minText = document.createTextNode(': ' + arrayCheck(path["minAttackSpeed"]));
                      abilityDiv.appendChild(minText);
                      singleBreak();
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max';
                      abilityDiv.appendChild(maxU);
                      var maxText = document.createTextNode(': ' + arrayCheck(path["maxAttackSpeed"]));
                      abilityDiv.appendChild(maxText);
                    };
                    if (path["duration"]) {
                      singleBreak();
                      var durU = document.createElement('u');
                      durU.innerText = 'Duration';
                      abilityDiv.appendChild(durU);
                      var text = document.createTextNode(': ' + arrayCheck(path["duration"]));
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["petStats"]) {
                    var path = champFile[ability]["petStats"];
                    var petB = document.createElement('b');
                    petB.innerText = 'Pet Stats: ';
                    abilityDiv.appendChild(petB);
                    if (path["auto"]) {
                      var autoU = document.createElement('u');
                      autoU.innerText = 'Auto Attack';
                      abilityDiv.appendChild(autoU);
                      var typeText = document.createTextNode(': ' + path["auto"]["type"] + ' Damage: ');
                      abilityDiv.appendChild(typeText);
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
                      if (path["auto"]["enemyMaxHPRatio"] && enemyStats.hp) {
                        autoCounter += arrayCheck(path["auto"]["enemyMaxHPRatio"]) * enemyTotalHP;
                      };
                      if (autoCounter !== 0) {
                        var text = document.createTextNode(Math.round(autoCounter));
                        abilityDiv.appendChild(text);
                      };
                      if (path["auto"]["enemyMaxHPRatio"] && !enemyStats.hp) {
                        var text = document.createTextNode(' (+' + arrayCheck(path["auto"]["enemyMaxHPRatio"]) 
                        + ' Enemy Max HP Ratio)');
                        abilityDiv.appendChild(text);
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
                        var minText = document.createTextNode('Min: ' + Math.round(minCounter));
                        abilityDiv.appendChild(minText);
                        singleBreak();
                        if (path["auto"]["maxDmgByLvl"]) {
                          maxCounter += path["auto"]["maxDmgByLvl"][champLevel]
                        };
                        if (path["auto"]["maxAPRatio"]) {
                          maxCounter += arrayCheck(path["auto"]["maxAPRatio"]) * totalAP;
                        };
                        var maxText = document.createTextNode('Max: ' + Math.round(maxCounter));
                        abilityDiv.appendChild(maxText);
                      }; 
                      if (path["auto"]["multiHitDmgRatio"]) {
                        singleBreak();
                        var multiU = document.createElement('u');
                        multiU.innerText = 'Multi-Hit Damage Ratio';
                        abilityDiv.appendChild(multiU);
                        var text = document.createTextNode(': ' + arrayCheck(path["auto"]["multiHitDmgRatio"]));
                        abilityDiv.appendChild(text);
                      }
                    };
                    if (path["attackSpeed"] || path["attackSpeedByLvl"] || path["minAttackSpeed"]) {
                      singleBreak();
                      var asU = document.createElement('u');
                      asU.innerText = 'Attack Speed';
                      abilityDiv.appendChild(asU);
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
                      var text = document.createTextNode(': ' + asCounter.toFixed(3));
                      abilityDiv.appendChild(text);
                    };
                    if (path["minAttackSpeed"]) {
                      var text = document.createTextNode(': Min: ' + arrayCheck(path["minAttackSpeed"]) 
                      + ', Max: ' + arrayCheck(path["maxAttackSpeed"]));
                      abilityDiv.appendChild(text);
                    };
                    var hpCounter = 0;
                    if (path["health"] || path["healthByLvl"] || path["maxHPRatio"] || path["healthRatio"]) {
                      singleBreak();
                      var healthU = document.createElement('u');
                      healthU.innerText = 'Health';
                      abilityDiv.appendChild(healthU);
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
                      var text = document.createTextNode(': ' + Math.round(hpCounter));
                      abilityDiv.appendChild(text);
                    };
                    if (path["armor"] || path["armorByLvl"] || path["armorRatio"]) {
                      singleBreak();
                      var armorU = document.createElement('u');
                      armorU.innerText = 'Armor';
                      abilityDiv.appendChild(armorU);
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
                      var text = document.createTextNode(': ' + Math.round(armorCounter));
                      abilityDiv.appendChild(text);
                    };
                    if (path["magicResist"] || path["magicResistByLvl"] || path["magicResistRatio"]) {
                      singleBreak();
                      var mrU = document.createElement('u');
                      mrU.innerText = 'Magic Resist';
                      abilityDiv.appendChild(mrU);
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
                      var text = document.createTextNode(': ' + Math.round(mrCounter));
                      abilityDiv.appendChild(text);
                    };
                    if (path["interruptCC"]) {
                      singleBreak();
                      var intU = document.createElement('u');
                      intU.innerText = 'Crowd Control Duration';
                      abilityDiv.appendChild(intU);
                      var text = document.createTextNode(': ' + arrayCheck(path["interruptCC"]));
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["empower"]) {
                    var ePath = champFile[ability]["empower"];
                    var empB = document.createElement('b');
                    var empU = document.createElement('u');
                    empB.appendChild(empU);
                    empU.innerText = 'Empower';
                    abilityDiv.appendChild(empB);
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
                        var petB = document.createElement('b');
                        petB.innerText = 'Pet Stats: ';
                        abilityDiv.appendChild(petB);
                        if (path["auto"]) {
                          var autoU = document.createElement('u');
                          autoU.innerText = 'Auto Attack';
                          abilityDiv.appendChild(autoU);
                          var typeText = document.createTextNode(': ' + path["auto"]["type"] + ' Damage: ');
                          abilityDiv.appendChild(typeText);
                          var autoCounter = 0;
                          if (path["auto"]["dmg"]) {
                            autoCounter += arrayCheck(path["auto"]["dmg"]);
                          };
                          if (path["auto"]["APRatio"]) {
                            autoCounter += arrayCheck(path["auto"]["APRatio"]) * totalAP;
                          };
                          var text = document.createTextNode(Math.round(autoCounter));
                          abilityDiv.appendChild(text);
                        };
                        if (path["attackSpeed"]) {
                          singleBreak();
                          var asU = document.createElement('u');
                          asU.innerText = 'Attack Speed';
                          abilityDiv.appendChild(asU);
                          var asText = document.createTextNode(': ' + arrayCheck(path["attackSpeed"]));
                          abilityDiv.appendChild(asText);
                        };
                        if (path["healthByLvl"]) {
                          singleBreak();
                          var hpU = document.createElement('u');
                          hpU.innerText = 'Health';
                          abilityDiv.appendChild(hpU);
                          var hpCounter = 0;
                          hpCounter += path["healthByLvl"][champLevel];
                          if (path["healthPerAPRatioByLvl"]) {
                            hpCounter += path["healthPerAPRatioByLvl"][champLevel] * totalAP;
                          };
                          var text = document.createTextNode(': ' + Math.round(hpCounter));
                          abilityDiv.appendChild(text);
                        };
                        if (path["armorByLvl"]) {
                          singleBreak();
                          var armorU = document.createElement('u');
                          armorU.innerText = 'Armor';
                          abilityDiv.appendChild(armorU);
                          var text = document.createTextNode(': ' + path["armorByLvl"][champLevel]);
                          abilityDiv.appendChild(text);
                        };
                        if (path["magicResistByLvl"]) {
                          singleBreak();
                          var mrU = document.createElement('u');
                          mrU.innerText = 'Magic Resist';
                          abilityDiv.appendChild(mrU);
                          var text = document.createTextNode(': ' + path["magicResistByLvl"][champLevel])
                          abilityDiv.appendChild(text);
                        };
                      };
                      if (ePath['Q']['damage']) {
                        singleBreak();
                        var damage = ePath['Q']["damage"];
                        if (damage["type"]) {
                          var bold = document.createElement('b')
                          bold.innerText = damage["type"] + " Damage: "
                          abilityDiv.appendChild(bold);
                        };
                        var dmgCounter = 0;
                        if (damage["dmg"]) {
                          dmgCounter += arrayCheck(damage["dmg"]);
                        };
                        if (damage["APRatio"]) {
                          dmgCounter += arrayCheck(damage["APRatio"]) * totalAP;
                        };
                        if (dmgCounter !== 0) {
                          var text = document.createTextNode(Math.round(dmgCounter));
                          abilityDiv.appendChild(text);
                        };
                        if (damage["system"] === 'minMax') {
                          var minU = document.createElement('u');
                          minU.innerText = 'Min';
                          abilityDiv.appendChild(minU);
                          var minCounter = 0;
                          var maxCounter = 0;
                          if (damage["minDmg"]) {
                            minCounter += arrayCheck(damage["minDmg"]);
                          };
                          if (damage["minAPRatio"]) {
                            minCounter += arrayCheck(damage["minAPRatio"]) * totalAP;
                          };
                          var minText = document.createTextNode(': ' + Math.round(minCounter));
                          abilityDiv.appendChild(minText);
                          singleBreak();
                          var maxU = document.createElement('u');
                          maxU.innerText = 'Max';
                          abilityDiv.appendChild(maxU);
                          if (damage["maxDmg"]) {
                            maxCounter += arrayCheck(damage["maxDmg"]);
                          };
                          if (damage["maxAPRatio"]) {
                            maxCounter += arrayCheck(damage["maxAPRatio"]) * totalAP;
                          };
                          var maxText = document.createTextNode(': ' + Math.round(maxCounter));
                          abilityDiv.appendChild(maxText);
                        }
                      };
                      if (ePath['Q']['bonusDamage']) {
                        singleBreak();
                        var damage = ePath['Q']["bonusDamage"];
                        if (damage["type"]) {
                          var bold = document.createElement('b');
                          bold.innerText = 'Bonus ' + damage["type"] + " Damage: ";
                          abilityDiv.appendChild(bold);
                        };
                        if (damage["system"] === 'minMax') {
                          var minU = document.createElement('u');
                          minU.innerText = 'Min';
                          abilityDiv.appendChild(minU);
                          var minCounter = 0;
                          var maxCounter = 0;
                          if (damage["minDmg"]) {
                            minCounter += arrayCheck(damage["minDmg"]);
                          };
                          if (damage["minAPRatio"]) {
                            minCounter += arrayCheck(damage["minAPRatio"]) * totalAP;
                          };
                          var minText = document.createTextNode(': ' + Math.round(minCounter));
                          abilityDiv.appendChild(minText);
                          singleBreak();
                          var maxU = document.createElement('u');
                          maxU.innerText = 'Max';
                          abilityDiv.appendChild(maxU);
                          if (damage["maxDmg"]) {
                            maxCounter += arrayCheck(damage["maxDmg"]);
                          };
                          if (damage["maxAPRatio"]) {
                            maxCounter += arrayCheck(damage["maxAPRatio"]) * totalAP;
                          };
                          var maxText = document.createTextNode(': ' + Math.round(maxCounter));
                          abilityDiv.appendChild(maxText);
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
                          var bold = document.createElement('b');
                          bold.innerText = damage["type"] + " Damage: ";
                          abilityDiv.appendChild(bold);
                        };
                        var dmgCounter = 0;
                        if (damage["dmg"]) {
                          dmgCounter += arrayCheck(damage["dmg"]);
                        };
                        if (damage["APRatio"]) {
                          dmgCounter += arrayCheck(damage["APRatio"]) * totalAP;
                        };
                        if (dmgCounter !== 0) {
                          var text = document.createTextNode(Math.round(dmgCounter));
                          abilityDiv.appendChild(text);
                        };
                        if (damage["system"] === 'minMax') {
                          var minU = document.createElement('u');
                          minU.innerText = 'Min';
                          abilityDiv.appendChild(minU);
                          var minCounter = 0;
                          var maxCounter = 0;
                          if (damage["minDmg"]) {
                            minCounter += arrayCheck(damage["minDmg"]);
                          };
                          if (damage["minAPRatio"]) {
                            minCounter += arrayCheck(damage["minAPRatio"]) * totalAP;
                          };
                          var minText = document.createTextNode(': ' + Math.round(minCounter));
                          abilityDiv.appendChild(minText);
                          singleBreak();
                          var maxU = document.createElement('u');
                          maxU.innerText = 'Max';
                          abilityDiv.appendChild(maxU);
                          if (damage["maxDmg"]) {
                            maxCounter += arrayCheck(damage["maxDmg"]);
                          };
                          if (damage["maxAPRatio"]) {
                            maxCounter += arrayCheck(damage["maxAPRatio"]) * totalAP;
                          }
                          var maxText = document.createTextNode(': ' + Math.round(maxCounter));
                          abilityDiv.appendChild(maxText);
                        }
                      };
                      if (ePath['W']['heal']) {
                        singleBreak();
                        var path = ePath['W']['heal'];
                        var healBold = document.createElement('b');
                        healBold.innerText = 'Heal: ';
                        abilityDiv.appendChild(healBold);
                        if (path['system'] === 'minMax') {
                          var minU = document.createElement('u');
                          minU.innerText = 'Min';
                          abilityDiv.appendChild(minU);
                          var minMissCounter = 0;
                          var maxMissCounter = 0;
                          if (path["minMissingHPRatio"]) {
                            minMissCounter += arrayCheck(path["minMissingHPRatio"]);
                          };
                          if (path["minMissingHPRatioPer100AP"]) {
                            minMissCounter += arrayCheck(path["minMissingHPRatioPer100AP"]) * totalAP/100;
                          };
                          var minText = document.createTextNode(': ' + lengthCheck(minMissCounter) + ' Missing HP Ratio');
                          abilityDiv.appendChild(minText);
                          singleBreak();
                          var maxU = document.createElement('u');
                          maxU.innerText = 'Max';
                          abilityDiv.appendChild(maxU);
                          if (path["maxMissingHPRatio"]) {
                            maxMissCounter += arrayCheck(path["maxMissingHPRatio"]);
                          };
                          if (path["maxMissingHPRatioPer100AP"]) {
                            maxMissCounter += arrayCheck(path["maxMissingHPRatioPer100AP"]) * totalAP/100;
                          };
                          var maxText = document.createTextNode(': ' + lengthCheck(maxMissCounter) + ' Missing HP Ratio');
                          abilityDiv.appendChild(maxText);
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
                          var bold = document.createElement('b');
                          bold.innerText = damage["type"] + " Damage: "
                          abilityDiv.appendChild(bold);
                        };
                        var dmgCounter = 0;
                        if (damage["dmg"]) {
                          dmgCounter += arrayCheck(damage["dmg"]);
                        };
                        if (damage["APRatio"]) {
                          dmgCounter += arrayCheck(damage["APRatio"]) * totalAP;
                        };
                        if (dmgCounter !== 0) {
                          var text = document.createTextNode(Math.round(dmgCounter));
                          abilityDiv.appendChild(text);
                        };
                        if (damage["system"] === '2Part') {
                          var p1U = document.createElement('u');
                          p1U.innerText = 'Part 1';
                          abilityDiv.appendChild(p1U);
                          var p1Counter = 0;
                          var p2Counter = 0;
                          if (damage["part1"]["dmg"]) {
                            p1Counter += arrayCheck(damage["part1"]["dmg"]);
                          };
                          if (damage["part1"]["APRatio"]) {
                            p1Counter += arrayCheck(damage["part1"]["APRatio"]) * totalAP;
                          };
                          var p1Text = document.createTextNode(Math.round(p1Counter));
                          abilityDiv.appendChild(p1Text);
                          singleBreak();
                          var p2U = document.createElement('u');
                          p2U.innerText = 'Part 2';
                          abilityDiv.appendChild(p2U);
                          if (damage["part2"]["dmg"]) {
                            p2Counter += arrayCheck(damage["part2"]["dmg"]);
                          };
                          if (damage["part2"]["APRatio"]) {
                            p2Counter += arrayCheck(damage["part2"]["APRatio"]) * totalAP;
                          };
                          var p2Text = document.createTextNode(Math.round(p2Counter));
                          abilityDiv.appendChild(p2Text);
                        }
                      };
                      if (ePath['E']['bonusShield']) {
                        singleBreak();
                        var shield = ePath['E']["bonusShield"];
                        var shieldB = document.createElement('b');
                        shieldB.innerText = 'Bonus Shield: ';
                        abilityDiv.appendChild(shieldB);
                        var shieldCounter = 0;
                        if (shield["shield"]) {
                          shieldCounter += arrayCheck(shield["shield"]);
                        };
                        if (shield["APRatio"]) {
                          shieldCounter += arrayCheck(shield["APRatio"]) * totalAP;
                        };
                        var text = document.createTextNode(Math.round(shieldCounter));
                        abilityDiv.appendChild(text);
                        if (shield["nonTargetRatio"]) {
                          singleBreak();
                          var shieldU = document.createElement('u');
                          shieldU.innerText = 'Non-Target Shield: ';
                          abilityDiv.appendChild(shieldU);
                          var text = document.createTextNode(Math.round(shield["nonTargetRatio"] * shieldCounter));
                          abilityDiv.appendChild(text);
                        }
                      };
                      doubleBreak();
                    }
                  };

                  if (champFile[ability]['statSteal']) {
                    var path = champFile[ability]['statSteal'];
                    var bold = document.createElement('b');
                    bold.innerText = 'Stat Steal: ';
                    abilityDiv.appendChild(bold);
                    var text = document.createTextNode('');
                    var typeText = document.createTextNode(path['statType']);
                    abilityDiv.appendChild(typeText);
                    if (path['ratio']) {
                      singleBreak();
                      var underL = document.createElement('u');
                      underL.innerText = 'Ratio';
                      abilityDiv.appendChild(underL);
                      var text = document.createTextNode(': ' + arrayCheck(path['ratio']));
                      abilityDiv.appendChild(text);
                    };
                    if (path['gained']) {
                      singleBreak();
                      var gainU = document.createElement('u');
                      gainU.innerText = 'Gain';
                      abilityDiv.appendChild(gainU);
                      var text = document.createTextNode(': ' + arrayCheck(path['gained']));
                      abilityDiv.appendChild(text);
                      singleBreak();
                      var takeU = document.createElement('u');
                      takeU.innerText = 'Remove';
                      abilityDiv.appendChild(takeU);
                      var text2 = document.createTextNode(': ' + arrayCheck(path['removed']));
                      abilityDiv.appendChild(text2);
                    };
                    if (path['minByLvl']) {
                      singleBreak();
                      var minU = document.createElement('u');
                      minU.innerText = 'Min';
                      abilityDiv.appendChild(minU);
                      var text = document.createTextNode(': ' + path['minByLvl'][champLevel]);
                      abilityDiv.appendChild(text);
                    };
                    if (path['duration']) {
                      singleBreak();
                      var durU = document.createElement('u');
                      durU.innerText = 'Duration';
                      abilityDiv.appendChild(durU);
                      var text = document.createTextNode(': ' + arrayCheck(path['duration']));
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };
    
                  if (champFile[ability]["duration"]) {
                    var bold = document.createElement('b');
                    bold.innerText = "Duration: ";
                    abilityDiv.appendChild(bold);
                    var text = document.createTextNode(arrayCheck(champFile[ability]["duration"]));
                    abilityDiv.appendChild(text);
                    doubleBreak();
                  };
    
                  if (champFile[ability]["minDuration"]) {
                    var bold = document.createElement('b');
                    bold.innerText = "Duration: ";
                    abilityDiv.appendChild(bold);
                    var text = document.createTextNode('Min: ' + arrayCheck(champFile[ability]["minDuration"]) 
                    + ', Max: ' + arrayCheck(champFile[ability]["maxDuration"]));
                    abilityDiv.appendChild(text);
                    doubleBreak();
                  };
    
                  if (champFile[ability]["maxDuration"] && !champFile[ability]["minDuration"]) {
                    var bold = document.createElement('b');
                    bold.innerText = "Max Duration: ";
                    abilityDiv.appendChild(bold);
                    var text = document.createTextNode(arrayCheck(champFile[ability]["maxDuration"]));
                    abilityDiv.appendChild(text);
                    doubleBreak();
                  };
    
                  if (champFile[ability]["coolDown"]) {
                    var bold = document.createElement('b');
                    bold.innerText = "Cooldown: ";
                    abilityDiv.appendChild(bold);
                    var text = document.createTextNode(arrayCheck(champFile[ability]["coolDown"]));
                    abilityDiv.appendChild(text);
                  };
                  if (champFile[ability]["minCoolDown"] && !champFile[ability]["staticCoolDownFormula"]) {
                    var bold = document.createElement('b');
                    bold.innerText = "Cooldown: ";
                    abilityDiv.appendChild(bold);
                    var text = document.createTextNode('Max: ' + arrayCheck(champFile[ability]["maxCoolDown"])
                    + ', Min: ' + arrayCheck(champFile[ability]["minCoolDown"]));
                    abilityDiv.appendChild(text);
                  };
                  if (champFile[ability]["maxCoolDown"] && !champFile[ability]["minCoolDown"]) {
                    var bold = document.createElement('b');
                    bold.innerText = "Max Cooldown: ";
                    abilityDiv.appendChild(bold);
                    var text = document.createTextNode(arrayCheck(champFile[ability]["maxCoolDown"]));
                    abilityDiv.appendChild(text);
                  };
                  if (champFile[ability]["coolDownByLvl"]) {
                    var bold = document.createElement('b');
                    bold.innerText = "Cooldown: ";
                    abilityDiv.appendChild(bold);
                    var text = document.createTextNode(champFile[ability]["coolDownByLvl"][champLevel])
                    abilityDiv.appendChild(text);
                  };
                  if (champFile[ability]["combatCoolDown"]) {
                    var bold = document.createElement('b');
                    bold.innerText = "Combat Cooldown: ";
                    abilityDiv.appendChild(bold);
                    var text = document.createTextNode(arrayCheck(champFile[ability]["combatCoolDown"]));
                    abilityDiv.appendChild(text);
                  };
                  if (champFile[ability]["staticCoolDown"]) {
                    if (champFile[ability]["coolDown"]) {
                      singleBreak();
                    };
                    var bold = document.createElement('b');
                    bold.innerText = "Static Cooldown: ";
                    abilityDiv.appendChild(bold);
                    var text = document.createTextNode(arrayCheck(champFile[ability]["staticCoolDown"]));
                    abilityDiv.appendChild(text);
                  };
                  if (champFile[ability]["staticCoolDownByLvl"]) {
                    var bold = document.createElement('b');
                    bold.innerText = "Static Cooldown: ";
                    abilityDiv.appendChild(bold);
                    var text = document.createTextNode(champFile[ability]["staticCoolDownByLvl"][champLevel]);
                    abilityDiv.appendChild(text);
                  };
                  if (champFile[ability]["autoCoolDown"]) {
                    var bold = document.createElement('b');
                    bold.innerText = "Cooldown Number of Auto Attacks: ";
                    abilityDiv.appendChild(bold);
                    var text = document.createTextNode(champFile[ability]["autoCoolDown"]);
                    abilityDiv.appendChild(text);
                  };
                  if (champFile[ability]["coolDownRefund"]) {
                    if (champFile[ability]["coolDownByLvl"] || champFile[ability]["coolDown"] 
                    || champFile[ability]["staticCoolDownByLvl"] || champFile[ability]["staticCoolDown"]) {
                      singleBreak();
                    };
                    var refU = document.createElement('u');
                    refU.innerText = 'Cooldown Refund';
                    abilityDiv.appendChild(refU);
                    var text = document.createTextNode(': ' + arrayCheck(champFile[ability]["coolDownRefund"]));
                    abilityDiv.appendChild(text);
                  };
                  if (champFile[ability]["allCDRefund"]) {
                    if (champFile[ability]["coolDown"]) {
                      singleBreak();
                    };
                    var refU = document.createElement('u');
                    refU.innerText = 'All Abilities Cooldown Refund';
                    abilityDiv.appendChild(refU);
                    var text = document.createTextNode(': ' + arrayCheck(champFile[ability]["allCDRefund"]));
                    abilityDiv.appendChild(text);
                  };
                  if (champFile[ability]["basicCDMaxRefundRatioPerStack"]) {
                    singleBreak();
                    var refU = document.createElement('u');
                    refU.innerText = 'Basic Abilities Max Cooldown Refund Ratio';
                    abilityDiv.appendChild(refU);
                    var text = document.createTextNode(': ' + champFile[ability]["basicCDMaxRefundRatioPerStack"]+ ' per Stack');
                    abilityDiv.appendChild(text);
                  };
                  if (champFile[ability]["coolDownRefundByLvl"]) {
                    singleBreak();
                    var refU = document.createElement('u');
                    refU.innerText = 'Cooldown Refund';
                    abilityDiv.appendChild(refU);
                    var text = document.createTextNode(': ' + champFile[ability]["coolDownRefundByLvl"][champLevel])
                    abilityDiv.appendChild(text);
                  };
                  if (champFile[ability]["minCoolDownRefund"]) {
                    singleBreak();
                    var refU = document.createElement('u');
                    refU.innerText = 'Cooldown Refund';
                    abilityDiv.appendChild(refU);
                    var text = document.createTextNode(': Min: ' + champFile[ability]["minCoolDownRefund"]
                    + ', Max: ' + champFile[ability]["maxCoolDownRefund"]);
                    abilityDiv.appendChild(text);
                  };
                  if (champFile[ability]["minCoolDownRefundByLvl"]) {
                    singleBreak();
                    var refU = document.createElement('u');
                    refU.innerText = 'Min Cooldown Refund';
                    abilityDiv.appendChild(refU);
                    var text = document.createTextNode(': ' + champFile[ability]["minCoolDownRefundByLvl"][champLevel]);
                    abilityDiv.appendChild(text);
                  };
                  if (champFile[ability]["maxCoolDownRefundByLvl"]) {
                    singleBreak();
                    var refU = document.createElement('u');
                    refU.innerText = 'Max Cooldown Refund'
                    abilityDiv.appendChild(refU);
                    var text = document.createTextNode(': ' + champFile[ability]["maxCoolDownRefundByLvl"][champLevel])
                    abilityDiv.appendChild(text);
                  };
                  if (champFile[ability]["coolDownRefundRatio"]) {
                    singleBreak();
                    var refU = document.createElement('u');
                    refU.innerText = 'Cooldown Refund Ratio';
                    abilityDiv.appendChild(refU);
                    var text = document.createTextNode(': ' + arrayCheck(champFile[ability]["coolDownRefundRatio"]));
                    abilityDiv.appendChild(text);
                  };
                  if (champFile[ability]["coolDownRefundRatioByLvl"]) {
                    singleBreak();
                    var refU = document.createElement('u');
                    refU.innerText = 'Cooldown Refund Ratio';
                    abilityDiv.appendChild(refU);
                    var text = document.createTextNode(': ' + champFile[ability]["coolDownRefundRatioByLvl"][champLevel])
                    abilityDiv.appendChild(text);
                  };
                  if (champFile[ability]["maxCoolDownRefundRatio"]) {
                    singleBreak();
                    var refU = document.createElement('u');
                    refU.innerText = 'Max Cooldown Refund Ratio';
                    abilityDiv.appendChild(refU);
                    var text = document.createTextNode(': ' + champFile[ability]["maxCoolDownRefundRatio"]);
                    abilityDiv.appendChild(text);
                  };
                  if (champFile[ability]["recharge"]) {
                    if (champFile[ability]["coolDown"] || champFile[ability]["staticCoolDown"]) {
                      singleBreak();
                    };
                    var bold = document.createElement('b');
                    bold.innerText = "Recharge: ";
                    abilityDiv.appendChild(bold);
                    var text = document.createTextNode(arrayCheck(champFile[ability]["recharge"]));
                    abilityDiv.appendChild(text);
                  };
                  if (champFile[ability]["staticCoolDownFormula"]) {
                    var bold = document.createElement('b');
                    bold.innerText = "Cooldown: ";
                    abilityDiv.appendChild(bold);
                    var value = 4 * (1 - (0.6 * (itemStats.as + statsPath["attackSpeedPerLevel"] * champLevel 
                    * (0.7025 + 0.0175 * champLevel))));
                    if (value.toString().length > 4) {
                      value = value.toFixed(2);
                    };
                    var text = document.createTextNode(value);
                    abilityDiv.appendChild(text);
                  };
    
                  if (champFile[ability]["Rhaast"]) {
                    var path = champFile[ability]["Rhaast"];
                    if (ability !== 'passive') {
                      doubleBreak();
                    };
                    var rhaastU = document.createElement('u');
                    var rhaastB = document.createElement('b');
                    rhaastB.appendChild(rhaastU);
                    rhaastU.innerText = 'Rhaast';
                    abilityDiv.appendChild(rhaastB);
                    if (path["damage"]) {
                      singleBreak();
                      var typeB = document.createElement('u');
                      typeB.innerText = path["damage"]["type"] + ' Damage';
                      abilityDiv.appendChild(typeB);
                      var dmgCounter = 0;
                      var enemyMaxHPCounter = 0;
                      if (path["damage"]["enemyMaxHPRatio"] && enemyStats.hp){
                        dmgCounter += arrayCheck(path["damage"]["enemyMaxHPRatio"]) * enemyTotalHP;
                      };
                      if (path["damage"]["enemyMaxHPRatioPer100BonusAD"] && enemyStats.hp) {
                        dmgCounter += path["damage"]["enemyMaxHPRatioPer100BonusAD"] * enemyTotalHP * bonusAD/100;
                      };
                      if (dmgCounter !== 0) {
                        var text = document.createTextNode(': ' + Math.round(dmgCounter));
                        abilityDiv.appendChild(text);
                      };
                      if (path["damage"]["enemyMaxHPRatio"] && !enemyStats.hp){
                        enemyMaxHPCounter += arrayCheck(path["damage"]["enemyMaxHPRatio"]);
                      };
                      if (path["damage"]["enemyMaxHPRatioPer100BonusAD"] && !enemyStats.hp) {
                        enemyMaxHPCounter += arrayCheck(path["damage"]["enemyMaxHPRatioPer100BonusAD"]) * bonusAD/100;
                      };
                      if (enemyMaxHPCounter !== 0) {
                        var text = document.createTextNode(': ' + lengthCheck(enemyMaxHPCounter) + ' Enemy Max HP Ratio');
                        abilityDiv.appendChild(text);
                      };
                      if (path["damage"]["system"] === 'minMax') {
                        var minText = document.createTextNode(': Min: ');
                        abilityDiv.appendChild(minText);
                        var minCounter = 0;
                        var minHPCounter = 0;
                        if (path["damage"]["minADRatio"]) {
                          minCounter += arrayCheck(path["damage"]["minADRatio"]) * totalAD;
                        };
                        if (path["damage"]["minEnemyMaxHPRatio"] && enemyStats.hp) {
                          minCounter += arrayCheck(path["damage"]["minEnemyMaxHPRatio"]) * enemyTotalHP;
                        };
                        if (path["damage"]["minEnemyMaxHPRatioPer100BonusAD"] && enemyStats.hp) {
                          minCounter += arrayCheck(path["damage"]["minEnemyMaxHPRatioPer100BonusAD"]) 
                          * enemyTotalHP * bonusAD/100;
                        };
                        if (minCounter !== 0) {
                          var text = document.createTextNode(Math.round(minCounter));
                          abilityDiv.appendChild(text);
                        };
                        if (path["damage"]["minEnemyMaxHPRatio"] && !enemyStats.hp) {
                          minHPCounter += arrayCheck(path["damage"]["minEnemyMaxHPRatio"]);
                        };
                        if (path["damage"]["minEnemyMaxHPRatioPer100BonusAD"] && !enemyStats.hp) {
                          minHPCounter += arrayCheck(path["damage"]["minEnemyMaxHPRatioPer100BonusAD"]) * bonusAD/100;
                        };
                        if (minHPCounter !== 0) {
                          var text = document.createTextNode(' (+' + lengthCheck(minHPCounter) + ' Enemy Max HP Ratio)');
                          abilityDiv.appendChild(text);
                        };
                        singleBreak();
                        var maxText = document.createTextNode('Max: ');
                        abilityDiv.appendChild(maxText);
                        if (minCounter !== 0) {
                          var text = document.createTextNode(Math.round(minCounter * 2));
                          abilityDiv.appendChild(text);
                        };
                        if (minHPCounter !== 0) {
                          var text = document.createTextNode(' (+' + lengthCheck(minHPCounter * 2) + ' Enemy Max HP Ratio)');
                          abilityDiv.appendChild(text);
                        }
                      } 
                    };
                    if (path["heal"]) {
                      singleBreak();
                      var healB = document.createElement('u');
                      healB.innerText = 'Heal';
                      abilityDiv.appendChild(healB);
                      var healCounter = 0;
                      var maxHPCounter = 0;
                      if (path["heal"]["enemyMaxHPRatio"] && enemyStats.hp){
                        healCounter += arrayCheck(path["heal"]["enemyMaxHPRatio"]) * enemyTotalHP;
                      };
                      if (path["heal"]["enemyMaxHPRatioPer100BonusAD"] && enemyStats.hp){
                        healCounter += arrayCheck(path["heal"]["enemyMaxHPRatio"]) * enemyTotalHP * bonusAD/100;
                      };
                      if (healCounter !== 0) {
                        var text = document.createTextNode(': ' + Math.round(healCounter));
                        abilityDiv.appendChild(text);
                      };
                      if (path["heal"]["enemyMaxHPRatio"] && !enemyStats.hp){
                        maxHPCounter += arrayCheck(path["heal"]["enemyMaxHPRatio"]);
                      };
                      if (path["heal"]["enemyMaxHPRatioPer100BonusAD"] && !enemyStats.hp){
                        maxHPCounter += arrayCheck(path["heal"]["enemyMaxHPRatio"]) * bonusAD/100;
                      };
                      if (maxHPCounter !== 0) {
                        var text = document.createTextNode(': ' + lengthCheck(maxHPCounter) + ' Enemy Max HP Ratio');
                        abilityDiv.appendChild(text);
                      } 
                    };
                    if (path["interruptCC"]) {
                      singleBreak();
                      var intU = document.createElement('u');
                      intU.innerText = 'Crowd Control Duration';
                      abilityDiv.appendChild(intU);
                      var text = document.createTextNode(': ' + arrayCheck(path["interruptCC"]));
                      abilityDiv.appendChild(text);
                    }
                  };
    
                  if (champFile[ability]["Shadow"]) {
                    var path = champFile[ability]["Shadow"];
                    doubleBreak();
                    var shadowU = document.createElement('u');
                    var shadowB = document.createElement('b');
                    shadowB.appendChild(shadowU);
                    shadowU.innerText = 'Shadow';
                    abilityDiv.appendChild(shadowB);
                    if (path["coolDown"]) {
                      singleBreak();
                      var cdU = document.createElement('u');
                      cdU.innerText = 'Cooldown';
                      abilityDiv.appendChild(cdU);
                      var cdText = document.createTextNode(': ' + arrayCheck(path["coolDown"]));
                      abilityDiv.appendChild(cdText);
                    }
                  }
                };
    
              } else {
    
                this[`${ability}Details`] = "No combat stats for this ability.";
                var text = document.createTextNode("No combat stats for this ability.");
                abilityDiv.appendChild(text);
    
              } if (champFile[this.transformAbilities[i]]) {
                var tfAbility = this.transformAbilities[i];
                var hr = document.createElement('hr');
                abilityDiv.appendChild(hr);
                var transU = document.createElement('u');
                transU.innerText = 'Transform ' + ability;
                if (ability === 'passive') {
                  transU.innerText = 'Transform Passive';
                };
                abilityDiv.appendChild(transU);
                var hr2 = document.createElement('hr');
                abilityDiv.appendChild(hr2);
    
                if (ability === 'passive' || document.getElementById(`${ability}Rank${side}`).value == 0) {

                  if (champFile[tfAbility]["remountHPRatioByLvl"]) {
                    var path = champFile[tfAbility]["remountHPRatioByLvl"]
                    var bold = document.createElement('b');
                    bold.innerText = 'Remount HP Ratio: ';
                    abilityDiv.appendChild(bold);
                    var text = document.createTextNode('(' + path[0] + ' to ' + path[17] 
                    + ', based on level. Currently: ' + path[champLevel] + ')');
                    abilityDiv.appendChild(text);
                  }
    
                  if (champFile[tfAbility]['autoEmpower']) {
                    var path = champFile[tfAbility]['autoEmpower']['damage'];
                    var bold = document.createElement('b');
                    bold.innerText = 'Auto Attack Empower: ';
                    abilityDiv.appendChild(bold);
                    var dmgType = document.createElement('u');
                    dmgType.innerText = path['type'] + ' Damage';
                    abilityDiv.appendChild(dmgType);
                    if (path['dmgByRRank']) {
                      var text = document.createTextNode(': ' + removeSpace(path["dmgByRRank"]) + ' (based on R rank)');
                      abilityDiv.appendChild(text);
                    };
                    if (path['APRatio']) {
                      var text = document.createTextNode(' (+' + path['APRatio'] + ' AP Ratio)');
                      abilityDiv.appendChild(text);
                    };
                    if (path['system'] === 'minMax') {
                      var minU = document.createTextNode(': Min: ');
                      abilityDiv.appendChild(minU);
                      if (path['minDmgByRRank']) {
                        var text = document.createTextNode(removeSpace(path['minDmgByRRank']));
                        abilityDiv.appendChild(text);
                      };
                      if (path['minADRatio']) {
                        var text = document.createTextNode(' (+' + removeParen(path['minADRatio']) + ' AD Ratio)');
                        abilityDiv.appendChild(text);
                      };
                      if (path['minAPRatio']) {
                        var text = document.createTextNode(' (+' + removeParen(path['minAPRatio']) + ' AP Ratio)');
                        abilityDiv.appendChild(text);
                      };
                      singleBreak();
                      var maxU = document.createTextNode('Max: ');
                      abilityDiv.appendChild(maxU);
                      if (path['maxDmgByRRank']) {
                        var text = document.createTextNode(removeSpace(path['maxDmgByRRank']));
                        abilityDiv.appendChild(text);
                      };
                      if (path['maxADRatioByRRank']) {
                        var text = document.createTextNode(' (+' + removeParen(path['maxADRatioByRRank']) + ' AD Ratio)');
                        abilityDiv.appendChild(text);
                      };
                      if (path['maxAPRatioByRRank']) {
                        var text = document.createTextNode(' (+' + removeParen(path['maxAPRatioByRRank']) + ' AP Ratio)');
                        abilityDiv.appendChild(text);
                      };
                    }
                    if (path['dmgRatioPerMissingHPByRRank']) {
                      singleBreak();
                      var underL = document.createElement('u');
                      underL.innerText = 'Bonus Damage Ratio';
                      abilityDiv.appendChild(underL);
                      var text = document.createTextNode(': (' + removeParen(path['dmgRatioPerMissingHPByRRank'])
                      + ' per Enemy Missing HP Ratio)');
                      abilityDiv.appendChild(text);
                    };
                    if (ability === 'passive') {
                      singleBreak();
                      var underL = document.createElement('u');
                      underL.innerText = 'Current Value';
                      abilityDiv.appendChild(underL);
                      var dmgCounter = 0;
                      if (path['dmgByRRank']) {
                        dmgCounter += path["dmgByRRank"][RRank];
                      };
                      if (path['APRatio']) {
                        dmgCounter += arrayCheck(path['APRatio']) * totalAP;
                      };
                      if (champFile['ETransform']["passiveTransformBonus"] 
                      && document.getElementById(`ERank${side}`).value > 0) {
                        dmgCounter *= (1 + champFile['ETransform']["passiveTransformBonus"]['bonus'][ERank]);
                      };
                      var dmgText = document.createTextNode(': ' + Math.round(dmgCounter));
                      abilityDiv.appendChild(dmgText);
                    };
                    if (champFile[tfAbility]['autoEmpower']['heal']) {
                      var path = champFile[tfAbility]['autoEmpower']['heal'];
                      doubleBreak();
                      var healU = document.createElement('u');
                      healU.innerText = 'Heal';
                      abilityDiv.appendChild(healU);
                      if (path['healByRRank']) {
                        var text = document.createTextNode(': ' + removeSpace(path["healByRRank"]) + ' (based on R rank)');
                        abilityDiv.appendChild(text);
                      };
                      if (path['APRatio']) {
                        var text = document.createTextNode(' (+' + path['APRatio'] + ' AP Ratio)');
                        abilityDiv.appendChild(text);
                      };
                      singleBreak();
                      var underL = document.createElement('u');
                      underL.innerText = 'Current Value';
                      abilityDiv.appendChild(underL);
                      var healCounter = 0;
                      if (path['healByRRank']) {
                        healCounter += path["healByRRank"][RRank];
                      };
                      if (path['APRatio']) {
                        healCounter += arrayCheck(path['APRatio']) * totalAP;
                      };
                      if (champFile['ETransform']["passiveTransformBonus"] 
                      && document.getElementById(`ERank${side}`).value > 0) {
                        healCounter *= (1 + champFile['ETransform']["passiveTransformBonus"]['bonus'][ERank]);
                      };
                      var text = document.createTextNode(': ' + Math.round(healCounter));
                      abilityDiv.appendChild(text);
    
                    }
                    doubleBreak();
                  };
    
                  if (champFile[tfAbility]['damage']) {
                    var path = champFile[tfAbility]['damage'];
                    var bold = document.createElement('b');
                    bold.innerText = path['type'] + ' Damage: ';
                    abilityDiv.appendChild(bold);
                    if (path['dmg']) {
                      var text = document.createTextNode(removeSpace(path['dmg']));
                      abilityDiv.appendChild(text);
                    };
                    if (path['dmgByRRank']) {
                      var text = document.createTextNode(': ' + removeSpace(path["dmgByRRank"]));
                      abilityDiv.appendChild(text);
                    };
                    if (path['ADRatio']) {
                      var text = document.createTextNode(' (+' + path['ADRatio'] + ' AD Ratio)');
                      abilityDiv.appendChild(text);
                    };
                    if (path['bonusADRatio']) {
                      var text = document.createTextNode(' (+' + path['bonusADRatio'] + ' Bonus AD Ratio)');
                      abilityDiv.appendChild(text);
                    };
                    if (path['APRatio']) {
                      var text = document.createTextNode(' (+' + removeParen(path['APRatio']) + ' AP Ratio)');
                      abilityDiv.appendChild(text);
                    };
                    if (path['maxHPRatio']) {
                      var text = document.createTextNode(' (+' + path['maxHPRatio'] + ' Max HP Ratio)');
                      abilityDiv.appendChild(text);
                    };
                    if (path['enemyMaxHPRatio']) {
                      var text = document.createTextNode(' (+' + removeParen(path['enemyMaxHPRatio']) + ' Enemy Max HP Ratio)');
                      abilityDiv.appendChild(text);
                    };
                    if (path['enemyMissingHPRatio']) {
                      var text = document.createTextNode(' (+' + path['enemyMissingHPRatio'] + ' Enemy Missing HP Ratio)');
                      abilityDiv.appendChild(text);
                    };
                    if (path['enemyMissingHPRatioPer100AP']) {
                      var text = document.createTextNode(' (+' + path['enemyMissingHPRatioPer100AP'] 
                      + ' Enemy Missing HP Ratio per 100 AP)');
                      abilityDiv.appendChild(text);
                    };

                    if (path['system'] === 'minMax') {
                      var minU = document.createElement('u');
                      minU.innerText = 'Min';
                      abilityDiv.appendChild(minU);
                      if (path['minDmg']) {
                        var text = document.createTextNode(': ' + removeSpace(path['minDmg']));
                        abilityDiv.appendChild(text);
                      };
                      if (path['minBonusADRatio']) {
                        var text = document.createTextNode(' (+' + path['minBonusADRatio'] + ' Bonus AD Ratio)');
                        abilityDiv.appendChild(text);
                      };
                      if (path['minAPRatio']) {
                        var text = document.createTextNode(' (+' + path['minAPRatio'] + ' AP Ratio)');
                        abilityDiv.appendChild(text);
                      };
                      singleBreak();
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max';
                      abilityDiv.appendChild(maxU);
                      if (path['maxDmg']) {
                        var text = document.createTextNode(': ' + removeSpace(path['maxDmg']));
                        abilityDiv.appendChild(text);
                      };
                      if (path['maxBonusADRatio']) {
                        var text = document.createTextNode(' (+' + path['maxBonusADRatio'] + ' Bonus AD Ratio)');
                        abilityDiv.appendChild(text);
                      };
                      if (path['maxAPRatio']) {
                        var text = document.createTextNode(' (+' + path['maxAPRatio'] + ' AP Ratio)');
                        abilityDiv.appendChild(text);
                      };
                    };
                    doubleBreak();
                  };

                  if (champFile[tfAbility]["tickDamage"]) {
                    var path = champFile[tfAbility]["tickDamage"];
                    var bold = document.createElement('b');
                    bold.innerText = path['type'] + ' Damage Over Time: ';
                    abilityDiv.appendChild(bold);
                    var dmgText = document.createTextNode(removeSpace(path['dmg']));
                    abilityDiv.appendChild(dmgText);
                    if (path['APRatio']) {
                      var text = document.createTextNode(' (+' + path['APRatio'] + ' AP Ratio)');
                      abilityDiv.appendChild(text);
                    }
                    if (path['interval']) {
                      var text = document.createTextNode(' per ' + path['interval'] + ' sec, for ' + path['ticks'] + ' seconds.');
                      abilityDiv.appendChild(text);
                      singleBreak();
                      var underL = document.createElement('u');
                      underL.innerText = 'Total';
                      abilityDiv.appendChild(underL);
                      var text2 = document.createTextNode(': ' + mapSpace(multiplyTicks(path["dmg"])));
                      abilityDiv.appendChild(text2);
                      if (path['APRatio']) {
                        var text = document.createTextNode(' (+' + multiplyTicks2(path['APRatio']) + ' AP Ratio)');
                        abilityDiv.appendChild(text);
                      }
                    };

                    doubleBreak();
                  };
    
                  if (champFile[tfAbility]['bonusAttackSpeed']) {
                    var path = champFile[tfAbility]['bonusAttackSpeed'];
                    var bold = document.createElement('b');
                    bold.innerText = 'Bonus Attack Speed: ';
                    abilityDiv.appendChild(bold);
                    if (path['attackSpeed']) {
                      var text = document.createTextNode(removeSpace(path['attackSpeed']));
                      abilityDiv.appendChild(text);
                    };
                    if (path['duration']) {
                      singleBreak();
                      var underL = document.createElement('u');
                      underL.innerText = 'Duration';
                      abilityDiv.appendChild(underL);
                      var text = document.createTextNode(': ' + path['duration']);
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };

                  if (champFile[tfAbility]['resistRedux']) {
                    var path = champFile[tfAbility]['resistRedux'];
                    if (path['type'] === 'both') {
                      var bold = document.createElement('b');
                      bold.innerText = 'Armor and Magic Resist Reduction: ';
                      abilityDiv.appendChild(bold);
                    };
                    if (path["reduxRatioByLvl"]) {
                      var underL = document.createElement('u');
                      underL.innerText = 'Ratio';
                      abilityDiv.appendChild(underL);
                      var text = document.createTextNode(': [' + path["reduxRatioByLvl"][0] + ' to ' 
                      + path["reduxRatioByLvl"][17] + '], based on lvl. Currently: ' + path["reduxRatioByLvl"][champLevel]);
                      abilityDiv.appendChild(text);
                    };
                    if (path['duration']) {
                      singleBreak();
                      var underL = document.createElement('u');
                      underL.innerText = 'Duration';
                      abilityDiv.appendChild(underL);
                      var text = document.createTextNode(': ' + path['duration']);
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };
    
                  if (champFile[tfAbility]["passiveTransformBonus"]) {
                    var path = champFile[tfAbility]["passiveTransformBonus"];
                    var bold = document.createElement('b');
                    bold.innerText = `Passive's Auto Empower Increase Ratio: `;
                    abilityDiv.appendChild(bold);
                    var text = document.createTextNode(removeSpace(path['bonus']));
                    abilityDiv.appendChild(text);
                    singleBreak();
                    var underL = document.createElement('u');
                    underL.innerText = 'Duration';
                    abilityDiv.appendChild(underL);
                    var dur = document.createTextNode(': ' + path['duration']);
                    abilityDiv.appendChild(dur);
                    doubleBreak();
                  };

                  if (champFile[tfAbility]['interruptCC']) {
                    var underL = document.createElement('b');
                    underL.innerText = 'Crowd Control Duration';
                    abilityDiv.appendChild(underL);
                    var text = document.createTextNode(': ' + removeSpace(champFile[tfAbility]['interruptCC']));
                    abilityDiv.appendChild(text);
                    doubleBreak();
                  };

                  if (champFile[tfAbility]['duration']) {
                    var underL = document.createElement('b');
                    underL.innerText = 'Duration';
                    abilityDiv.appendChild(underL);
                    var text = document.createTextNode(': ' + champFile[tfAbility]['duration']);
                    abilityDiv.appendChild(text);
                  };
    
                  if (champFile[tfAbility]['coolDown']) {
                    var bold = document.createElement('b');
                    bold.innerText = 'Cooldown: ';
                    abilityDiv.appendChild(bold);
                    var text = document.createTextNode(removeSpace(champFile[tfAbility]['coolDown']));
                    abilityDiv.appendChild(text);
                  };

                  if (champFile[tfAbility]["coolDownRefundRatio"]) {
                    singleBreak();
                    var refU = document.createElement('u');
                    refU.innerText = 'Cooldown Refund Ratio';
                    abilityDiv.appendChild(refU);
                    var text = document.createTextNode(': ' + removeSpace(champFile[tfAbility]["coolDownRefundRatio"]));
                    abilityDiv.appendChild(text);
                  };

                  if (champFile[tfAbility]["reducedCoolDownByRRank"]) {
                    singleBreak();
                    var cdU = document.createElement('u');
                    cdU.innerText = 'Reduced Cooldown';
                    abilityDiv.appendChild(cdU);
                    var text = document.createTextNode(': ' + removeSpace(champFile[tfAbility]["reducedCoolDownByRRank"]));
                    abilityDiv.appendChild(text);
                  }

                  if (champFile[tfAbility]['rechargeByLvl']) {
                    var path = champFile[tfAbility]['rechargeByLvl']
                    singleBreak();
                    var underL = document.createElement('u');
                    underL.innerText = 'Recharge';
                    abilityDiv.appendChild(underL);
                    var text = document.createTextNode(': [' + path[0] + ' to ' + path[17] + ', based on level. Currently: '
                    + path[champLevel] + ']');
                    abilityDiv.appendChild(text);
                  }
                };
    
                if (ability !== 'passive' && document.getElementById(`${ability}Rank${side}`).value > 0 ) {

                  if (champFile[tfAbility]["remountHPRatioByLvl"]) {
                    var path = champFile[tfAbility]["remountHPRatioByLvl"];
                    var bold = document.createElement('b');
                    bold.innerText = 'Remount HP: ';
                    abilityDiv.appendChild(bold);
                    var text = document.createTextNode(Math.round(path[champLevel] * totalHP));
                    abilityDiv.appendChild(text);
                  };
    
                  if (champFile[tfAbility]['autoEmpower']) {
                    var path = champFile[tfAbility]['autoEmpower']['damage'];
                    var bold = document.createElement('b');
                    bold.innerText = 'Auto Attack Empower: ';
                    abilityDiv.appendChild(bold);
                    var dmgType = document.createElement('u');
                    dmgType.innerText = path['type'] + ' Damage';
                    abilityDiv.appendChild(dmgType);
                    var empCounter = 0;
                    if (path['dmgByRRank']) {
                      empCounter += path["dmgByRRank"][RRank];
                    };
                    if (path['APRatio']) {
                      empCounter += arrayCheck(path['APRatio']) * totalAP;
                    };
                    if (empCounter !== 0) {
                      var dmgText = document.createTextNode(': ' + Math.round(empCounter));
                      abilityDiv.appendChild(dmgText);
                    }
                    if (path['system'] === 'minMax') {
                      var minU = document.createTextNode(': Min: ');
                      abilityDiv.appendChild(minU);
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
                      var minText = document.createTextNode(Math.round(minCount));
                      abilityDiv.appendChild(minText);
                      singleBreak();
                      var maxU = document.createTextNode('Max: ');
                      abilityDiv.appendChild(maxU);
                      if (path['maxDmgByRRank']) {
                        maxCount += path['maxDmgByRRank'][RRank];
                      };
                      if (path['maxADRatioByRRank']) {
                        maxCount += path['maxADRatioByRRank'][RRank] * totalAD;
                      };
                      if (path['maxAPRatioByRRank']) {
                        maxCount += path['maxAPRatioByRRank'][RRank] * totalAP;
                      };
                      var maxText = document.createTextNode(Math.round(maxCount));
                      abilityDiv.appendChild(maxText);
                    };
                    if (path['dmgRatioPerMissingHPByRRank']) {
                      singleBreak();
                      var underL = document.createElement('u');
                      underL.innerText = 'Bonus Damage Ratio';
                      abilityDiv.appendChild(underL);
                      var text = document.createTextNode(': (' + path['dmgRatioPerMissingHPByRRank'][RRank]
                      + ' per Enemy Missing HP Ratio)');
                      abilityDiv.appendChild(text);
                    };
                    if (champFile[tfAbility]['autoEmpower']['heal']) {
                      var path = champFile[tfAbility]['autoEmpower']['heal'];
                      doubleBreak();
                      var healU = document.createElement('u');
                      healU.innerText = 'Heal';
                      abilityDiv.appendChild(healU);
                      var healCount = 0;
                      if (path['healByRRank']) {
                        healCount += path["healByRRank"][RRank];
                      };
                      if (path['APRatio']) {
                        healCount += arrayCheck(path['APRatio']) * totalAP;
                      };
                      var text = document.createTextNode(': ' + Math.round(healCount));
                      abilityDiv.appendChild(text);
                    }
                    doubleBreak();
                  };
    
                  if (champFile[tfAbility]['damage']) {
                    var path = champFile[tfAbility]['damage'];
                    var bold = document.createElement('b');
                    bold.innerText = path['type'] + ' Damage: ';
                    abilityDiv.appendChild(bold);
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
                    if (path['enemyMaxHPRatio'] && enemyStats.hp) {
                      dmgCount += arrayCheck(path['enemyMaxHPRatio']) * enemyTotalHP;
                    };
                    if (dmgCount !== 0) {
                      var text = document.createTextNode(Math.round(dmgCount));
                      abilityDiv.appendChild(text);
                    };
                    if (path['enemyMaxHPRatio'] && !enemyStats.hp) {
                      var text = document.createTextNode(' (+' + arrayCheck(path['enemyMaxHPRatio']) + ' Enemy Max HP Ratio)');
                      abilityDiv.appendChild(text);
                    };
                    var missCount = 0;
                    if (path['enemyMissingHPRatio']) {
                      missCount += arrayCheck(path['enemyMissingHPRatio']);
                    };
                    if (path['enemyMissingHPRatioPer100AP']) {
                      missCount += arrayCheck(path['enemyMissingHPRatioPer100AP']);
                    };
                    if (missCount !== 0) {
                      var text = document.createTextNode(' (+' + lengthCheck(missCount) + ' Enemy Missing HP Ratio)');
                      abilityDiv.appendChild(text);
                    };

                    if (path['system'] === 'minMax') {
                      var minU = document.createElement('u');
                      minU.innerText = 'Min';
                      abilityDiv.appendChild(minU);
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
                      var minText = document.createTextNode(': ' + Math.round(minCount));
                      abilityDiv.appendChild(minText);
                      singleBreak();
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max';
                      abilityDiv.appendChild(maxU);
                      if (path['maxDmg']) {
                        maxCount += arrayCheck(path['maxDmg']);
                      };
                      if (path['maxBonusADRatio']) {
                        maxCount += arrayCheck(path['maxBonusADRatio']) * bonusAD;
                      };
                      if (path['maxAPRatio']) {
                        maxCount += arrayCheck(path['maxAPRatio']) * totalAP;
                      };
                      var maxText = document.createTextNode(': ' + Math.round(maxCount));
                      abilityDiv.appendChild(maxText);
                    };
                    doubleBreak();
                  };

                  if (champFile[tfAbility]["tickDamage"]) {
                    var path = champFile[tfAbility]["tickDamage"];
                    var bold = document.createElement('b');
                    bold.innerText = path['type'] + ' Damage Over Time: ';
                    abilityDiv.appendChild(bold);
                    var dmgCount = 0;
                    if (path['dmg']) {
                      dmgCount += arrayCheck(path['dmg']);
                    };
                    if (path['APRatio']) {
                      dmgCount += arrayCheck(path['APRatio']) * totalAP;
                    };
                    if (dmgCount !== 0) {
                      var text = document.createTextNode(Math.round(dmgCount));
                      abilityDiv.appendChild(text);
                    };
                    if (path['interval']) {
                      var text = document.createTextNode(' per ' + path['interval'] + ' sec, for ' 
                      + path['ticks'] + ' seconds.');
                      abilityDiv.appendChild(text);
                      singleBreak();
                      var underL = document.createElement('u');
                      underL.innerText = 'Total';
                      abilityDiv.appendChild(underL);
                      var text2 = document.createTextNode(': ' + mapSpace(multiplyTicks(dmgCount)));
                      abilityDiv.appendChild(text2);
                    };

                    doubleBreak();
                  };
    
                  if (champFile[tfAbility]['bonusAttackSpeed']) {
                    var path = champFile[tfAbility]['bonusAttackSpeed'];
                    var bold = document.createElement('b');
                    bold.innerText = 'Bonus Attack Speed: ';
                    abilityDiv.appendChild(bold);
                    if (path['attackSpeed']) {
                      var text = document.createTextNode(arrayCheck(path['attackSpeed']));
                      abilityDiv.appendChild(text);
                    };
                    if (path['duration']) {
                      singleBreak();
                      var underL = document.createElement('u');
                      underL.innerText = 'Duration';
                      abilityDiv.appendChild(underL);
                      var text = document.createTextNode(': ' + arrayCheck(path['duration']));
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };

                  if (champFile[tfAbility]['resistRedux']) {
                    var path = champFile[tfAbility]['resistRedux'];
                    if (path['type'] === 'both') {
                      var bold = document.createElement('b');
                      bold.innerText = 'Armor and Magic Resist Reduction: ';
                      abilityDiv.appendChild(bold);
                    };
                    if (path["reduxRatioByLvl"]) {
                      var underL = document.createElement('u');
                      underL.innerText = 'Ratio';
                      abilityDiv.appendChild(underL);
                      var text = document.createTextNode(': ' + path["reduxRatioByLvl"][champLevel]);
                      abilityDiv.appendChild(text);
                      if (enemyStats.hp) {
                        singleBreak();
                        var curU = document.createElement('u');
                        curU.innerText = 'Armor Reduced';
                        abilityDiv.appendChild(curU);
                        var text = document.createTextNode(': ' + path["reduxRatioByLvl"][champLevel] * enemyTotalArmor);
                        abilityDiv.appendChild(text);
                        singleBreak();
                        var cur2 = document.createElement('u');
                        cur2.innerText = 'Magic Resist Reduced';
                        abilityDiv.appendChild(cur2);
                        var text2 = document.createTextNode(': ' + path["reduxRatioByLvl"][champLevel] * enemyTotalMR);
                        abilityDiv.appendChild(text2);
                      }
                    };
                    if (path['duration']) {
                      singleBreak();
                      var underL = document.createElement('u');
                      underL.innerText = 'Duration';
                      abilityDiv.appendChild(underL);
                      var text = document.createTextNode(': ' + arrayCheck(path['duration']));
                      abilityDiv.appendChild(text);
                    };
                    doubleBreak();
                  };
    
                  if (champFile[tfAbility]["passiveTransformBonus"]) {
                    var path = champFile[tfAbility]["passiveTransformBonus"];
                    var bold = document.createElement('b');
                    bold.innerText = `Passive's Auto Empower Increase Ratio: `;
                    abilityDiv.appendChild(bold);
                    var text = document.createTextNode(arrayCheck(path['bonus']));
                    abilityDiv.appendChild(text);
                    singleBreak();
                    var underL = document.createElement('u');
                    underL.innerText = 'Duration';
                    abilityDiv.appendChild(underL);
                    var dur = document.createTextNode(': ' + path['duration']);
                    abilityDiv.appendChild(dur);
                    doubleBreak();
                  };

                  if (champFile[tfAbility]['interruptCC']) {
                    var underL = document.createElement('b');
                    underL.innerText = 'Crowd Control Duration';
                    abilityDiv.appendChild(underL);
                    var text = document.createTextNode(': ' + arrayCheck(champFile[tfAbility]['interruptCC']));
                    abilityDiv.appendChild(text);
                    doubleBreak();
                  };

                  if (champFile[tfAbility]['duration']) {
                    var underL = document.createElement('b');
                    underL.innerText = 'Duration';
                    abilityDiv.appendChild(underL);
                    var text = document.createTextNode(': ' + arrayCheck(champFile[tfAbility]['duration']));
                    abilityDiv.appendChild(text);
                  };
    
                  if (champFile[tfAbility]['coolDown']) {
                    var bold = document.createElement('b');
                    bold.innerText = 'Cooldown: ';
                    abilityDiv.appendChild(bold);
                    var text = document.createTextNode(arrayCheck(champFile[tfAbility]['coolDown']));
                    abilityDiv.appendChild(text);
                  };

                  if (champFile[tfAbility]["coolDownRefundRatio"]) {
                    singleBreak();
                    var refU = document.createElement('u');
                    refU.innerText = 'Cooldown Refund Ratio';
                    abilityDiv.appendChild(refU);
                    var text = document.createTextNode(': ' + arrayCheck(champFile[tfAbility]["coolDownRefundRatio"]));
                    abilityDiv.appendChild(text);
                  };

                  if (champFile[tfAbility]["reducedCoolDownByRRank"]) {
                    singleBreak();
                    var cdU = document.createElement('u');
                    cdU.innerText = 'Reduced Cooldown';
                    abilityDiv.appendChild(cdU);
                    var text = document.createTextNode(': ' + arrayCheck(champFile[tfAbility]["reducedCoolDownByRRank"]));
                    abilityDiv.appendChild(text);
                  }

                  if (champFile[tfAbility]['rechargeByLvl']) {
                    var path = champFile[tfAbility]['rechargeByLvl']
                    singleBreak();
                    var underL = document.createElement('u');
                    underL.innerText = 'Recharge';
                    abilityDiv.appendChild(underL);
                    var text = document.createTextNode(': ' + path[champLevel]);
                    abilityDiv.appendChild(text);
                  }
                  
                }
              }
            };
          })
        }

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

    var one=new Date();
    
    var side = 'Left';
    var otherSide = 'Right';
    this.testing('Left', event);
    var itemStats = this.state[`itemStats${side}`];
    var enemyItemStats = this.state[`itemStats${otherSide}`];
    var enemyStats = this.state.stats2;
    var selectedStats = this.state.stats1;
    var champLevel = this.state[`level${side}`] - 1;
    var champLvlRatio = champLevel * (0.7025 + 0.0175 * champLevel);

    document.getElementsByTagName("input")[0].value = '';
    this.setState({ filteredChampsLeft: [] });

    //function executed when the first champ is selected
    if (this.state[`champName${side}`] === '') {
      var hiddenArray = document.getElementsByClassName("hidden");
      hiddenArray[0].style.visibility = 'visible';
      for (var i = 2; i < 12; i++) {
        hiddenArray[i].style.visibility = 'visible';
      };
      document.getElementById(`levelBox${side}`).value = 1;
      this.rankedAbilities.map(rankedAbility => {
        document.getElementById(`${rankedAbility}Rank${side}`).value = 0;
      })
    };

    if (event.target.textContent !== "Wukong") {
      var champName = event.target.textContent.replace("'","").replace(/\s/g, '');
    } else {
      champName = 'MonkeyKing';
    };

    this.tfStatDisplay(champName, side, otherSide);
    this.jayceRankReset(champName, side);

    this.setState({ champIndexLeft: champList.filter(champ => {
      return champ.name.toLowerCase().startsWith(event.target.textContent.toLowerCase()) })[0].value
    });
    
    document.getElementsByClassName('champIcon')[0].setAttribute('src', `${this.portraits[`${champList.filter(champ => {
    return champ.name.toLowerCase().startsWith(event.target.textContent.toLowerCase()) })[0].value}`]}`);

    var abilitiesLength = document.getElementsByClassName(`abilityBox${side}`).length;
    for (var i = 0; i < abilitiesLength; i++) {
      var divToEmpty = document.getElementsByClassName(`abilityBox${side}`)[i];
      while (divToEmpty.firstChild) {
        divToEmpty.removeChild(divToEmpty.firstChild);
      }
    };

    this.setState({ champNameLeft: champName });

    this.calculateAbility(itemStats, enemyItemStats, enemyStats, selectedStats, side, champName, champLevel, champLvlRatio);

    import (`./champions/${champName.toLowerCase()}`)
      .then(({default: champFile}) => {
        var statsPath = champFile[`stats`];

        this.abilities1 = {
          passive: this.passiveDetails,
          Q: this.QDetails,
          W: this.WDetails,
          E: this.EDetails,
          R: this.RDetails
        };

        this.setState(prevState => ({
          stats1: {                   
              ...prevState.stats1,   
              hp: statsPath["baseHP"] + statsPath["hpPerLevel"] * champLvlRatio,
              hpPL: statsPath["hpPerLevel"],
              asPL: statsPath["attackSpeedPerLevel"],
              armPL: statsPath["armorPerLevel"],
              adPL: statsPath["damagePerLevel"],
              mrPL: statsPath["magicResistPerLevel"],
              manaPL: statsPath.mana["manaPerLevel"],
              manaRegen: statsPath.mana["manaBaseRegen"] + statsPath.mana["manaRegenPerLevel"] * champLvlRatio,
              manaRegenPL: statsPath.mana["manaRegenPerLevel"],
              hpRegen: statsPath["baseHPRegen"] + statsPath["hpRegenPerLevel"] * champLvlRatio,
              hpRegenPL: statsPath["hpRegenPerLevel"],
              as: statsPath["attackSpeed"] + statsPath["attackSpeedPerLevel"] * statsPath["attackSpeedRatio"] * champLvlRatio,
              arm: statsPath["baseArmor"] + statsPath["armorPerLevel"] * champLvlRatio,
              ad: statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLvlRatio,
              mr: statsPath["baseMagicResist"] + statsPath["magicResistPerLevel"] * champLvlRatio,
              mana: statsPath.mana["base"] + statsPath.mana["manaPerLevel"] * champLvlRatio
          },
          abilities1: {
            passive: this.passiveDetails,
            Q: this.QDetails,
            W: this.WDetails,
            E: this.EDetails,
            R: this.RDetails
          }
        }));

        if (champName === 'Gnar' || champName === 'Kled' ) {
          var tfPath = champFile['statsTransform'];
          this.setState(prevState => ({
            transformStats1: {
              ...prevState.transformStats1,
              hp: tfPath["baseHP"] + tfPath["hpPerLevel"] * champLvlRatio,
              hpPL: tfPath["hpPerLevel"],
              asPL: tfPath["attackSpeedPerLevel"],
              armPL: tfPath["armorPerLevel"],
              adPL: tfPath["damagePerLevel"],
              mrPL: tfPath["magicResistPerLevel"],
              manaPL: tfPath.mana["manaPerLevel"],
              manaRegen: tfPath.mana["manaBaseRegen"] + tfPath.mana["manaRegenPerLevel"] * champLvlRatio,
              manaRegenPL: tfPath.mana["manaRegenPerLevel"],
              hpRegen: tfPath["baseHPRegen"] + tfPath["hpRegenPerLevel"] * champLvlRatio,
              hpRegenPL: tfPath["hpRegenPerLevel"],
              as: tfPath["attackSpeed"] + tfPath["attackSpeedPerLevel"] * tfPath["attackSpeedRatio"] * champLvlRatio,
              arm: tfPath["baseArmor"] + tfPath["armorPerLevel"] * champLvlRatio,
              ad: tfPath["baseDamage"] + tfPath["damagePerLevel"] * champLvlRatio,
              mr: tfPath["baseMagicResist"] + tfPath["magicResistPerLevel"] * champLvlRatio,
              mana: tfPath.mana["base"] + tfPath.mana["manaPerLevel"] * champLvlRatio
            }
          }))
        }
      });
      var two = new Date();
      /*alert(two.getMilliseconds()-one.getMilliseconds());*/
  };

  onChampClick2 = (event) => {

    var side = 'Right';
    var otherSide = 'Left';
    var itemStats = this.state.itemStatsRight;
    var enemyItemStats = this.state.itemStatsLeft;
    var enemyStats = this.state.stats1
    var selectedStats = this.state.stats2
    var champLevel = this.state[`level${side}`] - 1;
    var champLvlRatio = champLevel * (0.7025 + 0.0175 * champLevel);

    document.getElementsByTagName("input")[1].value = '';
    this.setState({ filteredChampsRight: [] });

    if (this.state[`champName${side}`] === '') {
      var hiddenArray = document.getElementsByClassName("hidden");
      hiddenArray[1].style.visibility = 'visible';
      for (var i = 12; i < 22; i++) {
        hiddenArray[i].style.visibility = 'visible';
      };
      document.getElementById(`levelBox${side}`).value = 1;
      this.rankedAbilities.map(rankedAbility => {
        document.getElementById(`${rankedAbility}Rank${side}`).value = 0
      })
    };

    if (event.target.textContent !== "Wukong") {
      var champName = event.target.textContent.replace("'","").replace(/\s/g, '')
    } else {
      champName = 'MonkeyKing'
    };

    this.tfStatDisplay(champName, side, otherSide);
    this.jayceRankReset(champName, side);

    this.setState({ champIndexRight: champList.filter(champ => {
      return champ.name.toLowerCase().startsWith(event.target.textContent.toLowerCase()) })[0].value
    });
    
    document.getElementsByClassName('champIcon')[1].setAttribute('src', `${this.portraits[`${champList.filter(champ => {
    return champ.name.toLowerCase().startsWith(event.target.textContent.toLowerCase()) })[0].value}`]}`);

    var abilitiesLength = document.getElementsByClassName('abilityBoxRight').length;
    for (var i = 0; i < abilitiesLength; i++) {
      var divToEmpty = document.getElementsByClassName('abilityBoxRight')[i];
      while (divToEmpty.firstChild) {
        divToEmpty.removeChild(divToEmpty.firstChild)
      }
    };

    this.setState({ champNameRight: champName });

    this.calculateAbility(itemStats, enemyItemStats, enemyStats, selectedStats, side, champName, champLevel, champLvlRatio);

    import (`./champions/${champName.toLowerCase()}`)
    .then(({default: champFile}) => {
      var statsPath = champFile[`stats`];

      this.setState(prevState => ({
        stats2: {                   
            ...prevState.stats2,   
            hp: statsPath["baseHP"] + statsPath["hpPerLevel"] * champLvlRatio,
            hpPL: statsPath["hpPerLevel"],
            asPL: statsPath["attackSpeedPerLevel"],
            armPL: statsPath["armorPerLevel"],
            adPL: statsPath["damagePerLevel"],
            mrPL: statsPath["magicResistPerLevel"],
            manaPL: statsPath.mana["manaPerLevel"],
            manaRegen: statsPath.mana["manaBaseRegen"] + statsPath.mana["manaRegenPerLevel"] * champLvlRatio,
            manaRegenPL: statsPath.mana["manaRegenPerLevel"],
            hpRegen: statsPath["baseHPRegen"] + statsPath["hpRegenPerLevel"] * champLvlRatio,
            hpRegenPL: statsPath["hpRegenPerLevel"],
            as: statsPath["attackSpeed"] + statsPath["attackSpeedPerLevel"] * statsPath["attackSpeedRatio"] * champLvlRatio,
            arm: statsPath["baseArmor"] + statsPath["armorPerLevel"] * champLvlRatio,
            ad: statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLvlRatio,
            mr: statsPath["baseMagicResist"] + statsPath["magicResistPerLevel"] * champLvlRatio,
            mana: statsPath.mana["base"] + statsPath.mana["manaPerLevel"] * champLvlRatio
        },
        abilities2: {
          passive: this.passiveDetails,
          Q: this.QDetails,
          W: this.WDetails,
          E: this.EDetails,
          R: this.RDetails
        }
      }))

      if (champName === 'Gnar' || champName === 'Kled' ) {
        var tfPath = champFile['statsTransform'];
        this.setState(prevState => ({
          transformStats2: {
            ...prevState.transformStats2,
            hp: tfPath["baseHP"] + tfPath["hpPerLevel"] * champLvlRatio,
            hpPL: tfPath["hpPerLevel"],
            asPL: tfPath["attackSpeedPerLevel"],
            armPL: tfPath["armorPerLevel"],
            adPL: tfPath["damagePerLevel"],
            mrPL: tfPath["magicResistPerLevel"],
            manaPL: tfPath.mana["manaPerLevel"],
            manaRegen: tfPath.mana["manaBaseRegen"] + tfPath.mana["manaRegenPerLevel"] * champLvlRatio,
            manaRegenPL: tfPath.mana["manaRegenPerLevel"],
            hpRegen: tfPath["baseHPRegen"] + tfPath["hpRegenPerLevel"] * champLvlRatio,
            hpRegenPL: tfPath["hpRegenPerLevel"],
            as: tfPath["attackSpeed"] + tfPath["attackSpeedPerLevel"] * tfPath["attackSpeedRatio"] * champLvlRatio,
            arm: tfPath["baseArmor"] + tfPath["armorPerLevel"] * champLvlRatio,
            ad: tfPath["baseDamage"] + tfPath["damagePerLevel"] * champLvlRatio,
            mr: tfPath["baseMagicResist"] + tfPath["magicResistPerLevel"] * champLvlRatio,
            mana: tfPath.mana["base"] + tfPath.mana["manaPerLevel"] * champLvlRatio
          }
        }))
      }
    })
    return this.setState({ champIconUrlRight: 
      `http://ddragon.leagueoflegends.com/cdn/10.12.1/img/champion/${champName}.png`})
  };

  onLevelChange = (event) => {
    var side = 'Left';
    var otherSide = 'Right';
    var champLevel = event.target.value - 1;
    var champLvlRatio = champLevel * (0.7025 + 0.0175 * champLevel);
    var itemStats = this.state.itemStatsLeft;
    var enemyItemStats = this.state.itemStatsRight;
    var enemyStats = this.state.stats2;
    var selectedStats = this.state.stats1;
    var champName = this.state.champNameLeft;

    var abilitiesLength = document.getElementsByClassName(`abilityBox${side}`).length;
    for (var i = 0; i < abilitiesLength; i++) {
      var divToEmpty = document.getElementsByClassName(`abilityBox${side}`)[i];
      while (divToEmpty.firstChild) {
        divToEmpty.removeChild(divToEmpty.firstChild);
      }
    };

    this.calculateAbility(itemStats, enemyItemStats, enemyStats, selectedStats, side, champName, champLevel, champLvlRatio);

    import (`./champions/${this.state.champNameLeft.toLowerCase()}`)
      .then(({default: champFile}) => {
        var statsPath = champFile[`stats`];
        this.setState(prevState => ({
          stats1: {                   
              ...prevState.stats1,   
              hp: statsPath["baseHP"] + statsPath["hpPerLevel"] * champLvlRatio,
              as: statsPath["attackSpeed"] + statsPath["attackSpeedPerLevel"] * statsPath["attackSpeedRatio"] * champLvlRatio,
              arm: statsPath["baseArmor"] + statsPath["armorPerLevel"] * champLvlRatio,
              ad: statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLvlRatio,
              mr: statsPath["baseMagicResist"] + statsPath["magicResistPerLevel"] * champLvlRatio,
              mana: statsPath.mana["base"] + statsPath.mana["manaPerLevel"] * champLvlRatio,
              manaRegen: statsPath.mana["manaBaseRegen"] + statsPath.mana["manaRegenPerLevel"] * champLvlRatio,
              hpRegen: statsPath["baseHPRegen"] + statsPath["hpRegenPerLevel"] * champLvlRatio
          }
        }));

        if (champName === 'Gnar' || champName === 'Kled' ) {
          var tfPath = champFile['statsTransform'];
          this.setState(prevState => ({
            transformStats1: {
              ...prevState.transformStats1,
              hp: tfPath["baseHP"] + tfPath["hpPerLevel"] * champLvlRatio,
              manaRegen: tfPath.mana["manaBaseRegen"] + tfPath.mana["manaRegenPerLevel"] * champLvlRatio,
              hpRegen: tfPath["baseHPRegen"] + tfPath["hpRegenPerLevel"] * champLvlRatio,
              as: tfPath["attackSpeed"] + tfPath["attackSpeedPerLevel"] * tfPath["attackSpeedRatio"] * champLvlRatio,
              arm: tfPath["baseArmor"] + tfPath["armorPerLevel"] * champLvlRatio,
              ad: tfPath["baseDamage"] + tfPath["damagePerLevel"] * champLvlRatio,
              mr: tfPath["baseMagicResist"] + tfPath["magicResistPerLevel"] * champLvlRatio,
              mana: tfPath.mana["base"] + tfPath.mana["manaPerLevel"] * champLvlRatio
            }
          }))
        }
      })
    document.getElementById("levelBoxLeft").setAttribute('value', event.target.value);
    return this.setState({ levelLeft: event.target.value })
  };

  onLevelChange2 = (event) => {
    var side = 'Right';
    var otherSide = 'Left';
    var itemStats = this.state.itemStatsRight;
    var enemyItemStats = this.state.itemStatsLeft;
    var enemyStats = this.state.stats1
    var selectedStats = this.state.stats2
    var champLevel = event.target.value - 1;
    var champLvlRatio = champLevel * (0.7025 + 0.0175 * champLevel);
    var champName = this.state.champNameRight;

    var abilitiesLength = document.getElementsByClassName(`abilityBox${side}`).length;
    for (var i = 0; i < abilitiesLength; i++) {
      var divToEmpty = document.getElementsByClassName(`abilityBox${side}`)[i];
      while (divToEmpty.firstChild) {
        divToEmpty.removeChild(divToEmpty.firstChild);
      }
    };

    this.calculateAbility(itemStats, enemyItemStats, enemyStats, selectedStats, side, champName, champLevel, champLvlRatio);

    import (`./champions/${this.state.champNameRight.toLowerCase()}`)
      .then(({default: champFile}) => {
        var statsPath = champFile[`stats`]
        this.setState(prevState => ({
          stats2: {                   
              ...prevState.stats2,   
              hp: statsPath["baseHP"] + statsPath["hpPerLevel"] * champLvlRatio,
              as: statsPath["attackSpeed"] + statsPath["attackSpeedPerLevel"] * statsPath["attackSpeedRatio"] * champLvlRatio,
              arm: statsPath["baseArmor"] + statsPath["armorPerLevel"] * champLvlRatio,
              ad: statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLvlRatio,
              mr: statsPath["baseMagicResist"] + statsPath["magicResistPerLevel"] * champLvlRatio,
              mana: statsPath.mana["base"] + statsPath.mana["manaPerLevel"] * champLvlRatio,
              manaRegen: statsPath.mana["manaBaseRegen"] + statsPath.mana["manaRegenPerLevel"] * champLvlRatio,
              hpRegen: statsPath["baseHPRegen"] + statsPath["hpRegenPerLevel"] * champLvlRatio
          }
        }));

        if (champName === 'Gnar' || champName === 'Kled' ) {
          var tfPath = champFile['statsTransform'];
          this.setState(prevState => ({
            transformStats2: {
              ...prevState.transformStats2,
              hp: tfPath["baseHP"] + tfPath["hpPerLevel"] * champLvlRatio,
              manaRegen: tfPath.mana["manaBaseRegen"] + tfPath.mana["manaRegenPerLevel"] * champLvlRatio,
              hpRegen: tfPath["baseHPRegen"] + tfPath["hpRegenPerLevel"] * champLvlRatio,
              as: tfPath["attackSpeed"] + tfPath["attackSpeedPerLevel"] * tfPath["attackSpeedRatio"] * champLvlRatio,
              arm: tfPath["baseArmor"] + tfPath["armorPerLevel"] * champLvlRatio,
              ad: tfPath["baseDamage"] + tfPath["damagePerLevel"] * champLvlRatio,
              mr: tfPath["baseMagicResist"] + tfPath["magicResistPerLevel"] * champLvlRatio,
              mana: tfPath.mana["base"] + tfPath.mana["manaPerLevel"] * champLvlRatio
            }
          }))
        }
      })
    document.getElementById("levelBoxRight").setAttribute('value', event.target.value)
    return this.setState({ levelRight: event.target.value })
  }

  onRankChange = (event) => {
    var side = 'Left';
    var otherSide = 'Right';
    var abilityFirstChar = event.currentTarget.id.charAt(0);
    this.setState({ [`${abilityFirstChar}Rank${side}`]: event.target.value });

    var champLevel = this.state[`level${side}`] - 1;
    var champLvlRatio = champLevel * (0.7025 + 0.0175 * champLevel);
    var itemStats = this.state[`itemStats${side}`];
    var enemyItemStats = this.state[`itemStats${otherSide}`];
    var enemyStats = this.state.stats2;
    var selectedStats = this.state.stats1;
    var champName = this.state[`champName${side}`];

    this.calculateAbility(itemStats, enemyItemStats, enemyStats, selectedStats, side, champName, champLevel, champLvlRatio);

    var abilitiesLength = document.getElementsByClassName(`abilityBox${side}`).length;
    for (var i = 0; i < abilitiesLength; i++) {
      var divToEmpty = document.getElementsByClassName(`abilityBox${side}`)[i];
      while (divToEmpty.firstChild) {
        divToEmpty.removeChild(divToEmpty.firstChild);
      }
    }          
  };

  onRankChange2 = (event) => {
    var side = 'Right';
    var otherSide = 'Left';
    var abilityFirstChar = event.currentTarget.id.charAt(0);
    this.setState({ [`${abilityFirstChar}Rank${side}`]: event.target.value });
    
    var champLevel = this.state[`level${side}`] - 1;
    var champLvlRatio = champLevel * (0.7025 + 0.0175 * champLevel);
    var itemStats = this.state[`itemStats${side}`];
    var enemyItemStats = this.state[`itemStats${otherSide}`];
    var enemyStats = this.state.stats1;
    var selectedStats = this.state.stats2;
    var champName = this.state[`champName${side}`];

    this.calculateAbility(itemStats, enemyItemStats, enemyStats, selectedStats, side, champName, champLevel, champLvlRatio);

    var abilitiesLength = document.getElementsByClassName(`abilityBox${side}`).length;
    for (var i = 0; i < abilitiesLength; i++) {
      var divToEmpty = document.getElementsByClassName(`abilityBox${side}`)[i];
      while (divToEmpty.firstChild) {
        divToEmpty.removeChild(divToEmpty.firstChild);
      }
    }          
  };

  preventKeyPress = (event) => {
    event.preventDefault()
  }

  componentDidMount() {
    function importAll(r) {
      return r.keys().map(r);
    }
    this.portraits = importAll(require.context('./portraits/', false, /\.(png|jpe?g|svg)$/));
    this.images = importAll(require.context('./spellicons/', false, /\.(png|jpe?g|svg)$/));
    // document.getElementById('blahblah').setAttribute('src', `${this.images[0]}`)
  }

  render() {
    return (
      <div style={{backgroundColor: '#f7f7f7', minHeight: '100vh'}}>

        <header className="navHeader">
          <h2 style={{marginBottom: 0, textDecoration: "underline"}}>LoL MatchUp</h2>
          <img style={{marginBottom: -60}} className="center" src={logo} alt='Logo'/>
          <div className="navLeft">
            <h2>Home</h2>
            <h2>Saved Builds</h2>
            <h2>About</h2>
            <h2 className="navRight">Login / Signup</h2>
          </div>
        </header>

        <div className="flexAround" style={{marginTop: 10}}>
          <input type="search" placeholder='Champion Name' onChange={this.onSearchChange} style={{width: 120}}
          />
          <span style={{width: 64}}></span>
          <input type="search" placeholder='Champion Name' onChange={this.onSearchChange2} style={{width: 120}}
          />
        </div>

        <div className="flexAround">
          <ChampDropDownLeft filteredChamps={ `${this.state.filteredChampsLeft}` } 
          onChampClick={this.onChampClick} />
          <span style={{width: 64}}></span>
          <ChampDropDownRight filteredChamps2={ `${this.state.filteredChampsRight}` } 
          onChampClick2={this.onChampClick2} />
        </div>

        <div className="flexAround">
          <img className='champIcon' src={ defaultChampIcon } height="120px" width="120px"
          alt='Champion Icon' style={{position: 'relative', marginBottom: 10}} />
          <img src={versus} alt='Versus Icon' height="64px" width="64px"/>
          <img className='champIcon' src={ `${this.state.champIconUrlRight}` } height="120px" width="120px"
          alt='Champion Icon' style={{marginBottom: 10}}/>
        </div>

        <div className="flexDisplay">
          <div className="hidden">
            <span>Level: </span>
            <input id="levelBoxLeft" type="number" min="1" max="18" style={{width: "50px"}} 
            onKeyDown={this.preventKeyPress} onChange={this.onLevelChange}/>
          </div>
          <div className="hidden">
            <span>Level: </span>
            <input id="levelBoxRight" type="number" min="1" max="18" style={{width: "50px"}} 
            onKeyDown={this.preventKeyPress} onChange={this.onLevelChange2}/>
          </div>
        </div>

        <div className="flexDisplay">
          <span><u><b>Stats</b></u></span>
          <span><u><b>Stats</b></u></span>
        </div>

        <div className="flexDisplay">        
          <div className="statsBox">
            <img src={healthIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} alt='Health Icon' height="25px" width="25px"/>
            Health: {Math.round(this.state.stats1.hp)}<br />
            <img src={armorIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} alt='Armor Icon' height="25px" width="25px"/>
            Armor: {Math.round(this.state.stats1.arm)}<br />
            <img src={magicResIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} alt='Magic Resist Icon' height="25px" width="25px"/>
            Magic Resist: {Math.round(this.state.stats1.mr)}<br />
            <img src={attackDamageIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} alt='Attack Damage Icon' height="25px" width="25px"/>
            Attack Damage: {Math.round(this.state.stats1.ad)}<br />
            <img src={attackSpeedIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} alt='Attack Speed Icon' height="25px" width="25px"/>
            Attack Speed: {this.state.stats1.as.toFixed(3)}<br />
            <img src={critChanceIcon} style={{verticalAlign: "middle", padding: "0px 5px 5px 0px"}} alt='Crit Chance Icon' height="16px" width="16px"/>
            Crit Chance: {Math.round(this.state.stats1.critChance)}%<br />
            <img src={manaIcon} style={{verticalAlign: "middle", paddingBottom: "0px 5px 5px 0px"}} alt='Mana Icon' height="16px" width="16px"/>
            Mana: {Math.round(this.state.stats1.mana)}<br />
            Mana Per 5: {this.state.stats1.manaRegen.toFixed(3)}<br />
            Health Per 5: {this.state.stats1.hpRegen.toFixed(3)}<br />
            <img src={abilityPowerIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} alt='Ability Power Icon' height="25px" width="25px"/>
            Ability Power: {this.state.stats1.ap}<br />
            <img src={cdrIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} alt='Cooldown Reduction Icon' height="25px" width="25px"/>
            Cooldown Reduction: {Math.round(this.state.stats1.cdr)}%
          </div>
          <div className="statsBox">
            Health: {Math.round(this.state.stats2.hp)}<br />
            Armor: {Math.round(this.state.stats2.arm)}<br />
            Magic Resist: {Math.round(this.state.stats2.mr)}<br />
            Attack Damage: {Math.round(this.state.stats2.ad)}<br />
            Attack Speed: {this.state.stats2.as.toFixed(3)}<br />
            Crit Chance: {Math.round(this.state.stats2.critChance)}%<br />
            Mana: {Math.round(this.state.stats2.mana)}<br />
            Mana Per 5: {this.state.stats2.manaRegen.toFixed(3)}<br />
            Health Per 5: {this.state.stats2.hpRegen.toFixed(3)}<br />
            Ability Power: {this.state.stats2.ap}<br />
            Cooldown Reduction: {Math.round(this.state.stats2.cdr)}%
          </div>
        </div>
        <div id='transform'>
          <div className="flexDisplay">
            <span className="transformLeft"><u><b>Transform Stats</b></u></span>
            <span className="transformRight"><u><b>Transform Stats</b></u></span>
          </div>
          <div className="flexDisplay">    
            <div className="statsBox transformLeft">
              <img src={healthIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} alt='Health Icon' height="25px" width="25px"/>
              Health: {Math.round(this.state.transformStats1.hp)}<br />
              <img src={armorIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} alt='Armor Icon' height="25px" width="25px"/>
              Armor: {Math.round(this.state.transformStats1.arm)}<br />
              <img src={magicResIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} alt='Magic Resist Icon' height="25px" width="25px"/>
              Magic Resist: {Math.round(this.state.transformStats1.mr)}<br />
              <img src={attackDamageIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} alt='Attack Damage Icon' height="25px" width="25px"/>
              Attack Damage: {Math.round(this.state.transformStats1.ad)}<br />
              <img src={attackSpeedIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} alt='Attack Speed Icon' height="25px" width="25px"/>
              Attack Speed: {this.state.transformStats1.as.toFixed(3)}<br />
              <img src={critChanceIcon} style={{verticalAlign: "middle", padding: "0px 5px 5px 0px"}} alt='Crit Chance Icon' height="16px" width="16px"/>
              Crit Chance: {Math.round(this.state.transformStats1.critChance)}%<br />
              <img src={manaIcon} style={{verticalAlign: "middle", paddingBottom: "0px 5px 5px 0px"}} alt='Mana Icon' height="16px" width="16px"/>
              Mana: {Math.round(this.state.transformStats1.mana)}<br />
              Mana Per 5: {this.state.transformStats1.manaRegen.toFixed(3)}<br />
              Health Per 5: {this.state.transformStats1.hpRegen.toFixed(3)}<br />
              <img src={abilityPowerIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} alt='Ability Power Icon' height="25px" width="25px"/>
              Ability Power: {this.state.transformStats1.ap}<br />
              <img src={cdrIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} alt='Cooldown Reduction Icon' height="25px" width="25px"/>
              Cooldown Reduction: {Math.round(this.state.transformStats1.cdr)}%
            </div>
            <div className="statsBox transformRight">
            <img src={healthIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} alt='Health Icon' height="25px" width="25px"/>
              Health: {Math.round(this.state.transformStats2.hp)}<br />
              <img src={armorIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} alt='Armor Icon' height="25px" width="25px"/>
              Armor: {Math.round(this.state.transformStats2.arm)}<br />
              <img src={magicResIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} alt='Magic Resist Icon' height="25px" width="25px"/>
              Magic Resist: {Math.round(this.state.transformStats2.mr)}<br />
              <img src={attackDamageIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} alt='Attack Damage Icon' height="25px" width="25px"/>
              Attack Damage: {Math.round(this.state.transformStats2.ad)}<br />
              <img src={attackSpeedIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} alt='Attack Speed Icon' height="25px" width="25px"/>
              Attack Speed: {this.state.transformStats2.as.toFixed(3)}<br />
              <img src={critChanceIcon} style={{verticalAlign: "middle", padding: "0px 5px 5px 0px"}} alt='Crit Chance Icon' height="16px" width="16px"/>
              Crit Chance: {Math.round(this.state.transformStats2.critChance)}%<br />
              <img src={manaIcon} style={{verticalAlign: "middle", paddingBottom: "0px 5px 5px 0px"}} alt='Mana Icon' height="16px" width="16px"/>
              Mana: {Math.round(this.state.transformStats2.mana)}<br />
              Mana Per 5: {this.state.transformStats2.manaRegen.toFixed(3)}<br />
              Health Per 5: {this.state.transformStats2.hpRegen.toFixed(3)}<br />
              <img src={abilityPowerIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} alt='Ability Power Icon' height="25px" width="25px"/>
              Ability Power: {this.state.transformStats2.ap}<br />
              <img src={cdrIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} alt='Cooldown Reduction Icon' height="25px" width="25px"/>
              Cooldown Reduction: {Math.round(this.state.transformStats2.cdr)}%
            </div>
          </div>
        </div>

        <div className="flexDisplay">
          <div>
            <div className='hidden abilityTitleBox' style={{paddingTop: '5px'}}>
              <p style={{margin: 0}}><b><u>Passive </u></b></p> 
              <div className="spriteContainer">
                <img className='passiveMargin' src={ this.images[`${this.state.champIndexLeft}`] } alt='Ability icon'/>
              </div>
            </div>  
            <div className="hidden abilityBoxLeft"></div>

            <div className="hidden abilityTitleBox" style={{paddingTop: '5px'}}>
              <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                <p style={{margin: 0}}><b><u>Q </u></b>- rank: </p>
                <input id="QRankLeft" type="number" placeholder="0" min="0" max="5" 
                style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
              </div>
              <div className="spriteContainer">
                <img className='qMargin' src={ this.images[`${this.state.champIndexLeft}`] } alt='Ability icon'/>
              </div>
            </div>
            <div className="hidden abilityBoxLeft"></div>

            <div className="hidden abilityTitleBox" style={{paddingTop: '5px'}}>
              <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                <p style={{margin: 0}}><b><u>W </u></b>- rank: </p>
                <input id="WRankLeft" type="number" placeholder="0" min="0" max="5" 
                style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
              </div>
              <div className="spriteContainer">
                <img className='wMargin' src={ this.images[`${this.state.champIndexLeft}`] } alt='Ability icon'/>
              </div>
            </div>
            <div className="hidden abilityBoxLeft"></div>

            <div className="hidden abilityTitleBox" style={{paddingTop: '5px'}}>
              <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                <p style={{margin: 0}}><b><u>E </u></b>- rank: </p>
                <input id="ERankLeft" type="number" placeholder="0" min="0" max="5" 
                style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
              </div>
              <div className="spriteContainer">
                <img className='eMargin' src={ this.images[`${this.state.champIndexLeft}`] } alt='Ability icon'/>
              </div>
            </div>
            <div className="hidden abilityBoxLeft"></div>

            <div className="hidden abilityTitleBox" style={{paddingTop: '5px'}}>
              <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                <p style={{margin: 0}}><b><u>R </u></b>- rank: </p>
                <input id="RRankLeft" type="number" placeholder="0" min="0" max="3" 
                style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
              </div>
              <div className="spriteContainer">
                <img className='rMargin' src={ this.images[`${this.state.champIndexLeft}`] } alt='Ability icon'/>
              </div>
            </div>
            <div className="hidden abilityBoxLeft"></div>
          </div>
          
          <div>
            <div className="hidden">
              <span><b><u>Passive </u></b></span> 
            </div>
            <div className="hidden abilityBoxRight">
            </div>

            <div className="hidden">
              <span><b><u>Q </u></b></span><span>- rank: </span>
              <input id="QRankRight" type="number" placeholder="0" min="0" max="5" 
              style={{width: "40px"}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange2}/>
            </div>
            <div className="hidden abilityBoxRight">
            </div>

            <div className="hidden">
              <span><b><u>W </u></b></span><span>- rank: </span>
              <input id="WRankRight" type="number" placeholder="0" min="0" max="5" 
              style={{width: "40px"}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange2}/>
            </div>
            <div className="hidden abilityBoxRight">
            </div>

            <div className="hidden">
                <span><b><u>E </u></b></span><span>- rank: </span>
                <input id="ERankRight" type="number" placeholder="0" min="0" max="5" 
                style={{width: "40px"}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange2}/>
            </div>
            <div className="hidden abilityBoxRight"></div>

            <div className="hidden">
                <span><b><u>R </u></b></span><span>- rank: </span>
                <input id="RRankRight" type="number" placeholder="0" min="0" max="3"
                style={{width: "40px"}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange2}/>
            </div>
            <div className="hidden abilityBoxRight"></div>
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