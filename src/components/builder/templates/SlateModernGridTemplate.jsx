import React from "react";

function SlateModernGridTemplate({ resume, skillsList }) {
  const experiences = resume.experience || [];
  const educations = resume.education || [];

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white p-12 text-slate-800 font-sans flex flex-col justify-between">
      <div>

        <div className="flex justify-between items-center border-b-2 border-slate-900 pb-6">

          <div>
            <h1 className="text-3xl font-black uppercase tracking-tight text-slate-900">
              {resume.name || "Your Name"}
            </h1>

            <p className="text-sm font-bold text-slate-500 tracking-wider uppercase mt-1">
              {resume.title || "Product Marketing Lead"}
            </p>
          </div>


          <div className="text-right text-xs space-y-1 font-medium text-slate-500">

            {resume.email && (
              <p>{resume.email}</p>
            )}

            {resume.phone && (
              <p>{resume.phone}</p>
            )}

            {resume.location && (
              <p>{resume.location}</p>
            )}

            {resume.linkedin && (
              <p>
                <span className="font-bold text-slate-700">
                  LinkedIn:
                </span>{" "}
                {resume.linkedin}
              </p>
            )}

            {resume.github && (
              <p>
                <span className="font-bold text-slate-700">
                  GitHub:
                </span>{" "}
                {resume.github}
              </p>
            )}

            {(resume.portfolio || resume.website) && (
              <p>
                <span className="font-bold text-slate-700">
                  Portfolio:
                </span>{" "}
                {resume.portfolio || resume.website}
              </p>
            )}

          </div>

        </div>



        {resume.summary && (
          <div className="bg-slate-50/80 p-6 border-b border-slate-200/60 my-6 rounded-xl">
            <p className="text-[13px] leading-relaxed text-slate-600 text-center italic">
              "{resume.summary}"
            </p>
          </div>
        )}



        <div className="grid grid-cols-12 gap-6 mt-6">


          <div className="col-span-8 space-y-6">

            {experiences.length > 0 && (
              <section>

                <h2 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-slate-900 inline-block"></span>
                  Professional Work
                </h2>


                <div className="space-y-5">

                  {experiences.map((job, idx) => (

                    <div
                      key={idx}
                      className="p-4 border border-slate-100 hover:border-slate-200 bg-white rounded-xl shadow-sm transition"
                    >

                      <div className="flex justify-between items-baseline">

                        <h3 className="text-sm font-bold text-slate-900">
                          {job.position || job.role}
                        </h3>


                        <span className="text-[10px] font-bold text-slate-400">
                          {job.startDate} — {job.endDate || "Present"}
                        </span>

                      </div>


                      <p className="text-xs font-bold text-slate-500 mt-0.5">
                        {job.company}
                      </p>


                      <p className="text-xs leading-relaxed text-slate-600 mt-2 text-justify">
                        {job.description}
                      </p>


                    </div>

                  ))}

                </div>

              </section>
            )}

          </div>




          <div className="col-span-4 space-y-6">


            {skillsList.length > 0 && (

              <section className="p-5 bg-slate-900 text-white rounded-2xl shadow-sm">

                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-300 mb-3">
                  Core Stack
                </h2>


                <div className="flex flex-wrap gap-1.5">

                  {skillsList.map((skill, idx)=>(

                    <span
                      key={idx}
                      className="text-[10px] bg-white/10 hover:bg-white/15 text-white py-1 px-2.5 rounded-lg transition-colors font-medium"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </section>

            )}




            {educations.length > 0 && (

              <section className="p-5 border border-slate-100 bg-white rounded-2xl shadow-sm">

                <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3">
                  Education
                </h2>


                <div className="space-y-4">

                  {educations.map((edu, idx)=>(

                    <div
                      key={idx}
                      className="border-b border-slate-50 last:border-0 pb-3 last:pb-0"
                    >

                      <h4 className="text-xs font-bold text-slate-900">
                        {edu.degree}
                      </h4>


                      <p className="text-[10px] text-slate-500 mt-0.5">
                        {edu.school || edu.university}
                      </p>


                      <span className="text-[9px] font-bold text-slate-400 block mt-1">
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

    </div>
  );
}

export default SlateModernGridTemplate;