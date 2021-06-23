export default function reveal() {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 2000,
        reset: false
    });
    sr.reveal('.titulo-delay',{delay: 200})
    sr.reveal('.cards-interval',{interval: 400})

    const srl = ScrollReveal({
        origin: 'left',
        distance: '50px',
        duration: 2000,
        reset: false
    });
    srl.reveal('.titulo-delayLeft',{delay: 200})
    srl.reveal('.cards-intervalLeft',{interval: 400})
}
