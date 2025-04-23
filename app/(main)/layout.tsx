import { AppBar } from "@/components/ui/appbar";

export default function({ children }: { children: React.ReactNode}) {
    return <div>
        <AppBar/>
        {children}
    </div>
}