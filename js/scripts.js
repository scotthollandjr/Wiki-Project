$(document).ready(function() {
  $("li#html").hover(function() {
    $("#htmlcode").toggle();
  });
  $("li#css").hover(function() {
    $("#csscode").toggle();
  });
  $("li#javascript").hover(function() {
    $("#scriptcode").toggle();
  });
  $("li#jquery").hover(function() {
    $("#jquerycode").toggle();
  });
});
