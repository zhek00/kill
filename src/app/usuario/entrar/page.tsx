import { LoginForm } from "@/components/auth/login-form";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F5] pt-[110px] md:pt-[70px] flex flex-col">
            <Header />
            <main className="flex-grow flex items-center justify-center p-4">
                <LoginForm />
            </main>
            <Footer />
        </div>
    );
}
