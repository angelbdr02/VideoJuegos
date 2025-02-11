import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const CarruselJuegos = ({ juegos }) => {
    return (
        <div className="w-full max-w-6xl mx-auto mt-6">
            <h2 className="text-3xl font-bold text-center text-white mb-4">🎮 Juegos Populares</h2>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                className="w-full h-[400px]"
            >
                {juegos.length > 0 ? (
                    juegos.map((juego) => (
                        <SwiperSlide key={juego.id} className="relative">
                            <Link to={`/juego/${juego.id}`}>
                                <img
                                    src={juego.background_image}
                                    alt={juego.name}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <h2 className="text-3xl font-bold text-white">{juego.name}</h2>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))
                ) : (
                    <p className="text-center text-white">Cargando juegos...</p>
                )}
            </Swiper>
        </div>
    );
};

export default CarruselJuegos;
