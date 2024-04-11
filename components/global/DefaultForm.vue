<template>
  <div
    class=" max-w-screen-sm px-4 py-10 sm:px-6 lg:px-8 mx-auto default-form"
  >
    <div class="grid gap-4">
     <!--  <div v-html="data.content.value" class="pr-10 text-2xl" /> -->
      <div class="p-10 bg-white shadow-md">
        <!--Zoho Marketing Automation Web-Optin Form's Header Code Starts Here-->
        <!--Zoho Marketing Automation Web-Optin Form Starts Here-->
        <script
          type="text/javascript"
          src="https://ma.zoho.in/js/optin.min.js"
          onload="setupSF('sf3z72b285e84df8be90587b6c4af87ef273093756ffeeb1fb644f1392dd8800dde8','ZCFORMVIEW',false,'light')"
        ></script>
        <script type="text/javascript">
          function runOnFormSubmit_sf3z72b285e84df8be90587b6c4af87ef273093756ffeeb1fb644f1392dd8800dde8(
            th
          ) {
            /*Before submit, if you want to trigger your event, "include your code here"*/
          }
        </script>

        <div name="signupFormContainer">
          <input type="hidden" id="signupTmplName" value="large_form_8" />
          <input type="hidden" value="0" id="recapThemeOptin" />
          <input type="hidden" id="orgNameFull" value="Machintel" />
          <div
            id="sf3z72b285e84df8be90587b6c4af87ef273093756ffeeb1fb644f1392dd8800dde8"
            data-type="signupform"
          >
            <input type="hidden" id="recapTheme" value="0" />
            <input type="hidden" id="isRecapIntegDone" value="false" />
            <input
              type="hidden"
              id="signupFormType"
              value="LargeForm_Vertical"
            />
            <div id="customForm">
              <div name="SIGNUP_PAGE" class="large_form_8_css" id="SIGNUP_PAGE">
                <div
                  id="signupMainDiv"
                  name="SIGNUPFORM"
                  changeid="SIGNUPFORM"
                  changename="SIGNUPFORM"
                >
                  <div>
                    <form
                      method="POST"
                      id="zcampaignOptinForm"
                      action="https://ntel-zc1.maillist-manage.in/weboptin.zc"
                      target="_zcSignup"
                    >
                      <div id="SIGNUP_BODY_ALL" name="SIGNUP_BODY_ALL">
                        <div id="SIGNUP_BODY" name="SIGNUP_BODY">
                          <div>
                            <div
                              class=""
                              changeid="SIGNUP_MSG"
                              id="SIGNUP_DESCRIPTION"
                              changetype="SIGNUP_DESCRIPTION"
                            ></div>
                            <div>
                              <div name="fieldsdivSf" class="zcsffieldsdiv">
                                <!-- this is where we need styling-->
                                <div
                                  class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 text-black"
                                >
                                  <div
                                    class="zcsffield"
                                    fieldid="140226000000000029"
                                  >
                                    <div>
                                      <!-- check to mark emailid field as type email, and other mandatory fields as type required -->
                                      <input
                                        maxlength="100"
                                        placeholder="First Name"
                                        name="FIRSTNAME"
                                        changeitem="SIGNUP_FORM_FIELD"
                                        type="text"
                                        class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                                      />&nbsp;
                                      <span
                                        style="display: none"
                                        id="dt_FIRSTNAME"
                                        >1,true,1,First Name,2</span
                                      >
                                    </div>
                                  </div>
                                  <div
                                    class="zcsffield"
                                    fieldid="140226000000000032"
                                  >
                                    <div>
                                      <!-- check to mark emailid field as type email, and other mandatory fields as type required -->
                                      <input
                                        maxlength="100"
                                        placeholder="Last Name"
                                        name="LASTNAME"
                                        changeitem="SIGNUP_FORM_FIELD"
                                        type="text"
                                        class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                                      />&nbsp;
                                      <span
                                        style="display: none"
                                        id="dt_LASTNAME"
                                        >1,true,1,Last Name,2</span
                                      >
                                    </div>
                                    <div></div>
                                  </div>
                                </div>
                                <div
                                  class="zcsffield"
                                  fieldid="140226000000000023"
                                >
                                  <div>
                                    <!-- check to mark emailid field as type email, and other mandatory fields as type required -->
                                    <input
                                      maxlength="100"
                                      placeholder="Email"
                                      name="CONTACT_EMAIL"
                                      changeitem="SIGNUP_FORM_FIELD"
                                      type="email"
                                      class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                                    />&nbsp;
                                    <span
                                      style="display: none"
                                      id="dt_CONTACT_EMAIL"
                                      >1,true,6,Lead Email,2</span
                                    >
                                  </div>
                                </div>
                                <div
                                  class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
                                >
                                  <div
                                    class="zcsffield"
                                    fieldid="140226000000000038"
                                  >
                                    <div>
                                      <!-- check to mark emailid field as type email, and other mandatory fields as type required -->
                                      <input
                                        maxlength="100"
                                        placeholder="Company Name"
                                        name="COMPANYNAME"
                                        changeitem="SIGNUP_FORM_FIELD"
                                        type="text"
                                        class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                                      />&nbsp;
                                      <span
                                        style="display: none"
                                        id="dt_COMPANYNAME"
                                        >1,true,1,Company Name,2</span
                                      >
                                    </div>
                                  </div>
                                  <div
                                    class="zcsffield"
                                    fieldid="140226000000000041"
                                  >
                                    <div>
                                      <!-- check to mark emailid field as type email, and other mandatory fields as type required -->
                                      <input
                                        maxlength="100"
                                        placeholder="Phone"
                                        name="PHONE"
                                        changeitem="SIGNUP_FORM_FIELD"
                                        type="text"
                                        class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                                      />&nbsp;
                                      <span style="display: none" id="dt_PHONE"
                                        >1,true,1,Phone,2</span
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="zcsffield"
                                  fieldid="140226000001293055"
                                >
                                  <div>
                                    <div>
                                      <textarea
                                        name="CONTACT_CF1"
                                        changeitem="SIGNUP_FORM_FIELD"
                                        rows="4"
                                        type="checkbox"
                                        placeholder="Message (optional)"
                                        zc_display_name="Message"
                                        maxlength="2000"
                                        value=""
                                        class="py-3 px-4 block h-24 w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                                      ></textarea
                                      >&nbsp;
                                      <span
                                        style="display: none"
                                        id="dt_CONTACT_CF1"
                                        >1,false,5,Message,2</span
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div class="mt-3 flex">
                                  <div>
                                    <label
                                      for="remember-me"
                                      class="text-xs text-black"
                                      >By submitting this form I have read and
                                      acknowledged the
                                      <a
                                        class="text-blue-600 underline font-medium"
                                        href="https://machintel.com/privacy-policy"
                                        target="_blank"
                                        >Privacy policy</a
                                      ></label
                                    >
                                  </div>
                                </div>
                              </div>
                              <!-- Captcha for Signup --><!-- Captcha for Signup End--><!-- Other Lists Subscription Start-->
                              <div class="mt-6 grid">
                                <button
                                  type="button"
                                  action="Save"
                                  id="zcWebOptin"
                                  name="SIGNUP_SUBMIT_BUTTON"
                                  changetype="SIGNUP_SUBMIT_BUTTON_TEXT"
                                  value="Submit"
                                  class="btn bg-accent-2 text-white"
                                >
                                  Submit
                                </button>
                              </div>
                              <!-- end of where we need styling-->
                            </div>
                          </div>
                        </div>
                        <!-- Do not edit the below Zoho Campaigns hidden tags -->
                        <input
                          type="hidden"
                          id="fieldBorder"
                          value="rgb(0, 0, 0)"
                        />
                        <input
                          type="hidden"
                          name="zc_trackCode"
                          id="zc_trackCode"
                          value=""
                          onload=""
                        />
                        <input
                          type="hidden"
                          name="viewFrom"
                          id="viewFrom"
                          value="URL_ACTION"
                        />
                        <input
                          type="hidden"
                          id="submitType"
                          name="submitType"
                          value="optinCustomView"
                        />
                        <input type="hidden" id="lD" name="lD" value="" />
                        <input
                          type="hidden"
                          name="emailReportId"
                          id="emailReportId"
                          value=""
                        />
                        <input
                          type="hidden"
                          name="zx"
                          id="cmpZuid"
                          value="1df99b8525"
                        />
                        <input type="hidden" name="zcvers" value="2.0" />
                        <input
                          type="hidden"
                          name="oldListIds"
                          id="allCheckedListIds"
                          value=""
                        />
                        <input
                          type="hidden"
                          id="mode"
                          name="mode"
                          value="OptinCreateView"
                        />
                        <input type="hidden" id="zcld" name="zcld" value="" />
                        <input type="hidden" id="zctd" name="zctd" value="" />
                        <input
                          type="hidden"
                          id="document_domain"
                          value="ma.zoho.in"
                        />
                        <input
                          type="hidden"
                          id="zc_Url"
                          value="ntel-zc1.maillist-manage.in"
                        />
                        <input
                          type="hidden"
                          id="new_optin_response_in"
                          value="1"
                        />
                        <input
                          type="hidden"
                          id="duplicate_optin_response_in"
                          value="0"
                        />
                        <input
                          type="hidden"
                          id="zc_formIx"
                          name="zc_formIx"
                          value="3z72b285e84df8be90587b6c4af87ef273093756ffeeb1fb644f1392dd8800dde8"
                        /><!-- End of the campaigns hidden tags -->
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <input type="hidden" id="isCaptchaNeeded" value="false" />
              <input type="hidden" id="superAdminCap" value="0" />
              <img
                src="https://ntel-zc1.maillist-manage.in/images/spacer.gif"
                onload="referenceSetter(this)"
                id="refImage"
                style="display: none"
              />
            </div>
          </div>
        </div>

        <!--Zoho Marketing Automation Web-Optin Form Ends Here-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultForm",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
.default-form {
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
