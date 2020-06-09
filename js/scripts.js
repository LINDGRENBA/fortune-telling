$(document).ready(function() {
  $("#fortune-form").submit(function(event) {
    event.preventDefault();

    let superstitions = [];
    $("input:checkbox[name=superstition]:checked").each(function() {
      const userSuperstitions = $(this).val();
      superstitions.push(userSuperstitions);
    });

    if (superstitions.length > 1) {
      $(".bad-luck").show();
    } else {
      $(".good-luck").show();
    }

    $("#reset").show();
    $("#fortune-form").hide();
  });

  $("button#reset").click(function() {
    $(".bad-luck").hide();
    $(".good-luck").hide();
    $("#fortune-form").show();
    $("#reset").hide();
  });
});