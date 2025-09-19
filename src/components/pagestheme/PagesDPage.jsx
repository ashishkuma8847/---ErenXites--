import { FloatingDock } from "./PagesTController";
import * as TablerIcons from "@tabler/icons-react";

export function FloatingDockDemo() {
     const links = [
       { title: "Home", icon: <TablerIcons.IconHome className="h-full w-full" />, href:"/" },
       { title: "About Me", icon: <TablerIcons.IconMessageChatbot className="h-full w-full" />, href: "/aboutme" },
       { title: "Portfolio", icon: <TablerIcons.IconDeviceDesktop className="h-full w-full" />, href: "/portfolio" },
       { title: "Contect", icon: <TablerIcons.IconMessage className="h-full w-full" />, href: "/contect" },
     ];
    

  return (
    <div className="flex items-center justify-center  bg-transparent">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
