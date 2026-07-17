import React from "react";

function TheEditorialSerifTemplate({
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
    <div className="w-[210mm] min-h-[297mm] bg-[#FAF8F5] p-16 text-[#2D2A26] font-serif flex flex-col justify-between">

      <div>

        <div className="flex justify-between items-center pb-10 border-b border-[#E1DDD5]">

          <div className="max-w-[70%]">

            <h1 className="text-4xl font-normal tracking-tight text-[#1C1A18] leading-none">
              {resume.name || "Your Name"}
            </h1>


            <p className="text-xs font-sans tracking-[0.2em] uppercase text-[#8C8375] mt-3 font-semibold">
              {resume.title || "Editorial Director"}
            </p>


            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] font-sans text-[#8C8375] mt-4">

              {resume.email && (
                <span>{resume.email}</span>
              )}

              {resume.phone && (
                <span>• {resume.phone}</span>
              )}

              {resume.location && (
                <span>• {resume.location}</span>
              )}

              {resume.linkedin && (
                <span>• LinkedIn</span>
              )}

              {resume.github && (
                <span>• GitHub</span>
              )}

              {(resume.portfolio || resume.website) && (
                <span>• Portfolio</span>
              )}

            </div>

          </div>



          {resume.photo && (
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-inner bg-[#E1DDD5] p-1.5 shrink-0 border border-[#E1DDD5]">

              <img
                src={resume.photo}
                alt={resume.name}
                className="w-full h-full object-cover rounded-full filter sepia-[15%]"
              />

            </div>
          )}

        </div>



        <div className="grid grid-cols-12 gap-10 mt-10">


          <div className="col-span-8 space-y-8">


            {resume.summary && (

              <section>

                <h2 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#8C8375] mb-3">
                  The Story
                </h2>


                <p className="text-[13px] leading-relaxed text-[#54504A] text-justify font-light">
                  {resume.summary}
                </p>

              </section>

            )}





            {experiences.length > 0 && (

              <section>

                <h2 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#8C8375] mb-4">
                  Professional Journey
                </h2>


                <div className="space-y-6">

                  {experiences.map((job, idx)=>(
                    <div key={idx}>


                      <div className="flex justify-between items-baseline">

                        <h3 className="text-[14px] font-bold text-[#1C1A18]">
                          {job.position || job.role}
                        </h3>


                        <span className="text-[11px] font-sans font-light text-[#8C8375]">
                          {job.startDate} — {job.endDate || "Present"}
                        </span>

                      </div>


                      <p className="text-xs font-sans italic text-[#8C8375] mt-0.5">
                        {job.company}
                      </p>


                      <p className="text-[12.5px] leading-relaxed text-[#54504A] font-light mt-2 text-justify">
                        {job.description}
                      </p>


                    </div>
                  ))}

                </div>

              </section>

            )}






            {projectsList.length > 0 && (

              <section>

                <h2 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#8C8375] mb-4">
                  Selected Works
                </h2>


                <div className="space-y-5">

                  {projectsList.map((project, idx)=>(

                    <div key={idx}>


                      <div className="flex justify-between items-baseline">

                        <h3 className="text-[14px] font-bold text-[#1C1A18]">
                          {project.name}
                        </h3>


                        {project.tech && (

                          <span className="text-[10px] font-sans text-[#8C8375]">
                            {project.tech}
                          </span>

                        )}

                      </div>


                      <p className="text-[12.5px] leading-relaxed text-[#54504A] font-light mt-2">
                        {project.description}
                      </p>


                    </div>

                  ))}

                </div>

              </section>

            )}

          </div>






          <div className="col-span-4 space-y-8">



            {skillsList.length > 0 && (

              <section>

                <h2 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#8C8375] mb-3">
                  Signature Skills
                </h2>


                <ul className="space-y-2 text-xs font-sans text-[#54504A] font-light">

                  {skillsList.map((skill, idx)=>(

                    <li
                      key={idx}
                      className="flex items-center gap-2"
                    >

                      <span className="w-1 h-1 bg-[#8C8375] rotate-45"></span>

                      {skill}

                    </li>

                  ))}

                </ul>


              </section>

            )}






            {educations.length > 0 && (

              <section>


                <h2 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#8C8375] mb-3">
                  Education
                </h2>



                <div className="space-y-4">


                  {educations.map((edu, idx)=>(

                    <div
                      key={idx}
                      className="border-l border-[#E1DDD5] pl-3"
                    >


                      <h4 className="text-xs font-bold text-[#1C1A18]">
                        {edu.degree}
                      </h4>


                      <p className="text-[11px] font-sans text-[#8C8375] mt-0.5">
                        {edu.school || edu.university}
                      </p>


                      <span className="text-[10px] font-sans font-light text-[#8C8375] block mt-1">
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




      <div className="text-[9px] font-sans text-[#A89F90] tracking-widest text-center pt-8 uppercase">
        Printed Editorial Layout
      </div>


    </div>
  );
}


export default TheEditorialSerifTemplate;