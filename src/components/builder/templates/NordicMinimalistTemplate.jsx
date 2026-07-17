import React from "react";

function NordicMinimalistTemplate({
  resume,
  skillsList = [],
  experienceList = [],
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


  const portfolio = resume.portfolio || resume.website || "";


  const cleanLink = (url) =>
    url
      ?.replace(/^https?:\/\//, "")
      .replace(/^www\./, "");



  return (
    <div className="w-[210mm] min-h-[297mm] bg-[#FDFDFB] p-16 text-slate-800 font-sans flex flex-col justify-between">


      <div>


        <div className="pb-10">


          <span className="text-[10px] font-bold tracking-[0.25em] text-slate-400 uppercase">
            Curriculum Vitae
          </span>


          <h1 className="text-4xl font-extralight tracking-tight text-slate-950 mt-1">
            {resume.name || "Your Name"}
          </h1>


          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-2">
            {resume.title || "Project Director"}
          </p>


          <div className="h-[1px] w-full bg-slate-200/60 my-6"></div>





          <div className="grid grid-cols-3 gap-4 text-xs text-slate-500 font-light">


            {resume.email && (
              <p>
                <strong>E.</strong> {resume.email}
              </p>
            )}



            {resume.phone && (
              <p>
                <strong>P.</strong> {resume.phone}
              </p>
            )}



            {resume.location && (
              <p>
                <strong>L.</strong> {resume.location}
              </p>
            )}



          </div>





          {(resume.linkedin || resume.github || portfolio) && (

            <div className="flex flex-wrap gap-4 mt-4 text-xs text-slate-500">


              {resume.linkedin && (

                <a
                  href={resume.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 underline"
                >
                  LinkedIn: {cleanLink(resume.linkedin)}
                </a>

              )}



              {resume.github && (

                <a
                  href={resume.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 underline"
                >
                  GitHub: {cleanLink(resume.github)}
                </a>

              )}




              {portfolio && (

                <a
                  href={portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 underline"
                >
                  Portfolio: {cleanLink(portfolio)}
                </a>

              )}


            </div>

          )}



        </div>









        <div className="grid grid-cols-12 gap-10 mt-6">


          <div className="col-span-8 space-y-10">



            {resume.summary && (

              <section>


                <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
                  About
                </h2>


                <p className="text-[13px] leading-relaxed text-slate-600 font-light text-justify">
                  {resume.summary}
                </p>


              </section>

            )}








            {experiences.length > 0 && (

              <section>


                <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                  Experience
                </h2>



                <div className="space-y-6">


                  {experiences.map((job, idx) => (

                    <div key={idx} className="group">


                      <div className="flex justify-between items-baseline">


                        <h3 className="text-sm font-semibold text-slate-900 group-hover:text-black transition-colors">
                          {job.role || job.position || "Role"}
                        </h3>



                        {(job.startDate || job.endDate) && (

                          <span className="text-[11px] font-light text-slate-400">
                            {job.startDate || ""}
                            {" — "}
                            {job.endDate || "Present"}
                          </span>

                        )}


                      </div>





                      {job.company && (

                        <p className="text-xs font-medium text-slate-500 mt-0.5">
                          {job.company}
                        </p>

                      )}





                      {job.description && (

                        <p className="text-[12.5px] leading-relaxed text-slate-600 font-light mt-2 whitespace-pre-line">
                          {job.description}
                        </p>

                      )}


                    </div>

                  ))}


                </div>


              </section>

            )}



          </div>









          <div className="col-span-4 space-y-10">



            {skillsList.length > 0 && (

              <section>


                <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
                  Competencies
                </h2>



                <ul className="space-y-2 text-xs font-light text-slate-600">


                  {skillsList.map((skill, idx) => (

                    <li
                      key={idx}
                      className="flex items-center gap-2"
                    >

                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>

                      {skill}

                    </li>

                  ))}


                </ul>


              </section>

            )}










            {educations.length > 0 && (

              <section>


                <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
                  Education
                </h2>




                <div className="space-y-4">


                  {educations.map((edu, idx) => (

                    <div key={idx}>


                      <h4 className="text-xs font-semibold text-slate-900">
                        {edu.degree}
                      </h4>



                      <p className="text-[11px] text-slate-500 font-light mt-0.5">
                        {edu.university || edu.school}
                      </p>



                      {edu.year && (

                        <span className="text-[10px] text-slate-400 font-mono block mt-1">
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





      <div className="text-[9px] text-slate-300 tracking-wider text-center pt-8 uppercase">
        Designed cleanly &bull; 2026
      </div>


    </div>
  );
}

export default NordicMinimalistTemplate;