
$(document).ready(function () {
    $("#menu-btn").click(function () {
        $(".menu-bar").addClass("transform");
        return false;
    });

    $("#menu-close-btn").click(function () {
        $(".menu-bar").removeClass("transform");
        return false;
    });
});

// // document.addEventListener("contextmenu", (event) => event.preventDefault());
// document.addEventListener("keydown", (event) => {
//     if (event.ctrlKey && (event.key === "u" || event.key === "s" || event.key === "i" || event.key === "j")) {
//         event.preventDefault();
//     }
// });
// // document.addEventListener("contextmenu", (event) => event.preventDefault()); // Disable right-click

// document.addEventListener("keydown", (event) => {
//     if (
//         (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J")) || // Ctrl+Shift+I or Ctrl+Shift+J
//         (event.ctrlKey && event.key === "U") || // Ctrl+U
//         event.key === "F12" // F12
//     ) {
//         event.preventDefault();
//     }
// });
