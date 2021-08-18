import Home from '@/views/Home.vue'
import Thanks from '@/views/Thanks.vue'
import about from '@/components/templates/t-about.vue'



export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/faq',
    name: 'Faq',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Faq.vue')
  },
  {
    path: '/thanks',
    name: 'Thanks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Thanks
  },
  {
    path: '/about',
    name: 't-about',
    component: about
  },
  {
    path: '/features',
    name: 't-features',
    component: () => import('@/components/templates/t-features.vue')
  },
  {
    path: '/contact',
    name: 't-contact',
    component: () => import('@/components/templates/t-contact.vue')
  },
  {
    path: '/srp',
    name: 'srp',
    // beforeRouteUpdate(to, from, next) {
    //   // react to route changes...
    //   console.log(`to ${to} from ${from}`)
    //   // don't forget to call next()
    //   next()
    // },
    component: () => import('@/views/Srp.vue')
  },
  {
    path: '/request-your-parking-spot',
    name: 'VOPortal',
    component: () => import('@/views/new-portal.vue')
  },
  {
    path: '/terms-and-conditions',
    name: 'Terms',
    component: () => import('@/views/Terms.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/landing-blog.vue')
  },
  {
    path: '/blog/:id',
    name: 'mainBlog',
    component: () => import('@/views/main-blog.vue'),
    // props: (route) => ({
    //   data: userData,
    // })
  },
  {
    path: '/search-portal',
    name: 'searchPortal',
    component: () => import('@/views/search-portal.vue'),
    beforeEnter: (to, from, next) => {
      let userName = prompt("Enter User Name:");
      let password = prompt("Enter Password:");
      if (userName === "Admin" && password === "Parksp0t") {
        next()
      }
      else {
        alert("You have Entered wrong credentials!! Please try again")
        next("/search-portal")
      }
    }
  },

  {
    path: '*',
    component: Home
  }
]

