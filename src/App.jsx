import './App.scss'
import './assets/mixin/var.scss'
import AboutBottom from './components/About-bottom/AboutBottom'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import Grid from './components/Grid/Grid'
import Header from './components/Header/Header'


function App() {

  return (
    <div className="App">
      <Header />
      <About />
      <Grid />
      <Blog />
      <AboutBottom />
      <Card />
      <Footer />
    </div>
  )
}

export default App
