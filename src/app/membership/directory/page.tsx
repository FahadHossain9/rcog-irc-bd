export const metadata = { title: "Member Directory" };

export default function MemberDirectoryPage() {
  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="font-poppins text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
          Member Directory
        </h1>
        <p className="text-gray-700">
          A searchable directory will be available here.
        </p>
      </div>
    </section>
  );
}
