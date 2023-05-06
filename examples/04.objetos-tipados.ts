// ╔═══════════════════╗
// ║ 4.Objetos tipados ║
// ╚═══════════════════╝

// Los objetos en Typescript pueden tiparse utilizando "type" o "interface"
// Creando el tipo de dato UserType utilizando "type"
type UserType = {
  name: string
  organization: string
  email: string
}

// Creando el tipo de dato UserInterface utilizando "interface"
interface UserInterface {
  name: string
  organization: string
  email: string
}

// Al igual que con los tipos de datos básicos, el tipo se asigna declarando el nombre de la variable seguido de dos puntos y su tipo
// Declarando una variable con el tipo de dato UserType
const userType: UserType = {
  name: 'Jane Doe',
  organization: 'Afordin',
  email: 'jane.doe@afordin.com'
}

// Declarando una variable con el tipo de dato UserInterface
const userInterface: UserInterface = {
  name: 'Jane Doe',
  organization: 'Afordin',
  email: 'jane.doe@afordin.com'
}