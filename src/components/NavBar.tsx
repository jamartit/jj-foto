"use client";
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
import { useState } from "react";

export default function NavBar() {
  return (
    <>
      <DesktopNavBar styleDlaDesktop={"hidden md:flex"} />
      <MobileNavBar styleDlaMobile={"md:hidden flex"} />
    </>
  );
}
// ImageWithText component tekst prawa strona ze zdjeciem po lewej i wyswietla  pod na mobile i ma miec boolean zeby jak cos to byl po prawej| 
function DesktopNavBar({ styleDlaDesktop }: { styleDlaDesktop: string }) {
  return (
    <div className={cn("container mx-auto")}>
      <div
        className={cn(
          styleDlaDesktop,
          "items-center justify-between p-5 border-b-2 border-black shadow-sm"
        )}
      >
        <div>
          <Logo homePageLink={true} mobileLogo={false} />
        </div>

        <div className={"flex gap-6 items-center flex-row"}>
          <Link href={"/"}>Home</Link>
          <Link href={"/gallery"}>Gallery</Link>
          <div className="relative group">
            <span className="cursor-pointer">About</span>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link
                href="/about/our-company"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Our Company
              </Link>
              <Link
                href="/about/partnership"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Partnership
              </Link>
            </div>
          </div>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>
    </div>
  );
}
function MobileNavBar({ styleDlaMobile }: { styleDlaMobile: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        styleDlaMobile,
        "w-full justify-between p-5 border-b-2 border-black"
      )}
    >
      <Logo homePageLink={true} mobileLogo={true} />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="">
          <Button variant="ghost" size="lg" className="p-2">
            <Menu className="h-8 w-8" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 mt-8">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/gallery" onClick={() => setOpen(false)}>
              Gallery
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <div className="relative group">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center">
                  About <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/about/our-company"
                      onClick={() => setOpen(false)}
                    >
                      Our Company
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/about/partnership"
                      onClick={() => setOpen(false)}
                    >
                      Partnership
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
