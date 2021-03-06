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
 * Google App State API
 *
 * @classdesc The Google App State API.
 * @namespace appstate
 * @version  v1
 * @variation v1
 * @this Appstate
 * @param {object=} options Options for Appstate
 */
function Appstate(options) {

  var self = this;
  this._options = options || {};

  this.states = {

    /**
     * appstate.states.clear
     *
     * @desc Clears (sets to empty) the data for the passed key if and only if the passed version matches the currently stored version. This method results in a conflict error on version mismatch.
     *
     * @alias appstate.states.clear
     * @memberOf! appstate(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.currentDataVersion - The version of the data to be cleared. Version strings are returned by the server.
     * @param  {integer} params.stateKey - The key for the data to be retrieved.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    clear: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['stateKey']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/appstate/v1/states/' + params.stateKey + '/clear',
        method: 'POST'
      };

      delete params.stateKey;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * appstate.states.delete
     *
     * @desc Deletes a key and the data associated with it. The key is removed and no longer counts against the key quota. Note that since this method is not safe in the face of concurrent modifications, it should only be used for development and testing purposes. Invoking this method in shipping code can result in data loss and data corruption.
     *
     * @alias appstate.states.delete
     * @memberOf! appstate(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.stateKey - The key for the data to be retrieved.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['stateKey']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/appstate/v1/states/' + params.stateKey,
        method: 'DELETE'
      };

      delete params.stateKey;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * appstate.states.get
     *
     * @desc Retrieves the data corresponding to the passed key. If the key does not exist on the server, an HTTP 404 will be returned.
     *
     * @alias appstate.states.get
     * @memberOf! appstate(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.stateKey - The key for the data to be retrieved.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['stateKey']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/appstate/v1/states/' + params.stateKey,
        method: 'GET'
      };

      delete params.stateKey;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * appstate.states.list
     *
     * @desc Lists all the states keys, and optionally the state data.
     *
     * @alias appstate.states.list
     * @memberOf! appstate(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {boolean=} params.includeData - Whether to include the full data in addition to the version number
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/appstate/v1/states',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * appstate.states.update
     *
     * @desc Update the data associated with the input key if and only if the passed version matches the currently stored version. This method is safe in the face of concurrent writes. Maximum per-key size is 128KB.
     *
     * @alias appstate.states.update
     * @memberOf! appstate(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.currentStateVersion - The version of the app state your application is attempting to update. If this does not match the current version, this method will return a conflict error. If there is no data stored on the server for this key, the update will succeed irrespective of the value of this parameter.
     * @param  {integer} params.stateKey - The key for the data to be retrieved.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['stateKey']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/appstate/v1/states/' + params.stateKey,
        method: 'PUT'
      };

      delete params.stateKey;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Appstate object
 * @type Appstate
 */
module.exports = Appstate;