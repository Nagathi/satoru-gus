import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Api from "./Api";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/index.html" element={<HomePage/>} />
        <Route path="/myapi" element={<Api/>} />
        <Route path="/login" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
