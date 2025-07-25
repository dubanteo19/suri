export const ReferenceLetterPage = () => {
  return (
    <div className="min-h-screen  flex justify-center items-start py-10 px-4">
      <div className="relative bg-white max-w-[794px] w-full p-10 border-[6px] border-double border-gray-400 rounded-md shadow-2xl font-serif text-gray-900 leading-relaxed overflow-hidden">
        {/* Folded Corner */}
        <div className="absolute top-0 right-0 size-16 bg-gray-200 border-l border-b border-gray-400 transform rotate-45 translate-x-1/2 -translate-y-1/2 shadow-inner"></div>

        <h1 className="text-3xl font-bold text-center mb-8 underline">
          Reference Letter
        </h1>

        {/* Sender Info */}
        <div className="text-sm mb-6">
          <p>Bich Pham Thi Ngoc</p>
          <p>Principal / Teacher</p>
          <p>DUONG BACH MAI HIGH SCHOOL</p>
          <p>
            Provincial Road 44, Phuoc Hoi Commune, Long Dat District, Ba Ria -
            Vung Tau Province, Vietnam
          </p>
          <p>+84 911 090 770</p>
          <p>phambich436@gmail.com</p>
        </div>

        {/* Body */}
        <div className="text-base space-y-5 text-justify">
          <p className="font-bold">To Whom It May Concern,</p>

          <p>
            I am pleased to write this letter of reference for{" "}
            <strong>Thi Suu Le</strong>, who has been an outstanding colleague
            and educator over the years. I have had the privilege of working
            alongside Thi Suu in various educational settings, both as a high
            school teacher at <strong>Duong Bach Mai High School</strong> and as
            the manager of <strong>Rainbow English Centre</strong>. Over the
            years, I have observed Suu’s dedication, work ethic, and passion for
            helping students succeed.
          </p>

          <p>
            Suu has over <strong>13 years of experience</strong> in teaching and
            managing educational initiatives. As a high school teacher, Suu
            demonstrated exceptional skill in tailoring lessons to meet the
            diverse learning needs of students, including those with special
            needs. She skillfully integrated assistive technologies and hands-on
            resources, ensuring that each student received the necessary support
            to thrive academically. Furthermore, her efforts to build strong
            relationships with students, parents, and faculty members created an
            environment of trust and respect, enhancing both academic and
            social-emotional growth for all her students.
          </p>

          <p>
            What sets Suu apart is her innate ability to connect with students,
            parents, and colleagues. She is a <strong>compassionate</strong> and
            empathetic individual who treats each person with respect and
            consideration, building a sense of community wherever she goes. Her
            flexibility, reliability, and commitment to student well-being have
            made her an <strong>invaluable asset</strong> to any team or
            classroom. In addition to her{" "}
            <strong>professional accomplishments</strong>, Suu holds
            certifications in CPR and First Aid and has completed a police
            vulnerability sector check, further underscoring her commitment to
            safety and well-being in her educational environments.
          </p>

          <p>
            I am <strong>confident</strong> that Suu will continue to excel and
            bring her wealth of knowledge, leadership, and passion for education
            to any new role. Her compassion, <strong>dedication</strong>, and
            skill in both teaching and management make her an{" "}
            <strong>exceptional candidate</strong> for any educational position.
            I highly recommend Suu Le without reservation.
            <br /> Should you require any further information, please do not
            hesitate to contact me.
          </p>

          {/* Signature */}
          <div className="pt-4">
            <p>Sincerely,</p>
            <p className="mt-6">Bich Pham Thi Ngoc</p>
            <p>Principal / Teacher</p>
            <p>+84 911 090 770</p>
          </div>
        </div>
      </div>
    </div>
  );
};
