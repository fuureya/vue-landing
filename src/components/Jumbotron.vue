<script setup>
import MasterBody from "./MasterBody.vue"
import Writes from "./partials/Writes.vue"
</script>

<template>
    <MasterBody>
        <div class="bg-white md:mt-10">
            <div class="space-y-4">
                <h1 class="text-3xl text-gray-900 md:text-4xl font-semibold">
                    Hai, Saya Agil Jibrin 👋
                </h1>
                <p class="text-gray-500 leading-relaxed">
                    Saya Agil Jibrin, seorang web developer, IT support, dan Cyber Security Enthusiast. Situs ini berisi
                    informasi tentang berbagai proyek yang pernah saya kerjakan serta tulisan-tulisan yang saya bagikan
                    untuk berbagi pengalaman dan pengetahuan.
                    Jika ingin menghubungi saya, silakan menuju ke halaman
                    <a href="/contact/" class="text-blue-400 hover:underline">kontak</a>.
                </p>
                <a href="/about/"
                    class="inline-block mt-4 text-sm text-gray-500 bg-gray-300 hover:bg-gray-500 hover:text-white px-4 py-2 rounded transition">
                    Selengkapnya
                </a>
                <h3 class="text-xl text-gray-900 md:text-4xl font-semibold mt-5">
                    Tulisan Terbaru Saya
                </h3>
                <Writes typeOfPage="limit" />
            </div>
        </div>
    </MasterBody>
</template>