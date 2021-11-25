import { Factory } from "../Factory"

export class Template {
  constructor(defineObj) {
    this.name = defineObj.name
    this.listChild = defineObj.listChild
    this.isLeaf = !!this.listChild?.length
  }
  getName() {
    return this.name
  }
  toDom() {
    if (this.isLeaf) {
      return <>{this.listChild.map((e) => new Template(e).toDom())}</>
    }
    return Factory.getInstance(this.name)
  }
}
