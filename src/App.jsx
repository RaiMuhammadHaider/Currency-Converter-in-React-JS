import { useState } from 'react'
// import { Inputbox } from './Components'
import InputBox from './Components/InputBox'
// import UseCurrencyInfo from './CurrencyInfo'
// import useCurrencyInfo from './currencyInfo'

import useCurrencyInfo from "./currencyInfo";
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
const [amount , setAmount] = useState(0)
const [ from ,setFrom ] = useState('usd')
const [ to , setTo] = useState('inr')
const [convertedAmount, setConvertedAmount] = useState(0)
const currencyInfo = useCurrencyInfo(from)
const options = Object.keys(currencyInfo)
const swap = ()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}
const convert = ()=>{
  setConvertedAmount(amount*currencyInfo[to])
}
  return (
    <>
  <div
  className="min-h-screen w-full flex items-center justify-center bg-cover bg-no-repeat bg-center p-4"
  style={{
    backgroundImage:
      "url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
  }}
>
  <div className="w-full max-w-lg bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/30">
    <h1 className="text-3xl text-white font-bold text-center mb-6 drop-shadow-md">
      Currency Converter
    </h1>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        convert();
      }}
      className="space-y-6"
    >
      {/* From Input */}
      <div>
        <InputBox
          label="From"
          amount={amount}
          currencyOption={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          onAmountChange={(amount) => setAmount(amount)}
        />
      </div>

      {/* Swap Button */}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={swap}
          className="bg-white/20 text-white font-semibold px-4 py-2 rounded-full border border-white hover:bg-white/40 transition-all duration-300"
        >
          ⟷ Swap
        </button>
      </div>

      {/* To Input */}
      <div>
        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOption={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          amountDisable
        />
      </div>

      {/* Convert Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white py-3 rounded-xl font-semibold shadow-md transition-all duration-300"
      >
        Convert {from.toUpperCase()} to {to.toUpperCase()}
      </button>
    </form>
  </div>
</div>

    </>
  )
}

export default App
