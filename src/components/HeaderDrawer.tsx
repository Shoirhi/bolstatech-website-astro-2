import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { cn, isPathMatching } from "@/lib/utils"
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function HeaderDrawer({
    navItems,
    currentPath,
}: {
    navItems: {
        name: string;
        href: string;
        strict?: boolean;
    }[];
    currentPath: string;
}) {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="ghost">
                    <HiOutlineMenuAlt3 />
                    メニュー
                </Button>
            </DrawerTrigger>
            <DrawerContent className="h-2/3">
                <ul className="py-5">
                    {
                        navItems.map((item) => (
                            <li>
                                <a
                                    href={item.href}
                                    className={cn(
                                        "flex justify-start items-center gap-2 px-6 py-3 text-oln-14N-100 rounded duration-300",
                                        isPathMatching(
                                            currentPath,
                                            item.href,
                                            item.strict,
                                        )
                                            ? "font-bold bg-muted"
                                            : "hover:bg-muted/60",
                                    )}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </DrawerContent>
        </Drawer>
    )
}