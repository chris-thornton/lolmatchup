import React, { Component } from 'react';
import './App.css';
import champList from './components/champList';
import ChampDropDownLeft from './components/ChampDropDownLeft';
import ChampDropDownRight from './components/ChampDropDownRight';
import logo from './logo.png';
import versus from './versus.png';
import defaultChampIcon from './defaultChampIcon.png';

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchField1: '',
      searchField2: '',
      filteredChampsLeft: [],
      filteredChampsRight: [],
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
      return champ.toLowerCase().startsWith(event.target.value.toLowerCase()) })
    }); 
  };

  onSearchChange2 = (event) => {
    this.setState({ searchField2: event.target.value });
    this.setState({ filteredChampsRight: champList.filter(champ => {
      return champ.toLowerCase().startsWith(event.target.value.toLowerCase()) })
    });
  }

  abilities = ["passive", "Q", "W", "E", "R"]
  transformAbilities = ["passive", "Q", "W", "E", "R", "passiveTransform",
   "QTransform", "WTransform", "ETransform", "RTransform"]

  onChampClick = (event) => {

    var one=new Date();

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
            console.log("ability rank left: " + this.state[`${ability}RankLeft`])
            this[`${ability}Details`] = champLeftFile[ability]
            if (this.state[`${ability}RankLeft`] === 0) {
              if (champLeftFile[ability]["damage"]) {
                var damage = champLeftFile[ability]["damage"]
                if (damage["type"]) {
                  var dmgType = damage["type"];
                  dmgType = dmgType.toUpperCase();
                  if (dmgType === 'PHYS') {
                    dmgType = 'PHYSICAL'
                  }
                  var dmgTypeText = document.createTextNode(dmgType + " DAMAGE: ");
                  abilityDiv.appendChild(dmgTypeText);
                };
                if (damage["dmg"]) {
                  var dmgArray = JSON.stringify(damage["dmg"]).replace(/,/g, ', ')
                  var dmgArrayText = document.createTextNode(dmgArray);
                  abilityDiv.appendChild(dmgArrayText);
                };
                if (damage["dmgByLvl"]) {
                  var dmgByLvlText = document.createTextNode(damage["dmgByLvl"][0] + " - " + damage["dmgByLvl"][17]
                  + ", based on lvl. Currently: " + damage["dmgByLvl"][champLevel]);
                  abilityDiv.appendChild(dmgByLvlText);
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
                if (damage["system"] === "minMax" ) {
                  if (damage["minDmg"]) {
                    var minDmgArray = JSON.stringify(damage["minDmg"]).replace(/,/g, ', ')
                    var minDmgText = document.createTextNode("Min - " + minDmgArray)
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
                        return x * damage["maxDmgRatio"]
                      };
                      var maxDmgArray = JSON.stringify(damage["minDmg"].map(multiplyByRatio)).replace(/,/g, ', ')
                      var maxDmgText = document.createTextNode(" Max - " + maxDmgArray)
                      abilityDiv.appendChild(maxDmgText)
                      if (typeof damage["minAPRatio"] === 'object') {
                        var maxAPRatioValue = JSON.stringify(damage["minAPRatio"].map(multiplyByRatio)).replace(/,/g, ', ')
                        var maxAPRatioText = document.createTextNode(" (+"+ maxAPRatioValue + " AP Ratio)")
                        abilityDiv.appendChild(maxAPRatioText)
                      } else if (damage["minAPRatio"]) {
                        var maxAPRatioValue = damage["minAPRatio"] * damage["maxDmgRatio"]
                        var maxAPRatioText = document.createTextNode(" (+" + maxAPRatioValue + " AP Ratio)")
                        abilityDiv.appendChild(maxAPRatioText)
                      }
                      if (typeof damage["minADRatio"] === 'object') {
                        var maxADRatioValue = JSON.stringify(damage["minADRatio"].map(multiplyByRatio)).replace(/,/g, ', ')
                        var maxADRatioText = document.createTextNode(" (+" + maxADRatioValue + " AD Ratio)")
                        abilityDiv.appendChild(maxADRatioText)
                      } else if (damage["minADRatio"]) {
                        var maxADRatioValue = damage["minADRatio"] * damage["maxDmgRatio"]
                        var maxADRatioText = document.createTextNode(" (+" + maxADRatioValue + " AD Ratio)")
                        abilityDiv.appendChild(maxADRatioText)
                      }
                      if (typeof damage["minBonusADRatio"] === 'object') {
                        var maxBonusADRatioValue = JSON.stringify(damage["minBonusADRatio"].map(multiplyByRatio)).replace(/,/g, ', ')
                        var maxBonusADRatioText = document.createTextNode(" (+" + maxBonusADRatioValue + " Bonus AD Ratio)")
                        abilityDiv.appendChild(maxBonusADRatioText)
                      } else if (damage["minBonusADRatio"]) {
                        var maxBonusADRatioValue = damage["minBonusADRatio"] * damage["maxDmgRatio"]
                        var maxBonusADRatioText = document.createTextNode(" (+" + maxBonusADRatioValue + " Bonus AD Ratio)")
                        abilityDiv.appendChild(maxBonusADRatioText)
                      }
                    }
                    if (damage["repeat"]) {
                      function multiplyByRepeat(x, i) {
                        if (typeof damage["repeat"] === 'object') {
                          return x * damage["repeat"][i]
                        } else {
                          return x * damage["repeat"]
                        }
                      };
                      var maxDmgArray = JSON.stringify(damage["minDmg"].map(multiplyByRepeat)).replace(/,/g, ', ')
                      var maxDmgText = document.createTextNode(" Max - " + maxDmgArray)
                      abilityDiv.appendChild(maxDmgText)
                      if (typeof damage["minAPRatio"] === 'number') {
                        if (typeof damage["repeat"] === 'object') {
                          var maxAPRatioValue = JSON.stringify(damage["repeat"].map(x => x * damage["minAPRatio"])).replace(/,/g, ', ').replace(/^\[|]$/g, '')
                          var maxAPRatioText = document.createTextNode(" (+" + maxAPRatioValue + " AP Ratio)")
                          abilityDiv.appendChild(maxAPRatioText)
                        } else {
                          var maxAPRatioText = document.createTextNode(" (+" + damage["minAPRatio"]*(damage["repeat"]+1) + " AP Ratio)")
                          abilityDiv.appendChild(maxAPRatioText)
                        }
                      }
                      if (typeof damage["minAPRatio"] === 'object') {
                        var maxAPRatioValue = JSON.stringify(damage["minAPRatio"].map(multiplyByRepeat)).replace(/,/g, ', ')
                        var maxAPRatioText = document.createTextNode(" (+" + maxAPRatioValue + " AP Ratio)")
                        abilityDiv.appendChild(maxAPRatioText)
                      } 
                    }
                  }
                  if (damage["maxDmg"]) {
                    var maxDmgArray = JSON.stringify(damage["maxDmg"]).replace(/,/g, ', ')
                    var maxDmgText = document.createTextNode(" Max - " + maxDmgArray)
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
                }
                if (damage["system"] === "2Part") {
                  if (damage["type"] !== 'mixed') {
                    var part1Text = document.createTextNode("Part 1: ")
                    abilityDiv.appendChild(part1Text)
                  }
                }
              }
              var heal = false;
              var heal2 = false;
              if (champLeftFile[ability]["allHeal"]) {
                heal = champLeftFile[ability]["allHeal"]
              };
              if (champLeftFile[ability]["allyHeal"] && !champLeftFile[ability]["selfHeal"]) {
                heal = champLeftFile[ability]["allyHeal"]
              };
              if (champLeftFile[ability]["allyHeal"] && champLeftFile[ability]["selfHeal"]) {
                heal = champLeftFile[ability]["selfHeal"]
                heal2 = champLeftFile[ability]["allyHeal"]
              };
              if (heal) {
                console.log("heal: " + heal)
              }
              console.log("heal: " + JSON.stringify(heal))

              if (champLeftFile[ability]["coolDown"]) {
                var coolDownArray = JSON.stringify(champLeftFile[ability]["coolDown"]).replace(/,/g, ', ')
                var abilityText = document.createTextNode("COOLDOWN: " + coolDownArray);
                var br = document.createElement("br");
                var br2 = document.createElement("br");
                abilityDiv.appendChild(br);
                abilityDiv.appendChild(br2);
                abilityDiv.appendChild(abilityText)
                console.log("cooldown: " + coolDownArray)
              };
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
                  dmgType = dmgType.toUpperCase();
                  if (dmgType === 'PHYS') {
                    dmgType = 'PHYSICAL'
                  }
                  var abilityText = document.createTextNode(dmgType + " DAMAGE: ");
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
  }

  onRankChange2 = (event) => {
    var abilityFirstChar2 = event.currentTarget.id.charAt(0)
    this.setState({ [`${abilityFirstChar2}RankRight`]: event.target.value })              
  }

  preventKeyPress = (event) => {
    event.preventDefault()
  }


  render() {
    return (
      <div>

        <header className="navHeader">
          <div className="navLeft">
            <h2>Home</h2>
            <h2>Saved Builds</h2>
            <h2>About</h2>
            <h2 className="navRight">Login / Signup</h2>
          </div>
        </header>

        <div className="Logo">
          <img className="center" src={logo} alt='Logo' height="100px" width="100px"/>
        </div>

        <div className="flexDisplay">
          <input type="search" placeholder='Champion Name' onChange={this.onSearchChange} style={{width: 120}}
          />
          <input type="search" placeholder='Champion Name' onChange={this.onSearchChange2} style={{width: 120}}
          />
        </div>

        <div className="flexDisplay">
          <ChampDropDownLeft filteredChamps={ `${this.state.filteredChampsLeft}` } 
          onChampClick={this.onChampClick} />
          <ChampDropDownRight filteredChamps2={ `${this.state.filteredChampsRight}` } 
          onChampClick2={this.onChampClick2} />
        </div>

        <div className="flexDisplay">
          <img className='champIcon' src={ this.state.champIconUrlLeft } height="120px" width="120px"
          alt='Champion Icon' style={{position: 'relative', zIndex: -2, marginBottom: 10}} />
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
            Health: {Math.round(this.state.stats1.hp)}<br />
            Armor: {Math.round(this.state.stats1.arm)}<br />
            Magic Resist: {Math.round(this.state.stats1.mr)}<br />
            Attack Damage: {Math.round(this.state.stats1.ad)}<br />
            Attack Speed: {this.state.stats1.as.toFixed(3)}<br />
            Crit Chance: {Math.round(this.state.stats1.cc)}%<br />
            Mana: {Math.round(this.state.stats1.mana)}<br />
            Mana Per 5: {this.state.stats1.manaRegen.toFixed(3)}<br />
            Health Per 5: {this.state.stats1.hpRegen.toFixed(3)}<br />
            Ability Power: {this.state.stats1.ap}<br />
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

          <div className="hidden">
            <span><b><u>Passive </u></b></span> 
          </div>
          <div className="hidden abilityBox">
          </div>

          <div className="hidden">
              <span><b><u>Q </u></b></span><span>- rank: </span>
              <input id="QRankLeft" type="number" placeholder="0" min="0" max="5" 
              style={{width: "40px"}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
          </div>
          <div className="hidden abilityBox">
          </div>

          <div className="hidden">
              <span><b><u>W </u></b></span><span>- rank: </span>
              <input id="WRankLeft" type="number" placeholder="0" min="0" max="5" 
              style={{width: "40px"}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
          </div>
          <div className="hidden abilityBox">
          </div>

          <div className="hidden">
              <span><b><u>E </u></b></span><span>- rank: </span>
              <input id="ERankLeft" type="number" placeholder="0" min="0" max="5" 
              style={{width: "40px"}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
          </div>
          <div className="hidden abilityBox">
          </div>

          <div className="hidden">
              <span><b><u>R </u></b></span><span>- rank: </span>
              <input id="RRankLeft" type="number" placeholder="0" min="0" max="5"
              style={{width: "40px"}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
          </div>
          <div className="hidden abilityBox">
              Damage: <br />
              Shield: for seconds<br />
              Heal: <br />
              Bonus stats: <br />
              Cooldown: <br />
              Dmg / Cooldown: <br />
              Shield / Cooldown: <br />
              Heal / Cooldown: 
          </div>

          </div>
          
          <div>

            <div className="hidden">
              <span><b><u>Passive </u></b></span> 
            </div>
            <div className="hidden abilityBox">
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
            <div className="hidden abilityBoxRight">
                Damage: <br />
                Shield: for seconds<br />
                Heal: <br />
                Bonus stats: <br />
                Cooldown: <br />
                Dmg / Cooldown: <br />
                Shield / Cooldown: <br />
                Heal / Cooldown: 
            </div>

            <div className="hidden">
                <span><b><u>R </u></b></span><span>- rank: </span>
                <input id="RRankRight" type="number" placeholder="0" min="0" max="5"
                style={{width: "40px"}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange2}/>
            </div>
            <div className="hidden abilityBoxRight">
                Damage: <br />
                Shield: for seconds<br />
                Heal: <br />
                Bonus stats: <br />
                Cooldown: <br />
                Dmg / Cooldown: <br />
                Shield / Cooldown: <br />
                Heal / Cooldown: 
            </div>

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