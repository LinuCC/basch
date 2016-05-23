import React, {PropTypes} from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {Table} from 'react-bootstrap'
import i18n from 'i18n-js'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Card from 'libs/components/Bootstrap/Card/Card'
import DropdownLink from '#/DropdownLink'
import Icon from 'react-fontawesome'

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
    deletePerformance: PropTypes.func,
  }

  _rows = () => {
    const {performances, deletePerformance} = this.props
    if(performances && performances.size > 0) {
      return performances.map((performance) => (
        <tr key={performance.get('id')}>
          <td>{performance.getIn(['performer', 'display_name'])}</td>
          <td>
            {
              performance.getIn(['location', 'name']) ||
              i18n.t('backend.elawa.performers_table.no_location')
            }
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
    return <Card>
      <Table striped hover>
        <thead>
          <tr>
            <th>{i18n.t('backend.elawa.performers_table.performer')}</th>
            <th>{i18n.t('backend.elawa.performers_table.location')}</th>
          </tr>
        </thead>
        <tbody>
          {this._rows()}
        </tbody>
      </Table>
    </Card>
  }
}
