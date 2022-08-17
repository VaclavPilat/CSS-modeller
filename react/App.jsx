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
        this.forceUpdate();
    }
    // Adding new shape
    addNewShape = (HTML) => {
        this.state.DOM.insertAdjacentHTML('beforeend', HTML);
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
                        updateApplication={this.updateApplication} 
                        currentElement={this.state.currentElement} 
                        setCurrentElement={this.setCurrentElement}
                    />
                </div>
            </div>
        );
    }
}

// Rendering application
ReactDOM.createRoot(document.body).render(<App />);