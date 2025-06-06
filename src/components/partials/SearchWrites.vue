<script setup>
const emit = defineEmits(['updateEmit', 'keyword'])

const sortBy = (type) => {
    emit('updateEmit', type)
}
const cari = (event) => {
    emit('keyword', event.target.value)
    console.log(event.target.value)
}
</script>

<template>
    <div>
        <h1 class="text-center mb-5 text-xl text-gray-900 md:text-3xl font-semibold md:mt-10">
            Tulisan Saya
        </h1>

        <!-- Tombol filter -->
        <div class="flex flex-wrap justify-center gap-3">
            <button @click="sortBy('Jaringan')"
                class="px-3 py-1 bg-gray-300 text-gray-500 rounded hover:bg-gray-500 hover:text-white transition">
                Jaringan
            </button>
            <button @click="sortBy('Pemrograman')"
                class="px-3 py-1 bg-gray-300 text-gray-500 rounded hover:bg-gray-500 hover:text-white transition">
                Pemrograman
            </button>
            <button @click="sortBy('Cyber Security')"
                class="px-3 py-1 bg-gray-300 text-gray-500 rounded hover:bg-gray-500 hover:text-white transition">
                Cyber Security
            </button>
            <button @click="sortBy('Server')"
                class="px-3 py-1 bg-gray-300 text-gray-500 rounded hover:bg-gray-500 hover:text-white transition">
                Server
            </button>
        </div>

    </div>
</template>
