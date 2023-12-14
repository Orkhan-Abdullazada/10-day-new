
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ROOT from './router/ROUTES.js';

const root=createBrowserRouter(ROOT)

function App() {
  return (

    <RouterProvider router={root}/>
  );
}

export default App;
