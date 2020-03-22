import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    ScrollView,
    Animated
} from 'react-native';
import {
    Block,
    Text,
    Button,
    Utils
} from 'expo-ui-kit';

import { images, theme } from '../constants';
const { background } = images;

const backgrounds = [
    {
        title: 'Secured, forever.',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
        img: background.welcome
    },
    {
        title: 'Secured, forever.',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
        img: background.encrypted
    },
    {
        title: 'Secured, forever.',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
        img: background.privacy
    }
];

const { rgba } = Utils;
const { SIZES, COLORS } = theme;

class Welcome extends Component {
    scrollX = new Animated.Value(0);

    renderImages() {
        return (
            <ScrollView 
                horizontal
                pagingEnabled
                scrollEnabled
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToAlignment='center'
                showsHorizontalScrollIndicator={false}
                onScroll={
                    Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: this.scrollX
                                }
                            }
                        }
                    ])
                }
            >
                {backgrounds.map((item, index) => {
                    return (
                        <Block key={`img-${index}`} center bottom style={{
                            width: SIZES.width
                        }}>
                            <Image 
                                source={item.img} 
                                resizeMode='center' 
                                style={{
                                    width: SIZES.width / 1.5,
                                    height: '100%'
                                }}
                            />
                        </Block>
                    )
                })}
            </ScrollView>
        )
    }

    renderDots() {
        const dotPosition = Animated.divide(this.scrollX, SIZES.width);
        return (
            <Block flex={false} row center middle margin={[SIZES.padding, 0, SIZES.padding * 2, 0]}>
                {
                    backgrounds.map((item, index) => {
                        const opacity = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        });
                        return (
                            <Block
                                key={`dot-${index}`} 
                                gray
                                animated
                                flex={false} 
                                color={COLORS.gray} 
                                margin={[0, SIZES.small / 2]} 
                                radius={SIZES.small} 
                                style={[styles.dot, { opacity }]} 
                            />
                        )
                    })
                }
            </Block>
        )
    }

    render() {
        const { navigation } = this.props;
        return (
            <Block safe>
                <Block center middle>
                    {this.renderImages()}
                </Block>
                <Block flex={false} center bottom margin={[60]}>
                    <Text h3 semibold theme={theme}>Secured. forever</Text>
                    <Text theme={theme} center subtitle gray margin={[SIZES.small, 0]}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                    </Text>
                    {this.renderDots()}
                    <Button
                        primary 
                        theme={theme} 
                        style={{
                            borderRadius: 30
                        }}
                        onPress={() => navigation.navigate('VPN')}
                    >
                        <Text center white bold caption margin={[SIZES.padding / 2, SIZES.padding * 2]}>GET STARTED</Text>
                    </Button>
                </Block>
            </Block>
        )
    }
}

const styles = StyleSheet.create({
    dot: { 
        width: SIZES.base, 
        height: SIZES.base
    }
});

export default Welcome;