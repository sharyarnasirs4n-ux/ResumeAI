export default function ModernTemplate({
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
    <div>


      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-8">


        <h1 className="text-3xl font-extrabold tracking-wide">
          {resume.name || "Your Name"}
        </h1>


        <h2 className="text-lg text-blue-100 font-medium mt-1">
          {resume.title || "Your Job Title"}
        </h2>





        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-blue-100 mt-3 border-t border-blue-500/30 pt-3">


          {resume.email && (
            <span>
              ✉ {resume.email}
            </span>
          )}



          {resume.phone && (
            <span>
              📞 {resume.phone}
            </span>
          )}



          {resume.location && (
            <span>
              📍 {resume.location}
            </span>
          )}



          {resume.linkedin && (

            <a
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline"
            >
              LinkedIn: {cleanLink(resume.linkedin)}
            </a>

          )}



          {resume.github && (

            <a
              href={resume.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline"
            >
              GitHub: {cleanLink(resume.github)}
            </a>

          )}



          {portfolio && (

            <a
              href={portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline"
            >
              Portfolio: {cleanLink(portfolio)}
            </a>

          )}


        </div>


      </div>





      <div className="p-8 space-y-6">



        {resume.summary && (

          <section>

            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-700 border-b pb-1">
              Professional Summary
            </h3>


            <p className="mt-2 text-gray-600 text-sm">
              {resume.summary}
            </p>


          </section>

        )}







        {skillsList.length > 0 && (

          <section>


            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-700 border-b pb-1">
              Skills
            </h3>



            <div className="flex flex-wrap gap-2 mt-3">


              {skillsList.map((skill, i) => (

                <span
                  key={i}
                  className="bg-slate-100 text-slate-800 px-3 py-1 rounded-md text-xs font-medium"
                >
                  {skill}
                </span>

              ))}


            </div>


          </section>

        )}








        {experiences.length > 0 && (

          <section>


            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-700 border-b pb-1">
              Experience
            </h3>



            <div className="space-y-4 mt-3">


              {experiences.map((item, i) => (

                <div key={i}>


                  <div className="flex justify-between font-semibold text-gray-900">


                    <h4>
                      {item.role || item.position || "Role"}
                    </h4>



                    <span className="text-gray-500 font-normal text-xs">
                      {item.company || "Company"}
                    </span>


                  </div>




                  {item.description && (

                    <p className="text-gray-600 text-xs mt-1">
                      {item.description}
                    </p>

                  )}


                </div>

              ))}


            </div>


          </section>

        )}










        {projects.length > 0 && (

          <section>


            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-700 border-b pb-1">
              Projects
            </h3>




            <div className="grid grid-cols-2 gap-4 mt-3">


              {projects.map((item, i) => (

                <div
                  key={i}
                  className="p-3 border border-gray-100 bg-slate-50/50 rounded-lg"
                >


                  <h4 className="font-bold text-gray-900 text-xs">
                    {item.name || item.title || "Project"}
                  </h4>



                  {item.tech && (

                    <span className="text-[10px] bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded font-mono font-medium block w-fit mt-1">
                      {item.tech}
                    </span>

                  )}



                  {item.description && (

                    <p className="text-gray-600 text-xs mt-2">
                      {item.description}
                    </p>

                  )}



                </div>

              ))}


            </div>


          </section>

        )}









        {educations.length > 0 && (

          <section>


            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-700 border-b pb-1">
              Education
            </h3>



            <div className="space-y-3 mt-3">


              {educations.map((item, i) => (

                <div
                  key={i}
                  className="flex justify-between"
                >


                  <div>


                    <p className="font-semibold text-gray-900">
                      {item.degree}
                    </p>


                    <p className="text-gray-500 text-xs">
                      {item.university || item.school}
                    </p>


                  </div>



                  {item.year && (

                    <span className="text-xs text-gray-400 font-medium">
                      {item.year}
                    </span>

                  )}


                </div>

              ))}


            </div>


          </section>

        )}



      </div>


    </div>
  );
}