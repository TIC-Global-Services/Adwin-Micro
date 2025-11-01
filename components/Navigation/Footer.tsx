import Image from "next/image";
import { FooterBuilding, GreenLogo, upRight } from "@/assets";
import { Facebook, Instagram, Linkedin, XIcon } from "@/assets/icons";
import Link from "next/link";

const Footer = () => {
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Our Netwrok", href: "/our-network" },
    { name: "Contact", href: "/contact" },
  ];

  const contactInfo = [
    { title: "Email Us", content: "info@adwinbattery.com" },
    {
      title: "Location",
      content: "VPO. Dhaurang, Yamuna Nagar Pincode : 135001",
    },
    { title: "Call Us Now", content: "(+880) 89993 88750" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com", icon: Instagram },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "X (Twitter)", href: "https://x.com", icon: XIcon },
  ]
  const linkClasses =
    "text-[#4E4E4E] hover:text-[#005F20] transition-colors duration-200";
  const headingClasses = "mb-2 text-[#4E4E4E] text-[14px]";
  const contentClasses = "text-[#4E4E4E] md:text-[20px] md:font-semibold";

  return (
    <footer className=" bg-[#F8F9FA]  md:px-20 px-5 md:pt-20 md:pb-10 pt-14 pb-6 relative overflow-x-hidden">
      <div className=" flex md:flex-row flex-col justify-between items-start">
        <Image
          src={GreenLogo}
          alt="Company Logo"
          width={170}
          height={31}
          className="w-[170px] h-[31px] md:mb-0 mb-10"
        />

        <div className="flex flex-col justify-center items-start gap-1 md:mb-0 mb-10">
          <h3 className="mb-4 text-[#4E4E4E] text-[18px]">Main Pages</h3>
          <ul className="md:space-y-3 space-y-2">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className={linkClasses}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center items-start gap-1 md:space-y-5 space-y-3 md:mb-0 mb-10 max-w-xs">
          {contactInfo.map((info, index) => (
            <div key={index}>
              <h3 className={headingClasses}>{info.title}</h3>
              <p className={contentClasses}>{info.content}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center items-start gap-1 w-full max-w-sm">
          <h3 className="md:mb-4 mb-2 text-[#4E4E4E] md:text-[18px] text-[14px]">
            Email Address
          </h3>
          <div className="w-full mx-auto">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full px-4 pr-14 py-3 text-sm text-black bg-[#EDF1F6] rounded-full outline-none"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <Image
                  src={upRight}
                  alt="Arrow"
                  width={36}
                  height={36}
                  className="w-9 h-9"
                />
              </div>
            </div>
            <p className="mt-3  text-[#4E4E4E] text-sm">
              Stay Tuned And Subscribe to Our <br /> Newsletter.
            </p>
          </div>

          <div className=" flex items-center gap-2 flex-wrap py-2">
            {socialLinks.map((social, idx)=>(
              <Link key={idx} href={social.href} className=" rounded-full px-4 py-2 flex items-center bg-white gap-2 text-sm">
                {social.name}
                <social.icon size={14} className=" text-[#4E4E4E] hover:text-primary transition-colors duration-200"/>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="md:mt-5  pt-5 flex flex-col md:flex-row justify-between items-center text-sm text-[#4E4E4E] md:ml-[20%]">
        <p>© Copyright 2025 Adwin Batteries. All Rights Reserved.</p>
        <p>Design & Developed by <Link href={'https://www.theinternetcompany.one/'} className=" text-primary">TIC Global Services</Link></p>
      </div>

      <Image
        src={FooterBuilding}
        alt="Building Footer"
        width={160}
        height={200}
        className="md:block absolute hidden bottom-0 md:w-40 w-30"
      />
    </footer>
  );
};

export default Footer;
