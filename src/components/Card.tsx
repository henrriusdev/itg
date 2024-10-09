import { Card, CardBody, CardProps } from "@nextui-org/react";
import { motion } from "framer-motion";
export default function FlatCard({
  className,
  radius,
  title,
  list,
  ...props
}: CardProps & { title: string; list: string[]; className?: string }) {
  return (
      <Card
        className={"bg-slate-300 " + className}
        radius={radius}
        {...props}>
        <CardBody>
          <motion.h3
            className="text-3xl font-bold text-slate-700 text-center pb-4 p-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}>
            {title}
          </motion.h3>
          <motion.ul
            className="mt-2 text-xl list-disc ml-4 text-slate-500 p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}>
            {list.map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </motion.ul>
        </CardBody>
      </Card>
  );
}
