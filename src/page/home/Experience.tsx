const experiences = [
  {
    title: "High School Teacher",
    location: "Duong Bach Mai High",
    type: "Education",
  },
  {
    title: "Founder - Manager - Teacher",
    location: "Rainbow English Centre (VN)",
    type: "Professional",
  },
];

const MyExperience = () => {
  return (
    <div className=" mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        My Experience So Far
      </h2>
      <div className="relative flex items-center justify-between">
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-200 z-0"></div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative z-10 flex flex-col   items-center  w-1/2"
          >
            {/* Stone dot */}
            <div className="w-5 h-5 bg-primary-foreground rounded-full border-4 border-white shadow-lg mb-4"></div>

            {/* Info box */}
            <div className="bg-white p-4 rounded-xl shadow-md text-center w-80">
              <h3 className="text-lg font-semibold text-primary-foreground">
                {exp.title}
              </h3>
              <p className="text-gray-600">{exp.location}</p>
              <span className="inline-block mt-2 text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                {exp.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyExperience;
