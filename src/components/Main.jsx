import React from 'react';
import videoSource from './vid/back.mp4';
import { TypeAnimation } from 'react-type-animation';

function Main() {
  return (
    <div className="relative">
      <video autoPlay muted loop className="video-background h-screen w-full object-cover relative z-0">
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold mb-4">Hello I'm Sharon</h1>
          <h2 className="text-white text-2xl lg:text-4xl">
            I'm a{' '}
            <TypeAnimation
              sequence={[
                'Developer',
                1000,
                'Software Engineer',
                1000,
                'Tech Enthusiast',
                1000,
                'Doctor',
                1000
              ]}
              wrapper="div"
              speed={50}
              style={{
                display: 'inline-block',
                fontSize: '1em',
                paddingLeft: '5px',
                color: 'white',
                fontWeight: 'bold',
                fontStyle: 'italic',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
              }}
              repeat={Infinity}
            />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Main;
