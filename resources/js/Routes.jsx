import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TestContextProvider } from './context'
import Header from './views/header/'
import Footer from './views/footer/'

const Home = lazy(() =>
  import(/* webpackChunkName: 'home' */ '~/views/pages/Home')
)

export default () => {
  return (
    <TestContextProvider>
      <Header />
      <Suspense fallback={<></>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
      <Footer />
    </TestContextProvider>
  )
}
