// ReactDom.render(<h1>HI I'm Rahul Ghosh</h1>,document.getElementById("root"))

// // ReactDOM.render( 
// //     <ul><li>Thing 1</li><li>Thing 2</li></ul>,
// //     document.getElementById("root")
// // )

// const h1=document.createElement("h1")
// h1.textContent="Hi i'm rahul ghosh"
// h1.className="header"
// document.getElementsByID("root").append(h1)

// ReactDOM.render(
//     <div>
//         <h1>This is JSX</h1>
//         <P>HI I am rahul</P>
//     </div>,
//     document.getElementById("rot")
// )

// const page=(
//     <div>
//         <h1>This is JSX</h1>
//         <P>HI I am rahul</P>
//      </div>
// )

// ReactDOm.render(
//     page,
//     document.getElementById("rot")
// )

// const navbar=(
//     <nav>
//         <h1>Rahul's navbar</h1>
//         <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(navbar,dovument.getElementByID("root"))

// import React from "react"
// import ReactDOM from "react-dom"

// const navbar = (
//     <nav>
//         <h1>Bob's Bistro</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )
// console.log('hi')
// ReactDOM.render(navbar, document.getElementById("root"))

//version 18------------------

// import React from "react"
// import ReactDOM from "react-dom/client"

// const navbar = (
//     <nav>
//         <h1>Bob's Bistro</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )


// // ReactDOM.createRoot(document.getElementById("root")).render(navbar) 
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(navbar)


// import React from "react"

// const page = (
//     // <div>
//     //     <h1>My awsome website in React</h1>
//     //     <h3>reasons i love React</h3>
//     //     <ol>
//     //         <li>It's composable</li>
//     //         <li>It's declarative</li>
//     //         <li>It's a hireable skill</li>
//     //         <li>It's actively maintained by skilled people</li>
//     //     </ol>
//     // </div>
//     console.log(rahul)
// )

// document.getElementById("root").append(JSON.stringify(page))
import React from "react"
import ReactDOM from "react-dom"

/**
Challenge: fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.
 */

const page = (
    <div>
        <h1>My awesome website in React</h1>
        <h3>Reasons I love React</h3>
        <ol>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))
// document.getElementById("root").append(JSON.stringify(page))