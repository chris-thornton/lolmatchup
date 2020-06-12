import React from 'react';

const ChampAbilitiesLeft = ( {abilities1, preventKeyPress} ) => {
    return (
        <div>

            <div className="hidden">
                <span><b><u>Q </u></b></span><span>- rank: </span>
                <input id="qRankLeft" type="number" placeholder="0" min="0" max="5" 
                style={{width: "40px"}} onKeyDown={preventKeyPress} />
            </div>
            <div className="hidden abilityBox">
                Damage: <br />
                Shield: for seconds<br />
                Heal: <br />
                Bonus stats: <br />
                Cooldown: <br />
                Dmg / Cooldown: <br />
                Shield / Cooldown: <br />
                Heal / Cooldown: 
            </div>

            <div className="hidden">
                <span><b><u>W </u></b></span><span>- rank: </span>
                <input id="wRankLeft" type="number" placeholder="0" min="0" max="5" 
                style={{width: "40px"}} onKeyDown={preventKeyPress} />
            </div>
            <div className="hidden abilityBox">
                Damage: <br />
                Shield: for seconds<br />
                Heal: <br />
                Bonus stats: <br />
                Cooldown: <br />
                Dmg / Cooldown: <br />
                Shield / Cooldown: <br />
                Heal / Cooldown: 
            </div>

            <div className="hidden">
                <span><b><u>E </u></b></span><span>- rank: </span>
                <input id="eRankLeft" type="number" placeholder="0" min="0" max="5" 
                style={{width: "40px"}} onKeyDown={preventKeyPress} />
            </div>
            <div className="hidden abilityBox">
                Damage: <br />
                Shield: for seconds<br />
                Heal: <br />
                Bonus stats: <br />
                Cooldown: <br />
                Dmg / Cooldown: <br />
                Shield / Cooldown: <br />
                Heal / Cooldown: 
            </div>

            <div className="hidden">
                <span><b><u>R </u></b></span><span>- rank: </span>
                <input id="rRankLeft" type="number" placeholder="0" min="0" max="5"
                style={{width: "40px"}} onKeyDown={preventKeyPress} />
            </div>
            <div className="hidden abilityBox">
                Damage: <br />
                Shield: for seconds<br />
                Heal: <br />
                Bonus stats: <br />
                Cooldown: <br />
                Dmg / Cooldown: <br />
                Shield / Cooldown: <br />
                Heal / Cooldown: 
            </div>

        </div>
    )
}

export default ChampAbilitiesLeft;