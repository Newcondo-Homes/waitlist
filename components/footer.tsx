// import Link from "next/link";
// import { motion } from "framer-motion";
// import { containerVariants, itemVariants } from "@/lib/animation-variants";
// import { MdEmail } from "react-icons/md";
// import { FaUsers } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <motion.div
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       className="mt-auto flex w-full items-center justify-center gap-1 border-t bg-[#131313] bg-background p-6 text-muted-foreground">
//       <div className="flex flex-col">
//         <motion.div variants={itemVariants} className="flex items-center gap-2">
//           <MdEmail className="text-xl text-zinc-300" />
//           <Link
//             href="mailto:info@newcondo.homes"
//             className="text-zinc-300 underline underline-offset-2 transition-all duration-200 ease-linear hover:text-yellow-200">
//             info@newcondo.homes
//           </Link>
//         </motion.div>
//         <motion.div variants={itemVariants} className="flex items-center gap-2">
//           <FaUsers className="text-xl text-zinc-300" />
//           <div className="flex space-x-2">
//             <Link
//               href="https://www.linkedin.com/in/samuel-ibekwe-obani-310a91b7/?trk=contact-info"
//               className="text-zinc-300 underline underline-offset-2 transition-all duration-200 ease-linear hover:text-yellow-200">
//               Samuel
//             </Link>
//             <div>{"|"}</div>
//             <Link
//               href="https://www.linkedin.com/in/dike-nnamaka/"
//               className="text-zinc-300 underline underline-offset-2 transition-all duration-200 ease-linear hover:text-yellow-200">
//               Nnamaka
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { MdEmail } from "react-icons/md";
import { FaUsers, FaShieldAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-auto flex w-full items-center justify-center gap-1 border-t bg-[#131313] bg-background p-6 text-muted-foreground">
      <div className="flex flex-col">
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <MdEmail className="text-xl text-zinc-300" />
          <Link
            href="mailto:info@newcondo.homes"
            className="text-zinc-300 underline underline-offset-2 transition-all duration-200 ease-linear hover:text-yellow-200">
            info@newcondo.homes
          </Link>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <FaUsers className="text-xl text-zinc-300" />
          <div className="flex space-x-2">
            <Link
              href="https://www.linkedin.com/in/samuel-ibekwe-obani-310a91b7/?trk=contact-info"
              className="text-zinc-300 underline underline-offset-2 transition-all duration-200 ease-linear hover:text-yellow-200">
              Samuel
            </Link>
            <div>{"|"}</div>
            <Link
              href="https://www.linkedin.com/in/dike-nnamaka/"
              className="text-zinc-300 underline underline-offset-2 transition-all duration-200 ease-linear hover:text-yellow-200">
              Nnamaka
            </Link>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <FaShieldAlt className="text-xl text-zinc-300" />
          <div className="flex space-x-2">
            <Link
              href="/privacy-policy"
              className="text-zinc-300 underline underline-offset-2 transition-all duration-200 ease-linear hover:text-yellow-200">
              Privacy Policy
            </Link>
            <div>{"|"}</div>
            <Link
              href="/refund-policy"
              className="text-zinc-300 underline underline-offset-2 transition-all duration-200 ease-linear hover:text-yellow-200">
              Refund Policy
            </Link>
          </div>
        </motion.div>
         
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <div className="flex space-x-2">
            <div
              
              className="text-zinc-300 underline underline-offset-2 transition-all duration-200 ease-linear hover:text-yellow-200">
              08108315350 {"|"} 09032263552
            </div>
            <div>{"|"}</div>
            <div
             
              className="text-zinc-300 text-xs underline underline-offset-2 transition-all duration-200 ease-linear hover:text-yellow-200">
              6 Blessing Val Street, Umuagu Umuguma, Owerri-West, Imo State, Nigeria
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
