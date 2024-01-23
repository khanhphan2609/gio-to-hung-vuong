$(document).ready(function () {
    updateProgressBar();

    // The le
    $(document).on('click', '.modal-guide', function() {
        DialogGuide();
    });
    $('.menu').on('click', '.login-in', function() {
        CommingSoon();
    });
    $('.get-gifts').on('click', '.get-gifts__item', function() {
        AskToLogIn();
    });
    $('.chart-to-get').on('click', '.chart-to-get__item', function() {
        AskToLogIn();
    });
    $('.menu-mob').on('click', '.history', function() {
        AskToLogIn();
    });
});

// Modal
function DialogGuide() {
    $('#dialogGuide').modal('toggle');
};

// SweetAlert
function AskToLogIn() {
    swal("Vui lòng đăng nhập!");
}

function CommingSoon() {
    swal("Comming Soon");
}

// ProgressBar
function updateProgressBar(goldAmount) {
    // Get the current gold amount
    console.log(goldAmount);

    // Calculate the progress based on gold amount
    var progressWidth = calculateProgressWidth(goldAmount);

    // Update the progress bar width without resetting
    $(".progress-bar__inner").width(progressWidth + '%');

    if (goldAmount >= 200 && goldAmount < 500) {
        $(".chart-to-get__item:first img").addClass("btn-on");
    } else if (goldAmount >= 500 && goldAmount < 1000) {
        $(".chart-to-get__item:first img").addClass("btn-on");
        $(".chart-to-get__item:eq(1) img").addClass("btn-on");
    } else if (goldAmount >= 1000 && goldAmount < 2000) {
        $(".chart-to-get__item:first img").addClass("btn-on");
        $(".chart-to-get__item:eq(1) img").addClass("btn-on");
        $(".chart-to-get__item:eq(2) img").addClass("btn-on");
    } else if (goldAmount >= 2000  && goldAmount < 3000) {
        $(".chart-to-get__item:first img").addClass("btn-on");
        $(".chart-to-get__item:eq(2) img").addClass("btn-on");
        $(".chart-to-get__item:eq(3) img").addClass("btn-on");
        $(".chart-to-get__item:eq(1) img").addClass("btn-on");
    } else if (goldAmount >= 3000) {
        $(".chart-to-get__item img").addClass("btn-on");
    }
    else {
        $(".chart-to-get__item img")
    }
}

function calculateProgressWidth(goldAmount) {
    // Assuming the maximum gold amount is 3000
    var maxGoldAmount = 3000;

    // Calculate the progress width based on gold amount

    // Mobile & Tablet
    if (window.innerWidth <= 992) {
        //5000
        if (goldAmount > 5000) {
            var progressWidth = 100;
        }
        else if (goldAmount > 2000 && goldAmount <= 5000) {
            var progressWidth = (goldAmount / maxGoldAmount) * 12.5 + 73.4;
        }
        // <2000
        else if (goldAmount == 2000) {
            var progressWidth = 73.4;
        }
        // <2000
        else if (goldAmount < 2000 && goldAmount >= 1900) {
            var progressWidth = (goldAmount / maxGoldAmount) * 115;
        }
        // <1900
        else if (goldAmount >= 1700 && goldAmount < 1900) {
            var progressWidth = (goldAmount / maxGoldAmount) * 120;
        }
        // <1700
        else if (goldAmount >= 1500 && goldAmount < 1700) {
            var progressWidth = (goldAmount / maxGoldAmount) * 125;
        }
        // <1500
        else if (goldAmount < 1500 && goldAmount >= 1300) {
            var progressWidth = (goldAmount / maxGoldAmount) * 130;
        }
        //1300
        else if (goldAmount > 1000 && goldAmount < 1300) {
            var progressWidth = (goldAmount / maxGoldAmount) * 145;
        }
        // 500
        else if (goldAmount > 200 && goldAmount <= 500) {
            var progressWidth = (goldAmount / maxGoldAmount) * 182;
        }
        //200
        else if (goldAmount == 200) {
            var progressWidth = 9;
        }
        // <200
        else if (goldAmount < 200) {
            var progressWidth = (goldAmount / maxGoldAmount) * 160;
        }
        // 1000
        else {
            var progressWidth = (goldAmount / maxGoldAmount) * 155;
        }

        return progressWidth;
    }
    
    //3000
    if (goldAmount > 3000) {
        var progressWidth = 100;
    } 
    // <=3000
    else if (goldAmount > 2700 && goldAmount <= 3000) {
        var progressWidth = (goldAmount / maxGoldAmount) * 98;
    }
    // <2700
    else if (goldAmount > 2500 && goldAmount <= 2700) {
        var progressWidth = (goldAmount / maxGoldAmount) * 100;
    }
    // <2500
    else if (goldAmount > 2200 && goldAmount <= 2400) {
        var progressWidth = (goldAmount / maxGoldAmount) * 105;
    }
    // <2300
    else if (goldAmount > 2000 && goldAmount <= 2200) {
        var progressWidth = (goldAmount / maxGoldAmount) * 108;
    }
    // <2000
    else if (goldAmount == 2000) {
        var progressWidth = 73.4;
    }
    // <2000
    else if (goldAmount < 2000 && goldAmount >= 1900) {
        var progressWidth = (goldAmount / maxGoldAmount) * 115;
    }
    // <1900
    else if (goldAmount >= 1700 && goldAmount < 1900) {
        var progressWidth = (goldAmount / maxGoldAmount) * 120;
    }
    // <1700
    else if (goldAmount >= 1500 && goldAmount < 1700) {
        var progressWidth = (goldAmount / maxGoldAmount) * 125;
    }
    // <1500
    else if (goldAmount < 1500 && goldAmount >= 1300) {
        var progressWidth = (goldAmount / maxGoldAmount) * 130;
    }
    //1300
    else if (goldAmount > 1000 && goldAmount < 1300) {
        var progressWidth = (goldAmount / maxGoldAmount) * 140;
    }
    // 500
    else if (goldAmount > 200 && goldAmount <= 500) {
        var progressWidth = (goldAmount / maxGoldAmount) * 161;
    }
    //200
    else if (goldAmount == 200) {
        var progressWidth = 3.5;
    }
    // <200
    else if (goldAmount < 200) {
        var progressWidth = (goldAmount / maxGoldAmount) * 60;
    }
    // 1000
    else {
        var progressWidth = (goldAmount / maxGoldAmount) * 150.2;
    }

    return progressWidth;
}