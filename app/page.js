import Usuarios from "@/components/Usuarios"

// En su ultima versión, Next usa server side components
// Los componentes son generados desde el servidor sin su logica (y sin usar state o effect)
async function fetchUsuarios() {
  // Esta funcion es equivalente a usar useEffect
  const res = await fetch('https://reqres.in/api/users');

  // Se hace destructura y renombra a la propiedad data que es un arreglo de objetos sobre usuarios
  const { data: usuarios} = await res.json();
  return usuarios
}

export default async function IndexPage(){
  // Se hace uso de la funcion para obtener los usuarios para usarlos en frontend
  const usuarios = await fetchUsuarios();
  
  // Solo se usa un componente por lo que no es necesario usar un div o fragment
  return <Usuarios usuarios={usuarios}/>
}