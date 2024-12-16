import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Preview from "./pages/Preview"



function App() {
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <Preview />
    }

  ])
  return (
    <RouterProvider router={router} />
  )

  
}

export default App
