import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { HiSun, HiMoon } from "react-icons/hi";
import Card from "./components/Card";
import Loader from "./components/Loader";
import ErrorCard from './components/ErrorCard'
import { useUserContext } from "./context/UserContext";

const App:React.FC = () => {
  const {theme, handleThemeSwitch, loader, isError, userData, getUser} = useUserContext()
  const [inputContent, setInputContent] = useState<string>()

  return (
    <>
      <header className="flex flex-col w-full">
        <div className="flex justify-between mb-12 md:mb-4">
          <h1 className="font-semibold text-2xl md:text-xl">devfinder</h1>
          <button className="flex text-xs items-center font-semibold w-16 justify-between uppercase hover:text-blue-500 text-[#6f82a0] dark:text-white"
            onClick={() => handleThemeSwitch()}
          >
            {theme === 'light' ? "light" : "dark"} {theme === 'light' ? <HiSun className="text-xl" /> : <HiMoon className="text-xl" />}
          </button>
        </div>
        <form className="shadow-md dark:shadow-none dark:bg-[#1f2a48] flex items-center rounded-xl border-[1px] border-gray-100 dark:border-0" onSubmit={(e) => {
          e.preventDefault()
          getUser(inputContent)
          }}>
          <BsSearch className="mx-6 my-4 text-3xl font-semibold text-blue-600" />
          <input
            type="text"
            placeholder="Search GitHub username..."
            className="bg-transparent w-full mr-4 outline-0"
            onChange={({target}) => setInputContent(target.value)}
          />
          <input type="submit" className="ml-auto mr-2 bg-blue-600 px-7 py-[10px] text-white rounded-lg first-letter:uppercase hover:cursor-pointer hover:bg-blue-500" value="Search" />          
        </form>
      </header>
      <section>
        {loader && <Loader/>}
        {!loader && isError && <ErrorCard/>}
        {!loader && !isError && userData && (
          <Card
            login={userData.login}
            name={userData.name}
            created_at={userData.created_at}
            avatar_url={userData.avatar_url}
            bio={userData.bio}
            company={userData.company}
            location={userData.location}
            followers={userData.followers}
            following={userData.following}
            public_repos={userData.public_repos}
            html_url={userData.html_url}
            twitter_username={userData.twitter_username}
          />
        )}
      </section>
    </>
  );
};

export default App;
