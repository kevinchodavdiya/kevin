import React from 'react';

function loading(componet) {
    return function withoutLoadingAnyComponent({isLoading,date}){
        console.log((isLoading,date));
        if(isLoading){
            return(
                <p>Loading....</p>
            )
        }else{
            return(
                <componet date={date} />
            )
        }
    }
    
}

export default loading;