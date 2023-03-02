import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  removeItemsFromCart,
  saveShippingInfo,
} from "../../actions/cartActions";
import CartItem from "../CartItem";
import { comunas } from "../../api/comunas";
import ComunasSelected from "../Regions/ComunasSelected";
import RegionesSelected from "../Regions/RegionesSelected";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  margin-top: 1rem;
  width: 100%;
  padding: 2rem;
`;

const Data = styled.div`
  display: flex;
  width: 100%;
`;

const DataPurchase = styled.div`
  width: 60%;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 60px;
`;

const Form = styled.form``;

const ResumePurchase = styled.div`
  width: 40%;
  padding: 2rem;

  h2 {
    font-size: 40px;
  }
`;

const ResumeItems = styled.div`
  overflow-y: auto;
`;

const PaymentMethod = styled.div`
  width: 60%;
  padding: 2rem;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Items = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Input = styled.input`
  background: #000;
  padding: 1rem 2rem;
  border: none;
  border-radius: 1rem;
  margin-top: 1rem;
  color: #fff;
  font-size: 30px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: flex-start;
  margin-top: 2rem;
`;

const InputSecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  font-size: 3rem;
  margin-top: 2rem;
`;

const InputLabel = styled.label`
  font-size: 30px;
`;

const PaymentContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Bank = styled.div`
  padding: 3rem;
  input {
    width: 2rem;
    height: 2rem;
    margin-left: -2rem;
    margin-right: 2rem;
  }
  span {
    font-size: 2rem;
    color: white;
  }
  p {
    font-size: 2rem;
    color: gray;
    margin-left: 2rem;
  }
`;

const SendContent = styled.div`
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  input {
    width: 10%;
    height: 1em;
    font-size: 30px;
  }
  p {
    font-size: 2rem;
    color: gray;
    width: 90%;
    span {
      font-size: 2rem;
      color: white;
    }
  }
`;

const WebPay = styled.div`
  padding: 3rem;
  display: flex;
  input {
    width: 2rem;
    height: 2rem;
    margin-left: -2rem;
    margin-right: 2rem;
  }
  span {
    font-size: 2rem;
    color: white;
  }
  p {
    margin-top: 2rem;
    font-size: 2rem;
    color: gray;
    margin-left: 1rem;
  }
`;

const CheckBox = styled.div`
  padding: 3rem;
  display: flex;
  font-size: 2rem;
  color: white;
  align-items: center;
  input {
    width: 2rem;
    height: 2rem;
    margin-left: -2rem;
    margin-right: 2rem;
  }
`;

const ButtonContainer = styled.div`
  padding: 2rem;
`;

const ButtonPayment = styled.button`
  border: none;
  background-color: ${(props) => (props.disabled ? "#323131" : "#000")};
  font-size: 2rem;
  padding: 2rem 3.4rem;
  color: ${(props) => (props.disabled ? "gray" : "white")};
  border-radius: 10px;
  cursor: pointer;
  :hover {
    color: ${(props) => (props.disabled ? "" : "white")};
    background-color: ${(props) => (props.disabled ? "" : "##3c39397d")};
  }
`;

const Send = styled.div`
  h2 {
    font-size: 40px;
    span {
      color: gray;
      font-size: 30px;
    }
  }
`;

const SubTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;

  span {
    font-size: 40px;

  }
`;

const PaymentItem = ({ cartItems }) => {
  const alert = useAlert();
  const { shippingInfo } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const [country, setCountry] = useState({
    region: null,
    selectedRegion: null,
    selectedComuna: null,
  });

  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rut, setRut] = useState(shippingInfo.rut);
  const [address, setAddress] = useState(shippingInfo.address);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [email, setEmail] = useState(shippingInfo.email);
  const [extra, setExtraNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("BANK");
  const [send, setSend] = useState("ECO");
  const [politics, setPolitics] = useState(false);

  const updateHandler = (t, v) => {
    if (t === "region") {
      setCountry({
        region: v !== "" ? comunas[v] : null,
        selectedRegion: v !== "" ? v : null,
        selectedComuna: null,
      });
    } else {
      setCountry({
        ...country,
        selectedComuna: v,
      });
    }
  };

  const handlePayment = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSend = (e) => {
    setSend(e.target.value);
  };

  const handleCheck = (e) => {
    setPolitics(!politics);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const total = subtotal + 5000;

  var Fn = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut: function (rutCompleto) {
      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) {
        return false;
      }
      var tmp = rutCompleto.split("-");
      var digv = tmp[1];
      var rut = tmp[0];

      if (digv === "K") {
        digv = "k";
        return Fn.dv(rut) === digv;
      }
      return true;
    },
    dv: function (T) {
      var M = 0,
        S = 1;
      for (; T; T = Math.floor(T / 10))
        S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
      return S ? S - 1 : "k";
    },
  };

  const shippingSubmit = (e) => {
    e.preventDefault();
    if (phoneNo.length < 12 || phoneNo.length > 12) {
      alert.error("Escriba un número de télefono válido");
      return;
    }

    if (Fn.validaRut(`${rut}`) === false) {
      alert.error("Escribe un rut válido");
      return
    } 


    if(EMAIL_REGEX.test(email) === false){
      alert.error("Escribe un email válido");
      return
    }

    dispatch(
      saveShippingInfo({
        name,
        lastName,
        rut,
        address,
        phoneNo,
        email,
        region: country.region.region,
        comuna: country.selectedComuna,
        extra,
        paymentMethod,
        send,
      })
    );
    navigate("/orden/confirmar"); 
  };

  const handleValidation = () => {
    if (
      !name ||
      !lastName ||
      !rut ||
      !address ||
      !phoneNo ||
      !email ||
      !country.selectedRegion ||
      !country.selectedComuna ||
      !politics
    ) {
      return true;
    } else {
      return false;
    }
  };

  const RenderComunasSelector = () => {
    return (
      <ComunasSelected
        updateHandler={updateHandler}
        comunas={country.region !== null ? country.region.comunas : []}
        type="comuna"
        setCountry={setCountry}
      />
    );
  };

  return (
    <Container>
      <Data>
        <DataPurchase>
          <Title>DATOS DE COMPRA</Title>
          <Form>
            <InputContainer>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "40%",
                  marginRight: "50px",
                  fontSize: "2rem",
                }}
              >
                <InputLabel htmlFor="">Nombres</InputLabel>
                <Input
                  type="text"
                  required
                  value={name}
                  placeholder="John"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "40%",
                  fontSize: "2rem",
                }}
              >
                <InputLabel htmlFor="">Apellidos</InputLabel>
                <Input
                  type="text"
                  required
                  value={lastName}
                  placeholder="Doe"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </InputContainer>
            <InputSecondContainer>
              <InputLabel htmlFor="">Rut</InputLabel>
              <Input
                type="text"
                required
                value={rut || ""}
                placeholder="XXXXXXXX-X"
                onChange={(e) => setRut(e.target.value)}
              />
            </InputSecondContainer>

            <InputSecondContainer>
              <RegionesSelected
                updateHandler={updateHandler}
                regiones={comunas}
                type="region"
                setCountry={setCountry}
              />
              {RenderComunasSelector()}
            </InputSecondContainer>

            <InputSecondContainer>
              <InputLabel htmlFor="">Dirección</InputLabel>
              <Input
                type="text"
                required
                value={address || ""}
                placeholder="XXXXXXXX XXXX"
                onChange={(e) => setAddress(e.target.value)}
              />
            </InputSecondContainer>
            <InputSecondContainer>
              <InputLabel htmlFor="">Teléfono</InputLabel>
              <Input
                type="text"
                required
                value={phoneNo || "+569"}
                onChange={(e) => setPhoneNo(e.target.value)}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                    alert.error("Ingresa solo números");
                  }
                }}
              />
            </InputSecondContainer>
            <InputSecondContainer>
              <InputLabel htmlFor="">Correo electrónico</InputLabel>
              <Input
                type="text"
                required
                value={email || ""}
                placeholder="XXXX@XXXX.XXXX"
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputSecondContainer>
            <InputSecondContainer>
              <InputLabel htmlFor="">
                Notas extras{" "}
                <span style={{ color: "#e1251b" }}>(opcional)</span>
              </InputLabel>
              <textarea
                type="text"
                style={{
                  background: "#000",
                  border: "none",
                  borderRadius: "1rem",
                  padding: "1rem 1rem",
                  color: "white",
                  marginTop: "1rem",
                  fontSize: "2rem",
                }}
                required
                value={extra}
                onChange={(e) => setExtraNotes(e.target.value)}
              />
            </InputSecondContainer>
          </Form>
        </DataPurchase>
        <ResumePurchase>
          {" "}
          <h2>RESUMEN DE TU COMPRA</h2>{" "}
          <ResumeItems>
            {cartItems &&
              cartItems.map((item) => (
                <Content key={item.product}>
                  <Items>
                    <CartItem item={item} deleteCartItems={deleteCartItems} />
                  </Items>
                </Content>
              ))}
          </ResumeItems>
          <Send>
            <h2>
              Envío <span>STARKEN X PAGAR</span>
            </h2>
            <PaymentContent>
              <SendContent>
                <input
                  type="radio"
                  value="ECO"
                  onChange={handleSend}
                  checked={send === "ECO"}
                  id="ECO"
                  name="choo"
                />
                <p>
                  <span>Economico:</span>
                  El paquete se declara con un valor de $5,000 por lo que, en
                  caso de extravio, Starken devolvera Solo $5,000 por la
                  pérdida. Esta opción es mas económica sin embarao. si tu
                  cogolueieoeloo excege eleso se enviara como paquete normal cor
                  el valor declarado real de tu pedido.
                </p>
              </SendContent>
              <SendContent>
                <input
                  type="radio"
                  value="FREE"
                  onChange={handleSend}
                  checked={send === "FREE"}
                  id="FREE"
                  name="choo"
                />
                <p>
                  <span>Normal: </span>
                  El paquete se declara con e valor exacto de tu pedido para que
                  en caso de perdida starken devuelva el 100% del pago.
                </p>
              </SendContent>
              <SubTotal>
                <h2>Total {send === "FREE" ? "":"con envío"}:</h2>
                <span>${send === "FREE" ? subtotal : total}</span>
              </SubTotal>
            </PaymentContent>
          </Send>
        </ResumePurchase>
      </Data>
      <PaymentMethod>
        <Title>MÉTODO DE PAGO</Title>{" "}
        <PaymentContent>
          <Bank>
            <input
              type="radio"
              value="BANK"
              id="BANK"
              name="choose"
              checked={paymentMethod === "BANK"}
              onChange={handlePayment}
            />
            <span>Transferencia bancaria</span>
            <p>
              Realiza tu pago directamente en nuestra cuenta bancaria. Por
              favor, usa el número del pedido como referencia de pago. Envia tu
              comprobante de pago con tu número de pedido a nuestro mail:
              deviloffashion@gmail.com para confirmar tu compra. Tu pedido no se
              procesará hasta que se haya recibido el importe en nuestra cuenta
              y se haya enviado el comprobante:
            </p>
            <p style={{ marginTop: "2rem" }}>Banco estado</p>
            <p>Cuenta rut 202871267</p>
            <p>Krystal Mansfield</p>
            <p> 20.287.126-7</p>
          </Bank>
          <WebPay>
            <input
              type="radio"
              value="WEBPAY"
              onChange={handlePayment}
              checked={paymentMethod === "WEBPAY"}
              id="WEBPAY"
              name="choose"
            />
            <span>Webpay </span>{" "}
            <p>(Visa, Mastercard, Magna, American, Diners y Redcompra.)</p>
          </WebPay>
          <CheckBox>
            <input
              type="checkbox"
              id="politics"
              name="politics"
              value="politics"
              onChange={handleCheck}
              checked={politics}
            />{" "}
            <span>He leído y acepto las políticas de la tienda</span>
          </CheckBox>
        </PaymentContent>
        <ButtonContainer>
          <ButtonPayment onClick={shippingSubmit} disabled={handleValidation()}>
            REALIZAR EL PEDIDO
          </ButtonPayment>
        </ButtonContainer>
      </PaymentMethod>
    </Container>
  );
};

export default PaymentItem;
