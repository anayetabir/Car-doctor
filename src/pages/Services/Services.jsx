import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./serviceCard";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])





    return (
        <div className='mt-4'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold text-orange-600'>Our Services</h3>
                <h2 className='text-5xl'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do  not look even slightly believable. </p>
            </div>
            <div>
                {/* {
                    services.map(service => <serviceCard>
                        key={service._id}
                        servce={service}
                    </serviceCard>)
                } */}

            </div>

        </div>
    );
};

export default Services;