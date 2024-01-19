import { DeliveryClient } from '@kentico/kontent-delivery';

async function getDynamicRoutes() {
  const deliveryClient = new DeliveryClient({
    projectId: 'd21c04b3-d8e3-0069-0344-815518ff2064', // Replace with your actual Kontent project ID
  });

  // Fetch 'attentity_blog' items
  const blogResult = await deliveryClient.items()
    .type('blog_post')
    .collection("default") 
    .toPromise();

  const blogRoutes = blogResult.data.items.map(item => `/blog/${item.elements.slug.value}`);


  // Fetch 'component_page' items
  const pageResult = await deliveryClient.items()
    .type('component_page') 
    .collection("default")
    .toPromise();

  

  const pageRoutes = pageResult.data.items.map(item => `/${item.elements.slug.value}`);

  

  // Combine both arrays of routes
  return [...blogRoutes, ...pageRoutes];
}

module.exports = getDynamicRoutes;