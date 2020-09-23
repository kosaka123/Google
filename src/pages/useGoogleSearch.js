import { useEffect, useState } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "f843a215e765bf01f";

//term is the input who enter in their
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  //get the term data who search and run googlesearch functions to get search result
  useEffect(() => {
    const fetchData = async () => {
      //fetch一個全域的方法
      //包含了需要 fetch 的網址和對應的屬性設定
      //( 例如 method、headers、mode、body...等，最基本的寫法屬性不一定要填 )
      //執行之後會送出 Request，如果得到回應就會回傳帶有 Response 的 Promise 物件
      //使用 then 將回傳值傳遞下去。
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`,
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
