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

        // shots
        var _key = 'SOG'
        const shots = { ...computeData(_key), title: 'Shots' }

        // G
        var _key = 'G'
        const G = { ...computeData(_key), title: 'G' }
        
        return {
            data: {
                shots,
                G,
            }
        }
    },
    render(props) {
        return props.$slots.default({...props.data});
    }
}