import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Users, { loader as notesLoader } from "./pages/Users";


// create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <users />,
    loader: notesLoader
  },
  {
    path: "/users/:id",
    element: <Users />,
    loader: notesLoader
  }
]);
const App = () => {
  // wrap the app with the RouterProvider
  return <RouterProvider router={router} />;
}
export default App;