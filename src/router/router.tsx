import Home from '../pages/home'
import About from '../pages/about'
import Contact from '../pages/contact'
import Blog from '../pages/blog'
import { Route, Routes } from 'react-router-dom'

const Router = () =>{
    return (
        <> 
          <Routes>
            <Route  path="/" Component={Home} />
            <Route  path="/about" Component={About} />
            <Route  path="/contact" Component={Contact} />
            <Route  path="/blogs" Component={Blog} />
          </Routes>
        </>
      )
}

export default Router