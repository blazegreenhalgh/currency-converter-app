import React from "react";
import { useState, useId } from "react";

function InputField({
    label, 
    amount, 
    onChangeAmount, 
    onCurrencyChange,
    from,
    to,
    options,
    selectedCurrency,
    isReadOnly,

}) {
    const numberId = useId()  
    const selectId = useId()  


    

    return ( 
    <div className="w-full h-full flex gap-2 justify-between items-center bg-white p-4 rounded-lg">
        <div className="flex flex-col text-gray-300 gap-2 ">
            <label htmlFor={numberId}>{label}</label>
            <input 
            id={numberId}
            className="text-black"
            type="number"
            readOnly={isReadOnly}
            value={amount}
            onChange={(e) => {onChangeAmount(Number(e.target.value))}}
            />
        </div>
        <div className="flex flex-col text-gray-400 gap-2">
            <label htmlFor={selectId}>Currency</label>
            <select 
            id={selectId}
            className="bg-black/10 rounded-md p-1 text-black"
            value={selectedCurrency}
            onChange={(e) => {onCurrencyChange(e.target.value)}}>
                {options.map((option) => {
                    return <option key={option} value={option}>{option}</option>
                })}         
            </select>
        </div>
        
    </div>
    )
}

export default InputField