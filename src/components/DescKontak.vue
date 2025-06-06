<script setup>
import MasterBody from './MasterBody.vue';
import em from '@/assets/img/em.png';
import fb from '@/assets/img/fb.png';
import ig from '@/assets/img/ig.png';
import md from '@/assets/img/md.png';
import linked from '@/assets/img/in.png';
import wa from '@/assets/img/wa.png';


const kontak = [
    {
        name: 'Email',
        link: 'https://mailto:agiljibrin009@gmail.com',
        img: em
    },
    {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/agil-jibrin/',
        img: linked
    },
    {
        name: 'Medium',
        link: 'https://www.medium.com/@fuureya',
        img: md
    },
    {
        name: 'Facebook',
        link: 'https://web.facebook.com/profile.php?id=100079770827303',
        img: fb
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/agil.core/',
        img: ig
    },
    {
        name: 'Whatasapp',
        link: 'https://wa.me/6285757882739?text=Halo%2C%20saya%20ingin%20mengajukan%20pertanyaan%2C%20apakah%20kamu%20bisa%20membantu%20saya%3F ',
        img: wa
    },

]

</script>

<template>
    <MasterBody>
        <h1 class="text-3xl text-gray-900 md:text-4xl font-semibold md:mt-10">
            Kontak Saya
        </h1>
        <p class="text-gray-500 leading-relaxed mt-5">
            Jika kamu memiliki pertanyaan atau keperluan seputar web developer, jaringan komputer, atau hal teknis
            lainnya, jangan ragu untuk menghubungi saya. Saya dengan senang hati akan membantu sebisa mungkin, baik
            untuk diskusi ringan maupun kebutuhan proyek yang lebih serius. Komunikasi terbuka dan kolaborasi adalah hal
            yang saya
            hargai.
        </p>
        <br>
        <p class="text-gray-500 leading-relaxed">
            Kamu bisa menghubungi saya melalui email atau WhatsApp untuk respon yang lebih cepat. Selain itu, jangan
            lupa untuk mengunjungi akun media sosial saya agar tetap terhubung dan mengikuti update terbaru seputar
            dunia teknologi yang saya bagikan.
        </p>


        <div v-for="k in kontak" class="shadow">
            <a :href="k.link" target="_blank" class="max-w-md mx-auto ">
                <div
                    class="flex space-x-4 items-center my-5 hover:border-3 hover:border-dashed hover:border-gray-400 p-3 rounded-md">
                    <div class="w-10 h-10 overflow-hidden rounded-md flex-shrink-0">
                        <img :src="k.img" alt="Thumbnail" class="w-full h-full object-cover object-center"
                            loading="lazy" />
                    </div>
                    <div class="flex-1">
                        <h2 class="text-lg font-semibold text-gray-900">{{ k.name }}</h2>
                    </div>
                </div>
            </a>
        </div>

    </MasterBody>
</template>