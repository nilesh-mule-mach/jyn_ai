<template>
    <!-- Hero -->
    <div :style="{
      backgroundImage: 'url(' + data.background_image.value[0].url + ')',
      backgroundSize: '100% 100%'
    }" class="bg-cover bg-no-repeat relative overflow-hidden before:absolute before:bg-top bg-contain before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 pt-20">
      <!-- Grid -->
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div class="max-w-2xl text-center mx-auto">
          <div
            v-if="
              data &&
              data.hero_header &&
              data.hero_header.value &&
              data.hero_header.value !== '<p><br></p>'
            "
            class="mb-3 text-white text-xl font-medium tracking-widest leading-normal pre-line whitespace-pre-line"
            v-html="data.hero_header.value"
          />
          <component
            :is="dynamicHeadingTag"
            class="mb-4 tracking-tight leading-normal hero-line-height"
            :class="[
              getHeadingWeight(data.heading__heading_weight.value[0].codename),
              getHeadingSize(data.heading__heading_size.value[0].codename),
              getHeadingColor(data.heading__heading_color.value[0].codename),
            ]"
          >
            {{ data.heading__heading_text.value }}
          </component>
          <p class="mt-3 lg:text-xl text-normalfont-semibold text-white">
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
            class="inline-flex items-center mt-5"
          >
            <NaCta :data="data.button_cta.linkedItems[0].elements" />
          </div>
        </div>
        <!-- End Col -->
  
        
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </div>
   
    <!-- End Hero -->
  </template>
  
  <script>
  import {
    getHeadingWeight,
    getHeadingColor,
    getHeadingSize,
    getHeadingType,
  } from "/utils/dynamicOptions";
  export default {
    name: "HeroJynA",
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
  