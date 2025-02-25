import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg text-white py-4 fixed top-0 left-0 z-50">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                <h1 className="text-3xl font-extrabold tracking-wide flex items-center">
                    🎮 <span className="ml-2">Explora Juegos</span>
                </h1>
                <nav className="mt-2 md:mt-0">
                    <ul className="flex gap-6 text-lg">
                        <li><Link to="/" className="text-white hover:text-gray-200">Inicio</Link></li>
                        <li><Link to="/explorar" className="text-white hover:text-gray-200">Explorar Juegos</Link></li>
                        <li><Link to="/explorar-publishers" className="text-white hover:text-gray-200">Explorar Publishers</Link></li> {/* ✅ Nueva opción */}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
