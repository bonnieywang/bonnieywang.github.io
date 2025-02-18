// Example script to highlight the svg elements by changing their opacity
// For this to work, the opacity of your SVG IDs should be set to 0.0
// Copy and paste this into the <script> element in your course log HTML file 

    // Wait for the DOM to be fully loaded
    document.addEventListener("DOMContentLoaded", function() {
        
        // Select all SVG elements with an ID
        // We've adding in a :not() selector to exclude the Posterior_hand_artwork ID, because without it the background artwork opacity would also be changed to 0.5 on mouseover
        const svgElements = document.querySelectorAll("svg [id]:not(#Posterior_hand_artwork)");

        // Create a div element for the pop-up that will display the name of the SVG element ID corresponding to the highlighted area / anatomy 
        const popup = document.createElement("div");
        // The code below creates a style for the popup div element
        popup.style.position = "absolute";
        popup.style.backgroundColor = "white";
        popup.style.border = "1px solid black";
        popup.style.borderRadius = "10px"
        popup.style.padding = "10px";
        popup.style.display = "none";
        // Lastly, this code appends the popup div element to the body of the HTML document, so that it all works!
        document.body.appendChild(popup); 

        // Here, we're create a new name for the SVG IDs — why? Well without this, the internal text of the pop-up just be the ID itself, which has no spaces and isn't very readable
        const labelNames = {
            "DorsalInterossei": "Dorsal Interossei",
            "TendonExtensorLongus": "Tendon Extensor Longus",
            "TendonExtensorBrevis": "Tendon Extensor Brevis",
            "ExtensorRetinaculum": "Extensor Retinaculum"
        }; 


        // Add event listeners to each SVG element
        svgElements.forEach(element => {
            element.addEventListener("mouseover", function() {
                // Change the fill color to highlight the element
                element.style.opacity = "0.5";
                    // Show the pop-up with the SVG ID name
                    popup.innerText = labelNames[element.id] || element.id;
                    popup.style.left = event.pageX + "px";
                    popup.style.top = event.pageY + "px";
                    popup.style.display = "block";
            });

            element.addEventListener("mouseout", function() {
                // Revert the fill color to its original state
                element.style.opacity = "";
                popup.style.display = "none";
            });
        });
    });