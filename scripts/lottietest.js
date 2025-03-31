        // Get DOM input objects
        var slider = document.getElementById("slider");
        var animationContainer = document.getElementById("animationContainer");
        var anim = {
            container: animationContainer, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: false,
            rendererSettings: {
            preserveAspectRatio: "xMidYMid meet"
            },
            path: '../pages/data.json' // the path to the animation json
            }
        var animInstance = lottie.loadAnimation(anim);
        
        function onEnterAnimationFrame(e) {
            console.log(e);
            slider.value = e.currentTime;
        }
        // Fired after config ready
        function onAnimDataReady(e) {
            console.log("data_ready");
            console.log(animInstance.getDuration(true));
        }
        // Fired first
        function onAnimConfigReady(e) {
            console.log("config_ready");
            console.log(animInstance.getDuration(true));
            slider.setAttribute("max", animInstance.getDuration(true) - 1);
            
            slider.addEventListener("mousedown",onSliderDown);
        }
        function onAnimDomLoaded(e) {
            console.log("anim elements have been added to the DOM");
        }
        
        function onSliderDown(e)
        {
            animInstance.pause();
            animInstance.removeEventListener("enterFrame", onEnterAnimationFrame);
            slider.addEventListener("input",onSliderChange);
            window.addEventListener("mouseup", onSliderUp);
        }
        function onSliderUp(e)
        {
            animInstance.addEventListener("enterFrame", onEnterAnimationFrame);
            slider.removeEventListener("input",onSliderChange);
            window.removeEventListener("mouseup", onSliderUp);
        }
        
        function onSliderChange(e)
        {
            console.log("Slider change " + slider.value + " " + animInstance.currentFrame + " "+ animInstance.getDuration(true));
            // see https://github.com/airbnb/lottie-web
            animInstance.goToAndStop(slider.value * 41.0, false);
        }
        
        animInstance.addEventListener("enterFrame", onEnterAnimationFrame);
        animInstance.addEventListener("data_ready", onAnimDataReady);
        animInstance.addEventListener("config_ready", onAnimConfigReady);
        animInstance.addEventListener("DOMLoaded", onAnimDomLoaded);
        
      
        console.log(animInstance);

        document.addEventListener("DOMContentLoaded", function () {
          const slider = document.getElementById("slider");
          const tickmarks = document.getElementById("tickmarks");
      
          // Get the width of the slider and thumb
          const sliderWidth = slider.offsetWidth;
          const thumbWidth = 25; // Slider thumb width
          const thumbOffset = thumbWidth / 2; // Offset for center alignment
      
          // Key points for tick marks at 0%, 50%, and 100%
          const keyPoints = [0, 0.5, 1];
      
          // Create tick marks dynamically
          keyPoints.forEach((point, index) => {
              const tick = document.createElement("div");
              tick.classList.add("tick");
      
              // Calculate the position for each tick mark
              let tickPosition = point * sliderWidth;
      
              // Adjust position for 0% and 100% ticks (move inward by half the thumb width)
              if (index === 0) {
                  tickPosition += thumbOffset; // Adjust for left tick mark
              } else if (index === 2) {
                  tickPosition -= thumbOffset; // Adjust for right tick mark
              }
      
              // Apply the adjusted position
              tick.style.left = `${tickPosition}px`;
      
              // Append the tick to the container
              tickmarks.appendChild(tick);
          });
      });
      
      
      
      
      