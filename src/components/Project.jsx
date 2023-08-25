import Blender from '../images/blender.png';
import Substance from '../images/substance.png';
import { ReactComponent as Artststion } from '../images/artstation.svg';

export default function Project({ projects, currentTab }) {
  function Logo({ logoOption }) {
    if (logoOption === 1) {
      return <img src={Blender} alt={Blender} className="w-8 h-8" />;
    } else if (logoOption === 12) {
      return (
        <div className="flex max-w-full">
          <img src={Blender} alt={Blender} className="w-8 h-8 mx-1" />
          <img src={Substance} alt={Substance} className="w-8 h-8 mx-1" />
        </div>
      );
    } else {
      return null;
    }
  }

  const filteredProjects = projects.filter((project) => {
    if (currentTab === 'Characters') {
      return project.tab.includes('Characters');
    } else if (currentTab === 'Renders') {
      return project.tab.includes('Renders');
    }
    return false;
  });

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {filteredProjects.map((project) => (
        <div className="p-2" key={project.id}>
          <div className="mx-auto max-w-[512px] min-w-[150px] aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-stone-800">
            <section className="absolute z-10 opacity-0 hover:opacity-100 transition">
              <div className="image-gradient h-full w-full flex flex-row" />
              <div className="z-20 absolute bottom-0 left-0 p-4">
                <p className="text-2xl font-medium text-stone-200 text-left select-none">{project.title}</p>
                <p className="text-md font-medium text-stone-200 select-none">{project.year}</p>
                <p className="text-md font-light text-stone-200 select-none">{project.desc}</p>
                <div className="">
                  <Logo logoOption={project.logo} />
                </div>
              </div>
              <div className="z-20 absolute bottom-0 right-0 p-4">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <Artststion className="w-6 mx-2 fill-stone-700 hover:fill-stone-600 hover:scale-105 transition-all active:scale-100" />
                </a>
              </div>
            </section>
            <img src={project.image} alt={project.title} className="object-cover" />
          </div>
        </div>
      ))}
    </div>
  );
}
