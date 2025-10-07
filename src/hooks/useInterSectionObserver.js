import { useEffect, useState } from "react";

/**
 * Hook IntersectionObserver nâng cao:
 * - Theo dõi tất cả section có id
 * - Khi section ra khỏi viewport → thêm class .paused
 * - Khi section vào lại → bỏ class .paused
 * - Giữ trạng thái hasAnimated để không lặp lại animation khởi đầu
 */
export const useInterSectionObserver = () => {
    const [hasAnimated, setHasAnimated] = useState({});

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.id;

                    // Khi section được nhìn thấy
                    if (entry.isIntersecting) {
                        entry.target.classList.remove("paused");

                        // Đánh dấu là đã animate (chạy lần đầu)
                        if (!hasAnimated[id]) {
                            setHasAnimated((prev) => ({
                                ...prev,
                                [id]: true,
                            }));
                        }
                    } else {
                        // Khi section rời khỏi viewport → pause
                        entry.target.classList.add("paused");
                    }
                });
            },
            { threshold: 0.15 } // 15% section hiển thị là đủ để tính là "đang thấy"
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [hasAnimated]);

    return hasAnimated;
};
