import React from 'react'
import {Grid} from 'react-bootstrap-4'
import BaseComponent from 'libs/components/BaseComponent'

import css from './MainSection.scss'

export default class MainSection extends BaseComponent {
  render() {
    return <Grid className={css.main} fluid>
      {this.props.children}
    </Grid>
  }
}
