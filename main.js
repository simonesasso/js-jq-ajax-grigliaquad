$(".quadrato").click(function () {
  quadratoCliccato = $(this);
  
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method: "GET",
    success: function (data,stato) {
      console.log(data);
      if (data.response <= 5) {
        $(quadratoCliccato).addClass("giallo");
        $(quadratoCliccato).text(data.response);

      }else {
        $(quadratoCliccato).addClass("verde");
        $(quadratoCliccato).text(data.response);

      }
    },
    error: function (richiesta,stato,errore) {
      alert("Si è verificato un errore", errore);
    }
  })
})
