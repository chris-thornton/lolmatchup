import React from 'react';
import spellIcons from '../spellicons/aphelios.png';
import ADIcon from '../staticons/attackDamage.png';
import APIcon from '../staticons/abilityPower.png';
import HPIcon from '../staticons/health.png';
import ASIcon from '../staticons/attackSpeed.png';
import attackIcon from '../staticons/attack.png';
import arPenIcon from '../staticons/arPen2.png';
import cdrIcon from '../staticons/cdr.png';
import lifeStealIcon from '../staticons/lifesteal.png';
import shieldIcon from '../staticons/shield.png';
import healIcon from '../staticons/healEffect2.png';
import moonshotIcon from '../apheliosactives/moonshot.png';
import onslaughtIcon from '../apheliosactives/onslaught.png';
import bindingEclipseIcon from '../apheliosactives/bindingEclipse.png';
import duskwaveIcon from '../apheliosactives/duskwave.png';
import sentryIcon from '../apheliosactives/sentry.png';
import calibrumIcon from '../apheliosactives/calibrum.png';
import severumIcon from '../apheliosactives/severum.png';
import infernumIcon from '../apheliosactives/infernum.png';
import crescendumIcon from '../apheliosactives/crescendum.png';
import './Aphelios.css';

var moonShot = {
  type: 'Physical',
  dmgByLvl: [
    60, 60, 76.67, 76.67, 93.33, 93.33, 110, 110, 126.67,
    126.67, 143.33, 143.33, 160, 160, 160, 160, 160, 160
  ],
  APRatio: 1,
  bonusADRatioByLvl: [
    0.42,0.42,0.45,0.45,0.48,0.48,0.51,0.51,0.54,
    0.54,0.57,0.57,0.60,0.60,0.60,0.60,0.60,0.60
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
    0.02,0.023,0.026,0.029,0.032,0.035,0.038,0.041,0.044,
    0.047,0.05,0.053,0.056,0.059,0.062,0.065,0.068,0.071
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
  type: 'Physical',
  dmgByLvl: [
    10, 10, 15, 15, 20, 20, 25, 25, 30,
    30, 35, 35, 40, 40, 40, 40, 40, 40
  ],
  bonusADRatioByLvl: [
    0.20, 0.20, 0.225, 0.225, 0.25, 0.25, 0.275, 0.275, 0.3,
    0.3, 0.325, 0.325, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35
  ],
  coolDownByLvl: [
    10, 10, 9.67, 9.67, 9.33, 9.33, 9, 9, 8.67,
    8.67, 8.33, 8.33, 8, 8, 8, 8, 8, 8
  ]
}

var bindingEclipse = {
  type: 'Magic',
  dmgByLvl: [
    50, 50, 60, 60, 70, 70, 80, 80, 90,
    90, 100, 100, 110, 110, 110, 110, 110, 110
  ],
  APRatio: 0.7,
  bonusADRatioByLvl: [
    0.26, 0.26, 0.275, 0.275, 0.29, 0.29, 0.305, 0.305, 0.32,
    0.32, 0.335, 0.335, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35 
  ],
  coolDownByLvl: [
    12, 12, 11.67, 11.67, 11.33, 11.33, 11, 11, 10.67,
    10.67, 10.33, 10.33, 10, 10, 10, 10, 10, 10
  ]
}

var inf = {
  type: 'Physical',
  ADRatio: 0.1
}

var duskwave = {
  type: 'Physical',
  dmgByLvl: [
    25, 25, 31.67, 31.67, 38.33, 38.33, 45, 45, 51.67,
    51.67, 58.33, 58.33, 65, 65, 65, 65, 65, 65
  ],
  bonusADRatioByLvl: [
    0.56, 0.56, 0.6, 0.6, 0.64, 0.64, 0.68, 0.68, 0.72,
    0.72, 0.76, 0.76, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8
  ],
  APRatio: 0.7,
  coolDownByLvl: [
    9, 9, 8.5, 8.5, 8, 8, 7.5, 7.5, 7,
    7, 6.5, 6.5, 6, 6, 6, 6, 6, 6
  ]
}

var crescendum = {
  type: 'Physical',
  ADRatioByStack: [
    0.15, 0.285, 0.405, 0.51, 0.6, 0.675, 0.735, 0.785, 0.835, 0.885,
    0.935, 0.985, 1.035, 1.085, 1.135, 1.185, 1.235, 1.285, 1.335, 1.385
  ]
}

var sentry = {
  type: 'Physical',
  dmgByLvl: [
    31, 31, 42.5, 42.5, 54, 54, 65.5, 65.5, 77,
    77, 88.5, 88.5, 100, 100, 100, 100, 100, 100
  ],
  bonusADRatioByLvl: [
    0.4, 0.4, 0.4333, 0.4333, 0.4667, 0.4667, 0.5, 0.5, 0.5333,
    0.5333, 0.5667, 0.5667, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6
  ],
  APRatio: 0.5,
  coolDownByLvl: [
    9, 9, 8.5, 8.5, 8, 8, 7.5, 7.5, 7,
    7, 6.5, 6.5, 6, 6, 6, 6, 6, 6
  ]
}

var r = {
  type: 'Physical',
  dmg: [
    125, 175, 225
  ],
  bonusADRatio: 0.2,
  APRatio: 1,
  coolDown: [120, 110, 100],
  calibrum: {
    bonusDmg: [50, 80, 110]
  },
  severum: {
    heal: [250, 350, 450]
  },
  infernum: {
    dmg: [50, 100, 150],
    bonusADRatio: 0.25,
    splashRatio: 0.9
  }
};

var champLvlIndex = {
  1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0,
  11: 1, 12: 1, 13: 1, 14: 1, 15: 1, 16: 2, 17: 2, 18: 2
}

const ApheliosLeft = ({runes, items, onRankChange, bonuses, totalStats}) => {
  var champLevel = document.getElementById('levelBoxLeft').value;
  var bonus = {
    ad: bonuses.ad,
    as: bonuses.as,
    lethal: bonuses.lethal
  }
  if (bonuses.ad.length) {
    bonus.ad = 0
  };
  if (bonuses.as.length) {
    bonus.as = 0
  };
  if (bonuses.lethal.length) {
    bonus.lethal = 0
  };
  return (
    <div>
      <div className='abilityTitleBox' style={{paddingTop: '5px'}}>
        <p style={{margin: 0, display: 'inline-block', verticalAlign: 'top'}}><b><u>Passive </u></b></p> 
        <div className="iconContainer">
          <img style={{marginLeft: '0px'}} src={ spellIcons } alt=''/>
        </div>
      </div>  
      <div className="abilityBoxLeft">
        <input id="adRankLeft" type="number" placeholder="0" min="0" max="6" 
        style={{width: "30px", marginLeft: '10px'}} onKeyDown={(event) => event.preventDefault()} 
        onChange={onRankChange} />
        <span className='textAD'> <img src={ADIcon} alt=''></img>Bonus Attack Damage: </span><span>{bonuses.ad}</span>

        <br></br>
        <input id="asRankLeft" type="number" placeholder="0" min="0" max="6" 
        style={{width: "30px", marginLeft: '10px'}} onKeyDown={(e) => e.preventDefault()} onChange={onRankChange} />
        <span className='textAS'> <img src={ASIcon} alt=''></img>Bonus Attack Speed Ratio: </span><span>{bonuses.as}</span>

        <br></br>
        <input id="lethalRankLeft" type="number" placeholder="0" min="0" max="6" 
        style={{width: "30px", marginLeft: '10px'}} onKeyDown={(e) => e.preventDefault()} onChange={onRankChange} />
        <span style={{color: 'rgb(247, 113, 90)'}}> <img src={arPenIcon} alt=''></img>Bonus Lethality: </span><span>{bonuses.lethal}</span>
      </div>

      <div className="abilityTitleBox" style={{paddingTop: '5px'}}>
        <div style={{display: 'inline-block', verticalAlign: 'top'}}>
          <p style={{margin: 0}}><b><u>Calibrum</u></b></p>
        </div>
        <div className="iconContainer" style={{borderRadius: '50%'}}>
          <img style={{marginLeft: '-50px'}} src={ spellIcons } alt=''/>
        </div>
      </div>
      <div className="abilityBoxLeft">
        <span>
        <img src={attackIcon} alt=''></img><b>Empowered Basic Attack: </b>
        <img src={ADIcon} alt=''></img><u>Physical Damage:</u> {calAutoEmp.dmg} (+{calAutoEmp.bonusADRatio}
            <span className='textAD'> Bonus AD</span><img src={ADIcon} alt=''></img>ratio)
        </span>
        <br></br>
        <span><u style={{color: 'mediumorchid'}}>Total:</u> {Math.round(calAutoEmp.dmg + calAutoEmp.bonusADRatio * (items.ad + runes.ad + bonus.ad))}</span>
        <hr></hr>
        <p><img className="activeIcon" src={moonshotIcon} alt=''></img>Moonshot</p>
        <hr></hr>
        <span>
        <img src={ADIcon} alt=''></img><b>Physical Damage: </b>[{moonShot.dmgByLvl[0]} to {moonShot.dmgByLvl[17]}, based on lvl. <u>Currently:
            </u> {moonShot.dmgByLvl[champLevel-1]}] (+{moonShot.bonusADRatioByLvl[0]} to {moonShot.bonusADRatioByLvl[17]}
            <span className='textAD'> Bonus AD</span><img src={ADIcon} alt=''></img>ratio, based on lvl. <u>Currently:
              </u> {moonShot.bonusADRatioByLvl[champLevel-1]}) (+{moonShot.APRatio}<span className='textAP'> AP</span>
          <img src={APIcon} alt=''></img>ratio)
        </span>
        <br></br>
        <span>
          <u style={{color: 'mediumorchid'}}>Total:</u> {Math.round(moonShot.dmgByLvl[champLevel-1] + moonShot.bonusADRatioByLvl[champLevel-1] 
          * (runes.ad + items.ad + bonus.ad) + moonShot.APRatio * (items.ap + runes.ap))}
        </span>
        <br></br><br></br>
        <span>
        <img src={cdrIcon} alt=''></img><b style={{color: 'lightpink'}}>Cooldown: </b>{moonShot.coolDownByLvl[0]} to {moonShot.coolDownByLvl[17]}
          , based on lvl. <u>Currently:</u> {moonShot.coolDownByLvl[champLevel-1]}
        </span>
      </div>

      <div className="abilityTitleBox" style={{paddingTop: '5px'}}>
        <div style={{display: 'inline-block', verticalAlign: 'top'}}>
          <p style={{margin: 0}}><b><u>Severum</u></b></p>
        </div>
        <div className="iconContainer">
          <img style={{marginLeft: '-100px'}} src={ spellIcons } alt=''/>
        </div>
      </div>
      <div className="abilityBoxLeft">
          <span>
          <img src={lifeStealIcon} alt=''></img>
          <b>Life Steal Ratio: </b>[{sev.lifeStealByLvl[0]} to {sev.lifeStealByLvl[17]}, based on lvl. <u>
              Currently:</u> {sev.lifeStealByLvl[champLevel-1]}] (multiplied by 2.5 for attacks from abilities)
          </span>
          <br></br><br></br>
          <span>
          <img src={shieldIcon} alt=''></img>
            <b> Overheal Shield: </b>[{sev.overHeal.overHealByLvl[0]} to {sev.overHeal.overHealByLvl[17]}, based on lvl. <u>
              Currently:</u> {sev.overHeal.overHealByLvl[champLevel-1]}] (+{sev.overHeal.maxHPRatio} 
              <span className='textHP'> Max HP</span><img src={HPIcon} alt=''></img>ratio)
          </span>
          <br></br>
          <span><u style={{color: 'mediumorchid'}}>Total:</u> {Math.round(sev.overHeal.overHealByLvl[champLevel-1] + sev.overHeal.maxHPRatio*totalStats.hp )}</span>
          <hr></hr>
          <p><img className="activeIcon" src={onslaughtIcon} alt=''></img>Onslaught</p>
          <hr></hr>
          <span>
          <img src={ADIcon} alt=''></img><b>Physical Damage: </b>
            Over 1.75 seconds, attack 6 (+1 per 50% <span className='textAS'>Bonus Attack Speed</span><img src={ASIcon} alt=''></img>
            , rounded at 25%) times. Each attack deals [{
            onslaught.dmgByLvl[0]} to {onslaught.dmgByLvl[17]}, based on lvl. <u>Currently:</u> {onslaught.dmgByLvl[champLevel-1]}
            ] (+{onslaught.bonusADRatioByLvl[0]} to {onslaught.bonusADRatioByLvl[17]}<span className='textAD'> Bonus AD
            </span><img src={ADIcon} alt=''></img>ratio, based on lvl. <u>Currently:</u> {onslaught.bonusADRatioByLvl[champLevel-1]}). Can crit.
          </span>
          <br></br>
          <span>
            <u style={{color: 'mediumorchid'}}>Total:</u> {Math.round((6 + Math.round(2*(items.as + runes.as + bonus.as))) 
            * (onslaught.dmgByLvl[champLevel-1] + onslaught.bonusADRatioByLvl[champLevel-1] 
            * (items.ad + runes.ad + bonus.ad)) )} (from {(6 + Math.round(2*(items.as + runes.as + bonus.as)))} attacks)
          </span>
          <br></br><br></br>
          <span>
          <img src={cdrIcon} alt=''></img><b style={{color: 'lightpink'}}>Cooldown: </b>{onslaught.coolDownByLvl[0]} to {onslaught.coolDownByLvl[17]},
             based on lvl. <u>Currently:</u> {onslaught.coolDownByLvl[champLevel-1]}
          </span>
      </div>

      <div className="abilityTitleBox" style={{paddingTop: '5px'}}>
        <div style={{display: 'inline-block', verticalAlign: 'top'}}>
          <p style={{margin: 0}}><b><u>Gravitum</u></b></p>
        </div>
        <div className="iconContainer">
          <img style={{marginLeft: '-150px'}} src={ spellIcons } alt=''/>
        </div>
      </div>
      <div className="abilityBoxLeft">
        <hr></hr>
          <p><img className="activeIcon" src={bindingEclipseIcon} alt=''></img>Binding Eclipse</p>
        <hr></hr>
        <span>
        <img src={APIcon} alt=''></img>
          <b>Magic Damage: </b>[{bindingEclipse.dmgByLvl[0]} to {bindingEclipse.dmgByLvl[17]}, based on lvl. <u>Currently:
          </u> {bindingEclipse.dmgByLvl[champLevel-1]}] (+{bindingEclipse.bonusADRatioByLvl[0]} to {bindingEclipse.bonusADRatioByLvl[17]
          } <span className='textAD'>Bonus AD</span><img src={ADIcon} alt=''></img>ratio, based on lvl. <u>Currently:
            </u> {bindingEclipse.bonusADRatioByLvl[champLevel-1]}) (+{bindingEclipse.APRatio} <span className='textAP'>
              AP</span><img src={APIcon} alt=''></img>ratio)
        </span>
        <br></br>
        <span>
          <u style={{color: 'mediumorchid'}}>Total:</u> {Math.round(bindingEclipse.dmgByLvl[champLevel-1] + bindingEclipse.bonusADRatioByLvl[champLevel-1] 
          * (runes.ad + items.ad + bonus.ad) + bindingEclipse.APRatio * (items.ap + runes.ap))}
        </span>
        <br></br><br></br>
        <span>
        <img src={cdrIcon} alt=''></img>
          <b style={{color: 'lightpink'}}>Cooldown: </b>{bindingEclipse.coolDownByLvl[0]} to {bindingEclipse.coolDownByLvl[17]}, based on lvl. <u>
            Currently:</u> {bindingEclipse.coolDownByLvl[champLevel-1]}
        </span>
      </div>

      <div className="abilityTitleBox" style={{paddingTop: '5px'}}>
        <div style={{display: 'inline-block', verticalAlign: 'top'}}>
          <p style={{margin: 0}}><b><u>Infernum</u></b></p>
        </div>
        <div className="iconContainer">
          <img style={{marginLeft: '-200px'}} src={ spellIcons } alt=''/>
        </div>
      </div>
      <div className="abilityBoxLeft">
        <span>
        <img src={attackIcon} alt=''></img><b>Empowered Basic Attack: </b>
        <img src={ADIcon} alt=''></img><u>Physical Damage:</u> {inf.ADRatio} <span className='textAD'>AD</span>
          <img src={ADIcon} alt=''></img>ratio
        </span>
        <br></br>
        <span>
          <u style={{color: 'mediumorchid'}}>Total:</u> {Math.round(inf.ADRatio * totalStats.ad)}
        </span>
        <hr></hr>
        <p><img className="activeIcon" src={duskwaveIcon} alt=''></img>Duskwave</p>
        <hr></hr>
        <span>
        <img src={ADIcon} alt=''></img>
          <b>Physical Damage: </b>[{duskwave.dmgByLvl[0]} to {duskwave.dmgByLvl[17]}, based on lvl. <u>Currently:
            </u> {duskwave.dmgByLvl[champLevel-1]}] (+{duskwave.bonusADRatioByLvl[0]} to {duskwave.bonusADRatioByLvl[17]}
             <span className='textAD'> Bonus AD</span><img src={ADIcon} alt=''></img>ratio, based on lvl. <u>Currently:
              </u> {duskwave.bonusADRatioByLvl[champLevel-1]}) (+{duskwave.APRatio} 
              <span className='textAP'> AP</span><img src={APIcon} alt=''></img>ratio)
        </span>
        <br></br>
        <span>
          <u style={{color: 'mediumorchid'}}>Total:</u> {Math.round(duskwave.dmgByLvl[champLevel-1] + duskwave.bonusADRatioByLvl[champLevel-1] 
          * (runes.ad + items.ad + bonus.ad) + duskwave.APRatio * (items.ap + runes.ap))}
        </span>
        <br></br><br></br>
        <span>
        <img src={cdrIcon} alt=''></img>
          <b style={{color: 'lightpink'}}>Cooldown: </b>{duskwave.coolDownByLvl[0]} to {duskwave.coolDownByLvl[17]},
           based on lvl. <u>Currently:</u> {duskwave.coolDownByLvl[champLevel-1]}
        </span>
      </div>

      <div className="abilityTitleBox" style={{paddingTop: '5px'}}>
        <div style={{display: 'inline-block', verticalAlign: 'top'}}>
          <p style={{margin: 0}}><b><u>Crescendum</u></b></p>
        </div>
        <div className="iconContainer">
          <img style={{marginLeft: '-250px'}} src={ spellIcons } alt=''/>
        </div>
      </div>
      <div className="abilityBoxLeft">
      <span>
        <img src={attackIcon} alt=''></img><b>Empowered Basic Attack: </b>
        <img src={ADIcon} alt=''></img><u>Physical Damage:</u> {crescendum.ADRatioByStack[0]} to {crescendum.ADRatioByStack[19]}
        <span className='textAD'> AD</span><img src={ADIcon} alt=''></img>ratio, based on stacks:
      </span>
        <table style={{width: '90%'}}>
            <tr>
              <th>Stacks</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>10</th>
            </tr>
            <tr>
              <th>AD ratio</th>
              <th>{crescendum.ADRatioByStack[0]}</th>
              <th>{crescendum.ADRatioByStack[1]}</th>
              <th>{crescendum.ADRatioByStack[2]}</th>
              <th>{crescendum.ADRatioByStack[3]}</th>
              <th>{crescendum.ADRatioByStack[4]}</th>
              <th>{crescendum.ADRatioByStack[5]}</th>
              <th>{crescendum.ADRatioByStack[6]}</th>
              <th>{crescendum.ADRatioByStack[7]}</th>
              <th>{crescendum.ADRatioByStack[8]}</th>
              <th>{crescendum.ADRatioByStack[9]}</th>
            </tr>
        </table>
        <table style={{width: '90%'}}>
          <tr>
            <th>11</th>
            <th>12</th>
            <th>13</th>
            <th>14</th>
            <th>15</th>
            <th>16</th>
            <th>17</th>
            <th>18</th>
            <th>19</th>
            <th>20</th>
          </tr>
          <tr>
            <th>{crescendum.ADRatioByStack[10]}</th>
            <th>{crescendum.ADRatioByStack[11]}</th>
            <th>{crescendum.ADRatioByStack[12]}</th>
            <th>{crescendum.ADRatioByStack[13]}</th>
            <th>{crescendum.ADRatioByStack[14]}</th>
            <th>{crescendum.ADRatioByStack[15]}</th>
            <th>{crescendum.ADRatioByStack[16]}</th>
            <th>{crescendum.ADRatioByStack[17]}</th>
            <th>{crescendum.ADRatioByStack[18]}</th>
            <th>{crescendum.ADRatioByStack[19]}</th>
          </tr>
        </table>
        <br></br>
        <span>
          <u style={{color: 'mediumorchid'}}>Total:</u>
        </span>
        <table style={{width: '90%'}}>
            <tr>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>10</th>
              <th>11</th>
              <th>12</th>
              <th>13</th>
              <th>14</th>
              <th>15</th>
              <th>16</th>
              <th>17</th>
              <th>18</th>
              <th>19</th>
              <th>20</th>
            </tr>
            <tr>
              <th>{Math.round(crescendum.ADRatioByStack[0] * totalStats.ad)}</th>
              <th>{Math.round(crescendum.ADRatioByStack[1] * totalStats.ad)}</th>
              <th>{Math.round(crescendum.ADRatioByStack[2] * totalStats.ad)}</th>
              <th>{Math.round(crescendum.ADRatioByStack[3] * totalStats.ad)}</th>
              <th>{Math.round(crescendum.ADRatioByStack[4] * totalStats.ad)}</th>
              <th>{Math.round(crescendum.ADRatioByStack[5] * totalStats.ad)}</th>
              <th>{Math.round(crescendum.ADRatioByStack[6] * totalStats.ad)}</th>
              <th>{Math.round(crescendum.ADRatioByStack[7] * totalStats.ad)}</th>
              <th>{Math.round(crescendum.ADRatioByStack[8] * totalStats.ad)}</th>
              <th>{Math.round(crescendum.ADRatioByStack[9] * totalStats.ad)}</th>
              <th>{Math.round(crescendum.ADRatioByStack[10] * totalStats.ad)}</th>
              <th>{Math.round(crescendum.ADRatioByStack[11] * totalStats.ad)}</th>
              <th>{Math.round(crescendum.ADRatioByStack[12] * totalStats.ad)}</th>
              <th>{Math.round(crescendum.ADRatioByStack[13] * totalStats.ad)}</th>
              <th>{Math.round(crescendum.ADRatioByStack[14] * totalStats.ad)}</th>
              <th>{Math.round(crescendum.ADRatioByStack[15] * totalStats.ad)}</th>
              <th>{Math.round(crescendum.ADRatioByStack[16] * totalStats.ad)}</th>
              <th>{Math.round(crescendum.ADRatioByStack[17] * totalStats.ad)}</th>
              <th>{Math.round(crescendum.ADRatioByStack[18] * totalStats.ad)}</th>
              <th>{Math.round(crescendum.ADRatioByStack[19] * totalStats.ad)}</th>
            </tr>
        </table>
        <hr></hr>
        <p><img className="activeIcon" src={sentryIcon} alt=''></img>Sentry</p>
        <hr></hr>
        <span>
        <img src={ASIcon} alt=''></img><u>Base Attack Speed:</u> 0.64
        </span>
        <br></br>
        <span>
        <img src={ADIcon} alt=''></img>
          <b>Physical Damage per Attack: </b>[{sentry.dmgByLvl[0]} to {sentry.dmgByLvl[17]}, based on lvl. <u>Currently:
            </u> {sentry.dmgByLvl[champLevel-1]}] (+{sentry.bonusADRatioByLvl[0]} to {sentry.bonusADRatioByLvl[17]}
            <span className='textAD'> Bonus AD</span><img src={ADIcon} alt=''></img>ratio, based on lvl. <u>Currently:
              </u> {sentry.bonusADRatioByLvl[champLevel-1]}) (+{sentry.APRatio} <span className='textAP'>AP</span>
              <img src={APIcon} alt=''></img>ratio)
        </span>
        <br></br>
        <span>
          <u style={{color: 'mediumorchid'}}>Total:</u> {Math.round(sentry.dmgByLvl[champLevel-1] + sentry.bonusADRatioByLvl[champLevel-1] 
          * (runes.ad + items.ad + bonus.ad) + sentry.APRatio * (items.ap + runes.ap))}
        </span>
        <br></br><br></br>
        <span>
        <img src={cdrIcon} alt=''></img>
          <b style={{color: 'lightpink'}}>Cooldown: </b>{sentry.coolDownByLvl[0]} to {sentry.coolDownByLvl[17]},
           based on lvl. <u>Currently:</u> {sentry.coolDownByLvl[champLevel-1]}
        </span>
      </div>

      <div className="abilityTitleBox" style={{paddingTop: '5px'}}>
        <div style={{display: 'inline-block', verticalAlign: 'top'}}>
          <p style={{margin: 0}}><b><u>R</u></b></p>
        </div>
        <div className="iconContainer">
          <img style={{marginLeft: '-300px'}} src={ spellIcons } alt=''/>
        </div>
      </div>
      <div className="abilityBoxLeft">
        <span>
          <img src={ADIcon} alt=''></img>
          <b>Physical Damage: </b>[{r.dmg[0]}, {r.dmg[1]}, {r.dmg[2]} at lvl 6, 11, 16] (+{r.bonusADRatio}
          <span className='textAD'> Bonus AD</span><img src={ADIcon} alt=''></img>ratio) 
          (+{r.APRatio} <span className='textAP'>AP</span><img src={APIcon} alt=''></img>ratio)
        </span>
        <br></br>
        <span>
          <u style={{color: 'mediumorchid'}}>Total:</u> {Math.round(r.dmg[champLvlIndex[champLevel]] + r.bonusADRatio * (runes.ad + items.ad + bonus.ad)
          + r.APRatio * (runes.ap + items.ap))}
        </span>
        <br></br><br></br>
        <span>
          <img src={cdrIcon} alt=''></img>
          <b style={{color: 'lightpink'}}>Cooldown: </b> [{r.coolDown[0]}, {r.coolDown[1]}, {r.coolDown[2]}]
        </span>
        <br></br>
        <span>
          <u>Currently:</u> {r.coolDown[champLvlIndex[champLevel]]}
        </span>
        <hr></hr>
        <p><img className='gunIconSmall' src={calibrumIcon} alt='' />Calibrum</p>
        <hr></hr>
        <span>
          <img src={ADIcon} alt=''></img>
          <b>Bonus Physical Damage: </b>[{r.calibrum.bonusDmg[0]}, {r.calibrum.bonusDmg[1]}, {r.calibrum.bonusDmg[2]}]
        </span>
        <br></br>
        <u>Currently:</u> {r.calibrum.bonusDmg[champLvlIndex[champLevel]]}
        <hr></hr>
        <p><img className='gunIconSmall' src={severumIcon} alt='' />Severum</p>
        <hr></hr>
        <span>
          <img src={healIcon} alt=''></img>
          <b>Heal: </b> [{r.severum.heal[0]}, {r.severum.heal[1]}, {r.severum.heal[2]}]
        </span>
        <br></br>
        <u>Currently:</u> {r.severum.heal[champLvlIndex[champLevel]]}
        <hr></hr>
        <p><img className='gunIconSmall' src={infernumIcon} alt='' />Infernum</p>
        <hr></hr>
        <span>
          <img src={ADIcon} alt=''></img>
          <b>Physical Damage: </b>[{r.infernum.dmg[0]}, {r.infernum.dmg[1]}, {r.infernum.dmg[2]}] (+{r.infernum.bonusADRatio}
          <span className='textAD'> Bonus AD</span><img src={ADIcon} alt=''></img>ratio)
        </span>
        <br></br>
        <u style={{color: 'mediumorchid'}}>Total:</u> {Math.round(r.infernum.dmg[champLvlIndex[champLevel]] + r.infernum.bonusADRatio 
        * (runes.ad + items.ad + bonus.ad))}
        <br></br> 
        Splashes for 90% damage. Enemy champions take damage from overlapping areas.
        <hr></hr>
        <p><img className='gunIconSmall' src={crescendumIcon} alt='' />Crescendum</p>
        <hr></hr>
        Return a Chakram for each enemy hit, plus an additional 5 from the first enemy champion hit.
      </div>
    </div>
  )
}

export default ApheliosLeft;