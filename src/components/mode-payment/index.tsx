import { Text, View } from "@react-pdf/renderer"
import { styles } from "../renderBillet/styles"

export interface IModePayment {
    data: {
        mode: string;
        width: string | number;
    }[]
}

export const ModePayment = ({ data }: IModePayment) => {
    return (
        <View style={{ ...styles.flexCenter, gap: 12 }}>
            {data.map(({ mode, width }) => {
                return (
                    <View 
                    key={mode}
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: width,
                        gap: 4
                    }}>
                        <Text style={styles.text}>{mode}</Text>
                        <Text style={styles.text}>[{"   "}]</Text>
                    </View>
                )
            })}
        </View>
    )
}