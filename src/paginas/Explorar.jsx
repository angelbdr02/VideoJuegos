import { useEffect, useState } from "react";
import { buscarJuegos } from "../Servicios/apiJuegos";
import TarjetaJuego from "../Componentes/TarjetaJuego";

const Explorar = () => {
    const [busqueda, setBusqueda] = useState("");
    const [juegos, setJuegos] = useState([]);

    useEffect(() => {
        buscarJuegos(busqueda.trim().toLowerCase()).then(setJuegos);
    }, [busqueda]);

    return (
        <div className="container mx-auto pt-20 px-6 text-white text-center">
            <h1 className="text-5xl font-extrabold text-center mb-10">🎮 Explora Todos los Juegos</h1>

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

            {/* Lista de Juegos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {juegos.length > 0 ? (
                    juegos.map((juego) => <TarjetaJuego key={juego.id} juego={juego} />)
                ) : busqueda.length > 0 ? (
                    <p className="text-center text-red-500 text-2xl mt-6">❌ No se encontraron juegos.</p>
                ) : (
                    <p className="text-center text-gray-400">Escribe algo para buscar juegos...</p>
                )}
            </div>
        </div>
    );
};

export default Explorar;
