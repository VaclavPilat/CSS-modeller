// Settings part of application
class Settings extends React.Component {
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
                    <li class="nav-item">
                        <button class="nav-link text-white border-secondary" data-bs-toggle="tab" data-bs-target={"#" + IDs[2]}>CSS Editor</button>
                    </li>
                </ul>
                <div class="tab-content border-top border-start border-secondary flex-grow-1 p-3 overflow-auto">
                    <div class="tab-pane fade show active" id={IDs[0]}>
                        Element Properties
                    </div>
                    <div class="tab-pane fade" id={IDs[1]}>
                        HTML Editor
                    </div>
                    <div class="tab-pane fade" id={IDs[2]}>
                        CSS Editor
                    </div>
                </div>

            </div>
        );
    }
}