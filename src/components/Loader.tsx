import { BsLink45Deg } from "react-icons/bs"
import { FaTwitter } from "react-icons/fa"
import { ImOffice } from "react-icons/im"
import { MdLocationPin } from "react-icons/md"

const Loader = () => {
  return (
    <article className="shadow-lg dark:shadow-none dark:bg-[#1f2a48] mt-4 rounded-lg px-6 py-8 md:p-8 animate-pulse">
      <section>
        <header className="flex">
          <div className="rounded-full absolute lg:relative w-16 h-16 md:w-24 md:h-24 lg:w-40 lg:h-28 bg-slate-700">     
          </div>
          <section className="flex flex-col w-full lg:ml-11">
            <div className="flex flex-col md:mt-3 ml-[86px] md:ml-[120px] lg:mt-0 lg:ml-0 lg:flex-row justify-between items-start">
              <div className="flex flex-col">
                <h1 className="font-semibold bg-slate-700 h-5 w-[200px] rounded-md"></h1>
                <h3 className="mt-[3px] bg-slate-700 h-4 w-[100px] rounded-md"></h3>
              </div>
              <span className="mt-[10px] lg:mt-0 bg-slate-700 h-5 w-[150px] rounded-md"></span>
            </div>
            <p className="mt-6 md:mt-8 lg:mt-4 mb-6 bg-slate-700 h-5 md:w-[500px] lg:w-[300px] rounded-md"></p>
          </section>
        </header>
        <section className="lg:max-w-[412px] m-auto mr-0">
          <ul className="grid grid-cols-3 justify-items-center gap-x-8 bg-[#f6f8ff] dark:bg-[#141c2f] pl-4 pr-7 md:px-8 py-4 rounded-lg">
            <li className="text-xs text-[#4b6a9b] dark:text-white bg-slate-600 h-5 w-[100px] rounded-md"></li>
            <li className="text-xs text-[#4b6a9b] dark:text-white bg-slate-600 h-5 w-[100px] rounded-md"></li>
            <li className="text-xs text-[#4b6a9b] dark:text-white bg-slate-600 h-5 w-[100px] rounded-md"></li>
            <li className="font-semibold mt-1 bg-slate-600 h-5 w-[70px] rounded-md"></li>
            <li className="font-semibold mt-1 bg-slate-600 h-5 w-[70px] rounded-md"></li>
            <li className="font-semibold mt-1 bg-slate-600 h-5 w-[70px] rounded-md"></li>
          </ul>
           <ul className="grid md:grid-cols-2 gap-2 md:gap-y-0 gap-x-7 mt-6 text-xs md:text-sm justify-items-stretch text-slate-600">
            <li className={`flex items-center p-1`}>
              <MdLocationPin className="mr-3 text-xl" />
              <span className="bg-slate-700 h-5 w-[200px] lg:w-[100px] rounded-md"></span>
            </li>
            <li className={`flex items-center p-1`}>
              <FaTwitter className="mr-3 text-xl" />
              <span className="bg-slate-700 h-5 w-[200px] lg:w-[100px] rounded-md"></span>
            </li>
            <li className={`flex items-center p-1`}>
              <BsLink45Deg className="mr-3 text-2xl" />              
               <span className="overflow-hidden bg-slate-700 h-5 w-[200px] lg:w-[80px] rounded-md" ></span>        
            </li>
            <li className={`flex items-center p-1`}>
              <ImOffice className="mr-3 text-xl" />
              <span className="bg-slate-700 h-5 w-[200px] lg:w-[80px] rounded-md"></span>
            </li>
          </ul>
        </section> 
      </section>
    </article>
  )
}
export default Loader