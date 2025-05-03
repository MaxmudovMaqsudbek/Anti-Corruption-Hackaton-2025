import React from 'react';

const CheckingDatas = () => {
  return (
    <div className="flex flex-wrap mt-10 p-4 gap-x-2 space-y-16">
      {[1, 2, 3].map((stage) => (
        <section key={stage} className="flex flex-col items-center justify-center w-1/2 mx-auto border p-4 rounded">
          <header className="mb-2 text-center">
            <h1 className="text-lg font-semibold">Stage {stage} - Checking, wait until done</h1>
            <button className="mt-2 p-2 border border-gray-500 rounded">Step {stage}</button>
          </header>
          <article className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eaque molestias velit ab molestiae harum
            consequuntur iure itaque nostrum, distinctio, illo voluptates reprehenderit! Atque, illum error architecto
            necessitatibus iusto recusandae placeat repellat veniam!
          </article>
        </section>
      ))}
    </div>
  );
};

export default CheckingDatas;
