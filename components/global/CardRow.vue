<template>
  <div class="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-5 mx-auto">
    <!-- Grid -->
    <div
      v-if="data.number_of_cards.value[0].codename === 'four'"
      class="grid gap-6 auto-rows-fr grid-cols-1 sm:grid-cols-1 lg:grid-cols-4"
    >
      <div
        class="component component-CerCheckBox"
        v-for="codename in data.cards.linkedItemCodenames"
        :key="codename"
      >
        <SingleCard :data="getLinkedItemData(codename)" />
      </div>
    </div>
    <div
      v-if="data.number_of_cards.value[0].codename === 'three'"
      class="grid gap-14 auto-rows-fr grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 lg:mx-10"
    >
      <div
        class="component component-CerCheckBox"
        v-for="codename in data.cards.linkedItemCodenames"
        :key="codename"
      >
        <SingleCard :data="getLinkedItemData(codename)" />
      </div>
    </div>
    <div
      v-if="data.number_of_cards.value[0].codename === 'two'"
      class="grid gap-16 auto-rows-fr grid-cols-1 sm:grid-cols-1 lg:grid-cols-2"
    >
      <div
        class="component component-CerCheckBox"
        v-for="codename in data.cards.linkedItemCodenames"
        :key="codename"
      >
        <SingleCard :data="getLinkedItemData(codename)" />
      </div>
    </div>
    <div
      v-if="data.number_of_cards.value[0].codename === 'six'"
      class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
    >
      <div
        class="component component-CerCheckBox"
        v-for="codename in data.cards.linkedItemCodenames"
        :key="codename"
      >
        <SingleCard :data="getLinkedItemData(codename)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardRow",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getLinkedItemData(codename) {
      // Find the corresponding linkedItem based on the codename
      return this.data.cards.linkedItems.find(
        (item) => item.system.codename === codename
      );
    },
  },
};
</script>
