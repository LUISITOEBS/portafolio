import { Link } from 'react-scroll';


export const Navbar = () => {
    return (
        <nav
            className={`navbar navbar-expand-md navbar-light shadow-sm`}
            style={{
                backgroundColor: '#5BE9B9',

            }}
        >
            <div className="container-fluid">
                <button className="navbar-toggler custom-toggler  ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="topDiv" smooth={true} offset={-100} duration={500}>
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="proyectos" smooth={true} offset={-100} duration={500}>
                                Proyectos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="trabajos" smooth={true} offset={-100} duration={500}>
                                Trabajos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="estudios" smooth={true} offset={-100} duration={500}>
                                Educación
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contacto" smooth={true} offset={-100} duration={500}>
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
