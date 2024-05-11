import { Link } from "react-router-dom";


export default function HomePage() {
    return (
        <div className="HomePage">
            <h1>Home Page</h1>
            <Link to={"/about/services"}>
                About
            </Link>
        </div>
    )
}