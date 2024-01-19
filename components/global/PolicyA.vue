<template>
  <!-- Hero -->
  <div>
    <div
      class="bg-primary py-28 lg:text-5xl text-4xl font-bold px-4 mb-12 lg:font-extrabold text-center text-white"
    >
      {{ data.heading.value }}
    </div>
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 policy-main mb-12" v-if="data.content.value.length">
      <div v-html="data.content.value" />
    </div>
  </div>
  <!-- End Hero -->
</template>

<script>
export default {
  name: "PolicyA",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {},
  methods: {},
};
</script>
