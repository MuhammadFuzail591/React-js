import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from '../components/Layout'
import Home from '../components/Home'
import Contact from '../components/Contact'
import { lazy, Suspense } from 'react'

const About = lazy(() => wait(2000).then(() => import("../components/About")))
function App () {

  return (
    <Router>
      <Layout>
          <Suspense fallback={<h1 className='text-xl'>LOADING.....</h1>}>
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            </Routes>
          </Suspense>
      </Layout>
    </Router>
  )
}

function wait(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    },time)
  })
}

export default App
