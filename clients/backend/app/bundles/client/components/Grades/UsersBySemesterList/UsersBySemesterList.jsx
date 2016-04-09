import React from 'react'
import { Col, Row, Input, Button, Table } from 'react-bootstrap-4'
import Immutable, {Map, List} from 'immutable'
import _ from 'lodash'
import BaseComponent from 'libs/components/BaseComponent'
import request from 'libs/requestsManager'
import i18n from 'i18n-js'

import css from './UsersBySemesterList.scss';
import UsersTable from './UsersTable'
import ListHeader from './ListHeader'

export default class UsersBySemesterList extends BaseComponent {

  constructor(props) {
    super(props)
    this.state = {
      grade: Map(),
      semesters: List(),
      attendances: List(),
      selectedSemester: 0
    }
  }

  componentWillMount() {
    this.fetchGrade()
    this.fetchSemesters()
  }

  fetchGrade() {
    if(this.props.gradeId) {
      var grade = request.grades.find(this.props.gradeId)
        .then((grade)=>
          this.setState({
            grade: Immutable.fromJS(grade),
            attendances: Immutable.fromJS(grade.attendances)
          })
        )
    }
  }

  fetchSemesters() {
    return request.semesters.all()
      .then((semesters)=> {
        var stateChange = {semesters: Immutable.fromJS(semesters)}
        if(semesters.length) {
          stateChange = _.merge(
            stateChange, {selectedSemester: _.first(semesters).id}
          )
        }
        this.setState(stateChange)
      })
  }

  handleAddAttendance = (userId)=> {
    const alreadyExists = this.state.attendances.findIndex((attendance) => {
      return (
        attendance.get('user_id') == userId &&
        attendance.get('semester_id') == this.state.selectedSemester
      )
    })
    if(alreadyExists > -1) {
      const newAttendances = this.state.attendances.setIn(
        [alreadyExists, 'delete'], false
      )
      this.setState({attendances: newAttendances})
    }
    else {
      request.users.find(userId)
        .then((user) => {
          const newAttendances = this.state.attendances.push(Map({
            user: Immutable.fromJS(user),
            user_id: user.id,
            semester_id: this.state.selectedSemester
          }))
          this.setState({attendances: newAttendances})
        })
    }
  }

  handleSemesterChanged = (semesterId)=> {
    this.setState({
      selectedSemester: semesterId
    })
  }

  handleRemoveAttendance = (attendanceToRemove) => {
    const attendances = this.state.attendances
    const index = attendances.findIndex((attendance) => {
      return attendance === attendanceToRemove
    })
    var newAttendances = null
    // If attendance has an id, its already persisted - mark it as to delete
    if(attendanceToRemove.get('id')) {
      newAttendances = attendances.set(
        index, attendanceToRemove.set('delete', true)
      )
    }
    // If not, just remove it
    else {
      if(index) {
        newAttendances = attendances.delete(index)
      }
    }
    this.setState({attendances: newAttendances})
  }

  render() {
    return (
      <fieldset>
        <legend>{i18n.t('activerecord.attributes.bs/grade.attendance.one')}</legend>
        <ListHeader
          onSemesterChanged={this.handleSemesterChanged}
          onAddUser={this.handleAddAttendance}
          selectedSemester={this.state.selectedSemester}
          semesters={this.state.semesters} />
        <UsersTable
          attendances={this.state.attendances || []}
          selectedSemester={this.state.selectedSemester}
          handleRemoveAttendance={this.handleRemoveAttendance}/>
      </fieldset>
    );
  }
}
