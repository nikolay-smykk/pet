import { routes } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider, theme } from '@chakra-ui/react'

import { Header } from './components/Header'

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <ColorModeSwitcher /> */}
        {routes.map((rout) => (
          <Route
            key={rout.title}
            index={rout?.index ?? false}
            path={rout.title}
            element={<rout.page />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
