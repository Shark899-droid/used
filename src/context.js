import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [parts, setParts] = useState([]);
  let [imgIndex, setImgIndex] = useState(0);
  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/parts').then((response) => {
      setParts(response.data);
    });
  }, []);

  const clickRight = (arr, id) => {
    if (imgIndex < arr.image.length && arr._id === id) {
      setImgIndex(imgIndex++);
    }
  };

  const clickLeft = (arr, id) => {
    if (imgIndex > 0 && arr._id === id) {
      setImgIndex(imgIndex--);
    }
  };
  return (
    <AppContext.Provider value={{ parts, clickLeft, clickRight, imgIndex }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
