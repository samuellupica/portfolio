<script setup lang="ts">
import { settingsQuery } from "~/sanity/queries";
import type {Settings } from "~/sanity/types";

const { data: settings } =
  await useSanityQuery<Settings>(settingsQuery);
</script>

<template>
</template>
