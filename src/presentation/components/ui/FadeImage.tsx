import {useState} from 'react'
import {
    ActivityIndicator,
    Animated,
    ImageStyle,
    StyleProp,
    Text,
    View,
} from 'react-native'
import {useAnimation} from '../../hooks/useAnimation'

interface Props {
    uri: string
    style?: StyleProp<ImageStyle>
}

export const FadeImage = ({uri, style}: Props) => {
    const {animatedOpacity, fadeIn} = useAnimation()
    const [isLoading, setisLoading] = useState(true)

    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {isLoading && (
                <ActivityIndicator
                    style={{position: 'absolute'}}
                    color="grey"
                    size={30}
                />
            )}
            <Animated.Image
                source={{uri}}
                style={[style, {opacity: animatedOpacity}]}
                onLoadEnd={() => {
                    fadeIn({})
                    setisLoading(false)
                }}
            />
        </View>
    )
}
