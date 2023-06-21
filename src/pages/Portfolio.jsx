
import Project from '../components/Project'
import Ben from '../images/Ben2.png'
import Eric from '../images/Eric11.png'
import Creature from '../images/Creature.png'
import Creature2 from '../images/Creature2.png'
import Beaver from '../images/Beaver.png'
import Dude2 from '../images/Dude2.png'
import Fox from '../images/Fox.png'
import Lemur from '../images/Lemur.png'
import Platipus from '../images/Platipus.png'
import PolishTroll from '../images/PolishTroll.png'
import PrarieDawg from '../images/PrarieDawg.png'
import Ruth from '../images/Ruth.png'
import UngreatfulBear from '../images/UngreatfulBear.png'
const projects = [
    {
        id: 1,
        image: Eric,
        title: 'Eric',
        link: 'https://soundbyte.herokuapp.com/',
        year: '2023',
        desc: 'Created in Blender',
        logo: 12
    },
    {
        id: 2,
        image: Ben,
        title: 'Ben',
        link: 'https://tooboi.github.io/Style-Guide/',
        year: '2023',
        desc: 'Created in Blender',
        logo: 12
    },
    {
        id: 3,
        image: Ruth,
        title: 'Ruth',
        link: 'https://tooboi.github.io/After-Afters/',
        year: '2023',
        desc: 'Created in Blender',
        logo: 12
    },
    {
        id: 4,
        image: Creature,
        title: 'Creature Alpha',
        link: 'https://tooboi.github.io/After-Afters/',
        year: '2023',
        desc: 'Created in Blender',
        logo: 12
    },
    {
        id: 5,
        image: Creature2,
        title: 'Ankle Biter',
        link: 'https://tooboi.github.io/Gamma-UI/',
        year: '2023',
        desc: 'Created in Blender',
        logo: 12
    },
    {
        id: 6,
        image: Dude2,
        title: 'Kev',
        link: 'https://tooboi.github.io/After-Afters/',
        year: '2022',
        desc: 'Created in Blender',
        logo: 12
    },    {
        id: 7,
        image: Beaver,
        title: 'Beaver',
        link: 'https://tooboi.github.io/After-Afters/',
        year: '2020',
        desc: 'Created in Blender',
        logo: 1
    },    {
        id: 8,
        image: Fox,
        title: 'Fox',
        link: 'https://tooboi.github.io/After-Afters/',
        year: '2021',
        desc: 'Created in Blender',
        logo: 1
    },    {
        id: 9,
        image: Lemur,
        title: 'Lemur',
        link: 'https://tooboi.github.io/After-Afters/',
        year: '2022',
        desc: 'Created in Blender',
        logo: 1
    },    {
        id: 10,
        image: Platipus,
        title: 'Platypus',
        link: 'https://tooboi.github.io/After-Afters/',
        year: '2022',
        desc: 'Created in Blender',
        logo: 1
    },    {
        id: 11,
        image: PolishTroll,
        title: 'Polish Troll',
        link: 'https://tooboi.github.io/After-Afters/',
        year: '2022',
        desc: 'Created in Blender',
        logo: 12
    },    {
        id: 12,
        image: PrarieDawg,
        title: 'Prairie Dawg',
        link: 'https://tooboi.github.io/After-Afters/',
        year: '2022',
        desc: 'Created in Blender',
        logo: 1
    },    {
        id: 13,
        image: UngreatfulBear,
        title: 'Ungrateful Bear',
        link: 'https://tooboi.github.io/After-Afters/',
        year: '2022',
        desc: 'Created in Blender',
        logo: 1
    }
]
export default function Portfolio() {
    return (
        <div className='mx-auto max-w-8xl md:px-4 lg:px-10 pt-10 pb-6 min-h-screen' >
            <h1 className='text-center text-2xl py-3 select-none tracking-tight text-stone-400'>CHARACTERS</h1>
            <Project projects={projects} image={projects.image} title={projects.title} link={projects.link} year={projects.year} desc={projects.desc} logo={projects.logo} />
        </div>
    );
}