<template>
  <section class="bg-white">
    <div
      class="max-w-screen-xl px-4 pt-8 mx-auto text-center lg:pt-16 lg:px-12"
    >
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
      <p
        class="mb-8 font-light text-gray-500 md:text-lg lg:text-xl sm:px-16 xl:px-48"
      >
        {{ data.description.value }}
      </p>
      <img
        class="mx-auto mb-5 lg:mb-8 z-1"
        :src="data.image.value[0].url"
        :alt="data.image.value[0].description"
      />
      <div
        class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
      >
        <div
          v-if="
            data &&
            data.button_cta &&
            data.button_cta.linkedItems &&
            data.button_cta.linkedItems[0] &&
            data.button_cta.linkedItems[0].elements
          "
          class="inline-flex items-center justify-center px-5 py-3"
        >
          <NaCta :data="data.button_cta.linkedItems[0].elements" />
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
  name: "HeroD",
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
