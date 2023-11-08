'use client'

import { useContext,createContext,useState } from "react";


export const SearchContext = createContext();

export const SearchContextProvider = ({children}) =>{
  const [searchActive,setSearchActive] =useState(false);

  return <SearchContext.Provider value={{searchActive,setSearchActive}}>
    {children}
  </SearchContext.Provider>;
};


export const useSearchContext = ()=> useContext(SearchContext);
/*
export default function Search() {
    return <div>Search</div>;
 }
 */