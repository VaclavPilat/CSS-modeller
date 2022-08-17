// Settings part of application
class Settings extends React.Component {
    // Getting hierarchy items
    getHierarchyItems = (element) => {
        var c = [];
        if(element != null && element.children != null)
            for(var i = 0; i < element.children.length; i++)
                c.push(<TreeviewItem element={element.children[i]}>{this.getHierarchyItems(element.children[i])}</TreeviewItem>);
        return c;
    }
    // Rendering component
    render(){
        return (
            <div class={"m-0 p-0 overflow-auto position-relative bg-secondary bg-opacity-25 border-start border-secondary " + this.props.col}>
                <Accordion>
                    <AccordionItem name="Hierarchy" ID="hierarchy">
                        <Treeview>{this.getHierarchyItems(this.props.ModellerRef.current)}</Treeview>
                    </AccordionItem>
                    <AccordionItem name="Properties" ID="properties">
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
    // Forcing the component to update itself after load to show Treeview components
    componentDidMount(){
        this.forceUpdate();
    }
}