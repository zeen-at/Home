import { lazy } from 'react';

export const HomePage = lazy(() => import('./home'))
export const AboutPage = lazy(() => import("./about"))
export const LoginPage = lazy(() => import("./login"))
export const RegisterPage = lazy(() => import("./register"))
export const ProfilePage = lazy(() => import("./profile"))
