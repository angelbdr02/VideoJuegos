import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { obtenerDetallesJuego } from "../Servicios/apiJuegos";

const DetalleJuego = () => {
    const { id } = useParams();
    const [juego, setJuego] = useState(null);
    const [favorito, setFavorito] = useState(false);

    useEffect(() => {
        obtenerDetallesJuego(id).then(setJuego);
    }, [id]);

    const manejarFavorito = () => {
        setFavorito(!favorito);
    };

    if (!juego) {
        return <p className="text-center text-white">Cargando...</p>;
    }

    return (
        <div className="container mx-auto pt-32 px-6 text-center">
            {/* Portada del Juego */}
            <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg mt-12">
                <img
                    src={juego.background_image}
                    alt={juego.name}
                    className="w-full h-auto max-h-[600px] object-contain rounded-lg"
                />
            </div>

            {/* Información del Juego */}
            <h1 className="text-5xl font-bold mt-10">{juego.name}</h1>
            <p className="text-lg mt-4">⭐ {juego.rating} | 🎮 {juego.platforms.map(p => p.platform.name).join(", ")}</p>

            {/* Publisher */}
            <p className="mt-4 text-lg">
                <span className="font-bold">Publisher:</span>{" "}
                <Link to={`/publisher/${juego.publishers[0]?.id}`} className="text-blue-400 hover:text-blue-300">
                    {juego.publishers[0]?.name}
                </Link>
            </p>

            {/* Tags */}
            <div className="mt-4">
                <span className="font-bold">Tags:</span>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {juego.tags.map((tag) => (
                        <Link 
                            key={tag.id} 
                            to={`/tag/${tag.id}`} 
                            className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm hover:bg-gray-600"
                        >
                            {tag.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Botón de Favoritos */}
            <button
                onClick={manejarFavorito}
                className={`mt-6 px-4 py-2 rounded-full ${favorito ? "bg-red-500" : "bg-gray-800"} text-white transition-all`}
            >
                {favorito ? "❤️ En Favoritos" : "🤍 Agregar a Favoritos"}
            </button>

            {/* Descripción del Juego */}
            <p className="mt-8 text-lg max-w-4xl mx-auto">{juego.description_raw}</p>
        </div>
    );
};

export default DetalleJuego;
