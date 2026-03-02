"use client";

import Image from "next/image";

export default function StackCard() {
  return (
    <div className="flex justify-center lg:justify-start">
      <div className="group relative w-[300px] md:w-[480px]  transition duration-300 rotate-3">
        
        {/* Main Card */}
        <div className="relative z-10 aspect-[3/2] border-4 border-gray-800 bg-white p-4 shadow-xl transition-all duration-300">
          
          <div className="relative aspect-square h-[350px] md:h-[500px] w-full border-4 border-gray-800 overflow-hidden">
            <Image
              src="/marketing1.jpg" // put your image
              alt="Solar Worker"
              fill
              className="object-cover "
            />
          </div>
        </div>

        {/* Back Layer 1 */}
        <div className="absolute inset-0 -z-10 border-4 border-gray-800 bg-white rotate-[-6deg] transition-all duration-300 group-hover:rotate-[-10deg]" />

        {/* Back Layer 2 */}
        <div className="absolute inset-0 -z-20 border-4 border-gray-800 bg-white rotate-[6deg] transition-all duration-300 group-hover:rotate-[10deg]" />
      </div>
    </div>
  );
}
