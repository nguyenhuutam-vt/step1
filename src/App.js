import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Page from "./Page/Page";
function App() {
  return (
    <Routes >
      <Route path="/" element={<Page/>}/>
    </Routes>
  );
}

export default App;
