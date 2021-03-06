import React from 'react'
import Icon from 'react-fontawesome'
import BaseComponent from 'libs/components/BaseComponent'
import { Col, Row, Button, Tooltip, OverlayTrigger } from 'react-bootstrap-4'
import notify from 'libs/notify'

import css from './UserSearch.scss'
import UserSearchSelect from '#/Users/UserSearchSelect'

export default class UserSearch extends BaseComponent {
  constructor(props) {
    super(props)
    this.state = {
      selectedUserId: null
    }
  }

  onUserSelected = (userId) => {
    this.setState({selectedUserId: userId})
  }

  onDeselection = () => this.setState({selectedUserId: null})

  onUserSubmit = () => {
    if(this.state.selectedUserId) {
      this.props.onUserSelected(this.state.selectedUserId)
    }
  }

  render() {
    return <div className={css.container}>
      <div className={css.select}>
        <UserSearchSelect
          onUserSelected={this.onUserSelected}
          onDeselection={this.onDeselection}
          />
      </div>
      <div className={css.button}>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id='addUserTooltip'>Schüler hinzufügen</Tooltip>}>
          <Button
            bsStyle="secondary"
            onClick={this.onUserSubmit}
            disabled={this.state.selectedUserId == false} >
            <Icon name='plus' fixedWidth/>
          </Button>
        </OverlayTrigger>
      </div>
    </div>
  }

}
