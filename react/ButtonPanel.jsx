// Panel with buttons
class ButtonPanel extends React.Component {
    // Changing page layout
    setModellerFill = () => {
        this.props.changePageLayout("col-12", "d-none");
    }
    setModellerBigger = () => {
        this.props.changePageLayout("col-8", "col-4");
    }
    setModellerEqual = () => {
        this.props.changePageLayout("col-6", "col-6");
    }
    setModellerSmaller = () => {
        this.props.changePageLayout("col-4", "col-8");
    }
    setModellerHide = () => {
        this.props.changePageLayout("d-none", "col-12");
    }
    // Rendering component
    render(){
        return (
            <div class="m-0 p-2 w-100 flex-shrink-1 d-flex bg-secondary border-bottom border-secondary bg-opacity-25">
                <button class="btn btn-success me-2" title="Add New Square" onClick={this.props.addNewSquare}>
                    <i class="bi bi-square-fill"></i>
                </button>
                <button class="btn btn-success me-2" title="Add New Circle" onClick={this.props.addNewCircle}>
                    <i class="bi bi-circle-fill"></i>
                </button>
                <button class="btn btn-success me-auto" title="Add New Cube" onClick={this.props.addNewCube}>
                    <i class="bi bi-box-fill"></i>
                </button>
                <a class="btn btn-primary me-auto" title="Download Current Model" href={"data:application/octet-stream," + encodeURI(this.props.DOM.outerHTML)} download="CSS_3D_Model.html">
                    <i class="bi bi-download"></i>
                </a>
                <button class="btn btn-info me-2" title="Change Page Layout" onClick={this.setModellerHide}>
                    <i class="bi bi-square"></i>
                </button>
                <button class="btn btn-info me-2" title="Change Page Layout" onClick={this.setModellerSmaller}>
                    <i class="bi bi-layout-sidebar"></i>
                </button>
                <button class="btn btn-info me-2" title="Change Page Layout" onClick={this.setModellerEqual}>
                    <i class="bi bi-layout-split"></i>
                </button>
                <button class="btn btn-info me-2" title="Change Page Layout" onClick={this.setModellerBigger}>
                    <i class="bi bi-layout-sidebar-reverse"></i>
                </button>
                <button class="btn btn-info" title="Change Page Layout" onClick={this.setModellerFill}>
                    <i class="bi bi-square"></i>
                </button>
            </div>
        );
    }
}