export const getHeroData = (t) => ({
    greeting: t("greeting"),
    im: t("im"),
    name: t("name"),
    roles: t("roles", { returnObjects: true }),
    description: t("description"),

    stats: t("stats", { returnObjects: true }),

    socialLinks: [
        { name: t("socialLinks.github"), url: "https://github.com/nguyenduydan", icon: "GitHub" },
        { name: t("socialLinks.linkedin"), url: "https://www.linkedin.com/in/nguyenthietduydan/", icon: "Linkedin" },
        { name: t("socialLinks.email"), url: "mailto:duydan.cv@gmail.com", icon: "Email" },
    ],
    ctaButtons: [
        { text: t("ctaButtons.projects"), href: "#projects", variant: "primary" },
        { text: t("ctaButtons.contact"), href: "#contact", variant: "secondary" },
    ],
});
