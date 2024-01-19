<template>
  <section class="bg-white">
    <div class="py-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl">
      <div class="mx-auto max-w-screen-sm text-center mb-8">
        <HeaderSection :data="data.section_heading.linkedItems[0].elements" />
      </div>
      <div class="grid gap-6 lg:grid-cols-3">
        <div
          class="bg-grey rounded-t-lg text-lg shadow-sm border-b-8 border-b-primary-3"
          v-for="codename in data.section_row.linkedItems"
          :key="codename.codename"
        >
          <FeatureCard :data="codename.elements" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "FeatureF",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
