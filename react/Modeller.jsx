// Modeller part of application
class Modeller extends React.Component {
    // Rendering component
    render(){
        return (
            <div class={"m-0 p-0 position-relative " + this.props.col}>
                <div class="m-0 p-0 position-absolute start-0 top-0 end-0 bottom-0 overflow-auto d-flex">
                    <div class="p-3 m-auto" id="modeller"></div>
                </div>
            </div>
        );
    }
    // Showing elements
    componentDidMount(){
        document.getElementById("modeller").appendChild(this.props.DOM);
    }
    // Checking if DOM has changed
    componentDidUpdate(){
        var oldHTML = document.getElementById("modeller").innerHTML;
        var newHTML = this.props.DOM.outerHTML;
        if(!(oldHTML == newHTML)){
            document.getElementById("modeller").innerHTML = '';
            document.getElementById("modeller").appendChild(this.props.DOM);
        }
    }
}