import { Text, View } from "@react-pdf/renderer";
import type { IInstallmentsContent } from "../../create-boleto";
import { styles } from "./styles";
import { QRCode } from "../qrcode";
import { OptionsPayment } from "./optionsPayment";
import { BoxInfo } from "../box-info";
import { NumberParcel } from "../number-parcel";

export const RenderBillet = (data: IInstallmentsContent) => {
  const {
    parcela,
    qrCode,
    date,
    instrution,
    payer,
    locationPayment,
    pix,
    product,
    qtyInstallments,
    receiver,
    value,
  } = data;

  return (
    <View wrap={false} style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: '30%', borderRight: 1, borderRightStyle: "dashed", height: 208 }}>

          <BoxInfo title="Beneficário" data={receiver} />
          <BoxInfo title="Produto / Serviço" data={product} />
          <BoxInfo title="Valor" data={value} />

          <View style={{
            flexDirection: "row",
            borderBottomWidth: 0,
            alignItems: "flex-start",
            marginLeft: 8,
            marginTop: 10
          }}
          >
            <Text style={{ ...styles.text, marginRight: 4 }}>Recebido:</Text>
            <Text style={styles.textData}>______/______/______</Text>
          </View>
          <View style={{
            ...styles.box,
            position: "relative",
            borderBottomWidth: 0,
            height: 80,
            marginRight: 0,
            paddingRight: 8,
          }}
          >
            <OptionsPayment />

            <View style={styles.signature}>
              <Text style={{ textAlign: "center", width: "100%"}}>Assinatura</Text>
            </View>

          </View>
          <View style={{ marginBottom: -10, paddingTop: 9 }}>
            <NumberParcel parcel={parcela} qtyParcel={qtyInstallments} />
          </View>
        </View>

        <View style={{ width: '70%' }}>
          <BoxInfo title="Local de pagamento" data={locationPayment} />
          <BoxInfo title="Pagador" data={payer} />
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10
            }}
          >
            <BoxInfo title="Valor" data={value} minor paddingLeft={0} />
            <BoxInfo title="Vencimento" data={date} minor />
            <BoxInfo
              title="Produto / Serviço"
              data={product}
              minor
              borderRight={0}
              width={280}
            />
          </View>

          <View style={styles.containerInstuction} >
            <View style={{ width: "100%", flexDirection: "row" }}>
              <View
                style={{ width: "70%", justifyContent: "space-between", height: 100 }}
              >
                <View>
                  <Text style={styles.textTitle}>Instrucões</Text>
                  <Text style={{ ...styles.textData }}>{instrution}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ ...styles.text }}>Chave Pix: </Text>
                  <Text style={{ ...styles.textData }}> {pix.replace("+55", "")}</Text>
                </View>
              </View>
              <QRCode qrcode={qrCode} />
            </View>
          </View>
          <View style={{ marginBottom: -28, paddingTop: 8 }}>
            <NumberParcel parcel={parcela} qtyParcel={qtyInstallments} />
          </View>
        </View>
      </View>
    </View>
  )
}


