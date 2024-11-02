export function render(reactElement, rootElement) {

    function createDOMElement(reactElement){
        const {type, props} = reactElement

        if(typeof reactElement.type === "function"){
            return createDOMElement(reactElement.type(reactElement.props))
        }

        const DOMElement = document.createElement(type)
        
        if(typeof reactElement === "string"){
            return document.createTextNode(reactElement)
        }
    
        if(Array.isArray(reactElement)){
            return reactElement.map((el) => createDOMElement(el))
        }
        
        if(props){

            Object.entries(props).forEach(([key, value]) => {
                if(key === "style"){
                    Object.entries(value).forEach(([style,value]) => {
                        DOMElement.style[style] = value
                    })
                }else{
                    DOMElement[key] = value
                }
    
            })
            
            props.children.forEach((child) => {
                if(Array.isArray(child)){
                    DOMElement.append(...child.map((el) => createDOMElement(el)))
                }else if(typeof child === "string"){
                    DOMElement.append(createDOMElement(child))
                }else{
                    const textNode = document.createTextNode(child)
                    DOMElement.append(textNode)
                }
            });
            
            return DOMElement;
        }
    }

    const DOMElement = createDOMElement(reactElement)

    if(Array.isArray(reactElement)){
        rootElement.innerHTML = "";
        rootElement.append(...DOMElement);
    }else{
        rootElement.innerHTML = "";
        rootElement.append(DOMElement);
    }
}

export default {
    render,
}