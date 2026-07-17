import {
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

export default function ExecutiveTemplate({
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
    <div className="grid grid-cols-12 min-h-[297mm] bg-white">


      <aside className="col-span-4 bg-slate-900 text-white p-8">

        <h1 className="text-3xl font-bold tracking-wide break-words">
          {resume.name || "Your Name"}
        </h1>


        <p className="text-slate-300 mt-2 text-sm">
          {resume.title || "Professional Title"}
        </p>



        <div className="mt-8 space-y-3 text-xs">


          {resume.email && (
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span className="break-all">
                {resume.email}
              </span>
            </div>
          )}



          {resume.phone && (
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>
                {resume.phone}
              </span>
            </div>
          )}



          {resume.location && (
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>
                {resume.location}
              </span>
            </div>
          )}




          {resume.linkedin && (
            <a
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-300"
            >
              <span className="font-bold">
                in
              </span>

              <span className="break-all">
                {cleanLink(resume.linkedin)}
              </span>
            </a>
          )}




          {resume.github && (
            <a
              href={resume.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-300"
            >
              <span className="font-bold">
                GH
              </span>

              <span className="break-all">
                {cleanLink(resume.github)}
              </span>
            </a>
          )}





          {portfolio && (
            <a
              href={portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-300"
            >
              <Globe size={14} />

              <span className="break-all">
                {cleanLink(portfolio)}
              </span>

            </a>
          )}


        </div>





        {skillsList.length > 0 && (

          <div className="mt-10">

            <h3 className="uppercase tracking-widest text-xs font-bold border-b border-slate-700 pb-2 mb-4">
              Skills
            </h3>


            <div className="flex flex-wrap gap-2">

              {skillsList.map((skill, index) => (

                <span
                  key={index}
                  className="bg-slate-700 px-3 py-1 rounded-full text-[11px]"
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        )}


      </aside>





      <main className="col-span-8 p-10 space-y-8">



        {resume.summary && (

          <section>

            <h2 className="uppercase text-sm font-bold tracking-widest border-b pb-2 mb-3">
              Professional Summary
            </h2>


            <p className="text-sm text-gray-700 leading-7">
              {resume.summary}
            </p>

          </section>

        )}







        {experienceList.length > 0 && (

          <section>

            <h2 className="uppercase text-sm font-bold tracking-widest border-b pb-2 mb-4">
              Experience
            </h2>


            <div className="space-y-6">

              {experienceList.map((item, index) => (

                <div key={index}>


                  <div className="flex justify-between">

                    <div>

                      <h3 className="font-semibold">
                        {item.role || item.position || "Role"}
                      </h3>


                      <p className="text-blue-700 text-sm">
                        {item.company}
                      </p>

                    </div>


                  </div>



                  {item.description && (

                    <p className="text-sm text-gray-600 mt-2 leading-6">
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

            <h2 className="uppercase text-sm font-bold tracking-widest border-b pb-2 mb-4">
              Projects
            </h2>


            <div className="space-y-5">

              {projectsList.map((item, index) => (

                <div key={index}>


                  <h3 className="font-semibold">
                    {item.name || item.title || "Project"}
                  </h3>



                  {item.tech && (

                    <p className="text-xs text-blue-600 mt-1">
                      {item.tech}
                    </p>

                  )}




                  {item.description && (

                    <p className="text-sm text-gray-600 mt-2">
                      {item.description}
                    </p>

                  )}



                </div>

              ))}


            </div>


          </section>

        )}







        {educationList.length > 0 && (

          <section>

            <h2 className="uppercase text-sm font-bold tracking-widest border-b pb-2 mb-4">
              Education
            </h2>


            <div className="space-y-4">


              {educationList.map((item, index) => (

                <div
                  key={index}
                  className="flex justify-between"
                >

                  <div>

                    <h3 className="font-semibold">
                      {item.degree}
                    </h3>


                    <p className="text-gray-500 text-sm">
                      {item.university || item.school}
                    </p>


                  </div>


                  <span className="text-gray-400 text-sm">
                    {item.year}
                  </span>


                </div>

              ))}


            </div>


          </section>

        )}



      </main>

    </div>
  );
}