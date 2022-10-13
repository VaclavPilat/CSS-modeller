// Class showing properties
class Properties extends React.Component {
    // Constructor
    constructor () {
        super();
        this.state = {
            lastProperty: null
        }
    }
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
    // Getting name to JS style property
    getStylePropertyName = (property) => {
        var parts = property.split('-');
        for(var i = 1; i < parts.length; i++)
            parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1)
        return parts.join("");
    }
    // Removing style property
    removeStyleProperty = (name) => {
        this.props.currentElement.style.removeProperty(name);
        this.props.updateApplication();
        this.state.lastProperty = null;
    }
    // Setting value for a custom property
    setCustomProperty = (oldName, name, value) => {
        if(!(oldName == name))
            this.removeStyleProperty(oldName);
        this.props.currentElement.style[this.getStylePropertyName(name)] = value;
        this.props.updateApplication();
    }
    // Add custom property
    addCustomProperty = (name) => {
        if(this.props.currentElement.style[name])
            return
        this.props.currentElement.style[name] = "initial";
        this.props.updateApplication();
        this.state.lastProperty = name;
    }
    // Rendering component
    render(){
        var lastProperty = this.state.lastProperty;
        if(lastProperty != null)
            this.state.lastProperty = null;
        var styles = this.parseStyleProperties(this.props.currentElement.getAttribute("style"));
        return(
            <Wrapper>
                <div class="m-0 mb-3 p-0">
                    {Object.keys(styles).map((property) => (
                        <CustomProperty focus={lastProperty == property} name={property} value={styles[property]} onChangeHandler={this.setCustomProperty} removeStyleProperty={this.removeStyleProperty} />
                    ))}
                </div>
                <NewPropertyButtons addCustomProperty={this.addCustomProperty} styles={styles} />
            </Wrapper>
        );
    }
}