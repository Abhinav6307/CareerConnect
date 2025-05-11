import React from 'react';

const AppSection = () => {
  return (
    <div className="bg-[#f9f9f9] py-10 px-4 md:px-20 rounded-lg">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Text and Buttons */}
        <div className="text-center md:text-left space-y-5">
          <h2 className="text-2xl md:text-4xl font-bold text-black">
            Download Mobile App For <br /> Better Experience
          </h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" target="_blank">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-40"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="w-40"
              />
            </a>
          </div>
        </div>

        
        
        <div className="mt-8 md:mt-0 flex justify-center">
  <img
    src="https://imgs.search.brave.com/WS8tW__E3oUT9ezbOff8bpkqoPDnFy_KXYWAxD-45SQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/cHBsaWNhdGlvbi1v/Y2N1cGF0aW9uLXBy/b2Zlc3Npb24tam9i/LXNlZWtlci1jb25j/ZXB0XzUzODc2LTEy/Mjc1NS5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQw"
    alt="Placement Assistant"
    className="w-[280px] md:w-[400px] rounded-xl border-2 border-gray-300 shadow-md object-contain transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
  />
</div>

      </div>
    </div>
  );
};

export default AppSection;
