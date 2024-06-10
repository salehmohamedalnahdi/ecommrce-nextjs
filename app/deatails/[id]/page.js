import OneProduct from "../../component/oneProduct"

export default function ProductPage({ params }) {
    const id=params.id
    return (
      <div>
        <OneProduct id={id} />
      </div>
    );
  }
  