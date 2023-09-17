import Home from "../pages/Home"
import About from "../pages/About"
import Dashboard from "../pages/Dashboard"

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
      path:"",
      component: Home,
      name: "Home Screen"
    },
    {
      path:"/dashboard",
      component: Dashboard,
      name: "Dashboard"
    },
    {
      path:"/about",
      component: About,
      name: "About"
    }, 
  ];

export default routes;  