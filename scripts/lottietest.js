        // Get DOM input objects
        var slider = document.getElementById("slider");
        var pause_btn = document.getElementById("pause_btn");
        var start_btn = document.getElementById("start_btn");
        
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
        
        function onPauseClick(e){
            console.log("Pause clicked");
            animInstance.pause();
        }
        function onStartClick(e){
            console.log("Start clicked");
            animInstance.play();
        }
        function onGotoAndStop(e){
            animInstance.goToAndStop(200.0 * 40, false);
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
        
        

        start_btn.addEventListener("click", onStartClick);
        pause_btn.addEventListener("click", onPauseClick);
     
        console.log(animInstance);