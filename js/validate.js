$(function() {

    var current_fs, next_fs, previous_fs; // fieldsets
    var animating; // flag to prevent quick multi-click glitches

    // declare variables for your form elements

    
    var fullName = $("#fullname");
    var email = $("#email");
    var googlePlus = $("#gplus");

    var websiteType = $("#wb-type");
    var photo = $("wb-photo");

    var logo = $("#wb-logo");
    var video = $("#wb-video");

    var notes = $("#notes");

    var feedback = $('.feedback');
    var error = $('.error');

    var error0, error1, error2, error3, error4, error5, error6, error7, error8;

    var dataCollection;

    var submition = false;

    var valid = false;


    // HANDLE YOUR BUTTON FORWARD
    $(".next").click(function(){

        if(animating){
            return false; // stops the code at this line (anything below this line will not be read)
        }

        animating = true;

        current_fs = $(this).parent(); // points to the current fieldset
        next_fs = $(this).parent().next(); // points to next sibling of the current fieldset

        // activate next step on progressbar using the index of next_fs
            // eq() returns a single "element" from a jQuery object array. In the example below,
            // if $("fieldset").index(next_fs) returns 1,
            // $("#progressbar li").eq(1) will add class "active" to the second list item
            // in the "progress" <ul>
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        // show the next fieldset
        next_fs.fadeIn(1000);

        // hide the current fieldset
        current_fs.hide();

        animating = false;

        // adjust the margin-top of the "feedback" and "error" paragraphs:
        feedback.css("margin-top", next_fs.height() + $("#progressbar").height() + 70);
        error.css("margin-top", next_fs.height() + $("#progressbar").height() + 70);

        // hide feedback and errors before the submit button is clicked for the first time
        error.css("display", "none");
        feedback.css("display", "none");


        // run the evaluation on "next" button once the submit button is clicked for the first time
        if(submition){
            evaluation();
        }
    });



    // HANDLE YOUR BUTTON BACKWARDS
    $(".previous").click(function(){

        if(animating){
            return false;
        }

        animating = true;

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        previous_fs.fadeIn(1000);

        current_fs.hide();

        animating = false;

        feedback.css("margin-top", previous_fs.height() + $("#progressbar").height() + 70);
        error.css("margin-top", previous_fs.height() + $("#progressbar").height() + 70);

        error.css("display", "none");
        feedback.css("display", "none");

        // run the evaluation on "previous" button once the submit button is clicked for the first time
        if(submition){
            evaluation();
        }
    });




    // HANDLE YOUR EVALUATION
    function evaluation(){

        if(fullName.val() === ""){

            fullName.css("border", "1px solid red");
            error0 = true;
        }

        else{

            fullName.css("border", "1px solid blue");
            error0 = false;
        }

        if (email.val() === "") {

            email.css("border", "1px solid red");
            error1 = true;

        }

        else{

            email.css("border", "1px solid blue");
            error1 = false;
        }

        if (googlePlus.val() === "") {

            googlePlus.css("border", "1px solid red");
            error2 = true;

        }

        else{

            googlePlus.css("border", "1px solid blue");
            error2 = false;
        }

        if (websiteType.val() === "") {

            websiteType.css("border", "1px solid red");
            error3 = true;

        }

        else{

            websiteType.css("border", "1px solid blue");
            error3 = false;
        }

        if (photo.val() === "") {

            photo.css("border", "1px solid red");
            error4 = true;

        }

        else{

            photo.css("border", "1px solid blue");
            error4 = false;
        }

        if (logo.val() === "") {

            logo.css("border", "1px solid red");
            error5 = true;

        }

        else{

            logo.css("border", "1px solid blue");
            error5 = false;
        }

        if (video.val() === "") {

            video.css("border", "1px solid red");
            error6 = true;

        }

        else{

            video.css("border", "1px solid blue");
            error6 = false;
        }

        if (notes.val() === "") {

            notes.css("border", "1px solid red");
            error7 = true;

        }

        else{

            notes.css("border", "1px solid blue");
            error7 = false;
        }
    

        if(!error0 && !error1 && !error2 && !error3 && !error4 && !error5 && !error6 && !error7){

            valid = true;

            error.css("display", "none");
        }

        else {

            valid = false;

            feedback.css("display", "none"); 

            error.text("Red framed form elements need to be filled out before submitting. Check all panels of the form!").hide().fadeIn("slow");
        }
    }    





    // HANDLE YOUR AJAX REQUEST
    function runAjax(){

        alert("AJAX runs!"); // remove this line once your code works properly



            // create your URL encoded string using user inputs and pass it to "collectData"

            if(valid){

                dataCollection = "fullName=" + fullName.val() + "&email=" + email.val() + "&gplus=" + googlePlus.val() + "&wb-type=" + websiteType.val() + "&wb-logo=" + logo.val() + "&wb-video=" + video.val() + "&notes=" + notes.val() +"&wb-photo=" + photo.val();  
        

                error.css("display", "none"); // make your paragraph that displays errors invisible


            // handle ajax here:

            $.ajax({
                type: "post", // http method
                url: "php/send.php", // requested file the one that handles the user input code
                data: dataCollection, // collected data from your form
                cache: false, // don't want your browser to cashe the data
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',    // finished with the properties of .ajax
                beforeSend: function() {
                    // it's loading
                    feedback.html("<p class=\"thank-you\">Please wait, loading.</p>").hide().fadeIn(500);
                },          
                success: function( response ){ 
                    feedback.html("<div class=\"thank-you\">" + response + "</div>");
                    // The line below will display the answer from PHP file (the part of method "success" of ajax object):
                    feedback.html(dataCollection).hide().fadeIn("slow");
                    // empty your variable collectData and clear your form in the method "success" of ajax object:
                    dataCollection = "";
                    $("#msform").trigger("reset");
                }
            });

                // The line below will display the answer from PHP file (the part of method "success" of ajax object):
                

                // empty your variable collectData and clear your form in the method "success" of ajax object:
        }

        else{
            feedback.html('<p class = "info">The fields in red are required.</p>').hide().fadeIn(500);
        }
    }



    // HANDLE YOUR SUBMIT BUTTON
    $("#msform").submit(function(e){

        e.preventDefault();

        submition = true;
        evaluation();
        if(valid == true){

            runAjax();
        }

        // prevent default behaviour of the form (keep your data in the form after submitting)

        // set the value for your variable 'submitted' to true

        // call your function 'evaluation'

        // if there are no errors (variable 'valid' has value 'true'), call the function 'runAjax'
    });
});
