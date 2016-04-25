import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap-4'
import i18n from 'i18n-js'

import {Sidebar, SidebaredContent} from '#/Layout'
import Card, {CardBlock, CardHeader} from 'libs/components/Bootstrap/Card/Card'
// import css from './Index.scss'

export default class Index extends BaseComponent {
  render() {
    return <div>
      <Sidebar>
        <Card>
          <CardBlock>
            <Button bsSize='large' bsStyle='primary-outline' block>
              {i18n.t(
                'helpers.submit.new', {
                  model: i18n.t('activerecord.models.bs/elawa/event')
                }
              )}
            </Button>
          </CardBlock>
        </Card>
      </Sidebar>
      <SidebaredContent>
        ADSD
      </SidebaredContent>
    </div>
  }
}

const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = (dispatch, props) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
