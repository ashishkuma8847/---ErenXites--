import * as TablerIcons from "@tabler/icons-react";
import { FloatingDock2 } from "./PagesTController2";

export function FloatingDockDemo2() {
  const links = [
    { title: "Home", icon: <TablerIcons.IconHome className="h-full w-full" />, href:"/" },
   
    { title: "Contect", icon: <TablerIcons.IconMessage className="h-full w-full" />, href: "/contect" },
  ];

  return (
    <div className="flex items-center justify-center bg-transparent">
      <FloatingDock2 mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
