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
        cc: 0,
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
        cc: 0,
        mana: 0,
        manaPL: 0,
        manaRegen: 0,
        manaRegenPL: 0
      },
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
          function multiplyByTicks(x) {
            return (x * tickDamage["ticks"]).toFixed()
          };
          function multiplyByTicksRounded2(x) {
            if (typeof(x) !== 'number') {
              return x.map(z => (z * tickDamage["ticks"]).toFixed(countDecimals(z)))
            }
            if (x === 0.25 && tickDamage["ticks"]%4 === 0) {
              return Math.round(x * tickDamage["ticks"])
            } else if (x === 0.5 && tickDamage["ticks"]%2 === 0) {
              return Math.round(x * tickDamage["ticks"])
            } else if ( 2 < countDecimals(x) ) {
              return (x * tickDamage["ticks"]).toFixed(2)
            } else {
              return (x * tickDamage["ticks"]).toFixed(countDecimals(x))
            }
          }

          if (champLeftFile[ability]) {
            console.log("ability rank left: " + this.state[`${ability}RankLeft`])
            this[`${ability}Details`] = champLeftFile[ability]
            if (this.state[`${ability}RankLeft`] === 0 || ability === 'passive') {
              if (champLeftFile[ability]["text"]) {
                var text = document.createTextNode(champLeftFile[ability]["text"])
                abilityDiv.appendChild(text)
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
                  newAutoDmg = newAutoDmg + Math.round(newAutoDmg*autoPath["dmgRatioPerCritChance"]*this.state.stats1.cc)
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
                }
                doubleBreak();
                if (autoPath["dmgRatio"]) {
                  var autoDmgU = document.createElement('b');
                  autoDmgU.innerText = 'Auto Damage: '
                  abilityDiv.appendChild(autoDmgU);
                  var autoDmgText = document.createTextNode(newAutoDmg);
                  abilityDiv.appendChild(autoDmgText);
                };
                if (autoPath["system"] === 'minMax') {
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
                var dash = document.createTextNode(' - ')
                abilityDiv.appendChild(dmgTypeU);
                abilityDiv.appendChild(dash);
                if (damage["dmg"]) {
                  var dmgArray = JSON.stringify(damage["dmg"]).replace(/,/g, ', ');
                  var dmgArrayText = document.createTextNode(dmgArray);
                  abilityDiv.appendChild(dmgArrayText);
                };
                if (damage["dmgByLvl"]) {
                  var dmgByLvlText = document.createTextNode('[' + damage["dmgByLvl"][0] + " to " + damage["dmgByLvl"][17]
                  + ", based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = 'Currently';
                  var dmgByLvlText2 = document.createTextNode(': ' + damage["dmgByLvl"][champLevel] + '] ')
                  abilityDiv.appendChild(dmgByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(dmgByLvlText2);
                };
                if (damage["dmgPer5Chimes"]) {
                  var dmgPer5ChimesText = document.createTextNode(" (+" + damage["dmgPer5Chimes"] + ' per 5 chimes)')
                  abilityDiv.appendChild(dmgPer5ChimesText)
                }
                if (damage["APRatio"]) {
                  var APRatioText = document.createTextNode(" (+" + damage["APRatio"] + " AP Ratio) ")
                  abilityDiv.appendChild(APRatioText)
                };
                if (damage["ADRatio"]) {
                  var ADRatioValue = JSON.stringify(damage["ADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var ADRatioText = document.createTextNode(" (+" + ADRatioValue + " AD Ratio) ")
                  abilityDiv.appendChild(ADRatioText)
                };
                if (damage["ADRatioByLvl"]) {
                  var ADRatioByLvlText = document.createTextNode('(+' + damage["ADRatioByLvl"][0] + " to " 
                  + damage["ADRatioByLvl"][17] + " AD Ratio, based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = 'Currently';
                  var ADRatioByLvlText2 = document.createTextNode(': ' + damage["ADRatioByLvl"][champLevel] + ") ")
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
                if (damage["enemyMaxHPRatioByLvl"]) {
                  var enemyMaxHPRatioByLvlText = document.createTextNode('(+' + damage["enemyMaxHPRatioByLvl"][0] + " to " 
                  + damage["enemyMaxHPRatioByLvl"][17] + " Enemy Max HP Ratio, based on lvl. ");
                  var currentlyU = document.createElement('u');
                  currentlyU.innerText = 'Currently';
                  var enemyMaxHPRatioByLvlText2 = document.createTextNode(': ' + damage["enemyMaxHPRatioByLvl"][champLevel] + ") ")
                  abilityDiv.appendChild(enemyMaxHPRatioByLvlText);
                  abilityDiv.appendChild(currentlyU);
                  abilityDiv.appendChild(enemyMaxHPRatioByLvlText2)
                };
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
                if (damage["armorRatio"]) {
                  var armorRatioValue = JSON.stringify(damage["armorRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var armorRatioText = document.createTextNode(" (+" + armorRatioValue + " Armor Ratio)")
                  abilityDiv.appendChild(armorRatioText)
                };
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
                      var minU = document.createElement('u');
                      minU.innerText = 'Min'
                      abilityDiv.appendChild(minU)
                      if (part["minDmg"]) {
                        var minDmgArray = JSON.stringify(part["minDmg"]).replace(/,/g, ', ')
                        var minDmgText = document.createTextNode(" - " + minDmgArray)
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
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max'
                      abilityDiv.appendChild(maxU)
                      if (part["maxDmgRatio"]) {
                        function multiplyByRatio(x) {
                          return (x * part["maxDmgRatio"]).toFixed(countDecimals(x) + countDecimals(part["maxDmgRatio"]))
                        };
                        var maxDmgArray = JSON.stringify(part["minDmg"].map(multiplyByRatio)).replace(/,/g, ', ').replace(/"/g,"")
                        var maxDmgText = document.createTextNode(" - " + maxDmgArray)
                        abilityDiv.appendChild(maxDmgText)
                        if (typeof part["minAPRatio"] === 'object') {
                          var maxAPRatioValue = JSON.stringify(part["minAPRatio"].map(multiplyByRatio)).replace(/,/g, ', ').replace(/^\[|]$/g, '').replace(/"/g,"")
                          var maxAPRatioText = document.createTextNode(" (+"+ maxAPRatioValue + " AP Ratio)")
                          abilityDiv.appendChild(maxAPRatioText)
                        } else if (part["minAPRatio"]) {
                          var maxAPRatioValue = (part["minAPRatio"] * part["maxDmgRatio"]).toFixed(countDecimals(part["minAPRatio"]) + countDecimals(part["maxDmgRatio"]))
                          var maxAPRatioText = document.createTextNode(" (+" + maxAPRatioValue + " AP Ratio)")
                          abilityDiv.appendChild(maxAPRatioText)
                        }
                        if (typeof part["minADRatio"] === 'object') {
                          var maxADRatioValue = JSON.stringify(part["minADRatio"].map(multiplyByRatio)).replace(/,/g, ', ').replace(/^\[|]$/g, '').replace(/"/g,"")
                          var maxADRatioText = document.createTextNode(" (+" + maxADRatioValue + " AD Ratio)")
                          abilityDiv.appendChild(maxADRatioText)
                        } else if (part["minADRatio"]) {
                          var maxADRatioValue = (part["minADRatio"] * part["maxDmgRatio"]).toFixed(countDecimals(part["minADRatio"]) + countDecimals(part["maxDmgRatio"]))
                          var maxADRatioText = document.createTextNode(" (+" + maxADRatioValue + " AD Ratio)")
                          abilityDiv.appendChild(maxADRatioText)
                        }
                        if (typeof part["minBonusADRatio"] === 'object') {
                        var maxBonusADRatioValue = JSON.stringify(part["minBonusADRatio"].map(multiplyByRatio)).replace(/,/g, ', ').replace(/^\[|]$/g, '').replace(/"/g,"")
                        var maxBonusADRatioText = document.createTextNode(" (+" + maxBonusADRatioValue + " Bonus AD Ratio)")
                        abilityDiv.appendChild(maxBonusADRatioText)
                        } else if (part["minBonusADRatio"]) {
                        var maxBonusADRatioValue = (part["minBonusADRatio"] * part["maxDmgRatio"]).toFixed(countDecimals(part["minBonusADRatio"]) + countDecimals(part["maxDmgRatio"]))
                        var maxBonusADRatioText = document.createTextNode(" (+" + maxBonusADRatioValue + " Bonus AD Ratio)")
                        abilityDiv.appendChild(maxBonusADRatioText)
                        }
                      }
                      if (part["maxDmg"]) {
                        var maxDmgArray = JSON.stringify(part["maxDmg"]).replace(/,/g, ', ')
                        var maxDmgText = document.createTextNode(" - " + maxDmgArray)
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
                doubleBreak();
              }

              if (champLeftFile[ability]["damage"]) {
                var damage = champLeftFile[ability]["damage"]
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
                if (damage["enemyMaxHPRatio"]) {
                  var enemyMaxHPRatioValue = JSON.stringify(damage["enemyMaxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyMaxHPRatioText = document.createTextNode(" (+" + enemyMaxHPRatioValue + " Enemy Max HP Ratio)")
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
                if (damage["enemyCurrentHPRatioPer100AP"]) {
                  var enemyCurrentHPRatioValue = JSON.stringify(damage["enemyCurrentHPRatioPer100AP"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyCurrentHPRatioText = document.createTextNode(" (+" + enemyCurrentHPRatioValue + " Enemy Current HP Ratio Per 100 AP)")
                  abilityDiv.appendChild(enemyCurrentHPRatioText)
                };
                if (damage["enemyMissingHPRatio"]) {
                  var enemyMissingHPRatioValue = JSON.stringify(damage["enemyMissingHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyMissingHPRatioText = document.createTextNode(" (+" + enemyMissingHPRatioValue + " Enemy Missing HP Ratio)")
                  abilityDiv.appendChild(enemyMissingHPRatioText)
                };
                if (damage["armorRatio"]) {
                  var armorRatioValue = JSON.stringify(damage["armorRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var armorRatioText = document.createTextNode(" (+" + armorRatioValue + " Armor Ratio)")
                  abilityDiv.appendChild(armorRatioText)
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
                if (damage["bonusMRRatio"]) {
                  var mrRatioValue = JSON.stringify(damage["bonusMRRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var mrRatioText = document.createTextNode(" (+" + mrRatioValue + " Bonus Magic Resist Ratio)")
                  abilityDiv.appendChild(mrRatioText)
                }
                if (damage["canCrit"]) {
                  var canCritText = document.createTextNode(', can crit.');
                  abilityDiv.appendChild(canCritText);
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
                  var dash = document.createTextNode(' - ');
                  abilityDiv.appendChild(dash)
                  if (damage["minDmg"]) {
                    var minDmgArray = JSON.stringify(damage["minDmg"]).replace(/,/g, ', ')
                    var minDmgText = document.createTextNode(minDmgArray)
                    abilityDiv.appendChild(minDmgText)
                  }
                  if (damage["minDmgByLvl"]) {
                    var dmgByLvlText = document.createTextNode('[' + damage["minDmgByLvl"][0] + " to " + damage["minDmgByLvl"][17]
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
                  if (damage["minEnemyMaxHPRatio"]) {
                    var minEnemyMaxHPRatioValue = JSON.stringify(damage["minEnemyMaxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minEnemyMaxHPRatioText = document.createTextNode(" (+" + minEnemyMaxHPRatioValue + " Enemy Max HP Ratio)")
                    abilityDiv.appendChild(minEnemyMaxHPRatioText)
                  }
                  if (damage["minEnemyMaxHPRatioPer100AP"]) {
                    var minEnemyMaxHPRatioValue = JSON.stringify(damage["minEnemyMaxHPRatioPer100AP"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var minEnemyMaxHPRatioText = document.createTextNode(" (+" + minEnemyMaxHPRatioValue + " Enemy Max HP Ratio Per 100 AP)")
                    abilityDiv.appendChild(minEnemyMaxHPRatioText)
                  }
                  if (damage["minEnemyCurrentHPRatio"]) {
                    var currentHPRatioValue = JSON.stringify(damage["minEnemyCurrentHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var currentHPRatioText = document.createTextNode(" (+" + currentHPRatioValue + " Enemy Current HP Ratio)")
                    abilityDiv.appendChild(currentHPRatioText)
                  }
                  if (damage["minEnemyCurrentHPRatioPer100AP"]) {
                    var currentHPRatioValue = JSON.stringify(damage["minEnemyCurrentHPRatioPer100AP"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var currentHPRatioText = document.createTextNode(" (+" + currentHPRatioValue + " Enemy Current HP Ratio Per 100 AP)")
                    abilityDiv.appendChild(currentHPRatioText)
                  }
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
                    var br = document.createElement("br");
                    abilityDiv.appendChild(br);
                  }

                  var maxDmgU = document.createElement('u')
                  maxDmgU.innerText = 'Max'
                  abilityDiv.appendChild(maxDmgU)
                  var dash2 = document.createTextNode(" - ");
                  abilityDiv.appendChild(dash2);

                  if (damage["maxDmgRatio"]) {
                    function multiplyByRatio(x) {
                      return (x * damage["maxDmgRatio"]).toFixed(countDecimals(x) + countDecimals(damage["maxDmgRatio"]))
                    };
                    function roundedMultiplyByRatio(x) {
                      return Math.round(x * damage["maxDmgRatio"])
                    }
                    if (damage["minDmg"]) {
                      var maxDmgArray = JSON.stringify(damage["minDmg"].map(roundedMultiplyByRatio)).replace(/,/g, ', ')
                      var maxDmgText = document.createTextNode(maxDmgArray)
                      abilityDiv.appendChild(maxDmgText)
                    }
                    if (damage["minDmgByLvl"]) {
                      var dmgByLvlText = document.createTextNode('[' + Math.round(damage["minDmgByLvl"][0]*damage["maxDmgRatio"]) 
                      + " to " + Math.round(damage["minDmgByLvl"][17] * damage["maxDmgRatio"]) + ", based on lvl. ");
                      var currentlyU = document.createElement('u');
                      currentlyU.innerText = "Currently";
                      var dmgByLvlText2 = document.createTextNode(': ' + Math.round(damage["minDmgByLvl"][champLevel] * damage["maxDmgRatio"]) + '] ')
                      abilityDiv.appendChild(dmgByLvlText);
                      abilityDiv.appendChild(currentlyU);
                      abilityDiv.appendChild(dmgByLvlText2)
                    }
                    if (typeof damage["minAPRatio"] === 'object') {
                      var maxAPRatioValue = JSON.stringify(damage["minAPRatio"].map(multiplyByRatio)).replace(/,/g, ', ')
                      var maxAPRatioText = document.createTextNode(" (+"+ maxAPRatioValue + " AP Ratio)")
                      abilityDiv.appendChild(maxAPRatioText)
                    } else if (damage["minAPRatio"]) {
                      var maxAPRatioValue = (damage["minAPRatio"] * damage["maxDmgRatio"]).toFixed(countDecimals(damage["minAPRatio"]) + countDecimals(damage["maxDmgRatio"]))
                      var maxAPRatioText = document.createTextNode(" (+" + maxAPRatioValue + " AP Ratio)")
                      abilityDiv.appendChild(maxAPRatioText)
                    }
                    if (typeof damage["minADRatio"] === 'object') {
                      var maxADRatioValue = JSON.stringify(damage["minADRatio"].map(multiplyByRatio)).replace(/,/g, ', ')
                      var maxADRatioText = document.createTextNode(" (+" + maxADRatioValue + " AD Ratio)")
                      abilityDiv.appendChild(maxADRatioText)
                    } else if (damage["minADRatio"]) {
                      var maxADRatioValue = (damage["minADRatio"] * damage["maxDmgRatio"]).toFixed(countDecimals(damage["minADRatio"]) + countDecimals(damage["maxDmgRatio"]))
                      var maxADRatioText = document.createTextNode(" (+" + maxADRatioValue + " AD Ratio)")
                      abilityDiv.appendChild(maxADRatioText)
                    }
                    if (typeof damage["minBonusADRatio"] === 'object') {
                      var maxBonusADRatioValue = JSON.stringify(damage["minBonusADRatio"].map(multiplyByRatio)).replace(/,/g, ', ')
                      var maxBonusADRatioText = document.createTextNode(" (+" + maxBonusADRatioValue + " Bonus AD Ratio)")
                      abilityDiv.appendChild(maxBonusADRatioText)
                    } else if (damage["minBonusADRatio"]) {
                      var maxBonusADRatioValue = (damage["minBonusADRatio"] * damage["maxDmgRatio"]).toFixed(countDecimals(damage["minBonusADRatio"]) + countDecimals(damage["maxDmgRatio"]))
                      var maxBonusADRatioText = document.createTextNode(" (+" + maxBonusADRatioValue + " Bonus AD Ratio)")
                      abilityDiv.appendChild(maxBonusADRatioText)
                    }
                  }

                  if (damage["repeat"]) {
                    function multiplyByRepeat(x, i) {
                      if (typeof damage["repeat"] === 'object') {
                        return (x * (damage["repeat"][i]+1)).toFixed(countDecimals(x) + countDecimals(damage["repeat"][i]))
                      } else {
                        return (x * (damage["repeat"]+1)).toFixed(countDecimals(x) + countDecimals(damage["repeat"]))
                      }
                    };
                    if (damage["minDmg"]) {
                      var maxDmgArray = JSON.stringify(damage["minDmg"].map(multiplyByRepeat)).replace(/,/g, ', ').replace(/"/g,"")
                      var maxDmgText = document.createTextNode(" - " + maxDmgArray)
                      abilityDiv.appendChild(maxDmgText)
                    }
                    if (typeof damage["minAPRatio"] === 'number') {
                      if (typeof damage["repeat"] === 'object') {
                        var maxAPRatioValue = JSON.stringify(damage["repeat"].map(x => ((x+1) * damage["minAPRatio"]).toFixed(countDecimals(x) + countDecimals(damage["minAPRatio"])))).replace(/,/g, ', ').replace(/^\[|]$/g, '').replace(/"/g,"")
                        var maxAPRatioText = document.createTextNode(" (+" + maxAPRatioValue + " AP Ratio)")
                        abilityDiv.appendChild(maxAPRatioText)
                      } else {
                        var maxAPRatioText = document.createTextNode(" (+" + (damage["minAPRatio"]*(damage["repeat"]+1)).toFixed(countDecimals(damage["minAPRatio"]) + countDecimals(damage["repeat"])) + " AP Ratio)")
                        abilityDiv.appendChild(maxAPRatioText)
                      }
                    }
                    if (typeof damage["minAPRatio"] === 'object') {
                      if (typeof damage['repeat'] === 'number') {
                        var maxAPRatioValue = JSON.stringify(damage["minAPRatio"].map(multiplyByRepeat)).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                        var maxAPRatioText = document.createTextNode(" (+" + maxAPRatioValue + " AP Ratio)")
                        abilityDiv.appendChild(maxAPRatioText)
                      }
                    } 
                  }

                  if (damage["maxDmg"]) {
                    var maxDmgArray = JSON.stringify(damage["maxDmg"]).replace(/,/g, ', ')
                    var maxDmgText = document.createTextNode(maxDmgArray)
                    abilityDiv.appendChild(maxDmgText)
                  }
                  if (damage["maxDmgByLvl"]) {
                    var dmgByLvlText = document.createTextNode('[' + damage["maxDmgByLvl"][0] + " to " + damage["maxDmgByLvl"][17]
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
                  if (damage["maxEnemyMaxHPRatio"]) {
                    var maxEnemyMaxHPRatioValue = JSON.stringify(damage["maxEnemyMaxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxEnemyMaxHPRatioText = document.createTextNode(" (+" + maxEnemyMaxHPRatioValue + " Enemy Max HP Ratio)")
                    abilityDiv.appendChild(maxEnemyMaxHPRatioText)
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
                };

                if (damage["minMinDmg"]) {
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br);
                  var minDmgU = document.createElement('u');
                  minDmgU.innerText = 'Minimum Damage';
                  abilityDiv.appendChild(minDmgU);
                  var minDmgText = document.createTextNode(': ' + JSON.stringify(damage["minMinDmg"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(minDmgText);
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

                    if (part["system"] === "minMax" ) {
                      var minU = document.createElement('u');
                      minU.innerText = 'Min'
                      abilityDiv.appendChild(minU)
                      var dash = document.createTextNode(' - ');
                      abilityDiv.appendChild(dash);
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
                      var maxU = document.createElement('u');
                      maxU.innerText = 'Max'
                      abilityDiv.appendChild(maxU)
                      var dash2 = document.createTextNode(' - ');
                      abilityDiv.appendChild(dash2);
                      if (part["maxDmgRatio"]) {
                        function multiplyByRatio(x) {
                          return (x * part["maxDmgRatio"]).toFixed(countDecimals(x) + countDecimals(part["maxDmgRatio"]))
                        };
                        if (part["minDmg"]) {
                          var maxDmgArray = JSON.stringify(part["minDmg"].map(multiplyByRatio)).replace(/,/g, ', ').replace(/"/g,"")
                          var maxDmgText = document.createTextNode(maxDmgArray)
                          abilityDiv.appendChild(maxDmgText)
                        }
                        if (typeof part["minAPRatio"] === 'object') {
                          var maxAPRatioValue = JSON.stringify(part["minAPRatio"].map(multiplyByRatio)).replace(/,/g, ', ').replace(/^\[|]$/g, '').replace(/"/g,"")
                          var maxAPRatioText = document.createTextNode(" (+"+ maxAPRatioValue + " AP Ratio)")
                          abilityDiv.appendChild(maxAPRatioText)
                        } else if (part["minAPRatio"]) {
                          var maxAPRatioValue = (part["minAPRatio"] * part["maxDmgRatio"]).toFixed(countDecimals(part["minAPRatio"]) + countDecimals(part["maxDmgRatio"]))
                          var maxAPRatioText = document.createTextNode(" (+" + maxAPRatioValue + " AP Ratio)")
                          abilityDiv.appendChild(maxAPRatioText)
                        }
                        if (typeof part["minADRatio"] === 'object') {
                          var maxADRatioValue = JSON.stringify(part["minADRatio"].map(multiplyByRatio)).replace(/,/g, ', ').replace(/^\[|]$/g, '').replace(/"/g,"")
                          var maxADRatioText = document.createTextNode(" (+" + maxADRatioValue + " AD Ratio)")
                          abilityDiv.appendChild(maxADRatioText)
                        } else if (part["minADRatio"]) {
                          var maxADRatioValue = (part["minADRatio"] * part["maxDmgRatio"]).toFixed(countDecimals(part["minADRatio"]) + countDecimals(part["maxDmgRatio"]))
                          var maxADRatioText = document.createTextNode(" (+" + maxADRatioValue + " AD Ratio)")
                          abilityDiv.appendChild(maxADRatioText)
                        }
                        if (typeof part["minBonusADRatio"] === 'object') {
                        var maxBonusADRatioValue = JSON.stringify(part["minBonusADRatio"].map(multiplyByRatio)).replace(/,/g, ', ').replace(/^\[|]$/g, '').replace(/"/g,"")
                        var maxBonusADRatioText = document.createTextNode(" (+" + maxBonusADRatioValue + " Bonus AD Ratio)")
                        abilityDiv.appendChild(maxBonusADRatioText)
                        } else if (part["minBonusADRatio"]) {
                        var maxBonusADRatioValue = (part["minBonusADRatio"] * part["maxDmgRatio"]).toFixed(countDecimals(part["minBonusADRatio"]) + countDecimals(part["maxDmgRatio"]))
                        var maxBonusADRatioText = document.createTextNode(" (+" + maxBonusADRatioValue + " Bonus AD Ratio)")
                        abilityDiv.appendChild(maxBonusADRatioText)
                        }
                      }
                      
                      // I don't think a repeating part exists

                      /*if (part["repeat"]) {
                        function multiplyByRepeat(x, i) {
                          if (typeof part["repeat"] === 'object') {
                            return (x * part["repeat"][i]).toFixed(countDecimals(x) + countDecimals(part["repeat"][i]))
                          } else {
                            return (x * part["repeat"]).toFixed(countDecimals(x) + countDecimals(part["repeat"]))
                          }
                        };
                        var maxDmgArray = JSON.stringify(part["minDmg"].map(multiplyByRepeat)).replace(/,/g, ', ').replace(/"/g,"")
                        var maxDmgText = document.createTextNode(" Max - " + maxDmgArray)
                        abilityDiv.appendChild(maxDmgText)
                        if (typeof part["minAPRatio"] === 'number') {
                          if (typeof part["repeat"] === 'object') {
                            var maxAPRatioValue = JSON.stringify(part["repeat"].map(x => (x * part["minAPRatio"])
                            .toFixed(countDecimals(x) + countDecimals(part["minAPRatio"])))).replace(/,/g, ', ').replace(/^\[|]$/g, '').replace(/"/g,"")
                            var maxAPRatioText = document.createTextNode(" (+" + maxAPRatioValue + " AP Ratio)")
                            abilityDiv.appendChild(maxAPRatioText)
                          } else {
                            var maxAPRatioText = document.createTextNode(" (+" + part["minAPRatio"]*(part["repeat"]+1) + " AP Ratio)")
                            abilityDiv.appendChild(maxAPRatioText)
                          }
                        }
                        if (typeof part["minAPRatio"] === 'object') {
                          var maxAPRatioValue = JSON.stringify(part["minAPRatio"].map(multiplyByRepeat)).replace(/,/g, ', ').replace(/^\[|]$/g, '').replace(/"/g,"")
                          var maxAPRatioText = document.createTextNode(" (+" + maxAPRatioValue + " AP Ratio)")
                          abilityDiv.appendChild(maxAPRatioText)
                        } 
                      }*/
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
                    }
                    var next = array[i+1]
                    if (champLeftFile[ability]['damage'][next]) {
                      doubleBreak();
                    }
                  }
                  this.partNumberArray.map(partDamageMap)
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
                if (tickDamage["enemyMaxHPRatioPer100AP"]) {
                  var enemyMaxHPRatioValue = JSON.stringify(tickDamage["enemyMaxHPRatioPer100AP"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyMaxHPRatioText = document.createTextNode(" (+" + enemyMaxHPRatioValue + " Enemy Max HP Ratio Per 100 AP)")
                  abilityDiv.appendChild(enemyMaxHPRatioText)
                };
                if (tickDamage["maxHPRatio"]) {
                  var maxHPRatioValue = JSON.stringify(tickDamage["maxHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var maxHPRatioText = document.createTextNode(" (+" + maxHPRatioValue + " Max HP Ratio)")
                  abilityDiv.appendChild(maxHPRatioText)
                };
                if (tickDamage["enemyCurrentHPRatio"]) {
                  var enemyCurrentHPRatioValue = JSON.stringify(tickDamage["enemyCurrentHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var enemyCurrentHPRatioText = document.createTextNode(" (+" + enemyCurrentHPRatioValue + " Enemy Current HP Ratio)")
                  abilityDiv.appendChild(enemyCurrentHPRatioText)
                };
            
                if (tickDamage["system"] === "minMax" ) {
                  if (tickDamage["minDmg"]) {
                    var minDmgArray = JSON.stringify(tickDamage["minDmg"]).replace(/,/g, ', ')
                    var minDmgU = document.createElement('u')
                    minDmgU.innerText = 'Min'
                    abilityDiv.appendChild(minDmgU)
                    var minDmgText = document.createTextNode(" - " + minDmgArray)
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
                    var intervalText = document.createTextNode(' per tick, over ' + tickDamage["duration"] + ' seconds.');
                    abilityDiv.appendChild(intervalText);
                  }
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var maxDmgU = document.createElement('u')
                  maxDmgU.innerText = 'Max'
                  abilityDiv.appendChild(maxDmgU)
                  if (tickDamage["maxDmg"]) {
                    var maxDmgArray = JSON.stringify(tickDamage["maxDmg"]).replace(/,/g, ', ')
                    var maxDmgText = document.createTextNode(" - " + maxDmgArray)
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
                    var APRatioText = document.createTextNode(" (+" + multiplyByTicksRounded2(tickDamage["APRatio"])+ " AP Ratio)")
                    abilityDiv.appendChild(APRatioText)
                  };
                  if (tickDamage["ADRatio"]) {
                    var ADRatioText = document.createTextNode(" (+" + multiplyByTicksRounded2(tickDamage["ADRatio"]) + " AD Ratio)")
                    abilityDiv.appendChild(ADRatioText)
                  };
                  if (tickDamage["bonusADRatio"]) {
                    var bonusADRatioText = document.createTextNode(" (+" + multiplyByTicksRounded2(tickDamage["bonusADRatio"]) + " Bonus AD Ratio)")
                    abilityDiv.appendChild(bonusADRatioText)
                  };
                  if (tickDamage["enemyMaxHPRatio"]) {
                    var enemyMaxHPRatioText = document.createTextNode(" (+" + multiplyByTicksRounded2(tickDamage["enemyMaxHPRatio"]) + " Enemy Max HP Ratio)")
                    abilityDiv.appendChild(enemyMaxHPRatioText)
                  };
                  if (tickDamage["maxHPRatio"]) {
                    var maxHPRatioText = document.createTextNode(" (+" + multiplyByTicksRounded2(tickDamage["maxHPRatio"]) + " Max HP Ratio)")
                    abilityDiv.appendChild(maxHPRatioText)
                  };
                  if (tickDamage["enemyCurrentHPRatio"]) {
                    var enemyCurrentHPRatioText = document.createTextNode(" (+" + multiplyByTicksRounded2(tickDamage["enemyCurrentHPRatio"]) + " Enemy Current HP Ratio)")
                    abilityDiv.appendChild(enemyCurrentHPRatioText)
                  };
                  if (tickDamage["enemyMaxHPRatioPer100AP"]) {
                    var enemyMaxHPRatioText = document.createTextNode(" (+" + multiplyByTicksRounded2(tickDamage["enemyMaxHPRatioPer100AP"]) + " Enemy Max HP Ratio Per 100 AP)")
                    abilityDiv.appendChild(enemyMaxHPRatioText)
                  }
                  if (tickDamage["system"] === "minMax" ) {
                    var minDmgU = document.createElement('u')
                    minDmgU.innerText = 'Min'
                    abilityDiv.appendChild(minDmgU)
                    if (tickDamage["minDmg"]) {
                      var minDmgArray = JSON.stringify(tickDamage["minDmg"].map(multiplyByTicks)).replace(/,/g, ', ').replace(/"/g,"")
                      if (tickDamage["minDmgByLvl"]) {
                        var currentLvlDmg = multiplyByTicks(tickDamage["minDmgByLvl"][champLevel])
                        minDmgArray = JSON.stringify(tickDamage["minDmg"].map(multiplyByTicks).map(x => (Number(x) + Number(currentLvlDmg)))).replace(/,/g, ', ').replace(/"/g,"")
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
                        maxDmgArray = JSON.stringify(tickDamage["maxDmg"].map(multiplyByTicks).map(x => (Number(x) + Number(currentLvlDmg)))).replace(/,/g, ', ').replace(/"/g,"")
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
                if (passivePath["bonusArmor"]) {
                  var armorU = document.createElement('u');
                  armorU.innerText = 'Bonus Armor'
                  abilityDiv.appendChild(armorU)
                  var armorText = document.createTextNode(' - ' + JSON.stringify(passivePath["bonusArmor"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(armorText)
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
                if (passivePath["omniVamp"]) {
                  var omniVampU = document.createElement('u');
                  omniVampU.innerText = 'Omni Vamp Ratio'
                  abilityDiv.appendChild(omniVampU)
                  var omniVampText = document.createTextNode(' - (' + JSON.stringify(passivePath["omniVamp"]).replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(omniVampText)
                };
                if (passivePath["armorPen"]) {
                  var armorPenU = document.createElement('u');
                  armorPenU.innerText = 'Armor Pen Ratio'
                  abilityDiv.appendChild(armorPenU)
                  var armorPenText = document.createTextNode(' - (' + JSON.stringify(passivePath["armorPen"]).replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(armorPenText)
                };
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
                };
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
                if (healPath["dmgRatio"]) {
                  var dmgRatioU = document.createElement('u');
                  dmgRatioU.innerText = 'Damage Ratio';
                  abilityDiv.appendChild(dmgRatioU);
                  var dmgRatioText = document.createTextNode(' - ' + JSON.stringify(healPath["dmgRatio"]).replace(/,/g, ', '));
                  abilityDiv.appendChild(dmgRatioText);
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
                if (healPath["enemyMaxHPRatioPer100BonusAD"]) {
                  var enemyMaxHPRatioText = document.createTextNode(" (+" + healPath["enemyMaxHPRatioPer100BonusAD"] + " Enemy Max HP Ratio Per 100 Bonus AD)")
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
                  abilityDiv.appendChild(healByLvlText2)
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
                  if (healPath["maxMissingHPRatio"]) {
                    var maxMissingHPRatioValue = JSON.stringify(healPath["maxMissingHPRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                    var maxMissingHPRatioText = document.createTextNode(" (+" + maxMissingHPRatioValue + " Missing HP Ratio)")
                    abilityDiv.appendChild(maxMissingHPRatioText)
                  }
                }
                if (healPath["duration"]) {
                    var durationText = document.createTextNode(' over ' + healPath["duration"] + ' seconds.')
                    abilityDiv.appendChild(durationText)
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
                if (shieldPath["maxManaRatio"]) {
                  var maxManaRatioValue = JSON.stringify(shieldPath["maxManaRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var maxManaRatioText = document.createTextNode(" (+" + maxManaRatioValue + " Max Mana Ratio)")
                  abilityDiv.appendChild(maxManaRatioText)
                };
                if (shieldPath["system"] === "minMax" ) {
                  if (shieldPath["minShield"]) {
                    var minShieldArray = JSON.stringify(shieldPath["minShield"]).replace(/,/g, ', ')
                    var minU = document.createElement('u');
                    minU.innerText = 'Min'
                    abilityDiv.appendChild(minU)
                    var minShieldText = document.createTextNode(" - " + minShieldArray)
                    abilityDiv.appendChild(minShieldText)
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
                  }
                  if (shieldPath["maxShield"]) {
                    var maxShieldArray = JSON.stringify(shieldPath["maxShield"]).replace(/,/g, ', ')
                    var maxShieldText = document.createTextNode(maxShieldArray)
                    abilityDiv.appendChild(maxShieldText)
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
                  var durationText = document.createTextNode(' - ' + shieldPath["duration"])
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
                  var transformBold = document.createElement('b')
                  transformBold.innerText = 'Transform Stats - '
                  abilityDiv.appendChild(transformBold);
                  var HPRatioText = document.createTextNode('(HP Ratio: ' + revivePath["reviveTransform"]["HPRatio"] + '), ')
                  abilityDiv.appendChild(HPRatioText)
                  if (revivePath["reviveTransform"]["bonusArmorByLvl"]) {
                    var bonusArmorByLvlText = document.createTextNode('(Bonus Armor: ' + revivePath["reviveTransform"]["bonusArmorByLvl"][0] 
                    + " to " + revivePath["reviveTransform"]["bonusArmorByLvl"][17] + ", based on lvl. ")
                    var currentlyText = document.createTextNode('Currently: ' + revivePath["reviveTransform"]["bonusArmorByLvl"][champLevel] + '), ')
                    abilityDiv.appendChild(bonusArmorByLvlText);
                    abilityDiv.appendChild(currentlyText);
                  };
                  if (revivePath["reviveTransform"]["bonusMagicResistByLvl"]) {
                    var bonusMagicResistByLvlText = document.createTextNode('(Bonus Magic Resist: ' + revivePath["reviveTransform"]["bonusMagicResistByLvl"][0] 
                    + " to " + revivePath["reviveTransform"]["bonusMagicResistByLvl"][17] + ", based on lvl. ")
                    var currentlyText = document.createTextNode('Currently: ' + revivePath["reviveTransform"]["bonusMagicResistByLvl"][champLevel] + ')')
                    abilityDiv.appendChild(bonusMagicResistByLvlText);
                    abilityDiv.appendChild(currentlyText);
                  }
                  if (revivePath["reviveTransform"]["armorRatio"]) {
                    var armorRatioText = document.createTextNode('(Armor Ratio: ' + revivePath["reviveTransform"]["armorRatio"] + '), ')
                    abilityDiv.appendChild(armorRatioText)
                  };
                  if (revivePath["reviveTransform"]["magicResistRatio"]) {
                    var magicResistRatioText = document.createTextNode('(Magic Resist Ratio: ' + revivePath["reviveTransform"]["magicResistRatio"] + '), ')
                    abilityDiv.appendChild(magicResistRatioText)
                  };
                  if (revivePath["reviveTransform"]["aoeResist"]) {
                    var aoeResistText = document.createTextNode('(AOE Resist Ratio: ' + revivePath["reviveTransform"]["aoeResist"] + ')')
                    abilityDiv.appendChild(aoeResistText)
                  }
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u')
                  durationU.innerText = "Duration"
                  abilityDiv.appendChild(durationU)
                  if (revivePath["reviveTransform"]["duration"]) {
                    var durationText = document.createTextNode(' - ' + revivePath["reviveTransform"]["duration"])
                    abilityDiv.appendChild(durationText);
                  }
                  if (revivePath["reviveTransform"]["durationByLvl"]) {
                    var durationByLvlText = document.createTextNode(' - [' + revivePath["reviveTransform"]["durationByLvl"][0] 
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
                  var healthPerAPText = document.createTextNode(' (+' + revivePath["healthPerAP"] + ' Health per AP)')
                  abilityDiv.appendChild(healthPerAPText);
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
                if (reduxPath["duration"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration'
                  abilityDiv.appendChild(durationU);
                  var durationText = document.createTextNode(' - ' + JSON.stringify(reduxPath["duration"]).replace(/,/g, ', '))
                  abilityDiv.appendChild(durationText)
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
                }
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
                if (bonusStatsPath["ADRatio"]) {
                  var bonusADRatioU = document.createElement('u');
                  bonusADRatioU.innerText = 'Attack Damage Ratio';
                  abilityDiv.appendChild(bonusADRatioU);
                  var bonusADRatioText = document.createTextNode(' - (' + JSON.stringify(bonusStatsPath["ADRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(bonusADRatioText);
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                if (bonusStatsPath["healingRatio"]) {
                  var healingRatioU = document.createElement('u');
                  healingRatioU.innerText = 'Increased Healing Ratio';
                  abilityDiv.appendChild(healingRatioU);
                  var healingRatioText = document.createTextNode(' - (' + JSON.stringify(bonusStatsPath["healingRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(healingRatioText);
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
                  var healthText = document.createTextNode(JSON.stringify(bonusHealthPath["healthPerStack"]).replace(/,/g, ', ') + ' per Stack')
                  abilityDiv.appendChild(healthText);
                  doubleBreak();
                };
              }

              if (champLeftFile[ability]["maxHPRegen"]) {
                var HPRegenBold = document.createElement('b');
                HPRegenBold.innerText = 'Max HP Ratio Regenerated: ';
                abilityDiv.appendChild(HPRegenBold);
                var HPRegenText = document.createTextNode(JSON.stringify(champLeftFile[ability]["maxHPRegen"]).replace(/,/g, ', '));
                abilityDiv.appendChild(HPRegenText);
                doubleBreak();
              }

              if (champLeftFile[ability]["bonusAttackDamage"]) {
                var bonusADPath = champLeftFile[ability]["bonusAttackDamage"]
                var bonusADBold = document.createElement('b');
                bonusADBold.innerText = 'Bonus Attack Damage: '
                abilityDiv.appendChild(bonusADBold);
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
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ' Armor Ratio)');
                  abilityDiv.appendChild(armorRatioText);
                };
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
                  var bonusASRatio = document.createTextNode('(' + JSON.stringify(ASPath['attackSpeed'])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')')
                  abilityDiv.appendChild(bonusASRatio);
                }
                if (ASPath['minAttackSpeed']) {
                  var minASU = document.createElement('u');
                  minASU.innerText = 'Min'
                  abilityDiv.appendChild(minASU);
                  var minASRatio = document.createTextNode(' - (' + JSON.stringify(ASPath['minAttackSpeed'])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')');
                  abilityDiv.appendChild(minASRatio)
                  var br = document.createElement('br')
                  abilityDiv.appendChild(br)
                  var maxASU = document.createElement('u');
                  maxASU.innerText = 'Max'
                  abilityDiv.appendChild(maxASU);
                  var maxASRatio = document.createTextNode(' - (' + JSON.stringify(ASPath['maxAttackSpeed'])
                  .replace(/,/g, ', ').replace(/^\[|]$/g, '') + ')');
                  abilityDiv.appendChild(maxASRatio)
                }
                if (ASPath["duration"]) {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var durationU = document.createElement('u');
                  durationU.innerText = 'Duration'
                  abilityDiv.appendChild(durationU)
                  var durationText = document.createTextNode(' - ' + ASPath["duration"])
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

              if (champLeftFile[ability]["duration"]) {
                var durationBold = document.createElement('b');
                durationBold.innerText = "Duration: "
                abilityDiv.appendChild(durationBold)
                var durationText = document.createTextNode(JSON.stringify(champLeftFile[ability]["duration"]).replace(/,/g, ', '))
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
                var br = document.createElement('br');
                abilityDiv.appendChild(br);
                var refundU = document.createElement('u');
                refundU.innerText = 'Cooldown Refund'
                abilityDiv.appendChild(refundU);
                var refundText = document.createTextNode(': ' + champLeftFile[ability]["coolDownRefund"]);
                abilityDiv.appendChild(refundText);
              }
              if (champLeftFile[ability]["coolDownRefundRatio"]) {
                var br = document.createElement('br');
                abilityDiv.appendChild(br);
                var refundU = document.createElement('u');
                refundU.innerText = 'Cooldown Refund Ratio'
                abilityDiv.appendChild(refundU);
                var refundText = document.createTextNode(': ' + champLeftFile[ability]["coolDownRefundRatio"]);
                abilityDiv.appendChild(refundText);
              }
              if (champLeftFile[ability]["maxCoolDownRefundRatio"]) {
                var br = document.createElement('br');
                abilityDiv.appendChild(br);
                var refundU = document.createElement('u');
                refundU.innerText = 'Max Cooldown Refund Ratio'
                abilityDiv.appendChild(refundU);
                var refundText = document.createTextNode(': ' + champLeftFile[ability]["maxCoolDownRefundRatio"]);
                abilityDiv.appendChild(refundText);
              }

              /*if (champLeftFile[this.transformAbilities[i]]) {
                var tfAbility = this.transformAbilities[i];
                var hr = document.createElement('hr');
                abilityDiv.appendChild(hr);
                var transformU = document.createElement('u');
                var transformB = document.createElement('b');
                transformU.appendChild(transformB);
                transformB.innerText = 'Transformed ' + ability
                abilityDiv.appendChild(transformU);
                doubleBreak();
              }*/
            } else {
              /* COPY PASTE RANK 0 NESTED IFS BUT REPLACE ARRAYS WITH INDIVIDUAL VALUES */
              /* Place non-rank related variables outside of the rank nesting (ex: dmgType) */
              if (champLeftFile[ability]["coolDown"]) {
                var coolDown = champLeftFile[ability]["coolDown"][this.state[`${ability}RankLeft`]]
                console.log("cooldown: " + coolDown)
              };
              if (champLeftFile[ability]["damage"]) {
                var damage = champLeftFile[ability]["damage"]
                if (damage["type"]) {
                  var dmgType = damage["type"];
                  if (dmgType === 'Phys') {
                    dmgType = 'Physical'
                  }
                  var abilityText = document.createTextNode(dmgType + " Damage: ");
                  abilityDiv.appendChild(abilityText);
                };
                if (damage["dmg"]) {
                  var dmgValue = damage["dmg"][this.state[`${ability}RankLeft`]]
                };
                if (damage["dmgByLvl"]) {
                  var abilityText = document.createTextNode(damage["dmgByLvl"][0] + " - " + damage["dmgByLvl"][17]
                  + ", based on lvl. Currently: " + damage["dmgByLvl"][champLevel]);
                  abilityDiv.appendChild(abilityText);
                };
                if (damage["system"] === "minMax" ) {
                  if (damage["minDmg"]) {

                  }
                }
              }
            }
            console.log(this[`${ability}Details`])
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
    console.log(this.abilities1.Q.coolDown)           
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
            Crit Chance: {Math.round(this.state.stats1.cc)}%<br />
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
            Crit Chance: {Math.round(this.state.stats2.cc)}%<br />
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