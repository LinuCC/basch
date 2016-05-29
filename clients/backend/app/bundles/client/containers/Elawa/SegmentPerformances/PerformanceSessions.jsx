import React, {PropTypes} from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import {connect} from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Card, {CardHeader, CardBlock} from 'libs/components/Bootstrap/Card/Card'
import i18n from 'i18n-js'

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

  render() {
    const {performance} = this.props
    return (
      <Card>
        <CardHeader>
          {i18n.t(
            'backend.elawa.performance_sessions.header',
            {user: performance.getIn(['performer', 'display_name'])}
          )}
        </CardHeader>
        <CardBlock></CardBlock>
      </Card>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...props
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PerformanceSessions)
