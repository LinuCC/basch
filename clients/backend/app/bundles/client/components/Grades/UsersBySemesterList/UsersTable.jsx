import React from 'react'
import {Table, Button} from 'react-bootstrap-4'
import BaseComponent from 'libs/components/BaseComponent'
import Icon from 'react-fontawesome'

const AttendanceInput = (props)=> {
  const id = props.attendance.get('id') || ''
  var id_input = ''
  if(props.attendance.get('id')) {
    id_input = <input type="hidden" name="grade[attendances_attributes][][id]"
      value={props.attendance.get('id')} />
  }
  return <span>
    {id_input}
    <input type="hidden" name={`grade[attendances_attributes][][user_id]`}
      value={props.attendance.get('user_id')} />
    <input type="hidden" name={`grade[attendances_attributes][][semester_id]`}
      value={props.attendance.get('semester_id')} />
    <input type="hidden" name={`grade[attendances_attributes][][_destroy]`}
      value={props.delete} />
  </span>
}

export default class UsersTable extends BaseComponent {

  render() {
    const userRows = this.props.attendances.map((attendance)=> {
      const user = attendance.get('user')
      const isVisible = (
        attendance.get('semester_id') == this.props.selectedSemester &&
        attendance.get('delete') != true
      )
      return (
        <tr key={`${user.get('id')}-${attendance.get('id')}`}
          hidden={!isVisible}>
          <td width='100%'>
            {user.get('display_name')}
            <AttendanceInput
              attendance={attendance}
              delete={attendance.get('delete') || false} />
          </td>
          <td>
            <Button
              bsStyle='danger'
              onClick={this.props.handleRemoveAttendance.bind(null, attendance)}
            >
              <Icon name='minus' fixedWidth/>
            </Button>
          </td>
        </tr>
      )
    })
    return (
      <Table striped bordered hover condensed>
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userRows}
        </tbody>
      </Table>
    )
  }
}
