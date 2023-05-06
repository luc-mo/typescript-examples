// ╔══════════════════════════╗
// ║ 5.Propiedades opcionales ║
// ╚══════════════════════════╝

// Al crear tipos de objetos (tanto con type o interface) podemos crear propiedades opcionales
// Estas propiedades se definen utilizando el simbolo "?" al final del nombre de la propiedad

interface UserInterface {
  firstName: string
  lastName: string
  email: string
}

// De esta forma, la propiedad puede o no estar definida en el objeto (tomando el tipo asignado o undefined)
// Esto también evitará que el compilador arroje error si no se encuentra definida la propiedad en el objeto
interface OptionalUserInterface {
  firstName: string
  lastName: string
  email?: string // propiedad opcional, definida como "string" o "undefined"
}

// Al no estar "email" definido, el compilador arrojará un error debido a que no se está cumpliendo con el tipo definido
const user: UserInterface = {
  firstName: 'Jane',
  lastName: 'Doe',
  // email: 'jane.doe@gmail.com'
}

// A diferencia del objeto anterior, este no arroja un error al no estar definida la propiedad "email", ya que es opcional
const optionalUser: OptionalUserInterface = {
  firstName: 'Jane',
  lastName: 'Doe'
  // email: 'jane.doe@gmail.com'
}

// También, debido a que la propiedad es opcional, podemos asignarle el valor "undefined" y no arrojará un error
const undefinedUser: OptionalUserInterface = {
  firstName: 'Jane',
  lastName: 'Doe',
  email: undefined
}