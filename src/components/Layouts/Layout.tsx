import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({children}: any) {
  return (
    <html lang="en">
      <body className={`text-black bg-white`}>
      <Header/>
      <main className={`min-h-screen flex flex-col flex-1 w-full`}>
      {children}
      </main>
      <Footer/>
      </body>
    </html>
  )
}

export default Layout
