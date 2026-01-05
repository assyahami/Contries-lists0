import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-vh-100 d-flex flex-column w-100">
            <Header />
            <main className="flex-grow-1 w-100 p-3">
                {children}
            </main>
        </div>
    );
};

export default Layout;
