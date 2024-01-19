<template>
  <!-- Features -->
  <div class="max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto">
    <div v-if="data.alignment.value[0].codename === 'image_left'">
      <!-- Grid -->
      <div
        class="flex flex-col lg:flex-row justify-between bg-white rounded-lg p-5"
      >
        <div>
          <img
            class="h-full lg:max-w-lg object-cover lg:p-7"
            :src="data.image.value[0].url"
            :alt="data.image.value[0].description"
          />
        </div>
        <!-- End Col -->

        <div class="mt-5 sm:mt-10 lg:mt-0 lg:p-7 lg:w-[55%]">
          <div
            v-if="data && data.small_heading && data.small_heading.value"
            class="text-accent font-extrabold text-xl tracking-widest leading-normal pre-line whitespace-pre-line"
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
          <div class="text-md text-gray-500">{{ data.sub_heading.value }}</div>
        </div>
        <!-- End Col -->
      </div>
    </div>
    <div v-else>
      <div
        class="flex flex-col-reverse lg:flex-row justify-between bg-white rounded-lg lg:text-right p-5"
      >
        <!-- End Col -->

        <div class="mt-5 sm:mt-10 lg:mt-0 lg:p-7 lg:w-[55%]">
          <div
            v-if="data && data.small_heading && data.small_heading.value"
            class="text-accent font-extrabold text-xl tracking-widest leading-normal pre-line whitespace-pre-line"
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
          <div class="text-md text-gray-500">{{ data.sub_heading.value }}</div>
        </div>
        <div>
          <img
            class="h-full lg:max-w-lg object-cover lg:p-7"
            :src="data.image.value[0].url"
            :alt="data.image.value[0].description"
          />
        </div>
        <!-- End Col -->
      </div>
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Features -->
</template>
<script>
import {
  getHeadingWeight,
  getHeadingColor,
  getHeadingSize,
  getHeadingType,
} from "/utils/dynamicOptions";
export default {
  name: "ContentE",
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
