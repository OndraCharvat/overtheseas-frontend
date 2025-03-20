"use client"

import { motion } from "framer-motion";
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen">
    <div className="w-full lg:w-1/2 flex items-center bg-brightpurple justify-center px-6 lg:px-16 py-12">
      <div className="w-full max-w-md">
       <h1 className="text-3xl font-bold mb-6">Kontaktuj nás</h1>
      
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md space-y-4">
        <div>
        <h2 className="text-md tracking-[-0.02em] mb-2">Nevíš si s něčím rady? Dej nám vědět! 😊</h2>

          <h2 className="text-xl font-bold">E-mail podpora</h2>
          <a
            href="mailto:podpora@overtheseas.cz"
            className="text-purpleots hover:underline block mt-1"
          >
            podpora@overtheseas.cz
          </a>
        </div>

        <div>
          <h2 className="text-xl font-bold">Telefonická podpora</h2>
          <a
            href="tel:+420123456789"
            className="text-purpleots hover:underline block mt-1"
          >
            +420 123 456 789
          </a>
        </div>
      </div>

      </div>
    </div>
      <div className="hidden lg:block lg:w-2/3 relative bg-brightpurple overflow-hidden">
        <motion.div 
          className="absolute top-20 right-20 w-60 h-60 rounded-full"
          animate={{
            rotate: [0, 4, 0],
            scale: [1.4, 1.05, 1.4]
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        >
            <Image
            src="/toronto-city.png" 
            alt="Toronto City" 
            layout="fill" 
            objectFit="cover" 
          />
          </motion.div>
        <motion.div 
          className="absolute bottom-20 left-20 w-60 h-60 rounded-tr-full"
          animate={{
            rotate: [0, -4, 0],
            scale: [1.4, 1.05, 1.4]
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
         >
            <Image
            src="/schoolbus.png" 
            alt="School Bus" 
            layout="fill" 
            objectFit="cover" 
          />
          </motion.div> 

          <motion.div 
          className="absolute top-20 left-20 w-60 h-60 rounded-tr-full"
          animate={{
            rotate: [0, -4, 0],
            scale: [1.4, 1.05, 1.4]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
         >
            <Image
            src="/palms.png" 
            alt="Palms" 
            layout="fill" 
            objectFit="cover" 
          />
          </motion.div> 

          <motion.div 
          className="absolute bottom-40 right-40 w-60 h-60 rounded-tr-full"
          animate={{
            rotate: [0, -4, 0],
            scale: [1.4, 1.05, 1.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
         >
            <Image
            src="/goldengate.png" 
            alt="goldengate" 
            layout="fill" 
            objectFit="cover" 
          />
          </motion.div> 
      </div>
    </div>
  );
}
