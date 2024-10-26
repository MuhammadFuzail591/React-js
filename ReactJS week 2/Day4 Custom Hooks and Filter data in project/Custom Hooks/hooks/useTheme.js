import { useContext } from "react";
import { Theme } from "../contexts/ThemeContext";


export const useTheme = () => useContext(Theme)