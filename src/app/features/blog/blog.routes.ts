import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PostsComponent } from "./posts/posts.component";



export const blogRoutes : Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'posts',
        component: PostsComponent
    }
]