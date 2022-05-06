import React, { useState } from 'react';
// import React from 'react';

function container(props) {

        const [Country , setCountry]=useState('india');
        const [Gdp,steGdp]=useState(0);

        const Change = ()=>{
            setCountry('canada')
        }

    return (
        <div>
            <p>Country:{Country}</p>
            <button onClick={()=>Change()}>Change</button>

            <p>Gdp:{Gdp}</p>
            <button onClick={()=>steGdp(7.7)}>Change</button>
        </div>
    );
}

export default container;