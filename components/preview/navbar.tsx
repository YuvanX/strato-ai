export const NavBar = ({logo, children}: {logo: string, children: React.ReactNode}) => {
    return <div className="flex justify-between px-2 bg-white/10 border-white/20 backdrop-blur-lg py-3 items-center rounded-full fixed w-[80%] mt-10">
        <div className="pl-10 font-extrabold text-4xl font-anton cursor-pointer font-anton">
            {logo.toUpperCase()}
        </div>
        <div className="flex gap-20 items-center font-thin">
            {children}
        </div>
        <div className="flex items-center gap-6">
            <div className="font-medium cursor-pointer">
                Login
            </div>
            <button className="px-3 py-3 font-semibold bg-white rounded-full text-black text-sm cursor-pointer">
                GET STARTED
            </button>
        </div>
    </div>
}