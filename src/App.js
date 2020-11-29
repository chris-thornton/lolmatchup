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
      transformStats1: {},
      transformStats2: {},
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

    document.getElementsByTagName("input")[0].value = '';
    this.setState({ filteredChampsLeft: [] });
    if (this.state.levelLeft === 1) {
    document.getElementById("levelBoxLeft").value = 1;
    };
    var hiddenArray = document.getElementsByClassName("hidden");
    hiddenArray[0].style.visibility = 'visible';
    for (var i = 2; i < 12; i++) {
      hiddenArray[i].style.visibility = 'visible';
    }

    if (event.target.textContent !== "Wukong") {
      var champName = event.target.textContent.replace("'","").replace(/\s/g, '')
    } else {
      champName = 'MonkeyKing'
    };

    this.setState({ champIndexLeft: champList.filter(champ => {
      return champ.name.toLowerCase().startsWith(event.target.textContent.toLowerCase()) })[0].value
    })
    
    document.getElementsByClassName('champIcon')[0].setAttribute('src', `${this.portraits[`${champList.filter(champ => {
    return champ.name.toLowerCase().startsWith(event.target.textContent.toLowerCase()) })[0].value}`]}`)

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
        const statsPath = champLeftFile[`stats`]
        const champLevel = this.state.levelLeft - 1

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
          var rankIndex = this.state[`${ability}RankLeft`] - 1
          function countDecimals(value) {
            if(Math.floor(value) === value){ 
              return 0
            } else {
            return value.toString().split(".")[1].length || 0; 
            }
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
            console.log("ability rank left: " + this.state[`${ability}RankLeft`])
            this[`${ability}Details`] = champLeftFile[ability]
            if (this.state[`${ability}RankLeft`] == 0 || ability === 'passive') {

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
                var baseAutoDmg = statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var ADRatioPerCritText = document.createTextNode(" (+" + damage["ADRatioPerCritChance"] + " AD Ratio per Crit Chance")
                  abilityDiv.appendChild(ADRatioPerCritText);
                  if (damage["ADRatioPerCritChanceWithIE"]) {
                    var ADRatioIEText = document.createTextNode('. With Infinity Edge: ' + damage["ADRatioPerCritChanceWithIE"] + ')')
                    abilityDiv.appendChild(ADRatioIEText);
                  } else {
                    var closeParen = document.createTextNode(')')
                    abilityDiv.appendChild(closeParen)
                  }
                };
                if (damage["armorIgnore"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var ignoreText = document.createTextNode('Ignores ' + damage["armorIgnore"] + ' ratio of enemy armor.');
                  abilityDiv.appendChild(ignoreText);
                };
                if (damage["alwaysCrit"]) {
                  var critText = document.createTextNode('. Always critically strikes.');
                  abilityDiv.appendChild(critText);
                }
                if (damage["attackSpeedPenalty"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                      var dmgType = part["type"];
                      if (dmgType === 'phys') {
                        dmgType = 'Physical'
                      } else {
                        dmgType = dmgType[0].toUpperCase() + dmgType.slice(1)
                      }
                      var dmgTypeText = document.createTextNode(dmgType + " Damage - ");
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
                    if (part["trueDmgRatioByLvl"]) {
                      var br = document.createElement('br')
                      abilityDiv.appendChild(br);
                      var ratioText = document.createTextNode('Ratio of Damage dealt as True Damage: (' + part["trueDmgRatioByLvl"][0] + 
                      " to " + part["trueDmgRatioByLvl"][17]+ ", based on lvl. Currently: " + part["trueDmgRatioByLvl"][champLevel] + ')');
                      abilityDiv.appendChild(ratioText);
                    }

                    if (part["system"] === "minMax" ) {
                      var minU = document.createTextNode('Min - ');
                      abilityDiv.appendChild(minU)
                      if (part["minDmg"]) {
                        var minDmgText = document.createTextNode(JSON.stringify(part["minDmg"]).replace(/,/g, ', '))
                        abilityDiv.appendChild(minDmgText)
                      }
                      if (part["minAPRatio"]) {
                        var minAPRatioValue = JSON.stringify(part["minAPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                        var minAPRatioText = document.createTextNode(" (+" + minAPRatioValue + " AP Ratio)")
                        abilityDiv.appendChild(minAPRatioText)
                      }
                      if (part["minADRatio"]) {
                        var minADRatioValue = JSON.stringify(part["minADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                        var minADRatioText = document.createTextNode(" (+" + minADRatioValue + " AD Ratio)")
                        abilityDiv.appendChild(minADRatioText)
                      }
                      if (part["minBonusADRatio"]) {
                        var minBonusADRatioValue = JSON.stringify(part["minBonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                        var minBonusADRatioText = document.createTextNode(" (+" + minBonusADRatioValue + " Bonus AD Ratio)")
                        abilityDiv.appendChild(minBonusADRatioText)
                      }
                      var br = document.createElement("br");
                      abilityDiv.appendChild(br);
                      var maxU = document.createTextNode('Max - ');
                      abilityDiv.appendChild(maxU)
                      if (part["maxDmg"]) {
                        var maxDmgText = document.createTextNode(JSON.stringify(part["maxDmg"]).replace(/,/g, ', '))
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
                    }
                    var next = array[i+1]
                    if (damage[next]) {
                      doubleBreak();
                    }
                  }
                  this.partNumberArray.map(partDamageMap)
                }
                if (damage["staticCoolDownByLvl"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var execU = document.createElement('u');
                  execU.innerText = 'Execute Damage Ratio';
                  abilityDiv.appendChild(execU);
                  var execText = document.createTextNode(': ' + damage["executeDmgRatio"]);
                  abilityDiv.appendChild(execText);
                }
                if (damage["critDmg"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                if (damage["attackSpeedPerBonusAttackSpeed"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var asU = document.createElement('u');
                  asU.innerText = 'Wolf Bonus Attack Speed per Kindred Bonus Attack Speed';
                  abilityDiv.appendChild(asU);
                  var asRatio = document.createTextNode(': ' + damage["attackSpeedPerBonusAttackSpeed"]);
                  abilityDiv.appendChild(asRatio);
                }
                if (damage["dmgRatioByRRank"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var dmgU = document.createElement('u');
                  dmgU.innerText = '4th Shot Damage Ratio';
                  abilityDiv.appendChild(dmgU);
                  var shotText = document.createTextNode(': ' + damage["4thShotDmgRatio"] 
                  + ' (' + damage["4thShotDmgRatioWithIE"] + ' with Infinity Edge)');
                  abilityDiv.appendChild(shotText);
                }

                if (damage["multiHitDmgRatio"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var multiHitText = document.createTextNode('Additional hits deal ' + damage["multiHitDmgRatio"]
                  + ' damage ratio.');
                  abilityDiv.appendChild(multiHitText);
                }

                if (damage["minMinDmg"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var minDmgU = document.createElement('u');
                  minDmgU.innerText = 'Minimum Damage';
                  abilityDiv.appendChild(minDmgU);
                  var minDmgText = document.createTextNode(': ' + JSON.stringify(damage["minMinDmg"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(minDmgText);
                }

                if (damage["minCritADRatio"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                      var dmgTypeText = document.createTextNode(dmgType + " Damage - ");
                      if (part["postMitigation"] === 'magic') {
                        dmgTypeText.nodeValue = dmgType + ' Damage (part 1 damage, post-mitigation) - ';
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
                      var minU = document.createTextNode('Min - ');
                      abilityDiv.appendChild(minU)
                      if (part["minDmg"]) {
                        var minDmgText = document.createTextNode(JSON.stringify(part["minDmg"]).replace(/,/g, ', '))
                        abilityDiv.appendChild(minDmgText)
                      }
                      if (part["minAPRatio"]) {
                        var minAPRatioValue = JSON.stringify(part["minAPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                        var minAPRatioText = document.createTextNode(" (+" + minAPRatioValue + " AP Ratio)")
                        abilityDiv.appendChild(minAPRatioText)
                      }
                      if (part["minADRatio"]) {
                        var minADRatioValue = JSON.stringify(part["minADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                        var minADRatioText = document.createTextNode(" (+" + minADRatioValue + " AD Ratio)")
                        abilityDiv.appendChild(minADRatioText)
                      }
                      if (part["minBonusADRatio"]) {
                        var minBonusADRatioValue = JSON.stringify(part["minBonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                        var minBonusADRatioText = document.createTextNode(" (+" + minBonusADRatioValue + " Bonus AD Ratio)")
                        abilityDiv.appendChild(minBonusADRatioText)
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
                        var byLvlText = document.createTextNode('(' + part["minEnemyMissingHPRatioByLvl"][0] + " to " 
                        + part["minEnemyMissingHPRatioByLvl"][17] + " Enemy Missing HP Ratio, based on lvl. ");
                        var currentlyU = document.createElement('u');
                        currentlyU.innerText = "Currently";
                        var byLvlText2 = document.createTextNode(': ' + part["minEnemyMissingHPRatioByLvl"][champLevel] + ')')
                        abilityDiv.appendChild(byLvlText);
                        abilityDiv.appendChild(currentlyU);
                        abilityDiv.appendChild(byLvlText2)
                      }
                      var br = document.createElement("br");
                      abilityDiv.appendChild(br);
                      var maxU = document.createTextNode('Max - ');
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                    + statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))
                  };
                  if (passivePath["bonusAttackDamage"]["bonusADRatio"]) {
                    bonusADCount += passivePath["bonusAttackDamage"]["bonusADRatio"] * (itemStats.ad 
                     + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))
                  };
                  if (passivePath["bonusAttackDamage"]["critChanceRatio"]) {
                    bonusADCount += passivePath["bonusAttackDamage"]["critChanceRatio"] * 
                      (itemStats.critChance + selectedStats.critChance);
                  };
                  if (passivePath["bonusAttackDamage"]["bonusAttackSpeedRatio"]) {
                    bonusADCount += passivePath["bonusAttackDamage"]["bonusAttackSpeedRatio"] * (itemStats.as 
                      + statsPath["attackSpeedPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))
                  };
                  if (passivePath["bonusAttackDamage"]["ADPerBonusHPRatio"]) {
                    bonusADCount += passivePath["bonusAttackDamage"]["ADPerBonusHPRatio"] * (itemStats.hp 
                      + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))
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
                }
                if (passivePath["bonusAPPerBonusHP"]) {
                  var apU = document.createElement('u');
                  apU.innerText = 'Bonus Ability Power'
                  abilityDiv.appendChild(apU);
                  var apText = document.createTextNode(': ' + passivePath["bonusAPPerBonusHP"] 
                  + ' per Bonus Health');
                  abilityDiv.appendChild(apText);
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var totalU = document.createElement('u');
                  totalU.innerText = 'Total'
                  abilityDiv.appendChild(totalU)
                  var text = document.createTextNode(': ' + Math.round(passivePath["bonusAPPerBonusHP"] * (itemStats.hp 
                    + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))));
                  abilityDiv.appendChild(text);
                };
                if (passivePath["bonusHPPerAP"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                };
                if (passivePath["bonusAPPerStack"]) {
                  var apU = document.createElement('u');
                  apU.innerText = 'Bonus Ability Power'
                  abilityDiv.appendChild(apU);
                  var apText = document.createTextNode(': ' + passivePath["bonusAPPerStack"] 
                  + ' per Stack');
                  abilityDiv.appendChild(apText);
                };
                if (passivePath["bonusCritChancePerFuryByLvl"]) {
                  critU = document.createElement('u');
                  critU.innerText = 'Bonus Crit Chance';
                  abilityDiv.appendChild(critU);
                  var critText = document.createTextNode(' - [' + passivePath["bonusCritChancePerFuryByLvl"][0] 
                  + "% to " + passivePath["bonusCritChancePerFuryByLvl"][17] + "% per Fury, based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var critText2 = document.createTextNode(': ' + passivePath["bonusCritChancePerFuryByLvl"][champLevel] + '%] ')
                  abilityDiv.appendChild(critText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(critText2)
                }
                if (passivePath["critChancePer20Stacks"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  critU = document.createElement('u');
                  critU.innerText = 'Bonus Crit Chance Ratio';
                  abilityDiv.appendChild(critU);
                  var critText = document.createTextNode(': ' + passivePath["critChancePer20Stacks"] 
                  + ' per 20 Stacks');
                  abilityDiv.appendChild(critText);
                }
                if (passivePath["lifestealPerOverCrit"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  critU = document.createElement('u');
                  critU.innerText = 'Life Steal per Overcrit';
                  abilityDiv.appendChild(critU);
                  var critText = document.createTextNode(': ' + passivePath["lifestealPerOverCrit"]);
                  abilityDiv.appendChild(critText);
                }
                if (passivePath["itemCritChanceMultiplier"]) {
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var text = document.createTextNode('Current Bonus Armor: ' + Math.round(passivePath["bonusResistRatio"] 
                  * (itemStats.arm + statsPath["armorPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))) + 
                  ', Current Bonus Magic Resist: ' + Math.round(passivePath["bonusResistRatio"] 
                  * (itemStats.mr + statsPath["magicResistPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))));
                  abilityDiv.appendChild(text);
                }
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var text = document.createTextNode('Current Min - Armor: ' + Math.round(passivePath["minResistRatio"] 
                  * (itemStats.arm + statsPath["baseArmor"] + statsPath["armorPerLevel"] * champLevel 
                  * (0.7025 + 0.0175 * champLevel))) + ', Magic Resist: ' + Math.round(passivePath["minResistRatio"] 
                  * (itemStats.mr + statsPath["baseMagicResist"] + statsPath["magicResistPerLevel"] * 
                  champLevel * (0.7025 + 0.0175 * champLevel))));
                  abilityDiv.appendChild(text);
                  var br2 = document.createElement('br');
                  abilityDiv.appendChild(br2);
                  var text2 = document.createTextNode('Current Max - Armor: ' + Math.round(passivePath["maxResistRatio"] 
                  * (itemStats.arm + statsPath["baseArmor"] + statsPath["armorPerLevel"] * champLevel 
                  * (0.7025 + 0.0175 * champLevel))) + ', Magic Resist: ' + Math.round(passivePath["maxResistRatio"] 
                  * (itemStats.mr + statsPath["baseMagicResist"] + statsPath["magicResistPerLevel"] * 
                  champLevel * (0.7025 + 0.0175 * champLevel))));
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
                    * (itemStats.arm + statsPath["baseArmor"] + statsPath["armorPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))))
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
                  var lsByLvlText = document.createTextNode(' - [' + passivePath["lifeStealByLvl"][0] 
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
                  var spellVampText = document.createTextNode(' - (' + JSON.stringify(passivePath["spellVamp"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(spellVampText)
                };
                if (passivePath["omniVamp"]) {
                  var omniVampU = document.createElement('u');
                  omniVampU.innerText = 'Omni Vamp Ratio'
                  abilityDiv.appendChild(omniVampU)
                  var omniVampText = document.createTextNode(' - (' + JSON.stringify(passivePath["omniVamp"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(omniVampText)
                };
                if (passivePath["armorPen"]) {
                  var armorPenU = document.createElement('u');
                  armorPenU.innerText = 'Armor Pen Ratio'
                  abilityDiv.appendChild(armorPenU)
                  var armorPenText = document.createTextNode(' - (' + JSON.stringify(passivePath["armorPen"]).replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(armorPenText)
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var text = document.createTextNode('Current Value: ' + Math.round(passivePath["maxHPRegen"] * 
                  (itemStats.hp + statsPath["baseHP"] + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)))
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var text = document.createTextNode('Current HP per 5: Min - ' + Math.round(passivePath["minMaxHPRegen"] * 
                  (itemStats.hp + statsPath["baseHP"] + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)))
                  + ', Max - ' + Math.round(passivePath["maxMaxHPRegen"] * (itemStats.hp + statsPath["baseHP"] +
                   statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))));
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var currentU = document.createElement('u');
                  currentU.innerText = 'Current Value';
                  abilityDiv.appendChild(currentU);
                  var text = document.createTextNode(': ' + Math.round(healPath["maxHPRatioByUltRank"][this.state[`RRank${side}`]] 
                  * (itemStats.hp + statsPath["baseHP"] + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))));
                  abilityDiv.appendChild(text);
                }
                if (healPath["increasePer1%HPLostLast4Sec"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                var shieldPath = champLeftFile[ability]["shield"]
                var shieldBold = document.createElement('b');
                if (shieldPath["type"] !== 'all') {
                  shieldBold.innerText = shieldPath["type"] + ' Shield: '
                } else {
                  shieldBold.innerText = ' Shield: '
                }
                abilityDiv.appendChild(shieldBold)
                if (shieldPath["shield"]) {
                  var shieldArray = JSON.stringify(shieldPath["shield"]).replace(/,/g, ', ')
                  var shieldArrayText = document.createTextNode(shieldArray)
                  abilityDiv.appendChild(shieldArrayText)
                }
                if (shieldPath["shieldByLvl"]) {
                  var shieldByLvlText = document.createTextNode('[' + shieldPath["shieldByLvl"][0] + " to " + shieldPath["shieldByLvl"][17]
                  + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var shieldByLvlText2 = document.createTextNode(': ' + shieldPath["shieldByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(shieldByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(shieldByLvlText2)
                };
                if (shieldPath["shieldPerStack"]) {
                  var stackText = document.createTextNode(" (+" + shieldPath["shieldPerStack"] + " per Stack)")
                  abilityDiv.appendChild(stackText)
                }
                if (shieldPath["dmgTakenRatio"]) {
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Damage Taken Ratio';
                  abilityDiv.appendChild(dmgRatioU);
                  var dmgRatioText = document.createTextNode(' - ' + JSON.stringify(shieldPath["dmgTakenRatio"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(dmgRatioText);
                }
                if (shieldPath["APRatio"]) {
                  var APRatioText = document.createTextNode(" (+" + shieldPath["APRatio"] + " AP Ratio)")
                  abilityDiv.appendChild(APRatioText)
                };
                if (shieldPath["ADRatio"]) {
                  var ADRatioValue = JSON.stringify(shieldPath["ADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var ADRatioText = document.createTextNode(" (+" + ADRatioValue + " AD Ratio)")
                  abilityDiv.appendChild(ADRatioText)
                };
                if (shieldPath["bonusADRatio"]) {
                  var bonusADRatioValue = JSON.stringify(shieldPath["bonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var bonusADRatioText = document.createTextNode(" (+" + bonusADRatioValue + " Bonus AD Ratio)")
                  abilityDiv.appendChild(bonusADRatioText)
                };
                if (shieldPath["bonusHPRatio"]) {
                  var bonusHPRatioValue = JSON.stringify(shieldPath["bonusHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var bonusHPRatioText = document.createTextNode(" (+" + bonusHPRatioValue + " Bonus HP Ratio)")
                  abilityDiv.appendChild(bonusHPRatioText)
                };
                if (shieldPath["maxHPRatio"]) {
                  var maxHPRatioValue = JSON.stringify(shieldPath["maxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var maxHPRatioText = document.createTextNode(" (+" + maxHPRatioValue + " Max HP Ratio)")
                  abilityDiv.appendChild(maxHPRatioText)
                };
                if (shieldPath["maxHPRatioByLvl"]) {
                  var shieldByLvlText = document.createTextNode('[' + shieldPath["maxHPRatioByLvl"][0] 
                  + " to " + shieldPath["maxHPRatioByLvl"][17] + " Max HP Ratio, based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var shieldByLvlText2 = document.createTextNode(': ' + shieldPath["maxHPRatioByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(shieldByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(shieldByLvlText2)
                }
                if (shieldPath["maxHPRatioPerStack"]) {
                  var maxHPRatioValue = JSON.stringify(shieldPath["maxHPRatioPerStack"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var maxHPRatioText = document.createTextNode(" (+" + maxHPRatioValue + " Max HP Ratio per stack)")
                  abilityDiv.appendChild(maxHPRatioText)
                };
                if (shieldPath["maxManaRatio"]) {
                  var maxManaRatioValue = JSON.stringify(shieldPath["maxManaRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var maxManaRatioText = document.createTextNode(" (+" + maxManaRatioValue + " Max Mana Ratio)")
                  abilityDiv.appendChild(maxManaRatioText)
                };
                if (shieldPath["maxMaxHPRatio"]) {
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max'
                  abilityDiv.appendChild(maxU);
                  var maxText = document.createTextNode(' - (' + shieldPath["maxMaxHPRatio"] + ' Max HP Ratio)');
                  abilityDiv.appendChild(maxText);
                }
                if (shieldPath["system"] === "minMax" ) {
                  var minU = document.createElement('u');
                  minU.innerText = 'Min'
                  abilityDiv.appendChild(minU)
                  var dash = document.createTextNode(' - ');
                  abilityDiv.appendChild(dash);
                  if (shieldPath["minShield"]) {
                    var minShieldArray = JSON.stringify(shieldPath["minShield"]).replace(/,/g, ', ')
                    var minShieldText = document.createTextNode(minShieldArray)
                    abilityDiv.appendChild(minShieldText)
                  }
                  if (shieldPath["minShieldByLvl"]) {
                    var shieldByLvlText = document.createTextNode(' [' + shieldPath["minShieldByLvl"][0] 
                    + " to " + shieldPath["minShieldByLvl"][17] + ", based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var shieldByLvlText2 = document.createTextNode(': ' + shieldPath["minShieldByLvl"][champLevel] + '] ')
                    abilityDiv.appendChild(shieldByLvlText);
                    abilityDiv.appendChild(currentlyU);
                    abilityDiv.appendChild(shieldByLvlText2)
                  }
                  if (shieldPath["minAPRatio"]) {
                    var minAPRatioValue = JSON.stringify(shieldPath["minAPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minAPRatioText = document.createTextNode(" (+" + minAPRatioValue + " AP Ratio)")
                    abilityDiv.appendChild(minAPRatioText)
                  }
                  if (shieldPath["minADRatio"]) {
                    var minADRatioValue = JSON.stringify(shieldPath["minADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minADRatioText = document.createTextNode(" (+" + minADRatioValue + " AD Ratio)")
                    abilityDiv.appendChild(minADRatioText)
                  }
                  if (shieldPath["minBonusADRatio"]) {
                    var minBonusADRatioValue = JSON.stringify(shieldPath["minBonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
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
                  
                  if (shieldPath["maxShield"]) {
                    var maxShieldArray = JSON.stringify(shieldPath["maxShield"]).replace(/,/g, ', ')
                    var maxShieldText = document.createTextNode(maxShieldArray)
                    abilityDiv.appendChild(maxShieldText)
                  }
                  if (shieldPath["maxShieldByLvl"]) {
                    var shieldByLvlText = document.createTextNode(' [' + shieldPath["maxShieldByLvl"][0] 
                    + " to " + shieldPath["maxShieldByLvl"][17] + ", based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var shieldByLvlText2 = document.createTextNode(': ' + shieldPath["maxShieldByLvl"][champLevel] + '] ')
                    abilityDiv.appendChild(shieldByLvlText);
                    abilityDiv.appendChild(currentlyU);
                    abilityDiv.appendChild(shieldByLvlText2)
                  }
                  if (shieldPath["maxAPRatio"]) {
                    var maxAPRatioValue = JSON.stringify(shieldPath["maxAPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxAPRatioText = document.createTextNode(" (+" + maxAPRatioValue + " AP Ratio)")
                    abilityDiv.appendChild(maxAPRatioText)
                  }
                  if (shieldPath["maxADRatio"]) {
                    var maxADRatioValue = JSON.stringify(shieldPath["maxADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxADRatioText = document.createTextNode(" (+" + maxADRatioValue + " AD Ratio)")
                    abilityDiv.appendChild(maxADRatioText)
                  }
                  if (shieldPath["maxBonusADRatio"]) {
                    var maxBonusADRatioValue = JSON.stringify(shieldPath["maxBonusADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxBonusADRatioText = document.createTextNode(" (+" + maxBonusADRatioValue + " Bonus AD Ratio)")
                    abilityDiv.appendChild(maxBonusADRatioText)
                  }
                }
                if (shieldPath["type"] !== 'Spell' && shieldPath["duration"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (shieldPath["duration"]) {
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration'
                  abilityDiv.appendChild(durationU)
                  var durationText = document.createTextNode(': ' + shieldPath["duration"])
                  abilityDiv.appendChild(durationText)
                }
                if (shieldPath["combatCoolDown"]) {
                  var br4 = document.createElement('br');
                  abilityDiv.appendChild(br4);
                  var combatU = document.createElement('u')
                  combatU.innerText = 'Combat Cooldown';
                  abilityDiv.appendChild(combatU)
                  var combatCD = document.createTextNode(': ' + shieldPath["combatCoolDown"])
                  abilityDiv.appendChild(combatCD)
                }
                if (shieldPath["combatCoolDownByLvl"]) {
                  var br4 = document.createElement('br');
                  abilityDiv.appendChild(br4);
                  var combatU = document.createElement('u')
                  combatU.innerText = 'Combat Cooldown';
                  abilityDiv.appendChild(combatU)
                  var combatCDByLvlText = document.createTextNode(': [' + shieldPath["combatCoolDownByLvl"][0] + " to " + shieldPath["combatCoolDownByLvl"][17]
                  + "], based on lvl. ");
                  var combatCDByLvlText2 = document.createTextNode('Currently: ' + shieldPath["combatCoolDownByLvl"][champLevel])
                  abilityDiv.appendChild(combatCDByLvlText);
                  abilityDiv.appendChild(combatCDByLvlText2)
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["revive"]) {
                var revivePath = champLeftFile[ability]["revive"]
                var reviveBold = document.createElement('b');
                reviveBold.innerText = 'Revive: '
                abilityDiv.appendChild(reviveBold);
                if (revivePath["reviveTransform"]) {
                  var transformU = document.createElement('u')
                  transformU.innerText = 'Transform Stats'
                  abilityDiv.appendChild(transformU);
                  var HPRatioText = document.createTextNode(': HP Ratio: ' + revivePath["reviveTransform"]["HPRatio"] 
                  + ', Value: ' + Math.round(revivePath["reviveTransform"]["HPRatio"] 
                  * (itemStats.hp + statsPath["baseHP"] + statsPath["hpPerLevel"] * champLevel * 
                  (0.7025 + 0.0175 * champLevel))))
                  abilityDiv.appendChild(HPRatioText)
                  if (revivePath["reviveTransform"]["bonusArmorByLvl"]) {
                    var br = document.createElement("br");
                    abilityDiv.appendChild(br);
                    var bonusArmorByLvlText = document.createTextNode('Bonus Armor: ' + revivePath["reviveTransform"]["bonusArmorByLvl"][0] 
                    + " to " + revivePath["reviveTransform"]["bonusArmorByLvl"][17] + ", based on lvl. ")
                    var currentlyText = document.createTextNode('Currently: ' + revivePath["reviveTransform"]["bonusArmorByLvl"][champLevel])
                    abilityDiv.appendChild(bonusArmorByLvlText);
                    abilityDiv.appendChild(currentlyText);
                  };
                  if (revivePath["reviveTransform"]["bonusMagicResistByLvl"]) {
                    var br = document.createElement("br");
                    abilityDiv.appendChild(br);
                    var bonusText = document.createTextNode('Bonus Magic Resist: ' + revivePath["reviveTransform"]
                    ["bonusMagicResistByLvl"][0] + " to " + revivePath["reviveTransform"]["bonusMagicResistByLvl"][17] + ", based on lvl. ")
                    var text = document.createTextNode('Currently: ' + revivePath["reviveTransform"]["bonusMagicResistByLvl"][champLevel])
                    abilityDiv.appendChild(bonusText);
                    abilityDiv.appendChild(text);
                  }
                  if (revivePath["reviveTransform"]["armorRatio"]) {
                    var br = document.createElement("br");
                    abilityDiv.appendChild(br);
                    var text = document.createTextNode('Armor Ratio: ' + revivePath["reviveTransform"]["armorRatio"]
                    + ', Value: ' + Math.round(revivePath["reviveTransform"]["armorRatio"] 
                    * (itemStats.arm + statsPath["baseArmor"] + statsPath["armorPerLevel"] * champLevel * 
                    (0.7025 + 0.0175 * champLevel))) );
                    abilityDiv.appendChild(text);
                  };
                  if (revivePath["reviveTransform"]["magicResistRatio"]) {
                    var br = document.createElement("br");
                    abilityDiv.appendChild(br);
                    var text = document.createTextNode('Magic Resist Ratio: ' + revivePath["reviveTransform"]["magicResistRatio"]
                    + ', Value: ' + Math.round(revivePath["reviveTransform"]["magicResistRatio"] 
                    * (itemStats.mr + statsPath["baseMagicResist"] + statsPath["magicResistPerLevel"] * champLevel * 
                    (0.7025 + 0.0175 * champLevel))) )
                    abilityDiv.appendChild(text)
                  };
                  if (revivePath["reviveTransform"]["aoeResist"]) {
                    var br = document.createElement("br");
                    abilityDiv.appendChild(br);
                    var aoeResistText = document.createTextNode('AOE Resist Ratio: ' + revivePath["reviveTransform"]["aoeResist"])
                    abilityDiv.appendChild(aoeResistText)
                  }
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u')
                  durationU.innerText = "Duration"
                  abilityDiv.appendChild(durationU)
                  if (revivePath["reviveTransform"]["duration"]) {
                    var durationText = document.createTextNode(': ' + revivePath["reviveTransform"]["duration"])
                    abilityDiv.appendChild(durationText);
                  }
                  if (revivePath["reviveTransform"]["durationByLvl"]) {
                    var durationByLvlText = document.createTextNode(': [' + revivePath["reviveTransform"]["durationByLvl"][0] 
                    + " to " + revivePath["reviveTransform"]["durationByLvl"][17] + "], based on lvl. ")
                    var currentlyText = document.createTextNode('Currently: ' + revivePath["reviveTransform"]["durationByLvl"][champLevel])
                    abilityDiv.appendChild(durationByLvlText);
                    abilityDiv.appendChild(currentlyText);
                  }
                }
                if (revivePath["health"]) {
                  var healthU = document.createElement('u');
                  healthU.innerText = 'Health Restored';
                  abilityDiv.appendChild(healthU)
                  var healthText = document.createTextNode(' - ' + JSON.stringify(revivePath["health"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(healthText);
                }
                if (revivePath["healthPerAP"]) {
                  var healthPerAPText = document.createTextNode(' (+' + revivePath["healthPerAP"] + ' per AP)')
                  abilityDiv.appendChild(healthPerAPText);
                }
                if (revivePath["minHPRestoreRatio"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var healthU = document.createElement('u');
                  healthU.innerText = 'Health Restored';
                  abilityDiv.appendChild(healthU)
                  var text = document.createTextNode(': Min - (' + revivePath["minHPRestoreRatio"] + ' Max Health Ratio, Value: ' 
                  + Math.round(revivePath["minHPRestoreRatio"] * (itemStats.hp + statsPath["baseHP"] + statsPath["hpPerLevel"] 
                  * champLevel * (0.7025 + 0.0175 * champLevel))) + '), Max - (' + revivePath["maxHPRestoreRatio"] 
                  + ' Max Health Ratio, Value: ' + Math.round(revivePath["maxHPRestoreRatio"] * (itemStats.hp +
                   statsPath["baseHP"] + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))) + ')');
                  abilityDiv.appendChild(text);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["damageRedux"]) {
                var reduxPath = champLeftFile[ability]["damageRedux"]
                var reducedDmgBold = document.createElement('b');
                if (reduxPath["type"] !== 'all') {
                  reducedDmgBold.innerText = 'Reduced ' + reduxPath["type"] + ' Damage Taken: '
                } else {
                  reducedDmgBold.innerText = 'Reduced Damage Taken: '
                }
                abilityDiv.appendChild(reducedDmgBold)
                if (reduxPath["reduxRatio"]) {
                  var reduxRatioText = document.createTextNode('Reduced by ratio of ' + JSON.stringify(reduxPath["reduxRatio"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(reduxRatioText)
                }
                if (reduxPath["dmg"]) {
                  var reducedDmgText = document.createTextNode('Reduced by ' + JSON.stringify(reduxPath["dmg"]).replace(/,/g, ', ')
                  );
                  abilityDiv.appendChild(reducedDmgText)
                }
                if (reduxPath["APRatio"]) {
                  var APRatioText = document.createTextNode(' (+' + reduxPath["APRatio"] + ' AP Ratio)')
                  abilityDiv.appendChild(APRatioText)
                }
                if (reduxPath["bonusArmorRatio"]) {
                  var bonusArmorRatioText = document.createTextNode(' (+' + reduxPath["bonusArmorRatio"] + ' Bonus Armor Ratio)')
                  abilityDiv.appendChild(bonusArmorRatioText)
                }
                if (reduxPath["bonusMagicResistRatio"]) {
                  var bonusMagicResistRatioText = document.createTextNode(' (+' + reduxPath["bonusMagicResistRatio"] + ' Bonus Magic Resist Ratio)')
                  abilityDiv.appendChild(bonusMagicResistRatioText)
                }
                if (reduxPath['maxReduxRatio']) {
                  var maxReduxText = document.createTextNode(', up to a maximum reduction ratio of ' + reduxPath["maxReduxRatio"]);
                  abilityDiv.appendChild(maxReduxText);
                }
                if (reduxPath["reduxRatioPer100AP"]) {
                  var reduxRatioText = document.createTextNode(' (+' + reduxPath["reduxRatioPer100AP"] + ' per 100 Ability Power)');
                  abilityDiv.appendChild(reduxRatioText);
                }
                if (reduxPath["aoeDmgReduxRatio"]) {
                  var reduxRatioText = document.createTextNode('AOE Damage reduced by ratio of ' + JSON.stringify(reduxPath["aoeDmgReduxRatio"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(reduxRatioText)
                };
                if (reduxPath["autoBlock"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var blockText = document.createTextNode('Blocks auto attacks.');
                  abilityDiv.appendChild(blockText);
                }
                if (reduxPath["duration"] || reduxPath["minDuration"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration'
                  abilityDiv.appendChild(durationU);
                }
                if (reduxPath["duration"]) {
                  var durationText = document.createTextNode(': ' + JSON.stringify(reduxPath["duration"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(durationText)
                };
                if (reduxPath["minDuration"]) {
                  var durationText = document.createTextNode(': Min - ' + reduxPath["minDuration"] + ', Max - '
                  + reduxPath["maxDuration"]);
                  abilityDiv.appendChild(durationText);
                }
                if (reduxPath["calculateFrom"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var mitigationText = document.createTextNode('Applies ' + reduxPath["calculateFrom"] + '.')
                  abilityDiv.appendChild(mitigationText)
                }
                doubleBreak();
              };

              if (champLeftFile[ability]["magicDamageRedux"]) {
                var reduxPath = champLeftFile[ability]["magicDamageRedux"]
                var reducedDmgBold = document.createElement('b');
                reducedDmgBold.innerText = 'Reduced Magic Damage Taken: '
                abilityDiv.appendChild(reducedDmgBold)
                if (reduxPath["reduxRatio"]) {
                  var reduxRatioText = document.createTextNode('Reduced by ratio of ' + JSON.stringify(reduxPath["reduxRatio"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(reduxRatioText)
                }
                if (reduxPath["reduxRatioPer100AP"]) {
                  var ratioText = document.createTextNode(' (+' + reduxPath["reduxRatioPer100AP"] + ' per 100 Ability Power)')
                  abilityDiv.appendChild(ratioText)
                }
                if (reduxPath["reduxRatioPer100BonusMR"]) {
                  var ratioText = document.createTextNode(' (+' + reduxPath["reduxRatioPer100BonusMR"] + ' per 100 Bonus Magic Resist)')
                  abilityDiv.appendChild(ratioText)
                }
                if (reduxPath["duration"]) {
                  var durationText = document.createTextNode(' for ' + reduxPath["duration"] + ' seconds.')
                  abilityDiv.appendChild(durationText)
                }
                var br = document.createElement("br");
                abilityDiv.appendChild(br);
              }

              if (champLeftFile[ability]["physDamageRedux"]) {
                var reduxPath = champLeftFile[ability]["physDamageRedux"]
                var reducedDmgBold = document.createElement('b');
                reducedDmgBold.innerText = 'Reduced Physical Damage Taken: '
                abilityDiv.appendChild(reducedDmgBold)
                if (reduxPath["reduxRatio"]) {
                  var reduxRatioText = document.createTextNode('Reduced by ratio of ' + JSON.stringify(reduxPath["reduxRatio"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(reduxRatioText)
                }
                if (reduxPath["reduxRatioPer100AP"]) {
                  var ratioText = document.createTextNode(' (+' + reduxPath["reduxRatioPer100AP"] + ' per 100 Ability Power)')
                  abilityDiv.appendChild(ratioText)
                }
                if (reduxPath["reduxRatioPer100BonusMR"]) {
                  var ratioText = document.createTextNode(' (+' + reduxPath["reduxRatioPer100BonusMR"] + ' per 100 Bonus Magic Resist)')
                  abilityDiv.appendChild(ratioText)
                }
                if (reduxPath["duration"]) {
                  var durationText = document.createTextNode(' for ' + reduxPath["duration"] + ' seconds.')
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
                var reduxPath = champLeftFile[ability]["ADRedux"]
                var reduxBold = document.createElement('b');
                reduxBold.innerText = 'Attack Damage Reduction: ';
                abilityDiv.appendChild(reduxBold);
                if (reduxPath["redux"]) {
                  var reduxText = document.createTextNode(JSON.stringify(reduxPath["redux"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(reduxText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["resistRedux"]) {
                var reduxPath = champLeftFile[ability]["resistRedux"]
                if (reduxPath["type"] === 'both') {
                  var reduxBold = document.createElement('b');
                  reduxBold.innerText = 'Armor and Magic Resist Reduction: ';
                  abilityDiv.appendChild(reduxBold);
                };
                if (reduxPath["type"] === 'magicResist') {
                  var reduxBold = document.createElement('b');
                  reduxBold.innerText = 'Magic Resist Reduction: ';
                  abilityDiv.appendChild(reduxBold);
                };
                if (reduxPath["type"] === 'armor') {
                  var reduxBold = document.createElement('b');
                  reduxBold.innerText = 'Armor Reduction: ';
                  abilityDiv.appendChild(reduxBold);
                };
                if (reduxPath["resist"]) {
                  var resistText = document.createTextNode(JSON.stringify(reduxPath["resist"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(resistText);
                }
                if (reduxPath["reduxRatio"]) {
                  var ratioU = document.createElement('u');
                  ratioU.innerText = 'Ratio';
                  abilityDiv.appendChild(ratioU);
                  var reduxRatioText = document.createTextNode(' - ' + JSON.stringify(reduxPath["reduxRatio"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(reduxRatioText);
                }
                if (reduxPath["system"] === 'minMax') {
                  var minU = document.createElement('u')
                  minU.innerText = 'Min'
                  abilityDiv.appendChild(minU);
                  if (reduxPath["minResistRedux"]) {
                    var minReduxText = document.createTextNode(' - ' + JSON.stringify(reduxPath["minResistRedux"]).replace(/,/g, ', '))
                    abilityDiv.appendChild(minReduxText)
                  };
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var maxU = document.createElement('u')
                  maxU.innerText = 'Max'
                  abilityDiv.appendChild(maxU);
                  if (reduxPath["maxResistRedux"]) {
                    var maxReduxText = document.createTextNode(' - ' + JSON.stringify(reduxPath["maxResistRedux"]).replace(/,/g, ', '))
                    abilityDiv.appendChild(maxReduxText)
                  };
                }
                if (reduxPath["duration"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration'
                  abilityDiv.appendChild(durationU);
                  var durationText = document.createTextNode(' - ' + JSON.stringify(reduxPath["duration"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(durationText);
                };
                if (reduxPath["maxDuration"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Max Duration'
                  abilityDiv.appendChild(durationU);
                  var durationText = document.createTextNode(' - ' + JSON.stringify(reduxPath["maxDuration"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(durationText);
                };
                doubleBreak();
              }

              if (champLeftFile[ability]["bonusStats"]) {
                var bonusStatsPath = champLeftFile[ability]["bonusStats"]
                var bonusStatsBold = document.createElement('b');
                bonusStatsBold.innerText = 'Bonus Stats: ';
                abilityDiv.appendChild(bonusStatsBold);
                if (bonusStatsPath["attackDamageByLvl"]) {
                  var ADByLvlU = document.createElement('u');
                  ADByLvlU.innerText = 'Attack Damage';
                  abilityDiv.appendChild(ADByLvlU);
                  var ADByLvlText = document.createTextNode(' - [' + bonusStatsPath["attackDamageByLvl"][0] + " to " + 
                  bonusStatsPath["attackDamageByLvl"][17] + "], based on lvl. Currently: " + bonusStatsPath["attackDamageByLvl"][champLevel]);
                  abilityDiv.appendChild(ADByLvlText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (bonusStatsPath["attackSpeed"]) {
                  var asRatioU = document.createElement('u');
                  asRatioU.innerText = 'Attack Speed Ratio';
                  abilityDiv.appendChild(asRatioU);
                  var asRatioText = document.createTextNode(' - (' + JSON.stringify(bonusStatsPath["attackSpeed"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(asRatioText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (bonusStatsPath["ADRatio"]) {
                  var bonusADRatioU = document.createElement('u');
                  bonusADRatioU.innerText = 'Attack Damage Ratio';
                  abilityDiv.appendChild(bonusADRatioU);
                  var bonusADRatioText = document.createTextNode(' - (' + JSON.stringify(bonusStatsPath["ADRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(bonusADRatioText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (bonusStatsPath["lifeSteal"]) {
                  var lsRatioU = document.createElement('u');
                  lsRatioU.innerText = 'Life Steal Ratio';
                  abilityDiv.appendChild(lsRatioU);
                  var lsRatioText = document.createTextNode(' - (' + JSON.stringify(bonusStatsPath["lifeSteal"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(lsRatioText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (bonusStatsPath["healingRatio"]) {
                  var healingRatioU = document.createElement('u');
                  healingRatioU.innerText = 'Increased Healing Ratio';
                  abilityDiv.appendChild(healingRatioU);
                  var healingRatioText = document.createTextNode(' - (' + JSON.stringify(bonusStatsPath["healingRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(healingRatioText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (bonusStatsPath["healingPerMissingHPRatio"]) {
                  var healingRatioU = document.createElement('u');
                  healingRatioU.innerText = 'Increased Healing';
                  abilityDiv.appendChild(healingRatioU);
                  var healingRatioText = document.createTextNode(': (' + bonusStatsPath["healingPerMissingHPRatio"]
                  + ' per Missing HP Ratio)')
                  abilityDiv.appendChild(healingRatioText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (bonusStatsPath["resist"]) {
                  var resU = document.createElement('u');
                  resU.innerText = 'Armor and Magic Resist';
                  abilityDiv.appendChild(resU);
                  var resText = document.createTextNode(': ' + JSON.stringify(bonusStatsPath["resist"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(resText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (bonusStatsPath["abilityPower"]) {
                  var apU = document.createElement('u');
                  apU.innerText = 'Ability Power';
                  abilityDiv.appendChild(apU);
                  var apText = document.createTextNode(': ' + JSON.stringify(bonusStatsPath["abilityPower"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(apText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (bonusStatsPath["healthRegen"]) {
                  var hpU = document.createElement('u');
                  hpU.innerText = 'Health Regen';
                  abilityDiv.appendChild(hpU);
                  var hpText = document.createTextNode(': ' + JSON.stringify(bonusStatsPath["healthRegen"]).replace(/,/g, ', ')
                  + ' per second');
                  abilityDiv.appendChild(hpText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (bonusStatsPath["duration"]) {
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration';
                  abilityDiv.appendChild(durationU);
                  var durationText = document.createTextNode(' - ' + JSON.stringify(bonusStatsPath["duration"]).replace(/,/g, ', ').replace(/^\[|]$/g, ''))
                  abilityDiv.appendChild(durationText);
                  if (bonusStatsPath["durationExtend"]) {
                    var durationExtendText = document.createTextNode(', extends by ' + bonusStatsPath["durationExtend"] + ' seconds.')
                    abilityDiv.appendChild(durationExtendText);
                  }
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                var br2 = document.createElement("br");
                abilityDiv.appendChild(br2);
              }

              if (champLeftFile[ability]["bonusHealth"]) {
                var bonusHealthPath = champLeftFile[ability]["bonusHealth"]
                var healthBold = document.createElement('b');
                healthBold.innerText = 'Bonus Health: '
                abilityDiv.appendChild(healthBold);
                if (bonusHealthPath["health"]) {
                  var healthText = document.createTextNode(JSON.stringify(bonusHealthPath["health"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(healthText);
                };
                if (bonusHealthPath["healthPerStack"]) {
                  var healthText = document.createTextNode(JSON.stringify(bonusHealthPath["healthPerStack"])
                  .replace(/,/g, ', ') + ' per Stack')
                  abilityDiv.appendChild(healthText);
                  doubleBreak();
                };
                if (bonusHealthPath["APRatio"]) {
                  var APText = document.createTextNode(' (+' + JSON.stringify(bonusHealthPath["APRatio"])
                  .replace(/,/g, ', ') + ' AP Ratio)');
                  abilityDiv.appendChild(APText);
                }
                if (bonusHealthPath["duration"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration';
                  abilityDiv.appendChild(durationU);
                  var durationText = document.createTextNode(' - ' + JSON.stringify(bonusHealthPath["duration"]).replace(/,/g, ', ').replace(/^\[|]$/g, ''))
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
                var regenPath = champLeftFile[ability]["healthRegen"]
                var br = document.createElement('br');
                abilityDiv.appendChild(br);
                var regenB = document.createElement('b');
                regenB.innerText = 'Health Regen: ';
                abilityDiv.appendChild(regenB);
                if (regenPath["dmgTakenRatio"]) {
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Damage Taken Ratio';
                  abilityDiv.appendChild(dmgRatioU);
                  var dmgRatioText = document.createTextNode(' - ' + JSON.stringify(regenPath["dmgTakenRatio"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(dmgRatioText);
                }
                if (regenPath["dmgTakenRatioByLvl"]) {
                  var regenByLvlText = document.createTextNode('[' + regenPath["dmgTakenRatioByLvl"][0] 
                  + " to " + regenPath["dmgTakenRatioByLvl"][17] + " Damage Taken Ratio, based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var regenByLvlText2 = document.createTextNode(': ' + regenPath["dmgTakenRatioByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(regenByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(regenByLvlText2)
                }
                if (regenPath["greyHealthRatioByLvl"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Grey Health Ratio';
                  abilityDiv.appendChild(dmgRatioU);
                  var regenByLvlText = document.createTextNode(' - [' + regenPath["greyHealthRatioByLvl"][0] 
                  + " to " + regenPath["greyHealthRatioByLvl"][17] + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var regenByLvlText2 = document.createTextNode(': ' + regenPath["greyHealthRatioByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(regenByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(regenByLvlText2)
                }
                if (regenPath["maxHPRatio"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max';
                  abilityDiv.appendChild(maxU);
                  var ratioText = document.createTextNode(' - ' + regenPath["maxHPRatio"] + ' Max HP Ratio');
                  abilityDiv.appendChild(ratioText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["bonusAttackDamage"]) {
                var bonusADPath = champLeftFile[ability]["bonusAttackDamage"]
                var bonusADBold = document.createElement('b');
                bonusADBold.innerText = 'Bonus Attack Damage: '
                abilityDiv.appendChild(bonusADBold);
                if (bonusADPath['attackDamage']) {
                  var adText = document.createTextNode(JSON.stringify(bonusADPath['attackDamage']).replace(/,/g, ', '));
                  abilityDiv.appendChild(adText);
                }
                if (bonusADPath["ADRatio"]) {
                  var ratioText = document.createTextNode(' (+' + bonusADPath["ADRatio"] + ' AD Ratio)');
                  abilityDiv.appendChild(ratioText);
                }
                if (bonusADPath["attackDamagePerAPRatio"]) {
                  var adPerAPText = document.createTextNode(' (+' + bonusADPath["attackDamagePerAPRatio"] + ' per Abiliy Power)');
                  abilityDiv.appendChild(adPerAPText);
                }
                if (bonusADPath['minAttackDamage']) {
                  var minU = document.createElement('u');
                  minU.innerText = 'Min'
                  abilityDiv.appendChild(minU)
                  var minADText = document.createTextNode(' - ' + JSON.stringify(bonusADPath['minAttackDamage']).replace(/,/g, ', '))
                  abilityDiv.appendChild(minADText);
                };
                if (bonusADPath['maxAttackDamage']) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max'
                  abilityDiv.appendChild(maxU)
                  var maxADText = document.createTextNode(' - ' + JSON.stringify(bonusADPath['maxAttackDamage']).replace(/,/g, ', '))
                  abilityDiv.appendChild(maxADText);
                };
                if (bonusADPath["duration"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var durU = document.createElement('u');
                  durU.innerText = 'Duration'
                  abilityDiv.appendChild(durU)
                  var durText = document.createTextNode(': ' + bonusADPath['duration'])
                  abilityDiv.appendChild(durText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["bonusHPRegen"]) {
                var regenPath = champLeftFile[ability]["bonusHPRegen"];
                var regenBold = document.createElement('b');
                regenBold.innerText = 'Bonus Health Regen: ';
                abilityDiv.appendChild(regenBold);
                if (regenPath["HPRegenPerSecondByLvl"]) {
                  var regenByLvlText = document.createTextNode(' - [' + regenPath["HPRegenPerSecondByLvl"][0] + " to " + 
                  regenPath["HPRegenPerSecondByLvl"][17] + "] per second, based on lvl. Currently: " + regenPath["HPRegenPerSecondByLvl"][champLevel]);
                  abilityDiv.appendChild(regenByLvlText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["bonusAdaptiveForce"]) {
                var forcePath = champLeftFile[ability]["bonusAdaptiveForce"]
                var forceB = document.createElement('b');
                forceB.innerText = 'Self Bonus Adaptive Force: ';
                abilityDiv.appendChild(forceB);
                if (forcePath["adaptiveForce"]) {
                  var forceText = document.createTextNode(JSON.stringify(forcePath["adaptiveForce"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(forceText);
                }
                if (forcePath["allyBonusADRatio"]) {
                  var forceText = document.createTextNode(' (+' + JSON.stringify(forcePath["allyBonusADRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Ally Bonus AD Ratio');
                  abilityDiv.appendChild(forceText);
                }
                if (forcePath["allyAPRatio"]) {
                  var forceText = document.createTextNode(' OR +' + JSON.stringify(forcePath["allyAPRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Ally AP Ratio)');
                  abilityDiv.appendChild(forceText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["allyBonusAdaptiveForce"]) {
                var forcePath = champLeftFile[ability]["allyBonusAdaptiveForce"]
                var forceB = document.createElement('b');
                forceB.innerText = 'Ally Bonus Adaptive Force: ';
                abilityDiv.appendChild(forceB);
                if (forcePath["adaptiveAD"]) {
                  var forceText = document.createTextNode('[' + JSON.stringify(forcePath["adaptiveAD"]).replace(/,/g, ', ')
                  .replace(/^\[|]$/g, '') + ' Attack Damage]');
                  abilityDiv.appendChild(forceText);
                }
                if (forcePath["allyAdaptiveBonusADRatio"]) {
                  var forceText = document.createTextNode(' (+' + JSON.stringify(forcePath["allyAdaptiveBonusADRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Ally Bonus AD Ratio)');
                  abilityDiv.appendChild(forceText);
                }
                if (forcePath["adaptiveAP"]) {
                  var forceText = document.createTextNode(' OR [' + JSON.stringify(forcePath["adaptiveAP"]).replace(/,/g, ', ')
                  .replace(/^\[|]$/g, '') + ' Ability Power]');
                  abilityDiv.appendChild(forceText);
                }
                if (forcePath["allyAdaptiveAPRatio"]) {
                  var forceText = document.createTextNode(' (+' + JSON.stringify(forcePath["allyAdaptiveAPRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Ally AP Ratio)');
                  abilityDiv.appendChild(forceText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["bonusResist"]) {
                var resistPath = champLeftFile[ability]["bonusResist"]
                var bonusResistB = document.createElement('b');
                bonusResistB.innerText = 'Bonus Armor & Magic Resist: ';
                abilityDiv.appendChild(bonusResistB);
                if (resistPath["resist"]) {
                  var resistText = document.createTextNode(JSON.stringify(resistPath["resist"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(resistText);
                }
                if (resistPath["bonusResistByLvl"]) {
                  var resistByLvlText = document.createTextNode(' - [' + resistPath["bonusResistByLvl"][0] + " to " + 
                  resistPath["bonusResistByLvl"][17] + "], based on lvl. Currently: " + resistPath["bonusResistByLvl"][champLevel]);
                  abilityDiv.appendChild(resistByLvlText);
                };
                if (resistPath["minResistByLvl"]) {
                  var minU = document.createElement('u');
                  minU.innerText = 'Min';
                  abilityDiv.appendChild(minU);
                  var minText = document.createTextNode(' - [' + resistPath["minResistByLvl"][0] + " to " + 
                  resistPath["minResistByLvl"][17] + ", based on lvl. Currently: " + resistPath["minResistByLvl"][champLevel] + ']');
                  abilityDiv.appendChild(minText);
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max';
                  abilityDiv.appendChild(maxU);
                  var maxText = document.createTextNode(' - [' + resistPath["maxResistByLvl"][0] + " to " + 
                  resistPath["maxResistByLvl"][17] + ", based on lvl. Currently: " + resistPath["maxResistByLvl"][champLevel] + ']');
                  abilityDiv.appendChild(maxText);
                }
                if (resistPath["bonusResistRatio"]) {
                  var ratioText = document.createTextNode(' (+' + resistPath["bonusResistRatio"] + ' Bonus Resist Ratio)');
                  abilityDiv.appendChild(ratioText);
                }
                if (resistPath["minResist"]) {
                  var minU = document.createElement('u');
                  minU.innerText = 'Min';
                  abilityDiv.appendChild(minU);
                  var minText = document.createTextNode(' - ' + JSON.stringify(resistPath["minResist"])
                  .replace(/,/g, ', '));
                  abilityDiv.appendChild(minText);
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max';
                  abilityDiv.appendChild(maxU);
                  var maxText = document.createTextNode(' - ' + JSON.stringify(resistPath["maxResist"])
                  .replace(/,/g, ', '));
                  abilityDiv.appendChild(maxText);
                }
                if (resistPath["duration"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration'
                  abilityDiv.appendChild(durationU)
                  var durationText = document.createTextNode(': ' + resistPath["duration"])
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                var bonusMagicResistPath = champLeftFile[ability]["bonusMagicResist"]
                var magicResistBold = document.createElement('b');
                magicResistBold.innerText = 'Bonus Magic Resist: '
                abilityDiv.appendChild(magicResistBold);
                if (bonusMagicResistPath["magicResist"]) {
                  var magicResistText = document.createTextNode(JSON.stringify(bonusMagicResistPath["magicResist"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(magicResistText);
                };
                if (bonusMagicResistPath["magicResistRatio"]) {
                  var magicResistRatioText = document.createTextNode(' (+' + JSON.stringify(bonusMagicResistPath["magicResistRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Magic Resist Ratio)');
                  abilityDiv.appendChild(magicResistRatioText);
                };
                if (bonusMagicResistPath["bonusMagicResistRatio"]) {
                  var magicResistRatioText = document.createTextNode(' (+' + JSON.stringify(bonusMagicResistPath["bonusMagicResistRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Magic Resist Ratio)');
                  abilityDiv.appendChild(magicResistRatioText);
                };
                if (bonusMagicResistPath["APRatio"]) {
                  var APRatioText = document.createTextNode(' (+' + JSON.stringify(bonusMagicResistPath["APRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AP Ratio)');
                  abilityDiv.appendChild(APRatioText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["allyBonusMagicResist"]) {
                var bonusMagicResistPath = champLeftFile[ability]["allyBonusMagicResist"]
                var magicResistBold = document.createElement('b');
                magicResistBold.innerText = 'Ally Bonus Magic Resist: '
                abilityDiv.appendChild(magicResistBold);
                if (bonusMagicResistPath["magicResist"]) {
                  var magicResistText = document.createTextNode(JSON.stringify(bonusMagicResistPath["magicResist"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(magicResistText);
                };
                if (bonusMagicResistPath["magicResistRatio"]) {
                  var magicResistRatioText = document.createTextNode(' (+' + JSON.stringify(bonusMagicResistPath["magicResistRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Magic Resist Ratio)');
                  abilityDiv.appendChild(magicResistRatioText);
                };
                if (bonusMagicResistPath["bonusMagicResistRatio"]) {
                  var magicResistRatioText = document.createTextNode(' (+' + JSON.stringify(bonusMagicResistPath["bonusMagicResistRatio"])
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max Ratio';
                  abilityDiv.appendChild(maxU);
                  var msRatioText = document.createTextNode(' - ' + msPath["maxBonusMSRatio"]);
                  abilityDiv.appendChild(msRatioText);
                };
                if (msPath["duration"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u');
                  durationU.innerText = "Duration"
                  abilityDiv.appendChild(durationU)
                  var durationText = document.createTextNode(': ' + msPath["duration"])
                  abilityDiv.appendChild(durationText)
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["cripple"]) {
                var cripplePath = champLeftFile[ability]["cripple"];
                var crippleB = document.createElement('b');
                crippleB.innerText = 'Attack Speed Cripple: ';
                abilityDiv.appendChild(crippleB);
                if (cripplePath["attackSpeed"]) {
                  var crippleText = document.createTextNode(JSON.stringify(cripplePath["attackSpeed"])
                  .replace(/,/g, ', '));
                  abilityDiv.appendChild(crippleText);
                }
                if (cripplePath["minAttackSpeed"]) {
                  var minU = document.createElement('u');
                  minU.innerText = 'Min';
                  abilityDiv.appendChild(minU);
                  var minText = document.createTextNode(' - ' + cripplePath["minAttackSpeed"]);
                  abilityDiv.appendChild(minText);
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max';
                  abilityDiv.appendChild(maxU);
                  var maxText = document.createTextNode(' - ' + JSON.stringify(cripplePath["maxAttackSpeed"])
                  .replace(/,/g, ', '));
                  abilityDiv.appendChild(maxText);
                }
                if (cripplePath["duration"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration';
                  abilityDiv.appendChild(durationU);
                  var durationText = document.createTextNode(': ' + cripplePath["duration"]);
                  abilityDiv.appendChild(durationText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["petStats"]) {
                var petPath = champLeftFile[ability]["petStats"];
                var petB = document.createElement('b');
                petB.innerText = 'Pet Stats: ';
                abilityDiv.appendChild(petB);
                if (petPath["auto"]) {
                  var autoU = document.createElement('u');
                  autoU.innerText = 'Auto Attack';
                  abilityDiv.appendChild(autoU);
                  var typeText = document.createTextNode(': ' + petPath["auto"]["type"] + ' Damage: ');
                  abilityDiv.appendChild(typeText);
                  if (petPath["auto"]["dmg"]) {
                    var autoDmgText = document.createTextNode(JSON.stringify(petPath["auto"]["dmg"]).replace(/,/g, ', '));
                    abilityDiv.appendChild(autoDmgText);
                  }
                  if (petPath['auto']['dmgByLvl']) {
                    var dmgByLvlText = document.createTextNode(' [' + petPath["auto"]["dmgByLvl"][0] + " to " 
                    + petPath["auto"]["dmgByLvl"][17] + ", based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var dmgBylvlText2 = document.createTextNode(': ' + petPath["auto"]["dmgByLvl"][champLevel] + ']')
                    abilityDiv.appendChild(dmgByLvlText);
                    abilityDiv.appendChild(currentlyU)
                    abilityDiv.appendChild(dmgBylvlText2)
                  }
                  if (petPath["auto"]["APRatio"]) {
                    var APRatioText = document.createTextNode(' (+' + JSON.stringify(petPath["auto"]["APRatio"])
                    .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AP Ratio)');
                    abilityDiv.appendChild(APRatioText);
                  }
                  if (petPath["auto"]["ADRatio"]) {
                    var ADRatioText = document.createTextNode(' (' + JSON.stringify(petPath["auto"]["ADRatio"])
                    .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AD Ratio)');
                    abilityDiv.appendChild(ADRatioText);
                  }
                  if (petPath["auto"]["bonusADRatio"]) {
                    var ADRatioText = document.createTextNode(' (+' + JSON.stringify(petPath["auto"]["bonusADRatio"])
                    .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Bonus AD Ratio)');
                    abilityDiv.appendChild(ADRatioText);
                  }
                  if (petPath["auto"]["enemyMaxHPRatio"]) {
                    var ratioText = document.createTextNode(' (+' + petPath["auto"]["enemyMaxHPRatio"]
                    + ' Enemy Max HP Ratio)');
                    abilityDiv.appendChild(ratioText);
                  }
                  if (petPath["auto"]["system"] === 'minMax') {
                    var minText = document.createTextNode('Min - ');
                    abilityDiv.appendChild(minText);
                    if (petPath["auto"]["minDmgByLvl"]) {
                      var dmgByLvlText = document.createTextNode(' [' + petPath["auto"]["minDmgByLvl"][0] + " to " 
                      + petPath["auto"]["minDmgByLvl"][17] + ", based on lvl. ");
                      var currentlyU = document.createElement('u');
                      currentlyU.innerText = "Currently";
                      var dmgBylvlText2 = document.createTextNode(': ' + petPath["auto"]["minDmgByLvl"][champLevel] + ']')
                      abilityDiv.appendChild(dmgByLvlText);
                      abilityDiv.appendChild(currentlyU)
                      abilityDiv.appendChild(dmgBylvlText2)
                    }
                    if (petPath["auto"]["minAPRatio"]) {
                      var ratioText = document.createTextNode(' (+' + petPath["auto"]["minAPRatio"] + ' AP Ratio)');
                      abilityDiv.appendChild(ratioText);
                    }
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var maxText = document.createTextNode('Max - ');
                    abilityDiv.appendChild(maxText);
                    if (petPath["auto"]["maxDmgByLvl"]) {
                      var dmgByLvlText = document.createTextNode(' [' + petPath["auto"]["maxDmgByLvl"][0] + " to " 
                      + petPath["auto"]["maxDmgByLvl"][17] + ", based on lvl. ");
                      var currentlyU = document.createElement('u');
                      currentlyU.innerText = "Currently";
                      var dmgBylvlText2 = document.createTextNode(': ' + petPath["auto"]["maxDmgByLvl"][champLevel] + ']')
                      abilityDiv.appendChild(dmgByLvlText);
                      abilityDiv.appendChild(currentlyU)
                      abilityDiv.appendChild(dmgBylvlText2)
                    }
                    if (petPath["auto"]["maxAPRatio"]) {
                      var ratioText = document.createTextNode(' (+' + petPath["auto"]["maxAPRatio"] + ' AP Ratio)');
                      abilityDiv.appendChild(ratioText);
                    }
                  }
                  if (petPath["auto"]["multiHitDmgRatio"]) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var multiU = document.createElement('u');
                    multiU.innerText = 'Multi-Hit Damage Ratio';
                    abilityDiv.appendChild(multiU);
                    var multiText = document.createTextNode(': ' + petPath["auto"]["multiHitDmgRatio"]);
                    abilityDiv.appendChild(multiText);
                  }
                };
                if (petPath["attackSpeed"] || petPath["attackSpeedByLvl"] || petPath["minAttackSpeed"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var asU = document.createElement('u');
                  asU.innerText = 'Attack Speed';
                  abilityDiv.appendChild(asU);
                }
                if (petPath["attackSpeed"]) {
                  var asText = document.createTextNode(': ' + JSON.stringify(petPath["attackSpeed"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(asText);
                };
                if (petPath["attackSpeedByLvl"]) {
                  var asByLvlText = document.createTextNode(': [' + petPath["attackSpeedByLvl"][0] + " to " 
                  + petPath["attackSpeedByLvl"][17] + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var asBylvlText2 = document.createTextNode(': ' + petPath["attackSpeedByLvl"][champLevel] + ']')
                  abilityDiv.appendChild(asByLvlText);
                  abilityDiv.appendChild(currentlyU)
                  abilityDiv.appendChild(asBylvlText2)
                }
                if (petPath["minAttackSpeed"]) {
                  var asText = document.createTextNode(': Min - ' + petPath["minAttackSpeed"] + ', Max - ' 
                    + petPath["maxAttackSpeed"]);
                  abilityDiv.appendChild(asText);
                };
                if (petPath["attackSpeedRatio"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var asU = document.createElement('u');
                  asU.innerText = 'Attack Speed Ratio';
                  abilityDiv.appendChild(asU);
                  var asText = document.createTextNode(': ' + petPath["attackSpeedRatio"]);
                  abilityDiv.appendChild(asText);
                };
                if (petPath["healthRatio"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var asU = document.createElement('u');
                  asU.innerText = 'Health Ratio';
                  abilityDiv.appendChild(asU);
                  var asText = document.createTextNode(': ' + petPath["healthRatio"]);
                  abilityDiv.appendChild(asText);
                };
                if (petPath["armorRatio"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var asU = document.createElement('u');
                  asU.innerText = 'Armor Ratio';
                  abilityDiv.appendChild(asU);
                  var asText = document.createTextNode(': ' + petPath["armorRatio"]);
                  abilityDiv.appendChild(asText);
                };
                if (petPath["magicResistRatio"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var asU = document.createElement('u');
                  asU.innerText = 'Magic Resist Ratio';
                  abilityDiv.appendChild(asU);
                  var asText = document.createTextNode(': ' + petPath["magicResistRatio"]);
                  abilityDiv.appendChild(asText);
                };
                if (petPath["health"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var healthU = document.createElement('u');
                  healthU.innerText = 'Health';
                  abilityDiv.appendChild(healthU);
                  var healthText = document.createTextNode(': ' + JSON.stringify(petPath["health"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(healthText);
                };
                if (petPath["healthByLvl"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var healthU = document.createElement('u');
                  healthU.innerText = 'Health';
                  abilityDiv.appendChild(healthU);
                  var healthByLvlText = document.createTextNode(': [' + petPath["healthByLvl"][0] + " to " + petPath["healthByLvl"][17]
                  + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var healthBylvlText2 = document.createTextNode(': ' + petPath["healthByLvl"][champLevel] + ']')
                  abilityDiv.appendChild(healthByLvlText);
                  abilityDiv.appendChild(currentlyU)
                  abilityDiv.appendChild(healthBylvlText2)
                  if (petPath["healthPerAPRatioByLvl"]) {
                    var healthByLvlText = document.createTextNode(' (+' + petPath["healthPerAPRatioByLvl"][0] + " to " 
                    + petPath["healthPerAPRatioByLvl"][17] + " per Ability Power, based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var healthBylvlText2 = document.createTextNode(': ' + petPath["healthPerAPRatioByLvl"][champLevel] + ')')
                    abilityDiv.appendChild(healthByLvlText);
                    abilityDiv.appendChild(currentlyU)
                    abilityDiv.appendChild(healthBylvlText2)
                  }
                };
                if (petPath["maxHPRatio"]) {
                  var hpText = document.createTextNode(' (+' + petPath["maxHPRatio"] + ' Max HP Ratio)');
                  abilityDiv.appendChild(hpText);
                }
                if (petPath["healthPerAPRatio"]) {
                  var healthPerAPText = document.createTextNode(' (+' + petPath["healthPerAPRatio"] + ' per AP)');
                  abilityDiv.appendChild(healthPerAPText);
                }
                if (petPath["armor"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var armorU = document.createElement('u');
                  armorU.innerText = 'Armor';
                  abilityDiv.appendChild(armorU);
                  var armorText = document.createTextNode(': ' + JSON.stringify(petPath["armor"]).replace(/,/g, ', ').replace(/"/g,""));
                  abilityDiv.appendChild(armorText);
                };
                if (petPath["armorByLvl"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var armorU = document.createElement('u');
                  armorU.innerText = 'Armor';
                  abilityDiv.appendChild(armorU);
                  var armorByLvlText = document.createTextNode(': [' + petPath["armorByLvl"][0] + " to " + petPath["armorByLvl"][17]
                  + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var armorBylvlText2 = document.createTextNode(': ' + petPath["armorByLvl"][champLevel] + ']')
                  abilityDiv.appendChild(armorByLvlText);
                  abilityDiv.appendChild(currentlyU)
                  abilityDiv.appendChild(armorBylvlText2)
                };
                if (petPath["armorPerAPRatio"]) {
                  var armorPerAPText = document.createTextNode(' (+' + petPath["armorPerAPRatio"] + ' per AP)');
                  abilityDiv.appendChild(armorPerAPText);
                }
                if (petPath["magicResist"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var magicResistU = document.createElement('u');
                  magicResistU.innerText = 'Magic Resist';
                  abilityDiv.appendChild(magicResistU);
                  var magicResistText = document.createTextNode(': ' + JSON.stringify(petPath["magicResist"]).replace(/,/g, ', ').replace(/"/g,""));
                  abilityDiv.appendChild(magicResistText);
                };
                if (petPath["magicResistByLvl"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var magicResistU = document.createElement('u');
                  magicResistU.innerText = 'Magic Resist';
                  abilityDiv.appendChild(magicResistU);
                  var magicResistByLvlText = document.createTextNode(': [' + petPath["magicResistByLvl"][0] + " to " + petPath["magicResistByLvl"][17]
                  + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var magicResistBylvlText2 = document.createTextNode(': ' + petPath["magicResistByLvl"][champLevel] + ']')
                  abilityDiv.appendChild(magicResistByLvlText);
                  abilityDiv.appendChild(currentlyU)
                  abilityDiv.appendChild(magicResistBylvlText2)
                };
                if (petPath["magicResistPerAPRatio"]) {
                  var magicResistPerAPText = document.createTextNode(' (+' + petPath["magicResistPerAPRatio"] + ' per AP)');
                  abilityDiv.appendChild(magicResistPerAPText);
                }
                if (petPath["interruptCC"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var interruptCCU = document.createElement('u');
                  interruptCCU.innerText = 'Crowd Control Duration';
                  abilityDiv.appendChild(interruptCCU);
                  var ccText = document.createTextNode(': ' + petPath["interruptCC"]);
                  abilityDiv.appendChild(ccText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["empower"]) {
                var empowerPath = champLeftFile[ability]["empower"];
                var empowerB = document.createElement('b');
                var empowerU = document.createElement('u');
                empowerB.appendChild(empowerU);
                empowerU.innerText = 'Empower';
                abilityDiv.appendChild(empowerB);
                doubleBreak();
                if (empowerPath['Q']) {
                  var qB = document.createElement('b');
                  var qU = document.createElement('u');
                  qB.appendChild(qU);
                  qU.innerText = 'Q: ';
                  abilityDiv.appendChild(qB);
                  if (empowerPath['Q']["petStats"]) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var petPath = champLeftFile[ability]["empower"]["Q"]["petStats"];
                    var petB = document.createElement('b');
                    petB.innerText = 'Pet Stats: ';
                    abilityDiv.appendChild(petB);
                    if (petPath["auto"]) {
                      var autoU = document.createElement('u');
                      autoU.innerText = 'Auto Attack';
                      abilityDiv.appendChild(autoU);
                      var typeText = document.createTextNode(': ' + petPath["auto"]["type"] + ' Damage - ');
                      abilityDiv.appendChild(typeText);
                      if (petPath["auto"]["dmg"]) {
                        var autoDmgText = document.createTextNode(JSON.stringify(petPath["auto"]["dmg"]).replace(/,/g, ', '));
                        abilityDiv.appendChild(autoDmgText);
                      }
                      if (petPath["auto"]["APRatio"]) {
                        var APRatioText = document.createTextNode(' (+' + JSON.stringify(petPath["auto"]["APRatio"])
                        .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AP Ratio)');
                        abilityDiv.appendChild(APRatioText);
                      }
                    };
                    if (petPath["attackSpeed"]) {
                      var br = document.createElement('br');
                      abilityDiv.appendChild(br);
                      var asU = document.createElement('u');
                      asU.innerText = 'Attack Speed';
                      abilityDiv.appendChild(asU);
                      var asText = document.createTextNode(': ' + petPath["attackSpeed"]);
                      abilityDiv.appendChild(asText);
                    };
                    if (petPath["healthByLvl"]) {
                      var br = document.createElement('br');
                      abilityDiv.appendChild(br);
                      var healthU = document.createElement('u');
                      healthU.innerText = 'Health';
                      abilityDiv.appendChild(healthU);
                      var healthByLvlText = document.createTextNode(': [' + petPath["healthByLvl"][0] + " to " + petPath["healthByLvl"][17]
                      + ", based on lvl. ");
                      var currentlyU = document.createElement('u');
                      currentlyU.innerText = "Currently";
                      var healthBylvlText2 = document.createTextNode(': ' + petPath["healthByLvl"][champLevel] + ']')
                      abilityDiv.appendChild(healthByLvlText);
                      abilityDiv.appendChild(currentlyU)
                      abilityDiv.appendChild(healthBylvlText2)
                      if (petPath["healthPerAPRatioByLvl"]) {
                        var healthByLvlText = document.createTextNode(' (+' + petPath["healthPerAPRatioByLvl"][0] + " to " 
                        + petPath["healthPerAPRatioByLvl"][17] + " per Ability Power, based on lvl. ");
                        var currentlyU = document.createElement('u');
                        currentlyU.innerText = "Currently";
                        var healthBylvlText2 = document.createTextNode(': ' + petPath["healthPerAPRatioByLvl"][champLevel] + ')')
                        abilityDiv.appendChild(healthByLvlText);
                        abilityDiv.appendChild(currentlyU)
                        abilityDiv.appendChild(healthBylvlText2)
                      }
                    };
                    if (petPath["armorByLvl"]) {
                      var br = document.createElement('br');
                      abilityDiv.appendChild(br);
                      var armorU = document.createElement('u');
                      armorU.innerText = 'Armor';
                      abilityDiv.appendChild(armorU);
                      var armorByLvlText = document.createTextNode(': [' + petPath["armorByLvl"][0] + " to " + petPath["armorByLvl"][17]
                      + ", based on lvl. ");
                      var currentlyU = document.createElement('u');
                      currentlyU.innerText = "Currently";
                      var armorBylvlText2 = document.createTextNode(': ' + petPath["armorByLvl"][champLevel] + ']')
                      abilityDiv.appendChild(armorByLvlText);
                      abilityDiv.appendChild(currentlyU)
                      abilityDiv.appendChild(armorBylvlText2)
                    };
                    if (petPath["magicResistByLvl"]) {
                      var br = document.createElement('br');
                      abilityDiv.appendChild(br);
                      var magicResistU = document.createElement('u');
                      magicResistU.innerText = 'Magic Resist';
                      abilityDiv.appendChild(magicResistU);
                      var magicResistByLvlText = document.createTextNode(': [' + petPath["magicResistByLvl"][0] + " to " + petPath["magicResistByLvl"][17]
                      + ", based on lvl. ");
                      var currentlyU = document.createElement('u');
                      currentlyU.innerText = "Currently";
                      var magicResistBylvlText2 = document.createTextNode(': ' + petPath["magicResistByLvl"][champLevel] + ']')
                      abilityDiv.appendChild(magicResistByLvlText);
                      abilityDiv.appendChild(currentlyU)
                      abilityDiv.appendChild(magicResistBylvlText2)
                    }
                  };
                  if (empowerPath['Q']['damage']) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var damage = empowerPath['Q']["damage"]
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
                  if (empowerPath['Q']['bonusDamage']) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var damage = empowerPath['Q']["bonusDamage"]
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
                if (empowerPath['W']) {
                  var wB = document.createElement('b');
                  var wU = document.createElement('u');
                  wB.appendChild(wU);
                  wU.innerText = 'W: ';
                  abilityDiv.appendChild(wB);
                  if (empowerPath['W']['damage']) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var damage = empowerPath['W']["damage"]
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
                  if (empowerPath['W']['heal']) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var healPath = empowerPath['W']['heal']
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
                if (empowerPath['E']) {
                  var eB = document.createElement('b');
                  var eU = document.createElement('u');
                  eB.appendChild(eU);
                  eU.innerText = 'E: ';
                  abilityDiv.appendChild(eB);
                  if (empowerPath['E']['damage']) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var damage = empowerPath['E']["damage"]
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
                  if (empowerPath['E']['bonusShield']) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var shield = empowerPath['E']["bonusShield"]
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
              }
              if (champLeftFile[ability]["coolDownRefundByLvl"]) {
                var br = document.createElement('br');
                abilityDiv.appendChild(br);
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
                var br = document.createElement('br');
                abilityDiv.appendChild(br);
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
                var refundByLvlText = document.createTextNode(' - [' + champLeftFile[ability]["coolDownRefundRatioByLvl"][0]
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                }
                var rechargeBold = document.createElement('b');
                rechargeBold.innerText = "Recharge: ";
                abilityDiv.appendChild(rechargeBold)
                var rechargeText = document.createTextNode(JSON.stringify(champLeftFile[ability]["recharge"]).replace(/,/g, ', '));
                abilityDiv.appendChild(rechargeText)
              };

              if (champLeftFile[ability]["Rhaast"]) {
                var rhaastPath = champLeftFile[ability]["Rhaast"];
                if (ability !== 'passive') {
                  doubleBreak()
                };
                var rhaastU = document.createElement('u');
                var rhaastB = document.createElement('b');
                rhaastB.appendChild(rhaastU);
                rhaastU.innerText = 'Rhaast'
                abilityDiv.appendChild(rhaastB);
                if (rhaastPath["spellVamp"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var svU = document.createElement('u');
                  svU.innerText = 'Spell Vamp Ratio';
                  abilityDiv.appendChild(svU);
                  if (rhaastPath["spellVamp"]["vampByLvl"]) {
                    var ratioByLvlText = document.createTextNode(': [' + rhaastPath["spellVamp"]["vampByLvl"][0]
                    + " to " + rhaastPath["spellVamp"]["vampByLvl"][17] + ", based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var ratioBylvlText2 = document.createTextNode(': ' + rhaastPath["spellVamp"]["vampByLvl"][champLevel] + ']')
                    abilityDiv.appendChild(ratioByLvlText);
                    abilityDiv.appendChild(currentlyU)
                    abilityDiv.appendChild(ratioBylvlText2)
                  }
                };
                if (rhaastPath["damage"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var typeB = document.createElement('u');
                  typeB.innerText = rhaastPath["damage"]["type"] + ' Damage'
                  abilityDiv.appendChild(typeB);
                  if (rhaastPath["damage"]["enemyMaxHPRatio"]){
                    var ratioText = document.createTextNode(': (' + rhaastPath["damage"]["enemyMaxHPRatio"]
                    + ' Enemy Max HP Ratio)');
                    abilityDiv.appendChild(ratioText);
                  }
                  if (rhaastPath["damage"]["enemyMaxHPRatioPer100BonusAD"]) {
                    var ratioText = document.createTextNode(' (+' + rhaastPath["damage"]["enemyMaxHPRatioPer100BonusAD"]
                    + ' Enemy Max HP Ratio per 100 Bonus AD)');
                    abilityDiv.appendChild(ratioText);
                  }
                  if (rhaastPath["damage"]["system"] === 'minMax') {
                    var minText = document.createTextNode(': Min - ');
                    abilityDiv.appendChild(minText);
                    if (rhaastPath["damage"]["minADRatio"]) {
                      var ratioText = document.createTextNode('(' + rhaastPath["damage"]["minADRatio"]
                      + ' AD Ratio)');
                      abilityDiv.appendChild(ratioText);
                    };
                    if (rhaastPath["damage"]["minEnemyMaxHPRatio"]) {
                      var ratioText = document.createTextNode(' (+' + rhaastPath["damage"]["minEnemyMaxHPRatio"]
                      + ' Enemy Max HP Ratio)');
                      abilityDiv.appendChild(ratioText);
                    };
                    if (rhaastPath["damage"]["minEnemyMaxHPRatioPer100BonusAD"]) {
                      var ratioText = document.createTextNode(' (+' + rhaastPath["damage"]["minEnemyMaxHPRatioPer100BonusAD"]
                      + ' Enemy Max HP Ratio per 100 Bonus AD)');
                      abilityDiv.appendChild(ratioText);
                    };
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var maxText = document.createTextNode('Max - ');
                    abilityDiv.appendChild(maxText);
                    if (rhaastPath["damage"]["maxADRatio"]) {
                      var ratioText = document.createTextNode('(' + rhaastPath["damage"]["maxADRatio"]
                      + ' AD Ratio)');
                      abilityDiv.appendChild(ratioText);
                    };
                    if (rhaastPath["damage"]["maxEnemyMaxHPRatio"]) {
                      var ratioText = document.createTextNode(' (+' + rhaastPath["damage"]["maxEnemyMaxHPRatio"]
                      + ' Enemy Max HP Ratio)');
                      abilityDiv.appendChild(ratioText);
                    };
                    if (rhaastPath["damage"]["maxEnemyMaxHPRatioPer100BonusAD"]) {
                      var ratioText = document.createTextNode(' (+' + rhaastPath["damage"]["maxEnemyMaxHPRatioPer100BonusAD"]
                      + ' Enemy Max HP Ratio per 100 Bonus AD)');
                      abilityDiv.appendChild(ratioText);
                    };
                  } 
                };
                if (rhaastPath["heal"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var healB = document.createElement('u');
                  healB.innerText = 'Heal'
                  abilityDiv.appendChild(healB);
                  if (rhaastPath["heal"]["enemyMaxHPRatio"]){
                    var ratioText = document.createTextNode(': (' + rhaastPath["heal"]["enemyMaxHPRatio"]
                    + ' Enemy Max HP Ratio)');
                    abilityDiv.appendChild(ratioText);
                  }
                  if (rhaastPath["heal"]["enemyMaxHPRatioPer100BonusAD"]){
                    var ratioText = document.createTextNode(' (+' + rhaastPath["heal"]["enemyMaxHPRatioPer100BonusAD"]
                    + ' Enemy Max HP Ratio per 100 Bonus AD)');
                    abilityDiv.appendChild(ratioText);
                  } 
                };
                if (rhaastPath["interruptCC"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var interruptCCU = document.createElement('u');
                  interruptCCU.innerText = 'Crowd Control Duration'
                  abilityDiv.appendChild(interruptCCU)
                  var ccText = document.createTextNode(': ' + rhaastPath["interruptCC"]);
                  abilityDiv.appendChild(ccText);
                }
              }

              if (champLeftFile[ability]["Shadow"]) {
                var shadowPath = champLeftFile[ability]["Shadow"]
                doubleBreak();
                var shadowU = document.createElement('u');
                var shadowB = document.createElement('b');
                shadowB.appendChild(shadowU);
                shadowU.innerText = 'Shadow'
                abilityDiv.appendChild(shadowB);
                if (shadowPath["damage"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var typeB = document.createElement('u');
                  typeB.innerText = shadowPath["damage"]["type"] + ' Damage'
                  abilityDiv.appendChild(typeB);
                  if (shadowPath["damage"]["dmgRatioByLvl"]) {
                    var ratioByLvlText = document.createTextNode(': (' + shadowPath["damage"]["dmgRatioByLvl"][0]
                    + " to " + shadowPath["damage"]["dmgRatioByLvl"][17] + " Ratio of damage dealt over 3 seconds, based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var ratioBylvlText2 = document.createTextNode(': ' + shadowPath["damage"]["dmgRatioByLvl"][champLevel] + ')')
                    abilityDiv.appendChild(ratioByLvlText);
                    abilityDiv.appendChild(currentlyU)
                    abilityDiv.appendChild(ratioBylvlText2)
                  }
                };
                if (shadowPath["coolDown"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var cdU = document.createElement('u');
                  cdU.innerText = 'Cooldown';
                  abilityDiv.appendChild(cdU);
                  var cdText = document.createTextNode(': ' + shadowPath["coolDown"]);
                  abilityDiv.appendChild(cdText);
                }
              }

            } 
            if (this.state[`${ability}RankLeft`] > 0 ) {
              /* COPY PASTE RANK 0 NESTED IFS BUT REPLACE ARRAYS WITH INDIVIDUAL VALUES */
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
                  totalDmgCount += damage["dmgByERank"][this.state["ERankLeft"]]
                }
                if (damage["APRatio"]) {
                  var APRatio = damage["APRatio"]
                  if (typeof APRatio !== 'number') {
                    APRatio = damage["APRatio"][rankIndex]
                  }
                  APRatio *= selectedStats["ap"];
                  totalDmgCount += APRatio;
                };
                if (damage["ADRatio"]) {
                  var ADRatio = damage["ADRatio"]
                  if (typeof ADRatio !== 'number') {
                    ADRatio = damage["ADRatio"][rankIndex]
                  }
                  ADRatio *= ( statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  totalDmgCount += ADRatio;
                };
                if (damage["ADRatioByLvl"]) {
                  totalDmgCount += damage["ADRatioByLvl"][champLevel] * 
                  ( statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))
                };
                if (damage["bonusADRatio"]) {
                  var bonusADRatio = damage["bonusADRatio"]
                  if (typeof bonusADRatio !== 'number') {
                    bonusADRatio = damage["bonusADRatio"][rankIndex]
                  }
                  bonusADRatio *= ( statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  totalDmgCount += bonusADRatio;
                };
                if (damage["enemyMaxHPRatio"] && enemyStats.hp) {
                  var ratio = damage["enemyMaxHPRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyMaxHPRatio"][rankIndex]
                  }
                  totalDmgCount += ratio * enemyStats.hp
                };
                if (damage["enemyMaxHPRatioPer100AD"] && enemyStats.hp) {
                  var ratio = damage["enemyMaxHPRatioPer100AD"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyMaxHPRatioPer100AD"][rankIndex]
                  }
                  totalDmgCount += ratio * enemyStats.hp  
                  * (statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)) / 100
                }
                if (damage["enemyMaxHPRatioPer100BonusAD"] && enemyStats.hp) {
                  var ratio = damage["enemyMaxHPRatioPer100BonusAD"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyMaxHPRatioPer100BonusAD"][rankIndex]
                  }
                  totalDmgCount += ratio * enemyStats.hp  
                  * (statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)) / 100
                }
                if (damage["enemyMaxHPRatioPer100AP"] && enemyStats.hp) {
                  var ratio = damage["enemyMaxHPRatioPer100AP"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyMaxHPRatioPer100AP"][rankIndex]
                  }
                  totalDmgCount += ratio * enemyStats.hp * selectedStats.ap / 100
                }
                if (damage["enemyMaxHPRatioByLvl"] && enemyStats.hp) {
                  totalDmgCount += damage["enemyMaxHPRatioByLvl"][champLevel] * enemyStats.hp
                };
                if (damage["maxHPRatio"]) {
                  var ratio = damage["maxHPRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["maxHPRatio"][rankIndex]
                  }
                  totalDmgCount += ratio * (statsPath["baseHP"] + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))
                };
                if (damage["enemyCurrentHPRatio"] && enemyStats.hp) {
                  var ratio = damage["enemyCurrentHPRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyCurrentHPRatio"][rankIndex]
                  }
                  var text = document.createTextNode(' when enemy is full HP: ');
                  abilityDiv.appendChild(text);
                  totalDmgCount += ratio * enemyStats.hp
                };
                if (damage["enemyCurrentHPRatioByLvl"] && enemyStats.hp) {
                  if (!damage["enemyCurrentHPRatio"]) {
                    var text = document.createTextNode(' when enemy is full HP: ');
                    abilityDiv.appendChild(text);
                  }
                  totalDmgCount += damage["enemyCurrentHPRatioByLvl"][champLevel] * enemyStats.hp
                };
                if (damage["armorRatio"]) {
                  var ratio = damage["armorRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["armorRatio"][rankIndex]
                  }
                  ratio *= ( statsPath["baseArmor"] + statsPath["armorPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  totalDmgCount += ratio;
                };
                if (damage["bonusArmorRatio"]) {
                  var ratio = damage["bonusArmorRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["bonusArmorRatio"][rankIndex]
                  }
                  ratio *= ( statsPath["armorPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  totalDmgCount += ratio;
                }
                if (damage["ADRatioPerCritChance"]) {
                  totalDmgCount += damage["ADRatioPerCritChance"] * selectedStats.critChance 
                  * (statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  if (damage["ADRatioPerCritChanceWithIE"]) {
                    IEDmgCount += damage["ADRatioPerCritChanceWithIE"] * selectedStats.critChance 
                    * (statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  } 
                };
                //begin dmg count for autoempower
                if (totalDmgCount !== 0) {
                  var totalDmgCountText = document.createTextNode(Math.round(totalDmgCount));
                  abilityDiv.appendChild(totalDmgCountText);
                  if (IEDmgCount !== 0) {
                    var dmgText = document.createTextNode(' (' + Math.round(totalDmgCount + IEDmgCount) + 'with IE)');
                    abilityDiv.appendChild(dmgText);
                  }
                }
                var maxHPRatioCounter = 0;
                if (damage["enemyMaxHPRatio"] && !enemyStats.hp) {
                  var ratio = damage["enemyMaxHPRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyMaxHPRatio"][rankIndex]
                  }
                  maxHPRatioCounter += ratio
                };
                if (damage["enemyMaxHPRatioPer100AD"] && !enemyStats.hp) {
                  var ratio = damage["enemyMaxHPRatioPer100AD"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyMaxHPRatioPer100AD"][rankIndex]
                  }
                  maxHPRatioCounter += ratio * enemyStats.hp * (statsPath["baseDamage"] + 
                  statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)) / 100 
                }
                if (damage["enemyMaxHPRatioPer100BonusAD"] && !enemyStats.hp) {
                  var ratio = damage["enemyMaxHPRatioPer100BonusAD"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyMaxHPRatioPer100BonusAD"][rankIndex]
                  }
                  maxHPRatioCounter += ratio * enemyStats.hp  
                  * (statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)) / 100
                }
                if (damage["enemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                  var ratio = damage["enemyMaxHPRatioPer100AP"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyMaxHPRatioPer100AP"][rankIndex]
                  }
                  maxHPRatioCounter += ratio * selectedStats.ap / 100
                }
                if (damage["enemyMaxHPRatioByLvl"] && !enemyStats.hp) {
                  maxHPRatioCounter += damage["enemyMaxHPRatioByLvl"][champLevel]
                }
                if (maxHPRatioCounter !== 0) {
                  var text = document.createTextNode(' (+' + maxHPRatioCounter + ' Enemy Max HP Ratio)');
                  abilityDiv.appendChild(text);
                }
                if (damage["enemyMaxHPRatioPerStack"] && !enemyStats.hp) {
                  var text = document.createTextNode(" (+" + damage["enemyMaxHPRatioPerStack"][rankIndex] 
                  + " Enemy Max HP Ratio per Stack)")
                  abilityDiv.appendChild(text)
                };
                if (damage["enemyMaxHPRatioPerStack"] && enemyStats.hp) {
                  var text = document.createTextNode(" (+" + Math.round(damage["enemyMaxHPRatioPerStack"][rankIndex] 
                  * enemyStats.hp) + " per Stack)")
                  abilityDiv.appendChild(text)
                };
                if (damage["enemyCurrentHPRatio"] && !enemyStats.hp) {
                  var ratio = damage["enemyCurrentHPRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyCurrentHPRatio"][rankIndex]
                  }
                  var text = document.createTextNode(" (+" + ratio + " Enemy Current HP Ratio)")
                  abilityDiv.appendChild(text)
                };
                if (damage["enemyCurrentHPRatioByLvl"] && !enemyStats.hp) {
                  var text = document.createTextNode(" (+" + damage["enemyCurrentHPRatioByLvl"][champLevel] 
                  + " Enemy Current HP Ratio)")
                  abilityDiv.appendChild(text)
                }
                var missHPCounter = 0;
                if (damage["enemyMissingHPRatio"]) {
                  var ratio = damage["enemyMissingHPRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyMissingHPRatio"][rankIndex]
                  }
                  missHPCounter += ratio
                };
                if (damage["enemyMissingHPRatioByLvl"]) {
                  missHPCounter += damage["enemyMissingHPRatioByLvl"][champLevel];
                }
                if (damage["enemyMissingHPRatioPer100AP"]) {
                  var ratio = damage["enemyMissingHPRatioPer100AP"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyMissingHPRatioPer100AP"][rankIndex]
                  }
                  missHPCounter += ratio * (selectedStats.ap + itemStats.ap)/100
                }
                if (missHPCounter !== 0) {
                  var text = document.createTextNode(" (+" + missHPCounter + " Enemy Missing HP Ratio)")
                  abilityDiv.appendChild(text)
                }
                if (damage["dmgPer5Chimes"]) {
                  var dmgPer5ChimesText = document.createTextNode(" (+" + damage["dmgPer5Chimes"] + ' per 5 chimes)')
                  abilityDiv.appendChild(dmgPer5ChimesText)
                }
                if (damage["dmgPerStack"]) {
                  var stackText = document.createTextNode(" (+" + damage["dmgPerStack"] + ' per Stack)')
                  abilityDiv.appendChild(stackText)
                }
                if (damage["armorIgnore"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var ignoreText = document.createTextNode('Ignores ' + damage["armorIgnore"] + ' ratio of enemy armor.');
                  abilityDiv.appendChild(ignoreText);
                };
                if (damage["alwaysCrit"]) {
                  var critText = document.createTextNode('. Always critically strikes.');
                  abilityDiv.appendChild(critText);
                }
                if (damage["attackSpeedPenalty"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                    var minDmgText = document.createTextNode(" - " + damage["minDmg"][rankIndex])
                    abilityDiv.appendChild(minDmgText)
                  }
                }
                //begin minMax section
                if (damage["system"] === "minMax" ) {
                  var minDmgU = document.createElement('u')
                  minDmgU.innerText = 'Min'
                  abilityDiv.appendChild(minDmgU)
                  if (damage["minDmg"]) {
                    minDmgCount += damage["minDmg"][rankIndex]
                  };
                  if (damage["minDmgByLvl"]) {
                    minDmgCount += damage["minDmgByLvl"][champLevel]
                  };
                  if (damage["minADRatio"]) {
                    var ADRatio = damage["minADRatio"]
                    if (typeof ADRatio !== 'number') {
                      ADRatio = damage["minADRatio"][rankIndex]
                    }
                    ADRatio *= ( statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                    minDmgCount += ADRatio;
                  };
                  if (damage["minBonusADRatio"]) {
                    var bonusADRatio = damage["minBonusADRatio"]
                    if (typeof bonusADRatio !== 'number') {
                      bonusADRatio = damage["minBonusADRatio"][rankIndex]
                    }
                    bonusADRatio *= ( statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                    minDmgCount += bonusADRatio;
                  };
                  if (damage["minAPRatio"]) {
                    var APRatio = damage["minAPRatio"]
                    if (typeof APRatio !== 'number') {
                      APRatio = damage["minAPRatio"][rankIndex]
                    }
                    APRatio *= selectedStats["ap"];
                    minDmgCount += APRatio;
                  };
                  if (damage["minArmorRatio"]) {
                    var ratio = damage["minArmorRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minArmorRatio"][rankIndex]
                    }
                    ratio *= ( statsPath["baseArmor"] + statsPath["armorPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                    minDmgCount += ratio;
                  };
                  if (damage["minEnemyMaxHPRatio"] && enemyStats.hp) {
                    var ratio = damage["minEnemyMaxHPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minEnemyMaxHPRatio"][rankIndex]
                    }
                    minDmgCount += ratio * enemyStats.hp
                  };
                  if (damage["minEnemyMaxHPRatioPer100AP"] && enemyStats.hp) {
                    var ratio = damage["minEnemyMaxHPRatioPer100AP"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minEnemyMaxHPRatioPer100AP"][rankIndex]
                    }
                    minDmgCount += ratio * enemyStats.hp * selectedStats.ap / 100
                  };
                  if (minDmgCount !== 0) {
                    var minDmgCountText = document.createTextNode(Math.round(minDmgCount));
                    abilityDiv.appendChild(minDmgCountText);
                  };
                  var minMaxHPRatioCounter = 0;
                  if (damage["minEnemyMaxHPRatio"] && !enemyStats.hp) {
                    var ratio = damage["minEnemyMaxHPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minEnemyMaxHPRatio"][rankIndex]
                    }
                    minMaxHPRatioCounter += ratio
                  };
                  if (damage["minEnemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                    var ratio = damage["minEnemyMaxHPRatioPer100AP"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minEnemyMaxHPRatioPer100AP"][rankIndex]
                    }
                    minMaxHPRatioCounter += ratio * selectedStats.ap / 100
                  }
                  if (minMaxHPRatioCounter !== 0) {
                    var text = document.createTextNode(' (+' + minMaxHPRatioCounter + ' Enemy Max HP Ratio)');
                    abilityDiv.appendChild(text);
                  }
                  if (damage["minDmgPerStack"]) {
                    var stackText = document.createTextNode(' (+' + damage["minDmgPerStack"] + ' per Stack)');
                    abilityDiv.appendChild(stackText);
                  };
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var maxDmgU = document.createElement('u')
                  maxDmgU.innerText = 'Max'
                  abilityDiv.appendChild(maxDmgU)
                  if (damage["maxDmg"]) {
                    maxDmgCount += damage["maxDmg"][rankIndex]
                  };
                  if (damage["maxDmgByLvl"]) {
                    maxDmgCount += damage["maxDmgByLvl"][champLevel]
                  };
                  if (damage["maxADRatio"]) {
                    var ADRatio = damage["maxADRatio"]
                    if (typeof ADRatio !== 'number') {
                      ADRatio = damage["maxADRatio"][rankIndex]
                    }
                    ADRatio *= ( statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                    maxDmgCount += ADRatio;
                  };
                  if (damage["maxBonusADRatio"]) {
                    var bonusADRatio = damage["maxBonusADRatio"]
                    if (typeof bonusADRatio !== 'number') {
                      bonusADRatio = damage["maxBonusADRatio"][rankIndex]
                    }
                    bonusADRatio *= ( statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                    maxDmgCount += bonusADRatio;
                  };
                  if (damage["maxAPRatio"]) {
                    var APRatio = damage["maxAPRatio"]
                    if (typeof APRatio !== 'number') {
                      APRatio = damage["maxAPRatio"][rankIndex]
                    }
                    APRatio *= selectedStats["ap"];
                    maxDmgCount += APRatio;
                  };
                  if (damage["maxArmorRatio"]) {
                    var ratio = damage["maxArmorRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxArmorRatio"][rankIndex]
                    }
                    ratio *= ( statsPath["baseArmor"] + statsPath["armorPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                    maxDmgCount += ratio;
                  };
                  if (damage["maxEnemyMaxHPRatio"] && enemyStats.hp) {
                    var ratio = damage["maxEnemyMaxHPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxEnemyMaxHPRatio"][rankIndex]
                    }
                    maxDmgCount += ratio * enemyStats.hp
                  };
                  if (damage["maxEnemyMaxHPRatioPer100AP"] && enemyStats.hp) {
                    var ratio = damage["maxEnemyMaxHPRatioPer100AP"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxEnemyMaxHPRatioPer100AP"][rankIndex]
                    }
                    maxDmgCount += ratio * enemyStats.hp * selectedStats.ap / 100
                  };
                  if (maxDmgCount !== 0) {
                    var maxDmgCountText = document.createTextNode(Math.round(maxDmgCount));
                    abilityDiv.appendChild(maxDmgCountText);
                  };
                  var maxMaxHPRatioCounter = 0;
                  if (damage["maxEnemyMaxHPRatio"] && !enemyStats.hp) {
                    var ratio = damage["maxEnemyMaxHPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxEnemyMaxHPRatio"][rankIndex]
                    }
                    maxMaxHPRatioCounter += ratio
                  };
                  if (damage["maxEnemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                    var ratio = damage["maxEnemyMaxHPRatioPer100AP"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxEnemyMaxHPRatioPer100AP"][rankIndex]
                    }
                    maxMaxHPRatioCounter += ratio * selectedStats.ap / 100
                  }
                  if (maxMaxHPRatioCounter !== 0) {
                    var text = document.createTextNode(' (+' + maxMaxHPRatioCounter + ' Enemy Max HP Ratio)');
                    abilityDiv.appendChild(text);
                  }
                  if (damage["maxDmgPerStack"]) {
                    var stackText = document.createTextNode(' (+' + damage["maxDmgPerStack"] + ' per Stack)');
                    abilityDiv.appendChild(stackText);
                  };
                };
                if (damage["lvlRequired"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var critU = document.createElement('u');
                  if (totalDmgCount === 0 && minDmgCount === 0 && maxDmgCount === 0) {
                    critU.innerText = 'Crit Damage Ratio';
                  } else {
                    critU.innerText = 'Crit Damage';
                  }
                  abilityDiv.appendChild(critU);
                  if (totalDmgCount === 0 && minDmgCount === 0 && maxDmgCount === 0) {
                    var critText = document.createTextNode(': ' + damage["critDmg"]);
                    abilityDiv.appendChild(critText);
                  }
                  if (totalDmgCount !== 0) {
                    var critText = document.createTextNode(': ' + Math.round(damage["critDmg"] * totalDmgCount));
                    abilityDiv.appendChild(critText);
                  }
                  if (minDmgCount !== 0) {
                    var text = document.createTextNode(': Min - ' + Math.round(damage["critDmg"] * minDmgCount)
                    + ', Max - ' + Math.round(damage["critDmg"] * maxDmgCount));
                    abilityDiv.appendChild(text);
                  }
                  if (damage["critDmgWithIE"]) {
                    if (totalDmgCount === 0 && minDmgCount === 0 && maxDmgCount === 0) {
                      var IEText = document.createTextNode(' (' + damage["critDmgWithIE"] + ' with Infinity Edge)');
                      abilityDiv.appendChild(IEText);
                    };
                    if (totalDmgCount !== 0) {
                      var IEText = document.createTextNode(' (' + Math.round(damage["critDmgWithIE"] * totalDmgCount) 
                      + ' with Infinity Edge)');
                      abilityDiv.appendChild(IEText);
                    }
                    if (minDmgCount !== 0) {
                      var text = document.createTextNode(' (Min - ' + Math.round(damage["critDmgWithIE"] * minDmgCount)
                      + ', Max - ' + Math.round(damage["critDmgWithIE"] * maxDmgCount) + ' with Infinity Edge)');
                      abilityDiv.appendChild(text);
                    }
                  }
                };
                if (damage["critADRatioWithIE"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var critU = document.createElement('u');
                  critU.innerText = 'Crit Bonus Dmg with Infinity Edge';
                  abilityDiv.appendChild(critU);
                  var critText = document.createTextNode(': ' + damage["critADRatioWithIE"]);
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
                      var dmgTypeText = document.createTextNode(dmgType + " Damage - ");
                      abilityDiv.appendChild(dmgTypeText);
                    };
                    if (part["ADRatio"]) {
                      var ADRatio = part["ADRatio"][rankIndex]
                      ADRatio *= ( statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                      partDmgCount += ADRatio;
                    };
                    var dmgCountText = document.createTextNode(Math.round(partDmgCount));
                    abilityDiv.appendChild(dmgCountText);
                    if (part["trueDmgRatioByLvl"]) {
                      var br = document.createElement('br')
                      abilityDiv.appendChild(br);
                      var ratioText = document.createTextNode('Physical - ' + Math.round((1 - part["trueDmgRatioByLvl"][champLevel]) 
                      * partDmgCount) + ', True - ' + Math.round(part["trueDmgRatioByLvl"][champLevel] * partDmgCount));
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var coolDownU = document.createElement('u');
                  coolDownU.innerText = "Static Cooldown";
                  abilityDiv.appendChild(coolDownU)
                  var coolDownByLvlText = document.createTextNode(': ' + damage["staticCoolDownByLvl"][champLevel])
                  abilityDiv.appendChild(coolDownByLvlText);
                }
                doubleBreak();
              }

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
                  totalDmgCount += damage["dmg"][rankIndex];
                };
                if (damage["dmgByLvl"]) {
                  totalDmgCount += damage["dmgByLvl"][champLevel]
                };
                if (damage["totalDmgRatio"]) {
                  var dmgU = document.createElement('u');
                  dmgU.innerText = 'Total Damage Ratio';
                  abilityDiv.appendChild(dmgU);
                  var ratioText = document.createTextNode(' - ' + JSON.stringify(damage["totalDmgRatio"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(ratioText);
                }
                if (damage["dmgByWRank"]) {
                  totalDmgCount += dmgByWRankPath[this.state["WRankLeft"]]
                }
                if (damage["APRatio"]) {
                  var APRatio = damage["APRatio"]
                  if (typeof APRatio !== 'number') {
                    APRatio = damage["APRatio"][rankIndex]
                  }
                  APRatio *= selectedStats["ap"];
                  totalDmgCount += APRatio;
                };
                if (damage["APRatioByLvl"]) {
                  totalDmgCount += damage["APRatioByLvl"][champLevel] * selectedStats["ap"]
                };
                if (damage["ADRatio"]) {
                  var ADRatio = damage["ADRatio"]
                  if (typeof ADRatio !== 'number') {
                    ADRatio = damage["ADRatio"][rankIndex]
                  }
                  ADRatio *= ( statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  totalDmgCount += ADRatio;
                };
                if (damage["bonusADRatio"]) {
                  var bonusADRatio = damage["bonusADRatio"]
                  if (typeof bonusADRatio !== 'number') {
                    bonusADRatio = damage["bonusADRatio"][rankIndex]
                  }
                  bonusADRatio *= ( statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  totalDmgCount += bonusADRatio;
                };
                if (damage["bonusManaRatio"]) {
                  var ratio = damage["bonusManaRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["bonusManaRatio"][rankIndex]
                  }
                  ratio *= ( statsPath["mana"]["manaPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  totalDmgCount += ratio;
                };
                if (damage["enemyMaxHPRatio"] && enemyStats.hp) {
                  var ratio = damage["enemyMaxHPRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyMaxHPRatio"][rankIndex]
                  }
                  totalDmgCount += ratio * enemyStats.hp
                };
                if (damage["enemyMaxHPRatioPer100AD"] && enemyStats.hp) {
                  var ratio = damage["enemyMaxHPRatioPer100AD"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyMaxHPRatioPer100AD"][rankIndex]
                  }
                  totalDmgCount += ratio * enemyStats.hp  
                  * (statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)) / 100
                }
                if (damage["enemyMaxHPRatioPer100BonusAD"] && enemyStats.hp) {
                  var ratio = damage["enemyMaxHPRatioPer100BonusAD"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyMaxHPRatioPer100BonusAD"][rankIndex]
                  }
                  totalDmgCount += ratio * enemyStats.hp  
                  * (statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)) / 100
                }
                if (damage["enemyMaxHPRatioPer100AP"] && enemyStats.hp) {
                  var ratio = damage["enemyMaxHPRatioPer100AP"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyMaxHPRatioPer100AP"][rankIndex]
                  }
                  totalDmgCount += ratio * enemyStats.hp * selectedStats.ap / 100
                }
                if (damage["enemyMaxHPRatioByLvl"] && enemyStats.hp) {
                  totalDmgCount += damage["enemyMaxHPRatioByLvl"][champLevel] * enemyStats.hp
                };
                if (damage["maxHPRatio"]) {
                  var ratio = damage["maxHPRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["maxHPRatio"][rankIndex]
                  }
                  totalDmgCount += ratio * (statsPath["baseHP"] + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))
                };
                if (damage["bonusHPRatio"]) {
                  var ratio = damage["bonusHPRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["bonusHPRatio"][rankIndex]
                  }
                  totalDmgCount += ratio * (statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))
                };
                if (damage["enemyCurrentHPRatio"] && enemyStats.hp) {
                  var ratio = damage["enemyCurrentHPRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyCurrentHPRatio"][rankIndex]
                  }
                  var text = document.createTextNode(' when enemy is full HP: ');
                  abilityDiv.appendChild(text);
                  totalDmgCount += ratio * enemyStats.hp
                };
                if (damage["enemyCurrentHPRatioPer100AD"] && enemyStats.hp) {
                  if (!damage["enemyCurrentHPRatio"]) {
                    var text = document.createTextNode(' when enemy is full HP: ');
                    abilityDiv.appendChild(text);
                  }
                  var ratio = damage["enemyCurrentHPRatioPer100AD"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyCurrentHPRatioPer100AD"][rankIndex]
                  }
                  totalDmgCount += ratio * enemyStats.hp  
                  * (statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)) / 100
                };
                if (damage["enemyCurrentHPRatioPer100AP"] && enemyStats.hp) {
                  if (!damage["enemyCurrentHPRatio"] && !damage["enemyCurrentHPRatioPer100AD"]) {
                    var text = document.createTextNode(' when enemy is full HP: ');
                    abilityDiv.appendChild(text);
                  }
                  var ratio = damage["enemyCurrentHPRatioPer100AP"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyCurrentHPRatioPer100AP"][rankIndex]
                  }
                  totalDmgCount += ratio * enemyStats.hp * selectedStats.ap / 100
                }; 
                if (damage["armorRatio"]) {
                  var ratio = damage["armorRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["armorRatio"][rankIndex]
                  }
                  ratio *= ( statsPath["baseArmor"] + statsPath["armorPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  totalDmgCount += ratio;
                };
                if (damage["bonusArmorRatio"]) {
                  var ratio = damage["bonusArmorRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["bonusArmorRatio"][rankIndex]
                  }
                  ratio *= ( statsPath["armorPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  totalDmgCount += ratio;
                }
                if (damage["bonusMRRatio"]) {
                  var ratio = damage["bonusMRRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["bonusMRRatio"][rankIndex]
                  }
                  ratio *= ( statsPath["magicResistPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  totalDmgCount += ratio;
                }
                if (damage["dmgPerLethality"]) {
                  var ratio = damage["dmgPerLethality"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["dmgPerLethality"][rankIndex]
                  }
                  ratio *= itemStats["lethality"];
                  totalDmgCount += ratio;
                };
                //begin dmg count and trailing ratios for damage section
                if (totalDmgCount !== 0) {
                  if (damage["bonusDmgRatioPerCritChance"]) {
                    totalDmgCount *= (1 + damage["bonusDmgRatioPerCritChance"] * selectedStats.critChance)
                  }
                  if (damage["dmgRatioByRRank"]) {
                     totalDmgCount *= damage["dmgRatioByRRank"][this.state[`RRank${side}`]]
                  }
                  var totalDmgCountText = document.createTextNode(Math.round(totalDmgCount));
                  abilityDiv.appendChild(totalDmgCountText);
                  if (IEDmgCount !== 0) {
                    var dmgText = document.createTextNode(' (' + Math.round(totalDmgCount + IEDmgCount) + 'with IE)');
                    abilityDiv.appendChild(dmgText);
                  }
                  if (damage["executeDmgRatio"]) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var execU = document.createElement('u');
                    execU.innerText = 'Execute HP Threshold';
                    abilityDiv.appendChild(execU);
                    var execText = document.createTextNode(': ' + Math.round(damage["executeDmgRatio"] 
                    * Math.round(totalDmgCount)));
                    abilityDiv.appendChild(execText);
                  }
                }
                var maxHPRatioCounter = 0;
                if (damage["enemyMaxHPRatio"] && !enemyStats.hp) {
                  var ratio = damage["enemyMaxHPRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyMaxHPRatio"][rankIndex]
                  }
                  maxHPRatioCounter += ratio
                };
                if (damage["enemyMaxHPRatioPer100AD"] && !enemyStats.hp) {
                  var ratio = damage["enemyMaxHPRatioPer100AD"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyMaxHPRatioPer100AD"][rankIndex]
                  }
                  maxHPRatioCounter += ratio * enemyStats.hp * (statsPath["baseDamage"] + 
                  statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)) / 100 
                }
                if (damage["enemyMaxHPRatioPer100BonusAD"] && !enemyStats.hp) {
                  var ratio = damage["enemyMaxHPRatioPer100BonusAD"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyMaxHPRatioPer100BonusAD"][rankIndex]
                  }
                  maxHPRatioCounter += ratio * enemyStats.hp  
                  * (statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)) / 100
                }
                if (damage["enemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                  var ratio = damage["enemyMaxHPRatioPer100AP"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyMaxHPRatioPer100AP"][rankIndex]
                  }
                  maxHPRatioCounter += ratio * selectedStats.ap / 100
                }
                if (damage["enemyMaxHPRatioByLvl"] && !enemyStats.hp) {
                  maxHPRatioCounter += damage["enemyMaxHPRatioByLvl"][champLevel]
                }
                if (maxHPRatioCounter !== 0) {
                  var text = document.createTextNode(' (+' + maxHPRatioCounter + ' Enemy Max HP Ratio)');
                  abilityDiv.appendChild(text);
                }
                var missingHPRatioCounter = 0;
                if (damage["enemyMissingHPRatio"]) {
                  var ratio = damage["enemyMissingHPRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyMissingHPRatio"][rankIndex]
                  }
                  missingHPRatioCounter += ratio 
                };
                if (damage["enemyMissingHPRatioPer100AP"]) {
                  var ratio = damage["enemyMissingHPRatioPer100AP"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyMissingHPRatioPer100AP"][rankIndex]
                  }
                  missingHPRatioCounter += ratio * selectedStats.ap / 100
                }
                if (missingHPRatioCounter !== 0) {
                  var text = document.createTextNode(" (+" + missingHPRatioCounter + " Enemy Missing HP Ratio)")
                  abilityDiv.appendChild(text)
                }
                if (damage["enemyMissingHPRatioPerStack"]) {
                  var ratio = damage["enemyMissingHPRatioPerStack"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyMissingHPRatioPerStack"][rankIndex]
                  }
                  var ratioText = document.createTextNode(' (+' + ratio + ' Enemy Missing HP Ratio per Stack)');
                  abilityDiv.appendChild(ratioText);
                }
                if (damage["enemyCurrentHPRatioPerStack"]) {
                  var ratio = damage["enemyCurrentHPRatioPerStack"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyCurrentHPRatioPerStack"][rankIndex]
                  }
                  var ratioText = document.createTextNode(' (+' + ratio + ' Enemy Current HP Ratio per Stack)');
                  abilityDiv.appendChild(ratioText);
                }
                if (damage["bonusMoveSpeedRatioByLvl"]) {
                  var ratioText = document.createTextNode(' (+' + damage["bonusMoveSpeedRatioByLvl"][champLevel] 
                  + " Bonus Move Speed Ratio) ")
                  abilityDiv.appendChild(ratioText);
                }
                if (damage["attackSpeedPerBonusAttackSpeed"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var asU = document.createElement('u');
                  asU.innerText = 'Wolf Attack Speed';
                  abilityDiv.appendChild(asU);
                  var asRatio = document.createTextNode(': ' + damage["attackSpeedPerBonusAttackSpeed"]
                  * ((statsPath["attackSpeedPerLevel"] * statsPath["attackSpeedRatio"] * champLevel * (0.7025 + 0.0175 * champLevel))
                  + (statsPath["attackSpeedRatio"] * itemStats.as)));
                  abilityDiv.appendChild(asRatio);
                }

                if (damage["system"] === "min" ) {
                  var br = document.createElement('br')
                  abilityDiv.appendChild(br)
                  var minDmgU = document.createElement('u');
                  minDmgU.innerText = 'Min Damage'
                  abilityDiv.appendChild(minDmgU);
                  var minCount = 0
                  if (damage["minDmg"]) {
                    var minDmg = damage["minDmg"];
                    if (typeof minDmg !== 'number') {
                      minDmg = damage["minDmg"][rankIndex]
                    }
                    minCount += minDmg
                  }
                  if (damage["minDmgAPRatio"]) {
                    var ratio = damage["minDmgAPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minDmgAPRatio"][rankIndex]
                    };
                    minCount += ratio * selectedStats.ap
                  }
                  var minText = document.createTextNode(': ' + Math.round(minCount));
                  abilityDiv.appendChild(minText);
                }

                if (damage["system"] === "minMax" ) {
                  var minDmgU = document.createElement('u')
                  minDmgU.innerText = 'Min'
                  abilityDiv.appendChild(minDmgU)
                  if (damage["minDmg"]) {
                    minDmgCount += damage["minDmg"][rankIndex]
                  };
                  if (damage["minDmgByLvl"]) {
                    minDmgCount += damage["minDmgByLvl"][champLevel]
                  };
                  if (damage["minADRatio"]) {
                    var ADRatio = damage["minADRatio"]
                    if (typeof ADRatio !== 'number') {
                      ADRatio = damage["minADRatio"][rankIndex]
                    }
                    ADRatio *= ( statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                    minDmgCount += ADRatio;
                  };
                  if (damage["minBonusADRatio"]) {
                    var bonusADRatio = damage["minBonusADRatio"]
                    if (typeof bonusADRatio !== 'number') {
                      bonusADRatio = damage["minBonusADRatio"][rankIndex]
                    }
                    bonusADRatio *= ( statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                    minDmgCount += bonusADRatio;
                  };
                  if (damage["minAPRatio"]) {
                    var APRatio = damage["minAPRatio"]
                    if (typeof APRatio !== 'number') {
                      APRatio = damage["minAPRatio"][rankIndex]
                    }
                    minDmgCount += APRatio * selectedStats["ap"];
                  };
                  if (damage["minMaxManaRatio"]) {
                    var ratio = damage["minMaxManaRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minMaxManaRatio"][rankIndex]
                    }
                    ratio *= ( statsPath["mana"]["base"] + statsPath["mana"]["manaPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                    minDmgCount += ratio;
                  };
                  if (damage["minBonusHPRatio"]) {
                    var ratio = damage["minBonusHPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minBonusHPRatio"][rankIndex]
                    };
                    ratio *= ((statsPath["healthPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)) + itemStats.hp);
                    minDmgCount += ratio;
                  }
                  if (damage["minMaxHPRatio"]) {
                    var ratio = damage["minMaxHPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minMaxHPRatio"][rankIndex]
                    }
                    minDmgCount += ratio * ((statsPath["baseHP"] + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))
                    + itemStats.hp)
                  };
                  if (damage["minEnemyMaxHPRatio"] && enemyStats.hp) {
                    var ratio = damage["minEnemyMaxHPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minEnemyMaxHPRatio"][rankIndex]
                    }
                    minDmgCount += ratio * enemyStats.hp
                  };
                  if (damage["minEnemyMaxHPRatioPer100AP"] && enemyStats.hp) {
                    var ratio = damage["minEnemyMaxHPRatioPer100AP"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minEnemyMaxHPRatioPer100AP"][rankIndex]
                    }
                    minDmgCount += ratio * enemyStats.hp * (selectedStats.ap + itemStats.ap) / 100
                  };
                  if (damage["minEnemyMaxHPRatioPer100AD"] && enemyStats.hp) {
                    var ratio = damage["minEnemyMaxHPRatioPer100AD"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minEnemyMaxHPRatioPer100AD"][rankIndex]
                    }
                    minDmgCount += ratio * enemyStats.hp  
                    * (statsPath["baseDamage"] + itemStats.ad + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)) / 100
                  }
                  if (damage["minEnemyMaxHPRatioPer100BonusAD"] && enemyStats.hp) {
                    var ratio = damage["minEnemyMaxHPRatioPer100BonusAD"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minEnemyMaxHPRatioPer100BonusAD"][rankIndex]
                    }
                    minDmgCount += ratio * enemyStats.hp  
                    * (statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel) + itemStats.ad) / 100
                  }
                  if (damage["minEnemyBonusHPRatio"] && enemyStats.hp) {
                    var ratio = damage["minEnemyBonusHPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minEnemyBonusHPRatio"][rankIndex]
                    }
                    minDmgCount += ratio * (enemyStats.hp - enemyBaseStats.baseHP)
                  }
                  if (damage["minEnemyCurrentHPRatio"] && enemyStats.hp) {
                    var ratio = damage["minEnemyCurrentHPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minEnemyCurrentHPRatio"][rankIndex]
                    }
                    var text = document.createTextNode(' when enemy is full HP: ');
                    abilityDiv.appendChild(text);
                    minDmgCount += ratio * enemyStats.hp
                  };
                  if (damage["minEnemyCurrentHPRatioPer100AP"] && enemyStats.hp) {
                    if (!damage["minEnemyCurrentHPRatio"]) {
                      var text = document.createTextNode(' when enemy is full HP: ');
                      abilityDiv.appendChild(text);
                    }
                    var ratio = damage["minEnemyCurrentHPRatioPer100AP"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minEnemyCurrentHPRatioPer100AP"][rankIndex]
                    }
                    minDmgCount += ratio * enemyStats.hp * (selectedStats.ap + ItemStats.ap) / 100
                  };
                  if (minDmgCount !== 0) {
                    var text = document.createTextNode(' - ' + Math.round(minDmgCount));
                    abilityDiv.appendChild(text);
                  }
                  var minMaxHPRatioCounter = 0;
                  if (damage["minEnemyMaxHPRatio"] && !enemyStats.hp) {
                    var ratio = damage["minEnemyMaxHPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minEnemyMaxHPRatio"][rankIndex]
                    }
                    minMaxHPRatioCounter += ratio
                  };
                  if (damage["minEnemyMaxHPRatioPer100AD"] && !enemyStats.hp) {
                    var ratio = damage["minEnemyMaxHPRatioPer100AD"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minEnemyMaxHPRatioPer100AD"][rankIndex]
                    }
                    minMaxHPRatioCounter += ratio * (statsPath["baseDamage"] + 
                    statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)) / 100 
                  }
                  if (damage["minEnemyMaxHPRatioPer100BonusAD"] && !enemyStats.hp) {
                    var ratio = damage["minEnemyMaxHPRatioPer100BonusAD"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minEnemyMaxHPRatioPer100BonusAD"][rankIndex]
                    }
                    minMaxHPRatioCounter += ratio * (statsPath["damagePerLevel"] 
                    * champLevel * (0.7025 + 0.0175 * champLevel)) / 100
                  }
                  if (damage["minEnemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                    var ratio = damage["minEnemyMaxHPRatioPer100AP"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minEnemyMaxHPRatioPer100AP"][rankIndex]
                    }
                    minMaxHPRatioCounter += ratio * (selectedStats.ap + itemStats.ap) / 100
                  }
                  if (damage["minEnemyMaxHPRatioByLvl"] && !enemyStats.hp) {
                    minMaxHPRatioCounter += damage["minEnemyMaxHPRatioByLvl"][champLevel]
                  }
                  if (minMaxHPRatioCounter !== 0) {
                    var text = document.createTextNode(' (+' + minMaxHPRatioCounter + ' Enemy Max HP Ratio)');
                    abilityDiv.appendChild(text);
                  }
                  if (damage["minEnemyBonusHPRatio"] && !enemyStats.hp) {
                    var ratio = damage["minEnemyBonusHPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minEnemyBonusHPRatio"][rankIndex]
                    }
                    var text = document.createTextNode(' (+' + ratio + ' Enemy Bonus HP Ratio');
                    abilityDiv.appendChild(text);
                  }
                  var minCurrentHPCounter = 0;
                  if (damage["minEnemyCurrentHPRatio"] && !enemyStats.hp) {
                    var ratio = damage["minEnemyCurrentHPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minEnemyCurrentHPRatio"][rankIndex]
                    }
                    minCurrentHPCounter += ratio;
                  };
                  if (damage["minEnemyCurrentHPRatioPer100AP"] && !enemyStats.hp) {
                    var ratio = damage["minEnemyCurrentHPRatioPer100AP"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minEnemyCurrentHPRatioPer100AP"][rankIndex]
                    }
                    minCurrentHPCounter += ratio * (selectedStats.ap + ItemStats.ap) / 100
                  };
                  if (minCurrentHPCounter !== 0) {
                    var text = document.createTextNode(' (+' + minCurrentHPCounter + ' Enemy Current HP Ratio');
                  }
                  if (damage["minEnemyMissingHPRatio"]) {
                    var ratio = damage["minEnemyMissingHPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["minEnemyMissingHPRatio"][rankIndex]
                    }
                    var text = document.createTextNode(" (+" + ratio + " Enemy Missing HP Ratio)")
                    abilityDiv.appendChild(text)
                  };  
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);

                  if (damage["medDmg"]) {
                    var medDmgCounter = 0;
                    var medDmgU = document.createElement('u')
                    medDmgU.innerText = 'Med'
                    abilityDiv.appendChild(medDmgU)
                    medDmgCounter += damage["medDmg"][rankIndex];
                    if (damage["medAPRatio"]) {
                      var ratio = damge["medAPRatio"];
                      if (typeof ratio !== 'number') {
                        ratio = damage["medAPRatio"][rankIndex]
                      };
                      medDmgCounter += ratio * (selectedStats.ap + itemStats.ap);
                    }
                    if (damage["medBonusADRatio"]) {
                      var ratio = damge["medBonusADRatio"];
                      if (typeof ratio !== 'number') {
                        ratio = damage["medBonusADRatio"][rankIndex]
                      };
                      medDmgCounter += ratio * (itemStats.ad + statsPath["damagePerLevel"] 
                      * champLevel * (0.7025 + 0.0175 * champLevel))
                    }
                    var medText = document.createTextNode(' - ' + Math.round(medDmgCounter));
                    abilityDiv.appendChild(medText);
                    var br = document.createElement("br");
                    abilityDiv.appendChild(br);
                  }

                  var maxDmgU = document.createElement('u')
                  maxDmgU.innerText = 'Max'
                  abilityDiv.appendChild(maxDmgU)

                  if (damage["maxDmg"]) {
                    maxDmgCount += damage["maxDmg"][rankIndex];
                  }
                  if (damage["maxDmgByLvl"]) {
                    maxDmgCount += damage["maxDmgByLvl"][champLevel]
                  }
                  if (damage["maxAPRatio"]) {
                    var ratio = damage["maxAPRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxAPRatio"][rankIndex]
                    };
                    maxDmgCount += ratio * (selectedStats.ap + itemStats.ap);
                  }
                  if (damage["maxADRatio"]) {
                    var ratio = damage["maxADRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxADRatio"][rankIndex]
                    };
                    maxDmgCount += ratio * (itemStats.ad + statsPath["baseDamage"] + statsPath["damagePerLevel"] 
                    * champLevel * (0.7025 + 0.0175 * champLevel));
                  }
                  if (damage["maxBonusADRatio"]) {
                    var ratio = damage["maxBonusADRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxBonusADRatio"][rankIndex]
                    };
                    maxDmgCount += ratio * (itemStats.ad + statsPath["damagePerLevel"] 
                    * champLevel * (0.7025 + 0.0175 * champLevel));
                  }
                  if (damage["maxMaxManaRatio"]) {
                    var ratio = damage["maxManaRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxManaRatio"][rankIndex]
                    };
                    maxDmgCount += ratio * (itemStats.mana + statsPath["mana"]["base"] + statsPath["mana"]["manaPerLevel"] 
                    * champLevel * (0.7025 + 0.0175 * champLevel));
                  }
                  if (damage["maxBonusHPRatio"]) {
                    var ratio = damage["maxBonusHPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxBonusHPRatio"][rankIndex]
                    };
                    ratio *= itemStats.hp + statsPath["healthPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel);
                    maxDmgCount += ratio;
                  }
                  if (damage["maxMaxHPRatio"]) {
                    var ratio = damage["maxMaxHPRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxMaxHPRatio"][rankIndex]
                    };
                    maxDmgCount += ratio * (itemStats.hp + statsPath["baseHP"] + statsPath["hpPerLevel"] 
                    * champLevel * (0.7025 + 0.0175 * champLevel));
                  };
                  if (damage["maxMaxHPRatioPer100BonusAD"]) {
                    var ratio = damage["maxMaxHPRatioPer100BonusAD"];
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxMaxHPRatioPer100BonusAD"][rankIndex]
                    };
                    maxDmgCount += ratio * (itemStats.ad + statsPath["damagePerLevel"] 
                    * champLevel * (0.7025 + 0.0175 * champLevel)) / 100;
                  }
                  if (damage["maxEnemyMaxHPRatio"] && enemyStats.hp) {
                    var ratio = damage["maxEnemyMaxHPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxEnemyMaxHPRatio"][rankIndex]
                    }
                    maxDmgCount += ratio * (enemyStats.hp + enemyItemStats.hp);
                  };
                  if (damage["maxEnemyMaxHPRatioPer100AP"] && enemyStats.hp) {
                    var ratio = damage["maxEnemyMaxHPRatioPer100AP"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxEnemyMaxHPRatioPer100AP"][rankIndex]
                    }
                    maxDmgCount += ratio * (enemyStats.hp + enemyItemStats.hp) * (selectedStats.ap + itemStats.ap) / 100
                  };
                  if (damage["maxEnemyMaxHPRatioPer100AD"] && enemyStats.hp) {
                    var ratio = damage["maxEnemyMaxHPRatioPer100AD"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxEnemyMaxHPRatioPer100AD"][rankIndex]
                    }
                    maxDmgCount += ratio * (enemyStats.hp + enemyItemStats.hp) 
                    * (statsPath["baseDamage"] + itemStats.ad + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)) / 100
                  }
                  if (damage["maxEnemyMaxHPRatioPer100BonusAD"] && enemyStats.hp) {
                    var ratio = damage["maxEnemyMaxHPRatioPer100BonusAD"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxEnemyMaxHPRatioPer100BonusAD"][rankIndex]
                    }
                    maxDmgCount += ratio * (enemyStats.hp + enemyItemStats.hp)
                    * (statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel) + itemStats.ad) / 100
                  }
                  if (damage["maxEnemyBonusHPRatio"] && enemyStats.hp) {
                    var ratio = damage["maxEnemyBonusHPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxEnemyBonusHPRatio"][rankIndex]
                    }
                    maxDmgCount += ratio * (enemyStats.hp + enemyItemStats.hp - enemyBaseStats.baseHP)
                  }
                  if (damage["maxEnemyCurrentHPRatio"] && enemyStats.hp) {
                    var ratio = damage["maxEnemyCurrentHPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxEnemyCurrentHPRatio"][rankIndex]
                    }
                    var text = document.createTextNode(' when enemy is full HP: ');
                    abilityDiv.appendChild(text);
                    maxDmgCount += ratio * (enemyStats.hp + enemyItemStats.hp);
                  };
                  if (damage["maxEnemyCurrentHPRatioPer100AP"] && enemyStats.hp) {
                    if (!damage["maxEnemyCurrentHPRatio"]) {
                      var text = document.createTextNode(' when enemy is full HP: ');
                      abilityDiv.appendChild(text);
                    }
                    var ratio = damage["maxEnemyCurrentHPRatioPer100AP"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxEnemyCurrentHPRatioPer100AP"][rankIndex]
                    }
                    maxDmgCount += ratio * enemyStats.hp * (selectedStats.ap + ItemStats.ap) / 100
                  };
                  if (maxDmgCount !== 0) {
                    var text = document.createTextNode(' - ' + Math.round(maxDmgCount));
                    abilityDiv.appendChild(text);
                  }
                  var maxMaxHPRatioCounter = 0;
                  if (damage["maxEnemyMaxHPRatio"] && !enemyStats.hp) {
                    var ratio = damage["maxEnemyMaxHPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxEnemyMaxHPRatio"][rankIndex]
                    }
                    maxMaxHPRatioCounter += ratio
                  };
                  if (damage["maxEnemyMaxHPRatioPer100AD"] && !enemyStats.hp) {
                    var ratio = damage["maxEnemyMaxHPRatioPer100AD"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxEnemyMaxHPRatioPer100AD"][rankIndex]
                    }
                    maxMaxHPRatioCounter += ratio * (itemStats.ad + statsPath["baseDamage"] + 
                    statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)) / 100 
                  }
                  if (damage["maxEnemyMaxHPRatioPer100BonusAD"] && !enemyStats.hp) {
                    var ratio = damage["maxEnemyMaxHPRatioPer100BonusAD"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxEnemyMaxHPRatioPer100BonusAD"][rankIndex]
                    }
                    maxMaxHPRatioCounter += ratio * (itemStats.ad + statsPath["damagePerLevel"] 
                    * champLevel * (0.7025 + 0.0175 * champLevel)) / 100
                  }
                  if (damage["maxEnemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                    var ratio = damage["maxEnemyMaxHPRatioPer100AP"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxEnemyMaxHPRatioPer100AP"][rankIndex]
                    }
                    maxMaxHPRatioCounter += ratio * (selectedStats.ap + itemStats.ap) / 100
                  }
                  if (damage["maxEnemyMaxHPRatioByLvl"] && !enemyStats.hp) {
                    maxMaxHPRatioCounter += damage["maxEnemyMaxHPRatioByLvl"][champLevel]
                  }
                  if (maxMaxHPRatioCounter !== 0) {
                    var text = document.createTextNode(' (+' + maxMaxHPRatioCounter + ' Enemy Max HP Ratio)');
                    abilityDiv.appendChild(text);
                  }
                  if (damage["maxEnemyBonusHPRatio"] && !enemyStats.hp) {
                    var ratio = damage["maxEnemyBonusHPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxEnemyBonusHPRatio"][rankIndex]
                    }
                    var text = document.createTextNode(' (+' + ratio + ' Enemy Bonus HP Ratio');
                    abilityDiv.appendChild(text);
                  }
                  var maxCurrentHPCounter = 0;
                  if (damage["maxEnemyCurrentHPRatio"] && !enemyStats.hp) {
                    var ratio = damage["maxEnemyCurrentHPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxEnemyCurrentHPRatio"][rankIndex]
                    }
                    maxCurrentHPCounter += ratio;
                  };
                  if (damage["maxEnemyCurrentHPRatioPer100AP"] && !enemyStats.hp) {
                    var ratio = damage["maxEnemyCurrentHPRatioPer100AP"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxEnemyCurrentHPRatioPer100AP"][rankIndex]
                    }
                    maxCurrentHPCounter += ratio * (selectedStats.ap + ItemStats.ap) / 100
                  };
                  if (maxCurrentHPCounter !== 0) {
                    var text = document.createTextNode(' (+' + maxCurrentHPCounter + ' Enemy Current HP Ratio');
                  }
                  if (damage["maxEnemyMissingHPRatio"]) {
                    var ratio = damage["maxEnemyMissingHPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = damage["maxEnemyMissingHPRatio"][rankIndex]
                    }
                    var text = document.createTextNode(" (+" + ratio + " Enemy Missing HP Ratio)")
                    abilityDiv.appendChild(text)
                  };
                };

                var evolveDmgCounter = 0;
                if (damage["evolveMaxDmg"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var evolveU = document.createElement('u');
                  evolveU.innerText = 'Evolve Max Damage';
                  abilityDiv.appendChild(evolveU);
                  evolveDmgCounter += damage["evolveMaxDmg"][rankIndex];
                }
                if (damage["evolveMaxBonusADRatio"]) {
                  var ratio = damage["evolveMaxBonusADRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = damage["evolveMaxBonusADRatio"][rankIndex]
                  }
                  evolveDmgCounter += ratio * (itemStats.ad + statsPath["damagePerLevel"] 
                  * champLevel * (0.7025 + 0.0175 * champLevel))
                };
                if (damage["evolveMaxAPRatio"]) {
                  var ratio = damage["evolveMaxAPRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = damage["evolveMaxAPRatio"][rankIndex]
                  }
                  evolveDmgCounter += ratio * (itemStats.ap + selectedStats.ap);
                };
                if (evolveDmgCounter !== 0) {
                  var text = document.createTextNode(' - ' + Math.round(evolveDmgCounter));
                  abilityDiv.appendChild(text);
                }

                if (damage["system"] === 'stacking') {
                  var stackDmgCounter = 0;
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var stackU = document.createElement('u');
                  stackU.innerText = 'Damage per Stack';
                  abilityDiv.appendChild(stackU);
                  if (damage["dmgPerStack"]) {
                    var dmg = damage["dmgPerStack"];
                    if (typeof dmg !== 'number') {
                      dmg = damage["dmgPerStack"][rankIndex]
                    };
                    stackDmgCounter += dmg;
                  }
                  if (damage["ADRatioPerStack"]) {
                    var ratio = damage["ADRatioPerStack"];
                    if (typeof ratio !== 'number') {
                      ratio = damage["ADRatioPerStack"][rankIndex]
                    };
                    stackDmgCounter += ratio * (itemStats.ad + statsPath["baseDamage"] + statsPath["damagePerLevel"] 
                    * champLevel * (0.7025 + 0.0175 * champLevel));
                  }
                  var text = document.createTextNode(': ' + Math.round(stackDmgCounter));
                }

                if (damage["4thShotDmgRatio"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var dmgU = document.createElement('u');
                  dmgU.innerText = '4th Shot Damage';
                  abilityDiv.appendChild(dmgU);
                  var minText = document.createTextNode(': Min - ' + Math.round(damage["4thShotDmgRatio"] * minDmgCount) 
                  + ' (' + Math.round(damage["4thShotDmgRatioWithIE"] * minDmgCount) + ' with Infinity Edge)');
                  abilityDiv.appendChild(minText);
                  var br2 = document.createElement('br');
                  abilityDiv.appendChild(br2);
                  var maxText = document.createTextNode('Max - ' + Math.round(damage["4thShotDmgRatio"] * maxDmgCount) 
                  + ' (' + Math.round(damage["4thShotDmgRatioWithIE"] * maxDmgCount) + ' with Infinity Edge)');
                  abilityDiv.appendChild(maxText);
                }

                if (damage["multiHitDmgRatio"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var ratio = damage["multiHitDmgRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = damage["multiHitDmgRatio"][rankIndex]
                  }
                  var text = document.createTextNode('Additional hits deal ' + ratio + ' damage ratio.');
                  abilityDiv.appendChild(text);
                }

                if (damage["minMinDmg"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var minDmgU = document.createElement('u');
                  minDmgU.innerText = 'Minimum Damage';
                  abilityDiv.appendChild(minDmgU);
                  var dmg = damage["minMinDmg"];
                  if (typeof dmg !== 'number') {
                    dmg = damage["minMinDmg"][rankIndex]
                  }
                  var text = document.createTextNode(': ' + dmg)
                  abilityDiv.appendChild(text);
                }

                if (damage["canCrit"]) {
                  var canCritText = document.createTextNode(', can crit.');
                  abilityDiv.appendChild(canCritText);
                }
                
                if (damage["critDmg"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var critU = document.createElement('u');
                  if (totalDmgCount === 0 && minDmgCount === 0 && maxDmgCount === 0) {
                    critU.innerText = 'Crit Damage Ratio';
                  } else {
                    critU.innerText = 'Crit Damage';
                  }
                  abilityDiv.appendChild(critU);
                  if (totalDmgCount === 0 && minDmgCount === 0 && maxDmgCount === 0) {
                    var critText = document.createTextNode(': ' + damage["critDmg"]);
                    abilityDiv.appendChild(critText);
                  }
                  if (totalDmgCount !== 0) {
                    var critText = document.createTextNode(': ' + Math.round(damage["critDmg"] * totalDmgCount));
                    abilityDiv.appendChild(critText);
                  }
                  if (minDmgCount !== 0) {
                    var text = document.createTextNode(': Min - ' + Math.round(damage["critDmg"] * minDmgCount)
                    + ', Max - ' + Math.round(damage["critDmg"] * maxDmgCount));
                    abilityDiv.appendChild(text);
                  }
                  if (damage["critDmgWithIE"]) {
                    if (totalDmgCount === 0 && minDmgCount === 0 && maxDmgCount === 0) {
                      var IEText = document.createTextNode(' (' + damage["critDmgWithIE"] + ' with Infinity Edge)');
                      abilityDiv.appendChild(IEText);
                    };
                    if (totalDmgCount !== 0) {
                      var IEText = document.createTextNode(' (' + Math.round(damage["critDmgWithIE"] * totalDmgCount) 
                      + ' with Infinity Edge)');
                      abilityDiv.appendChild(IEText);
                    }
                    if (minDmgCount !== 0) {
                      var text = document.createTextNode(' (Min - ' + Math.round(damage["critDmgWithIE"] * minDmgCount)
                      + ', Max - ' + Math.round(damage["critDmgWithIE"] * maxDmgCount) + ' with Infinity Edge)');
                      abilityDiv.appendChild(text);
                    }
                  }
                };
                if (damage["critADRatio"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var critU = document.createElement('u');
                  critU.innerText = 'Crit Bonus Damage';
                  abilityDiv.appendChild(critU);
                  var critText = document.createTextNode(': ' + Math.round(damage["critADRatio"] * (itemStats.ad + 
                  statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))));
                  abilityDiv.appendChild(critText);
                  if (damage["critADRatioWithIE"]) {
                    var IEText = document.createTextNode(' (' + damage["critADRatioWithIE"] * (itemStats.ad 
                    + statsPath["baseDamage"] + 
                    statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)) + ' with Infinity Edge)');
                    abilityDiv.appendChild(IEText);
                  }
                }

                if (damage["minCritADRatio"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var critU = document.createElement('u');
                  critU.innerText = 'Crit Bonus Damage';
                  abilityDiv.appendChild(critU);
                  var critText = document.createTextNode(': Min - ' + Math.round(damage["minCritADRatio"] * (itemStats.ad + 
                    statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))));
                  abilityDiv.appendChild(critText);
                  if (damage["minCritADRatioWithIE"]) {
                    var IEText = document.createTextNode(' (' + Math.round(damage["minCritADRatioWithIE"] * (itemStats.ad + 
                      statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))) 
                      + ' with Infinity Edge)');
                    abilityDiv.appendChild(IEText);
                  };
                  var br2 = document.createElement('br');
                  abilityDiv.appendChild(br2);
                  var maxCritText = document.createTextNode('Max - ' + Math.round(damage["maxCritADRatio"] * (itemStats.ad + 
                    statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))));
                  abilityDiv.appendChild(maxCritText);
                  if (damage["maxCritADRatioWithIE"]) {
                    var IEText = document.createTextNode(' (' + Math.round(damage["maxCritADRatioWithIE"] * (itemStats.ad + 
                      statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))) 
                      + ' with Infinity Edge)');
                    abilityDiv.appendChild(IEText);
                  };
                }

                if (damage["empowerBonus"]) {
                  var empDmgCounter = 0;
                  var minEmpDmgCounter = 0;
                  var maxEmpDmgCounter = 0;
                  var empPath = damage["empowerBonus"];
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var empU = document.createElement('u');
                  empU.innerText = 'Empower Bonus Damage';
                  abilityDiv.appendChild(empU);
                  if (empPath["dmgByLvl"]) {
                    empDmgCounter += empPath["dmgByLvl"][champLevel]
                  };
                  if (empPath["bonusADRatio"]) {
                    var ratio = empPath["bonusADRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = empPath["bonusADRatio"][rankIndex]
                    };
                    empDmgCounter += ratio * (itemStats.ad + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))
                  };
                  if (empDmgCounter !== 0) {
                    var text = document.createTextNode(': ' + Math.round(empDmgCounter));
                    abilityDiv.appendChild(text);
                  }
                  if (empPath["system"] === 'minMax') {
                    if (empPath["minDmgByLvl"]) {
                      minEmpDmgCounter += empPath["minDmgByLvl"][champLevel]
                    };
                    if (empPath["minAPRatio"]) {
                      var ratio = empPath["minAPRatio"];
                      if (typeof ratio !== 'number') {
                        ratio = empPath["minAPRatio"][rankIndex]
                      };
                      minEmpDmgCounter += ratio * (selectedStats.ap + itemStats.ap);
                    }
                    var minText = document.createTextNode(': Min - ' + Math.round(minEmpDmgCounter));
                    abilityDiv.appendChild(minText);
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    if (empPath["maxDmgByLvl"]) {
                      maxEmpDmgCounter += empPath["maxDmgByLvl"][champLevel]  
                    }
                    if (empPath["maxAPRatio"]) {
                      var ratio = empPath["maxAPRatio"];
                      if (typeof ratio !== 'number') {
                        ratio = empPath["maxAPRatio"][rankIndex]
                      };
                      maxEmpDmgCounter += ratio * (selectedStats.ap + itemStats.ap);
                    }
                    var maxText = document.createTextNode('Max - ' + Math.round(maxEmpDmgCounter));
                    abilityDiv.appendChild(maxText);
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
                    var colonSpace = document.createTextNode(': ')
                    abilityDiv.appendChild(colonSpace)

                    if (part["type"]) {
                      var dmgType = part["type"];
                      if (dmgType === 'phys') {
                        dmgType = 'Physical'
                      } else {
                        dmgType = dmgType[0].toUpperCase() + dmgType.slice(1)
                      }
                      var dmgTypeText = document.createTextNode(dmgType + " Damage - ");
                      if (part["postMitigation"] === 'magic') {
                        dmgTypeText.nodeValue = dmgType + ' Damage (part 1 damage, post-mitigation) - ';
                      }
                      abilityDiv.appendChild(dmgTypeText);
                    };
                    var partDmgCount = 0;
                    var minPartDmgCount = 0;
                    var maxPartDmgCount = 0;
                    if (part["dmg"]) {
                     partDmgCount += part["dmg"][rankIndex]
                    };
                    if (part["dmgByLvl"]) {
                      partDmgCount += part["dmgByLvl"][rankIndex]
                    };
                    if (part["APRatio"]) {
                      var ratio = part["APRatio"]
                      if (typeof ratio !== 'number') {
                        ratio = part["APRatio"][rankIndex]
                      }
                      partDmgCount += ratio * (selectedStats.ap + itemStats.ap);
                    };
                    if (part["ADRatio"]) {
                      var ratio = part["ADRatio"]
                      if (typeof ratio !== 'number') {
                        ratio = part["ADRatio"][rankIndex]
                      }
                      partDmgCount += ratio * (itemStats.ad + statsPath["baseDamage"] 
                      + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                    };
                    if (part["bonusADRatio"]) {
                      var ratio = part["bonusADRatio"]
                      if (typeof ratio !== 'number') {
                        ratio = part["bonusADRatio"][rankIndex]
                      }
                      partDmgCount += ratio * (itemStats.ad 
                      + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                    };
                    if (part["enemyMaxHPRatio"] && enemyStats.hp) {
                      var ratio = part["enemyMaxHPRatio"]
                      if (typeof ratio !== 'number') {
                        ratio = part["enemyMaxHPRatio"][rankIndex]
                      }
                      partDmgCount += ratio * (enemyStats.hp + enemyItemStats.hp);
                    };
                    if (part["enemyCurrentHPRatio"] && enemyStats.hp) {
                      var ratio = damage["enemyCurrentHPRatio"]
                      if (typeof ratio !== 'number') {
                        ratio = damage["enemyCurrentHPRatio"][rankIndex]
                      }
                      var text = document.createTextNode(' when enemy is full HP: ');
                      abilityDiv.appendChild(text);
                      partDmgCount += ratio * (enemyStats.hp + enemyItemStats.hp);
                    }
                    if (part["maxHPRatio"]) {
                      var ratio = part["maxHPRatio"];
                      if (typeof ratio !== 'number') {
                        ratio = part["maxHPRatio"][rankIndex]
                      }
                      partDmgCount += ratio * (itemStats.hp + statsPath["baseHP"] 
                      + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))
                    };
                    if (partDmgCount !== 0) {
                      var text = document.createTextNode(Math.round(partDmgCount));
                      abilityDiv.appendChild(text);
                    }
                    if (part["enemyMaxHPRatio"] && !enemyStats.hp) {
                      var ratio = part["enemyMaxHPRatio"]
                      if (typeof ratio !== 'number') {
                        ratio = part["enemyMaxHPRatio"][rankIndex]
                      }
                      var text = document.createTextNode(" (+" + ratio + " Enemy Max HP Ratio)")
                      abilityDiv.appendChild(text)
                    };
                    if (part["enemyCurrentHPRatio"] && !enemyStats.hp) {
                      var ratio = part["enemyCurrentHPRatio"];
                      if (typeof ratio !== 'number') {
                        ratio = part["enemyCurrentHPRatio"][rankIndex]
                      }
                      var text = document.createTextNode(" (+" + enemyCurrentHPRatioValue + " Enemy Current HP Ratio)")
                      abilityDiv.appendChild(text)
                    };
                    if (part["part1RatioFormula"]) {
                      var part1Dmg = damage["part1"]["dmg"][rankIndex] + damage["part1"]["APRatio"] 
                      * (selectedStats.ap + itemStats.ap);
                      var text = document.createTextNode(Math.round(part1Dmg * (1 + ((0.00075 
                        * (selectedStats.ap + itemStats.ap)) - 0.15))**2));
                      abilityDiv.appendChild(text);
                    }

                    if (part["system"] === "minMax" ) {
                      var minU = document.createTextNode('Min - ');
                      abilityDiv.appendChild(minU)
                      if (part["minDmg"]) {
                        minPartDmgCount += part["minDmg"][rankIndex]
                      }
                      if (part["minAPRatio"]) {
                        var ratio = part["minAPRatio"];
                        if (typeof ratio !== 'number') {
                          ratio = part["minAPRatio"][rankIndex]
                        };
                        minPartDmgCount += ratio * (itemStats.ap + selectedStats.ap);
                      }
                      if (part["minADRatio"]) {
                        var ratio = part["minADRatio"];
                        if (typeof ratio !== 'number') {
                          ratio = part["minADRatio"][rankIndex]
                        };
                        minPartDmgCount += ratio * (itemStats.ad + statsPath["baseDamage"] 
                        + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                      }
                      if (part["minBonusADRatio"]) {
                        var ratio = part["minBonusADRatio"];
                        if (typeof ratio !== 'number') {
                          ratio = part["minBonusADRatio"][rankIndex]
                        };
                        minPartDmgCount += ratio * (itemStats.ad
                        + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                      }
                      if (part["minEnemyMaxHPRatio"] && enemyStats.hp) {
                        var ratio = part["minEnemyMaxHPRatio"];
                        if (typeof ratio !== 'number') {
                          ratio = part["minEnemyMaxHPRatio"][rankIndex]
                        };
                        minPartDmgCount += ratio * (enemyItemStats.hp + enemyStats.hp);
                      }
                      if (part["minEnemyMaxHPRatioPer100AP"]) {
                        var ratio = part["minEnemyMaxHPRatioPer100AP"];
                        if (typeof ratio !== 'number') {
                          ratio = part["minEnemyMaxHPRatioPer100AP"][rankIndex]
                        };
                        minPartDmgCount += ratio * (enemyItemStats.hp + enemyStats.hp) * (selectedStats.ap 
                          + itemStats.ap) / 100;
                      }
                      if (minPartDmgCount !== 0) {
                        if (part["bonusDmgRatioPerCritChance"]) {
                          minPartDmgCount *= (1 + part["bonusDmgRatioPerCritChance"] * 
                            selectedStats.critChance + itemStats.critChance)
                        }
                        var text = document.createTextNode(Math.round(minPartDmgCount));
                        abilityDiv.appendChild(text);
                      }
                      if (part["minEnemyMissingHPRatioByLvl"]) {
                        var text = document.createTextNode(' (+' + part["minEnemyMissingHPRatioByLvl"][champLevel] 
                        + " Enemy Missing HP Ratio)");
                        abilityDiv.appendChild(text);
                      }
                      var br = document.createElement("br");
                      abilityDiv.appendChild(br);
                      var maxU = document.createTextNode('Max - ');
                      abilityDiv.appendChild(maxU)
                      if (part["maxDmg"]) {
                        maxPartDmgCount += part["maxDmg"][rankIndex]
                      }
                      if (part["maxAPRatio"]) {
                        var ratio = part["maxAPRatio"];
                        if (typeof ratio !== 'number') {
                          ratio = part["maxAPRatio"][rankIndex]
                        };
                        maxPartDmgCount += ratio * (itemStats.ap + selectedStats.ap);
                      }
                      if (part["maxADRatio"]) {
                        var ratio = part["maxADRatio"];
                        if (typeof ratio !== 'number') {
                          ratio = part["maxADRatio"][rankIndex]
                        };
                        maxPartDmgCount += ratio * (itemStats.ad + statsPath["baseDamage"] 
                        + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                      }
                      if (part["maxBonusADRatio"]) {
                        var ratio = part["maxBonusADRatio"];
                        if (typeof ratio !== 'number') {
                          ratio = part["maxBonusADRatio"][rankIndex]
                        };
                        maxPartDmgCount += ratio * (itemStats.ad
                        + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                      }
                      if (part["maxEnemyMaxHPRatio"] && enemyStats.hp) {
                        var ratio = part["maxEnemyMaxHPRatio"];
                        if (typeof ratio !== 'number') {
                          ratio = part["maxEnemyMaxHPRatio"][rankIndex]
                        };
                        maxPartDmgCount += ratio * (enemyItemStats.hp + enemyStats.hp);
                      }
                      if (part["maxEnemyMaxHPRatioPer100AP"]) {
                        var ratio = part["maxEnemyMaxHPRatioPer100AP"];
                        if (typeof ratio !== 'number') {
                          ratio = part["maxEnemyMaxHPRatioPer100AP"][rankIndex]
                        };
                        maxPartDmgCount += ratio * (enemyItemStats.hp + enemyStats.hp) * (selectedStats.ap 
                          + itemStats.ap) / 100;
                      }
                      if (maxPartDmgCount !== 0) {
                        if (part["bonusDmgRatioPerCritChance"]) {
                          maxPartDmgCount *= (1 + part["bonusDmgRatioPerCritChance"] * 
                            selectedStats.critChance + itemStats.critChance)
                        }
                        var text = document.createTextNode(Math.round(maxPartDmgCount));
                        abilityDiv.appendChild(text);
                      }
                      if (part["maxEnemyMissingHPRatioByLvl"]) {
                        var text = document.createTextNode(' (+' + part["maxEnemyMissingHPRatioByLvl"][champLevel] 
                        + " Enemy Missing HP Ratio)");
                        abilityDiv.appendChild(text);
                      }
                    }
                    var next = array[i+1]
                    if (champLeftFile[ability]['damage'][next]) {
                      doubleBreak();
                    }
                  }
                  this.partNumberArray.map(partDamageMap)
                }
                if (damage["storedDmg"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var storedU = document.createElement('u');
                  storedU.innerText = 'Stored Damage Ratio';
                  abilityDiv.appendChild(storedU);
                  var storedText = document.createTextNode(': ' + damage["storedDmg"]["dmgRatio"][rankIndex]  
                  + ' of pre-mitigated damage dealt over the past ' + damage["storedDmg"]["duration"] + ' seconds.');
                  abilityDiv.appendChild(storedText);
                }
                if (damage["duration"]) {
                  var text = document.createTextNode(' over ' + damage["duration"] + ' seconds.');
                  abilityDiv.appendChild(text);
                };
                if (damage["coolDown"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var cdU = document.createElement('u');
                  cdU.innerText = 'Cooldown';
                  abilityDiv.appendChild(cdU);
                  var cdText = document.createTextNode(': ' + damage["coolDown"]);
                  abilityDiv.appendChild(cdText);
                }
                doubleBreak();
              }

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
                var tickDmgCount = 0;
                var minTickDmgCount = 0;
                var maxTickDmgCount = 0;
                var bonusTicks = 0;
                var ticks = 0;
                if (tickDamage["ticks"]) {
                  ticks = tickDamage["ticks"]
                  if (typeof ticks !== 'number') {
                    ticks = tickDamage["ticks"][rankIndex]
                  }
                }
                console.log('ticks: ' + ticks);
                if (tickDamage["dmg"]) {
                  tickDmgCount += tickDamage["dmg"][rankIndex]
                };
                if (tickDamage["dmgByLvl"]) {
                  tickDmgCount += tickDamage["dmgByLvl"][rankIndex]
                };
                if (tickDamage["APRatio"]) {
                  var ratio = tickDamage["APRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = tickDamage["APRatio"][rankIndex]
                  };
                  tickDmgCount += ratio * (selectedStats.ap + itemStats.ap);
                };
                if (tickDamage["ADRatio"]) {
                  var ratio = tickDamage["ADRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = tickDamage["ADRatio"][rankIndex]
                  };
                  tickDmgCount += ratio * (itemStats.ad + statsPath["baseDamage"] 
                  + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                };
                if (tickDamage["bonusADRatio"]) {
                  var ratio = tickDamage["bonusADRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = tickDamage["bonusADRatio"][rankIndex]
                  };
                  tickDmgCount += ratio * (itemStats.ad 
                  + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                };
                if (tickDamage["enemyMaxHPRatio"] && enemyStats.hp) {
                  var ratio = tickDamage["enemyMaxHPRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = tickDamage["enemyMaxHPRatio"][rankIndex]
                  };
                  tickDmgCount += ratio * (enemyStats.hp + enemyItemStats.hp);
                };
                if (tickDamage["enemyMaxHPRatioByLvl"] && enemyStats.hp) {
                  tickDmgCount += tickDamage["enemyMaxHPRatioByLvl"][champLevel] * (enemyStats.hp + enemyItemStats.hp);
                }
                if (tickDamage["enemyMaxHPRatioPer100AP"] && enemyStats.hp) {
                  var ratio = tickDamage["enemyMaxHPRatioPer100AP"];
                  if (typeof ratio !== 'number') {
                    ratio = tickDamage["enemyMaxHPRatioPer100AP"][rankIndex]
                  };
                  tickDmgCount += ratio * (enemyStats.hp + enemyItemStats.hp) * (itemStats.ap + selectedStats.ap)/100;
                };
                if (tickDamage["maxHPRatio"]) {
                  var ratio = tickDamage["maxHPRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = tickDamage["maxHPRatio"][rankIndex]
                  }
                  tickDmgCount += ratio * (itemStats.hp + statsPath["baseHP"] 
                  + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                };
                if (tickDamage["bonusHPRatio"]) {
                  var ratio = tickDamage["bonusHPRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = tickDamage["bonusHPRatio"][rankIndex]
                  }
                  tickDmgCount += ratio * (itemStats.hp 
                  + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                }
                if (tickDamage["enemyCurrentHPRatio"] && enemyStats.hp) {
                  var ratio = damage["enemyCurrentHPRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyCurrentHPRatio"][rankIndex]
                  }
                  var text = document.createTextNode(' when enemy is full HP: ');
                  abilityDiv.appendChild(text);
                  tickDmgCount += ratio * (enemyStats.hp + enemyItemStats.hp);
                };
                if (tickDmgCount !== 0) {
                  var text = document.createTextNode(Math.round(tickDmgCount));
                  abilityDiv.appendChild(text);
                }
                var tickMaxHPCounter = 0;
                if (tickDamage["enemyMaxHPRatio"] && !enemyStats.hp) {
                  var ratio = tickDamage["enemyMaxHPRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = tickDamage["enemyMaxHPRatio"][rankIndex]
                  };
                  tickMaxHPCounter += ratio;
                };
                if (tickDamage["enemyMaxHPRatioByLvl"] && !enemyStats.hp) {
                  tickMaxHPCounter += tickDamage["enemyMaxHPRatioByLvl"][champLevel];
                }
                if (tickDamage["enemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                  var ratio = tickDamage["enemyMaxHPRatioPer100AP"];
                  if (typeof ratio !== 'number') {
                    ratio = tickDamage["enemyMaxHPRatioPer100AP"][rankIndex]
                  };
                  tickMaxHPCounter += ratio * (itemStats.ap + selectedStats.ap)/100;
                };
                if (tickMaxHPCounter !== 0) {
                  var text = document.createTextNode(' (+' + tickMaxHPCounter + ' Enemy Max HP Ratio)');
                  abilityDiv.appendChild(text);
                }
                if (tickDamage["enemyCurrentHPRatio"] && !enemyStats.hp) {
                  var ratio = damage["enemyCurrentHPRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = damage["enemyCurrentHPRatio"][rankIndex]
                  }
                  var text = document.createTextNode(' (+' + ratio + ' Enemy Current HP Ratio)');
                  abilityDiv.appendChild(text);
                };
                if (tickDamage["interval"] && tickDamage["ticks"] && tickDamage["system"] !== "minMax") {
                  var intervalText = document.createTextNode(' per ' + tickDamage["interval"] + ' sec, for ' + 
                   multiplyByTicksRounded2(tickDamage["interval"]) + ' seconds.')
                  abilityDiv.appendChild(intervalText)
                };
                if (tickDamage["ticks"] && tickDamage["duration"] && tickDamage["system"] !== "minMax") {
                  var intervalText = document.createTextNode(' per tick, ' + ticks + ' times over ' 
                    + tickDamage["duration"] + ' seconds.');
                  abilityDiv.appendChild(intervalText);
                }
                if (tickDamage["critDmg"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var critDmgU = document.createElement('u');
                  critDmgU.innerText = 'Crit Damage'
                  abilityDiv.appendChild(critDmgU);
                  var critText = document.createTextNode(': ' + Math.round(tickDamage["critDmg"] * tickDmgCount));
                  abilityDiv.appendChild(critText);
                  if (tickDamage["critDmgWithIE"]) {
                    var IEText = document.createTextNode(' (' + Math.round(tickDamage["critDmgWithIE"] 
                    * tickDmgCount) + ' with Infinity Edge)');
                    abilityDiv.appendChild(IEText);
                  }
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
                    minTickDmgCount += tickDamage["minDmg"][rankIndex]
                  };
                  if (tickDamage["minDmgByLvl"]) {
                    minTickDmgCount += tickDamage["minDmgByLvl"][rankIndex]
                  };
                  if (tickDamage["minAPRatio"]) {
                    var ratio = tickDamage["minAPRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = tickDamage["minAPRatio"][rankIndex]
                    };
                    minTickDmgCount += ratio * (selectedStats.ap + itemStats.ap);
                  };
                  if (tickDamage["minADRatio"]) {
                    var ratio = tickDamage["minADRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = tickDamage["minADRatio"][rankIndex]
                    };
                    minTickDmgCount += ratio * (itemStats.ad + statsPath["baseDamage"] 
                    + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  }
                  if (tickDamage["minBonusADRatio"]) {
                    var ratio = tickDamage["minADRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = tickDamage["minADRatio"][rankIndex]
                    };
                    minTickDmgCount += ratio * (itemStats.ad 
                      + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  }
                  if (minTickDmgCount !== 0) {
                    var text = document.createTextNode(' - ' + Math.round(minTickDmgCount));
                    abilityDiv.appendChild(text);
                  }
                  if (tickDamage["interval"] && tickDamage["ticks"]) {
                    var intervalText = document.createTextNode(' per ' + tickDamage["interval"] + ' sec, for ' + 
                      multiplyByTicksRounded2(tickDamage["interval"]) + ' seconds.')
                    abilityDiv.appendChild(intervalText)
                  }
                  if (tickDamage["ticks"] && tickDamage["duration"] && !tickDamage["ASForBonusTick"]) {
                    var intervalText = document.createTextNode(' per tick, ' + ticks + ' times over ' 
                      + tickDamage["duration"] + ' seconds.');
                    abilityDiv.appendChild(intervalText);
                  }
                  if (tickDamage["ASForBonusTick"]) {
                    bonusTicks += Math.floor((itemStats.as + statsPath["attackSpeedPerLevel"] * champLevel 
                    * (0.7025 + 0.0175 * champLevel)) / tickDamage["ASForBonusTick"])
                    var intervalText = document.createTextNode(' per tick, ' + (ticks + 
                    bonusTicks) + ' times over ' + tickDamage["duration"] + ' seconds.');
                    abilityDiv.appendChild(intervalText);
                  }
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var maxDmgU = document.createElement('u')
                  maxDmgU.innerText = 'Max'
                  abilityDiv.appendChild(maxDmgU)
                  if (tickDamage["maxDmg"]) {
                    maxTickDmgCount += tickDamage["maxDmg"][rankIndex]
                  };
                  if (tickDamage["maxDmgByLvl"]) {
                    maxTickDmgCount += tickDamage["maxDmgByLvl"][rankIndex]
                  };
                  if (tickDamage["maxAPRatio"]) {
                    var ratio = tickDamage["maxAPRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = tickDamage["maxAPRatio"][rankIndex]
                    };
                    maxTickDmgCount += ratio * (selectedStats.ap + itemStats.ap);
                  };
                  if (tickDamage["maxADRatio"]) {
                    var ratio = tickDamage["maxADRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = tickDamage["maxADRatio"][rankIndex]
                    };
                    maxTickDmgCount += ratio * (itemStats.ad + statsPath["baseDamage"] 
                    + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  }
                  if (tickDamage["maxBonusADRatio"]) {
                    var ratio = tickDamage["maxADRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = tickDamage["maxADRatio"][rankIndex]
                    };
                    maxTickDmgCount += ratio * (itemStats.ad 
                      + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  }
                  if (maxTickDmgCount !== 0) {
                    var text = document.createTextNode(' - ' + Math.round(maxTickDmgCount));
                    abilityDiv.appendChild(text);
                  }
                  if (tickDamage["interval"] && tickDamage["ticks"]) {
                    var intervalText = document.createTextNode(' per ' + tickDamage["interval"] + ' sec, for ' + 
                      multiplyByTicksRounded2(tickDamage["interval"]) + ' seconds.')
                    abilityDiv.appendChild(intervalText)
                  }
                  if (tickDamage["ticks"] && tickDamage["duration"] && !tickDamage["ASForBonusTick"]) {
                    var intervalText = document.createTextNode(' per tick, ' + ticks + ' times over ' 
                      + tickDamage["duration"] + ' seconds.');
                    abilityDiv.appendChild(intervalText);
                  }
                  if (tickDamage["ASForBonusTick"]) {
                    var intervalText = document.createTextNode(' per tick, ' + (ticks + 
                    bonusTicks) + ' times over ' + tickDamage["duration"] + ' seconds.');
                    abilityDiv.appendChild(intervalText);
                  }
                };

                if (tickDamage["system"] === 'min') {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var minDmgU = document.createElement('u')
                  minDmgU.innerText = 'Min'
                  abilityDiv.appendChild(minDmgU)
                  var minDmgText = document.createTextNode(" - " + tickDamage["minDmg"][rankIndex])
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
            
                  if (tickDmgCount !== 0) {
                    var text = document.createTextNode(Math.round(tickDmgCount * ticks));
                    abilityDiv.appendChild(text);
                  }
                  var maxHPRatioTotal = 0;
                  if (tickDamage["enemyMaxHPRatio"] && !enemyStats.hp) {
                    var ratio = tickDamage["enemyMaxHPRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = tickDamage["enemyMaxHPRatio"][rankIndex]
                    };
                    maxHPRatioTotal += multiplyByTicksRounded2(ratio);
                  };
                  if (tickDamage["enemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                    var ratio = tickDamage["enemyMaxHPRatioPer100AP"];
                    if (typeof ratio !== 'number') {
                      ratio = tickDamage["enemyMaxHPRatioPer100AP"][rankIndex]
                    };
                    maxHPRatioTotal += multiplyByTicksRounded2(ratio * (selectedStats.ap + itemStats.ap) / 100);
                  };
                  if (maxHPRatioTotal !== 0) {
                    var text = document.createTextNode(' (+' + maxHPRatioTotal + ' Enemy Max HP Ratio)');
                    abilityDiv.appendChild(text);
                  };
                  if (tickDamage["enemyCurrentHPRatio"] && !enemyStats.hp) {
                    var ratio = tickDamage["enemyCurrentHPRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = tickDamage["enemyCurrentHPRatio"][rankIndex]
                    };
                    var text = document.createTextNode(' (+' + multiplyByTicksRounded2(ratio)
                    + ' Enemy Current HP Ratio)');
                    abilityDiv.appendChild(text);
                  };

                  if (tickDamage["system"] === 'min') {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var minDmgU = document.createElement('u')
                    minDmgU.innerText = 'Min'
                    abilityDiv.appendChild(minDmgU)
                    var text = document.createTextNode(" - " + multiplyByTicks(tickDamage["minDmg"][rankIndex]));
                    abilityDiv.appendChild(text);
                  }

                  if (tickDamage["system"] === "minMax" ) {
                    var minDmgU = document.createElement('u')
                    minDmgU.innerText = 'Min'
                    abilityDiv.appendChild(minDmgU)
                    if (minTickDmgCount !== 0) {
                      var text = document.createTextNode(' - ' + Math.round(minTickDmgCount * ticks));
                      abilityDiv.appendChild(text);
                    }
                    var br = document.createElement("br");
                    abilityDiv.appendChild(br);
                    var maxDmgU = document.createElement('u')
                    maxDmgU.innerText = 'Max'
                    abilityDiv.appendChild(maxDmgU)
                    if (maxTickDmgCount !== 0) {
                      var text = document.createTextNode(' - ' + Math.round(maxTickDmgCount * ticks));
                      abilityDiv.appendChild(text);
                    }
                  }
                };
                if (tickDamage["interval"] && !tickDamage["ticks"]) {
                  var intervalText = document.createTextNode(' per ' + tickDamage["interval"] + ' sec.')
                  abilityDiv.appendChild(intervalText)
                }
                
                if (tickDamage["part1"]) {
                  var part1DmgCount = 0;
                  var part2DmgCount = 0;
                  var part1U = document.createElement('u');
                  part1U.innerText = 'Part 1';
                  abilityDiv.appendChild(part1U);
                  if (tickDamage["part1"]["dmg"]) {
                    part1DmgCount += tickDamage["part1"]["dmg"][rankIndex];
                  };
                  if (tickDamage["part1"]["APRatio"]) {
                    part1DmgCount += tickDamage["part1"]["APRatio"] * (selectedStats.ap + itemStats.ap);
                  };
                  var text = document.createTextNode(': ' + Math.round(part1DmgCount));
                  abilityDiv.appendChild(text);
                  if (tickDamage["part1"]["interval"] && tickDamage["part1"]["ticks"]) {
                    var intervalText = document.createTextNode(' per ' + tickDamage["part1"]["interval"] + ' sec, for ' + 
                      tickDamage["part1"]["interval"] * tickDamage["part1"]["ticks"] + ' seconds.')
                    abilityDiv.appendChild(intervalText)
                  }
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                    var ratio = tickDamage["part2"]["enemyMaxHPRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = tickDamage["part2"]["enemyMaxHPRatio"][rankIndex]
                    }
                    part2DmgCount += ratio * (enemyStats.hp + enemyItemStats.hp);
                  }
                  if (tickDamage["part2"]["enemyMaxHPRatioPer100AP"] && enemyStats.hp) {
                    var ratio = tickDamage["part2"]["enemyMaxHPRatioPer100AP"];
                    if (typeof ratio !== 'number') {
                      ratio = tickDamage["part2"]["enemyMaxHPRatioPer100AP"][rankIndex]
                    }
                    part2DmgCount += ratio * (enemyStats.hp + enemyItemStats.hp) * (selectedStats.ap + itemStats.ap) / 100;
                  }
                  if (part2DmgCount !== 0) {
                    var totalText2 = document.createTextNode(': ' + Math.round(part2DmgCount));
                    abilityDiv.appendChild(totalText2);
                  }
                  var part2MaxHPCount = 0;
                  if (tickDamage["part2"]["enemyMaxHPRatio"] && !enemyStats.hp) {
                    var ratio = tickDamage["part2"]["enemyMaxHPRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = tickDamage["part2"]["enemyMaxHPRatio"][rankIndex]
                    }
                    part2DmgCount += ratio
                  }
                  if (tickDamage["part2"]["enemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                    var ratio = tickDamage["part2"]["enemyMaxHPRatioPer100AP"];
                    if (typeof ratio !== 'number') {
                      ratio = tickDamage["part2"]["enemyMaxHPRatioPer100AP"][rankIndex]
                    }
                    part2DmgCount += ratio
                  }
                  if (part2MaxHPCount !== 0) {
                    var text2 = document.createTextNode(': (' + part2MaxHPCount + ' Enemy Max HP Ratio)');
                    abilityDiv.appendChild(text2);
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
                  if (part2DmgCount !== 0) {
                    var totalText2 = document.createTextNode(': ' + Math.round(part2DmgCount * tickDamage["part2"]["ticks"]));
                    abilityDiv.appendChild(totalText2);
                  };
                  if (part2MaxHPCount !== 0) {
                    var text2 = document.createTextNode(': (' + part2MaxHPCount * tickDamage["part2"]["ticks"] 
                    + ' Enemy Max HP Ratio)');
                    abilityDiv.appendChild(text2);
                  }
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["specialDelivery"]) {

                var tickDamage = champLeftFile[ability]["specialDelivery"]["tickDamage"]
                var specialDeliveryBold = document.createElement('b')
                specialDeliveryBold.innerText = "Special Delivery - " + dmgType + ' Damage Over Time: '
                abilityDiv.appendChild(specialDeliveryBold);

                var deliveryCount = 0;
                deliveryCount += tickDamage["dmgByLvl"][champLevel]
                deliveryCount += tickDamage["bonusADRatio"] * (itemStats.ad 
                  + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                deliveryCount += tickDamage["APRatio"] * (selectedStats.ap + itemStats.ap);

                var intervalText = document.createTextNode(deliveryCount + ' per ' + tickDamage["interval"] + ' sec, for ' + 
                multiplyByTicksRounded2(tickDamage["interval"])   + ' seconds.')
                abilityDiv.appendChild(intervalText)
                var br = document.createElement("br");
                abilityDiv.appendChild(br);
                var totalDmgU = document.createElement('u')
                totalDmgU.innerText = 'Total Damage'
                abilityDiv.appendChild(totalDmgU)
                var text = document.createTextNode(': ' + multiplyByTicks(deliveryCount));
                abilityDiv.appendChild(text)
                doubleBreak();
              }

              if (champLeftFile[ability]["selfHeal"]) {
                var healPath = champLeftFile[ability]["selfHeal"]
                var healBold = document.createElement('b');
                healBold.innerText = 'Self Heal: '
                abilityDiv.appendChild(healBold)
                var healCounter = 0;
                if (healPath["healByLvl"]) {
                  healCounter += healPath["healByLvl"][champLevel] 
                };
                if (healCounter !== 0) {
                  var text = document.createTextNode(Math.round(healCounter));
                  abilityDiv.appendChild(text);
                }
              }

              if (champLeftFile[ability]["allyHeal"]) {
                var healPath = champLeftFile[ability]["allyHeal"]
                var healBold = document.createElement('b');
                healBold.innerText = 'Ally Heal: '
                abilityDiv.appendChild(healBold)
                var healCounter = 0;
                if (healPath["healByLvl"]) {
                  healCounter += healPath["healByLvl"][champLevel]
                };
                if (healCounter !== 0) {
                  var text = document.createTextNode(Math.round(healCounter));
                  abilityDiv.appendChild(text);
                }
              };
              
              if (champLeftFile[ability]["heal"]) {
                var healPath = champLeftFile[ability]["heal"]
                var healBold = document.createElement('b');
                healBold.innerText = 'Heal: '
                abilityDiv.appendChild(healBold)
                var healCounter = 0;
                if (healPath["heal"]) {
                  healCounter += healPath["heal"][rankIndex]
                }
                if (healPath["healByLvl"]) {
                  healCounter += healPath["healByLvl"][champLevel]
                };
                if (healPath["maxHPRatioByLvl"]) {
                  healCounter += healPath["maxHPRatioByLvl"][champLevel] * (itemStats.hp + statsPath["baseHP"] 
                  + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                }
                if (healPath["APRatio"]) {
                  var ratio = healPath["APRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = healPath["APRatio"][rankIndex]
                  };
                  healCounter += ratio * (itemStats.ap + selectedStats.ap);
                };
                if (healPath["ADRatio"]) {
                  var ratio = healPath["ADRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = healPath["ADRatio"][rankIndex]
                  };
                  healCounter += ratio * (itemStats.ad + statsPath["baseDamage"] 
                  + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))
                };
                if (healPath["bonusADRatio"]) {
                  var ratio = healPath["bonusADRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = healPath["bonusADRatio"][rankIndex]
                  };
                  healCounter += ratio * (itemStats.ad 
                  + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))
                };
                if (healPath["bonusHPRatio"]) {
                  var ratio = healPath["bonusHPRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = healPath["bonusHPRatio"][rankIndex]
                  };
                  healCounter += ratio * (itemStats.hp 
                  + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))
                };
                if (healPath["maxHPRatio"]) {
                  var ratio = healPath["maxHPRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = healPath["maxHPRatio"][rankIndex]
                  };
                  healCounter += ratio * (itemStats.hp + statsPath["baseHP"]
                  + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))
                };
                if (healPath["enemyMaxHPRatio"] && enemyStats.hp) {
                  var ratio = healPath["enemyMaxHPRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = healPath["enemyMaxHPRatio"][rankIndex]
                  }
                  healCounter += ratio * (enemyStats.hp + enemyItemStats.hp);
                };
                if (healPath["enemyMaxHPRatioPer100AP"] && enemyStats.hp) {
                  var ratio = healPath["enemyMaxHPRatioPer100AP"]
                  if (typeof ratio !== 'number') {
                    ratio = healPath["enemyMaxHPRatioPer100AP"][rankIndex]
                  }
                  healCounter += ratio * (enemyStats.hp + enemyItemStats.hp) * (itemStats.ap + selectedStats.ap) / 100;
                }
                if (healPath["enemyMaxHPRatioPer100BonusAD"] && enemyStats.hp) {
                  var ratio = healPath["enemyMaxHPRatioPer100BonusAD"]
                  if (typeof ratio !== 'number') {
                    ratio = healPath["enemyMaxHPRatioPer100BonusAD"][rankIndex]
                  }
                  healCounter += ratio * (enemyStats.hp + enemyItemStats.hp) * (itemStats.ad 
                    + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)) / 100;
                }
                if (healCounter !== 0) {
                  var text = document.createTextNode(Math.round(healCounter));
                  abilityDiv.appendChild(text);
                }
                var maxHPRatioCounter = 0;
                if (healPath["enemyMaxHPRatio"] && !enemyStats.hp) {
                  var ratio = healPath["enemyMaxHPRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = healPath["enemyMaxHPRatio"][rankIndex]
                  };
                  maxHPRatioCounter += ratio 
                };
                if (healPath["enemyMaxHPRatioPer100AP"] && !enemyStats.hp) {
                  var ratio = healPath["enemyMaxHPRatioPer100AP"];
                  if (typeof ratio !== 'number') {
                    ratio = healPath["enemyMaxHPRatioPer100AP"][rankIndex]
                  };
                  maxHPRatioCounter += ratio * (selectedStats.ap + itemStats.ap) / 100;
                };
                if (maxHPRatioCounter !== 0) {
                  var text = document.createTextNode(' (+' + maxHPRatioCounter + ' Enemy Max HP Ratio)');
                  abilityDiv.appendChild(text);
                }
                if (healPath["missingHPRatio"]) {
                  var ratio = healPath["missingHPRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = healPath["missingHPRatio"][rankIndex]
                  };
                  var text = document.createTextNode(" (+" + ratio + " Missing HP Ratio)");
                  abilityDiv.appendChild(text);
                }
                if (healPath["preMitigation"]) {
                  var preText = document.createTextNode(', pre-mitigation.');
                  abilityDiv.appendChild(preText);
                }
                if (healPath["lifeStealRatio"]) {
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Damage Ratio';
                  abilityDiv.appendChild(dmgRatioU);
                  var text = document.createTextNode(' - ' + healPath["lifeStealRatio"] * itemStats.lifeSteal);
                  abilityDiv.appendChild(text);
                }
                if (healPath["dmgRatio"]) {
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Damage Ratio';
                  abilityDiv.appendChild(dmgRatioU);
                  var ratio = healPath["dmgRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = healPath["dmgRatio"][rankIndex]
                  }
                  var text = document.createTextNode(' - ' + ratio);
                  abilityDiv.appendChild(text);
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
                  var ratio = healPath["dmgTakenRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = healPath["dmgTakenRatio"][rankIndex]
                  }
                  var text = document.createTextNode(' - ' + ratio);
                  abilityDiv.appendChild(text);
                }
                if (healPath["increasePer1%HPLostLast4Sec"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var text = document.createTextNode('Increase by Ratio of ' +  healPath["increasePer1%HPLostLast4Sec"]
                   + ' per 1% HP lost in last 4 seconds.');
                  abilityDiv.appendChild(text);
                }
                if (healPath["system"] === "max") {
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max';
                  abilityDiv.appendChild(maxU);
                  if (healPath["maxHealByLvl"]) {
                    var text = document.createTextNode(': ' + healPath["maxHealByLvl"][champLevel])
                    abilityDiv.appendChild(text);
                  }
                }
                if (healPath["system"] === '2Part') {
                  var part1U = document.createElement('u');
                  part1U.innerText = 'Part 1';
                  abilityDiv.appendChild(part1U);
                  var p1HealCount = 0;
                  var p2HealCount = 0;
                  if (healPath["part1"]["heal"]) {
                    p1HealCount += healPath["part1"]["heal"][rankIndex]
                  };
                  if (healPath["part1"]["APRatio"]) {
                    var ratio = healPath["part1"]["APRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = healPath["part1"]["APRatio"][rankIndex]
                    };
                    p1HealCount += ratio * (selectedStats.ap + itemStats.ap);
                  };
                  if (p1HealCount !== 0) {
                    var text = document.createTextNode(': ' + Math.round(p1HealCount));
                    abilityDiv.appendChild(text);
                  }
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var part2U = document.createElement('u');
                  part2U.innerText = 'Part 2';
                  abilityDiv.appendChild(part2U);
                  if (healPath["part2"]["part1RatioFormula"]) {
                    var text = document.createTextNode(': ' + Math.round(p1HealCount * ((1 + ((0.00075 * (selectedStats.ap 
                      + itemStats.ap)) - 0.15))**2)));
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
                    minHealCounter += healPath["minHeal"][rankIndex]
                  }
                  if (healPath["minHealByLvl"]) {
                    minHealCounter += healPath["minHealByLvl"][champLevel]
                  }
                  if (healPath["minAPRatio"]) {
                    var ratio = healPath["minAPRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = healPath["minAPRatio"][rankIndex]
                    };
                    minHealCounter += ratio * (selectedStats.ap + itemStats.ap);
                  }
                  if (healPath["minADRatio"]) {
                    var ratio = healPath["minADRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = healPath["minADRatio"][rankIndex]
                    };
                    minHealCounter += ratio * (itemStats.ad + statsPath["baseDamage"] 
                    + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  }
                  if (healPath["minBonusADRatio"]) {
                    var ratio = healPath["minBonusADRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = healPath["minBonusADRatio"][rankIndex]
                    };
                    minHealCounter += ratio * (itemStats.ad 
                    + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  }
                  if (healPath["minBonusHPRatio"]) {
                    var ratio = healPath["minBonusHPRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = healPath["minBonusHPRatio"][rankIndex]
                    };
                    minHealCounter += ratio * (itemStats.hp 
                    + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  }
                  if (healPath["minMaxHPRatio"]) {
                    var ratio = healPath["minMaxHPRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = healPath["minMaxHPRatio"][rankIndex]
                    };
                    minHealCounter += ratio * (itemStats.hp + statsPath["baseHP"]
                    + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  }
                  if (minHealCounter !== 0) {
                    var text = document.createTextNode(' - ' + Math.round(minHealCounter));
                    abilityDiv.appendChild(text);
                  }
                  if (healPath["minMissingHPRatio"]) {
                    var ratio = healPath["minMissingHPRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = healPath["minMissingHPRatio"][rankIndex]
                    };
                    var text = document.createTextNode(" (+" + ratio + " Missing HP Ratio)")
                    abilityDiv.appendChild(text)
                  }

                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max'
                  abilityDiv.appendChild(maxU)

                  if (healPath["maxHeal"]) {
                    maxHealCounter += healPath["maxHeal"][rankIndex];
                  };
                  if (healPath["maxHealByLvl"]) {
                    maxHealCounter += healPath["maxHealByLvl"][champLevel]
                  };
                  if (healPath["maxAPRatio"]) {
                    var ratio = healPath["maxAPRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = healPath["maxAPRatio"][rankIndex]
                    };
                    maxHealCounter += ratio * (itemStats.ap + selectedStats.ap);
                  }
                  if (healPath["maxADRatio"]) {
                    var ratio = healPath["maxADRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = healPath["maxADRatio"][rankIndex]
                    };
                    maxHealCounter += ratio * (itemStats.ad + statsPath["baseDamage"] 
                    + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  }
                  if (healPath["maxBonusADRatio"]) {
                    var ratio = healPath["maxBonusADRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = healPath["maxBonusADRatio"][rankIndex]
                    };
                    maxHealCounter += ratio * (itemStats.ad 
                    + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  }
                  if (healPath["maxBonusHPRatio"]) {
                    var ratio = healPath["maxBonusHPRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = healPath["maxBonusHPRatio"][rankIndex]
                    };
                    maxHealCounter += ratio * (itemStats.hp 
                    + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  }
                  if (healPath["maxMaxHPRatio"]) {
                    var ratio = healPath["maxMaxHPRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = healPath["maxMaxHPRatio"][rankIndex]
                    };
                    maxHealCounter += ratio * (itemStats.hp + statsPath["baseHP"]
                    + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  }
                  if (maxHealCounter !== 0) {
                    var text = document.createTextNode(' - ' + Math.round(maxHealCounter));
                    abilityDiv.appendChild(text);
                  }
                  if (healPath["maxMissingHPRatio"]) {
                    var ratio = healPath["maxMissingHPRatio"]
                    if (typeof ratio !== 'number') {
                      ratio = healPath["maxMissingHPRatio"][rankIndex]
                    }
                    var text = document.createTextNode(" (+" + ratio + " Missing HP Ratio)")
                    abilityDiv.appendChild(text)
                  }
                }
                if (healPath["interval"]) {
                  var intervalText = document.createTextNode(' per ' + healPath["interval"] + ' sec')
                  abilityDiv.appendChild(intervalText);
                  if (healPath["duration"]) {
                    var tickText = document.createTextNode(', for ' + healPath["duration"] + ' seconds.');
                    abilityDiv.appendChild(tickText);
                  }
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  if (healPath["system"] === 'minMax') {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                  }
                  var totalU = document.createElement('u');
                  totalU.innerText = 'Total';
                  abilityDiv.appendChild(totalU);
                  var totalHealCounter = 0;
                  if (healPath["heal"]) {
                    totalHealCounter += healPath["heal"][rankIndex] * healPath["ticks"];
                  };
                  if (healPath["APRatio"]) {
                    var ratio = healPath['APRatio'];
                    if (typeof ratio !== 'number') {
                      ratio = healPath['APRatio'][rankIndex]
                    };
                    totalHealCounter += ratio * healPath["ticks"] * (itemStats.ap + selectedStats.ap);
                  };
                  if (totalHealCounter !== 0) {
                    var text = document.createTextNode(': ' + Math.round(totalHealCounter));
                    abilityDiv.appendChild(text);
                  };
                  if (healPath["system"] === 'minMax') {
                    var totalMinHeal = 0;
                    var totalMaxHeal = 0;
                    if (healPath["minHeal"]) {
                      totalMinHeal += healPath["minHeal"][rankIndex] * healPath["ticks"]
                    };
                    if (healPath["minAPRatio"]) {
                      var ratio = healPath['minAPRatio'];
                      if (typeof ratio !== 'number') {
                        ratio = healPath['minAPRatio'][rankIndex]
                      };
                      totalMinHeal += ratio * healPath["ticks"] * (itemStats.ap + selectedStats.ap);
                    }
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    if (healPath["maxHeal"]) {
                      totalMaxHeal += healPath["maxHeal"][rankIndex] * healPath["ticks"]
                    }
                    if (healPath["maxAPRatio"]) {
                      var ratio = healPath['maxAPRatio'];
                      if (typeof ratio !== 'number') {
                        ratio = healPath['maxAPRatio'][rankIndex]
                      };
                      totalMaxHeal += ratio * healPath["ticks"] * (itemStats.ap + selectedStats.ap);
                    }
                    var text = document.createTextNode(': Min - ' + Math.round(totalMinHeal)
                    + ', Max - ' + Math.round(totalMaxHeal));
                    abilityDiv.appendChild(text);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                      empMinHeal += empPath["minHeal"][rankIndex];
                    };
                    if (empPath["minBonusADRatio"]) {
                      var ratio = empPath["minBonusADRatio"];
                      if (typeof ratio !== 'number') {
                        ratio = empPath["minBonusADRatio"][rankIndex]
                      }
                      empMinHeal += ratio * (itemStats.ad 
                        + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                    }
                    var minValue = document.createTextNode(' - ' + Math.round(empMinHeal));
                    abilityDiv.appendChild(minValue);
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var maxU = document.createElement('u');
                    maxU.innerText = 'Max';
                    abilityDiv.appendChild(maxU);
                    if (empPath["maxHeal"]) {
                      empMaxHeal += empPath["maxHeal"][rankIndex]
                    };
                    var maxValue = document.createTextNode(' - ' + Math.round(empMaxHeal));
                    abilityDiv.appendChild(maxValue);
                  }
                }
                if (healPath["empowerBonus"]) {
                  var empPath = healPath["empowerBonus"];
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                    empMissHPCounter += empPath["missingHPRatioPer100AP"] * (itemStats.ap + selectedStats.ap) / 100
                  };
                  if (empMissHPCounter !== 0) {
                    var text = document.createTextNode(' (+' + empMissHPCounter + ' Enemy Missing HP Ratio)');
                    abilityDiv.appendChild(text);
                  };
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["shield"]) {
                var shieldPath = champLeftFile[ability]["shield"]
                var shieldBold = document.createElement('b');
                if (shieldPath["type"] !== 'all') {
                  shieldBold.innerText = shieldPath["type"] + ' Shield: '
                } else {
                  shieldBold.innerText = ' Shield: '
                }
                abilityDiv.appendChild(shieldBold)
                var shieldCounter = 0;
                if (shieldPath["shield"]) {
                  shieldCounter += shieldPath["shield"][rankIndex];
                };
                if (shieldPath["shieldByLvl"]) {
                  shieldCounter += shieldPath["shieldByLvl"][champLevel]
                };
                if (shieldPath["APRatio"]) {
                  var ratio = shieldPath["APRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = shieldPath["APRatio"][rankIndex];
                  };
                  shieldCounter += ratio * (selectedStats.ap + itemStats.ap);
                };
                if (shieldPath["ADRatio"]) {
                  var ratio = shieldPath["ADRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = shieldPath["ADRatio"][rankIndex];
                  };
                  shieldCounter += ratio * (itemStats.ad + statsPath["baseDamage"]
                    + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                };
                if (shieldPath["bonusADRatio"]) {
                  var ratio = shieldPath["bonusADRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = shieldPath["bonusADRatio"][rankIndex];
                  };
                  shieldCounter += ratio * (itemStats.ad 
                    + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                };
                if (shieldPath["bonusHPRatio"]) {
                  var ratio = shieldPath["bonusHPRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = shieldPath["bonusHPRatio"][rankIndex];
                  };
                  shieldCounter += ratio * (itemStats.hp 
                    + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                };
                if (shieldPath["maxHPRatio"]) {
                  var ratio = shieldPath["maxHPRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = shieldPath["maxHPRatio"][rankIndex];
                  };
                  shieldCounter += ratio * (itemStats.hp + statsPath["baseHP"]
                    + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                };
                if (shieldPath["maxHPRatioByLvl"]) {
                  shieldCounter += shieldPath["maxHPRatioByLvl"][champLevel] * (itemStats.hp + statsPath["baseHP"]
                  + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                }
                if (shieldPath["maxManaRatio"]) {
                  var ratio = shieldPath["maxManaRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = shieldPath["maxManaRatio"][rankIndex];
                  };
                  shieldCounter += ratio * (itemStats.mana + statsPath["mana"]["base"]
                    + statsPath["mana"]["manaPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                };
                if (shieldCounter !== 0) {
                  var text = document.createTextNode(Math.round(shieldCounter));
                  abilityDiv.appendChild(text);
                }
                if (shieldPath["maxMaxHPRatio"]) {
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max'
                  abilityDiv.appendChild(maxU);
                  var text = document.createTextNode(' - ' + Math.round(shieldPath["maxMaxHPRatio"] * (itemStats.hp 
                    + statsPath["baseHP"] + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))));
                  abilityDiv.appendChild(text);
                }
                if (shieldPath["shieldPerStack"]) {
                  var stackText = document.createTextNode(" (+" + shieldPath["shieldPerStack"] + " per Stack)")
                  abilityDiv.appendChild(stackText)
                }
                if (shieldPath["maxHPRatioPerStack"]) {
                  var text = document.createTextNode(" (+" + Math.round(shieldPath["maxHPRatioPerStack"] * 
                  (itemStats.hp + statsPath["baseHP"] + statsPath["hpPerLevel"] * champLevel * 
                  (0.7025 + 0.0175 * champLevel))) + " per stack)");
                  abilityDiv.appendChild(text);
                };
                if (shieldPath["dmgTakenRatio"]) {
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Damage Taken Ratio';
                  abilityDiv.appendChild(dmgRatioU);
                  var ratio = shieldPath["dmgTakenRatio"];
                  if (typeof ratio !== 'number') {
                    ratio = shieldPath["dmgTakenRatio"][rankIndex]
                  };
                  var text = document.createTextNode(': ' + ratio);
                  abilityDiv.appendChild(text);
                };
                if (shieldPath["system"] === "minMax" ) {
                  var minU = document.createElement('u');
                  minU.innerText = 'Min';
                  abilityDiv.appendChild(minU);
                  var minShieldCounter = 0;
                  var maxShieldCounter = 0;
                  if (shieldPath["minShield"]) {
                    minShieldCounter += shieldPath["minShield"][rankIndex]
                  };
                  if (shieldPath["minShieldByLvl"]) {
                    minShieldCounter += shieldPath["minShieldByLvl"][champLevel]
                  };
                  if (shieldPath["minAPRatio"]) {
                    var ratio = shieldPath["minAPRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = shieldPath["minAPRatio"][rankIndex];
                    };
                    minShieldCounter += ratio * (selectedStats.ap + itemStats.ap);
                  }
                  if (shieldPath["minADRatio"]) {
                    var ratio = shieldPath["minADRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = shieldPath["minADRatio"][rankIndex];
                    };
                    minShieldCounter += ratio * (itemStats.ad + statsPath["baseDamage"]
                      + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  }
                  if (shieldPath["minBonusADRatio"]) {
                    var ratio = shieldPath["minBonusADRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = shieldPath["minBonusADRatio"][rankIndex];
                    };
                    minShieldCounter += ratio * (itemStats.ad 
                      + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  }
                  if (minShieldCounter !== 0) {
                    var text = document.createTextNode(' - ' + Math.round(minShieldCounter));
                    abilityDiv.appendChild(text);
                  };
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max'
                  abilityDiv.appendChild(maxU)
                  
                  if (shieldPath["maxShield"]) {
                    maxShieldCounter += shieldPath["maxShield"][rankIndex]
                  }
                  if (shieldPath["maxShieldByLvl"]) {
                    maxShieldCounter += shieldPath["maxShieldByLvl"][champLevel]
                  }
                  if (shieldPath["maxAPRatio"]) {
                    var ratio = shieldPath["maxAPRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = shieldPath["maxAPRatio"][rankIndex];
                    };
                    maxShieldCounter += ratio * (selectedStats.ap + itemStats.ap);
                  }
                  if (shieldPath["maxADRatio"]) {
                    var ratio = shieldPath["maxADRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = shieldPath["maxADRatio"][rankIndex];
                    };
                    maxShieldCounter += ratio * (itemStats.ad + statsPath["baseDamage"]
                      + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  }
                  if (shieldPath["maxBonusADRatio"]) {
                    var ratio = shieldPath["maxBonusADRatio"];
                    if (typeof ratio !== 'number') {
                      ratio = shieldPath["maxBonusADRatio"][rankIndex];
                    };
                    maxShieldCounter += ratio * (itemStats.ad 
                      + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                  }
                  if (maxShieldCounter !== 0) {
                    var text = document.createTextNode(' - ' + Math.round(maxShieldCounter));
                    abilityDiv.appendChild(text);
                  };
                }
                if (shieldPath["type"] !== 'Spell' && shieldPath["duration"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (shieldPath["duration"]) {
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration'
                  abilityDiv.appendChild(durationU)
                  var durationText = document.createTextNode(': ' + shieldPath["duration"])
                  abilityDiv.appendChild(durationText)
                }
                if (shieldPath["combatCoolDown"]) {
                  var br4 = document.createElement('br');
                  abilityDiv.appendChild(br4);
                  var combatU = document.createElement('u')
                  combatU.innerText = 'Combat Cooldown';
                  abilityDiv.appendChild(combatU)
                  var combatCD = document.createTextNode(': ' + shieldPath["combatCoolDown"])
                  abilityDiv.appendChild(combatCD)
                }
                if (shieldPath["combatCoolDownByLvl"]) {
                  var br4 = document.createElement('br');
                  abilityDiv.appendChild(br4);
                  var combatU = document.createElement('u')
                  combatU.innerText = 'Combat Cooldown';
                  abilityDiv.appendChild(combatU)
                  var text = document.createTextNode(': ' + shieldPath["combatCoolDownByLvl"][champLevel])
                  abilityDiv.appendChild(text);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["revive"]) {
                var revivePath = champLeftFile[ability]["revive"]
                var reviveBold = document.createElement('b');
                reviveBold.innerText = 'Revive: '
                abilityDiv.appendChild(reviveBold);
                var hpCounter = 0;
                if (revivePath["health"]) {
                  var healthU = document.createElement('u');
                  healthU.innerText = 'Health Restored';
                  abilityDiv.appendChild(healthU)
                  hpCounter += revivePath["health"][rankIndex]
                }
                if (revivePath["healthPerAP"]) {
                  hpCounter += revivePath["healthPerAP"] * (itemStats.ap + selectedStats.ap);
                }
                if (hpCounter !== 0) {
                  var text = document.createTextNode(': ' + Math.round(hpCounter));
                  abilityDiv.appendChild(text);
                };
                doubleBreak();
              }

              if (champLeftFile[ability]["damageRedux"]) {
                var reduxPath = champLeftFile[ability]["damageRedux"]
                var reducedDmgBold = document.createElement('b');
                if (reduxPath["type"] !== 'all') {
                  reducedDmgBold.innerText = 'Reduced ' + reduxPath["type"] + ' Damage Taken: '
                } else {
                  reducedDmgBold.innerText = 'Reduced Damage Taken: '
                }
                abilityDiv.appendChild(reducedDmgBold)
                var reduxCounter = 0;
                var ratioCounter = 0;
                if (reduxPath["reduxRatio"]) {
                  var ratio = reduxPath["reduxRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = reduxPath["reduxRatio"][rankIndex]
                  }
                  ratioCounter += ratio
                }
                if (reduxPath["dmg"]) {
                  var redux = reduxPath["dmg"];
                  if (typeof redux !== 'number') {
                    redux = reduxPath["dmg"][rankIndex]
                  };
                  reduxCounter += redux
                }
                if (reduxPath["APRatio"]) {
                  var ratio = reduxPath["APRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = reduxPath["APRatio"][rankIndex]
                  };
                  reduxCounter += ratio * (itemStats.ap + selectedStats.ap)
                }
                if (reduxPath["bonusArmorRatio"]) {
                  var ratio = reduxPath["bonusArmorRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = reduxPath["bonusArmorRatio"][rankIndex]
                  };
                  reduxCounter += ratio * (itemStats.arm 
                    + statsPath["armorPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                }
                if (reduxPath["bonusMagicResistRatio"]) {
                  var ratio = reduxPath["bonusMagicResistRatio"]
                  if (typeof ratio !== 'number') {
                    ratio = reduxPath["bonusMagicResistRatio"][rankIndex]
                  };
                  reduxCounter += ratio * (itemStats.mr 
                    + statsPath["magicResistPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel));
                }
                if (reduxCounter !== 0) {
                  var text = document.createTextNode('Reduced by ' + Math.round(reduxCounter));
                  abilityDiv.appendChild(text);
                }
                if (reduxPath['maxReduxRatio']) {
                  var text = document.createTextNode(', up to a maximum reduction ratio of ' + reduxPath["maxReduxRatio"]);
                  abilityDiv.appendChild(text);
                }
                if (reduxPath["reduxRatioPer100AP"]) {
                  ratioCounter += reduxPath["reduxRatioPer100AP"] * (itemStats.ap + selectedStats.ap)/100;
                }
                if (ratioCounter !== 0) {
                  var text = document.createTextNode('Reduced by ratio of ' + ratioCounter);
                  abilityDiv.appendChild(text);
                }
                if (reduxPath["aoeDmgReduxRatio"]) {
                  var reduxRatioText = document.createTextNode('AOE Damage reduced by ratio of ' + JSON.stringify(reduxPath["aoeDmgReduxRatio"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(reduxRatioText)
                };
                if (reduxPath["autoBlock"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var blockText = document.createTextNode('Blocks auto attacks.');
                  abilityDiv.appendChild(blockText);
                }
                if (reduxPath["duration"] || reduxPath["minDuration"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration'
                  abilityDiv.appendChild(durationU);
                }
                if (reduxPath["duration"]) {
                  var dur = reduxPath["duration"];
                  if (typeof dur !== 'number') {
                    dur = reduxPath["duration"][rankIndex]
                  };
                  var text = document.createTextNode(': ' + dur)
                  abilityDiv.appendChild(text)
                };
                if (reduxPath["minDuration"]) {
                  var durationText = document.createTextNode(': Min - ' + reduxPath["minDuration"] + ', Max - '
                  + reduxPath["maxDuration"]);
                  abilityDiv.appendChild(durationText);
                }
                if (reduxPath["calculateFrom"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var mitigationText = document.createTextNode('Applies ' + reduxPath["calculateFrom"] + '.')
                  abilityDiv.appendChild(mitigationText)
                }
                doubleBreak();
              };

              if (champLeftFile[ability]["magicDamageRedux"]) {
                var reduxPath = champLeftFile[ability]["magicDamageRedux"]
                var reducedDmgBold = document.createElement('b');
                reducedDmgBold.innerText = 'Reduced Magic Damage Taken: '
                abilityDiv.appendChild(reducedDmgBold)
                var ratioCount = 0;
                if (reduxPath["reduxRatio"]) {
                  ratioCount += reduxPath["reduxRatio"][rankIndex]
                }
                if (reduxPath["reduxRatioPer100AP"]) {
                  ratioCount += reduxPath["reduxRatioPer100AP"] * (selectedStats.ap + itemStats.ap)/100
                }
                if (reduxPath["reduxRatioPer100BonusMR"]) {
                  ratioCount += reduxPath["reduxRatioPer100BonusMR"] * (itemStats.mr 
                    + statsPath["magicResistPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))/100
                }
                if (ratioCount.toString().length > 5) {
                  ratioCount = ratioCount.toFixed(3)
                }
                var reduxRatioText = document.createTextNode('Reduced by ratio of ' + ratioCount)
                abilityDiv.appendChild(reduxRatioText)
                if (reduxPath["duration"]) {
                  var durationText = document.createTextNode(' for ' + reduxPath["duration"] + ' seconds.')
                  abilityDiv.appendChild(durationText)
                }
                var br = document.createElement("br");
                abilityDiv.appendChild(br);
              }

              if (champLeftFile[ability]["physDamageRedux"]) {
                var reduxPath = champLeftFile[ability]["physDamageRedux"]
                var reducedDmgBold = document.createElement('b');
                reducedDmgBold.innerText = 'Reduced Physical Damage Taken: '
                abilityDiv.appendChild(reducedDmgBold)
                var ratioCount = 0;
                if (reduxPath["reduxRatio"]) {
                  ratioCount += reduxPath["reduxRatio"][rankIndex]
                }
                if (reduxPath["reduxRatioPer100AP"]) {
                  ratioCount += reduxPath["reduxRatioPer100AP"] * (selectedStats.ap + itemStats.ap)/100
                }
                if (reduxPath["reduxRatioPer100BonusMR"]) {
                  ratioCount += reduxPath["reduxRatioPer100BonusMR"] * (itemStats.mr 
                    + statsPath["magicResistPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel))/100
                }
                if (ratioCount.toString().length > 5) {
                  ratioCount = ratioCount.toFixed(3)
                }
                var reduxRatioText = document.createTextNode('Reduced by ratio of ' + ratioCount)
                abilityDiv.appendChild(reduxRatioText)
                if (reduxPath["duration"]) {
                  var durationText = document.createTextNode(' for ' + reduxPath["duration"] + ' seconds.')
                  abilityDiv.appendChild(durationText)
                }
                doubleBreak();
              }

              if(champLeftFile[ability]["dmgImmune"]) {
                var immuneB = document.createElement('b');
                immuneB.innerText = 'Damage Immune Duration: '
                abilityDiv.appendChild(immuneB);
                var dur = champLeftFile[ability]["dmgImmune"];
                if (typeof dur !== 'number') {
                  dur = dur[rankIndex]
                }
                var immuneValue = document.createTextNode(dur);
                abilityDiv.appendChild(immuneValue);
                doubleBreak();
              }

              if(champLeftFile[ability]["ccImmune"]) {
                var immuneBold = document.createElement('b');
                immuneBold.innerText = 'Crowd Control Immune Duration: '
                abilityDiv.appendChild(immuneBold);
                var imm = champLeftFile[ability]["ccImmune"];
                if (typeof imm !== 'number') {
                  imm = imm[rankIndex]
                };
                var immuneValue = document.createTextNode(imm);
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
                var dur = champLeftFile[ability]["silence"]
                if (typeof dur !== 'number') {
                  dur = dur[rankIndex]
                };
                var silenceText = document.createTextNode(dur);
                abilityDiv.appendChild(silenceText);
                doubleBreak();
              }

              if (champLeftFile[ability]["blind"]) {
                var blindB = document.createElement('b');
                blindB.innerText = 'Blind Duration: '
                abilityDiv.appendChild(blindB);
                var dur = champLeftFile[ability]["blind"]
                if (typeof dur !== 'number') {
                  dur = dur[rankIndex]
                };
                var blindText = document.createTextNode(dur);
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
                var reduxPath = champLeftFile[ability]["ADRedux"]
                var reduxBold = document.createElement('b');
                reduxBold.innerText = 'Attack Damage Reduction: ';
                abilityDiv.appendChild(reduxBold);
                if (reduxPath["redux"]) {
                  var reduxText = document.createTextNode(JSON.stringify(reduxPath["redux"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(reduxText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["resistRedux"]) {
                var reduxPath = champLeftFile[ability]["resistRedux"]
                if (reduxPath["type"] === 'both') {
                  var reduxBold = document.createElement('b');
                  reduxBold.innerText = 'Armor and Magic Resist Reduction: ';
                  abilityDiv.appendChild(reduxBold);
                };
                if (reduxPath["type"] === 'magicResist') {
                  var reduxBold = document.createElement('b');
                  reduxBold.innerText = 'Magic Resist Reduction: ';
                  abilityDiv.appendChild(reduxBold);
                };
                if (reduxPath["type"] === 'armor') {
                  var reduxBold = document.createElement('b');
                  reduxBold.innerText = 'Armor Reduction: ';
                  abilityDiv.appendChild(reduxBold);
                };
                if (reduxPath["resist"]) {
                  var resistText = document.createTextNode(JSON.stringify(reduxPath["resist"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(resistText);
                }
                if (reduxPath["reduxRatio"]) {
                  var ratioU = document.createElement('u');
                  ratioU.innerText = 'Ratio';
                  abilityDiv.appendChild(ratioU);
                  var reduxRatioText = document.createTextNode(' - ' + JSON.stringify(reduxPath["reduxRatio"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(reduxRatioText);
                }
                if (reduxPath["system"] === 'minMax') {
                  var minU = document.createElement('u')
                  minU.innerText = 'Min'
                  abilityDiv.appendChild(minU);
                  if (reduxPath["minResistRedux"]) {
                    var minReduxText = document.createTextNode(' - ' + JSON.stringify(reduxPath["minResistRedux"]).replace(/,/g, ', '))
                    abilityDiv.appendChild(minReduxText)
                  };
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var maxU = document.createElement('u')
                  maxU.innerText = 'Max'
                  abilityDiv.appendChild(maxU);
                  if (reduxPath["maxResistRedux"]) {
                    var maxReduxText = document.createTextNode(' - ' + JSON.stringify(reduxPath["maxResistRedux"]).replace(/,/g, ', '))
                    abilityDiv.appendChild(maxReduxText)
                  };
                }
                if (reduxPath["duration"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration'
                  abilityDiv.appendChild(durationU);
                  var durationText = document.createTextNode(' - ' + JSON.stringify(reduxPath["duration"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(durationText);
                };
                if (reduxPath["maxDuration"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Max Duration'
                  abilityDiv.appendChild(durationU);
                  var durationText = document.createTextNode(' - ' + JSON.stringify(reduxPath["maxDuration"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(durationText);
                };
                doubleBreak();
              }

              if (champLeftFile[ability]["bonusStats"]) {
                var bonusStatsPath = champLeftFile[ability]["bonusStats"]
                var bonusStatsBold = document.createElement('b');
                bonusStatsBold.innerText = 'Bonus Stats: ';
                abilityDiv.appendChild(bonusStatsBold);
                if (bonusStatsPath["attackDamageByLvl"]) {
                  var ADByLvlU = document.createElement('u');
                  ADByLvlU.innerText = 'Attack Damage';
                  abilityDiv.appendChild(ADByLvlU);
                  var ADByLvlText = document.createTextNode(' - [' + bonusStatsPath["attackDamageByLvl"][0] + " to " + 
                  bonusStatsPath["attackDamageByLvl"][17] + "], based on lvl. Currently: " + bonusStatsPath["attackDamageByLvl"][champLevel]);
                  abilityDiv.appendChild(ADByLvlText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (bonusStatsPath["attackSpeed"]) {
                  var asRatioU = document.createElement('u');
                  asRatioU.innerText = 'Attack Speed Ratio';
                  abilityDiv.appendChild(asRatioU);
                  var asRatioText = document.createTextNode(' - (' + JSON.stringify(bonusStatsPath["attackSpeed"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(asRatioText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (bonusStatsPath["ADRatio"]) {
                  var bonusADRatioU = document.createElement('u');
                  bonusADRatioU.innerText = 'Attack Damage Ratio';
                  abilityDiv.appendChild(bonusADRatioU);
                  var bonusADRatioText = document.createTextNode(' - (' + JSON.stringify(bonusStatsPath["ADRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(bonusADRatioText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (bonusStatsPath["lifeSteal"]) {
                  var lsRatioU = document.createElement('u');
                  lsRatioU.innerText = 'Life Steal Ratio';
                  abilityDiv.appendChild(lsRatioU);
                  var lsRatioText = document.createTextNode(' - (' + JSON.stringify(bonusStatsPath["lifeSteal"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(lsRatioText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (bonusStatsPath["healingRatio"]) {
                  var healingRatioU = document.createElement('u');
                  healingRatioU.innerText = 'Increased Healing Ratio';
                  abilityDiv.appendChild(healingRatioU);
                  var healingRatioText = document.createTextNode(' - (' + JSON.stringify(bonusStatsPath["healingRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(healingRatioText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (bonusStatsPath["healingPerMissingHPRatio"]) {
                  var healingRatioU = document.createElement('u');
                  healingRatioU.innerText = 'Increased Healing';
                  abilityDiv.appendChild(healingRatioU);
                  var healingRatioText = document.createTextNode(': (' + bonusStatsPath["healingPerMissingHPRatio"]
                  + ' per Missing HP Ratio)')
                  abilityDiv.appendChild(healingRatioText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (bonusStatsPath["resist"]) {
                  var resU = document.createElement('u');
                  resU.innerText = 'Armor and Magic Resist';
                  abilityDiv.appendChild(resU);
                  var resText = document.createTextNode(': ' + JSON.stringify(bonusStatsPath["resist"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(resText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (bonusStatsPath["abilityPower"]) {
                  var apU = document.createElement('u');
                  apU.innerText = 'Ability Power';
                  abilityDiv.appendChild(apU);
                  var apText = document.createTextNode(': ' + JSON.stringify(bonusStatsPath["abilityPower"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(apText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (bonusStatsPath["healthRegen"]) {
                  var hpU = document.createElement('u');
                  hpU.innerText = 'Health Regen';
                  abilityDiv.appendChild(hpU);
                  var hpText = document.createTextNode(': ' + JSON.stringify(bonusStatsPath["healthRegen"]).replace(/,/g, ', ')
                  + ' per second');
                  abilityDiv.appendChild(hpText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (bonusStatsPath["duration"]) {
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration';
                  abilityDiv.appendChild(durationU);
                  var durationText = document.createTextNode(' - ' + JSON.stringify(bonusStatsPath["duration"]).replace(/,/g, ', ').replace(/^\[|]$/g, ''))
                  abilityDiv.appendChild(durationText);
                  if (bonusStatsPath["durationExtend"]) {
                    var durationExtendText = document.createTextNode(', extends by ' + bonusStatsPath["durationExtend"] + ' seconds.')
                    abilityDiv.appendChild(durationExtendText);
                  }
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                var br2 = document.createElement("br");
                abilityDiv.appendChild(br2);
              }

              if (champLeftFile[ability]["bonusHealth"]) {
                var bonusHealthPath = champLeftFile[ability]["bonusHealth"]
                var healthBold = document.createElement('b');
                healthBold.innerText = 'Bonus Health: '
                abilityDiv.appendChild(healthBold);
                if (bonusHealthPath["health"]) {
                  var healthText = document.createTextNode(JSON.stringify(bonusHealthPath["health"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(healthText);
                };
                if (bonusHealthPath["healthPerStack"]) {
                  var healthText = document.createTextNode(JSON.stringify(bonusHealthPath["healthPerStack"])
                  .replace(/,/g, ', ') + ' per Stack')
                  abilityDiv.appendChild(healthText);
                  doubleBreak();
                };
                if (bonusHealthPath["APRatio"]) {
                  var APText = document.createTextNode(' (+' + JSON.stringify(bonusHealthPath["APRatio"])
                  .replace(/,/g, ', ') + ' AP Ratio)');
                  abilityDiv.appendChild(APText);
                }
                if (bonusHealthPath["duration"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration';
                  abilityDiv.appendChild(durationU);
                  var durationText = document.createTextNode(' - ' + JSON.stringify(bonusHealthPath["duration"]).replace(/,/g, ', ').replace(/^\[|]$/g, ''))
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
                var regenPath = champLeftFile[ability]["healthRegen"]
                var br = document.createElement('br');
                abilityDiv.appendChild(br);
                var regenB = document.createElement('b');
                regenB.innerText = 'Health Regen: ';
                abilityDiv.appendChild(regenB);
                if (regenPath["dmgTakenRatio"]) {
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Damage Taken Ratio';
                  abilityDiv.appendChild(dmgRatioU);
                  var dmgRatioText = document.createTextNode(' - ' + JSON.stringify(regenPath["dmgTakenRatio"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(dmgRatioText);
                }
                if (regenPath["dmgTakenRatioByLvl"]) {
                  var regenByLvlText = document.createTextNode('[' + regenPath["dmgTakenRatioByLvl"][0] 
                  + " to " + regenPath["dmgTakenRatioByLvl"][17] + " Damage Taken Ratio, based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var regenByLvlText2 = document.createTextNode(': ' + regenPath["dmgTakenRatioByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(regenByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(regenByLvlText2)
                }
                if (regenPath["greyHealthRatioByLvl"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Grey Health Ratio';
                  abilityDiv.appendChild(dmgRatioU);
                  var regenByLvlText = document.createTextNode(' - [' + regenPath["greyHealthRatioByLvl"][0] 
                  + " to " + regenPath["greyHealthRatioByLvl"][17] + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var regenByLvlText2 = document.createTextNode(': ' + regenPath["greyHealthRatioByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(regenByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(regenByLvlText2)
                }
                if (regenPath["maxHPRatio"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max';
                  abilityDiv.appendChild(maxU);
                  var ratioText = document.createTextNode(' - ' + regenPath["maxHPRatio"] + ' Max HP Ratio');
                  abilityDiv.appendChild(ratioText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["bonusAttackDamage"]) {
                var bonusADPath = champLeftFile[ability]["bonusAttackDamage"]
                var bonusADBold = document.createElement('b');
                bonusADBold.innerText = 'Bonus Attack Damage: '
                abilityDiv.appendChild(bonusADBold);
                if (bonusADPath['attackDamage']) {
                  var adText = document.createTextNode(JSON.stringify(bonusADPath['attackDamage']).replace(/,/g, ', '));
                  abilityDiv.appendChild(adText);
                }
                if (bonusADPath["ADRatio"]) {
                  var ratioText = document.createTextNode(' (+' + bonusADPath["ADRatio"] + ' AD Ratio)');
                  abilityDiv.appendChild(ratioText);
                }
                if (bonusADPath["attackDamagePerAPRatio"]) {
                  var adPerAPText = document.createTextNode(' (+' + bonusADPath["attackDamagePerAPRatio"] + ' per Abiliy Power)');
                  abilityDiv.appendChild(adPerAPText);
                }
                if (bonusADPath['minAttackDamage']) {
                  var minU = document.createElement('u');
                  minU.innerText = 'Min'
                  abilityDiv.appendChild(minU)
                  var minADText = document.createTextNode(' - ' + JSON.stringify(bonusADPath['minAttackDamage']).replace(/,/g, ', '))
                  abilityDiv.appendChild(minADText);
                };
                if (bonusADPath['maxAttackDamage']) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max'
                  abilityDiv.appendChild(maxU)
                  var maxADText = document.createTextNode(' - ' + JSON.stringify(bonusADPath['maxAttackDamage']).replace(/,/g, ', '))
                  abilityDiv.appendChild(maxADText);
                };
                if (bonusADPath["duration"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var durU = document.createElement('u');
                  durU.innerText = 'Duration'
                  abilityDiv.appendChild(durU)
                  var durText = document.createTextNode(': ' + bonusADPath['duration'])
                  abilityDiv.appendChild(durText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["bonusHPRegen"]) {
                var regenPath = champLeftFile[ability]["bonusHPRegen"];
                var regenBold = document.createElement('b');
                regenBold.innerText = 'Bonus Health Regen: ';
                abilityDiv.appendChild(regenBold);
                if (regenPath["HPRegenPerSecondByLvl"]) {
                  var regenByLvlText = document.createTextNode(' - [' + regenPath["HPRegenPerSecondByLvl"][0] + " to " + 
                  regenPath["HPRegenPerSecondByLvl"][17] + "] per second, based on lvl. Currently: " + regenPath["HPRegenPerSecondByLvl"][champLevel]);
                  abilityDiv.appendChild(regenByLvlText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["bonusAdaptiveForce"]) {
                var forcePath = champLeftFile[ability]["bonusAdaptiveForce"]
                var forceB = document.createElement('b');
                forceB.innerText = 'Self Bonus Adaptive Force: ';
                abilityDiv.appendChild(forceB);
                if (forcePath["adaptiveForce"]) {
                  var forceText = document.createTextNode(JSON.stringify(forcePath["adaptiveForce"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(forceText);
                }
                if (forcePath["allyBonusADRatio"]) {
                  var forceText = document.createTextNode(' (+' + JSON.stringify(forcePath["allyBonusADRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Ally Bonus AD Ratio');
                  abilityDiv.appendChild(forceText);
                }
                if (forcePath["allyAPRatio"]) {
                  var forceText = document.createTextNode(' OR +' + JSON.stringify(forcePath["allyAPRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Ally AP Ratio)');
                  abilityDiv.appendChild(forceText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["allyBonusAdaptiveForce"]) {
                var forcePath = champLeftFile[ability]["allyBonusAdaptiveForce"]
                var forceB = document.createElement('b');
                forceB.innerText = 'Ally Bonus Adaptive Force: ';
                abilityDiv.appendChild(forceB);
                if (forcePath["adaptiveAD"]) {
                  var forceText = document.createTextNode('[' + JSON.stringify(forcePath["adaptiveAD"]).replace(/,/g, ', ')
                  .replace(/^\[|]$/g, '') + ' Attack Damage]');
                  abilityDiv.appendChild(forceText);
                }
                if (forcePath["allyAdaptiveBonusADRatio"]) {
                  var forceText = document.createTextNode(' (+' + JSON.stringify(forcePath["allyAdaptiveBonusADRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Ally Bonus AD Ratio)');
                  abilityDiv.appendChild(forceText);
                }
                if (forcePath["adaptiveAP"]) {
                  var forceText = document.createTextNode(' OR [' + JSON.stringify(forcePath["adaptiveAP"]).replace(/,/g, ', ')
                  .replace(/^\[|]$/g, '') + ' Ability Power]');
                  abilityDiv.appendChild(forceText);
                }
                if (forcePath["allyAdaptiveAPRatio"]) {
                  var forceText = document.createTextNode(' (+' + JSON.stringify(forcePath["allyAdaptiveAPRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Ally AP Ratio)');
                  abilityDiv.appendChild(forceText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["bonusResist"]) {
                var resistPath = champLeftFile[ability]["bonusResist"]
                var bonusResistB = document.createElement('b');
                bonusResistB.innerText = 'Bonus Armor & Magic Resist: ';
                abilityDiv.appendChild(bonusResistB);
                if (resistPath["resist"]) {
                  var resistText = document.createTextNode(JSON.stringify(resistPath["resist"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(resistText);
                }
                if (resistPath["bonusResistByLvl"]) {
                  var resistByLvlText = document.createTextNode(' - [' + resistPath["bonusResistByLvl"][0] + " to " + 
                  resistPath["bonusResistByLvl"][17] + "], based on lvl. Currently: " + resistPath["bonusResistByLvl"][champLevel]);
                  abilityDiv.appendChild(resistByLvlText);
                };
                if (resistPath["minResistByLvl"]) {
                  var minU = document.createElement('u');
                  minU.innerText = 'Min';
                  abilityDiv.appendChild(minU);
                  var minText = document.createTextNode(' - [' + resistPath["minResistByLvl"][0] + " to " + 
                  resistPath["minResistByLvl"][17] + ", based on lvl. Currently: " + resistPath["minResistByLvl"][champLevel] + ']');
                  abilityDiv.appendChild(minText);
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max';
                  abilityDiv.appendChild(maxU);
                  var maxText = document.createTextNode(' - [' + resistPath["maxResistByLvl"][0] + " to " + 
                  resistPath["maxResistByLvl"][17] + ", based on lvl. Currently: " + resistPath["maxResistByLvl"][champLevel] + ']');
                  abilityDiv.appendChild(maxText);
                }
                if (resistPath["bonusResistRatio"]) {
                  var ratioText = document.createTextNode(' (+' + resistPath["bonusResistRatio"] + ' Bonus Resist Ratio)');
                  abilityDiv.appendChild(ratioText);
                }
                if (resistPath["minResist"]) {
                  var minU = document.createElement('u');
                  minU.innerText = 'Min';
                  abilityDiv.appendChild(minU);
                  var minText = document.createTextNode(' - ' + JSON.stringify(resistPath["minResist"])
                  .replace(/,/g, ', '));
                  abilityDiv.appendChild(minText);
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max';
                  abilityDiv.appendChild(maxU);
                  var maxText = document.createTextNode(' - ' + JSON.stringify(resistPath["maxResist"])
                  .replace(/,/g, ', '));
                  abilityDiv.appendChild(maxText);
                }
                if (resistPath["duration"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration'
                  abilityDiv.appendChild(durationU)
                  var durationText = document.createTextNode(': ' + resistPath["duration"])
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                var bonusMagicResistPath = champLeftFile[ability]["bonusMagicResist"]
                var magicResistBold = document.createElement('b');
                magicResistBold.innerText = 'Bonus Magic Resist: '
                abilityDiv.appendChild(magicResistBold);
                if (bonusMagicResistPath["magicResist"]) {
                  var magicResistText = document.createTextNode(JSON.stringify(bonusMagicResistPath["magicResist"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(magicResistText);
                };
                if (bonusMagicResistPath["magicResistRatio"]) {
                  var magicResistRatioText = document.createTextNode(' (+' + JSON.stringify(bonusMagicResistPath["magicResistRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Magic Resist Ratio)');
                  abilityDiv.appendChild(magicResistRatioText);
                };
                if (bonusMagicResistPath["bonusMagicResistRatio"]) {
                  var magicResistRatioText = document.createTextNode(' (+' + JSON.stringify(bonusMagicResistPath["bonusMagicResistRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Magic Resist Ratio)');
                  abilityDiv.appendChild(magicResistRatioText);
                };
                if (bonusMagicResistPath["APRatio"]) {
                  var APRatioText = document.createTextNode(' (+' + JSON.stringify(bonusMagicResistPath["APRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AP Ratio)');
                  abilityDiv.appendChild(APRatioText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["allyBonusMagicResist"]) {
                var bonusMagicResistPath = champLeftFile[ability]["allyBonusMagicResist"]
                var magicResistBold = document.createElement('b');
                magicResistBold.innerText = 'Ally Bonus Magic Resist: '
                abilityDiv.appendChild(magicResistBold);
                if (bonusMagicResistPath["magicResist"]) {
                  var magicResistText = document.createTextNode(JSON.stringify(bonusMagicResistPath["magicResist"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(magicResistText);
                };
                if (bonusMagicResistPath["magicResistRatio"]) {
                  var magicResistRatioText = document.createTextNode(' (+' + JSON.stringify(bonusMagicResistPath["magicResistRatio"])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Magic Resist Ratio)');
                  abilityDiv.appendChild(magicResistRatioText);
                };
                if (bonusMagicResistPath["bonusMagicResistRatio"]) {
                  var magicResistRatioText = document.createTextNode(' (+' + JSON.stringify(bonusMagicResistPath["bonusMagicResistRatio"])
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max Ratio';
                  abilityDiv.appendChild(maxU);
                  var msRatioText = document.createTextNode(' - ' + msPath["maxBonusMSRatio"]);
                  abilityDiv.appendChild(msRatioText);
                };
                if (msPath["duration"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u');
                  durationU.innerText = "Duration"
                  abilityDiv.appendChild(durationU)
                  var durationText = document.createTextNode(': ' + msPath["duration"])
                  abilityDiv.appendChild(durationText)
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["cripple"]) {
                var cripplePath = champLeftFile[ability]["cripple"];
                var crippleB = document.createElement('b');
                crippleB.innerText = 'Attack Speed Cripple: ';
                abilityDiv.appendChild(crippleB);
                if (cripplePath["attackSpeed"]) {
                  var crippleText = document.createTextNode(JSON.stringify(cripplePath["attackSpeed"])
                  .replace(/,/g, ', '));
                  abilityDiv.appendChild(crippleText);
                }
                if (cripplePath["minAttackSpeed"]) {
                  var minU = document.createElement('u');
                  minU.innerText = 'Min';
                  abilityDiv.appendChild(minU);
                  var minText = document.createTextNode(' - ' + cripplePath["minAttackSpeed"]);
                  abilityDiv.appendChild(minText);
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var maxU = document.createElement('u');
                  maxU.innerText = 'Max';
                  abilityDiv.appendChild(maxU);
                  var maxText = document.createTextNode(' - ' + JSON.stringify(cripplePath["maxAttackSpeed"])
                  .replace(/,/g, ', '));
                  abilityDiv.appendChild(maxText);
                }
                if (cripplePath["duration"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration';
                  abilityDiv.appendChild(durationU);
                  var durationText = document.createTextNode(': ' + cripplePath["duration"]);
                  abilityDiv.appendChild(durationText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["petStats"]) {
                var petPath = champLeftFile[ability]["petStats"];
                var petB = document.createElement('b');
                petB.innerText = 'Pet Stats: ';
                abilityDiv.appendChild(petB);
                if (petPath["auto"]) {
                  var autoU = document.createElement('u');
                  autoU.innerText = 'Auto Attack';
                  abilityDiv.appendChild(autoU);
                  var typeText = document.createTextNode(': ' + petPath["auto"]["type"] + ' Damage: ');
                  abilityDiv.appendChild(typeText);
                  if (petPath["auto"]["dmg"]) {
                    var autoDmgText = document.createTextNode(JSON.stringify(petPath["auto"]["dmg"]).replace(/,/g, ', '));
                    abilityDiv.appendChild(autoDmgText);
                  }
                  if (petPath['auto']['dmgByLvl']) {
                    var dmgByLvlText = document.createTextNode(' [' + petPath["auto"]["dmgByLvl"][0] + " to " 
                    + petPath["auto"]["dmgByLvl"][17] + ", based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var dmgBylvlText2 = document.createTextNode(': ' + petPath["auto"]["dmgByLvl"][champLevel] + ']')
                    abilityDiv.appendChild(dmgByLvlText);
                    abilityDiv.appendChild(currentlyU)
                    abilityDiv.appendChild(dmgBylvlText2)
                  }
                  if (petPath["auto"]["APRatio"]) {
                    var APRatioText = document.createTextNode(' (+' + JSON.stringify(petPath["auto"]["APRatio"])
                    .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AP Ratio)');
                    abilityDiv.appendChild(APRatioText);
                  }
                  if (petPath["auto"]["ADRatio"]) {
                    var ADRatioText = document.createTextNode(' (' + JSON.stringify(petPath["auto"]["ADRatio"])
                    .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AD Ratio)');
                    abilityDiv.appendChild(ADRatioText);
                  }
                  if (petPath["auto"]["bonusADRatio"]) {
                    var ADRatioText = document.createTextNode(' (+' + JSON.stringify(petPath["auto"]["bonusADRatio"])
                    .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Bonus AD Ratio)');
                    abilityDiv.appendChild(ADRatioText);
                  }
                  if (petPath["auto"]["enemyMaxHPRatio"]) {
                    var ratioText = document.createTextNode(' (+' + petPath["auto"]["enemyMaxHPRatio"]
                    + ' Enemy Max HP Ratio)');
                    abilityDiv.appendChild(ratioText);
                  }
                  if (petPath["auto"]["system"] === 'minMax') {
                    var minText = document.createTextNode('Min - ');
                    abilityDiv.appendChild(minText);
                    if (petPath["auto"]["minDmgByLvl"]) {
                      var dmgByLvlText = document.createTextNode(' [' + petPath["auto"]["minDmgByLvl"][0] + " to " 
                      + petPath["auto"]["minDmgByLvl"][17] + ", based on lvl. ");
                      var currentlyU = document.createElement('u');
                      currentlyU.innerText = "Currently";
                      var dmgBylvlText2 = document.createTextNode(': ' + petPath["auto"]["minDmgByLvl"][champLevel] + ']')
                      abilityDiv.appendChild(dmgByLvlText);
                      abilityDiv.appendChild(currentlyU)
                      abilityDiv.appendChild(dmgBylvlText2)
                    }
                    if (petPath["auto"]["minAPRatio"]) {
                      var ratioText = document.createTextNode(' (+' + petPath["auto"]["minAPRatio"] + ' AP Ratio)');
                      abilityDiv.appendChild(ratioText);
                    }
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var maxText = document.createTextNode('Max - ');
                    abilityDiv.appendChild(maxText);
                    if (petPath["auto"]["maxDmgByLvl"]) {
                      var dmgByLvlText = document.createTextNode(' [' + petPath["auto"]["maxDmgByLvl"][0] + " to " 
                      + petPath["auto"]["maxDmgByLvl"][17] + ", based on lvl. ");
                      var currentlyU = document.createElement('u');
                      currentlyU.innerText = "Currently";
                      var dmgBylvlText2 = document.createTextNode(': ' + petPath["auto"]["maxDmgByLvl"][champLevel] + ']')
                      abilityDiv.appendChild(dmgByLvlText);
                      abilityDiv.appendChild(currentlyU)
                      abilityDiv.appendChild(dmgBylvlText2)
                    }
                    if (petPath["auto"]["maxAPRatio"]) {
                      var ratioText = document.createTextNode(' (+' + petPath["auto"]["maxAPRatio"] + ' AP Ratio)');
                      abilityDiv.appendChild(ratioText);
                    }
                  }
                  if (petPath["auto"]["multiHitDmgRatio"]) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var multiU = document.createElement('u');
                    multiU.innerText = 'Multi-Hit Damage Ratio';
                    abilityDiv.appendChild(multiU);
                    var multiText = document.createTextNode(': ' + petPath["auto"]["multiHitDmgRatio"]);
                    abilityDiv.appendChild(multiText);
                  }
                };
                if (petPath["attackSpeed"] || petPath["attackSpeedByLvl"] || petPath["minAttackSpeed"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var asU = document.createElement('u');
                  asU.innerText = 'Attack Speed';
                  abilityDiv.appendChild(asU);
                }
                if (petPath["attackSpeed"]) {
                  var asText = document.createTextNode(': ' + JSON.stringify(petPath["attackSpeed"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(asText);
                };
                if (petPath["attackSpeedByLvl"]) {
                  var asByLvlText = document.createTextNode(': [' + petPath["attackSpeedByLvl"][0] + " to " 
                  + petPath["attackSpeedByLvl"][17] + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var asBylvlText2 = document.createTextNode(': ' + petPath["attackSpeedByLvl"][champLevel] + ']')
                  abilityDiv.appendChild(asByLvlText);
                  abilityDiv.appendChild(currentlyU)
                  abilityDiv.appendChild(asBylvlText2)
                }
                if (petPath["minAttackSpeed"]) {
                  var asText = document.createTextNode(': Min - ' + petPath["minAttackSpeed"] + ', Max - ' 
                    + petPath["maxAttackSpeed"]);
                  abilityDiv.appendChild(asText);
                };
                if (petPath["attackSpeedRatio"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var asU = document.createElement('u');
                  asU.innerText = 'Attack Speed Ratio';
                  abilityDiv.appendChild(asU);
                  var asText = document.createTextNode(': ' + petPath["attackSpeedRatio"]);
                  abilityDiv.appendChild(asText);
                };
                if (petPath["healthRatio"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var asU = document.createElement('u');
                  asU.innerText = 'Health Ratio';
                  abilityDiv.appendChild(asU);
                  var asText = document.createTextNode(': ' + petPath["healthRatio"]);
                  abilityDiv.appendChild(asText);
                };
                if (petPath["armorRatio"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var asU = document.createElement('u');
                  asU.innerText = 'Armor Ratio';
                  abilityDiv.appendChild(asU);
                  var asText = document.createTextNode(': ' + petPath["armorRatio"]);
                  abilityDiv.appendChild(asText);
                };
                if (petPath["magicResistRatio"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var asU = document.createElement('u');
                  asU.innerText = 'Magic Resist Ratio';
                  abilityDiv.appendChild(asU);
                  var asText = document.createTextNode(': ' + petPath["magicResistRatio"]);
                  abilityDiv.appendChild(asText);
                };
                if (petPath["health"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var healthU = document.createElement('u');
                  healthU.innerText = 'Health';
                  abilityDiv.appendChild(healthU);
                  var healthText = document.createTextNode(': ' + JSON.stringify(petPath["health"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(healthText);
                };
                if (petPath["healthByLvl"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var healthU = document.createElement('u');
                  healthU.innerText = 'Health';
                  abilityDiv.appendChild(healthU);
                  var healthByLvlText = document.createTextNode(': [' + petPath["healthByLvl"][0] + " to " + petPath["healthByLvl"][17]
                  + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var healthBylvlText2 = document.createTextNode(': ' + petPath["healthByLvl"][champLevel] + ']')
                  abilityDiv.appendChild(healthByLvlText);
                  abilityDiv.appendChild(currentlyU)
                  abilityDiv.appendChild(healthBylvlText2)
                  if (petPath["healthPerAPRatioByLvl"]) {
                    var healthByLvlText = document.createTextNode(' (+' + petPath["healthPerAPRatioByLvl"][0] + " to " 
                    + petPath["healthPerAPRatioByLvl"][17] + " per Ability Power, based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var healthBylvlText2 = document.createTextNode(': ' + petPath["healthPerAPRatioByLvl"][champLevel] + ')')
                    abilityDiv.appendChild(healthByLvlText);
                    abilityDiv.appendChild(currentlyU)
                    abilityDiv.appendChild(healthBylvlText2)
                  }
                };
                if (petPath["maxHPRatio"]) {
                  var hpText = document.createTextNode(' (+' + petPath["maxHPRatio"] + ' Max HP Ratio)');
                  abilityDiv.appendChild(hpText);
                }
                if (petPath["healthPerAPRatio"]) {
                  var healthPerAPText = document.createTextNode(' (+' + petPath["healthPerAPRatio"] + ' per AP)');
                  abilityDiv.appendChild(healthPerAPText);
                }
                if (petPath["armor"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var armorU = document.createElement('u');
                  armorU.innerText = 'Armor';
                  abilityDiv.appendChild(armorU);
                  var armorText = document.createTextNode(': ' + JSON.stringify(petPath["armor"]).replace(/,/g, ', ').replace(/"/g,""));
                  abilityDiv.appendChild(armorText);
                };
                if (petPath["armorByLvl"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var armorU = document.createElement('u');
                  armorU.innerText = 'Armor';
                  abilityDiv.appendChild(armorU);
                  var armorByLvlText = document.createTextNode(': [' + petPath["armorByLvl"][0] + " to " + petPath["armorByLvl"][17]
                  + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var armorBylvlText2 = document.createTextNode(': ' + petPath["armorByLvl"][champLevel] + ']')
                  abilityDiv.appendChild(armorByLvlText);
                  abilityDiv.appendChild(currentlyU)
                  abilityDiv.appendChild(armorBylvlText2)
                };
                if (petPath["armorPerAPRatio"]) {
                  var armorPerAPText = document.createTextNode(' (+' + petPath["armorPerAPRatio"] + ' per AP)');
                  abilityDiv.appendChild(armorPerAPText);
                }
                if (petPath["magicResist"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var magicResistU = document.createElement('u');
                  magicResistU.innerText = 'Magic Resist';
                  abilityDiv.appendChild(magicResistU);
                  var magicResistText = document.createTextNode(': ' + JSON.stringify(petPath["magicResist"]).replace(/,/g, ', ').replace(/"/g,""));
                  abilityDiv.appendChild(magicResistText);
                };
                if (petPath["magicResistByLvl"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var magicResistU = document.createElement('u');
                  magicResistU.innerText = 'Magic Resist';
                  abilityDiv.appendChild(magicResistU);
                  var magicResistByLvlText = document.createTextNode(': [' + petPath["magicResistByLvl"][0] + " to " + petPath["magicResistByLvl"][17]
                  + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = "Currently";
                  var magicResistBylvlText2 = document.createTextNode(': ' + petPath["magicResistByLvl"][champLevel] + ']')
                  abilityDiv.appendChild(magicResistByLvlText);
                  abilityDiv.appendChild(currentlyU)
                  abilityDiv.appendChild(magicResistBylvlText2)
                };
                if (petPath["magicResistPerAPRatio"]) {
                  var magicResistPerAPText = document.createTextNode(' (+' + petPath["magicResistPerAPRatio"] + ' per AP)');
                  abilityDiv.appendChild(magicResistPerAPText);
                }
                if (petPath["interruptCC"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var interruptCCU = document.createElement('u');
                  interruptCCU.innerText = 'Crowd Control Duration';
                  abilityDiv.appendChild(interruptCCU);
                  var ccText = document.createTextNode(': ' + petPath["interruptCC"]);
                  abilityDiv.appendChild(ccText);
                }
                doubleBreak();
              }

              if (champLeftFile[ability]["empower"]) {
                var empowerPath = champLeftFile[ability]["empower"];
                var empowerB = document.createElement('b');
                var empowerU = document.createElement('u');
                empowerB.appendChild(empowerU);
                empowerU.innerText = 'Empower';
                abilityDiv.appendChild(empowerB);
                doubleBreak();
                if (empowerPath['Q']) {
                  var qB = document.createElement('b');
                  var qU = document.createElement('u');
                  qB.appendChild(qU);
                  qU.innerText = 'Q: ';
                  abilityDiv.appendChild(qB);
                  if (empowerPath['Q']["petStats"]) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var petPath = champLeftFile[ability]["empower"]["Q"]["petStats"];
                    var petB = document.createElement('b');
                    petB.innerText = 'Pet Stats: ';
                    abilityDiv.appendChild(petB);
                    if (petPath["auto"]) {
                      var autoU = document.createElement('u');
                      autoU.innerText = 'Auto Attack';
                      abilityDiv.appendChild(autoU);
                      var typeText = document.createTextNode(': ' + petPath["auto"]["type"] + ' Damage - ');
                      abilityDiv.appendChild(typeText);
                      if (petPath["auto"]["dmg"]) {
                        var autoDmgText = document.createTextNode(JSON.stringify(petPath["auto"]["dmg"]).replace(/,/g, ', '));
                        abilityDiv.appendChild(autoDmgText);
                      }
                      if (petPath["auto"]["APRatio"]) {
                        var APRatioText = document.createTextNode(' (+' + JSON.stringify(petPath["auto"]["APRatio"])
                        .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' AP Ratio)');
                        abilityDiv.appendChild(APRatioText);
                      }
                    };
                    if (petPath["attackSpeed"]) {
                      var br = document.createElement('br');
                      abilityDiv.appendChild(br);
                      var asU = document.createElement('u');
                      asU.innerText = 'Attack Speed';
                      abilityDiv.appendChild(asU);
                      var asText = document.createTextNode(': ' + petPath["attackSpeed"]);
                      abilityDiv.appendChild(asText);
                    };
                    if (petPath["healthByLvl"]) {
                      var br = document.createElement('br');
                      abilityDiv.appendChild(br);
                      var healthU = document.createElement('u');
                      healthU.innerText = 'Health';
                      abilityDiv.appendChild(healthU);
                      var healthByLvlText = document.createTextNode(': [' + petPath["healthByLvl"][0] + " to " + petPath["healthByLvl"][17]
                      + ", based on lvl. ");
                      var currentlyU = document.createElement('u');
                      currentlyU.innerText = "Currently";
                      var healthBylvlText2 = document.createTextNode(': ' + petPath["healthByLvl"][champLevel] + ']')
                      abilityDiv.appendChild(healthByLvlText);
                      abilityDiv.appendChild(currentlyU)
                      abilityDiv.appendChild(healthBylvlText2)
                      if (petPath["healthPerAPRatioByLvl"]) {
                        var healthByLvlText = document.createTextNode(' (+' + petPath["healthPerAPRatioByLvl"][0] + " to " 
                        + petPath["healthPerAPRatioByLvl"][17] + " per Ability Power, based on lvl. ");
                        var currentlyU = document.createElement('u');
                        currentlyU.innerText = "Currently";
                        var healthBylvlText2 = document.createTextNode(': ' + petPath["healthPerAPRatioByLvl"][champLevel] + ')')
                        abilityDiv.appendChild(healthByLvlText);
                        abilityDiv.appendChild(currentlyU)
                        abilityDiv.appendChild(healthBylvlText2)
                      }
                    };
                    if (petPath["armorByLvl"]) {
                      var br = document.createElement('br');
                      abilityDiv.appendChild(br);
                      var armorU = document.createElement('u');
                      armorU.innerText = 'Armor';
                      abilityDiv.appendChild(armorU);
                      var armorByLvlText = document.createTextNode(': [' + petPath["armorByLvl"][0] + " to " + petPath["armorByLvl"][17]
                      + ", based on lvl. ");
                      var currentlyU = document.createElement('u');
                      currentlyU.innerText = "Currently";
                      var armorBylvlText2 = document.createTextNode(': ' + petPath["armorByLvl"][champLevel] + ']')
                      abilityDiv.appendChild(armorByLvlText);
                      abilityDiv.appendChild(currentlyU)
                      abilityDiv.appendChild(armorBylvlText2)
                    };
                    if (petPath["magicResistByLvl"]) {
                      var br = document.createElement('br');
                      abilityDiv.appendChild(br);
                      var magicResistU = document.createElement('u');
                      magicResistU.innerText = 'Magic Resist';
                      abilityDiv.appendChild(magicResistU);
                      var magicResistByLvlText = document.createTextNode(': [' + petPath["magicResistByLvl"][0] + " to " + petPath["magicResistByLvl"][17]
                      + ", based on lvl. ");
                      var currentlyU = document.createElement('u');
                      currentlyU.innerText = "Currently";
                      var magicResistBylvlText2 = document.createTextNode(': ' + petPath["magicResistByLvl"][champLevel] + ']')
                      abilityDiv.appendChild(magicResistByLvlText);
                      abilityDiv.appendChild(currentlyU)
                      abilityDiv.appendChild(magicResistBylvlText2)
                    }
                  };
                  if (empowerPath['Q']['damage']) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var damage = empowerPath['Q']["damage"]
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
                  if (empowerPath['Q']['bonusDamage']) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var damage = empowerPath['Q']["bonusDamage"]
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
                if (empowerPath['W']) {
                  var wB = document.createElement('b');
                  var wU = document.createElement('u');
                  wB.appendChild(wU);
                  wU.innerText = 'W: ';
                  abilityDiv.appendChild(wB);
                  if (empowerPath['W']['damage']) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var damage = empowerPath['W']["damage"]
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
                  if (empowerPath['W']['heal']) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var healPath = empowerPath['W']['heal']
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
                if (empowerPath['E']) {
                  var eB = document.createElement('b');
                  var eU = document.createElement('u');
                  eB.appendChild(eU);
                  eU.innerText = 'E: ';
                  abilityDiv.appendChild(eB);
                  if (empowerPath['E']['damage']) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var damage = empowerPath['E']["damage"]
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
                  if (empowerPath['E']['bonusShield']) {
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var shield = empowerPath['E']["bonusShield"]
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
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
              }
              if (champLeftFile[ability]["coolDownRefundByLvl"]) {
                var br = document.createElement('br');
                abilityDiv.appendChild(br);
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
                var br = document.createElement('br');
                abilityDiv.appendChild(br);
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
                var refundByLvlText = document.createTextNode(' - [' + champLeftFile[ability]["coolDownRefundRatioByLvl"][0]
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                }
                var rechargeBold = document.createElement('b');
                rechargeBold.innerText = "Recharge: ";
                abilityDiv.appendChild(rechargeBold)
                var rechargeText = document.createTextNode(JSON.stringify(champLeftFile[ability]["recharge"]).replace(/,/g, ', '));
                abilityDiv.appendChild(rechargeText)
              };

              if (champLeftFile[ability]["Rhaast"]) {
                var rhaastPath = champLeftFile[ability]["Rhaast"];
                if (ability !== 'passive') {
                  doubleBreak()
                };
                var rhaastU = document.createElement('u');
                var rhaastB = document.createElement('b');
                rhaastB.appendChild(rhaastU);
                rhaastU.innerText = 'Rhaast'
                abilityDiv.appendChild(rhaastB);
                if (rhaastPath["spellVamp"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var svU = document.createElement('u');
                  svU.innerText = 'Spell Vamp Ratio';
                  abilityDiv.appendChild(svU);
                  if (rhaastPath["spellVamp"]["vampByLvl"]) {
                    var ratioByLvlText = document.createTextNode(': [' + rhaastPath["spellVamp"]["vampByLvl"][0]
                    + " to " + rhaastPath["spellVamp"]["vampByLvl"][17] + ", based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var ratioBylvlText2 = document.createTextNode(': ' + rhaastPath["spellVamp"]["vampByLvl"][champLevel] + ']')
                    abilityDiv.appendChild(ratioByLvlText);
                    abilityDiv.appendChild(currentlyU)
                    abilityDiv.appendChild(ratioBylvlText2)
                  }
                };
                if (rhaastPath["damage"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var typeB = document.createElement('u');
                  typeB.innerText = rhaastPath["damage"]["type"] + ' Damage'
                  abilityDiv.appendChild(typeB);
                  if (rhaastPath["damage"]["enemyMaxHPRatio"]){
                    var ratioText = document.createTextNode(': (' + rhaastPath["damage"]["enemyMaxHPRatio"]
                    + ' Enemy Max HP Ratio)');
                    abilityDiv.appendChild(ratioText);
                  }
                  if (rhaastPath["damage"]["enemyMaxHPRatioPer100BonusAD"]) {
                    var ratioText = document.createTextNode(' (+' + rhaastPath["damage"]["enemyMaxHPRatioPer100BonusAD"]
                    + ' Enemy Max HP Ratio per 100 Bonus AD)');
                    abilityDiv.appendChild(ratioText);
                  }
                  if (rhaastPath["damage"]["system"] === 'minMax') {
                    var minText = document.createTextNode(': Min - ');
                    abilityDiv.appendChild(minText);
                    if (rhaastPath["damage"]["minADRatio"]) {
                      var ratioText = document.createTextNode('(' + rhaastPath["damage"]["minADRatio"]
                      + ' AD Ratio)');
                      abilityDiv.appendChild(ratioText);
                    };
                    if (rhaastPath["damage"]["minEnemyMaxHPRatio"]) {
                      var ratioText = document.createTextNode(' (+' + rhaastPath["damage"]["minEnemyMaxHPRatio"]
                      + ' Enemy Max HP Ratio)');
                      abilityDiv.appendChild(ratioText);
                    };
                    if (rhaastPath["damage"]["minEnemyMaxHPRatioPer100BonusAD"]) {
                      var ratioText = document.createTextNode(' (+' + rhaastPath["damage"]["minEnemyMaxHPRatioPer100BonusAD"]
                      + ' Enemy Max HP Ratio per 100 Bonus AD)');
                      abilityDiv.appendChild(ratioText);
                    };
                    var br = document.createElement('br');
                    abilityDiv.appendChild(br);
                    var maxText = document.createTextNode('Max - ');
                    abilityDiv.appendChild(maxText);
                    if (rhaastPath["damage"]["maxADRatio"]) {
                      var ratioText = document.createTextNode('(' + rhaastPath["damage"]["maxADRatio"]
                      + ' AD Ratio)');
                      abilityDiv.appendChild(ratioText);
                    };
                    if (rhaastPath["damage"]["maxEnemyMaxHPRatio"]) {
                      var ratioText = document.createTextNode(' (+' + rhaastPath["damage"]["maxEnemyMaxHPRatio"]
                      + ' Enemy Max HP Ratio)');
                      abilityDiv.appendChild(ratioText);
                    };
                    if (rhaastPath["damage"]["maxEnemyMaxHPRatioPer100BonusAD"]) {
                      var ratioText = document.createTextNode(' (+' + rhaastPath["damage"]["maxEnemyMaxHPRatioPer100BonusAD"]
                      + ' Enemy Max HP Ratio per 100 Bonus AD)');
                      abilityDiv.appendChild(ratioText);
                    };
                  } 
                };
                if (rhaastPath["heal"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var healB = document.createElement('u');
                  healB.innerText = 'Heal'
                  abilityDiv.appendChild(healB);
                  if (rhaastPath["heal"]["enemyMaxHPRatio"]){
                    var ratioText = document.createTextNode(': (' + rhaastPath["heal"]["enemyMaxHPRatio"]
                    + ' Enemy Max HP Ratio)');
                    abilityDiv.appendChild(ratioText);
                  }
                  if (rhaastPath["heal"]["enemyMaxHPRatioPer100BonusAD"]){
                    var ratioText = document.createTextNode(' (+' + rhaastPath["heal"]["enemyMaxHPRatioPer100BonusAD"]
                    + ' Enemy Max HP Ratio per 100 Bonus AD)');
                    abilityDiv.appendChild(ratioText);
                  } 
                };
                if (rhaastPath["interruptCC"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var interruptCCU = document.createElement('u');
                  interruptCCU.innerText = 'Crowd Control Duration'
                  abilityDiv.appendChild(interruptCCU)
                  var ccText = document.createTextNode(': ' + rhaastPath["interruptCC"]);
                  abilityDiv.appendChild(ccText);
                }
              }

              if (champLeftFile[ability]["Shadow"]) {
                var shadowPath = champLeftFile[ability]["Shadow"]
                doubleBreak();
                var shadowU = document.createElement('u');
                var shadowB = document.createElement('b');
                shadowB.appendChild(shadowU);
                shadowU.innerText = 'Shadow'
                abilityDiv.appendChild(shadowB);
                if (shadowPath["damage"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var typeB = document.createElement('u');
                  typeB.innerText = shadowPath["damage"]["type"] + ' Damage'
                  abilityDiv.appendChild(typeB);
                  if (shadowPath["damage"]["dmgRatioByLvl"]) {
                    var ratioByLvlText = document.createTextNode(': (' + shadowPath["damage"]["dmgRatioByLvl"][0]
                    + " to " + shadowPath["damage"]["dmgRatioByLvl"][17] + " Ratio of damage dealt over 3 seconds, based on lvl. ");
                    var currentlyU = document.createElement('u');
                    currentlyU.innerText = "Currently";
                    var ratioBylvlText2 = document.createTextNode(': ' + shadowPath["damage"]["dmgRatioByLvl"][champLevel] + ')')
                    abilityDiv.appendChild(ratioByLvlText);
                    abilityDiv.appendChild(currentlyU)
                    abilityDiv.appendChild(ratioBylvlText2)
                  }
                };
                if (shadowPath["coolDown"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var cdU = document.createElement('u');
                  cdU.innerText = 'Cooldown';
                  abilityDiv.appendChild(cdU);
                  var cdText = document.createTextNode(': ' + shadowPath["coolDown"]);
                  abilityDiv.appendChild(cdText);
                }
              }
            }

          } else {
            this[`${ability}Details`] = "No combat stats for this ability.";
            var abilityText = document.createTextNode("No combat stats for this ability.");
            abilityDiv.appendChild(abilityText)
            console.log(this[`${ability}Details`])
          } if (champLeftFile[this.transformAbilities[i]]) {
            var tfAbility = this.transformAbilities[i];
            var hr = document.createElement('hr');
            abilityDiv.appendChild(hr);
            /*var transformU = document.createElement('u');
            var transformB = document.createElement('b');
            transformU.appendChild(transformB);
            transformB.innerText = 'Transformed ' + ability
            if (ability === 'passive') {
              transformB.innerText = 'Transformed Passive'
            };*/
            var transformU = document.createElement('u');
            transformU.innerText = 'Transform ' + ability;
            if (ability === 'passive') {
              transformU.innerText = 'Transform Passive'
            }
            abilityDiv.appendChild(transformU);
            var hr2 = document.createElement('hr');
            abilityDiv.appendChild(hr2);
            doubleBreak();
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
              hp: statsPath["baseHP"] + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
              hpPL: statsPath["hpPerLevel"],
              asPL: statsPath["attackSpeedPerLevel"],
              armPL: statsPath["armorPerLevel"],
              adPL: statsPath["damagePerLevel"],
              mrPL: statsPath["magicResistPerLevel"],
              manaPL: statsPath.mana["manaPerLevel"],
              manaRegen: statsPath.mana["manaBaseRegen"] + statsPath.mana["manaRegenPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
              manaRegenPL: statsPath.mana["manaRegenPerLevel"],
              hpRegen: statsPath["baseHPRegen"] + statsPath["hpRegenPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
              hpRegenPL: statsPath["hpRegenPerLevel"],
              as: statsPath["attackSpeed"] + statsPath["attackSpeedPerLevel"] * statsPath["attackSpeedRatio"] * champLevel * (0.7025 + 0.0175 * champLevel),
              arm: statsPath["baseArmor"] + statsPath["armorPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
              ad: statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
              mr: statsPath["baseMagicResist"] + statsPath["magicResistPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
              mana: statsPath.mana["base"] + statsPath.mana["manaPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)
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
            hp: statsPath["baseHP"] + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
            hpPL: statsPath["hpPerLevel"],
            asPL: statsPath["attackSpeedPerLevel"],
            armPL: statsPath["armorPerLevel"],
            adPL: statsPath["damagePerLevel"],
            mrPL: statsPath["magicResistPerLevel"],
            manaPL: statsPath.mana["manaPerLevel"],
            manaRegen: statsPath.mana["manaBaseRegen"] + statsPath.mana["manaRegenPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
            manaRegenPL: statsPath.mana["manaRegenPerLevel"],
            hpRegen: statsPath["baseHPRegen"] + statsPath["hpRegenPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
            hpRegenPL: statsPath["hpRegenPerLevel"],
            as: statsPath["attackSpeed"] + statsPath["attackSpeedPerLevel"] * statsPath["attackSpeedRatio"] * champLevel * (0.7025 + 0.0175 * champLevel),
            arm: statsPath["baseArmor"] + statsPath["armorPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
            ad: statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
            mr: statsPath["baseMagicResist"] + statsPath["magicResistPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
            mana: statsPath.mana["base"] + statsPath.mana["manaPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)
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
              hp: statsPath["baseHP"] + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
              as: statsPath["attackSpeed"] + statsPath["attackSpeedPerLevel"] * statsPath["attackSpeedRatio"] * champLevel * (0.7025 + 0.0175 * champLevel),
              arm: statsPath["baseArmor"] + statsPath["armorPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
              ad: statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
              mr: statsPath["baseMagicResist"] + statsPath["magicResistPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
              mana: statsPath.mana["base"] + statsPath.mana["manaPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
              manaRegen: statsPath.mana["manaBaseRegen"] + statsPath.mana["manaRegenPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
              hpRegen: statsPath["baseHPRegen"] + statsPath["hpRegenPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)
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
              hp: statsPath["baseHP"] + statsPath["hpPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
              as: statsPath["attackSpeed"] + statsPath["attackSpeedPerLevel"] * statsPath["attackSpeedRatio"] * champLevel * (0.7025 + 0.0175 * champLevel),
              arm: statsPath["baseArmor"] + statsPath["armorPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
              ad: statsPath["baseDamage"] + statsPath["damagePerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
              mr: statsPath["baseMagicResist"] + statsPath["magicResistPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
              mana: statsPath.mana["base"] + statsPath.mana["manaPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
              manaRegen: statsPath.mana["manaBaseRegen"] + statsPath.mana["manaRegenPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel),
              hpRegen: statsPath["baseHPRegen"] + statsPath["hpRegenPerLevel"] * champLevel * (0.7025 + 0.0175 * champLevel)
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
          <span><u><b>stats</b></u></span>
          <span><u>stats</u></span>
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
                <input id="RRankLeft" type="number" placeholder="0" min="0" max="5" 
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
                <input id="RRankRight" type="number" placeholder="0" min="0" max="5"
                style={{width: "40px"}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange2}/>
            </div>
            <div className="hidden abilityBoxRight"></div>
          </div>

        </div>

        <footer style={{bottom: "0px", position: "absolute", width: "100%", textAlign: "right"}}>
        Icon made by <a href="https://www.flaticon.com/authors/vectors-market" 
        title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" 
        title="Flaticon"> www.flaticon.com</a>
        </footer>

      </div>
    );
  }
}

export default App;