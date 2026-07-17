import React from "react";

function AcademicCVTemplate({
  resume,
  skillsList = [],
  projectsList = [],
  experienceList = [], 
  educationList = []   
}) {
  const experiences = experienceList.length > 0 ? experienceList : (resume.experience || []);
  const educations = educationList.length > 0 ? educationList : (resume.education || []);
  const projects = projectsList.length > 0 ? projectsList : (resume.projects || []);

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white px-16 py-14 text-slate-800 font-serif text-sm">
      
<header className="text-center border-b border-slate-200 pb-8">
  <h1 className="text-4xl font-normal tracking-wide uppercase text-slate-900">
    {resume.name || "Your Name"}
  </h1>

  <p className="text-xs uppercase tracking-[0.25em] font-sans text-slate-500 mt-3">
    {resume.title || "Academic Researcher"}
  </p>

  <div className="flex justify-center flex-wrap gap-3 mt-5 text-xs font-sans text-slate-500">
    {resume.email && <span>{resume.email}</span>}

    {resume.phone && (
      <>
        <span>•</span>
        <span>{resume.phone}</span>
      </>
    )}

    {resume.location && (
      <>
        <span>•</span>
        <span>{resume.location}</span>
      </>
    )}
  </div>

  {(() => {
    const portfolio = resume.portfolio || resume.website || "";

    return (
      (resume.linkedin || resume.github || portfolio) && (
        <div className="flex justify-center flex-wrap gap-5 mt-4 text-xs font-sans">

          {resume.linkedin && (
            <a
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 underline break-all"
            >
              LinkedIn:{" "}
              {resume.linkedin
                .replace(/^https?:\/\//, "")
                .replace(/^www\./, "")}
            </a>
          )}

          {resume.github && (
            <a
              href={resume.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 underline break-all"
            >
              GitHub:{" "}
              {resume.github
                .replace(/^https?:\/\//, "")
                .replace(/^www\./, "")}
            </a>
          )}

          {portfolio && (
            <a
              href={portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 underline break-all"
            >
              Portfolio:{" "}
              {portfolio
                .replace(/^https?:\/\//, "")
                .replace(/^www\./, "")}
            </a>
          )}

        </div>
      )
    );
  })()}
</header>

      <main className="mt-10 space-y-8">

        {resume.summary && (
          <section>
            <SectionTitle>Research & Professional Statement</SectionTitle>
            <p className="text-[13px] leading-relaxed text-slate-600 text-justify">
              {resume.summary}
            </p>
          </section>
        )}

        {experiences.length > 0 && (
          <section>
            <SectionTitle>Appointments & Experience</SectionTitle>
            <div className="space-y-6">
              {experiences.map((job, index) => (
                <div key={index} className="grid grid-cols-[120px_1fr] gap-6">
                  <div className="text-right text-xs font-sans text-slate-400">
                    {job.startDate || "Start"} — {job.endDate || "Present"}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-slate-900">
                      {job.role || job.position || "Role"}
                    </h3>
                    <p className="text-xs font-sans text-slate-500 mt-1">
                      {job.company}
                    </p>
                    {job.description && (
                      <p className="text-[13px] leading-relaxed text-slate-600 mt-2">
                        {job.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {educations.length > 0 && (
          <section>
            <SectionTitle>Education</SectionTitle>
            <div className="space-y-5">
              {educations.map((edu, index) => (
                <div key={index} className="grid grid-cols-[120px_1fr] gap-6">
                  <div className="text-right text-xs font-sans text-slate-400">
                    {edu.year || "Graduated"}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-slate-900">
                      {edu.degree}
                    </h3>
                    <p className="text-xs font-sans text-slate-500 mt-1">
                      {edu.university || edu.school}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {projects.length > 0 && (
          <section>
            <SectionTitle>Research & Projects</SectionTitle>
            <div className="space-y-5">
              {projects.map((project, index) => (
                <div key={index} className="border-l-2 border-slate-200 pl-4">
                  <h3 className="text-[15px] font-bold text-slate-900">
                    {project.name || project.title || "Project"}
                  </h3>
                  {project.description && (
                    <p className="text-[13px] text-slate-600 leading-relaxed mt-1">
                      {project.description}
                    </p>
                  )}
                  {(project.tech || project.technologies) && (
                    <p className="text-xs font-sans text-slate-500 mt-2">
                      <b>Technologies:</b> {project.tech || project.technologies}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {skillsList?.length > 0 && (
          <section>
            <SectionTitle>Fields of Expertise</SectionTitle>
            <p className="text-xs font-sans text-slate-600 leading-relaxed">
              {skillsList.join(" • ")}
            </p>
          </section>
        )}
      </main>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-xs uppercase tracking-[0.18em] font-sans font-bold text-slate-400 border-b border-slate-200 pb-2 mb-4">
      {children}
    </h2>
  );
}

export default AcademicCVTemplate;