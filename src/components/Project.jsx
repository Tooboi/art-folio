import Blender from '../images/blender.png';
import Substance from '../images/substance.png';

export default function Project({ projects }) {
  function Logo({ logoOption }) {
    if (logoOption === 1) {
      return <img src={Blender} alt={Blender} className='w-8 h-8' />;
    } else if (logoOption === 12) {
      return (
        <div className='flex max-w-full'>
          <img src={Blender} alt={Blender} className='w-8 h-8 mx-1'/>
          <img src={Substance} alt={Substance} className='w-8 h-8 mx-1' />
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {projects.map((project) => (
        <div className="p-2" key={project.id}>
          <div className="mx-auto max-w-[512px] min-w-[150px] aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-stone-800">
            <section className="absolute z-10 opacity-0 hover:opacity-100 transition">
              <div className="image-gradient h-full w-full" />
              <div className="z-20 absolute bottom-0 left-0 p-4">
                <p className="text-2xl font-medium text-stone-200 text-left select-none">{project.title}</p>
                <p className="text-md font-medium text-stone-200 select-none">{project.year}</p>
                <p className="text-md font-light text-stone-200 select-none">{project.desc}</p>
                <div className="">
                  <Logo logoOption={project.logo} />
                </div>
              </div>
            </section>
            <img src={project.image} alt={project.title} className="object-cover" />
          </div>
        </div>
      ))}
    </div>
  );
}
