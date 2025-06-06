<script setup>
import { ref } from 'vue'
import img01 from '@/assets/img/01.png'

const menuOpen = ref(false)
</script>

<template>
    <nav class="bg-white py-3 px-5 md:px-[100px] lg:px-[150px] xl:px-100">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <!-- Brand -->
            <router-link to="/" class="flex items-center space-x-2 text-gray-900">
                <img :src="img01" alt="Agil Jibrin" class="w-6 h-6 rounded-full" />
                <span class="text-lg font-medium">Agil Jibrin</span>
            </router-link>

            <!-- Hamburger (Mobile only) -->
            <button class="md:hidden focus:outline-none" @click="menuOpen = !menuOpen">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <!-- Navigation Links (Desktop) -->
            <div class="hidden md:flex items-center space-x-6 text-sm font-light">
                <router-link to="/about" class="hover:text-gray-400" active-class="text-gray-400">About</router-link>
                <router-link to="/proyek" class="hover:text-gray-400" active-class="text-gray-400">Proyek</router-link>
                <router-link to="/tulisan" class="hover:text-gray-400"
                    active-class="text-gray-400">Tulisan</router-link>
                <router-link to="/kontak" class="hover:text-gray-400" active-class="text-gray-400">Kontak</router-link>
            </div>
        </div>

        <!-- Navigation Links (Mobile) -->
        <div v-if="menuOpen" class="md:hidden mt-3 space-y-2 text-sm font-light px-2 text-center">
            <router-link to="/about" class="block hover:text-gray-400" active-class="text-gray-400">About</router-link>
            <router-link to="/proyek" class="block hover:text-gray-400"
                active-class="text-gray-400">Proyek</router-link>
            <router-link to="/tulisan" class="block hover:text-gray-400"
                active-class="text-gray-400">Tulisan</router-link>
            <router-link to="/kontak" class="block hover:text-gray-400"
                active-class="text-gray-400">Kontak</router-link>
        </div>

    </nav>
</template>
