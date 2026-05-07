import { Text } from "@react-pdf/renderer";
import { styles } from "../renderBillet/styles";

interface INumberParcel {
    parcel: string;
    qtyParcel: string
}

export const NumberParcel = ({parcel, qtyParcel}:INumberParcel ) => {
    return (
          <Text style={{ ...styles.textTitle, textAlign: "center" }}>{+qtyParcel > 1 ? `${parcel} de ${qtyParcel}`: 'única'}</Text>
    )
}