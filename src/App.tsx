import { ThemeProvider } from "styled-components"
import { lightTheme } from "./styles/themes/light"
import { useState } from "react"
import { darkTheme } from "./styles/themes/dark"
import { GlobalStyle } from "./styles/global"
import { About } from "./components/About"

function App() {

  const [theme, setTheme] = useState('dark')

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <About themeToggler={themeToggler}/>
      
    </ThemeProvider>
  )
}

export default App
