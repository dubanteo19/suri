import { Facebook } from "@/components/icons/facebook";
import { Insta } from "@/components/icons/insta";
import { TikTokIcon } from "@/components/icons/tiktok";
import { Button } from "@/components/ui/button";
import type { ContactItem } from "@/type/contact-item";

export const Footer = () => {
  const contacts: ContactItem[] = [
    { id: 1, href: "https://www.tiktok.com/@surihaiyen", icon: <TikTokIcon /> },
    {
      id: 2,
      href: "https://www.facebook.com/suri.hai.yen.2025",
      icon: <Facebook />,
    },
    { id: 3, href: "https://www.instagram.com/surihaiyen", icon: <Insta /> },
  ];
  return (
    <div className="bg-primary  text-foreground md:-mx-4 px-8 mt-4">
      <div className="border-t-white border-t-1 ">
        <h1 className="text-center font-semibold text-4xl md:text-6xl py-8">
          THI SUU LE
        </h1>
        <div className="text-center">
          <h3>266.961.4852</h3>
          <h3>surihuynh012@gmail.com</h3>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6 ">
        {contacts.map((c) => (
          <a href={c.href} key={c.id} target="_blank">
            <Button className="text-black" variant="ghost">
              {c.icon}
            </Button>
          </a>
        ))}
      </div>
      <p className="text-xs mt-2 py-2">
        Copyright (c) 2025 Suri. All Rights Reserved.
      </p>
    </div>
  );
};
