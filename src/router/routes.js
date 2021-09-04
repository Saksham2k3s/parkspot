import Home from '@/views/Home.vue'
import Thanks from '@/views/Thanks.vue'
import about from '@/components/templates/t-about.vue'



export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Find and Book parking spaces nearby | Bangalore Delhi Mumbai Pune Bengaluru | Parkspot.in"
    }
  },
  {
    path: '/faq',
    name: 'Faq',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Faq.vue'),
    meta: {
      title: "FAQ's - Get your all queries be answered..."
    }
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
    component: about,
    meta: {
      title: "ParkSpot | About -  get Parking Spot , rent vacant spot"
    }
  },
  {
    path: '/features',
    name: 't-features',
    component: () => import('@/components/templates/t-features.vue'), meta: {
      title: "ParkSpot | Features"
    }
  },
  {
    path: '/contact',
    name: 't-contact',
    component: () => import('@/components/templates/t-contact.vue'),
    meta: {
      title: "ParkSpot | Contact Us"
    }
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
    component: () => import('@/views/Srp.vue'),
    meta: {
      title: "ParkSpot | Search - "
    }
  },
  {
    path: '/request-your-parking-spot',
    name: 'VOPortal',
    component: () => import('@/views/new-portal.vue'),
    meta: {
      title: "ParkSpot | Request Your Parking Spot"
    }
  },
  {
    path: '/terms-and-conditions',
    name: 'Terms',
    component: () => import('@/views/Terms.vue'),
    meta: {
      title: "ParkSpot | Terms & Conditions"
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/landing-blog.vue'),
    meta: {
      title: "ParkSpot | Blogs"
    }
  },
  {
    path: '/blog/:id',
    name: 'mainBlog',
    component: () => import('@/views/main-blog.vue'),
    // props: (route) => ({
    //   data: userData,
    // })
    meta: {
      title: "ParkSpot | Blogs - "
    }
  },
  {
    path: '/search-portal',
    name: 'searchPortal',
    component: () => import('@/views/search-portal.vue'),
    meta: {
      title: "ParkSpot | Search Portal"
    },
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

