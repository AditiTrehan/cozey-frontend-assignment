import NavBar from "./components/Navbar";

export default function Home() {
  return (
    <div className="relative bg-beige z-997">
      <div className="relative pt-200">
        <div className="fixed w-full top-20 px-0 pt-0 pb-4 bg-beige transition-all duration-0.15 ease-in-out delay-0 z-9999999">
          <div className="lg:ml-auto lg:mr-auto lg:w-1440 pt-3 px-20 pb-0">
            <div className="flex flex-row justify-between p-0">
              <div className="flex flex-col gap-1">
                <h1 className="pb-0 m-0 text-6xl text-black">Tables</h1>
                <span className="text-blackDes text-lg mb-5">
                  A perfect pairing to your sofa.
                </span>
                <NavBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
