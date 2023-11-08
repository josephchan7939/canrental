import Brands from './Brands';
import CarsSlider from './CarsSlider';

export default function Cars() {
    return (        
    <section className="h-max flex items-center mt-6" id='cars'>
    <div className=' container mx-auto'>
        <Brands/>
        <CarsSlider />
    </div>
    </section>);
 }