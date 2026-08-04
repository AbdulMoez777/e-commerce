import axios from "axios";
import { createContext } from "react";
import { useState } from "react";

export const  Datacontext = createContext(null);

export const DataProvider = ({ children }) => {

  const [data, setData] = useState();

//   fetching all products from api 
const fetchAllProducts = async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products")
    console.log(res)  
    setData(res.data)    
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
  return (
    <Datacontext.Provider value={{ data, setData, fetchAllProducts }}>
      {children}
    </Datacontext.Provider>
  );
}