import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useContext, useEffect, useState } from "react";
import { Theme } from "../contexts/ThemeContext";
import { useWindowSize } from "../hooks/useWindowSize";
import { useTheme } from "../hooks/useTheme";
const Home = () => {
  const [query, setQuery] = useState("");
  const [isDark] = useTheme();
  const size = useWindowSize();
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      <h1 style={{ textAlign: "center" }}>
        {size.width} X {size.height}
      </h1>
      {<CountriesList query={query} />}
    </main>
  );
};

export default Home;
