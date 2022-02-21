/**
 * Verifica se o valor inserido via evento ou por passagem de parametros é uma string ou nao
 * @param e Event
 * OR
 * @param e { value : string }
 */
const validateString = (value) => {
  const pattern = /^[a-zA-Z\s]+$/i

  if (!pattern.test(value)) {
    return false
  }

  return true
}

/**
 * Verifica se o email é válido
 * @param email string
 */
const validateEmail = (email) => {
  return /^([\w\\-]+(?:\.[\w\\-]+)*)@((?:[\w\\-]+\.)*\w[\w\\-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(
    email
  )
}

export { validateEmail, validateString }
