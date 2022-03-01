<div className="flexDisplay">
            <div style={{width: '45vw'}}>
              <button type='button' id='ksToggleLeft' onClick={(side) => this.keystoneToggle('Left')}>Hide Keystones</button>

              <div id='ksLeft'>
                <div className='keystone'>
                  <img className='precision' src={`${this.ksIcons[0]}`} onClick={(side) => this.pressTheAttack('Left')} />
                  <img className='precision' src={`${this.ksIcons[1]}`} onClick={(side) => this.lethalTempo('Left')} />
                  <img className='precision' src={`${this.ksIcons[2]}`} onClick={(side) => this.fleetFootwork('Left')} />
                  <img className='precision' src={`${this.ksIcons[3]}`} onClick={(side) => this.conqueror('Left')} />
                
                  <hr></hr>
                
                  <img className='domination' src={`${this.ksIcons[4]}`} onClick={(side) => this.electrocute('Left')} />
                  <img className='domination' src={`${this.ksIcons[5]}`} onClick={(side) => this.predator('Left')} />
                  <img className='domination' src={`${this.ksIcons[6]}`} onClick={(side) => this.darkHarvest('Left')} />
                  <img className='domination' src={`${this.ksIcons[7]}`} onClick={(side) => this.hailOfBlades('Left')} />
                
                  <hr></hr>
                
                  <img className='sorcery' src={`${this.ksIcons[8]}`} onClick={(side) => this.summonAery('Left')} />
                  <img className='sorcery' src={`${this.ksIcons[9]}`} onClick={(side) => this.arcaneComet('Left')} />
                  <img className='sorcery' src={`${this.ksIcons[10]}`} onClick={(side) => this.phaseRush('Left')} />
                
                  <hr></hr>
                
                  <img className='resolve' src={`${this.ksIcons[11]}`} onClick={(side) => this.grasp('Left')} />
                  <img className='resolve' src={`${this.ksIcons[12]}`} onClick={(side) => this.aftershock('Left')} />
                  <img className='resolve' src={`${this.ksIcons[13]}`} onClick={(side) => this.guardian('Left')} />
                </div>

                <b>{this.state.keystoneIDLeft.title}</b>
                
                <div className='ksStats' style={{borderTop: '2px solid #003747', borderBottom: '2px solid #003747', paddingBottom: '5px'}}>
                  <span>{this.state.keystoneIDLeft.type}: </span>{this.state.keystoneLeft}
                  <br></br>
                  {this.state.keystoneIDLeft.index !== 7 ? <span>Current Value: </span> : ''} 
                  {
                    this.state.keystoneIDLeft.index === 7 ? '' 
                    : this.state.keystoneIDLeft.index === 1 || this.state.keystoneIDLeft.index === 3 || this.state.keystoneIDLeft.index === 10 ? this.state.ksArrayLeft[this.levelLeft - 1] 
                    + Math.round(this.state.ksAPRatioLeft * this.state.totalStatsLeft.ap + this.state.ksBonusADRatioLeft 
                    * (this.runesLeft.ad + this.itemStatsLeft.ad) + this.state.ksHPRatioLeft * this.state.totalStatsLeft.hp 
                    + this.state.ksBonusHPRatioLeft * (this.runesLeft.hp + this.itemStatsLeft.hp))
                    : Math.round(this.state.ksArrayLeft[this.levelLeft - 1] + (this.state.ksAPRatioLeft 
                      * this.state.totalStatsLeft.ap + this.state.ksBonusADRatioLeft * (this.runesLeft.ad + this.itemStatsLeft.ad) 
                      + this.state.ksHPRatioLeft * this.state.totalStatsLeft.hp 
                      + this.state.ksBonusHPRatioLeft * (this.runesLeft.hp + this.itemStatsLeft.hp))) 
                  }
                  <div style={{display: this.state.ksPart2DisplayLeft}}>
                    <br></br>
                    <span>{this.state.ksPart2Left.type}: </span>{this.state.ksPart2Left.text}
                    <br></br>
                    {this.state.keystoneIDLeft.index !== 12 ? <span>Current Value: </span>
                    : <span>Current Cap: </span>}
                    {this.state.keystoneIDLeft.index !== 10 ? Math.round(this.state.ksPart2Left.array[this.levelLeft - 1] 
                    + (this.state.ksPart2Left.APRatio * this.state.totalStatsLeft.ap 
                    + this.state.ksPart2Left.bonusADRatio * (this.runesLeft.ad + this.itemStatsLeft.ad)
                    + this.state.totalStatsLeft.hp * this.state.ksPart2Left.HPRatio)) 
                    : this.state.ksPart2Left.array[this.levelLeft - 1] }
                  </div>
                  <div>
                    <br></br>
                    <span>Cooldown: </span>{this.state.ksCDLeft[this.levelLeft - 1]}{this.state.ksCDTextLeft}
                  </div>
                </div>
                
              </div> 
            </div>

            <div style={{width: '45vw'}}>
              <button type='button' id='ksToggleRight' onClick={(side) => this.keystoneToggle('Right')}>Hide Keystones</button>

              <div id='ksRight'>
                <div className='keystone'>
                  <img className='precision' src={`${this.ksIcons[0]}`} onClick={(side) => this.pressTheAttack('Right')} />
                  <img className='precision' src={`${this.ksIcons[1]}`} onClick={(side) => this.lethalTempo('Right')} />
                  <img className='precision' src={`${this.ksIcons[2]}`} onClick={(side) => this.fleetFootwork('Right')} />
                  <img className='precision' src={`${this.ksIcons[3]}`} onClick={(side) => this.conqueror('Right')} />
                
                  <hr></hr>
                
                  <img className='domination' src={`${this.ksIcons[4]}`} onClick={(side) => this.electrocute('Right')} />
                  <img className='domination' src={`${this.ksIcons[5]}`} onClick={(side) => this.predator('Right')} />
                  <img className='domination' src={`${this.ksIcons[6]}`} onClick={(side) => this.darkHarvest('Right')} />
                  <img className='domination' src={`${this.ksIcons[7]}`} onClick={(side) => this.hailOfBlades('Right')} />
                
                  <hr></hr>
                
                  <img className='sorcery' src={`${this.ksIcons[8]}`} onClick={(side) => this.summonAery('Right')} />
                  <img className='sorcery' src={`${this.ksIcons[9]}`} onClick={(side) => this.arcaneComet('Right')} />
                  <img className='sorcery' src={`${this.ksIcons[10]}`} onClick={(side) => this.phaseRush('Right')} />
                
                  <hr></hr>
                
                  <img className='resolve' src={`${this.ksIcons[11]}`} onClick={(side) => this.grasp('Right')} />
                  <img className='resolve' src={`${this.ksIcons[12]}`} onClick={(side) => this.aftershock('Right')} />
                  <img className='resolve' src={`${this.ksIcons[13]}`} onClick={(side) => this.guardian('Right')} />
                </div>

                <b>{this.state.keystoneIDRight.title}</b>
                
                <div className='ksStats' style={{borderTop: '2px solid #003747', borderBottom: '2px solid #003747', paddingBottom: '5px'}}>
                <span>{this.state.keystoneIDRight.type}: </span>{this.state.keystoneRight}
                  <br></br>
                  {this.state.keystoneIDRight.index !== 7 ? <span>Current Value: </span> : ''} 
                  {
                    this.state.keystoneIDRight.index === 7 ? '' 
                    : this.state.keystoneIDRight.index === 1 || this.state.keystoneIDRight.index === 3 || this.state.keystoneIDRight.index === 10 ? this.state.ksArrayRight[this.levelRight - 1] 
                    + Math.round(this.state.ksAPRatioRight * this.state.totalStatsRight.ap + this.state.ksBonusADRatioRight 
                    * (this.runesRight.ad + this.itemStatsRight.ad) + this.state.ksHPRatioRight * this.state.totalStatsRight.hp 
                    + this.state.ksBonusHPRatioRight * (this.runesRight.hp + this.itemStatsRight.hp))
                    : Math.round(this.state.ksArrayRight[this.levelRight - 1] + (this.state.ksAPRatioRight 
                      * this.state.totalStatsRight.ap + this.state.ksBonusADRatioRight * (this.runesRight.ad + this.itemStatsRight.ad) 
                      + this.state.ksHPRatioRight * this.state.totalStatsRight.hp 
                      + this.state.ksBonusHPRatioRight * (this.runesRight.hp + this.itemStatsRight.hp))) 
                  }
                  <div style={{display: this.state.ksPart2DisplayRight}}>
                    <br></br>
                    <span>{this.state.ksPart2Right.type}: </span>{this.state.ksPart2Right.text}
                    <br></br>
                    {this.state.keystoneIDRight.index !== 12 ? <span>Current Value: </span>
                    : <span>Current Cap: </span>}
                    {this.state.keystoneIDRight.index !== 10 ? Math.round(this.state.ksPart2Right.array[this.levelRight - 1] 
                    + (this.state.ksPart2Right.APRatio * this.state.totalStatsRight.ap 
                    + this.state.ksPart2Right.bonusADRatio * (this.runesRight.ad + this.itemStatsRight.ad)
                    + this.state.totalStatsRight.hp * this.state.ksPart2Right.HPRatio)) 
                    : this.state.ksPart2Right.array[this.levelRight - 1] }
                  </div>
                  <div>
                    <br></br>
                    <span>Cooldown: </span>{this.state.ksCDRight[this.levelRight - 1]}{this.state.ksCDTextRight}
                  </div>
                </div>

              </div>
            </div>
          </div>