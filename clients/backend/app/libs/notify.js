import {notificationSystem} from 'libs/components/Notifier'

export default {
  success: (message)=> {
    notificationSystem.addNotification({message: message, level: 'success'})
  },
  info: (info)=> {
    notificationSystem.addNotification({message: message, level: 'info'})
  },
  warning: (warning)=> {
    notificationSystem.addNotification({message: message, level: 'warning'})
  },
  error: (error)=> {
    notificationSystem.addNotification({message: message, level: 'error'})
  }
}
