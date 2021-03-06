"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var configDefaults = require("./utils/constants");
var connectToScorebot_1 = require("./endpoints/connectToScorebot");
var getMatch_1 = require("./endpoints/getMatch");
var getMatches_1 = require("./endpoints/getMatches");
var getMatchesStats_1 = require("./endpoints/getMatchesStats");
var getMatchMapStats_1 = require("./endpoints/getMatchMapStats");
var getRecentThreads_1 = require("./endpoints/getRecentThreads");
var getResults_1 = require("./endpoints/getResults");
var getStreams_1 = require("./endpoints/getStreams");
var getTeamRanking_1 = require("./endpoints/getTeamRanking");
var getTeam_1 = require("./endpoints/getTeam");
var getTeamStats_1 = require("./endpoints/getTeamStats");
var getPlayer_1 = require("./endpoints/getPlayer");
var HLTVFactory = (function () {
    function HLTVFactory(config) {
        this.config = config;
        this.connectToScorebot = connectToScorebot_1.default(this.config);
        this.getMatch = getMatch_1.default(this.config);
        this.getMatches = getMatches_1.default(this.config);
        this.getMatchesStats = getMatchesStats_1.default(this.config);
        this.getMatchMapStats = getMatchMapStats_1.default(this.config);
        this.getRecentThreads = getRecentThreads_1.default(this.config);
        this.getResults = getResults_1.default(this.config);
        this.getStreams = getStreams_1.default(this.config);
        this.getTeamRanking = getTeamRanking_1.default(this.config);
        this.getTeam = getTeam_1.default(this.config);
        this.getTeamStats = getTeamStats_1.default(this.config);
        this.getPlayer = getPlayer_1.default(this.config);
    }
    HLTVFactory.prototype.createInstance = function (config) {
        return new HLTVFactory(config);
    };
    return HLTVFactory;
}());
exports.HLTVFactory = HLTVFactory;
var hltvInstance = new HLTVFactory(configDefaults);
exports.HLTV = hltvInstance;
exports.default = hltvInstance;
var MatchType_1 = require("./enums/MatchType");
exports.MatchType = MatchType_1.default;
var Map_1 = require("./enums/Map");
exports.Map = Map_1.default;
