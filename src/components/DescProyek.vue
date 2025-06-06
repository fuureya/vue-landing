<script setup>
import MasterBody from './MasterBody.vue';
import em from '@/assets/img/em.png';
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

        <div class="shadow">
            <a :href="''" target="_blank" class="max-w-md mx-auto ">
                <div
                    class="flex space-x-4 items-center my-5 hover:border-3 hover:border-dashed hover:border-gray-400 p-3 rounded-md">
                    <div class="w-10 h-10 overflow-hidden rounded-md flex-shrink-0">
                        <img :src="em" alt="Thumbnail" class="w-full h-full object-cover object-center"
                            loading="lazy" />
                    </div>
                    <div class="flex-1">
                        <h2 class="text-lg font-semibold text-gray-900">Masih dalam Proses pengembangan dan editing foto
                            proyek</h2>
                    </div>
                </div>
            </a>
        </div>

    </MasterBody>
</template>