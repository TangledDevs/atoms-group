const companiesData = [
  {
    name: "Atoms Education",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam maiores quas sequi dolores sapiente nam aspernatur tempore alias, ex laudantium dicta aliquam ab blanditiis itaque!",
    image: "image.jpg",
  },
  {
    name: "Atoms Digital Solutions",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam maiores quas sequi dolores sapiente nam aspernatur tempore alias, ex laudantium dicta aliquam ab blanditiis itaque!",
    image: "image.jpg",
  },
  {
    name: "Atoms Visual Media",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam maiores quas sequi dolores sapiente nam aspernatur tempore alias, ex laudantium dicta aliquam ab blanditiis itaque!",
    image: "image.jpg",
  },
  {
    name: "Atoms Tutions",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam maiores quas sequi dolores sapiente nam aspernatur tempore alias, ex laudantium dicta aliquam ab blanditiis itaque!",
    image: "image.jpg",
  },
];
const Companies = () => {
  return (
    <div id="companies" className="py-12 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-secondary mb-8">
          Our Companies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {companiesData.map((company, index) => {
            return (
              <div
                className="max-w-md bg-white border border-gray-200 rounded-lg shadow  h-full"
                key={index}
              >
                <div className="flex items-center justify-center">
                  <img className="rounded-t-lg" src={company.image} alt="" />
                </div>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-secondary">
                      {company.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700">
                    {company.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:outline-none"
                  >
                    Know more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Companies;
