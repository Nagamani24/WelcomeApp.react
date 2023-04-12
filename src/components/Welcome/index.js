// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false, buttonText: 'subscribe'}

  isSubscribed = () => {
    const {isSubscribed} = this.state

    if (isSubscribed === true) {
      this.setState({buttonText: 'Subscribe', isSubscribed: !isSubscribed})
    } else {
      this.setState({buttonText: 'Subscribed', isSubscribed: !isSubscribed})
    }
  }

  render() {
    const {buttonText} = this.state
    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button type="button" onClick={this.isSubscribed}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
