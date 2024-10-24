import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-yellow-500 py-12 px-4 md:px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4 text-center">
                    <h2 className="text-lg font-semibold">About Us</h2>
                    <p className="text-sm"> Dragons & Angels Fund is a gateway for exclusive investments opportunities. We connect people to startups with investors. Discover, invest, and grow.</p>
                </div>
                <div className="space-y-4 mx-auto">
                    <h2 className="text-lg font-semibold">Connect With Us</h2>
                    <div className="flex space-x-4">
                        {[
                            { icon: Facebook, label: "Facebook" },
                            { icon: Twitter, label: "Twitter" },
                            { icon: Instagram, label: "Instagram" },
                            { icon: Youtube, label: "YouTube" },
                        ].map(({ icon: Icon, label }) => (
                            <a
                                key={label}
                                href="#"
                                className="text-gray-600 hover:text-gray-800"
                                aria-label={label}
                            >
                                <Icon className="h-6 w-6" />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="space-y-4 mx-auto text-center">
                    <h2 className="text-lg font-semibold">Newsletter</h2>
                    <p className="text-sm">Stay updated with our latest news and offers.</p>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input type="email" placeholder="Enter your email" className="bg-white" />
                        <Button type="submit">Subscribe</Button>
                    </div>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Dragons & Angels Fund. All rights reserved.</p>
            </div>
        </footer>
    )
}