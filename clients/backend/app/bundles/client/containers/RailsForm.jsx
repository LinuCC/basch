import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import tagsManager from 'libs/metaTagsManager'
import {connect} from 'react-redux'

class RailsForm extends BaseComponent {

  _parseMethod = () => {
    const {method} = this.props
    if(method && method != 'GET') {
      return {
        hiddenMethod: <input type='hidden' name='_method' value={method} />,
        formMethod: 'POST',
      }
    }
    else {
      return {hiddenMethod: '', formMethod: 'GET'}
    }
  }

  render() {
    const {method, action, className} = this.props
    const {hiddenMethod, formMethod} = this._parseMethod()
    return <form className={className} action={action} method={formMethod}>
      <input
        type='hidden' name='authenticity_token'
        value={this.props.csrfToken} />
      {hiddenMethod}
      {this.props.children}
    </form>
  }
}

const mapStateToProps = (state) => {
  return {csrfToken: state.meta.get('csrfToken')}
}

export default connect(
  mapStateToProps
)(RailsForm);
