// Modeller part of application
class Modeller extends React.Component {
    // Rendering component
    render(){
        return (
            <div class="m-0 p-0 col-8 d-flex">
                <div class="m-0 p-2 flex-shrink-1 d-flex flex-column bg-secondary border-end border-secondary bg-opacity-25">
                    <button class="btn btn-success mb-2" title="Add New Square" onClick={this.props.addNewSquare}>
                        <i class="bi bi-square"></i>
                    </button>
                    <button class="btn btn-success" title="Add New Cube">
                        <i class="bi bi-box"></i>
                    </button>
                </div>
                <div class="m-0 p-0 h-100 d-flex flex-grow-1" id="modeller" dangerouslySetInnerHTML={{__html: this.props.HTML}} ref={this.props.ModellerRef}></div>
            </div>
        );
    }
}