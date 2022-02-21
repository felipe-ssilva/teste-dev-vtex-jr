/**
 *
 * @param {number} value
 * @param {string} type (normal | vtex)
 * @returns
 */
const formatValue = (value, type = 'normal') => {
  const newValue = type === 'vtex' ? value / 100 : value

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(newValue)
}

export { formatValue }
