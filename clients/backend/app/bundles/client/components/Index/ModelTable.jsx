import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {Table} from 'react-bootstrap-4'

// import css from './ModelTable.scss'
import Card, {CardHeader} from 'libs/components/Bootstrap/Card/Card'

export default class ModelTable extends BaseComponent {

  _thead = () => {
    const {columns} = this.props
    if(!columns) return ''
    return <tr>
      {
        Object.entries(columns).map(([dataName, colName], key) => {
          return <th key={key}>{colName}</th>
        })
      }
    </tr>
  }

  _tbody = () => {
    const {rows, columns, customColumn} = this.props
    if(!rows || !columns) return ''
    return rows.map((row, rowKey) => {
      return <tr key={rowKey}>
        {
          Object.entries(columns).map(([dataName, colName], colKey) => {
            if (dataName == 'tableRowCustomColumn') {
              return <td key={colKey}>{customColumn(row)}</td>
            }
            else {
              return <td key={colKey}>{row[dataName] || ''}</td>
            }
          })
        }
      </tr>
    })
  }

  render() {
    return <Card>
      <CardHeader>{this.props.cardHeader}</CardHeader>
      <Table striped>
        <thead>{this._thead()}</thead>
        <thead>{this._tbody()}</thead>
      </Table>
    </Card>
  }
}
