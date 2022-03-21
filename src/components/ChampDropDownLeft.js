import React from 'react';

const ChampDropDownLeft = ( {filteredChamps, onChampClick, onLiKeyDown, onLiBlur} ) => {
  const dropDown = filteredChamps.split(',').map(champ => {
    return (
      <li style={{cursor: 'pointer', backgroundColor: '#f6f6f6'}} onClick={onChampClick} className='clickLeft' 
      key={champ} tabIndex='-1' onKeyDown={onLiKeyDown} onBlur={onLiBlur}>
        { champ }
      </li>
    )
  })
  return ( filteredChamps === "" || filteredChamps.split(',').length > 100 ) ? ( 
  <ul style={{width: '120px', visibility: 'hidden', paddingLeft: 0, marginTop: 0}}></ul> )
    : ( 
      <ul style={{listStyleType: 'none', width: '120px', paddingLeft: 0, marginTop: 0, zIndex: 101, position: "absolute"}} 
       tabIndex='0' id='ulLeft'>
        { dropDown }
      </ul>
    )
};

export default ChampDropDownLeft;