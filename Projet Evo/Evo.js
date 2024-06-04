$(document).ready(function () {
  // Jauge AUTO

  // myInterval = function () {
  //   $("#jauge").animate({ width: "+=2px" });
  // };

  // ENLEVE BALL

  $("#buttonNoBall").click(function () {
    $("#ball").fadeTo(1000, 0);
  });

  $("#buttonNoBall").one("click", function () {
    $("#jauge").animate({ width: "-=50px" });
  });

  // REMET BALL

  $("#buttonYesBall").click(function () {
    var div = $("#ball");
    div.animate({ opacity: "1" });
  });

  $("#buttonYesBall").click(function () {
    $("#jauge").animate({ width: "+=70px" }, "slow");
  });

  // ENLEVE BAIE

  $("#buttonNoBaie").click(function () {
    $("#baie").fadeTo(1000, 0);
  });

  $("#buttonNoBaie").one("click", function () {
    $("#jauge").animate({ width: "-=70px" });
  });

  // REMET BAIE

  $("#buttonYesBaie").click(function () {
    var div = $("#baie");
    div.animate({ opacity: "1" });
    $("#jauge").animate({ width: "+=70px" }, "slow");
  });

  // ENLEVE TEDDY

  $("#buttonNoTeddy").click(function () {
    $("#teddy").fadeTo(1000, 0);
  });

  $("#buttonNoTeddy").one("click", function () {
    $("#jauge").animate({ width: "-=70px" });
  });

  // REMET TEDDY

  $("#buttonYesTeddy").click(function () {
    var div = $("#teddy");
    div.animate({ opacity: "1" });
    $("#jauge").animate({ width: "+=70px" }, "slow");
  });
});

// Pierre eau

$("#water").one("click", function () {
  $("#evolition")
    .delay(1000)
    .removeClass("evoli")
    .queue(function () {
      $(this).addClass("aquali").dequeue();
    });
  $("#fire").delay(1000).hide();
  $("#light").delay(1000).hide();
  $("#main")
    .delay(1000)
    .removeClass("wpevo")
    .queue(function () {
      $(this).addClass("wpaqua").dequeue();
    });
  var div = $("#blackout");
  div.animate({ opacity: "0" }, "fast");
  div.animate({ opacity: "1" }, 7000);
});

// Pierre feu

$("#fire").one("click", function () {
  $("#evolition")
    .delay(1000)
    .removeClass("evoli")
    .queue(function () {
      $(this).addClass("pyroli").dequeue();
    });
  $("#water").delay(1000).hide();
  $("#light").delay(1000).hide();
  $("#main")
    .delay(1000)
    .removeClass("wpevo")
    .queue(function () {
      $(this).addClass("wppyro").dequeue();
    });
  var div = $("#blackout");
  div.animate({ opacity: "0" }, "fast");
  div.animate({ opacity: "1" }, 7000);
});

// Pierre foudre

$("#light").one("click", function () {
  $("#evolition")
    .delay(1000)
    .removeClass("evoli")
    .queue(function () {
      $(this).addClass("votali").dequeue();
    });
  $("#water").delay(1000).hide();
  $("#fire").delay(1000).hide();
  $("#main")
    .delay(1000)
    .removeClass("wpevo")
    .queue(function () {
      $(this).addClass("wpvolt").dequeue();
    });
  var div = $("#blackout");
  div.animate({ opacity: "0" }, "fast");
  div.animate({ opacity: "1" }, 7000);
});
