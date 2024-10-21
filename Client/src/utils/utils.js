export function capitalizeWords(str) {
  return str.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ')
}


export function handleErrorResponse(error, t) {
  
  const errorMessage = error.message || 'DEFAULT_ERROR'

  return t(`errors.${errorMessage}`) || t("errors.DEFAULT_ERROR")
}
