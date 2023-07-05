import reactLogo from './assets/react.svg'
import tsLogo from './assets/ts-logo.svg'
import sassLogo from './assets/sass.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html" target="_blank">
          <img src={tsLogo} className="logo typescript" alt="TypeScript logo" />
        </a>
          <a href="https://sass-lang.com/documentation/syntax/" target="_blank">
          <img src={sassLogo} className="logo sass" alt="Sass logo" />
          </a>
      </div>
      <h1 style={{fontStyle: 'italic'}}>Getting down to <span className={'bismuth'} style={{color: '#9551ff', fontStyle: 'normal'}}>Bismuth</span></h1>
      <div className="card">
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React, TypeScript and Sass logos to learn more
      </p>
    </>
  )
}

export default App
