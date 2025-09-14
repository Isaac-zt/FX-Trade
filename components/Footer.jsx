import { Command } from "lucide-react";
import { footerLinks } from "../assets/data.jsx";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="bg-[#0A0A0A]/80  border border-white/10 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="centered-row gap-2 cursor-pointer hover:-translate-y-1 transition2">
                <Command className="w-6 h-6 text-indigo-400" />
                <h3 className="clash-display text-lg text-zinc-100">
                  FX Trade
                </h3>
              </div>
              <p className="text-sm text-zinc-400/90">
                Empowering traders with advanced forex trading solutions.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/_n0t_isaac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram className="w-6 h-6 hover:text-indigo-300 duration-150 ease-out cursor-pointer" />
                </a>
                <a
                  href="https://github.com/Isaac-Zt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub className="w-6 h-6 hover:text-indigo-300 duration-150 ease-out cursor-pointer" />
                </a>
                <a
                  href="https://linkedin.com/in/isaac-ekaro-09957a366"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin className="w-6 h-6 hover:text-indigo-300 duration-150 ease-out cursor-pointer" />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map(({ _id, title, links }) => (
              <div key={_id} className="space-y-4">
                <h4 className="clash-display text-base text-zinc-200">
                  {title}
                </h4>
                <ul className="space-y-2">
                  {links.map((item, index) => (
                    <li key={index}>
                      <a
                        href="#features"
                        className="text-sm text-zinc-400 hover:text-indigo-300 hover:ml-3 transition2"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-zinc-400/80 text-center clash-display">
              &copy; {new Date().getFullYear()} FX Trade. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
