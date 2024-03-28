import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./Navigation/RouterConfig";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <RouterConfig />
    </BrowserRouter>
  );
}

export default App;
