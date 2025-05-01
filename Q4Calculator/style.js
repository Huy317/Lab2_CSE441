import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "white",
        borderRadius: 8,
        padding: 16,
        margin: 8,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
    },
    zeroButton: {
        width: "33%",
        backgroundColor: "white",
        borderRadius: 8,
    },
    operatorButton:{
        backgroundColor: "lightgray",
        borderRadius: 8,
        padding: 16,
        margin: 8,
    },
    operatorText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "orange",
        textAlign: "center",
    },
    equalsButton: {
        backgroundColor: "orange",
        borderRadius: 8,
    },
    clearButton: {
        width: "65%",
        backgroundColor: "lightgray",
        justifyContent: "center",
        alignItems: "center",
    },
    display: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    }

});