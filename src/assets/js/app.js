$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

const option = {
  delay: 10000
}
$('.toast').toast(option)


function Alertas() {
  $('#alertatoast').toast('show')
}
window.onload = Alertas;