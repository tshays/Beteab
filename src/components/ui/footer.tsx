import React from 'react';
import { Facebook, Instagram, Mail, Send, MessageCircle } from 'lucide-react';

const links = [
    {
        title: 'Features',
        href: '#',
    },
    {
        title: 'Solution',
        href: '#',
    },
    {
        title: 'Customers',
        href: '#',
    },
    {
        title: 'About',
        href: '#about',
    },
];

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto block size-fit">
                    <h3 className="text-2xl font-bold text-primary text-center">Beteab Alemu</h3>
                </div>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </a>
                    ))}
                </div>
                
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    <a
                        href="https://web.facebook.com/beteab.alemu"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="text-muted-foreground hover:text-primary block">
                        <Facebook className="size-6" />
                    </a>
                    <a
                        href="https://www.instagram.com/beteab27?igsh=MWsycnF6b3NhZnRjaw%3D%3D&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-muted-foreground hover:text-primary block">
                        <Instagram className="size-6" />
                    </a>
                    <a
                        href="mailto:alemubeteab@gmail.com"
                        aria-label="Email"
                        className="text-muted-foreground hover:text-primary block">
                        <Mail className="size-6" />
                    </a>
                    <a
                        href="https://t.me/Beteab27"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Telegram"
                        className="text-muted-foreground hover:text-primary block">
                        <Send className="size-6" />
                    </a>
                    <a
                        href="https://www.tiktok.com/@beteab27"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                        className="text-muted-foreground hover:text-primary block">
                        <MessageCircle className="size-6" />
                    </a>
                </div>
                
                <span className="text-muted-foreground block text-center text-sm">
                    © {new Date().getFullYear()} Beteab Alemu, All rights reserved
                </span>
            </div>
        </footer>
    );
}
