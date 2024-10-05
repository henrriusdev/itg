import { Button, Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import NavigationBar from "./components/Navbar";
import headerLogo from "./assets/header.webp";
import FlatCard from "./components/Card";
function App() {
  return (
    <>
      <NavigationBar />
      <img
        src={headerLogo}
        alt="hero"
        className="w-full h-[500px] object-cover"
      />
      <div className="pb-2">
        <div className="flex justify-center overflow-hidden -mt-3">
          <motion.div
            className="overflow-hidden -mt-3"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1.5, ease: "easeInOut" }} 
            style={{ maxWidth: "32%", width: "100%", marginLeft: "8%" }}
          >
            <Card className="p-10 bg-slate-300" radius="lg">
              <CardBody>
                <h1 className="text-6xl p-3 px-1 font-medium text-slate-700">
                  Lorem ipsum dolor sit amet
                </h1>
                <div className="flex justify-between gap-x-4 p-3">
                  <div className="border-t-5 border-gray-400 mt-4 !w-[600px]"></div>
                  <p className="mt-2 text-lg text-slate-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
        <Button
          className="w-auto ml-[64%]"
          variant="ghost"
          color="primary"
          size="md">
          Learn more
        </Button>
      </div>
      <div className="flex justify-center flex-col items-start bg-gradient-to-l from-blue-950 to-gray-600 p-4 pb-28">
        <div className="w-1/2 mx-auto">
          <h2 className="text-5xl font-medium text-gray-200 py-3">
            Our Services
          </h2>
          <p className="text-gray-200 text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            sit odio corrupti nostrum laboriosam necessitatibus, alias in
            dignissimos sapiente porro fugiat unde consequatur vel blanditiis.
            Commodi, ullam! Illum, ipsam necessitatibus. Ipsa ducimus minima
            soluta amet vitae temporibus, quis corrupti, aliquam, veritatis rem
            ullam expedita tempore repellat!
          </p>
        </div>
      </div>
      <div className="bg-transparent grid grid-cols-3 place-items-center w-1/2 -mt-16 gap-6 mx-auto">
        <FlatCard title="Card 1" description="Lorem ipsum dolor sit amet wrw Lorem ipsum dolor sit amet wwrwer Lorem ipsum dolor sit amet ewfwer Lorem ipsum dolor sit amet fevwrg Lorem ipsum dolor sit amet evfewvdf Lorem ipsum dolor sit amet efvewr Lorem ipsum dolor sit amet efvewf Lorem ipsum dolor sit amet ergs Lorem ipsum dolor sit amet" className="col-span-1 w-full"/>
        <FlatCard title="Card 2" description="Lorem ipsum dolor sit amet wrw Lorem ipsum dolor sit amet wwrwer Lorem ipsum dolor sit amet ewfwer Lorem ipsum dolor sit amet fevwrg Lorem ipsum dolor sit amet evfewvdf Lorem ipsum dolor sit amet efvewr Lorem ipsum dolor sit amet efvewf Lorem ipsum dolor sit amet ergs Lorem ipsum dolor sit amet" className="col-span-1 w-full"/>
        <FlatCard title="Card 3" description="Lorem ipsum dolor sit amet wrw Lorem ipsum dolor sit amet wwrwer Lorem ipsum dolor sit amet ewfwer Lorem ipsum dolor sit amet fevwrg Lorem ipsum dolor sit amet evfewvdf Lorem ipsum dolor sit amet efvewr Lorem ipsum dolor sit amet efvewf Lorem ipsum dolor sit amet ergs Lorem ipsum dolor sit amet" className="col-span-1 w-full"/>
        <FlatCard title="Card 4" description="Lorem ipsum dolor sit amet wrw Lorem ipsum dolor sit amet wwrwer Lorem ipsum dolor sit amet ewfwer Lorem ipsum dolor sit amet fevwrg Lorem ipsum dolor sit amet evfewvdf Lorem ipsum dolor sit amet efvewr Lorem ipsum dolor sit amet efvewf Lorem ipsum dolor sit amet ergs Lorem ipsum dolor sit amet" className="col-span-1 w-full"/>
        <FlatCard title="Card 5" description="Lorem ipsum dolor sit amet wrw Lorem ipsum dolor sit amet wwrwer Lorem ipsum dolor sit amet ewfwer Lorem ipsum dolor sit amet fevwrg Lorem ipsum dolor sit amet evfewvdf Lorem ipsum dolor sit amet efvewr Lorem ipsum dolor sit amet efvewf Lorem ipsum dolor sit amet ergs Lorem ipsum dolor sit amet" className="col-span-1 w-full"/>
        <FlatCard title="Card 6" description="Lorem ipsum dolor sit amet wrw Lorem ipsum dolor sit amet wwrwer Lorem ipsum dolor sit amet ewfwer Lorem ipsum dolor sit amet fevwrg Lorem ipsum dolor sit amet evfewvdf Lorem ipsum dolor sit amet efvewr Lorem ipsum dolor sit amet efvewf Lorem ipsum dolor sit amet ergs Lorem ipsum dolor sit amet" className="col-span-1 w-full"/>
      </div>
    </>
  );
}

export default App;
