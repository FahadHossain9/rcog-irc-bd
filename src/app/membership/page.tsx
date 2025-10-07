export const metadata = {
  title: "Membership | RCOG IRC Bangladesh",
};

export default function MembershipPage() {
  const types = [
    {
      name: "Fellow (FRCOG)",
      desc: "Senior members with distinguished contribution.",
    },
    {
      name: "Member (MRCOG)",
      desc: "Qualified members who passed MRCOG examinations.",
    },
    { name: "Associate", desc: "Clinicians and trainees interested in O&G." },
  ];

  const benefits = [
    "Access to protocols and clinical resources",
    "Discounts on training and conferences",
    "Networking with national and international faculty",
    "Opportunities for research and publications",
  ];

  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-center font-poppins text-3xl md:text-4xl font-bold text-[#1e293b] mb-12">
          Membership
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {types.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
            >
              <h3 className="font-poppins text-xl font-semibold text-[#1e293b] mb-2">
                {t.name}
              </h3>
              <p className="text-gray-700 text-sm">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm mb-10">
          <h2 className="font-poppins text-2xl font-bold text-[#1e293b] mb-4">
            Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="bg-[#1b75bc] hover:bg-[#155a94] text-white px-8 py-3 rounded-md font-semibold"
          >
            Join Our Community
          </a>
        </div>
      </div>
    </section>
  );
}
