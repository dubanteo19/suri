import { ImageContainer } from "@/components/common/ImageContainer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const PhilosophyPage = () => {
  return (
    <div className=" px-5 md:px-10 py-10 ">
      <h1>Teaching Philosophy</h1>
      <h3>My Philosophy of Early Childhood Education</h3>
      <p className="italic">Thi Suu Le</p>
      <p className="mt-5 text-lg">
        Teaching Philosophy My Philosophy of Early Childhood Education Thi Suu
        Le I believe that every child is special and has the ability to learn
        and grow when they feel safe, loved, and supported. Children learn best
        through play, hands-on activities, and caring relationships with others.
        As an early childhood educator, my goal is to create a warm, welcoming
        space where all children feel valued and included. My teaching is based
        on each child’s interests, needs, and abilities. I believe in listening
        to children, encouraging them to try new things, and helping them build
        confidence. I use positive guidance to support their social and
        emotional growth, and I always try to understand and respect their
        feelings. I also believe that working closely with families is very
        important. Parents and caregivers know their children best, and I want
        to build strong partnerships with them to support each child’s
        development. In my classroom, I want children to feel happy, curious,
        and proud of who they are. I will do my best every day to help them
        learn, grow, and shine in their own way.
      </p>
      <ResponsiveMasonry
        className="mt-10"
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry>
          <ImageContainer src="philosophy/pic2.jpg" />
          <ImageContainer src="philosophy/pic3.jpg" />
          <ImageContainer src="philosophy/pic4.jpg" />
          <ImageContainer src="philosophy/pic4.avif" />
          <ImageContainer src="philosophy/pic5.avif" />
          <ImageContainer src="philosophy/pic6.avif" />
          <ImageContainer src="philosophy/pic1.jpg" />
          <ImageContainer src="philosophy/pic7.avif" />
          <ImageContainer src="philosophy/pic8.avif" />
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};
