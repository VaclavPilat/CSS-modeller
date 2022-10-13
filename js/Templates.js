// Object with HTML code templates
const Templates = {
    Scene: 
        `<div data-modeller-title="scene" style="
            width: 100%; 
            height: 100%;
        "></div>`,
    Empty: 
        `<div data-modeller-title="empty object" style=""></div>`,
    Square: 
        `<div data-modeller-title="square" style="
            width: 100px; 
            height: 100px; 
            background-color: lightblue;
        "></div>`,
    Circle: 
        `<div data-modeller-title="circle" style="
            width: 100px; 
            height: 100px; 
            background-color: lightgreen; 
            border-radius: 50%;
        "></div>`,
    Triangle:
        `<div data-modeller-title="triangle" style="
            width: 0px; 
            height: 0px; 
            border-bottom: 86.6025px solid lightyellow; 
            border-left: 50px solid transparent; 
            border-right: 50px solid transparent; 
        "></div>`,
    Cube: 
        `<div data-modeller-title="cube" style="
            rotate: 1 1 0 45deg;
            width: 100px;
            height: 100px;
            transform-style: preserve-3d;
        ">
            <div data-modeller-title="cube - front" style="
                translate: 0 0 -50px;
                width: 100px; 
                height: 100px; 
                background-color: lightblue; 
                position: absolute;
            "></div>
            <div data-modeller-title="cube - back" style="
                translate: 0 0 50px;
                rotate: 0 1 0 180deg;
                width: 100px; 
                height: 100px; 
                background-color: lightcyan; 
                position: absolute;
            "></div>
            <div data-modeller-title="cube - left" style="
                translate: -50px 0 0;
                rotate: 0 -1 0 90deg;
                width: 100px; 
                height: 100px; 
                background-color: lightgrey; 
                position: absolute;
            "></div>
            <div data-modeller-title="cube - right" style="
                translate: 50px 0 0;
                rotate: 0 1 0 90deg;
                width: 100px; 
                height: 100px; 
                background-color: lightgreen; 
                position: absolute;
            "></div>
            <div data-modeller-title="cube - top" style="
                translate: 0 -50px 0;
                rotate: 1 0 0 90deg;
                width: 100px; 
                height: 100px; 
                background-color: lightpink; 
                position: absolute;
            "></div>
            <div data-modeller-title="cube - bottom" style="
                translate: 0 50px 0;
                rotate: -1 0 0 90deg;
                width: 100px; 
                height: 100px; 
                background-color: lightsalmon; 
                position: absolute;
            "></div>
        </div>`,
}