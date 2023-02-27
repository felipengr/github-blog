import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { defaultTheme } from './styles/theme/defaultTheme'
import { GlobalStyles } from './styles/theme/global'

export function App() {
  return (
    <div>
      <HashRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </HashRouter>
    </div>
  )
}
