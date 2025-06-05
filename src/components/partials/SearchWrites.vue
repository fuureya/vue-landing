<template>
    <div class=" ">
        <h1 class="text-center mb-5 text-xl text-gray-900 md:text-3xl font-semibold">
            Tulisan Saya
        </h1>
        <div class="flex flex-wrap justify-center gap-3">
            <button
                class="px-3 py-1 bg-gray-300 text-gray-500 rounded hover:bg-gray-500 hover:text-white transition">Jaringan</button>
            <button
                class="px-3 py-1 bg-gray-300 text-gray-500 rounded hover:bg-gray-500 hover:text-white transition">Pemrograman</button>
            <button
                class="px-3 py-1 bg-gray-300 text-gray-500 rounded hover:bg-gray-500 hover:text-white transition">Cyber
                Security</button>
            <button
                class="px-3 py-1 bg-gray-300 text-gray-500 rounded hover:bg-gray-500 hover:text-white transition">Server</button>
        </div>
        <input type="text" name="searchTerm" placeholder="Cari tulisan..."
            class="w-full mt-5 flex-grow min-w-[200px] px-3 py-2 rounded-md border border-gray-300  text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            value="" />
    </div>

</template>