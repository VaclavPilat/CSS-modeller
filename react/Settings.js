// Settings part of application
class Settings extends React.Component {
    // Rendering component
    render(){
        return (
            <div class="m-0 p-0 col-4">
                <ul class="nav nav-tabs border-0">
                    <li class="nav-item">
                        <button class="nav-link text-white active" data-bs-toggle="tab" data-bs-target="#editor-props">Properties</button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link text-white" data-bs-toggle="tab" data-bs-target="#profile-tab-pane">HTML Editor</button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link text-white" data-bs-toggle="tab" data-bs-target="#contact-tab-pane">CSS Editor</button>
                    </li>
                </ul>
                <div class="tab-content border border-white">
                    <div class="tab-pane fade show active" id="editor-props">...</div>
                    <div class="tab-pane fade" id="profile-tab-pane">...</div>
                    <div class="tab-pane fade" id="contact-tab-pane">...</div>
                    <div class="tab-pane fade" id="disabled-tab-pane">...</div>
                </div>

            </div>
        );
    }
}