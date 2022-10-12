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