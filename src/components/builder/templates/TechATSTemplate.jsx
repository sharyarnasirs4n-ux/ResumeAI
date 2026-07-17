export default function TechATSTemplate({
  resume,
  skillsList = [],
  experienceList = [],
  projectsList = [],
  educationList = [],
}) {
  return (
    <div className="p-10 font-mono text-[13px] text-gray-900 bg-white space-y-6">


      <div className="border-b-2 border-gray-900 pb-4">

        <h1 className="text-3xl font-extrabold tracking-tight uppercase">
          {resume.name || "Your Name"}
        </h1>


        <p className="text-sm font-semibold text-gray-700 tracking-wider mt-1 uppercase">
          {resume.title || "Your Job Title"}
        </p>



        <div className="flex flex-col gap-1 text-xs text-gray-500 mt-3 font-sans">

          {resume.email && (
            <span>
              <b className="text-gray-700">Email:</b>{" "}
              {resume.email}
            </span>
          )}


          {resume.phone && (
            <span>
              <b className="text-gray-700">Phone:</b>{" "}
              {resume.phone}
            </span>
          )}


          {resume.location && (
            <span>
              <b className="text-gray-700">Location:</b>{" "}
              {resume.location}
            </span>
          )}


          {resume.linkedin && (
            <span className="break-all">
              <b className="text-gray-700">LinkedIn:</b>{" "}
              {resume.linkedin}
            </span>
          )}


          {resume.github && (
            <span className="break-all">
              <b className="text-gray-700">GitHub:</b>{" "}
              {resume.github}
            </span>
          )}


          {(resume.portfolio || resume.website) && (
            <span className="break-all">
              <b className="text-gray-700">Portfolio:</b>{" "}
              {resume.portfolio || resume.website}
            </span>
          )}

        </div>

      </div>





      {resume.summary && (

        <section>

          <h3 className="font-extrabold uppercase tracking-wider text-sm border-b border-gray-300 pb-1 mb-2">
            01. Profile
          </h3>


          <p className="text-gray-600 font-sans leading-relaxed">
            {resume.summary}
          </p>

        </section>

      )}







      {skillsList.length > 0 && (

        <section>

          <h3 className="font-extrabold uppercase tracking-wider text-sm border-b border-gray-300 pb-1 mb-2">
            02. Skills
          </h3>


          <div className="flex flex-wrap gap-1.5 font-sans">

            {skillsList.map((skill, i) => (

              <span
                key={i}
                className="bg-gray-100 text-gray-800 px-2 py-0.5 border border-gray-200 rounded text-xs"
              >
                {skill}
              </span>

            ))}

          </div>

        </section>

      )}








      {experienceList.length > 0 && (

        <section>


          <h3 className="font-extrabold uppercase tracking-wider text-sm border-b border-gray-300 pb-1 mb-3">
            03. Experience
          </h3>



          <div className="space-y-4 font-sans">


            {experienceList.map((item, i) => (

              <div key={i}>


                <div className="flex justify-between font-bold text-gray-900">


                  <h4>
                    {item.role || item.position || "Role"}
                  </h4>


                  <span className="text-gray-500 font-normal">
                    {item.company}
                  </span>


                </div>




                {(item.startDate || item.endDate) && (

                  <p className="text-xs text-gray-400">
                    {item.startDate} — {item.endDate || "Present"}
                  </p>

                )}




                <p className="text-gray-600 text-xs mt-1 leading-relaxed">
                  {item.description}
                </p>


              </div>

            ))}


          </div>


        </section>

      )}








      {projectsList.length > 0 && (

        <section>


          <h3 className="font-extrabold uppercase tracking-wider text-sm border-b border-gray-300 pb-1 mb-3">
            04. Projects
          </h3>



          <div className="space-y-4 font-sans">


            {projectsList.map((item, i) => (

              <div key={i}>


                <div className="flex justify-between font-bold text-gray-900">


                  <h4>
                    {item.name || item.title || "Project"}
                  </h4>



                  {(item.tech || item.technologies) && (

                    <span className="text-xs text-gray-500 font-mono font-normal">
                      [{item.tech || item.technologies}]
                    </span>

                  )}


                </div>



                <p className="text-gray-600 text-xs mt-1 leading-relaxed">
                  {item.description}
                </p>


              </div>

            ))}


          </div>


        </section>

      )}








      {educationList.length > 0 && (

        <section>


          <h3 className="font-extrabold uppercase tracking-wider text-sm border-b border-gray-300 pb-1 mb-3">
            05. Education
          </h3>




          <div className="space-y-3 font-sans">


            {educationList.map((item, i) => (

              <div
                key={i}
                className="flex justify-between text-xs"
              >


                <div>

                  <p className="font-bold text-gray-900">
                    {item.degree}
                  </p>


                  <p className="text-gray-500">
                    {item.university || item.school}
                  </p>


                </div>



                <span className="text-gray-400">
                  {item.year}
                </span>



              </div>

            ))}


          </div>


        </section>

      )}



    </div>
  );
}