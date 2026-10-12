import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  function toogleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div>
      <p>Current theme:{theme}</p>
      <button onClick={toogleTheme}>Change theme</button>
    </div>
  );
}
