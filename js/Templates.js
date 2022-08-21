// Object with HTML code templates
const Templates = {
    Scene: 
        `<div data-modeller-title="scene" style="
            transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); 
            width: 800px; height: 600px;
        "></div>`,
    Empty: 
        `<div data-modeller-title="empty object" style="
            transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); 
            width: 0px; height: 0px;
        "></div>`,
    Square: 
        `<div data-modeller-title="square" style="
            transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); 
            width: 100px; height: 100px; 
            background-color: lightblue;
        "></div>`,
    Circle: 
        `<div data-modeller-title="circle" style="
            transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); 
            width: 100px; height: 100px; 
            background-color: lightgreen; 
            border-radius: 50%;
        "></div>`,
    Triangle:
        `<div data-modeller-title="triangle" style="
            transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1);
            width: 0px; height: 0px; 
            border-bottom: 86.6025px solid lightyellow; 
            border-left: 50px solid transparent; 
            border-right: 50px solid transparent; 
        "></div>`,
    Cube: 
        `<div data-modeller-title="cube" style="
            transform: translateX(0px) translateY(0px) translateZ(0px) rotateX(45deg) rotateY(45deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1); 
            width: 100px; height: 100px;
            transform-style: preserve-3d;
            position: relative;
        ">
            <div data-modeller-title="cube - front" style="
                transform: translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1);
                width: 100px; height: 100px; 
                background-color: lightsalmon; 
                position: absolute;
                border: 1px solid black;
                box-sizing: border-box;
            "></div>
            <div data-modeller-title="cube - back" style="
                transform: translateX(0px) translateY(0px) translateZ(50px) rotateX(0deg) rotateY(180deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1);
                width: 100px; height: 100px; 
                background-color: lightsalmon; 
                position: absolute;
                border: 1px solid black;
                box-sizing: border-box;
            "></div>
            <div data-modeller-title="cube - left" style="
                transform: translateX(-50px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(-90deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1);
                width: 100px; height: 100px; 
                background-color: lightsalmon; 
                position: absolute;
                border: 1px solid black;
                box-sizing: border-box;
            "></div>
            <div data-modeller-title="cube - right" style="
                transform: translateX(50px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(90deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1);
                width: 100px; height: 100px; 
                background-color: lightsalmon; 
                position: absolute;
                border: 1px solid black;
                box-sizing: border-box;
            "></div>
            <div data-modeller-title="cube - top" style="
                transform: translateX(0px) translateY(-50px) translateZ(0px) rotateX(90deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1);
                width: 100px; height: 100px; 
                background-color: lightsalmon; 
                position: absolute;
                border: 1px solid black;
                box-sizing: border-box;
            "></div>
            <div data-modeller-title="cube - bottom" style="
                transform: translateX(0px) translateY(50px) translateZ(0px) rotateX(-90deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1);
                width: 100px; height: 100px; 
                background-color: lightsalmon; 
                position: absolute;
                border: 1px solid black;
                box-sizing: border-box;
            "></div>
        </div>`,
}