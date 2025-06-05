<script setup>
import img01 from '@/assets/img/01.png'
</script>

<template>
    <nav class="bg-white  py-7 px-4 md:px-[400px] lg:px-[400px]">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <!-- Brand -->
            <div class="flex items-center space-x-2">
                <a href="/" class="flex items-center space-x-2 text-gray-900">
                    <img :src="img01" alt="Agil Jibrin" class="w-6 h-6 rounded-full" />
                    <span class="text-lg font-medium">Agil Jibrin</span>
                </a>
            </div>

            <!-- Navigation Links -->
            <div class="flex items-center space-x-6 text-sm font-light">
                <router-link to="/about" class="hover:text-gray-400" active-class="text-gray-400">About</router-link>
                <router-link to="/proyek" class="hover:text-gray-400" active-class="text-gray-400">Proyek</router-link>
                <router-link to="/tulisan" class="hover:text-gray-400"
                    active-class="text-gray-400">Tulisan</router-link>
                <router-link to="/kontak" class="hover:text-gray-400" active-class="text-gray-400">Kontak</router-link>

            </div>
        </div>
    </nav>
</template>
