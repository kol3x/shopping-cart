
import Header from "./header";
import Items from "./items";
import Cart from "./cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children: [
      {
        path: "",
        element: <Items />,
      },
      {
        path: "cart",
        element: (
          <>
            <Items />
            <Cart />
          </>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
