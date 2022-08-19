// Wrapper
class Wrapper extends React.Component {
    // Rendering component
    render(){
        return this.props.children;
    }
}

// Class for visualising an vector
class VectorProperty extends React.Component {
    // Applying changes
    applyChanges = () => {
        this.props.onChangeHandler(this.props.x, this.props.y, this.props.z);
        this.forceUpdate();
    }
    // Applying changes on Enter
    applyChangesOnEnter = (event) => {
        if(event.key === "Enter")
            this.applyChanges();
    }
    // On X change
    onChangeX = (event) => {
        this.props.x = event.target.value;
        this.forceUpdate();
    }
    // On Y change
    onChangeY = (event) => {
        this.props.y = event.target.value;
        this.forceUpdate();
    }
    // On Z change
    onChangeZ = (event) => {
        this.props.z = event.target.value;
        this.forceUpdate();
    }
    // Rendering component
    render(){
        return(
            <div class="input-group mb-3">
                <span class="input-group-text bg-secondary bg-opacity-75 text-white w-25 border-0">{this.props.name}</span>
                <span class="input-group-text bg-secondary bg-opacity-75 text-white border-top-0 border-bottom-0 border-end-0">X</span>
                <input type="text" class="form-control bg-dark text-white border-secondary" placeholder="0" value={this.props.x} onChange={this.onChangeX} onKeyPress={this.applyChangesOnEnter} onBlur={this.applyChanges} />
                <span class="input-group-text bg-secondary bg-opacity-75 text-white border-0">Y</span>
                <input type="text" class="form-control bg-dark text-white border-secondary" placeholder="0" value={this.props.y} onChange={this.onChangeY} onKeyPress={this.applyChangesOnEnter} onBlur={this.applyChanges} />
                {this.props.z && (
                    <Wrapper>
                        <span class="input-group-text bg-secondary bg-opacity-75 text-white border-0">Z</span>
                        <input type="text" class="form-control bg-dark text-white border-secondary" placeholder="0" value={this.props.z} onChange={this.onChangeZ} onKeyPress={this.applyChangesOnEnter} onBlur={this.applyChanges} />
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
    // Property name change
    onNameChange = (event) => {
        var old = (' ' + this.props.name).slice(1);
        this.props.name = event.target.value;
        this.props.onChangeHandler(old, event.target.value, this.props.value);
    }
    // Property name change
    onValueChange = (event) => {
        this.props.value = event.target.value;
        this.props.onChangeHandler(this.props.name, this.props.name, event.target.value);
    }
    // Removing style property
    removeStyleProperty = () => {
        this.props.removeStyleProperty(this.props.name);
    }
    // Rendering component
    render(){
        return(
            <div class="input-group mb-3">
                <input type="text" class="form-control bg-dark text-white border-secondary" value={this.props.name} onChange={this.onNameChange} />
                <input type="text" class="form-control bg-dark text-white border-secondary" value={this.props.value} onChange={this.onValueChange} />
                <button class="btn btn-danger" onClick={this.removeStyleProperty}><i class="bi bi-trash-fill"></i></button>
            </div>
        );
    }
}

// Class for property buttons
class NewPropertyButtons extends React.Component {
    // Constructor
    constructor(){
        super();
        this.state = {
            value: ""
        }
    }
    // Adding new style property
    onItemClick = (event) => {
        this.props.addCustomProperty(event.target.innerText);
    }
    // Changing stored value
    onInputChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }
    // Adding new property on Enter
    onEnterAddProperty = (event) => {
        if(event.key === "Enter"){
            this.props.addCustomProperty(event.target.value);
            this.setState({
                value: ""
            });
        }
    }
    // Rendering component
    render(){
        var items = ["background-color", "border", "border-image", "border-style", "border-width", "opacity"];
        return(
            <div class="input-group m-0 w-100">
                <span class="input-group-text bg-secondary bg-opacity-75 text-white w-25 border-0">New</span>
                <input type="text" class="form-control bg-dark text-white border-secondary flex-grow-1" placeholder="Property Name" onKeyPress={this.onEnterAddProperty} onChange={this.onInputChange} value={this.state.value} />
                <button type="button" class="btn btn-primary dropdown-toggle px-3" data-bs-toggle="dropdown"></button>
                <ul class="dropdown-menu dropdown-menu-dark bg-dark">
                    {items.map((item) => 
                        <li><button class="dropdown-item" onClick={this.onItemClick}>{item}</button></li>
                    )}
                </ul>
            </div>

        );
    }
}