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
                    </div>
            </div>
        );
    }
}