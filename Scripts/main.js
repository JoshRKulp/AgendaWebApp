var agenda = {
    setup: {
        buttons: function() {
            $('.item').on("click", function() {
                $('.item.is-selected').removeClass("is-selected")
                $(this).addClass("is-selected");
            })
        }
    }
}

$(function() {
    agenda.setup.buttons();
});