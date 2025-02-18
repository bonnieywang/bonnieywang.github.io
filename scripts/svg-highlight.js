// Example script to highlight the svg elements with an ID yellow
// Copy and paste this into the <script> element in your course log HTML file 

    // Wait for the DOM to be fully loaded
    document.addEventListener("DOMContentLoaded", function() {
        
        // Select all SVG elements with an ID
        const svgElements = document.querySelectorAll("svg [id]");

        // Add event listeners to each SVG element
        svgElements.forEach(element => {
            element.addEventListener("mouseover", function() {
                // Change the fill color to highlight the element
                element.style.fill = "yellow";
            });

            element.addEventListener("mouseout", function() {
                // Revert the fill color to its original state
                element.style.fill = "";
            });
        });
    });