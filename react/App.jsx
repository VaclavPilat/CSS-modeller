// Application
class App extends React.Component {
    // Constructor
    constructor(){
        super();
        var HTML = `<div class="model-scene" style="width: 400px; height: 400px;"></div>`;
        var element = document.createElement("div");
        element.innerHTML = HTML;
        this.state = {
            DOM: element.children[0],
            modellerCol: "col-8",
            settingsCol: "col-4"
        }
    }
    // Updating application
    updateApplication = () => {
        this.forceUpdate();
    }
    // Adding new square
    addNewSquare = () => {
        var HTML = `<div class="model-square" style="width: 100px; height: 100px; background-color: white; transform-style: preserve-3d;"></div>`;
        this.state.DOM.insertAdjacentHTML('beforeend', HTML);
        this.updateApplication();
    }
    // Adding new circle
    addNewCircle = () => {
        var HTML = `<div class="model-circle" style="width: 100px; height: 100px; background-color: white; transform-style: preserve-3d; border-radius: 50%"></div>`;
        this.state.DOM.insertAdjacentHTML('beforeend', HTML);
        this.updateApplication();
    }
    // Adding new cube
    addNewCube = () => {
        var HTML = `<div class="model-cube">
            <div class="model-square" style="width: 100px; height: 100px; background-color: white; transform-style: preserve-3d;"></div>
            <div class="model-square" style="width: 100px; height: 100px; background-color: white; transform-style: preserve-3d;"></div>
            <div class="model-square" style="width: 100px; height: 100px; background-color: white; transform-style: preserve-3d;"></div>
            <div class="model-square" style="width: 100px; height: 100px; background-color: white; transform-style: preserve-3d;"></div>
            <div class="model-square" style="width: 100px; height: 100px; background-color: white; transform-style: preserve-3d;"></div>
            <div class="model-square" style="width: 100px; height: 100px; background-color: white; transform-style: preserve-3d;"></div>
        </div>`;
        this.state.DOM.insertAdjacentHTML('beforeend', HTML);
        this.updateApplication();
    }
    // Change page layout
    changePageLayout = (modellerCol, settingsCol) => {
        this.setState({
            modellerCol: modellerCol,
            settingsCol: settingsCol
        });
    }
    // Rendering component
    render(){
        return (
            <div class="m-0 p-0 w-100 h-100 text-white d-flex flex-column">
                <ButtonPanel addNewSquare={this.addNewSquare} addNewCircle={this.addNewCircle} addNewCube={this.addNewCube} changePageLayout={this.changePageLayout} />
                <div class="m-0 p-0 w-100 row flex-grow-1">
                    <Modeller col={this.state.modellerCol} DOM={this.state.DOM} />
                    <Settings col={this.state.settingsCol} DOM={this.state.DOM} updateApplication={this.updateApplication} />
                </div>
            </div>
        );
    }
}

// Rendering application
ReactDOM.createRoot(document.body).render(<App />);