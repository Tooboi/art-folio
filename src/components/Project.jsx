export default function Project({ projects }) {
  console.log(projects);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {projects.map((project) => (
        <div className="p-2" key={project.id}>
          <div className="mx-auto max-w-[512px] min-w-[150px] aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-stone-800">
            <section className="absolute z-10 opacity-0 hover:opacity-100 transition">
              <div className="bg-[#00000080] h-full w-full" />
              <div className="z-20 absolute bottom-0 right-0">
                <p className="font-lg text-stone-200 text-align-right">{project.title}</p>
              </div>
            </section>
            <img src={project.image} alt={project.title} className="object-cover" />
          </div>
          {/* <div className="max-h-[360px] min-h-[250px] rounded-md overflow-hidden group-hover:brightness-50">
            <div className="overlay-text absolute z-50 h-full flex-column p-3 opacity-0 hover:opacity-100 transition-all">
              <div className="row">
                <a href={`${project.link}`} target="_blank" rel="noreferrer">
                  <h2 className="m-auto text-stone-300">{`${project.title}`}</h2>
                </a>
                <a href={`${project.year}`} target="_blank" rel="noreferrer" className="text-stone-300">
                  linkhere
                </a>
              </div>
              <div className="row py-2">
                <p className="project-desc select-none text-stone-300">{project.desc}</p>
              </div>
            </div>
            
          </div> */}
        </div>
      ))}
    </div>
  );
}
