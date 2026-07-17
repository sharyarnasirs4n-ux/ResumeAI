import DownloadButton from "./DownloadButton";
import { TEMPLATES_REGISTRY } from "./templates";

function ResumePreview({ resume, template }) {
  const skillsList = resume.skills
    ? resume.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean)
    : [];

  const experienceList = resume.experience || [];
  const educationList = resume.education || [];
  const projectsList = resume.projects || [];

  const activeTemplate =
    TEMPLATES_REGISTRY[template] || TEMPLATES_REGISTRY.modern;

  const SelectedTemplate = activeTemplate.component;
console.log(template)
  return (
    <div className="space-y-5">


      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm px-6 py-5 flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Resume Preview
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Live preview updates as you type.
          </p>
        </div>

        <DownloadButton />
      </div>


      <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 p-8 overflow-auto">

        <div
          id="resume"
          className="
            w-[210mm]
            min-h-[297mm]
            mx-auto
            bg-white
            shadow-2xl
            transition-all
            duration-300
            hover:shadow-[0_25px_70px_rgba(0,0,0,0.15)]
          "
        >
          <SelectedTemplate
            resume={resume}
            skillsList={skillsList}
            experienceList={experienceList}
            educationList={educationList}
            projectsList={projectsList}
          />
        </div>

      </div>

    </div>
  );
}

export default ResumePreview;