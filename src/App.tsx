import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <div class="h-screen overflow-hidden bg-gray-800">
      <div class="h-16 bg-black text-white flex items-center px-4">
        Top Bar
      </div>
      <div class="flex h-[calc(100%-4rem)]">
        <div class="w-1/3 flex justify-center items-center">
          <img src="/images/profile.png" alt="Addison" class="object-cover w-full h-3/4"/>
        </div>
        <div class="w-2/3 p-8 text-white">
          <h1 class="text-5xl mb-4">Hey, I'm Addison!</h1>
          <p class="text-xl mb-4">
            Welcome to my website. I'm a college student interested in software engineering and systems design.
          </p>
          <p class="text-xl">Feel free to reach out to me:</p>
          <a href="mailto:addisongoolsbee@gmail.com" class="text-xl text-blue-500">
            addisongoolsbee@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
