import React from "react";

function TokyoNeoTechTemplate({
  resume,
  skillsList = [],
  experienceList = [],
  projectsList = [],
  educationList = [],
}) {

  const experiences =
    experienceList.length > 0
      ? experienceList
      : resume.experience || [];

  const educations =
    educationList.length > 0
      ? educationList
      : resume.education || [];


  return (
    <div className="w-[210mm] min-h-[297mm] bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">

      <div className="grid grid-cols-12 min-h-[280mm]">


        <div className="col-span-4 bg-slate-900 text-slate-200 p-8 flex flex-col justify-between">


          <div className="space-y-8">


            <div className="text-center space-y-4">

              {resume.photo ? (

                <div className="w-28 h-28 mx-auto rounded-full border-4 border-slate-800 overflow-hidden shadow-lg ring-2 ring-cyan-400/50">

                  <img
                    src={resume.photo}
                    alt={resume.name}
                    className="w-full h-full object-cover"
                  />

                </div>

              ) : (

                <div className="w-20 h-20 mx-auto rounded-full bg-slate-800 flex items-center justify-center border-2 border-slate-700">

                  <span className="text-xs font-mono text-slate-400">
                    DEV
                  </span>

                </div>

              )}



              <div>

                <h1 className="text-xl font-black tracking-tight text-white leading-tight">
                  {resume.name || "Your Name"}
                </h1>


                <p className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase mt-1">
                  {resume.title || "Backend Engineer"}
                </p>

              </div>

            </div>





            <div className="space-y-3 pt-6 border-t border-slate-800 text-xs">

              <h3 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                Connect
              </h3>


              {resume.email && (
                <p className="truncate">
                  <span className="text-cyan-400 font-mono mr-1.5">
                    &gt;
                  </span>
                  {resume.email}
                </p>
              )}


              {resume.phone && (
                <p>
                  <span className="text-cyan-400 font-mono mr-1.5">
                    &gt;
                  </span>
                  {resume.phone}
                </p>
              )}


              {resume.location && (
                <p>
                  <span className="text-cyan-400 font-mono mr-1.5">
                    &gt;
                  </span>
                  {resume.location}
                </p>
              )}


              {resume.linkedin && (
                <p className="truncate">
                  <span className="text-cyan-400 font-mono mr-1.5">
                    &gt;
                  </span>
                  LinkedIn
                </p>
              )}


              {resume.github && (
                <p className="truncate">
                  <span className="text-cyan-400 font-mono mr-1.5">
                    &gt;
                  </span>
                  GitHub
                </p>
              )}


              {(resume.portfolio || resume.website) && (
                <p className="truncate">
                  <span className="text-cyan-400 font-mono mr-1.5">
                    &gt;
                  </span>
                  Portfolio
                </p>
              )}

            </div>







            {skillsList.length > 0 && (

              <div className="pt-6 border-t border-slate-800">


                <h3 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3">
                  Core Stack
                </h3>


                <div className="flex flex-wrap gap-1.5">

                  {skillsList.map((skill, idx)=>(

                    <span
                      key={idx}
                      className="text-[10px] bg-slate-800 border border-slate-700/50 text-cyan-300 font-mono py-1 px-2.5 rounded"
                    >
                      {skill}
                    </span>

                  ))}

                </div>


              </div>

            )}

          </div>




          <div className="text-[9px] text-slate-600 font-mono uppercase tracking-wider text-center">
            [ system active ]
          </div>


        </div>







        <div className="col-span-8 p-10 space-y-8 bg-white">





          {resume.summary && (

            <section>

              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">

                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>

                Professional Summary

              </h2>


              <p className="text-[13px] leading-relaxed text-slate-600 font-light text-justify">
                {resume.summary}
              </p>

            </section>

          )}







          {experiences.length > 0 && (

            <section>


              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">

                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>

                Experience History

              </h2>



              <div className="space-y-6">


                {experiences.map((job,idx)=>(

                  <div
                    key={idx}
                    className="relative pl-5 border-l border-slate-100 hover:border-cyan-200 transition-colors pb-1"
                  >


                    <div className="absolute -left-[4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-200 border-2 border-white"></div>



                    <div className="flex justify-between items-baseline">

                      <h3 className="text-sm font-bold text-slate-900">
                        {job.position || job.role}
                      </h3>


                      <span className="text-[10px] font-mono text-slate-400">
                        {job.startDate} — {job.endDate || "Present"}
                      </span>


                    </div>



                    <p className="text-xs font-semibold text-cyan-600 mt-0.5">
                      {job.company}
                    </p>


                    <p className="text-xs leading-relaxed text-slate-500 mt-2 whitespace-pre-line text-justify">
                      {job.description}
                    </p>


                  </div>

                ))}


              </div>


            </section>

          )}








          {projectsList.length > 0 && (

            <section>


              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">

                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>

                Projects

              </h2>



              <div className="grid grid-cols-2 gap-4">


                {projectsList.map((project,idx)=>(

                  <div
                    key={idx}
                    className="p-4 bg-slate-50 rounded-xl border border-slate-100"
                  >

                    <h3 className="text-sm font-bold text-slate-900">
                      {project.name}
                    </h3>


                    {project.tech && (

                      <p className="text-[10px] font-mono text-cyan-600 mt-1">
                        {project.tech}
                      </p>

                    )}


                    <p className="text-xs text-slate-500 mt-2">
                      {project.description}
                    </p>


                  </div>

                ))}


              </div>


            </section>

          )}







          {educations.length > 0 && (

            <section>


              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">

                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>

                Education Credentials

              </h2>



              <div className="grid grid-cols-2 gap-4">


                {educations.map((edu,idx)=>(

                  <div
                    key={idx}
                    className="p-4 bg-slate-50/60 rounded-xl border border-slate-100"
                  >

                    <h4 className="text-xs font-bold text-slate-900">
                      {edu.degree}
                    </h4>


                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {edu.school || edu.university}
                    </p>


                    <span className="text-[10px] font-mono text-cyan-600 block mt-2 font-bold">
                      {edu.year}
                    </span>


                  </div>

                ))}


              </div>


            </section>

          )}



        </div>

      </div>

    </div>
  );
}


export default TokyoNeoTechTemplate;