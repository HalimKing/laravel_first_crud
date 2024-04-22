$(document).ready(function () {
    $(".toggle-btn").click(function () {
        toggleSidebar();
    });

    $(".dropdown-btn").click(function () {
        $(this).toggleClass("active");
        var dropdownContent = $(this).next(".dropdown-container");
        dropdownContent.slideToggle();
        closeOtherDropdowns(dropdownContent);

    });

    function toggleSidebar() {
        var sidebar = $("#sidebar");
        if (sidebar.css("transform") === "matrix(1, 0, 0, 1, -250, 0)") {
            sidebar.css("transform", "translateX(0)");
            $(".main").removeClass("main-margin-left-0");
            $(".main").addClass("main-margin-left-250");
            $("footer").css("margin-left", "250px");
        } else {
            sidebar.css("transform", "translateX(-250px)");
            $(".main").addClass("main-margin-left-0");
            $(".main").removeClass("main-margin-left-250");
            $("footer").css("margin-left", "0px");
            closeDropdowns();
        }
    }

    function closeDropdowns() {
        $(".dropdown-container").slideUp();
    }

    function closeOtherDropdowns(currentDropdown) {
        $(".dropdown-container").not(currentDropdown).slideUp();
    }
});
