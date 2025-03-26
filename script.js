// ------------------------------------------------------------------------------------------------------ reloads page when logo is clicked
document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo");

    if (logo) {
        logo.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default action

            // Store a flag to indicate the reload action
            sessionStorage.setItem("reload-home", "true");

            setTimeout(() => {
                location.href = location.origin + location.pathname; // Reload to base URL
            }, 1000); // Reload after 2 seconds
        });
    }

    // Check if the page was reloaded via the logo click
    if (sessionStorage.getItem("reload-home")) {
        sessionStorage.removeItem("reload-home"); // Remove flag
        window.scrollTo(0, 0); // Force scroll to top instantly
    }
});




// ---------------------------------------------------------------------------------------------------------- Open Side Panel
function openNav() {
    document.getElementById("myNav").style.width = "250px";
}

// ---------------------------------------------------------------------------------------------------------- Close Side Panel
function closeNav() {
    document.getElementById("myNav").style.width = "0";
}

document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".hamburger"); // Hamburger button
    const navMenu = document.getElementById("myNav"); // Navbar menu (overlay)
    const closeButton = document.querySelector(".closebtn"); // Close button

    // Function to open navbar
    if (navToggle) {
        navToggle.addEventListener("click", function () {
            navMenu.style.width = "250px"; // Show navbar
        });
    }

    // Function to close navbar
    if (closeButton) {
        closeButton.addEventListener("click", function () {
            navMenu.style.width = "0"; // Hide navbar
        });
    }

    // Close navbar when clicking outside of it
    document.addEventListener("click", function (event) {
        if (navMenu.style.width === "250px" && 
            !navMenu.contains(event.target) && 
            !navToggle.contains(event.target)) {
            navMenu.style.width = "0"; // Hide navbar
        }
    });
});


// ----------------------------------------------------------------------------------------- Smooth scroll for hamburger links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".overlay-content a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default jump
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
                closeNav(); // Close the side panel after clicking
            }
        });
    });
});


// ----------------------------------------------------------------------------------------- Adjust scroll margin dynamically

    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.style.scrollMarginTop = `${navbarHeight + 10}px`; // Add extra 10px for better spacing
    });


// ---------------------------------------------------------------------------------------------------------- name and view poerfolio slide

    setTimeout(() => {
        document.querySelector(".branding-text").classList.add("show"); // Slide branding text in
        document.querySelector(".text-button-wrapper").classList.add("show"); // Slide name & buttons in
    }, 500); // Slight delay for smooth effect
// ----------------------------------------------------------------------------------------- clicking view portfolio box sends to portfolio & contact  section


        function smoothScroll(target) {
            document.querySelector(target).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    
        // Smooth scroll for "View Portfolio"
        document.querySelector(".portfolio-button").addEventListener("click", function (event) {
            event.preventDefault(); // Prevent instant jump
            smoothScroll("#portfolio"); // Scroll to portfolio section
        });
    
        // Smooth scroll for "Hire Me"
        document.querySelector(".cv-button").addEventListener("click", function (event) {
            event.preventDefault();
            smoothScroll("#contact"); // Scroll to contact section
        });

    


// ----------------------------------------------------------------------------------------- portfolio all category only 4 images showing 


    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Hide all items first
            portfolioItems.forEach(item => {
                item.style.display = "none";
            });

            if (category === "all") {
                // Show only the first 4 items of each category
                let shownGraphic = 0;
                let shownVideo = 0;
                let shownModel = 0;

                portfolioItems.forEach(item => {
                    if (item.classList.contains("graphic-design") && shownGraphic < 4) {
                        item.style.display = "block";
                        shownGraphic++;
                    }
                    if (item.classList.contains("video-editing") && shownVideo < 4) {
                        item.style.display = "block";
                        shownVideo++;
                    }
                    if (item.classList.contains("3d-modeling") && shownModel < 4) {
                        item.style.display = "block";
                        shownModel++;
                    }
                });
            } else {
                // Show all items in the selected category
                portfolioItems.forEach(item => {
                    if (item.classList.contains(category)) {
                        item.style.display = "block";
                    }
                });
            }
        });
    });



// ---------------------------------------------------------------------------------------------------------- Open Image in Fullscreen Mode
document.addEventListener("DOMContentLoaded", () => {
    const portfolioItems = document.querySelectorAll(".portfolio-item img");

    // Create modal container dynamically
    const modal = document.createElement("div");
    modal.classList.add("image-modal");
    modal.innerHTML = `
        <img class="modal-content" />
        <span class="close-modal">&times;</span>
    `;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector(".modal-content");
    const closeModal = modal.querySelector(".close-modal");

    // Open modal on click
    portfolioItems.forEach(item => {
        item.addEventListener("click", () => {
            modal.style.display = "flex"; // Show modal
            modalImg.src = item.src; // Load image
            setTimeout(() => {
                modal.classList.add("show"); // Trigger animation
            }, 10);
        });
    });

    // Close modal on close button or click outside image
    closeModal.addEventListener("click", () => closeImageModal());
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeImageModal();
    });

    // Close on Esc key press
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeImageModal();
    });

    // Function to close modal
    function closeImageModal() {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
            modalImg.src = "";
        }, 300);
    }
});


// ----------------------------------------------------------------------------------------- Contact form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload

        // Simple form validation
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (name && email && subject && message) {
            alert('Message sent successfully!'); // Replace with custom success popup if needed
            form.reset(); // Reset the form
        } else {
            alert('Please fill in all fields.');
        }
    });
});


