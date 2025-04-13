import { MdDone } from "react-icons/md"
import { Card } from "../card"

export const PricingCard = ({ title, amount, features, bestfor }: { title: string, amount: string, features: string[], bestfor: string }) => {
    return <Card classname="!bg-background text-white flex flex-col rounded-xl border min-w-96 font-sans">
        <div className="text-center font-medium">
            {title.toUpperCase()}
        </div>
        <div className="text-center my-5">
            <div className="flex gap-1 items-center justify-center">
                <div className="text-5xl font-semibold">${amount}</div>
                <div>/month</div>
            </div>
            <div className="text-xs">billed monthly</div>
        </div>
        <div>
            {features.map((f, i) => <FeatureLayout feature={f} key={i}/>)}
        </div>
        <hr  className="my-3"/>
        <button className="w-full rounded-lg bg-green-500 hover:bg-green-700 cursor-pointer font-medium py-2">Subscribe</button>
        <div className="text-xs text-center mt-7 mb-2">{bestfor}</div>
    </Card> 
}

const FeatureLayout = ({feature}: {feature: string}) => {
    return <div className="flex gap-3 items-center w-full m-1">
        <MdDone color="green"/>
        <div>{feature}</div>
    </div>
}