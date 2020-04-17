
for (var i = 0; i < 37; i++) {
  $(".container").append("<div class='quadrato'></div>");
}

$(".quadrato").click(function () {
  quadratoCliccato = $(this);
  if ($(this).hasClass("active")) {
     alert("Hai gia cliccato!");
  }else {
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function (data,stato) {
        console.log(data);
        if (data.response <= 5) {
          $(quadratoCliccato).addClass("giallo");
          $(quadratoCliccato).text(data.response);
          $(quadratoCliccato).addClass("active");
        }else {
          $(quadratoCliccato).addClass("verde");
          $(quadratoCliccato).text(data.response);
          $(quadratoCliccato).addClass("active");
        }
      },
      error: function (richiesta,stato,errore) {
        alert("Si è verificato un errore", errore);
      }
    })
  }

})
