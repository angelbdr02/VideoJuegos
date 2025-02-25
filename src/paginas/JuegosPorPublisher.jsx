import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerJuegosPorPublisher } from "../Servicios/apiJuegos";
import TarjetaJuego from "../Componentes/TarjetaJuego";

const JuegosPorPublisher = () => {
    const { publisherId } = useParams();
    const [juegos, setJuegos] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(1);

    const pageSize = 21; // Número de juegos por página

    // Obtener los juegos del Publisher
    useEffect(() => {
        obtenerJuegosPorPublisher(publisherId, pagina, pageSize).then((data) => {
            setJuegos(data.results || []);
            const totalJuegos = data.count || 0;
            setTotalPaginas(Math.ceil(totalJuegos / pageSize)); // Calcular el total de páginas
        });
    }, [publisherId, pagina]);

    const paginaAnterior = () => setPagina((prev) => Math.max(prev - 1, 1));
    const paginaSiguiente = () => setPagina((prev) => Math.min(prev + 1, totalPaginas));

    return (
        <div className="container mx-auto pt-24 px-6 text-white text-center mb-24">
            {/* Lista de Juegos del Publisher */}
            <h2 className="text-4xl font-bold mb-8">🎮 Juegos del Publisher</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {juegos.length > 0 ? (
                    juegos.map((juego) => <TarjetaJuego key={juego.id} juego={juego} />)
                ) : (
                    <p className="text-center text-red-500 text-2xl mt-6">❌ No hay juegos disponibles.</p>
                )}
            </div>

            {/* Paginación */}
            {juegos.length > 0 && (
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

export default JuegosPorPublisher;
