import React from 'react';

const ChampDropDownRight = ({filteredChamps2, onChampClick, onLiKeyDown, onLiBlur}) => {
  const dropDown2 = filteredChamps2.split(',').map(champ => {
    return (
      <li style={{cursor: 'pointer', backgroundColor: '#f6f6f6'}} onClick={onChampClick} className='clickRight' 
      key={champ} tabIndex='-1' onKeyDown={onLiKeyDown} onBlur={onLiBlur}>
        { champ }
      </li>
    )
  })
  return ( filteredChamps2 === "" || filteredChamps2.split(',').length > 100 ) ? ( 
  <ul style={{width: '120px', paddingLeft: 0, marginTop: 0, visibility: 'hidden'}}></ul> )
    : ( 
      <ul style={{listStyleType: 'none', width: '120px', paddingLeft: 0, zIndex: 100, marginTop: 0, position: 'absolute'}}
      tabIndex='0' id='ulRight'>
        { dropDown2 }
      </ul>
    )
};

export default ChampDropDownRight;