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

  const caseStudyThankYou = await deliveryClient.items()
  .type('resource_item') 
  .collection("default")
  .containsFilter("elements.type", ["case_study"])
  .toPromise();

  const ebookThankYou = await deliveryClient.items()
  .type('resource_item') 
  .collection("default")
  .containsFilter("elements.type", ["e_book"])
  .toPromise();

  const infographicThankYou = await deliveryClient.items()
  .type('resource_item') 
  .collection("default")
  .containsFilter("elements.type", ["infographic"])
  .toPromise();

  const webinarThankYou = await deliveryClient.items()
  .type('resource_item') 
  .collection("default")
  .containsFilter("elements.type", ["webinar"])
  .toPromise();

  const whitepaperThankYou = await deliveryClient.items()
  .type('resource_item') 
  .collection("default")
  .containsFilter("elements.type", ["whitepaper"])
  .toPromise();

  const caseStudyThankYous = caseStudyThankYou.data.items.map(item => `/case-studies/${item.elements.slug.value}/thank-you/`);
  const ebookThankYous = ebookThankYou.data.items.map(item => `/ebook/${item.elements.slug.value}/thank-you/`);
  const infographicThankYous = infographicThankYou.data.items.map(item => `/infographics/${item.elements.slug.value}/thank-you/`);
  const webinarThankYous = webinarThankYou.data.items.map(item => `/webinar/${item.elements.slug.value}/thank-you/`);
  const whitepaperThankYous = whitepaperThankYou.data.items.map(item => `/whitepaper/${item.elements.slug.value}/thank-you/`);

  // Combine both arrays of routes
  return [...blogRoutes, ...pageRoutes, ...caseStudyThankYous, ...ebookThankYous, ...infographicThankYous, ...webinarThankYous, ...whitepaperThankYous];
}

module.exports = getDynamicRoutes;