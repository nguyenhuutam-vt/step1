import { Route, Routes } from "react-router-dom";

import Page from "./Page/Page";
import Admin from "./Admin/Admin";
import DashboardAdmin from "./Admin/DashboardAdmin";
import Product from "./Admin/Product";
function App() {
  return (
    <Routes >
      <Route path="/" element={<Page/>}/>
      <Route path='admin' element={<Admin/>}/>
      <Route path="/dashboard" element={<DashboardAdmin />} />
      <Route path='/product' element={<Product/>}/>
    </Routes>
  );
}

export default App;
