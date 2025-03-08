document.addEventListener("DOMContentLoaded", function () {
    // Function to animate images on tab switch
    function animateImages(tabId) {
        // Select images inside the active tab
        let images = document.querySelectorAll(`${tabId} .img-fluid`);

        gsap.fromTo(images, 
            { opacity: 0, y: 50 }, // Start state
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" } // End state
        );
    }

    // Listen for Bootstrap tab switch event
    document.querySelectorAll('.nav-link').forEach(button => {
        button.addEventListener('shown.bs.tab', function (event) {
            let targetTab = event.target.getAttribute('data-bs-target'); // Get active tab
            animateImages(targetTab); // Call animation function
        });
    });

    // Run animation on page load for the first active tab
    animateImages("#pills-home");
});