import React from 'react';

function loading(componet) {
    return function withoutLoadingAnyComponent({isLoading,DimData}){
        console.log((isLoading,DimData));
        if(isLoading){
            return(
                <p>Loading....</p>
            )
        }else{
            return(
                <componet data={DimData} />
            )
        }
    }
    
}

export default loading;