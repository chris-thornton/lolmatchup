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
      Q1: {
        damage: {
          type: '',
          system: ''
        }
      },
      Q2: {

      },
      qRankLeft: 0,
      qRankRight: 0,
      wRankLeft: 0,
      wRankRight: 0,
      eRankLeft: 0,
      eRankRight: 0,
      rRankLeft: 0,
      rRankRight: 0,
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

  onChampClick = (event) => {

    document.getElementsByTagName("input")[0].value = '';
    this.setState({ filteredChampsLeft: [] });
    if (this.state.levelLeft === 1) {
    document.getElementById("levelBoxLeft").value = 1;
    };
    var hiddenArray = document.getElementsByClassName("hidden");
    for (var i = 0; i < hiddenArray.length; i = i+2) {
      hiddenArray[i].style.visibility = 'visible';
    }

    if (event.target.textContent !== "Wukong") {
      var champName = event.target.textContent.replace("'","").replace(/\s/g, '')
    } else {
      champName = 'MonkeyKing'
    };

    this.setState({ champNameLeft: champName });
    import (`./champions/${champName.toLowerCase()}`)
      .then(({default: champLeftFile}) => {
        const statsPath = champLeftFile[`stats`]
        const champLevel = this.state.levelLeft - 1

        var qDmg = {};
        if (champLeftFile.Q["damage"]) {
          qDmg = champLeftFile.Q["damage"]
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
          Q1: {
            damage: qDmg 
          }
        }))
      });
      console.log(this.state.Q1.damage);
      return this.setState({ champIconUrlLeft: `http://ddragon.leagueoflegends.com/cdn/10.9.1/img/champion/${champName}.png`})
  }

  onChampClick2 = (event) => {
    document.getElementsByTagName("input")[1].value = '';
    this.setState({ filteredChampsRight: [] });
    if (this.state.levelRight === 1) {
      document.getElementById("levelBoxRight").value = 1
    };
    document.getElementsByClassName("hidden")[1].style.visibility = 'visible';
    var hiddenArray = document.getElementsByClassName("hidden");
    for (var i = 1; i < hiddenArray.length; i = i+2) {
      hiddenArray[i].style.visibility = 'visible'
    };
    if (event.target.textContent !== "Wukong") {
      var champName = event.target.textContent.replace("'","").replace(/\s/g, '')
    } else {
      champName = 'MonkeyKing'
    }
    this.setState({ champNameRight: champName });
    import (`./champions/${champName.toLowerCase()}`)
    .then(({default: champRightFile}) => {
      const statsPath = champRightFile[`stats`]
      const champLevel = this.state.levelRight - 1 
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
        }
      }))
    })
    return this.setState({ champIconUrlRight: 
      `http://ddragon.leagueoflegends.com/cdn/10.9.1/img/champion/${champName}.png`})
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
          alt='Champion Icon' style={{position: 'relative', zIndex: -2}} />
          <img src={versus} alt='Versus Icon' height="64px" width="64px"/>
          <img className='champIcon' src={ `${this.state.champIconUrlRight}` } height="120px" width="120px"
          alt='Champion Icon' />
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
          <div className="hidden">
            <span><b><u>Q </u></b></span><span>- rank: </span>
            <input id="qRankLeft" type="number" placeholder="0" min="0" max="5" style={{width: "40px"}} 
            onKeyDown={this.preventKeyPress} />
          </div>
          <div className="hidden">
            <span><b><u>Q </u></b></span><span>- rank: </span>
            <input id="qRankRight" type="number" placeholder="0" min="0" max="5" style={{width: "40px"}} 
              onKeyDown={this.preventKeyPress} />
          </div>
        </div>

        <div className="flexDisplay">
          <div className="hidden">
            <span><b><u>W </u></b></span><span>- rank: </span>
            <input id="wRankLeft" type="number" placeholder="0" min="0" max="5" style={{width: "40px"}} 
            onKeyDown={this.preventKeyPress} />
          </div>
          <div className="hidden">
            <span><b><u>W </u></b></span><span>- rank: </span>
            <input id="wRankRight" type="number" placeholder="0" min="0" max="5" style={{width: "40px"}} 
              onKeyDown={this.preventKeyPress} />
          </div>
        </div>

        <div className="flexDisplay">
          <div className="hidden">
            <span><b><u>E </u></b></span><span>- rank: </span>
            <input id="eRankLeft" type="number" placeholder="0" min="0" max="5" style={{width: "40px"}} 
            onKeyDown={this.preventKeyPress} />
          </div>
          <div className="hidden">
            <span><b><u>E </u></b></span><span>- rank: </span>
            <input id="eRankRight" type="number" placeholder="0" min="0" max="5" style={{width: "40px"}} 
              onKeyDown={this.preventKeyPress} />
          </div>
        </div>

        <div className="flexDisplay">
          <div className="hidden">
            <span><b><u>R </u></b></span><span>- rank: </span>
            <input id="rRankLeft" type="number" placeholder="0" min="0" max="3" style={{width: "40px"}} 
            onKeyDown={this.preventKeyPress} />
          </div>
          <div className="hidden">
            <span><b><u>R </u></b></span><span>- rank: </span>
            <input id="rRankRight" type="number" placeholder="0" min="0" max="3" style={{width: "40px"}} 
              onKeyDown={this.preventKeyPress} />
          </div>
        </div>

        <footer style={{position: "absolute", bottom: "0px", width: "100%", textAlign: "right"}}>
        Icon made by <a href="https://www.flaticon.com/authors/vectors-market" 
        title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" 
        title="Flaticon"> www.flaticon.com</a>
        </footer>

      </div>
    );
  }
}

export default App;