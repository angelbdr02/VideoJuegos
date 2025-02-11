import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import Inicio from "./paginas/Inicio";
import Explorar from "./paginas/Explorar";
import DetalleJuego from "./paginas/DetalleJuego";

const App = () => {
    return (
        <Router>
            <Header />
            <main className="container mx-auto p-4">
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/explorar" element={<Explorar />} />
                    <Route path="/juego/:id" element={<DetalleJuego />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
