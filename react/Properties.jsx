// Class showing properties
class Properties extends React.Component {
    // Parsing style properties
    parseStyleProperties = (string) => {
        var styles = {};
        if(string)
            string.split(';').forEach((propertyValue) => {
                propertyValue = propertyValue.trim();
                if(propertyValue.length > 0){
                    var [property, value] = propertyValue.trim().split(':');
                    styles[property.trim()] = value.trim();
                }
            });
        return styles;
    }
    // Getting tranform object
    getTransformObject = (styles) => {
        var transform = {
            translate: {
                x: "0",
                y: "0",
                z: "0"
            },
            rotate: {
                x: "0deg",
                y: "0deg",
                z: "0deg"
            },
            scale: {
                x: "1",
                y: "1",
                z: "1"
            }
        };
        if(styles.transform){
            var transformValues = Array.from(styles.transform.matchAll(/(\w+)\((.+?)\)/gm)).reduce((agg, [, fn, val]) => ({...agg, [fn]: val.split(",")}), {});
            if(transformValues.translateX)
                transform.translate.x = transformValues.translateX;
            if(transformValues.translateY)
                transform.translate.y = transformValues.translateY;
            if(transformValues.translateZ)
                transform.translate.z = transformValues.translateZ;
            if(transformValues.rotateX)
                transform.rotate.x = transformValues.rotateX;
            if(transformValues.rotateY)
                transform.rotate.y = transformValues.rotateY;
            if(transformValues.rotateZ)
                transform.rotate.z = transformValues.rotateZ;
            if(transformValues.scaleX)
                transform.scale.x = transformValues.scaleX;
            if(transformValues.scaleY)
                transform.scale.y = transformValues.scaleY;
            if(transformValues.scaleZ)
                transform.scale.z = transformValues.scaleZ;
        }
        return transform;
    }
    // Setting new element size
    setNewSize = (width, height) => {
        this.props.currentElement.style.width = width;
        this.props.currentElement.style.height = height;
        this.props.updateApplication();
    }
    // Rendering component
    render(){
        var styles = this.parseStyleProperties(this.props.currentElement.getAttribute("style"));
        this.transform = this.getTransformObject(styles);
        return(
            <Wrapper>
                <VectorProperty name={"Position"} x={this.transform.translate.x} y={this.transform.translate.y} z={this.transform.translate.z} locked={false} />
                <VectorProperty name={"Rotation"} x={this.transform.rotate.x} y={this.transform.rotate.y} z={this.transform.rotate.z} locked={false} />
                <VectorProperty name={"Scale"} x={this.transform.scale.x} y={this.transform.scale.y} z={this.transform.scale.z} locked={true} />
                <VectorProperty name={"Size"} x={styles.width ? styles.width : "0"} y={styles.height ? styles.height : "0"} locked={false} onChangeHandler={this.setNewSize} />
                {Object.keys(styles).filter(key => key !== "width" && key != "height" && key != "transform").map((property, i) => (
                    <CustomProperty name={property} value={styles[property]} />
                ))}
                <NewPropertyButtons />
            </Wrapper>
        );
    }
}

// Class for visualising an vector
class VectorProperty extends React.Component {
    // On X change
    onChangeX = (event) => {
        this.props.x = event.target.value;
        this.props.onChangeHandler(event.target.value, this.props.y, this.props.z);
    }
    // On Y change
    onChangeY = (event) => {
        this.props.y = event.target.value;
        this.props.onChangeHandler(this.props.x, event.target.value, this.props.z);
    }
    // On Z change
    onChangeZ = (event) => {
        this.props.z = event.target.value;
        this.props.onChangeHandler(this.props.x, this.props.y, event.target.value);
    }
    // Rendering component
    render(){
        return(
            <div class="input-group mb-3">
                <span class="input-group-text bg-secondary bg-opacity-75 text-white w-25 border-0">{this.props.name}</span>
                <span class="input-group-text bg-secondary bg-opacity-75 text-white border-top-0 border-bottom-0 border-end-0">X</span>
                <input type="text" class="form-control bg-dark text-white border-secondary" placeholder="0" value={this.props.x} onChange={this.onChangeX} />
                <span class="input-group-text bg-secondary bg-opacity-75 text-white border-0">Y</span>
                <input type="text" class="form-control bg-dark text-white border-secondary" placeholder="0" value={this.props.y} onChange={this.onChangeY} />
                {this.props.z && (
                    <Wrapper>
                        <span class="input-group-text bg-secondary bg-opacity-75 text-white border-0">Z</span>
                        <input type="text" class="form-control bg-dark text-white border-secondary" placeholder="0" value={this.props.z} onChange={this.onChangeZ} />
                    </Wrapper>
                )}
                <button class="btn btn-warning">
                    {this.props.locked ? (
                        <i class="bi bi-lock-fill"></i>
                    ) : (
                        <i class="bi bi-unlock-fill"></i>
                    )}
                </button>
            </div>
        );
    }
    // 
    componentDidUpdate(){
        console.log(JSON.stringify([
            this.props.x,
            this.props.y,
            this.props.z
        ]));
    }
}

// Class for visualising a list of custom properties
class CustomProperty extends React.Component {
    // Rendering component
    render(){
        return(
            <div class="input-group mb-3">
                <input type="text" class="form-control bg-dark text-white border-secondary" value={this.props.name} />
                <input type="text" class="form-control bg-dark text-white border-secondary" value={this.props.value} />
                <button class="btn btn-danger"><i class="bi bi-trash-fill"></i></button>
            </div>
        );
    }
}

// Class for property buttons
class NewPropertyButtons extends React.Component {
    // Rendering component
    render(){
        return(
            <div class="input-group m-0 w-100">
                <button type="button" class="btn btn-primary flex-grow-1">Add New Property</button>
                <button type="button" class="btn btn-primary flex-shrink-1 dropdown-toggle dropdown-toggle-split px-3" data-bs-toggle="dropdown"></button>
                <ul class="dropdown-menu dropdown-menu-dark bg-dark">
                    <li><button class="dropdown-item">background-color</button></li>
                    <li><button class="dropdown-item">border</button></li>
                    <li><button class="dropdown-item">opacity</button></li>
                </ul>
            </div>

        );
    }
}