import { useEffect, useState } from "react";
import { buscarJuegos } from "../Servicios/apiJuegos";
import TarjetaJuego from "../Componentes/TarjetaJuego";

const Explorar = () => {
    const [busqueda, setBusqueda] = useState("");
    const [juegos, setJuegos] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(1);

    // Un único useEffect que maneja búsqueda y paginación
    useEffect(() => {
        buscarJuegos(busqueda.trim().toLowerCase(), pagina).then((data) => {
            setJuegos(data.results);
            setTotalPaginas(Math.ceil(data.count / 21)); // Calcula el número total de páginas
        });
    }, [busqueda, pagina]);

    const paginaAnterior = () => setPagina((prev) => Math.max(prev - 1, 1));
    const paginaSiguiente = () => setPagina((prev) => Math.min(prev + 1, totalPaginas));

    return (
        <div className="container mx-auto pt-20 px-6 text-white text-center mb-24"> 
            <h1 className="text-5xl font-extrabold text-center mb-10">🎮 Explora Todos los Juegos</h1>

            {/* Buscador */}
            <div className="w-full max-w-3xl mx-auto mb-8">
                <input
                    type="text"
                    placeholder="🔍 Buscar videojuegos..."
                    value={busqueda}
                    onChange={(e) => {
                        setBusqueda(e.target.value);
                        setPagina(1); // Reiniciar la paginación al cambiar la búsqueda
                    }}
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

            {/* Paginación */}
            {juegos.length > 0 && (
                <div className="flex justify-center gap-4 mt-10">
                    <button
                        onClick={paginaAnterior}
                        className={`px-6 py-3 rounded-lg font-bold ${pagina === 1 ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500 text-white"}`}
                        disabled={pagina === 1}
                    >
                        ← Anterior
                    </button>
                    <span className="text-lg font-bold text-gray-300 px-4 py-2 bg-gray-700 rounded-lg">Página {pagina} de {totalPaginas}</span>
                    <button
                        onClick={paginaSiguiente}
                        className={`px-6 py-3 rounded-lg font-bold ${pagina === totalPaginas ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500 text-white"}`}
                        disabled={pagina === totalPaginas}
                    >
                        Siguiente →
                    </button>
                </div>
            )}
        </div>
    );
};

export default Explorar;
