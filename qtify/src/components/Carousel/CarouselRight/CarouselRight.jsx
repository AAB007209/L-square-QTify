import React, { useEffect, useState } from 'react';
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import styles from "./CarouselRight.module.css";

const CarouselRight = () => {
    const swiper = useSwiper(); // Get the swiper instance
    const [isEnd, setIsEnd] = useState(false); // Default to false

    useEffect(() => {
        if (!swiper) return; // Ensure swiper is defined

        const handleSlideChange = () => {
            setIsEnd(swiper.isEnd); // Update state on slide change
        };

        swiper.on("slideChange", handleSlideChange); // Attach event listener

        return () => {
            swiper.off("slideChange", handleSlideChange); // Clean up event listener on unmount
        };
    }, [swiper]);

    return (
        <div className={styles.rightNavigation}>
            {/* Only show right arrow if not at the end */}
            {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
        </div>
    );
}

export default CarouselRight;
