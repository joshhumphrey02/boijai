import { CheckCircle } from "lucide-react";
export function WHY() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-light text-center mb-16">
          Why You Should Consider Our Service
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureItem
            title="Best property listing website"
            description="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular."
          />
          <FeatureItem
            title="3000+ Properties to choose"
            description="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular."
          />
          <FeatureItem
            title="Have professional agents"
            description="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular."
          />
          <FeatureItem
            title="Easy property buying process"
            description="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular."
          />
          <FeatureItem
            title="24/7 Customer support"
            description="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular."
          />
          <FeatureItem
            title="Consists from classic to modern"
            description="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular."
          />
        </div>
      </div>
    </div>
  );
}
function FeatureItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex-col">
      <div className="mb-4">
        <CheckCircle
          size={40}
          className="text-orange-400"
          fill="#FFEBD8"
          strokeWidth={1.5}
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
