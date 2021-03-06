/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var apirequest = require('../../lib/apirequest');
var createAPIRequest = apirequest.createAPIRequest;
var checkRequired = apirequest.checkRequired;
var extend = require('../../lib/utils').extend;

/**
 * Tasks API
 *
 * @classdesc Lets you manage your tasks and task lists.
 * @namespace tasks
 * @version  v1
 * @variation v1
 * @this Tasks
 * @param {object=} options Options for Tasks
 */
function Tasks(options) {

  var self = this;
  this._options = options || {};

  this.tasklists = {

    /**
     * tasks.tasklists.delete
     *
     * @desc Deletes the authenticated user's specified task list.
     *
     * @alias tasks.tasklists.delete
     * @memberOf! tasks(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tasklist - Task list identifier.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tasklist']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/tasks/v1/users/@me/lists/' + params.tasklist,
        method: 'DELETE'
      };

      delete params.tasklist;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * tasks.tasklists.get
     *
     * @desc Returns the authenticated user's specified task list.
     *
     * @alias tasks.tasklists.get
     * @memberOf! tasks(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tasklist - Task list identifier.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tasklist']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/tasks/v1/users/@me/lists/' + params.tasklist,
        method: 'GET'
      };

      delete params.tasklist;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * tasks.tasklists.insert
     *
     * @desc Creates a new task list and adds it to the authenticated user's task lists.
     *
     * @alias tasks.tasklists.insert
     * @memberOf! tasks(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/tasks/v1/users/@me/lists',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * tasks.tasklists.list
     *
     * @desc Returns all the authenticated user's task lists.
     *
     * @alias tasks.tasklists.list
     * @memberOf! tasks(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.maxResults - Maximum number of task lists returned on one page. Optional. The default is 100.
     * @param  {string=} params.pageToken - Token specifying the result page to return. Optional.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/tasks/v1/users/@me/lists',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * tasks.tasklists.patch
     *
     * @desc Updates the authenticated user's specified task list. This method supports patch semantics.
     *
     * @alias tasks.tasklists.patch
     * @memberOf! tasks(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tasklist - Task list identifier.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tasklist']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/tasks/v1/users/@me/lists/' + params.tasklist,
        method: 'PATCH'
      };

      delete params.tasklist;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * tasks.tasklists.update
     *
     * @desc Updates the authenticated user's specified task list.
     *
     * @alias tasks.tasklists.update
     * @memberOf! tasks(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tasklist - Task list identifier.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tasklist']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/tasks/v1/users/@me/lists/' + params.tasklist,
        method: 'PUT'
      };

      delete params.tasklist;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.tasks = {

    /**
     * tasks.tasks.clear
     *
     * @desc Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.
     *
     * @alias tasks.tasks.clear
     * @memberOf! tasks(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.tasklist - Task list identifier.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    clear: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tasklist']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/tasks/v1/lists/' + params.tasklist + '/clear',
        method: 'POST'
      };

      delete params.tasklist;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * tasks.tasks.delete
     *
     * @desc Deletes the specified task from the task list.
     *
     * @alias tasks.tasks.delete
     * @memberOf! tasks(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.task - Task identifier.
     * @param  {string} params.tasklist - Task list identifier.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tasklist', 'task']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/tasks/v1/lists/' + params.tasklist + '/tasks/' + params.task,
        method: 'DELETE'
      };

      delete params.task;
      delete params.tasklist;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * tasks.tasks.get
     *
     * @desc Returns the specified task.
     *
     * @alias tasks.tasks.get
     * @memberOf! tasks(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.task - Task identifier.
     * @param  {string} params.tasklist - Task list identifier.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tasklist', 'task']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/tasks/v1/lists/' + params.tasklist + '/tasks/' + params.task,
        method: 'GET'
      };

      delete params.task;
      delete params.tasklist;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * tasks.tasks.insert
     *
     * @desc Creates a new task on the specified task list.
     *
     * @alias tasks.tasks.insert
     * @memberOf! tasks(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.parent - Parent task identifier. If the task is created at the top level, this parameter is omitted. Optional.
     * @param  {string=} params.previous - Previous sibling task identifier. If the task is created at the first position among its siblings, this parameter is omitted. Optional.
     * @param  {string} params.tasklist - Task list identifier.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tasklist']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/tasks/v1/lists/' + params.tasklist + '/tasks',
        method: 'POST'
      };

      delete params.tasklist;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * tasks.tasks.list
     *
     * @desc Returns all tasks in the specified task list.
     *
     * @alias tasks.tasks.list
     * @memberOf! tasks(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.completedMax - Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
     * @param  {string=} params.completedMin - Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
     * @param  {string=} params.dueMax - Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
     * @param  {string=} params.dueMin - Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
     * @param  {string=} params.maxResults - Maximum number of task lists returned on one page. Optional. The default is 100.
     * @param  {string=} params.pageToken - Token specifying the result page to return. Optional.
     * @param  {boolean=} params.showCompleted - Flag indicating whether completed tasks are returned in the result. Optional. The default is True.
     * @param  {boolean=} params.showDeleted - Flag indicating whether deleted tasks are returned in the result. Optional. The default is False.
     * @param  {boolean=} params.showHidden - Flag indicating whether hidden tasks are returned in the result. Optional. The default is False.
     * @param  {string} params.tasklist - Task list identifier.
     * @param  {string=} params.updatedMin - Lower bound for a task's last modification time (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by last modification time.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tasklist']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/tasks/v1/lists/' + params.tasklist + '/tasks',
        method: 'GET'
      };

      delete params.tasklist;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * tasks.tasks.move
     *
     * @desc Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.
     *
     * @alias tasks.tasks.move
     * @memberOf! tasks(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.parent - New parent task identifier. If the task is moved to the top level, this parameter is omitted. Optional.
     * @param  {string=} params.previous - New previous sibling task identifier. If the task is moved to the first position among its siblings, this parameter is omitted. Optional.
     * @param  {string} params.task - Task identifier.
     * @param  {string} params.tasklist - Task list identifier.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    move: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tasklist', 'task']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/tasks/v1/lists/' + params.tasklist + '/tasks/' + params.task + '/move',
        method: 'POST'
      };

      delete params.task;
      delete params.tasklist;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * tasks.tasks.patch
     *
     * @desc Updates the specified task. This method supports patch semantics.
     *
     * @alias tasks.tasks.patch
     * @memberOf! tasks(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.task - Task identifier.
     * @param  {string} params.tasklist - Task list identifier.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tasklist', 'task']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/tasks/v1/lists/' + params.tasklist + '/tasks/' + params.task,
        method: 'PATCH'
      };

      delete params.task;
      delete params.tasklist;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * tasks.tasks.update
     *
     * @desc Updates the specified task.
     *
     * @alias tasks.tasks.update
     * @memberOf! tasks(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.task - Task identifier.
     * @param  {string} params.tasklist - Task list identifier.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['tasklist', 'task']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/tasks/v1/lists/' + params.tasklist + '/tasks/' + params.task,
        method: 'PUT'
      };

      delete params.task;
      delete params.tasklist;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Tasks object
 * @type Tasks
 */
module.exports = Tasks;