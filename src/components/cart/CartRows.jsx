import CartItem from "./CartItem";

function CartRows() {

  
 
  return (
    <div className="cart-rows flex flex-col gap-4 max-w-page mx-auto mt-20 mb-20">
              <CartItem title="Shoulder bag" colorName="Beige" colorClass="bg-amber-200" price={150} initialCount={1} />
      <CartItem title="Mini leather bag" colorName="Black" colorClass="bg-gray-900" price={220} initialCount={2} />
      <CartItem title="Classic chain bag" colorName="Pink" colorClass="bg-pink-300" price={180} initialCount={1} />

        
    </div>
  );
}

export default CartRows;
