import UpcomingMatch from '../models/UpcomingMatch';
import LiveMatch from '../models/LiveMatch';
import HLTVConfig from '../models/HLTVConfig';
declare const getMatches: (config: HLTVConfig) => () => Promise<(UpcomingMatch | LiveMatch)[]>;
export default getMatches;
