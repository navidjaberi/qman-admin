
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
interface _GlobalComponents {
      'BaseAlert': typeof import("../components/Base/Alert.vue")['default']
    'BaseBtn': typeof import("../components/Base/Btn.vue")['default']
    'DashboardNavbar': typeof import("../components/Dashboard/Navbar.vue")['default']
    'DashboardTabsMain': typeof import("../components/Dashboard/Tabs/Main.vue")['default']
    'RegisterLoginNumber': typeof import("../components/Register/LoginNumber.vue")['default']
    'RegisterLoginPassword': typeof import("../components/Register/LoginPassword.vue")['default']
    'RegisterOTPChild': typeof import("../components/Register/OTPChild.vue")['default']
    'RegisterOTPParent': typeof import("../components/Register/OTPParent.vue")['default']
    'RegisterOtp': typeof import("../components/Register/Otp.vue")['default']
    'UnoIcon': typeof import("../node_modules/@unocss/nuxt/runtime/UnoIcon.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'VField': typeof import("vee-validate")['Field']
    'VForm': typeof import("vee-validate")['Form']
    'VErrorMessage': typeof import("vee-validate")['ErrorMessage']
    'VFieldArray': typeof import("vee-validate")['FieldArray']
    'Icon': typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyBaseAlert': typeof import("../components/Base/Alert.vue")['default']
    'LazyBaseBtn': typeof import("../components/Base/Btn.vue")['default']
    'LazyDashboardNavbar': typeof import("../components/Dashboard/Navbar.vue")['default']
    'LazyDashboardTabsMain': typeof import("../components/Dashboard/Tabs/Main.vue")['default']
    'LazyRegisterLoginNumber': typeof import("../components/Register/LoginNumber.vue")['default']
    'LazyRegisterLoginPassword': typeof import("../components/Register/LoginPassword.vue")['default']
    'LazyRegisterOTPChild': typeof import("../components/Register/OTPChild.vue")['default']
    'LazyRegisterOTPParent': typeof import("../components/Register/OTPParent.vue")['default']
    'LazyRegisterOtp': typeof import("../components/Register/Otp.vue")['default']
    'LazyUnoIcon': typeof import("../node_modules/@unocss/nuxt/runtime/UnoIcon.vue")['default']
    'LazyNuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome")['default']
    'LazyNuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'LazyNuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'LazyClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'LazyDevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'LazyServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'LazyNuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'LazyNuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'LazyNuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'LazyNuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'LazyNuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'LazyVField': typeof import("vee-validate")['Field']
    'LazyVForm': typeof import("vee-validate")['Form']
    'LazyVErrorMessage': typeof import("vee-validate")['ErrorMessage']
    'LazyVFieldArray': typeof import("vee-validate")['FieldArray']
    'LazyIcon': typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'LazyNuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'LazyNoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'LazyLink': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'LazyBase': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'LazyTitle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'LazyMeta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'LazyStyle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'LazyHead': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'LazyHtml': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'LazyBody': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'LazyNuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'LazyNuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const BaseAlert: typeof import("../components/Base/Alert.vue")['default']
export const BaseBtn: typeof import("../components/Base/Btn.vue")['default']
export const DashboardNavbar: typeof import("../components/Dashboard/Navbar.vue")['default']
export const DashboardTabsMain: typeof import("../components/Dashboard/Tabs/Main.vue")['default']
export const RegisterLoginNumber: typeof import("../components/Register/LoginNumber.vue")['default']
export const RegisterLoginPassword: typeof import("../components/Register/LoginPassword.vue")['default']
export const RegisterOTPChild: typeof import("../components/Register/OTPChild.vue")['default']
export const RegisterOTPParent: typeof import("../components/Register/OTPParent.vue")['default']
export const RegisterOtp: typeof import("../components/Register/Otp.vue")['default']
export const UnoIcon: typeof import("../node_modules/@unocss/nuxt/runtime/UnoIcon.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const VField: typeof import("vee-validate")['Field']
export const VForm: typeof import("vee-validate")['Form']
export const VErrorMessage: typeof import("vee-validate")['ErrorMessage']
export const VFieldArray: typeof import("vee-validate")['FieldArray']
export const Icon: typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyBaseAlert: typeof import("../components/Base/Alert.vue")['default']
export const LazyBaseBtn: typeof import("../components/Base/Btn.vue")['default']
export const LazyDashboardNavbar: typeof import("../components/Dashboard/Navbar.vue")['default']
export const LazyDashboardTabsMain: typeof import("../components/Dashboard/Tabs/Main.vue")['default']
export const LazyRegisterLoginNumber: typeof import("../components/Register/LoginNumber.vue")['default']
export const LazyRegisterLoginPassword: typeof import("../components/Register/LoginPassword.vue")['default']
export const LazyRegisterOTPChild: typeof import("../components/Register/OTPChild.vue")['default']
export const LazyRegisterOTPParent: typeof import("../components/Register/OTPParent.vue")['default']
export const LazyRegisterOtp: typeof import("../components/Register/Otp.vue")['default']
export const LazyUnoIcon: typeof import("../node_modules/@unocss/nuxt/runtime/UnoIcon.vue")['default']
export const LazyNuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome")['default']
export const LazyNuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const LazyNuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const LazyClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const LazyDevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const LazyServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyNuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const LazyNuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const LazyNuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const LazyNuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const LazyNuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const LazyVField: typeof import("vee-validate")['Field']
export const LazyVForm: typeof import("vee-validate")['Form']
export const LazyVErrorMessage: typeof import("vee-validate")['ErrorMessage']
export const LazyVFieldArray: typeof import("vee-validate")['FieldArray']
export const LazyIcon: typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const LazyNuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const LazyNoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const LazyLink: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const LazyBase: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const LazyTitle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const LazyMeta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const LazyStyle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const LazyHead: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const LazyHtml: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const LazyBody: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const LazyNuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyNuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
