import React, { useRef } from "react";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import ProjectsForm from "./ProjectsForm";
import AIButton from "./AIButton";

function ResumeForm({ resume, setResume }) {
  const fileInputRef = useRef(null);

  function handleChange(e) {
    setResume({
      ...resume,
      [e.target.name]: e.target.value,
    });
  }

  function handlePhotoChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setResume({
          ...resume,
          photo: reader.result, 
        });
      };
      reader.readAsDataURL(file);
    }
  }

  function handleRemovePhoto(e) {
    e.stopPropagation(); 
    setResume({
      ...resume,
      photo: null,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  return (
    <div className="bg-white p-8 rounded-3xl shadow space-y-8">

      <section>
        <h2 className="text-2xl font-bold mb-6">
          Personal Information
        </h2>

        <div className="mb-6 flex flex-col sm:flex-row items-center gap-6 p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="group relative w-28 h-28 rounded-full bg-slate-200 border-2 border-white shadow-md overflow-hidden cursor-pointer flex items-center justify-center transition-all hover:brightness-95"
          >
            {resume?.photo ? (
              <img
                src={resume.photo}
                alt="Profile Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center p-2">
                <svg className="w-8 h-8 text-slate-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[10px] text-slate-400 font-semibold block mt-1">Upload Photo</span>
              </div>
            )}
            
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-150">
              <span className="text-white text-xs font-medium">Change</span>
            </div>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-800">Profile Picture</h4>
            <p className="text-xs text-slate-400 mt-1 mb-3">Accepts PNG, JPG, or JPEG. Max size 2MB recommended.</p>
            
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-xs bg-slate-800 hover:bg-slate-900 text-white font-semibold py-2 px-4 rounded-xl transition shadow-sm"
              >
                Choose Image
              </button>
              {resume?.photo && (
                <button
                  type="button"
                  onClick={handleRemovePhoto}
                  className="text-xs bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-2 px-4 rounded-xl transition border border-red-100"
                >
                  Remove
                </button>
              )}
            </div>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handlePhotoChange}
              accept="image/*"
              className="hidden"
            />
          </div>
        </div>

        <input
          name="name"
          value={resume?.name || ""}
          onChange={handleChange}
          placeholder="Full Name"
          className="input w-full p-3 border rounded-xl"
        />

        <input
          name="title"
          value={resume?.title || ""}
          onChange={handleChange}
          placeholder="Job Title"
          className="input mt-4 w-full p-3 border rounded-xl"
        />

        <input
          name="email"
          value={resume?.email || ""}
          onChange={handleChange}
          placeholder="Email"
          className="input mt-4 w-full p-3 border rounded-xl"
        />

        <input
          name="phone"
          value={resume?.phone || ""}
          onChange={handleChange}
          placeholder="Phone Number"
          className="input mt-4 w-full p-3 border rounded-xl"
        />

        <input
          name="location"
          value={resume?.location || ""}
          onChange={handleChange}
          placeholder="Location (Dubai, UAE)"
          className="input mt-4 w-full p-3 border rounded-xl"
        />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">
          Online Profiles
        </h2>

        <input
          name="linkedin"
          value={resume?.linkedin || ""}
          onChange={handleChange}
          placeholder="LinkedIn Profile URL"
          className="input w-full p-3 border rounded-xl"
        />

        <input
          name="github"
          value={resume?.github || ""}
          onChange={handleChange}
          placeholder="GitHub Profile URL"
          className="input mt-4 w-full p-3 border rounded-xl"
        />

        <input
          name="portfolio"
          value={resume?.portfolio || ""}
          onChange={handleChange}
          placeholder="Portfolio Website URL"
          className="input mt-4 w-full p-3 border rounded-xl"
        />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">
          Professional Summary
        </h2>

        <textarea
          name="summary"
          value={resume?.summary || ""}
          onChange={handleChange}
          placeholder="Write your professional summary..."
          className="input h-32 w-full p-3 border rounded-xl"
        />

        <div className="mt-3">
          <AIButton
            resume={resume}
            setResume={setResume}
          />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">
          Skills
        </h2>

        <input
          name="skills"
          value={resume?.skills || ""}
          onChange={handleChange}
          placeholder="Python, React, AWS, Machine Learning..."
          className="input w-full p-3 border rounded-xl"
        />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">
          Education
        </h2>
        <EducationForm
          resume={resume}
          setResume={setResume}
        />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">
          Experience
        </h2>
        <ExperienceForm
          resume={resume}
          setResume={setResume}
        />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">
          Projects
        </h2>
        <ProjectsForm
          resume={resume}
          setResume={setResume}
        />
      </section>

    </div>
  );
}

export default ResumeForm;