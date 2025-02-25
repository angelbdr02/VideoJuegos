import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { buscarPublishers } from "../Servicios/apiJuegos";

const ExplorarPublishers = () => {
    const [busqueda, setBusqueda] = useState("");
    const [publishers, setPublishers] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(1);

    // Llamada a la API para buscar publishers
    useEffect(() => {
        buscarPublishers(busqueda.trim().toLowerCase(), pagina).then((data) => {
            setPublishers(data.results || []);
            setTotalPaginas(Math.ceil((data.count || 0) / 21)); // Paginación
        });
    }, [busqueda, pagina]);

    const paginaAnterior = () => setPagina((prev) => Math.max(prev - 1, 1));
    const paginaSiguiente = () => setPagina((prev) => Math.min(prev + 1, totalPaginas));

    return (
        <div className="container mx-auto pt-24 px-6 text-white text-center mb-24">
            <h1 className="text-5xl font-extrabold mb-10">🏢 Explora Publishers</h1>

            {/* Buscador */}
            <div className="w-full max-w-3xl mx-auto mb-8">
                <input
                    type="text"
                    placeholder="🔍 Buscar publishers..."
                    value={busqueda}
                    onChange={(e) => {
                        setBusqueda(e.target.value);
                        setPagina(1); // Reiniciar a la primera página al cambiar la búsqueda
                    }}
                    className="w-full p-4 text-lg border border-gray-400 rounded-lg shadow-lg text-black placeholder-gray-600"
                />
            </div>

            {/* Lista de Publishers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {publishers.length > 0 ? (
                    publishers.map((publisher) => (
                        <Link 
                            to={`/publisher/${publisher.id}`} 
                            key={publisher.id}
                            className="block bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
                        >
                            <h2 className="text-xl font-bold">{publisher.name}</h2>
                            <p className="text-gray-400 mt-2">Juegos publicados: {publisher.games_count}</p>
                        </Link>
                    ))
                ) : busqueda.length > 0 ? (
                    <p className="text-center text-red-500 text-2xl mt-6">❌ No se encontraron publishers.</p>
                ) : (
                    <p className="text-center text-gray-400">Escribe algo para buscar publishers...</p>
                )}
            </div>

            {/* Paginación */}
            {publishers.length > 0 && (
                <div className="flex justify-center gap-4 mt-10">
                    <button
                        onClick={paginaAnterior}
                        className={`px-6 py-3 rounded-lg font-bold ${pagina === 1 ? "bg-gray-500 cursor-not-allowed" : "bg-green-600 hover:bg-green-500 text-white"}`}
                        disabled={pagina === 1}
                    >
                        ← Anterior
                    </button>
                    <span className="text-lg font-bold text-gray-300 px-4 py-2 bg-gray-700 rounded-lg">Página {pagina} de {totalPaginas}</span>
                    <button
                        onClick={paginaSiguiente}
                        className={`px-6 py-3 rounded-lg font-bold ${pagina === totalPaginas ? "bg-gray-500 cursor-not-allowed" : "bg-green-600 hover:bg-green-500 text-white"}`}
                        disabled={pagina === totalPaginas}
                    >
                        Siguiente →
                    </button>
                </div>
            )}
        </div>
    );
};

export default ExplorarPublishers;
