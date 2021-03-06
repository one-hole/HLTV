import FullPlayer from '../models/FullPlayer';
import HLTVConfig from '../models/HLTVConfig';
declare const getPlayer: (config: HLTVConfig) => ({ id }: {
    id: number;
}) => Promise<FullPlayer>;
export default getPlayer;
