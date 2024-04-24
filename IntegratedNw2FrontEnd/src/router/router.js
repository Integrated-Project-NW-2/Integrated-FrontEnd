import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Task from "../views/Task.vue";
import NotFound from "../views/NotFound.vue";

const history = createWebHistory();
const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/task",
		name: "Task",
		component: Task
	},
    {
		path: "/:notfoundpath(.*)",
		name: "NotFound",
		component: NotFound,
		redirect: "/"
	}
]

const router = createRouter({
	history,
	routes,
	linkActiveClass: "text-[#2ff6da]",
	linkExactActiveClass: "hover:text-[#2ff6da] hover:text-[#2ff6da] p-2",
});

export default router;