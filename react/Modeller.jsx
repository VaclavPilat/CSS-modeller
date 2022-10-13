// Modeller part of application
class Modeller extends React.Component {
    // Rendering component
    render(){
        return (
            <div class={"m-0 p-0 position-relative " + this.props.col}>
                <div class={"position-absolute top-0 start-0 w-100 h-100 m-0 p-3 d-flex overflow-auto " + this.props.col} id="modeller"></div>
            </div>
        );
    }
    // Showing elements
    componentDidMount(){
        var modeller = document.getElementById("modeller");
        modeller.appendChild(this.props.DOM);
        modeller.addEventListener("click", (event) => {
            if(event.target != modeller)
                this.props.setCurrentElement(event.target);
        });
    }
    // Checking if DOM has changed
    componentDidUpdate(){
        var modeller = document.getElementById("modeller");
        var oldHTML = modeller.innerHTML;
        var newHTML = this.props.DOM.outerHTML;
        if(!(oldHTML == newHTML)){
            modeller.innerHTML = '';
            modeller.appendChild(this.props.DOM);
        }
    }
}