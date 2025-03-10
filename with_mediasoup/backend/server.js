#!/usr/bin/env node

process.title = 'safe-connect-server';
//process.env.DEBUG = process.env.DEBUG || '*INFO* *WARN* *ERROR*';

const config = require('./config');

console.log('process.env.DEBUG:', process.env.DEBUG);

const mediasoup = require("mediasoup")
const fs = require('fs');
const https = require('https');
const http = require('http');
const url = require('url');
const protoo = require('protoo-server');
const express = require('express');
const bodyParser = require('body-parser');
const { AwaitQueue } = require('awaitqueue');
const Logger = require('./lib/Logger');

const logger = new Logger();

// Async queue to manage rooms
// @type {AwaitQueue}
const queue = new AwaitQueue();

// Map of Room instances by roomid
// @type {Map<Number, Room}
const rooms = new Map();

// HTTPS server
// @type {https.Server}
let httpsServer;

// Create Express App
let expressApp;

// Protoo Websocket server
// @type {protoo.WebSocketServer}
let protooWebSocketServer;

// mediasoup Workers
// @type {Array<mediasoup.Worker>}
const mediasoupworkers = []

// Index of next mediasoup Worker to use.
// @type {Number}
let nextMediasoupWorkerIdx = 0;

run();

async function run() {
    await runMediasoupWorkers();
}

async function runMediasoupWorkers() {
    const { numWorkers } = config.mediasoup;

    logger.info('running %d mediasoup Workers...', numWorkers);
}
