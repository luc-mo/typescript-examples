// ╔════════════════════╗
// ║ 1.Tipos primitivos ║
// ╚════════════════════╝

const booleano: boolean = true
const str: string = 'Hola mundo'

// Los tipos "number" en Javascript y Typescript engloban tanto enteros como decimales
const entero: number = 10
const decimal: number = 10.5

// Al verificar el tipo de "null" en Javascript (utilizando "typeof null", ya que no existen las definiciones de tipos), se retorna el valor "object"
// Esto es una inconsistencia que se ha mantenido para evitar romper la compatibilidad con versiones anteriores
// En Typescript por su parte, si existe correctamente el tipo "null" (aunque al validarlo utilizando "typeof" continúa retornando el string "object")
const nulo: null = null
const indefinido: undefined = undefined
const bigInt: bigint = 10n

// El tipo any es cualquier tipo y/o estructura de datos existente
// No se recomienda utilizar any (en la gran mayoría de los casos), ya que "desvirtúa" el propósito de typescript
let cualquiera: any // La variable se inicializa como "undefined"
cualquiera = 'Cualquier valor'
cualquiera = 10
cualquiera = true
cualquiera = null
cualquiera = [1, 'hola', true, 'adios', 2, false, 5n]
cualquiera = {}
