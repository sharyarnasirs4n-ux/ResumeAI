import React from "react";

function CreativePortfolioTemplate({
  resume,
  skillsList = [],
  experienceList = [],
  educationList = [],
  projectsList = [],
}) {
  const experiences =
    experienceList.length > 0 ? experienceList : resume.experience || [];

  const educations =
    educationList.length > 0 ? educationList : resume.education || [];

  const projects =
    projectsList.length > 0 ? projectsList : resume.projects || [];

  const portfolio = resume.portfolio || resume.website || "";

  const cleanLink = (url) =>
    url
      ?.replace(/^https?:\/\//, "")
      .replace(/^www\./, "");

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white p-12 text-zinc-800 font-sans flex flex-col justify-between">
      <div>

        <div className="grid grid-cols-12 gap-6 items-center">

          <div className="col-span-8">
            <h1 className="text-5xl font-black text-violet-600 uppercase tracking-tighter leading-none">
              {resume.name || "Your Name"}
            </h1>

            <p className="text-sm font-semibold tracking-widest uppercase text-zinc-500 mt-3">
              {resume.title || "Creative Producer"}
            </p>
          </div>


          <div className="col-span-4 text-right border-l-4 border-violet-100 pl-4 py-2 text-xs text-zinc-500 space-y-1">

            {resume.location && (
              <p className="font-bold text-zinc-700">
                {resume.location}
              </p>
            )}

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


            {resume.linkedin && (
              <a
                href={resume.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-violet-600 hover:underline break-all"
              >
                {cleanLink(resume.linkedin)}
              </a>
            )}


            {resume.github && (
              <a
                href={resume.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-violet-600 hover:underline break-all"
              >
                {cleanLink(resume.github)}
              </a>
            )}


            {portfolio && (
              <a
                href={portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-violet-600 hover:underline break-all"
              >
                {cleanLink(portfolio)}
              </a>
            )}

          </div>

        </div>


        <div className="h-1 bg-violet-600 my-8 rounded-full"></div>


        <div className="grid grid-cols-12 gap-8">


          <div className="col-span-7 space-y-8">


            {resume.summary && (
              <section className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">

                <h2 className="text-xs font-black uppercase tracking-widest text-violet-600 mb-2">
                  My Story
                </h2>

                <p className="text-[13px] leading-relaxed text-zinc-600 text-justify">
                  {resume.summary}
                </p>

              </section>
            )}



            {experiences.length > 0 && (
              <section>

                <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-4">
                  Where I've Been
                </h2>


                <div className="space-y-6">

                  {experiences.map((job, idx) => (

                    <div
                      key={idx}
                      className="relative pl-6 border-l-2 border-violet-100"
                    >

                      <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-violet-600"></div>


                      <div className="flex justify-between items-baseline">

                        <h3 className="text-sm font-extrabold text-zinc-900">
                          {job.role || job.position || "Role"}
                        </h3>


                        {(job.startDate || job.endDate) && (
                          <span className="text-[10px] font-black uppercase tracking-wider text-violet-500">
                            {job.startDate || ""}
                            {" — "}
                            {job.endDate || "Present"}
                          </span>
                        )}

                      </div>


                      {job.company && (
                        <p className="text-xs font-semibold text-zinc-500 mt-0.5">
                          {job.company}
                        </p>
                      )}


                      {job.description && (
                        <p className="text-[12.5px] text-zinc-600 mt-2 leading-relaxed">
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

                <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-4">
                  Projects
                </h2>


                <div className="space-y-5">

                  {projects.map((project, idx) => (

                    <div
                      key={idx}
                      className="border-l-2 border-violet-100 pl-4"
                    >

                      <h3 className="text-sm font-bold text-zinc-900">
                        {project.name}
                      </h3>


                      {project.tech && (
                        <p className="text-xs text-violet-600 mt-1">
                          {project.tech}
                        </p>
                      )}


                      {project.description && (
                        <p className="text-xs text-zinc-600 mt-2">
                          {project.description}
                        </p>
                      )}

                    </div>

                  ))}

                </div>

              </section>
            )}

          </div>



          <div className="col-span-5 space-y-8">


            {skillsList.length > 0 && (

              <section>

                <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-3">
                  Superpowers
                </h2>


                <div className="flex flex-wrap gap-1.5">

                  {skillsList.map((skill, idx) => (

                    <span
                      key={idx}
                      className="text-xs bg-violet-50 border border-violet-100 text-violet-700 px-3 py-1 rounded-full font-medium"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </section>

            )}



            {educations.length > 0 && (

              <section>

                <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-3">
                  Education
                </h2>


                <div className="space-y-4">

                  {educations.map((edu, idx) => (

                    <div
                      key={idx}
                      className="p-4 bg-zinc-50 border border-zinc-100 rounded-2xl"
                    >

                      <h4 className="text-xs font-black text-zinc-900 uppercase">
                        {edu.degree}
                      </h4>


                      <p className="text-xs text-zinc-500 font-medium mt-0.5">
                        {edu.university || edu.school}
                      </p>


                      {edu.year && (

                        <span className="text-[10px] text-violet-500 font-black block mt-2">
                          {edu.year}
                        </span>

                      )}

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

export default CreativePortfolioTemplate;