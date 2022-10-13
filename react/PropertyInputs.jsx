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
        if(this.props.focus)
            this.valueInput = React.createRef();
        return(
            <div class="input-group mb-1">
                <input type="text" class="form-control bg-dark text-white border-secondary" value={this.props.name} onChange={this.onNameChange} onKeyPress={this.applyChangesOnEnter} onBlur={this.applyChanges} />
                <input type="text" class="form-control bg-dark text-white border-secondary" value={this.props.value} onChange={this.onValueChange} onKeyPress={this.applyChangesOnEnter} onBlur={this.applyChanges} ref={this.valueInput} />
                <button class="btn btn-danger" onClick={this.removeStyleProperty} title="Remove Property"><i class="bi bi-trash-fill"></i></button>
            </div>
        );
    }
    // Focusing input if necessary
    componentDidMount () {
        if(this.valueInput)
            this.valueInput.current.select();
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
    // Adding new property
    addNewProperty = (property) => {
        this.props.addCustomProperty(property);
        this.setState({
            value: ""
        });
    }
    // Adding new property on Enter
    onEnterAddProperty = (event) => {
        if(event.key === "Enter")
            this.addNewProperty(event.target.value);
    }
    // Adding new property on button click
    onClickAddProperty = () => {
        this.addNewProperty(this.state.value);
    }
    // Rendering component
    render(){
        var properties = ["background", "border", "height", "opacity", "position", "rotate", "scale", "translate", "width", "z-index"];
        Object.keys(this.props.styles).forEach((property) => {
            var index = properties.indexOf(property);
            if (index !== -1) {
                properties.splice(index, 1);
            }
        });
        return(
            <div class="input-group m-0 w-100">
                <input type="text" class="form-control bg-secondary bg-opacity-75 text-white border-secondary flex-grow-1" value="Add New Property" disabled />
                <input type="text" class="form-control bg-dark text-white border-secondary flex-grow-1" placeholder="Property Name" list="available-properties" onKeyPress={this.onEnterAddProperty} onChange={this.onInputChange} value={this.state.value} />
                <button class="btn btn-success rounded-end" title="Add Property" onClick={this.onClickAddProperty}><i class="bi bi-plus-lg"></i></button>
                <datalist id="available-properties">
                    {properties.map((property) => 
                        <option value={property} />
                    )}
                </datalist>
            </div>
        );
    }
}