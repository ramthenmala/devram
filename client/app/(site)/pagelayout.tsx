import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import CTASection from '../../components/CTASection'

type PageLayoutProps = {
    children: React.ReactNode,
    customMeta?: any
}

function PageLayout(props: PageLayoutProps) {
    const { children, ...customMeta } = props;
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {children}

                <CTASection /> <br />
            </main>
            <Footer />
        </div>
    )
}

export default PageLayout;