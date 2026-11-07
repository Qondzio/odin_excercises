import './styles/App.css'
import Header from './Header.jsx'
import MainSection from './MainSection.jsx'
import Footer from './Footer.jsx'

function App({shopCart={shopCart}}) {
  
  return (
    <>
      <Header shopCart={shopCart}/>
      <MainSection />
      <Footer />
    </>
  )
}

export default App