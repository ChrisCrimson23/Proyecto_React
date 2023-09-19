import {createBrowserRouter } from "react-router-dom";
import App from "./App";
import Contact from "./views/contact/Contact";

const routes = createBrowserRouter (
    [{"path":"/", element:<App/>, children:[{"path":"/contact", element:<Contact/>}]},]
)

export default routes