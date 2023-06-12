
const testimonials = [
  {
    quote:
      "“Finally, I've found a company that delivers outstanding results in digital marketing, education, and hospitality. Atoms Group has exceeded my expectations, and their expertise has truly helped my business grow.”",
    author: "John Doe",
    position: "CEO, Example Company",
    avatar: "cartoon.jpg",
  },
  {
    quote:
      "“Working with Atoms Group has been a game-changer for my online presence. Their strategic approach and attention to detail have boosted my brand's visibility and engagement. I highly recommend their services.”",
    author: "Jane Smith",
    position: "Founder, XYZ Startup",
    avatar: "cartoon.jpg",
  },
  {
    quote:
      "“Atoms Group is a reliable partner that has transformed our digital marketing efforts. Their team's expertise and innovative solutions have significantly increased our online reach and conversions. We're thrilled with the results.”",
    author: "Michael Johnson",
    position: "Marketing Director, ABC Company",
    avatar: "cartoon.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="py-12 bg-gray-100" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Our Client&apos;s Words
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="max-w-md mx-auto rounded-md bg-white shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="mb-4 flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  ))}
                </div>
                <p className="text-lg text-gray-800">{testimonial.quote}</p>
              </div>
              <div className="border-t border-gray-200 py-4 px-6 flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover mr-4"
                  src={testimonial.avatar}
                  alt="Testimonial Avatar"
                />
                <div>
                  <p className="text-base font-semibold text-gray-800">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
