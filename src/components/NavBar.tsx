import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

// Instalowane:react-dialog/ sheet/ react-slot/ button/ react-dropdown-menu/ dropdown=menu/
// Cala strona w kontener
// Karuzela zdjec bez przyciskow automatycznie niech nie wchodzi na navbara tekst nad zdjeciem
export default function NavBar() {
  return (
    <>
      <DesktopNavBar />
    </>
  );
}
function DesktopNavBar() {
  return (
    <div
      className={
        "flex items-center justify-between p-5 border-b-2 border-black shadow-sm"
      }
    >
      <div>
        <Logo homePageLink={true} />
      </div>
      <div className={"hidden lg:flex gap-6 items-center"}>
        <Link href={"/"}>Home</Link>
        <Link href={"/gallery"}>Gallery</Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center">
            About <ChevronDown className="ml-1 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={"/about/our-company"}>Our Company</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/about/partnership"}>Partnership</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="lg" className="p-2">
            <Menu className="h-8 w-8" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col gap-4 mt-8">
            <Link href="/">Home</Link>
            <Link href="/gallery">Gallery</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center">
                About <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href={"/about/our-company"}>Our Company</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/about/who-we-work-with"}>Who We Work With</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/contact">Contact</Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
function MobileNavBar() {
  return <></>;
}
