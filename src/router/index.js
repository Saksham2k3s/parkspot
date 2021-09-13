import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'

Vue.use(VueRouter)


//router.beforeEach((to, from, next)=>{
//	if(to !== '/' || to != '/faq' || to != '/thanks'){
//		console.log(`route from ${to} to ${from}`)
//		next()
//	}
//	else{
//		next({path: "/"})
//	}
//})
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.name === "mainBlog") {
    document.title = `${to.meta.title} ${to.params.postTitle}`
  } else if (to.name === "srp") {
    document.title = `${to.meta.title} ${to.query.loc}`
  } else if (to.name === "discover") {
    document.title = `${to.meta.title} ${to.params.pathMatch} - find and book best parking spot with ParkSpot`
  }
  else {
    document.title = `${to.meta.title}`
  }
  next()

})

export default router
