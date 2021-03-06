import Thread from '../models/Thread';
import HLTVConfig from '../models/HLTVConfig';
declare const getRecentThreads: (config: HLTVConfig) => () => Promise<Thread[]>;
export default getRecentThreads;
