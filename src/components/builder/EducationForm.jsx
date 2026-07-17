function EducationForm({ resume, setResume }) {
  const educationList = resume?.education || [];

  function addEducation() {
    setResume({
      ...resume,
      education: [
        ...educationList,
        {
          degree: "",
          university: "",
          year: "",
        },
      ],
    });
  }

  function updateEducation(index, e) {
    const updated = [...educationList];
    updated[index] = {
      ...updated[index],
      [e.target.name]: e.target.value,
    };

    setResume({
      ...resume,
      education: updated,
    });
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Education</h2>
      
      {educationList.map((item, index) => (
        <div key={index} className="mt-5 p-4 border rounded-2xl bg-gray-50">
          <input
            name="degree"
            value={item.degree || ""}
            onChange={(e) => updateEducation(index, e)}
            placeholder="Degree"
            className="input w-full p-3 border rounded-xl"
          />

          <input
            name="university"
            value={item.university || ""}
            onChange={(e) => updateEducation(index, e)}
            placeholder="University"
            className="input mt-3 w-full p-3 border rounded-xl"
          />

          <input
            name="year"
            value={item.year || ""}
            onChange={(e) => updateEducation(index, e)}
            placeholder="Year"
            className="input mt-3 w-full p-3 border rounded-xl"
          />
        </div>
      ))}

      <button
        onClick={addEducation}
        className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition"
      >
        + Add Education
      </button>
    </div>
  );
}

export default EducationForm;