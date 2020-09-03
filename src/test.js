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
    if (tickDamage["armorRatio"]) {
      var armorRatioValue = JSON.stringify(tickDamage["armorRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
      var armorRatioText = document.createTextNode(" (+" + armorRatioValue + " Armor Ratio)")
      abilityDiv.appendChild(armorRatioText)
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
    if (tickDamage["interval"]) {
        var intervalText = document.createTextNode(' per ' + tickDamage["interval"] + ' sec, for ' + 
        tickDamage["interval"]*tickDamage["ticks"].toFixed(countDecimals(tickDamage["interval"]) + countDecimals(tickDamage["ticks"]) + ' seconds.'))
    }

    // START OF TOTAL DAMAGE SECTION

    function multiplyByTicks(x) {
        return (x * tickDamage["ticks"]).toFixed(countDecimals(x))
    };

    if (tickDamage["dmg"]) {
        var dmgArray = JSON.stringify(tickDamage["dmg"].map(multiplyByTicks)).replace(/,/g, ', ')
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
        var APRatioText = document.createTextNode(" (+" + multiplyByTicks(tickDamage["APRatio"])+ " AP Ratio)")
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
      if (tickDamage["armorRatio"]) {
        var armorRatioValue = JSON.stringify(tickDamage["armorRatio"]).replace(/,/g, ', ').replace(/^\[|]$/g, '')
        var armorRatioText = document.createTextNode(" (+" + armorRatioValue + " Armor Ratio)")
        abilityDiv.appendChild(armorRatioText)
      };


    var br = document.createElement("br");
    var br2 = document.createElement("br");
    abilityDiv.appendChild(br);
    abilityDiv.appendChild(br2);
}