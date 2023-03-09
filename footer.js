var agora = new Date()
var ano = agora.getFullYear()

var footer = document.querySelector("#data")

footer.textContent = `${ano}`
