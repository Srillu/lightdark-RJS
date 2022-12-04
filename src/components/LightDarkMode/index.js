// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickButton = () => {
    this.setState(prevstate => ({isDarkMode: !prevstate.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const className = isDarkMode ? 'dark-C' : 'light-C'
    const buttonMode = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`container ${className}`}>
          <h1 className="heading">Clik To Change Mode</h1>
          <button className="button" type="button" onClick={this.onClickButton}>
            {buttonMode}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
