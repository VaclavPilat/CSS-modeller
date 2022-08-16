// Application
class App extends React.Component {
    // Constructor
    constructor(){
        super();
        this.state = {
            HTML: `
                <div class="scene">
                    <div style="width: 200px; height: 100px; background-color: salmon;"></div>
                </div>
            `,
            ModellerRef: React.createRef()
        }
    }
    // Adding new square
    addNewSquare = () => {
        var HTML = `<div style="width: 100px; height: 100px; background-color: white;"></div>`;
        this.state.ModellerRef.current.children[0].insertAdjacentHTML('beforeend', HTML);
        this.setState({
            HTML: this.state.ModellerRef.current.innerHTML
        });
    }
    // Rendering component
    render(){
        return (
            <div class="m-0 p-0 w-100 h-100 row text-white">
                <Modeller HTML={this.state.HTML} ModellerRef={this.state.ModellerRef} setAppState={this.setState} addNewSquare={this.addNewSquare} />
                <Settings HTML={this.state.HTML} />
            </div>
        );
    }
}

// Rendering application
ReactDOM.createRoot(document.body).render(<App />);