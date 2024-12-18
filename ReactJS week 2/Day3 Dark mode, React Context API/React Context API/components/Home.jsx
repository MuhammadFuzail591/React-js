import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useContext, useState } from "react";
import { Theme } from "../contexts/ThemeContext";
const Home = () => {
  const [query, setQuery] = useState("");
  const [isDark] = useContext(Theme)
  return (
    <main className={`${isDark? "dark":""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      {query === "unmount" ? "" : <CountriesList query={query} />}
    </main>
  );
};

export default Home;
