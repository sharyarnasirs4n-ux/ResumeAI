import React from "react";

function SwissGridTemplate({ resume, skillsList = [] }) {
  const experiences = resume.experience || [];
  const educations = resume.education || [];

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white p-16 text-neutral-900 font-sans flex flex-col justify-between">

      <div>

        <div className="border-t-4 border-neutral-900 pt-6 grid grid-cols-12 gap-8">

          <div className="col-span-8">

            <h1 className="text-4xl font-black uppercase tracking-tighter leading-none text-neutral-950">
              {resume.name || "Your Name"}
            </h1>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mt-2">
              {resume.title || "Lead Design Engineer"}
            </p>

          </div>



          <div className="col-span-4 text-xs space-y-1 font-mono text-neutral-500 text-right break-all">

            {resume.location && (
              <p>
                <span className="font-bold text-neutral-700">
                  Location:
                </span>{" "}
                {resume.location}
              </p>
            )}

            {resume.email && (
              <p>
                <span className="font-bold text-neutral-700">
                  Email:
                </span>{" "}
                {resume.email}
              </p>
            )}

            {resume.phone && (
              <p>
                <span className="font-bold text-neutral-700">
                  Phone:
                </span>{" "}
                {resume.phone}
              </p>
            )}

            {resume.linkedin && (
              <p>
                <span className="font-bold text-neutral-700">
                  LinkedIn:
                </span>{" "}
                {resume.linkedin}
              </p>
            )}

            {resume.github && (
              <p>
                <span className="font-bold text-neutral-700">
                  GitHub:
                </span>{" "}
                {resume.github}
              </p>
            )}

            {(resume.portfolio || resume.website) && (
              <p>
                <span className="font-bold text-neutral-700">
                  Portfolio:
                </span>{" "}
                {resume.portfolio || resume.website}
              </p>
            )}

          </div>

        </div>




        <div className="grid grid-cols-12 gap-8 mt-12">


          <div className="col-span-4 space-y-8">


            {resume.photo && (
              <div className="w-full aspect-square border border-neutral-200 overflow-hidden bg-neutral-100 shadow-sm">

                <img
                  src={resume.photo}
                  alt={resume.name}
                  className="w-full h-full object-cover filter contrast-110 saturate-[90%]"
                />

              </div>
            )}




            {skillsList.length > 0 && (

              <section className="bg-neutral-50 p-5 border border-neutral-100">

                <h2 className="text-[10px] font-black uppercase tracking-widest text-neutral-950 mb-3">
                  Tech Capabilities
                </h2>


                <div className="grid grid-cols-1 gap-1.5 text-xs font-medium text-neutral-600">

                  {skillsList.map((skill, idx) => (

                    <div
                      key={idx}
                      className="flex justify-between border-b border-neutral-200/50 pb-1"
                    >

                      <span>
                        {skill}
                      </span>

                      <span className="text-neutral-300 font-mono">
                        [y]
                      </span>

                    </div>

                  ))}

                </div>

              </section>

            )}

          </div>






          <div className="col-span-8 space-y-8">



            {resume.summary && (

              <section className="pb-6 border-b border-neutral-100">

                <p className="text-sm font-medium leading-relaxed text-neutral-700 text-justify">
                  {resume.summary}
                </p>

              </section>

            )}







            {experiences.length > 0 && (

              <section>

                <h2 className="text-xs font-black uppercase tracking-widest text-neutral-400 mb-4">
                  Professional Practice
                </h2>



                <div className="space-y-6">

                  {experiences.map((job, idx) => (

                    <div key={idx} className="group">


                      <div className="flex justify-between items-baseline border-b border-neutral-100 pb-1.5">


                        <h3 className="text-sm font-extrabold text-neutral-900">
                          {job.position || job.role || "Role"}
                        </h3>


                        <span className="text-xs font-mono text-neutral-400">
                          {job.startDate} — {job.endDate || "Present"}
                        </span>


                      </div>



                      <p className="text-xs font-bold text-neutral-500 mt-1">
                        {job.company}
                      </p>



                      <p className="text-xs leading-relaxed text-neutral-600 mt-2 text-justify">
                        {job.description}
                      </p>


                    </div>

                  ))}

                </div>


              </section>

            )}







            {educations.length > 0 && (

              <section>


                <h2 className="text-xs font-black uppercase tracking-widest text-neutral-400 mb-3">
                  Academic Record
                </h2>



                <div className="space-y-3">


                  {educations.map((edu, idx) => (

                    <div
                      key={idx}
                      className="flex justify-between items-baseline"
                    >

                      <div>

                        <h4 className="text-xs font-bold text-neutral-900">
                          {edu.degree}
                        </h4>


                        <p className="text-[11px] text-neutral-500 mt-0.5">
                          {edu.school || edu.university}
                        </p>


                      </div>


                      <span className="text-xs font-mono text-neutral-400">
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

export default SwissGridTemplate;