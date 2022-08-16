// Modeller part of application
class Modeller extends React.Component {
    // Rendering component
    render(){
        return (
            <div class="m-0 p-0 col-8 d-flex" id="modeller" dangerouslySetInnerHTML={{__html: this.props.HTML}}></div>
        );
    }
}