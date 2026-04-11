import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import MainLayout from './layouts/MainLayouts.jsx';
import JobsPage from './pages/JobsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage.jsx';

// create router object
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
  <Route index element={<HomePage />}/>
  <Route path='/jobs' element={<JobsPage />} />
  <Route path='/add-job' element={<AddJobPage />} />
  <Route path='/jobs/:id' element={<JobPage />} loader = {jobLoader} />
  <Route path='*' element={<NotFoundPage />} />
  </Route>
  )
);

// creates router for whole app
const App = () => {
  return <RouterProvider router={router} />;
   
};

export default App
