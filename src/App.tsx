import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { HiSun, HiMoon } from "react-icons/hi";
import { iUser } from "./interfaces";
import Card from "./components/Card";
import Loader from "./components/Loader";
import ErrorCard from './components/ErrorCard'

const App:React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [loader, setLoader] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [userData, setUserData] = useState<iUser>();
  const [inputContent, setInputContent] = useState<string>()

  const getUser = async (username: string | undefined): Promise<void> => {
    setIsError(false); 
    if(username){
      setLoader(true)
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json(); 
        setTimeout(()=> {
          setLoader(false)
        },1000)
        if(response.status === 200){
          setUserData(data);
        }else{
          setIsError(true); 
        }    
      } catch (error) {
        setIsError(true);        
      }
    } 
  };

  return (
    <>
      <header className="flex flex-col w-full">
        <div className="flex justify-between mb-12 md:mb-4">
          <h1 className="font-semibold text-2xl md:text-xl">devfinder</h1>
          <button className="flex text-xs items-center font-semibold w-16 justify-between uppercase hover:text-blue-500 text-[#6f82a0] dark:text-white">
            {darkMode ? "light" : "dark"} {darkMode ? <HiSun className="text-xl" /> : <HiMoon className="text-xl" />}
          </button>
        </div>
        <form className="shadow-md dark:shadow-none dark:bg-[#1f2a48] flex items-center rounded-xl" onSubmit={(e) => {
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
