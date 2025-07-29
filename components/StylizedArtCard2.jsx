export default function StyledArtCard2() {
  return (
    <div
      className="
        w-full
        max-w-[700px]
        flex flex-col items-start justify-start
        px-4 md:px-6 py-6
        m-2 md:m-4
        rounded-2xl
        backdrop-blur-md
        bg-white/5
        border border-white/10
        shadow-xl
      "
    >
      <div className="overflow-hidden rounded-xl w-full shadow-lg">
        <video
          src="/c.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="
            w-full h-full
            object-cover
            rounded-xl
          "
        />
      </div>

      <div className="text-left text-white text-xl md:text-2xl font-normal tracking-tight mt-5">
        From sparks of curiosity to shipped solutions.
      </div>
    </div>
  );
}
