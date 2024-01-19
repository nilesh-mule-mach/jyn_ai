<template>
  <section class="bg-white">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
      <HeaderSection :data="data.section_heading.linkedItems[0].elements" />
      <FeatureCardRow :data="data.section_row.linkedItems[0].elements" />
    </div>
  </section>
</template>
<script>
export default {
  name: "FeatureC",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
