import React from 'react';

<div>
            <div className='hiddenLeft abilityTitleBox' style={{paddingTop: '5px'}}>
              {this.state.champNameLeft === 'Aphelios' ? <p>test test test</p> : ''}
              <p style={{margin: 0, display: 'inline-block', verticalAlign: 'top'}}><b><u>Passive </u></b></p> 
              <div className="spriteContainer">
                <img className='passiveMargin' src={ this.images[7] } alt='Ability icon'/>
              </div>
            </div>  
            <div className="hiddenLeft abilityBoxLeft"></div>

            <div className="hiddenLeft abilityTitleBox" style={{paddingTop: '5px'}}>
              <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                <p style={{margin: 0}}><b><u>Q</u></b> - rank: </p>
                <input id="QRankLeft" type="number" placeholder="0" min="0" max="5" 
                style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
              </div>
              <div className="spriteContainer">
                <img className='qMargin' src={ this.images[7] } alt='Ability icon'/>
              </div>
            </div>
            <div className="hiddenLeft abilityBoxLeft"></div>

            <div className="hiddenLeft abilityTitleBox" style={{paddingTop: '5px'}}>
              <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                <p style={{margin: 0}}><b><u>W</u></b> - rank: </p>
                <input id="WRankLeft" type="number" placeholder="0" min="0" max="5" 
                style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
              </div>
              <div className="spriteContainer">
                <img className='wMargin' src={ this.images[7] } alt='Ability icon'/>
              </div>
            </div>
            <div className="hiddenLeft abilityBoxLeft"></div>

            <div className="hiddenLeft abilityTitleBox" style={{paddingTop: '5px'}}>
              <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                <p style={{margin: 0}}><b><u>E</u></b> - rank: </p>
                <input id="ERankLeft" type="number" placeholder="0" min="0" max="5" 
                style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
              </div>
              <div className="spriteContainer">
                <img className='eMargin' src={ this.images[7] } alt='Ability icon'/>
              </div>
            </div>
            <div className="hiddenLeft abilityBoxLeft"></div>

            <div className="hiddenLeft abilityTitleBox" style={{paddingTop: '5px'}}>
              <div style={{display: 'inline-block', verticalAlign: 'top'}}>
                <p style={{margin: 0}}><b><u>R</u></b> - rank: </p>
                <input id="RRankLeft" type="number" placeholder="0" min="0" max="3" 
                style={{width: "30px", marginLeft: '10px'}} onKeyDown={this.preventKeyPress} onChange={this.onRankChange}/>
              </div>
              <div className="spriteContainer">
                <img className='rMargin' src={ this.images[7] } alt='Ability icon'/>
              </div>
            </div>
            <div className="hiddenLeft abilityBoxLeft"></div>
          </div>

export default ApheliosPage;