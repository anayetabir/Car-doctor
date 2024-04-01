import { useLoaderData } from "react-router-dom";


const CheckOut = () => {

    const service = useLoaderData();
    const { title, _id, price } = service;

    const handleCheckOutService = event =>{

        event.preventDefault();

        // const form = event.target;


        
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
                        <input type="date" name="date" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Ammount</span>
                        </label>
                        <input type="text" defaultValue={'$'+ price} className="input input-bordered" />

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