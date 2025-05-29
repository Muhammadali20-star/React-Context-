import React, { lazy } from 'react'
import { Routes, Route,  } from 'react-router-dom'
import { Suspense } from '../utils'
const Home = lazy(() => import("./home/Home"))
const ProductDetail = lazy(() => import("./product-detail/ProductDetail"))
const Layout = lazy(() => import("./layout/Layout"))
const Heart = lazy(() => import("./heart/Heart"))

const MainRouters = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Suspense><Layout/></Suspense>}>
          <Route path='/' element={<Suspense><Home/></Suspense>}/>
          <Route path='/product/:id' element={<Suspense><ProductDetail/></Suspense>}/>
          <Route path='/about' element={<Suspense><Heart/></Suspense>}/>
        </Route>
      </Routes>
    </>
  )
}

export default React.memo(MainRouters)