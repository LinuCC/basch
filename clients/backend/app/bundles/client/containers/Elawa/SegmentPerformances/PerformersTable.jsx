import React, {PropTypes} from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {Table} from 'react-bootstrap'
import i18n from 'i18n-js'
import ImmutablePropTypes from 'react-immutable-proptypes'
import DropdownLink from '#/DropdownLink'
import Icon from 'react-fontawesome'
import Select from 'react-select'

// import css from './PerformersTable.scss'

const Settings = (props) => {
  const performanceTrans = 'activerecord.models.bs/elawa/segment_performance'
  const {performance, deletePerformance} = props
  return (
    <DropdownLink
      link={<Icon name='cog' size='lg' />}
      id={`dropdown-performance-actions-${performance.get('id')}`}
    >
      <button
        className='dropdown-item'
        onClick={() => {
          deletePerformance(performance.get('id'))
        }}
      >
        {i18n.t('helpers.submit.delete', {model: i18n.t(performanceTrans)})}
      </button>
    </DropdownLink>
  )
}

export default class PerformersTable extends BaseComponent {

  static propTypes = {
    performances: ImmutablePropTypes.list.isRequired,
    deletePerformance: PropTypes.func.isRequired,
    updateLocation: PropTypes.func.isRequired,
    locations: ImmutablePropTypes.list.isRequired,
  }

  _locationOptions = () => {
    let locations = this.props.locations.map((location) => (
      {value: location.get('id'), label: location.get('name')}
    )).toArray()
    locations.unshift({
      value: null,
      label: i18n.t('backend.elawa.performers_table.no_location')
    })
    return locations
  }

  _updateLocation = (performance, data) => {
    const {updateLocation} = this.props
    const locationId = (data !== null) ? data['value'] : null
    updateLocation(performance, locationId)
  }

  _rows = () => {
    const {
      performances, activePerformance, deletePerformance, locations
    } = this.props
    if(performances && performances.size > 0) {
      return performances.map((performance) => (
        <tr key={performance.get('id')}
        className={(
            activePerformance &&
            activePerformance.get('id') == performance.get('id')
          ) ? 'table-success' : ''
        }
        >
          <td onClick={(ev) => this.props.onPerformanceClick(performance)}>
            {performance.getIn(['performer', 'display_name'])}
          </td>
          <td>
            <Select
              value={performance.get('location_id')}
              placeholder={i18n.t('backend.elawa.performers_table.no_location')}
              options={this._locationOptions()}
              onChange={(data) => this._updateLocation(performance, data)}
            />
          </td>
          <td>
            <Settings
              deletePerformance={deletePerformance}
              performance={performance}
            />
          </td>
        </tr>
      ))
    }
    else {
      return ''
    }
  }

  render() {
    return <Table striped hover>
      <thead>
        <tr>
          <th>{i18n.t('backend.elawa.performers_table.performer')}</th>
          <th>{i18n.t('backend.elawa.performers_table.location')}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {this._rows()}
      </tbody>
    </Table>
  }
}
