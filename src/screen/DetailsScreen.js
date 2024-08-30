import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import { ScrollView } from 'react-native-gesture-handler';

const DetailsScreen = ({ route, navigation }) => {
    const { state, editBlogPost } = useContext(Context);
    const { id } = route.params;

    const blogPost = state.find(blogpost => blogpost.id === id);

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}>Edit Title</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={setTitle}
                />

                <Text style={styles.text}>Edit Content</Text>
                <TextInput
                    style={[styles.input, styles.contentInput]}
                    value={content}
                    onChangeText={setContent}
                    multiline
                    numberOfLines={6} 
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Save Changes"
                        onPress={() => {
                            editBlogPost(id, title, content, () => {
                                navigation.navigate('ShowScreen', { id });
                            });
                        }}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 5,
        marginVertical: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        // position: 'absolute',
        bottom: 'auto',
        left:'auto',
        right: 'auto'
    },
    contentInput: {
        height: 'auto', // Adjust height as needed
    },
});

export default DetailsScreen;
