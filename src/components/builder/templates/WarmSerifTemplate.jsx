import React from "react";

export default function WarmSerifTemplate({
  resume,
  skillsList = [],
  experienceList = [],
  projectsList = [],
  educationList = [],
}) {

  return (
    <div className="w-[210mm] min-h-[297mm] p-12 font-serif text-[14px] text-stone-900 bg-[#FAF9F6] space-y-8">


      <div className="text-center space-y-2">

        <h1 className="text-4xl font-normal tracking-wide text-stone-950 italic">
          {resume.name || "Your Name"}
        </h1>


        <p className="text-xs uppercase tracking-widest text-stone-500 font-sans">
          {resume.title || "Your Job Title"}
        </p>



        <div className="flex flex-wrap justify-center gap-3 text-xs text-stone-400 font-sans pt-2">

          {resume.email && (
            <span>{resume.email}</span>
          )}

          {resume.phone && (
            <span>{resume.phone}</span>
          )}

          {resume.location && (
            <span>{resume.location}</span>
          )}

          {resume.linkedin && (
            <span>LinkedIn</span>
          )}

          {resume.github && (
            <span>GitHub</span>
          )}

          {(resume.portfolio || resume.website) && (
            <span>Portfolio</span>
          )}

        </div>


        <div className="w-16 h-[1px] bg-stone-300 mx-auto mt-4" />

      </div>





      {resume.summary && (

        <section className="max-w-xl mx-auto text-center font-sans text-stone-600 text-sm leading-relaxed italic">

          "{resume.summary}"

        </section>

      )}







      <div className="grid grid-cols-3 gap-8">


        <div className="col-span-2 space-y-6">



          {experienceList.length > 0 && (

            <section>

              <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-3 font-sans">
                Career Overview
              </h3>


              <div className="space-y-4">

                {experienceList.map((item,i)=>(

                  <div key={i}>


                    <div className="flex justify-between">

                      <h4 className="font-bold text-stone-900">
                        {item.role || item.position}
                      </h4>


                      <span className="text-stone-500 italic text-xs">
                        {item.company}
                      </span>


                    </div>


                    <p className="text-stone-600 text-xs mt-1.5 leading-relaxed font-sans">
                      {item.description}
                    </p>


                  </div>

                ))}

              </div>

            </section>

          )}








          {projectsList.length > 0 && (

            <section>


              <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-3 font-sans">
                Key Projects
              </h3>



              <div className="space-y-4">


                {projectsList.map((item,i)=>(

                  <div key={i}>


                    <div className="flex justify-between">


                      <h4 className="font-bold text-stone-900">
                        {item.name}
                      </h4>



                      {item.tech && (

                        <span className="text-stone-500 italic text-xs font-sans">
                          {item.tech}
                        </span>

                      )}


                    </div>



                    <p className="text-stone-600 text-xs mt-1.5 leading-relaxed font-sans">
                      {item.description}
                    </p>


                  </div>

                ))}


              </div>


            </section>

          )}



        </div>







        <div className="col-span-1 space-y-6 font-sans">





          {skillsList.length > 0 && (

            <section>


              <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-3">
                Skills
              </h3>



              <div className="flex flex-wrap gap-1">


                {skillsList.map((skill,i)=>(

                  <span
                    key={i}
                    className="border border-stone-200 text-stone-600 px-2 py-0.5 text-xs"
                  >
                    {skill}
                  </span>

                ))}


              </div>


            </section>

          )}








          {educationList.length > 0 && (

            <section>


              <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-3">
                Education
              </h3>



              {educationList.map((item,i)=>(

                <div key={i} className="text-xs mb-3">


                  <p className="font-bold text-stone-800">
                    {item.degree}
                  </p>


                  <p className="text-stone-500 italic">
                    {item.university || item.school}
                  </p>


                  <p className="text-stone-400 mt-0.5">
                    {item.year}
                  </p>


                </div>

              ))}


            </section>

          )}


        </div>


      </div>


    </div>
  );
}