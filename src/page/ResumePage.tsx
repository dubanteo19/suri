export const ResumePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="relative bg-white w-full max-w-[800px] p-10 rounded-md border-[6px] border-double border-gray-400 shadow-2xl font-sans text-gray-900 leading-relaxed overflow-hidden">
        {/* Folded Corner */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gray-200 border-l border-b border-gray-400 transform rotate-45 translate-x-1/2 -translate-y-1/2 shadow-inner"></div>

        {/* Name */}
        <h1 className="text-4xl font-extrabold text-center tracking-wide text-gray-800 mb-2">
          Thi Suu Le
        </h1>

        {/* Contact Info */}
        <div className="text-sm mb-8 ">
          <p>
            <strong>Address:</strong> 327 Bridge Ave, Windsor, ON, N9B 2M3
          </p>
          <p>
            <strong>Email:</strong> surihuynh012@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> (226) 961 4852
          </p>
        </div>

        <div className="space-y-8 text-[15px]">
          {/* Objective */}
          <section>
            <h2 className="text-lg font-bold border-b pb-1 mb-2 uppercase text-gray-700">
              Objective
            </h2>
            <p>
              Motivated and compassionate early childhood education student with
              teaching and leadership experience across diverse age groups.
              Skilled in inclusive classroom practices, curriculum development,
              and child-centered guidance. Seeking to support children’s
              learning and development in a nurturing, play-based environment.
            </p>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-lg font-bold border-b pb-1 mb-2 uppercase text-gray-700">
              Education
            </h2>
            <div>
              <p className="font-semibold">
                ON Early Childhood Education Diploma
              </p>
              <p>St. Clair College – Windsor (In Progress)</p>
              <p className="text-sm text-gray-500">
                Expected Completion: April 2026
              </p>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-lg font-bold border-b pb-1 mb-2 uppercase text-gray-700">
              Experience
            </h2>

            <div className="mb-4">
              <p className="font-semibold">Rainbow English Centre – Vietnam</p>
              <p className="italic text-sm">
                Education Manager / Curriculum Developer
              </p>
              <p className="text-sm text-gray-500">2013 – Present</p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>
                  Managed day-to-day operations and supervised a team of
                  educators.
                </li>
                <li>
                  Created custom curriculum for students in Kindergarten through
                  Grade 12.
                </li>
                <li>
                  Designed special programs for students with varying abilities
                  and learning needs.
                </li>
                <li>
                  Implemented retention strategies and supported family
                  engagement.
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">
                Duong Bach Mai High School – Vietnam
              </p>
              <p className="italic text-sm">High School Teacher</p>
              <p className="text-sm text-gray-500">2010 – 2023</p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>
                  Taught and supported students with diverse learning styles and
                  special needs.
                </li>
                <li>
                  Developed inclusive lesson plans and classroom strategies.
                </li>
                <li>
                  Built positive relationships with students and maintained open
                  communication with families and staff.
                </li>
              </ul>
            </div>
          </section>

          {/* Volunteer / Practicum */}
          <section>
            <h2 className="text-lg font-bold border-b pb-1 mb-2 uppercase text-gray-700">
              Volunteer & Practicum
            </h2>
            <p>
              Volunteered on Sunday, April 11, 2025 in support of the "Start
              Here, Go Anywhere Run".
            </p>
            <p>St. Clair College – Windsor, ON</p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-lg font-bold border-b pb-1 mb-2 uppercase text-gray-700">
              Skills
            </h2>
            <ul className="list-disc ml-5 space-y-1">
              <li>Child-centered guidance strategies</li>
              <li>Play-based curriculum planning</li>
              <li>Inclusive teaching practices</li>
              <li>Family engagement</li>
              <li>Team leadership</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
