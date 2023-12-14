import AdminRoot from "../pages/admin/AdminRoot";
import Books from "../pages/admin/Books/Books";
import Dasboard from "../pages/admin/Dashboard/Dasboard";
import Table from "../pages/admin/Table/Table";
import Basket from "../pages/site/Basket/Basket";
import Contact from "../pages/site/Contact/Contact";
import Home from "../pages/site/Home/Home";
import SiteRoot from "../pages/site/SiteRoot";


const ROOT=[{
    path:"/",
    element:<SiteRoot/>,
    children:[
        {
            path:"",
            element:<Home/>
        },
        {
            path:"contact",
            element:<Contact/>    
        },
        {
            path:"basket",
            element:<Basket/>
        },
    ]
},
{
    path:"/admin",
    element:<AdminRoot/>,
    children:[
        {
            path:"",
            element:<Dasboard/>
        },
        {
            path:"",
            element:<Table/>
        },
        {
            path:"",
            element:<Books/>
        },
    ]
}]
export default ROOT


