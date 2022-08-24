import React from "react";
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet, ScrollView, Dimensions } from "react-native";
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
import NewsCard from './components/NewsCard';
import NewsBanner from "./components/NewsBanner/NewsBanner";

function App () {

  const renderNews = ({item}) => <NewsCard news = {item} />
  const keyId = (item) => item.u_id.toString()
  const bannerNew = ({item}) => <NewsBanner banner = {item} /> 

  return(
    <SafeAreaView style = {styles.container} >
      <Text style={styles.header_text} >News</Text>
      <FlatList
        // ListHeaderComponent={() => (<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        //   {
        //     news_banner_data.map(bannerNews => <Image style = {styles.banner_image} source = {{uri: bannerNews.imageUrl}} />)
        //   }
        // </ScrollView>)}
        ListHeaderComponent={bannerNew}
        key = {NewsBanner.id}
        //keyExtractor={(item, index) => item.u_id.toString()} 
        keyExtractor={keyId}
        data = {news_data}
        // renderItem = {({item}) => <NewsCard news = {item} /> } bu kullanımda fonksiyon her seferinde yeniden üretilir bunun yerine yukarda renderNews const' ı oluşturarak bir kere üretip öyle kullanırız
        renderItem = {renderNews}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#eceff1',
  },
  // banner_image: {
  //   height: Dimensions.get('window').height / 5,
  //   width: Dimensions.get('window').width / 2,
  // },
  header_text: {
    fontWeight: 'bold',
    fontSize: 50
  }
})

export default App;