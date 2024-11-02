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
        

        Object.entries(props).forEach(([key, value]) => {
            DOMElement[key] = value
        })
        
        props.children?.forEach((child) => {
            if(Array.isArray(child)){
                DOMElement.append(...child.map((el) => createDOMElement(el)))
            }else if(typeof child === "string"){
                const textNode = document.createTextNode(child)
                DOMElement.append(textNode)
            }else{
                DOMElement.append(createDOMElement(child))
            }
        });
        return DOMElement;
    }

    const DOMElement = createDOMElement(reactElement)
    if(Array.isArray(reactElement)){
        rootElement.append(...DOMElement);
    }else{
        rootElement.append(DOMElement);
    }
}

export default {
    render,
}