import { Suspense, lazy } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage, AboutPage, RegisterPage, LoginPage, ProfilePage } from "./pages";
import CustomLoader from "./components/CustomLoader";
const Header = lazy(() => import("./components/Header"))

function App() {
	return (
		<Suspense fallback={<CustomLoader />}>
      <BrowserRouter>
        <Header />
        <Routes>
          
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	)
}

export default App
