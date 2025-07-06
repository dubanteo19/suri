import { ImageContainer } from "@/components/common/ImageContainer";
import { Title } from "@/components/common/Title";
import { contactItems } from "../data/contact-data";

export const ContactSection = () => {
  return (
    <div id="contact">
      <div className="flex flex-col md:flex-row items-center space-x-2 mt-4 ">
        <Title>What's next?</Title>
        <span className="text-sm text-gray-500 max-w-full md:max-w-1/2">
          I’m currently looking for a intern/fresher opportunity for Web
          Developer. Whether you have a position opening or just want to say hi,
          my inbox is open for all!
        </span>
      </div>
      <div className="flex justify-center">
        <ImageContainer
          className="size-40"
          src={"https://anhtuan.online/assets/lightArrow-Bd_2W9x0.svg"}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4  justify-center flex-wrap max-w-full md:max-w-1/2  mx-auto">
        {contactItems.map((contact) => (
          <a href={contact.href} target="_blank" key={contact.id}>
            <div className=" border rounded-2xl flex items-center gap-2 px-4 py-2 shadow">
              {contact.icon}
              {contact.label}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
