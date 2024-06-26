import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const CheckOut = () => {

    const service = useLoaderData();
    const { title, _id, price, img } = service;
    const { user } = useContext(AuthContext);

    const handleCheckOutService = event => {

        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;


        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price

        }

        console.log(booking);

        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
               'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedid){
                alert('Service book Successfully');
            }
        })






    }


    return (

        <div>
            <h2 className="text-center text-3xl">Book Service : <b>{title}</b> </h2>

            <div className="grid grid-cols-1 gap-6 ">
                <form onSubmit={handleCheckOutService} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" defaultValue={user?.disolayName} className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Ammount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} className="input input-bordered" />

                    </div>





                    <div className="form-control mt-6">
                        <input className="btn btn-block" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default CheckOut;