// Modeller part of application
class Modeller extends React.Component {
    // Rendering component
    render(){
        return (
            <div class={"m-0 p-0 col-" + this.props.col + " d-flex overflow-auto"} id="modeller" dangerouslySetInnerHTML={{__html: this.props.HTML}} ref={this.props.ModellerRef}>
            </div>
        );
    }
}