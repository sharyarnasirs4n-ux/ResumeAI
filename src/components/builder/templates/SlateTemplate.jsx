export default function SlateTemplate({
  resume,
  skillsList = [],
  experienceList = [],
  projectsList = [],
  educationList = [],
}) {
  return (
    <div className="p-10 text-slate-800 space-y-8 bg-slate-50/30">

      <div className="flex justify-between items-start gap-6">

        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            {resume.name || "Your Name"}
          </h1>

          <h2 className="text-md font-semibold text-blue-600 mt-1">
            {resume.title || "Your Job Title"}
          </h2>
        </div>


        <div className="text-right text-xs text-slate-500 space-y-1 max-w-[250px]">

          {resume.email && (
            <p>
              <span className="font-bold text-slate-700">
                Email:
              </span>{" "}
              {resume.email}
            </p>
          )}

          {resume.phone && (
            <p>
              <span className="font-bold text-slate-700">
                Phone:
              </span>{" "}
              {resume.phone}
            </p>
          )}

          {resume.location && (
            <p>
              <span className="font-bold text-slate-700">
                Location:
              </span>{" "}
              {resume.location}
            </p>
          )}

          {resume.linkedin && (
            <p className="break-all">
              <span className="font-bold text-slate-700">
                LinkedIn:
              </span>{" "}
              {resume.linkedin}
            </p>
          )}

          {resume.github && (
            <p className="break-all">
              <span className="font-bold text-slate-700">
                GitHub:
              </span>{" "}
              {resume.github}
            </p>
          )}

          {(resume.portfolio || resume.website) && (
            <p className="break-all">
              <span className="font-bold text-slate-700">
                Portfolio:
              </span>{" "}
              {resume.portfolio || resume.website}
            </p>
          )}

        </div>

      </div>



      {resume.summary && (
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">

          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
            Professional Summary
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed">
            {resume.summary}
          </p>

        </div>
      )}




      <div className="grid grid-cols-12 gap-6">


        <div className="col-span-8 space-y-6">


          {experienceList.length > 0 && (

            <section>

              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Professional Milestones
              </h3>


              <div className="space-y-4">

                {experienceList.map((item, i) => (

                  <div
                    key={i}
                    className="relative pl-4 border-l-2 border-slate-200"
                  >

                    <h4 className="font-bold text-slate-900 text-sm">
                      {item.role || item.position || "Role"}
                    </h4>


                    <p className="text-xs text-blue-600 font-medium">
                      {item.company}
                    </p>


                    {(item.startDate || item.endDate) && (
                      <p className="text-[11px] text-slate-400">
                        {item.startDate} — {item.endDate || "Present"}
                      </p>
                    )}


                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                      {item.description}
                    </p>


                  </div>

                ))}

              </div>

            </section>

          )}






          {projectsList.length > 0 && (

            <section>

              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Featured Projects
              </h3>


              <div className="space-y-4">

                {projectsList.map((item, i) => (

                  <div
                    key={i}
                    className="relative pl-4 border-l-2 border-indigo-200"
                  >

                    <h4 className="font-bold text-slate-900 text-sm">
                      {item.name || item.title || "Project"}
                    </h4>


                    {(item.tech || item.technologies) && (
                      <p className="text-[10px] text-indigo-600 font-mono font-semibold uppercase">
                        {item.tech || item.technologies}
                      </p>
                    )}


                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                      {item.description}
                    </p>


                  </div>

                ))}

              </div>

            </section>

          )}

        </div>





        <div className="col-span-4 space-y-6">


          {skillsList.length > 0 && (

            <section>

              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Core Competencies
              </h3>


              <div className="flex flex-wrap gap-1">

                {skillsList.map((skill, i) => (

                  <span
                    key={i}
                    className="bg-slate-200/60 text-slate-700 px-2.5 py-1 rounded-lg text-xs font-medium"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </section>

          )}






          {educationList.length > 0 && (

            <section>

              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Education
              </h3>


              {educationList.map((item, i) => (

                <div
                  key={i}
                  className="text-xs mb-3"
                >

                  <p className="font-bold text-slate-800">
                    {item.degree}
                  </p>


                  <p className="text-slate-500">
                    {item.university || item.school}
                  </p>


                  <p className="text-slate-400">
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