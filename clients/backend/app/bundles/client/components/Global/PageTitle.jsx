import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {Col} from 'react-bootstrap-4'

import css from './PageTitle.scss'
import Breadcrumbs from './Breadcrumbs'

export default class PageTitle extends BaseComponent {
  render() {
    const {title} = this.props
    return (
      <div className={css.page_title}>
        <Col lg={10}>
          <h2 className={css.heading}>{title}</h2>
          <Breadcrumbs items={[]} />
        </Col>
      </div>
    )
  }
}
