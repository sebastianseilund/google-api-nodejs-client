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
 * DoubleClick Search API
 *
 * @classdesc Report and modify your advertising data in DoubleClick Search (for example, campaigns, ad groups, keywords, and conversions).
 * @namespace doubleclicksearch
 * @version  v2
 * @variation v2
 * @this Doubleclicksearch
 * @param {object=} options Options for Doubleclicksearch
 */
function Doubleclicksearch(options) {

  var self = this;
  this._options = options || {};

  this.conversion = {

    /**
     * doubleclicksearch.conversion.get
     *
     * @desc Retrieves a list of conversions from a DoubleClick Search engine account.
     *
     * @alias doubleclicksearch.conversion.get
     * @memberOf! doubleclicksearch(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.adGroupId - Numeric ID of the ad group.
     * @param  {string=} params.adId - Numeric ID of the ad.
     * @param  {string} params.advertiserId - Numeric ID of the advertiser.
     * @param  {string} params.agencyId - Numeric ID of the agency.
     * @param  {string=} params.campaignId - Numeric ID of the campaign.
     * @param  {string=} params.criterionId - Numeric ID of the criterion.
     * @param  {integer} params.endDate - Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
     * @param  {string} params.engineAccountId - Numeric ID of the engine account.
     * @param  {integer} params.rowCount - The number of conversions to return per call.
     * @param  {integer} params.startDate - First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
     * @param  {integer} params.startRow - The 0-based starting index for retrieving conversions results.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['agencyId', 'advertiserId', 'engineAccountId', 'endDate', 'rowCount', 'startDate', 'startRow']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/doubleclicksearch/v2/agency/' + params.agencyId + '/advertiser/' + params.advertiserId + '/engine/' + params.engineAccountId + '/conversion',
        method: 'GET'
      };

      delete params.advertiserId;
      delete params.agencyId;

      delete params.engineAccountId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * doubleclicksearch.conversion.insert
     *
     * @desc Inserts a batch of new conversions into DoubleClick Search.
     *
     * @alias doubleclicksearch.conversion.insert
     * @memberOf! doubleclicksearch(v2)
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
        url: 'https://www.googleapis.com/doubleclicksearch/v2/conversion',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * doubleclicksearch.conversion.patch
     *
     * @desc Updates a batch of conversions in DoubleClick Search. This method supports patch semantics.
     *
     * @alias doubleclicksearch.conversion.patch
     * @memberOf! doubleclicksearch(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.advertiserId - Numeric ID of the advertiser.
     * @param  {string} params.agencyId - Numeric ID of the agency.
     * @param  {integer} params.endDate - Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
     * @param  {string} params.engineAccountId - Numeric ID of the engine account.
     * @param  {integer} params.rowCount - The number of conversions to return per call.
     * @param  {integer} params.startDate - First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
     * @param  {integer} params.startRow - The 0-based starting index for retrieving conversions results.
     * @param  {object} params.resource - Request body data
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['advertiserId', 'agencyId', 'endDate', 'engineAccountId', 'rowCount', 'startDate', 'startRow']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/doubleclicksearch/v2/conversion',
        method: 'PATCH'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * doubleclicksearch.conversion.update
     *
     * @desc Updates a batch of conversions in DoubleClick Search.
     *
     * @alias doubleclicksearch.conversion.update
     * @memberOf! doubleclicksearch(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/doubleclicksearch/v2/conversion',
        method: 'PUT'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * doubleclicksearch.conversion.updateAvailability
     *
     * @desc Updates the availabilities of a batch of floodlight activities in DoubleClick Search.
     *
     * @alias doubleclicksearch.conversion.updateAvailability
     * @memberOf! doubleclicksearch(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    updateAvailability: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/doubleclicksearch/v2/conversion/updateAvailability',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.reports = {

    /**
     * doubleclicksearch.reports.generate
     *
     * @desc Generates and returns a report immediately.
     *
     * @alias doubleclicksearch.reports.generate
     * @memberOf! doubleclicksearch(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    generate: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/doubleclicksearch/v2/reports/generate',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * doubleclicksearch.reports.get
     *
     * @desc Polls for the status of a report request.
     *
     * @alias doubleclicksearch.reports.get
     * @memberOf! doubleclicksearch(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.reportId - ID of the report request being polled.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['reportId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/doubleclicksearch/v2/reports/' + params.reportId,
        method: 'GET'
      };

      delete params.reportId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * doubleclicksearch.reports.getFile
     *
     * @desc Downloads a report file.
     *
     * @alias doubleclicksearch.reports.getFile
     * @memberOf! doubleclicksearch(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {integer} params.reportFragment - The index of the report fragment to download.
     * @param  {string} params.reportId - ID of the report.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getFile: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['reportId', 'reportFragment']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/doubleclicksearch/v2/reports/' + params.reportId + '/files/' + params.reportFragment,
        method: 'GET'
      };

      delete params.reportFragment;
      delete params.reportId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * doubleclicksearch.reports.request
     *
     * @desc Inserts a report request into the reporting system.
     *
     * @alias doubleclicksearch.reports.request
     * @memberOf! doubleclicksearch(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    request: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/doubleclicksearch/v2/reports',
        method: 'POST'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.savedColumns = {

    /**
     * doubleclicksearch.savedColumns.list
     *
     * @desc Retrieve the list of saved columns for a specified advertiser.
     *
     * @alias doubleclicksearch.savedColumns.list
     * @memberOf! doubleclicksearch(v2)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.advertiserId - DS ID of the advertiser.
     * @param  {string} params.agencyId - DS ID of the agency.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['agencyId', 'advertiserId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/doubleclicksearch/v2/agency/' + params.agencyId + '/advertiser/' + params.advertiserId + '/savedcolumns',
        method: 'GET'
      };

      delete params.advertiserId;
      delete params.agencyId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Doubleclicksearch object
 * @type Doubleclicksearch
 */
module.exports = Doubleclicksearch;