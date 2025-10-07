export const metadata = {
  title: "Contact Us | RCOG IRC Bangladesh",
};

export default function ContactPage() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-center font-poppins text-3xl md:text-4xl font-bold text-[#1e293b] mb-12">
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <div className="bg-[#f9fafb] rounded-xl border border-gray-200 p-6">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b75bc]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b75bc]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b75bc]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b75bc]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b75bc]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#1b75bc] hover:bg-[#155a94] text-white px-6 py-3 rounded-md font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="space-y-6">
            <div className="bg-[#f0f8ff] rounded-xl border border-gray-200 p-6">
              <h3 className="font-poppins text-xl font-semibold text-[#1e293b] mb-2">
                Office
              </h3>
              <p className="text-gray-700">
                123, Sample Road, Dhaka 1200, Bangladesh
              </p>
            </div>
            <div className="bg-[#f0f8ff] rounded-xl border border-gray-200 p-6">
              <h3 className="font-poppins text-xl font-semibold text-[#1e293b] mb-2">
                Email
              </h3>
              <p className="text-gray-700">info@rcog-irc.org.bd</p>
            </div>
            <div className="bg-[#f0f8ff] rounded-xl border border-gray-200 p-6">
              <h3 className="font-poppins text-xl font-semibold text-[#1e293b] mb-2">
                Phone
              </h3>
              <p className="text-gray-700">+880 1234 567890</p>
            </div>
            <div className="bg-[#f0f8ff] rounded-xl border border-gray-200 p-6">
              <h3 className="font-poppins text-xl font-semibold text-[#1e293b] mb-2">
                Follow
              </h3>
              <p className="text-gray-700">
                Facebook · X · LinkedIn · YouTube · Instagram
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
