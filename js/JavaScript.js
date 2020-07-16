function CheckPalindrome(input) {

    //Modifies the input and outputs to HTML
    $("#userIn").html(`<p class="animate__animated animate__fadeIn">Your text was ${input}</p>`);
    let word = input.replace(/\s|\'|\"|\,|\./g, '').toLowerCase();
    $("#modIn").html(`<p class="animate__animated animate__fadeIn">After modification that becomes ${word}</p>`);

    //Reverses the input
    let reverse = word.toLowerCase().split("").reverse().join("");
    $("#modRev").html(`<p class="animate__animated animate__fadeIn">Your modified text reversed is ${reverse}</p>`);


    //Compares the input and the reversed input and outputs results to the HTML
    if (word == reverse) {
        $("#palOut").html(`<p class="animate__animated animate__fadeIn">That means that ${input} is a Palindrome!</p>`);
        return;
    }
    else {
        $("#palOut").html(`<p class="animate__animated animate__fadeIn">That means that ${input} is not a Palindrome!</p>`);
        return;
    }
}

function Clear() {
    $("#input").val("");
    $("#userIn").text("");
    $("#modIn").text("");
    $("#modRev").text("");
    $("#palOut").text("");
}