import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, CircleSmall } from "lucide-react";

export default function DropdownCategoriesMenu({ basePath, categories, currentCategory, className }: {
    basePath: string;
    categories: any[];
    currentCategory?: any;
    className?: string;
}) {

    function CategoryItem({
        categoryId,
        name
    }: {
        categoryId?: string;
        name: string;
    }) {

        const isCurrentCategory = (!currentCategory && !categoryId) || currentCategory?.id === categoryId;

        return (
            <DropdownMenuItem disabled={isCurrentCategory} asChild className={cn("relative px-6", isCurrentCategory ? "!opacity-100 font-bold" : "cursor-pointer")}>
                <a href={categoryId ? `${basePath}/${categoryId}` : basePath}>
                    {isCurrentCategory && (
                        <CircleSmall className="absolute left-1 top-1/2 -translate-y-1/2 text-primary" />
                    )}
                    {name}
                </a>
            </DropdownMenuItem>
        )
    }

    return (
        <div className={cn(className)}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild className="group cursor-pointer w-full justify-between">
                    <Button variant="outline" size="lg">{currentCategory?.data.name || "すべての記事"}<ChevronDown className="group-data-[state=open]:rotate-180 transition-transform" /></Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel className="font-bold px-6">カテゴリを選択</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <CategoryItem name="すべての記事" />
                    {categories.map((category) => (
                        <CategoryItem key={category.id} categoryId={category.id} name={category.data.name} />
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}