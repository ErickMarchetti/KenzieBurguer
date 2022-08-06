import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import Provider from "./contexts"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import GlobalStyle from "./style/GlobalStyle"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider>
      <GlobalStyle />
      <App />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  </React.StrictMode>
)
