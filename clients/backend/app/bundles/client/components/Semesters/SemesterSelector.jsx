import React, {PropTypes} from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {Input} from 'react-bootstrap-4'
import request from 'libs/requestsManager'
import Immutable from 'immutable'
import ImmutablePropTypes from 'react-immutable-proptypes'


export default class SemesterSelector extends BaseComponent {

  constructor(props, context) {
    super(props, context)
    this.state = {
      semesters: null
    }
  }

  static propTypes = {
    semesters: ImmutablePropTypes.list.isRequired,
    onChange: PropTypes.func
  }

  componentWillMount() {
    if(!this.props.semesters) {
      request.semesters.all().then((data)=>
        this.setState({semesters: Immutable.fromJS(data)})
      )
    }
  }

  handleChange = (ev) => {
    this.props.onChange(ev.target.value)
  }

  render() {
    const semesters = this.props.semesters || this.state.semesters
    const options = semesters.map((semester)=> {
      const id = semester.get('id')
      const name = semester.get('name')
      return <option key={id} value={id}>{name}</option>
    })
    return (
      <Input
        type="select" onChange={this.handleChange}
        value={this.props.selectedSemester}>
        {options}
      </Input>
    )
  }
}
