<template>
  <section>
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto text-center mb-8 lg:mb-16">
        <HeaderSection :data="data.section_heading.linkedItems[0].elements" />
      </div>

      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        <div
          class="bg-white rounded shadow overflow-hidden"
          v-for="codename in data.section_grid.linkedItems"
          :key="codename.system.codename"
        >
          <FeatureCard :data="codename.elements" :length="6" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {
  getHeadingWeight,
  getHeadingColor,
  getHeadingSize,
  getHeadingType,
} from "/utils/dynamicOptions";
export default {
  name: "ZigZag",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    dynamicHeadingTag() {
      const headingTypeCode = this.data.heading__heading_type.value[0].codename;
      return getHeadingType(headingTypeCode);
    },
  },
  methods: {
    getHeadingWeight,
    getHeadingColor,
    getHeadingSize,
  },
};
</script>
