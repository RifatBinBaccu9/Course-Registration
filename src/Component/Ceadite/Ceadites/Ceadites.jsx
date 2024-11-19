import PropTypes from 'prop-types';

const Ceadites = ({product}) => {
    const {name}=product;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};
Ceadites.propTypes={
    product: PropTypes.object
}
export default Ceadites;