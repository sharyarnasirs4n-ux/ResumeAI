import { TEMPLATES_REGISTRY } from "./templates";


function TemplateSelector({ template, setTemplate }) {
  const templates = Object.values(TEMPLATES_REGISTRY);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {templates.map((item) => {
        const isActive = template === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setTemplate(item.id)}
            className={`flex flex-col text-left p-3 rounded-2xl border-2 transition-all duration-200 ${
              isActive
                ? "border-blue-600 bg-blue-50/50 ring-2 ring-blue-600/10"
                : "border-gray-200 hover:border-gray-300 hover:bg-slate-50 bg-white"
            }`}
          >
            <span className={`font-semibold text-sm ${isActive ? "text-blue-700" : "text-gray-900"}`}>
              {item.name}
            </span>
            <span className="text-[10px] text-gray-500 mt-0.5">
              {item.description}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default TemplateSelector;