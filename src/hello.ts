import { renderToStaticMarkup } from "react-dom/server";
import { Hello } from "./Hello";

const element = Hello()

console.log({element});
// {
//   element: {
//     '$$typeof': Symbol(react.element),
//     type: 'h1',
//     key: null,
//     ref: null,
//     props: { children: 'Hello' },
//     _owner: null,
//     _store: {}
//   }
// }

console.log(renderToStaticMarkup(element));
// <h1>Hello</h1>
