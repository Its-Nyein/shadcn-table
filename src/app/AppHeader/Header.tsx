import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { siteConfig } from "@/config/config";

export default function Header() {
    return (
        <div className="flex justify-between items-center">
            <div>
                <span className="text-xl">DataTable Component</span>
            </div>
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="size-9" asChild>
                    <Link
                        aria-label="GitHub repo"
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubLogoIcon className="size-4" aria-hidden="true" />
                    </Link>
                </Button>
                <ModeToggle />
            </div>
        </div>
    )
}