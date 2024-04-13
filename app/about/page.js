/* eslint-disable @next/next/no-page-custom-font */
"use client";

const About = () => {
  return (
    <>
      <h1 className="text-center font-bold text-4xl sm:text-6xl md:text-8xl font-rubik-scribble">
        Coding Adda <br /> How we started ?
      </h1>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to Coding Adda
            </h1>
            <p className="mb-8 leading-relaxed">
              Welcome to Coding Adda, your ultimate destination for all things
              related to coding, programming, and technology! At Coding Adda,
              we&apos;re passionate about empowering individuals with the
              knowledge and skills they need to thrive in the digital world.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://source.unsplash.com/720x600/?programming,internet"
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://source.unsplash.com/720x600/?programming,computer"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Our Mission and Vision
            </h1>
            <p className="mb-8 leading-relaxed">
              Our journey began with a simple idea: to create a welcoming space
              where aspiring developers, seasoned programmers, and tech
              enthusiasts alike could come together to learn, share, and grow.
              Whether you&apos;re just starting your coding journey or
              you&apos;re an experienced developer looking to stay updated with
              the latest industry trends, Coding Adda has something for
              everyone.
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto magnam vitae minima consequatur, officiis neque aut
              facilis! Quia dolor ipsam accusamus veritatis ab ratione laborum
              delectus eum nulla nesciunt, sed voluptatum sequi expedita modi.
              Commodi, ullam a. Officiis odio adipisci eaque tenetur soluta nam
              sunt est laboriosam. Suscipit, tenetur harum minima iusto
              repudiandae reiciendis ducimus!
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://source.unsplash.com/720x600/?laptop,supercomputer"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
