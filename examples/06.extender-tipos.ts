// ╔══════════════════╗
// ║ 6.Extender tipos ║
// ╚══════════════════╝

// Al igual que con los tipos personalizados, podemos hacer una "extensión" de los tipos creados utilizando "type"
// Esto se hace utilizando algo llamado "tipos de intersección"

// Creando un tipo de objeto utilizando "type"
type UserType = {
  name: string
  organization: string
  email: string
}

// Al "extender" los tipos, estos reciben todas las propiedades del objeto del que se está extendiendo más las propiedades adicionales que se le agreguen
type ExtendedUserType = UserType & {
  age: number
}


// Creando un tipo de objeto utilizando "interface"
interface UserInterface {
  name: string
  organization: string
  email: string
}

// A diferencia de los tipos definidos con "type", los tipos definidos con "interface" pueden ser extendidos utilizando la palabra reservada "extends"
// Esto, al igual que en el ejemplo anterior, permite que el tipo extendido reciba todas las propiedades de la interfaz de la que se está extendiendo
interface ExtendedUserInterface extends UserInterface {
  age: number
}
