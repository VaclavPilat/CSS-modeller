// Application
class App extends React.Component {
    // Constructor
    constructor(){
        super();
        var HTML = `<div data-modeller-title="scene" style="width: 400px; height: 400px;"></div>`;
        var element = document.createElement("div");
        element.innerHTML = HTML;
        this.state = {
            DOM: element.children[0],
            currentElement: element.children[0],
            modellerCol: "col-8",
            settingsCol: "col-4"
        }
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
        this.addNewShape(`<div data-modeller-title="square" style="width: 100px; height: 100px; background-color: white; transform-style: preserve-3d;"></div>`);
    }
    // Adding new circle
    addNewCircle = () => {
        this.addNewShape(`<div data-modeller-title="circle" style="width: 100px; height: 100px; background-color: white; transform-style: preserve-3d; border-radius: 50%"></div>`);
    }
    // Adding new cube
    addNewCube = () => {
        this.addNewShape(`<div data-modeller-title="cube">
            <div data-modeller-title="cube - front" style="width: 100px; height: 100px; background-color: white; transform-style: preserve-3d;"></div>
            <div data-modeller-title="cube - back" style="width: 100px; height: 100px; background-color: white; transform-style: preserve-3d;"></div>
            <div data-modeller-title="cube - left" style="width: 100px; height: 100px; background-color: white; transform-style: preserve-3d;"></div>
            <div data-modeller-title="cube - right" style="width: 100px; height: 100px; background-color: white; transform-style: preserve-3d;"></div>
            <div data-modeller-title="cube - top" style="width: 100px; height: 100px; background-color: white; transform-style: preserve-3d;"></div>
            <div data-modeller-title="cube - bottom" style="width: 100px; height: 100px; background-color: white; transform-style: preserve-3d;"></div>
        </div>`);
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
                <ButtonPanel addNewSquare={this.addNewSquare} addNewCircle={this.addNewCircle} addNewCube={this.addNewCube} changePageLayout={this.changePageLayout} />
                <div class="m-0 p-0 w-100 row flex-grow-1">
                    <Modeller col={this.state.modellerCol} DOM={this.state.DOM} />
                    <Settings 
                        col={this.state.settingsCol} 
                        DOM={this.state.DOM} 
                        currentElement={this.state.currentElement} 
                        setCurrentElement={this.setCurrentElement}
                        removeElement={this.removeElement}
                    />
                </div>
            </div>
        );
    }
}

// Rendering application
ReactDOM.createRoot(document.body).render(<App />);