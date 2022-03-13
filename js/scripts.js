
$(document).ready(function () {
    $("#clickable").click(function () {
        $("#clickable").hide();
        $("#explainer").show();
    });
    $("#explainer").click(function () {
        $("#explainer").hide();
        $("#clickable").show();
    });
});