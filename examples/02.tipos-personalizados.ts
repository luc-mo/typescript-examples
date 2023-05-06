// ╔════════════════════════╗
// ║ 2.Tipos personalizados ║
// ╚════════════════════════╝

// Los tipos personalizados pueden utilizarse en lugar de los tipos primitivos para definir variables con un tipado más complejo
// También pueden crearse tipos personalizados para definir arrays u objetos, pero estos se verán en los siguientes ejemplos
type CustomType = string | number

let variable: CustomType = 'hola'
variable = 10

// Estas asignaciones no son válidas debido a que ni el tipo "boolean" como el "null" son compatibles con el tipo "CustomType" (string o number)
variable = true
variable = null
