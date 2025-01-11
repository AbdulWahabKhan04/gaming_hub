import Navbar from '../../components/UI/Navbar'
import Footer from '../../components/UI/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="bg-gray-800">
        <Navbar/>
        <Outlet/>
        <Footer />
    </div>
  )
}

export default Layout