	<template>
	<div
		class="max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto default-form-b"
		id="element"
	>
		<div class="grid lg:grid-cols-2 gap-4">
		<div>
			<component
			:is="dynamicHeadingTag"
			class="mb-4 tracking-tight leading-normal"
			:class="[
				getHeadingWeight(data.heading__heading_weight.value[0].codename),
				getHeadingSize(data.heading__heading_size.value[0].codename),
				getHeadingColor(data.heading__heading_color.value[0].codename),
			]"
			>
			{{ data.heading__heading_text.value }}
			</component>
			<span v-html="data.content.value" class="pr-10 text-2xl"></span>
		</div>
		<div class="p-10 bg-white shadow-md">
			<h3 class="text-xl text-primary mb-4 font-bold">
			{{ data.form_heading.value }}
			</h3>
			<form id='webform'
				@submit.prevent="handleSubmit"
				:action="formData.form_submit_url.value"
				name=WebToLeads440392000011138018 method='POST'
				accept-charset='UTF-8'
				ref="webform"
				class="text-black"
			>
			<input type='text' style='display:none;' name='xnQsjsdp' value='a7b643a398072a3e8626a893c17f4ae697dbd0ed305212ddcfa9a6e4bf3d3faf' /> 
			<input type='hidden' name='zc_gad' id='zc_gad' value='' />
			<input type='text' style='display:none;' name='xmIwtLD' value='b441fa61cea021f5b39f693c8b25256de904111016a978faefaf8e0a9da0d057d5243ad23285a0c8c7587b22d4570b6b'/> 
			<input type='text'  style='display:none;' name='actionType' value='TGVhZHM=' />
			<input type='text' style='display:none;' name='returnURL' value="https://machintel.com/thank-you" />
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
				<!-- Asset Name --><input type='hidden' id='LEADCF21' name='LEADCF21' maxlength='255' v-model="LEADCF21" />
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
				<button type="submit" class="btn bg-accent-2 text-white" id="meeting-submit">
					Submit
				</button>
				</div>
			
			<!-- Do not remove this Analytics Tracking code starts -->
			<script id='wf_anal' src='https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=c3b11d2b3874b76d4870cc60e96d515d0921656a89c5c5522f34d81e2d0d3553ec49af956d4b4883efc2ae2a8610bd1fgid8472f62ad60499b46091704077f762e6c7b09fa384f8f63ffe016944b5d421f8gidea537491f0b4c181b01ee4fed29f88becbc226fa55c81c7b769870b23fdffdf0gid9942adfdc79f53685af256d76c3083521fd4b073de7847914be8120fbdc73683&tw=efbe416756c0f21fb127036dbb1e5ea6b3568229dabffc9de94d2c677c31adb2'></script><!-- Do not remove this Analytics Tracking code ends. -->
			</form>
		</div>
		</div>
	</div>
	</template>

	<script>
	import {
	getHeadingWeight,
	getHeadingColor,
	getHeadingSize,
	getHeadingType,
	} from "/utils/dynamicOptions";
	export default {
		name: "DefaultForm",
		data() {
			return {
			First_Name:'',
			Last_Name:'',
			Email: "",
			LEADCF24: '',
			Phone:'',
			LEADCF21:'Meeting Request',
			LEADCF22:'',
			LEADCF19:'',
			LEADCF20:'',
			leadStatus: 'New - Not Contacted',
			leadSource: 'Website - Contact',
			fullName: "",
			formData: {
				form_submit_url: {
				value: 'https://crm.zoho.in/crm/WebToLeadForm', // Default or fetched URL
				},
			},
			};
		},
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
	mounted() {
		this.prefillForm();
	},
	methods: {
		getHeadingWeight,
		getHeadingColor,
		getHeadingSize,
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
		this.LEADCF21 = this.data.heading__heading_text.value;
		},
	},
	};
	</script>

	<style>
	.default-form-b {
	p {
		@apply text-base;
	}
	#fullname {
		display: none;
	}
	}
	</style>
