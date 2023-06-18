
import Project from '../components/Project'
import Ben from '../images/Ben2.png'
import Eric from '../images/Eric11.png'
import Creature from '../images/Creature.png'
import Creature2 from '../images/Creature2.png'
const projects = [
    {
        id: 1,
        image: Ben,
        title: 'Ben',
        link: 'https://tooboi.github.io/Style-Guide/',
        year: '2023',
        desc: 'Frontend UI style template for choosing colors, font, or random color'
    },
    {
        id: 2,
        image: Eric,
        title: 'Eric',
        link: 'https://soundbyte.herokuapp.com/',
        year: '2023',
        desc: 'Full stack music sharing app utilizing MySQL, Node, Express, Handlebars, and Cloudinary'
    },
    {
        id: 3,
        image: Creature,
        title: 'Creature Alpha',
        link: 'https://tooboi.github.io/After-Afters/',
        year: '2023',
        desc: 'Frontend app that allows the user to find sports or music events in Philly, then find food within a 15 minute walk of the venue'
    },
    {
        id: 4,
        image: Creature2,
        title: 'Ankle Biter',
        link: 'https://tooboi.github.io/Gamma-UI/',
        year: '2023',
        desc: 'My own css framework for getting apps off the ground quickly with a flat UI'
    }
]
export default function Portfolio() {
    return (
        <div className='mx-auto max-w-8xl md:px-4 lg:px-10 py-10' >
            <h1 className='text-center text-2xl py-3 select-none tracking-tight text-stone-400'>CHARACTERS</h1>
            <Project projects={projects} image={projects.image} title={projects.title} link={projects.link} year={projects.year} desc={projects.desc} />
        </div>
    );
}