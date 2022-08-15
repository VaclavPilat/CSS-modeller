// Class for visualising an vector
class VectorProperty extends React.Component {
    // Rendering component
    render(){
        return(
            <div class="input-group mb-3">
                <span class="input-group-text bg-secondary text-white w-25 border-0">{this.props.name}</span>
                <span class="input-group-text bg-secondary text-white border-top-0 border-bottom-0 border-end-0">X</span>
                <input type="number" class="form-control" placeholder="0" defaultValue={this.props.x} />
                <span class="input-group-text bg-secondary text-white border-0">Y</span>
                <input type="number" class="form-control" placeholder="0" defaultValue={this.props.y} />
                {this.props.z != null && (
                    <Wrapper>
                        <span class="input-group-text bg-secondary text-white border-0">Z</span>
                        <input type="number" class="form-control" placeholder="0" defaultValue={this.props.z} />
                    </Wrapper>
                )}
                <button class="btn btn-warning">
                    {this.props.locked ? (
                        <i class="bi bi-lock-fill"></i>
                    ) : (
                        <i class="bi bi-unlock-fill"></i>
                    )}
                </button>
            </div>
        );
    }
}

// Class for visualising a list of custom properties
class CustomProperty extends React.Component {
    // Rendering component
    render(){
        return(
            <div class="input-group mb-3">
                <input type="text" class="form-control" defaultValue={this.props.name} />
                <input type="text" class="form-control" defaultValue={this.props.value} />
                <button class="btn btn-danger">
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>
        );
    }
}