
    var canvasAnim = bodymovin.loadAnimation({
        wrapper: canvasContainer,
        animType: 'canvas',
        loop: true,
        autoplay: false,
        prerender: false,
        animationData: JSON.parse(animationData)
    });
    var svgAnim = bodymovin.loadAnimation({
        wrapper: svgContainer,
        animType: 'svg',
        loop: true,
        autoplay: false,
        prerender: false,
        animationData: JSON.parse(animationData)
    });
    var currentDisplay;


    var canvasSwAnim = bodymovin.loadAnimation({
        wrapper: canvasSwitch,
        animType: 'svg',
        loop: false,
        autoplay: false,
        prerender: false,
        animationData: JSON.parse(svgSwitchData)
    });
    var svgSwAnim = bodymovin.loadAnimation({
        animType: 'canvas',
        loop: false,
        autoplay: false,
        prerender: false,
        renderer:{
            clearCanvas: true,
            context: svgSwitch.getContext('2d'),
            scaleMode: 'fit'
        },
        animationData: JSON.parse(canvasSwitchData)
    });

    function show(type){
        currentDisplay = type;
        if(type == 'canvas'){
            canvasContainer.style.display = 'block';
            svgContainer.style.display = 'none';
            canvasAnim.goToAndStop(svgAnim.currentFrame,true);
            svgAnim.pause();
            canvasAnim.play();

            canvasSwitch.style.display = 'block';
            svgSwitch.style.display = 'none';
            canvasSwAnim.goToAndStop(0);
            canvasSwAnim.play();
            svgSwAnim.pause();

        }else{
            canvasContainer.style.display = 'none';
            svgContainer.style.display = 'block';
            svgAnim.goToAndStop(canvasAnim.currentFrame,true);
            canvasAnim.pause();
            svgAnim.play();

            svgSwitch.style.display = 'block';
            canvasSwitch.style.display = 'none';
            svgSwAnim.goToAndStop(0);
            svgSwAnim.play();
            canvasAnim.pause();
        }
    }

    function toggleDisplay(){
        if(currentDisplay == 'canvas'){
            show('svg');
        }else{
            show('canvas');
        }
    }

    function resize(){
        canvasAnim.resize();
    }

    show('svg');

    switchContainer.onclick = toggleDisplay;
    window.onresize = resize;
