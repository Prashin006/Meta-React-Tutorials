import PromoHeading from './PromoHeading';

const data = {
  heading: '80% off all items!',
  callToAction: 'Everything must go!',
};

function Promo() {
  return (
    <div>
      <PromoHeading heading={data.heading} callToAction={data.callToAction} />
    </div>
  );
}

export default Promo;
