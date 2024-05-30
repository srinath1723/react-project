import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Note from "./pages/Note";
// create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/notes/:id",
    element: <Note />,
  }
]);
const App = () => {
  // wrap the app with the RouterProvider
  return <RouterProvider router={router} />;
}
export default App;