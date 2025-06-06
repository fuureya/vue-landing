<script setup>
import MasterBody from './MasterBody.vue'
import SearchWrites from './partials/SearchWrites.vue'
import Writes from './partials/Writes.vue'
import { ref } from 'vue'

const selectedType = ref('none')

const handleUpdate = (type) => {
    selectedType.value = type
}
</script>

<template>
    <MasterBody>
        <SearchWrites @updateEmit="handleUpdate" />
        <Writes :typeOfPage="'all'" :sortType="selectedType" />
    </MasterBody>
</template>
