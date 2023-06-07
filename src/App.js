import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Page from "./Page/Page";
import Admin from "./Admin/Admin";
function App() {
  return (
    <Routes >
      <Route path="/" element={<Page/>}/>
      <Route path='admin' element={<Admin/>}/>
    </Routes>
  );
}

export default App;
