import { Component } from 'solid-js';

const Home: Component = () => {
  return (
    <div class="flex flex-col md:flex-row gap-4 h-full flex-1">
      <div class="w-full md:w-1/4 bg-gray-200 min-h-full border-gray-300 border p-4 rounded-lg">
        <div class="flex justify-between py-4">
          <h1 class="text-sm ">Rest Requests</h1>
          <button class="flex hover:bg-opacity-60 justify-center items-center p-4 bg-purple-600 rounded-full text-white w-8 h-8" onClick={() => alert('To be implemented')}>
            <div>+</div>
          </button>
        </div>
      </div>
      <div class="flex-1 min-h-full">
      </div>
    </div>
  )
}

export default Home;