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
    // Rendering component
    render(){
        return (
            <div class="m-0 p-0 w-100 h-100 row text-white">
                <Modeller HTML={this.state.HTML} ModellerRef={this.state.ModellerRef} />
                <Settings ModellerRef={this.state.ModellerRef} />
            </div>
        );
    }
}

// Rendering application
ReactDOM.createRoot(document.body).render(<App />);