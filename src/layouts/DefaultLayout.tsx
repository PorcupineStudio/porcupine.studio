import React from 'react'
import Menu from '../components/Menu'

export default function DefaultLayout({ children }) {
  return (
    <div>
      <header>
        <a href="/">
          <h1 className="porcupine">Porc<span className="u">u</span>pi<span className="n">n</span>e</h1>
          <h1 className="studio">Studio</h1>
        </a>
        <Menu />
      </header>
      <div className="content">
        { children }
      </div>
    </div>
  )
}
