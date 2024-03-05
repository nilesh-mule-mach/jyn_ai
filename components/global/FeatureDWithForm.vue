<template>
  <section>
    <div v-if="data.alignment.value[0].codename === 'image_right'">
      <div
        class="items-center py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
      >
        <div
          v-if="
            data &&
            data.section_header &&
            data.section_header.linkedItems &&
            data.section_header.linkedItems[0] &&
            data.section_header.linkedItems[0].elements
          "
        >
          <HeaderSection :data="data.section_header.linkedItems[0].elements" />
        </div>
        <div class="lg:grid xl:grid-cols-3 lg:gap-8 xl:gap-12">
          <div
            class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-4 md:space-y-0"
          >
            <div
              class="component component-CerCheckBox"
              v-for="codename in data.section_grid.linkedItems"
              :key="codename.system.codename"
            >
              <FeatureCard :data="codename.elements" />
            </div>
          </div>
          <div class="mb-8 lg:mb-0 default-form flex items-center">
            <!-- Contact Us Form-->
            <div class="p-10 bg-white shadow-md">
              <h2 class="mb-4 text-primary font-bold">
                Speak to an Expert Today!
              </h2>
              <form id='webform'
            @submit.prevent="handleSubmit"
            :action="formData.form_submit_url.value"
            name=WebToLeads440392000010730026 method='POST'
            accept-charset='UTF-8'
            ref="webform"
						class="text-black"
			    >
			<input type='text' style='display:none;' name='xnQsjsdp' value='fca34dfa7bc909e0f4b0544affa4c3c4fb36a1338d847352a07ef552c3be0ee8' /> 
			<input type='hidden' name='zc_gad' id='zc_gad' value='' />
			<input type='text' style='display:none;' name='xmIwtLD' value='f73e0aef610e783c9b87f39c6dcb5f2f17ddb722c8c48dc72f41fc152a49b53340ce3b0c9d0e16b44292fec26ede0774'/> 
			<input type='text'  style='display:none;' name='actionType' value='TGVhZHM=' />
			<input type='text' style='display:none;' name='returnURL' :value="thankYouUrl" />
			<!-- Do not remove this code. -->
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 text-black">
				<!-- Grid -->
				<div>
				<input 
					type='text'
					required
					id='First_Name'
					v-model="First_Name"
					placeholder="First Name"
					name='First Name'
					maxlength='40'
					class="py-3 px-4 mb-5 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
				/>
				</div>
				<div>
					<input 
					type='text'
					required
					id='Last_Name'
					v-model="Last_Name"
					name='Last Name'
					placeholder="Last Name"
					maxlength='80'
					class="py-3 px-4 mb-5 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
					/>
				</div>
				</div>
				<!-- End Grid -->
			<input 
				type='text' 
				ftype='email'
				required 
				id='Email'
				placeholder="Email"
				v-model="Email" 
				name='Email' 
				maxlength='100'
				class="py-3 px-4 mb-5 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
				/>
				<!-- Grid -->
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
				<div>
				<!-- Company Name -->
					<input 
					type='text' 
					id='LEADCF24' 
					v-model="LEADCF24"
					placeholder="Company"
					name='LEADCF24' 
					maxlength='255'
					class="py-3 px-4 mb-5 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
					/>
				</div>
				<div>
					<input 
					type='text'
					placeholder="Phone"
					required  
					id='Phone'
					v-model="Phone" 
					name='Phone' 
					maxlength='30'
					class="py-3 px-4 mb-5 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
					/>
				</div>
				</div>
				<!-- End Grid -->
	
			<!-- Message -->
				<input
					type="text"
					name="fullName"
					id="fullname"
					v-model="fullName"
				/>
				<input type="hidden" id="Lead_Status" v-model="leadStatus" name="Lead Status" />
				<input type="hidden" id="Lead_Source" v-model="leadSource" name="Lead Source" />
				<!-- UTM Medium --><input type='hidden' id='LEADCF21' name='LEADCF21' maxlength='255' v-model="LEADCF21" />
				<!-- UTM Campaign --><input type='hidden' id='LEADCF22' name='LEADCF22' maxlength='255' v-model="LEADCF22" />
				<!-- UTM Source --><input type='hidden' id='LEADCF19' name='LEADCF19' maxlength='255' v-model="LEADCF19" />
				<!-- UTM Medium --><input type='hidden' id='LEADCF20' name='LEADCF20' maxlength='255' v-model="LEADCF20" />
				
				<div class="mt-3 flex">
				<div>
				<label for="remember-me" class="text-xs text-black"
					>By submitting this form I have read and acknowledged the
					<a
					class="text-blue-600 underline font-medium"
					href="https://machintel.com/privacy-policy"
					target="_blank"
					>Privacy policy</a
					></label
				>
				</div>
				</div>
				<div class="mt-6 grid">
				<button type="submit" class="btn bg-accent-2 text-white">
					Submit
				</button>
				</div>
			
			<!-- Do not remove this Analytics Tracking code starts -->
			<script id='wf_anal' src='https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=3cfee387668f884d504642f8fb6dd1400f6bb83cbd01ea0b70e2edc583f31c31da23f802796678f8725589176e54824fgid7cef5a6fece3ac184a32e9b4efe8a7a3401f5fec83004acdbdd6bc2b7dfc84f3gid9191dae8b35c299a833cefdae14de02bcbf1e274248110fad84f7a10b7d0d57bgidc9e90c9f48f9f58f00180630b19ac9477d08ce52b36dae7ed439dc02ea19afe0&tw=3589a4203232fa268ab05fc8a31e37c28dae22a79133802ba130ef8cd5b07bd8'></script><!-- Do not remove this Analytics Tracking code ends. -->
			</form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div
        class="items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid xl:grid-cols-3 lg:gap-8 xl:gap-16 sm:py-16 lg:px-6"
      >
        <div class="mb-8 lg:mb-0">
          <div
            v-if="
              data &&
              data.section_header &&
              data.section_header.linkedItems &&
              data.section_header.linkedItems[0] &&
              data.section_header.linkedItems[0].elements
            "
          >
            <HeaderSection
              :data="data.section_header.linkedItems[0].elements"
            />
            <div
              v-if="
                data &&
                data.section_header &&
                data.section_header.linkedItems &&
                data.section_header.linkedItems[1] &&
                data.section_header.linkedItems[1].elements
              "
              class="inline-flex items-center"
            >
              <NaCta :data="data.section_header.linkedItems[1].elements" />
            </div>
          </div>
        </div>
        <div
          class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-4 md:space-y-0"
        >
          <div
            class="component component-CerCheckBox"
            v-for="codename in data.section_grid.linkedItems"
            :key="codename.system.codename"
          >
            <FeatureCard :data="codename.elements" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "FeatureDwithForm",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
			return {
			First_Name:'',
			Last_Name:'',
			Email: "",
			LEADCF24: '',
			Phone:'',
			LEADCF21:'',
			LEADCF22:'',
			LEADCF19:'',
			LEADCF20:'',
			leadStatus: 'New - Not Contacted',
			leadSource: 'Website - Download',
			fullName: "",
			formData: {
				form_submit_url: {
				value: 'https://crm.zoho.in/crm/WebToLeadForm', // Default or fetched URL
				},
			},
			};
		},
  computed:{
    thankYouUrl() {
    const baseUrl = 'https://machintel.com';
    let path = this.$route.path;

    // Remove the leading slash from the path if present
    if (path.startsWith('/')) {
      path = path.substring(1);
    }

    // Remove the trailing slash from the path if present
    if (path.endsWith('/')) {
      path = path.substring(0, path.length - 1);
    }

    // Append '-thank-you' to the path
    return `${baseUrl}/${path}-thank-you`;
  }
  },
  mounted() {
      this.prefillForm();
    },
    methods: {
    handleSubmit() {
        if (this.fullName) {
          window.location.href = "https://machintel.com/thank-you-two";
          return;
        }
        // Programmatically submit the form
        this.$refs.webform.submit();
        },
    prefillForm() {
		const queryParams = new URL(window.location.href).searchParams;
		if (queryParams.has("utm_source")) {
			this.LEADCF19 = queryParams.get("utm_source");
		}
		if (queryParams.has("utm_medium")) {
			this.LEADCF20 = queryParams.get("utm_medium");
		}
		if (queryParams.has("utm_campaign")) {
			this.LEADCF22 = queryParams.get("utm_campaign");
		}
		this.LEADCF21 = 'Build Better Campaigns';
		},
  },
};
</script>

<style>
.default-form {
	input, label{
		@apply text-font !important;
	}
  h2 {
    @apply text-accent text-xl;
  }
  p {
    @apply text-base;
  }
  #fullname {
		display: none;
	}
	
}
</style>
