import React, { useReducer } from "react";

export const Context = React.createContext();

const initialState = {
  data: null
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'GET_DATA':
      return {
        ...state,
        data: action.payload
    }
    default:
      return state;
  }

}

export function Provider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}