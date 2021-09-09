import React from 'react';

const About = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h2><span style={{color: '#ffffb9'}}>LoL Match-Up</span> - Statistical comparison in visual simplicity.</h2>
            <p>This tool gives you fast calculations for League of Legends champion match-ups.</p>
            <p>Search by champion and view side-by-side values based on levels, runes, and items.</p>
            <p>The study of movement was considered outside the scope of this project. Calculations involving 
                movement speed bonuses and slows are omitted.</p>
        </div>
    )
}

export default About;