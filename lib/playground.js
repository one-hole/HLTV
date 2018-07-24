"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
index_1.default.getMatch({ id: 2324845 }).then(function (res) {
    console.log(res);
});
process
    .on('unhandledRejection', function (reason, p) {
    console.log('##########################################');
    console.error(reason, 'Unhandled Rejection at Promise', p);
    console.log('##########################################');
});
