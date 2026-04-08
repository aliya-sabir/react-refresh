import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx'

const MainLayouts = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    </>
  )
}

export default MainLayouts
