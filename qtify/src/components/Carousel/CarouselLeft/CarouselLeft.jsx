import React, { useEffect, useState } from 'react';
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import styles from "./CarouselLeft.module.css";

const CarouselLeft = () => {
    const swiper = useSwiper();  // Get the swiper instance
    const [isBeginning, setIsBeginning] = useState(true); // Default to true

    useEffect(() => {
        if (!swiper) return; // Ensure swiper is defined

        const handleSlideChange = () => {
            setIsBeginning(swiper.isBeginning); // Update state on slide change
        };

        swiper.on("slideChange", handleSlideChange); // Attach event listener

        return () => {
            swiper.off("slideChange", handleSlideChange); // Clean up event listener on unmount
        };
    }, [swiper]);

    return (
        <div className={styles.leftNavigation}>
            {/* Only show left arrow if not at the beginning */}
            {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
        </div>
    );
}

export default CarouselLeft;
