import { Fragment } from "react";

const pillars = [
  { name: "Conviction",      desc: "The founder's original knowing." },
  { name: "Philosophy",      desc: "What that conviction reveals about the world." },
  { name: "Consumer Truth",  desc: "What the world has already decided." },
];

function Gate({ label, saffron = false, subtext }: { label: string; saffron?: boolean; subtext?: string }) {
  return (
    <div className="border-t border-b border-dust py-4 bg-parchment">
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-dust" />
        <p className={`font-epilogue font-semibold text-[10px] uppercase tracking-widest whitespace-nowrap ${saffron ? "text-saffron" : "text-ink"}`}>
          {label}
        </p>
        <div className="flex-1 h-px bg-dust" />
      </div>
      {subtext && (
        <p className="font-epilogue font-light italic text-[12px] text-stone text-center mt-1">
          {subtext}
        </p>
      )}
    </div>
  );
}

const phases = [
  {
    num: "01", name: "EXCAVATE",
    desc: "Where does convention operate? What territory is unclaimed?",
    layers: [
      { name: "Industry Code Audit",  purpose: "Convention" },
      { name: "Category Scan",        purpose: "Territory" },
      { name: "Competitive Audit",    purpose: "Positioning" },
      { name: "Consumer Truth",       purpose: "Perception" },
    ],
  },
  {
    num: "02", name: "DISTIL",
    desc: "What is original? What only this brand can honestly claim?",
    layers: [
      { name: "Frequency Scan",         purpose: "Repetition" },
      { name: "Differentiation Engine", purpose: "Ownership" },
      { name: "Voice Archaeology",      purpose: "Language" },
      { name: "Soul Compass",           purpose: "Values" },
    ],
  },
  {
    num: "03", name: "EXPRESS",
    desc: "What form does the truth take? How does it move?",
    layers: [
      { name: "Sensory Audit",          purpose: "Experience" },
      { name: "Visual Brief Engine",    purpose: "Identity" },
      { name: "Verbal Identity",        purpose: "Voice" },
      { name: "Brand OS Architecture",  purpose: "System" },
    ],
  },
];

const interPhaseGates = [
  {
    label: "INTERSECTION TEST",
    saffron: false,
    subtext: "The conviction must be genuine. The differentiation must be singular.",
  },
  {
    label: "ONLY YOU TEST",
    saffron: true,
    subtext: "If another brand could say it — we remove it.",
  },
] as const;

export default function FrameworkDiagram() {
  return (
    <section className="bg-parchment">
      <div className="max-w-[800px] mx-auto py-10 md:py-16 px-4 md:px-8">

        {/* Foundation */}
        <div className="bg-ink p-6 md:p-10">
          <p className="font-epilogue font-semibold text-[10px] text-stone uppercase tracking-widest text-center mb-6">
            THE FOUNDATION
          </p>
          <div className="flex flex-col md:flex-row">
            {pillars.map((p, i) => (
              <Fragment key={p.name}>
                {i > 0 && (
                  <div className="hidden md:block w-px self-stretch bg-stone opacity-20" />
                )}
                <div className="flex-1 px-4 md:px-6 py-3 md:py-0 text-center md:text-left">
                  <p className="font-epilogue font-semibold text-[15px] text-parchment">{p.name}</p>
                  <p className="font-epilogue font-light text-[13px] text-stone mt-1">{p.desc}</p>
                </div>
              </Fragment>
            ))}
          </div>
          <div className="w-2 h-2 rounded-full bg-saffron mx-auto mt-6" />
          <p className="font-epilogue font-light italic text-[12px] text-stone text-center mt-2">
            The convergence point is the brand.
          </p>
        </div>

        {/* Convergence Test */}
        <Gate label="CONVERGENCE TEST" />

        {/* Phases */}
        {phases.map((phase, i) => (
          <div key={phase.num}>
            <div className="border-l-2 border-saffron pl-4 md:pl-8 py-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  <p className="font-epilogue font-light text-[11px] text-stone uppercase tracking-widest">
                    PHASE {phase.num}
                  </p>
                  <p className="font-epilogue font-semibold text-[20px] text-ink mt-0.5">
                    {phase.name}
                  </p>
                </div>
                <p className="font-epilogue font-light italic text-[13px] text-stone md:text-right md:max-w-[280px] leading-relaxed">
                  {phase.desc}
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {phase.layers.map((layer) => (
                  <div key={layer.name} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-saffron shrink-0" />
                    <p className="font-epilogue font-light text-[14px] text-ink">{layer.name}</p>
                    <p className="font-epilogue font-light text-[12px] text-stone">{layer.purpose}</p>
                  </div>
                ))}
              </div>
            </div>
            {i < phases.length - 1 && (
              <Gate
                label={interPhaseGates[i].label}
                saffron={interPhaseGates[i].saffron}
                subtext={interPhaseGates[i].subtext}
              />
            )}
          </div>
        ))}

        {/* Brand OS */}
        <div className="bg-ink p-6 md:p-10 text-center">
          <p className="font-epilogue font-semibold text-[10px] text-stone uppercase tracking-widest mb-3">
            THE DELIVERABLE
          </p>
          <p className="font-caveat text-[36px] text-parchment">Brand OS</p>
          <p className="font-epilogue font-light text-[15px] text-stone max-w-[480px] mx-auto mt-3 leading-relaxed">
            The founder&rsquo;s conviction, made transmittable for the first time.
          </p>
          <p className="font-epilogue font-light text-[12px] text-stone mt-4">
            Conviction{" "}
            <span className="text-saffron">&middot;</span>{" "}
            Philosophy{" "}
            <span className="text-saffron">&middot;</span>{" "}
            Consumer Truth{" "}
            <span className="text-saffron">&middot;</span>{" "}
            Soul{" "}
            <span className="text-saffron">&middot;</span>{" "}
            Body
          </p>
        </div>

      </div>
    </section>
  );
}
