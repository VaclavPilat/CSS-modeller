// Class showing properties
class Properties extends React.Component {
    // Rendering component
    render(){
        return(
            <Wrapper>
                {/*
                <VectorProperty name={"Position"} x={0} y={0} z={0} locked={false} />
                <VectorProperty name={"Rotation"} x={0} y={0} z={0} locked={false} />
                <VectorProperty name={"Scale"} x={1} y={1} z={1} locked={true} />
                <VectorProperty name={"Size"} x={100} y={100} locked={false} />
                <CustomProperty name={"background-color"} value={"red"} />
                <CustomProperty name={"border"} value={"3px solid black"} />
                <NewPropertyButtons />*/}
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
                <input type="number" class="form-control bg-dark text-white border-secondary" placeholder="0" defaultValue={this.props.x} />
                <span class="input-group-text bg-secondary bg-opacity-75 text-white border-0">Y</span>
                <input type="number" class="form-control bg-dark text-white border-secondary" placeholder="0" defaultValue={this.props.y} />
                {this.props.z != null && (
                    <Wrapper>
                        <span class="input-group-text bg-secondary bg-opacity-75 text-white border-0">Z</span>
                        <input type="number" class="form-control bg-dark text-white border-secondary" placeholder="0" defaultValue={this.props.z} />
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
                <input type="text" class="form-control bg-dark text-white border-secondary" defaultValue={this.props.name} />
                <input type="text" class="form-control bg-dark text-white border-secondary" defaultValue={this.props.value} />
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