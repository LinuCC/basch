import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {Col, Row} from 'react-bootstrap-4'
import Breadcrumbs from 'react-breadcrumbs'

import css from './PageTitle.scss'

export default class PageTitle extends BaseComponent {
  render() {
    const {routes} = this.props
    console.warn(this.props.routes)
    const lastRoute = routes[routes.length - 1]
    const title = (lastRoute) ? lastRoute.name : '???'
    return (
      <div className={css.page_title}>
        <Row>
          <Col lg={10}>
            <h2 className={css.heading}>{title}</h2>
            {/*<Breadcrumbs
              wrapperElement='ol'
              itemElement='li'
              customClass={css.breadcrumbs}
              itemClass='asdas'
              wrapperClass=''
              routes={this.props.routes}
              params={this.props.params}
              separator={null}
              />*/}
          </Col>
        </Row>
      </div>
    )
  }
}
