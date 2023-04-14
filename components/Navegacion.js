// Barra de navegacion
import Link from "next/link";

export default function Navegacion() {
    return (
        <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Practica NextJs</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" href="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/servicios">Servicios</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}