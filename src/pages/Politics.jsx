import React from 'react';
import styled from 'styled-components';
import ContentPolitics from '../components/ContentPolitics';
import Header from '../components/Store/Header/Header';
import ReactPlayer from 'react-player';
import Faq from '../components/FaQ/Faq';

const Container = styled.div`
    background-color: #1D1D1B;
    padding-top: 95px;


`;

const PoliticContainer = styled.div`
    display:flex;
    flex-direction: column;
    padding-bottom: 100px;
    margin-bottom: 22px;
`;

const Title = styled.h1`
    color: #fff;
    font-size: 38px;
    padding: 20px;
    margin-top: 20px;
`;

const Content = styled.p`
    display: flex;
    flex-direction: column;
    padding: 50px;
    margin-left: 30px;
    margin-top: -20px;
`;

const RememberContainer = styled.div`
    display: flex;
    color: #fff;
    justify-content: center;
    flex: 1;
    flex-direction: column;
`;

const Remember = styled.ul`
    align-items: center;
    display: flex;
    height: 50px;
    justify-content: center;
    /* width: 1400px; */
    font-size: 35px;
`;

const WashingProcess = styled.div`
    display: flex;
    flex:1;
    justify-content: center;
    padding: 30px;
    height: 600px;
    align-items: center;
    margin-bottom: 50px;
`;

const politics = 
["- No hacemos devoluciones ni cambios.",
"- Hacemos envios cada fin de mes, antes de comprar porfavor tener en consideración nuestro tiempo de espera",
"- Hacemos envios via starken (precio segun region/ciudad) y envios pyme en Santiago (3,000 según comuna).",
"- Nuestro principal método de pago es a través de transferencia bancaria pero tambien aceptamos pagos con tarjetas de credito, débito y webpay.",
"- Los pedidos personalizados demoran I mes aproximadamente, porfavor tener esto en consideración al momento de comprar"];

const payments = ["Para realizar tu compra por medio de transferencia bancaria es necesario enviar tu comprobante con el número de tu pedido y tus datos a: deviloffashion@gmail.com",
"Luego se te enviara un correo confirmando tu compra e informandotesobre las fechas de envio."];

const LastQuestion = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #fff;
    height: 50px;
    padding-bottom: 30px;

    a{
        text-decoration: none;
        color: #fff;
        border-bottom: 1px solid #fff;
        margin-left: 2px;

    }
`;

const Politics = () => {
  return (
    <Container>
        <Header title="ENVIOS Y POLÍTICAS"/>
        <PoliticContainer>
            <Title>
            ANTES DE COMPRAR DEBES TENER EN CONSIDERACIÓN LO SIGUIENTE:
            </Title>
            <Content>
                {politics.map((item, i) => (
			        <ContentPolitics key ={i} item={item}></ContentPolitics>
                 ))}
            </Content>
            <Title>
                PAGOS POR MEDIO DE TRANSFERENCIA:
            </Title>
            <Content>
                {payments.map((item,i) => (
			        <ContentPolitics key={i} item={item}></ContentPolitics>
                 ))}
            </Content>
            <RememberContainer>
                <Remember>
                "RECUERDA QUE TENDRÁS UN MÁXIMO DE 40 MINUTOS PARA REALIZAR
                </Remember>
                <Remember>
                ESTOS PASOS, SI SE CUMPLE ESE TIEMPO TU COMPRA QUEDARÁ
                </Remember>
                <Remember>
                AUTOMÁTICAMENTE CANCELADA*
                </Remember>
            </RememberContainer>
        </PoliticContainer>
        <Title style={{justifyContent:"center", alignItems: "center", display: "flex"}}>PROCESO DE LAVADO</Title>
        <WashingProcess>
           <ReactPlayer url="https://www.youtube.com/watch?v=FxFdORYH-so" controls loop width="1300px" height="600px"/>
        </WashingProcess>
        <Faq/>
        <LastQuestion>¿Tienes otra pregunta? Escribenos en nuestro <a href='https://www.instagram.com/deviloffashion.store/'> Instagram</a></LastQuestion>
    </Container>
  )
}

export default Politics