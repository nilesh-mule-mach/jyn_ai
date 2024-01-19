<template>
  <div v-if="data.alignment.value[0].codename === 'image_left'">
    <div
      class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-16 sm:py-16 lg:px-6"
    >
      <img
        class="mb-4 w-full lg:mb-0 rounded-lg"
        :src="data.image.value[0].url"
        :alt="data.image.value[0].description"
      />
      <div class="text-gray-500 sm:text-lg">
        <HeaderSection
          :data="data.right_content_header.linkedItems[0].elements"
        />
        <FeatureCardRow
          :data="data.right_content_col.linkedItems[0].elements"
        />
        <p class="text-sm">
          {{ data.small_text.value }}
        </p>
      </div>
    </div>
  </div>
  <div v-else>
    <div
      class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-16 sm:py-16 lg:px-6"
    >
      <div class="text-gray-500 sm:text-lg">
        <HeaderSection
          :data="data.right_content_header.linkedItems[0].elements"
        />
        <FeatureCardRow
          :data="data.right_content_col.linkedItems[0].elements"
        />
        <p class="text-sm">
          {{ data.small_text.value }}
        </p>
      </div>
      <img
        class="mb-4 w-full lg:mb-0 rounded-lg"
        :src="data.image.value[0].url"
        :alt="data.image.value[0].description"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "FeatureB",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
