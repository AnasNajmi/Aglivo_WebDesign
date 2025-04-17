import React from 'react';

const Services = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Web Design</h3>
            <p className="text-gray-300">
              Custom website design that reflects your brand and engages your audience.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Development</h3>
            <p className="text-gray-300">
              Modern web development using the latest technologies and best practices.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">SEO</h3>
            <p className="text-gray-300">
              Optimize your website to rank higher in search results and attract more visitors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
