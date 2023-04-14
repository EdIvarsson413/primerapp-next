// Este compoenente muestra todos los usuarios
import Link from "next/link";

export default function Usuarios({ usuarios }) {
    return (
        <ul className="list-group">
            {
                // Se recorre el arreglo para obtener cada usuario y obtener su información
                usuarios.map(usuario => (
                    <li className="list-group-item" key={usuario.id}>
                        <Link href={`/usuario/${usuario.id}`}>
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 style={{ textDecoration: 'none' }}>{usuario.first_name} {usuario.last_name}</h4>
                                <img
                                    src={usuario.avatar}
                                    alt={usuario.email}
                                    style={{ borderRadius: '100%' }} />
                            </div>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}