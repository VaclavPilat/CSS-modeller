// Settings part of application
class Settings extends React.Component {
    // Rendering component
    render(){
        return (
            <div class={"m-0 p-0 col-" + this.props.col + " overflow-auto position-relative bg-secondary bg-opacity-25 border-start border-secondary"}>
                <div class="accordion accordion-flush position-absolute top-0 start-0 end-0 bottom-0">
                    <div class="accordion-item bg-transparent border-secondary border-opacity-25">
                        <h2 class="accordion-header">
                            <button class="accordion-button shadow-none text-white bg-secondary fw-bold" data-bs-toggle="collapse" data-bs-target="#hierarchy">Hierarchy</button>
                        </h2>
                        <div id="hierarchy" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                                Hierarchy
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-transparent border-secondary border-opacity-25">
                        <h2 class="accordion-header">
                            <button class="accordion-button shadow-none text-white bg-secondary fw-bold" data-bs-toggle="collapse" data-bs-target="#properties">Properties</button>
                        </h2>
                        <div id="properties" class="accordion-collapse collapse show">
                            <div class="accordion-body">
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
                </div>
            </div>
        );
    }
}