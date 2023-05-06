// ╔═════════════════════╗
// ║ 7.Funciones tipadas ║
// ╚═════════════════════╝

// En las funciones, podemos definir tanto los tipos de datos que se reciben como parámetros como los tipos de datos que retorna la función
// En caso de que la función no retorne nada, esta retorna el tipo "void" por defecto

// Definimos los tipos de datos que recibe la función
const sum = (a: number, b: number) => {
  return a + b
}

// Definimos los tipos de datos que retorna la función
const multiply = (a, b): number => {
  return a * b
}


// Creamos la interfaz de User la cual no cuenta con la propiedad "id"
interface User {
  name: string
  organization: string
  email: string
}

// Creamos la interfaz de UserWithId extendiendo la interfaz de User para mantener las propiedades
// Adicionalmente, agregamos la propiedad "id" a la interfaz
interface UserWithId extends User {
  id: string
}

// Creamos una función que recibe un objeto del tipo User y retorna un objeto del tipo UserWithId
const addUserId = ({ name, organization, email }: User): UserWithId => {
  const id: string = crypto.randomUUID() // Genera un identificador aleatorio
  return { id, name, organization, email }
}

// Creamos un objeto del tipo User con sus propiedades definidas
const userWithoutId: User = {
  name: 'John Doe',
  organization: 'Afordin',
  email: 'john.doe@afordin.com'
}

// Creamos un objeto del tipo UserWithId utilizando la función anteriormente creada
// Podemos ver aquí que no estamos tipando el objeto que se está creando
// Esto es gracias a que la función addUserId ya está tipada para retornar un objeto del tipo UserWithId
// Por lo que Typescript infiere que el objeto que se está creando es del tipo UserWithId
const userWithId = addUserId(userWithoutId)