// Class for visualising an 3D vector
class Vector3 extends React.Component {
    // Rendering component
    render(){
        return(
            <div class="input-group mb-3">
                <span class="input-group-text bg-secondary text-white fw-bold w-25 border-0">{this.props.name}</span>
                <span class="input-group-text bg-secondary text-white border-top-0 border-bottom-0 border-end-0">X</span>
                <input type="number" class="form-control" defaultValue="0" />
                <span class="input-group-text bg-secondary text-white border-0">Y</span>
                <input type="number" class="form-control" defaultValue="0" />
                <span class="input-group-text bg-secondary text-white border-0">Z</span>
                <input type="number" class="form-control" defaultValue="0" />
            </div>
        );
    }
}