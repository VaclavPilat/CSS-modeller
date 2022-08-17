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
            >{Array.prototype.slice.call(element.children).map((child, index) => {
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
                        <Treeview>{this.getHierarchyItems(this.props.DOM)}</Treeview>
                    </AccordionItem>
                    <AccordionItem name={"Properties" + (this.props.currentElement != null ? " of " + this.props.currentElement.getAttribute("data-modeller-title").toUpperCase() : "")} ID="properties">
                        <VectorProperty name={"Position"} x={0} y={0} z={0} locked={false} />
                        <VectorProperty name={"Rotation"} x={0} y={0} z={0} locked={false} />
                        <VectorProperty name={"Scale"} x={1} y={1} z={1} locked={true} />
                        <VectorProperty name={"Size"} x={100} y={100} locked={false} />
                        <CustomProperty name={"background-color"} value={"red"} />
                        <CustomProperty name={"border"} value={"3px solid black"} />
                        <NewPropertyButtons />
                    </AccordionItem>
                </Accordion>
            </div>
        );
    }
}