// Settings part of application
class Settings extends React.Component {
    // Getting hierarchy items
    getHierarchyItems = (element, root = true) => {
        return [
            <TreeviewItem 
                element={element} 
                root={root} 
                removeElement={this.props.removeElement} 
                current={this.props.currentElement == element} 
                setCurrentElement={this.props.setCurrentElement}
                updateApplication={this.props.updateApplication}
                DOM={this.props.DOM}
                removeAttributes={this.props.removeAttributes}
            >{Array.prototype.slice.call(element.children).map((child) => {
                return this.getHierarchyItems(child, false);
            })}</TreeviewItem>
        ];
    }
    // Rendering component
    render(){
        return (
            <div class={"m-0 p-0 overflow-auto position-relative bg-secondary bg-opacity-25 border-start border-secondary " + this.props.col}>
                <Accordion>
                    <AccordionItem name="Hierarchy" ID="hierarchy">
                        <Treeview root={true}>{this.getHierarchyItems(this.props.DOM)}</Treeview>
                    </AccordionItem>
                    <AccordionItem name={"Properties" + (this.props.currentElement != null ? " of " + this.props.currentElement.getAttribute("data-modeller-title").toUpperCase() : "")} ID="properties">
                        <Properties currentElement={this.props.currentElement} updateApplication={this.props.updateApplication} />
                    </AccordionItem>
                </Accordion>
            </div>
        );
    }
}