import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Fituri from '../components/Footer';
import { listed } from "./listed";
import Login from '../pages/Login';
import Action from '../pages/Action'; 
import Comedi from '../pages/Comedi';
import Horror from '../pages/Horror';
import Detail from "../pages/DetailPage"; // Pastikan file ini ada


const Route : ReturnType<typeof createBrowserRouter> = createBrowserRouter([


  {
    path: listed.home,
    element: <Home />
  },
  {
    path: listed.fituri,
    element: <Fituri />
  },
  {
    path: listed.login,
    element: <Login />
  },
  {
    path: listed.action,
    element: <Action />
  }
  ,
  {
    path: listed.comedi,
    element: <Comedi />
  }
  ,
  {
    path: listed.horror,
    element: <Horror /> 
  },
  {
  path: listed.detail,
  element: <Detail />
  },

])

export default Route;
