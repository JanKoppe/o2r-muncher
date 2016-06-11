/*
 * (C) Copyright 2016 Jan Koppe.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
var c = {};
c.version = {};
c.net = {};
c.mongo = {};
c.fs = {};
var env = process.env;

// Information about muncher
c.version.major  = 0;
c.version.minor  = 1;
c.version.bug    = 0;
c.version.api    = 1;

// network & database
c.net.port         = env.MUNCHER_PORT || 8080;
c.mongo.location   = 'mongodb://localhost/';
c.mongo.collection = 'muncher';
c.mongo.creds      = {};

// fs paths
c.fs.base       = env.MUNCHER_BASEPATH || '/tmp/muncher/';
c.fs.incoming   = c.fs.base + 'incoming/';
c.fs.compendium = c.fs.base + 'compendium/';
c.fs.job        = c.fs.base + 'job/';
c.fs.delete_inc = true;

// muncher behaviour & defaults
c.list_limit           = 100; // amount of results per page
c.id_length            = 5;   // length of job & compendium ids [0-9,a-z,A-Z]

module.exports = c;