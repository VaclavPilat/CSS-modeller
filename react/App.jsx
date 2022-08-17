// Application
class App extends React.Component {
    // Constructor
    constructor(){
        super();
        this.state = {
            HTML: `<div class="model-scene" style="width: 400px; height: 400px;"></div>`,
            ModellerRef: React.createRef(),
            modellerCol: "col-8",
            settingsCol: "col-4"
        }
    }
    // Updating HTML state
    syncHTML = () => {
        this.setState({
            HTML: this.state.ModellerRef.current.innerHTML
        });
    }
    // Adding new square
    addNewSquare = () => {
        var HTML = `<div class="model-square" style="width: 100px; height: 100px; background-color: white; transform-style: preserve-3d;"></div>`;
        this.state.ModellerRef.current.children[0].insertAdjacentHTML('beforeend', HTML);
        this.syncHTML();
    }
    // Adding new circle
    addNewCircle = () => {
        var HTML = `<div class="model-circle" style="width: 100px; height: 100px; background-color: white; transform-style: preserve-3d; border-radius: 50%"></div>`;
        this.state.ModellerRef.current.children[0].insertAdjacentHTML('beforeend', HTML);
        this.syncHTML();
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
                <ButtonPanel addNewSquare={this.addNewSquare} addNewCircle={this.addNewCircle} changePageLayout={this.changePageLayout} />
                <div class="m-0 p-0 w-100 row flex-grow-1">
                    <Modeller col={this.state.modellerCol} HTML={this.state.HTML} ModellerRef={this.state.ModellerRef} />
                    <Settings col={this.state.settingsCol} HTML={this.state.HTML} ModellerRef={this.state.ModellerRef} syncHTML={this.syncHTML} />
                </div>
            </div>
        );
    }
}

// Rendering application
ReactDOM.createRoot(document.body).render(<App />);