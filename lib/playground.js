"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
index_1.default.connectToScorebot({ id: 2330348, onScoreboardUpdate: function (data) {
        console.log('scoreboard update!');
        console.dir(data, { depth: null });
    }, onLogUpdate: function (data) {
        console.log('log update!');
        console.dir(data, { depth: null });
    }
});
process
    .on('unhandledRejection', function (reason, p) {
    console.log('##########################################');
    console.error(reason, 'Unhandled Rejection at Promise', p);
    console.log('##########################################');
});
