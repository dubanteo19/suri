export const CoverLetterPage = () => {
  return (
    <div className="min-h-screen  flex justify-center items-start py-10 px-4">
      <div className="relative bg-white max-w-[794px] w-full p-10 border-[6px] border-double border-gray-400 rounded-md shadow-2xl font-serif text-gray-900 leading-relaxed overflow-hidden">
        {/* Folded Corner */}
        <div className="absolute top-0 right-0 size-16 bg-gray-200 border-l border-b border-gray-400 transform rotate-45 translate-x-1/2 -translate-y-1/2 shadow-inner"></div>
        <h1 className="text-3xl font-bold text-center mb-8 underline">
          Cover Letter
        </h1>
        {/*The top */}
        <div className="text-sm mb-6">
          <strong>Thi Suu Le</strong>
          <div className="flex flex-col md:flex-row justify-between">
            <p>Address: 327 Bridge Ave</p>
            <p> Email: surihuynh012@gmail.com</p>
          </div>
          <div className="flex  flex-col md:flex-row justify-between">
            <p>Windsor, ON, N9B 2M3</p>
            <p>Phone number: (226) 961 4852</p>
          </div>
          <div className="text-sm mb-6">
            <strong>June 2, 2025</strong>
            <p>Director – Amber McKim</p>
            <p>ABC Day Nursery of Windsor</p>
            <p>Address: 888 Hanna St. E</p>
            <p>Windsor, ON N8X 2N9</p>
          </div>
        </div>
        {/*The body */}
        <div>
          <p className="mt-6">
            Dear Amber McKim,
            <br /> Early learning environments thrive when educators bring
            compassion, flexibility, and strong communication to their work.
            Your recent posting for an early childhood educator at ABC Day
            Nursery of Windsor caught my attention as an exciting opportunity to
            contribute to a team that values inclusive, responsive care. With a
            solid background in teaching and curriculum leadership, and as a
            current Early Childhood Education student at St. Clair College, I am
            confident that I bring the skills and mindset your team is seeking.
            <br /> Experience leading staff and developing educational programs
            at Rainbow English Centre taught me how to manage learning
            environments that support a wide range of student needs. While
            working with children from kindergarten to grade 12, I created
            individualized lesson plans and introduced retention strategies that
            resulted in improved student engagement. Before that, my teaching
            role at Duong Bach Mai High School gave me direct experience working
            with students with special needs and language learning barriers,
            requiring patient, adaptive instruction and close collaboration with
            families.
            <br /> Your center’s commitment to helping children build confidence
            and social-emotional skills aligns with my own educational values.
            My strengths in building relationships, creating inclusive lesson
            plans, and using positive behavior guidance will allow me to make a
            meaningful contribution. I bring a deep respect for children’s
            voices and a desire to support their development through play-based
            learning and respectful guidance.
            <br /> I would welcome the opportunity to meet with you and learn
            more about your program. I’ll follow up next week to see if we might
            arrange a time to connect. Thank you for considering my application.
            <p className="my-4">Warm regards,</p>
            <p>Thi Suu Le</p>
          </p>
        </div>
      </div>
    </div>
  );
};
