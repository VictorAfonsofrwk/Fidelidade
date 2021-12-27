// @flow
import * as React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { useWallet } from "../../contexts/useWallet";
import { AntButton, AntModal } from "../../styles/antDesign";
import * as AlertService from "../Alert";
import { Balance } from "../Cards/BalanceCard";
import { TradeMoney } from "../Modal/components/TradeMoney";

export const MoneyWallet = () => {
  const { moneyWallet } = useWallet();
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [canProceed, setCanProceed] = React.useState(false);

  function onModalContentEmitter(params: any) {
    setCanProceed(params);
  }

  return (
    <>
      <Balance
        className="w-100 animate__fadeInUp"
        title="Carteira - Saldo"
        btnText="Trocar para moedas"
        amount={moneyWallet?.amountFormatted || "R$ 0,00"}
        action={() => setModalVisible(true)}
      />
      <AntModal
        title="Trocar para moedas"
        centered
        visible={isModalVisible}
        onCancel={() => {
          setModalVisible(false);
        }}
        closeIcon={<RiCloseCircleFill />}
        footer={[
          <AntButton
            key="back"
            type="default"
            styled="primary"
            onClick={() => {
              setModalVisible(false);
            }}
          >
            Fechar
          </AntButton>,
          <AntButton
            key="submit"
            type="primary"
            styled="success"
            disabled={!canProceed}
            onClick={() => {
              setModalVisible(false);
              AlertService.presentAlert({
                type: "success",
                message: "Resgate realizado com sucesso!",
              });
            }}
          >
            Finalizar
          </AntButton>,
        ]}
      >
        <TradeMoney emitter={onModalContentEmitter} />
      </AntModal>
    </>
  );
};
