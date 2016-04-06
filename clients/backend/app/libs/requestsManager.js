import helpers from './fetchHelpers'

const paths = {
  users: '/backend/users',
  grades: '/backend/grades',
  semesters: '/backend/semesters',
}

const li = helpers.loggedIn

export default {

  users: {
    /**
     * Get a user by its id using Ajax.
     * @param {Object} userId - The id of the user to find.
     * @returns {Promise} - Result of the Ajax call.
     */
    find(userId) {
      return li.jsonFetch(`${paths.users}/${userId}.json`)
        .then((data) => data['bs/user'] )
    },
    /**
     * Finds all users which username contains the `username`.
     * @returns {Promise} - Result of ajax call.
     */
    withUsername(username) {
      return li.jsonFetch(
        `${paths.users}.json?with_username=${username}`
      )
    },
  },

  grades: {
    /**
     * Get grade by id using Ajax.
     * @param {Integer} gradeId - The Id of the grade to find.
     * @returns {Promise} - Result of ajax call.
     */
    find(gradeId) {
      return li.jsonFetch(`${paths.grades}/${gradeId}.json`)
        .then((data) => data['bs/grade'] )
    },
    /**
     * Update the grade with the data given.
     * @param {Integer} gradeId - The Id of the grade to update.
     * @param {Object} data - The data to send to the server.
     * @returns {Promise} - Result of ajax call
     */
    update(gradeId, data) {
      return li.jsonUpdate(`${paths.grades}/${gradeId}`, data)
    },
    /**
     * Adds an attendance of the user in the given semester to the grade.
     * @param {Integer} gradeId - The Id of the grade to add the attendance to.
     * @param {Integer} userId - The assigned user.
     * @param {Integer} semesterId - The assigned semester.
     * @returns {Promise} - Result of ajax call.
     */
    // addAttendance(gradeId, userId, semesterId) {
    //   this.update(
    //     gradeId,
    //     {
    //       _method: 'PATCH',
    //       grade: {
    //         id: gradeId,
    //         attendances_attributes: {
    //           grade_id: gradeId,
    //           user_id: userId,
    //           semester_id: semesterId
    //         }
    //       }
    //     }
    //   )
    // }
  },

  semesters: {
    /**
     * Gets all Semesters.
     * @returns {Promise} - Result of the ajax call.
     */
    all() {
      return li.jsonFetch(`${paths.semesters}`)
    },
  }

  /**
   * Retrieve list of entities from server using AJAX call.
   *
   * @returns {Promise} - Result of ajax call.
   */
  // fetchEntities() {
  //   return request({
  //     method: 'GET',
  //     url: API_URL,
  //     responseType: 'json',
  //   });
  // },

  /**
   * Submit new entity to server using AJAX call.
   *
   * @param {Object} entity - Request body to post.
   * @returns {Promise} - Result of ajax call.
   */
  // submitEntity(entity) {
  //   return request({
  //     method: 'POST',
  //     url: API_URL,
  //     responseType: 'json',
  //     headers: {
  //       'X-CSRF-Token': metaTagsManager.getCSRFToken(),
  //     },
  //     data: entity,
  //   });
  // },

};
