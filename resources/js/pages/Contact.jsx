import MainLayout from "../layouts/MainLayout";

export default function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "okri.nul22@gmail.com",
      href: "mailto:okri.nul22@gmail.com",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: "GitHub",
      value: "github.com/okrinul22",
      href: "https://github.com/okrinul22",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: "+62 823 8521 8649",
      href: "https://wa.me/6282385218649",
    },
  ];

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto py-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            <span className="gradient-text">Get In Touch</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Feel free to reach out for collaborations, job opportunities, or just to say hello!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center gap-6 hover:border-purple-300 hover:shadow-sm transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                {contact.icon}
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">{contact.label}</p>
                <p className="text-gray-900 text-lg font-medium group-hover:text-purple-500 transition-colors">
                  {contact.value}
                </p>
              </div>
              <svg
                className="w-5 h-5 text-gray-300 ml-auto group-hover:translate-x-2 group-hover:text-purple-400 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ))}
        </div>

        {/* Availability */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 text-center shadow-sm">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-green-600 text-sm mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for work
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-900">Let's Build Something Together</h2>
          <p className="text-gray-500 mb-6 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a project in mind
            or just want to chat, feel free to reach out!
          </p>

          <a
            href="mailto:okri.nul22@gmail.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
          >
            Send Email
          </a>
        </div>
      </div>
    </MainLayout>
  );
}
