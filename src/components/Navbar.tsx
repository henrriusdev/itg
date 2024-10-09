import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import logoIcon from "../assets/logo.png";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"];

  return (
    <Navbar
      className="h-40 bg-gradient-to-b to-[#0e306e] from-[#072458] from-30% to-90%"
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Link href="#">
            <img src={logoIcon} alt="logo" className="w-30 h-20" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="end">
        <NavbarItem>
          <Link className="text-white text-lg" href="#" aria-current="page">
            Lorem
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-white text-lg" href="#">
            Lorem
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white text-lg" href="#">
            Lorem
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white text-lg" href="#">
            Lorem
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="!mt-24">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href="#"
              color="foreground"
              size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
