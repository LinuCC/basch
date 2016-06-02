import React, {PropTypes} from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {connect} from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Card, {CardHeader, CardBlock} from 'libs/components/Bootstrap/Card/Card'
import {Button} from 'react-bootstrap'
import i18n from 'i18n-js'

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

  render() {
    const performance = this.props.data.get('showSessionsOfPerformance')
    return (
      <Card>
        <CardHeader>
          {i18n.t(
            'backend.elawa.performance_sessions.header',
            {user: performance.getIn(['performer', 'display_name'])}
          )}
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
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PerformanceSessions)
