export interface Ability {
  text: string;
  imageSrc: string;
  background?: string;
  description?: string;
}
export const abilities: Ability[] = [
  {
    text: "Behavior Management",
    imageSrc: "/abilities/pic1.avif",
    description:
      "Applying positive strategies to support students with behavioral challenges.",
  },
  {
    text: "Assistive Technology",
    imageSrc: "/abilities/comunication.jpg",
    background: "white",
    description:
      "Using tools like text-to-speech and learning apps to aid student success",
  },
  {
    text: "Companionship",
    imageSrc: "/abilities/problem-solving.jpg",
    background: "white",
    description:
      "Building strong client relationships with empathy and patience.",
  },
  {
    text: "Certifications",
    imageSrc: "/abilities/linux.jpeg",
    description: "CPR and First Aid certified and Driving license",
  },
];
