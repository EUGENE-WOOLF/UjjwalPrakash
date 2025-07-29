import { Inter } from "next/font/google";
import ScrollFadeInOut from "./ScrollFadeIn";
import ExpeirenceButton from "./ui/ExperienceButton";
import Lifeline from "./Lifeline";
import StyledArtCard2 from "./StylizedArtCard2";

// ✅ Correct font weights
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});
export default function FinalPage() {
  return (
    <ScrollFadeInOut>
      <section
        id="page-4"
        className={`${inter.variable}  flex flex-col items-center   bg-gradient-to-br from-[#0a0f1a] via-[#1a2338] to-[#121826] px-4`}
        style={{ fontFamily: "var(--font-inter)" }} // ✅ Only font family here
      >
        <div className="flex justify-center md:justify-start m-4 mt-10  w-[85vw]">
          <ExpeirenceButton />
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between m-4  w-[95vw]">
          <div className=" w-[80vw] md:w-[48vw] p-4 ">
            <StyledArtCard2 />
          </div>
          <div className=" w-full md:w-[48vw] ">
            <Lifeline />
          </div>
        </div>

        {/* <ExpeirenceButton /> */}
      </section>
    </ScrollFadeInOut>
  );
}
