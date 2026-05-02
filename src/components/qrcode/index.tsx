import { Image, StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    qrcode: {
        width: 96,
        height: 96,
        gap: 8,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center"
    }
});

export interface IQRCode {
    qrcode: string
}

export const QRCode = ({ qrcode }: IQRCode) => {
    return (
        <View style={{ width: 96, gap: 8, marginLeft: 8 }}>
            <Image
                style={styles.qrcode}
                src={qrcode}
            />
        </View>
    )
}