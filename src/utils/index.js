export const handleSectionNavigation = (id) => {
  const element = document.getElementById(id)
  const offset = 45
  const bodyRect = document.body.getBoundingClientRect().top
  const elementRect = element?.getBoundingClientRect().top ?? 0
  const elementPosition = elementRect - bodyRect
  const offsetPosition = elementPosition - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })
}

export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}
