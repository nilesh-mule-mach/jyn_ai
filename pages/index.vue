<template>
  <div>
    <div v-for="item in linkedItems" :key="item.system.codename">
      <component
        :is="componentName(item)"
        :data="item"
        :nestedComponents="getNestedComponents(item)"
      />
    </div>
  </div>
</template>

<script>
import uidData from "@/static/json/component_page";

export default {
  async asyncData({ route, params }) {
    const currentData = uidData[0];
    try {
      console.log('pageData',uidData[0].elements.slug.value)
      return {
        pageData: currentData,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      window.open("https://machintel.com/404/", "_self");
      return { pageData: {} };
    }
  },

  // Import and resolve components dynamically
  computed: {
    linkedItems() {
      console.log('this.pageData',this.pageData)
      return this.pageData.elements.components.linkedItems;
    },
  },

  methods: {
    // Get the component name based on the system.type
    componentName(item) {
      const type = item.system.type;
      const componentName = type
        .replace(/__/g, "-") // Replace '__' with '-'
        .split("-") // Split by '-'
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(""); // Join words without '-'
      return componentName;
    },

    // Get nested components for a given item
    getNestedComponents(item) {
      const richTextElement = item.elements.components;
      if (!richTextElement || !richTextElement.linkedItems) {
        return []; // Return an empty array if there are no nested components
      }
      const nestedComponents = richTextElement.linkedItems;
      return nestedComponents.map((component) => ({
        componentType: component.system.type,
        componentCodename: component.system.codename,
        data: component.elements,
      }));
    },
  },

  //SEO stuff
  head() {
    return {
      title: "Jyn.ai",
     /*  meta: [
        {
          hid: "description",
          name: "description",
          content: this.pageData.elements.meta_description.value,
        },

        {
          property: "og:title",
          content: this.pageData.elements.meta_title.value,
        },
        {
          property: "og:description",
          content: this.pageData.elements.meta_description.value,
        },
        {
          name: "image",
          property: "og:image",
          content: "https://machintel.com/images/mach-og.jpg",
        },
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: this.pageData.elements.meta_title.value,
        },
        {
          name: "twitter:description",
          content: this.pageData.elements.meta_description.value,
        },
        {
          name: "twitter:image",
          content: "https://machintel.com/images/mach-og.jpg",
        },
        { name: "name", content: "@machintelInc" },
        { property: "og:sitename", content: "machintel" },
        { property: "og:locale", content: "en_US" },
        { property: "og:type", content: "website" },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://machintel.com",
        },
      ], */
    };
  },
};

// You can also pass in the default options
// Vue.use(VueScrollTo, {
//   container: "body",
//   duration: 500,
//   easing: "ease",
//   offset: 0,
//   force: true,
//   cancelable: true,
//   onStart: false,
//   onDone: false,
//   onCancel: false,
//   x: false,
//   y: true,
// });
</script>
