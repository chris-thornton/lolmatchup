<div className='runeBox'>
  <img src={adaptiveIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} 
  alt='Adaptive Force Icon' height="25px" width="25px"/>
  <img src={adaptiveIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} 
  alt='Adaptive Force Icon' height="25px" width="25px"/>
  <img src={healthIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} 
  alt='Health Icon' height="25px" width="25px"/>
  <img src={attackSpeedIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} 
  alt='Health Icon' height="25px" width="25px"/>
  <img src={armorIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} 
  alt='Health Icon' height="25px" width="25px"/>
  <img src={armorIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} 
  alt='Health Icon' height="25px" width="25px"/>
  <img src={cdrIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} 
  alt='Health Icon' height="25px" width="25px"/>
  <img src={magicResIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} 
  alt='Health Icon' height="25px" width="25px"/>
  <img src={magicResIcon} style={{verticalAlign: "middle", paddingBottom: "5px"}} 
  alt='Health Icon' height="25px" width="25px"/>
</div>

//runebox alt version

nextNextSib.setAttribute('src', this.runeHash[nextNextSib.id]['baseSrc']);
        var nextNextStat = this.runeHash[nextNextSib.id]['stat'][0];
        var nextNextValue = this.runeHash[nextNextSib.id]['stat'][1];
        if (nextNextStat === 'force') {
          if (this.state[`itemStats${side}`].ap > this.state[`itemStats${side}`].ad) {
            nextNextStat = 'ap';
            nextNextValue = 9;
          } else {
            nextNextStat = 'ad';
            nextNextValue = 5.4;
          };
        };
        if (nextNextStat === 'hp') {
          nextNextValue = this.runeHash[nextNextSib.id]['stat'][champLevel+1];
        };

        this.setState(prevState => ({
          [`runes${side}`]: {
            ...prevState[`runes${side}`],
            [nextNextStat]: +prevState[`runes${side}`][nextNextStat] - +nextNextValue
          }
        }))