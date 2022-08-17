// Treeview
class Treeview extends React.Component {
    // Rendering component
    render(){
        return (
            <ul class="list-unstyled m-0 border border-danger">
                {this.props.children}
            </ul>
        );
    }
}

// Treeview
class TreeviewItem extends React.Component {
    // Rendering component
    render(){
        return (
            <li class="border border-success">
                {this.props.element.getAttribute("class")}
                <div class="m-0 p-0 ps-3">
                    {this.props.children}
                </div>
            </li>
        );
    }
}