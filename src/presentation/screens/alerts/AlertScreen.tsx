import {Alert, Text, View} from 'react-native'
import {CustomView} from '../../components/ui/customView'
import {Title} from '../../components/ui/Title'
import {globalStyles} from '../../../config/theme/theme'
import {Button} from '../../components/ui/Button'
import {showPrompt} from '../../../config/adapters/prompt.adapter'
import {useContext} from 'react'
import {ThemeContext} from '../../context/ThemeContext'

export const AlertScreen = () => {
    const {isDark} = useContext(ThemeContext)

    const createTwoButtonAlert = () =>
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'destructive',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {
                userInterfaceStyle: isDark ? 'dark' : 'light',
            },
        )

    const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ], {
            userInterfaceStyle: isDark ? 'dark' : 'light',
        },)

    const onShowPrompt = () => {
        showPrompt({
            title: 'Titulo',
            subTitle: 'Hola a todos prueba',
            buttons: [
                {text: 'OK', onPress: () => console.log('Quedo la prueba')},
            ],
            placeholder: 'Placeholder',
        })
        // Codigo nativo
        /* Alert.prompt(
            'Correo Electronico',
            'Enim commodo ut emet ese.',
            (valor: string) => console.log({valor}),
            'secure-text',
            'Soy el valor por defecto',
            'number-pad'
        ) */
    }

    return (
        <CustomView style={globalStyles.globalMargin}>
            <Title safe text="Alertas" />
            <Button text="Alerta - 2 Botones" onPress={createTwoButtonAlert} />
            <View style={{height: 10}} />
            <Button
                text="Alerta - 3 Botones"
                onPress={createThreeButtonAlert}
            />
            <View style={{height: 10}} />
            <Button text="Prompt" onPress={onShowPrompt} />
        </CustomView>
    )
}
