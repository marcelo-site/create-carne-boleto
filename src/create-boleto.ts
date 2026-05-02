import { QrCodePix } from "qrcode-pix";
import { isPossivelTelefoneBR } from "./utils/isPossivelTelefoneBR";
import { normalizeTelefonePix } from "./utils/normalizeTelfonePix";

export interface IBoleto {
    receiver: string;
    product: string;
    value: string;
    locationPayment: string;
    payer: string;
    date: string;
    pix: string;
    city: string;
    instrution: string;
    qtyInstallments: string;
}

export interface IInstallmentsContent extends IBoleto {
    parcela: string,
    qrCode: string;
    codePix: string;
}

export const parseBoleto = async (data: IBoleto) => {
    const {
        city,
        date: venc,
        instrution,
        locationPayment,
        payer,
        pix,
        product,
        qtyInstallments,
        receiver,
        value,
    } = data

    let normalizePix = data.pix;

    (() => {
        const isPoistiveTel = isPossivelTelefoneBR(pix)
        if (isPoistiveTel) {
            normalizePix = normalizeTelefonePix(pix) || ""
        }
    })();

    const date = new Date(venc + "T00:00");
    const dayVenc = date.getDate() > 30 ? 30 : date.getDate();
    let monthVenc = date.getMonth();
    let yearVenc = date.getFullYear()
    const installmentsContent: IInstallmentsContent[] = [];

    const valor = Number(value.replace(/\./g, "").replace(",", ".").replace(/R\$/, "").trim());

    for (let i = 0; i < +qtyInstallments; i++) {
        const lastDate = new Date(date.getFullYear(), date.getMonth() + 1 + i, 0).getDate();
        const dateCur = new Date(
            yearVenc,
            monthVenc,
            lastDate > dayVenc ? dayVenc : lastDate
        );

        if (++monthVenc > 11) {
            monthVenc = 0
            yearVenc++
        }

        const qrCodePix = QrCodePix({
            version: '01',
            key: normalizePix,
            name: receiver,
            city: city,
            transactionId: `${i + 1}de${qtyInstallments}${product.replace(/\s/g, "")}`.substring(0, 25),
            message: `Parcela ${i + 1} de ${qtyInstallments} - ${product}`,
            value: valor
        })

        const rawPixStr = qrCodePix.payload();
        const qrCodeBase64 = await qrCodePix.base64();

        installmentsContent.push({
            receiver,
            product,
            value,
            locationPayment,
            payer,
            date: `${String(dateCur.getDate()).padStart(2, "0")}/${String(dateCur.getMonth() + 1).padStart(2, "0")}/${dateCur.getFullYear()}`,
            qrCode: qrCodeBase64,
            codePix: rawPixStr,
            pix: pix,
            instrution,
            parcela: String(i + 1),
            qtyInstallments,
            city
        })
    }

    return installmentsContent
}