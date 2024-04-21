import { Header } from '../components/header'
import { Footer } from '../components/footer'

interface AppProps {
  children: any
}

function App( props: AppProps) {

  return (
    <>
      <Header />
      <div className='container'>{ props.children }</div>
      <Footer />
    </>
  )
}

export default App
