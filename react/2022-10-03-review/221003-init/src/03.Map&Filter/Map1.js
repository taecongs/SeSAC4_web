import React from 'react';


const Map1 = () => {
    const baseball = ['LG트윈스', 'SSG 랜더스', '키움 히어로즈', 'KT 위즈'];

    const bsTeam = baseball.map((baseball, team) => <li key={team}>{baseball}</li>);
    return(
        <div>
            <h1>Map 복습</h1>

            <ul>
                {bsTeam}
            </ul>
        </div>
    );
}

export default Map1;