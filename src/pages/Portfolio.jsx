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
import UngreatfulBear from '../images/UngreatfulBear.png';
const projects = [
  {
    id: 14,
    image: Kylee6E,
    title: 'Kylee',
    link: 'https://soundbyte.herokuapp.com/',
    year: '2023',
    desc: 'Realism Study No.7',
    logo: 12,
    tab: 'Renders',
  },
  {
    id: 1,
    image: Eric,
    title: 'Eric',
    link: 'https://soundbyte.herokuapp.com/',
    year: '2023',
    desc: 'Realism Study No.6',
    logo: 12,
    tab: 'Characters',
  },
  {
    id: 2,
    image: Ben,
    title: 'Ben',
    link: 'https://tooboi.github.io/Style-Guide/',
    year: '2023',
    desc: 'Realism Study No.5',
    logo: 12,
    tab: 'Characters',
  },
  {
    id: 3,
    image: Ruth,
    title: 'Ruth',
    link: 'https://tooboi.github.io/After-Afters/',
    year: '2023',
    desc: 'Realism Study No.4',
    logo: 12,
    tab: 'Characters',
  },
  {
    id: 4,
    image: Creature,
    title: 'Creature Alpha',
    link: 'https://tooboi.github.io/After-Afters/',
    year: '2023',
    desc: 'Nightmare Fuel No.2',
    logo: 12,
    tab: 'Characters',
  },
  {
    id: 5,
    image: Creature2,
    title: 'Ankle Biter',
    link: 'https://tooboi.github.io/Gamma-UI/',
    year: '2023',
    desc: 'Nightmare Fuel No.1',
    logo: 12,
    tab: 'Characters',
  },
  {
    id: 6,
    image: Dude2,
    title: 'Kev',
    link: 'https://tooboi.github.io/After-Afters/',
    year: '2022',
    desc: 'Realism Study No.3',
    logo: 12,
    tab: 'Characters',
  },
  {
    id: 7,
    image: Beaver,
    title: 'Beaver',
    link: 'https://tooboi.github.io/After-Afters/',
    year: '2020',
    desc: 'Animal & Fur Study No.1',
    logo: 1,
    tab: 'Characters',
  },
  {
    id: 8,
    image: Fox,
    title: 'Fox',
    link: 'https://tooboi.github.io/After-Afters/',
    year: '2021',
    desc: 'Animal & Fur Study No.2',
    logo: 1,
    tab: 'Characters',
  },
  {
    id: 9,
    image: Lemur,
    title: 'Lemur',
    link: 'https://tooboi.github.io/After-Afters/',
    year: '2022',
    desc: 'Animal & Fur Study No.3',
    logo: 1,
    tab: 'Characters',
  },
  {
    id: 10,
    image: Platipus,
    title: 'Platypus',
    link: 'https://tooboi.github.io/After-Afters/',
    year: '2022',
    desc: 'Animal & Fur Study No.4',
    logo: 1,
    tab: 'Characters',
  },
  {
    id: 11,
    image: PolishTroll,
    title: 'Polish Troll',
    link: 'https://tooboi.github.io/After-Afters/',
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
    link: 'https://tooboi.github.io/After-Afters/',
    year: '2022',
    desc: 'Animal & Fur Study No.5',
    logo: 1,
    tab: 'Characters',
  },
];
export default function Portfolio() {
  const [currentTab, setCurrentTab] = useState('Characters');

  const renderTab = () => {

      return (
        <div className="mx-auto max-w-8xl md:px-4 lg:px-10 pt-10 pb-6 min-h-screen">
          <h1 className="text-center text-2xl py-3 select-none tracking-tight text-stone-400">{currentTab}</h1>
          <Project projects={projects} image={projects.image} title={projects.title} link={projects.link} year={projects.year} desc={projects.desc} logo={projects.logo} tab={projects.tab} currentTab={currentTab} />
        </div>
      );
  };
  return (
    <div>
      <div className="flex justify-center mt-5 space-x-5">
        <button className={`${currentTab === 'Characters' ? 'bg-stone-400 text-white' : 'bg-gray-200 text-gray-800'} px-4 py-2 rounded-md`} onClick={() => setCurrentTab('Characters')}>
          Characters
        </button>
        <button className={`${currentTab === 'Renders' ? 'bg-stone-400 text-white' : 'bg-gray-200 text-gray-800'} px-4 py-2 rounded-md`} onClick={() => setCurrentTab('Renders')}>
          Renders
        </button>
      </div>
      {renderTab()}
    </div>
  );
}
