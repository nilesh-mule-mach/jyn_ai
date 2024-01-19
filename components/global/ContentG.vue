<template>
  <section>
    <div class="py-8 px-4 mx-auto text-black max-w-screen-xl lg:py-16 lg:px-6">
      <div
        class="mx-auto text-center font-bold text-2xl lg:text-4xl mb-6 lg:mb-10"
      >
        {{ data.header.value }}
      </div>

      <div
        class="text-normal lg:text-xl mx-auto max-w-4xl font-normal text-center"
      >
        {{ data.description.value }}
      </div>
      <div class="flex items-center space-x-4 justify-center mt-6 lg:mt-10">
        <img
          class="w-14 h-14 rounded-full"
          :src="data.image.value[0].url"
          :alt="data.image.value[0].description"
        />
        <div class="">
          <div class="font-bold text-normal lg:text-lg">
            {{ data.name.value }}
          </div>
          <div class="text-sm font-medium">{{ data.content.value }}</div>
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
