import { useState,useEffect } from "react";

function useLocalStorage(key) {
  
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem(key));
    console.log(item)
    if(item){
      
      setData(() => item)
      console.log(item + "Added")
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem(key,JSON.stringify(data))
  }, [data]);
  
  const clear = () => {
    setData(() => null);
    localStorage.removeItem(key);
  }
  
  return [data,setData,clear];
}

export default useLocalStorage;