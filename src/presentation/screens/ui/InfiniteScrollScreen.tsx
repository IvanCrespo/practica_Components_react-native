import {useState} from 'react'
import {CustomView} from '../../components/ui/customView'
import {Title} from '../../components/ui/Title'
import {FlatList} from 'react-native-gesture-handler'
import {ActivityIndicator, Image, Text, View} from 'react-native'
import {colors} from '../../../config/theme/theme'
import { FadeImage } from '../../components/ui/FadeImage'

export const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])

    const loadMore = () => {
        // TODO: Añadir número a nuestro arreglo
        const newArray = Array.from({length: 5}, (_, i) => numbers.length + i)
        setTimeout(() => {
            setNumbers([...numbers, ...newArray])
        }, 3000)
    }

    return (
        <View style={{backgroundColor: 'black'}}>
            <FlatList
                data={numbers}
                renderItem={({item}) => <ListItem number={item} />}
                onEndReached={loadMore}
                onEndReachedThreshold={0.6}
                keyExtractor={item => item.toString()}
                ListFooterComponent={() => (
                    <View style={{height: 150, justifyContent: 'center'}}>
                        <ActivityIndicator size={40} color={colors.primary} />
                    </View>
                )}
            />
        </View>
    )
}

interface ListItemProps {
    number: number
}

const ListItem = ({number}: ListItemProps) => {
    return (
        /* <Image
            source={{uri: `https://picsum.photos/id/${number}/500/400`}}
            style={{height: 400, width: '100%'}}
        /> */
        <FadeImage uri={`https://picsum.photos/id/${number}/500/400`} style={{height: 400, width: '100%'}}/>
    )
}
