import { useState } from "react";
import type { ChangeEvent } from "react";
import { Input } from "./components/Input";
import { mascaraMoeda } from "./utils/inputMoeda";
import { useTheme } from "./utils/useTheme";
import { type keyBillet } from "./theme";
import { PiEyeBold } from "react-icons/pi";
import { ModalInfo } from "./components/modal-info";

export function Form() {
  const [showErrorModal, setShowErrorModal] = useState("")
  const { handleViewPDF, dataBillet, handleDataBillet } = useTheme();

  const submit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    let message = ""
    const keys = Object.keys(dataBillet) as keyBillet[];
    const length = keys.length;

    for (let i = 0; i < length; i++) {
      if (keys[i] === "locationPayment" || keys[i] === "instrution") {
        continue;
      }
      if (+ dataBillet.value.replace(/\D/g, "") === 0) {
        message = "Informe o valor das parcelas!";
        break;
      }
      if (!dataBillet.date) {
        message = "Informe a data da primeira parcela!";
        break;
      }
      if (!dataBillet[keys[i]]) {
        message = "Falta alguma informação importante!";
        break;
      }
    }

    if (message) {
      setShowErrorModal(message);
    } else {
      handleViewPDF(true);
    }
  }

  const handleData = ({ target }: ChangeEvent<HTMLInputElement>) => {
    handleDataBillet(target.name as keyBillet, target.value)
  }
  const handleDataInstruction = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    handleDataBillet(target.name as keyBillet, target.value)
  }

  return (
    <div className="App" style={{ width: '100%' }}>
      <div className="" style={{ position: "relative" }}>
        <form className="form container" onSubmit={submit}>
          <div className="" style={{ padding: 16 }}>
            <Input
              value={dataBillet.receiver}
              onChange={handleData}
              label="Benefiário"
              id="receiver"
              // maxLength={25}
              placeholder="Nome de quem vai receber"
            />
            <Input
              value={dataBillet.city}
              onChange={handleData}
              label="Cidade do Recebedor"
              id="city"
              placeholder="Informe a cidade de quem vai receber"
            />
            <Input
              value={dataBillet.locationPayment}
              onChange={handleData}
              label="Local de pagamento"
              id="locationPayment"
              placeholder="Informe um local para pagamento"
            />
            <Input
              value={dataBillet.product}
              onChange={handleData}
              label="Produto / Serviço"
              id="product"
              placeholder="Indentifique o produto ou serviço prestado"
            />
            <Input
              value={dataBillet.value}
              onChange={({ target }) => {
                handleDataBillet(
                  target.name as keyBillet,
                  mascaraMoeda(target.value)
                )
              }}
              label="Valor das Parcelas"
              id="value"
            />
            <Input
              value={dataBillet.pix}
              onChange={handleData}
              label="Chave Pix"
              id="pix"
              placeholder="Informe a chave pix de recebimento"
            />
            <Input
              value={dataBillet.payer}
              onChange={handleData}
              label="Pagador"
              id="payer"
              placeholder="Informe o nome de quem vai pagar"
            />
            <div>
              <Input
                value={dataBillet.qtyInstallments}
                onChange={handleData}
                label="Quantidade de Parcelas"
                id="qtyInstallments"
                type="number"
                min={1}
                placeholder="Informe a quantidade de parcelas"
              />
              <Input
                value={dataBillet.date}
                onChange={handleData}
                label="Primeira Parcela"
                id="date"
                type="date"
              />
            </div>

            <div className="form-control">
              <label htmlFor="">Instruções</label>
              <textarea
                name="instrution"
                id="instrution"
                onChange={handleDataInstruction}
                value={dataBillet.instrution}
                placeholder="Informe as instruções para ajudar no pagamento"
              ></textarea>
            </div>
          </div>

          <div className="button flex flex-center">
            <button className='button-footer flex flex-center'>
              Ver Boleto <PiEyeBold />
            </button>
          </div>
        </form>
      </div>

      <ModalInfo
        message={showErrorModal}
        handleModal={() => setShowErrorModal("")}
        show={!!showErrorModal}
      />
    </div>
  );
}

