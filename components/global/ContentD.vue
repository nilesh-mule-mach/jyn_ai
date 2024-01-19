<template>
  <section>
    <div
      class="items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid xl:grid-cols-3 lg:gap-8 xl:gap-16 sm:py-16 lg:px-6"
    >
      <div class="mb-8 lg:mb-0">
        <div
          v-if="data && data.small_heading && data.small_heading.value"
          class="text-primary-2 mb-2 font-extrabold text-xl tracking-widest leading-normal pre-line whitespace-pre-line"
          v-html="data.small_heading.value"
        />
        <component
          :is="dynamicHeadingTag"
          class="mb-4 tracking-tight leading-normal"
          :class="[
            getHeadingWeight(data.heading__heading_weight.value[0].codename),
            getHeadingSize(data.heading__heading_size.value[0].codename),
            getHeadingColor(data.heading__heading_color.value[0].codename),
          ]"
        >
          {{ data.heading__heading_text.value }}
        </component>
        <div class="text-md text-gray-300">{{ data.sub_heading.value }}</div>
      </div>
      <div
        class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-4 md:space-y-0"
      >
        <div
          class="bg-white rounded shadow overflow-hidden"
          v-for="codename in data.section_grid.linkedItems"
          :key="codename.system.codename"
        >
          <FeatureCard :data="codename.elements" :length="5" />
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
  name: "ContentD",
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
