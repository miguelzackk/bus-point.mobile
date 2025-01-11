import "./styles.css"
import HeaderComponent from "./header"
import Illustration from "./illustration"

export default function HeroComponent() {
    return (
        <div className="hero">
            <HeaderComponent />
            <Illustration />
        </div>

    )

}