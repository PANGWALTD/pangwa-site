"use client"
function Testimonials() {
  const testimonials = [
    {
      name: "Paul Otieno",
      title: "CEO of [Business Name]",
      quote:
        "PANGWA's funding fair helped us secure the capital we needed. Their matchmaking service also connected us with valuable international partners.",
    },
    {
      name: "Sarah Kamau",
      title: "Founder of [Business Name]",
      quote:
        "Thanks to PANGWA's advisory services, we were able to streamline our operations and plan for future growth. Their workshops were incredibly informative.",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <p className="text-lg italic text-gray-600 mb-4">&#34;{testimonial.quote}&#34;</p>
              <div className="flex items-center justify-center space-x-4">
                <div className="text-left">
                  <p className="font-semibold text-xl text-gray-800">
                    {testimonial.name}
                  </p>
                  <span className="text-sm text-gray-500">
                    {testimonial.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
