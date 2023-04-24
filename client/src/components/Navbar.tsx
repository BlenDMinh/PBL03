import { FC } from "react";
import { Product } from "@/models/Product";

interface NavbarProps {
  user: Product | undefined;
}

const Navbar: FC<NavbarProps> = ({ user }) => {
  return <div>Test</div>;
};

export default Navbar;
