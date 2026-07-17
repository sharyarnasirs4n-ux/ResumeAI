import React from "react";

function HighImpactHeaderTemplate({
  resume,
  skillsList = [],
  experienceList = [],
  educationList = [],
  projectsList = [],
}) {

  const experiences =
    experienceList.length > 0
      ? experienceList
      : resume.experience || [];

  const educations =
    educationList.length > 0
      ? educationList
      : resume.education || [];

  const projects =
  projectsList.length > 0
    ? projectsList
    : (resume.projects || []);

  const skills =
  skillsList.length > 0
    ? skillsList
    : (resume.skills || []);
  const portfolio = resume.portfolio || resume.website || "";


  const cleanLink = (url) =>
    url
      ?.replace(/^https?:\/\//, "")
      .replace(/^www\./, "");


  return (
    <div className="w-[210mm] min-h-[297mm] bg-white text-slate-800 font-sans flex flex-col justify-between">

      <div>


        <div className="bg-slate-950 text-white p-12">

          <div className="flex justify-between items-start">


            <div>

              <h1 className="text-4xl font-extrabold tracking-tight">
                {resume.name || "Your Name"}
              </h1>


              <p className="text-sm font-bold text-emerald-400 tracking-widest uppercase mt-2">
                {resume.title || "Operations Executive"}
              </p>


            </div>




            <div className="text-right text-xs text-slate-300 space-y-1 font-light">


              {resume.email && (
                <p>
                  {resume.email}
                </p>
              )}


              {resume.phone && (
                <p>
                  {resume.phone}
                </p>
              )}


              {resume.location && (
                <p>
                  {resume.location}
                </p>
              )}



              {resume.linkedin && (
                <a
                  href={resume.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white break-all"
                >
                  {cleanLink(resume.linkedin)}
                </a>
              )}



              {resume.github && (
                <a
                  href={resume.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white break-all"
                >
                  {cleanLink(resume.github)}
                </a>
              )}



              {portfolio && (
                <a
                  href={portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white break-all"
                >
                  {cleanLink(portfolio)}
                </a>
              )}



            </div>


          </div>

        </div>





        <div className="p-12 space-y-8">


          {resume.summary && (

            <section className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[3px] before:bg-emerald-400">


              <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-2">
                Executive Profile
              </h2>


              <p className="text-slate-600 text-[13.5px] leading-relaxed text-justify">
                {resume.summary}
              </p>


            </section>

          )}







          {experiences.length > 0 && (

            <section>


              <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-4 pb-2 border-b-2 border-slate-100">
                Professional History
              </h2>



              <div className="space-y-6">


                {experiences.map((job, idx) => (

                  <div key={idx}>


                    <div className="flex justify-between items-baseline">


                      <h3 className="text-base font-extrabold text-slate-900">
                        {job.role || job.position || "Role"}
                      </h3>


                      {(job.startDate || job.endDate) && (

                        <span className="text-xs font-bold text-slate-500">

                          {job.startDate || ""}
                          {" — "}
                          {job.endDate || "Present"}

                        </span>

                      )}


                    </div>



                    {job.company && (

                      <p className="text-xs font-bold text-emerald-600 mt-0.5 uppercase tracking-wider">
                        {job.company}
                      </p>

                    )}




                    {job.description && (

                      <p className="text-[13px] leading-relaxed text-slate-600 mt-2 whitespace-pre-line">
                        {job.description}
                      </p>

                    )}



                  </div>

                ))}


              </div>


            </section>

          )}








{projects.length > 0 && (
  <section>
    <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-4 pb-2 border-b-2 border-slate-100">
      Key Projects
    </h2>

    <div className="space-y-5">
      {projects.map((project, idx) => (
        <div key={idx}>
          <h3 className="text-sm font-extrabold text-slate-900">
            {project.name || project.title || "Project"}
          </h3>

          {project.description && (
            <p className="text-[13px] leading-relaxed text-slate-600 mt-1">
              {project.description}
            </p>
          )}

          {(project.tech || project.technologies) && (
            <p className="text-xs text-slate-500 mt-2">
              <span className="font-bold">Technologies:</span>{" "}
              {project.tech || project.technologies}
            </p>
          )}
        </div>
      ))}
    </div>
  </section>
)}
          <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-100">



            {skills.length > 0 && (

              <section>


                <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-3">
                  Key Skills & Competencies
                </h2>



                <div className="flex flex-wrap gap-1.5">


                  {skills.map((skill, idx) => (

                    <span
                      key={idx}
                      className="text-xs bg-slate-100 text-slate-800 px-3 py-1 rounded font-semibold tracking-wide"
                    >
                      {typeof skill === "string"
  ? skill
  : skill.name || skill.skill || ""}
                    </span>

                  ))}


                </div>


              </section>

            )}








            {educations.length > 0 && (

              <section>


                <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-3">
                  Academic Credentials
                </h2>



                <div className="space-y-3">


                  {educations.map((edu, idx) => (

                    <div key={idx}>


                      <h4 className="text-sm font-extrabold text-slate-900">
                        {edu.degree}
                      </h4>



                      <p className="text-xs text-slate-500 mt-0.5">
                        {edu.university || edu.school}
                        {edu.year && ` • Class of ${edu.year}`}
                      </p>


                    </div>

                  ))}


                </div>


              </section>

            )}



          </div>



        </div>


      </div>


    </div>
  );
}

export default HighImpactHeaderTemplate;