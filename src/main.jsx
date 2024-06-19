import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
// import App from './App.jsx'
import "./App.css";
import ContextProvider from './Context/ContextProvider.jsx';
import router from './routes/router.jsx';
import { Toaster } from "react-hot-toast";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
      {/* <App /> */}
    </ContextProvider>
  </React.StrictMode>
);
