export default function StyledArtCard() {
  return (
    <div
      className="

        w-[90vw] md:w-[80vw] lg:w-[60vw]
        flex flex-col justify-center items-center
        px-4 md:px-10 py-4 md:py-6
        m-4 md:m-6
        rounded-2xl
      "
    >
      <video
        src="/art1.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="
          rounded-xl

          w-full h-full
          shadow-lg
          object-cover
        "
      />
      <div className="text-center text-2xl my-5 font-semibold">
        From the edge of crazy to the center of real.
      </div>
    </div>
  );
}
