import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Pages/Layout/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App