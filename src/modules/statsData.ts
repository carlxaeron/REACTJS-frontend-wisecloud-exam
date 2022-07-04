import { PropType } from 'vue';
import GameStatsInterface from '@/interfaces/GameStatsInterface';

export default {
  name: 'Stats',
  props: {
    statsData: {
      type: Object as PropType<GameStatsInterface>,
      required: true,
    },
  },
  setup(props) {
    const GR = props.statsData?.recaps?.gameRecap;

    // compute data here
    const computeData = (_key) => {
      const returns = {
        home: {
          text: GR[`home${_key}`],
          perc: ((GR[`home${_key}`] / (GR[`home${_key}`] + GR[`away${_key}`])) * 100),
        },
        away: {
          text: GR[`away${_key}`],
          perc: ((GR[`away${_key}`] / (GR[`home${_key}`] + GR[`away${_key}`])) * 100),
        },
      };

      returns.home.perc = returns.home.perc ? returns.home.perc : 0;
      returns.away.perc = returns.away.perc ? returns.away.perc : 0;

      return returns;
    };

    // // shots
    // let _key = 'SOG'
    // const shots = { ...computeData(_key), title: 'Shots' }

    let key = 'G';
    const G = { ...computeData(key), title: 'G' };

    key = 'PIM';
    const PIM = { ...computeData(key), title: key };

    key = 'SOG';
    const SOG = { ...computeData(key), title: key };

    key = 'SPG';
    const SPG = { ...computeData(key), title: key };

    key = 'Saves';
    const Saves = { ...computeData(key), title: key };

    key = 'GA';
    const GA = { ...computeData(key), title: key };

    key = 'SavesPerShot';
    const SavesPerShot = { ...computeData(key), title: key };

    key = 'PPG';
    const PPG = { ...computeData(key), title: key };

    key = 'SHG';
    const SHG = { ...computeData(key), title: key };

    key = 'PPGA';
    const PPGA = { ...computeData(key), title: key };

    key = 'SHGA';
    const SHGA = { ...computeData(key), title: key };

    key = 'NumPP';
    const NumPP = { ...computeData(key), title: key };

    key = 'NumSH';
    const NumSH = { ...computeData(key), title: key };

    key = 'Hits';
    const Hits = { ...computeData(key), title: key };

    key = 'PPSOG';
    const PPSOG = { ...computeData(key), title: key };

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
      },
    };
  },
  render(props) {
    return props.$slots.default({ ...props.data });
  },
};
