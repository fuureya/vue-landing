<script setup>
import MasterBody from './MasterBody.vue'
</script>

<template>
    <MasterBody>
        <div class="py-20 flex flex-col items-center justify-center text-center">
            <div class="mb-8">
                <div class="relative">
                    <div class="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                    <svg class="relative w-24 h-24 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
                    </svg>
                </div>
            </div>
            
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Laman Sedang Dalam Pemeliharaan
            </h1>
            
            <p class="text-lg text-gray-600 max-w-lg mx-auto mb-10 leading-relaxed font-light">
                Mohon maaf mas, halaman sertifikat sedang kami perbarui untuk memberikan pengalaman yang lebih baik. Kami akan segera kembali!
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4">
                <router-link to="/" class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition duration-300 shadow-sm hover:shadow-md flex items-center justify-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    Kembali ke Beranda
                </router-link>
            </div>
            
            <div class="mt-16 flex items-center gap-2 text-gray-400">
                <div class="h-1 w-1 rounded-full bg-gray-300"></div>
                <span class="text-sm font-light">Bekerja dengan semangat</span>
                <div class="h-1 w-1 rounded-full bg-gray-300"></div>
            </div>
        </div>
    </MasterBody>
</template>
