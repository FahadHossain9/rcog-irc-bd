export const metadata = { title: "Membership Types" };

export default function MembershipTypesPage() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-poppins text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
          Membership Types
        </h1>
        <p className="text-gray-700">
          Details of FRCOG, MRCOG, and Associate membership categories.
        </p>
      </div>
    </section>
  );
}
