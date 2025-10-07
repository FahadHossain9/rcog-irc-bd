export const metadata = { title: "How to Apply | Membership" };

export default function MembershipApplyPage() {
  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-poppins text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
          How to Apply
        </h1>
        <p className="text-gray-700 mb-6">
          Application steps, eligibility, and required documents will be
          presented here.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#1b75bc] hover:bg-[#155a94] text-white px-6 py-3 rounded-md font-semibold"
        >
          Contact for Assistance
        </a>
      </div>
    </section>
  );
}
