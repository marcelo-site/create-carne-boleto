import { useState, createContext, type ReactNode } from "react";

const dataInit = {
  receiver: "",
  product: "",
  value: "R$ 0,00",
  locationPayment: "",
  payer: "",
  date: "",
  pix: "",
  city: "",
  instrution: "Abra o app do seu banco e escaneie o qrcode ao lado, ou use a chave pix para efetuar o pagamento",
  qtyInstallments: "10"
}

export type keyBillet = keyof typeof dataInit;
export type TdataBillet = typeof dataInit;

export interface ITheme {
  viewPDF: boolean;
  handleViewPDF: (data: boolean) => void;
  dataBillet: TdataBillet;
  handleDataBillet: (key: keyBillet, value: string) => void;
}

export const ThemeContext = createContext<ITheme>({} as ITheme);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [viewPDF, setViewPDF] = useState(false);
  const [dataBillet, setDataBillet] = useState(dataInit);

  const handleDataBillet = (key: keyBillet, value: string) => {
    setDataBillet((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <ThemeContext.Provider
      value={{
        viewPDF,
        handleViewPDF: setViewPDF,
        dataBillet,
        handleDataBillet
      }}>
      {children}
    </ThemeContext.Provider>
  )
};