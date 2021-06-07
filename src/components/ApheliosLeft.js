import React from 'react';
import spellIcons from '../spellicons/aphelios.png';

const ApheliosLeft = ({runes, items, onRankChange, bonuses}) => {
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
        <span>Bonus Attack Damage: {bonuses.ad}</span>

        <input id="asRankLeft" type="number" placeholder="0" min="0" max="6" 
        style={{width: "30px", marginLeft: '10px'}} onKeyDown={(e) => e.preventDefault()} onChange={onRankChange} />
        <span>Bonus Attack Speed Ratio: {bonuses.as}</span>

        <input id="lethalRankLeft" type="number" placeholder="0" min="0" max="6" 
        style={{width: "30px", marginLeft: '10px'}} onKeyDown={(e) => e.preventDefault()} onChange={onRankChange} />
        <span>Bonus Lethality: {bonuses.lethal}</span>
      </div>

      <div className="abilityTitleBox" style={{paddingTop: '5px'}}>
        <div style={{display: 'inline-block', verticalAlign: 'top'}}>
          <p style={{margin: 0}}><b><u>Calibrum</u></b> - rank: </p>
          <input id="QRankLeft" type="number" placeholder="0" min="0" max="5" 
          style={{width: "30px", marginLeft: '10px'}} onKeyDown={(e) => e.preventDefault()} onChange={onRankChange(e, 'Left', adHash)}/>
        </div>
        <div className="spriteContainer">
          <img className='qMargin' src={ spellIcons } alt='Ability icon'/>
        </div>
      </div>
      <div className="abilityBoxLeft"></div>

      <div className="abilityTitleBox" style={{paddingTop: '5px'}}>
        <div style={{display: 'inline-block', verticalAlign: 'top'}}>
          <p style={{margin: 0}}><b><u>W</u></b> - rank: </p>
          <input id="WRankLeft" type="number" placeholder="0" min="0" max="5" 
          style={{width: "30px", marginLeft: '10px'}} onKeyDown={(e) => e.preventDefault()} onChange={this.onRankChange}/>
        </div>
        <div className="spriteContainer">
          <img className='wMargin' src={ spellIcons } alt='Ability icon'/>
        </div>
      </div>
      <div className="abilityBoxLeft"></div>

      <div className="abilityTitleBox" style={{paddingTop: '5px'}}>
        <div style={{display: 'inline-block', verticalAlign: 'top'}}>
          <p style={{margin: 0}}><b><u>E</u></b> - rank: </p>
          <input id="ERankLeft" type="number" placeholder="0" min="0" max="5" 
          style={{width: "30px", marginLeft: '10px'}} onKeyDown={(e) => e.preventDefault()} onChange={this.onRankChange}/>
        </div>
        <div className="spriteContainer">
          <img className='eMargin' src={ spellIcons } alt='Ability icon'/>
        </div>
      </div>
      <div className="abilityBoxLeft"></div>

      <div className="abilityTitleBox" style={{paddingTop: '5px'}}>
        <div style={{display: 'inline-block', verticalAlign: 'top'}}>
          <p style={{margin: 0}}><b><u>R</u></b> - rank: </p>
          <input id="RRankLeft" type="number" placeholder="0" min="0" max="3" 
          style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
        </div>
        <div className="spriteContainer">
          <img className='rMargin' src={ spellIcons } alt='Ability icon'/>
        </div>
      </div>
      <div className="abilityBoxLeft"></div>
    </div>
  )
}

export default ApheliosLeft;