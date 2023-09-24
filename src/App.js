import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Profile from "./routes/profile";
import Home from "./routes/home";

const counter = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"",
        element:<Home />,
      },
      {
        path:'',
        element:<Profile />
      }
    ]
  }
])
function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
