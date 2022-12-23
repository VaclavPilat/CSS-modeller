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
    // Getting numeric values
    getNumericValues = () => {
        let regex = /(?<=^|$|\s|,|\()-?\d+\.?\d*[^,;)\s]*/g;
        let elements = [];
        let match;
        while (match = regex.exec(this.props.value)) {
            elements.push(
                <CustomPropertyValueSlider before={this.props.value.substring(0, match.index)} current={match.toString()} after={this.props.value.substring(regex.lastIndex, this.props.value.length)} />
            );
        }
        return elements;
    }
    // Rendering component
    render(){
        if(this.props.focus)
            this.valueInput = React.createRef();
        let ID = createUniqueID();
        let elements = this.getNumericValues();
        return(
            <div class="m-0 p-0 rounded mb-1 bg-secondary bg-opacity-75">
                <div class="input-group w-100 flex-nowrap">
                    <input type="text" class="form-control bg-dark text-white border-secondary property-name" value={this.props.name} onChange={this.onNameChange} onKeyPress={this.applyChangesOnEnter} onBlur={this.applyChanges} />
                    <input type="text" class="form-control bg-dark text-white border-secondary flex-grow-1" value={this.props.value} onChange={this.onValueChange} onKeyPress={this.applyChangesOnEnter} onBlur={this.applyChanges} ref={this.valueInput} />
                    {elements.length > 0 && (
                        <button class="btn btn-primary collapsed" data-bs-toggle="collapse" data-bs-target={"#" + ID}><i class="bi bi-chevron-down"></i></button>
                    )}
                    <button class="btn btn-danger" onClick={this.removeStyleProperty} title="Remove Property"><i class="bi bi-trash-fill"></i></button>
                </div>
                {elements.length > 0 && (
                    <div class="m-0 p-0 collapse" id={ID}>
                        {elements}
                    </div>
                )}
            </div>
        );
    }
    // Focusing input if necessary
    componentDidMount () {
        if(this.valueInput)
            this.valueInput.current.select();
    }
}

// Class for showing a numeric value in a custom property
class CustomPropertyValue extends React.Component {
    // Rendering component
    render () {
        return (
            <div class="m-0 property-value-number d-flex">
                <div class="text-nowrap text-truncate text-white text-opacity-75">
                    <bdi>{this.props.before}</bdi>
                </div>
                <div class="flex-shrink-1 text-nowrap text-truncate text-white fw-bold px-1">{this.props.current}</div>
                <div class="text-nowrap text-truncate text-white text-opacity-75">{this.props.after}</div>
            </div>
        );
    }
}

// Class for editing a numeric value in a custom property
class CustomPropertyValueSlider extends React.Component {
    // Constructor
    constructor (props){
        super();
        var number = parseInt(props.current);
        this.state = {
            old: number,
            new: number,
            lowerBound: 0,
            upperBound: 100
        };
    }
    // On edit
    onInput = (event) => {
        this.setState({
            new: parseInt(event.target.value)
        });
    }
    // Rendering component
    render () {
        //var number = parseInt(props.text);
        return (
            <div class="m-0 p-0 d-flex">
                <CustomPropertyValue before={this.props.before} current={this.props.current.replace(this.state.old, this.state.new)} after={this.props.after} />

                <div class="m-0 property-value-slider flex-fill d-flex">
                    <input type="range" class="form-range my-auto mx-0" min={this.state.lowerBound} max={this.state.upperBound} value={this.state.new} onInput={this.onInput} />
                </div>
            </div>
        );
    }
}

// Class for property buttons
class NewPropertyInput extends React.Component {
    // Constructor
    constructor(){
        super();
        var availableProperties = [];
        var computedStyles = getComputedStyle(document.body);
        Object.keys(computedStyles).filter(key => !computedStyles[key].startsWith("-") && key == parseInt(key).toString()).map(key => {
            availableProperties.push(computedStyles[key]);
        });
        this.state = {
            value: "",
            availableProperties: availableProperties
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
        return(
            <div class="input-group m-0 w-100 flex-nowrap">
                <span class="input-group-text bg-secondary bg-opacity-75 text-white border-secondary property-name">Add New</span>
                <input type="text" class="form-control bg-dark text-white border-secondary flex-grow-1" placeholder="Property Name" list="available-properties" onKeyPress={this.onEnterAddProperty} onChange={this.onInputChange} value={this.state.value} />
                <button class="btn btn-success rounded-end" title="Add Property" onClick={this.onClickAddProperty}><i class="bi bi-plus-lg"></i></button>
                <datalist id="available-properties">
                    {this.state.availableProperties.filter(property => !(property in this.props.styles)).map(property => {
                        return <option value={property} />
                    })}
                </datalist>
            </div>
        );
    }
}

// Class for input for changing element name
class ElementNameInput extends React.Component {
    // Changing stored value
    onInputChange = (event) => {
        this.props.value = event.target.value;
        this.forceUpdate();
    }
    // Saving element name on Enter
    onEnterSave = (event) => {
        if(event.key === "Enter")
            this.setNewElementName();
    }
    // Saving new element name
    setNewElementName = () => {
        this.props.setNewElementName(this.props.value);
    }
    // Rendering component
    render(){
        return(
            <div class="input-group m-0 w-100 flex-nowrap">
                <span class="input-group-text bg-secondary bg-opacity-75 text-white border-secondary property-name">Name</span>
                <input type="text" class="form-control bg-dark text-white border-secondary flex-grow-1" placeholder="New Element Name" onKeyPress={this.onEnterSave} onChange={this.onInputChange} value={this.props.value != null ? this.props.value : this.props.name} maxlength="40" />
                <button class="btn btn-success rounded-end" title="Add Property" onClick={this.setNewElementName}><i class="bi bi-check-lg"></i></button>
            </div>
        );
    }
}