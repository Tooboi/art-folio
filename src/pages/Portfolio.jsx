
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
        repo: 'https://github.com/Tooboi/Style-Guide',
        desc: 'Frontend UI style template for choosing colors, font, or random color'
    },
    {
        id: 2,
        image: Eric,
        title: 'Eric',
        link: 'https://soundbyte.herokuapp.com/',
        repo: 'https://github.com/JoshuaCarter99/bandshare',
        desc: 'Full stack music sharing app utilizing MySQL, Node, Express, Handlebars, and Cloudinary'
    },
    {
        id: 3,
        image: Creature,
        title: 'Creature Alpha',
        link: 'https://tooboi.github.io/After-Afters/',
        repo: 'https://github.com/Tooboi/After-Afters',
        desc: 'Frontend app that allows the user to find sports or music events in Philly, then find food within a 15 minute walk of the venue'
    },
    {
        id: 4,
        image: Creature2,
        title: 'Ankle Biter',
        link: 'https://tooboi.github.io/Gamma-UI/',
        repo: 'https://github.com/Tooboi/Gamma-UI',
        desc: 'My own css framework for getting apps off the ground quickly with a flat UI'
    }
]
export default function Portfolio() {
    return (
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8' >
            <h1 className='mt-5 flex justify-content-center header-font px-3 select-none tracking-tight'>Characters</h1>
            <Project projects={projects} image={projects.image} title={projects.title} link={projects.link} repo={projects.repo} desc={projects.desc} />
        </div>
    );
}