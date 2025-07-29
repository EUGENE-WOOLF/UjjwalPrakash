import Image from "next/image";

export default function HireMe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4 py-12">
      <div className="bg-white/10 flex-col items-center backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-2xl w-full border border-white/20 text-white flex justify-center">
        <div>
          <Image
            src="/me.jpeg" // Relative to public/
            alt="Description"
            width={200}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="text-xl">Bana na to do!</div>
      </div>
    </div>
  );
}
