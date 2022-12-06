const ErrorCard:React.FC = () => {
  return (
    <article className="shadow-lg dark:shadow-none dark:bg-[#1f2a48] mt-4 rounded-lg px-6 py-8 md:p-8 h-[336px] flex justify-center">
      <h1 className="text-center mt-20 text-xl dark:text-white">
        User not found
      </h1>
    </article>
  );
};
export default ErrorCard;
