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

        // shots
        var _key = 'SOG'
        const shots = {
            home: {
                text: GR['home' + _key],
                perc: 50,
            },
            away: {
                text: GR['away' + _key],
                perc: 50,
            },
            title: 'Shots'
        }
        
        return {
            shots
        }
    },
    render(props) {
        return props.$slots.default({
            SOG: props.shots,
        });
    }
}