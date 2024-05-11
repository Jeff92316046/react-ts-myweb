import Home from '../pages/home'
import About from '../pages/about'
import Contact from '../pages/contact'
import Blog from '../pages/blog'
import Layout from '../components/layout'
import { Route, Routes } from 'react-router-dom'

const Router = () =>{
    return (
        <>
          <Layout></Layout>
          <Routes>
            <Route  path="/" Component={Home} />
            <Route  path="/about" Component={About} />
            <Route  path="/contact" Component={Contact} />
            <Route  path="/blog" Component={Blog} />
          </Routes>
        </>
      )
}

export default Router