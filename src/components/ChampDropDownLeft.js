import React from 'react';

const ChampDropDownLeft = ( {filteredChamps, onChampClick} ) => {
  const dropDown = filteredChamps.split(',').map(champ => {
    return (
      <li style={{cursor: 'pointer', backgroundColor: '#f6f6f6'}} onClick={onChampClick} className='clickLeft' key={champ}>
        { champ }
      </li>
    )
  })
  return ( filteredChamps === "" || filteredChamps.split(',').length > 100 ) ? ( 
  <ul style={{width: '120px', visibility: 'hidden', paddingLeft: 0, marginTop: 0, marginLeft: 10, zIndex: 1000}}></ul> )
    : ( 
      <ul style={{listStyleType: 'none', width: '120px', paddingLeft: 0, marginTop: 0, zIndex: 1000, position: "absolute", left: '15vw'}}>
        { dropDown }
      </ul>
    )
};

export default ChampDropDownLeft;