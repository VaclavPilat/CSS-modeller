// Class for visualising an vector
class VectorProperty extends React.Component {
    // Constructor
    constructor(props){
        super();
        this.state = {
            locked: props.locked
        };
    }
    // Applying changes
    applyChanges = () => {
        this.applyRatio();
        this.props.onChangeHandler(this.props.x, this.props.y, this.props.z);
    }
    // Applying changes on Enter
    applyChangesOnEnter = (event) => {
        if(event.key === "Enter")
            this.applyChanges();
    }
    // Getting ratio
    getRatio = (x = false, y = false, z = false) => {
        var parsedX = parseFloat(this.props.x);
        var parsedY = parseFloat(this.props.y);
        var parsedZ = parseFloat(this.props.z);
        if((x && parsedX == 0) || (y && parsedY == 0) || (z && parsedZ == 0))
            return [NaN, NaN, NaN];
        if(x)
            return [1, (parsedY == 0 ? 0 : parsedY/parsedX), (parsedZ == 0 ? 0 : parsedZ/parsedX)];
        else if(y)
            return [(parsedX == 0 ? 0 : parsedX/parsedY), 1, (parsedZ == 0 ? 0 : parsedZ/parsedY)];
        else
            return [(parsedX == 0 ? 0 : parsedX/parsedZ), (parsedY == 0 ? 0 : parsedY/parsedZ), 1];
    }
    // Applying ratio
    applyRatio = () => {
        if(this.state.locked && this.props.ratio){
            if(!isNaN(this.props.ratio[0])){
                var parsedX = parseFloat(this.props.x);
                this.props.x = this.props.x.replace(parsedX.toString(), (parseFloat(this.props.ratioValue)*this.props.ratio[0]).toString());
            }
            if(!isNaN(this.props.ratio[1])){
                var parsedY = parseFloat(this.props.y);
                this.props.y = this.props.y.replace(parsedY.toString(), (parseFloat(this.props.ratioValue)*this.props.ratio[1]).toString());
            }
            if(this.props.z && !isNaN(this.props.ratio[2])){
                var parsedZ = parseFloat(this.props.z);
                this.props.z = this.props.z.replace(parsedZ.toString(), (parseFloat(this.props.ratioValue)*this.props.ratio[2]).toString());
            }
            this.props.ratio = null;
            this.props.ratioValue = null;
        }
    }
    // On X change
    onChangeX = (event) => {
        if(this.state.locked){
            if(!(this.props.ratio))
                this.props.ratio = this.getRatio(false, true);
            this.props.ratioValue = event.target.value;
        }
        this.props.x = event.target.value;
        this.forceUpdate();
    }
    // On Y change
    onChangeY = (event) => {
        if(this.state.locked){
            if(!(this.props.ratio))
                this.props.ratio = this.getRatio(false, true);
            this.props.ratioValue = event.target.value;
        }
        this.props.y = event.target.value;
        this.forceUpdate();
    }
    // On Z change
    onChangeZ = (event) => {
        if(this.state.locked){
            if(!(this.props.ratio))
                this.props.ratio = this.getRatio(false, false, true);
            this.props.ratioValue = event.target.value;
        }
        this.props.z = event.target.value;
        this.forceUpdate();
    }
    // Changing locked state
    changeLockedState = () => {
        if(this.props.ratio){
            this.props.ratio = null;
            this.props.ratioValue = null;
        }
        this.setState({
            locked: !this.state.locked
        });
    }
    // Rendering component
    render(){
        return(
            <div class="input-group mb-1">
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
                <button class={"btn " + (this.state.locked ? "btn-warning" : "btn-light")} onClick={this.changeLockedState} title={this.state.locked ? "Disable Ratio" : "Enable Ratio"}>
                    {this.state.locked ? (
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