import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer_area">
    <div className="container">
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
                <div className="single_widget_area flex mb-8 md:mb-0">
                    <div className="footer-logo mr-4 md:mr-8">
                        <Link href="/">
                            <Image
                                src="/assets/images/logo-white.png"
                                alt="Logo"
                                width={50}
                                height={50}
                                className="single-brands-logo pl-8"
                            />
                        </Link>
                    </div>
                    <div className="footer_menu mb-5">
                        <ul className="pl-4">
                            <li>
                                <Link href="/">Shop</Link>
                                <ul>
                                    <li><p className="text-white text-sm w-1/2">117, Obafemi Awolowo Way, Ikeja, Lagos</p></li>
                                </ul>
                            </li>
                            {/* <li>
                                <Link href="/services">Services</Link>
                                <ul>
                                    <li><p className="text-white text-sm">Custom Designs</p></li>
                                </ul>
                            </li> */}
                            <li>
                                <Link href="/locator">Contact</Link>
                                <ul>
                                    <li><p className="text-white text-sm w-2/3">support@thesrluxuries.com</p></li><br/>
                                    <li><p className="text-white text-sm w-2/3">info@thesrluxuries.com</p></li>
                                    {/* <li><p className="text-white text-sm">08188777223</p></li> */}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Single Widget Area */}
                <div className="single_widget_area mb-8 mt-4 md:mb-0">
                    <ul className="footer_widget_menu">
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer_social_area mb-8 mt-4 md:mb-0">
                    <Link href="/">
                        <Image
                            src="/assets/images/svg/logo-facebook.svg"
                            alt="Facebook"
                            width={20}
                            height={20}
                            className="footer_icons w-5"
                        />
                    </Link>
                    <Link href="https://www.instagram.com/sr_luxuries/" target="_blank">
                        <Image
                            src="/assets/images/svg/logo-instagram.svg"
                            alt="Instagram"
                            width={20}
                            height={20}
                            className="footer_icons w-5"
                        />
                    </Link>
                    <Link href="https://www.twitter.com/srluxuries" target="_blank">
                        <Image
                            src="/assets/images/svg/logo-twitter.svg"
                            alt="Twitter"
                            width={40}
                            height={40}
                            className="footer_icons w-5"
                        />
                    </Link>
                </div>   

        <div className="mt-5">
            <div className="w-full text-center text-butter">
                <p>
                    Copyright &copy; Samuel Rowland Luxuries | All rights reserved.
                </p>
            </div>
        </div>
    </div>
</footer>
  );
};