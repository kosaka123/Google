import React, { createContext, useReducer, useContext } from "react";

export const StateContext = createContext(); //prepare data layer

//wrap the app or hiring all component and children is refering the <APP/>
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//this is Hook whick allows us to pull information from data layer
export const useStateValue = () => useContext(StateContext);
