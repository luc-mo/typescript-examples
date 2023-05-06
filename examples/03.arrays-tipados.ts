// ╔══════════════════╗
// ║ 3.Arrays tipados ║
// ╚══════════════════╝

// Los arrays pueden tiparse definiendo el tipo que se desea y utilizando los corchetes [] al final del tipo
// Esto hace que el array solo pueda contener valores del tipo definido

const numberArray: number[] = [1, 2, 3, 4, 5]
const stringArray: string[] = ['h', 'o', 'l', 'a', 'm', 'u', 'n', 'd', 'o']
const booleanArray: boolean[] = [true, false, true, false, true]

// Este array cuenta con los tipos "null" y "number"
// Esto hace que el array pueda contener valores de ambos tipos
// Hay que tener en cuenta que ambos tipos deben estar contenidos dentro de un paréntesis
// De lo contrario, la variable estará tipada como "null" o "number[]"
const nullAndNumberArray: (null | number)[] = [1, null, 2, null, 3, null]

// El siguiente array no es válido, ya que el tipo de dato "string" (hola) no es compatible con el tipo de dato "number"
const errorNumArray: number[] = [1, 2, 3, 4, 5, 'hola']

// Este array utiliza un tipo personalizado con los tipos "string" y "number"
// Esto hace que el array pueda contener valores de ambos tipos
type ArrayCustomType = string | number
const valueArray: ArrayCustomType[] = [1, 'hola', 2, 'adios', 3]

// Si intentamos utilizar un tipo de dato diferente a los definidos en el tipo personalizado, nos dara un error como el ejemplo anterior
// El siguiente array no es valido ya que el tipo de dato "boolean" (true) no es compatible con los tipos de datos "string o "number"
const errorValueArray: ArrayCustomType[] = [1, 'hola', 2, 'adios', 3, true]