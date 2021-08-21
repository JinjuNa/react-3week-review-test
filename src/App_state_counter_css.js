import React from 'react';
import './Counter.css'
class App extends React.Component {
  state = {
    count: 0
  }

  onClickPlus = () => {
    this.setState(currnet => ({count : currnet.count + 1 }))
  }

  onClickMinus = () => {
    this.setState(currnet => ({count : currnet.count - 1 }))
  }

  render() {
    const { count } = this.state
    return (
      <div className="counter-container">
        The number is {count}
        <div>
          <button className="btn-plus" onClick={this.onClickPlus}>plus</button>
          <button className="btn-minus" onClick={this.onClickMinus}>minus</button>
        </div>
        
      </div>
    )
  }
}

export default App