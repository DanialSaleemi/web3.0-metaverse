export const ltor = {
    hidden: {
        opacity: 0,
        x: -100,
        transition: {
            type: 'spring',
            stifness: 300,
            damping: 140,
        }, 
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stifness: 80,
            delay: 0.25,
        },
    },
}
export const rtol = {
    hidden: {
        opacity: 0,
        x: 100,
        transition: {
            type: 'spring',
            stifness: 300,
            damping: 140,
        }, 
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stifness: 80,
            delay: 0.25,
        },
    },
}
export const scaleup = {
    hidden: {
        opacity : 0,
        scale : 0
    },
    
    show : {
                animate : { opacity: 1, scale: 1 },
                transition : { duration: 0.8,
                                delay: 1, 
                                ease: [0, 0.71, 0.2, 1.01]
                            }                    
                }
            }                