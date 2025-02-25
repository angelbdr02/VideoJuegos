const CLAVE_API = "226a8333ca314de58df62672d2a8a8d7";
const URL_BASE = "https://api.rawg.io/api";

/**
 * Obtiene los juegos más populares desde la API.
 */
export const obtenerJuegosPopulares = async () => {
    try {
        const respuesta = await fetch(`${URL_BASE}/games?key=${CLAVE_API}&ordering=-rating&page_size=10`);
        if (!respuesta.ok) throw new Error("Error al obtener los juegos populares");
        const datos = await respuesta.json();
        return datos.results;
    } catch (error) {
        console.error("Error en la solicitud de juegos populares:", error);
        return [];
    }
};

/**
 * Busca juegos en la API con un término específico y con paginación.
 */
export const buscarJuegos = async (consulta = "", page = 1) => {
    try {
        const url = consulta
            ? `${URL_BASE}/games?key=${CLAVE_API}&search=${encodeURIComponent(consulta)}&search_precise=false&page_size=21&page=${page}`
            : `${URL_BASE}/games?key=${CLAVE_API}&page_size=21&page=${page}`;

        const respuesta = await fetch(url);
        if (!respuesta.ok) throw new Error("Error en la búsqueda de juegos");
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error("Error en la búsqueda de juegos:", error);
        return { results: [] };
    }
};

/**
 * Obtiene los detalles de un juego por ID.
 */
export const obtenerDetallesJuego = async (id) => {
    try {
        const respuesta = await fetch(`${URL_BASE}/games/${id}?key=${CLAVE_API}`);
        if (!respuesta.ok) throw new Error("Error al obtener los detalles del juego");
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error("Error en la solicitud de detalles del juego:", error);
        return null;
    }
};

/**
 * Obtener juegos por Tag con paginación
 */
export const obtenerJuegosPorTag = async (tagId, page = 1) => {
    try {
        const respuesta = await fetch(`${URL_BASE}/games?key=${CLAVE_API}&tags=${tagId}&page=${page}&page_size=21`);
        const datos = await respuesta.json();
        return datos.results;
    } catch (error) {
        console.error("Error al obtener juegos por tag:", error);
        return [];
    }
};

/**
 * Obtener juegos por Publisher con paginación
 */
export const obtenerJuegosPorPublisher = async (publisherId, page = 1, page_size = 21) => {
    try {
        const respuesta = await fetch(`${URL_BASE}/games?key=${CLAVE_API}&publishers=${publisherId}&page=${page}&page_size=${page_size}`);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error("Error al obtener juegos por publisher:", error);
        return { results: [] };
    }
};


/**
 * Obtener detalles de un Publisher
 */
export const obtenerDetallesPublisher = async (publisherId) => {
    try {
        const respuesta = await fetch(`${URL_BASE}/publishers/${publisherId}?key=${CLAVE_API}`);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error("Error al obtener detalles del publisher:", error);
        return null;
    }
};

/**
 * Buscar publishers en la API con paginación
 */
export const buscarPublishers = async (consulta = "", page = 1) => {
    try {
        const url = consulta
            ? `${URL_BASE}/publishers?key=${CLAVE_API}&search=${encodeURIComponent(consulta)}&page=${page}&page_size=21`
            : `${URL_BASE}/publishers?key=${CLAVE_API}&page=${page}&page_size=21`;

        const respuesta = await fetch(url);
        if (!respuesta.ok) throw new Error("Error al buscar publishers");
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error("Error al buscar publishers:", error);
        return { results: [] };
    }
};

