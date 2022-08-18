// Class showing properties
class Properties extends React.Component {
    // Parsing style properties
    parseStyleProperties = (string) => {
        var styles = {};
        if(string != null)
            string.split(';').forEach((propertyValue) => {
                propertyValue = propertyValue.trim();
                if(propertyValue.length > 0){
                    var [property, value] = propertyValue.trim().split(':');
                    styles[property.trim()] = value.trim();
                }
            });
        return styles;
    }
    // Rendering component
    render(){
        var styles = this.parseStyleProperties(this.props.currentElement.getAttribute("style"));
        var transform = {
            translate: {
                x: "0",
                y: "0",
                z: "0"
            },
            rotation: {
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
        return(
            <Wrapper>
                <VectorProperty name={"Position"} x={transform.translate.x} y={transform.translate.y} z={transform.translate.z} locked={false} />
                <VectorProperty name={"Rotation"} x={transform.rotation.x} y={transform.rotation.y} z={transform.rotation.z} locked={false} />
                <VectorProperty name={"Scale"} x={transform.scale.x} y={transform.scale.y} z={transform.scale.z} locked={true} />
                <VectorProperty name={"Size"} x={styles.width != null ? styles.width : "0"} y={styles.height != null ? styles.height : "0"} locked={false} />
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
    // Rendering component
    render(){
        return(
            <div class="input-group mb-3">
                <span class="input-group-text bg-secondary bg-opacity-75 text-white w-25 border-0">{this.props.name}</span>
                <span class="input-group-text bg-secondary bg-opacity-75 text-white border-top-0 border-bottom-0 border-end-0">X</span>
                <input type="text" class="form-control bg-dark text-white border-secondary" placeholder="0" value={this.props.x} />
                <span class="input-group-text bg-secondary bg-opacity-75 text-white border-0">Y</span>
                <input type="text" class="form-control bg-dark text-white border-secondary" placeholder="0" value={this.props.y} />
                {this.props.z != null && (
                    <Wrapper>
                        <span class="input-group-text bg-secondary bg-opacity-75 text-white border-0">Z</span>
                        <input type="text" class="form-control bg-dark text-white border-secondary" placeholder="0" value={this.props.z} />
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