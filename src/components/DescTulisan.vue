<script setup>
import MasterBody from './MasterBody.vue'
import SearchWrites from './partials/SearchWrites.vue'
import Writes from './partials/Writes.vue'
import { ref } from 'vue'

const selectedType = ref('none')
const searchKeyword = ref('')

const handleUpdate = (type) => {
    selectedType.value = type
}

const handleKeyword = (key) => {
    searchKeyword.value = key
}
</script>

<template>
    <MasterBody>
        <SearchWrites @updateEmit="handleUpdate" @keyword="handleKeyword" />
        <Writes :typeOfPage="'all'" :sortType="selectedType" />
    </MasterBody>
</template>
