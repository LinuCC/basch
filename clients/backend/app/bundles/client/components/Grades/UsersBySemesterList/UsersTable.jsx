import React from 'react'
import {Table} from 'react-bootstrap-4'
import BaseComponent from 'libs/components/BaseComponent'

export default class UsersTable extends BaseComponent {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    const userRows = this.props.users.map((user)=> {
      if(user.get('semesterId') == this.props.selectedSemester) {
        return (
          <tr key={user.get('id')}>
            <td>{user.get('name')}</td>
          </tr>
        )
      }
    })
    return (
      <Table striped bordered hover condensed>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {userRows}
        </tbody>
      </Table>
    )
  }
}
