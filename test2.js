function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}


function createDom(element){
  if (element.type === "TEXT_ELEMENT") {
    return document.createTextNode(element.props.nodeValue)
  }

  const dom = document.createElement(element.type)

  for (const child of element.props.children) {
    dom.appendChild(createDom(child))
  }
  console.log(typeof dom)
  return dom
}


function render(element, container) {
  container.appendChild(createDom(element))  
}

const element = createElement("div", { id: "foo" }, "this is a div");
const container = document.getElementById("root");
render(element, container);