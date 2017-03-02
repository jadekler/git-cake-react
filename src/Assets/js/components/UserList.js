import React from 'react'
import 'whatwg-fetch'

import User from './User'

export default class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }

    const successAction = json => this.setState({users: json})
    successAction.bind(this)
    fetch('/users')
      .then(function (response) {
        return response.json()
      })
      .then(successAction)
      .catch(function (ex) {
        console.log('parsing failed', ex)
      })
  }

  render() {
    const usersList = this.state.users.map((u, i) => <User key={i} name={u.name} age="19"/>)

    return <div>
      <div>This is the list of users:</div>
      {usersList}
    </div>
  }
}