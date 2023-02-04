// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  mango = () => {
    this.setState(prevCount => ({mangoCount: prevCount.mangoCount + 1}))
  }

  banana = () => {
    this.setState(prevCount => ({bananaCount: prevCount.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="main-container">
        <div className="card">
          <h1 className="heading">
            Bob ate <span className="span-element">{mangoCount}</span> mangoes
            <span className="span-element"> {bananaCount}</span> bananas
          </h1>
          <div className="image-containers">
            <div className="mango-container-1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="mango-image"
              />
              <button
                type="submit"
                className="mango-button"
                onClick={this.mango}
              >
                Eat Mango
              </button>
            </div>

            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="mango-image"
              />
              <button
                type="submit"
                className="mango-button"
                onClick={this.banana}
              >
                Eat banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
