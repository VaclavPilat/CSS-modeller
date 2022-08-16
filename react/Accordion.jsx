// Accordion
class Accordion extends React.Component {
    // Rendering component
    render(){
        return (
            <div class="accordion accordion-flush position-absolute top-0 start-0 end-0 bottom-0">{this.props.children}</div>
        );
    }
}

// Accordion item
class AccordionItem extends React.Component {
    // Rendering component
    render(){
        return (
            <div class="accordion-item bg-transparent border-secondary border-opacity-25">
                <h2 class="accordion-header">
                    <button class="accordion-button shadow-none text-white bg-secondary fw-bold" data-bs-toggle="collapse" data-bs-target={"#" + this.props.ID}>{this.props.name}</button>
                </h2>
                <div id={this.props.ID} class="accordion-collapse collapse show">
                    <div class="accordion-body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}