import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import { Col, Row } from 'react-bootstrap-4'

import UserSearch from './UserSearch'
import SemesterSelector from '#/Semesters/SemesterSelector'

export default class ListHeader extends BaseComponent {
  render() {
    return <Row>
      <Col md={3} >
        <SemesterSelector
          semesters={this.props.semesters}
          selectedSemester={this.props.selectedSemester}
          onChange={this.props.onSemesterChanged}
          />
      </Col>
      <Col md={6}></Col>
      <Col md={3}>
        <UserSearch onUserSelected={this.props.onAddUser} />
      </Col>
    </Row>
  }
}
