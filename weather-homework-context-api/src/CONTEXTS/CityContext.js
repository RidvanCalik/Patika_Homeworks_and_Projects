import { createContext, useState } from "react";


const CityContext = createContext(); //for Components

function CityProvider({children}){ //for App.js 
    const cityNameState=useState(null);
   
    return(
        <CityContext.Provider value={cityNameState}>{children}</CityContext.Provider>
    )
}

export {CityContext,CityProvider};
