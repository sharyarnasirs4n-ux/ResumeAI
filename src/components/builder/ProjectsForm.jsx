function ProjectsForm({ resume, setResume }) {
  const projectsList = resume?.projects || [];

  function addProject() {
    setResume({
      ...resume,
      projects: [
        ...projectsList,
        {
          name: "",
          tech: "",
          description: "",
        },
      ],
    }); 
  }

  function updateProject(index, e) {
    const updatedProjects = [...projectsList];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [e.target.name]: e.target.value,
    };

    setResume({
      ...resume,
      projects: updatedProjects,
    });
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>

      {projectsList.map((item, index) => (
        <div key={index} className="mt-5 p-4 border rounded-2xl bg-gray-50">
          <input
            name="name"
            value={item.name || ""}
            onChange={(e) => updateProject(index, e)}
            placeholder="Project Name"
            className="input w-full p-3 border rounded-xl"
          />

          <input
            name="tech"
            value={item.tech || ""}
            onChange={(e) => updateProject(index, e)}
            placeholder="Technologies Used"
            className="input mt-3 w-full p-3 border rounded-xl"
          />

          <textarea
            name="description"
            value={item.description || ""}
            onChange={(e) => updateProject(index, e)}
            placeholder="Project Description"
            className="input mt-3 h-32 w-full p-3 border rounded-xl"
          />
        </div>
      ))}

      <button
        onClick={addProject}
        className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition"
      >
        + Add Project
      </button>
    </div>
  );
}

export default ProjectsForm;