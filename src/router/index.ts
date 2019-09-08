'use strict'

import Vue from 'vue'
import Router from 'vue-router'

import Application from '@/components/Application.vue'
import ApplicationList from '@/components/ApplicationList.vue'
import FourOhFour from '@/components/FourOhFour.vue'
import Home from '@/components/Home.vue'
import InformationPublicizing from '@/components/about/InformationPublicizing.vue'
import LegacyData from '@/components/about/LegacyData.vue'
import ProcessAutomation from '@/components/about/ProcessAutomation.vue'
import WebServices from '@/components/about/WebServices.vue'
import WhyBitBadger from '@/components/about/WhyBitBadger.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about/information-publicizing-solutions', name: 'InformationPublicizing', component: InformationPublicizing },
    { path: '/about/legacy-data', name: 'LegacyData', component: LegacyData },
    { path: '/about/process-automation-solutions', name: 'ProcessAutomation', component: ProcessAutomation },
    { path: '/about/web-services-solutions', name: 'WebServices', component: WebServices },
    { path: '/about/why-bit-badger', name: 'WhyBitBadger', component: WhyBitBadger },
    { path: '/solutions/:app', name: 'Application', component: Application, props: true },
    { path: '/solutions', name: 'ApplicationList', component: ApplicationList },
    { path: '*', name: 'FourOhFour', component: FourOhFour }
  ],
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})