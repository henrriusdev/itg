import { Button, Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import NavigationBar from "./components/Navbar";
import headerLogo from "./assets/header.webp";
function App() {

  return (
    <>
      <NavigationBar />
      <img src={headerLogo} alt="hero" className="w-full h-[500px] object-cover" />
      <div className="pb-2">
        <div className="flex justify-center overflow-hidden -mt-3">
          <motion.div
            className="overflow-hidden -mt-3"
            initial={{ x: "-100vw", opacity: 0 }} // El contenedor empieza fuera del viewport (a la izquierda)
            animate={{ x: 0, opacity: 1 }} // Se mueve al centro y aparece gradualmente
            transition={{ duration: 1.5, ease: "easeInOut" }} // Transición suave
            style={{ maxWidth: "35%", width: "100%", marginLeft: '8%' }} // Controlamos el ancho máximo del contenedor
          >
            <Card className="p-4 bg-slate-300" radius="lg">
              <CardBody>
                <h1 className="text-5xl font-medium text-slate-700">
                  Lorem ipsum dolor sit amet
                </h1>
                <div className="flex justify-between gap-x-4 p-3">
                  <div className="border-t-5 border-gray-400 mt-4 !w-[1000px]"></div>
                  <p className="mt-2 text-sm text-slate-500">
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
        <Button className="w-auto ml-[64%]" variant="ghost" color="primary">
          Learn more
        </Button>
      </div>
    </>
  );
}

export default App;
