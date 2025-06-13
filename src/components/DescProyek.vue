<script setup>
import { ref } from 'vue';
import MasterBody from './MasterBody.vue';
import em from '@/assets/img/pemrograman.png';
import projects from '@/assets/projects/projects.json';

const showModal = ref(false)
const selectedProject = ref(null)

const openModal = (project) => {
    selectedProject.value = project
    showModal.value = true
}

const closeModal = () => {
    showModal.value = false
    selectedProject.value = null
}


</script>

<template>
    <MasterBody>
        <h1 class="text-3xl text-gray-900 md:text-4xl font-semibold md:mt-10">
            Proyek Saya
        </h1>
        <p class="text-gray-500 leading-relaxed mt-5">
            Saya memiliki pengalaman dalam mengerjakan beberapa proyek profesional di bidang pengembangan website dan
            jaringan. Dalam setiap proyek, saya terlibat langsung mulai dari perencanaan, pengembangan, hingga
            implementasi sistem secara menyeluruh. Beberapa website yang saya kerjakan mencakup sistem informasi
            berbasis web, landing page perusahaan, serta portal internal untuk kebutuhan organisasi. Saya menggunakan
            teknologi terkini dan selalu menyesuaikan kebutuhan klien agar solusi yang diberikan tepat guna dan efisien.
        </p>

        <p class="text-gray-500 leading-relaxed mt-5">
            Selain itu, saya juga pernah menangani proyek terkait infrastruktur jaringan, termasuk instalasi jaringan
            lokal (LAN), konfigurasi perangkat jaringan seperti router dan switch, serta pengamanan jaringan dengan
            firewall dasar. Semua proyek tersebut telah berhasil diimplementasikan dan digunakan oleh pengguna secara
            aktif. Pengalaman ini memperkuat kemampuan saya dalam memahami kebutuhan teknis maupun operasional, serta
            beradaptasi dengan berbagai tantangan di lapangan.
        </p>

        <div class="shadow" v-for="p in projects" :key="p.id">
            <div @click="openModal(p)" target="_blank" class="mx-auto">
                <div
                    class="flex space-x-4 items-center my-5 hover:border-3 hover:border-dashed hover:border-gray-400 p-3 rounded-md">
                    <div class="w-10 h-10 overflow-hidden rounded-md flex-shrink-0">
                        <img :src="p.thumbnail || em" alt="Thumbnail" class="w-full h-full object-cover object-center"
                            loading="lazy" />
                    </div>
                    <div class="flex-1">
                        <h2 class="text-lg font-semibold text-gray-900">
                            {{ p.title || 'Judul Proyek Belum Tersedia' }}
                        </h2>
                    </div>
                </div>
            </div>
        </div>

        <!-- MODAL -->
        <div v-if="showModal"
            class="fixed inset-0 backdrop-blur-sm bg-black/30 z-50 flex items-center justify-center p-4">
            <div
                class="bg-white w-full md:w-3/4 lg:w-1/2 h-[90vh] md:h-3/4 p-6 rounded-lg shadow-lg relative overflow-auto">
                <button @click="closeModal" class="absolute top-2 right-3 text-gray-600 hover:text-black text-xl">
                    &times;
                </button>

                <h2 class="text-2xl font-bold text-gray-500 mb-5">
                    {{ selectedProject.title }}
                </h2>

                <img :src="`/projects/${selectedProject.img}`" alt="Project Image"
                    class="w-full h-40 sm:h-52 md:h-64 lg:h-72 xl:h-80 object-cover rounded mb-4" />
                <p class="text-gray-500 mb-3 text-sm md:text-sm text-justify mt-10"
                    v-html="selectedProject.description || 'Tidak ada deskripsi tersedia.'">
                </p>

                <div class="flex justify-end">
                    <button @click="closeModal" class=" bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700">
                        Kembali
                    </button>
                </div>
            </div>
        </div>



    </MasterBody>
</template>