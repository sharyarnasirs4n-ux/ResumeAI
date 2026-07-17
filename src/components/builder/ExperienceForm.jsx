function ExperienceForm({ resume, setResume }) {
  const experienceList = resume?.experience || [];

  function addExperience() {
    setResume({
      ...resume,
      experience: [
        ...experienceList,
        {
          company: "",
          role: "",
          description: "",
        },
      ],
    });
  }

  function updateExperience(index, e) {
    const updatedExperience = [...experienceList];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [e.target.name]: e.target.value,
    };

    setResume({
      ...resume,
      experience: updatedExperience,
    });
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>

      {experienceList.map((item, index) => (
        <div key={index} className="mt-5 p-4 border rounded-2xl bg-gray-50">
          <input
            name="company"
            value={item.company || ""}
            onChange={(e) => updateExperience(index, e)}
            placeholder="Company Name"
            className="input w-full p-3 border rounded-xl"
          />

          <input
            name="role"
            value={item.role || ""}
            onChange={(e) => updateExperience(index, e)}
            placeholder="Job Role"
            className="input mt-3 w-full p-3 border rounded-xl"
          />

          <textarea
            name="description"
            value={item.description || ""}
            onChange={(e) => updateExperience(index, e)}
            placeholder="What did you do?"
            className="input mt-3 h-32 w-full p-3 border rounded-xl"
          />
        </div>
      ))}

      <button
        onClick={addExperience}
        className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition"
      >
        + Add Experience
      </button>
    </div>
  );
}

export default ExperienceForm;