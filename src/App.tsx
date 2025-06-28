import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import Home from './pages/Home/'
import GlobalStyle, { Container } from './styles'
import store from './store/index'
import Register from './pages/Register'
import theme from './theme/theme'

const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    path: '/register',
    element: <Register />
  }
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <StyleSheetManager shouldForwardProp={isPropValid}>
          <GlobalStyle />
          <Container>
            <RouterProvider router={routes} />
          </Container>
        </StyleSheetManager>
      </Provider>
    </ThemeProvider>
  )
}

export default App
