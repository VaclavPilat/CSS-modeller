// Class showing properties
class Properties extends React.Component {
    // Parsing style properties
    parseStyleProperties = (string) => {
        var styles = {};
        if(string)
            string.split(';').forEach((propertyValue) => {
                propertyValue = propertyValue.trim();
                if(propertyValue.length > 0){
                    var [property, value] = propertyValue.trim().split(':');
                    styles[property.trim()] = value.trim();
                }
            });
        return styles;
    }
    // Getting tranform object
    getTransformObject = (styles) => {
        var transform = {
            translate: {
                x: "0",
                y: "0",
                z: "0"
            },
            rotate: {
                x: "0deg",
                y: "0deg",
                z: "0deg"
            },
            scale: {
                x: "1",
                y: "1",
                z: "1"
            }
        };
        if(styles.transform){
            var transformValues = Array.from(styles.transform.matchAll(/(\w+)\((.+?)\)/gm)).reduce((agg, [, fn, val]) => ({...agg, [fn]: val.split(",")}), {});
            if(transformValues.translateX)
                transform.translate.x = transformValues.translateX;
            if(transformValues.translateY)
                transform.translate.y = transformValues.translateY;
            if(transformValues.translateZ)
                transform.translate.z = transformValues.translateZ;
            if(transformValues.rotateX)
                transform.rotate.x = transformValues.rotateX;
            if(transformValues.rotateY)
                transform.rotate.y = transformValues.rotateY;
            if(transformValues.rotateZ)
                transform.rotate.z = transformValues.rotateZ;
            if(transformValues.scaleX)
                transform.scale.x = transformValues.scaleX;
            if(transformValues.scaleY)
                transform.scale.y = transformValues.scaleY;
            if(transformValues.scaleZ)
                transform.scale.z = transformValues.scaleZ;
        }
        return transform;
    }
    // Set new transform
    setNewTransform = () => {
        var transformValue = `translateX(` + this.transform.translate.x + `) translateY(` + this.transform.translate.y + `) translateZ(` + this.transform.translate.z
            + `) rotateX(` + this.transform.rotate.x + `) rotateY(` + this.transform.rotate.y + `) rotateZ(` + this.transform.rotate.z
            + `) scaleX(` + this.transform.scale.x + `) scaleY(` + this.transform.scale.y + `) scaleZ(` + this.transform.scale.z + `)`;
        this.props.currentElement.style.transform = transformValue;
        this.props.updateApplication();
    }
    // Setting new translation
    setNewPosition = (x, y, z) => {
        this.transform.translate.x = x;
        this.transform.translate.y = y;
        this.transform.translate.z = z;
        this.setNewTransform();
    }
    // Setting new rotation
    setNewRotation = (x, y, z) => {
        this.transform.rotate.x = x;
        this.transform.rotate.y = y;
        this.transform.rotate.z = z;
        this.setNewTransform();
    }
    // Setting new scale
    setNewScale = (x, y, z) => {
        this.transform.scale.x = x;
        this.transform.scale.y = y;
        this.transform.scale.z = z;
        this.setNewTransform();
    }
    // Setting new element size
    setNewSize = (width, height) => {
        this.props.currentElement.style.width = width;
        this.props.currentElement.style.height = height;
        this.props.updateApplication();
    }
    // Rendering component
    render(){
        var styles = this.parseStyleProperties(this.props.currentElement.getAttribute("style"));
        this.transform = this.getTransformObject(styles);
        return(
            <Wrapper>
                <VectorProperty name={"Position"} x={this.transform.translate.x} y={this.transform.translate.y} z={this.transform.translate.z} locked={false} onChangeHandler={this.setNewPosition} />
                <VectorProperty name={"Rotation"} x={this.transform.rotate.x} y={this.transform.rotate.y} z={this.transform.rotate.z} locked={false} onChangeHandler={this.setNewRotation} />
                <VectorProperty name={"Scale"} x={this.transform.scale.x} y={this.transform.scale.y} z={this.transform.scale.z} locked={true} onChangeHandler={this.setNewScale} />
                <VectorProperty name={"Size"} x={styles.width ? styles.width : "0"} y={styles.height ? styles.height : "0"} locked={false} onChangeHandler={this.setNewSize} />
                {Object.keys(styles).filter(key => key !== "width" && key != "height" && key != "transform").map((property, i) => (
                    <CustomProperty name={property} value={styles[property]} />
                ))}
                <NewPropertyButtons />
            </Wrapper>
        );
    }
}