import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import ProductoListar from "./pages/ProductoListar";
import NotFound from "./NotFound";
import ProductoCrear from "./pages/ProductoCrear";
import ProductoEditar from "./pages/ProductoEditar";

function RouterManager() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="productos" element={<ProductoListar />} />
            <Route path="productos/crear" element={<ProductoCrear />} />
            <Route path="productos/editar/:id" element={<ProductoEditar />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default RouterManager;