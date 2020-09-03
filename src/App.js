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
  transformAbilities = ["passive", "Q", "W", "E", "R", "passiveTransform",
   "QTransform", "WTransform", "ETransform", "RTransform"]
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
          console.log(ability);
          if (champLeftFile[ability]) {
            function countDecimals(value) {
              if(Math.floor(value) === value){ 
                return 0
              } else {
              return value.toString().split(".")[1].length || 0; 
              }
            }
            function convertToPercentage(value) {
              if (countDecimals(value) > 2) {
                return (value*100).toFixed(countDecimals(value) - 2)
              } else {
                return (value*100).toFixed(0)
              }
            }
            console.log("ability rank left: " + this.state[`${ability}RankLeft`])
            this[`${ability}Details`] = champLeftFile[ability]
            if (this.state[`${ability}RankLeft`] === 0 || ability === 'passive') {
              if (champLeftFile[ability]["text"]) {
                var text = document.createTextNode(champLeftFile[ability]["text"])
                abilityDiv.appendChild(text)
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
                autoEmpowerBold.innerText = 'Auto Empower: '
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
                if (damage["armorRatio"]) {
                  var armorRatioValue = JSON.stringify(damage["armorRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                  var armorRatioText = document.createTextNode(" (+" + armorRatioValue + " Armor Ratio)")
                  abilityDiv.appendChild(armorRatioText)
                };
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
                var br = document.createElement("br");
                var br2 = document.createElement("br");
                abilityDiv.appendChild(br);
                abilityDiv.appendChild(br2);
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
                if (damage["APRatio"]) {
                  var APRatioText = document.createTextNode(" (+" + damage["APRatio"] + " AP Ratio)")
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

                if (damage["system"] === "min" ) {
                  var br = document.createElement('br')
                  abilityDiv.appendChild(br)
                  var minDmgText = document.createTextNode('Min Dmg: ')
                }

                if (damage["system"] === "minMax" ) {
                  if (damage["minDmg"]) {
                    var minDmgArray = JSON.stringify(damage["minDmg"]).replace(/,/g, ', ')
                    var minDmgU = document.createElement('u')
                    minDmgU.innerText = 'Min'
                    abilityDiv.appendChild(minDmgU)
                    var minDmgText = document.createTextNode(" - " + minDmgArray)
                    abilityDiv.appendChild(minDmgText)
                    if (damage["minAPRatio"]) {
                      var minAPRatioValue = JSON.stringify(damage["minAPRatio"]).replace(/,/g, ', ')
                      var minAPRatioText = document.createTextNode(" (+" + minAPRatioValue + " AP Ratio)")
                      abilityDiv.appendChild(minAPRatioText)
                    }
                    if (damage["minADRatio"]) {
                      var minADRatioValue = JSON.stringify(damage["minADRatio"]).replace(/,/g, ', ')
                      var minADRatioText = document.createTextNode(" (+" + minADRatioValue + " AD Ratio)")
                      abilityDiv.appendChild(minADRatioText)
                    }
                    if (damage["minBonusADRatio"]) {
                      var minBonusADRatioValue = JSON.stringify(damage["minBonusADRatio"]).replace(/,/g, ', ')
                      var minBonusADRatioText = document.createTextNode(" (+" + minBonusADRatioValue + " Bonus AD Ratio)")
                      abilityDiv.appendChild(minBonusADRatioText)
                    }
                    var br = document.createElement("br");
                    abilityDiv.appendChild(br);

                    if (damage["maxDmgRatio"]) {
                      function multiplyByRatio(x) {
                        return (x * damage["maxDmgRatio"]).toFixed(countDecimals(x) + countDecimals(damage["maxDmgRatio"]))
                      };
                      var maxDmgArray = JSON.stringify(damage["minDmg"].map(multiplyByRatio)).replace(/,/g, ', ')
                      var maxDmgU = document.createElement('u')
                      maxDmgU.innerText = 'Max'
                      abilityDiv.appendChild(maxDmgU)
                      var maxDmgText = document.createTextNode(" - " + maxDmgArray)
                      abilityDiv.appendChild(maxDmgText)
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
                      var maxDmgArray = JSON.stringify(damage["minDmg"].map(multiplyByRepeat)).replace(/,/g, ', ').replace(/"/g,"")
                      var maxDmgU = document.createElement('u')
                      maxDmgU.innerText = 'Max'
                      abilityDiv.appendChild(maxDmgU)
                      var maxDmgText = document.createTextNode(" - " + maxDmgArray)
                      abilityDiv.appendChild(maxDmgText)
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
                  }
                  if (damage["maxDmg"]) {
                    var maxDmgArray = JSON.stringify(damage["maxDmg"]).replace(/,/g, ', ')
                    var maxDmgU = document.createElement('u')
                    maxDmgU.innerText = 'Max'
                    abilityDiv.appendChild(maxDmgU)
                    var maxDmgText = document.createTextNode(" - " + maxDmgArray)
                    abilityDiv.appendChild(maxDmgText)
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
                };

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
                      if (part["minDmg"]) {
                        var minDmgArray = JSON.stringify(part["minDmg"]).replace(/,/g, ', ')
                        var minU = document.createElement('u');
                        minU.innerText = 'Min'
                        abilityDiv.appendChild(minU)
                        var minDmgText = document.createTextNode(" - " + minDmgArray)
                        abilityDiv.appendChild(minDmgText)
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
                      if (part["maxDmgRatio"]) {
                        function multiplyByRatio(x) {
                          return (x * part["maxDmgRatio"]).toFixed(countDecimals(x) + countDecimals(part["maxDmgRatio"]))
                        };
                        var maxDmgArray = JSON.stringify(part["minDmg"].map(multiplyByRatio)).replace(/,/g, ', ').replace(/"/g,"")
                        var maxU = document.createElement('u');
                        maxU.innerText = 'Max'
                        abilityDiv.appendChild(maxU)
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
                    }
                      if (part["maxDmg"]) {
                        var maxDmgArray = JSON.stringify(part["maxDmg"]).replace(/,/g, ', ')
                        var maxDmgText = document.createTextNode(" Max - " + maxDmgArray)
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
                      var br = document.createElement("br");
                      abilityDiv.appendChild(br);
                      var br2 = document.createElement("br");
                      abilityDiv.appendChild(br2);
                    }
                  }
                  this.partNumberArray.map(partDamageMap)
                }
                var br = document.createElement("br");
                var br2 = document.createElement("br");
                abilityDiv.appendChild(br);
                abilityDiv.appendChild(br2);
              }

              if (champLeftFile[ability]["tickDamage"]) {
                var tickDamage = champLeftFile[ability]["tickDamage"]
                if (tickDamage["type"]) {
                  var dmgType = tickDamage["type"];
                  if (dmgType === 'phys') {
                    dmgType = 'Physical'
                  } else {
                    dmgType = dmgType[0].toUpperCase() + dmgType.slice(1)
                  }
                  var dmgTypeBold = document.createElement('b')
                  dmgTypeBold.innerText = dmgType + " Damage over time: "
                  abilityDiv.appendChild(dmgTypeBold);
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
                    if (tickDamage["minAPRatio"]) {
                      var minAPRatioValue = JSON.stringify(tickDamage["minAPRatio"]).replace(/,/g, ', ')
                      var minAPRatioText = document.createTextNode(" (+" + minAPRatioValue + " AP Ratio)")
                      abilityDiv.appendChild(minAPRatioText)
                    }
                    if (tickDamage["minADRatio"]) {
                      var minADRatioValue = JSON.stringify(tickDamage["minADRatio"]).replace(/,/g, ', ')
                      var minADRatioText = document.createTextNode(" (+" + minADRatioValue + " AD Ratio)")
                      abilityDiv.appendChild(minADRatioText)
                    }
                    if (tickDamage["minBonusADRatio"]) {
                      var minBonusADRatioValue = JSON.stringify(tickDamage["minBonusADRatio"]).replace(/,/g, ', ')
                      var minBonusADRatioText = document.createTextNode(" (+" + minBonusADRatioValue + " Bonus AD Ratio)")
                      abilityDiv.appendChild(minBonusADRatioText)
                    }
                    var br = document.createElement("br");
                    abilityDiv.appendChild(br);
                  }
                  if (tickDamage["maxDmg"]) {
                    var maxDmgArray = JSON.stringify(tickDamage["maxDmg"]).replace(/,/g, ', ')
                    var maxDmgU = document.createElement('u')
                    maxDmgU.innerText = 'Max'
                    abilityDiv.appendChild(maxDmgU)
                    var maxDmgText = document.createTextNode(" - " + maxDmgArray)
                    abilityDiv.appendChild(maxDmgText)
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
                };
                if (tickDamage["interval"] && tickDamage["ticks"]) {
                  var intervalText = document.createTextNode(' per ' + tickDamage["interval"] + ' sec, for ' + 
                  tickDamage["interval"]*tickDamage["ticks"].toFixed(countDecimals(tickDamage["interval"]) + countDecimals(tickDamage["ticks"])) + ' seconds.')
                  abilityDiv.appendChild(intervalText)
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                  var totalDmgU = document.createElement('u')
                  totalDmgU.innerText = 'Total Damage'
                  abilityDiv.appendChild(totalDmgU)
                  var colonSpace = document.createTextNode(': ')
                  abilityDiv.appendChild(colonSpace)

                  function multiplyByTicks(x) {
                    return (x * tickDamage["ticks"]).toFixed()
                  };
                  function multiplyByTicksRounded2(x) {
                    if ( 2 < countDecimals(x) ) {
                      return (x * tickDamage["ticks"]).toFixed(2)
                    } else {
                      return (x * tickDamage["ticks"]).toFixed(countDecimals(x))
                    }
                  }
            
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
                }
                if (tickDamage["interval"] && !tickDamage["ticks"]) {
                  var intervalText = document.createTextNode(' per ' + tickDamage["interval"] + ' sec.')
                  abilityDiv.appendChild(intervalText)
                }
                var br = document.createElement("br");
                var br2 = document.createElement("br");
                abilityDiv.appendChild(br);
                abilityDiv.appendChild(br2);
              }

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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br)
                  var br2 = document.createElement('br');
                  abilityDiv.appendChild(br2)
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
                  var br = document.createElement('br');
                  abilityDiv.appendChild(br)
                  var br2 = document.createElement('br');
                  abilityDiv.appendChild(br2)
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
                if (healPath["APRatio"]) {
                  var APRatioText = document.createTextNode(" (+" + healPath["APRatio"] + " AP Ratio)")
                  abilityDiv.appendChild(APRatioText)
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
                if (healPath["system"] === "minMax" ) {
                  if (healPath["minHeal"]) {
                    var minHealArray = JSON.stringify(healPath["minHeal"]).replace(/,/g, ', ')
                    var minU = document.createElement('u');
                    minU.innerText = 'Min'
                    abilityDiv.appendChild(minU)
                    var minHealText = document.createTextNode(" - " + minHealArray)
                    abilityDiv.appendChild(minHealText)
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
                    var br = document.createElement("br");
                    abilityDiv.appendChild(br);
                    var maxU = document.createElement('u');
                    maxU.innerText = 'Max'
                    abilityDiv.appendChild(maxU)
                    var dash = document.createTextNode(' - ')
                    abilityDiv.appendChild(dash)
                  }
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
                }
                if (healPath["duration"]) {
                    var durationText = document.createTextNode(' over ' + healPath["duration"] + ' seconds.')
                    abilityDiv.appendChild(durationText)
                }
              
                var br2 = document.createElement("br");
                var br3 = document.createElement("br");
                abilityDiv.appendChild(br2);
                abilityDiv.appendChild(br3);
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
                if (shieldPath["type"] !== 'Spell') {
                  var br = document.createElement("br");
                  abilityDiv.appendChild(br);
                }
                var durationU = document.createElement('u');
                durationU.innerText = 'Duration'
                abilityDiv.appendChild(durationU)
                var durationText = document.createTextNode(' - ' + shieldPath["duration"])
                abilityDiv.appendChild(durationText)
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
                var br2 = document.createElement("br");
                var br3 = document.createElement("br");
                abilityDiv.appendChild(br2);
                abilityDiv.appendChild(br3);
              }

              if (champLeftFile[ability]["damageRedux"]) {
                var reduxPath = champLeftFile[ability]["damageRedux"]
                var reducedDmgBold = document.createElement('b');
                if (reduxPath["type"] !== 'all') {
                  reducedDmgBold.innerText = 'Reduced ' + reduxPath["type"] + ' Damage: '
                } else {
                  reducedDmgBold.innerText = 'Reduced Damage: '
                }
                abilityDiv.appendChild(reducedDmgBold)
                if (reduxPath["dmgRatio"]) {
                  var reducedDmgText = document.createTextNode('Takes only ' + JSON.stringify(reduxPath["dmgRatio"]
                  .map(convertToPercentage)).replace(/,/g, ', ').replace(/"/g,"") + '% of damage received');
                  abilityDiv.appendChild(reducedDmgText);
                }
                if (reduxPath["dmg"]) {
                  var reducedDmgText = document.createTextNode('Reduced by ' + JSON.stringify(reduxPath["dmg"]).replace(/,/g, ', ')
                  );
                  abilityDiv.appendChild(reducedDmgText)
                }
                if (reduxPath["bonusArmorRatio"]) {
                  var bonusArmorRatioText = document.createTextNode(' (+' + reduxPath["bonusArmorRatio"] + ' Bonus Armor Ratio)')
                  abilityDiv.appendChild(bonusArmorRatioText)
                }
                if (reduxPath["bonusMagicResistRatio"]) {
                  var bonusMagicResistRatioText = document.createTextNode(' (+' + reduxPath["bonusMagicResistRatio"] + ' Bonus Magic Resist Ratio)')
                  abilityDiv.appendChild(bonusMagicResistRatioText)
                }
                if (reduxPath["duration"]) {
                  var durationText = document.createTextNode(' for ' + reduxPath["duration"] + ' seconds.')
                  abilityDiv.appendChild(durationText)
                }
                var br = document.createElement("br");
                var br2 = document.createElement("br");
                abilityDiv.appendChild(br);
                abilityDiv.appendChild(br2);
              };

              if (champLeftFile[ability]["magicDamageRedux"]) {
                var reduxPath = champLeftFile[ability]["magicDamageRedux"]
                var reducedDmgBold = document.createElement('b');
                reducedDmgBold.innerText = 'Reduced Magic Damage: '
                abilityDiv.appendChild(reducedDmgBold)
                if (reduxPath["reduxRatio"]) {
                  var reduxRatioText = document.createTextNode('Reduced by ' + JSON.stringify(reduxPath["reduxRatio"].map(convertToPercentage)).replace(/,/g, ', ').replace(/"/g,"") + '%')
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
                reducedDmgBold.innerText = 'Reduced Physical Damage: '
                abilityDiv.appendChild(reducedDmgBold)
                if (reduxPath["reduxRatio"]) {
                  var reduxRatioText = document.createTextNode('Reduced by ' + JSON.stringify(reduxPath["reduxRatio"].map(convertToPercentage)).replace(/,/g, ', ').replace(/"/g,"") + '%')
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
                var br2 = document.createElement("br");
                abilityDiv.appendChild(br);
                abilityDiv.appendChild(br2);
              }

              if (champLeftFile[ability]["interruptCC"]) {
                var interruptCCArray = JSON.stringify(champLeftFile[ability]["interruptCC"]).replace(/,/g, ', ')
                var interruptCCText = document.createTextNode(interruptCCArray)
                var interruptCCBold = document.createElement('b');
                interruptCCBold.innerText = 'Crowd Control Duration: '
                abilityDiv.appendChild(interruptCCBold)
                abilityDiv.appendChild(interruptCCText)
                var br = document.createElement("br");
                var br2 = document.createElement("br");
                abilityDiv.appendChild(br);
                abilityDiv.appendChild(br2);
              };

              if (champLeftFile[ability]["coolDown"]) {
                var coolDownArray = JSON.stringify(champLeftFile[ability]["coolDown"]).replace(/,/g, ', ')
                var coolDownBold = document.createElement('b');
                coolDownBold.innerText = "Cooldown: ";
                abilityDiv.appendChild(coolDownBold)
                var coolDownText = document.createTextNode(coolDownArray);
                abilityDiv.appendChild(coolDownText)
                console.log("cooldown: " + coolDownArray)
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
      /* alert(two.getMilliseconds()-one.getMilliseconds()); */
      return this.setState({ champIconUrlLeft: 
      `http://ddragon.leagueoflegends.com/cdn/10.12.1/img/champion/${champName}.png`})
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