export default function scrollReveal(){
const srl = ScrollReveal({
    origin: 'left',
    distance: '50px',
    duration: 2000,
    reset: false
});
srl.reveal('.titulo-delayLeft',{delay: 200})
srl.reveal('.cards-intervalLeft',{interval: 400})
}