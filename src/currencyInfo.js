// import { useState, useEffect } from "react";
// function UseCurrencyInfo(Currency) {
//     useEffect(() => {
//         const [data, setData] = useState({})
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${Currency}.json`)
//         .then((res) => res.json())
//         .then((res) => setData(res[Currency]))
//     }
//         , [Currency]
//     )
//     // console.log(data);

//     return data
// }
// export default UseCurrencyInfo
import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;
