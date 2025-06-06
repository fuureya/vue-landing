<script setup>
import { ref, computed, watch } from 'vue'
import cyber from '@/assets/img/cyber.png';
import jaringan from '@/assets/img/jaringan.png';
import pemrograman from '@/assets/img/pemrograman.png';
import server from '@/assets/img/server.png';
import write from '@/assets/tulisan/tulisan.json';

const props = defineProps({
    typeOfPage: String,
    sortType: {
        type: String,
        default: 'none'
    },
    keyword: {
        type: String,
        default: ''
    }
})


const filteredWrites = computed(() => {
    if (!props.sortType || props.sortType === 'none') {
        return write.slice().sort((a, b) => b.id - a.id)
    }
    return write
        .filter(wr => wr.type === props.sortType)
        .sort((a, b) => b.id - a.id)
})
</script>

<template>
    <div>
        <a v-for="(wr, index) in filteredWrites.slice(0, typeOfPage === 'limit' ? 5 : filteredWrites.length)"
            :key="index" :href="wr.linkTulisan" target="_blank" class="max-w-md mx-auto">
            <div
                class="flex space-x-4 items-center my-5 hover:border-3 hover:border-dashed hover:border-gray-400 p-1 rounded-md">
                <div class="w-10 h-10 overflow-hidden rounded-md flex-shrink-0">
                    <img v-if="wr.type === 'Cyber Security'" :src="cyber" alt="Thumbnail"
                        class="w-full h-full object-cover object-center" loading="lazy" />
                    <img v-else-if="wr.type === 'Jaringan'" :src="jaringan" alt="Thumbnail"
                        class="w-full h-full object-cover object-center" loading="lazy" />
                    <img v-else-if="wr.type === 'Pemrograman'" :src="pemrograman" alt="Thumbnail"
                        class="w-full h-full object-cover object-center" loading="lazy" />
                    <img v-else-if="wr.type === 'Server'" :src="server" alt="Thumbnail"
                        class="w-full h-full object-cover object-center" loading="lazy" />
                </div>
                <div class="flex-1">
                    <h2 class="text-lg font-semibold text-gray-900">{{ wr.title }}</h2>
                </div>
            </div>
        </a>
    </div>
</template>
