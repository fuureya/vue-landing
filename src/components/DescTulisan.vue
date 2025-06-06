<script setup>
import MasterBody from "./MasterBody.vue";
import Writes from "./partials/Writes.vue";
import SearchWrites from "./partials/SearchWrites.vue";
</script>

<template>
    <MasterBody>
        <SearchWrites />
        <Writes typeOfPage="all" />
    </MasterBody>
</template>