// Application
class App extends React.Component {
    // Constructor
    constructor(){
        super();
        this.state = {
            HTML: `<div style="width: 400px; height: 400px;"></div>`,
            ModellerRef: React.createRef(),
            modellerCol: 8,
            settingsCol: 4
        }
    }
    // Adding new square
    addNewSquare = () => {
        var HTML = `<div style="width: 100px; height: 100px; background-color: white; transform-style: preserve-3d;"></div>`;
        this.state.ModellerRef.current.children[0].insertAdjacentHTML('beforeend', HTML);
        this.setState({
            HTML: this.state.ModellerRef.current.innerHTML
        });
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
                <div class="m-0 p-0 w-100 row flex-grow-1">
                    <Modeller col={this.state.modellerCol} HTML={this.state.HTML} ModellerRef={this.state.ModellerRef} />
                    <Settings col={this.state.settingsCol} HTML={this.state.HTML} />
                </div>
                <ButtonPanel addNewSquare={this.addNewSquare} changePageLayout={this.changePageLayout} />
            </div>
        );
    }
}

// Rendering application
ReactDOM.createRoot(document.body).render(<App />);