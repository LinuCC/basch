const isBrowser = typeof window !== 'undefined'
const swal = isBrowser ? require('sweetalert') : undefined
import i18n from 'i18n-js'

export default {
  deleteConfirm(modelname, onConfirm) {
    swal({
        title: i18n.t('confirm.delete.title'),
        text: i18n.t('confirm.delete.text', {model: modelname}),
        type: 'warning',
        showCancelButton: true,
        cancelButtonText: i18n.t('helpers.cancel'),
        confirmButtonColor: '#DD6B55',
        confirmButtonText: i18n.t('helpers.submit.delete', {model: modelname}),
      },
      onConfirm
    )
  }
}
