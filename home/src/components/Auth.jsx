/** @format */

const CustomAuthBody = ({ title, subtitle, children }) => {
	return (
		<div className=" md:bg-emerald-900 w-full h-screen relative">
			<div className="h-[500px] auth_card md:left-[150px] top-[100px] ">
				<img
					src="./estate.jpg"
					alt="home_img"
					className="hidden md:block object-cover w-full lg:h-[500px] md:h-[700px]"
				/>
			</div>
			<div className="auth_card md:bg-slate-200 md:right-[90px] top-[100px] px-[70px] md:px-20 py-10">
				<div className="justify-left  ">
					<h1 className="text-3xl tracking-wider">{title}</h1>
					<p className="slate_text">{subtitle}</p>
				</div>

				{children}
			</div>
		</div>
	)
}

export default CustomAuthBody
