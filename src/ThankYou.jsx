import illustratiion from "./assets/illustration-thank-you.svg";

const ThankYou = ({rating}) => {
  return (
    <section className="min-h-screen grid place-content-center bg-neutral-very-dark-blue">
 
    <article className="flex flex-col gap-5  bg-neutral-dark-blue p-5 sm:p-8 m-4 sm:m-6 rounded-2xl sm:rounded-3xl  max-w-[425px] text-center">
        
    <div className="flex items-center justify-center mt-2"> <img src={illustratiion} alt="illustration thank you" /></div>
     <h3 className="bg-gray-700 text-primary-orange text-xs sm:text-sm px-3 py-2 font-semibold w-fit mx-auto rounded-full mt-2">You selected {rating} out of 5</h3>
     <h1 className="text-neutral-white text-2xl sm:text-3xl font-medium mt-2">Thank you!</h1>
     <p className="text-sm leading-6 text-neutral-light-gray mb-2">
       We appreciate you taking the time to give a rating. If you ever need
       more support, don’t hesitate to get in touch!
     </p>

 </article>
    </section>
  )
}

export default ThankYou