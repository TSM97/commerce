import { ATHENIAN_EMAIL } from "../../../config";
import EmailIcon from "../../../svgs/EmailIcon";
import FacebookIcon from "../../../svgs/FacebookIcon";
import InstagramIcon from "../../../svgs/InstagramIcon";
import YoutubeIcon from "../../../svgs/YoutubeIcon";
import Logo from "../../../assets/ATHBees.webp";

export default function Links() {
  return (
    <>
      <div className="self-center flex gap-6 justify-between pr-2">
        <button
          title="Email"
          onClick={() => (window.location.href = `mailto:${ATHENIAN_EMAIL}`)}
          className="border-[3px] group border-primary-250 hover:border-black-100 px-3 py-2 rounded-3xl transition-all duration-300 cursor-pointer"
        >
          <EmailIcon className="fill-primary-250 group-hover:fill-black-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
        </button>
        <div
          title="Instagram"
          className="border-[3px] group border-primary-250 hover:border-black-100 px-3 py-2 rounded-3xl transition-all duration-300 cursor-pointer"
        >
          <a href="https://www.instagram.com" target="_blanc">
            <InstagramIcon className="fill-primary-250 group-hover:fill-black-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
          </a>
        </div>
        <div
          title="Facebook"
          className="border-[3px] group border-primary-250 hover:border-black-100 px-3 py-2 rounded-3xl transition-all duration-300 cursor-pointer"
        >
          <a href="https://www.facebook.com" target="_blanc">
            <FacebookIcon className="fill-primary-250 group-hover:fill-black-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
          </a>
        </div>
        <div
          title="Youtube"
          className="border-[3px] group border-primary-250 hover:border-black-100 px-3 py-2 rounded-3xl transition-all duration-300 cursor-pointer"
        >
          <a href="https://www.youtube.com" target="_blanc">
            <YoutubeIcon className="fill-primary-250 group-hover:fill-black-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
          </a>
        </div>
      </div>
      <img
        className="h-[120px] pt-2 lg:self-end self-center opacity-90"
        src={Logo}
      />
    </>
  );
}
