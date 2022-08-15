// Application
class App extends React.Component {
    // Rendering component
    render(){
        return (
            <div class="m-0 p-0 w-100 h-100 bg-dark row text-white">
                <div class="m-0 p-0 col-8">
                    Modeller
                </div>
                <div class="m-0 p-0 col-4">
                    Editor
                </div>
            </div>
        );
    }
}

// Rendering application
ReactDOM.createRoot(document.body).render(<App />);