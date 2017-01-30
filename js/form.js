$(function() {
    $('#send').click(function() {
        $.ajax({
            url: "https://formspree.io/c-tel@ukr.net",
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val()
            },
            dataType: "json"
        })
         .done(function() {
             $('form').html('<h1>Thank you!</h1>');
         });
    });
});
