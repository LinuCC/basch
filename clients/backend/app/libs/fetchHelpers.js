import metaTagsManager from './metaTagsManager';
import _ from 'lodash'

const acceptJson = {headers: {'Accept': 'application/json'}}

const allJson = {
  headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
}

const method = {
  put: {method: 'PUT'},
  patch: {method: 'PATCH'},
  post: {method: 'POST'},
  delete: {method: 'DELETE'},
}

const loginData = {credentials: 'same-origin'}

const csrfToken = ()=> {
  return {'headers': {'X-CSRF-Token': metaTagsManager.getCSRFToken()}}
}

const check = (response) => {
  if(response.status >= 200 && response.status < 300) {
    return response
  }
  else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

const parseJson = (response)=> { return response.json() }

export default {

  // TODO All fetch-stuff should be json, we dont need `fetch` vs `jsonFetch`
  loggedIn: {

    create: (url, data, options) => {
      const json = JSON.stringify(data)
      return fetch(
        url,
        _.merge(
          options, loginData, allJson, method.post, csrfToken(), {body: json}
        )
      ).then(check)
      .then(parseJson)
    },

    fetch: (url, options)=> {
      return fetch(url, _.merge(options, loginData))
    },

    jsonFetch: (url, options)=> {
      return fetch(url, _.merge(options, loginData, acceptJson))
        .then(check)
        .then(parseJson)
    },

    update: (url, data, options)=> {
      const json = JSON.stringify(data)
      return fetch(
        url, _.merge(
          options, loginData, allJson, method.patch, csrfToken(), {body: json}
        )
      ).then(check)
        .then(parseJson)
    },

    delete: (url, options) => {
      return fetch(
        url,
        _.merge(
          options, loginData, allJson, method.delete, csrfToken()
        )
      ).then(check)
        .then(parseJson)
    }
  }

}
