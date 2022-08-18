// Application
class App extends React.Component {
    // Constructor
    constructor(){
        super();
        var HTML = `<div data-modeller-title="scene" style="width: 400px; height: 400px; position: relative;"></div>`;
        var element = document.createElement("div");
        element.innerHTML = HTML;
        var DOM = element.children[0];
        this.removeAttributes(DOM, "data-modeller-current");
        DOM.setAttribute("data-modeller-current", "true");
        this.state = {
            DOM: DOM,
            currentElement: DOM,
            modellerCol: "col-8",
            settingsCol: "col-4"
        }
    }
    // Removing attribute from elements in DOM
    removeAttributes = (DOM, attribute) => {
        DOM.removeAttribute(attribute);
        for(var i = 0; i < DOM.children.length; i++)
            this.removeAttributes(DOM.children[i], attribute);
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
    // Adding new square
    addNewSquare = () => {
        this.addNewShape(
            `<div data-modeller-title="square" style="position: absolute; width: 100px; height: 100px; background-color: lightblue;"></div>`
        );
    }
    // Adding new circle
    addNewCircle = () => {
        this.addNewShape(
            `<div data-modeller-title="circle" style="position: absolute; width: 100px; height: 100px; background-color: lightgreen; border-radius: 50%"></div>`
        );
    }
    // Adding new cube
    addNewCube = () => {
        this.addNewShape(
            `<div data-modeller-title="cube" style="position: absolute; transform-style: preserve-3d; transform: rotateX(35.25deg) rotateY(45deg) rotateZ(0deg); width: 100px; height: 100px;">
                <div data-modeller-title="cube - front" style="width: 100px; height: 100px; position: absolute; background-color: lightsalmon; transform: rotateY(0deg) translateZ(50px);"></div>
                <div data-modeller-title="cube - back" style="width: 100px; height: 100px; position: absolute; background-color: lightsalmon; transform: rotateY(180deg) translateZ(50px);"></div>
                <div data-modeller-title="cube - left" style="width: 100px; height: 100px; position: absolute; background-color: lightsalmon; transform: rotateY(-90deg) translateZ(50px);"></div>
                <div data-modeller-title="cube - right" style="width: 100px; height: 100px; position: absolute; background-color: lightsalmon; transform: rotateY(90deg) translateZ(50px);"></div>
                <div data-modeller-title="cube - top" style="width: 100px; height: 100px; position: absolute; background-color: lightsalmon; transform: rotateX(90deg) translateZ(50px);"></div>
                <div data-modeller-title="cube - bottom" style="width: 100px; height: 100px; position: absolute; background-color: lightsalmon; transform: rotateX(-90deg) translateZ(50px);"></div>
            </div>`
        );
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
                    addNewSquare={this.addNewSquare} 
                    addNewCircle={this.addNewCircle} 
                    addNewCube={this.addNewCube} 
                    changePageLayout={this.changePageLayout}
                    DOM={this.state.DOM}
                />
                <div class="m-0 p-0 w-100 row flex-grow-1">
                    <Modeller 
                        col={this.state.modellerCol} 
                        DOM={this.state.DOM}
                    />
                    <Settings 
                        col={this.state.settingsCol} 
                        DOM={this.state.DOM} 
                        currentElement={this.state.currentElement} 
                        setCurrentElement={this.setCurrentElement}
                        removeElement={this.removeElement}
                        updateApplication={this.updateApplication}
                    />
                </div>
            </div>
        );
    }
}

// Rendering application
ReactDOM.createRoot(document.body).render(<App />);