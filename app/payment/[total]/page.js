import FormPayment from '../../component/formPayment'



export default function Payment({ params }) {
  const total=params.total
  return (
    <div>
      <FormPayment total={total} />
    </div>
  );
}

 

