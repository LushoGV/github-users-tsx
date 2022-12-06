import { MdLocationPin } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import { BsLink45Deg } from "react-icons/bs";
import { iCardProps } from "../interfaces";

// const Card:React.FC<iCardProps> = ({login, name, bio, public_repos, followers, following, html_url, avatar_url, location, company, twitter_username, created_at}) => {
const Card: React.FC<iCardProps> = (props) => {
  const dateCompleted = new Date(props.created_at).toString();
  const createdAt = `Joined ${dateCompleted.substring(8, 11)} ${dateCompleted.substring(4, 7)} ${dateCompleted.substring(11, 15)}`;

  return (
    <article className="shadow-lg dark:shadow-none dark:bg-[#1f2a48] mt-4 rounded-lg px-6 py-8 md:p-8 border-[1px] border-gray-100 dark:border-0">
      <section>
        <header className="flex">
          <img
            src={props.avatar_url}
            className="rounded-full absolute lg:relative h-16 md:h-24 lg:h-28"
            alt=""
          />
          <section className="flex flex-col w-full lg:ml-11">
            <div className="flex flex-col md:mt-3 ml-[86px] md:ml-[120px] lg:mt-0 lg:ml-0 lg:flex-row justify-between items-start">
              <div className="flex flex-col">
                <h1 className="font-semibold text-sm md:text-xl">
                  {props.name ? props.name : props.login}
                </h1>
                <h3 className="text-blue-600 text-xs md:text-sm mt-[3px]">
                  @{props.login}
                </h3>
              </div>
              <span className="text-xs md:text-sm mt-[5px] text-[#6f82a0] dark:text-white">
                {createdAt}
              </span>
            </div>
            <p className="w-full mt-6 md:mt-8 lg:mt-4 mb-6 text-xs md:text-sm text-[#4b6a9b] dark:text-white">
              {props.bio ? props.bio : "This profile has no bio"}
            </p>
          </section>
        </header>
        <section className="lg:max-w-[412px] m-auto mr-0">
          <ul className="grid grid-cols-3 justify-items-center gap-x-8 bg-[#f6f8ff] dark:bg-[#141c2f] pl-4 pr-7 md:px-8 py-4 rounded-lg">
            <li className="text-xs text-[#4b6a9b] dark:text-white">Repos</li>
            <li className="text-xs text-[#4b6a9b] dark:text-white">
              Followers
            </li>
            <li className="text-xs text-[#4b6a9b] dark:text-white">
              Following
            </li>
            <li className="font-semibold mt-1">{props.public_repos}</li>
            <li className="font-semibold mt-1">{props.followers}</li>
            <li className="font-semibold mt-1">{props.following}</li>
          </ul>
          <ul className="grid md:grid-cols-2 gap-2 md:gap-y-0 gap-x-7 mt-6 text-xs md:text-sm justify-items-stretch">
            <li
              className={`flex items-center p-1 ${
                location
                  ? "text-[#4b6a9b] dark:text-white"
                  : "text-[#a5b4cd] dark:text-[#8b909c]"
              }`}
            >
              <MdLocationPin className="mr-3 text-xl" />
              <span>{props.location ? props.location : "Not Available"}</span>
            </li>
            <li
              className={`flex items-center p-1 ${
                props.twitter_username
                  ? "text-[#4b6a9b] dark:text-white"
                  : "text-[#a5b4cd] dark:text-[#8b909c]"
              }`}
            >
              <FaTwitter className="mr-3 text-xl" />
              <span>
                {props.twitter_username
                  ? props.twitter_username
                  : "Not Available"}
              </span>
            </li>
            <li
              className={`flex items-center p-1 ${
                props.html_url
                  ? "text-[#4b6a9b] dark:text-white hover:text-blue-600"
                  : "text-[#a5b4cd] dark:text-[#8b909c]"
              }`}
            >
              <BsLink45Deg className="mr-3 text-2xl" />
              {props.html_url ? (
                <a href={`${props.html_url}`} className="hover:text-blue-500">
                  {props.html_url.substring(8)}
                </a>
              ) : (
                <span className="overflow-hidden">Not Available</span>
              )}
            </li>
            <li
              className={`flex items-center p-1 ${
                props.company
                  ? "text-[#4b6a9b] dark:text-white"
                  : "text-[#a5b4cd] dark:text-[#8b909c]"
              }`}
            >
              <ImOffice className="mr-3 text-xl" />
              <span>{props.company ? props.company : "Not Available"}</span>
            </li>
          </ul>
        </section>
      </section>
    </article>
  );
};

export default Card;
