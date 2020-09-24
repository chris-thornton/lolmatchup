import React from 'react';

const ChampDropDownRight = ({filteredChamps2, onChampClick2}) => {
  const dropDown2 = filteredChamps2.split(',').map(champ => {
    return (
      <li style={{border: 'solid 1px', cursor: 'pointer', backgroundColor: '#f6f6f6'}} onClick={onChampClick2} key={champ}>
        { champ }
      </li>
    )
  })
  return ( filteredChamps2 === "" || filteredChamps2.split(',').length > 100 ) ? ( 
  <ul style={{width: '120px', visibility: 'hidden', marginTop: 0, marginRight: 10}}></ul> )
    : ( 
      <ul style={{listStyleType: 'none', width: '120px', right: 0, marginTop: 0, marginRight: 10, zIndex: 100}}>
        { dropDown2 }
      </ul>
    )
};

export default ChampDropDownRight;