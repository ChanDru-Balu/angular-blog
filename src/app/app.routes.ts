import { Routes } from "@angular/router";
import { authRoutes } from "./features/auth/auth.routes";
import { blogRoutes } from "./features/blog/blog.routes";
import { authGuard } from "./core/guards/authguard.guard";
// import { }

export const routes : Routes = [
    {
        path: '',
        children: authRoutes
    },
    {
        path:'blog',
        children: blogRoutes,
        canActivateChild: [authGuard]
    },
    {
        path: '**',
        children: authRoutes
    }
]