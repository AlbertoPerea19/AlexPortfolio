<script setup lang="ts">
import { RouterView } from 'vue-router'
import { defineComponent } from 'vue'
import { useI18n } from "vue-i18n";


const { locale } = useI18n();
const savedLocale: string | null = localStorage.getItem("lang");

if (savedLocale) locale.value = savedLocale;

</script>

<template>
  <RouterView />
</template>

<style scoped lang="scss">

</style>
