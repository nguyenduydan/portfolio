import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import { database } from '../firebase';
import { ref, onValue, set, runTransaction, get } from 'firebase/database';
import { useTranslation } from 'react-i18next';

export default function ViewerCounter() {
    const [views, setViews] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    const [error, setError] = useState(null);
    const { t } = useTranslation("other");

    useEffect(() => {
        // Tạo fingerprint unique cho mỗi browser
        const getFingerprint = () => {
            const data = [
                navigator.userAgent,
                navigator.language,
                navigator.platform,
                screen.width + 'x' + screen.height,
                screen.colorDepth,
                new Date().getTimezoneOffset(),
                !!window.sessionStorage,
                !!window.localStorage
            ].join('|');

            // Hash function đơn giản
            let hash = 0;
            for (let i = 0; i < data.length; i++) {
                const char = data.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash = hash & hash;
            }

            return 'visitor_' + Math.abs(hash).toString(36);
        };

        const initViewCounter = async () => {
            try {
                const fingerprint = getFingerprint();
                const viewsRef = ref(database, 'views/total');
                const visitorRef = ref(database, `views/visitors/${fingerprint}`);

                // Kiểm tra visitor đã visit chưa
                const visitorSnapshot = await get(visitorRef);

                if (!visitorSnapshot.exists()) {
                    // Visitor mới - lưu thông tin
                    await set(visitorRef, {
                        firstVisit: new Date().toISOString(),
                        visited: true
                    });

                    // Tăng counter bằng transaction (đảm bảo không bị conflict)
                    await runTransaction(viewsRef, (currentValue) => {
                        return (currentValue || 0) + 1;
                    });

                    console.log('✅ New visitor counted');
                }

                setIsLoading(false);
            } catch (err) {
                console.error('❌ Error initializing counter:', err);
                setError(err.message);
                setIsLoading(false);
            }
        };

        initViewCounter();

        // Lắng nghe real-time updates từ Firebase
        const viewsRef = ref(database, 'views/total');
        const unsubscribe = onValue(
            viewsRef,
            (snapshot) => {
                const newViews = snapshot.val() || 0;

                // Trigger animation khi có view mới
                if (newViews !== views && views !== 0) {
                    setIsAnimating(true);
                    setTimeout(() => setIsAnimating(false), 800);
                }

                setViews(newViews);
            },
            (err) => {
                console.error('❌ Error listening to updates:', err);
                setError(err.message);
            }
        );

        // Cleanup subscription
        return () => {
            unsubscribe();
        };
    });

    // Format số đẹp
    const formatNumber = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace('.0', '') + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1).replace('.0', '') + 'K';
        }
        return num.toLocaleString('vi-VN');
    };

    // Không hiển thị nếu có lỗi
    if (error) {
        return null;
    }

    return (
        <div className="fixed right-3 bottom-20 z-50 select-none">
            <div className="relative group">
                {/* Main counter card */}
                <div className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 text-white px-4 py-2 rounded-4xl shadow-2xl backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 hover:shadow-xl cursor-default">

                    {/* Content */}
                    <div className="flex items-center gap-2 relative z-10">
                        {/* Icon với animation */}
                        <div className={`relative transition-transform duration-300 ${isAnimating ? 'scale-110 rotate-12' : ''
                            }`}>
                            <Eye className='h-4 w-4' />
                            {/* Pulse effect khi có view mới */}
                            {isAnimating && (
                                <>
                                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-60"></div>
                                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50">
                                        <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping"></div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Counter display */}
                        <div className="flex flex-col leading-tight">
                            <span className={`text-sm md:text-md font-extrabold tracking-tight transition-all duration-300 ${isAnimating ? 'scale-110 text-yellow-300 drop-shadow-lg' : 'text-white'
                                }`}>
                                {isLoading ? (
                                    <span className="inline-block animate-pulse">...</span>
                                ) : (
                                    <div className='flex gap-1 items-center'>
                                        <span className="inline-block text-md md:text-lg tabular-nums text-[#00FF7F] text-shadow-2xl text-shadow-emerald-200">
                                            {formatNumber(views)}
                                        </span>
                                        <p className='font-medium'>
                                            {t("viewcount")}
                                        </p>
                                    </div>
                                )}
                            </span>
                        </div>
                    </div>

                    {/* Glow effect khi có view mới */}
                    {isAnimating && (
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 rounded-2xl blur-2xl opacity-60 animate-pulse -z-10"></div>
                    )}
                </div>

                {/* Shadow blur effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
            </div>
        </div>
    );
}
