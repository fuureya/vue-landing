<script setup>
import cyber from '@/assets/img/cyber.png';
import jaringan from '@/assets/img/jaringan.png';
import pemrograman from '@/assets/img/pemrograman.png';
import server from '@/assets/img/server.png';
import writes from '@/assets/tulisan/tulisan.json';

</script>
<template>
    <a v-for="wr in writes" :href="wr.linkTulisan" target="_blank" class="max-w-md mx-auto">
        <div class="flex space-x-4 items-center my-5">
            <div class="w-10 h-10 overflow-hidden rounded-md flex-shrink-0 ">
                <img v-if="wr.type == 'Cyber Security'" :src="cyber" alt="Thumbnail"
                    class="w-full h-full object-cover object-center" loading="lazy" />
                <img v-if="wr.type == 'Jaringan'" :src="jaringan" alt="Thumbnail"
                    class="w-full h-full object-cover object-center" loading="lazy" />
                <img v-if="wr.type == 'Pemrograman'" :src="pemrograman" alt="Thumbnail"
                    class="w-full h-full object-cover object-center" loading="lazy" />
                <img v-if="wr.type == 'Server'" :src="server" alt="Thumbnail"
                    class="w-full h-full object-cover object-center" loading="lazy" />
            </div>
            <div class="flex-1">
                <h2 class="text-lg font-semibold text-gray-900">
                    {{ wr.title }}
                </h2>
            </div>
        </div>
    </a>

</template>