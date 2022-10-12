// Class for visualising a list of custom properties
class CustomProperty extends React.Component {
    // Applying changes
    applyChanges = () => {
        this.props.onChangeHandler((this.props.oldName ? this.props.oldName : this.props.name), this.props.name, this.props.value);
        this.props.oldName = null;
    }
    // Applying changes on Enter
    applyChangesOnEnter = (event) => {
        if(event.key === "Enter")
            this.applyChanges();
    }
    // Property name change
    onNameChange = (event) => {
        if(!(this.props.oldName))
            if(event.target.value != this.props.name)
                this.props.oldName = (' ' + this.props.name).slice(1);
        this.props.name = event.target.value;
        this.forceUpdate();
    }
    // Property name change
    onValueChange = (event) => {
        this.props.value = event.target.value;
        this.forceUpdate();
    }
    // Removing style property
    removeStyleProperty = () => {
        this.props.removeStyleProperty(this.props.name);
    }
    // Rendering component
    render(){
        return(
            <div class="input-group mb-1">
                <input type="text" class="form-control bg-dark text-white border-secondary" value={this.props.name} onChange={this.onNameChange} onKeyPress={this.applyChangesOnEnter} onBlur={this.applyChanges} />
                <input type="text" class="form-control bg-dark text-white border-secondary" value={this.props.value} onChange={this.onValueChange} onKeyPress={this.applyChangesOnEnter} onBlur={this.applyChanges} />
                <button class="btn btn-danger" onClick={this.removeStyleProperty} title="Remove Property"><i class="bi bi-trash-fill"></i></button>
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
                <button type="button" class="btn btn-primary dropdown-toggle px-3" data-bs-toggle="dropdown" title="Common Properties"></button>
                <ul class="dropdown-menu dropdown-menu-dark bg-dark">
                    {items.map((item) => 
                        <li><button class="dropdown-item" onClick={this.onItemClick}>{item}</button></li>
                    )}
                </ul>
            </div>

        );
    }
}