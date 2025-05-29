import FindProperties from "../search/findProperties";

export default function Hero() {
  return (
    <div className="relative w-11/12 mx-auto pt-[6rem]">
      <div className="container w-8/10 mx-auto flex flex-col gap-6  text-white text-center md:text-[18px]  py-8 whitespace-wrap">
        <h2 className="text-4xl md:text-5xl font-bold py-2">Browse Our Properties</h2>
        <p className="py-2">Find your perfect home among our curated properties. Start<br/> browsing now!</p>
      </div>
      <div className="pb-14 w-full md:w-11/12 mx-auto"><FindProperties/></div>
    </div>
  );
}
