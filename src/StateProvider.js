import React, { createContext, useContext, useReducer } from "react";

//Data store
export const StateContext = createContext();

//building a provider that will wrap our layer 
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//how its used in a component
export const useStateValue = () => useContext(StateContext);