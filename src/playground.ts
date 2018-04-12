import HLTV from './index'
// HLTV.getLatestResults({pages: 1}).then(res => console.log(res))
// HLTV.getStreams({ loadLinks: true }).then(res => console.log(res))
// HLTV.getActiveThreads().then(res => console.log(res))
// HLTV.getTeamRanking().then(res => console.log(res))
// HLTV.getTeamRankingDates().then(res => console.log(res))
// HLTV.connectToScorebot({id: 2321788,
//     onConnect: () => {
//         console.log('connected')
//     },
//     onScoreboardUpdate: (data) => {
//         console.log(JSON.stringify(data))
//     }, onLogUpdate: () => {
//     }})
// HLTV.getMatchesStats({startDate: '2017-07-10', endDate: '2017-07-18'}).then(res => console.log(res.length))
// HLTV.getTeam({id: 7144}).then(res => console.dir(res, { depth: null })).catch(err => console.log(err))
// HLTV.getTeamStats({id: 6669}).then(res => console.dir(res, { depth: null })).catch(err => console.log(err))
// HLTV.getPlayer({id: 1339}).then(res => console.dir(res, { depth: null })).catch(err => console.log(err))
// HLTV.getMatchMapStats({id: 64951}).then((res) => {
//     console.log(JSON.stringify(res))
// }).catch((err) => {
//     console.log(err)
// })

HLTV.getMatch({id: 2321914}).then((res) => {
    // console.log(JSON.stringify(res))
    console.log(res.maps)
})
// HLTV.getResults()
//     .then((results) => {
//         console.log(JSON.stringify(results.slice(0, 3)))
//     });
// HLTV.getMatches()
//     .then((results) => {
//         console.log(JSON.stringify(results.slice(0, 3)))
//     });


process
    .on('unhandledRejection', (reason, p) => {
        console.log('##########################################')
        console.error(reason, 'Unhandled Rejection at Promise', p)
        console.log('##########################################')
    })
