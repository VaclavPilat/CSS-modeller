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
    // Rendering component
    render(){
        var ID = createUniqueID();
        return (
            <li class="m-0 p-0">
                <div class="input-group m-0 mt-1 p-0">
                    {this.props.element.children.length > 0 && (
                        <button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target={"#" + ID}><i class="bi bi-chevron-down"></i></button>
                    )}
                    <div class="input-group-text flex-grow-1 bg-secondary bg-opacity-75 text-white border-secondary border-opacity-75 text-uppercase">{this.props.element.getAttribute("class").replace("model-", "")}</div>
                    <button class="btn btn-warning"><i class="bi bi-tools"></i></button>
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