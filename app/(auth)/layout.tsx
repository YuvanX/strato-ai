import { ModeToogle } from "@/components/ui/mode-toggle";
import { NavigateButton } from "@/components/ui/navigate-button";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <div>
        <div className="flex justify-between items-center px-20 pt-10">
            <NavigateButton/>
            <ModeToogle/>
        </div>
        {children}
    </div>
}