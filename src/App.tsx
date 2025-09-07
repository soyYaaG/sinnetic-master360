import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "@pages/home";
import { MainLayout } from "@layouts/main";
import { CreateCatalog } from "@pages/catalog/createCatalog";
import { Setting } from "@pages/setting";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="catalog/create" element={<CreateCatalog />} />
        <Route path="setting" element={<Setting />} />
      </Route>
    </Routes>
  );
}

export default App;
