import { AppBar } from "@/components/appbar";

export default function({ children }: { children: React.ReactNode}) {
    return <div>
        <AppBar/>
        {children}
    </div>
}