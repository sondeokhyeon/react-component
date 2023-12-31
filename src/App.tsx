import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Root from "./pages/root";

const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <Root />,
        },
      ])}
    />
  );
};

export default App;
