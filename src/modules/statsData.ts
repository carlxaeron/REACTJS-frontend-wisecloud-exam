import { PropType } from 'vue';
import GameStatsInterface from '@/interfaces/GameStatsInterface';
export default {
    name: "Stats",
    props: {
        statsData: {
            type: Object as PropType<GameStatsInterface>,
            required: true,
        }
    },
    setup(props) {
        const GR = props.statsData?.recaps?.gameRecap

        // compute data here
        const computeData = (_key) => {
            return {
                home: {
                    text: GR['home' + _key],
                    perc: (GR['home' + _key] / (GR['home' + _key] + GR['away' + _key]) * 100),
                },
                away: {
                    text: GR['away' + _key],
                    perc: (GR['away' + _key] / (GR['home' + _key] + GR['away' + _key]) * 100),
                },
            }
        }

        // // shots
        // var _key = 'SOG'
        // const shots = { ...computeData(_key), title: 'Shots' }

        var _key = 'G'
        const G = { ...computeData(_key), title: 'G' }

        var _key = 'PIM'
        const PIM = { ...computeData(_key), title: _key }
        
        var _key = 'SOG'
        const SOG = { ...computeData(_key), title: _key }
        
        var _key = 'SPG'
        const SPG = { ...computeData(_key), title: _key }
        
        var _key = 'Saves'
        const Saves = { ...computeData(_key), title: _key }
        
        var _key = 'GA'
        const GA = { ...computeData(_key), title: _key }
        
        var _key = 'SavesPerShot'
        const SavesPerShot = { ...computeData(_key), title: _key }
        
        var _key = 'PPG'
        const PPG = { ...computeData(_key), title: _key }
        
        var _key = 'SHG'
        const SHG = { ...computeData(_key), title: _key }
        
        var _key = 'PPGA'
        const PPGA = { ...computeData(_key), title: _key }
        
        var _key = 'SHGA'
        const SHGA = { ...computeData(_key), title: _key }
        
        var _key = 'NumPP'
        const NumPP = { ...computeData(_key), title: _key }
        
        var _key = 'NumSH'
        const NumSH = { ...computeData(_key), title: _key }
        
        var _key = 'Hits'
        const Hits = { ...computeData(_key), title: _key }
        
        var _key = 'PPSOG'
        const PPSOG = { ...computeData(_key), title: _key }
        
        return {
            data: {
                G,
                PIM,
                SOG,
                SPG,
                Saves,
                GA,
                SavesPerShot,
                PPG,
                SHG,
                PPGA,
                SHGA,
                NumPP,
                NumSH,
                Hits,
                PPSOG,
            }
        }
    },
    render(props) {
        return props.$slots.default({...props.data});
    }
}