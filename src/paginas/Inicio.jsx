import { useEffect, useState } from "react";
import { obtenerJuegosPopulares, buscarJuegos } from "../Servicios/apiJuegos";
import TarjetaJuego from "../Componentes/TarjetaJuego";
import CarruselJuegos from "../Componentes/CarruselJuegos";

const Inicio = () => {
    const [busqueda, setBusqueda] = useState("");
    const [juegosFiltrados, setJuegosFiltrados] = useState([]);
    const [juegosPopulares, setJuegosPopulares] = useState([]);

    useEffect(() => {
        obtenerJuegosPopulares().then(setJuegosPopulares);
    }, []);

    useEffect(() => {
        if (busqueda.trim().length > 0) {
            buscarJuegos(busqueda.trim().toLowerCase()).then(setJuegosFiltrados);
        } else {
            setJuegosFiltrados([]);
        }
    }, [busqueda]);

    return (
        <div className="container mx-auto pt-20 px-6 text-center">
            <h1 className="text-5xl font-extrabold text-center text-white mb-10">🎮 Descubre los Mejores Videojuegos</h1>

            {/* Buscador */}
            <div className="w-full max-w-3xl mx-auto mb-8">
                <input
                    type="text"
                    placeholder="🔍 Buscar videojuegos..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="w-full p-4 text-lg border border-gray-400 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-600"
                />
            </div>

            {/*Carrusel de Juegos Populares */}
            {juegosPopulares.length > 0 && <CarruselJuegos juegos={juegosPopulares} />}

            {/*Resultados de la Búsqueda */}
            {busqueda && juegosFiltrados.length > 0 ? (
                <div className="mt-10">
                    <h2 className="text-3xl font-bold text-white">Resultados:</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {juegosFiltrados.map((juego) => (
                            <TarjetaJuego key={juego.id} juego={juego} />
                        ))}
                    </div>
                </div>
            ) : busqueda.length > 0 ? (
                <p className="text-center text-red-500 text-2xl mt-6">❌ No se encontraron juegos.</p>
            ) : null}
        </div>
    );
};

export default Inicio;
