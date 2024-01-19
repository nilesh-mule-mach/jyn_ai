<template>
  <div class="bg-white">
    <div
      class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div class="mr-auto place-self-center lg:col-span-7">
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
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl"
        >
          {{ data.description.value }}
        </p>
        <div
          v-if="
            data &&
            data.button_cta &&
            data.button_cta.linkedItems &&
            data.button_cta.linkedItems[0] &&
            data.button_cta.linkedItems[0].elements
          "
          class="inline-flex items-center justify-center"
        >
          <NaCta :data="data.button_cta.linkedItems[0].elements" />
        </div>
        <div
          v-if="
            data &&
            data.button_cta &&
            data.button_cta.linkedItems &&
            data.button_cta.linkedItems[1] &&
            data.button_cta.linkedItems[1].elements
          "
          class="inline-flex items-center justify-center px-1"
        >
          <NaCta :data="data.button_cta.linkedItems[1].elements" />
        </div>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img
          :src="data.image.value[0].url"
          :alt="data.image.value[0].description"
        />
      </div>
    </div>
  </div>
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
