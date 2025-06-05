<script setup>
import books from '@/assets/img/book.png'
const writes = [
    {
        id: 1,
        title: 'Konfigurasi Tunnel EOIP Di Mikrotik',
        type: 'Jaringan',
        linkTulisan: 'https://medium.com/@fuureya/konfigurasi-tunnel-eoip-mikrotik-608f9a27b727'
    },
    {
        id: 2,
        title: 'Konfigurasi Point To Point Tunnel Protocol (PPTP) Mikrotik menggunakan Pnet',
        type: 'Jaringan',
        linkTulisan: 'https://medium.com/@fuureya/konfigurasi-point-to-point-tunnel-protocol-pptp-mikrotik-menggunakan-pnet-df15cb12866b'
    }
]
</script>
<template>
    <a v-for="wr in writes" :href="wr.linkTulisan" target="_blank" class="max-w-md mx-auto">
        <div class="flex space-x-4 items-center my-5">
            <div class="w-10 h-10 overflow-hidden rounded-md flex-shrink-0 ">
                <img :src="books" alt="Thumbnail" class="w-full h-full object-cover object-center" loading="lazy" />
            </div>
            <div class="flex-1">
                <h2 class="text-lg font-semibold text-gray-900">
                    {{ wr.title }}
                </h2>
            </div>
        </div>
    </a>

</template>