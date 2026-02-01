import { useState } from 'react'
import './App.css'

function App() {
  const [mass, setMass] = useState<number | null>(null);
  const [ radius, setRadius] = useState<number | null>(null);

  return (
    <div>
      <div className="app-header">
        <header>
          <a href="https://github.com/kansar1/Schwarzschild-radius-calculator" target='_blank' rel='noopener noreferrer'>
            <img src="Space logo.png" alt="Space Logo" className="app-logo"  />
          </a>
          <span className="header-title">Black Hole Calculator</span>
        </header>
      </div>
      <div id="root-content">
      <h1> Schwarzschild Radius Calculator</h1>
      <div>
        <h3> What is a Schwarzschild Radius?</h3>
        <h4> A Schwarzschild radius is the radius that an object has to be to become a black hole. The earth's Schwarzschild radius is 90 millimeters.</h4>
      </div>
      <div>
        <form>
          <label> Enter Mass of Object (in Kilograms): </label>
          <input
            type="number"
            placeholder="Mass in kg (e.g 5.972e24 for Earth)"
            value={mass ?? ""}
            onChange={(e) => {
              const value = e.target.valueAsNumber;
              if (!isNaN(value)) {
                setMass(value);
                setRadius(calculateSchwarzschildRadius(value));
              } else {
                setMass(null);
                setRadius(null);
              }
            }}
          />
        </form>
      </div>
      <div>
        {radius !== null && (
          <div>
            <p> Schwarzschild Radius: <strong>{radius.toLocaleString("en-UK", {maximumFractionDigits: 100})}</strong> millimetres.</p>
            <p> In scientific notation: <strong>{radius.toExponential(2)}</strong> mm</p>
          </div>
        )}
      </div>
      <hr></hr>
      <div>
        <h3> The maths behind this calculator:</h3>
        <h4> The formula used to calculate the Schwarzschild radius is: R<sub>s</sub> = 2×G×M/c<sup>2</sup> </h4>
        <h4> Where: </h4>
        <ul>
          <li> <strong>R<sub>s</sub></strong> = Schwarzschild radius </li>
          <li> <strong>G</strong> = Gravitational constant (6.674×10<sup>-11</sup> m<sup>3</sup> kg<sup>-1</sup> s<sup>-2</sup>) </li>
          <li> <strong>M</strong> = Mass of the object in kilograms </li>
          <li> <strong>c</strong> = Speed of light in a vacuum (299,792,458 metres per second) </li>
        </ul>
        <h4> The result is then converted from metres to millimetres by multiplying it by 1000. </h4>
      </div>
    </div>
  </div>
  )
}

function calculateSchwarzschildRadius(kilograms : number) : number {
  const gConstant : number = (6.674e-11)*2
  const lightSpeedSquared : number = (299792458) ** 2
  var schwarzschildRadius : number = ((kilograms * gConstant)/lightSpeedSquared)*1000

  return schwarzschildRadius
}

export default App
