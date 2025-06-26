import React, { useId } from 'react'

function Inputbox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,
    className = '',
}) {
    const amountInputId = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1/2'>
                <label htmlFor={amountInputId} className='text-black mb-2 inline-block'> {label}</label>
                <input
                    id={amountInputId}
                    type="number"
                    className='bg-transparent w-full outline-none '
                    placeholder='Amount'
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='w-full text-black mb-3'>Currency Type</p>
                <section
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    className='cursor-pointer px-1 py-1 rounded-lg outline-none' >
                    {
                        currencyOption.map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))
                    }

                </section>

            </div>
        </div>
    )
}
export default Inputbox