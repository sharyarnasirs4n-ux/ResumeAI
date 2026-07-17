import React from "react";

function ProfessionalTemplate({ resume }) {
  const getSkillsArray = () => {
    if (!resume.skills) return [];
    if (typeof resume.skills === "string") {
      return resume.skills.split(",").map(s => s.trim()).filter(Boolean);
    }
    return Array.isArray(resume.skills) ? resume.skills : [];
  };

  const skillsList = getSkillsArray();

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl flex text-slate-800 font-sans">
      
      <div className="w-[35%] bg-slate-50 border-r border-slate-200/80 p-8 flex flex-col justify-between">
        <div>

          <div className="flex flex-col items-center text-center pb-8 border-b border-slate-200">

            {resume.photo && (
              <img
                src={resume.photo}
                alt=""
                className="w-24 h-24 rounded-full object-cover"
              />
            )}

            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 mt-5 leading-tight">
              {resume.name || "Your Name"}
            </h1>

            <p className="text-sm font-semibold text-blue-600 tracking-wider uppercase mt-1.5">
              {resume.title || "Target Job Title"}
            </p>

          </div>


          <div className="mt-8">

            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              Contact Details
            </h3>

            <ul className="space-y-3 text-[13px] text-slate-600">

              {resume.email && (
                <li>
                  <span className="font-semibold text-slate-800">
                    Email:
                  </span>{" "}
                  {resume.email}
                </li>
              )}

              {resume.phone && (
                <li>
                  <span className="font-semibold text-slate-800">
                    Phone:
                  </span>{" "}
                  {resume.phone}
                </li>
              )}

              {resume.location && (
                <li>
                  <span className="font-semibold text-slate-800">
                    Location:
                  </span>{" "}
                  {resume.location}
                </li>
              )}


              {resume.linkedin && (
                <li>
                  <span className="font-semibold text-slate-800">
                    LinkedIn:
                  </span>{" "}
                  {resume.linkedin}
                </li>
              )}

              {resume.github && (
                <li>
                  <span className="font-semibold text-slate-800">
                    GitHub:
                  </span>{" "}
                  {resume.github}
                </li>
              )}

              {(resume.portfolio || resume.website) && (
                <li>
                  <span className="font-semibold text-slate-800">
                    Portfolio:
                  </span>{" "}
                  {resume.portfolio || resume.website}
                </li>
              )}

            </ul>

          </div>


          {skillsList.length > 0 && (
            <div className="mt-8">

              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                Core Expertise
              </h3>

              <div className="flex flex-wrap gap-1.5">

                {skillsList.map((skill,index)=>(
                  <span
                    key={index}
                    className="text-[11px] font-medium bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md shadow-sm"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          )}

        </div>


        <div className="text-[10px] text-slate-400 text-center pt-8">
          References available upon request
        </div>

      </div>



      <div className="flex-1 p-10 flex flex-col justify-between">

        <div className="space-y-9">


          {resume.summary && (
            <section>

              <div className="flex items-center gap-4 mb-3">

                <h2 className="text-sm font-extrabold uppercase tracking-widest text-slate-900 whitespace-nowrap">
                  Professional Profile
                </h2>

                <div className="h-[1px] w-full bg-slate-200"></div>

              </div>


              <p className="text-[13.5px] leading-relaxed text-slate-600 text-justify">
                {resume.summary}
              </p>

            </section>
          )}



          {resume.experience?.length > 0 && (
            <section>

              <div className="flex items-center gap-4 mb-6">

                <h2 className="text-sm font-extrabold uppercase tracking-widest text-slate-900 whitespace-nowrap">
                  Work Experience
                </h2>

                <div className="h-[1px] w-full bg-slate-200"></div>

              </div>


              <div className="space-y-6">

                {resume.experience.map((job,index)=>(

                  <div
                    key={index}
                    className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[1px] before:bg-slate-200"
                  >

                    <span className="absolute -left-[4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-white"></span>


                    <div className="flex justify-between items-baseline">

                      <h3 className="text-[15px] font-bold text-slate-900">
                        {job.position || job.role}
                      </h3>


                      <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        {job.startDate} — {job.endDate || "Present"}
                      </span>

                    </div>


                    <p className="text-xs font-semibold text-slate-500 mt-0.5">
                      {job.company}
                    </p>


                    {job.description && (
                      <p className="text-[13px] leading-relaxed text-slate-600 mt-2.5 text-justify">
                        {job.description}
                      </p>
                    )}

                  </div>

                ))}

              </div>

            </section>
          )}




          {resume.education?.length > 0 && (

            <section>

              <div className="flex items-center gap-4 mb-4">

                <h2 className="text-sm font-extrabold uppercase tracking-widest text-slate-900 whitespace-nowrap">
                  Education & Credentials
                </h2>

                <div className="h-[1px] w-full bg-slate-200"></div>

              </div>


              <div className="grid grid-cols-2 gap-4">

                {resume.education.map((edu,index)=>(

                  <div
                    key={index}
                    className="p-3.5 bg-slate-50 rounded-lg border border-slate-100"
                  >

                    <h3 className="text-xs font-extrabold text-slate-900">
                      {edu.degree}
                    </h3>


                    <p className="text-xs text-slate-500 mt-0.5">
                      {edu.school || edu.university}
                    </p>


                    {edu.year && (
                      <span className="text-[10px] font-semibold text-slate-400 mt-2 block">
                        Class of {edu.year}
                      </span>
                    )}

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

export default ProfessionalTemplate;