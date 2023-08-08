import PlayGroundPage from "./Pages/PlayGroundPage/PlayGroundPage";
import RootLayout from "./components/Shared/Header/Root";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import ResultPage from "./Pages/ResultPage/ResultPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PlayGroundPage />,
      },
      {
        path: "ResultPage",
        element: <ResultPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
