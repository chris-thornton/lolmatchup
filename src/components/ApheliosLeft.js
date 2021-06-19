import React from 'react';
import spellIcons from '../spellicons/aphelios.png';
import './ApheliosLeft.css';

var moonShot = {
  dmgByLvl: [
    60, 60, 85, 85, 110, 110, 135, 135, 160,
     160, 160, 160, 160, 160, 160, 160, 160, 160
  ],
  APRatio: 1,
  bonusADRatioByLvl: [
      0.42,0.42,0.45,0.45,0.48,0.48,0.51,0.51,0.54,
      0.54, 0.57,0.57,0.60,0.60,0.60,0.60,0.60,0.60
  ],
  coolDownByLvl: [
    10, 10, 9.67, 9.67, 9.33, 9.33, 9, 9, 8.67,
    8.67, 8.33, 8.33, 8, 8, 8, 8, 8, 8
  ]
}

var calAutoEmp = {
  dmg: 15,
  bonusADRatio: 0.2
}

var sev = {
  lifeStealByLvl: [
    0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.10,0.11,
    0.12,0.13,0.14,0.15,0.16,0.17,0.18,0.19,0.20
  ],
  overHeal: {
    overHealByLvl: [
      10,10,10,10,10,20,30,40,50,
      60,70,80,90,100,110,120,130,140
    ],
    maxHPRatio: 0.06,
    duration: 30
  }
}

var onslaught = {
  
}

const ApheliosLeft = ({runes, items, onRankChange, bonuses, totalStats}) => {
  var champLevel = document.getElementById('levelBoxLeft').value
  return (
    <div>
      <div className='abilityTitleBox' style={{paddingTop: '5px'}}>
        <p style={{margin: 0, display: 'inline-block', verticalAlign: 'top'}}><b><u>Passive </u></b></p> 
        <div className="spriteContainer">
          <img style={{marginLeft: '0px'}} src={ spellIcons } alt='Ability icon'/>
        </div>
      </div>  
      <div className="abilityBoxLeft">
        <input id="adRankLeft" type="number" placeholder="0" min="0" max="6" 
        style={{width: "30px", marginLeft: '10px'}} onKeyDown={(event) => event.preventDefault()} 
        onChange={onRankChange} />
        <b> Bonus Attack Damage: </b><span>{bonuses.ad}</span>

        <br></br>
        <input id="asRankLeft" type="number" placeholder="0" min="0" max="6" 
        style={{width: "30px", marginLeft: '10px'}} onKeyDown={(e) => e.preventDefault()} onChange={onRankChange} />
        <b> Bonus Attack Speed Ratio: </b><span>{bonuses.as}</span>

        <br></br>
        <input id="lethalRankLeft" type="number" placeholder="0" min="0" max="6" 
        style={{width: "30px", marginLeft: '10px'}} onKeyDown={(e) => e.preventDefault()} onChange={onRankChange} />
        <b> Bonus Lethality: </b><span>{bonuses.lethal}</span>
      </div>

      <div className="abilityTitleBox" style={{paddingTop: '5px'}}>
        <div style={{display: 'inline-block', verticalAlign: 'top'}}>
          <p style={{margin: 0}}><b><u>Calibrum</u></b>: </p>
        </div>
        <div className="spriteContainer">
          <img style={{marginLeft: '-50px'}} src={ spellIcons } alt='Ability icon'/>
        </div>
      </div>
      <div className="abilityBoxLeft">
        <b>Auto Attack Empower: </b><u>Physical Damage:</u><text> {calAutoEmp.dmg} (+{calAutoEmp.bonusADRatio} Bonus AD Ratio)</text>
        <br></br>
        <u>Total:</u><text> {Math.round(calAutoEmp.dmg + calAutoEmp.bonusADRatio * (items.ad + runes.ad))} </text>
        <hr></hr>
        <p>Moonshot</p>
        <hr></hr>
        <b>Physical Damage: </b><text>[{moonShot.dmgByLvl[0]} to {moonShot.dmgByLvl[17]}, based on lvl. </text><u>Currently:</u>
        <text> {moonShot.dmgByLvl[champLevel-1]}] (+{moonShot.bonusADRatioByLvl[0]} to {moonShot.bonusADRatioByLvl[17]} Bonus AD
        Ratio, based on lvl. </text><u>Currently:</u><text> {moonShot.bonusADRatioByLvl[champLevel-1]}) (+{moonShot.APRatio} AP Ratio)</text>
        <br></br>
        <u>Total:</u><text> {Math.round(moonShot.dmgByLvl[champLevel-1] + moonShot.bonusADRatioByLvl[champLevel-1] * (runes.ad + items.ad) 
        +moonShot.APRatio * (items.ap + runes.ap))}</text>
        <br></br><br></br>
        <b>Cooldown: </b><text>{moonShot.coolDownByLvl[0]} to {moonShot.coolDownByLvl[17]}, based on lvl. </text><u>Currently:</u>
        <text> {moonShot.coolDownByLvl[champLevel-1]}</text>
      </div>

      <div className="abilityTitleBox" style={{paddingTop: '5px'}}>
        <div style={{display: 'inline-block', verticalAlign: 'top'}}>
          <p style={{margin: 0}}><b><u>Severum</u></b>: </p>
        </div>
        <div className="spriteContainer">
          <img style={{marginLeft: '-100px'}} src={ spellIcons } alt='Ability icon'/>
        </div>
      </div>
      <div className="abilityBoxLeft">
          <b>Life Steal Ratio: </b><text>[{sev.lifeStealByLvl[0]} to {sev.lifeStealByLvl[17]}, based on lvl. </text><u>Currently:</u>
          <text> {sev.lifeStealByLvl[champLevel-1]}] (Tripled for attacks from abilities)</text>
          <br></br><br></br>
          <b>Overheal Shield: </b><text>[{sev.overHeal.overHealByLvl[0]} to {sev.overHeal.overHealByLvl[17]}, based on lvl. </text>
          <u>Currently:</u><text> {sev.overHeal.overHealByLvl[champLevel-1]}] (+{sev.overHeal.maxHPRatio} Max HP Ratio)</text>
          <br></br>
          <u>Total:</u><text> {Math.round(sev.overHeal.overHealByLvl[champLevel-1] + sev.overHeal.maxHPRatio*totalStats.hp )}</text>
      </div>

      <div className="abilityTitleBox" style={{paddingTop: '5px'}}>
        <div style={{display: 'inline-block', verticalAlign: 'top'}}>
          <p style={{margin: 0}}><b><u>Gravitum</u></b>: </p>
        </div>
        <div className="spriteContainer">
          <img style={{marginLeft: '-150px'}} src={ spellIcons } alt='Ability icon'/>
        </div>
      </div>
      <div className="abilityBoxLeft">

      </div>

      <div className="abilityTitleBox" style={{paddingTop: '5px'}}>
        <div style={{display: 'inline-block', verticalAlign: 'top'}}>
          <p style={{margin: 0}}><b><u>Infernum</u></b>: </p>
        </div>
        <div className="spriteContainer">
          <img style={{marginLeft: '-200px'}} src={ spellIcons } alt='Ability icon'/>
        </div>
      </div>
      <div className="abilityBoxLeft">

      </div>

      <div className="abilityTitleBox" style={{paddingTop: '5px'}}>
        <div style={{display: 'inline-block', verticalAlign: 'top'}}>
          <p style={{margin: 0}}><b><u>Crescendum</u></b>: </p>
        </div>
        <div className="spriteContainer">
          <img style={{marginLeft: '-250px'}} src={ spellIcons } alt='Ability icon'/>
        </div>
      </div>
      <div className="abilityBoxLeft">

      </div>

      <div className="abilityTitleBox" style={{paddingTop: '5px'}}>
        <div style={{display: 'inline-block', verticalAlign: 'top'}}>
          <p style={{margin: 0}}><b><u>R</u></b> - rank: </p>
        </div>
        <div className="spriteContainer">
          <img style={{marginLeft: '-300px'}} src={ spellIcons } alt='Ability icon'/>
        </div>
      </div>
      <div className="abilityBoxLeft">

        
      </div>
    </div>
  )
}

export default ApheliosLeft;