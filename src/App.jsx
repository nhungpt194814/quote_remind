import { BrowserRouter,Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import Login from "./pages/Login/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
