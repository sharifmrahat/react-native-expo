import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={{fontWeight: 'bold', marginVertical: 20}}>Welcome to React Native</Text>
      <StatusBar style="auto" />

      <View style={{width: 200, height: 200, backgroundColor: 'red'}}/>
{/* 
      <View style={{width: 100, height: 200, backgroundColor: 'blue'}}/> */}
      <Text style={{fontSize: 20, marginVertical: 20}}>Hello World</Text>
      
      <Image source={require('./assets/adaptive-icon.png')} style={{width: 200, height: 200, borderWidth: 2, borderColor: 'gray', borderRadius: 20}}/>

      <Image source={{uri: 'https://picsum.photos/seed/picsum/200/300'}} style={{width: 300, height: 200, marginVertical: 20}}/>
      <Text style={styles.textContainer}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro modi quae praesentium architecto numquam? Voluptatibus rerum quos deserunt vero, placeat a aperiam beatae corporis corrupti, libero, similique harum asperiores alias enim non dolores qui vitae impedit? Tempore vel dolor vero adipisci magnam atque ipsum culpa, itaque, quidem ullam laboriosam omnis repellendus vitae, nostrum libero ea id aperiam quam accusamus sequi voluptatum veritatis fugit eos beatae? Nostrum quos eum quidem consequatur molestias repellendus quisquam ad, consectetur corporis velit odit, labore dolorum corrupti, officia excepturi voluptatibus? Magnam veniam qui sunt quisquam nemo, rerum, nulla veritatis dolorem culpa ratione minima amet ea aspernatur sequi vel in cumque voluptatibus recusandae? Tempore ipsa modi odio dolores nobis iure? Sunt et quae nemo, ut deserunt iste illo deleniti, eaque, eos nobis quos repellat dicta cumque vitae magni consectetur dolor tenetur voluptatem incidunt officiis provident vero facilis. Soluta incidunt veniam modi labore ea alias doloremque atque voluptatum rerum! Voluptatem, enim eius. Corporis perspiciatis ducimus totam quo et dolorem odit sint praesentium, aperiam earum voluptas nobis rem harum. Cum reprehenderit quo totam itaque commodi deleniti ad sit temporibus. Dolorum dicta assumenda ea non et quos saepe nulla aspernatur consequuntur neque. Autem accusamus ab veritatis sed, voluptate officia quas fuga ad adipisci. Repudiandae illum laborum, velit facilis nulla modi nihil. Maiores nobis voluptatibus repudiandae, quam reiciendis a consequatur fugiat mollitia ipsum laudantium dignissimos eum aspernatur molestias cumque. Amet, natus quis ad libero consequatur tenetur quae dolorum quam iure, nostrum delectus incidunt dolore! Deserunt non, autem fuga hic consectetur harum! Fugiat, laborum accusantium vitae perspiciatis at id dolorem soluta consequatur! Beatae eveniet dolore sapiente repudiandae mollitia exercitationem. Consequatur minima sequi saepe ut a, inventore accusamus nemo at id quos est explicabo illo non odit enim vero tempora voluptas aliquid. Commodi quibusdam maiores quis quos saepe blanditiis quasi, adipisci laboriosam excepturi, cupiditate cum, iure ratione error quod. Ducimus possimus molestias beatae nisi in debitis dolorem adipisci. Enim distinctio provident earum sint voluptates, sunt doloribus id maiores pariatur dolore a ut at facere ducimus ab quasi velit eius suscipit, deleniti facilis! Fuga dolores similique molestias nesciunt consequuntur. Repellat ex pariatur, assumenda tenetur suscipit molestiae itaque numquam, sunt sed aut ipsam atque et quos impedit fuga quae totam esse quas rem consectetur velit repudiandae laboriosam molestias! Molestias animi laborum distinctio, ullam ipsam ex illo sequi possimus, ab culpa eos quod atque veniam, repellendus dicta commodi dolor! Nostrum consequuntur rem pariatur aut sit numquam aspernatur eius velit, provident expedita molestias itaque rerum. Deserunt earum molestiae nisi inventore. Deleniti dolore iste ullam eligendi maiores corporis odio earum velit sequi impedit explicabo at magni, quod culpa excepturi saepe libero perspiciatis enim, cupiditate alias! Commodi, consectetur. Facilis temporibus facere consectetur fugiat soluta, placeat consequatur reiciendis possimus aperiam voluptatum mollitia voluptatibus adipisci explicabo in autem minus iste aspernatur iusto. Accusamus sed libero ea est possimus ipsum dolorum delectus voluptatem veritatis sunt! Error quasi qui praesentium provident at officia labore laudantium. Fuga quibusdam, error repudiandae aut itaque totam reprehenderit molestias autem praesentium, temporibus repellat nisi perferendis quisquam saepe! Cum?
      </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginVertical: 20,
    padding: 20,
    textAlign: 'justify'
  }
});
