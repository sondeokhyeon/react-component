import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Root from "./pages/root";
import Notfound from "./components/common/notfound";
import Accordion from "./pages/component/accordion";
import StarRating from "./pages/component/star-rating";

const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <Root />,
          errorElement: <Notfound />,
        },
        {
          path: "/component",
          children: [
            {
              path: "/component/accordion",
              element: <Accordion />,
              index: true,
            },
            {
              path: "/component/star-rating",
              element: <StarRating />,
            },
          ],
        },
      ])}
    />
  );
};

export default App;
