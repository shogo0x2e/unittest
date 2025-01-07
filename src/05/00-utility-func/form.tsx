import { useState } from "react";
import ContactNumber from "./contact-number";
import DeliveryAddress from "./delivery-address";
import PastDeliveryAddress from "./past-delivery-address";
import RegisterDeliveryAddress from "./register-delivery-address";

export type AddressOption = React.ComponentProps<"option"> & {
  id: string;
};

export type Props = {
  deliveryAddresses?: AddressOption[];
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Form = (props: Props) => {
  const [registerNew, setRegisterNew] = useState<boolean | undefined>(
    undefined
  );

  return (
    <form onSubmit={props.onSubmit}>
      <h2>お届け先情報の入力</h2>
      <ContactNumber />
      {props.deliveryAddresses?.length ? (
        <>
          <RegisterDeliveryAddress onChange={setRegisterNew} />
          {registerNew ? (
            <DeliveryAddress />
          ) : (
            <PastDeliveryAddress
              disabled={registerNew === undefined}
              options={props.deliveryAddresses}
            />
          )}
        </>
      ) : (
        <DeliveryAddress />
      )}
      <hr />
      <div>
        <button>注文内容の確認へ進む</button>
      </div>
    </form>
  );
};

export default Form;
