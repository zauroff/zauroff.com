"use client"

import { useState, useEffect } from 'react';

export default function Loading() {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentage((prev) => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    return 100;
                }
            });
        }, 10); // Adjust the speed here, 20ms * 100 = 2000ms (2 seconds) for full loading

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
    <div className="flex flex-col items-center justify-center h-[100vh] w-full bg-black pt-0 ">
        <h3 className="text-eggshell text-4xl">{percentage}%</h3>
    </div>
    );
}
