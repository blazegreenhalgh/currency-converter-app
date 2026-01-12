import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("aud")
    const [to, setTo] = useState("rub")
    const [convertedAmount, setConvertedAmount] = useState(0)
    const currencyInfo = useCurrencyInfo(from)
    const options = Object.keys(currencyInfo)

    function convert() {
      setConvertedAmount(amount * currencyInfo[to])
    }

    function swap() {
      setFrom(to)
      setTo(from)
      setAmount(convertedAmount)
      setConvertedAmount(amount)
    }





  return (
    <div className='flex items-center justify-center  h-screen relative'>
        <div className='bg-white/10 border border-white/30 px-3 py-3 flex flex-col gap-1 rounded-xl relative backdrop-blur-sm bg-white/20'>
          <InputField 
          label="From" 
          amount={amount} 
          from={from}
          to={to}
          onChangeAmount={(amount) => setAmount(amount)} 
          onCurrencyChange={(currency) => setFrom(currency)}
          selectedCurrency={from}
          options={options}
          isReadOnly={false}
          />
          <div className='relative w-full h-0.5 z-10'>
            <button 
            onClick={swap}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-blue-500 border-2 border-white rounded-md px-4 py-2 text-white hover:bg-blue-600 cursor-pointer">Swap</button>
          </div>
          <InputField 
          label="To" 
          amount={convertedAmount} 
          onChangeAmount={(amount) => setAmount(amount)} 
          onCurrencyChange={(currency) => setTo(currency)}
          selectedCurrency={to}
          options={options}
          isReadOnly={true}
          />
          
          <button
          className='bg-blue-500 rounded-md py-4 text-white hover:bg-blue-600 mt-2 cursor-pointer'
          onClick={() => {convert()}}
          >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
           
        </div>
    </div>
  )
}

export default App
