import React, { createContext, useReducer } from "react";

const initialValues = {
  currentPage: 0,
};
const PaginationContext = createContext(initialValues);

const { Provider } = PaginationContext;

const PaginationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "CHANGE_CURRENT_PAGE":
        
        return {...state,currentPage:action.payload};
      default:
        throw new Error();
    }
  }, initialValues);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};


export {PaginationContext,PaginationContextProvider}