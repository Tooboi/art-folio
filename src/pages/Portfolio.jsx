import { useState } from 'react';
import Project from '../components/Project';

import Ben from '../images/Ben2.png';
import Eric from '../images/Eric11.png';
import Creature from '../images/Creature.png';
import Creature2 from '../images/Creature2.png';
import Beaver from '../images/Beaver.png';
import Dude2 from '../images/Dude2.png';
import Fox from '../images/Fox.png';
import Lemur from '../images/Lemur.png';
import Platipus from '../images/Platipus.png';
import PolishTroll from '../images/PolishTroll.png';
import PrarieDawg from '../images/PrarieDawg.png';
import Kylee6E from '../images/Kylee6E.png';
import Ruth from '../images/Ruth.png';
import Shrew from '../images/Shrew4Cropped.png';
import HardOpsA from '../images/HardOpsA.png';
import HardOpsB from '../images/HardOpsB6.png';
import Alchemy from '../images/Alchemy.png';
import Mold from '../images/Mold5.png';
import Pearls from '../images/pearls3.png';
import NordicForest from '../images/NordicForestEditCropped.png';
import UngreatfulBear from '../images/UngreatfulBear.png';
import HardOpsWalker from '../images/Hyperion.png';
import Krim from '../images/Alien3Eye11.png';

const projects = [
  {
    id: 23,
    image: Krim,
    title: 'Krim',
    link: 'https://www.artstation.com/artwork/8bywDO',
    year: '2023',
    desc: 'Creature Design',
    logo: 2345,
    tab: 'Characters',
  },
  {
    id: 22,
    image: HardOpsWalker,
    title: 'Hyperion Harvester 6',
    link: 'https://www.artstation.com/artwork/lD8R8V',
    year: '2023',
    desc: 'Hard Surface Exploration No.3',
    logo: 12,
    tab: 'Renders',
  },
  {
    id: 21,
    image: HardOpsB,
    title: 'Obscura 550mm',
    link: 'https://www.artstation.com/artwork/39BvW2',
    year: '2023',
    desc: 'Hard Surface Exploration No.2',
    logo: 12,
    tab: 'Renders',
  },
  {
    id: 20,
    image: HardOpsA,
    title: 'Gaydar 2200x',
    link: 'https://www.artstation.com/artwork/045Ak8',
    year: '2023',
    desc: 'Hard Surface Exploration No.1',
    logo: 12,
    tab: 'Renders',
  },
  {
    id: 19,
    image: Alchemy,
    title: 'Alchemy',
    link: 'https://www.artstation.com/gamma2dot2',
    year: '2023',
    desc: 'Creating Spaces',
    logo: 1,
    tab: 'Renders',
  },
  {
    id: 18,
    image: Mold,
    title: 'Mold',
    link: 'https://www.artstation.com/gamma2dot2',
    year: '2023',
    desc: 'Simulation Nodes',
    logo: 1,
    tab: 'Renders',
  },
  {
    id: 17,
    image: Pearls,
    title: 'Pearls',
    link: 'https://www.artstation.com/gamma2dot2',
    year: '2023',
    desc: 'Simulation Nodes',
    logo: 1,
    tab: 'Renders',
  },
  {
    id: 16,
    image: NordicForest,
    title: 'Nordic Forest',
    link: 'https://www.artstation.com/gamma2dot2',
    year: '2023',
    desc: 'Forest Study No.1',
    logo: 1,
    tab: 'Renders',
  },
  {
    id: 15,
    image: Shrew,
    title: 'Shrew',
    link: 'https://www.artstation.com/gamma2dot2',
    year: '2023',
    desc: 'Animal & Fur Study No.7',
    logo: 1,
    tab: 'Characters',
  },
  {
    id: 14,
    image: Kylee6E,
    title: 'Kylee',
    link: 'https://www.artstation.com/gamma2dot2',
    year: '2023',
    desc: 'Realism Study No.7',
    logo: 12,
    tab: 'Characters',
  },
  {
    id: 1,
    image: Eric,
    title: 'Eric',
    link: 'https://www.artstation.com/artwork/LRlvbr',
    year: '2023',
    desc: 'Realism Study No.6',
    logo: 12,
    tab: 'Characters',
  },
  {
    id: 2,
    image: Ben,
    title: 'Ben',
    link: 'https://www.artstation.com/gamma2dot2',
    year: '2023',
    desc: 'Realism Study No.5',
    logo: 12,
    tab: 'Characters',
  },
  {
    id: 3,
    image: Ruth,
    title: 'Ruth',
    link: 'https://www.artstation.com/gamma2dot2',
    year: '2023',
    desc: 'Realism Study No.4',
    logo: 12,
    tab: 'Characters',
  },
  {
    id: 4,
    image: Creature,
    title: 'Creature Alpha',
    link: 'https://www.artstation.com/gamma2dot2',
    year: '2023',
    desc: 'Nightmare Fuel No.2',
    logo: 12,
    tab: 'Characters',
  },
  {
    id: 5,
    image: Creature2,
    title: 'Ankle Biter',
    link: 'https://www.artstation.com/gamma2dot2',
    year: '2023',
    desc: 'Nightmare Fuel No.1',
    logo: 12,
    tab: 'Characters',
  },
  {
    id: 6,
    image: Dude2,
    title: 'Kev',
    link: 'https://www.artstation.com/gamma2dot2',
    year: '2022',
    desc: 'Realism Study No.3',
    logo: 12,
    tab: 'Characters',
  },
  {
    id: 7,
    image: Beaver,
    title: 'Beaver',
    link: 'https://www.artstation.com/gamma2dot2',
    year: '2020',
    desc: 'Animal & Fur Study No.1',
    logo: 1,
    tab: 'Characters',
  },
  {
    id: 8,
    image: Fox,
    title: 'Fox',
    link: 'https://www.artstation.com/gamma2dot2',
    year: '2021',
    desc: 'Animal & Fur Study No.2',
    logo: 1,
    tab: 'Characters',
  },
  {
    id: 9,
    image: Lemur,
    title: 'Lemur',
    link: 'https://www.artstation.com/gamma2dot2',
    year: '2022',
    desc: 'Animal & Fur Study No.3',
    logo: 1,
    tab: 'Characters',
  },
  {
    id: 10,
    image: Platipus,
    title: 'Platypus',
    link: 'https://www.artstation.com/gamma2dot2',
    year: '2022',
    desc: 'Animal & Fur Study No.4',
    logo: 1,
    tab: 'Characters',
  },
  {
    id: 11,
    image: PolishTroll,
    title: 'Polish Troll',
    link: 'https://www.artstation.com/gamma2dot2',
    year: '2022',
    desc: 'Realism Study No.1',
    logo: 12,
    tab: 'Characters',
  },
  {
    id: 12,
    image: PrarieDawg,
    title: 'Prairie Dawg',
    link: 'https://tooboi.github.io/After-Afters/',
    year: '2022',
    desc: 'Animal & Fur Study No.6',
    logo: 1,
    tab: 'Characters',
  },
  {
    id: 13,
    image: UngreatfulBear,
    title: 'Ungrateful Bear',
    link: 'https://www.artstation.com/gamma2dot2',
    year: '2022',
    desc: 'Animal & Fur Study No.5',
    logo: 1,
    tab: 'Characters',
  },
];
export default function Portfolio() {
  const [currentTab, setCurrentTab] = useState('Renders');

  const renderTab = () => {
    return (
      <div className="mx-auto max-w-8xl md:px-4 lg:px-10 pt-10 pb-6 min-h-screen">
        <Project projects={projects} image={projects.image} title={projects.title} link={projects.link} year={projects.year} desc={projects.desc} logo={projects.logo} tab={projects.tab} currentTab={currentTab} />
      </div>
    );
  };
  return (
    <div>
      <div className="flex justify-center mt-5 gap-4">
        <div className={`${currentTab === 'Characters' ? 'underline underline-offset-8 decoration-stone-400 font-normal' : 'font-light'} px-4 py-2 `} onClick={() => setCurrentTab('Characters')}>
          <p className="py-1 mb-0  text-xl sm:text-xl hover:text-stone-200 text-stone-300 transition cursor-pointer">CHARACTERS</p>
        </div>
        <div className={`${currentTab === 'Renders' ? 'underline underline-offset-8 decoration-stone-400 font-normal ' : 'font-light'} px-4 py-2 `} onClick={() => setCurrentTab('Renders')}>
          <p className="py-1 mb-0  text-xl sm:text-xl hover:text-stone-200 text-stone-300 transition cursor-pointer">RENDERS</p>
        </div>
      </div>
      {renderTab()}
    </div>
  );
}
