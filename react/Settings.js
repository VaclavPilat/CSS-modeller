// Settings part of application
class Settings extends React.Component {
    // Constructor
    constructor(){
        super();
        this.state = {
            HTMLEditorRef: React.createRef()
        }
    }
    // Rendering component
    render(){
        var IDs = [];
        for(var i = 0; i < 3; i++)
            IDs.push(createUniqueID())
        return (
            <div class="m-0 p-0 col-4 d-flex flex-column h-100">
                <ul class="nav nav-tabs border-0 flex-shrink-1">
                    <li class="nav-item">
                        <button class="nav-link text-white border-secondary active" data-bs-toggle="tab" data-bs-target={"#" + IDs[0]}>Element Properties</button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link text-white border-secondary" data-bs-toggle="tab" data-bs-target={"#" + IDs[1]}>HTML Editor</button>
                    </li>
                </ul>
                <div class="tab-content border-top border-start border-secondary flex-grow-1 p-3 overflow-auto bg-secondary" style={{"--bs-bg-opacity": .2}}>
                    <div class="tab-pane fade show active" id={IDs[0]}>
                        <VectorProperty name={"Position"} x={0} y={0} z={0} locked={false} />
                        <VectorProperty name={"Rotation"} x={0} y={0} z={0} locked={false} />
                        <VectorProperty name={"Scale"} x={1} y={1} z={1} locked={true} />
                        <VectorProperty name={"Size"} x={100} y={100} locked={false} />
                        <CustomProperty name={"background-color"} value={"red"} />
                        <CustomProperty name={"border"} value={"3px solid black"} />
                        <NewPropertyButtons />
                    </div>
                    <div class="tab-pane fade" id={IDs[1]} ref={this.state.HTMLEditorRef}>
                        HTML Editor
                    </div>
                </div>
            </div>
        );
    }
    // Code run after the component is mounted
    componentDidMount() {
        this.state.HTMLEditorRef.current.innerText = this.props.ModellerRef.current.innerHTML;
    }
}