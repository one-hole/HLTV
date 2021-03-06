import ScoreboardUpdate from '../models/ScoreboardUpdate';
import LogUpdate from '../models/LogUpdate';
import HLTVConfig from '../models/HLTVConfig';
export declare type ConnectToScorebotParams = {
    id: number;
    onScoreboardUpdate?: (data: ScoreboardUpdate) => any;
    onLogUpdate?: (data: LogUpdate) => any;
    onConnect?: () => any;
    onDisconnect?: () => any;
};
declare const connectToScorebot: (config: HLTVConfig) => ({ id, onScoreboardUpdate, onLogUpdate, onConnect, onDisconnect }: ConnectToScorebotParams) => Promise<void>;
export default connectToScorebot;
