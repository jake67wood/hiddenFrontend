import Banner from '../Banner/Banner.jsx';
import Body from '../Body/Body.jsx';
import Footer from '../Footer/Footer.jsx';
import Dashboard from '../Dashboard/Dashboard.jsx'

export default function Home({ user }) {

    const toStartCase = (string)=>{
        return string
        .split(" ")
        .map((word)=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ")
    }
    return (
        <div>
            {user && <Dashboard user={user} />}
            {!user && (
                <>
                    <Banner />
                    <Body />
                </>
            )}
            <Footer />
        </div>
    );
}