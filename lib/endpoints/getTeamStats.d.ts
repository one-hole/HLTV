import FullTeamStats from '../models/FullTeamStats';
import HLTVConfig from '../models/HLTVConfig';
declare const getTeamStats: (config: HLTVConfig) => ({ id }: {
    id: number;
}) => Promise<FullTeamStats>;
export default getTeamStats;
