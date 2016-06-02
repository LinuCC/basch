import React from 'react'
import BaseComponent from 'libs/components/BaseComponent'
import Select from 'react-select'
import request from 'libs/requestsManager'
import notify from 'libs/notify'
import i18n from 'i18n-js'

export default class UserSearchSelect extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  search = (value, callback)=> {
    return request.users.withUsername(value)
      .then((data)=> data['bs/users'])
      .then((users)=> {
        const data = users.map((user)=> {
          return {value: user.id, label: user.username}
        })
        return { options: data };
      })
      .catch((error)=> {
        notify.error('Konnte die Benutzer nicht abrufen.')
      })
  }

  handleChange = (data)=> {
    const newValue = (data) ? data.value : null
    this.setState({value: newValue})
    if(newValue) {
      if(this.props.onUserSelected) {
        this.props.onUserSelected(newValue)
      }
    }
    else {
      if(this.props.onDeselection) {
        this.props.onDeselection()
      }
    }
  }

  render() {
    return <Select.Async
      value={this.state.value}
      loadOptions={this.search}
      onChange={this.handleChange}
      placeholder={
        this.props.placeholder || i18n.t('backend.user_search_select.prompt')
      }
    />
  }
}
