import { Card, CardBody, CardProps } from "@nextui-org/react";
import { motion } from "framer-motion";
export default function FlatCard({
  className,
  radius,
  title,
  description,
  ...props
}: CardProps & { title: string; description: string; className?: string }) {
  return (
      <Card
        className={"p-2 bg-slate-300 " + className}
        radius={radius}
        {...props}>
        <CardBody>
          <motion.h3
            className="text-3xl font-bold text-slate-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}>
            {title}
          </motion.h3>
          <motion.p
            className="mt-2 text-lg text-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}>
            {description}
          </motion.p>
        </CardBody>
      </Card>
  );
}
