import { Link } from "react-router-dom";

const TarjetaJuego = ({ juego }) => {
    return (
        <Link to={`/juego/${juego.id}`} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 block">
           
            <img
                src={juego.background_image}
                alt={juego.name}
                className="w-full h-56 object-cover transition-all duration-300 group-hover:opacity-70"
            />
            
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                <h2 className="text-xl font-bold text-white">{juego.name}</h2>
                <p className="text-yellow-400 text-lg flex items-center">⭐ {juego.rating}</p>
            </div>
        </Link>
    );
};

export default TarjetaJuego;
