export default function Project({ projects }) {
  console.log(projects);

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {projects.map((project) => (
        <div className=" group relative" key={project.id}>
          <div className="max-h-[360px] min-h-[250px] rounded-md overflow-hidden group-hover:brightness-50">
            <div className="overlay-text absolute z-50 h-full flex-column p-3 opacity-0 hover:opacity-100 transition-all">
              <div className="row">
                <a href={`${project.link}`} target="_blank" rel="noreferrer">
                  <h2 className="m-auto text-stone-300">{`${project.title}`}</h2>
                </a>
                <a href={`${project.repo}`} target="_blank" rel="noreferrer" className="text-stone-300">
                  linkhere
                </a>
              </div>
              <div className="row py-2">
                <p className="project-desc select-none text-stone-300">{project.desc}</p>
              </div>
            </div>
            <img src={project.image} alt={project.title} className="max-w-[360px] min-w-[250px] w-full h-full object-cover lg:h-full lg:w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
