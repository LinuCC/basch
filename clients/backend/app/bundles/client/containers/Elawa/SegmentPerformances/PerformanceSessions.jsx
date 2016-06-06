import React, {PropTypes} from 'react'
import BaseComponent from 'libs/components/BaseComponent'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from 'actions/elawaSegmentPerformancesActionCreators'
import ImmutablePropTypes from 'react-immutable-proptypes'
import i18n from 'i18n-js'

import Card, {CardHeader, CardBlock} from 'libs/components/Bootstrap/Card/Card'
import Icon from 'react-fontawesome'
import {Button} from 'react-bootstrap'
import BigNotice from '#/BigNotice'

// import css from './PerformanceSessions.scss'

class PerformanceSessions extends BaseComponent {

  static propTypes = {
    performance: ImmutablePropTypes.contains({
      performer: ImmutablePropTypes.contains({
        id: PropTypes.number,
        display_name: PropTypes.string,
      })
    }).isRequired,
  }

  componentDidMount() {

  }

  _sessions = () => {
    const sessions = this.props.data.get('sessions')
    const performance = this.props.data.get('showSessionsOfPerformance')
    if(sessions.length) {

    }
    else {
      return <BigNotice>
        <p>
          {i18n.t(
            'backend.elawa.performance_sessions.no_sessions_for',
            {user: performance.getIn(['performer', 'display_name'])}
          )}
        </p>
        <Button bsStyle='primary-outline'>
          {i18n.t('backend.elawa.performance_sessions.generate')}
        </Button>
      </BigNotice>
    }
  }

  _onClose = () => {
    const performance = this.props.data.get('showSessionsOfPerformance')
    this.props.actions.hidePerformanceSessions(performance)
  }

  render() {
    const performance = this.props.data.get('showSessionsOfPerformance')
    return (
      <Card>
        <CardHeader>
          {i18n.t(
            'backend.elawa.performance_sessions.header',
            {user: performance.getIn(['performer', 'display_name'])}
          )}
          <a className='text-danger pull-right'>
            <Icon name='times' onClick={this._onClose} />
          </a>
        </CardHeader>
        <CardBlock>
          {this._sessions()}
        </CardBlock>
      </Card>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {data: state.elawaSegmentPerformances}
}

const mapDispatchToProps = (dispatch, props) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(PerformanceSessions)
