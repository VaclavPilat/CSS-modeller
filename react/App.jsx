// Application
class App extends React.Component {
    // Constructor
    constructor(){
        super();
        var DOM = this.getElementFromHTML(Templates.Scene);
        this.state = {
            DOM: DOM,
            currentElement: DOM,
            modellerCol: "col-8",
            settingsCol: "col-4"
        }
    }
    // Getting DOM from HTML
    getElementFromHTML = (HTML) => {
        var element = document.createElement("div");
        element.innerHTML = HTML;
        var DOM = element.children[0];
        this.removeAttributes(DOM, ["data-modeller-current", "data-modeller-drag"]);
        DOM.setAttribute("data-modeller-current", "true");
        return DOM;
    }
    // Loading new model
    loadNewModel = (HTML) => {
        var DOM = this.getElementFromHTML(HTML);
        this.setState({
            DOM: DOM,
            currentElement: DOM
        });
    }
    // Removing attribute from elements in DOM
    removeAttributes = (DOM, attributes) => {
        var i;
        for(i = 0; i < attributes.length; i++)
            DOM.removeAttribute(attributes[i]);
        for(i = 0; i < DOM.children.length; i++)
            this.removeAttributes(DOM.children[i], attributes);
    }
    // Updating application
    updateApplication = () => {
        if(!this.elementExists(this.state.DOM, this.state.currentElement))
            this.setCurrentElement(this.state.DOM);
        else
            this.forceUpdate();
    }
    // Adding new shape
    addNewShape = (HTML) => {
        this.state.DOM.insertAdjacentHTML('beforeend', HTML);
        this.setCurrentElement(this.state.DOM.children[this.state.DOM.children.length - 1]);
        this.updateApplication();
    }
    // Adding new empty object
    addEmptyObject = () => {
        this.addNewShape(Templates.Empty);
    }
    // Adding new square
    addNewSquare = () => {
        this.addNewShape(Templates.Square);
    }
    // Adding new circle
    addNewCircle = () => {
        this.addNewShape(Templates.Circle);
    }
    // Adding new triangle
    addNewTriangle = () => {
        this.addNewShape(Templates.Triangle);
    }
    // Adding new cube
    addNewCube = () => {
        this.addNewShape(Templates.Cube);
    }
    // Change page layout
    changePageLayout = (modellerCol, settingsCol) => {
        this.setState({
            modellerCol: modellerCol,
            settingsCol: settingsCol
        });
    }
    // Setting an element as a current one
    setCurrentElement = (element) => {
        if(this.elementExists(this.state.DOM, this.state.currentElement))
            this.state.currentElement.removeAttribute("data-modeller-current");
        element.setAttribute("data-modeller-current", "true");
        this.setState({
            currentElement: element
        });
    }
    // Removing element from DOM
    removeElement = (element) => {
        element.remove();
        this.updateApplication();
    }
    // Does DOM contain element?
    elementExists = (DOM, element) => {
        if(DOM == element)
            return true;
        else
            if(DOM.children.length > 0)
                for(var i = 0; i < DOM.children.length; i++)
                    if(this.elementExists(DOM.children[i], element))
                        return true;
        return false;
    }
    // Rendering component
    render(){
        return (
            <div class="m-0 p-0 w-100 h-100 text-white d-flex flex-column">
                <ButtonPanel 
                    addEmptyObject={this.addEmptyObject}
                    addNewSquare={this.addNewSquare} 
                    addNewCircle={this.addNewCircle} 
                    addNewTriangle={this.addNewTriangle}
                    addNewCube={this.addNewCube} 
                    changePageLayout={this.changePageLayout}
                    DOM={this.state.DOM}
                    loadNewModel={this.loadNewModel}
                />
                <div class="m-0 p-0 w-100 row flex-grow-1">
                    <Modeller 
                        col={this.state.modellerCol} 
                        DOM={this.state.DOM}
                        setCurrentElement={this.setCurrentElement}
                    />
                    <Settings 
                        col={this.state.settingsCol} 
                        DOM={this.state.DOM} 
                        currentElement={this.state.currentElement} 
                        setCurrentElement={this.setCurrentElement}
                        removeElement={this.removeElement}
                        updateApplication={this.updateApplication}
                        removeAttributes={this.removeAttributes}
                    />
                </div>
            </div>
        );
    }
}

// Rendering application
ReactDOM.createRoot(document.body).render(<App />);