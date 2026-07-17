export default function MinimalTemplate({
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


  const projects =
    projectsList.length > 0
      ? projectsList
      : resume.projects || [];


  const portfolio = resume.portfolio || resume.website || "";


  const cleanLink = (url) =>
    url
      ?.replace(/^https?:\/\//, "")
      .replace(/^www\./, "");



  return (
    <div className="p-12 space-y-8 font-sans">


      <div className="text-center">

        <h1 className="text-4xl font-light uppercase tracking-widest text-slate-900">
          {resume.name || "Your Name"}
        </h1>


        <h2 className="text-sm text-slate-500 uppercase tracking-widest mt-2 font-medium">
          {resume.title || "Your Job Title"}
        </h2>



        <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-400 mt-4">


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
            <a
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-700 underline"
            >
              {cleanLink(resume.linkedin)}
            </a>
          )}



          {resume.github && (
            <a
              href={resume.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-700 underline"
            >
              {cleanLink(resume.github)}
            </a>
          )}



          {portfolio && (
            <a
              href={portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-700 underline"
            >
              {cleanLink(portfolio)}
            </a>
          )}


        </div>

      </div>




      <hr className="border-gray-200" />






      {resume.summary && (

        <section className="max-w-2xl mx-auto text-center">

          <p className="text-gray-600 italic text-sm">
            {resume.summary}
          </p>

        </section>

      )}






      <div className="grid grid-cols-3 gap-8">


        <div className="col-span-1 space-y-6">



          {skillsList.length > 0 && (

            <section>


              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b pb-2 mb-3">
                Skills
              </h3>


              <div className="flex flex-wrap gap-1.5">


                {skillsList.map((skill, i) => (

                  <span
                    key={i}
                    className="border border-slate-200 text-slate-600 px-2 py-0.5 rounded text-[11px]"
                  >
                    {skill}
                  </span>

                ))}


              </div>


            </section>

          )}








          {educations.length > 0 && (

            <section>


              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b pb-2 mb-3">
                Education
              </h3>



              {educations.map((item, i) => (

                <div key={i} className="text-xs mb-3">


                  <p className="font-semibold text-slate-800">
                    {item.degree}
                  </p>


                  <p className="text-slate-500">
                    {item.university || item.school}
                  </p>


                  {item.year && (

                    <p className="text-slate-400 mt-0.5">
                      {item.year}
                    </p>

                  )}


                </div>

              ))}


            </section>

          )}


        </div>








        <div className="col-span-2 space-y-6">



          {experiences.length > 0 && (

            <section>


              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b pb-2 mb-3">
                Experience
              </h3>



              <div className="space-y-4">


                {experiences.map((item, i) => (

                  <div key={i} className="text-xs">


                    <div className="flex justify-between">


                      <h4 className="font-semibold text-slate-900">
                        {item.role || item.position || "Role"}
                      </h4>



                      <span className="text-slate-400">
                        {item.company}
                      </span>


                    </div>



                    <p className="text-slate-500 mt-1 leading-relaxed">
                      {item.description}
                    </p>


                  </div>

                ))}


              </div>


            </section>

          )}










          {projects.length > 0 && (

            <section>


              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b pb-2 mb-3">
                Projects
              </h3>



              <div className="space-y-4">


                {projects.map((item, i) => (

                  <div key={i} className="text-xs">


                    <h4 className="font-semibold text-slate-900">


                      {item.name || item.title}


                      {item.tech && (

                        <span className="font-normal text-slate-400">
                          {" "}({item.tech})
                        </span>

                      )}


                    </h4>



                    <p className="text-slate-500 mt-1 leading-relaxed">
                      {item.description}
                    </p>


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