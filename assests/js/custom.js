$(document).ready(function(){
  $("#inputId").val("");
  $("#textAreaId").val("");

  $("#inputId").change(function() {
    $("#textAreaId").val($("#inputId").val());
  })

  $("input").click(function() {
    switch ($("input[name='backgroundColor']:checked").val()) {
      case "yellow":
        $("#textAreaId").css({"background-color": "yellow"});
        break;
      case "red":
        $("#textAreaId").css({"background-color": "red"});
        break;
      case "black":
        $("#textAreaId").css({"background-color": "black"});
        break;
      case "green":
        $("#textAreaId").css({"background-color": "green"});
        break;
      default : 
        $("#textAreaId").css({"background-color": "white"});          
    }

    switch ($("input[name='fontColor']:checked").val()) {
      case "yellow":
        $("#textAreaId").css({"color": "yellow"});
        break;
      case "red":
        $("#textAreaId").css({"color": "red"});
        break;
      case "black":
        $("#textAreaId").css({"color": "black"});
        break;
      case "green":
        $("#textAreaId").css({"color": "green"});
        break;
      default : 
        $("#textAreaId").css({"color": "black"});          
    }

    switch ($("input[name='fontStyle']:checked").val()) {
      case "sansSerif":
        $("#textAreaId").css({"font-family": "sans serif"});
        break;
      case "monospace":
        $("#textAreaId").css({"font-family": "monospace"});
        break;
      case "cursive":
        $("#textAreaId").css({"font-family": "cursive"});
        break;
      case "fantasy":
        $("#textAreaId").css({"font-family": "fantasy"});
        break;
      default : 
        $("#textAreaId").css({"font-family": "Times New Roman"});          
    }
    // window.alert($("input[name='inp']:checked").val());
  });

}); 