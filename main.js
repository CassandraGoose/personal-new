const all = document.querySelector('body')
const mouseDiv = document.getElementById('mousey')

  let width = window.innerWidth
  let height = window.innerHeight

  function calculateLightX(x) {
    let percX = (x - 15) / width
    percX = percX * 100
    return `${percX}%`
  }

  function calculateLightY(y) {
    let percY = (y + 15) / height
    percY = percY * 100
    return `${percY}%`
  }

all.addEventListener('mousemove', (e) => {
  var x = e.clientX
  var y = e.clientY
  let calculatedX = calculateLightX(x)
  let calculatedY = calculateLightY(y)
  mouseDiv.style.backgroundImage = `-webkit-radial-gradient(${calculatedX} ${calculatedY}, circle, transparent 50px, black 100px)`
})
