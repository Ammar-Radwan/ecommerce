import React, { createContext, useState } from 'react';

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [isSignedUp, setIsSignedUp] = useState(false);
    
    return (
        <MainContext.Provider value={{
            cartCount, setCartCount,
            isSignedUp, setIsSignedUp
        }}>
            {children}
        </MainContext.Provider>
    );
}