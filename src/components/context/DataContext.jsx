import { createContext,  useState } from "react";
import { useContext } from "react";
import axios from "axios";


export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products?limit=150`);
      console.log("API data:", res.data);
      setData(res.data); 
    } catch (error) {
      console.error("API fetch error:", error);
    }
  };

  return (
    <DataContext.Provider value={{ data, setData, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};
  export const getData=()=>useContext(DataContext);
