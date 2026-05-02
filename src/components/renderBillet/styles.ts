import { StyleSheet } from "@react-pdf/renderer";

const borderColor = "#1e1e1e"

export const styles = StyleSheet.create({
  container: {
    borderBottom: 1,
    borderBottomStyle: "dashed",
    marginVertical: 8,
    paddingBottom: 16
  },
  box: {
    borderBottomWidth: 0.5,
    marginHorizontal: 8,
    marginTop: 5,
    borderColor,
    height: 26,
    paddingRight: 8,
    overflow: "hidden",
    paddingVertical: 4,
  },
  boxMinor: {
    borderColor,
    margin: 0,
    padding: 0,
    paddingTop: 8,
    paddingBottom: 5,
    height: 30,
    paddingHorizontal: 8,
    overflow: "hidden",
    borderBottomWidth: 0.5,
  },
  textTitle: {
    fontSize: 8,
    marginBottom: 4
  },
  textData: {
    fontSize: 10,
    fontWeight: 600,
    flexWrap: "wrap",
  },
  text: {
    fontSize: 10,
    marginBottom: 4
  },
  containerInstuction: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
    marginLeft: 8,
    marginTop: 8,
    marginRight: 0,
    overflow: "hidden",
    width: 408
  },
  flexCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  signature: {
    fontSize: 8,
    borderTopWidth: 1,
    borderTopStyle: "dashed",
    marginTop: 32,
    paddingTop: 4,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%"
  },
});