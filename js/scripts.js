$(document).ready(function() {
  $("li#html").hover(function() {
    $("#homecode").toggle();
    $("#htmlcode").toggle();
  });
  $("li#css").hover(function() {
    $("#homecode").toggle();
    $("#csscode").toggle();
  });
  $("li#javascript").hover(function() {
    $("#homecode").toggle();
    $("#scriptcode").toggle();
  });
  $("li#jquery").hover(function() {
    $("#homecode").toggle();
    $("#jquerycode").toggle();
  });
});
