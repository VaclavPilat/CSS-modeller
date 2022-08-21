// Treeview
class Treeview extends React.Component {
    // Rendering component
    render(){
        return (
            <ul class={"list-unstyled m-0 pt-0 pe-0 pb-0 " + (this.props.ID != null ? "collapse show" : "")} id={this.props.ID} style={{paddingLeft: (this.props.ID != null ? "2.65rem" : "0")}}>
                {this.props.children}
            </ul>
        );
    }
}

// Treeview
class TreeviewItem extends React.Component {
    // Removing element
    removeElement = () => {
        this.props.removeElement(this.props.element);
    }
    // Setting this element as a current one
    setCurrentElement = () => {
        this.props.setCurrentElement(this.props.element);
    }
    // Setting data when dragging starts
    onDragStart = (event) => {
        this.props.element.setAttribute("data-model-drag", "true");
    }
    // Action taken when TreeviewItem is dragged over
    onDragOver = (event) => {
        event.preventDefault();
    }
    // Dropping TreeviewItem element
    onDrop = (event) => {
        event.preventDefault();
        var element = document.querySelector('[data-model-drag="true"]');
        try {
            this.props.element.appendChild(element);
        }catch(e){}
        this.props.removeAttributes(this.props.DOM, ["data-model-drag"]);
        this.props.updateApplication();
    }
    // Rendering component
    render(){
        var ID = createUniqueID();
        return (
            <li class="m-0 p-0">
                <div class="input-group m-0 mt-1 p-0" draggable={!this.props.root} onDragStart={this.onDragStart} onDrop={this.onDrop} onDragOver={this.onDragOver}>
                    {this.props.element.children.length > 0 && (
                        <button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target={"#" + ID}><i class="bi bi-chevron-down"></i></button>
                    )}
                    <div class={"btn input-group-text flex-grow-1 text-uppercase text-start " + (this.props.current ? "bg-white bg-opacity-50 border-white border-opacity-50 text-black" : "bg-secondary bg-opacity-75 border-secondary border-opacity-75 text-white")} onClick={this.setCurrentElement}>{this.props.element.getAttribute("data-modeller-title").replace("model-", "")}</div>
                    {!this.props.root ? (
                        <button class="btn btn-danger" onClick={this.removeElement}><i class="bi bi-trash-fill"></i></button>
                    ) : ( null )}
                </div>
                {this.props.element.children.length > 0 && (
                    <Treeview ID={ID}>
                        {this.props.children}
                    </Treeview>
                )}
            </li>
        );
    }
}