const debug = require('debug')

const APP_NAME = 'safe_connect_server';

class Logger {
    constructor(prefix) {
        if (prefix) {
            this._debug = debug(`${APP_NAME}:${prefix}`);
            this._info = debug(`${APP_NAME}:INFO:${prefix}`);
            this._warn = debug(`${APP_NAME}:WARN:${prefix}`);
            this._error = debug(`${APP_NAME}:ERROR:${prefix}`);
        } else {
            this._debug = debug(`${APP_NAME}`);
            this._info = debug(`${APP_NAME}:INFO`);
            this._warn = debug(`${APP_NAME}:WARN`);
            this._error = debug(`${APP_NAME}:ERROR`);
        }
    }
    get debug() {
        return this._debug;
    }
    get info() {
        return this._info;
    }
    get warn() {
        return this._warn;
    }
    get error() {
        return this._error;
    }
}

module.exports = Logger;
