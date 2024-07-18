// We are creating our custom hook
// This is a naming convention that whenever hook is created, its name starts with use
// And every hook file is of pure JS
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  // Empty object is liye pass kiya jisse in case of no response bhi app crash na ho
  useEffect(() => {
    fetch(
      `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  return data;
}
export default useCurrencyInfo;
// Pura method hi export kar diya, jaha use karna hoga vaha invoke kar denge for specific currency
