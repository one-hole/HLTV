import Team from './Team'
import MapSlug from '../enums/MapSlug'

export type VetoType = 'removed' | 'picked' | 'left'

interface Veto {
    team?: Team,
    map: MapSlug,
    type: VetoType
}

export default Veto
