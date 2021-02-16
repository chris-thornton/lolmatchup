/* eslint-disable */

import React, { Component } from 'react';
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
  partNumberArray = ["part1", "part2", "part3"]

  testing(side, event) {
    if(event.currentTarget.tagName === 'LI'){
      console.log("you just selected a champion")
    } else {
      console.log("you just changed an ability rank")
    }
  }

  // make abilities and abilities2 outside of state like variables above?

  onChampClick = (event) => {

    var one=new Date();

    this.testing('Left', event);
    var itemStats = this.state.itemStatsLeft;
    var enemyItemStats = this.state.itemStatsRight;
    var enemyBaseStats = this.state.baseChampStatsRight;
    var enemyStats = this.state.stats2
    var selectedStats = this.state.stats1
    var side = 'Left';
    var otherSide = 'Right';

    document.getElementsByTagName("input")[0].value = '';
    this.setState({ filteredChampsLeft: [] });
    if (this.state.levelLeft === 1) {
      document.getElementById("levelBoxLeft").value = 1;
    };

    //function executed when the first champ is selected
    if (this.state[`champName${side}`] === '') {
      var hiddenArray = document.getElementsByClassName("hidden");
      hiddenArray[0].style.visibility = 'visible';
      for (var i = 2; i < 12; i++) {
        hiddenArray[i].style.visibility = 'visible';
      }
      this.rankedAbilities.map(rankedAbility => {
        document.getElementById(`${rankedAbility}Rank${side}`).value = 0
      })
    }

    if (event.target.textContent !== "Wukong") {
      var champName = event.target.textContent.replace("'","").replace(/\s/g, '')
    } else {
      champName = 'MonkeyKing'
    };

    if (champName === 'Gnar' || champName === 'Kled' ) {
      var transformSection = document.getElementById('transform');
      transformSection.style.display = 'block';
      var transformSide = document.getElementsByClassName(`transform${side}`);
      transformSide[0].style.visibility = 'visible';
      transformSide[1].style.visibility = 'visible';
    } else {
      var transformSide = document.getElementsByClassName(`transform${side}`);
      transformSide[0].style.visibility = 'hidden';
      transformSide[1].style.visibility = 'hidden';
      if (this.state[`champName${otherSide}`] !== 'Gnar' && this.state[`champName${otherSide}`] !== 'Kled') {
        var transformSection = document.getElementById('transform');
        transformSection.style.display = 'none';
      }
    }

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

    this.setState({ champIndexLeft: champList.filter(champ => {
      return champ.name.toLowerCase().startsWith(event.target.textContent.toLowerCase()) })[0].value
    });
    
    document.getElementsByClassName('champIcon')[0].setAttribute('src', `${this.portraits[`${champList.filter(champ => {
    return champ.name.toLowerCase().startsWith(event.target.textContent.toLowerCase()) })[0].value}`]}`);

    var abilitiesLength = document.getElementsByClassName('abilityBox').length
    for (i = 0; i < abilitiesLength; i++) {
      var divToEmpty = document.getElementsByClassName('abilityBox')[i];
      while (divToEmpty.firstChild) {
        divToEmpty.removeChild(divToEmpty.firstChild)
      }
    }

    this.setState({ champNameLeft: champName });
    import (`./champions/${champName.toLowerCase()}`)
      .then(({default: champLeftFile}) => {
        var statsPath = champLeftFile[`stats`];
        var champLevel = this.state.levelLeft - 1;
        var champLvlRatio = champLevel * (0.7025 + 0.0175 * champLevel);
        var totalAD = itemStats.ad + statsPath["baseDamage"] + champLvlRatio * statsPath["damagePerLvl"];
        var bonusAD = itemStats.ad;
        var totalAP = itemStats.ap + selectedStats.ap;
        var totalAS = statsPath["attackSpeed"] 
        + (itemStats.as + champLvlRatio * statsPath["attackSpeedPerLvl"]) * statsPath["attackSpeedRatio"];
        var bonusAS = statsPath["attackSpeedRatio"] * itemStats.as;
        var totalArmor = itemStats.arm + statsPath["baseArmor"] + champLvlRatio * statsPath["armorPerLvl"];
        var bonusArmor = itemStats.arm;
        var totalMR = itemStats.mr + statsPath["baseMagicResist"] + champLvlRatio * statsPath["magicResistPerLvl"];
        var bonusMR = itemStats.mr;
        var totalHP = itemStats.hp + statsPath["baseHP"] + champLvlRatio * statsPath["hpPerLvl"];
        var bonusHP = itemStats.hp;
        var enemyTotalHP = enemyStats.hp + enemyItemStats.hp;
        var enemyBonusHP = enemyItemStats.hp;
        var totalCritChance = itemStats.critChance; 
        var totalLethality = itemStats.lethality;
        var totalLifeSteal = itemStats.lifeSteal;
        var totalMana = itemStats.mana + statsPath["mana"]["base"] + statsPath["mana"]["manaPerLevel"] * champLvlRatio;
        var nonBaseAS = (itemStats.as + champLvlRatio * statsPath["attackSpeedPerLvl"]) * statsPath["attackSpeedRatio"];


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

        for (i = 0; i < this.abilities.length; i++) {
          var ability = this.abilities[i];
          var abilityDiv = document.getElementsByClassName('abilityBox')[i];
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
          function multiplyByTicks(x, i) {
            if (typeof(tickDamage["ticks"]) === 'number') {
              return (x * tickDamage["ticks"]).toFixed()
            } else {
              return (x * tickDamage["ticks"][i]).toFixed()
            }
          };
          function multiplyByTicksRounded2(x) {
            if (typeof(x) !== 'number' && typeof(tickDamage["ticks"]) === 'number') {
              return x.map(z => {
                if (tickDamage["ticks"] % 4 === 0 && (z.toString().slice(-3) === ".25" || z.toString().slice(-3) === ".75")
                || (z.toString().slice(-2) === ".5" && tickDamage["ticks"] % 2 === 0) || (tickDamage["ticks"] % 8 === 0 && z.toString().slice(-4) === ".125")) {
                  return Math.round(tickDamage["ticks"] * z)
                } else if (tickDamage["ticks"] % 2 === 0 && tickDamage["ticks"] % 4 !== 0 && (z.toString().slice(-3) === ".25" 
                  || z.toString().slice(-3) === ".75")) {
                    return (z * tickDamage["ticks"]).toFixed(1)
                } else if (2 < countDecimals(z) ) {
                    return (z * tickDamage["ticks"]).toFixed(2)
                } else {
                    return (z * tickDamage["ticks"]).toFixed(countDecimals(z))
                }
              })   
            }
            if (typeof(tickDamage["ticks"]) !== 'number' && typeof(x) === 'number') {
              return tickDamage["ticks"].map(z => {
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
            if ((x.toString().slice(-3) === (".25" || ".75") && tickDamage["ticks"]%4 === 0)
            || (x.toString().slice(-2) === ".5" && tickDamage["ticks"]%2 === 0)
            || (x.toString().slice(-4) === ".125" && tickDamage["ticks"]%8 === 0)) {
              return Math.round(x * tickDamage["ticks"])
            } else if (x.toString().slice(-3) === (".25" || ".75") && tickDamage["ticks"]%4 !== 0 
              && tickDamage["ticks"]%2 === 0) {
                return (x * tickDamage["ticks"].toFixed(1))
            } else if ( 2 < countDecimals(x) ) {
                return (x * tickDamage["ticks"]).toFixed(2)
            } else {
                return (x * tickDamage["ticks"]).toFixed(countDecimals(x))
            }
          }

          if (champLeftFile[ability]) {
            this[`${ability}Details`] = champLeftFile[ability]
            if (ability === 'passive' || document.getElementById(`${ability}Rank${side}`).value == 0) {

              if (champLeftFile[ability]["text"]) {
                var text = document.createTextNode(champLeftFile[ability]["text"])
                abilityDiv.appendChild(text)
                doubleBreak();
              };

              if (champLeftFile[ability]["auto"]) {
                var autoPath = champLeftFile[ability]["auto"]
                var autoB = document.createElement('b');
                autoB.innerText = 'Modified Auto Attack: ';
                abilityDiv.appendChild(autoB);
                var baseAutoDmg = statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLvlRatio
                var newAutoDmg = baseAutoDmg
                if (autoPath["dmgRatio"]) {
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Damage Ratio';
                  abilityDiv.appendChild(dmgRatioU);
                  var dmgRatioValue = document.createTextNode(' - ' + autoPath["dmgRatio"])
                  abilityDiv.appendChild(dmgRatioValue);
                  newAutoDmg = Math.round(autoPath["dmgRatio"]*(baseAutoDmg))
                }
                if (autoPath["dmgRatioPerCritChance"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var dmgPerCritU = document.createElement('u');
                  dmgPerCritU.innerText = 'Damage Ratio Per Crit Chance';
                  abilityDiv.appendChild(dmgPerCritU);
                  var dmgPerCritValue = document.createTextNode(' - ' + autoPath["dmgRatioPerCritChance"])
                  abilityDiv.appendChild(dmgPerCritValue);
                  newAutoDmg = newAutoDmg + Math.round(newAutoDmg*autoPath["dmgRatioPerCritChance"]*this.state.stats1.critChance)
                }
                if (autoPath["system"] === 'minMax') {
                  var minU = document.createElement('u');
                  minU.innerText = 'Min Damage';
                  abilityDiv.appendChild(minU);
                  if (autoPath["minADRatioByLvl"]) {
                    var minADRatioByLvlText = document.createTextNode(' - (' + autoPath["minADRatioByLvl"][0] + " to " 
                    + autoPath["minADRatioByLvl"][17] + " AD Ratio, based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = 'Currently';
                    var minADRatioByLvlText2 = document.createTextNode(': ' + autoPath["minADRatioByLvl"][champLevel] + ') ')
                    abilityDiv.appendChild(minADRatioByLvlText);
                    abilityDiv.appendChild(currentlyU);
                    abilityDiv.appendChild(minADRatioByLvlText2);
                  };
                  singleBreak();
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max Damage';
                  abilityDiv.appendChild(maxU);
                  if (autoPath["maxADRatioByLvl"]) {
                    var maxADRatioByLvlText = document.createTextNode(' - (' + autoPath["maxADRatioByLvl"][0] + " to " 
                    + autoPath["maxADRatioByLvl"][17] + " AD Ratio, based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = 'Currently';
                    var maxADRatioByLvlText2 = document.createTextNode(': ' + autoPath["maxADRatioByLvl"][champLevel] + ') ')
                    abilityDiv.appendChild(maxADRatioByLvlText);
                    abilityDiv.appendChild(currentlyU);
                    abilityDiv.appendChild(maxADRatioByLvlText2);
                  };
                }
                if (autoPath["critDmg"]) {
                  singleBreak();
                  var critU = document.createElement('u');
                  critU.innerText = 'Crit Damage Ratio';
                  abilityDiv.appendChild(critU);
                  var critText = document.createTextNode(': ' + autoPath["critDmg"]);
                  abilityDiv.appendChild(critText);
                  if (autoPath["critDmgWithIE"]) {
                    var IEText = document.createTextNode(' (' + autoPath["critDmgWithIE"] + ' with Infinity Edge)');
                    abilityDiv.appendChild(IEText);
                  }
                  doubleBreak();
                  var critDmgB = document.createElement('b');
                  critDmgB.innerText = 'Crit Damage: '
                  abilityDiv.appendChild(critDmgB);
                  var critText = document.createTextNode(Math.round(baseAutoDmg * autoPath["critDmg"]));
                  abilityDiv.appendChild(critText);
                  if (autoPath["critDmgWithIE"]) {
                    var IEText = document.createTextNode(' (' + Math.round(baseAutoDmg * autoPath["critDmgWithIE"]) + ' with Infinity Edge)');
                    abilityDiv.appendChild(IEText);
                  }
                }
                if (autoPath["dmgRatio"]) {
                  doubleBreak();
                  var autoDmgU = document.createElement('b');
                  autoDmgU.innerText = 'Auto Damage: '
                  abilityDiv.appendChild(autoDmgU);
                  var autoDmgText = document.createTextNode(newAutoDmg);
                  abilityDiv.appendChild(autoDmgText);
                };
                if (autoPath["system"] === 'minMax') {
                  doubleBreak();
                  var autoDmgU = document.createElement('b');
                  autoDmgU.innerText = 'Auto Damage: '
                  abilityDiv.appendChild(autoDmgU);
                  var minU = document.createElement('u');
                  minU.innerText = 'Min';
                  abilityDiv.appendChild(minU);
                  var minText = document.createTextNode(' - ' + Math.round(autoPath["minADRatioByLvl"][champLevel]*(baseAutoDmg))
                  + ' (Crit: ' + Math.round(autoPath["minADRatioByLvl"][champLevel]*(baseAutoDmg)*(autoPath['critDmg']))
                  + ', Crit with IE: ' + Math.round(autoPath["minADRatioByLvl"][champLevel]*(baseAutoDmg)*(autoPath['critDmgWithIE'])) + ')');
                  abilityDiv.appendChild(minText);
                  singleBreak();
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max';
                  abilityDiv.appendChild(maxU);
                  var maxText = document.createTextNode(' - ' + Math.round(autoPath["maxADRatioByLvl"][champLevel]*(baseAutoDmg))
                  + ' (Crit: ' + Math.round(autoPath["maxADRatioByLvl"][champLevel]*(baseAutoDmg)*(autoPath['critDmg']))
                  + ', Crit with IE: ' + Math.round(autoPath["maxADRatioByLvl"][champLevel]*(baseAutoDmg)*(autoPath['critDmgWithIE'])) + ')' );
                  abilityDiv.appendChild(maxText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["autoEmpower"]) {
                var damage = champLeftFile[ability]["autoEmpower"]["damage"]
                var dmgType = damage["type"];
                if (dmgType === 'phys') {
                  dmgType = 'Physical'
                } else {
                  dmgType = dmgType[0].toUpperCase() + dmgType.slice(1)
                }
                var autoEmpowerBold = document.createElement('b')
                if (!damage["durationAutos"] && !damage['autoCoolDown']) {
                  autoEmpowerBold.innerText = 'Auto Attack Empower: '
                } else if (damage['autoCoolDown']) {
                  autoEmpowerBold.innerText = 'Empower 1 in every ' +  damage["autoCoolDown"] + ' Auto Attacks: '
                } else {
                  autoEmpowerBold.innerText = 'Empower ' +  damage["durationAutos"] + ' Auto Attacks: '
                }
                abilityDiv.appendChild(autoEmpowerBold)
                var dmgTypeU = document.createElement('u')
                dmgTypeU.innerText = dmgType + " Damage";
                var dash = document.createTextNode(': ')
                abilityDiv.appendChild(dmgTypeU);
                abilityDiv.appendChild(dash);
                if (damage["dmg"]) {
                  var dmgArray = JSON.stringify(damage["dmg"]).replace(/,/g, ', ');
                  var dmgArrayText = document.createTextNode(dmgArray);
                  abilityDiv.appendChild(dmgArrayText);
                };
                if (damage["dmgByLvl"]) {
                  var dmgByLvlText = document.createTextNode(' [' + damage["dmgByLvl"][0] + " to " + damage["dmgByLvl"][17]
                  + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = 'Currently';
                  var dmgByLvlText2 = document.createTextNode(': ' + damage["dmgByLvl"][champLevel] + ']')
                  abilityDiv.appendChild(dmgByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(dmgByLvlText2);
                };
                if (damage["dmgByERank"]) {
                  var dmgByERankPath = damage["dmgByERank"]
                  var dmgByERankText = document.createTextNode('[' + dmgByERankPath[0] + " to " + dmgByERankPath[4]
                  + ", based on E rank. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var dmgByERankText2 = document.createTextNode(': ' + dmgByERankPath[this.state["ERankLeft"]] + '] ')
                  abilityDiv.appendChild(dmgByERankText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(dmgByERankText2)
                }
                if (damage["dmgPer5Chimes"]) {
                  var dmgPer5ChimesText = document.createTextNode(" (+" + damage["dmgPer5Chimes"] + ' per 5 chimes)')
                  abilityDiv.appendChild(dmgPer5ChimesText)
                }
                if (damage["dmgPerStack"]) {
                  var stackText = document.createTextNode(" (+" + damage["dmgPerStack"] + ' per Stack)')
                  abilityDiv.appendChild(stackText)
                }
                if (damage["APRatio"]) {
                  var APRatioText = document.createTextNode(" (+" + damage["APRatio"] + " AP Ratio)")
                  abilityDiv.appendChild(APRatioText)
                };
                if (damage["ADRatio"]) {
                  var ADRatioValue = JSON.stringify(damage["ADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var ADRatioText = document.createTextNode(" (+" + ADRatioValue + " AD Ratio)")
                  abilityDiv.appendChild(ADRatioText)
                };
                if (damage["ADRatioByLvl"]) {
                  var ADRatioByLvlText = document.createTextNode('(+' + damage["ADRatioByLvl"][0] + " to " 
                  + damage["ADRatioByLvl"][17] + " AD Ratio, based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = 'Currently';
                  var ADRatioByLvlText2 = document.createTextNode(': ' + damage["ADRatioByLvl"][champLevel] + ")")
                  abilityDiv.appendChild(ADRatioByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(ADRatioByLvlText2)
                };
                if (damage["bonusADRatio"]) {
                  var bonusADRatioValue = JSON.stringify(damage["bonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var bonusADRatioText = document.createTextNode(" (+" + bonusADRatioValue + " Bonus AD Ratio)")
                  abilityDiv.appendChild(bonusADRatioText)
                };
                if (damage["enemyMaxHPRatio"]) {
                  var enemyMaxHPRatioValue = JSON.stringify(damage["enemyMaxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyMaxHPRatioText = document.createTextNode(" (+" + enemyMaxHPRatioValue + " Enemy Max HP Ratio)")
                  abilityDiv.appendChild(enemyMaxHPRatioText)
                };
                if (damage["enemyMaxHPRatioPer100AD"]) {
                  var enemyMaxHPRatioValue = JSON.stringify(damage["enemyMaxHPRatioPer100AD"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyMaxHPRatioText = document.createTextNode(" (+" + enemyMaxHPRatioValue 
                  + " Enemy Max HP Ratio Per 100 AD)")
                  abilityDiv.appendChild(enemyMaxHPRatioText)
                }
                if (damage["enemyMaxHPRatioPer100BonusAD"]) {
                  var enemyMaxHPRatioValue = JSON.stringify(damage["enemyMaxHPRatioPer100BonusAD"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyMaxHPRatioText = document.createTextNode(" (+" + enemyMaxHPRatioValue 
                  + " Enemy Max HP Ratio Per 100 Bonus AD)")
                  abilityDiv.appendChild(enemyMaxHPRatioText)
                }
                if (damage["enemyMaxHPRatioPer100AP"]) {
                  var enemyMaxHPRatioValue = JSON.stringify(damage["enemyMaxHPRatioPer100AP"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyMaxHPRatioText = document.createTextNode(" (+" + enemyMaxHPRatioValue 
                  + " Enemy Max HP Ratio Per 100 AP)")
                  abilityDiv.appendChild(enemyMaxHPRatioText)
                }
                if (damage["enemyMaxHPRatioByLvl"]) {
                  var enemyMaxHPRatioByLvlText = document.createTextNode('(+' + damage["enemyMaxHPRatioByLvl"][0] 
                  + " to " + damage["enemyMaxHPRatioByLvl"][17] + " Enemy Max HP Ratio, based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = 'Currently';
                  var enemyMaxHPRatioByLvlText2 = document.createTextNode(': ' + damage["enemyMaxHPRatioByLvl"][champLevel] + ") ")
                  abilityDiv.appendChild(enemyMaxHPRatioByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(enemyMaxHPRatioByLvlText2)
                };
                if (damage["bonusMoveSpeedRatioByLvl"]) {
                  var bonusMoveSpeedRatioByLvlText = document.createTextNode('(' + damage["bonusMoveSpeedRatioByLvl"][0] + " to " 
                  + damage["bonusMoveSpeedRatioByLvl"][17] + " Bonus Move Speed Ratio, based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = 'Currently';
                  var bonusMoveSpeedRatioByLvlText2 = document.createTextNode(': ' + damage["bonusMoveSpeedRatioByLvl"][champLevel] + ") ")
                  abilityDiv.appendChild(bonusMoveSpeedRatioByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(bonusMoveSpeedRatioByLvlText2)
                }
                if (damage["enemyMaxHPRatioPerStack"]) {
                  var enemyMaxHPRatioValue = JSON.stringify(damage["enemyMaxHPRatioPerStack"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyMaxHPRatioText = document.createTextNode(" (+" + enemyMaxHPRatioValue + " Enemy Max HP Ratio per Stack)")
                  abilityDiv.appendChild(enemyMaxHPRatioText)
                };
                if (damage["maxHPRatio"]) {
                  var maxHPRatioValue = JSON.stringify(damage["maxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var maxHPRatioText = document.createTextNode(" (+" + maxHPRatioValue + " Max HP Ratio)")
                  abilityDiv.appendChild(maxHPRatioText)
                };
                if (damage["enemyCurrentHPRatio"]) {
                  var enemyCurrentHPRatioValue = JSON.stringify(damage["enemyCurrentHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyCurrentHPRatioText = document.createTextNode(" (+" + enemyCurrentHPRatioValue + " Enemy Current HP Ratio)")
                  abilityDiv.appendChild(enemyCurrentHPRatioText)
                };
                if (damage["enemyCurrentHPRatioByLvl"]) {
                  var ratioByLvlText = document.createTextNode('(' + damage["enemyCurrentHPRatioByLvl"][0] 
                  + " to " + damage["enemyCurrentHPRatioByLvl"][17] + " Enemy Current HP Ratio, based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = 'Currently';
                  var ratioByLvlText2 = document.createTextNode(': ' + damage["enemyCurrentHPRatioByLvl"][champLevel] + ") ")
                  abilityDiv.appendChild(ratioByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(ratioByLvlText2)
                };
                if (damage["enemyMissingHPRatio"]) {
                  var enemyMissingHPRatioValue = JSON.stringify(damage["enemyMissingHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyMissingHPRatioText = document.createTextNode(" (+" + enemyMissingHPRatioValue + " Enemy Missing HP Ratio)")
                  abilityDiv.appendChild(enemyMissingHPRatioText)
                };
                if (damage["enemyMissingHPRatioPer100AP"]) {
                  var enemyMissingHPRatioValue = JSON.stringify(damage["enemyMissingHPRatioPer100AP"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyMissingHPRatioText = document.createTextNode(" (+" + enemyMissingHPRatioValue + " Enemy Missing HP Ratio Per 100 AP)")
                  abilityDiv.appendChild(enemyMissingHPRatioText)
                };
                if (damage["enemyMissingHPRatioByLvl"]) {
                  var enemyMissHPRatioByLvlText = document.createTextNode('(' + damage["enemyMissingHPRatioByLvl"][0] + " to " 
                  + damage["enemyMissingHPRatioByLvl"][17] + " Enemy Missing HP Ratio, based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = 'Currently';
                  var enemyMissHPRatioByLvlText2 = document.createTextNode(': ' + damage["enemyMissingHPRatioByLvl"][champLevel] + ")")
                  abilityDiv.appendChild(enemyMissHPRatioByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(enemyMissHPRatioByLvlText2)
                }
                if (damage["armorRatio"]) {
                  var armorRatioValue = JSON.stringify(damage["armorRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var armorRatioText = document.createTextNode(" (+" + armorRatioValue + " Armor Ratio)")
                  abilityDiv.appendChild(armorRatioText)
                };
                if (damage["bonusArmorRatio"]) {
                  var armorRatioValue = JSON.stringify(damage["bonusArmorRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var armorRatioText = document.createTextNode(" (+" + armorRatioValue + " Bonus Armor Ratio)")
                  abilityDiv.appendChild(armorRatioText)
                }
                if (damage["ADRatioPerCritChance"]) {
                  var text = document.createTextNode(" (+" + damage["ADRatioPerCritChance"] + " AD Ratio per Crit Chance")
                  abilityDiv.appendChild(text);
                  if (damage["ADRatioPerCritChanceWithIE"]) {
                    var IEText = document.createTextNode('. With Infinity Edge: ' + damage["ADRatioPerCritChanceWithIE"] + ')')
                    abilityDiv.appendChild(IEText);
                  } else {
                    var closeParen = document.createTextNode(')')
                    abilityDiv.appendChild(closeParen)
                  };
                  if (ability === 'passive') {
                    var dmgCounter = 0;
                    var IECounter = 0;
                    dmgCounter += damage["ADRatioPerCritChance"] * itemStats.critChance * (itemStats.ad + 
                    statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLvlRatio);
                    if (damage["ADRatioByLvl"]) {
                      dmgCounter += damage["ADRatioByLvl"][champLevel] * (itemStats.ad + statsPath["baseDamage"] 
                      + statsPath["damagePerLevel"] * champLvlRatio);
                    };
                    doubleBreak();
                    var underL = document.createElement('u');
                    underL.innerText = 'Current Damage';
                    abilityDiv.appendChild(underL);
                    var text = document.createTextNode(': ' + Math.round(dmgCounter));
                    abilityDiv.appendChild(text);
                    if (damage["ADRatioPerCritChanceWithIE"]) {
                      IECounter += damage["ADRatioPerCritChanceWithIE"] * itemStats.critChance * (itemStats.ad + 
                      statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLvlRatio);
                      var text = document.createTextNode(' (' + Math.round(IECounter + dmgCounter) + ' with IE)');
                      abilityDiv.appendChild(text);
                    };
                  }
                };
                if (damage["armorIgnore"]) {
                  singleBreak();
                  var ignoreText = document.createTextNode('Ignores ' + damage["armorIgnore"] + ' ratio of enemy armor.');
                  abilityDiv.appendChild(ignoreText);
                };
                if (damage["alwaysCrit"]) {
                  var critText = document.createTextNode('. Always critically strikes.');
                  abilityDiv.appendChild(critText);
                }
                if (damage["attackSpeedPenalty"]) {
                  singleBreak();
                  var penaltyU = document.createElement('u');
                  penaltyU.innerText = 'Bonus Attack Speed Penalty Ratio';
                  abilityDiv.appendChild(penaltyU);
                  var penaltyText = document.createTextNode(': ' + damage["attackSpeedPenalty"] );
                  abilityDiv.appendChild(penaltyText);
                }
                if (damage["system"] === "min" ) {
                  var br = document.createElement('br')
                  abilityDiv.appendChild(br)
                  var minDmgU = document.createElement('u');
                  minDmgU.innerText = 'Min Damage'
                  abilityDiv.appendChild(minDmgU);
                  if (damage["minDmg"]) {
                    var minDmgArray = JSON.stringify(damage["minDmg"]).replace(/,/g, ', ')
                    var minDmgText = document.createTextNode(" - " + minDmgArray)
                    abilityDiv.appendChild(minDmgText)
                  }
                }
                if (damage["system"] === "minMax" ) {
                  var minDmgU = document.createElement('u')
                  minDmgU.innerText = 'Min'
                  abilityDiv.appendChild(minDmgU)
                  if (damage["minDmg"]) {
                    var minDmgArray = JSON.stringify(damage["minDmg"]).replace(/,/g, ', ')
                    var minDmgText = document.createTextNode(' - ' + minDmgArray)
                    abilityDiv.appendChild(minDmgText)
                  };
                  if (damage["minDmgByLvl"]) {
                    var dmgByLvlText = document.createTextNode(' - [' + damage["minDmgByLvl"][0] + " to " 
                    + damage["minDmgByLvl"][17] + ", based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = 'Currently';
                    var dmgByLvlText2 = document.createTextNode(': ' + damage["minDmgByLvl"][champLevel] + '] ')
                    abilityDiv.appendChild(dmgByLvlText);
                    abilityDiv.appendChild(currentlyU);
                    abilityDiv.appendChild(dmgByLvlText2);
                  }
                  if (damage["minADRatio"]) {
                    var minADRatioText = document.createTextNode(" (+" + JSON.stringify(damage["minADRatio"])
                    .replace(/,/g, ', ').replace(/^\[|]$/g, '') + " AD Ratio)")
                    abilityDiv.appendChild(minADRatioText)
                  };
                  if (damage["minBonusADRatio"]) {
                    var minBonusADRatioValue = JSON.stringify(damage["minBonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minBonusADRatioText = document.createTextNode(" (+" + minBonusADRatioValue + " Bonus AD Ratio)")
                    abilityDiv.appendChild(minBonusADRatioText)
                  };
                  if (damage["minAPRatio"]) {
                    var minAPRatioValue = JSON.stringify(damage["minAPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minAPRatioText = document.createTextNode(" (+" + minAPRatioValue + " AP Ratio)")
                    abilityDiv.appendChild(minAPRatioText)
                  };
                  if (damage["minArmorRatio"]) {
                    var armRatio = JSON.stringify(damage["minArmorRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var armRatioText = document.createTextNode(" (+" + armRatio + " Armor Ratio)")
                    abilityDiv.appendChild(armRatioText)
                  }
                  if (damage["minEnemyMaxHPRatio"]) {
                    var hpRatio = JSON.stringify(damage["minEnemyMaxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var hpRatioText = document.createTextNode(" (+" + hpRatio + " Enemy Max HP Ratio)")
                    abilityDiv.appendChild(hpRatioText)
                  }
                  if (damage["minEnemyMaxHPRatioPer100AP"]) {
                    var hpRatioText = document.createTextNode(" (+" + damage["minEnemyMaxHPRatioPer100AP"] 
                    + " Enemy Max HP Ratio per 100 AP)")
                    abilityDiv.appendChild(hpRatioText)
                  }
                  if (damage["minDmgPerStack"]) {
                    var stackText = document.createTextNode(' - (' + damage["minDmgPerStack"] + ' per Stack)');
                    abilityDiv.appendChild(stackText);
                  }
                  singleBreak();
                  var maxDmgU = document.createElement('u')
                  maxDmgU.innerText = 'Max'
                  abilityDiv.appendChild(maxDmgU)
                  if (damage["maxDmg"]) {
                    var maxDmgArray = JSON.stringify(damage["maxDmg"]).replace(/,/g, ', ')
                    var maxDmgText = document.createTextNode(' - ' + maxDmgArray)
                    abilityDiv.appendChild(maxDmgText)
                  }
                  if (damage["maxDmgByLvl"]) {
                    var dmgByLvlText = document.createTextNode(' - [' + damage["maxDmgByLvl"][0] + " to " 
                    + damage["maxDmgByLvl"][17] + ", based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = 'Currently';
                    var dmgByLvlText2 = document.createTextNode(': ' + damage["maxDmgByLvl"][champLevel] + '] ')
                    abilityDiv.appendChild(dmgByLvlText);
                    abilityDiv.appendChild(currentlyU);
                    abilityDiv.appendChild(dmgByLvlText2);
                  }
                  if (damage["maxDmgPerStack"]) {
                    var stackText = document.createTextNode(' - (' + damage["maxDmgPerStack"] + ' per Stack)');
                    abilityDiv.appendChild(stackText);
                  }
                  if (damage["maxADRatio"]) {
                    var maxADRatioText = document.createTextNode(" (+" + JSON.stringify(damage["maxADRatio"])
                    .replace(/,/g, ', ').replace(/^\[|]$/g, '') + " AD Ratio)")
                    abilityDiv.appendChild(maxADRatioText)
                  };
                  if (damage["maxBonusADRatio"]) {
                    var maxBonusADRatioValue = JSON.stringify(damage["maxBonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxBonusADRatioText = document.createTextNode(" (+" + maxBonusADRatioValue + " Bonus AD Ratio)")
                    abilityDiv.appendChild(maxBonusADRatioText)
                  };
                  if (damage["maxAPRatio"]) {
                    var maxAPRatioValue = JSON.stringify(damage["maxAPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxAPRatioText = document.createTextNode(" (+" + maxAPRatioValue + " AP Ratio)")
                    abilityDiv.appendChild(maxAPRatioText)
                  };
                  if (damage["maxArmorRatio"]) {
                    var armRatio = JSON.stringify(damage["maxArmorRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var armRatioText = document.createTextNode(" (+" + armRatio + " Armor Ratio)")
                    abilityDiv.appendChild(armRatioText)
                  }
                  if (damage["maxEnemyMaxHPRatio"]) {
                    var hpRatio = JSON.stringify(damage["maxEnemyMaxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var hpRatioText = document.createTextNode(" (+" + hpRatio + " Enemy Max HP Ratio)")
                    abilityDiv.appendChild(hpRatioText)
                  }
                  if (damage["maxEnemyMaxHPRatioPer100AP"]) {
                    var hpRatioText = document.createTextNode(" (+" + damage["maxEnemyMaxHPRatioPer100AP"] 
                    + " Enemy Max HP Ratio per 100 AP)")
                    abilityDiv.appendChild(hpRatioText)
                  }
                };
                if (damage["lvlRequired"]) {
                  singleBreak();
                  var lvlReqU = document.createElement('u');
                  lvlReqU.innerText = 'Level Required';
                  abilityDiv.appendChild(lvlReqU);
                  var lvlText = document.createTextNode(': ' + damage["lvlRequired"]);
                  abilityDiv.appendChild(lvlText);
                }
                if (damage["canCrit"]) {
                  var canCritText = document.createTextNode(', can crit.');
                  abilityDiv.appendChild(canCritText);
                };
                if (damage["critDmg"]) {
                  singleBreak();
                  var critU = document.createElement('u');
                  critU.innerText = 'Crit Damage Ratio';
                  abilityDiv.appendChild(critU);
                  var critText = document.createTextNode(': ' + damage["critDmg"]);
                  abilityDiv.appendChild(critText);
                  if (damage["critDmgWithIE"]) {
                    var IEText = document.createTextNode(' (' + damage["critDmgWithIE"] + ' with Infinity Edge)');
                    abilityDiv.appendChild(IEText);
                  }
                };
                if (damage["critADRatioWithIE"]) {
                  singleBreak();
                  var critU = document.createElement('u');
                  critU.innerText = 'Crit Bonus Dmg with Infinity Edge';
                  abilityDiv.appendChild(critU);
                  var critText = document.createTextNode(': ' + damage["critADRatioWithIE"] + ' AD Ratio');
                  abilityDiv.appendChild(critText);
                }
                if (damage["duration"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration'
                  abilityDiv.appendChild(durationU)
                  var durationText = document.createTextNode(' - ' + damage["duration"])
                  abilityDiv.appendChild(durationText)
                }
                if (damage["minDuration"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var minDurationU = document.createElement('u');
                  minDurationU.innerText = 'Min Duration'
                  abilityDiv.appendChild(minDurationU)
                  var minDurationText = document.createTextNode(' - ' + damage["minDuration"] + ', ')
                  abilityDiv.appendChild(minDurationText)
                  var maxDurationU = document.createElement('u');
                  maxDurationU.innerText = 'Max Duration'
                  abilityDiv.appendChild(maxDurationU)
                  var maxDurationText = document.createTextNode(' - ' + damage["maxDuration"])
                  abilityDiv.appendChild(maxDurationText)
                }
                // Trim down this autoEmpower.part section if there aren't many others than camille.
                if (damage["system"] === "2Part" || damage["system"] === "3Part") {
                  function partDamageMap(partNumber, i, array) {
                    if (!damage[partNumber]) {
                        return;
                    }
                    var part = damage[partNumber]
                    var partNumberU = document.createElement('u')
                    partNumberU.innerText = partNumber[0].toUpperCase() + partNumber.slice(1, 4) + ' '  + partNumber[4]  
                    abilityDiv.appendChild(partNumberU)
                    var partNumberText = ': '
                    var partText = document.createTextNode(partNumberText)
                    abilityDiv.appendChild(partText)

                    if (part["type"]) {
                      var text = document.createTextNode(part["type"] + " Damage: ");
                      abilityDiv.appendChild(text);
                    };
                    if (part["ADRatio"]) {
                      var ADRatioValue = JSON.stringify(part["ADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                      var ADRatioText = document.createTextNode(" (" + ADRatioValue + " AD Ratio)")
                      abilityDiv.appendChild(ADRatioText)
                    };
                    if (part["trueDmgRatioByLvl"]) {
                      var br = document.createElement('br')
                      abilityDiv.appendChild(br);
                      var ratioText = document.createTextNode('True Damage Ratio: (' + part["trueDmgRatioByLvl"][0] + 
                      " to " + part["trueDmgRatioByLvl"][17]+ ", based on lvl. Currently: " + part["trueDmgRatioByLvl"][champLevel] + ')');
                      abilityDiv.appendChild(ratioText);
                    }
                    var next = array[i+1]
                    if (damage[next]) {
                      doubleBreak();
                    }
                  }
                  this.partNumberArray.map(partDamageMap)
                }
                if (damage["staticCoolDownByLvl"]) {
                  singleBreak();
                  var coolDownU = document.createElement('u');
                  coolDownU.innerText = "Static Cooldown";
                  abilityDiv.appendChild(coolDownU)
                  var coolDownByLvlText = document.createTextNode(': [' + damage["staticCoolDownByLvl"][0] + " to " 
                  + damage["staticCoolDownByLvl"][17] + "], based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var coolDownBylvlText2 = document.createTextNode(': ' + damage["staticCoolDownByLvl"][champLevel])
                  abilityDiv.appendChild(coolDownByLvlText);
                  abilityDiv.appendChild(currentlyU)
                  abilityDiv.appendChild(coolDownBylvlText2)
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["damage"]) {
                var damage = champLeftFile[ability]["damage"]
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
                  var dmgTypeBold = document.createElement('b')
                  dmgTypeBold.innerText = dmgType + " Damage: "
                  abilityDiv.appendChild(dmgTypeBold);
                };
                if (damage["dmg"]) {
                  var dmgArray = JSON.stringify(damage["dmg"]).replace(/,/g, ', ')
                  var dmgArrayText = document.createTextNode(dmgArray);
                  abilityDiv.appendChild(dmgArrayText);
                };
                if (damage["dmgByLvl"]) {
                  var dmgByLvlText = document.createTextNode('[' + damage["dmgByLvl"][0] + " to " + damage["dmgByLvl"][17]
                  + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var dmgByLvlText2 = document.createTextNode(': ' + damage["dmgByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(dmgByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(dmgByLvlText2)
                };
                if (damage["totalDmgRatio"]) {
                  var dmgU = document.createElement('u');
                  dmgU.innerText = 'Total Damage Ratio';
                  abilityDiv.appendChild(dmgU);
                  var ratioText = document.createTextNode(' - ' + JSON.stringify(damage["totalDmgRatio"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(ratioText);
                }
                if (damage["dmgByWRank"]) {
                  var dmgByWRankPath = damage["dmgByWRank"]
                  var dmgByWRankText = document.createTextNode('[+' + dmgByWRankPath[0] + " to " + dmgByWRankPath[4]
                  + " Damage, based on W rank. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var dmgByWRankText2 = document.createTextNode(': ' + dmgByWRankPath[this.state["WRankLeft"]] + '] ')
                  abilityDiv.appendChild(dmgByWRankText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(dmgByWRankText2)
                }
                if (damage["APRatio"]) {
                  var APRatioText = document.createTextNode(" (+" + JSON.stringify(damage["APRatio"]).replace(/,/g, ', ')
                  .replace(/^\[|]$/g, '') + " AP Ratio)");
                  abilityDiv.appendChild(APRatioText)
                };
                if (damage["APRatioByLvl"]) {
                  var APRByLvlText = document.createTextNode(' (+' + damage["APRatioByLvl"][0] + " to " 
                  + damage["APRatioByLvl"][17] + " AP Ratio, based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var APRByLvlText2 = document.createTextNode(': ' + damage["APRatioByLvl"][champLevel] + ') ')
                  abilityDiv.appendChild(APRByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(APRByLvlText2)
                }
                if (damage["ADRatio"]) {
                  var ADRatioValue = JSON.stringify(damage["ADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var ADRatioText = document.createTextNode(" (+" + ADRatioValue + " AD Ratio)")
                  abilityDiv.appendChild(ADRatioText)
                };
                if (damage["bonusADRatio"]) {
                  var bonusADRatioValue = JSON.stringify(damage["bonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var bonusADRatioText = document.createTextNode(" (+" + bonusADRatioValue + " Bonus AD Ratio)")
                  abilityDiv.appendChild(bonusADRatioText)
                };
                if (damage["bonusManaRatio"]) {
                  var manaText = document.createTextNode(" (+" + damage["bonusManaRatio"] + " Bonus Mana Ratio)")
                  abilityDiv.appendChild(manaText)
                }
                if (damage["enemyMaxHPRatio"]) {
                  var enemyMaxHPRatioValue = JSON.stringify(damage["enemyMaxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyMaxHPRatioText = document.createTextNode(" (+" + enemyMaxHPRatioValue + " Enemy Max HP Ratio)")
                  abilityDiv.appendChild(enemyMaxHPRatioText)
                };
                if (damage["enemyMaxHPRatioByLvl"]) {
                  var enemyMaxHPByLvlText = document.createTextNode('(' + damage["enemyMaxHPRatioByLvl"][0] + " to " 
                  + damage["enemyMaxHPRatioByLvl"][17] + " Enemy Max HP Ratio, based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var enemyMaxHPByLvlText2 = document.createTextNode(': ' + damage["enemyMaxHPRatioByLvl"][champLevel] + ') ')
                  abilityDiv.appendChild(enemyMaxHPByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(enemyMaxHPByLvlText2)
                }
                if (damage["enemyMaxHPRatioPer100AP"]) {
                  var HPPer100APText = document.createTextNode(' (+' + damage["enemyMaxHPRatioPer100AP"] + ' Enemy Max HP Ratio per 100 AP)')
                  abilityDiv.appendChild(HPPer100APText);
                }
                if (damage["enemyMaxHPRatioPer100BonusAD"]) {
                  var HPPer100BonusADText = document.createTextNode(' (+' + damage["enemyMaxHPRatioPer100BonusAD"] + ' Enemy Max HP Ratio per 100 Bonus AD)')
                  abilityDiv.appendChild(HPPer100BonusADText);
                }
                if (damage["bonusHPRatio"]) {
                  var bonusHPRatioValue = JSON.stringify(damage["bonusHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var bonusHPRatioText = document.createTextNode(" (+" + bonusHPRatioValue + " Bonus HP Ratio)")
                  abilityDiv.appendChild(bonusHPRatioText)
                }
                if (damage["maxHPRatio"]) {
                  var maxHPRatioValue = JSON.stringify(damage["maxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var maxHPRatioText = document.createTextNode(" (+" + maxHPRatioValue + " Max HP Ratio)")
                  abilityDiv.appendChild(maxHPRatioText)
                };
                if (damage["enemyCurrentHPRatio"]) {
                  var enemyCurrentHPRatioValue = JSON.stringify(damage["enemyCurrentHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyCurrentHPRatioText = document.createTextNode(" (+" + enemyCurrentHPRatioValue + " Enemy Current HP Ratio)")
                  abilityDiv.appendChild(enemyCurrentHPRatioText)
                };
                if (damage["enemyCurrentHPRatioPerStack"]) {
                  var ratioText = document.createTextNode(' (+' + damage["enemyCurrentHPRatioPerStack"] + 
                  ' Enemy Current HP Ratio per Stack)');
                  abilityDiv.appendChild(ratioText);
                }
                if (damage["enemyCurrentHPRatioPer100AP"]) {
                  var enemyCurrentHPRatioValue = JSON.stringify(damage["enemyCurrentHPRatioPer100AP"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyCurrentHPRatioText = document.createTextNode(" (+" + enemyCurrentHPRatioValue + " Enemy Current HP Ratio Per 100 AP)")
                  abilityDiv.appendChild(enemyCurrentHPRatioText)
                };
                if (damage["enemyCurrentHPRatioPer100AD"]) {
                  var enemyCurrentHPRatioValue = JSON.stringify(damage["enemyCurrentHPRatioPer100AD"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyCurrentHPRatioText = document.createTextNode(" (+" + enemyCurrentHPRatioValue + " Enemy Current HP Ratio Per 100 AD)")
                  abilityDiv.appendChild(enemyCurrentHPRatioText)
                }
                if (damage["enemyMissingHPRatio"]) {
                  var enemyMissingHPRatioValue = JSON.stringify(damage["enemyMissingHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyMissingHPRatioText = document.createTextNode(" (+" + enemyMissingHPRatioValue + " Enemy Missing HP Ratio)")
                  abilityDiv.appendChild(enemyMissingHPRatioText)
                };
                if (damage["enemyMissingHPRatioPer100AP"]) {
                  var enemyMissingHPRatioValue = JSON.stringify(damage["enemyMissingHPRatioPer100AP"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyMissingHPRatioText = document.createTextNode(" (+" + enemyMissingHPRatioValue + " Enemy Missing HP Ratio Per 100 AP)")
                  abilityDiv.appendChild(enemyMissingHPRatioText)
                }
                if (damage["enemyMissingHPRatioPerStack"]) {
                  var ratioText = document.createTextNode(' (+' + damage["enemyMissingHPRatioPerStack"] + 
                  ' Enemy Missing HP Ratio per Stack)');
                  abilityDiv.appendChild(ratioText);
                }
                if (damage["armorRatio"]) {
                  var armorRatioValue = JSON.stringify(damage["armorRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var armorRatioText = document.createTextNode(" (+" + armorRatioValue + " Armor Ratio)")
                  abilityDiv.appendChild(armorRatioText)
                };
                if (damage["bonusArmorRatio"]) {
                  var armorRatioValue = JSON.stringify(damage["bonusArmorRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var armorRatioText = document.createTextNode(" (+" + armorRatioValue + " Bonus Armor Ratio)")
                  abilityDiv.appendChild(armorRatioText)
                };
                if (damage["bonusMRRatio"]) {
                  var mrRatioValue = JSON.stringify(damage["bonusMRRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var mrRatioText = document.createTextNode(" (+" + mrRatioValue + " Bonus Magic Resist Ratio)")
                  abilityDiv.appendChild(mrRatioText)
                }
                if (damage["bonusMoveSpeedRatioByLvl"]) {
                  var bonusMoveSpeedRatioByLvlText = document.createTextNode(' (+' + damage["bonusMoveSpeedRatioByLvl"][0] + " to " 
                  + damage["bonusMoveSpeedRatioByLvl"][17] + " Bonus Move Speed Ratio, based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = 'Currently';
                  var bonusMoveSpeedRatioByLvlText2 = document.createTextNode(': ' + damage["bonusMoveSpeedRatioByLvl"][champLevel] + ") ")
                  abilityDiv.appendChild(bonusMoveSpeedRatioByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(bonusMoveSpeedRatioByLvlText2)
                }
                if (damage["dmgPerLethality"]) {
                  var lethalRatioText = document.createTextNode(" (+" + damage["dmgPerLethality"] + " Lethality Ratio)")
                  abilityDiv.appendChild(lethalRatioText)
                }
                if (damage["bonusDmgRatioPerCritChance"]) {
                  singleBreak();
                  var ratioU = document.createElement('u');
                  ratioU.innerText = 'Bonus Damage Ratio';
                  abilityDiv.appendChild(ratioU);
                  var ratioText = document.createTextNode(': (' + damage["bonusDmgRatioPerCritChance"] + ' per Crit Chance)');
                  abilityDiv.appendChild(ratioText);
                  if (damage["dmgRatioPerStack"]) {
                    var ratioText = document.createTextNode(' (' + damage["dmgRatioPerStack"] + ' per Stack)');
                    abilityDiv.appendChild(ratioText);
                  }
                }

                if (damage["canCrit"]) {
                  var canCritText = document.createTextNode(', can crit.');
                  abilityDiv.appendChild(canCritText);
                }
                if (damage["executeDmgRatio"]) {
                  singleBreak();
                  var execU = document.createElement('u');
                  execU.innerText = 'Execute Damage Ratio';
                  abilityDiv.appendChild(execU);
                  var execText = document.createTextNode(': ' + damage["executeDmgRatio"]);
                  abilityDiv.appendChild(execText);
                }
                if (damage["critDmg"]) {
                  singleBreak();
                  var critU = document.createElement('u');
                  critU.innerText = 'Crit Damage Ratio';
                  abilityDiv.appendChild(critU);
                  var critText = document.createTextNode(': ' + damage["critDmg"]);
                  abilityDiv.appendChild(critText);
                  if (damage["critDmgWithIE"]) {
                    var IEText = document.createTextNode(' (' + damage["critDmgWithIE"] + ' with Infinity Edge)');
                    abilityDiv.appendChild(IEText);
                  }
                }
                if (damage["critADRatio"]) {
                  singleBreak();
                  var critU = document.createElement('u');
                  critU.innerText = 'Crit AD Ratio';
                  abilityDiv.appendChild(critU);
                  var critText = document.createTextNode(': ' + damage["critADRatio"]);
                  abilityDiv.appendChild(critText);
                  if (damage["critADRatioWithIE"]) {
                    var IEText = document.createTextNode(' (' + damage["critADRatioWithIE"] + ' with Infinity Edge)');
                    abilityDiv.appendChild(IEText);
                  }
                }
                if (damage["asPerBonusAS"]) {
                  singleBreak();
                  var asU = document.createElement('u');
                  asU.innerText = 'Wolf Bonus Attack Speed per Kindred Bonus Attack Speed';
                  abilityDiv.appendChild(asU);
                  var asRatio = document.createTextNode(': ' + damage["asPerBonusAS"]);
                  abilityDiv.appendChild(asRatio);
                }
                if (damage["dmgRatioByRRank"]) {
                  singleBreak();
                  var dmgU = document.createElement('u');
                  dmgU.innerText = 'Damage Ratio By R Rank';
                  abilityDiv.appendChild(dmgU);
                  var dmgText = document.createTextNode(': ' + JSON.stringify(damage["dmgRatioByRRank"])
                  .replace(/,/g, ', '));
                  abilityDiv.appendChild(dmgText);
                }

                if (damage["system"] === "min" ) {
                  var br = document.createElement('br')
                  abilityDiv.appendChild(br)
                  var minDmgU = document.createElement('u');
                  minDmgU.innerText = 'Min Damage'
                  abilityDiv.appendChild(minDmgU);
                  if (damage["minDmg"]) {
                    var minDmgArray = JSON.stringify(damage["minDmg"]).replace(/,/g, ', ')
                    var minDmgText = document.createTextNode(" - " + minDmgArray)
                    abilityDiv.appendChild(minDmgText)
                  }
                  if (damage["minDmgAPRatio"]) {
                    var ratioText = document.createTextNode(' (+' + damage["minDmgAPRatio"] + ' AP Ratio)');
                    abilityDiv.appendChild(ratioText);
                  }
                }

                if (damage["system"] === "minMax" ) {
                  var minDmgU = document.createElement('u')
                  minDmgU.innerText = 'Min'
                  abilityDiv.appendChild(minDmgU)
                  var dash = document.createTextNode(' - ');
                  abilityDiv.appendChild(dash)
                  if (damage["minDmg"]) {
                    var minDmgArray = JSON.stringify(damage["minDmg"]).replace(/,/g, ', ')
                    var minDmgText = document.createTextNode(minDmgArray)
                    abilityDiv.appendChild(minDmgText)
                  }
                  if (damage["minDmgByLvl"]) {
                    var dmgByLvlText = document.createTextNode(' [+' + damage["minDmgByLvl"][0] + " to " + damage["minDmgByLvl"][17]
                    + ", based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var dmgByLvlText2 = document.createTextNode(': ' + damage["minDmgByLvl"][champLevel] + '] ')
                    abilityDiv.appendChild(dmgByLvlText);
                    abilityDiv.appendChild(currentlyU);
                    abilityDiv.appendChild(dmgByLvlText2)
                  }
                  if (damage["minAPRatio"]) {
                    var minAPRatioValue = JSON.stringify(damage["minAPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minAPRatioText = document.createTextNode(" (+" + minAPRatioValue + " AP Ratio)")
                    abilityDiv.appendChild(minAPRatioText)
                  }
                  if (damage["minADRatio"]) {
                    var minADRatioValue = JSON.stringify(damage["minADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minADRatioText = document.createTextNode(" (+" + minADRatioValue + " AD Ratio)")
                    abilityDiv.appendChild(minADRatioText)
                  }
                  if (damage["minBonusADRatio"]) {
                    var minBonusADRatioValue = JSON.stringify(damage["minBonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minBonusADRatioText = document.createTextNode(" (+" + minBonusADRatioValue + " Bonus AD Ratio)")
                    abilityDiv.appendChild(minBonusADRatioText)
                  }
                  if (damage["minMaxManaRatio"]) {
                    var manaRatioValue = JSON.stringify(damage["minMaxManaRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var manaRatioText = document.createTextNode(" (+" + manaRatioValue + " Max Mana Ratio)")
                    abilityDiv.appendChild(manaRatioText)
                  }
                  if (damage["minBonusHPRatio"]) {
                    var ratioText = document.createTextNode(" (+" + damage["minBonusHPRatio"] + " Bonus HP Ratio)")
                    abilityDiv.appendChild(ratioText)
                  }
                  if (damage["minMaxHPRatio"]) {
                    var ratioText = document.createTextNode(" (+" + damage["minMaxHPRatio"] + " Max HP Ratio)")
                    abilityDiv.appendChild(ratioText)
                  }
                  if (damage["minEnemyMaxHPRatio"]) {
                    var minEnemyMaxHPRatioValue = JSON.stringify(damage["minEnemyMaxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minEnemyMaxHPRatioText = document.createTextNode(" (+" + minEnemyMaxHPRatioValue + " Enemy Max HP Ratio)")
                    abilityDiv.appendChild(minEnemyMaxHPRatioText)
                  }
                  if (damage["minEnemyMaxHPRatioPer100BonusAD"]) {
                    var minEnemyMaxHPRatioValue = JSON.stringify(damage["minEnemyMaxHPRatioPer100BonusAD"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minEnemyMaxHPRatioText = document.createTextNode(" (+" + minEnemyMaxHPRatioValue + " Enemy Max HP Ratio per 100 Bonus AD)")
                    abilityDiv.appendChild(minEnemyMaxHPRatioText)
                  }
                  if (damage["minEnemyMaxHPRatioPer100AP"]) {
                    var minEnemyMaxHPRatioValue = JSON.stringify(damage["minEnemyMaxHPRatioPer100AP"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minEnemyMaxHPRatioText = document.createTextNode(" (+" + minEnemyMaxHPRatioValue + " Enemy Max HP Ratio per 100 AP)")
                    abilityDiv.appendChild(minEnemyMaxHPRatioText)
                  }
                  if (damage["minEnemyBonusHPRatio"]) {
                    var HPRatioValue = JSON.stringify(damage["minEnemyBonusHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var HPRatioText = document.createTextNode(" (+" + HPRatioValue + " Enemy Bonus HP Ratio)")
                    abilityDiv.appendChild(HPRatioText)
                  }
                  if (damage["minEnemyCurrentHPRatio"]) {
                    var currentHPRatioValue = JSON.stringify(damage["minEnemyCurrentHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var currentHPRatioText = document.createTextNode(" (+" + currentHPRatioValue + " Enemy Current HP Ratio)")
                    abilityDiv.appendChild(currentHPRatioText)
                  }
                  if (damage["minEnemyCurrentHPRatioPer100AP"]) {
                    var currentHPRatioValue = JSON.stringify(damage["minEnemyCurrentHPRatioPer100AP"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var currentHPRatioText = document.createTextNode(" (+" + currentHPRatioValue + " Enemy Current HP Ratio per 100 AP)")
                    abilityDiv.appendChild(currentHPRatioText)
                  }
                  if (damage["minEnemyMissingHPRatio"]) {
                    var enemyMissingHPRatioValue = JSON.stringify(damage["minEnemyMissingHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var enemyMissingHPRatioText = document.createTextNode(" (+" + enemyMissingHPRatioValue + " Enemy Missing HP Ratio)")
                    abilityDiv.appendChild(enemyMissingHPRatioText)
                  };  
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);

                  if (damage["medDmg"]) {
                    var medDmgU = document.createElement('u')
                    medDmgU.innerText = 'Med'
                    abilityDiv.appendChild(medDmgU)
                    var medDmgText = document.createTextNode(' - ' + JSON.stringify(damage["medDmg"]).replace(/,/g, ', '));
                    abilityDiv.appendChild(medDmgText);
                    if (damage["medAPRatio"]) {
                      var medAPRatioValue = JSON.stringify(damage["medAPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                      var medAPRatioText = document.createTextNode(" (+" + medAPRatioValue + " AP Ratio)")
                      abilityDiv.appendChild(medAPRatioText)
                    }
                    if (damage["medBonusADRatio"]) {
                      var ratioValue = JSON.stringify(damage["medBonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                      var ratioText = document.createTextNode(" (+" + ratioValue + " Bonus AD Ratio)")
                      abilityDiv.appendChild(ratioText)
                    }
                    var br = document.createElement("br");
                    abilityDiv.appendChild(br);
                  }

                  var maxDmgU = document.createElement('u')
                  maxDmgU.innerText = 'Max'
                  abilityDiv.appendChild(maxDmgU)
                  var dash2 = document.createTextNode(" - ");
                  abilityDiv.appendChild(dash2);

                  if (damage["maxDmg"]) {
                    var maxDmgArray = JSON.stringify(damage["maxDmg"]).replace(/,/g, ', ')
                    var maxDmgText = document.createTextNode(maxDmgArray)
                    abilityDiv.appendChild(maxDmgText)
                  }
                  if (damage["maxDmgByLvl"]) {
                    var dmgByLvlText = document.createTextNode(' [+' + damage["maxDmgByLvl"][0] + " to " + damage["maxDmgByLvl"][17]
                    + ", based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var dmgByLvlText2 = document.createTextNode(': ' + damage["maxDmgByLvl"][champLevel] + '] ')
                    abilityDiv.appendChild(dmgByLvlText);
                    abilityDiv.appendChild(currentlyU);
                    abilityDiv.appendChild(dmgByLvlText2)
                  }
                  if (damage["maxAPRatio"]) {
                    var maxAPRatioValue = JSON.stringify(damage["maxAPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxAPRatioText = document.createTextNode(" (+" + maxAPRatioValue + " AP Ratio)")
                    abilityDiv.appendChild(maxAPRatioText)
                  }
                  if (damage["maxADRatio"]) {
                    var maxADRatioValue = JSON.stringify(damage["maxADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxADRatioText = document.createTextNode(" (+" + maxADRatioValue + " AD Ratio)")
                    abilityDiv.appendChild(maxADRatioText)
                  }
                  if (damage["maxBonusADRatio"]) {
                    var maxBonusADRatioValue = JSON.stringify(damage["maxBonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxBonusADRatioText = document.createTextNode(" (+" + maxBonusADRatioValue + " Bonus AD Ratio)")
                    abilityDiv.appendChild(maxBonusADRatioText)
                  }
                  if (damage["maxMaxManaRatio"]) {
                    var manaRatioValue = JSON.stringify(damage["maxMaxManaRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var manaRatioText = document.createTextNode(" (+" + manaRatioValue + " Max Mana Ratio)")
                    abilityDiv.appendChild(manaRatioText)
                  }
                  if (damage["maxBonusHPRatio"]) {
                    var ratioText = document.createTextNode(" (+" + damage["maxBonusHPRatio"] + " Bonus HP Ratio)")
                    abilityDiv.appendChild(ratioText)
                  }
                  if (damage["maxMaxHPRatio"]) {
                    var hpValue = JSON.stringify(damage["maxMaxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var hpText = document.createTextNode(" (+" + hpValue + " Max HP Ratio)")
                    abilityDiv.appendChild(hpText)
                  }
                  if (damage["maxMaxHPRatioPer100BonusAD"]) {
                    var hpValue = JSON.stringify(damage["maxMaxHPRatioPer100BonusAD"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var hpText = document.createTextNode(" (+" + hpValue + " Max HP Ratio per 100 Bonus AD)")
                    abilityDiv.appendChild(hpText)
                  }
                  if (damage["maxEnemyMaxHPRatio"]) {
                    var maxEnemyMaxHPRatioValue = JSON.stringify(damage["maxEnemyMaxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxEnemyMaxHPRatioText = document.createTextNode(" (+" + maxEnemyMaxHPRatioValue + " Enemy Max HP Ratio)")
                    abilityDiv.appendChild(maxEnemyMaxHPRatioText)
                  }
                  if (damage["maxEnemyMaxHPRatioPer100BonusAD"]) {
                    var minEnemyMaxHPRatioValue = JSON.stringify(damage["maxEnemyMaxHPRatioPer100BonusAD"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minEnemyMaxHPRatioText = document.createTextNode(" (+" + minEnemyMaxHPRatioValue + " Enemy Max HP Ratio per 100 Bonus AD)")
                    abilityDiv.appendChild(minEnemyMaxHPRatioText)
                  }
                  if (damage["maxEnemyMaxHPRatioPer100AP"]) {
                    var maxEnemyMaxHPRatioValue = JSON.stringify(damage["maxEnemyMaxHPRatioPer100AP"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxEnemyMaxHPRatioText = document.createTextNode(" (+" + maxEnemyMaxHPRatioValue + " Enemy Max HP Ratio Per 100 AP)")
                    abilityDiv.appendChild(maxEnemyMaxHPRatioText)
                  }
                  if (damage["maxEnemyCurrentHPRatio"]) {
                    var currentHPRatioValue = JSON.stringify(damage["maxEnemyCurrentHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var currentHPRatioText = document.createTextNode(" (+" + currentHPRatioValue + " Enemy Current HP Ratio)")
                    abilityDiv.appendChild(currentHPRatioText)
                  }
                  if (damage["maxEnemyCurrentHPRatioPer100AP"]) {
                    var currentHPRatioValue = JSON.stringify(damage["maxEnemyCurrentHPRatioPer100AP"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var currentHPRatioText = document.createTextNode(" (+" + currentHPRatioValue + " Enemy Current HP Ratio Per 100 AP)")
                    abilityDiv.appendChild(currentHPRatioText)
                  }
                  if (damage["maxEnemyMissingHPRatio"]) {
                    var enemyMissingHPRatioValue = JSON.stringify(damage["maxEnemyMissingHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var enemyMissingHPRatioText = document.createTextNode(" (+" + enemyMissingHPRatioValue + " Enemy Missing HP Ratio)")
                    abilityDiv.appendChild(enemyMissingHPRatioText)
                  };  
                  if (damage["maxEnemyBonusHPRatio"]) {
                    var HPRatioValue = JSON.stringify(damage["maxEnemyBonusHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var HPRatioText = document.createTextNode(" (+" + HPRatioValue + " Enemy Bonus HP Ratio)")
                    abilityDiv.appendChild(HPRatioText)
                  }
                };

                if (damage["evolveMaxDmg"]) {
                  singleBreak();
                  var evolveU = document.createElement('u');
                  evolveU.innerText = 'Evolve Max Damage';
                  abilityDiv.appendChild(evolveU);
                  var evolveDmg = document.createTextNode(' - ' + JSON.stringify(damage["evolveMaxDmg"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(evolveDmg);
                }
                if (damage["evolveMaxBonusADRatio"]) {
                  var evolveRatioValue = JSON.stringify(damage["evolveMaxBonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var evolveRatioText = document.createTextNode(" (+" + evolveRatioValue + " Bonus AD Ratio)")
                  abilityDiv.appendChild(evolveRatioText)
                };
                if (damage["evolveMaxAPRatio"]) {
                  var evolveRatioValue = JSON.stringify(damage["evolveMaxAPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var evolveRatioText = document.createTextNode(" (+" + evolveRatioValue + " AP Ratio)")
                  abilityDiv.appendChild(evolveRatioText)
                };

                if (damage["system"] === 'stacking') {
                  singleBreak();
                  var stackU = document.createElement('u');
                  stackU.innerText = 'Damage per Stack';
                  abilityDiv.appendChild(stackU);
                  if (damage["dmgPerStack"]) {
                    var dmgText = document.createTextNode(' - ' + JSON.stringify(damage["dmgPerStack"]).replace(/,/g, ', '));
                    abilityDiv.appendChild(dmgText);
                  }
                  if (damage["ADRatioPerStack"]) {
                    var ADRatioValue = JSON.stringify(damage["ADRatioPerStack"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var ADRatioText = document.createTextNode(" (+" + ADRatioValue + " AD Ratio)")
                    abilityDiv.appendChild(ADRatioText)
                  }
                }

                if (damage["4thShotDmgRatio"]) {
                  singleBreak();
                  var dmgU = document.createElement('u');
                  dmgU.innerText = '4th Shot Damage Ratio';
                  abilityDiv.appendChild(dmgU);
                  var shotText = document.createTextNode(': ' + damage["4thShotDmgRatio"] 
                  + ' (' + damage["4thShotDmgRatioWithIE"] + ' with Infinity Edge)');
                  abilityDiv.appendChild(shotText);
                }

                if (damage["multiHitDmgRatio"]) {
                  singleBreak();
                  var multiHitText = document.createTextNode('Additional hits deal ' + damage["multiHitDmgRatio"]
                  + ' damage ratio.');
                  abilityDiv.appendChild(multiHitText);
                }

                if (damage["minMinDmg"]) {
                  singleBreak();
                  var minDmgU = document.createElement('u');
                  minDmgU.innerText = 'Minimum Damage';
                  abilityDiv.appendChild(minDmgU);
                  var minDmgText = document.createTextNode(': ' + JSON.stringify(damage["minMinDmg"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(minDmgText);
                }

                if (damage["minCritADRatio"]) {
                  singleBreak();
                  var critU = document.createElement('u');
                  critU.innerText = 'Crit Bonus Damage';
                  abilityDiv.appendChild(critU);
                  var critText = document.createTextNode(': Min - ' + damage["minCritADRatio"] + ' AD Ratio');
                  abilityDiv.appendChild(critText);
                  if (damage["minCritADRatioWithIE"]) {
                    var IEText = document.createTextNode(' (' + damage["minCritADRatioWithIE"] + ' AD Ratio with Infinity Edge)');
                    abilityDiv.appendChild(IEText);
                  };
                  var br2 = document.createElement('br');
                  abilityDiv.appendChild(br2);
                  var maxCritText = document.createTextNode('Max - ' + damage["maxCritADRatio"] + ' AD Ratio');
                  abilityDiv.appendChild(maxCritText);
                  if (damage["maxCritADRatioWithIE"]) {
                    var IEText = document.createTextNode(' (' + damage["maxCritADRatioWithIE"] + ' AD Ratio with Infinity Edge)');
                    abilityDiv.appendChild(IEText);
                  };
                }

                if (damage["empowerBonus"]) {
                  var empPath = damage["empowerBonus"];
                  singleBreak();
                  var empU = document.createElement('u');
                  empU.innerText = 'Empower Bonus Damage';
                  abilityDiv.appendChild(empU);
                  if (empPath["dmgByLvl"]) {
                    var dmgByLvlText = document.createTextNode(' - [' + empPath["dmgByLvl"][0] 
                    + " to " + empPath["dmgByLvl"][17] + ", based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var dmgByLvlText2 = document.createTextNode(': ' + empPath["dmgByLvl"][champLevel] + '] ')
                    abilityDiv.appendChild(dmgByLvlText);
                    abilityDiv.appendChild(currentlyU);
                    abilityDiv.appendChild(dmgByLvlText2)
                  }
                  if (empPath["bonusADRatio"]) {
                    var bonusADRatioValue = JSON.stringify(empPath["bonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var bonusADRatioText = document.createTextNode(" (+" + bonusADRatioValue + " Bonus AD Ratio)")
                    abilityDiv.appendChild(bonusADRatioText)
                  }
                  if (empPath["system"] === 'minMax') {
                    var minU = document.createTextNode(': Min - ');
                    abilityDiv.appendChild(minU)
                    if (empPath["minDmgByLvl"]) {
                      var dmgByLvlText = document.createTextNode(' [' + empPath["minDmgByLvl"][0] + " to " 
                      + empPath["minDmgByLvl"][17] + ", based on lvl. ");
                      var currentlyU = document.createElement('u');
                      currentlyU.innerText = "Currently";
                      var dmgByLvlText2 = document.createTextNode(': ' + empPath["minDmgByLvl"][champLevel] + '] ')
                      abilityDiv.appendChild(dmgByLvlText);
                      abilityDiv.appendChild(currentlyU);
                      abilityDiv.appendChild(dmgByLvlText2)        
                    }
                    if (empPath["minAPRatio"]) {
                      var ratioText = document.createTextNode(' (+' + empPath["minAPRatio"] + ' AP Ratio)');
                      abilityDiv.appendChild(ratioText);
                    }
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var maxU = document.createTextNode('Max - ');
                    abilityDiv.appendChild(maxU)
                    if (empPath["maxDmgByLvl"]) {
                      var dmgByLvlText = document.createTextNode(' [' + empPath["maxDmgByLvl"][0] + " to " 
                      + empPath["maxDmgByLvl"][17] + ", based on lvl. ");
                      var currentlyU = document.createElement('u');
                      currentlyU.innerText = "Currently";
                      var dmgByLvlText2 = document.createTextNode(': ' + empPath["maxDmgByLvl"][champLevel] + '] ')
                      abilityDiv.appendChild(dmgByLvlText);
                      abilityDiv.appendChild(currentlyU);
                      abilityDiv.appendChild(dmgByLvlText2)        
                    }
                    if (empPath["maxAPRatio"]) {
                      var ratioText = document.createTextNode(' (+' + empPath["maxAPRatio"] + ' AP Ratio)');
                      abilityDiv.appendChild(ratioText);
                    }
                  }
                }

                if (damage["system"] === "2Part" || damage["system"] === "3Part") {
                  function partDamageMap(partNumber, i, array) {
                    if (!champLeftFile[ability]['damage'][partNumber]) {
                        return;
                    }
                    var part = champLeftFile[ability]['damage'][partNumber]
                    var partNumberU = document.createElement('u')
                    partNumberU.innerText = partNumber[0].toUpperCase() + partNumber.slice(1, 4) + ' '  + partNumber[4]  
                    abilityDiv.appendChild(partNumberU)
                    var partNumberText = ': '
                    var partText = document.createTextNode(partNumberText)
                    abilityDiv.appendChild(partText)

                    if (part["type"]) {
                      var dmgType = part["type"];
                      if (dmgType === 'phys') {
                        dmgType = 'Physical'
                      } else {
                        dmgType = dmgType[0].toUpperCase() + dmgType.slice(1)
                      }
                      var dmgTypeText = document.createTextNode(dmgType + " Damage: ");
                      if (part["postMitigation"] === 'magic') {
                        dmgTypeText.nodeValue = dmgType + ' Damage (part 1 damage, post-mitigation): ';
                      }
                      abilityDiv.appendChild(dmgTypeText);
                    };
                    if (part["dmg"]) {
                      var dmgArray = JSON.stringify(part["dmg"]).replace(/,/g, ', ')
                      var dmgArrayText = document.createTextNode(dmgArray);
                      abilityDiv.appendChild(dmgArrayText);
                    };
                    if (part["dmgByLvl"]) {
                      var dmgByLvlText = document.createTextNode('[' + part["dmgByLvl"][0] + " to " + part["dmgByLvl"][17]
                      + ", based on lvl. ");
                      var currentlyU = document.createElement('u');
                      currentlyU.innerText = "Currently";
                      var dmgByLvlText2 = document.createTextNode(': ' + part["dmgByLvl"][champLevel] + '] ')
                      abilityDiv.appendChild(dmgByLvlText);
                      abilityDiv.appendChild(currentlyU);
                      abilityDiv.appendChild(dmgByLvlText2)
                    };
                    if (part["APRatio"]) {
                      var APRatioText = document.createTextNode(" (+" + part["APRatio"] + " AP Ratio)")
                      abilityDiv.appendChild(APRatioText)
                    };
                    if (part["ADRatio"]) {
                      var ADRatioValue = JSON.stringify(part["ADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                      var ADRatioText = document.createTextNode(" (+" + ADRatioValue + " AD Ratio)")
                      abilityDiv.appendChild(ADRatioText)
                    };
                    if (part["bonusADRatio"]) {
                      var bonusADRatioValue = JSON.stringify(part["bonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                      var bonusADRatioText = document.createTextNode(" (+" + bonusADRatioValue + " Bonus AD Ratio)")
                      abilityDiv.appendChild(bonusADRatioText)
                    };
                    if (part["enemyMaxHPRatio"]) {
                      var enemyMaxHPRatioValue = JSON.stringify(part["enemyMaxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                      var enemyMaxHPRatioText = document.createTextNode(" (+" + enemyMaxHPRatioValue + " Enemy Max HP Ratio)")
                      abilityDiv.appendChild(enemyMaxHPRatioText)
                    };
                    if (part["maxHPRatio"]) {
                      var maxHPRatioValue = JSON.stringify(part["maxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                      var maxHPRatioText = document.createTextNode(" (+" + maxHPRatioValue + " Max HP Ratio)")
                      abilityDiv.appendChild(maxHPRatioText)
                    };
                    if (part["enemyCurrentHPRatio"]) {
                      var enemyCurrentHPRatioValue = JSON.stringify(part["enemyCurrentHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                      var enemyCurrentHPRatioText = document.createTextNode(" (+" + enemyCurrentHPRatioValue + " Enemy Current HP Ratio)")
                      abilityDiv.appendChild(enemyCurrentHPRatioText)
                    };
                    if (part["part1RatioFormula"]) {
                      var formulaText = document.createTextNode('Formula: ' + part["part1RatioFormula"]);
                      abilityDiv.appendChild(formulaText);
                    }

                    if (part["system"] === "minMax" ) {
                      var minU = document.createTextNode('Min: ');
                      abilityDiv.appendChild(minU)
                      if (part["minDmg"]) {
                        var text = document.createTextNode(JSON.stringify(part["minDmg"]).replace(/,/g, ', '))
                        abilityDiv.appendChild(text)
                      }
                      if (part["minAPRatio"]) {
                        var value = JSON.stringify(part["minAPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                        var text = document.createTextNode(" (+" + value + " AP Ratio)")
                        abilityDiv.appendChild(text)
                      }
                      if (part["minADRatio"]) {
                        var value = JSON.stringify(part["minADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                        var text = document.createTextNode(" (+" + value + " AD Ratio)")
                        abilityDiv.appendChild(text)
                      }
                      if (part["minBonusADRatio"]) {
                        var value = JSON.stringify(part["minBonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                        var text = document.createTextNode(" (+" + value + " Bonus AD Ratio)")
                        abilityDiv.appendChild(text)
                      }
                      if (part["minBonusADPerAttackSpeedRatio"]) {
                        var text = document.createTextNode(' (+' + part["minBonusADPerAttackSpeedRatio"]
                        + ' Bonus AD Ratio per Attack Speed)');
                        abilityDiv.appendChild(text);
                      }
                      if (part["minEnemyMaxHPRatio"]) {
                        var ratioText = document.createTextNode(' (' + JSON.stringify(part["minEnemyMaxHPRatio"])
                        .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Enemy Max HP Ratio)');
                        abilityDiv.appendChild(ratioText);
                      }
                      if (part["minEnemyMaxHPRatioPer100AP"]) {
                        var ratioText = document.createTextNode(' (+' + part["minEnemyMaxHPRatioPer100AP"]
                        + ' Enemy Max HP Ratio per 100 AP)');
                        abilityDiv.appendChild(ratioText);
                      }
                      if (part["minEnemyMissingHPRatioByLvl"]) {
                        var text = document.createTextNode('(' + part["minEnemyMissingHPRatioByLvl"][0] + " to " 
                        + part["minEnemyMissingHPRatioByLvl"][17] + " Enemy Missing HP Ratio, based on lvl. ");
                        var currentlyU = document.createElement('u');
                        currentlyU.innerText = "Currently";
                        var text2 = document.createTextNode(': ' + part["minEnemyMissingHPRatioByLvl"][champLevel] + ')')
                        abilityDiv.appendChild(text);
                        abilityDiv.appendChild(currentlyU);
                        abilityDiv.appendChild(text2)
                      }
                      var br = document.createElement("br");
                      abilityDiv.appendChild(br);
                      var maxU = document.createTextNode('Max: ');
                      abilityDiv.appendChild(maxU)
                      if (part["maxDmg"]) {
                        var maxDmgArray = JSON.stringify(part["maxDmg"]).replace(/,/g, ', ')
                        var maxDmgText = document.createTextNode(maxDmgArray)
                        abilityDiv.appendChild(maxDmgText)
                      }
                      if (part["maxAPRatio"]) {
                        var maxAPRatioValue = JSON.stringify(part["maxAPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                        var maxAPRatioText = document.createTextNode(" (+" + maxAPRatioValue + " AP Ratio)")
                        abilityDiv.appendChild(maxAPRatioText)
                      }
                      if (part["maxADRatio"]) {
                        var maxADRatioValue = JSON.stringify(part["maxADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                        var maxADRatioText = document.createTextNode(" (+" + maxADRatioValue + " AD Ratio)")
                        abilityDiv.appendChild(maxADRatioText)
                      }
                      if (part["maxBonusADRatio"]) {
                        var maxBonusADRatioValue = JSON.stringify(part["maxBonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                        var maxBonusADRatioText = document.createTextNode(" (+" + maxBonusADRatioValue + " Bonus AD Ratio)")
                        abilityDiv.appendChild(maxBonusADRatioText)
                      }
                      if (part["maxBonusADPerAttackSpeedRatio"]) {
                        var text = document.createTextNode(' (+' + part["maxBonusADPerAttackSpeedRatio"]
                        + ' Bonus AD Ratio per Attack Speed)');
                        abilityDiv.appendChild(text);
                      }
                      if (part["maxEnemyMaxHPRatio"]) {
                        var ratioText = document.createTextNode(' (' + JSON.stringify(part["maxEnemyMaxHPRatio"])
                        .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Enemy Max HP Ratio)');
                        abilityDiv.appendChild(ratioText);
                      }
                      if (part["maxEnemyMaxHPRatioPer100AP"]) {
                        var ratioText = document.createTextNode(' (+' + part["maxEnemyMaxHPRatioPer100AP"]
                        + ' Enemy Max HP Ratio per 100 AP)');
                        abilityDiv.appendChild(ratioText);
                      }
                      if (part["maxEnemyMissingHPRatioByLvl"]) {
                        var byLvlText = document.createTextNode('(' + part["maxEnemyMissingHPRatioByLvl"][0] + " to " 
                        + part["maxEnemyMissingHPRatioByLvl"][17] + " Enemy Missing HP Ratio, based on lvl. ");
                        var currentlyU = document.createElement('u');
                        currentlyU.innerText = "Currently";
                        var byLvlText2 = document.createTextNode(': ' + part["maxEnemyMissingHPRatioByLvl"][champLevel] + ')')
                        abilityDiv.appendChild(byLvlText);
                        abilityDiv.appendChild(currentlyU);
                        abilityDiv.appendChild(byLvlText2)
                      }
                    }
                    if (part["bonusDmgRatioPerCritChance"]) {
                      var br = document.createElement('br');
                      abilityDiv.appendChild(br);
                      var ratioU = document.createElement('u');
                      ratioU.innerText = 'Bonus Damage Ratio';
                      abilityDiv.appendChild(ratioU);
                      var ratioText = document.createTextNode(': (' + part["bonusDmgRatioPerCritChance"] + ' per Crit Chance)');
                      abilityDiv.appendChild(ratioText);
                    }
                    var next = array[i+1]
                    if (champLeftFile[ability]['damage'][next]) {
                      doubleBreak();
                    }
                  }
                  this.partNumberArray.map(partDamageMap)
                }
                if (damage["storedDmg"]) {
                  singleBreak();
                  var storedU = document.createElement('u');
                  storedU.innerText = 'Stored Damage Ratio';
                  abilityDiv.appendChild(storedU);
                  var storedText = document.createTextNode(': ' + JSON.stringify(damage["storedDmg"]["dmgRatio"]).replace(/,/g, ', ')  
                  + ' of pre-mitigated damage dealt over the past ' + damage["storedDmg"]["duration"] + ' seconds.');
                  abilityDiv.appendChild(storedText);
                }
                if (damage["duration"]) {
                  var durText = document.createTextNode(' over ' + damage["duration"]
                  + ' seconds.');
                  abilityDiv.appendChild(durText);
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
              }

              /*if (champLeftFile[ability]["autoSplash"]) {
                var splashPath = champLeftFile[ability]["autoSplash"];
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

              if (champLeftFile[ability]["tickDamage"]) {
                var tickDamage = champLeftFile[ability]["tickDamage"]
                var dmgTypeBold = document.createElement('b')
                if (tickDamage["type"]) {
                  var dmgType = tickDamage["type"];
                  if (dmgType === 'physMagic') {
                    dmgTypeBold.innerText = 'Half Physical, Half Magic Damage Over Time: '
                    abilityDiv.appendChild(dmgTypeBold);
                  } else {
                    if (dmgType === 'phys') {
                      dmgType = 'Physical'
                    } else {
                      dmgType = dmgType[0].toUpperCase() + dmgType.slice(1)
                    }
                    dmgTypeBold.innerText = dmgType + " Damage Over Time: "
                    abilityDiv.appendChild(dmgTypeBold);
                  }
                };
                if (tickDamage["dmg"]) {
                  var dmgArray = JSON.stringify(tickDamage["dmg"]).replace(/,/g, ', ')
                  var dmgArrayText = document.createTextNode(dmgArray);
                  abilityDiv.appendChild(dmgArrayText);
                };
                if (tickDamage["dmgByLvl"]) {
                  var dmgByLvlText = document.createTextNode('[' + tickDamage["dmgByLvl"][0] + " to " + tickDamage["dmgByLvl"][17]
                  + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var dmgByLvlText2 = document.createTextNode(': ' + tickDamage["dmgByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(dmgByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(dmgByLvlText2)
                };
                if (tickDamage["APRatio"]) {
                  var APRatioText = document.createTextNode(" (+" + tickDamage["APRatio"] + " AP Ratio)")
                  abilityDiv.appendChild(APRatioText)
                };
                if (tickDamage["ADRatio"]) {
                  var ADRatioValue = JSON.stringify(tickDamage["ADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var ADRatioText = document.createTextNode(" (+" + ADRatioValue + " AD Ratio)")
                  abilityDiv.appendChild(ADRatioText)
                };
                if (tickDamage["bonusADRatio"]) {
                  var bonusADRatioValue = JSON.stringify(tickDamage["bonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var bonusADRatioText = document.createTextNode(" (+" + bonusADRatioValue + " Bonus AD Ratio)")
                  abilityDiv.appendChild(bonusADRatioText)
                };
                if (tickDamage["enemyMaxHPRatio"]) {
                  var enemyMaxHPRatioValue = JSON.stringify(tickDamage["enemyMaxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyMaxHPRatioText = document.createTextNode(" (+" + enemyMaxHPRatioValue + " Enemy Max HP Ratio)")
                  abilityDiv.appendChild(enemyMaxHPRatioText)
                };
                if (tickDamage["enemyMaxHPRatioByLvl"]) {
                  var dmgByLvlText = document.createTextNode(' [+' + tickDamage["enemyMaxHPRatioByLvl"][0] + " to " 
                  + tickDamage["enemyMaxHPRatioByLvl"][17] + " Enemy Max HP Ratio, based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var dmgByLvlText2 = document.createTextNode(': ' + tickDamage["enemyMaxHPRatioByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(dmgByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(dmgByLvlText2)
                }
                if (tickDamage["enemyMaxHPRatioPer100AP"]) {
                  var enemyMaxHPRatioValue = JSON.stringify(tickDamage["enemyMaxHPRatioPer100AP"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyMaxHPRatioText = document.createTextNode(" (+" + enemyMaxHPRatioValue 
                  + " Enemy Max HP Ratio Per 100 AP)")
                  abilityDiv.appendChild(enemyMaxHPRatioText)
                };
                if (tickDamage["maxHPRatio"]) {
                  var maxHPRatioValue = JSON.stringify(tickDamage["maxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var maxHPRatioText = document.createTextNode(" (+" + maxHPRatioValue + " Max HP Ratio)")
                  abilityDiv.appendChild(maxHPRatioText)
                };
                if (tickDamage["bonusHPRatio"]) {
                  var HPRatioText = document.createTextNode(" (+" + tickDamage["bonusHPRatio"] + " Bonus HP Ratio)")
                  abilityDiv.appendChild(HPRatioText)
                }
                if (tickDamage["enemyCurrentHPRatio"]) {
                  var enemyCurrentHPRatioValue = JSON.stringify(tickDamage["enemyCurrentHPRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyCurrentHPRatioText = document.createTextNode(" (+" + enemyCurrentHPRatioValue 
                  + " Enemy Current HP Ratio)")
                  abilityDiv.appendChild(enemyCurrentHPRatioText)
                };
            
                if (tickDamage["system"] === "minMax" ) {
                  var minDmgU = document.createElement('u')
                  minDmgU.innerText = 'Min'
                  abilityDiv.appendChild(minDmgU)
                  var dash = document.createTextNode(' - ');
                  abilityDiv.appendChild(dash);
                  if (tickDamage["minDmg"]) {
                    var minDmgArray = JSON.stringify(tickDamage["minDmg"]).replace(/,/g, ', ')
                    var minDmgText = document.createTextNode(minDmgArray)
                    abilityDiv.appendChild(minDmgText)
                  }
                  if (tickDamage["minDmgByLvl"]) {
                    var dmgByLvlText = document.createTextNode(' [' + tickDamage["minDmgByLvl"][0] + " to " + tickDamage["minDmgByLvl"][17]
                    + ", based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var dmgByLvlText2 = document.createTextNode(': ' + tickDamage["minDmgByLvl"][champLevel] + '] ')
                    abilityDiv.appendChild(dmgByLvlText);
                    abilityDiv.appendChild(currentlyU);
                    abilityDiv.appendChild(dmgByLvlText2)
                  }
                  if (tickDamage["minAPRatio"]) {
                    var minAPRatioValue = JSON.stringify(tickDamage["minAPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minAPRatioText = document.createTextNode(" (+" + minAPRatioValue + " AP Ratio)")
                    abilityDiv.appendChild(minAPRatioText)
                  }
                  if (tickDamage["minADRatio"]) {
                    var minADRatioValue = JSON.stringify(tickDamage["minADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minADRatioText = document.createTextNode(" (+" + minADRatioValue + " AD Ratio)")
                    abilityDiv.appendChild(minADRatioText)
                  }
                  if (tickDamage["minBonusADRatio"]) {
                    var minBonusADRatioValue = JSON.stringify(tickDamage["minBonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minBonusADRatioText = document.createTextNode(" (+" + minBonusADRatioValue + " Bonus AD Ratio)")
                    abilityDiv.appendChild(minBonusADRatioText)
                  }
                  if (tickDamage["interval"] && tickDamage["ticks"]) {
                    var intervalText = document.createTextNode(' per ' + tickDamage["interval"] + ' sec, for ' + 
                      multiplyByTicksRounded2(tickDamage["interval"]) + ' seconds.')
                    abilityDiv.appendChild(intervalText)
                  }
                  if (tickDamage["ticks"] && tickDamage["duration"]) {
                    var intervalText = document.createTextNode(' per tick, ' + JSON.stringify(tickDamage["ticks"])
                      .replace(/,/g, ', ') + ' times over ' + tickDamage["duration"] + ' seconds.');
                    abilityDiv.appendChild(intervalText);
                  }
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var maxDmgU = document.createElement('u')
                  maxDmgU.innerText = 'Max'
                  abilityDiv.appendChild(maxDmgU)
                  var dash2 = document.createTextNode(' - ');
                  abilityDiv.appendChild(dash2);
                  if (tickDamage["maxDmg"]) {
                    var maxDmgArray = JSON.stringify(tickDamage["maxDmg"]).replace(/,/g, ', ')
                    var maxDmgText = document.createTextNode(maxDmgArray)
                    abilityDiv.appendChild(maxDmgText)
                  }
                  if (tickDamage["maxDmgByLvl"]) {
                    var dmgByLvlText = document.createTextNode(' [' + tickDamage["maxDmgByLvl"][0] + " to " 
                    + tickDamage["maxDmgByLvl"][17] + ", based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var dmgByLvlText2 = document.createTextNode(': ' + tickDamage["maxDmgByLvl"][champLevel] + '] ')
                    abilityDiv.appendChild(dmgByLvlText);
                    abilityDiv.appendChild(currentlyU);
                    abilityDiv.appendChild(dmgByLvlText2)
                  }
                  if (tickDamage["maxAPRatio"]) {
                    var maxAPRatioValue = JSON.stringify(tickDamage["maxAPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxAPRatioText = document.createTextNode(" (+" + maxAPRatioValue + " AP Ratio)")
                    abilityDiv.appendChild(maxAPRatioText)
                  }
                  if (tickDamage["maxADRatio"]) {
                    var maxADRatioValue = JSON.stringify(tickDamage["maxADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxADRatioText = document.createTextNode(" (+" + maxADRatioValue + " AD Ratio)")
                    abilityDiv.appendChild(maxADRatioText)
                  }
                  if (tickDamage["maxBonusADRatio"]) {
                    var maxBonusADRatioValue = JSON.stringify(tickDamage["maxBonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxBonusADRatioText = document.createTextNode(" (+" + maxBonusADRatioValue + " Bonus AD Ratio)")
                    abilityDiv.appendChild(maxBonusADRatioText)
                  }
                  if (tickDamage["ASForBonusTick"]) {
                    var intervalText = document.createTextNode(' per tick, over ' + tickDamage["duration"] + ' seconds.');
                    abilityDiv.appendChild(intervalText);
                    var br = document.createElement("br");
                    abilityDiv.appendChild(br);
                    var ticksB = document.createElement('u')
                    ticksB.innerText = 'Ticks'
                    abilityDiv.appendChild(ticksB);
                    var minTicksText = document.createTextNode(': ' + tickDamage["ticks"]);
                    abilityDiv.appendChild(minTicksText);
                    var bonusTickText = document.createTextNode(' (+1 tick per ' + tickDamage["ASForBonusTick"]
                    + ' Bonus Attack Speed Ratio)');
                    abilityDiv.appendChild(bonusTickText);
                  }
                };
                if (tickDamage["ticks"] && tickDamage["duration"] && tickDamage["system"] !== "minMax") {
                  var intervalText = document.createTextNode(' per tick, ' + JSON.stringify(tickDamage["ticks"])
                  .replace(/,/g, ', ') + ' times over ' + tickDamage["duration"] + ' seconds.');
                  abilityDiv.appendChild(intervalText);
                }
                if (tickDamage["interval"] && tickDamage["ticks"]) {
                  var intervalText = document.createTextNode(' per ' + tickDamage["interval"] + ' sec, for ' + 
                   multiplyByTicksRounded2(tickDamage["interval"]) + ' seconds.')
                  abilityDiv.appendChild(intervalText)
                };
                if (tickDamage["critDmg"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var critDmgU = document.createElement('u');
                  critDmgU.innerText = 'Crit Damage Ratio'
                  abilityDiv.appendChild(critDmgU);
                  var critDmgRatio = document.createTextNode(': ' + tickDamage["critDmg"]);
                  abilityDiv.appendChild(critDmgRatio);
                  if (tickDamage["critDmgWithIE"]) {
                    var IERatio = document.createTextNode(' (' + tickDamage["critDmgWithIE"] + ' with Infinity Edge)');
                    abilityDiv.appendChild(IERatio);
                  }
                };
                if (tickDamage["system"] === 'min') {
                  singleBreak();
                  var minDmgU = document.createElement('u')
                  minDmgU.innerText = 'Min'
                  abilityDiv.appendChild(minDmgU)
                  var minDmgText = document.createTextNode(" - " + JSON.stringify(tickDamage["minDmg"])
                  .replace(/,/g, ', '))
                  abilityDiv.appendChild(minDmgText)
                  if (tickDamage["interval"] && tickDamage["ticks"]) {
                    var intervalText = document.createTextNode(' per ' + tickDamage["interval"] + ' sec, for ' + 
                     multiplyByTicksRounded2(tickDamage["interval"]) + ' seconds.')
                    abilityDiv.appendChild(intervalText)
                  };
                }
                if (tickDamage["ticks"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var totalDmgB = document.createElement('b')
                  totalDmgB.innerText = 'Total: '
                  abilityDiv.appendChild(totalDmgB)
            
                  if (tickDamage["dmg"]) {
                    var dmgArray = JSON.stringify(tickDamage["dmg"].map(multiplyByTicks)).replace(/,/g, ', ').replace(/"/g,"")
                    var dmgArrayText = document.createTextNode(dmgArray);
                    abilityDiv.appendChild(dmgArrayText);
                  };
                  if (tickDamage["dmgByLvl"]) {
                    var dmgByLvlText = document.createTextNode('[' + multiplyByTicks(tickDamage["dmgByLvl"][0]) + " to " 
                    + multiplyByTicks(tickDamage["dmgByLvl"][17]) + ", based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var dmgByLvlText2 = document.createTextNode(': ' + multiplyByTicks(tickDamage["dmgByLvl"][champLevel]) + '] ')
                    abilityDiv.appendChild(dmgByLvlText);
                    abilityDiv.appendChild(currentlyU);
                    abilityDiv.appendChild(dmgByLvlText2)
                  };
                  if (tickDamage["APRatio"]) {
                    var APRatioText = document.createTextNode(" (+" + JSON.stringify(multiplyByTicksRounded2(tickDamage["APRatio"]))
                      .replace(/,/g, ', ').replace(/"/g,"").replace(/^\[|]$/g, '') + " AP Ratio)")
                    abilityDiv.appendChild(APRatioText)
                  };
                  if (tickDamage["ADRatio"]) {
                    var ADRatioText = document.createTextNode(" (+" + JSON.stringify(multiplyByTicksRounded2(tickDamage["ADRatio"]))
                    .replace(/,/g, ', ').replace(/"/g,"").replace(/^\[|]$/g, '') + " AD Ratio)")
                    abilityDiv.appendChild(ADRatioText)
                  };
                  if (tickDamage["bonusADRatio"]) {
                    var bonusADRatioText = document.createTextNode(" (+" + multiplyByTicksRounded2(tickDamage["bonusADRatio"]) + " Bonus AD Ratio)")
                    abilityDiv.appendChild(bonusADRatioText)
                  };
                  if (tickDamage["enemyMaxHPRatio"]) {
                    var enemyMaxHPRatioText = document.createTextNode(" (+" + JSON.stringify(multiplyByTicksRounded2(tickDamage["enemyMaxHPRatio"]))
                    .replace(/,/g, ', ').replace(/"/g,"").replace(/^\[|]$/g, '') + " Enemy Max HP Ratio)")
                    abilityDiv.appendChild(enemyMaxHPRatioText)
                  };
                  if (tickDamage["maxHPRatio"]) {
                    var maxHPRatioText = document.createTextNode(" (+" + multiplyByTicksRounded2(tickDamage["maxHPRatio"]) + " Max HP Ratio)")
                    abilityDiv.appendChild(maxHPRatioText)
                  };
                  if (tickDamage["bonusHPRatio"]) {
                    var ratioText = document.createTextNode(" (+" + multiplyByTicksRounded2(tickDamage["bonusHPRatio"]) + " Bonus HP Ratio)")
                    abilityDiv.appendChild(ratioText)
                  };
                  if (tickDamage["enemyCurrentHPRatio"]) {
                    var enemyCurrentHPRatioText = document.createTextNode(" (+" + multiplyByTicksRounded2(tickDamage["enemyCurrentHPRatio"]) 
                    + " Enemy Current HP Ratio)")
                    abilityDiv.appendChild(enemyCurrentHPRatioText)
                  };
                  if (tickDamage["enemyMaxHPRatioPer100AP"]) {
                    var enemyMaxHPRatioText = document.createTextNode(" (+" + multiplyByTicksRounded2(tickDamage["enemyMaxHPRatioPer100AP"]) 
                    + " Enemy Max HP Ratio Per 100 AP)")
                    abilityDiv.appendChild(enemyMaxHPRatioText)
                  }
                  if (tickDamage["system"] === 'min') {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var minDmgU = document.createElement('u')
                    minDmgU.innerText = 'Min'
                    abilityDiv.appendChild(minDmgU)
                    var minDmgText = document.createTextNode(" - " + JSON.stringify(tickDamage["minDmg"]
                    .map(multiplyByTicks)).replace(/,/g, ', ').replace(/"/g,""))
                    abilityDiv.appendChild(minDmgText)
                  }
                  if (tickDamage["system"] === "minMax" ) {
                    var minDmgU = document.createElement('u')
                    minDmgU.innerText = 'Min'
                    abilityDiv.appendChild(minDmgU)
                    if (tickDamage["minDmg"]) {
                      var minDmgArray = JSON.stringify(tickDamage["minDmg"].map(multiplyByTicks)).replace(/,/g, ', ').replace(/"/g,"")
                      if (tickDamage["minDmgByLvl"]) {
                        var currentLvlDmg = multiplyByTicks(tickDamage["minDmgByLvl"][champLevel])
                        minDmgArray = JSON.stringify(tickDamage["minDmg"].map(multiplyByTicks)
                        .map(x => (Number(x) + Number(currentLvlDmg)))).replace(/,/g, ', ').replace(/"/g,"")
                      }
                      var minDmgText = document.createTextNode(" - " + minDmgArray)
                      abilityDiv.appendChild(minDmgText)
                    }
                    if (tickDamage["minAPRatio"]) {
                      var minAPRatioValue = JSON.stringify(multiplyByTicksRounded2(tickDamage["minAPRatio"]))
                      .replace(/,/g, ', ').replace(/"/g,"").replace(/^\[|]$/g, '')
                      var minAPRatioText = document.createTextNode(" (+" + minAPRatioValue + " AP Ratio)")
                      abilityDiv.appendChild(minAPRatioText)
                    }
                    if (tickDamage["minADRatio"]) {
                      var minADRatioValue = JSON.stringify(multiplyByTicksRounded2(tickDamage["minADRatio"]))
                      .replace(/,/g, ', ').replace(/"/g,"").replace(/^\[|]$/g, '')
                      var minADRatioText = document.createTextNode(" (+" + minADRatioValue + " AD Ratio)")
                      abilityDiv.appendChild(minADRatioText)
                    }
                    if (tickDamage["minBonusADRatio"]) {
                      var minBonusADRatioValue = JSON.stringify(multiplyByTicksRounded2(tickDamage["minBonusADRatio"]))
                      .replace(/,/g, ', ').replace(/"/g,"").replace(/^\[|]$/g, '')
                      var minBonusADRatioText = document.createTextNode(" (+" + minBonusADRatioValue + " Bonus AD Ratio)")
                      abilityDiv.appendChild(minBonusADRatioText)
                    }
                    var br = document.createElement("br");
                    abilityDiv.appendChild(br);
                    var maxDmgU = document.createElement('u')
                    maxDmgU.innerText = 'Max'
                    abilityDiv.appendChild(maxDmgU)
                    if (tickDamage["maxDmg"]) {
                      var maxDmgArray = JSON.stringify(tickDamage["maxDmg"].map(multiplyByTicks)).replace(/,/g, ', ').replace(/"/g,"")
                      if (tickDamage["maxDmgByLvl"]) {
                        var currentLvlDmg = multiplyByTicks(tickDamage["maxDmgByLvl"][champLevel])
                        maxDmgArray = JSON.stringify(tickDamage["maxDmg"].map(multiplyByTicks).map(x => 
                          (Number(x) + Number(currentLvlDmg)))).replace(/,/g, ', ').replace(/"/g,"")
                      }
                      var maxDmgText = document.createTextNode(" - " + maxDmgArray)
                      abilityDiv.appendChild(maxDmgText)
                    }
                    if (tickDamage["maxAPRatio"]) {
                      var maxAPRatioValue = JSON.stringify(multiplyByTicksRounded2(tickDamage["maxAPRatio"]))
                        .replace(/,/g, ', ').replace(/^\[|]$/g, '').replace(/"/g,"");
                      var maxAPRatioText = document.createTextNode(" (+" + maxAPRatioValue + " AP Ratio)")
                      abilityDiv.appendChild(maxAPRatioText)
                    }
                    if (tickDamage["maxADRatio"]) {
                      var maxADRatioValue = JSON.stringify(multiplyByTicksRounded2(tickDamage["maxADRatio"]))
                      .replace(/,/g, ', ').replace(/^\[|]$/g, '').replace(/"/g,"");
                      var maxADRatioText = document.createTextNode(" (+" + maxADRatioValue + " AD Ratio)")
                      abilityDiv.appendChild(maxADRatioText)
                    }
                    if (tickDamage["maxBonusADRatio"]) {
                      var maxBonusADRatioValue = JSON.stringify(multiplyByTicksRounded2(tickDamage["maxBonusADRatio"]))
                      .replace(/,/g, ', ').replace(/^\[|]$/g, '').replace(/"/g,"");
                      var maxBonusADRatioText = document.createTextNode(" (+" + maxBonusADRatioValue + " Bonus AD Ratio)")
                      abilityDiv.appendChild(maxBonusADRatioText)
                    }
                  };
                }
                if (tickDamage["interval"] && !tickDamage["ticks"]) {
                  var intervalText = document.createTextNode(' per ' + tickDamage["interval"] + ' sec.')
                  abilityDiv.appendChild(intervalText)
                }
                if (tickDamage["part1"]) {
                  var part1U = document.createElement('u');
                  part1U.innerText = 'Part 1';
                  abilityDiv.appendChild(part1U);
                  if (tickDamage["part1"]["dmg"]) {
                    var dmgArray = JSON.stringify(tickDamage["part1"]["dmg"]).replace(/,/g, ', ')
                    var dmgArrayText = document.createTextNode(' - ' + dmgArray);
                    abilityDiv.appendChild(dmgArrayText);
                  };
                  if (tickDamage["part1"]["APRatio"]) {
                    var APRatioText = document.createTextNode(" (+" + tickDamage["part1"]["APRatio"] + " AP Ratio)")
                    abilityDiv.appendChild(APRatioText)
                  };
                  if (tickDamage["part1"]["interval"] && tickDamage["part1"]["ticks"]) {
                    var intervalText = document.createTextNode(' per ' + tickDamage["part1"]["interval"] + ' sec, for ' + 
                      tickDamage["part1"]["interval"] * tickDamage["part1"]["ticks"] + ' seconds.')
                    abilityDiv.appendChild(intervalText)
                  }
                  singleBreak();
                  var totalU = document.createElement('u');
                  totalU.innerText = 'Total';
                  abilityDiv.appendChild(totalU);
                  if (tickDamage["part1"]["dmg"]) {
                    var dmgArrayText = document.createTextNode(' - ' + JSON.stringify(tickDamage["part1"]["dmg"]
                    .map(x => x * tickDamage["part1"]["ticks"])).replace(/,/g, ', ') );
                    abilityDiv.appendChild(dmgArrayText);
                  };
                  if (tickDamage["part1"]["APRatio"]) {
                    var APText = document.createTextNode(' (+' +  tickDamage["part1"]["ticks"]
                    * tickDamage["part1"]["APRatio"] + ' AP Ratio)');
                    abilityDiv.appendChild(APText);
                  }
                  doubleBreak();
                  var part2U = document.createElement('u');
                  part2U.innerText = 'Part 2';
                  abilityDiv.appendChild(part2U);
                  if (tickDamage["part2"]["enemyMaxHPRatio"]) {
                    var HPText = document.createTextNode(' - (' +  JSON.stringify(tickDamage["part2"]
                    ["enemyMaxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Enemy Max HP Ratio)');
                    abilityDiv.appendChild(HPText);
                  }
                  if (tickDamage["part2"]["enemyMaxHPRatioPer100AP"]) {
                    var HPText = document.createTextNode(' (+' +  tickDamage["part2"]["enemyMaxHPRatioPer100AP"] 
                    + ' Enemy Max HP Ratio per 100 AP)');
                    abilityDiv.appendChild(HPText);
                  }
                  if (tickDamage["part2"]["interval"] && tickDamage["part2"]["ticks"]) {
                    var intervalText = document.createTextNode(' per ' + tickDamage["part2"]["interval"] + ' sec, for ' + 
                      tickDamage["part2"]["interval"] * tickDamage["part2"]["ticks"] + ' seconds.')
                    abilityDiv.appendChild(intervalText)
                  }
                  var br2 = document.createElement('br');
                  abilityDiv.appendChild(br2);
                  var totalU2 = document.createElement('u');
                  totalU2.innerText = 'Total';
                  abilityDiv.appendChild(totalU2);
                  if (tickDamage["part2"]["enemyMaxHPRatio"]) {
                    var HPText = document.createTextNode(' - (' +  JSON.stringify(tickDamage["part2"]["enemyMaxHPRatio"]
                    .map(x => x*tickDamage["part2"]["ticks"])).replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Enemy Max HP Ratio)');
                    abilityDiv.appendChild(HPText);
                  }
                  if (tickDamage["part2"]["enemyMaxHPRatioPer100AP"]) {
                    var HPText = document.createTextNode(' (+' +  tickDamage["part2"]["enemyMaxHPRatioPer100AP"] 
                    * tickDamage["part2"]["ticks"] + ' Enemy Max HP Ratio per 100 AP)');
                    abilityDiv.appendChild(HPText);
                  }
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["specialDelivery"]) {

                var tickDamage = champLeftFile[ability]["specialDelivery"]["tickDamage"]
                var specialDeliveryBold = document.createElement('b')
                specialDeliveryBold.innerText = dmgType + " Special Delivery: "
                abilityDiv.appendChild(specialDeliveryBold);

                var dmgByLvlText = document.createTextNode('[' + tickDamage["dmgByLvl"][0] + " to " + tickDamage["dmgByLvl"][17]
                + ", based on lvl. ");
                var currentlyU = document.createElement('u');
                currentlyU.innerText = "Currently";
                var dmgByLvlText2 = document.createTextNode(': ' + tickDamage["dmgByLvl"][champLevel] + '] ')
                abilityDiv.appendChild(dmgByLvlText);
                abilityDiv.appendChild(currentlyU);
                abilityDiv.appendChild(dmgByLvlText2)

                var bonusADRatioText = document.createTextNode(" (+" + tickDamage["bonusADRatio"] + " Bonus AD Ratio)")
                abilityDiv.appendChild(bonusADRatioText)

                var APRatioText = document.createTextNode(" (+" + tickDamage["APRatio"] + " AP Ratio)")
                abilityDiv.appendChild(APRatioText)

                var intervalText = document.createTextNode(' per ' + tickDamage["interval"] + ' sec, for ' + 
                multiplyByTicksRounded2(tickDamage["interval"])   + ' seconds.')
                abilityDiv.appendChild(intervalText)
                var br = document.createElement("br");
                abilityDiv.appendChild(br);
                var totalDmgU = document.createElement('u')
                totalDmgU.innerText = 'Total Damage'
                abilityDiv.appendChild(totalDmgU)
                var colonSpace = document.createTextNode(': ')
                abilityDiv.appendChild(colonSpace)

                var totalDmgByLvlText = document.createTextNode('[' + multiplyByTicks(tickDamage["dmgByLvl"][0]) + " to " 
                + multiplyByTicks(tickDamage["dmgByLvl"][17]) + ", based on lvl. ");
                var currentlyU = document.createElement('u');
                currentlyU.innerText = "Currently";
                var totalDmgByLvlText2 = document.createTextNode(': ' + multiplyByTicks(tickDamage["dmgByLvl"][champLevel]) + '] ')
                abilityDiv.appendChild(totalDmgByLvlText);
                abilityDiv.appendChild(currentlyU);
                abilityDiv.appendChild(totalDmgByLvlText2)

                var totalBonusADRatioText = document.createTextNode(" (+" + multiplyByTicksRounded2(tickDamage["bonusADRatio"]) + " Bonus AD Ratio)")
                abilityDiv.appendChild(totalBonusADRatioText)

                var totalAPRatioText = document.createTextNode(" (+" + multiplyByTicksRounded2(tickDamage["APRatio"])+ " AP Ratio)")
                abilityDiv.appendChild(totalAPRatioText)
              
                doubleBreak();
              }

              if (champLeftFile[ability]["passivePermanent"]) {
                var passivePath = champLeftFile[ability]["passivePermanent"]
                var passiveBold = document.createElement('b');
                passiveBold.innerText = 'Passive: ';
                abilityDiv.appendChild(passiveBold);
                if (passivePath["bonusAttackDamage"]) {
                  var adU = document.createElement('u');
                  adU.innerText = 'Bonus Attack Damage'
                  abilityDiv.appendChild(adU)
                  if (passivePath["bonusAttackDamage"]["ADRatioByLvl"]) {
                    var ADRatioByLvlText = document.createTextNode(' - [' + passivePath["bonusAttackDamage"]["ADRatioByLvl"][0] 
                    + " to " + passivePath["bonusAttackDamage"]["ADRatioByLvl"][17] + " AD Ratio, based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var ADRatioByLvlText2 = document.createTextNode(': ' + passivePath["bonusAttackDamage"]
                    ["ADRatioByLvl"][champLevel] + '] ')
                    abilityDiv.appendChild(ADRatioByLvlText);
                    abilityDiv.appendChild(currentlyU);
                    abilityDiv.appendChild(ADRatioByLvlText2)
                  }
                  if (passivePath["bonusAttackDamage"]["bonusADRatio"]) {
                    var bonusADText = document.createTextNode(' (+' + JSON.stringify(passivePath["bonusAttackDamage"]
                    ["bonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Bonus AD Ratio)');
                    abilityDiv.appendChild(bonusADText);
                  }
                  if (passivePath["bonusAttackDamage"]["critChanceRatio"]) {
                    var critChanceText = document.createTextNode(' (+' + passivePath["bonusAttackDamage"]
                    ["critChanceRatio"] + ' Crit Chance)');
                    abilityDiv.appendChild(critChanceText);
                  }
                  if (passivePath["bonusAttackDamage"]["bonusAttackSpeedRatio"]) {
                    var bonusASText = document.createTextNode(' (+' + passivePath["bonusAttackDamage"]
                    ["bonusAttackSpeedRatio"] + ' Bonus Attack Speed Ratio)');
                    abilityDiv.appendChild(bonusASText);
                  }
                  if (passivePath["bonusAttackDamage"]["minBonusAD"]) {
                    var minText = document.createTextNode(': Min - ' + JSON.stringify(passivePath["bonusAttackDamage"]
                    ["minBonusAD"]).replace(/,/g, ', '));
                    abilityDiv.appendChild(minText);
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var maxText = document.createTextNode('Max - ' + JSON.stringify(passivePath["bonusAttackDamage"]
                    ["maxBonusAD"]).replace(/,/g, ', '));
                    abilityDiv.appendChild(maxText);
                  }
                  if (passivePath["bonusAttackDamage"]["ADPerOverCrit"]) {
                    var text = document.createTextNode(': ' + passivePath["bonusAttackDamage"]["ADPerOverCrit"]
                    + ' per Crit Chance over 100%');
                    abilityDiv.appendChild(text);
                  }
                  if (!passivePath["bonusAttackDamage"]["ADPerStack"]) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var totalU = document.createElement('u');
                    totalU.innerText = 'Total'
                    abilityDiv.appendChild(totalU)
                  }
                  var bonusADCount = 0;
                  if (passivePath["bonusAttackDamage"]["ADRatioByLvl"]) {
                    bonusADCount += passivePath["bonusAttackDamage"]["ADRatioByLvl"][champLevel] * (itemStats.ad 
                    + statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLvlRatio)
                  };
                  if (passivePath["bonusAttackDamage"]["bonusADRatio"]) {
                    bonusADCount += passivePath["bonusAttackDamage"]["bonusADRatio"] * (itemStats.ad 
                     + statsPath["damagePerLevel"] * champLvlRatio)
                  };
                  if (passivePath["bonusAttackDamage"]["critChanceRatio"]) {
                    bonusADCount += passivePath["bonusAttackDamage"]["critChanceRatio"] * 
                      (itemStats.critChance + selectedStats.critChance);
                  };
                  if (passivePath["bonusAttackDamage"]["bonusAttackSpeedRatio"]) {
                    bonusADCount += passivePath["bonusAttackDamage"]["bonusAttackSpeedRatio"] * (itemStats.as 
                      + statsPath["attackSpeedPerLevel"] * champLvlRatio)
                  };
                  if (passivePath["bonusAttackDamage"]["ADPerBonusHPRatio"]) {
                    bonusADCount += passivePath["bonusAttackDamage"]["ADPerBonusHPRatio"] * (itemStats.hp 
                      + statsPath["hpPerLevel"] * champLvlRatio)
                  }
                  if (bonusADCount !== 0) {
                    var text = document.createTextNode(': ' + Math.round(bonusADCount));
                    abilityDiv.appendChild(text);
                  };
                  if (passivePath["bonusAttackDamage"]["minBonusAD"]) {
                    var minRatio = passivePath["bonusAttackDamage"]["minBonusAD"]
                    if (typeof minRatio !== 'number') {
                      minRatio = passivePath["bonusAttackDamage"]["minBonusAD"][0]
                    }
                    var minText = document.createTextNode(': Min - ' + minRatio);
                    abilityDiv.appendChild(minText);
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var maxRatio = passivePath["bonusAttackDamage"]["maxBonusAD"]
                    if (typeof maxRatio !== 'number') {
                      maxRatio = passivePath["bonusAttackDamage"]["maxBonusAD"][0]
                    }
                    var maxText = document.createTextNode('Max - ' + maxRatio);
                    abilityDiv.appendChild(maxText);
                  }
                  if (passivePath["bonusAttackDamage"]["ADPerStack"]) {
                    var adText = document.createTextNode(': ' + passivePath["bonusAttackDamage"]["ADPerStack"] 
                    + ' per Stack');
                    abilityDiv.appendChild(adText);
                  };
                  if (passivePath["bonusAttackDamage"]["ADPerOverCrit"]) {
                    var overCrit = 0;
                    if (itemStats.critChance > 0.5) {
                      overCrit = (itemStats.critChance * 2) - 1
                    }
                    var text = document.createTextNode(': ' + Math.round(overCrit * 100 * 
                      passivePath["bonusAttackDamage"]["ADPerOverCrit"]));
                    abilityDiv.appendChild(text);
                  }
                }
                if (passivePath["bonusAPPerBonusHP"]) {
                  var apU = document.createElement('u');
                  apU.innerText = 'Bonus Ability Power'
                  abilityDiv.appendChild(apU);
                  var apText = document.createTextNode(': ' + passivePath["bonusAPPerBonusHP"] 
                  + ' per Bonus Health');
                  abilityDiv.appendChild(apText);
                  singleBreak();
                  var totalU = document.createElement('u');
                  totalU.innerText = 'Total'
                  abilityDiv.appendChild(totalU)
                  var text = document.createTextNode(': ' + Math.round(passivePath["bonusAPPerBonusHP"] * (itemStats.hp 
                    + statsPath["hpPerLevel"] * champLvlRatio)));
                  abilityDiv.appendChild(text);
                };
                if (passivePath["bonusHPPerAP"]) {
                  singleBreak();
                  var hpU = document.createElement('u');
                  hpU.innerText = 'Bonus Health'
                  abilityDiv.appendChild(hpU);
                  var hpText = document.createTextNode(': ' + passivePath["bonusHPPerAP"] 
                  + ' per Ability Power');
                  abilityDiv.appendChild(hpText);
                  var br2 = document.createElement('br');
                  abilityDiv.appendChild(br2);
                  var totalU = document.createElement('u');
                  totalU.innerText = 'Total'
                  abilityDiv.appendChild(totalU)
                  var text = document.createTextNode(': ' + Math.round(passivePath["bonusHPPerAP"] * (itemStats.ap 
                    + selectedStats.ap)));
                  abilityDiv.appendChild(text);
                };
                if (passivePath["bonusArmorPerStack"]) {
                  var armU = document.createElement('u');
                  armU.innerText = 'Bonus Armor'
                  abilityDiv.appendChild(armU);
                  var armText = document.createTextNode(': ' + passivePath["bonusArmorPerStack"] 
                  + ' per Stack');
                  abilityDiv.appendChild(armText);
                  singleBreak();
                };
                if (passivePath["bonusAPPerStack"]) {
                  var apU = document.createElement('u');
                  apU.innerText = 'Bonus Ability Power'
                  abilityDiv.appendChild(apU);
                  var apText = document.createTextNode(': ' + passivePath["bonusAPPerStack"] 
                  + ' per Stack');
                  abilityDiv.appendChild(apText);
                };
                if (passivePath["bonusCritChancePerFury"]) {
                  critU = document.createElement('u');
                  critU.innerText = 'Bonus Crit Chance';
                  abilityDiv.appendChild(critU);
                  var text = document.createTextNode(': ' + passivePath["bonusCritChancePerFury"] + '% per Fury')
                  abilityDiv.appendChild(text);
                }
                if (passivePath["critChancePer20Stacks"]) {
                  singleBreak();
                  critU = document.createElement('u');
                  critU.innerText = 'Bonus Crit Chance Ratio';
                  abilityDiv.appendChild(critU);
                  var critText = document.createTextNode(': ' + passivePath["critChancePer20Stacks"] 
                  + ' per 20 Stacks');
                  abilityDiv.appendChild(critText);
                }
                if (passivePath["lifestealPerOverCrit"]) {
                  singleBreak();
                  critU = document.createElement('u');
                  critU.innerText = 'Life Steal per Overcrit';
                  abilityDiv.appendChild(critU);
                  var critText = document.createTextNode(': ' + passivePath["lifestealPerOverCrit"]);
                  abilityDiv.appendChild(critText);
                }
                if (passivePath["itemCritChanceMultiplier"]) {
                  doubleBreak();
                  var critU = document.createElement('u');
                  critU.innerText = 'Item Crit Chance Multiplier';
                  abilityDiv.appendChild(critU);
                  var multValue = document.createTextNode(': ' + passivePath["itemCritChanceMultiplier"]);
                  abilityDiv.appendChild(multValue);
                }
                if (passivePath["bonusResist"]) {
                  var resU = document.createElement('u');
                  resU.innerText = 'Bonus Armor and Magic Resist';
                  abilityDiv.appendChild(resU);
                  var resValue = document.createTextNode(': ' + JSON.stringify(passivePath["bonusResist"])
                  .replace(/,/g, ', '));
                  abilityDiv.appendChild(resValue);
                }
                if (passivePath["bonusResistRatio"]) {
                  var resU = document.createElement('u');
                  resU.innerText = 'Bonus Armor and Magic Resist';
                  abilityDiv.appendChild(resU);
                  var resValue = document.createTextNode(': (' + passivePath["bonusResistRatio"] + ' Bonus Ratio)');
                  abilityDiv.appendChild(resValue);
                  singleBreak();
                  var text = document.createTextNode('Current Bonus Armor: ' + Math.round(passivePath["bonusResistRatio"] 
                  * itemStats.arm) + ', Current Bonus Magic Resist: ' 
                  + Math.round(passivePath["bonusResistRatio"] * itemStats.mr));
                  abilityDiv.appendChild(text);
                };
                if (passivePath["bonusBonusResistHPRatio"]) {
                  var resU = document.createElement('u');
                  resU.innerText = 'Bonus Armor, MR, and HP';
                  abilityDiv.appendChild(resU);
                  var resValue = document.createTextNode(': (' + passivePath["bonusBonusResistHPRatio"] + ' Bonus Ratio)');
                  abilityDiv.appendChild(resValue);
                  if (passivePath["bonusBonusPerStack"]) {
                    var text = document.createTextNode(' (+' + passivePath["bonusBonusPerStack"] + ' per Stack)');
                    abilityDiv.appendChild(text);
                  };
                  singleBreak();
                  var text = document.createTextNode('Current Bonus Armor: ' + Math.round(itemStats.arm *
                    passivePath["bonusBonusResistHPRatio"]) + 
                  ', Current Bonus Magic Resist: ' + Math.round(passivePath["bonusBonusResistHPRatio"] * itemStats.mr)
                  + ', Current Bonus HP: ' + Math.round(passivePath["bonusBonusResistHPRatio"] * itemStats.hp) );
                  abilityDiv.appendChild(text);
                };
                if (passivePath["bonusResistPerStack"]) {
                  var resText = document.createTextNode(' (+' + passivePath["bonusResistPerStack"] + ' per Stack)');
                  abilityDiv.appendChild(resText);
                }
                if (passivePath["minResistRatio"]) {
                  var resU = document.createElement('u');
                  resU.innerText = 'Bonus Armor and Magic Resist';
                  abilityDiv.appendChild(resU);
                  var resText = document.createTextNode(': Min - ' + passivePath["minResistRatio"] + ' Total Ratio, Max - '
                  + passivePath["maxResistRatio"] + ' Total Ratio');
                  abilityDiv.appendChild(resText);
                  singleBreak();
                  var text = document.createTextNode('Current Min - Armor: ' + Math.round(passivePath["minResistRatio"] 
                  * (itemStats.arm + statsPath["baseArmor"] + statsPath["armorPerLevel"] * champLevel 
                  * (0.7025 + 0.0175 * champLevel))) + ', Magic Resist: ' + Math.round(passivePath["minResistRatio"] 
                  * (itemStats.mr + statsPath["baseMagicResist"] + statsPath["magicResistPerLevel"] * 
                  champLvlRatio)));
                  abilityDiv.appendChild(text);
                  var br2 = document.createElement('br');
                  abilityDiv.appendChild(br2);
                  var text2 = document.createTextNode('Current Max - Armor: ' + Math.round(passivePath["maxResistRatio"] 
                  * (itemStats.arm + statsPath["baseArmor"] + statsPath["armorPerLevel"] * champLevel 
                  * (0.7025 + 0.0175 * champLevel))) + ', Magic Resist: ' + Math.round(passivePath["maxResistRatio"] 
                  * (itemStats.mr + statsPath["baseMagicResist"] + statsPath["magicResistPerLevel"] * 
                  champLvlRatio)));
                  abilityDiv.appendChild(text2);
                }
                if (passivePath["bonusArmor"]) {
                  var armorU = document.createElement('u');
                  armorU.innerText = 'Bonus Armor'
                  abilityDiv.appendChild(armorU)
                  if (passivePath["bonusArmor"]["minArmorRatio"]) {
                    var armorText = document.createTextNode(': Min - (' + JSON.stringify(passivePath["bonusArmor"]
                    ["minArmorRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Armor Ratio), Max - (' + 
                    JSON.stringify(passivePath["bonusArmor"]["maxArmorRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Armor Ratio)')
                    abilityDiv.appendChild(armorText)
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var text = document.createTextNode('Current Min - ' + Math.round(passivePath["bonusArmor"]["minArmorRatio"] 
                    * (itemStats.arm + statsPath["baseArmor"] + statsPath["armorPerLevel"] * champLevel 
                    * (0.7025 + 0.0175 * champLevel))) + ' Armor Ratio), Max - ' + + Math.round(passivePath["bonusArmor"]["maxArmorRatio"] 
                    * (itemStats.arm + statsPath["baseArmor"] + statsPath["armorPerLevel"] * champLvlRatio)))
                    abilityDiv.appendChild(text)
                  }
                  if (passivePath["bonusArmorRatio"]) {
                    var armorRatioText = document.createTextNode(' (+' + JSON.stringify(passivePath["bonusArmorRatio"])
                    .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Bonus Armor Ratio)');
                    abilityDiv.appendChild(armorRatioText);
                  }
                };
                if (passivePath["bonusMagicResist"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br)
                  var magicResistU = document.createElement('u');
                  magicResistU.innerText = 'Bonus Magic Resist'
                  abilityDiv.appendChild(magicResistU)
                  var magicResistText = document.createTextNode(' - ' + JSON.stringify(passivePath["bonusMagicResist"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(magicResistText)
                  if (passivePath["bonusMagicResistRatio"]) {
                    var magicResistRatioText = document.createTextNode(' (+' + JSON.stringify(passivePath["bonusMagicResistRatio"])
                    .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Bonus Magic Resist Ratio)');
                    abilityDiv.appendChild(magicResistRatioText);
                  }
                };
                if (passivePath["bonusHealth"]) {
                  var healthU = document.createElement('u');
                  healthU.innerText = 'Bonus Health'
                  abilityDiv.appendChild(healthU)
                  if (passivePath["bonusHealth"]["healthPerStack"]) {
                    var hpText = document.createTextNode(': (' + passivePath["bonusHealth"]["healthPerStack"]
                    + ' per Stack)');
                    abilityDiv.appendChild(hpText);
                  }
                  if (passivePath["bonusHealth"]["healthPerTakedown"]) {
                    var hpText = document.createTextNode(' (+' + passivePath["bonusHealth"]["healthPerTakedown"]
                    + ' per Takedown)');
                    abilityDiv.appendChild(hpText);
                  }
                }
                if (passivePath["bonusMoveSpeedRatio"]) {
                  var bonusMSU = document.createElement('u');
                  bonusMSU.innerText = 'Bonus Move Speed Ratio'
                  abilityDiv.appendChild(bonusMSU)
                  var bonusMSText = document.createTextNode(' - ' + JSON.stringify(passivePath["bonusMoveSpeedRatio"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(bonusMSText)
                }
                if (passivePath["bonusMoveSpeedRatioPer100AP"]) {
                  var bonusMSText = document.createTextNode(' (+' + passivePath["bonusMoveSpeedRatioPer100AP"]
                  + ' per 100 Ability Power)');
                  abilityDiv.appendChild(bonusMSText);
                }
                if (passivePath["lifeStealByLvl"]) {
                  var lsU = document.createElement('u');
                  lsU.innerText = 'Life Steal Ratio';
                  abilityDiv.appendChild(lsU);
                  var lsByLvlText = document.createTextNode(': [' + passivePath["lifeStealByLvl"][0] 
                  + " to " + passivePath["lifeStealByLvl"][17] + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var lsByLvlText2 = document.createTextNode(': ' + passivePath["lifeStealByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(lsByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(lsByLvlText2)
                }
                if (passivePath["spellVamp"]) {
                  var spellVampU = document.createElement('u');
                  spellVampU.innerText = 'Spell Vamp Ratio'
                  abilityDiv.appendChild(spellVampU)
                  var spellVampText = document.createTextNode(': (' + JSON.stringify(passivePath["spellVamp"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(spellVampText)
                };
                if (passivePath["omniVamp"]) {
                  var omniVampU = document.createElement('u');
                  omniVampU.innerText = 'Omni Vamp Ratio'
                  abilityDiv.appendChild(omniVampU)
                  var omniVampText = document.createTextNode(': (' + JSON.stringify(passivePath["omniVamp"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(omniVampText)
                };
                if (passivePath["armorPenRatio"]) {
                  var armorPenU = document.createElement('u');
                  armorPenU.innerText = 'Armor Pen Ratio'
                  abilityDiv.appendChild(armorPenU)
                  var text = document.createTextNode(': (' + JSON.stringify(passivePath["armorPenRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')');
                  abilityDiv.appendChild(text);
                };
                if (passivePath["magicPenRatio"]) {
                  var magicPenU = document.createElement('u');
                  magicPenU.innerText = 'Magic Pen Ratio'
                  abilityDiv.appendChild(magicPenU)
                  var magicPenText = document.createTextNode(' - (' + JSON.stringify(passivePath["magicPenRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(magicPenText)
                }
                if (passivePath["bonusAttackSpeed"]) {
                  var bonusASU = document.createElement('u');
                  bonusASU.innerText = 'Bonus Attack Speed Ratio'
                  abilityDiv.appendChild(bonusASU)
                  var bonusASText = document.createTextNode(' - ' + JSON.stringify(passivePath["bonusAttackSpeed"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(bonusASText)
                }
                if (passivePath["attackSpeedPerMissingHPRatio"]) {
                  var asPerU = document.createElement('u');
                  asPerU.innerText = 'Bonus Attack Speed';
                  abilityDiv.appendChild(asPerU);
                  var asPerValue = document.createTextNode(': (' + passivePath["attackSpeedPerMissingHPRatio"]
                  + ' per Missing HP Ratio)');
                  abilityDiv.appendChild(asPerValue);
                }
                if (passivePath["minBonusAttackSpeed"]) {
                  var asU = document.createElement('u');
                  asU.innerText = 'Bonus Attack Speed';
                  abilityDiv.appendChild(asU);
                  var minText = document.createTextNode(': Min - ' + passivePath["minBonusAttackSpeed"]);
                  abilityDiv.appendChild(minText);
                  singleBreak();
                  var maxText = document.createTextNode('Max - ' + passivePath["maxBonusAttackSpeed"]);
                  abilityDiv.appendChild(maxText);
                }
                if (passivePath["minBonusAttackSpeedByLvl"]) {
                  var minASU = document.createElement('u');
                  minASU.innerText = 'Min Bonus Attack Speed';
                  abilityDiv.appendChild(minASU);
                  var minASByLvlText = document.createTextNode(' - [' + passivePath["minBonusAttackSpeedByLvl"][0] + " to " 
                  + passivePath["minBonusAttackSpeedByLvl"][17] + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var minASByLvlText2 = document.createTextNode(': ' + passivePath["minBonusAttackSpeedByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(minASByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(minASByLvlText2)
                };
                if (passivePath["maxBonusAttackSpeedByLvl"]) {
                  singleBreak();
                  var maxASU = document.createElement('u');
                  maxASU.innerText = 'Max Bonus Attack Speed';
                  abilityDiv.appendChild(maxASU);
                  var maxASByLvlText = document.createTextNode(' - [' + passivePath["maxBonusAttackSpeedByLvl"][0] + " to " 
                  + passivePath["maxBonusAttackSpeedByLvl"][17] + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var maxASByLvlText2 = document.createTextNode(': ' + passivePath["maxBonusAttackSpeedByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(maxASByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(maxASByLvlText2)
                };
                if (passivePath["maxHPRegen"]) {
                  var regenU = document.createElement('u');
                  regenU.innerText = 'Max HP Regen Ratio';
                  abilityDiv.appendChild(regenU);
                  var regenText = document.createTextNode(' - ' + passivePath["maxHPRegen"] + ' per 5 secs.')
                  abilityDiv.appendChild(regenText);
                  singleBreak();
                  var text = document.createTextNode('Current Value: ' + Math.round(passivePath["maxHPRegen"] * 
                  (itemStats.hp + statsPath["baseHP"] + statsPath["hpPerLevel"] * champLvlRatio))
                  + ' HP per 5 secs.');
                  abilityDiv.appendChild(text);
                };
                if (passivePath["minMaxHPRegen"]) {
                  var regenU = document.createElement('u');
                  regenU.innerText = 'Max HP Regen Ratio';
                  abilityDiv.appendChild(regenU);
                  var minText = document.createTextNode(': Min - ' + passivePath["minMaxHPRegen"]
                  + ', Max - ' + passivePath["maxMaxHPRegen"]);
                  abilityDiv.appendChild(minText);
                  singleBreak();
                  var text = document.createTextNode('Current HP per 5: Min - ' + Math.round(passivePath["minMaxHPRegen"] * 
                  (itemStats.hp + statsPath["baseHP"] + statsPath["hpPerLevel"] * champLvlRatio))
                  + ', Max - ' + Math.round(passivePath["maxMaxHPRegen"] * (itemStats.hp + statsPath["baseHP"] +
                   statsPath["hpPerLevel"] * champLvlRatio)));
                  abilityDiv.appendChild(text);
                }
                if (passivePath["tenacity"]) {
                  var tenacityU = document.createElement('u');
                  tenacityU.innerText = 'Tenacity Ratio';
                  abilityDiv.appendChild(tenacityU);
                  var tenacityText = document.createTextNode(' - ' + passivePath["tenacity"])
                  abilityDiv.appendChild(tenacityText);
                }
                if (passivePath["maxHPRegenByLvl"]) {
                  var maxHPR = document.createElement('u');
                  maxHPR.innerText = 'Max Health Regen Ratio';
                  abilityDiv.appendChild(maxHPR);
                  var maxHPRByLvlText = document.createTextNode(' - [' + passivePath["maxHPRegenByLvl"][0] + " to " 
                  + passivePath["maxHPRegenByLvl"][17] + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var maxHPRByLvlText2 = document.createTextNode(': ' + passivePath["maxHPRegenByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(maxHPRByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(maxHPRByLvlText2)
                };
                if (passivePath["HPRegenPer5MissHPByLvl"]) {
                  var regenU = document.createElement('u');
                  regenU.innerText = 'Health Regen';
                  abilityDiv.appendChild(regenU);
                  var regenText = document.createTextNode(' - [' + passivePath["HPRegenPer5MissHPByLvl"][0] + " to " 
                  + passivePath["HPRegenPer5MissHPByLvl"][17] + " per second, per 5% Missing HP, based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var regenText2 = document.createTextNode(': ' + passivePath["HPRegenPer5MissHPByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(regenText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(regenText2)
                };
                if (passivePath["bonusMSToBonusADRatioByLvl"]) {
                  var bonusADU = document.createElement('u');
                  bonusADU.innerText = 'Bonus AD per Bonus Movespeed';
                  abilityDiv.appendChild(bonusADU);
                  var bonusADByLvlText = document.createTextNode(' - [' + passivePath["bonusMSToBonusADRatioByLvl"][0] + " to " 
                  + passivePath["bonusMSToBonusADRatioByLvl"][17] + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var bonusADByLvlText2 = document.createTextNode(': ' + passivePath["bonusMSToBonusADRatioByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(bonusADByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(bonusADByLvlText2)
                }
                if (passivePath["bonusManaPer100AP"]) {
                  var bonusManaU = document.createElement('u');
                  bonusManaU.innerText = 'Bonus Mana Ratio';
                  abilityDiv.appendChild(bonusManaU);
                  var manaText = document.createTextNode(': ' + passivePath["bonusManaPer100AP"] + ' per 100 AP');
                  abilityDiv.appendChild(manaText);
                  singleBreak();
                  var text = document.createTextNode('Current Bonus Mana: ' + Math.round(passivePath["bonusManaPer100AP"]
                  * (itemStats.ap + selectedStats.ap) / 100));
                  abilityDiv.appendChild(text);
                }
                doubleBreak();
              };

              if (champLeftFile[ability]["selfHeal"]) {
                var healPath = champLeftFile[ability]["selfHeal"]
                var healBold = document.createElement('b');
                healBold.innerText = 'Self Heal: '
                abilityDiv.appendChild(healBold)
                if (healPath["healByLvl"]) {
                  var healByLvlText = document.createTextNode('[' + healPath["healByLvl"][0] + " to " + healPath["healByLvl"][17]
                  + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var healByLvlText2 = document.createTextNode(': ' + healPath["healByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(healByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(healByLvlText2)
                  doubleBreak();
                }
              }

              if (champLeftFile[ability]["allyHeal"]) {
                var healPath = champLeftFile[ability]["allyHeal"]
                var healBold = document.createElement('b');
                healBold.innerText = 'Ally Heal: '
                abilityDiv.appendChild(healBold)
                if (healPath["healByLvl"]) {
                  var healByLvlText = document.createTextNode('[' + healPath["healByLvl"][0] + " to " + healPath["healByLvl"][17]
                  + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var healByLvlText2 = document.createTextNode(': ' + healPath["healByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(healByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(healByLvlText2)
                  doubleBreak();
                }
              }
              
              if (champLeftFile[ability]["heal"]) {
                var healPath = champLeftFile[ability]["heal"]
                var healBold = document.createElement('b');
                healBold.innerText = 'Heal: '
                abilityDiv.appendChild(healBold)
                if (healPath["heal"]) {
                  var healArray = JSON.stringify(healPath["heal"]).replace(/,/g, ', ')
                  var healArrayText = document.createTextNode(healArray)
                  abilityDiv.appendChild(healArrayText)
                }
                if (healPath["healByLvl"]) {
                  var healByLvlText = document.createTextNode('[' + healPath["healByLvl"][0] + " to " + healPath["healByLvl"][17]
                  + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var healByLvlText2 = document.createTextNode(': ' + healPath["healByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(healByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(healByLvlText2)
                };
                if (healPath["maxHPRatioByLvl"]) {
                  var healByLvlText = document.createTextNode(' (+' + healPath["maxHPRatioByLvl"][0] + " to " 
                  + healPath["maxHPRatioByLvl"][17] + " Max HP Ratio, based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var healByLvlText2 = document.createTextNode(': ' + healPath["maxHPRatioByLvl"][champLevel] + ')')
                  abilityDiv.appendChild(healByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(healByLvlText2)
                }
                if (healPath["lifeStealRatio"]) {
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Damage Ratio';
                  abilityDiv.appendChild(dmgRatioU);
                  var dmgRatioText = document.createTextNode(' - ' + healPath["lifeStealRatio"] + ' of Life Steal Ratio');
                  abilityDiv.appendChild(dmgRatioText);
                }
                if (healPath["dmgRatio"]) {
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Damage Ratio';
                  abilityDiv.appendChild(dmgRatioU);
                  var dmgRatioText = document.createTextNode(' - ' + JSON.stringify(healPath["dmgRatio"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(dmgRatioText);
                }
                if (healPath["minDmgRatio"]) {
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Damage Ratio';
                  abilityDiv.appendChild(dmgRatioU);
                  var minText = document.createTextNode(': Min - ' + healPath["minDmgRatio"] + ', Max - ' 
                  + healPath["maxDmgRatio"]);
                  abilityDiv.appendChild(minText);
                }
                if (healPath["dmgTakenRatio"]) {
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Damage Taken Ratio';
                  abilityDiv.appendChild(dmgRatioU);
                  var dmgRatioText = document.createTextNode(' - ' + JSON.stringify(healPath["dmgTakenRatio"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(dmgRatioText);
                }
                if (healPath["APRatio"]) {
                  var APRatioText = document.createTextNode(" (+" + JSON.stringify(healPath["APRatio"]).replace(/,/g, ', ')
                  .replace(/^\[|]$/g, '') + " AP Ratio)");
                  abilityDiv.appendChild(APRatioText);
                };
                if (healPath["ADRatio"]) {
                  var ADRatioValue = JSON.stringify(healPath["ADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var ADRatioText = document.createTextNode(" (+" + ADRatioValue + " AD Ratio)")
                  abilityDiv.appendChild(ADRatioText)
                };
                if (healPath["bonusADRatio"]) {
                  var bonusADRatioValue = JSON.stringify(healPath["bonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var bonusADRatioText = document.createTextNode(" (+" + bonusADRatioValue + " Bonus AD Ratio)")
                  abilityDiv.appendChild(bonusADRatioText)
                };
                if (healPath["bonusHPRatio"]) {
                  var bonusHPRatioValue = JSON.stringify(healPath["bonusHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var bonusHPRatioText = document.createTextNode(" (+" + bonusHPRatioValue + " Bonus HP Ratio)")
                  abilityDiv.appendChild(bonusHPRatioText)
                };
                if (healPath["maxHPRatio"]) {
                  var maxHPRatioValue = JSON.stringify(healPath["maxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var maxHPRatioText = document.createTextNode(" (+" + maxHPRatioValue + " Max HP Ratio)")
                  abilityDiv.appendChild(maxHPRatioText)
                };
                if (healPath["enemyMaxHPRatio"]) {
                  var enemyMaxHPRatioValue = JSON.stringify(healPath["enemyMaxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyMaxHPRatioText = document.createTextNode(" (+" + enemyMaxHPRatioValue + " Enemy Max HP Ratio)")
                  abilityDiv.appendChild(enemyMaxHPRatioText)
                };
                if (healPath["enemyMaxHPRatioByLvl"]) {
                  var healByLvlText = document.createTextNode(' (+' + healPath["enemyMaxHPRatioByLvl"][0] + " to " 
                  + healPath["enemyMaxHPRatioByLvl"][17] + " Enemy Max HP Ratio, based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var healByLvlText2 = document.createTextNode(': ' + healPath["enemyMaxHPRatioByLvl"][champLevel] + ')')
                  abilityDiv.appendChild(healByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(healByLvlText2)
                };
                if (healPath["enemyMaxHPRatioPer100AP"]) {
                  var enemyMaxHPRatioText = document.createTextNode(" (+" + healPath["enemyMaxHPRatioPer100AP"] 
                  + " Enemy Max HP Ratio Per 100 AP)")
                  abilityDiv.appendChild(enemyMaxHPRatioText)
                }
                if (healPath["enemyMaxHPRatioPer100BonusAD"]) {
                  var enemyMaxHPRatioText = document.createTextNode(" (+" + healPath["enemyMaxHPRatioPer100BonusAD"] 
                  + " Enemy Max HP Ratio Per 100 Bonus AD)")
                  abilityDiv.appendChild(enemyMaxHPRatioText)
                }
                if (healPath["maxHPRatioByUltRank"]) {
                  var healByLvlText = document.createTextNode('[' + healPath["maxHPRatioByUltRank"][0] + " to " + healPath["maxHPRatioByUltRank"][3]
                  + " Max HP Ratio, based on ult rank. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var healByLvlText2 = document.createTextNode(': ' + healPath["maxHPRatioByUltRank"][this.state["RRankLeft"]] + '] ')
                  abilityDiv.appendChild(healByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(healByLvlText2);
                  singleBreak();
                  var currentU = document.createElement('u');
                  currentU.innerText = 'Current Value';
                  abilityDiv.appendChild(currentU);
                  var text = document.createTextNode(': ' + Math.round(healPath["maxHPRatioByUltRank"]
                  [document.getElementById(`RRank${side}`).value - 1] * totalHP));
                  abilityDiv.appendChild(text);
                };
                if (healPath["increasePer1%HPLostLast4Sec"]) {
                  singleBreak();
                  var increaseText = document.createTextNode('Increase by Ratio of ' +  healPath["increasePer1%HPLostLast4Sec"]
                   + ' per 1% HP lost in last 4 seconds.');
                  abilityDiv.appendChild(increaseText);
                }
                if (healPath["missingHPRatio"]) {
                  var missingHPRatioValue = JSON.stringify(healPath["missingHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var missingHPRatioText = document.createTextNode(" (+" + missingHPRatioValue + " Missing HP Ratio)")
                  abilityDiv.appendChild(missingHPRatioText)
                }
                if (healPath["preMitigation"]) {
                  var preText = document.createTextNode(', pre-mitigation.');
                  abilityDiv.appendChild(preText);
                }
                if (healPath["system"] === "max") {
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max';
                  abilityDiv.appendChild(maxU);
                  if (healPath["maxHealByLvl"]) {
                    var healByLvlText = document.createTextNode(' - [' + healPath["maxHealByLvl"][0] + " to " + healPath["maxHealByLvl"][17]
                    + ", based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var healByLvlText2 = document.createTextNode(': ' + healPath["maxHealByLvl"][champLevel] + '] ')
                    abilityDiv.appendChild(healByLvlText);
                    abilityDiv.appendChild(currentlyU);
                    abilityDiv.appendChild(healByLvlText2)
                  }
                }
                if (healPath["system"] === '2Part') {
                  var part1U = document.createElement('u');
                  part1U.innerText = 'Part 1';
                  abilityDiv.appendChild(part1U);
                  if (healPath["part1"]["heal"]) {
                    var healText = document.createTextNode(': ' + JSON.stringify(healPath["part1"]["heal"]).replace(/,/g, ', '))
                    abilityDiv.appendChild(healText);
                  };
                  if (healPath["part1"]["APRatio"]) {
                    var APRatioText = document.createTextNode(" (+" + JSON.stringify(healPath["part1"]["APRatio"])
                    .replace(/,/g, ', ').replace(/^\[|]$/g, '') + " AP Ratio)");
                    abilityDiv.appendChild(APRatioText);
                  };
                  singleBreak();
                  var part2U = document.createElement('u');
                  part2U.innerText = 'Part 2';
                  abilityDiv.appendChild(part2U);
                  if (healPath["part2"]["part1RatioFormula"]) {
                    var formulaText = document.createTextNode(': Formula: ' + healPath["part2"]["part1RatioFormula"]);
                    abilityDiv.appendChild(formulaText);
                  }
                };
                if (healPath["system"] === "minMax" ) {
                  var minU = document.createElement('u');
                  minU.innerText = 'Min'
                  abilityDiv.appendChild(minU)
                  var dash = document.createTextNode(" - ")
                  abilityDiv.appendChild(dash)
                  if (healPath["minHeal"]) {
                    var minHealText = document.createTextNode(JSON.stringify(healPath["minHeal"]).replace(/,/g, ', '))
                    abilityDiv.appendChild(minHealText)
                  }
                  if (healPath["minHealByLvl"]) {
                    var healText = document.createTextNode('[' + healPath["minHealByLvl"][0] + " to " 
                    + healPath["minHealByLvl"][17] + ", based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var healText2 = document.createTextNode(': ' + healPath["minHealByLvl"][champLevel] + '] ')
                    abilityDiv.appendChild(healText);
                    abilityDiv.appendChild(currentlyU);
                    abilityDiv.appendChild(healText2)
                  }
                  if (healPath["minAPRatio"]) {
                    var minAPRatioValue = JSON.stringify(healPath["minAPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minAPRatioText = document.createTextNode(" (+" + minAPRatioValue + " AP Ratio)")
                    abilityDiv.appendChild(minAPRatioText)
                  }
                  if (healPath["minADRatio"]) {
                    var minADRatioValue = JSON.stringify(healPath["minADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minADRatioText = document.createTextNode(" (+" + minADRatioValue + " AD Ratio)")
                    abilityDiv.appendChild(minADRatioText)
                  }
                  if (healPath["minBonusADRatio"]) {
                    var minBonusADRatioValue = JSON.stringify(healPath["minBonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minBonusADRatioText = document.createTextNode(" (+" + minBonusADRatioValue + " Bonus AD Ratio)")
                    abilityDiv.appendChild(minBonusADRatioText)
                  }
                  if (healPath["minBonusHPRatio"]) {
                    var minBonusHPRatioValue = JSON.stringify(healPath["minBonusHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minBonusHPRatioText = document.createTextNode(" (+" + minBonusHPRatioValue + " Bonus HP Ratio)")
                    abilityDiv.appendChild(minBonusHPRatioText)
                  }
                  if (healPath["minMaxHPRatio"]) {
                    var maxHPRatioValue = JSON.stringify(healPath["minMaxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxHPRatioText = document.createTextNode(" (+" + maxHPRatioValue + " Max HP Ratio)")
                    abilityDiv.appendChild(maxHPRatioText)
                  }
                  if (healPath["minMissingHPRatio"]) {
                    var minMissingHPRatioValue = JSON.stringify(healPath["minMissingHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minMissingHPRatioText = document.createTextNode(" (+" + minMissingHPRatioValue + " Missing HP Ratio)")
                    abilityDiv.appendChild(minMissingHPRatioText)
                  }

                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max'
                  abilityDiv.appendChild(maxU)
                  var dash = document.createTextNode(' - ')
                  abilityDiv.appendChild(dash)

                  if (healPath["maxHeal"]) {
                    var maxHealArray = JSON.stringify(healPath["maxHeal"]).replace(/,/g, ', ')
                    var maxHealText = document.createTextNode(maxHealArray)
                    abilityDiv.appendChild(maxHealText)
                  }
                  if (healPath["maxHealByLvl"]) {
                    var healText = document.createTextNode('[' + healPath["maxHealByLvl"][0] + " to " 
                    + healPath["maxHealByLvl"][17] + ", based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var healText2 = document.createTextNode(': ' + healPath["maxHealByLvl"][champLevel] + '] ')
                    abilityDiv.appendChild(healText);
                    abilityDiv.appendChild(currentlyU);
                    abilityDiv.appendChild(healText2)
                  }
                  if (healPath["maxAPRatio"]) {
                    var maxAPRatioValue = JSON.stringify(healPath["maxAPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxAPRatioText = document.createTextNode(" (+" + maxAPRatioValue + " AP Ratio)")
                    abilityDiv.appendChild(maxAPRatioText)
                  }
                  if (healPath["maxADRatio"]) {
                    var maxADRatioValue = JSON.stringify(healPath["maxADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxADRatioText = document.createTextNode(" (+" + maxADRatioValue + " AD Ratio)")
                    abilityDiv.appendChild(maxADRatioText)
                  }
                  if (healPath["maxBonusADRatio"]) {
                    var maxBonusADRatioValue = JSON.stringify(healPath["maxBonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxBonusADRatioText = document.createTextNode(" (+" + maxBonusADRatioValue + " Bonus AD Ratio)")
                    abilityDiv.appendChild(maxBonusADRatioText)
                  }
                  if (healPath["maxBonusHPRatio"]) {
                    var maxBonusHPRatioValue = JSON.stringify(healPath["maxBonusHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxBonusHPRatioText = document.createTextNode(" (+" + maxBonusHPRatioValue + " Bonus HP Ratio)")
                    abilityDiv.appendChild(maxBonusHPRatioText)
                  }
                  if (healPath["maxMaxHPRatio"]) {
                    var maxHPRatioValue = JSON.stringify(healPath["maxMaxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxHPRatioText = document.createTextNode(" (+" + maxHPRatioValue + " Max HP Ratio)")
                    abilityDiv.appendChild(maxHPRatioText)
                  }
                  if (healPath["maxMissingHPRatio"]) {
                    var maxMissingHPRatioValue = JSON.stringify(healPath["maxMissingHPRatio"])
                    .replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxMissingHPRatioText = document.createTextNode(" (+" + maxMissingHPRatioValue + " Missing HP Ratio)")
                    abilityDiv.appendChild(maxMissingHPRatioText)
                  }
                }
                if (healPath["interval"]) {
                  var intervalText = document.createTextNode(' per ' + healPath["interval"] + ' sec')
                  abilityDiv.appendChild(intervalText);
                  if (healPath["duration"]) {
                    var tickText = document.createTextNode(', for ' + healPath["duration"] + ' seconds.');
                    abilityDiv.appendChild(tickText);
                  }
                  singleBreak();
                  if (healPath["system"] === 'minMax') {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                  }
                  var totalU = document.createElement('u');
                  totalU.innerText = 'Total';
                  abilityDiv.appendChild(totalU);
                  if (healPath["heal"]) {
                    var healValue = document.createTextNode(': ' + JSON.stringify(healPath["heal"]
                    .map(x => Math.round(x * healPath["ticks"]))).replace(/,/g, ', '));
                    abilityDiv.appendChild(healValue);
                  }
                  if (healPath["APRatio"]) {
                    var APRatio = document.createTextNode(' (+' + (healPath['APRatio'] * healPath['ticks'])
                    .toFixed(countDecimals(healPath['APRatio'])) + ' AP Ratio)');
                    abilityDiv.appendChild(APRatio);
                  }
                  if (healPath["system"] === 'minMax') {
                    if (healPath["minHeal"]) {
                      var minHealText = document.createTextNode(': Min - ' + JSON.stringify(healPath["minHeal"]
                      .map(x => Math.round(x * healPath["ticks"]))).replace(/,/g, ', '));
                      abilityDiv.appendChild(minHealText);
                    }
                    if (healPath["minAPRatio"]) {
                      var APRatio = document.createTextNode(' (+' + (healPath['minAPRatio'] * healPath['ticks'])
                      + ' AP Ratio)');
                      abilityDiv.appendChild(APRatio);
                    }
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    if (healPath["maxHeal"]) {
                      var maxHealText = document.createTextNode('Max - ' + JSON.stringify(healPath["maxHeal"]
                      .map(x => Math.round(x * healPath["ticks"]))).replace(/,/g, ', '));
                      abilityDiv.appendChild(maxHealText);
                    }
                    if (healPath["maxAPRatio"]) {
                      var APRatio = document.createTextNode(' (+' + (healPath['maxAPRatio'] * healPath['ticks'])
                      + ' AP Ratio)');
                      abilityDiv.appendChild(APRatio);
                    }
                  }
                }
                if (healPath["system"] === 'perTarget') {
                  var perText = document.createTextNode(' per champion');
                  abilityDiv.appendChild(perText);
                }
                if (healPath["duration"] && !healPath["interval"]) {
                    var durationText = document.createTextNode(' over ' + healPath["duration"] + ' seconds.')
                    abilityDiv.appendChild(durationText)
                }
                if (healPath["empower"]) {
                  var empPath = healPath["empower"]
                  singleBreak();
                  var empB = document.createElement('b');
                  empB.innerText = 'Empowered Heal: ';
                  abilityDiv.appendChild(empB);
                  if (empPath["system"] === 'minMax') {
                    var minU = document.createElement('u');
                    minU.innerText = 'Min';
                    abilityDiv.appendChild(minU);
                    if (empPath["minHeal"]) {
                      var healText = document.createTextNode(' - ' + JSON.stringify(empPath["minHeal"]).replace(/,/g, ', '));
                      abilityDiv.appendChild(healText);
                    }
                    if (empPath["minBonusADRatio"]) {
                      var ratioText = document.createTextNode(' (+' + JSON.stringify(empPath["minBonusADRatio"])
                      .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Bonus AD Ratio)');
                      abilityDiv.appendChild(ratioText);
                    }
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var maxU = document.createElement('u');
                    maxU.innerText = 'Max';
                    abilityDiv.appendChild(maxU);
                    if (empPath["maxHeal"]) {
                      var healText = document.createTextNode(' - ' + JSON.stringify(empPath["maxHeal"]).replace(/,/g, ', '));
                      abilityDiv.appendChild(healText);
                    }
                  }
                }
                if (healPath["empowerBonus"]) {
                  var empPath = healPath["empowerBonus"];
                  singleBreak();
                  var empU = document.createElement('u');
                  empU.innerText = 'Empower Bonus Heal';
                  abilityDiv.appendChild(empU);
                  if (empPath["healByLvl"]) {
                    var healText = document.createTextNode(' - [' + empPath["healByLvl"][0] 
                    + " to " + empPath["healByLvl"][17] + ", based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var healText2 = document.createTextNode(': ' + empPath["healByLvl"][champLevel] + '] ')
                    abilityDiv.appendChild(healText);
                    abilityDiv.appendChild(currentlyU);
                    abilityDiv.appendChild(healText2)
                  }
                  if (empPath["missingHPRatio"]) {
                    var ratioText = document.createTextNode(" (+" + empPath["missingHPRatio"] 
                    + " Missing HP Ratio)")
                    abilityDiv.appendChild(ratioText)
                  }
                  if (empPath["missingHPRatioPer100AP"]) {
                    var ratioText = document.createTextNode(" (+" + empPath["missingHPRatioPer100AP"] 
                    + " Missing HP Ratio per 100 AP)")
                    abilityDiv.appendChild(ratioText)
                  }
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["shield"]) {
                var path = champLeftFile[ability]["shield"]
                var shieldBold = document.createElement('b');
                if (path["type"] !== 'all') {
                  shieldBold.innerText = path["type"] + ' Shield: '
                } else {
                  shieldBold.innerText = ' Shield: '
                }
                abilityDiv.appendChild(shieldBold)
                if (path["shield"]) {
                  var shieldArray = JSON.stringify(path["shield"]).replace(/,/g, ', ')
                  var shieldArrayText = document.createTextNode(shieldArray)
                  abilityDiv.appendChild(shieldArrayText)
                }
                if (path["shieldByLvl"]) {
                  var shieldByLvlText = document.createTextNode('[' + path["shieldByLvl"][0] + " to " + path["shieldByLvl"][17]
                  + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var shieldByLvlText2 = document.createTextNode(': ' + path["shieldByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(shieldByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(shieldByLvlText2)
                };
                if (path["shieldPerStack"]) {
                  var stackText = document.createTextNode(" (+" + path["shieldPerStack"] + " per Stack)")
                  abilityDiv.appendChild(stackText)
                }
                if (path["dmgTakenRatio"]) {
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Damage Taken Ratio';
                  abilityDiv.appendChild(dmgRatioU);
                  var dmgRatioText = document.createTextNode(' - ' + JSON.stringify(path["dmgTakenRatio"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(dmgRatioText);
                }
                if (path["APRatio"]) {
                  var APRatioText = document.createTextNode(" (+" + path["APRatio"] + " AP Ratio)")
                  abilityDiv.appendChild(APRatioText)
                };
                if (path["ADRatio"]) {
                  var ADRatioValue = JSON.stringify(path["ADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var ADRatioText = document.createTextNode(" (+" + ADRatioValue + " AD Ratio)")
                  abilityDiv.appendChild(ADRatioText)
                };
                if (path["bonusADRatio"]) {
                  var bonusADRatioValue = JSON.stringify(path["bonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var bonusADRatioText = document.createTextNode(" (+" + bonusADRatioValue + " Bonus AD Ratio)")
                  abilityDiv.appendChild(bonusADRatioText)
                };
                if (path["bonusHPRatio"]) {
                  var bonusHPRatioValue = JSON.stringify(path["bonusHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var bonusHPRatioText = document.createTextNode(" (+" + bonusHPRatioValue + " Bonus HP Ratio)")
                  abilityDiv.appendChild(bonusHPRatioText)
                };
                if (path["maxHPRatio"]) {
                  var maxHPRatioValue = JSON.stringify(path["maxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var maxHPRatioText = document.createTextNode(" (+" + maxHPRatioValue + " Max HP Ratio)")
                  abilityDiv.appendChild(maxHPRatioText)
                };
                if (path["maxHPRatioByLvl"]) {
                  var shieldByLvlText = document.createTextNode('[' + path["maxHPRatioByLvl"][0] 
                  + " to " + path["maxHPRatioByLvl"][17] + " Max HP Ratio, based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var shieldByLvlText2 = document.createTextNode(': ' + path["maxHPRatioByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(shieldByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(shieldByLvlText2)
                }
                if (path["maxHPRatioPerStack"]) {
                  var maxHPRatioValue = JSON.stringify(path["maxHPRatioPerStack"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var maxHPRatioText = document.createTextNode(" (+" + maxHPRatioValue + " Max HP Ratio per stack)")
                  abilityDiv.appendChild(maxHPRatioText)
                };
                if (path["maxManaRatio"]) {
                  var maxManaRatioValue = JSON.stringify(path["maxManaRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var maxManaRatioText = document.createTextNode(" (+" + maxManaRatioValue + " Max Mana Ratio)")
                  abilityDiv.appendChild(maxManaRatioText)
                };
                if (path["maxMaxHPRatio"]) {
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max'
                  abilityDiv.appendChild(maxU);
                  var maxText = document.createTextNode(' - (' + path["maxMaxHPRatio"] + ' Max HP Ratio)');
                  abilityDiv.appendChild(maxText);
                }
                if (path["system"] === "minMax" ) {
                  var minU = document.createElement('u');
                  minU.innerText = 'Min'
                  abilityDiv.appendChild(minU)
                  var dash = document.createTextNode(' - ');
                  abilityDiv.appendChild(dash);
                  if (path["minShield"]) {
                    var minShieldArray = JSON.stringify(path["minShield"]).replace(/,/g, ', ')
                    var minShieldText = document.createTextNode(minShieldArray)
                    abilityDiv.appendChild(minShieldText)
                  }
                  if (path["minShieldByLvl"]) {
                    var shieldByLvlText = document.createTextNode(' [' + path["minShieldByLvl"][0] 
                    + " to " + path["minShieldByLvl"][17] + ", based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var shieldByLvlText2 = document.createTextNode(': ' + path["minShieldByLvl"][champLevel] + '] ')
                    abilityDiv.appendChild(shieldByLvlText);
                    abilityDiv.appendChild(currentlyU);
                    abilityDiv.appendChild(shieldByLvlText2)
                  }
                  if (path["minAPRatio"]) {
                    var minAPRatioValue = JSON.stringify(path["minAPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minAPRatioText = document.createTextNode(" (+" + minAPRatioValue + " AP Ratio)")
                    abilityDiv.appendChild(minAPRatioText)
                  }
                  if (path["minADRatio"]) {
                    var minADRatioValue = JSON.stringify(path["minADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minADRatioText = document.createTextNode(" (+" + minADRatioValue + " AD Ratio)")
                    abilityDiv.appendChild(minADRatioText)
                  }
                  if (path["minBonusADRatio"]) {
                    var minBonusADRatioValue = JSON.stringify(path["minBonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minBonusADRatioText = document.createTextNode(" (+" + minBonusADRatioValue + " Bonus AD Ratio)")
                    abilityDiv.appendChild(minBonusADRatioText)
                  }
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max'
                  abilityDiv.appendChild(maxU)
                  var dash = document.createTextNode(' - ')
                  abilityDiv.appendChild(dash)
                  
                  if (path["maxShield"]) {
                    var maxShieldArray = JSON.stringify(path["maxShield"]).replace(/,/g, ', ')
                    var maxShieldText = document.createTextNode(maxShieldArray)
                    abilityDiv.appendChild(maxShieldText)
                  }
                  if (path["maxShieldByLvl"]) {
                    var shieldByLvlText = document.createTextNode(' [' + path["maxShieldByLvl"][0] 
                    + " to " + path["maxShieldByLvl"][17] + ", based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var shieldByLvlText2 = document.createTextNode(': ' + path["maxShieldByLvl"][champLevel] + '] ')
                    abilityDiv.appendChild(shieldByLvlText);
                    abilityDiv.appendChild(currentlyU);
                    abilityDiv.appendChild(shieldByLvlText2)
                  }
                  if (path["maxAPRatio"]) {
                    var maxAPRatioValue = JSON.stringify(path["maxAPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxAPRatioText = document.createTextNode(" (+" + maxAPRatioValue + " AP Ratio)")
                    abilityDiv.appendChild(maxAPRatioText)
                  }
                  if (path["maxADRatio"]) {
                    var maxADRatioValue = JSON.stringify(path["maxADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxADRatioText = document.createTextNode(" (+" + maxADRatioValue + " AD Ratio)")
                    abilityDiv.appendChild(maxADRatioText)
                  }
                  if (path["maxBonusADRatio"]) {
                    var maxBonusADRatioValue = JSON.stringify(path["maxBonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxBonusADRatioText = document.createTextNode(" (+" + maxBonusADRatioValue + " Bonus AD Ratio)")
                    abilityDiv.appendChild(maxBonusADRatioText)
                  }
                }
                if (path["type"] !== 'Spell' && path["duration"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (path["duration"]) {
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration'
                  abilityDiv.appendChild(durationU)
                  var durationText = document.createTextNode(': ' + path["duration"])
                  abilityDiv.appendChild(durationText)
                }
                if (path["combatCoolDown"]) {
                  var br4 = document.createElement('br');
                  abilityDiv.appendChild(br4);
                  var combatU = document.createElement('u')
                  combatU.innerText = 'Combat Cooldown';
                  abilityDiv.appendChild(combatU)
                  var combatCD = document.createTextNode(': ' + path["combatCoolDown"])
                  abilityDiv.appendChild(combatCD)
                }
                if (path["combatCoolDownByLvl"]) {
                  var br4 = document.createElement('br');
                  abilityDiv.appendChild(br4);
                  var combatU = document.createElement('u')
                  combatU.innerText = 'Combat Cooldown';
                  abilityDiv.appendChild(combatU)
                  var combatCDByLvlText = document.createTextNode(': [' + path["combatCoolDownByLvl"][0] + " to " + path["combatCoolDownByLvl"][17]
                  + "], based on lvl. ");
                  var combatCDByLvlText2 = document.createTextNode('Currently: ' + path["combatCoolDownByLvl"][champLevel])
                  abilityDiv.appendChild(combatCDByLvlText);
                  abilityDiv.appendChild(combatCDByLvlText2)
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["revive"]) {
                var path = champLeftFile[ability]["revive"]
                var reviveBold = document.createElement('b');
                reviveBold.innerText = 'Revive: '
                abilityDiv.appendChild(reviveBold);
                if (path["reviveTransform"]) {
                  var transformU = document.createElement('u')
                  transformU.innerText = 'Transform Stats'
                  abilityDiv.appendChild(transformU);
                  var HPRatioText = document.createTextNode(': HP Ratio: ' + path["reviveTransform"]["HPRatio"] 
                  + ', Value: ' + Math.round(path["reviveTransform"]["HPRatio"] 
                  * (itemStats.hp + statsPath["baseHP"] + statsPath["hpPerLevel"] * champLevel * 
                  (0.7025 + 0.0175 * champLevel))))
                  abilityDiv.appendChild(HPRatioText)
                  if (path["reviveTransform"]["bonusArmorByLvl"]) {
                    var br = document.createElement("br");
                    abilityDiv.appendChild(br);
                    var bonusArmorByLvlText = document.createTextNode('Bonus Armor: ' + path["reviveTransform"]["bonusArmorByLvl"][0] 
                    + " to " + path["reviveTransform"]["bonusArmorByLvl"][17] + ", based on lvl. ")
                    var currentlyText = document.createTextNode('Currently: ' + path["reviveTransform"]["bonusArmorByLvl"][champLevel])
                    abilityDiv.appendChild(bonusArmorByLvlText);
                    abilityDiv.appendChild(currentlyText);
                  };
                  if (path["reviveTransform"]["bonusMagicResistByLvl"]) {
                    var br = document.createElement("br");
                    abilityDiv.appendChild(br);
                    var bonusText = document.createTextNode('Bonus Magic Resist: ' + path["reviveTransform"]
                    ["bonusMagicResistByLvl"][0] + " to " + path["reviveTransform"]["bonusMagicResistByLvl"][17] + ", based on lvl. ")
                    var text = document.createTextNode('Currently: ' + path["reviveTransform"]["bonusMagicResistByLvl"][champLevel])
                    abilityDiv.appendChild(bonusText);
                    abilityDiv.appendChild(text);
                  }
                  if (path["reviveTransform"]["armorRatio"]) {
                    var br = document.createElement("br");
                    abilityDiv.appendChild(br);
                    var text = document.createTextNode('Armor Ratio: ' + path["reviveTransform"]["armorRatio"]
                    + ', Value: ' + Math.round(path["reviveTransform"]["armorRatio"] 
                    * (itemStats.arm + statsPath["baseArmor"] + statsPath["armorPerLevel"] * champLevel * 
                    (0.7025 + 0.0175 * champLevel))) );
                    abilityDiv.appendChild(text);
                  };
                  if (path["reviveTransform"]["magicResistRatio"]) {
                    var br = document.createElement("br");
                    abilityDiv.appendChild(br);
                    var text = document.createTextNode('Magic Resist Ratio: ' + path["reviveTransform"]["magicResistRatio"]
                    + ', Value: ' + Math.round(path["reviveTransform"]["magicResistRatio"] 
                    * (itemStats.mr + statsPath["baseMagicResist"] + statsPath["magicResistPerLevel"] * champLevel * 
                    (0.7025 + 0.0175 * champLevel))) )
                    abilityDiv.appendChild(text)
                  };
                  if (path["reviveTransform"]["aoeResist"]) {
                    var br = document.createElement("br");
                    abilityDiv.appendChild(br);
                    var aoeResistText = document.createTextNode('AOE Resist Ratio: ' + path["reviveTransform"]["aoeResist"])
                    abilityDiv.appendChild(aoeResistText)
                  }
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u')
                  durationU.innerText = "Duration"
                  abilityDiv.appendChild(durationU)
                  if (path["reviveTransform"]["duration"]) {
                    var durationText = document.createTextNode(': ' + path["reviveTransform"]["duration"])
                    abilityDiv.appendChild(durationText);
                  }
                  if (path["reviveTransform"]["durationByLvl"]) {
                    var durationByLvlText = document.createTextNode(': [' + path["reviveTransform"]["durationByLvl"][0] 
                    + " to " + path["reviveTransform"]["durationByLvl"][17] + "], based on lvl. ")
                    var currentlyText = document.createTextNode('Currently: ' + path["reviveTransform"]["durationByLvl"][champLevel])
                    abilityDiv.appendChild(durationByLvlText);
                    abilityDiv.appendChild(currentlyText);
                  }
                }
                if (path["health"]) {
                  var healthU = document.createElement('u');
                  healthU.innerText = 'Health Restored';
                  abilityDiv.appendChild(healthU)
                  var healthText = document.createTextNode(' - ' + JSON.stringify(path["health"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(healthText);
                }
                if (path["healthPerAP"]) {
                  var healthPerAPText = document.createTextNode(' (+' + path["healthPerAP"] + ' per AP)')
                  abilityDiv.appendChild(healthPerAPText);
                }
                if (path["minHPRestoreRatio"]) {
                  singleBreak();
                  var healthU = document.createElement('u');
                  healthU.innerText = 'Health Restored';
                  abilityDiv.appendChild(healthU)
                  var text = document.createTextNode(': Min - (' + path["minHPRestoreRatio"] + ' Max Health Ratio, Value: ' 
                  + Math.round(path["minHPRestoreRatio"] * (itemStats.hp + statsPath["baseHP"] + statsPath["hpPerLevel"] 
                  * champLvlRatio)) + '), Max - (' + path["maxHPRestoreRatio"] 
                  + ' Max Health Ratio, Value: ' + Math.round(path["maxHPRestoreRatio"] * (itemStats.hp +
                   statsPath["baseHP"] + statsPath["hpPerLevel"] * champLvlRatio)) + ')');
                  abilityDiv.appendChild(text);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["damageRedux"]) {
                var path = champLeftFile[ability]["damageRedux"]
                var reducedDmgBold = document.createElement('b');
                if (path["type"] !== 'all') {
                  reducedDmgBold.innerText = 'Reduced ' + path["type"] + ' Damage Taken: '
                } else {
                  reducedDmgBold.innerText = 'Reduced Damage Taken: '
                }
                abilityDiv.appendChild(reducedDmgBold)
                if (path["reduxRatio"]) {
                  var reduxRatioText = document.createTextNode('Reduced by ratio of ' + JSON.stringify(path["reduxRatio"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(reduxRatioText)
                }
                if (path["dmg"]) {
                  var reducedDmgText = document.createTextNode('Reduced by ' + JSON.stringify(path["dmg"]).replace(/,/g, ', ')
                  );
                  abilityDiv.appendChild(reducedDmgText)
                }
                if (path["APRatio"]) {
                  var APRatioText = document.createTextNode(' (+' + path["APRatio"] + ' AP Ratio)')
                  abilityDiv.appendChild(APRatioText)
                }
                if (path["bonusArmorRatio"]) {
                  var bonusArmorRatioText = document.createTextNode(' (+' + path["bonusArmorRatio"] + ' Bonus Armor Ratio)')
                  abilityDiv.appendChild(bonusArmorRatioText)
                }
                if (path["bonusMagicResistRatio"]) {
                  var bonusMagicResistRatioText = document.createTextNode(' (+' + path["bonusMagicResistRatio"] + ' Bonus Magic Resist Ratio)')
                  abilityDiv.appendChild(bonusMagicResistRatioText)
                }
                if (path['maxReduxRatio']) {
                  var maxReduxText = document.createTextNode(', up to a maximum reduction ratio of ' + path["maxReduxRatio"]);
                  abilityDiv.appendChild(maxReduxText);
                }
                if (path["reduxRatioPer100AP"]) {
                  var reduxRatioText = document.createTextNode(' (+' + path["reduxRatioPer100AP"] + ' per 100 Ability Power)');
                  abilityDiv.appendChild(reduxRatioText);
                }
                if (path["aoeDmgReduxRatio"]) {
                  var reduxRatioText = document.createTextNode('AOE Damage reduced by ratio of ' + JSON.stringify(path["aoeDmgReduxRatio"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(reduxRatioText)
                };
                if (path["autoBlock"]) {
                  singleBreak();
                  var blockText = document.createTextNode('Blocks auto attacks.');
                  abilityDiv.appendChild(blockText);
                }
                if (path["duration"] || path["minDuration"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration'
                  abilityDiv.appendChild(durationU);
                }
                if (path["duration"]) {
                  var durationText = document.createTextNode(': ' + JSON.stringify(path["duration"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(durationText)
                };
                if (path["minDuration"]) {
                  var durationText = document.createTextNode(': Min - ' + path["minDuration"] + ', Max - '
                  + path["maxDuration"]);
                  abilityDiv.appendChild(durationText);
                }
                if (path["calculateFrom"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var mitigationText = document.createTextNode('Applies ' + path["calculateFrom"] + '.')
                  abilityDiv.appendChild(mitigationText)
                }
                doubleBreak();
              };

              if (champLeftFile[ability]["magicDamageRedux"]) {
                var path = champLeftFile[ability]["magicDamageRedux"]
                var reducedDmgBold = document.createElement('b');
                reducedDmgBold.innerText = 'Reduced Magic Damage Taken: '
                abilityDiv.appendChild(reducedDmgBold)
                if (path["reduxRatio"]) {
                  var reduxRatioText = document.createTextNode('Reduced by ratio of ' + JSON.stringify(path["reduxRatio"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(reduxRatioText)
                }
                if (path["reduxRatioPer100AP"]) {
                  var ratioText = document.createTextNode(' (+' + path["reduxRatioPer100AP"] + ' per 100 Ability Power)')
                  abilityDiv.appendChild(ratioText)
                }
                if (path["reduxRatioPer100BonusMR"]) {
                  var ratioText = document.createTextNode(' (+' + path["reduxRatioPer100BonusMR"] + ' per 100 Bonus Magic Resist)')
                  abilityDiv.appendChild(ratioText)
                }
                if (path["duration"]) {
                  var durationText = document.createTextNode(' for ' + path["duration"] + ' seconds.')
                  abilityDiv.appendChild(durationText)
                }
                var br = document.createElement("br");
                abilityDiv.appendChild(br);
              }

              if (champLeftFile[ability]["physDamageRedux"]) {
                var path = champLeftFile[ability]["physDamageRedux"]
                var reducedDmgBold = document.createElement('b');
                reducedDmgBold.innerText = 'Reduced Physical Damage Taken: '
                abilityDiv.appendChild(reducedDmgBold)
                if (path["reduxRatio"]) {
                  var reduxRatioText = document.createTextNode('Reduced by ratio of ' + JSON.stringify(path["reduxRatio"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(reduxRatioText)
                }
                if (path["reduxRatioPer100AP"]) {
                  var ratioText = document.createTextNode(' (+' + path["reduxRatioPer100AP"] + ' per 100 Ability Power)')
                  abilityDiv.appendChild(ratioText)
                }
                if (path["reduxRatioPer100BonusMR"]) {
                  var ratioText = document.createTextNode(' (+' + path["reduxRatioPer100BonusMR"] + ' per 100 Bonus Magic Resist)')
                  abilityDiv.appendChild(ratioText)
                }
                if (path["duration"]) {
                  var durationText = document.createTextNode(' for ' + path["duration"] + ' seconds.')
                  abilityDiv.appendChild(durationText)
                }
                doubleBreak();
              }

              if(champLeftFile[ability]["dmgImmune"]) {
                var immuneBold = document.createElement('b');
                immuneBold.innerText = 'Damage Immune Duration: '
                abilityDiv.appendChild(immuneBold);
                var immuneValue = document.createTextNode(JSON.stringify(champLeftFile[ability]["dmgImmune"])
                .replace(/,/g, ', '));
                abilityDiv.appendChild(immuneValue);
                doubleBreak();
              }

              if(champLeftFile[ability]["ccImmune"]) {
                var immuneBold = document.createElement('b');
                immuneBold.innerText = 'Crowd Control Immune Duration: '
                abilityDiv.appendChild(immuneBold);
                var immuneValue = document.createTextNode(JSON.stringify(champLeftFile[ability]["ccImmune"])
                .replace(/,/g, ', '));
                abilityDiv.appendChild(immuneValue);
                doubleBreak();
              }

              if (champLeftFile[ability]["minDmgImmune"]) {
                var immuneBold = document.createElement('b');
                immuneBold.innerText = 'Crowd Control Immune Duration: '
                abilityDiv.appendChild(immuneBold);
                var minU = document.createElement('u');
                minU.innerText = 'Min'
                abilityDiv.appendChild(minU)
                var minText = document.createTextNode(' - ' + champLeftFile[ability]["minDmgImmune"])
                abilityDiv.appendChild(minText);
                var br = document.createElement("br");
                abilityDiv.appendChild(br);
                var maxU = document.createElement('u');
                maxU.innerText = 'Max'
                abilityDiv.appendChild(maxU)
                var maxText = document.createTextNode(' - ' + champLeftFile[ability]["maxDmgImmune"])
                abilityDiv.appendChild(maxText);
                doubleBreak();
              };

              if (champLeftFile[ability]["silence"]) {
                var silenceBold = document.createElement('b');
                silenceBold.innerText = 'Silence Duration: '
                abilityDiv.appendChild(silenceBold);
                var silenceText = document.createTextNode(JSON.stringify(champLeftFile[ability]["silence"])
                .replace(/,/g, ', '));
                abilityDiv.appendChild(silenceText);
                doubleBreak();
              }

              if (champLeftFile[ability]["blind"]) {
                var blindB = document.createElement('b');
                blindB.innerText = 'Blind Duration: '
                abilityDiv.appendChild(blindB);
                var blindText = document.createTextNode(JSON.stringify(champLeftFile[ability]["blind"])
                .replace(/,/g, ', '));
                abilityDiv.appendChild(blindText);
                doubleBreak();
              }

              if(champLeftFile[ability]["interruptCC"] || champLeftFile[ability]["interruptCCByLvl"] 
              || champLeftFile[ability]["minInterruptCC"]) {
                var interruptCCBold = document.createElement('b');
                interruptCCBold.innerText = 'Crowd Control Duration: '
                abilityDiv.appendChild(interruptCCBold)
              }

              if (champLeftFile[ability]["interruptCC"]) {
                var interruptCCArray = JSON.stringify(champLeftFile[ability]["interruptCC"]).replace(/,/g, ', ')
                var interruptCCText = document.createTextNode(interruptCCArray)
                abilityDiv.appendChild(interruptCCText)
                if (champLeftFile[ability]["interruptCCPer10Lethality"]) {
                  var perValue = document.createTextNode(' (+' + champLeftFile[ability]["interruptCCPer10Lethality"]
                  + ' per 10 Lethality)');
                  abilityDiv.appendChild(perValue);
                }
                doubleBreak();
              };

              if (champLeftFile[ability]["interruptCCByLvl"]) {
                var ccPath = champLeftFile[ability]["interruptCCByLvl"]
                var ccByLvlText = document.createTextNode('[' + ccPath[0] 
                + " to " + ccPath[17] + "], based on lvl. ")
                var currentlyText = document.createTextNode('Currently: ' + ccPath[champLevel])
                abilityDiv.appendChild(ccByLvlText);
                abilityDiv.appendChild(currentlyText);
                doubleBreak();
              }

              if (champLeftFile[ability]["minInterruptCC"]) {
                var minInterruptU = document.createElement('u');
                minInterruptU.innerText = 'Min'
                abilityDiv.appendChild(minInterruptU)
                var minInterruptText = document.createTextNode(' - ' + JSON.stringify(champLeftFile[ability]["minInterruptCC"]).replace(/,/g, ', '))
                abilityDiv.appendChild(minInterruptText);
                var br = document.createElement("br");
                abilityDiv.appendChild(br);
                var maxInterruptU = document.createElement('u');
                maxInterruptU.innerText = 'Max'
                abilityDiv.appendChild(maxInterruptU)
                var maxInterruptText = document.createTextNode(' - ' + JSON.stringify(champLeftFile[ability]["maxInterruptCC"]).replace(/,/g, ', '))
                abilityDiv.appendChild(maxInterruptText);
                doubleBreak();
              };
              
              if (champLeftFile[ability]["damageAmp"]) {
                var ampPath = champLeftFile[ability]["damageAmp"]
                var ampB = document.createElement('b');
                ampB.innerText = 'Damage Amp Ratio: ';
                abilityDiv.appendChild(ampB);
                var ampText = document.createTextNode(ampPath["amp"]);
                abilityDiv.appendChild(ampText);
                var br = document.createElement('br');
                abilityDiv.appendChild(br);
                var durU = document.createElement('u');
                durU.innerText = 'Duration';
                abilityDiv.appendChild(durU);
                var durText = document.createTextNode(': ' + ampPath["duration"]);
                abilityDiv.appendChild(durText);
                doubleBreak();
              }

              if (champLeftFile[ability]["ADRedux"]) {
                var path = champLeftFile[ability]["ADRedux"]
                var reduxBold = document.createElement('b');
                reduxBold.innerText = 'Attack Damage Reduction: ';
                abilityDiv.appendChild(reduxBold);
                if (path["redux"]) {
                  var reduxText = document.createTextNode(JSON.stringify(path["redux"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(reduxText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["resistRedux"]) {
                var path = champLeftFile[ability]["resistRedux"]
                if (path["type"] === 'both') {
                  var reduxBold = document.createElement('b');
                  reduxBold.innerText = 'Armor and Magic Resist Reduction: ';
                  abilityDiv.appendChild(reduxBold);
                };
                if (path["type"] === 'magicResist') {
                  var reduxBold = document.createElement('b');
                  reduxBold.innerText = 'Magic Resist Reduction: ';
                  abilityDiv.appendChild(reduxBold);
                };
                if (path["type"] === 'armor') {
                  var reduxBold = document.createElement('b');
                  reduxBold.innerText = 'Armor Reduction: ';
                  abilityDiv.appendChild(reduxBold);
                };
                if (path["resist"]) {
                  var resistText = document.createTextNode(JSON.stringify(path["resist"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(resistText);
                }
                if (path["reduxRatio"]) {
                  var ratioU = document.createElement('u');
                  ratioU.innerText = 'Ratio';
                  abilityDiv.appendChild(ratioU);
                  var reduxRatioText = document.createTextNode(' - ' + JSON.stringify(path["reduxRatio"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(reduxRatioText);
                }
                if (path["system"] === 'minMax') {
                  var minU = document.createElement('u')
                  minU.innerText = 'Min'
                  abilityDiv.appendChild(minU);
                  if (path["minResistRedux"]) {
                    var minReduxText = document.createTextNode(' - ' + JSON.stringify(path["minResistRedux"]).replace(/,/g, ', '))
                    abilityDiv.appendChild(minReduxText)
                  };
                  singleBreak();
                  var maxU = document.createElement('u')
                  maxU.innerText = 'Max'
                  abilityDiv.appendChild(maxU);
                  if (path["maxResistRedux"]) {
                    var maxReduxText = document.createTextNode(' - ' + JSON.stringify(path["maxResistRedux"]).replace(/,/g, ', '))
                    abilityDiv.appendChild(maxReduxText)
                  };
                }
                if (path["duration"]) {
                  singleBreak();
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration'
                  abilityDiv.appendChild(durationU);
                  var durationText = document.createTextNode(' - ' + JSON.stringify(path["duration"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(durationText);
                };
                if (path["maxDuration"]) {
                  singleBreak();
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Max Duration'
                  abilityDiv.appendChild(durationU);
                  var durationText = document.createTextNode(' - ' + JSON.stringify(path["maxDuration"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(durationText);
                };
                doubleBreak();
              }

              if (champLeftFile[ability]["bonusStats"]) {
                var path = champLeftFile[ability]["bonusStats"]
                var bonusStatsBold = document.createElement('b');
                bonusStatsBold.innerText = 'Bonus Stats: ';
                abilityDiv.appendChild(bonusStatsBold);
                if (path["attackDamageByLvl"]) {
                  var ADByLvlU = document.createElement('u');
                  ADByLvlU.innerText = 'Attack Damage';
                  abilityDiv.appendChild(ADByLvlU);
                  var ADByLvlText = document.createTextNode(' - [' + path["attackDamageByLvl"][0] + " to " + 
                  path["attackDamageByLvl"][17] + "], based on lvl. Currently: " + path["attackDamageByLvl"][champLevel]);
                  abilityDiv.appendChild(ADByLvlText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (path["attackSpeed"]) {
                  var asRatioU = document.createElement('u');
                  asRatioU.innerText = 'Attack Speed Ratio';
                  abilityDiv.appendChild(asRatioU);
                  var asRatioText = document.createTextNode(' - (' + JSON.stringify(path["attackSpeed"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(asRatioText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (path["ADRatio"]) {
                  var bonusADRatioU = document.createElement('u');
                  bonusADRatioU.innerText = 'Attack Damage Ratio';
                  abilityDiv.appendChild(bonusADRatioU);
                  var bonusADRatioText = document.createTextNode(' - (' + JSON.stringify(path["ADRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(bonusADRatioText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (path["lifeSteal"]) {
                  var lsRatioU = document.createElement('u');
                  lsRatioU.innerText = 'Life Steal Ratio';
                  abilityDiv.appendChild(lsRatioU);
                  var lsRatioText = document.createTextNode(' - (' + JSON.stringify(path["lifeSteal"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(lsRatioText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (path["healingRatio"]) {
                  var healingRatioU = document.createElement('u');
                  healingRatioU.innerText = 'Increased Healing Ratio';
                  abilityDiv.appendChild(healingRatioU);
                  var healingRatioText = document.createTextNode(' - (' + JSON.stringify(path["healingRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(healingRatioText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (path["healingPerMissingHPRatio"]) {
                  var healingRatioU = document.createElement('u');
                  healingRatioU.innerText = 'Increased Healing';
                  abilityDiv.appendChild(healingRatioU);
                  var healingRatioText = document.createTextNode(': (' + path["healingPerMissingHPRatio"]
                  + ' per Missing HP Ratio)')
                  abilityDiv.appendChild(healingRatioText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (path["resist"]) {
                  var resU = document.createElement('u');
                  resU.innerText = 'Armor and Magic Resist';
                  abilityDiv.appendChild(resU);
                  var resText = document.createTextNode(': ' + JSON.stringify(path["resist"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(resText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (path["abilityPower"]) {
                  var apU = document.createElement('u');
                  apU.innerText = 'Ability Power';
                  abilityDiv.appendChild(apU);
                  var apText = document.createTextNode(': ' + JSON.stringify(path["abilityPower"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(apText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (path["healthRegen"]) {
                  var hpU = document.createElement('u');
                  hpU.innerText = 'Health Regen';
                  abilityDiv.appendChild(hpU);
                  var hpText = document.createTextNode(': ' + JSON.stringify(path["healthRegen"]).replace(/,/g, ', ')
                  + ' per second');
                  abilityDiv.appendChild(hpText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (path["duration"]) {
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration';
                  abilityDiv.appendChild(durationU);
                  var durationText = document.createTextNode(' - ' + JSON.stringify(path["duration"]).replace(/,/g, ', ').replace(/^\[|]$/g, ''))
                  abilityDiv.appendChild(durationText);
                  if (path["durationExtend"]) {
                    var durationExtendText = document.createTextNode(', extends by ' + path["durationExtend"] + ' seconds.')
                    abilityDiv.appendChild(durationExtendText);
                  }
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                var br2 = document.createElement("br");
                abilityDiv.appendChild(br2);
              }

              if (champLeftFile[ability]["bonusHealth"]) {
                var path = champLeftFile[ability]["bonusHealth"]
                var healthBold = document.createElement('b');
                healthBold.innerText = 'Bonus Health: '
                abilityDiv.appendChild(healthBold);
                if (path["health"]) {
                  var healthText = document.createTextNode(JSON.stringify(path["health"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(healthText);
                };
                if (path["healthPerStack"]) {
                  var healthText = document.createTextNode(JSON.stringify(path["healthPerStack"])
                  .replace(/,/g, ', ') + ' per Stack')
                  abilityDiv.appendChild(healthText);
                  doubleBreak();
                };
                if (path["APRatio"]) {
                  var APText = document.createTextNode(' (+' + JSON.stringify(path["APRatio"])
                  .replace(/,/g, ', ') + ' AP Ratio)');
                  abilityDiv.appendChild(APText);
                }
                if (path["duration"]) {
                  singleBreak();
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration';
                  abilityDiv.appendChild(durationU);
                  var durationText = document.createTextNode(' - ' + JSON.stringify(path["duration"]).replace(/,/g, ', ').replace(/^\[|]$/g, ''))
                  abilityDiv.appendChild(durationText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["maxHPRegen"]) {
                var HPRegenBold = document.createElement('b');
                HPRegenBold.innerText = 'Max HP Ratio Regenerated: ';
                abilityDiv.appendChild(HPRegenBold);
                var HPRegenText = document.createTextNode(JSON.stringify(champLeftFile[ability]["maxHPRegen"]).replace(/,/g, ', '));
                abilityDiv.appendChild(HPRegenText);
                doubleBreak();
              }

              if (champLeftFile[ability]["healthRegen"]) {
                var path = champLeftFile[ability]["healthRegen"]
                var br = document.createElement('br');
                abilityDiv.appendChild(br);
                var regenB = document.createElement('b');
                regenB.innerText = 'Health Regen: ';
                abilityDiv.appendChild(regenB);
                if (path["dmgTakenRatio"]) {
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Damage Taken Ratio';
                  abilityDiv.appendChild(dmgRatioU);
                  var dmgRatioText = document.createTextNode(' - ' + JSON.stringify(path["dmgTakenRatio"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(dmgRatioText);
                }
                if (path["dmgTakenRatioByLvl"]) {
                  var regenByLvlText = document.createTextNode('[' + path["dmgTakenRatioByLvl"][0] 
                  + " to " + path["dmgTakenRatioByLvl"][17] + " Damage Taken Ratio, based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var regenByLvlText2 = document.createTextNode(': ' + path["dmgTakenRatioByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(regenByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(regenByLvlText2)
                }
                if (path["greyHealthRatioByLvl"]) {
                  singleBreak();
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Grey Health Ratio';
                  abilityDiv.appendChild(dmgRatioU);
                  var regenByLvlText = document.createTextNode(' - [' + path["greyHealthRatioByLvl"][0] 
                  + " to " + path["greyHealthRatioByLvl"][17] + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var regenByLvlText2 = document.createTextNode(': ' + path["greyHealthRatioByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(regenByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(regenByLvlText2)
                }
                if (path["maxHPRatio"]) {
                  singleBreak();
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max';
                  abilityDiv.appendChild(maxU);
                  var ratioText = document.createTextNode(' - ' + path["maxHPRatio"] + ' Max HP Ratio');
                  abilityDiv.appendChild(ratioText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["bonusAttackDamage"]) {
                var path = champLeftFile[ability]["bonusAttackDamage"]
                var bonusADBold = document.createElement('b');
                bonusADBold.innerText = 'Bonus Attack Damage: '
                abilityDiv.appendChild(bonusADBold);
                if (path['attackDamage']) {
                  var adText = document.createTextNode(JSON.stringify(path['attackDamage']).replace(/,/g, ', '));
                  abilityDiv.appendChild(adText);
                }
                if (path["ADRatio"]) {
                  var ratioText = document.createTextNode(' (+' + path["ADRatio"] + ' AD Ratio)');
                  abilityDiv.appendChild(ratioText);
                }
                if (path["attackDamagePerAPRatio"]) {
                  var adPerAPText = document.createTextNode(' (+' + path["attackDamagePerAPRatio"] + ' per Abiliy Power)');
                  abilityDiv.appendChild(adPerAPText);
                }
                if (path['minAttackDamage']) {
                  var minU = document.createElement('u');
                  minU.innerText = 'Min'
                  abilityDiv.appendChild(minU)
                  var minADText = document.createTextNode(' - ' + JSON.stringify(path['minAttackDamage']).replace(/,/g, ', '))
                  abilityDiv.appendChild(minADText);
                };
                if (path['maxAttackDamage']) {
                  singleBreak();
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max'
                  abilityDiv.appendChild(maxU)
                  var maxADText = document.createTextNode(' - ' + JSON.stringify(path['maxAttackDamage']).replace(/,/g, ', '))
                  abilityDiv.appendChild(maxADText);
                };
                if (path["duration"]) {
                  singleBreak();
                  var durU = document.createElement('u');
                  durU.innerText = 'Duration'
                  abilityDiv.appendChild(durU)
                  var durText = document.createTextNode(': ' + path['duration'])
                  abilityDiv.appendChild(durText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["bonusHPRegen"]) {
                var path = champLeftFile[ability]["bonusHPRegen"];
                var regenBold = document.createElement('b');
                regenBold.innerText = 'Bonus Health Regen: ';
                abilityDiv.appendChild(regenBold);
                if (path["HPRegenPerSecondByLvl"]) {
                  var regenByLvlText = document.createTextNode(' - [' + path["HPRegenPerSecondByLvl"][0] + " to " + 
                  path["HPRegenPerSecondByLvl"][17] + "] per second, based on lvl. Currently: " + path["HPRegenPerSecondByLvl"][champLevel]);
                  abilityDiv.appendChild(regenByLvlText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["bonusAdaptiveForce"]) {
                var path = champLeftFile[ability]["bonusAdaptiveForce"]
                var forceB = document.createElement('b');
                forceB.innerText = 'Self Bonus Adaptive Force: ';
                abilityDiv.appendChild(forceB);
                if (path["adaptiveForce"]) {
                  var forceText = document.createTextNode(JSON.stringify(path["adaptiveForce"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(forceText);
                }
                if (path["allyBonusADRatio"]) {
                  var forceText = document.createTextNode(' (+' + JSON.stringify(path["allyBonusADRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Ally Bonus AD Ratio');
                  abilityDiv.appendChild(forceText);
                }
                if (path["allyAPRatio"]) {
                  var forceText = document.createTextNode(' OR +' + JSON.stringify(path["allyAPRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Ally AP Ratio)');
                  abilityDiv.appendChild(forceText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["allyBonusAdaptiveForce"]) {
                var path = champLeftFile[ability]["allyBonusAdaptiveForce"]
                var forceB = document.createElement('b');
                forceB.innerText = 'Ally Bonus Adaptive Force: ';
                abilityDiv.appendChild(forceB);
                if (path["adaptiveAD"]) {
                  var forceText = document.createTextNode('[' + JSON.stringify(path["adaptiveAD"]).replace(/,/g, ', ')
                  .replace(/^\[|]$/g, '') + ' Attack Damage]');
                  abilityDiv.appendChild(forceText);
                }
                if (path["allyAdaptiveBonusADRatio"]) {
                  var forceText = document.createTextNode(' (+' + JSON.stringify(path["allyAdaptiveBonusADRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Ally Bonus AD Ratio)');
                  abilityDiv.appendChild(forceText);
                }
                if (path["adaptiveAP"]) {
                  var forceText = document.createTextNode(' OR [' + JSON.stringify(path["adaptiveAP"]).replace(/,/g, ', ')
                  .replace(/^\[|]$/g, '') + ' Ability Power]');
                  abilityDiv.appendChild(forceText);
                }
                if (path["allyAdaptiveAPRatio"]) {
                  var forceText = document.createTextNode(' (+' + JSON.stringify(path["allyAdaptiveAPRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Ally AP Ratio)');
                  abilityDiv.appendChild(forceText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["bonusResist"]) {
                var path = champLeftFile[ability]["bonusResist"]
                var bonusResistB = document.createElement('b');
                bonusResistB.innerText = 'Bonus Armor & Magic Resist: ';
                abilityDiv.appendChild(bonusResistB);
                if (path["resist"]) {
                  var resistText = document.createTextNode(JSON.stringify(path["resist"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(resistText);
                }
                if (path["bonusResistByLvl"]) {
                  var resistByLvlText = document.createTextNode(' - [' + path["bonusResistByLvl"][0] + " to " + 
                  path["bonusResistByLvl"][17] + "], based on lvl. Currently: " + path["bonusResistByLvl"][champLevel]);
                  abilityDiv.appendChild(resistByLvlText);
                };
                if (path["minResistByLvl"]) {
                  var minU = document.createElement('u');
                  minU.innerText = 'Min';
                  abilityDiv.appendChild(minU);
                  var minText = document.createTextNode(' - [' + path["minResistByLvl"][0] + " to " + 
                  path["minResistByLvl"][17] + ", based on lvl. Currently: " + path["minResistByLvl"][champLevel] + ']');
                  abilityDiv.appendChild(minText);
                  singleBreak();
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max';
                  abilityDiv.appendChild(maxU);
                  var maxText = document.createTextNode(' - [' + path["maxResistByLvl"][0] + " to " + 
                  path["maxResistByLvl"][17] + ", based on lvl. Currently: " + path["maxResistByLvl"][champLevel] + ']');
                  abilityDiv.appendChild(maxText);
                }
                if (path["bonusResistRatio"]) {
                  var ratioText = document.createTextNode(' (+' + path["bonusResistRatio"] + ' Bonus Resist Ratio)');
                  abilityDiv.appendChild(ratioText);
                }
                if (path["minResist"]) {
                  var minU = document.createElement('u');
                  minU.innerText = 'Min';
                  abilityDiv.appendChild(minU);
                  var minText = document.createTextNode(' - ' + JSON.stringify(path["minResist"])
                  .replace(/,/g, ', '));
                  abilityDiv.appendChild(minText);
                  singleBreak();
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max';
                  abilityDiv.appendChild(maxU);
                  var maxText = document.createTextNode(' - ' + JSON.stringify(path["maxResist"])
                  .replace(/,/g, ', '));
                  abilityDiv.appendChild(maxText);
                }
                if (path["duration"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration'
                  abilityDiv.appendChild(durationU)
                  var durationText = document.createTextNode(': ' + path["duration"])
                  abilityDiv.appendChild(durationText)
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["bonusArmorPenOnCrit"]) {
                var penPath = champLeftFile[ability]["bonusArmorPenOnCrit"]
                var penBold = document.createElement('b');
                penBold.innerText = 'Bonus-Armor Pen Ratio on Crits: '
                abilityDiv.appendChild(penBold);
                var penText = document.createTextNode(penPath["penRatio"]);
                abilityDiv.appendChild(penText);
                var br = document.createElement('br');
                abilityDiv.appendChild(br);
                var durU = document.createElement('u');
                durU.innerText = 'Duration';
                abilityDiv.appendChild(durU);
                var durText = document.createTextNode(': ' + penPath["duration"]);
                abilityDiv.appendChild(durText);
                doubleBreak();
              }

              if (champLeftFile[ability]["bonusArmor"]) {
                var bonusArmorPath = champLeftFile[ability]["bonusArmor"]
                var armorBold = document.createElement('b');
                armorBold.innerText = 'Bonus Armor: '
                abilityDiv.appendChild(armorBold);
                if (bonusArmorPath["armor"]) {
                  var armorText = document.createTextNode(JSON.stringify(bonusArmorPath["armor"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(armorText);
                };
                if (bonusArmorPath["armorRatio"]) {
                  var armorRatioText = document.createTextNode(' (+' + JSON.stringify(bonusArmorPath["armorRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Armor Ratio)');
                  abilityDiv.appendChild(armorRatioText);
                };
                if (bonusArmorPath["bonusArmorRatio"]) {
                  var armorRatioText = document.createTextNode(' (+' + JSON.stringify(bonusArmorPath["bonusArmorRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Bonus Armor Ratio)');
                  abilityDiv.appendChild(armorRatioText);
                };
                if (bonusArmorPath["bonusADRatio"]) {
                  var ADRatioText = document.createTextNode(' (+' + JSON.stringify(bonusArmorPath["bonusADRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Bonus AD Ratio)');
                  abilityDiv.appendChild(ADRatioText);
                }
                if (bonusArmorPath["system"] === 'minMax') {
                  var minU = document.createElement('u');
                  minU.innerText = 'Min';
                  abilityDiv.appendChild(minU);
                  if (bonusArmorPath["minArmor"]) {
                    var armorText = document.createTextNode(' - ' + JSON.stringify(bonusArmorPath["minArmor"]).replace(/,/g, ', '));
                    abilityDiv.appendChild(armorText)
                  };
                  singleBreak();
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max';
                  abilityDiv.appendChild(maxU);
                  if (bonusArmorPath["maxArmor"]) {
                    var armorText = document.createTextNode(' - ' + JSON.stringify(bonusArmorPath["maxArmor"]).replace(/,/g, ', '));
                    abilityDiv.appendChild(armorText)
                  };
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["allyBonusArmor"]) {
                var bonusArmorPath = champLeftFile[ability]["allyBonusArmor"]
                var armorBold = document.createElement('b');
                armorBold.innerText = 'Ally Bonus Armor: '
                abilityDiv.appendChild(armorBold);
                if (bonusArmorPath["armor"]) {
                  var armorText = document.createTextNode(JSON.stringify(bonusArmorPath["armor"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(armorText);
                };
                if (bonusArmorPath["armorRatio"]) {
                  var armorRatioText = document.createTextNode(' (+' + JSON.stringify(bonusArmorPath["armorRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Armor Ratio)');
                  abilityDiv.appendChild(armorRatioText);
                };
                if (bonusArmorPath["bonusArmorRatio"]) {
                  var armorRatioText = document.createTextNode(' (+' + JSON.stringify(bonusArmorPath["bonusArmorRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Armor Ratio)');
                  abilityDiv.appendChild(armorRatioText);
                };
                doubleBreak();
              }

              if (champLeftFile[ability]["bonusMagicResist"]) {
                var bonusMagicpath = champLeftFile[ability]["bonusMagicResist"]
                var magicResistBold = document.createElement('b');
                magicResistBold.innerText = 'Bonus Magic Resist: '
                abilityDiv.appendChild(magicResistBold);
                if (bonusMagicpath["magicResist"]) {
                  var magicResistText = document.createTextNode(JSON.stringify(bonusMagicpath["magicResist"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(magicResistText);
                };
                if (bonusMagicpath["magicResistRatio"]) {
                  var magicResistRatioText = document.createTextNode(' (+' + JSON.stringify(bonusMagicpath["magicResistRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Magic Resist Ratio)');
                  abilityDiv.appendChild(magicResistRatioText);
                };
                if (bonusMagicpath["bonusMagicResistRatio"]) {
                  var magicResistRatioText = document.createTextNode(' (+' + JSON.stringify(bonusMagicpath["bonusMagicResistRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Magic Resist Ratio)');
                  abilityDiv.appendChild(magicResistRatioText);
                };
                if (bonusMagicpath["APRatio"]) {
                  var APRatioText = document.createTextNode(' (+' + JSON.stringify(bonusMagicpath["APRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AP Ratio)');
                  abilityDiv.appendChild(APRatioText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["allyBonusMagicResist"]) {
                var bonusMagicpath = champLeftFile[ability]["allyBonusMagicResist"]
                var magicResistBold = document.createElement('b');
                magicResistBold.innerText = 'Ally Bonus Magic Resist: '
                abilityDiv.appendChild(magicResistBold);
                if (bonusMagicpath["magicResist"]) {
                  var magicResistText = document.createTextNode(JSON.stringify(bonusMagicpath["magicResist"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(magicResistText);
                };
                if (bonusMagicpath["magicResistRatio"]) {
                  var magicResistRatioText = document.createTextNode(' (+' + JSON.stringify(bonusMagicpath["magicResistRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Magic Resist Ratio)');
                  abilityDiv.appendChild(magicResistRatioText);
                };
                if (bonusMagicpath["bonusMagicResistRatio"]) {
                  var magicResistRatioText = document.createTextNode(' (+' + JSON.stringify(bonusMagicpath["bonusMagicResistRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Magic Resist Ratio)');
                  abilityDiv.appendChild(magicResistRatioText);
                };
                doubleBreak();
              }

              if (champLeftFile[ability]["bonusAttackSpeed"]) {
                var ASPath = champLeftFile[ability]["bonusAttackSpeed"];
                var bonusASBold = document.createElement('b');
                bonusASBold.innerText = 'Bonus Attack Speed Ratio: '
                abilityDiv.appendChild(bonusASBold);
                if (ASPath['attackSpeed']) {
                  var bonusASRatio = document.createTextNode(JSON.stringify(ASPath['attackSpeed'])
                  .replace(/,/g, ', '))
                  abilityDiv.appendChild(bonusASRatio);
                }
                if (ASPath["totalAttackSpeed"]) {
                  var bonusASRatio = document.createTextNode(JSON.stringify(ASPath['totalAttackSpeed'])
                  .replace(/,/g, ', ') + ' Total Attack Speed')
                  abilityDiv.appendChild(bonusASRatio);
                }
                if (ASPath["attackSpeedByLvl"]) {
                  var ASByLvlText = document.createTextNode(' - [' + ASPath["attackSpeedByLvl"][0] + " to " + 
                  ASPath["attackSpeedByLvl"][17] + ", based on lvl. ");
                  abilityDiv.appendChild(ASByLvlText);
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = 'Currently';
                  abilityDiv.appendChild(currentlyU);
                  var asByLvlText2 = document.createTextNode(': ' + ASPath["attackSpeedByLvl"][champLevel] + ']');
                  abilityDiv.appendChild(asByLvlText2);
                }
                if (ASPath["attackSpeedByRRank"]) {
                  var bonusASRatio = document.createTextNode(JSON.stringify(ASPath['attackSpeedByRRank'])
                  .replace(/,/g, ', ') + ' (based on R rank)')
                  abilityDiv.appendChild(bonusASRatio);
                }
                if (ASPath["attackSpeedPerStack"]) {
                  var stackText = document.createTextNode(' (+' + ASPath["attackSpeedPerStack"] + ' per stack)');
                  abilityDiv.appendChild(stackText);
                }
                if (ASPath['minAttackSpeed']) {
                  var minASU = document.createElement('u');
                  minASU.innerText = 'Min'
                  abilityDiv.appendChild(minASU);
                  var minASRatio = document.createTextNode(' - ' + JSON.stringify(ASPath['minAttackSpeed'])
                  .replace(/,/g, ', '));
                  abilityDiv.appendChild(minASRatio)
                  if (ASPath["minBonusAttackSpeedRatio"]) {
                    var ratioText = document.createTextNode(' (+' + ASPath["minBonusAttackSpeedRatio"]
                    + ' Bonus Attack Speed)');
                    abilityDiv.appendChild(ratioText);
                  }
                  if (ASPath["minAttackSpeedPer100AP"]) {
                    var text = document.createTextNode(' (+' + ASPath["minAttackSpeedPer100AP"]
                    + ' per 100 AP)');
                    abilityDiv.appendChild(text);
                  }
                  var br = document.createElement('br')
                  abilityDiv.appendChild(br)
                  var maxASU = document.createElement('u');
                  maxASU.innerText = 'Max'
                  abilityDiv.appendChild(maxASU);
                  var maxASRatio = document.createTextNode(' - ' + JSON.stringify(ASPath['maxAttackSpeed'])
                  .replace(/,/g, ', '));
                  abilityDiv.appendChild(maxASRatio)
                  if (ASPath["maxBonusAttackSpeedRatio"]) {
                    var ratioText = document.createTextNode(' (+' + ASPath["maxBonusAttackSpeedRatio"]
                    + ' Bonus Attack Speed)');
                    abilityDiv.appendChild(ratioText);
                  }
                  if (ASPath["maxAttackSpeedPer100AP"]) {
                    var text = document.createTextNode(' (+' + ASPath["maxAttackSpeedPer100AP"]
                    + ' per 100 AP)');
                    abilityDiv.appendChild(text);
                  }
                }
                if (ASPath["minAttackSpeedByLvl"]) {
                  var minASU = document.createElement('u');
                  minASU.innerText = 'Min'
                  abilityDiv.appendChild(minASU);
                  var ASByLvlText = document.createTextNode(' - [' + ASPath["minAttackSpeedByLvl"][0] + " to " + 
                  ASPath["minAttackSpeedByLvl"][17] + "], based on lvl. Currently: " + ASPath["minAttackSpeedByLvl"][champLevel]);
                  abilityDiv.appendChild(ASByLvlText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var maxASU = document.createElement('u');
                  maxASU.innerText = 'Max'
                  abilityDiv.appendChild(maxASU);
                  if (ASPath["maxAttackSpeedByLvl"]) {
                    var maxASByLvlText = document.createTextNode(' - [' + ASPath["maxAttackSpeedByLvl"][0] + " to " + 
                    ASPath["maxAttackSpeedByLvl"][17] + "], based on lvl. Currently: " + ASPath["maxAttackSpeedByLvl"][champLevel]);
                    abilityDiv.appendChild(maxASByLvlText);
                  }
                }
                if (ASPath["duration"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration'
                  abilityDiv.appendChild(durationU)
                  var durationText = document.createTextNode(' - ' + JSON.stringify(ASPath["duration"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(durationText)
                }
                if (ASPath["minDuration"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var minDurationU = document.createElement('u');
                  minDurationU.innerText = 'Min Duration'
                  abilityDiv.appendChild(minDurationU)
                  var minDurationText = document.createTextNode(' - ' + ASPath["minDuration"])
                  abilityDiv.appendChild(minDurationText)
                  if (ASPath['maxDuration']) {
                    var maxDurationU = document.createElement('u');
                    maxDurationU.innerText = ', Max Duration'
                    abilityDiv.appendChild(maxDurationU)
                    var maxDurationText = document.createTextNode(' - ' + ASPath["maxDuration"])
                    abilityDiv.appendChild(maxDurationText)
                  }
                }
                if (ASPath["durationAutos"]) {
                  var durationText = document.createTextNode(' for ' + ASPath["durationAutos"] + ' attacks.');
                  abilityDiv.appendChild(durationText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["bonusOmniVamp"]) {
                var vampPath = champLeftFile[ability]["bonusOmniVamp"];
                var vampBold = document.createElement('b');
                vampBold.innerText = 'Bonus Omni Vamp Ratio: '
                abilityDiv.appendChild(vampBold);
                if (vampPath['vamp']) {
                  var vampRatio = document.createTextNode(JSON.stringify(vampPath['vamp'])
                  .replace(/,/g, ', '))
                  abilityDiv.appendChild(vampRatio);
                };
                if (vampPath["duration"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration'
                  abilityDiv.appendChild(durationU)
                  var durationText = document.createTextNode(' - ' + vampPath["duration"])
                  abilityDiv.appendChild(durationText)
                };
                doubleBreak();
              }

              if (champLeftFile[ability]["bonusMoveSpeed"]) {
                var msPath = champLeftFile[ability]["bonusMoveSpeed"]
                var moveSpeedB = document.createElement('b');
                moveSpeedB.innerText = 'Bonus Movement Speed: ';
                abilityDiv.appendChild(moveSpeedB);
                if (msPath["minBonusMSRatio"]) {
                  var minU = document.createElement('u');
                  minU.innerText = 'Min Ratio';
                  abilityDiv.appendChild(minU);
                  var msRatioText = document.createTextNode(' - ' + msPath["minBonusMSRatio"]);
                  abilityDiv.appendChild(msRatioText);
                };
                if (msPath["maxBonusMSRatio"]) {
                  singleBreak();
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max Ratio';
                  abilityDiv.appendChild(maxU);
                  var msRatioText = document.createTextNode(' - ' + msPath["maxBonusMSRatio"]);
                  abilityDiv.appendChild(msRatioText);
                };
                if (msPath["duration"]) {
                  singleBreak();
                  var durationU = document.createElement('u');
                  durationU.innerText = "Duration"
                  abilityDiv.appendChild(durationU)
                  var durationText = document.createTextNode(': ' + msPath["duration"])
                  abilityDiv.appendChild(durationText)
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["cripple"]) {
                var path = champLeftFile[ability]["cripple"];
                var crippleB = document.createElement('b');
                crippleB.innerText = 'Attack Speed Cripple: ';
                abilityDiv.appendChild(crippleB);
                if (path["attackSpeed"]) {
                  var crippleText = document.createTextNode(JSON.stringify(path["attackSpeed"])
                  .replace(/,/g, ', '));
                  abilityDiv.appendChild(crippleText);
                }
                if (path["minAttackSpeed"]) {
                  var minU = document.createElement('u');
                  minU.innerText = 'Min';
                  abilityDiv.appendChild(minU);
                  var minText = document.createTextNode(' - ' + path["minAttackSpeed"]);
                  abilityDiv.appendChild(minText);
                  singleBreak();
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max';
                  abilityDiv.appendChild(maxU);
                  var maxText = document.createTextNode(' - ' + JSON.stringify(path["maxAttackSpeed"])
                  .replace(/,/g, ', '));
                  abilityDiv.appendChild(maxText);
                }
                if (path["duration"]) {
                  singleBreak();
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration';
                  abilityDiv.appendChild(durationU);
                  var durationText = document.createTextNode(': ' + path["duration"]);
                  abilityDiv.appendChild(durationText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["petStats"]) {
                var path = champLeftFile[ability]["petStats"];
                var petB = document.createElement('b');
                petB.innerText = 'Pet Stats: ';
                abilityDiv.appendChild(petB);
                if (path["auto"]) {
                  var autoU = document.createElement('u');
                  autoU.innerText = 'Auto Attack';
                  abilityDiv.appendChild(autoU);
                  var typeText = document.createTextNode(': ' + path["auto"]["type"] + ' Damage: ');
                  abilityDiv.appendChild(typeText);
                  if (path["auto"]["dmg"]) {
                    var autoDmgText = document.createTextNode(JSON.stringify(path["auto"]["dmg"]).replace(/,/g, ', '));
                    abilityDiv.appendChild(autoDmgText);
                  }
                  if (path['auto']['dmgByLvl']) {
                    var dmgByLvlText = document.createTextNode(' [' + path["auto"]["dmgByLvl"][0] + " to " 
                    + path["auto"]["dmgByLvl"][17] + ", based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var dmgBylvlText2 = document.createTextNode(': ' + path["auto"]["dmgByLvl"][champLevel] + ']')
                    abilityDiv.appendChild(dmgByLvlText);
                    abilityDiv.appendChild(currentlyU)
                    abilityDiv.appendChild(dmgBylvlText2)
                  }
                  if (path["auto"]["APRatio"]) {
                    var APRatioText = document.createTextNode(' (+' + JSON.stringify(path["auto"]["APRatio"])
                    .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AP Ratio)');
                    abilityDiv.appendChild(APRatioText);
                  }
                  if (path["auto"]["ADRatio"]) {
                    var ADRatioText = document.createTextNode(' (' + JSON.stringify(path["auto"]["ADRatio"])
                    .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AD Ratio)');
                    abilityDiv.appendChild(ADRatioText);
                  }
                  if (path["auto"]["bonusADRatio"]) {
                    var ADRatioText = document.createTextNode(' (+' + JSON.stringify(path["auto"]["bonusADRatio"])
                    .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Bonus AD Ratio)');
                    abilityDiv.appendChild(ADRatioText);
                  }
                  if (path["auto"]["enemyMaxHPRatio"]) {
                    var ratioText = document.createTextNode(' (+' + path["auto"]["enemyMaxHPRatio"]
                    + ' Enemy Max HP Ratio)');
                    abilityDiv.appendChild(ratioText);
                  }
                  if (path["auto"]["system"] === 'minMax') {
                    var minText = document.createTextNode('Min - ');
                    abilityDiv.appendChild(minText);
                    if (path["auto"]["minDmgByLvl"]) {
                      var dmgByLvlText = document.createTextNode(' [' + path["auto"]["minDmgByLvl"][0] + " to " 
                      + path["auto"]["minDmgByLvl"][17] + ", based on lvl. ");
                      var currentlyU = document.createElement('u');
                      currentlyU.innerText = "Currently";
                      var dmgBylvlText2 = document.createTextNode(': ' + path["auto"]["minDmgByLvl"][champLevel] + ']')
                      abilityDiv.appendChild(dmgByLvlText);
                      abilityDiv.appendChild(currentlyU)
                      abilityDiv.appendChild(dmgBylvlText2)
                    }
                    if (path["auto"]["minAPRatio"]) {
                      var ratioText = document.createTextNode(' (+' + path["auto"]["minAPRatio"] + ' AP Ratio)');
                      abilityDiv.appendChild(ratioText);
                    }
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var maxText = document.createTextNode('Max - ');
                    abilityDiv.appendChild(maxText);
                    if (path["auto"]["maxDmgByLvl"]) {
                      var dmgByLvlText = document.createTextNode(' [' + path["auto"]["maxDmgByLvl"][0] + " to " 
                      + path["auto"]["maxDmgByLvl"][17] + ", based on lvl. ");
                      var currentlyU = document.createElement('u');
                      currentlyU.innerText = "Currently";
                      var dmgBylvlText2 = document.createTextNode(': ' + path["auto"]["maxDmgByLvl"][champLevel] + ']')
                      abilityDiv.appendChild(dmgByLvlText);
                      abilityDiv.appendChild(currentlyU)
                      abilityDiv.appendChild(dmgBylvlText2)
                    }
                    if (path["auto"]["maxAPRatio"]) {
                      var ratioText = document.createTextNode(' (+' + path["auto"]["maxAPRatio"] + ' AP Ratio)');
                      abilityDiv.appendChild(ratioText);
                    }
                  }
                  if (path["auto"]["multiHitDmgRatio"]) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var multiU = document.createElement('u');
                    multiU.innerText = 'Multi-Hit Damage Ratio';
                    abilityDiv.appendChild(multiU);
                    var multiText = document.createTextNode(': ' + path["auto"]["multiHitDmgRatio"]);
                    abilityDiv.appendChild(multiText);
                  }
                };
                if (path["attackSpeed"] || path["attackSpeedByLvl"] || path["minAttackSpeed"]) {
                  singleBreak();
                  var asU = document.createElement('u');
                  asU.innerText = 'Attack Speed';
                  abilityDiv.appendChild(asU);
                }
                if (path["attackSpeed"]) {
                  var asText = document.createTextNode(': ' + JSON.stringify(path["attackSpeed"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(asText);
                };
                if (path["attackSpeedByLvl"]) {
                  var asByLvlText = document.createTextNode(': [' + path["attackSpeedByLvl"][0] + " to " 
                  + path["attackSpeedByLvl"][17] + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var asBylvlText2 = document.createTextNode(': ' + path["attackSpeedByLvl"][champLevel] + ']')
                  abilityDiv.appendChild(asByLvlText);
                  abilityDiv.appendChild(currentlyU)
                  abilityDiv.appendChild(asBylvlText2)
                }
                if (path["minAttackSpeed"]) {
                  var asText = document.createTextNode(': Min - ' + path["minAttackSpeed"] + ', Max - ' 
                    + path["maxAttackSpeed"]);
                  abilityDiv.appendChild(asText);
                };
                if (path["attackSpeedRatio"]) {
                  singleBreak();
                  var asU = document.createElement('u');
                  asU.innerText = 'Attack Speed Ratio';
                  abilityDiv.appendChild(asU);
                  var asText = document.createTextNode(': ' + path["attackSpeedRatio"]);
                  abilityDiv.appendChild(asText);
                };
                if (path["bonusAttackSpeed"]) {
                  var text = document.createTextNode(' (+' + JSON.stringify(path["bonusAttackSpeed"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')');
                  abilityDiv.appendChild(text);
                }
                if (path["healthRatio"]) {
                  singleBreak();
                  var asU = document.createElement('u');
                  asU.innerText = 'Health Ratio';
                  abilityDiv.appendChild(asU);
                  var asText = document.createTextNode(': ' + path["healthRatio"]);
                  abilityDiv.appendChild(asText);
                };
                if (path["armorRatio"]) {
                  singleBreak();
                  var asU = document.createElement('u');
                  asU.innerText = 'Armor Ratio';
                  abilityDiv.appendChild(asU);
                  var asText = document.createTextNode(': ' + path["armorRatio"]);
                  abilityDiv.appendChild(asText);
                };
                if (path["magicResistRatio"]) {
                  singleBreak();
                  var asU = document.createElement('u');
                  asU.innerText = 'Magic Resist Ratio';
                  abilityDiv.appendChild(asU);
                  var asText = document.createTextNode(': ' + path["magicResistRatio"]);
                  abilityDiv.appendChild(asText);
                };
                if (path["health"]) {
                  singleBreak();
                  var healthU = document.createElement('u');
                  healthU.innerText = 'Health';
                  abilityDiv.appendChild(healthU);
                  var healthText = document.createTextNode(': ' + JSON.stringify(path["health"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(healthText);
                };
                if (path["healthByLvl"]) {
                  singleBreak();
                  var healthU = document.createElement('u');
                  healthU.innerText = 'Health';
                  abilityDiv.appendChild(healthU);
                  var healthByLvlText = document.createTextNode(': [' + path["healthByLvl"][0] + " to " + path["healthByLvl"][17]
                  + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var healthBylvlText2 = document.createTextNode(': ' + path["healthByLvl"][champLevel] + ']')
                  abilityDiv.appendChild(healthByLvlText);
                  abilityDiv.appendChild(currentlyU)
                  abilityDiv.appendChild(healthBylvlText2)
                  if (path["healthPerAPRatioByLvl"]) {
                    var healthByLvlText = document.createTextNode(' (+' + path["healthPerAPRatioByLvl"][0] + " to " 
                    + path["healthPerAPRatioByLvl"][17] + " per Ability Power, based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var healthBylvlText2 = document.createTextNode(': ' + path["healthPerAPRatioByLvl"][champLevel] + ')')
                    abilityDiv.appendChild(healthByLvlText);
                    abilityDiv.appendChild(currentlyU)
                    abilityDiv.appendChild(healthBylvlText2)
                  }
                };
                if (path["maxHPRatio"]) {
                  var hpText = document.createTextNode(' (+' + path["maxHPRatio"] + ' Max HP Ratio)');
                  abilityDiv.appendChild(hpText);
                }
                if (path["healthPerAPRatio"]) {
                  var healthPerAPText = document.createTextNode(' (+' + path["healthPerAPRatio"] + ' per AP)');
                  abilityDiv.appendChild(healthPerAPText);
                }
                if (path["armor"]) {
                  singleBreak();
                  var armorU = document.createElement('u');
                  armorU.innerText = 'Armor';
                  abilityDiv.appendChild(armorU);
                  var armorText = document.createTextNode(': ' + JSON.stringify(path["armor"]).replace(/,/g, ', ').replace(/"/g,""));
                  abilityDiv.appendChild(armorText);
                };
                if (path["armorByLvl"]) {
                  singleBreak();
                  var armorU = document.createElement('u');
                  armorU.innerText = 'Armor';
                  abilityDiv.appendChild(armorU);
                  var armorByLvlText = document.createTextNode(': [' + path["armorByLvl"][0] + " to " + path["armorByLvl"][17]
                  + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var armorBylvlText2 = document.createTextNode(': ' + path["armorByLvl"][champLevel] + ']')
                  abilityDiv.appendChild(armorByLvlText);
                  abilityDiv.appendChild(currentlyU)
                  abilityDiv.appendChild(armorBylvlText2)
                };
                if (path["armorPerAPRatio"]) {
                  var armorPerAPText = document.createTextNode(' (+' + path["armorPerAPRatio"] + ' per AP)');
                  abilityDiv.appendChild(armorPerAPText);
                }
                if (path["magicResist"]) {
                  singleBreak();
                  var magicResistU = document.createElement('u');
                  magicResistU.innerText = 'Magic Resist';
                  abilityDiv.appendChild(magicResistU);
                  var magicResistText = document.createTextNode(': ' + JSON.stringify(path["magicResist"]).replace(/,/g, ', ').replace(/"/g,""));
                  abilityDiv.appendChild(magicResistText);
                };
                if (path["magicResistByLvl"]) {
                  singleBreak();
                  var magicResistU = document.createElement('u');
                  magicResistU.innerText = 'Magic Resist';
                  abilityDiv.appendChild(magicResistU);
                  var magicResistByLvlText = document.createTextNode(': [' + path["magicResistByLvl"][0] + " to " + path["magicResistByLvl"][17]
                  + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var magicResistBylvlText2 = document.createTextNode(': ' + path["magicResistByLvl"][champLevel] + ']')
                  abilityDiv.appendChild(magicResistByLvlText);
                  abilityDiv.appendChild(currentlyU)
                  abilityDiv.appendChild(magicResistBylvlText2)
                };
                if (path["magicResistPerAPRatio"]) {
                  var magicResistPerAPText = document.createTextNode(' (+' + path["magicResistPerAPRatio"] + ' per AP)');
                  abilityDiv.appendChild(magicResistPerAPText);
                }
                if (path["interruptCC"]) {
                  singleBreak();
                  var interruptCCU = document.createElement('u');
                  interruptCCU.innerText = 'Crowd Control Duration';
                  abilityDiv.appendChild(interruptCCU);
                  var ccText = document.createTextNode(': ' + path["interruptCC"]);
                  abilityDiv.appendChild(ccText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["empower"]) {
                var ePath = champLeftFile[ability]["empower"];
                var empowerB = document.createElement('b');
                var empowerU = document.createElement('u');
                empowerB.appendChild(empowerU);
                empowerU.innerText = 'Empower';
                abilityDiv.appendChild(empowerB);
                doubleBreak();
                if (ePath['Q']) {
                  var qB = document.createElement('b');
                  var qU = document.createElement('u');
                  qB.appendChild(qU);
                  qU.innerText = 'Q: ';
                  abilityDiv.appendChild(qB);
                  if (ePath['Q']["petStats"]) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var path = champLeftFile[ability]["empower"]["Q"]["petStats"];
                    var petB = document.createElement('b');
                    petB.innerText = 'Pet Stats: ';
                    abilityDiv.appendChild(petB);
                    if (path["auto"]) {
                      var autoU = document.createElement('u');
                      autoU.innerText = 'Auto Attack';
                      abilityDiv.appendChild(autoU);
                      var typeText = document.createTextNode(': ' + path["auto"]["type"] + ' Damage - ');
                      abilityDiv.appendChild(typeText);
                      if (path["auto"]["dmg"]) {
                        var autoDmgText = document.createTextNode(JSON.stringify(path["auto"]["dmg"]).replace(/,/g, ', '));
                        abilityDiv.appendChild(autoDmgText);
                      }
                      if (path["auto"]["APRatio"]) {
                        var APRatioText = document.createTextNode(' (+' + JSON.stringify(path["auto"]["APRatio"])
                        .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AP Ratio)');
                        abilityDiv.appendChild(APRatioText);
                      }
                    };
                    if (path["attackSpeed"]) {
                      var br = document.createElement('br');
                      abilityDiv.appendChild(br);
                      var asU = document.createElement('u');
                      asU.innerText = 'Attack Speed';
                      abilityDiv.appendChild(asU);
                      var asText = document.createTextNode(': ' + path["attackSpeed"]);
                      abilityDiv.appendChild(asText);
                    };
                    if (path["healthByLvl"]) {
                      var br = document.createElement('br');
                      abilityDiv.appendChild(br);
                      var healthU = document.createElement('u');
                      healthU.innerText = 'Health';
                      abilityDiv.appendChild(healthU);
                      var healthByLvlText = document.createTextNode(': [' + path["healthByLvl"][0] + " to " + path["healthByLvl"][17]
                      + ", based on lvl. ");
                      var currentlyU = document.createElement('u');
                      currentlyU.innerText = "Currently";
                      var healthBylvlText2 = document.createTextNode(': ' + path["healthByLvl"][champLevel] + ']')
                      abilityDiv.appendChild(healthByLvlText);
                      abilityDiv.appendChild(currentlyU)
                      abilityDiv.appendChild(healthBylvlText2)
                      if (path["healthPerAPRatioByLvl"]) {
                        var healthByLvlText = document.createTextNode(' (+' + path["healthPerAPRatioByLvl"][0] + " to " 
                        + path["healthPerAPRatioByLvl"][17] + " per Ability Power, based on lvl. ");
                        var currentlyU = document.createElement('u');
                        currentlyU.innerText = "Currently";
                        var healthBylvlText2 = document.createTextNode(': ' + path["healthPerAPRatioByLvl"][champLevel] + ')')
                        abilityDiv.appendChild(healthByLvlText);
                        abilityDiv.appendChild(currentlyU)
                        abilityDiv.appendChild(healthBylvlText2)
                      }
                    };
                    if (path["armorByLvl"]) {
                      var br = document.createElement('br');
                      abilityDiv.appendChild(br);
                      var armorU = document.createElement('u');
                      armorU.innerText = 'Armor';
                      abilityDiv.appendChild(armorU);
                      var armorByLvlText = document.createTextNode(': [' + path["armorByLvl"][0] + " to " + path["armorByLvl"][17]
                      + ", based on lvl. ");
                      var currentlyU = document.createElement('u');
                      currentlyU.innerText = "Currently";
                      var armorBylvlText2 = document.createTextNode(': ' + path["armorByLvl"][champLevel] + ']')
                      abilityDiv.appendChild(armorByLvlText);
                      abilityDiv.appendChild(currentlyU)
                      abilityDiv.appendChild(armorBylvlText2)
                    };
                    if (path["magicResistByLvl"]) {
                      var br = document.createElement('br');
                      abilityDiv.appendChild(br);
                      var magicResistU = document.createElement('u');
                      magicResistU.innerText = 'Magic Resist';
                      abilityDiv.appendChild(magicResistU);
                      var magicResistByLvlText = document.createTextNode(': [' + path["magicResistByLvl"][0] + " to " + path["magicResistByLvl"][17]
                      + ", based on lvl. ");
                      var currentlyU = document.createElement('u');
                      currentlyU.innerText = "Currently";
                      var magicResistBylvlText2 = document.createTextNode(': ' + path["magicResistByLvl"][champLevel] + ']')
                      abilityDiv.appendChild(magicResistByLvlText);
                      abilityDiv.appendChild(currentlyU)
                      abilityDiv.appendChild(magicResistBylvlText2)
                    }
                  };
                  if (ePath['Q']['damage']) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var damage = ePath['Q']["damage"]
                    if (damage["type"]) {
                      var dmgTypeBold = document.createElement('b')
                      dmgTypeBold.innerText = damage["type"] + " Damage: "
                      abilityDiv.appendChild(dmgTypeBold);
                    };
                    if (damage["dmg"]) {
                      var dmgArrayText = document.createTextNode(JSON.stringify(damage["dmg"]).replace(/,/g, ', '));
                      abilityDiv.appendChild(dmgArrayText);
                    };
                    if (damage["APRatio"]) {
                      var APRatioText = document.createTextNode(' (+' + JSON.stringify(damage["APRatio"])
                        .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AP Ratio)');
                      abilityDiv.appendChild(APRatioText);
                    }
                    if (damage["system"] === 'minMax') {
                      var minU = document.createElement('u');
                      minU.innerText = 'Min';
                      abilityDiv.appendChild(minU);
                      if (damage["minDmg"]) {
                        var dmgText = document.createTextNode(' - ' + JSON.stringify(damage["minDmg"]).replace(/,/g, ', '));
                        abilityDiv.appendChild(dmgText);
                      }
                      if (damage["minAPRatio"]) {
                        var APRatioText = document.createTextNode(' (+' + JSON.stringify(damage["minAPRatio"])
                          .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AP Ratio)');
                        abilityDiv.appendChild(APRatioText);
                      }
                      var br = document.createElement('br');
                      abilityDiv.appendChild(br);
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max';
                      abilityDiv.appendChild(maxU);
                      if (damage["maxDmg"]) {
                        var dmgText = document.createTextNode(' - ' + JSON.stringify(damage["maxDmg"]).replace(/,/g, ', '));
                        abilityDiv.appendChild(dmgText);
                      }
                      if (damage["maxAPRatio"]) {
                        var APRatioText = document.createTextNode(' (+' + JSON.stringify(damage["maxAPRatio"])
                          .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AP Ratio)');
                        abilityDiv.appendChild(APRatioText);
                      }
                    };
                  }
                  if (ePath['Q']['bonusDamage']) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var damage = ePath['Q']["bonusDamage"]
                    if (damage["type"]) {
                      var dmgTypeBold = document.createElement('b')
                      dmgTypeBold.innerText = 'Bonus ' + damage["type"] + " Damage: "
                      abilityDiv.appendChild(dmgTypeBold);
                    };
                    if (damage["system"] === 'minMax') {
                      var minU = document.createElement('u');
                      minU.innerText = 'Min';
                      abilityDiv.appendChild(minU);
                      if (damage["minDmg"]) {
                        var dmgArrayText = document.createTextNode(' - ' + JSON.stringify(damage["minDmg"]).replace(/,/g, ', '));
                        abilityDiv.appendChild(dmgArrayText);
                      };
                      if (damage["minAPRatio"]) {
                        var APRatioText = document.createTextNode(' (+' + JSON.stringify(damage["minAPRatio"])
                          .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AP Ratio)');
                        abilityDiv.appendChild(APRatioText);
                      }
                      var br = document.createElement('br');
                      abilityDiv.appendChild(br);
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max';
                      abilityDiv.appendChild(maxU);
                      if (damage["maxDmg"]) {
                        var dmgArrayText = document.createTextNode(' - ' + JSON.stringify(damage["maxDmg"]).replace(/,/g, ', '));
                        abilityDiv.appendChild(dmgArrayText);
                      };
                      if (damage["maxAPRatio"]) {
                        var APRatioText = document.createTextNode(' (+' + JSON.stringify(damage["maxAPRatio"])
                          .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AP Ratio)');
                        abilityDiv.appendChild(APRatioText);
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
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var damage = ePath['W']["damage"]
                    if (damage["type"]) {
                      var dmgTypeBold = document.createElement('b')
                      dmgTypeBold.innerText = damage["type"] + " Damage: "
                      abilityDiv.appendChild(dmgTypeBold);
                    };
                    if (damage["dmg"]) {
                      var dmgArrayText = document.createTextNode(JSON.stringify(damage["dmg"]).replace(/,/g, ', '));
                      abilityDiv.appendChild(dmgArrayText);
                    };
                    if (damage["APRatio"]) {
                      var APRatioText = document.createTextNode(' (+' + JSON.stringify(damage["APRatio"])
                        .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AP Ratio)');
                      abilityDiv.appendChild(APRatioText);
                    }
                    if (damage["system"] === 'minMax') {
                      var minU = document.createElement('u');
                      minU.innerText = 'Min';
                      abilityDiv.appendChild(minU);
                      if (damage["minDmg"]) {
                        var minDmgText = document.createTextNode(' - ' + JSON.stringify(damage["minDmg"]).replace(/,/g, ', '));
                        abilityDiv.appendChild(minDmgText);
                        if (damage["minAPRatio"]) {
                          var APRatioText = document.createTextNode(' (+' + JSON.stringify(damage["minAPRatio"])
                            .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AP Ratio)');
                          abilityDiv.appendChild(APRatioText);
                        }
                      }
                      var br = document.createElement('br');
                      abilityDiv.appendChild(br);
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max';
                      abilityDiv.appendChild(maxU);
                      if (damage["maxDmg"]) {
                        var minDmgText = document.createTextNode(' - ' + JSON.stringify(damage["maxDmg"]).replace(/,/g, ', '));
                        abilityDiv.appendChild(minDmgText);
                        if (damage["maxAPRatio"]) {
                          var APRatioText = document.createTextNode(' (+' + JSON.stringify(damage["maxAPRatio"])
                            .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AP Ratio)');
                          abilityDiv.appendChild(APRatioText);
                        }
                      }
                    };
                  }
                  if (ePath['W']['heal']) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var healPath = ePath['W']['heal']
                    var healBold = document.createElement('b');
                    healBold.innerText = 'Heal: '
                    abilityDiv.appendChild(healBold)
                    if (healPath['system'] === 'minMax') {
                      var minU = document.createElement('u');
                      minU.innerText = 'Min';
                      abilityDiv.appendChild(minU);
                      if (healPath["minMissingHPRatio"]) {
                        var healText = document.createTextNode(' - (' + JSON.stringify(healPath["minMissingHPRatio"])
                        .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Missing HP Ratio)');
                        abilityDiv.appendChild(healText);
                      }
                      if (healPath["minMissingHPRatioPer100AP"]) {
                        var healText = document.createTextNode(' (+' + JSON.stringify(healPath["minMissingHPRatioPer100AP"])
                        .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Missing HP Ratio per 100 AP)');
                        abilityDiv.appendChild(healText);
                      }
                      var br = document.createElement('br');
                      abilityDiv.appendChild(br);
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max';
                      abilityDiv.appendChild(maxU);
                      if (healPath["maxMissingHPRatio"]) {
                        var healText = document.createTextNode(' - (' + JSON.stringify(healPath["maxMissingHPRatio"])
                        .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Missing HP Ratio)');
                        abilityDiv.appendChild(healText);
                      }
                      if (healPath["maxMissingHPRatioPer100AP"]) {
                        var healText = document.createTextNode(' (+' + JSON.stringify(healPath["maxMissingHPRatioPer100AP"])
                        .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Missing HP Ratio per 100 AP)');
                        abilityDiv.appendChild(healText);
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
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var damage = ePath['E']["damage"]
                    if (damage["type"]) {
                      var dmgTypeBold = document.createElement('b')
                      dmgTypeBold.innerText = damage["type"] + " Damage: "
                      abilityDiv.appendChild(dmgTypeBold);
                    };
                    if (damage["dmg"]) {
                      var dmgArrayText = document.createTextNode(JSON.stringify(damage["dmg"]).replace(/,/g, ', '));
                      abilityDiv.appendChild(dmgArrayText);
                    };
                    if (damage["APRatio"]) {
                      var APRatioText = document.createTextNode(' (+' + JSON.stringify(damage["APRatio"])
                        .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AP Ratio)');
                      abilityDiv.appendChild(APRatioText);
                    }
                    if (damage["system"] === '2Part') {
                      var p1U = document.createElement('u');
                      p1U.innerText = 'Part 1';
                      abilityDiv.appendChild(p1U);
                      if (damage["part1"]["dmg"]) {
                        var dmgText = document.createTextNode(': ' + JSON.stringify(damage["part1"]["dmg"])
                        .replace(/,/g, ', '));
                        abilityDiv.appendChild(dmgText);
                      };
                      if (damage["part1"]["APRatio"]) {
                        var APRatioText = document.createTextNode(' (+' + JSON.stringify(damage["part1"]["APRatio"])
                          .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AP Ratio)');
                        abilityDiv.appendChild(APRatioText);
                      }
                      var br = document.createElement('br');
                      abilityDiv.appendChild(br);
                      var p2U = document.createElement('u');
                      p2U.innerText = 'Part 2';
                      abilityDiv.appendChild(p2U);
                      if (damage["part2"]["dmg"]) {
                        var dmgText = document.createTextNode(': ' + JSON.stringify(damage["part2"]["dmg"])
                        .replace(/,/g, ', '));
                        abilityDiv.appendChild(dmgText);
                      };
                      if (damage["part2"]["APRatio"]) {
                        var APRatioText = document.createTextNode(' (+' + JSON.stringify(damage["part2"]["APRatio"])
                          .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AP Ratio)');
                        abilityDiv.appendChild(APRatioText);
                      }
                    }
                  }
                  if (ePath['E']['bonusShield']) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var shield = ePath['E']["bonusShield"]
                    var shieldB = document.createElement('b');
                    shieldB.innerText = 'Bonus Shield: ';
                    abilityDiv.appendChild(shieldB);
                    if (shield["shield"]) {
                      var shieldText = document.createTextNode(JSON.stringify(shield["shield"]).replace(/,/g, ', '));
                      abilityDiv.appendChild(shieldText);
                    }
                    if (shield["APRatio"]) {
                      var APRatioText = document.createTextNode(' (+' + JSON.stringify(shield["APRatio"])
                        .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AP Ratio)');
                      abilityDiv.appendChild(APRatioText);
                    }
                    if (shield["nonTargetRatio"]) {
                      var br = document.createElement('br');
                      abilityDiv.appendChild(br);
                      var shieldU = document.createElement('u');
                      shieldU.innerText = 'Non-Target Shield Ratio: ';
                      abilityDiv.appendChild(shieldU);
                      var ratioText = document.createTextNode(shield["nonTargetRatio"]);
                      abilityDiv.appendChild(ratioText);
                    }
                  }
                  doubleBreak();
                }
              };

              if (champLeftFile[ability]["duration"]) {
                var durationBold = document.createElement('b');
                durationBold.innerText = "Duration: "
                abilityDiv.appendChild(durationBold)
                var durationText = document.createTextNode(JSON.stringify(champLeftFile[ability]["duration"]).replace(/,/g, ', '))
                abilityDiv.appendChild(durationText)
                doubleBreak();
              }

              if (champLeftFile[ability]["minDuration"]) {
                var durationBold = document.createElement('b');
                durationBold.innerText = "Duration: "
                abilityDiv.appendChild(durationBold)
                var durationText = document.createTextNode('Min - ' + JSON.stringify(champLeftFile[ability]
                  ["minDuration"]).replace(/,/g, ', ') + ', Max - ' + JSON.stringify(champLeftFile[ability]
                  ["maxDuration"]).replace(/,/g, ', '));
                abilityDiv.appendChild(durationText);
                doubleBreak();
              }

              if (champLeftFile[ability]["maxDuration"] && !champLeftFile[ability]["minDuration"]) {
                var durationBold = document.createElement('b');
                durationBold.innerText = "Max Duration: "
                abilityDiv.appendChild(durationBold)
                var durationText = document.createTextNode(JSON.stringify(champLeftFile[ability]["maxDuration"]).replace(/,/g, ', '))
                abilityDiv.appendChild(durationText)
                doubleBreak();
              }

              if (champLeftFile[ability]["coolDown"]) {
                var coolDownBold = document.createElement('b');
                coolDownBold.innerText = "Cooldown: ";
                abilityDiv.appendChild(coolDownBold)
                var coolDownText = document.createTextNode(JSON.stringify(champLeftFile[ability]["coolDown"]).replace(/,/g, ', '));
                abilityDiv.appendChild(coolDownText)
              };
              if (champLeftFile[ability]["minCoolDown"]) {
                var coolDownBold = document.createElement('b');
                coolDownBold.innerText = "Cooldown: ";
                abilityDiv.appendChild(coolDownBold);
                var cdText = document.createTextNode('Max - ' + champLeftFile[ability]["maxCoolDown"]
                + ', Min - ' + champLeftFile[ability]["minCoolDown"]);
                abilityDiv.appendChild(cdText);
              }
              if (champLeftFile[ability]["maxCoolDown"] && !champLeftFile[ability]["minCoolDown"]) {
                var coolDownBold = document.createElement('b');
                coolDownBold.innerText = "Max Cooldown: ";
                abilityDiv.appendChild(coolDownBold);
                var cdText = document.createTextNode(champLeftFile[ability]["maxCoolDown"]);
                abilityDiv.appendChild(cdText);
              }
              if (champLeftFile[ability]["coolDownByLvl"]) {
                var coolDownBold = document.createElement('b');
                coolDownBold.innerText = "Cooldown: ";
                abilityDiv.appendChild(coolDownBold)
                var coolDownByLvlText = document.createTextNode('[' + champLeftFile[ability]["coolDownByLvl"][0] + " to " + champLeftFile[ability]["coolDownByLvl"][17]
                + "], based on lvl. ");
                var currentlyU = document.createElement('u');
                currentlyU.innerText = "Currently";
                var coolDownBylvlText2 = document.createTextNode(': ' + champLeftFile[ability]["coolDownByLvl"][champLevel])
                abilityDiv.appendChild(coolDownByLvlText);
                abilityDiv.appendChild(currentlyU)
                abilityDiv.appendChild(coolDownBylvlText2)
              };
              if (champLeftFile[ability]["combatCoolDown"]) {
                var coolDownBold = document.createElement('b');
                coolDownBold.innerText = "Combat Cooldown: ";
                abilityDiv.appendChild(coolDownBold)
                var coolDownText = document.createTextNode(JSON.stringify(champLeftFile[ability]["combatCoolDown"]).replace(/,/g, ', '))
                abilityDiv.appendChild(coolDownText);
              }
              if (champLeftFile[ability]["staticCoolDown"]) {
                if (champLeftFile[ability]["coolDown"]) {
                  singleBreak();
                }
                var coolDownBold = document.createElement('b');
                coolDownBold.innerText = "Static Cooldown: ";
                abilityDiv.appendChild(coolDownBold)
                var coolDownText = document.createTextNode(JSON.stringify(champLeftFile[ability]["staticCoolDown"]).replace(/,/g, ', '))
                abilityDiv.appendChild(coolDownText);
              }
              if (champLeftFile[ability]["staticCoolDownByLvl"]) {
                var coolDownBold = document.createElement('b');
                coolDownBold.innerText = "Static Cooldown: ";
                abilityDiv.appendChild(coolDownBold)
                var coolDownByLvlText = document.createTextNode('[' + champLeftFile[ability]["staticCoolDownByLvl"][0] + " to " + champLeftFile[ability]["staticCoolDownByLvl"][17]
                + "], based on lvl. ");
                var currentlyU = document.createElement('u');
                currentlyU.innerText = "Currently";
                var coolDownBylvlText2 = document.createTextNode(': ' + champLeftFile[ability]["staticCoolDownByLvl"][champLevel])
                abilityDiv.appendChild(coolDownByLvlText);
                abilityDiv.appendChild(currentlyU)
                abilityDiv.appendChild(coolDownBylvlText2)
              }
              if (champLeftFile[ability]["autoCoolDown"]) {
                var coolDownBold = document.createElement('b');
                coolDownBold.innerText = "Cooldown Number of Auto Attacks: ";
                abilityDiv.appendChild(coolDownBold)
                var coolDownText = document.createTextNode(champLeftFile[ability]["autoCoolDown"]);
                abilityDiv.appendChild(coolDownText)
              }
              if (champLeftFile[ability]["coolDownRefund"]) {
                if (champLeftFile[ability]["coolDownByLvl"] || champLeftFile[ability]["coolDown"] 
                || champLeftFile[ability]["staticCoolDownByLvl"] || champLeftFile[ability]["staticCoolDown"]) {
                  singleBreak();
                }
                var refundU = document.createElement('u');
                refundU.innerText = 'Cooldown Refund'
                abilityDiv.appendChild(refundU);
                var refundText = document.createTextNode(': ' + champLeftFile[ability]["coolDownRefund"]);
                abilityDiv.appendChild(refundText);
              }
              if (champLeftFile[ability]["allCDRefund"]) {
                if (champLeftFile[ability]["coolDown"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br)
                };
                var refundU = document.createElement('u');
                refundU.innerText = 'All Abilities Cooldown Refund'
                abilityDiv.appendChild(refundU);
                var refundText = document.createTextNode(': ' + champLeftFile[ability]["allCDRefund"]);
                abilityDiv.appendChild(refundText);
              };
              if (champLeftFile[ability]["basicCDMaxRefundRatioPerStack"]) {
                singleBreak();
                var refundU = document.createElement('u');
                refundU.innerText = 'Basic Abilities Max Cooldown Refund Ratio';
                abilityDiv.appendChild(refundU);
                var text = document.createTextNode(': ' + champLeftFile[ability]["basicCDMaxRefundRatioPerStack"]
                + ' per Stack');
                abilityDiv.appendChild(text);
              };
              if (champLeftFile[ability]["coolDownRefundByLvl"]) {
                singleBreak();
                var refundU = document.createElement('u');
                refundU.innerText = 'Cooldown Refund'
                abilityDiv.appendChild(refundU);
                var coolDownByLvlText = document.createTextNode(': [' + champLeftFile[ability]["coolDownRefundByLvl"][0]
                + " to " + champLeftFile[ability]["coolDownRefundByLvl"][17] + "], based on lvl. ");
               var currentlyU = document.createElement('u');
               currentlyU.innerText = "Currently";
               var coolDownBylvlText2 = document.createTextNode(': ' + champLeftFile[ability]["coolDownRefundByLvl"][champLevel])
               abilityDiv.appendChild(coolDownByLvlText);
               abilityDiv.appendChild(currentlyU)
               abilityDiv.appendChild(coolDownBylvlText2)
              }
              if (champLeftFile[ability]["minCoolDownRefund"]) {
                singleBreak();
                var refundU = document.createElement('u');
                refundU.innerText = 'Cooldown Refund'
                abilityDiv.appendChild(refundU);
                var refundText = document.createTextNode(': Min - ' + champLeftFile[ability]["minCoolDownRefund"]
                + ', Max - ' + champLeftFile[ability]["maxCoolDownRefund"]);
                abilityDiv.appendChild(refundText);
              }
              if (champLeftFile[ability]["minCoolDownRefundByLvl"]) {
                var br = document.createElement('br');
                abilityDiv.appendChild(br);
                var refundU = document.createElement('u');
                refundU.innerText = 'Min Cooldown Refund'
                abilityDiv.appendChild(refundU);
                var coolDownByLvlText = document.createTextNode(' - [' + champLeftFile[ability]["minCoolDownRefundByLvl"][0]
                 + " to " + champLeftFile[ability]["minCoolDownRefundByLvl"][17] + "], based on lvl. ");
                var currentlyU = document.createElement('u');
                currentlyU.innerText = "Currently";
                var coolDownBylvlText2 = document.createTextNode(': ' + champLeftFile[ability]["minCoolDownRefundByLvl"][champLevel])
                abilityDiv.appendChild(coolDownByLvlText);
                abilityDiv.appendChild(currentlyU)
                abilityDiv.appendChild(coolDownBylvlText2)
              }
              if (champLeftFile[ability]["maxCoolDownRefundByLvl"]) {
                var br = document.createElement('br');
                abilityDiv.appendChild(br);
                var refundU = document.createElement('u');
                refundU.innerText = 'Max Cooldown Refund'
                abilityDiv.appendChild(refundU);
                var coolDownByLvlText = document.createTextNode(' - [' + champLeftFile[ability]["maxCoolDownRefundByLvl"][0]
                 + " to " + champLeftFile[ability]["maxCoolDownRefundByLvl"][17] + "], based on lvl. ");
                var currentlyU = document.createElement('u');
                currentlyU.innerText = "Currently";
                var coolDownBylvlText2 = document.createTextNode(': ' + champLeftFile[ability]["maxCoolDownRefundByLvl"][champLevel])
                abilityDiv.appendChild(coolDownByLvlText);
                abilityDiv.appendChild(currentlyU)
                abilityDiv.appendChild(coolDownBylvlText2)
              }
              if (champLeftFile[ability]["coolDownRefundRatio"]) {
                var br = document.createElement('br');
                abilityDiv.appendChild(br);
                var refundU = document.createElement('u');
                refundU.innerText = 'Cooldown Refund Ratio'
                abilityDiv.appendChild(refundU);
                var refundText = document.createTextNode(': ' + JSON.stringify(champLeftFile[ability]
                  ["coolDownRefundRatio"]).replace(/,/g, ', '));
                abilityDiv.appendChild(refundText);
              }
              if (champLeftFile[ability]["coolDownRefundRatioByLvl"]) {
                var br = document.createElement('br');
                abilityDiv.appendChild(br);
                var refundU = document.createElement('u');
                refundU.innerText = 'Cooldown Refund Ratio'
                abilityDiv.appendChild(refundU);
                var refundByLvlText = document.createTextNode(': [' + champLeftFile[ability]["coolDownRefundRatioByLvl"][0]
                 + " to " + champLeftFile[ability]["coolDownRefundRatioByLvl"][17] + "], based on lvl. ");
                var currentlyU = document.createElement('u');
                currentlyU.innerText = "Currently";
                var refundBylvlText2 = document.createTextNode(': ' + champLeftFile[ability]["coolDownRefundRatioByLvl"][champLevel])
                abilityDiv.appendChild(refundByLvlText);
                abilityDiv.appendChild(currentlyU)
                abilityDiv.appendChild(refundBylvlText2)
              }
              if (champLeftFile[ability]["maxCoolDownRefundRatio"]) {
                var br = document.createElement('br');
                abilityDiv.appendChild(br);
                var refundU = document.createElement('u');
                refundU.innerText = 'Max Cooldown Refund Ratio'
                abilityDiv.appendChild(refundU);
                var refundText = document.createTextNode(': ' + champLeftFile[ability]["maxCoolDownRefundRatio"]);
                abilityDiv.appendChild(refundText);
              };
              if (champLeftFile[ability]["recharge"]) {
                if (champLeftFile[ability]["coolDown"] || champLeftFile[ability]["staticCoolDown"]) {
                  singleBreak();
                }
                var rechargeBold = document.createElement('b');
                rechargeBold.innerText = "Recharge: ";
                abilityDiv.appendChild(rechargeBold)
                var rechargeText = document.createTextNode(JSON.stringify(champLeftFile[ability]["recharge"]).replace(/,/g, ', '));
                abilityDiv.appendChild(rechargeText)
              };
              if (champLeftFile[ability]["staticCoolDownFormula"]) {
                var br = document.createElement('br');
                abilityDiv.appendChild(br);
                var text = document.createTextNode('Cooldown Formula: ' + champLeftFile[ability]["staticCoolDownFormula"]);
                abilityDiv.appendChild(text);
              }

              if (champLeftFile[ability]["Rhaast"]) {
                var path = champLeftFile[ability]["Rhaast"];
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
                  var svU = document.createElement('u');
                  svU.innerText = 'Spell Vamp Ratio';
                  abilityDiv.appendChild(svU);
                  if (path["spellVamp"]["vampByLvl"]) {
                    var ratioByLvlText = document.createTextNode(': [' + path["spellVamp"]["vampByLvl"][0]
                    + " to " + path["spellVamp"]["vampByLvl"][17] + ", based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var ratioBylvlText2 = document.createTextNode(': ' + path["spellVamp"]["vampByLvl"][champLevel] + ']')
                    abilityDiv.appendChild(ratioByLvlText);
                    abilityDiv.appendChild(currentlyU)
                    abilityDiv.appendChild(ratioBylvlText2)
                  }
                };
                if (path["damage"]) {
                  singleBreak();
                  var typeB = document.createElement('u');
                  typeB.innerText = path["damage"]["type"] + ' Damage'
                  abilityDiv.appendChild(typeB);
                  if (path["damage"]["enemyMaxHPRatio"]){
                    var ratioText = document.createTextNode(': (' + path["damage"]["enemyMaxHPRatio"]
                    + ' Enemy Max HP Ratio)');
                    abilityDiv.appendChild(ratioText);
                  }
                  if (path["damage"]["enemyMaxHPRatioPer100BonusAD"]) {
                    var ratioText = document.createTextNode(' (+' + path["damage"]["enemyMaxHPRatioPer100BonusAD"]
                    + ' Enemy Max HP Ratio per 100 Bonus AD)');
                    abilityDiv.appendChild(ratioText);
                  }
                  if (path["damage"]["system"] === 'minMax') {
                    var minText = document.createTextNode(': Min - ');
                    abilityDiv.appendChild(minText);
                    if (path["damage"]["minADRatio"]) {
                      var ratioText = document.createTextNode('(' + path["damage"]["minADRatio"]
                      + ' AD Ratio)');
                      abilityDiv.appendChild(ratioText);
                    };
                    if (path["damage"]["minEnemyMaxHPRatio"]) {
                      var ratioText = document.createTextNode(' (+' + path["damage"]["minEnemyMaxHPRatio"]
                      + ' Enemy Max HP Ratio)');
                      abilityDiv.appendChild(ratioText);
                    };
                    if (path["damage"]["minEnemyMaxHPRatioPer100BonusAD"]) {
                      var ratioText = document.createTextNode(' (+' + path["damage"]["minEnemyMaxHPRatioPer100BonusAD"]
                      + ' Enemy Max HP Ratio per 100 Bonus AD)');
                      abilityDiv.appendChild(ratioText);
                    };
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var maxText = document.createTextNode('Max - ');
                    abilityDiv.appendChild(maxText);
                    if (path["damage"]["maxADRatio"]) {
                      var ratioText = document.createTextNode('(' + path["damage"]["maxADRatio"]
                      + ' AD Ratio)');
                      abilityDiv.appendChild(ratioText);
                    };
                    if (path["damage"]["maxEnemyMaxHPRatio"]) {
                      var ratioText = document.createTextNode(' (+' + path["damage"]["maxEnemyMaxHPRatio"]
                      + ' Enemy Max HP Ratio)');
                      abilityDiv.appendChild(ratioText);
                    };
                    if (path["damage"]["maxEnemyMaxHPRatioPer100BonusAD"]) {
                      var ratioText = document.createTextNode(' (+' + path["damage"]["maxEnemyMaxHPRatioPer100BonusAD"]
                      + ' Enemy Max HP Ratio per 100 Bonus AD)');
                      abilityDiv.appendChild(ratioText);
                    };
                  } 
                };
                if (path["heal"]) {
                  singleBreak();
                  var healB = document.createElement('u');
                  healB.innerText = 'Heal'
                  abilityDiv.appendChild(healB);
                  if (path["heal"]["enemyMaxHPRatio"]){
                    var ratioText = document.createTextNode(': (' + path["heal"]["enemyMaxHPRatio"]
                    + ' Enemy Max HP Ratio)');
                    abilityDiv.appendChild(ratioText);
                  }
                  if (path["heal"]["enemyMaxHPRatioPer100BonusAD"]){
                    var ratioText = document.createTextNode(' (+' + path["heal"]["enemyMaxHPRatioPer100BonusAD"]
                    + ' Enemy Max HP Ratio per 100 Bonus AD)');
                    abilityDiv.appendChild(ratioText);
                  } 
                };
                if (path["interruptCC"]) {
                  singleBreak();
                  var interruptCCU = document.createElement('u');
                  interruptCCU.innerText = 'Crowd Control Duration'
                  abilityDiv.appendChild(interruptCCU)
                  var ccText = document.createTextNode(': ' + path["interruptCC"]);
                  abilityDiv.appendChild(ccText);
                }
              }

              if (champLeftFile[ability]["Shadow"]) {
                var path = champLeftFile[ability]["Shadow"]
                doubleBreak();
                var shadowU = document.createElement('u');
                var shadowB = document.createElement('b');
                shadowB.appendChild(shadowU);
                shadowU.innerText = 'Shadow'
                abilityDiv.appendChild(shadowB);
                if (path["damage"]) {
                  singleBreak();
                  var typeB = document.createElement('u');
                  typeB.innerText = path["damage"]["type"] + ' Damage'
                  abilityDiv.appendChild(typeB);
                  if (path["damage"]["dmgRatioByLvl"]) {
                    var ratioByLvlText = document.createTextNode(': (' + path["damage"]["dmgRatioByLvl"][0]
                    + " to " + path["damage"]["dmgRatioByLvl"][17] + " Ratio of damage dealt over 3 seconds, based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var ratioBylvlText2 = document.createTextNode(': ' + path["damage"]["dmgRatioByLvl"][champLevel] + ')')
                    abilityDiv.appendChild(ratioByLvlText);
                    abilityDiv.appendChild(currentlyU)
                    abilityDiv.appendChild(ratioBylvlText2)
                  }
                };
                if (path["coolDown"]) {
                  singleBreak();
                  var cdU = document.createElement('u');
                  cdU.innerText = 'Cooldown';
                  abilityDiv.appendChild(cdU);
                  var cdText = document.createTextNode(': ' + path["coolDown"]);
                  abilityDiv.appendChild(cdText);
                }
              }

            } 
            if (ability !== 'passive' && document.getElementById(`${ability}Rank${side}`).value > 0 ) {
              /* Place non-rank related variables outside of the rank nesting (ex: dmgType) */
              /* BEGIN RANK 1-5 SECTION */
              if (champLeftFile[ability]["text"]) {
                var text = document.createTextNode(champLeftFile[ability]["text"])
                abilityDiv.appendChild(text)
                doubleBreak();
              };

              if (champLeftFile[ability]["autoEmpower"]) {
                var damage = champLeftFile[ability]["autoEmpower"]["damage"]
                var dmgType = damage["type"];
                if (dmgType === 'phys') {
                  dmgType = 'Physical'
                } else {
                  dmgType = dmgType[0].toUpperCase() + dmgType.slice(1)
                }
                var autoEmpowerBold = document.createElement('b')
                if (!damage["durationAutos"] && !damage['autoCoolDown']) {
                  autoEmpowerBold.innerText = 'Auto Attack Empower: '
                } else if (damage['autoCoolDown']) {
                  autoEmpowerBold.innerText = 'Empower 1 in every ' +  damage["autoCoolDown"] + ' Auto Attacks: '
                } else {
                  autoEmpowerBold.innerText = 'Empower ' +  damage["durationAutos"] + ' Auto Attacks: '
                }
                abilityDiv.appendChild(autoEmpowerBold)
                var dmgTypeU = document.createElement('u')
                dmgTypeU.innerText = dmgType + " Damage";
                var dash = document.createTextNode(': ')
                abilityDiv.appendChild(dmgTypeU);
                abilityDiv.appendChild(dash);
                var totalDmgCount = 0
                var IEDmgCount = 0
                var minDmgCount = 0;
                var maxDmgCount = 0;
                if (damage["dmg"]) {
                  totalDmgCount = damage["dmg"][rankIndex]
                };
                if (damage["dmgByLvl"]) {
                  totalDmgCount += damage["dmgByLvl"][champLevel]
                };
                if (damage["dmgByERank"]) {
                  totalDmgCount += damage["dmgByERank"][document.getElementById(`ERank${side}`).value - 1]
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
                  var critText = document.createTextNode('. Always critically strikes.');
                  abilityDiv.appendChild(critText);
                }l
                if (damage["attackSpeedPenalty"]) {
                  singleBreak();
                  var penaltyU = document.createElement('u');
                  penaltyU.innerText = 'Bonus Attack Speed Penalty Ratio';
                  abilityDiv.appendChild(penaltyU);
                  var text = document.createTextNode(': ' + damage["attackSpeedPenalty"] );
                  abilityDiv.appendChild(text);
                }
                if (damage["system"] === "min" ) {
                  var br = document.createElement('br')
                  abilityDiv.appendChild(br)
                  var minDmgU = document.createElement('u');
                  minDmgU.innerText = 'Min Damage'
                  abilityDiv.appendChild(minDmgU);
                  if (damage["minDmg"]) {
                    var text = document.createTextNode(": " + arrayCheck(damage["minDmg"]));
                    abilityDiv.appendChild(text);
                  }
                };
                //begin minMax section
                if (damage["system"] === "minMax" ) {
                  var minDmgU = document.createElement('u')
                  minDmgU.innerText = 'Min'
                  abilityDiv.appendChild(minDmgU)
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
                    var stackText = document.createTextNode(' (+' + damage["minDmgPerStack"] + ' per Stack)');
                    abilityDiv.appendChild(stackText);
                  };
                  singleBreak();
                  var maxDmgU = document.createElement('u')
                  maxDmgU.innerText = 'Max'
                  abilityDiv.appendChild(maxDmgU)
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
                    var stackText = document.createTextNode(' (+' + damage["maxDmgPerStack"] + ' per Stack)');
                    abilityDiv.appendChild(stackText);
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
                  var canCritText = document.createTextNode(', can crit.');
                  abilityDiv.appendChild(canCritText);
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
                    var critText = document.createTextNode(': ' + damage["critDmg"]);
                    abilityDiv.appendChild(critText);
                  };
                  if (totalDmgCount !== 0) {
                    var critText = document.createTextNode(': ' + Math.round(damage["critDmg"] * totalDmgCount));
                    abilityDiv.appendChild(critText);
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
                  var critText = document.createTextNode(': ' + Math.round(damage["critADRatioWithIE"]) * totalAD);
                  abilityDiv.appendChild(critText);
                };
                if (damage["duration"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration'
                  abilityDiv.appendChild(durationU)
                  var text = document.createTextNode(': ' + arrayCheck(damage["duration"]))
                  abilityDiv.appendChild(text)
                };
                if (damage["minDuration"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var minDurationU = document.createElement('u');
                  minDurationU.innerText = 'Min Duration'
                  abilityDiv.appendChild(minDurationU)
                  var minText = document.createTextNode(': ' + damage["minDuration"] + ', ')
                  abilityDiv.appendChild(minText)
                  var maxDurationU = document.createElement('u');
                  maxDurationU.innerText = 'Max Duration'
                  abilityDiv.appendChild(maxDurationU)
                  var maxText = document.createTextNode(': ' + damage["maxDuration"])
                  abilityDiv.appendChild(maxText)
                };
               
                if (damage["system"] === "2Part" || damage["system"] === "3Part") {
                  function partDamageMap(partNumber, i, array) {
                    if (!damage[partNumber]) {
                        return;
                    }
                    var part = damage[partNumber]
                    var partDmgCount = 0;
                    var partNumberU = document.createElement('u')
                    partNumberU.innerText = partNumber[0].toUpperCase() + partNumber.slice(1, 4) + ' '  + partNumber[4]  
                    abilityDiv.appendChild(partNumberU)
                    var colonSpace = document.createTextNode(': ')
                    abilityDiv.appendChild(colonSpace)

                    if (part["type"]) {
                      var dmgType = part["type"];
                      if (dmgType === 'phys') {
                        dmgType = 'Physical'
                      } else {
                        dmgType = dmgType[0].toUpperCase() + dmgType.slice(1)
                      }
                      var text = document.createTextNode(dmgType + " Damage: ");
                      abilityDiv.appendChild(text);
                    };
                    if (part["ADRatio"]) {
                      partDmgCount += arrayCheck(part["ADRatio"]) * totalAD;
                    };
                    var text = document.createTextNode(Math.round(partDmgCount));
                    abilityDiv.appendChild(text);
                    if (part["trueDmgRatioByLvl"]) {
                      var br = document.createElement('br')
                      abilityDiv.appendChild(br);
                      var text2 = document.createTextNode('Physical: ' + Math.round((1 - part["trueDmgRatioByLvl"][champLevel]) 
                      * partDmgCount) + ', True: ' + Math.round(part["trueDmgRatioByLvl"][champLevel] * partDmgCount));
                      abilityDiv.appendChild(text2);
                    };
                    var next = array[i+1]
                    if (damage[next]) {
                      doubleBreak();
                    }
                  };
                  this.partNumberArray.map(partDamageMap)
                };
                if (damage["staticCoolDownByLvl"]) {
                  singleBreak();
                  var coolDownU = document.createElement('u');
                  coolDownU.innerText = "Static Cooldown";
                  abilityDiv.appendChild(coolDownU)
                  var text = document.createTextNode(': ' + damage["staticCoolDownByLvl"][champLevel])
                  abilityDiv.appendChild(text);
                };
                doubleBreak();
              };

              if (champLeftFile[ability]["damage"]) {
                var damage = champLeftFile[ability]["damage"]
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
                  var dmgTypeBold = document.createElement('b')
                  dmgTypeBold.innerText = dmgType + " Damage: "
                  abilityDiv.appendChild(dmgTypeBold);
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
                  totalDmgCount += damage["dmgByWRank"][document.getElementById(`WRank${side}`).value - 1];
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
                  totalDmgCount += arrayCheck(damage["bonusManaRatio"]) * itemStats.mana;
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
                     totalDmgCount *= damage["dmgRatioByRRank"][document.getElementById(`RRank${side}`).value - 1];
                  };
                  var text = document.createTextNode(Math.round(totalDmgCount));
                  abilityDiv.appendChild(text);
                  if (IEDmgCount !== 0) {
                    var dmgText = document.createTextNode(' (' + Math.round(totalDmgCount + IEDmgCount) + 'with IE)');
                    abilityDiv.appendChild(dmgText);
                  };
                  if (damage["executeDmgRatio"]) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
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
                  var br = document.createElement('br')
                  abilityDiv.appendChild(br)
                  var minDmgU = document.createElement('u');
                  minDmgU.innerText = 'Min Damage'
                  abilityDiv.appendChild(minDmgU);
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
                  var minDmgU = document.createElement('u')
                  minDmgU.innerText = 'Min'
                  abilityDiv.appendChild(minDmgU)
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

                  var maxDmgU = document.createElement('u');
                  maxDmgU.innerText = 'Max';
                  abilityDiv.appendChild(maxDmgU);

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
                  var br2 = document.createElement('br');
                  abilityDiv.appendChild(br2);
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
                    var critText = document.createTextNode(': ' + arrayCheck(damage["critDmg"]));
                    abilityDiv.appendChild(critText);
                  };
                  if (totalDmgCount !== 0) {
                    var critText = document.createTextNode(': ' + Math.round(damage["critDmg"] * totalDmgCount));
                    abilityDiv.appendChild(critText);
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
                  var critText = document.createTextNode(': ' + Math.round(damage["critADRatio"] * totalAD));
                  abilityDiv.appendChild(critText);
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
                  var critText = document.createTextNode(': Min: ' + Math.round(damage["minCritADRatio"] * totalAD));
                  abilityDiv.appendChild(critText);
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
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
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
                  function partDamageMap(partNumber, i, array) {
                    if (!champLeftFile[ability]['damage'][partNumber]) {
                        return;
                    };
                    var part = champLeftFile[ability]['damage'][partNumber];
                    var underL = document.createElement('u');
                    underL.innerText = partNumber[0].toUpperCase() + partNumber.slice(1, 4) + ' '  + partNumber[4] + ': ';  
                    abilityDiv.appendChild(underL);

                    if (part["type"]) {
                      var dmgType = part["type"];
                      if (dmgType === 'phys') {
                        dmgType = 'Physical'
                      } else {
                        dmgType = dmgType[0].toUpperCase() + dmgType.slice(1)
                      };
                      var dmgTypeText = document.createTextNode(dmgType + " Damage: ");
                      if (part["postMitigation"] === 'magic') {
                        dmgTypeText.nodeValue = dmgType + ' Damage (part 1 damage, post-mitigation): ';
                      }
                      abilityDiv.appendChild(dmgTypeText);
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
                    var next = array[i+1];
                    if (champLeftFile[ability]['damage'][next]) {
                      doubleBreak();
                    }
                  };
                  this.partNumberArray.map(partDamageMap);
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

              if (champLeftFile[ability]["tickDamage"]) {
                var tickDamage = champLeftFile[ability]["tickDamage"];
                var dmgTypeBold = document.createElement('b');
                if (tickDamage["type"]) {
                  var dmgType = tickDamage["type"];
                  if (dmgType === 'physMagic') {
                    dmgTypeBold.innerText = 'Half Physical, Half Magic Damage Over Time: '
                    abilityDiv.appendChild(dmgTypeBold);
                  } else {
                    if (dmgType === 'phys') {
                      dmgType = 'Physical'
                    } else {
                      dmgType = dmgType[0].toUpperCase() + dmgType.slice(1)
                    };
                    dmgTypeBold.innerText = dmgType + " Damage Over Time: ";
                    abilityDiv.appendChild(dmgTypeBold);
                  }
                };
                var tickDmgCount = 0;
                var minTickDmgCount = 0;
                var maxTickDmgCount = 0;
                var bonusTicks = 0;
                var ticks = 0;
                if (tickDamage["ticks"]) {
                  ticks = tickDamage["ticks"];
                  if (typeof ticks !== 'number') {
                    ticks = tickDamage["ticks"][rankIndex]
                  }
                };
                console.log('ticks: ' + ticks);
                if (tickDamage["dmg"]) {
                  tickDmgCount += arrayCheck(tickDamage["dmg"]);
                };
                if (tickDamage["dmgByLvl"]) {
                  tickDmgCount += tickDamage["dmgByLvl"][champLevel];
                };
                if (tickDamage["APRatio"]) {
                  tickDmgCount += arrayCheck(tickDamage["APRatio"]) * totalAP;
                };
                if (tickDamage["ADRatio"]) {
                  tickDmgCount += arrayCheck(tickDamage["ADRatio"]) * totalAD;
                };
                if (tickDamage["bonusADRatio"]) {
                  tickDmgCount += arrayCheck(tickDamage["bonusADRatio"]) * bonusAD;
                };
                if (tickDamage["enemyMaxHPRatio"] && enemyStats.hp) {
                  tickDmgCount += arrayCheck(tickDamage["enemyMaxHPRatio"]) * enemyTotalHP;
                };
                if (tickDamage["enemyMaxHPRatioByLvl"] && enemyStats.hp) {
                  tickDmgCount += tickDamage["enemyMaxHPRatioByLvl"][champLevel] * enemyTotalHP;
                };
                if (tickDamage["enemyMaxHPRatioPer100AP"] && enemyStats.hp) {
                  tickDmgCount += arrayCheck(tickDamage["enemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                };
                if (tickDamage["maxHPRatio"]) {
                  tickDmgCount += arrayCheck(tickDamage["maxHPRatio"]) * totalHP;
                };
                if (tickDamage["bonusHPRatio"]) {
                  tickDmgCount += arrayCheck(tickDamage["bonusHPRatio"]) * bonusHP;
                };
                if (tickDamage["enemyCurrentHPRatio"] && enemyStats.hp) {
                  var text = document.createTextNode(' when enemy is full HP: ');
                  abilityDiv.appendChild(text);
                  tickDmgCount += tickDamage["enemyCurrentHPRatio"] * enemyTotalHP;
                };
                if (tickDmgCount !== 0) {
                  var text = document.createTextNode(Math.round(tickDmgCount));
                  abilityDiv.appendChild(text);
                };
                var tickMaxHPCounter = 0;
                if (tickDamage["enemyMaxHPRatio"] && !enemyStats.hp) {
                  tickMaxHPCounter += arrayCheck(tickDamage["enemyMaxHPRatio"]);
                };
                if (tickDamage["enemyMaxHPRatioByLvl"] && !enemyStats.hp) {
                  tickMaxHPCounter += tickDamage["enemyMaxHPRatioByLvl"][champLevel];
                }
                if (tickDamage["enemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                  tickMaxHPCounter += arrayCheck(tickDamage["enemyMaxHPRatioPer100AP"]) * totalAP/100;
                };
                if (tickMaxHPCounter !== 0) {
                  var text = document.createTextNode(' (+' + lengthCheck(tickMaxHPCounter) + ' Enemy Max HP Ratio)');
                  abilityDiv.appendChild(text);
                };
                if (tickDamage["enemyCurrentHPRatio"] && !enemyStats.hp) {
                  var text = document.createTextNode(' (+' + arrayCheck(tickDamage["enemyCurrentHPRatio"]) 
                  + ' Enemy Current HP Ratio)');
                  abilityDiv.appendChild(text);
                };
                if (tickDamage["interval"] && tickDamage["ticks"] && tickDamage["system"] !== "minMax") {
                  var text = document.createTextNode(' per ' + tickDamage["interval"] + ' sec, for ' + 
                   multiplyByTicksRounded2(tickDamage["interval"]) + ' seconds.');
                  abilityDiv.appendChild(text);
                };
                if (tickDamage["ticks"] && tickDamage["duration"] && tickDamage["system"] !== "minMax") {
                  var text = document.createTextNode(' per tick, ' + ticks + ' times over ' 
                  + tickDamage["duration"] + ' seconds.');
                  abilityDiv.appendChild(text);
                };
                if (tickDamage["critDmg"]) {
                  singleBreak();
                  var critDmgU = document.createElement('u');
                  critDmgU.innerText = 'Crit Damage';
                  abilityDiv.appendChild(critDmgU);
                  var critText = document.createTextNode(': ' + Math.round(tickDamage["critDmg"] * tickDmgCount));
                  abilityDiv.appendChild(critText);
                  if (tickDamage["critDmgWithIE"]) {
                    var IEText = document.createTextNode(' (' + Math.round(tickDamage["critDmgWithIE"] 
                    * tickDmgCount) + ' with Infinity Edge)');
                    abilityDiv.appendChild(IEText);
                  };
                  if (tickDamage["ticks"] && tickDamage["duration"]) {
                    var intervalText = document.createTextNode(' per tick, ' + ticks + ' times over ' 
                      + tickDamage["duration"] + ' seconds.');
                    abilityDiv.appendChild(intervalText);
                  }
                };
            
                if (tickDamage["system"] === "minMax" ) {
                  var minDmgU = document.createElement('u')
                  minDmgU.innerText = 'Min'
                  abilityDiv.appendChild(minDmgU)
                  if (tickDamage["minDmg"]) {
                    minTickDmgCount += arrayCheck(tickDamage["minDmg"]);
                  };
                  if (tickDamage["minDmgByLvl"]) {
                    minTickDmgCount += tickDamage["minDmgByLvl"][rankIndex];
                  };
                  if (tickDamage["minAPRatio"]) {
                    minTickDmgCount += arrayCheck(tickDamage["minAPRatio"]) * totalAP;
                  };
                  if (tickDamage["minADRatio"]) {
                    minTickDmgCount += arrayCheck(tickDamage["minADRatio"]) * totalAD;
                  };
                  if (tickDamage["minBonusADRatio"]) {
                    minTickDmgCount += arrayCheck(tickDamage["minBonusADRatio"]) * bonusAD;
                  };
                  if (minTickDmgCount !== 0) {
                    var text = document.createTextNode(': ' + Math.round(minTickDmgCount));
                    abilityDiv.appendChild(text);
                  };
                  if (tickDamage["interval"] && tickDamage["ticks"]) {
                    var intervalText = document.createTextNode(' per ' + tickDamage["interval"] + ' sec, for ' + 
                      multiplyByTicksRounded2(tickDamage["interval"]) + ' seconds.');
                    abilityDiv.appendChild(intervalText);
                  };
                  if (tickDamage["ticks"] && tickDamage["duration"] && !tickDamage["ASForBonusTick"]) {
                    var text = document.createTextNode(' per tick, ' + ticks + ' times over ' 
                      + tickDamage["duration"] + ' seconds.');
                    abilityDiv.appendChild(text);
                  };
                  if (tickDamage["ASForBonusTick"]) {
                    bonusTicks += Math.floor(nonBaseAS / tickDamage["ASForBonusTick"]);
                    var text = document.createTextNode(' per tick, ' + (ticks + 
                    bonusTicks) + ' times over ' + tickDamage["duration"] + ' seconds.');
                    abilityDiv.appendChild(text);
                  };
                  singleBreak();
                  var maxDmgU = document.createElement('u')
                  maxDmgU.innerText = 'Max'
                  abilityDiv.appendChild(maxDmgU)
                  if (tickDamage["maxDmg"]) {
                    maxTickDmgCount += arrayCheck(tickDamage["maxDmg"]);
                  };
                  if (tickDamage["maxDmgByLvl"]) {
                    maxTickDmgCount += tickDamage["maxDmgByLvl"][rankIndex];
                  };
                  if (tickDamage["maxAPRatio"]) {
                    maxTickDmgCount += arrayCheck(tickDamage["maxAPRatio"]) * totalAP;
                  };
                  if (tickDamage["maxADRatio"]) {
                    maxTickDmgCount += arrayCheck(tickDamage["maxADRatio"]) * totalAD;
                  };
                  if (tickDamage["maxBonusADRatio"]) {
                    maxTickDmgCount += arrayCheck(tickDamage["maxBonusADRatio"]) * bonusAD;
                  };
                  if (maxTickDmgCount !== 0) {
                    var text = document.createTextNode(': ' + Math.round(maxTickDmgCount));
                    abilityDiv.appendChild(text);
                  };
                  if (tickDamage["interval"] && tickDamage["ticks"]) {
                    var text = document.createTextNode(' per ' + tickDamage["interval"] + ' sec, for ' + 
                      multiplyByTicksRounded2(tickDamage["interval"]) + ' seconds.');
                    abilityDiv.appendChild(text);
                  };
                  if (tickDamage["ticks"] && tickDamage["duration"] && !tickDamage["ASForBonusTick"]) {
                    var text = document.createTextNode(' per tick, ' + ticks + ' times over ' 
                      + tickDamage["duration"] + ' seconds.');
                    abilityDiv.appendChild(text);
                  };
                  if (tickDamage["ASForBonusTick"]) {
                    var text = document.createTextNode(' per tick, ' + (ticks + 
                    bonusTicks) + ' times over ' + tickDamage["duration"] + ' seconds.');
                    abilityDiv.appendChild(text);
                  }
                };

                if (tickDamage["system"] === 'min') {
                  singleBreak();
                  var minDmgU = document.createElement('u')
                  minDmgU.innerText = 'Min'
                  abilityDiv.appendChild(minDmgU)
                  var minText = document.createTextNode(": " + arrayCheck(tickDamage["minDmg"]))
                  abilityDiv.appendChild(minText)
                  if (tickDamage["interval"] && tickDamage["ticks"]) {
                    var text = document.createTextNode(' per ' + tickDamage["interval"] + ' sec, for ' + 
                     multiplyByTicksRounded2(tickDamage["interval"]) + ' seconds.');
                    abilityDiv.appendChild(text);
                  }
                };
                if (tickDamage["ticks"]) {
                  singleBreak();
                  var totalDmgB = document.createElement('b')
                  totalDmgB.innerText = 'Total: '
                  abilityDiv.appendChild(totalDmgB)
            
                  if (tickDmgCount !== 0) {
                    var text = document.createTextNode(Math.round(tickDmgCount * ticks));
                    abilityDiv.appendChild(text);
                  }
                  var maxHPRatioTotal = 0;
                  if (tickDamage["enemyMaxHPRatio"] && !enemyStats.hp) {
                    maxHPRatioTotal += arrayCheck(tickDamage["enemyMaxHPRatio"]);
                  };
                  if (tickDamage["enemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                    maxHPRatioTotal += arrayCheck(tickDamage["enemyMaxHPRatioPer100AP"]) * totalAP/100;
                  };
                  if (maxHPRatioTotal !== 0) {
                    var text = document.createTextNode(' (+' + lengthCheck(maxHPRatioTotal * ticks) + ' Enemy Max HP Ratio)');
                    abilityDiv.appendChild(text);
                  };
                  if (tickDamage["enemyCurrentHPRatio"] && !enemyStats.hp) {
                    var text = document.createTextNode(' (+' + lengthCheck(ticks * arrayCheck(tickDamage["enemyCurrentHPRatio"])) 
                    + ' Enemy Current HP Ratio)');
                    abilityDiv.appendChild(text);
                  };

                  if (tickDamage["system"] === 'min') {
                    singleBreak();
                    var minDmgU = document.createElement('u');
                    minDmgU.innerText = 'Min';
                    abilityDiv.appendChild(minDmgU);
                    var text = document.createTextNode(": " + multiplyByTicks(arrayCheck(tickDamage["minDmg"])));
                    abilityDiv.appendChild(text);
                  }

                  if (tickDamage["system"] === "minMax" ) {
                    var minDmgU = document.createElement('u')
                    minDmgU.innerText = 'Min'
                    abilityDiv.appendChild(minDmgU)
                    if (minTickDmgCount !== 0) {
                      var text = document.createTextNode(': ' + Math.round(minTickDmgCount * ticks));
                      abilityDiv.appendChild(text);
                    };
                    singleBreak();
                    var maxDmgU = document.createElement('u')
                    maxDmgU.innerText = 'Max'
                    abilityDiv.appendChild(maxDmgU)
                    if (maxTickDmgCount !== 0) {
                      var text = document.createTextNode(': ' + Math.round(maxTickDmgCount * ticks));
                      abilityDiv.appendChild(text);
                    }
                  }
                };
                if (tickDamage["interval"] && !tickDamage["ticks"]) {
                  var text = document.createTextNode(' per ' + tickDamage["interval"] + ' sec.');
                  abilityDiv.appendChild(text);
                };
                
                if (tickDamage["part1"]) {
                  var part1DmgCount = 0;
                  var part2DmgCount = 0;
                  var part1U = document.createElement('u');
                  part1U.innerText = 'Part 1';
                  abilityDiv.appendChild(part1U);
                  if (tickDamage["part1"]["dmg"]) {
                    part1DmgCount += arrayCheck(tickDamage["part1"]["dmg"]);
                  };
                  if (tickDamage["part1"]["APRatio"]) {
                    part1DmgCount += arrayCheck(tickDamage["part1"]["APRatio"]) * totalAP;
                  };
                  var text = document.createTextNode(': ' + Math.round(part1DmgCount));
                  abilityDiv.appendChild(text);
                  if (tickDamage["part1"]["interval"] && tickDamage["part1"]["ticks"]) {
                    var text = document.createTextNode(' per ' + tickDamage["part1"]["interval"] + ' sec, for ' + 
                      tickDamage["part1"]["interval"] * tickDamage["part1"]["ticks"] + ' seconds.');
                    abilityDiv.appendChild(text);
                  };
                  singleBreak();
                  var totalU = document.createElement('u');
                  totalU.innerText = 'Total';
                  abilityDiv.appendChild(totalU);
                  var totalText = document.createTextNode(': ' + Math.round(part1DmgCount * tickDamage["part1"]["ticks"]));
                  abilityDiv.appendChild(totalText);
                  doubleBreak();
                  var part2U = document.createElement('u');
                  part2U.innerText = 'Part 2';
                  abilityDiv.appendChild(part2U);
                  if (tickDamage["part2"]["enemyMaxHPRatio"] && enemyStats.hp) {
                    part2DmgCount += arrayCheck(tickDamage["part2"]["enemyMaxHPRatio"]) * enemyTotalHP;
                  };
                  if (tickDamage["part2"]["enemyMaxHPRatioPer100AP"] && enemyStats.hp) {
                    part2DmgCount += arrayCheck(tickDamage["part2"]["enemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                  };
                  if (part2DmgCount !== 0) {
                    var text = document.createTextNode(': ' + Math.round(part2DmgCount));
                    abilityDiv.appendChild(text);
                  };
                  var part2MaxHPCount = 0;
                  if (tickDamage["part2"]["enemyMaxHPRatio"] && !enemyStats.hp) {
                    part2MaxHPCount += arrayCheck(tickDamage["part2"]["enemyMaxHPRatio"]);
                  };
                  if (tickDamage["part2"]["enemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                    part2MaxHPCount += arrayCheck(tickDamage["part2"]["enemyMaxHPRatioPer100AP"]) * totalAP/100;
                  };
                  if (part2MaxHPCount !== 0) {
                    var text = document.createTextNode(': (' + lengthCheck(part2MaxHPCount) + ' Enemy Max HP Ratio)');
                    abilityDiv.appendChild(text);
                  };
                  if (tickDamage["part2"]["interval"] && tickDamage["part2"]["ticks"]) {
                    var text = document.createTextNode(' per ' + tickDamage["part2"]["interval"] + ' sec, for ' + 
                      tickDamage["part2"]["interval"] * tickDamage["part2"]["ticks"] + ' seconds.');
                    abilityDiv.appendChild(text);
                  };
                  singleBreak();
                  var totalU2 = document.createElement('u');
                  totalU2.innerText = 'Total';
                  abilityDiv.appendChild(totalU2);
                  if (part2DmgCount !== 0) {
                    var text = document.createTextNode(': ' + Math.round(part2DmgCount * tickDamage["part2"]["ticks"]));
                    abilityDiv.appendChild(text);
                  };
                  if (part2MaxHPCount !== 0) {
                    var text = document.createTextNode(': (' + lengthCheck(part2MaxHPCount * tickDamage["part2"]["ticks"]) 
                    + ' Enemy Max HP Ratio)');
                    abilityDiv.appendChild(text);
                  }
                };
                doubleBreak();
              };

              if (champLeftFile[ability]["specialDelivery"]) {

                var tickDamage = champLeftFile[ability]["specialDelivery"]["tickDamage"];
                var bold = document.createElement('b');
                bold.innerText = "Special Delivery - " + dmgType + ' Damage Over Time: ';
                abilityDiv.appendChild(bold);

                var deliveryCount = 0;
                deliveryCount += tickDamage["dmgByLvl"][champLevel];
                deliveryCount += tickDamage["bonusADRatio"] * bonusAD;
                deliveryCount += tickDamage["APRatio"] * totalAP;

                var text = document.createTextNode(deliveryCount + ' per ' + tickDamage["interval"] + ' sec, for ' + 
                multiplyByTicksRounded2(tickDamage["interval"])   + ' seconds.');
                abilityDiv.appendChild(text);
                singleBreak();
                var totalDmgU = document.createElement('u');
                totalDmgU.innerText = 'Total Damage';
                abilityDiv.appendChild(totalDmgU);
                var text2 = document.createTextNode(': ' + multiplyByTicks(deliveryCount));
                abilityDiv.appendChild(text2);
                doubleBreak();
              };

              if (champLeftFile[ability]["passivePermanent"]) {
                var path = champLeftFile[ability]["passivePermanent"];
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
                  var armorPenU = document.createElement('u');
                  armorPenU.innerText = 'Armor Pen Ratio';
                  abilityDiv.appendChild(armorPenU);
                  var text = document.createTextNode(': ' + arrayCheck(path["armorPenRatio"]));
                  abilityDiv.appendChild(text);
                };
              doubleBreak();
              };

              if (champLeftFile[ability]["selfHeal"]) {
                var healPath = champLeftFile[ability]["selfHeal"];
                var healBold = document.createElement('b');
                healBold.innerText = 'Self Heal: ';
                abilityDiv.appendChild(healBold);
                var healCounter = 0;
                if (healPath["healByLvl"]) {
                  healCounter += healPath["healByLvl"][champLevel]; 
                };
                if (healCounter !== 0) {
                  var text = document.createTextNode(Math.round(healCounter));
                  abilityDiv.appendChild(text);
                }
              };

              if (champLeftFile[ability]["allyHeal"]) {
                var healPath = champLeftFile[ability]["allyHeal"];
                var healBold = document.createElement('b');
                healBold.innerText = 'Ally Heal: ';
                abilityDiv.appendChild(healBold);
                var healCounter = 0;
                if (healPath["healByLvl"]) {
                  healCounter += healPath["healByLvl"][champLevel];
                };
                if (healCounter !== 0) {
                  var text = document.createTextNode(Math.round(healCounter));
                  abilityDiv.appendChild(text);
                }
              };
              
              if (champLeftFile[ability]["heal"]) {
                var healPath = champLeftFile[ability]["heal"];
                var healBold = document.createElement('b');
                healBold.innerText = 'Heal: ';
                abilityDiv.appendChild(healBold);
                var healCounter = 0;
                if (healPath["heal"]) {
                  healCounter += arrayCheck(healPath["heal"]);
                };
                if (healPath["healByLvl"]) {
                  healCounter += healPath["healByLvl"][champLevel];
                };
                if (healPath["maxHPRatioByLvl"]) {
                  healCounter += healPath["maxHPRatioByLvl"][champLevel] * totalHP;
                };
                if (healPath["APRatio"]) {
                  healCounter += arrayCheck(healPath["APRatio"]) * totalAP;
                };
                if (healPath["ADRatio"]) {
                  healCounter += arrayCheck(healPath["ADRatio"]) * totalAD;
                };
                if (healPath["bonusADRatio"]) {
                  healCounter += arrayCheck(healPath["bonusADRatio"]) * bonusAD;
                };
                if (healPath["bonusHPRatio"]) {
                  healCounter += arrayCheck(healPath["bonusHPRatio"]) * bonusHP;
                };
                if (healPath["maxHPRatio"]) {
                  healCounter += arrayCheck(healPath["maxHPRatio"]) * totalHP;
                };
                if (healPath["enemyMaxHPRatio"] && enemyStats.hp) {
                  healCounter += arrayCheck(healPath["enemyMaxHPRatio"]) * enemyTotalHP;
                };
                if (healPath["enemyMaxHPRatioPer100AP"] && enemyStats.hp) {
                  healCounter += arrayCheck(healPath["enemyMaxHPRatioPer100AP"]) * enemyTotalHP * totalAP/100;
                };
                if (healPath["enemyMaxHPRatioPer100BonusAD"] && enemyStats.hp) {
                  healCounter += arrayCheck(healPath["enemyMaxHPRatioPer100BonusAD"]) * enemyTotalHP * bonusAD/100;
                };
                if (healCounter !== 0) {
                  var text = document.createTextNode(Math.round(healCounter));
                  abilityDiv.appendChild(text);
                };
                var maxHPRatioCounter = 0;
                if (healPath["enemyMaxHPRatio"] && !enemyStats.hp) {
                  maxHPRatioCounter += arrayCheck(healPath["enemyMaxHPRatio"]); 
                };
                if (healPath["enemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                  maxHPRatioCounter += arrayCheck(healPath["enemyMaxHPRatioPer100AP"]) * totalAP/100;
                };
                if (maxHPRatioCounter !== 0) {
                  var text = document.createTextNode(' (+' + lengthCheck(maxHPRatioCounter) + ' Enemy Max HP Ratio)');
                  abilityDiv.appendChild(text);
                };
                if (healPath["missingHPRatio"]) {
                  var text = document.createTextNode(" (+" + arrayCheck(healPath["missingHPRatio"]) 
                  + " Missing HP Ratio)");
                  abilityDiv.appendChild(text);
                };
                if (healPath["preMitigation"]) {
                  var preText = document.createTextNode(', pre-mitigation.');
                  abilityDiv.appendChild(preText);
                };
                if (healPath["lifeStealRatio"]) {
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Damage Ratio';
                  abilityDiv.appendChild(dmgRatioU);
                  var text = document.createTextNode(': ' + healPath["lifeStealRatio"] * totalLifeSteal);
                  abilityDiv.appendChild(text);
                };
                if (healPath["dmgRatio"]) {
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Damage Ratio';
                  abilityDiv.appendChild(dmgRatioU);
                  var text = document.createTextNode(': ' + arrayCheck(healPath["dmgRatio"]));
                  abilityDiv.appendChild(text);
                };
                if (healPath["minDmgRatio"]) {
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Damage Ratio';
                  abilityDiv.appendChild(dmgRatioU);
                  var minText = document.createTextNode(': Min: ' + healPath["minDmgRatio"] + ', Max: ' 
                  + healPath["maxDmgRatio"]);
                  abilityDiv.appendChild(minText);
                };
                if (healPath["dmgTakenRatio"]) {
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Damage Taken Ratio';
                  abilityDiv.appendChild(dmgRatioU);
                  var text = document.createTextNode(': ' + arrayCheck(healPath["dmgTakenRatio"]));
                  abilityDiv.appendChild(text);
                };
                if (healPath["increasePer1%HPLostLast4Sec"]) {
                  singleBreak();
                  var text = document.createTextNode('Increase by Ratio of ' +  healPath["increasePer1%HPLostLast4Sec"]
                   + ' per 1% HP lost in last 4 seconds.');
                  abilityDiv.appendChild(text);
                };
                if (healPath["system"] === "max") {
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max';
                  abilityDiv.appendChild(maxU);
                  if (healPath["maxHealByLvl"]) {
                    var text = document.createTextNode(': ' + healPath["maxHealByLvl"][champLevel]);
                    abilityDiv.appendChild(text);
                  }
                };
                if (healPath["system"] === '2Part') {
                  var part1U = document.createElement('u');
                  part1U.innerText = 'Part 1';
                  abilityDiv.appendChild(part1U);
                  var p1HealCount = 0;
                  var p2HealCount = 0;
                  if (healPath["part1"]["heal"]) {
                    p1HealCount += arrayCheck(healPath["part1"]["heal"]);
                  };
                  if (healPath["part1"]["APRatio"]) {
                    p1HealCount += arrayCheck(healPath["part1"]["APRatio"]) * totalAP;
                  };
                  if (p1HealCount !== 0) {
                    var text = document.createTextNode(': ' + Math.round(p1HealCount));
                    abilityDiv.appendChild(text);
                  };
                  singleBreak();
                  var part2U = document.createElement('u');
                  part2U.innerText = 'Part 2';
                  abilityDiv.appendChild(part2U);
                  if (healPath["part2"]["part1RatioFormula"]) {
                    var text = document.createTextNode(': ' + Math.round(p1HealCount 
                      * ((1 + ((0.00075 * (totalAP) - 0.15))**2))));
                    abilityDiv.appendChild(text);
                  }
                };
                if (healPath["system"] === "minMax" ) {
                  var minU = document.createElement('u');
                  minU.innerText = 'Min'
                  abilityDiv.appendChild(minU)
                  var minHealCounter = 0;
                  var maxHealCounter = 0;
                  if (healPath["minHeal"]) {
                    minHealCounter += arrayCheck(healPath["minHeal"]);
                  };
                  if (healPath["minHealByLvl"]) {
                    minHealCounter += healPath["minHealByLvl"][champLevel];
                  };
                  if (healPath["minAPRatio"]) {
                    minHealCounter += arrayCheck(healPath["minAPRatio"]) * totalAP;
                  };
                  if (healPath["minADRatio"]) {
                    minHealCounter += arrayCheck(healPath["minADRatio"]) * totalAD;
                  };
                  if (healPath["minBonusADRatio"]) {
                    minHealCounter += arrayCheck(healPath["minBonusADRatio"]) * bonusAD;
                  };
                  if (healPath["minBonusHPRatio"]) {
                    minHealCounter += arrayCheck(healPath["minBonusHPRatio"]) * bonusHP;
                  };
                  if (healPath["minMaxHPRatio"]) {
                    minHealCounter += arrayCheck(healPath["minMaxHPRatio"]) * totalHP;
                  };
                  if (minHealCounter !== 0) {
                    var text = document.createTextNode(': ' + Math.round(minHealCounter));
                    abilityDiv.appendChild(text);
                  };
                  if (healPath["minMissingHPRatio"]) {
                    var text = document.createTextNode(" (+" + arrayCheck(healPath["minMissingHPRatio"]) 
                    + " Missing HP Ratio)");
                    abilityDiv.appendChild(text);
                  };

                  singleBreak();
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max';
                  abilityDiv.appendChild(maxU);

                  if (healPath["maxHeal"]) {
                    maxHealCounter += arrayCheck(healPath["maxHeal"]);
                  };
                  if (healPath["maxHealByLvl"]) {
                    maxHealCounter += healPath["maxHealByLvl"][champLevel];
                  };
                  if (healPath["maxAPRatio"]) {
                    maxHealCounter += arrayCheck(healPath["maxAPRatio"]) * totalAP;
                  };
                  if (healPath["maxADRatio"]) {
                    maxHealCounter += arrayCheck(healPath["maxADRatio"]) * totalAD;
                  };
                  if (healPath["maxBonusADRatio"]) {
                    maxHealCounter += arrayCheck(healPath["maxBonusADRatio"]) * bonusAD;
                  };
                  if (healPath["maxBonusHPRatio"]) {
                    maxHealCounter += arrayCheck(healPath["maxBonusHPRatio"]) * bonusHP;
                  };
                  if (healPath["maxMaxHPRatio"]) {
                    maxHealCounter += arrayCheck(healPath["maxMaxHPRatio"]) * totalHP;
                  };
                  if (maxHealCounter !== 0) {
                    var text = document.createTextNode(': ' + Math.round(maxHealCounter));
                    abilityDiv.appendChild(text);
                  };
                  if (healPath["maxMissingHPRatio"]) {
                    var text = document.createTextNode(" (+" + arrayCheck(healPath["maxMissingHPRatio"]) 
                    + " Missing HP Ratio)");
                    abilityDiv.appendChild(text);
                  }
                };
                if (healPath["interval"]) {
                  var intervalText = document.createTextNode(' per ' + healPath["interval"] + ' sec')
                  abilityDiv.appendChild(intervalText);
                  if (healPath["duration"]) {
                    var text = document.createTextNode(', for ' + healPath["duration"] + ' seconds.');
                    abilityDiv.appendChild(text);
                  };
                  singleBreak();
                  if (healPath["system"] === 'minMax') {
                    singleBreak();
                  };
                  var totalU = document.createElement('u');
                  totalU.innerText = 'Total';
                  abilityDiv.appendChild(totalU);
                  var totalHealCounter = 0;
                  if (healPath["heal"]) {
                    totalHealCounter += arrayCheck(healPath["heal"]);
                  };
                  if (healPath["APRatio"]) {
                    totalHealCounter += arrayCheck(healPath["APRatio"]) * totalAP;
                  };
                  if (totalHealCounter !== 0) {
                    var text = document.createTextNode(': ' + Math.round(totalHealCounter * healPath["ticks"]));
                    abilityDiv.appendChild(text);
                  };
                  if (healPath["system"] === 'minMax') {
                    var totalMinHeal = 0;
                    var totalMaxHeal = 0;
                    if (healPath["minHeal"]) {
                      totalMinHeal += arrayCheck(healPath["minHeal"])
                    };
                    if (healPath["minAPRatio"]) {
                      totalMinHeal += arrayCheck(healPath["minAPRatio"]) * totalAP;
                    };
                    singleBreak();
                    if (healPath["maxHeal"]) {
                      totalMaxHeal += arrayCheck(healPath["maxHeal"])
                    };
                    if (healPath["maxAPRatio"]) {
                      totalMaxHeal += arrayCheck(healPath["maxAPRatio"]) * totalAP;
                    };
                    var text = document.createTextNode(': Min: ' + Math.round(totalMinHeal * healPath["ticks"])
                    + ', Max: ' + Math.round(totalMaxHeal * healPath["ticks"]));
                    abilityDiv.appendChild(text);
                  }
                };
                if (healPath["system"] === 'perTarget') {
                  var perText = document.createTextNode(' per champion');
                  abilityDiv.appendChild(perText);
                };
                if (healPath["duration"] && !healPath["interval"]) {
                  var text = document.createTextNode(' over ' + healPath["duration"] + ' seconds.');
                  abilityDiv.appendChild(text);
                };
                if (healPath["empower"]) {
                  var empPath = healPath["empower"]
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
                if (healPath["empowerBonus"]) {
                  var empPath = healPath["empowerBonus"];
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

              if (champLeftFile[ability]["shield"]) {
                var path = champLeftFile[ability]["shield"];
                var shieldBold = document.createElement('b');
                if (path["type"] !== 'all') {
                  shieldBold.innerText = path["type"] + ' Shield: '
                } else {
                  shieldBold.innerText = ' Shield: '
                };
                abilityDiv.appendChild(shieldBold);
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
                  var text = document.createTextNode(" (+" + Math.round(path["maxHPRatioPerStack"] * 
                  totalHP) + " per stack)");
                  abilityDiv.appendChild(text);
                };
                if (path["dmgTakenRatio"]) {
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Damage Taken Ratio';
                  abilityDiv.appendChild(dmgRatioU);
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
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration';
                  abilityDiv.appendChild(durationU);
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

              if (champLeftFile[ability]["revive"]) {
                var path = champLeftFile[ability]["revive"]
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

              if (champLeftFile[ability]["damageRedux"]) {
                var path = champLeftFile[ability]["damageRedux"];
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
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration';
                  abilityDiv.appendChild(durationU);
                };
                if (path["duration"]) {
                  var text = document.createTextNode(': ' + arrayCheck(path["duration"]));
                  abilityDiv.appendChild(text);
                };
                if (path["minDuration"]) {
                  var text = document.createTextNode(': Min: ' + path["minDuration"] + ', Max: '
                  + path["maxDuration"]);
                  abilityDiv.appendChild(text);
                };
                if (path["calculateFrom"]) {
                  singleBreak();
                  var text = document.createTextNode('Applies ' + path["calculateFrom"] + '.');
                  abilityDiv.appendChild(text);
                };
                doubleBreak();
              };

              if (champLeftFile[ability]["magicDamageRedux"]) {
                var path = champLeftFile[ability]["magicDamageRedux"]
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

              if (champLeftFile[ability]["physDamageRedux"]) {
                var path = champLeftFile[ability]["physDamageRedux"];
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

              if(champLeftFile[ability]["dmgImmune"]) {
                var immuneB = document.createElement('b');
                immuneB.innerText = 'Damage Immune Duration: ';
                abilityDiv.appendChild(immuneB);
                var text = document.createTextNode(arrayCheck(champLeftFile[ability]["dmgImmune"]));
                abilityDiv.appendChild(text);
                doubleBreak();
              };

              if(champLeftFile[ability]["ccImmune"]) {
                var bold = document.createElement('b');
                bold.innerText = 'Crowd Control Immune Duration: ';
                abilityDiv.appendChild(bold);
                var text = document.createTextNode(arrayCheck(champLeftFile[ability]["ccImmune"]));
                abilityDiv.appendChild(text);
                doubleBreak();
              };

              if (champLeftFile[ability]["minDmgImmune"]) {
                var bold = document.createElement('b');
                bold.innerText = 'Crowd Control Immune Duration: ';
                abilityDiv.appendChild(bold);
                var minU = document.createElement('u');
                minU.innerText = 'Min'
                abilityDiv.appendChild(minU);
                var minText = document.createTextNode(': ' + arrayCheck(champLeftFile[ability]["minDmgImmune"]));
                abilityDiv.appendChild(minText);
                singleBreak();
                var maxU = document.createElement('u');
                maxU.innerText = 'Max';
                abilityDiv.appendChild(maxU);
                var maxText = document.createTextNode(': ' + arrayCheck(champLeftFile[ability]["maxDmgImmune"]));
                abilityDiv.appendChild(maxText);
                doubleBreak();
              };

              if (champLeftFile[ability]["silence"]) {
                var bold = document.createElement('b');
                bold.innerText = 'Silence Duration: ';
                abilityDiv.appendChild(bold);
                var text = document.createTextNode(arrayCheck(champLeftFile[ability]["silence"]));
                abilityDiv.appendChild(text);
                doubleBreak();
              };

              if (champLeftFile[ability]["blind"]) {
                var blindB = document.createElement('b');
                blindB.innerText = 'Blind Duration: ';
                abilityDiv.appendChild(blindB);
                var text = document.createTextNode(arrayCheck(champLeftFile[ability]["blind"]));
                abilityDiv.appendChild(text);
                doubleBreak();
              };

              if(champLeftFile[ability]["interruptCC"] || champLeftFile[ability]["interruptCCByLvl"] 
              || champLeftFile[ability]["minInterruptCC"]) {
                var bold = document.createElement('b');
                bold.innerText = 'Crowd Control Duration: ';
                abilityDiv.appendChild(bold);
              };

              if (champLeftFile[ability]["interruptCC"]) {
                var intCounter = 0;
                intCounter += arrayCheck(champLeftFile[ability]["interruptCC"]);
                if (champLeftFile[ability]["interruptCCPer10Lethality"]) {
                  intCounter += arrayCheck(champLeftFile[ability]["interruptCCPer10Lethality"]) * totalLethality/10;
                };
                if (intCounter.toString().length > 4) {
                  intCounter = intCounter.toFixed(2);
                };
                var text = document.createTextNode(intCounter);
                abilityDiv.appendChild(text);
                doubleBreak();
              };

              if (champLeftFile[ability]["interruptCCByLvl"]) {
                var text = document.createTextNode(champLeftFile[ability]["interruptCCByLvl"][champLevel]);
                abilityDiv.appendChild(text);
                doubleBreak();
              };

              if (champLeftFile[ability]["minInterruptCC"]) {
                var minU = document.createElement('u');
                minU.innerText = 'Min';
                abilityDiv.appendChild(minU);
                var minText = document.createTextNode(': ' + arrayCheck(champLeftFile[ability]["minInterruptCC"]));
                abilityDiv.appendChild(minText);
                singleBreak();
                var maxU = document.createElement('u');
                maxU.innerText = 'Max';
                abilityDiv.appendChild(maxU);
                var maxText = document.createTextNode(': ' + arrayCheck(champLeftFile[ability]["maxInterruptCC"]));
                abilityDiv.appendChild(maxText);
                doubleBreak();
              };
              
              if (champLeftFile[ability]["damageAmp"]) {
                var ampPath = champLeftFile[ability]["damageAmp"];
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

              if (champLeftFile[ability]["ADRedux"]) {
                var path = champLeftFile[ability]["ADRedux"];
                var bold = document.createElement('b');
                bold.innerText = 'Attack Damage Reduction: ';
                abilityDiv.appendChild(bold);
                if (path["redux"]) {
                  var text = document.createTextNode(arrayCheck(path["redux"]));
                  abilityDiv.appendChild(text);
                };
                doubleBreak();
              };

              if (champLeftFile[ability]["resistRedux"]) {
                var path = champLeftFile[ability]["resistRedux"];
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
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration'
                  abilityDiv.appendChild(durationU);
                  var text = document.createTextNode(': ' + arrayCheck(path["duration"]));
                  abilityDiv.appendChild(text);
                };
                if (path["maxDuration"]) {
                  singleBreak();
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Max Duration';
                  abilityDiv.appendChild(durationU);
                  var text = document.createTextNode(': ' + arrayCheck(path["maxDuration"]));
                  abilityDiv.appendChild(text);
                };
                doubleBreak();
              };

              if (champLeftFile[ability]["bonusStats"]) {
                var path = champLeftFile[ability]["bonusStats"];
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
                  var asRatioU = document.createElement('u');
                  asRatioU.innerText = 'Attacks per Second';
                  abilityDiv.appendChild(asRatioU);
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
                  var lsRatioU = document.createElement('u');
                  lsRatioU.innerText = 'Life Steal Ratio';
                  abilityDiv.appendChild(lsRatioU);
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

              if (champLeftFile[ability]["bonusHealth"]) {
                var path = champLeftFile[ability]["bonusHealth"];
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
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration';
                  abilityDiv.appendChild(durationU);
                  var text = document.createTextNode(': ' + arrayCheck(path["duration"]));
                  abilityDiv.appendChild(text);
                };
                doubleBreak();
              };

              if (champLeftFile[ability]["maxHPRegen"]) {
                var bold = document.createElement('b');
                bold.innerText = 'Max HP Ratio Regenerated: ';
                abilityDiv.appendChild(bold);
                var text = document.createTextNode(arrayCheck(champLeftFile[ability]["maxHPRegen"]));
                abilityDiv.appendChild(text);
                doubleBreak();
              };

              if (champLeftFile[ability]["healthRegen"]) {
                var path = champLeftFile[ability]["healthRegen"];
                singleBreak();
                var regenB = document.createElement('b');
                regenB.innerText = 'Health Regen: ';
                abilityDiv.appendChild(regenB);
                if (path["dmgTakenRatio"]) {
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Damage Taken Ratio';
                  abilityDiv.appendChild(dmgRatioU);
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
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Grey Health Ratio';
                  abilityDiv.appendChild(dmgRatioU);
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

              if (champLeftFile[ability]["bonusAttackDamage"]) {
                var path = champLeftFile[ability]["bonusAttackDamage"];
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

              if (champLeftFile[ability]["bonusAdaptiveForce"]) {
                var path = champLeftFile[ability]["bonusAdaptiveForce"];
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

              if (champLeftFile[ability]["allyBonusAdaptiveForce"]) {
                var path = champLeftFile[ability]["allyBonusAdaptiveForce"];
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

              if (champLeftFile[ability]["bonusResist"]) {
                var path = champLeftFile[ability]["bonusResist"];
                var bold = document.createElement('b');
                bold.innerText = 'Bonus Armor & Magic Resist: ';
                abilityDiv.appendChild(bold);
                if (path["resist"]) {
                  var text = document.createTextNode(arrayCheck(path["resist"]));
                  abilityDiv.appendChild(text);
                };
                if (path["bonusResistByLvl"]) {
                  var text = document.createTextNode(path["bonusResistByLvl"][champLevel]);
                  abilityDiv.appendChild(text);
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
                  var text = document.createTextNode(' (+' + path["bonusResistRatio"] + ' Bonus Resist Ratio'
                  + '. Current Bonus Armor: ' + Math.round(path["bonusResistRatio"] * bonusMR) + ', '
                  + 'Current Bonus MR: ' + Math.round(path["bonusResistRatio"] * bonusArmor) + ')');
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

              if (champLeftFile[ability]["bonusArmorPenOnCrit"]) {
                var penPath = champLeftFile[ability]["bonusArmorPenOnCrit"];
                var penBold = document.createElement('b');
                penBold.innerText = 'Bonus-Armor Pen Ratio on Crits: ';
                abilityDiv.appendChild(penBold);
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

              if (champLeftFile[ability]["bonusArmor"]) {
                var path = champLeftFile[ability]["bonusArmor"];
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

              if (champLeftFile[ability]["allyBonusArmor"]) {
                var path = champLeftFile[ability]["allyBonusArmor"];
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

              if (champLeftFile[ability]["bonusMagicResist"]) {
                var path = champLeftFile[ability]["bonusMagicResist"];
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

              if (champLeftFile[ability]["allyBonusMagicResist"]) {
                var path = champLeftFile[ability]["allyBonusMagicResist"];
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

              if (champLeftFile[ability]["bonusAttackSpeed"]) {
                var ASPath = champLeftFile[ability]["bonusAttackSpeed"];
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
                  asRatioCounter += ASPath['attackSpeedByRRank'][document.getElementById(`RRank${side}`).value - 1];
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

              if (champLeftFile[ability]["bonusOmniVamp"]) {
                var vampPath = champLeftFile[ability]["bonusOmniVamp"];
                var vampBold = document.createElement('b');
                vampBold.innerText = 'Bonus Omni Vamp Ratio: ';
                abilityDiv.appendChild(vampBold);
                if (vampPath['vamp']) {
                  var text = document.createTextNode(arrayCheck(vampPath['vamp']));
                  abilityDiv.appendChild(text);
                };
                if (vampPath["duration"]) {
                  singleBreak();
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration';
                  abilityDiv.appendChild(durationU);
                  var text = document.createTextNode(': ' + arrayCheck(vampPath["duration"]));
                  abilityDiv.appendChild(text);
                };
                doubleBreak();
              };

              if (champLeftFile[ability]["bonusMoveSpeed"]) {
                var msPath = champLeftFile[ability]["bonusMoveSpeed"];
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

              if (champLeftFile[ability]["cripple"]) {
                var path = champLeftFile[ability]["cripple"];
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

              if (champLeftFile[ability]["petStats"]) {
                var path = champLeftFile[ability]["petStats"];
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
                }l
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

              if (champLeftFile[ability]["empower"]) {
                var ePath = champLeftFile[ability]["empower"];
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
                    var path = champLeftFile[ability]["empower"]["Q"]["petStats"];
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
                    var healPath = ePath['W']['heal'];
                    var healBold = document.createElement('b');
                    healBold.innerText = 'Heal: ';
                    abilityDiv.appendChild(healBold);
                    if (healPath['system'] === 'minMax') {
                      var minU = document.createElement('u');
                      minU.innerText = 'Min';
                      abilityDiv.appendChild(minU);
                      var minMissCounter = 0;
                      var maxMissCounter = 0;
                      if (healPath["minMissingHPRatio"]) {
                        minMissCounter += arrayCheck(healPath["minMissingHPRatio"]);
                      };
                      if (healPath["minMissingHPRatioPer100AP"]) {
                        minMissCounter += arrayCheck(healPath["minMissingHPRatioPer100AP"]) * totalAP/100;
                      };
                      var minText = document.createTextNode(': ' + lengthCheck(minMissCounter) + ' Missing HP Ratio');
                      abilityDiv.appendChild(minText);
                      singleBreak();
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max';
                      abilityDiv.appendChild(maxU);
                      if (healPath["maxMissingHPRatio"]) {
                        maxMissCounter += arrayCheck(healPath["maxMissingHPRatio"]);
                      };
                      if (healPath["maxMissingHPRatioPer100AP"]) {
                        maxMissCounter += arrayCheck(healPath["maxMissingHPRatioPer100AP"]) * totalAP/100;
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

              if (champLeftFile[ability]["duration"]) {
                var bold = document.createElement('b');
                bold.innerText = "Duration: ";
                abilityDiv.appendChild(bold);
                var text = document.createTextNode(arrayCheck(champLeftFile[ability]["duration"]));
                abilityDiv.appendChild(text);
                doubleBreak();
              };

              if (champLeftFile[ability]["minDuration"]) {
                var bold = document.createElement('b');
                bold.innerText = "Duration: ";
                abilityDiv.appendChild(bold);
                var text = document.createTextNode('Min: ' + arrayCheck(champLeftFile[ability]["minDuration"]) 
                + ', Max: ' + arrayCheck(champLeftFile[ability]["maxDuration"]));
                abilityDiv.appendChild(text);
                doubleBreak();
              };

              if (champLeftFile[ability]["maxDuration"] && !champLeftFile[ability]["minDuration"]) {
                var bold = document.createElement('b');
                bold.innerText = "Max Duration: ";
                abilityDiv.appendChild(bold);
                var text = document.createTextNode(arrayCheck(champLeftFile[ability]["maxDuration"]));
                abilityDiv.appendChild(text);
                doubleBreak();
              };

              if (champLeftFile[ability]["coolDown"]) {
                var bold = document.createElement('b');
                bold.innerText = "Cooldown: ";
                abilityDiv.appendChild(bold);
                var text = document.createTextNode(arrayCheck(champLeftFile[ability]["coolDown"]));
                abilityDiv.appendChild(text);
              };
              if (champLeftFile[ability]["minCoolDown"] && !champLeftFile[ability]["staticCoolDownFormula"]) {
                var bold = document.createElement('b');
                bold.innerText = "Cooldown: ";
                abilityDiv.appendChild(bold);
                var text = document.createTextNode('Max: ' + arrayCheck(champLeftFile[ability]["maxCoolDown"])
                + ', Min: ' + arrayCheck(champLeftFile[ability]["minCoolDown"]));
                abilityDiv.appendChild(text);
              };
              if (champLeftFile[ability]["maxCoolDown"] && !champLeftFile[ability]["minCoolDown"]) {
                var bold = document.createElement('b');
                bold.innerText = "Max Cooldown: ";
                abilityDiv.appendChild(bold);
                var text = document.createTextNode(arrayCheck(champLeftFile[ability]["maxCoolDown"]));
                abilityDiv.appendChild(text);
              };
              if (champLeftFile[ability]["coolDownByLvl"]) {
                var bold = document.createElement('b');
                bold.innerText = "Cooldown: ";
                abilityDiv.appendChild(bold);
                var text = document.createTextNode(champLeftFile[ability]["coolDownByLvl"][champLevel])
                abilityDiv.appendChild(text);
              };
              if (champLeftFile[ability]["combatCoolDown"]) {
                var bold = document.createElement('b');
                bold.innerText = "Combat Cooldown: ";
                abilityDiv.appendChild(bold);
                var text = document.createTextNode(arrayCheck(champLeftFile[ability]["combatCoolDown"]));
                abilityDiv.appendChild(text);
              };
              if (champLeftFile[ability]["staticCoolDown"]) {
                if (champLeftFile[ability]["coolDown"]) {
                  singleBreak();
                };
                var bold = document.createElement('b');
                bold.innerText = "Static Cooldown: ";
                abilityDiv.appendChild(bold);
                var text = document.createTextNode(arrayCheck(champLeftFile[ability]["staticCoolDown"]));
                abilityDiv.appendChild(text);
              };
              if (champLeftFile[ability]["staticCoolDownByLvl"]) {
                var bold = document.createElement('b');
                bold.innerText = "Static Cooldown: ";
                abilityDiv.appendChild(bold);
                var text = document.createTextNode(champLeftFile[ability]["staticCoolDownByLvl"][champLevel]);
                abilityDiv.appendChild(text);
              };
              if (champLeftFile[ability]["autoCoolDown"]) {
                var bold = document.createElement('b');
                bold.innerText = "Cooldown Number of Auto Attacks: ";
                abilityDiv.appendChild(bold);
                var text = document.createTextNode(champLeftFile[ability]["autoCoolDown"]);
                abilityDiv.appendChild(text);
              };
              if (champLeftFile[ability]["coolDownRefund"]) {
                if (champLeftFile[ability]["coolDownByLvl"] || champLeftFile[ability]["coolDown"] 
                || champLeftFile[ability]["staticCoolDownByLvl"] || champLeftFile[ability]["staticCoolDown"]) {
                  singleBreak();
                };
                var refundU = document.createElement('u');
                refundU.innerText = 'Cooldown Refund';
                abilityDiv.appendChild(refundU);
                var text = document.createTextNode(': ' + arrayCheck(champLeftFile[ability]["coolDownRefund"]));
                abilityDiv.appendChild(text);
              };
              if (champLeftFile[ability]["allCDRefund"]) {
                if (champLeftFile[ability]["coolDown"]) {
                  singleBreak();
                };
                var refundU = document.createElement('u');
                refundU.innerText = 'All Abilities Cooldown Refund';
                abilityDiv.appendChild(refundU);
                var text = document.createTextNode(': ' + arrayCheck(champLeftFile[ability]["allCDRefund"]));
                abilityDiv.appendChild(text);
              };
              if (champLeftFile[ability]["basicCDMaxRefundRatioPerStack"]) {
                singleBreak();
                var refundU = document.createElement('u');
                refundU.innerText = 'Basic Abilities Max Cooldown Refund Ratio';
                abilityDiv.appendChild(refundU);
                var text = document.createTextNode(': ' + champLeftFile[ability]["basicCDMaxRefundRatioPerStack"]
                + ' per Stack');
                abilityDiv.appendChild(text);
              };
              if (champLeftFile[ability]["coolDownRefundByLvl"]) {
                singleBreak();
                var refundU = document.createElement('u');
                refundU.innerText = 'Cooldown Refund';
                abilityDiv.appendChild(refundU);
                var text = document.createTextNode(': ' + champLeftFile[ability]["coolDownRefundByLvl"][champLevel])
                abilityDiv.appendChild(text);
              };
              if (champLeftFile[ability]["minCoolDownRefund"]) {
                singleBreak();
                var refU = document.createElement('u');
                refU.innerText = 'Cooldown Refund';
                abilityDiv.appendChild(refU);
                var text = document.createTextNode(': Min: ' + champLeftFile[ability]["minCoolDownRefund"]
                + ', Max: ' + champLeftFile[ability]["maxCoolDownRefund"]);
                abilityDiv.appendChild(text);
              };
              if (champLeftFile[ability]["minCoolDownRefundByLvl"]) {
                singleBreak();
                var refU = document.createElement('u');
                refU.innerText = 'Min Cooldown Refund';
                abilityDiv.appendChild(refU);
                var text = document.createTextNode(': ' + champLeftFile[ability]["minCoolDownRefundByLvl"][champLevel]);
                abilityDiv.appendChild(text);
              };
              if (champLeftFile[ability]["maxCoolDownRefundByLvl"]) {
                singleBreak();
                var refundU = document.createElement('u');
                refundU.innerText = 'Max Cooldown Refund'
                abilityDiv.appendChild(refundU);
                var text = document.createTextNode(': ' + champLeftFile[ability]["maxCoolDownRefundByLvl"][champLevel])
                abilityDiv.appendChild(text);
              };
              if (champLeftFile[ability]["coolDownRefundRatio"]) {
                singleBreak();
                var refU = document.createElement('u');
                refU.innerText = 'Cooldown Refund Ratio';
                abilityDiv.appendChild(refU);
                var text = document.createTextNode(': ' + arrayCheck(champLeftFile[ability]["coolDownRefundRatio"]));
                abilityDiv.appendChild(text);
              };
              if (champLeftFile[ability]["coolDownRefundRatioByLvl"]) {
                singleBreak();
                var refU = document.createElement('u');
                refU.innerText = 'Cooldown Refund Ratio';
                abilityDiv.appendChild(refU);
                var text = document.createTextNode(': ' + champLeftFile[ability]["coolDownRefundRatioByLvl"][champLevel])
                abilityDiv.appendChild(text);
              };
              if (champLeftFile[ability]["maxCoolDownRefundRatio"]) {
                singleBreak();
                var refU = document.createElement('u');
                refU.innerText = 'Max Cooldown Refund Ratio';
                abilityDiv.appendChild(refU);
                var text = document.createTextNode(': ' + champLeftFile[ability]["maxCoolDownRefundRatio"]);
                abilityDiv.appendChild(text);
              };
              if (champLeftFile[ability]["recharge"]) {
                if (champLeftFile[ability]["coolDown"] || champLeftFile[ability]["staticCoolDown"]) {
                  singleBreak();
                };
                var bold = document.createElement('b');
                bold.innerText = "Recharge: ";
                abilityDiv.appendChild(bold);
                var text = document.createTextNode(arrayCheck(champLeftFile[ability]["recharge"]));
                abilityDiv.appendChild(text);
              };
              if (champLeftFile[ability]["staticCoolDownFormula"]) {
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

              if (champLeftFile[ability]["Rhaast"]) {
                var path = champLeftFile[ability]["Rhaast"];
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

              if (champLeftFile[ability]["Shadow"]) {
                var path = champLeftFile[ability]["Shadow"];
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
            var abilityText = document.createTextNode("No combat stats for this ability.");
            abilityDiv.appendChild(abilityText);

          } if (champLeftFile[this.transformAbilities[i]]) {
            var tfAbility = this.transformAbilities[i];
            var RRank = document.getElementById(`RRank${side}`).value
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

              if (champLeftFile[tfAbility]['autoEmpower']) {
                var path = champLeftFile[tfAbility]['autoEmpower']['damage'];
                var bold = document.createElement('b');
                bold.innerText = 'Auto Attack Empower: ';
                abilityDiv.appendChild(bold);
                var dmgType = document.createElement('u');
                dmgType.innerText = path['type'] + ' Damage';
                abilityDiv.appendChild(dmgType);
                if (path['dmgByRRank']) {
                  var text = document.createTextNode(': ' + JSON.stringify(path["dmgByRRank"])
                  .replace(/,/g, ', ') + ' (based on R rank)');
                  abilityDiv.appendChild(text);
                };
                if (path['APRatio']) {
                  var text = document.createTextNode(' (+' + path['APRatio'] + ' AP Ratio)');
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
                    var ratio = path['APRatio'];
                    ratio = arrayCheck(ratio);
                    dmgCounter += ratio * (itemStats.ap + selectedStats.ap);
                  };
                  var dmgText = document.createTextNode(': ' + Math.round(dmgCounter));
                  abilityDiv.appendChild(dmgText);
                }
                if (champLeftFile[tfAbility]['autoEmpower']['heal']) {
                  var healPath = champLeftFile[tfAbility]['autoEmpower']['heal'];
                  doubleBreak();
                  var healU = document.createElement('u');
                  healU.innerText = 'Heal';
                  abilityDiv.appendChild(healU);
                  if (healPath['healByRRank']) {
                    var text = document.createTextNode(': ' + JSON.stringify(healPath["healByRRank"])
                    .replace(/,/g, ', ') + ' (based on R rank)');
                    abilityDiv.appendChild(text);
                  };
                  if (healPath['APRatio']) {
                    var text = document.createTextNode(' (+' + healPath['APRatio'] + ' AP Ratio)');
                    abilityDiv.appendChild(text);
                  };
                  singleBreak();
                  var underL = document.createElement('u');
                  underL.innerText = 'Current Value';
                  abilityDiv.appendChild(underL);
                  var healCounter = 0;
                  if (healPath['healByRRank']) {
                    healCounter += healPath["healByRRank"][RRank];
                  };
                  if (healPath['APRatio']) {
                    var ratio = healPath['APRatio'];
                    ratio = arrayCheck(ratio);
                    healCounter += ratio * (itemStats.ap + selectedStats.ap);
                  };
                  var text = document.createTextNode(': ' + Math.round(healCounter));
                  abilityDiv.appendChild(text);

                }
              }

              if (champLeftFile[tfAbility]['damage']) {
                var path = champLeftFile[tfAbility]['damage'];
                var bold = document.createElement('b');
                bold.innerText = path['type'] + ' Damage: ';
                abilityDiv.appendChild(bold);
                if (path['dmg']) {
                  var text = document.createTextNode(JSON.stringify(path['dmg']).replace(/,/g, ', '));
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
                doubleBreak();
              };

              if (champLeftFile[tfAbility]['bonusAttackSpeed']) {
                var path = champLeftFile[tfAbility]['bonusAttackSpeed'];
                var bold = document.createElement('b');
                bold.innerText = 'Bonus Attack Speed: ';
                abilityDiv.appendChild(bold);
                if (path['attackSpeed']) {
                  var text = document.createTextNode(JSON.stringify(path['attackSpeed']).replace(/,/g, ', '));
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

              if (champLeftFile[tfAbility]["passiveTransformBonus"]) {
                var path = champLeftFile[tfAbility]["passiveTransformBonus"];
                var bold = document.createElement('b');
                bold.innerText = `Passive's Auto Empower Increase Ratio: `;
                abilityDiv.appendChild(bold);
                var text = document.createTextNode(JSON.stringify(path['bonus']).replace(/,/g, ', '));
                abilityDiv.appendChild(text);
                singleBreak();
                var underL = document.createElement('u');
                underL.innerText = 'Duration';
                abilityDiv.appendChild(underL);
                var dur = document.createTextNode(': ' + path['duration']);
                abilityDiv.appendChild(dur);
                doubleBreak();
              }

              if (champLeftFile[tfAbility]['coolDown']) {
                var bold = document.createElement('b');
                bold.innerText = 'Cooldown: ';
                abilityDiv.appendChild(bold);
                var text = document.createTextNode(JSON.stringify(champLeftFile[tfAbility]['coolDown'])
                .replace(/,/g, ', '));
                abilityDiv.appendChild(text);
              }
            }

            if (this.state[`${ability}RankLeft`] > 0 ) {

              if (champLeftFile[tfAbility]['autoEmpower']) {
                var path = champLeftFile[tfAbility]['autoEmpower']['damage'];
                var bold = document.createElement('b');
                bold.innerText = 'Auto Attack Empower: ';
                abilityDiv.appendChild(bold);
                var dmgType = document.createElement('u');
                dmgType.innerText = path['type'] + ' Damage';
                abilityDiv.appendChild(dmgType);
                var empowerCounter = 0;
                if (path['dmgByRRank']) {
                  empowerCounter += path["dmgByRRank"][document.getElementById(`RRank${side}`)];
                };
                if (path['APRatio']) {
                  var ratio = path['APRatio'];
                  ratio = arrayCheck(ratio);
                  empowerCounter += ratio * (itemStats.ap + selectedStats.ap);
                };
                var dmgText = document.createTextNode(': ' + Math.round(empowerCounter));
                abilityDiv.appendChild(dmgText);
              }
              
            }
          }
        }

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
        }))
      });
      var two = new Date();
      /*alert(two.getMilliseconds()-one.getMilliseconds());*/
  }

  onChampClick2 = (event) => {
    document.getElementsByTagName("input")[1].value = '';
    this.setState({ filteredChampsRight: [] });
    if (this.state.levelRight === 1) {
      document.getElementById("levelBoxRight").value = 1
    };
    document.getElementsByClassName("hidden")[1].style.visibility = 'visible';
    var hiddenArray = document.getElementsByClassName("hidden");
    hiddenArray[1].style.visibility = 'visible';
    for (var i = 12; i < 22; i++) {
      hiddenArray[i].style.visibility = 'visible'
    };

    if (event.target.textContent !== "Wukong") {
      var champName = event.target.textContent.replace("'","").replace(/\s/g, '')
    } else {
      champName = 'MonkeyKing'
    }

    this.setState({ champIndexRight: champList.filter(champ => {
      return champ.name.toLowerCase().startsWith(event.target.textContent.toLowerCase()) })[0].value
    })

    var abilitiesLength = document.getElementsByClassName('abilityBoxRight').length
    for (i = 0; i < abilitiesLength; i++) {
      var divToEmpty = document.getElementsByClassName('abilityBoxRight')[i];
      while (divToEmpty.firstChild) {
        divToEmpty.removeChild(divToEmpty.firstChild)
      }
    }

    this.setState({ champNameRight: champName });
    import (`./champions/${champName.toLowerCase()}`)
    .then(({default: champRightFile}) => {
      const statsPath = champRightFile[`stats`];
      const champLevel = this.state.levelRight - 1;

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
    })
    return this.setState({ champIconUrlRight: 
      `http://ddragon.leagueoflegends.com/cdn/10.12.1/img/champion/${champName}.png`})
  }

  onLevelChange = (event) => {
    const champLevel = event.target.value - 1
    import (`./champions/${this.state.champNameLeft.toLowerCase()}`)
      .then(({default: champLeftFile}) => {
        const statsPath = champLeftFile[`stats`]
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
        }))
      })
    document.getElementById("levelBoxLeft").setAttribute('value', event.target.value)
    return this.setState({ levelLeft: event.target.value })
  }

  onLevelChange2 = (event) => {
    const champLevel = event.target.value - 1
    import (`./champions/${this.state.champNameRight.toLowerCase()}`)
      .then(({default: champRightFile}) => {
        const statsPath = champRightFile[`stats`]
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
        }))
      })
    document.getElementById("levelBoxRight").setAttribute('value', event.target.value)
    return this.setState({ levelRight: event.target.value })
  }

  onRankChange = (event) => {
    var abilityFirstChar = event.currentTarget.id.charAt(0)
    this.setState({ [`${abilityFirstChar}RankLeft`]: event.target.value })
    this.testing('Left', event);           
  }

  onRankChange2 = (event) => {
    var abilityFirstChar2 = event.currentTarget.id.charAt(0)
    this.setState({ [`${abilityFirstChar2}RankRight`]: event.target.value })              
  }

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
            <div className="hidden abilityBox"></div>

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
            <div className="hidden abilityBox"></div>

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
            <div className="hidden abilityBox"></div>

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
            <div className="hidden abilityBox"></div>

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
            <div className="hidden abilityBox"></div>
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