import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerJuegosPorTag } from "../Servicios/apiJuegos";
import TarjetaJuego from "../Componentes/TarjetaJuego";

const JuegosPorTag = () => {
    const { tagId } = useParams();
    const [juegos, setJuegos] = useState([]);

    useEffect(() => {
        obtenerJuegosPorTag(tagId).then(setJuegos);
    }, [tagId]);

    return (
        <div className="container mx-auto pt-32 px-6 text-center">
            <h1 className="text-5xl font-bold mb-10">Juegos de este Tag</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {juegos.map((juego) => (
                    <TarjetaJuego key={juego.id} juego={juego} />
                ))}
            </div>
        </div>
    );
};

export default JuegosPorTag;
