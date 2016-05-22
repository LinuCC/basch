import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {Table} from 'react-bootstrap'
import i18n from 'i18n-js'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Card from 'libs/components/Bootstrap/Card/Card'

// import css from './PerformersTable.scss'

export default class PerformersTable extends BaseComponent {

  static propTypes = {
    performances: ImmutablePropTypes.list.isRequired,
  }

  _rows = () => {
    if(this.props.performances && this.props.performances.size > 0) {
      return this.props.performances.map((performance) => (
        <tr>
          <td>{performance.getIn(['performer', 'display_name'])}</td>
          <td>
            {
              performance.getIn(['location', 'name']) ||
              i18n.t('backend.elawa.performers_table.no_location')
            }
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
