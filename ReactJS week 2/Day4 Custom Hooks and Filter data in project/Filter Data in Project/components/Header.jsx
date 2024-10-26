import { useTheme } from "../hooks/useTheme";

const Header = () => {
  // const [isDark, setIsDark] = theme;
  const [isDark,setIsDark] = useTheme();

  // if(isDark){
  //   document.body.classList.add("dark");
  // }else{
  //   document.body.classList.remove("dark");
  // }

  return (
    <header className={`header-container ${isDark? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where are you in the world?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            // document.body.classList.toggle("dark");
            setIsDark(!isDark);
            localStorage.setItem("isDarkTheme",!isDark);
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
          {isDark ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </header>
  );
};

export default Header;
