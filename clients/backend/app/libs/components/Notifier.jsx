import React from 'react'
import NotificationSystem from 'react-notification-system'

/**
 * UGLY Hack ensuring that I can access the notificationSystem externally.
 * Maybe I am just too stupid right now, but it works for now.
 * Do not generate multiple Notifier-Classes.
 */
export var notificationSystem = "Not initialized yet."

export default class Notifier extends React.Component {
  _notificationSystem = null

  // _addNotification: function(event) {
  //   event.preventDefault();
  //   this._notificationSystem.addNotification({
  //     message: 'Notification message',
  //     level: 'success'
  //   });
  // },

  componentDidMount = ()=> {
    this._notificationSystem = this.refs.notificationSystem;
    // Override the Module-Variable to allow exporting it
    notificationSystem = this._notificationSystem;
  }

  render = ()=> {
    return (
      <div>
        <NotificationSystem ref="notificationSystem" />
      </div>
      );
  }
}
