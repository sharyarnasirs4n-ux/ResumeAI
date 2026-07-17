export default function CreativeTemplate({
  resume,
  skillsList = [],
  experienceList = [],
  projectsList = [],
  educationList = [],
}) {
  const portfolio = resume.portfolio || resume.website || "";

  const cleanLink = (url) =>
    url
      ?.replace(/^https?:\/\//, "")
      .replace(/^www\./, "");

  return (
    <div className="p-12 space-y-8 font-serif bg-amber-50/10">

      <div className="border-b-2 border-amber-800 pb-6">

        <h1 className="text-4xl font-bold text-amber-950">
          {resume.name || "Your Name"}
        </h1>

        <p className="text-md italic text-amber-800 mt-1">
          {resume.title || "Your Job Title"}
        </p>


        <div className="flex flex-wrap gap-3 text-xs text-amber-900/60 font-sans mt-3">

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
              className="hover:underline text-amber-900"
            >
              {cleanLink(resume.linkedin)}
            </a>
          )}


          {resume.github && (
            <a
              href={resume.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-amber-900"
            >
              {cleanLink(resume.github)}
            </a>
          )}


          {portfolio && (
            <a
              href={portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-amber-900"
            >
              {cleanLink(portfolio)}
            </a>
          )}

        </div>

      </div>



      {resume.summary && (
        <section>

          <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-900 font-sans mb-2">
            My Story
          </h3>

          <p className="text-gray-700 text-sm italic leading-relaxed">
            {resume.summary}
          </p>

        </section>
      )}




      {experienceList.length > 0 && (
        <section>

          <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-900 font-sans mb-3">
            Milestones
          </h3>


          <div className="space-y-4">

            {experienceList.map((item, i) => (

              <div key={i} className="text-xs">

                <div className="flex justify-between font-bold text-amber-950">

                  <h4>
                    {item.role || item.position || "Role"}
                  </h4>


                  <span className="font-normal italic text-amber-950/70">
                    {item.company}
                  </span>

                </div>


                {item.description && (
                  <p className="text-gray-700 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                )}

              </div>

            ))}

          </div>

        </section>
      )}






      {projectsList.length > 0 && (
        <section>

          <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-900 font-sans mb-3">
            Selected Works
          </h3>


          <div className="grid grid-cols-2 gap-4">

            {projectsList.map((item, i) => (

              <div
                key={i}
                className="p-3 border border-amber-100 bg-amber-50/20 rounded"
              >

                <h4 className="font-bold text-amber-950 text-xs">
                  {item.name || item.title || "Project"}
                </h4>


                {item.tech && (
                  <span className="text-[10px] text-amber-800 italic">
                    {item.tech}
                  </span>
                )}


                {item.description && (
                  <p className="text-gray-700 text-xs mt-2 leading-relaxed">
                    {item.description}
                  </p>
                )}

              </div>

            ))}

          </div>

        </section>
      )}






      {skillsList.length > 0 && (
        <section>

          <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-900 font-sans mb-3">
            Toolbox
          </h3>


          <div className="flex flex-wrap gap-2">

            {skillsList.map((skill, i) => (

              <span
                key={i}
                className="bg-amber-100/50 border border-amber-200 text-amber-950 px-2.5 py-1 rounded text-xs font-sans"
              >
                {skill}
              </span>

            ))}

          </div>

        </section>
      )}






      {educationList.length > 0 && (
        <section>

          <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-900 font-sans mb-3">
            Education
          </h3>


          <div className="space-y-3">

            {educationList.map((item, i) => (

              <div
                key={i}
                className="flex justify-between text-xs"
              >

                <div>

                  <p className="font-bold text-amber-950">
                    {item.degree}
                  </p>


                  <p className="text-amber-900/70 italic">
                    {item.university || item.school}
                  </p>

                </div>


                <span className="text-amber-900/60 font-sans text-xs">
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