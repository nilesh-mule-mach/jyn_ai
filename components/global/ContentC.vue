<template>
  <!-- Hero -->
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div
      v-if="
        data &&
        data.content &&
        data.content.value &&
        data.content.value !== '<p><br></p>'
      "
      class="text-primary-3 text-base lg:text-xl font-medium pre-line whitespace-pre-line"
      v-html="data.content.value"
    />
  </div>
  <!-- End Hero -->
</template>

<script>
export default {
  name: "ContentC",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {},
};
</script>
