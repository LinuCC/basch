import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {Table} from 'react-bootstrap'
import i18n from 'i18n-js'
import ImmutablePropTypes from 'react-immutable-proptypes'

// import css from './PerformersTable.scss'

export default class PerformersTable extends BaseComponent {

  static propTypes = {
    performances: ImmutablePropTypes.list.isRequired,
  }

  _rows = () => {
    if(this.props.performances && this.props.performances.size > 0) {
      this.props.performances.map((performance) => (
        <tr>
          <td>{performance.getIn(['performer', 'display_name'])}</td>
          <td>{performance.getIn(['location', 'name'])}</td>
        </tr>
      ))
    }
    else {
      return ''
    }
  }

  render() {
    return <div>
      <Table>
        <thead>
          <tr>
            <th>{i18n.t('backend.elawa.performers_table.performer')}</th>
            <th>{i18n.t('backend.elawa.performers_table.room')}</th>
          </tr>
        </thead>
        <tbody>
          {this._rows()}
        </tbody>
      </Table>
    </div>
  }
}
