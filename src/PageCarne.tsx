import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import { parseBoleto, type IInstallmentsContent } from "./create-boleto";
import { RenderBillet } from "./components/renderBillet";
import { useEffect, useState } from "react";
import { type TdataBillet } from "./theme";

// Font.register({
//   // family: 'Oswald',
//   // src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
// });

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: '100%',
    paddingHorizontal: 10,
    marginLeft: 10,
    fontWeight: 300,
    fontFamily: "Helvetica", 
  },
})

export const MyDocument = ({ dataBillet }: { dataBillet: TdataBillet }) => {
  const [data, setData] = useState<IInstallmentsContent[] | null>(null);

  useEffect(() => {
    (async () => {
      const dataBoleto = await parseBoleto(dataBillet);
      if (dataBoleto) {
        setData(dataBoleto)
      }
    })()
  }, [])

  if (!data) {
    return <></>
  }

  return (
      <Document >
        <Page size="A4" style={styles.page}>
          {data.map((el, i) => {
            return <RenderBillet {...el} key={"parcela-"+ el.parcela} />
          })}
        </Page>
      </Document>
  )
};



