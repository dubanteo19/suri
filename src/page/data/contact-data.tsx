import { LinkedinIcon } from "@/components/icons/linkedin";
import { ZaloIcon } from "@/components/icons/zalo";
import type { ContactItem } from "@/type/contact-item";
import { Mail, PhoneIcon } from "lucide-react";

export const contactItems: ContactItem[] = [
  {
    id: 1,
    label: "Du (Griffin) Minh",
    icon: <LinkedinIcon className="text-primary text-2xl" />,
    href: "https://www.linkedin.com/in/du-minh-bb3878355/",
    borderColor: "border-red-200",
  },
  {
    id: 2,
    label: "0925821477",
    icon: <ZaloIcon />,
    href: "https://zalo.me/0925821477",
    borderColor: "border-blue-200",
  },
  {
    id: 3,
    label: "dubanteo2003@gmail.com",
    icon: <Mail className="text-yellow-500 text-2xl" />,
    href: "mailto:dubanteo2003@gmail.com",
    borderColor: "border-yellow-200",
  },
  {
    id: 4,
    label: "+84 925821477",
    icon: <PhoneIcon className="text-green-500 text-2xl" />,
    href: "tel:+84925821477",
    borderColor: "border-green-200",
  },
];
