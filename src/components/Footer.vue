<template>
    <footer class="bg-white py-7 px-4 md:px-[400px] lg:px-[400px]">
        <div class="max-w-7xl mx-auto flex flex-col items-center space-y-4">

            <div class="flex space-x-6 text-sm font-light text-gray-500">
                <router-link to="/about" class="hover:text-gray-400" active-class="text-gray-400">About</router-link>
                <router-link to="/proyek" class="hover:text-gray-400" active-class="text-gray-400">Proyek</router-link>
                <router-link to="/tulisan" class="hover:text-gray-400"
                    active-class="text-gray-400">Tulisan</router-link>
                <router-link to="/kontak" class="hover:text-gray-400" active-class="text-gray-400">Kontak</router-link>
            </div>

            <div class="text-center">
                <p class="text-xs text-gray-400 font-light">
                    © {{ new Date().getFullYear() }} Agil Jibrin. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
</template>
