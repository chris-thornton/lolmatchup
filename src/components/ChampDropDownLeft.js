import React from 'react';

const ChampDropDownLeft = ( {filteredChamps, onChampClick} ) => {
  const dropDown = filteredChamps.split(',').map(champ => {
    return (
      <li style={{border: 'solid 1px', cursor: 'pointer', backgroundColor: '#f6f6f6'}} onClick={onChampClick} key={champ}>
        { champ }
      </li>
    )
  })
  return ( filteredChamps === "" || filteredChamps.split(',').length > 100 ) ? ( 
  <ul style={{width: '120px', visibility: 'hidden', paddingLeft: 0, marginTop: 0}}></ul> )
    : ( 
      <ul style={{listStyleType: 'none', width: '120px', paddingLeft: 0, position: 'absolute', left: 0, marginTop: 0}}>
        { dropDown }
      </ul>
    )
};

export default ChampDropDownLeft;