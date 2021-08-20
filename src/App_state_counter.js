import React from 'react';

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
      <div>
        The number is {count}
        <div>
          <button onClick={this.onClickPlus}>plus</button>
          <button onClick={this.onClickMinus}>minus</button>
        </div>
        
      </div>
    )
  }
}

export default App