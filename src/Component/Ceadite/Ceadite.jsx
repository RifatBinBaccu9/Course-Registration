import PropTypes from 'prop-types';
import Ceadites from './Ceadites/Ceadites';

const Ceadite = ({product, totlePrice, totleCredit}) => {
       
    // const {price}=product;
    console.log(product);
    

    return (
        <div className="w-[25%]">
            <div className='p-4 bg-[#fff] rounded-md'>
                <h1 className='text-lg font-medium text-green-500 pb-2'>Credit Hour Remaining 7 hr</h1>
                <hr />
                <h4 className='text-xl font-bold py-2'>Course Name</h4>
                <div>
                    {
                        product.map((product, idx)=><Ceadites key={idx} product={product}></Ceadites>)
                    }
                </div>
                <hr />
                <h4 className='text-base font-medium py-2'>Total Credit Hour :{totleCredit}hr</h4>
                <hr />
                <h4 className='text-md font-medium py-2'>Total Price : {totlePrice} USD</h4>
            </div>
        </div>
    );
};
Ceadite.propTypes={
    product: PropTypes.array,
    totlePrice: PropTypes.array,
    totleCredit: PropTypes.array
}
export default Ceadite;