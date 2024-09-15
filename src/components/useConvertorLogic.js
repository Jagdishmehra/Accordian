import { useEffect, useState } from "react";


const useConvertorLogic = (currency) => {

    const[currencyData, setCurrencyData]=useState();
  
    const fetchdata=async()=>{
        const data=await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/"+currency+".json")
        //console.log(data);
        const json=await data.json();
        setCurrencyData(json[currency]); // we only need the currency data from the json but not the date and other stuff
        //console.log(json);
    }
    useEffect(()=>{
        fetchdata();
    }, [currency])

    return currencyData;
}

export default useConvertorLogic
