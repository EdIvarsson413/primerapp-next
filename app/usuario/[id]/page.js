// Este tambien en un server side component
async function getUser(id) {
    // En esta funcion solo se obtiene un unico usuario por su id
    const res = await fetch(`https://reqres.in/api/users/${id}`);

    // la respuesta se transforma a JSON y se destructura para obtener al usuario
    const { data: usuario } = await res.json();
    return usuario
}

export default async function Usuario({ params }) {
    // Se emplea la funcion para traer el usuario al frontend
    const usuario = await getUser(params.id); // Por default el id se obtiene de parametros nativos
    return (
        // Renderización del card con info del usuario
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header text-center">
                        <img src={usuario.avatar} alt={usuario.email} />
                    </div>
                    <div className="card-body text-center">
                        <h3>{usuario.first_name} {usuario.last_name}</h3>
                        <h3>{usuario.email}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}