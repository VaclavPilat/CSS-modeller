// Wrapper
class Wrapper extends React.Component {
    // Rendering component
    render(){
        return this.props.children;
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