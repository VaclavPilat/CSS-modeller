// Settings part of application
class Settings extends React.Component {
    // Rendering component
    render(){
        return (
            <div class={"m-0 p-0 col-" + this.props.col + " d-flex flex-column"}>
                    <ul class="nav nav-tabs border-0 flex-shrink-1">
                        <li class="nav-item">
                            <button class="nav-link text-white border-secondary active" data-bs-toggle="tab" data-bs-target="#hierarchy">Hierarchy</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link text-white border-secondary" data-bs-toggle="tab" data-bs-target="#properties">Properties</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link text-white border-secondary" data-bs-toggle="tab" data-bs-target={"#editor"}>HTML Editor</button>
                        </li>
                    </ul>
                    <div class="tab-content border-top border-start border-secondary flex-grow-1 p-0 overflow-auto bg-secondary bg-opacity-25 position-relative">
                        <div class="tab-pane fade show active p-3" id="hierarchy">
                            Hierarchy
                        </div>
                        <div class="tab-pane fade p-3" id="properties">
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
        );
    }
    // Adding ACE editor after the component is loaded
    componentDidMount() {
        ace.config.set('basePath', "https://cdnjs.cloudflare.com/ajax/libs/ace/1.9.5/");
        this.editor = ace.edit("editor");
        document.getElementById("editor").style.fontSize = "1em";
        this.editor.setTheme("ace/theme/tomorrow_night_bright");
        this.editor.setShowPrintMargin(false);
        this.editor.session.setMode("ace/mode/html");
        this.editorBeautify = ace.require("ace/ext/beautify");
        this.updateEditorContent();
        this.editor.session.on('change', this.codeChanged);
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
    // HTML code changed
    codeChanged = () => {
        if (this.editor.curOp && this.editor.curOp.command.name){
            var HTML = this.editor.getValue();
            this.props.saveNewCode(HTML);
        }
    }
}