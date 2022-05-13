import React from 'react';

function home({date}) {
    return (
        date.map((d,i) =>{
            return(
                <>
                <h1>{d.id}</h1>
                <h4>{d.name}</h4>
                </>
            )
        })
    );
}

export default home;