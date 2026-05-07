import { View } from "@react-pdf/renderer"
import { ModePayment } from "../mode-payment"

export const OptionsPayment = () => {
  return (
    <View style={{ marginTop: 6, gap: 8 }}>
      <ModePayment data={[{
        mode: "Espécie",
        width: "40%"
      },
      {
        mode: "Transferência",
        width: "60%"
      }]}
      />

      <ModePayment data={[{
        mode: "Pix",
        width: "40%"
      },
      {
        mode: "Outros",
        width: "60%"
      }]}
      />
    </View>
  )
}