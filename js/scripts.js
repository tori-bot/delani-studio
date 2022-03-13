
$(document).ready(function () {
    $("#des-clickable").click(function () {
        $("#des-clickable").hide();
        $("#des-explainer").show();
    });
    $("#des-explainer").click(function () {
        $("#des-explainer").hide();
        $("#des-clickable").show();
    });
});
$(document).ready(function () {
    $("#dev-clickable").click(function () {
        $("#dev-clickable").hide();
        $("#dev-explainer").show();
    });
    $("#dev-explainer").click(function () {
        $("#dev-explainer").hide();
        $("#dev-clickable").show();
    });
});
$(document).ready(function () {
    $("#pm-clickable").click(function () {
        $("#pm-clickable").hide();
        $("#pm-explainer").show();
    });
    $("#pm-explainer").click(function () {
        $("#pm-explainer").hide();
        $("#pm-clickable").show();
    });
});