import React from 'react'
import { Page, View, Image, Text, StyleSheet, Document } from '@react-pdf/renderer'
import NumberFormat from "react-number-format";
import { Font } from '@react-pdf/renderer'
Font.register({
    family: 'Roboto',
    fonts: [
        {
            src: `/font/Roboto-Regular.ttf`
        },
        {
            src: `/font/Roboto-Bold.ttf`,
            fontWeight: 'bold'
        },
        {
            src: `/font/Roboto-Italic.ttf`,
            fontWeight: 'normal',
            fontStyle: 'italic'
        },
        {
            src: `/font/Roboto-BoldItalic.ttf`,
            fontWeight: 'bold',
            fontStyle: 'italic'
        }
    ]
})
const styles = StyleSheet.create({
    body: {
        width: '450px',
        backgroundColor: '#2A4372'
    },
    title: {
        fontSize: 40,
        margin: 'auto',
        marginBottom: '15px',
        fontFamily: 'Roboto',
        color: '#ffff'
    },
    author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
        fontFamily: 'Roboto'
    },
    text: {
        margin: 0,

        fontSize: 25,
        color: '#ffff',
        textAlign: 'justify',
        fontFamily: 'Roboto'

    },
    textCard: {
        margin: 0,

        fontSize: 20,
        textAlign: '',
        fontFamily: 'Roboto'
    },
    alertTextBody: {


    },
    textTitleCard: {
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    card: {
        marginTop: '15px',
        backgroundColor: '#ffff',
        width: '100%',
        heigth: '100%',
        borderRadius: '8px',
        padding: '15px 24px',
        color: '#18305D'
    },
    textAlert: {
        fontSize: 15.5,
        color: '#ffff',
        textAlign: 'justify',
        width: '400px',
        fontFamily: 'Roboto'
    },
    textAmount: {
        margin: 0,
        fontSize: 25,
        color: '#81D858',
        textAlign: 'center',
        fontFamily: 'Roboto'
    },
    image: {
        margin: 'auto',
        marginTop: '3px',
        marginBottom: '10px',
        width: '120px',
        heigth: '120px'
    },
    imageRow: {
        margin: 'auto',
        width: '49px',
        height: '44px',
        marginRight: '20px',
        marginLeft: '20px'
    },
    amountBody: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',

    },

    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
});
const FacturaPDF = ({ dataConvert, dataUser, rate, dateTransaccion }) => {

    return (
        <Document>
            <Page style={styles.body}>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "row", flexWrap: 'wrap', flex: 1 }}>
                    <View style={{ margin: 'auto', width: '500px' }}>

                        <Image
                            style={styles.image}
                            src="https://i.ibb.co/YXWCRt9/Nuwy.png"
                        />
                        <Image
                            style={styles.image}
                            src="https://i.ibb.co/sqrzcFC/Group-34.png"
                        />
                        <View style={{ margin: 'auto' }}>

                            <Text style={styles.title}>
                                Transacción exitosa
                            </Text>
                        </View>
                        <View style={styles.amountBody}>
                            <View >

                                <Text style={styles.text}>Monto transferido</Text>
                                <View style={{ margin: 'auto' }}><Text style={styles.textAmount}>$<NumberFormat
                                    value={dataConvert.emisor.value}
                                    displayType="text"
                                    thousandSeparator="."
                                    decimalSeparator=","

                                /> CLP</Text></View>
                            </View>

                            <View>
                                <Image style={styles.imageRow} src="https://i.ibb.co/hRyZmsh/Vector.png" />
                            </View>
                            <View>

                                <Text style={styles.text}>Receptor recibirá</Text>
                                <View style={{ margin: 'auto' }} ><Text style={styles.textAmount}>$
                                    <NumberFormat
                                        value={dataConvert.receptor.value}
                                        displayType="text"
                                        thousandSeparator="."
                                        decimalSeparator=","

                                    /> COP</Text></View>
                            </View>

                        </View>


                        <View >
                            <View style={{ display: 'flex', flexDirection: "row", justifyContent: 'end', margin: 'auto', marginTop: '15px', alignItems: 'center', width: '500px' }}>

                                <View style={{ marginRight: '20px' }} >
                                    <Image src="https://i.ibb.co/7Y2k8Dv/Group-27.png" style={{ width: '50px' }} />

                                </View>
                                <View style={styles.alertTextBody}>

                                    <Text style={styles.textAlert}><Text style={{ color: '#5DAD1F', fontWeigth: 'bold' }}>Luego de verificar la información</Text> nos tomará un tiempo realizar la transferencia,
                                        al momento de realizarla te notificaremos a tu correo</Text>
                                </View>


                            </View>

                        </View>

                        <View style={styles.card}>
                            <View style={{ display: 'flex', flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.textTitleCard} >Detalle de la transacción</Text>
                            </View>

                            <View style={{ flexDirection: "row", display: 'flex', justifyContent: 'space-between' }}>
                                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: "row", flexWrap: 'wrap', paddingRight: '10px' }}>

                                    <View style={{ width: '50%', marginTop: '20px' }}><Text style={{ textAlign: 'start', fontSize: 14, fontFamily: 'Roboto', fontWeight: 'bold' }}>Enviaste</Text></View>
                                    <View style={{ width: '50%', marginTop: '20px' }}><Text style={{ textAlign: 'start', fontSize: 12 }}>$ <NumberFormat
                                        value={dataConvert.emisor.value}
                                        displayType="text"
                                        thousandSeparator="."
                                        decimalSeparator=","

                                    /> CLP</Text></View>



                                    <View style={{ width: '50%', marginTop: '15px' }}><Text style={{ textAlign: 'start', fontSize: 14, fontFamily: 'Roboto', fontWeight: 'bold' }}>Recibirá</Text></View>
                                    <View style={{ width: '50%', marginTop: '15px' }}><Text style={{ textAlign: 'start', fontSize: 12 }}>$ <NumberFormat
                                        value={dataConvert.receptor.value}
                                        displayType="text"
                                        thousandSeparator="."
                                        decimalSeparator=","

                                    /> {dataConvert.receptor.country}</Text></View>

                                    <View style={{ width: '50%', marginTop: '15px' }}><Text style={{ textAlign: 'start', fontSize: 14, fontFamily: 'Roboto', fontWeight: 'bold' }}>Tipo de cuenta</Text></View>
                                    <View style={{ width: '50%', marginTop: '15px' }}><Text style={{ textAlign: 'start', fontSize: 12 }}>{dataUser.DatosReceptor.tipoCuenta}</Text></View>

                                </View>
                                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: "row", flexWrap: 'wrap' }}>

                                    <View style={{ width: '50%', marginTop: '20px' }}><Text style={{ textAlign: 'start', fontSize: 14, fontFamily: 'Roboto', fontWeight: 'bold' }}>Tipo de cambio</Text></View>
                                    <View style={{ width: '50%', marginTop: '20px' }}><Text style={{ textAlign: 'start', fontSize: 12 }}><NumberFormat
                                        value={rate}
                                        displayType="text"
                                        thousandSeparator="."
                                        decimalSeparator=","

                                    /></Text></View>



                                    <View style={{ width: '50%', marginTop: '15px' }}><Text style={{ textAlign: 'start', fontSize: 14, fontFamily: 'Roboto', fontWeight: 'bold' }}>Banco</Text></View>
                                    <View style={{ width: '50%', marginTop: '15px' }}><Text style={{ textAlign: 'start', fontSize: 12 }}>{dataUser.DatosReceptor.banco}</Text></View>

                                    <View style={{ width: '50%', marginTop: '15px' }}><Text style={{ textAlign: 'start', fontSize: 14, fontFamily: 'Roboto', fontWeight: 'bold' }}>Nº de cuenta</Text></View>
                                    <View style={{ width: '50%', marginTop: '15px' }}><Text style={{ textAlign: 'start', fontSize: 12 }}>{dataUser.DatosReceptor.nCuenta}</Text></View>


                                </View>


                            </View>
                            <View style={{ display: 'flex', flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>

                                <View style={{ marginTop: '15px',marginRight:'10px' }}><Text style={{ textAlign: 'center', fontSize: 14, fontFamily: 'Roboto', fontWeight: 'bold' }}>Fecha transacción:</Text></View>
                                <View style={{ marginTop: '15px' }}><Text style={{ textAlign: 'center', fontSize: 12 }}>{dateTransaccion}</Text></View>
                            </View>
                        </View>



                    </View>
                </View>

            </Page>
        </Document>
    )
}

export default FacturaPDF