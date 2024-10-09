import { Button, Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import NavigationBar from "./components/Navbar";
import headerLogo from "./assets/header.jpg";
import logo from "./assets/logo.png";
import FlatCard from "./components/Card";
import Footer from "./components/Fotter";
import { FaWhatsapp } from "react-icons/fa";
function App() {
  const listCardOne = [
    "Consultoría, soporte, formación, investigación y desarrollo. ",
    "Experimentado equipo de consultores SAP, preparados para asistirle en sus necesidades y asegurar que sus tareas se realicen de manera rápida, óptima y eficaz",
    "Costos accesibles",
  ];
  const listCardTwo = [
    "Soporte y gestión de redes cisco.",
    "Seguridad perimetral y cámaras de vigilancia instalación",
    "Cableado estructurado, instalación de redes bajo modalidad 568, switch, canalizaciones en base a los estándares internacionales, certificación de puntos de red.",
  ];

  const listCardThree = [
    "Especialistas en sistema Operativo AIX garantizando su estabilidad y seguridad en entornos empresariales.",
    "Windows server, instalación y gestión de servidores.",
    "Linux Server: Administración de servidores incluyendo la instalación, configuración, seguridad y optimización",
  ];

  const listCardFour = [
    "Contamos con profesionales en IBM Spectrum (Tivoli) para la gestión e instalación",
    "Garantizamos la integridad y seguridad de los datos.",
    "Soporte continuo para la recuperación de las copias de seguridad asegurando la disponibilidad de la información.",
  ];

  const listCardFive = [
    "Soporte en la instalación de hardware en rack.",
    "Ordenamiento, identificación, peinado de cableado cumpliendo con los estándares TIERS y norma ANSI/TIA-942.",
    "Limpieza de CDD con productos especiales y diseñados para tal uso.",
  ];

  const listCardSix = [
    "Instalación del software necesario para el monitoreo de temperaturas, niveles de energía y ventilación, para asegurar el buen funcionamiento del data center",
    "Monitoreo de alertas de fallos de hardware y sobrecargas eléctricas para prevenir incidentes.",
  ];
  return (
    <>
      <NavigationBar />
      <img
        src={headerLogo}
        alt="hero"
        className="w-full h-[500px] object-cover"
      />
      <div className="pb-6">
        <div className="flex justify-center overflow-hidden -mt-3">
          <motion.div
            className="overflow-hidden -mt-3"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ maxWidth: "723.4px", width: "100%", marginLeft: "8%" }}>
            <Card className="p-10 bg-slate-300" radius="lg">
              <CardBody>
                <h1 className="text-5xl p-3 px-1 font-medium text-slate-700">
                  Soluciones técnologicas y consultoría SAP
                </h1>
                <div className="flex justify-between gap-x-10 p-3">
                  <div className="border-t-5 border-gray-400 mt-4 !w-[600px]"></div>
                  <p className="mt-2 text-xl text-slate-500">
                    Somos una empresa especializada en software ERP y
                    programación con sede en Maracay Venezuela. Integrados por
                    un equipo de profesionales altamente calificados con amplia
                    experiencia principalmente en SAP, pero también en otros
                    softwares de gestión empresarial ERP tales como ORACLE,
                    ODOO, entre otros.
                  </p>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center flex-col items-start overlay">
        <div className="bg-slate-950/40 p-4">
          <div className="w-1/2 mx-auto">
            <h2 className="text-5xl font-medium text-gray-200 py-3">
              Nuestros servicios
            </h2>
            <p className="text-gray-200 text-xl xl:pr-7">
              Abordamos todos los servicios de IT empresariales, teniendo un
              abanico de soporte en todas las áreas tales como:
            </p>
          </div>
          <div className="bg-transparent grid grid-cols-3 place-items-center w-3/4 gap-14 mx-auto py-6">
            <FlatCard
              title="SAP"
              list={listCardOne}
              className="col-span-1 w-full"
            />
            <FlatCard
              title="Telecomunicaciones"
              list={listCardTwo}
              className="col-span-1 w-full"
            />
            <FlatCard
              title="Sistemas Operativos"
              list={listCardThree}
              className="col-span-1 w-full"
            />
            <FlatCard
              title="Soporte backup"
              list={listCardFour}
              className="col-span-1 w-full"
            />
            <FlatCard
              title="Centro de datos (Hardware)"
              list={listCardFive}
              className="col-span-1 w-full"
            />
            <FlatCard
              title="Centro de datos   (Software)"
              list={listCardSix}
              className="col-span-1 w-full"
            />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r to-[#0e306e] from-[#072458] from-30% to-90%">
        <div className="flex flex-col md:flex-row justify-between mx-auto w-2/3 max-w-full gap-x-10 pb-6 ">
          <img src={logo} alt="logo" className="w-1/2" />
          <div className="flex flex-col items-start w-1/2 p-4 pt-7">
            <h2 className="text-5xl text-white">Contáctanos</h2>
            <p className="text-white text-lg mt-4">
              Si tienes alguna duda o consulta, no dudes en escribirnos. Estamos
              para ayudarte.
            </p>
            <Button className="mt-4 bg-green-700 text-white font-bold text-base flex gap-x-4 justify-center items-center" variant="flat" size="lg" href="https://api.whatsapp.com/send?phone=584125053871" as="a" target="_blank" >
              <FaWhatsapp className="w-8 h-8"/> WhatsApp
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
