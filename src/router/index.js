import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoList from '../views/TodoList.vue'
import IssueList from '../views/IssueList.vue'
import TodosIssues from '../views/TodosIssues.vue'

Vue.use(VueRouter)

const routes = [
  {
    // URLの定義
    path: '/',
    // そのルーティングの名前（アプリケーションの中でリンクさせる時などに指定できます）
    name: 'home',
    // レンダリングするコンポーネント
    // import Home from '../views/Home.vue' で読み込んだコンポーネントを使っている
    component: HomeView
  },
  // '/todos'パス追加
  {
    path: '/todo-list',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/issue-list',
    name: 'IssueList',
    component: IssueList
  },
  {
    path: '/todos-issues',
    name: 'TodosIssues',
    component: TodosIssues
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
