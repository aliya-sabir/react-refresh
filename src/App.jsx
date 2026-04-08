import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import MainLayout from './layouts/MainLayouts.jsx'

// create router object
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
  <Route index element={<HomePage />}/>
  </Route>
  )
);

// creates router for whole app
const App = () => {
  return <RouterProvider router={router} />;
   
};

export default App
