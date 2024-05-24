import {Animated, Pressable, StyleSheet, Text, View, Easing} from 'react-native'
import {colors} from '../../../config/theme/theme'
import {useAnimation} from '../../hooks/useAnimation'

export const Animation101Screen = () => {
    const {
        fadeIOut,
        fadeIn,
        animatedOpacity,
        animatedTop,
        startMovingTopPosition,
    } = useAnimation()

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.purpleBox,
                    {
                        opacity: animatedOpacity,
                        transform: [
                            {
                                translateY: animatedTop,
                            },
                        ],
                    },
                ]}
            />
            <Pressable
                onPress={() => {
                    fadeIn({})
                    startMovingTopPosition({
                        initialPosition: -100,
                        easing: Easing.elastic(1),
                        duration: 750
                    })
                }}
                style={{marginTop: 10}}>
                <Text>FadeIn</Text>
            </Pressable>
            <Pressable onPress={() => fadeIOut({})} style={{marginTop: 10}}>
                <Text>FadeOut</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    purpleBox: {
        backgroundColor: colors.primary,
        width: 150,
        height: 150,
    },
})
