"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
index_1.default.getMatchMapStats({ id: 58109 }).then(function (res) {
    console.log(JSON.stringify(res));
}).catch(function (err) {
    console.log(err);
});
process
    .on('unhandledRejection', function (reason, p) {
    console.log('##########################################');
    console.error(reason, 'Unhandled Rejection at Promise', p);
    console.log('##########################################');
});
