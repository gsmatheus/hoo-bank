import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Hero() {
  const discountControl = useAnimation();
  const headingControlOne = useAnimation();
  const paragraphControl = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const animations = async () => {
    await headingControlOne.start({ opacity: 1, scale: 1 });
    await paragraphControl.start({ opacity: 1, scale: 1 });
    await discountControl.start({ opacity: 1, scale: 1 });
  };

  useEffect(() => {
    if (inView) {
      animations();
    }
  }, [inView]);

  return (
    <section
      id="home"
      className={`
      flex md:flex-row flex-col ${styles.paddingY}
    `}
      ref={ref}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={discountControl}
          transition={{
            duration: 0.5,
            delay: 0,
          }}
          className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For {` `}
            <span className="text-white">1 Month</span> Account
          </p>
        </motion.div>

        <div className="flex flex-row justify-between items-center w-full">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={headingControlOne}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]"
          >
            The Next <br className="sm:block hidden" /> {` `}
            <span className="text-gradient">Generation</span> {` `}
          </motion.h1>
          <motion.div
            animate={{
              rotate: [0, 10, -10, 10, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="ss:flex hidden md:mr-4 mr-0"
          >
            <GetStarted />
          </motion.div>
        </div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={headingControlOne}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full"
        >
          Payment Method.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={paragraphControl}
          transition={{
            duration: 0.6,
          }}
          className={`${styles.paragraph} max-w-[470px] mt-5`}
        >
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </motion.p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexStart}`}>
        <GetStarted />
      </div>
    </section>
  );
}

export default Hero;
