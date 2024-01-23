$(document).ready(function () {
    updateProgressBar(3000);
});

function updateProgressBar(goldAmount) {
    // Get the current gold amount
    console.log(goldAmount);

    // Calculate the progress based on gold amount
    var progressWidth = calculateProgressWidth(goldAmount);

    // Update the progress bar width without resetting
    $(".progress-bar__inner").width(progressWidth + '%');

    if (goldAmount >= 200 && goldAmount < 500) {
        $(".chart-to-get__item:first img").attr("src", "/assets/img/get-btn-on.png")
    } else if (goldAmount >= 500 && goldAmount < 1000) {
        $(".chart-to-get__item:first img").attr("src", "/assets/img/get-btn-on.png");
        $(".chart-to-get__item:eq(1) img").attr("src", "/assets/img/get-btn-on.png");
    } else if (goldAmount >= 1000 && goldAmount < 2000) {
        $(".chart-to-get__item:first img").attr("src", "/assets/img/get-btn-on.png");
        $(".chart-to-get__item:eq(1) img").attr("src", "/assets/img/get-btn-on.png");
        $(".chart-to-get__item:eq(2) img").attr("src", "/assets/img/get-btn-on.png");
    } else if (goldAmount >= 2000  && goldAmount < 3000) {
        $(".chart-to-get__item:first img").attr("src", "/assets/img/get-btn-on.png");
        $(".chart-to-get__item:eq(2) img").attr("src", "/assets/img/get-btn-on.png");
        $(".chart-to-get__item:eq(3) img").attr("src", "/assets/img/get-btn-on.png");
        $(".chart-to-get__item:eq(1) img").attr("src", "/assets/img/get-btn-on.png");
    } else if (goldAmount >= 3000) {
        $(".chart-to-get__item img").attr("src", "/assets/img/get-btn-on.png");
    } 
    else {
        $(".chart-to-get__item img").attr("src", "/assets/img/get-btn-off.png"); // Change image to off state
    }
}

function calculateProgressWidth(goldAmount) {
    // Assuming the maximum gold amount is 3000
    var maxGoldAmount = 3000;

    // Calculate the progress width based on gold amount
    //3000
    if (goldAmount > 2000) {
        var progressWidth = (goldAmount / maxGoldAmount) * 100;
    } 
    //2000
    else if (goldAmount > 1200) {
        var progressWidth = (goldAmount / maxGoldAmount) * 111;
    }  
    //200
    else if (goldAmount == 200) {
        var progressWidth = 2.5;
    }
    // <200
    else if (goldAmount < 200) {
        var progressWidth = (goldAmount / maxGoldAmount) * 40;
    }
    // 500
    else if (goldAmount > 200 && goldAmount <= 500) {
        var progressWidth = (goldAmount / maxGoldAmount) * 158;
    }
    // 1000
    else {
        var progressWidth = (goldAmount / maxGoldAmount) * 150;
    }

    return progressWidth;
}