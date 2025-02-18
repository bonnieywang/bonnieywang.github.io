// Example script to highlight the svg elements by changing their opacity
// For this to work, the opacity of your SVG IDs should be set to 0.0
// Copy and paste this into the <script> element in your course log HTML file 

    // Wait for the DOM to be fully loaded
    document.addEventListener("DOMContentLoaded", function() {
        
        // Select all SVG elements with an ID
        // We've adding in a :not() selector to exclude the Posterior_hand_artwork ID, because without it the background artwork opacity would also be changed to 0.5 on mouseover
        const svgElements = document.querySelectorAll("svg [id]:not(#Posterior_hand_artwork)");

        // Add event listeners to each SVG element
        svgElements.forEach(element => {
            element.addEventListener("mouseover", function() {
                // Change the fill color to highlight the element
                element.style.opacity = "0.5";
            });

            element.addEventListener("mouseout", function() {
                // Revert the fill color to its original state
                element.style.opacity = "";
            });
        });
    });