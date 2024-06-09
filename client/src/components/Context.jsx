
import React, { createContext, useReducer, useContext, useState } from 'react';

const initialState = {
    id:""

};

const StateContext = createContext(initialState);

export const useStateValue = () => useContext(StateContext);
export const UPDATE_CONTENT = 'UPDATE_CONTENT';
const reducer = (state, action) => {
    
    switch (action.type) {
        case UPDATE_CONTENT:
            return {
               
                 id:action.payload
                // Update the content of initialState here
            };
        // Handle different actions to update state
        default:
            return state;
    }
};

export const StateProvider = ({ children }) => {
   
 const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {children}
        </StateContext.Provider>
    );
};