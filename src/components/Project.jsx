export default function Project({ projects }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {projects.map((project) => (
        <div className="p-2" key={project.id}>
          <div className="mx-auto max-w-[512px] min-w-[150px] aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-stone-800 cursor-pointer">
            <section className="absolute z-10 opacity-0 hover:opacity-100 transition">
              <div className="bg-[#00000080] h-full w-full" />
              <div className="z-20 absolute bottom-0 left-0 p-4">
                <p className="text-2xl font-medium text-stone-200 text-left">{project.title}</p>
                <p className="text-lg font-light text-stone-200">{project.year}</p>
                <p className="text-lg font-light text-stone-200">{project.desc}</p>
              </div>
            </section>
            <img src={project.image} alt={project.title} className="object-cover" />
          </div>
        </div>
      ))}
    </div>
  );
}
