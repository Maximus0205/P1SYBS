import AppLayout from "./core/layout/AppLayout";
import SagListePage from "./features/sager/pages/SagListePage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<SagListePage />} />
      </Routes>
    </AppLayout>
  );
}
