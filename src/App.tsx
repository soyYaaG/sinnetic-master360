import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "@pages/home";
import { MainLayout } from "@layouts/main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
