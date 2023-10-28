// var funcs = [];
// // let's create 3 functions
// for (let i = 0; i < 3; i++) {
//   // and store them in funcs
//   funcs[i] = function() {
//     // each should log its value.
//     console.log("My value: " + i);
//   };
// }
// for (var j = 0; j < 3; j++) {
//   // and now let's run each one to see
//   funcs[j]();
// }


// notes = [
//   {
//     id: 1,
//     body: "Note 1"
//     },
//     {
//       id:2,
//       body: "Note 2"
//     },
//     {
//       id:3,
//       body: "Note 3"
//     },
//     {
//       id:4,
//       body: "Note 4"
//     }

// ]

// currentId = 4

// const newNotes = [...notes.filter(note =>note.id === currentId), ...notes.filter(note =>note.id !== currentId)]

// console.log(newNotes)

// function consoleLog() {
//   return () => console.log("sec")
// }



// setInterval(consoleLog(), 1000)

// // console.log(consoleLog())


function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => 
        typeof child === "object"
        ? child
        : createTextElement(child)
      )
    },
  }
}


function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  }
}


function createDom(fiber) {
  const domNode = 
    fiber.type === "TEXT_ELEMENT"
      ? document.createTextNode(fiber.props.nodeValue)
      : document.createElement(fiber.type)

  const isProperty = (key) => key !== "children"
  Object.keys(fiber.props)
    .filter(isProperty)
    .forEach(name => {
      domNode[name] = fiber.props[name]
    })

    return domNode
}


function commitRoot() {
  commitWork(wipRoot.child)
  wipRoot = null
}


function commitWork(fiber) {
  if (!fiber) {
    return
  }
  const domParent = fiber.parent.dom
  domParent.appendChild(fiber.dom)
  commitWork(fiber.child)
  commitWork(fiber.sibling)
}


function render(element, container) {
  wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
  }
  nextUnitOfWork = wipRoot
}

let nextUnitOfWork = null
let wipRoot = null



function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    shouldYield = deadline.timeRemaining() < 1
  }
  
  if (!nextUnitOfWork && wipRoot) {
    commitRoot()
  }

  requestIdleCallback(workLoop)
}



function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber)
  }


  const elements = fiber.props.children
  let index = 0
  let prevSibling = null

  while (index < elements.length) {
    const element = elements[index]

    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null,
    }

    if (index === 0) {
      fiber.child = newFiber
    } else {
      prevSibling.sibling = newFiber
    }

    prevSibling = newFiber
    index++
  }

  if (fiber.child) {
    return fiber.child
  }
  let nextFiber = fiber
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent
  }
}


const Didact = {
  createElement,
  render
}

const element = createElement(
  "div",
  { 
    id: "foo",
  },
  Didact.createElement("a", null, "bar"),
  Didact.createElement("b")
)

console.log(element)

const container = document.getElementById("root")

container.createTextNode("")
