import React from "react";
import { ScrollView, Image, StyleSheet } from "react-native";
import news_banner_data from '../../news_banner_data.json';
import styles from './NewsBanner.style';

const NewsBanner = ({banner}) => {
    return (
        <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false} >
            {
                news_banner_data.map(bannerNews => <Image style = {styles.banner_image} source = {{uri: bannerNews.imageUrl }} />)
            }
        </ScrollView>
    )
}
export default NewsBanner;
