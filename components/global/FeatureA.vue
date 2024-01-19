<template>
  <section>
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="mx-auto text-center mb-8 lg:mb-16">
        <HeaderSection :data="data.section_heading.linkedItems[0].elements" />
      </div>
      <div class="bg-white px-4 py-4 rounded-lg">
        <FeatureCardRow :data="data.section_grid.linkedItems[0].elements" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "FeatureA",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
