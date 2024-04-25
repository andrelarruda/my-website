import { Header } from "../components/header";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";

export function RootLayout() {
    return (
        <>
            <Header />
            <div className="box container flex-1 overflow-auto" style={{ flex: '1' }}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}