import React, {PropTypes} from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {Input} from 'react-bootstrap-4'


export default class SemesterSelector extends BaseComponent {

  constructor(props, context) {
    super(props, context)
  }

  static propTypes = {
    semesters: PropTypes.array.isRequired,
    onChange: PropTypes.func
  }

  handleChange = (ev) => {
    this.props.onChange(ev.target.value)
  }

  render() {
    const {semesters} = this.props
    const options = semesters.map((semester)=> {
      const {id, name} = semester
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
