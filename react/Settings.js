// Settings part of application
class Settings extends React.Component {
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
        var IDs = [];
        for(var i = 0; i < 3; i++)
            IDs.push(createUniqueID())
        return (
            <div class={"m-0 p-0 col-" + this.props.col + " d-flex"}>
                <div class="m-0 p-0 d-flex flex-column flex-grow-1 h-100">
                    <ul class="nav nav-tabs border-0 flex-shrink-1">
                        <li class="nav-item">
                            <button class="nav-link text-white border-secondary active" data-bs-toggle="tab" data-bs-target={"#" + IDs[0]}>Element Properties</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link text-white border-secondary" data-bs-toggle="tab" data-bs-target={"#editor"}>HTML Editor</button>
                        </li>
                    </ul>
                    <div class="tab-content border-top border-start border-secondary flex-grow-1 p-0 overflow-auto bg-secondary bg-opacity-25 position-relative">
                        <div class="tab-pane fade show active p-3" id={IDs[0]}>
                            <VectorProperty name={"Position"} x={0} y={0} z={0} locked={false} />
                            <VectorProperty name={"Rotation"} x={0} y={0} z={0} locked={false} />
                            <VectorProperty name={"Scale"} x={1} y={1} z={1} locked={true} />
                            <VectorProperty name={"Size"} x={100} y={100} locked={false} />
                            <CustomProperty name={"background-color"} value={"red"} />
                            <CustomProperty name={"border"} value={"3px solid black"} />
                            <NewPropertyButtons />
                        </div>
                        <div class="tab-pane fade m-0 p-0 position-absolute start-0 top-0 end-0 bottom-0" id="editor"></div>
                    </div>
                </div>
                <div class="m-0 p-2 flex-shrink-1 d-flex flex-column bg-secondary border-start border-secondary bg-opacity-25">
                    <button class="btn btn-info mb-2" title="Change Page Layout" onClick={this.setModellerSmaller}>
                        <i class="bi bi-layout-sidebar"></i>
                    </button>
                    <button class="btn btn-info mb-2" title="Change Page Layout" onClick={this.setModellerEqual}>
                        <i class="bi bi-layout-split"></i>
                    </button>
                    <button class="btn btn-info mb-2" title="Change Page Layout" onClick={this.setModellerBigger}>
                        <i class="bi bi-layout-sidebar-reverse"></i>
                    </button>
                </div>
            </div>
        );
    }
    // Adding ACE editor after the component is loaded
    componentDidMount() {
        ace.config.set('basePath', "https://cdnjs.cloudflare.com/ajax/libs/ace/1.9.5/");
        this.editor = ace.edit("editor");
        document.getElementById("editor").style.fontSize = "1em";
        this.editor.setTheme("ace/theme/tomorrow_night_bright");
        this.editor.setShowPrintMargin(false);
        this.editor.renderer.setShowGutter(false);
        this.editor.session.setMode("ace/mode/html");
        this.editorBeautify = ace.require("ace/ext/beautify");
        this.updateEditorContent();
    }
    // Changing editor content after this component is updated
    componentDidUpdate() {
        this.updateEditorContent();
    }
    // Updating editor content
    updateEditorContent = () => {
        this.editor.setValue(this.props.HTML);
        this.editorBeautify.beautify(this.editor.session);
        this.editor.resize();
    }
}