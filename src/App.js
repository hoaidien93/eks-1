import { Template } from "./Composite"
const cvDefine = {
  name: "root",
  listChild: [
    {
      name: "header",
      component: "Header",
    },
    {
      name: "footer",
      component: "Footer",
    },
  ],
}
const template = new Template(cvDefine)
function App() {
  return <div className="App">{template.toDom()}</div>
}

export default App
