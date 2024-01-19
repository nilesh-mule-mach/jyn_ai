<template>
  <section class="bg-white">
    <div class="py-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl">
      <div
        class="mx-auto max-w-screen-lg text-center mb-8 pre-line whitespace-pre-line"
      >
        <HeaderSection :data="data.section_heading.linkedItems[0].elements" />
      </div>
      <img
        class="w-full h-full"
        :src="data.image.value[0].url"
        :alt="data.image.value[0].description"
      />
    </div>
  </section>
</template>
<script>
export default {
  name: "FeatureG",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
