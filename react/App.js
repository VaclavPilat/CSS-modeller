// Application
class App extends React.Component {
    // Rendering component
    render(){
        return (
            <div class="m-0 p-0 w-100 h-100 row text-white">
                <Modeller />
                <Settings />
            </div>
        );
    }
}

// Rendering application
ReactDOM.createRoot(document.body).render(<App />);