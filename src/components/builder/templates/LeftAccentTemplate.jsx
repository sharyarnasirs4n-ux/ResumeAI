import React from "react";

function LeftAccentTemplate({
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
    <div className="w-[210mm] min-h-[297mm] bg-white p-14 text-slate-800 font-sans flex flex-col justify-between">

      <div>

        <div className="grid grid-cols-12 gap-10">


          <div className="col-span-4 space-y-6">


            <div>

              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 leading-none">
                {resume.name || "Your Name"}
              </h1>


              <p className="text-xs font-bold text-sky-600 uppercase tracking-widest mt-3">
                {resume.title || "Management Consultant"}
              </p>

            </div>





            <div className="pt-6 border-t border-slate-100 space-y-3 text-xs text-slate-500">


              {resume.email && (
                <p>
                  <strong>E:</strong> {resume.email}
                </p>
              )}


              {resume.phone && (
                <p>
                  <strong>P:</strong> {resume.phone}
                </p>
              )}


              {resume.location && (
                <p>
                  <strong>L:</strong> {resume.location}
                </p>
              )}




              {resume.linkedin && (
                <a
                  href={resume.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sky-600 hover:underline break-all"
                >
                  <strong>in:</strong> {cleanLink(resume.linkedin)}
                </a>
              )}



              {resume.github && (
                <a
                  href={resume.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sky-600 hover:underline break-all"
                >
                  <strong>GH:</strong> {cleanLink(resume.github)}
                </a>
              )}



              {portfolio && (
                <a
                  href={portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sky-600 hover:underline break-all"
                >
                  <strong>Web:</strong> {cleanLink(portfolio)}
                </a>
              )}


            </div>







            {skillsList.length > 0 && (

              <div className="pt-6 border-t border-slate-100">


                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Core Skills
                </h3>


                <div className="flex flex-col gap-2">


                  {skillsList.map((skill, idx) => (

                    <div
                      key={idx}
                      className="flex items-center gap-2"
                    >

                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>


                      <span className="text-xs font-medium text-slate-700">
                        {skill}
                      </span>


                    </div>

                  ))}


                </div>


              </div>

            )}

          </div>








          <div className="col-span-8 border-l-2 border-slate-100 pl-8 space-y-8">



            {resume.summary && (

              <section>


                <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                  Overview
                </h2>


                <p className="text-[13px] leading-relaxed text-slate-600 text-justify">
                  {resume.summary}
                </p>


              </section>

            )}








            {experiences.length > 0 && (

              <section>


                <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
                  Experience
                </h2>



                <div className="space-y-6">


                  {experiences.map((job, idx) => (

                    <div key={idx} className="relative">


                      <div className="flex justify-between items-baseline">


                        <h3 className="text-sm font-bold text-slate-900">
                          {job.role || job.position || "Role"}
                        </h3>



                        {(job.startDate || job.endDate) && (

                          <span className="text-[11px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded">

                            {job.startDate || ""}
                            {" — "}
                            {job.endDate || "Present"}

                          </span>

                        )}


                      </div>



                      {job.company && (

                        <p className="text-xs font-semibold text-slate-500 mt-0.5">
                          {job.company}
                        </p>

                      )}




                      {job.description && (

                        <p className="text-[12.5px] leading-relaxed text-slate-600 mt-2 text-justify">
                          {job.description}
                        </p>

                      )}


                    </div>

                  ))}


                </div>


              </section>

            )}









            {educations.length > 0 && (

              <section>


                <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">
                  Education
                </h2>



                <div className="grid grid-cols-2 gap-4">


                  {educations.map((edu, idx) => (

                    <div
                      key={idx}
                      className="p-3 bg-slate-50 rounded-xl border border-slate-100/60"
                    >

                      <h4 className="text-xs font-bold text-slate-900">
                        {edu.degree}
                      </h4>


                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {edu.university || edu.school}
                      </p>



                      {edu.year && (

                        <span className="text-[10px] text-slate-400 font-bold block mt-1">
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

export default LeftAccentTemplate;