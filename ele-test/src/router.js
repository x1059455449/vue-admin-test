import Vue from 'vue'
import Router from 'vue-router'
import Article from './views/Article.vue'
import Create from './views/Create.vue'
import EditArticle from "./views/EditArticle.vue"
import ShowArticle from "./views/ShowArticle.vue"

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            redirect:'/articles/index',
            // component:Article
        },
        {
            path:'/articles/create',
            name:'create',
            component:Create
        },
        {
            path: '/articles/index',
            name: 'list-index',
            component: Article
        },
        {
            path: '/article/:id/edit',
            name: 'edit',
            component: EditArticle
          },
          {
            path: '/article/:id/show',
            name: 'show',
            component: ShowArticle
          }
    ]
})