import React from 'react'
import { Col, Row, Input, Button, Table } from 'react-bootstrap-4'
import Immutable, {Map, List} from 'immutable'
import _ from 'lodash'
import BaseComponent from 'libs/components/BaseComponent'

import css from './UsersBySemesterList.scss';
import SemesterSelector from '#/Semesters/SemesterSelector'
import UsersTable from './UsersTable'

const UserSearch = (props) =>
  <Row>
    <Col md={8}>
      <Input type="text"placeholder="Schüler hinzufügen..."></Input>
    </Col>
    <Col md={4}>
      <Button bsStyle="secondary">hinzufügen</Button>
    </Col>
  </Row>

const ListHeader = (props) =>
  <Row>
    <Col md={3}>
      <SemesterSelector
        semesters={[{id: 1, name: "2015"}, {id: 2, name: "2016"}]}
        selectedSemester={props.selectedSemester}
        onChange={props.onSemesterChanged}
        />
    </Col>
    <Col md={6}></Col>
    <Col md={3}>
      <UserSearch/>
    </Col>
  </Row>

export default class UsersBySemesterList extends BaseComponent {

  constructor(props, context) {
    super(props, context)
    this.state = {
      isSaving: false,
      grade: Map({attendees: []}),
      selectedSemester: 0
    }
  }

  componentWillMount() {
    this.setState(({isSaving, grade, selectedSemester}) => (
      {
        grade: Immutable.fromJS(this.fetchGrade()),
        selectedSemester: 1,
        isSaving: false,
      }
    ))
  }

  fetchGrade() {
    return {
      id: 3,
      level: 4,
      name: 'a',
      attendees: [
        {id: 1, name: 'Pascal Ernst', semesterId: 1},
        {id: 2, name: 'Hans Peter', semesterId: 1},
        {id: 3, name: 'Max Mustr', semesterId: 1},
        {id: 4, name: 'Ulf Olatz', semesterId: 1},
      ]
    }
  }

  fetchSemesters() {
    
  }

  handleSemesterChanged = (semesterId)=> {
    this.setState({
      selectedSemester: semesterId
    })
  }

  render() {
    return (
      <div>
        <ListHeader
          onSemesterChanged={this.handleSemesterChanged}
          selectedSemester={this.state.selectedSemester} />
        <UsersTable
          users={this.state.grade.get('attendees')}
          selectedSemester={this.state.selectedSemester} />
      </div>
    );
  }
}
