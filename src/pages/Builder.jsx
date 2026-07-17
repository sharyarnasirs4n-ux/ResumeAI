import { useState, useEffect } from "react";
import ResumeForm from "../components/builder/ResumeForm";
import ResumePreview from "../components/builder/ResumePreview";
import Navbar from "../components/layout/Navbar";
import TemplateSelector from "../components/builder/TemplateSeclector"; 

const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  location: "",
  title: "",
  linkedin: "",
  github: "",
  portfolio: "",
  summary: "",
  skills: "",

  education: [
    {
      degree: "",
      university: "",
      year: "",
    },
  ],

  experience: [
    {
      company: "",
      role: "",
      description: "",
    },
  ],

  projects: [
    {
      name: "",
      tech: "",
      description: "",
    },
  ],
};

function Builder() {
  const [template, setTemplate] = useState(() => {
    return localStorage.getItem("resume_template") || "modern";
  });

  const [resume, setResume] = useState(() => {
    const saved = localStorage.getItem("resume_data");
    return saved ? JSON.parse(saved) : INITIAL_STATE;
  });

  useEffect(() => {
    localStorage.setItem("resume_data", JSON.stringify(resume));
  }, [resume]);

  useEffect(() => {
    localStorage.setItem("resume_template", template);
  }, [template]);

  const resetForm = () => {
    if (window.confirm("Are you sure you want to clear your progress?")) {
      setResume(INITIAL_STATE);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-200 pb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Create Your Resume
            </h1>
            <p className="text-slate-500 mt-2 text-lg">
              Build an ATS-friendly resume with instant AI assistance.
            </p>
          </div>
          
          <button
            onClick={resetForm}
            className="text-sm font-semibold text-red-600 hover:text-red-800 transition duration-150 py-2 px-4 rounded-xl border border-red-200 hover:bg-red-50 bg-white shadow-sm"
          >
            Clear Form Data
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="lg:sticky lg:top-6 overflow-y-auto max-h-[85vh] pr-2 scrollbar-thin">
            <ResumeForm resume={resume} setResume={setResume} />
          </div>

          <div className="lg:sticky lg:top-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Select Template
              </h3>
              <TemplateSelector template={template} setTemplate={setTemplate} />
            </div>

            <ResumePreview resume={resume} template={template} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Builder;