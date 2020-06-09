$(document).ready(function() {
  $("#fortune-form").submit(function(event) {
    event.preventDefault();

    let superstition = [];
    $("input:checkbox[name=superstition]:checked").each(function() {
      const userSuperstitions = $(this).val();
      superstitions.push(userSuperstitions);
    });

    if (userSuperstitions.length > 1)
    $("#fortune-form").hide();
  });
});