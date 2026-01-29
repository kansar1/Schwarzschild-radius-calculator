import { useState } from 'react'
import './App.css'

function App() {
  const [mass, setMass] = useState<number>(0)
  const [ radius, setRadius] = useState<number | null>(null);

  return (
    <div>
      <h1> Schwarzschild Radius Calculator</h1>
      <div>
        <h3> What is a Schwarzschild Radius?</h3>
        <h4> A Schwarzschild radius is the radius that an object has to be to Become a black hole. The earth's Schwarzschild radius is 90 millimeters.</h4>
      </div>
      <div>
        <form>
          <label> Enter Mass of Object (in Kilograms): </label>
          <input 
          type="number"
          placeholder='Mass in Kilograms'
          value={mass}
          onChange={(e) => {
            const value : number = Number(e.target.value)
            setMass(value)
            setRadius(calculateSwarschildRadius(value))
          }}
          />
        </form>
      </div>
      <div>
        {radius !== null && (
          <div>
            <p> Schwarzchild Radius: <strong>{radius.toLocaleString("en-UK", {maximumFractionDigits: 100})}</strong> millimetres.</p>
            <p> In scientific notation: <strong>{radius.toExponential(2)}</strong> mm</p>
          </div>
        )}
      </div>
    </div>
  )
}

function calculateSwarschildRadius(kilograms : number) : number {
  const gConstant : number = (6.674e-11)*2
  const lightSpeedSquared : number = (2.998e8) ** 2
  var schwarzschildRadius : number = ((kilograms * gConstant)/lightSpeedSquared)*1000

  return schwarzschildRadius
}

export default App
