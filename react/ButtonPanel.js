// Panel with buttons
class ButtonPanel extends React.Component {
    // Changing page layout
    setModellerBigger = () => {
        this.props.changePageLayout(8, 4);
    }
    setModellerEqual = () => {
        this.props.changePageLayout(6, 6);
    }
    setModellerSmaller = () => {
        this.props.changePageLayout(4, 8);
    }
    // Rendering component
    render(){
        return (
            <div class="m-0 p-2 w-100 flex-shrink-1 d-flex bg-secondary border-top border-secondary bg-opacity-25">
                <button class="btn btn-success me-2" title="Add New Plane" onClick={this.props.addNewPlane}>
                    <i class="bi bi-square"></i>
                </button>
                <button class="btn btn-success me-auto" title="Add New Cube">
                    <i class="bi bi-box"></i>
                </button>
                <button class="btn btn-info me-2" title="Change Column Size" onClick={this.setModellerSmaller}>
                    <i class="bi bi-layout-sidebar"></i>
                </button>
                <button class="btn btn-info me-2" title="Change Column Size" onClick={this.setModellerEqual}>
                    <i class="bi bi-layout-split"></i>
                </button>
                <button class="btn btn-info" title="Change Column Size" onClick={this.setModellerBigger}>
                    <i class="bi bi-layout-sidebar-reverse"></i>
                </button>
            </div>
        );
    }
}