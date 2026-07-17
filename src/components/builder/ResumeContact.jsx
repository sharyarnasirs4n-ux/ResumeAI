function ResumeContact({ resume }) {
  const items = [
    resume.email,
    resume.phone,
    resume.location,
    resume.linkedin,
    resume.github,
    resume.website,
  ].filter(Boolean);

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

export default ResumeContact;