/*
 * Copyright 2018 IBM Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Configuration of the local docker container
 *
 */
module.exports = {
  ExposedPorts: {
    '8080/tcp': {}, // 8080 is the port for api communications
    '5858/tcp': {} // 5858 is the port for node debugger
  },
  HostConfig: {
    PortBindings: {
      '8080/tcp': [
        { 'HostPort': '8080' }
      ],
      '5858/tcp': [
        { 'HostPort': '5858' }
      ]
    }
  },
  name: 'shell-local'
}
