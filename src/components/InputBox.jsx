import React from "react";
import { useId } from "react";
function InputBox({
  label,
  className = "",
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  // What if user doesn't wanna change the amount or currency
  // Ye sab production grade me lgta hai
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId();
  // Ye hme unique values dega
  // Jisse hum label and input ko bind karenge
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          //ye check bhi karlega if onAmountChange exists and if it exists then it will invoke the function
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {/* Ab dekho jab bhi loop karoge to react thakega, that is why keys are used to uniquely identify each ele */}
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default InputBox;
// Chhote projects me to koi na but bde projects me index.js me me sabko import karo and vaha se export kardo
// Components me bnana index.js
