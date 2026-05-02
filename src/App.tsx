import './App.css';
import './index.css';
import { MyDocument } from './PageCarne';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { Form } from './Form';
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdOutlineDownload } from "react-icons/md";
import { IoArrowUndoOutline } from "react-icons/io5";
import { useTheme } from './utils/useTheme';
import { Buffer } from 'buffer';

// @ts-expect-error
window.Buffer = window.Buffer ?? Buffer;

function App() {
  const { viewPDF, handleViewPDF, dataBillet } = useTheme();

  return (
    <main className='flex flex-column container'>
      <div className='flex flex-column flex-center stripe'>
        <div className='flex flex-center logo-container'><FaMoneyCheckDollar /> Carnê</div>
      </div>
      {!viewPDF ? (
        <div className='container' style={{ height: "90dvh", overflowY: "auto" }}>
          <Form />
        </div>
      ) : (
        <div
          style={{ height: '90dvh' }}
        >
          <div style={{ height: "calc(100% - 56px)", width: "100%", margin: "auto" }}>
            <PDFViewer
              style={{ height: '100%', width: '100%' }}
            >
              <MyDocument dataBillet={dataBillet} />
            </PDFViewer>
          </div>

          <div className="button flex flex-center">
            <button
              onClick={() => handleViewPDF(false)}
              className='button-footer flex flex-center'
            >
              <IoArrowUndoOutline />
              Voltar
            </button>
            <PDFDownloadLink
              fileName={"carne_" + dataBillet.product.replace(/\s/g, "-")}
              document={<MyDocument dataBillet={dataBillet} />}
              className='button-footer flex flex-center'
            >
              Baixar Boleto <MdOutlineDownload />
            </PDFDownloadLink>
          </div>
        </div>
      )}
    </main>
  )
}

export default App
