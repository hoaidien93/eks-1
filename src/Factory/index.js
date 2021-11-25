import Header from "./Components/Header"
import Footer from "./Components/Footer"

export class Factory {
  static getInstance(name) {
    switch (name) {
      case "header":
        return <Header></Header>
      case "footer":
        return <Footer></Footer>
    }
  }
}
