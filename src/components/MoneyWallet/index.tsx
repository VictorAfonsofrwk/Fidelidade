import { useCallback, useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { toast } from "react-toastify";
import { useWallet } from "../../hooks/useWallet";
import { AntButton, AntModal } from "../../styles/antDesign";
import { presentAlert } from "../Alert";
import { Balance } from "../Cards/BalanceCard";
import { TradeMoney } from "../Modal/components/TradeMoney";

export const MoneyWallet = () => {
  const {
    moneyWallet,
    canProceedConvertMoneyToCoin,
    handleTransferMoneyWalletToCoinsWallet,
  } = useWallet();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleTradeMoneyModal = useCallback(() => {
    setModalVisible((prevState) => !prevState);
  }, []);

  const handleConvertMoneyToCoin = useCallback(async () => {
    try {
      await handleTransferMoneyWalletToCoinsWallet();
      setModalVisible(false);
      presentAlert({
        type: "success",
        message: "Troca realizada com sucesso!",
      });
    } catch (error: any) {
      toast.warning(error.message);
    }
  }, [handleTransferMoneyWalletToCoinsWallet]);

  return (
    <>
      <Balance
        className="w-100 animate__fadeInUp"
        title="Carteira - Saldo"
        btnText="Trocar para moedas"
        amount={moneyWallet?.amount ?? 0}
        action={toggleTradeMoneyModal}
      />

      <AntModal
        title="Trocar para moedas"
        centered
        visible={isModalVisible}
        onCancel={toggleTradeMoneyModal}
        closeIcon={<RiCloseCircleFill />}
        footer={[
          <AntButton
            key="back"
            type="default"
            styled="primary"
            onClick={toggleTradeMoneyModal}
          >
            Fechar
          </AntButton>,
          <AntButton
            key="submit"
            type="primary"
            styled="success"
            disabled={!canProceedConvertMoneyToCoin}
            onClick={handleConvertMoneyToCoin}
          >
            Finalizar
          </AntButton>,
        ]}
      >
        <TradeMoney />
      </AntModal>
    </>
  );
};
