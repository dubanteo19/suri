import { ImageContainer } from "@/components/common/ImageContainer";
export const Project2 = () => {
  return (
    <div className="w-full max-w-[800px] bg-white border rounded py-5 mt-5 px-5 text-[17px] leading-relaxed">
      <h2>PROJECT 2: DANCING RIBBON RINGS</h2>
      <ImageContainer src="/projects/project2.avif" className="w-[300px]" />
      <p>
        Making dancing ribbon rings is a fun and creative craft project that
        results in colorful, flowing ribbons you can use for dancing or warm-up
        activities before class. Here are these steps to make these ones.
        Materials Needed: Ribbon (various colors and sizes), plastic rings,
        scissors, jingle bells (different sizes and colors)
      </p>
      <h3 className="font-semibold my-5">Step-by-Step Instructions:</h3>
      <ol className="list-decimal ml-8">
        <li>
          Cut several strips of ribbon to my desired length, adjust depending on
          my preference.
        </li>
        <li>
          Buy small plastic rings and easy to hold, then tie the smallest ribbon
          on some of the jingle bells. Once all ribbons are attached to the
          ring, tie a knot at the end to prevent them from falling.
        </li>
        <li>
          Wave the ring to make sure the ribbons flow freely. If any ribbons are
          too long or too short, adjust them as needed.
        </li>
        <li>
          Make sure the ribbon is securely attached, so they won't fall off
          while dancing or performing. Once finished, we'll have very own
          dancing ribbon rings ready to spin, and flow in the air!
        </li>
      </ol>
      <p className=" font-semibold mt-2">
        Dancing ribbon rings are developmentally appropriate for children
        because they engage multiple areas of growth, including physical,
        cognitive, and emotional development:
      </p>
      <div>
        <p className="text-xl">Physical Development:</p>
        <ul className="list-disc ml-8">
          <li>
            The ribbon rings help children develop coordination, balance, and
            strength because spinning, and waving the ribbons encourage large
            muscle movements, which are essential for developing gross motor
            skills.
          </li>
          <li>
            Holding and controlling the ribbon while performing movements like
            spins or sways requires children to refine their hand-eye
            coordination.
          </li>
          <li>
            Children learn to control their body in space while managing the
            ribbons, which improves their understanding of spatial
            relationships.
          </li>
        </ul>
      </div>
      <div>
        <p className="text-xl">Cognitive Development:</p>
        <ul className="list-disc ml-8">
          <li>
            Dancing with ribbons encourages children to use their imagination,
            creating their own dances, or exploring how the ribbons move.
          </li>
          <li>
            As children experiment with different ways to control the ribbons,
            they develop problem-solving skills by figuring out how to make the
            ribbons float in the air.
          </li>
        </ul>
      </div>
      <div>
        <p className="text-xl">Emotional Development:</p>
        <ul className="list-disc ml-8">
          <li>
            Dancing with ribbons gives children a way to express themselves
            through movement, which can support emotional development and help
            children process their feelings in a non-verbal way.
          </li>
          <li>
            As children master controlling the ribbons and create their own
            dances, they build confidence and a sense of accomplishment.
          </li>
        </ul>
      </div>
      <section>
        <h3 className="mt-6">
          Two Benefits of Open-Ended/Child-Centered Play:
        </h3>
        <h4 className="font-semibold underline">
          1.Promotes Creativity and Critical Thinking:
        </h4>
        <p>
          Open-ended play, like dancing with ribbon rings, encourages children
          to think creatively and come up with their own ideas without limits.
        </p>
        <h4 className="font-semibold underline">
          2.Supports Social and Emotional Development:
        </h4>
        <p>
          In a child-centered environment, children have the opportunity to
          express themselves, make choices, and engage in playing with their
          interests. This kind of play supports social interaction with peers,
          helping children develop important social skills such as
          communication, cooperation which are crucial for emotional
          development.
        </p>
      </section>
      <section className="mt-5">
        <p className="font-bold">
          By facilitating open-ended play with materials like dancing ribbon
          rings, educators help children grow while also encouraging an
          environment of independence and exploration. Here are some Open-Ended
          Questions to Ask During Movement Play with Props:
        </p>
        <ol className="space-y-2 list-decimal ml-8">
          <li>
            "What happens if you move the ribbon really fast? How does it feel
            when you slow it down?" This question prompts children to explore
            the concept of speed and movement.
          </li>
          <li>
            "How do you think the ribbon will move if you swing it in different
            directions?" This question invites children to predict the outcome
            of their actions, allows children to experiment with different
            speeds
          </li>
          <li>
            "What happens if you move your body in a different way while holding
            the ribbon? What new shapes can you make?" This question encourages
            children to explore body movement and how it interacts with the
            prop.
          </li>
        </ol>
      </section>
    </div>
  );
};
