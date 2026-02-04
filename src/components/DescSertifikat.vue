<script setup>
import MasterBody from './MasterBody.vue'
import sertifikatData from '@/assets/sertifikat/sertifikat.json'
</script>

<template>
    <MasterBody>
        <div class="py-10">
            <h1 class="text-center mb-10 text-xl text-gray-900 md:text-3xl font-semibold">
                Sertifikat Saya
            </h1>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="cert in sertifikatData" :key="cert.id" 
                    class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition duration-300">
                    <img :src="cert.image" :alt="cert.title" class="w-full h-48 object-cover" />
                    <div class="p-5">
                        <h2 class="text-lg font-semibold text-gray-900 mb-1">{{ cert.title }}</h2>
                        <p class="text-sm text-gray-600 mb-2">{{ cert.issuedBy }}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-xs text-gray-400">{{ cert.date }}</span>
                            <button class="text-sm font-medium text-blue-600 hover:text-blue-800">
                                Lihat Detail
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MasterBody>
</template>
