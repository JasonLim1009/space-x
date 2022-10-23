import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Skills = () => {

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [fullBody, setFullBody] = useState(0);
  const [piercing, setPiercing] = useState(0);
  const [fullColor, setFullColor] = useState(0);
  const [temporary, setTemporary] = useState(0);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (fullBody < 181) {
          setFullBody(fullBody + 1);
        }
        if (piercing < 141) {
          setPiercing(piercing + 1);
        }
        if (fullColor < 119) {
          setFullColor(fullColor + 1);
        }
        if (temporary < 1000) {
          setTemporary(temporary + 1);
        }
      }, 50);
    } else {
      setFullBody(0);
      setPiercing(0);
      setFullColor(0);
      setTemporary(0);
    }
  }, [inView, fullBody, piercing, fullColor, temporary]);

  const styles = {
    path: {
      stroke: '#111111',
    },
    trail: {
      stroke: '#EEEEEE',
    },
    text: {
      fill: '#111111',
      fontSize: '24px',
    },
  };

  return (
    <motion.section
      variants={fadeIn('up')}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.1 }}
      ref={ref}
      className='section font-primary'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row justify-between items-center gap-y-12'>
          <div className='w-[150px] lg:w-[275px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}
              styles={styles}
              value={fullBody}
              text={`${fullBody}`}
            />
            <div className='uppercase font-light tracking-[1.2px] text-center'>
            TOTAL LAUNCHES
            </div>
          </div>
          <div className='w-[150px] lg:w-[275px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
              styles={styles}
              strokeWidth={1}
              value={piercing}
              text={`${piercing}`}
            />
            <div className='uppercase font-light tracking-[1.2px] text-center'>
            TOTAL LANDINGS
            </div>
          </div>
          <div className='w-[150px] lg:w-[275px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
              styles={styles}
              strokeWidth={1}
              value={fullColor}
              text={`${fullColor}`}
            />
            <div className='uppercase font-light tracking-[1.2px] text-center'>
            TOTAL REFLIGHTS
            </div>
          </div>
          <div className='w-[150px] lg:w-[275px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
              styles={styles}
              strokeWidth={1}
              value={temporary}
              text={`${temporary}%`}
            />
            <div className='uppercase font-light tracking-[1.2px] text-center'>
              DOGE COINS
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
