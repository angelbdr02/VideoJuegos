import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import Inicio from "./paginas/Inicio";
import Explorar from "./paginas/Explorar";
import ExplorarPublishers from "./paginas/ExplorarPublishers";
import DetalleJuego from "./paginas/DetalleJuego";
import JuegosPorTag from "./paginas/JuegosPorTag";
import JuegosPorPublisher from "./paginas/JuegosPorPublisher";

const App = () => {
    return (
        <Router>
            <Header />
            <main className="container mx-auto p-4">
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/explorar" element={<Explorar />} />
                    <Route path="/explorar-publishers" element={<ExplorarPublishers />} /> 
                    <Route path="/juego/:id" element={<DetalleJuego />} />
                    <Route path="/tag/:tagId" element={<JuegosPorTag />} />
                    <Route path="/publisher/:publisherId" element={<JuegosPorPublisher />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
