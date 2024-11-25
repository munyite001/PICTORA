import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([])
  const [carsLoading, setCarsLoading] = useState(true)


   const fetchCars = async () => {
    try {
        setCarsLoading(true);
        const response = await axios.get(process.env.EXPO_PUBLIC_BASE_URL + "/vehicles/public");
        const data = await response.data;
        setCars(data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    } finally {
      setCarsLoading(false);
    }
   }

  useEffect(() => {
    fetchCars()
  }, [])

  // useEffect(() => {
  //   getCurrentUser()
  //     .then((res) => {
  //       if (res) {
  //         setIsLogged(true);
  //         setUser(res);
  //       } else {
  //         setIsLogged(false);
  //         setUser(null);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,
        cars,
        carsLoading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
