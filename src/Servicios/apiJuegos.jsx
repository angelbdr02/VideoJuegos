const CLAVE_API = "226a8333ca314de58df62672d2a8a8d7";
const URL_BASE = "https://api.rawg.io/api";

/**
 * Obtiene los juegos más populares desde la API.
 */
export const obtenerJuegosPopulares = async () => {
    try {
        const respuesta = await fetch(`${URL_BASE}/games?key=${CLAVE_API}&ordering=-rating&page_size=10`);
        if (!respuesta.ok) {
            throw new Error("Error al obtener los juegos populares");
        }
        const datos = await respuesta.json();
        return datos.results;
    } catch (error) {
        console.error("Error en la solicitud de juegos populares:", error);
        return [];
    }
};

/**
 * Busca juegos en la API con un término específico.
 */
export const buscarJuegos = async (consulta) => {
    try {
        const respuesta = await fetch(`${URL_BASE}/games?key=${CLAVE_API}&search=${consulta}&search_precise=false&page_size=20`);
        if (!respuesta.ok) {
            throw new Error("Error en la búsqueda de juegos");
        }
        const datos = await respuesta.json();
        return datos.results;
    } catch (error) {
        console.error("Error en la búsqueda de juegos:", error);
        return [];
    }
};

/**
 * Obtiene los detalles de un juego por ID.
 */
export const obtenerDetallesJuego = async (id) => {
    try {
        const respuesta = await fetch(`${URL_BASE}/games/${id}?key=${CLAVE_API}`);
        if (!respuesta.ok) {
            throw new Error("Error al obtener los detalles del juego");
        }
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error("Error en la solicitud de detalles del juego:", error);
        return null;
    }
};
