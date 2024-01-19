<template>
  <div class="relative max-w-[85rem] w-full mx-auto px-4 lg:px-8 pb-8">
    {{ data.this_is_a_sample_file.value }}
  </div>
</template>

<script>
export default {
  name: "SampleFile",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
