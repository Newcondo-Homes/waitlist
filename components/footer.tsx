import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-auto flex w-full items-center justify-center gap-1 border-t bg-background p-6 text-muted-foreground md:justify-start">
      <motion.div variants={itemVariants} className="flex items-center gap-2">
        <MdEmail className="text-xl text-zinc-300" />
        <Link
          href="mailto:info@newcondo.homes"
          className="text-zinc-300 underline underline-offset-2 transition-all duration-200 ease-linear hover:text-yellow-200"
        >
          info@newcondo.homes
        </Link>
      </motion.div>
    </motion.div>
  );
}
