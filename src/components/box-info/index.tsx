import { Text, View } from "@react-pdf/renderer";
import { styles } from "../renderBillet/styles";

interface IBox {
    title: string;
    data: string;
    minor?: boolean
    borderRight?: number
    width?: string | number
    paddingLeft?: string | number
}

export const BoxInfo = ({
    title,
    data,
    minor,
    borderRight = 0.5,
    width = "auto",
    paddingLeft = "inherit"
}: IBox) => {
    return (
        <View wrap={false} style={minor ?
            {
                ...styles.boxMinor,
                borderRight,
                width,
                paddingLeft
            } : {
                ...styles.box,
                width
            }}>
            <Text style={styles.textTitle}>{title}</Text>
            <Text style={{
                ...styles.textData
            }} wrap={false}>{data}</Text>
        </View>
    )
}