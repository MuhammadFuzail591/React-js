
import { useLocalStorage } from "./useLocalStorage";

export function useFilter(dataList, callback) {
  const [query, setQuery] = useLocalStorage("query", "");
  //   const [total, setTotal] = useState(0);
  const filteredData = dataList.filter((data) =>
    callback(data).toLowerCase().includes(query)
  );

  //   filteredData.array.forEach((am) => {
  //     console.log(am.amount)
  //   })

  return [filteredData, setQuery];
}
