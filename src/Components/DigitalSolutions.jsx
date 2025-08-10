import React from "react";

const DigitalSolutions = () => {
  return (
    <section className="bg-[#d5fff7] text-[#23194f] px-6 py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="md:w-1/2 w-full rounded-xl overflow-hidden">
          <img
            src="/digit.png" // change this path to your actual image
            alt="Team working at night"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2 w-full space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Building Digital Solutions <br />
            <span className="text-sky-700">That Inspire and Perform</span>
          </h2>

          <p className="text-lg leading-relaxed ">
            We deliver <strong className="text-[#23194f]">high-impact digital transformation services</strong>, blending{" "}
            <strong className="text-[#23194f]">custom software development</strong>,{" "}
            <strong className="text-[#23194f]">managed IT services</strong>, and intuitive{" "}
            <strong className="text-[#23194f]">UI/UX design</strong> to help your business thrive.
            <br />
            <br />
            <strong className="text-[#23194f]">Moreover</strong>, our expert team combines strategic insight and cutting-edge tools to create
            end-to-end solutions—
            <strong className="text-[#23194f]">so that</strong> your vision seamlessly becomes reality.
            <strong className="text-[#23194f]"> Ultimately</strong>, we craft digital experiences that don’t just look impressive,
            but also drive measurable growth and long-term success.
          </p>

          {/* CTA Button */}
          <button className="bg-gradient-to-r bg-sky-800  text-white font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition">
            LET'S CONNECT & CREATE
          </button>
        </div>
      </div>
    </section>
  );
};

export default DigitalSolutions;
